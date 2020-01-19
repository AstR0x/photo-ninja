import React, { useState } from 'react';

import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import vintagejs from 'vintagejs';

import IntensitySliderContainer from '../../containers/IntensitySliderContainer';


import Form from '../Form/Form';
import Loader from '../Loader/Loader';

import { EFFECTS_SETTINGS, UNCONTROLLED_EFFECTS_NAMES, INITIAL_INTENSITY } from '../../constants';

import styles from './EditableImage.module.css';

interface EditableImageProps {
  effect: string,
  intensity: number | number[],
}

const EditableImage: React.FC<EditableImageProps> = ({ effect, intensity }: EditableImageProps) => {
  const [isLoading, setLoading] = useState<boolean>(false);
  const [originalURL, setOriginalURL] = useState<string>('');
  const [modifiedURL, setModifiedURL] = useState<string>('');

  if (originalURL) {
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

  const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>, URL: string) => {
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
        setModifiedURL('');
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
            <div className={styles.downloadLinkContainer}>
              <Button
                variant="contained"
                color="primary"
                size="small"
              >
                <a
                  className={styles.downloadLink}
                  href={modifiedURL || originalURL}
                  download="image.jpg"
                >
                  Сохранить изображение
                </a>
              </Button>
            </div>
          </Paper>
        )}
      </div>
      <Form onSubmit={handleSubmit} />
      {!UNCONTROLLED_EFFECTS_NAMES.includes(effect) ? <IntensitySliderContainer /> : null}
    </>
  ) : <Form onSubmit={handleSubmit} />;
};

export default EditableImage;
