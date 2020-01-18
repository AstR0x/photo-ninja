import React, { useState } from 'react';

import Paper from '@material-ui/core/Paper';
import vintagejs from 'vintagejs';

import IntensitySliderContainer from '../../containers/IntensitySliderContainer';

import Form from '../Form/Form';
import Loader from '../Loader/Loader';

import { EFFECTS_SETTINGS, UNCONTROLLED_EFFECTS_NAMES, INITIAL_INTENSITY } from '../../constants';

import styles from './EditableImage.module.css';

interface Props {
  effect: string,
  intensity: number | number[],
}

const EditableImage = ({ effect, intensity }: Props) => {
  const [isLoading, setLoading] = useState(false);
  const [originalURL, setOriginalURL] = useState(null);
  const [modifiedURL, setModifiedURL] = useState(null);

  if (originalURL !== null) {
    const controlledSettings = EFFECTS_SETTINGS[effect];

    if (!controlledSettings.screen) {
      controlledSettings[effect] = intensity || INITIAL_INTENSITY;
    } else {
      controlledSettings.screen.a = intensity || INITIAL_INTENSITY;
    }

    vintagejs(originalURL, controlledSettings)
      .then(res => res.getDataURL())
      .then(url => setModifiedURL(url));
  }

  const handleSubmit = (event: any, URL: string) => {
    event.preventDefault();

    setLoading(true);

    fetch('http://localhost:5000', {
      method: 'POST',
      mode: 'cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ URL, controlledSettings: {} }),
    }).then(response => response.json())
      .then(({ code }) => {
        setOriginalURL(code);
        setModifiedURL(null);
        setLoading(false);
      });
  };

  return modifiedURL || originalURL || isLoading ? (
    <>
      <div className={styles.imageContainer}>
        {isLoading ? (
          <Loader />
        ) : (
          <Paper className={styles.imagePaper}>
            <img
              className={styles.image}
              alt="Редактируемое изображение"
              src={modifiedURL || originalURL}
            />
          </Paper>
        )}
      </div>
      <Form onSubmit={handleSubmit} />
      {!UNCONTROLLED_EFFECTS_NAMES.includes(effect) ? <IntensitySliderContainer /> : null}
    </>
  ) : <Form onSubmit={handleSubmit} />;
};

export default EditableImage;
