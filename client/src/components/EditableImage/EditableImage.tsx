import React, { useState } from 'react';

import CircularProgress from '@material-ui/core/CircularProgress';
import Snackbar from '@material-ui/core/Snackbar';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import MuiAlert from '@material-ui/lab/Alert';

import vintagejs from 'vintagejs';

import IntensitySliderContainer from '../../containers/IntensitySliderContainer';

import Form from '../Form/Form';

import { EFFECTS_SETTINGS, UNCONTROLLED_EFFECTS_NAMES, INITIAL_INTENSITY } from '../../constants';

import styles from './EditableImage.module.css';

interface EditableImageProps {
  effect: string,
  intensity: number | number[],
}

const Alert = props => <MuiAlert elevation={6} variant="filled" {...props} />;

const EditableImage: React.FC<EditableImageProps> = ({ effect, intensity }: EditableImageProps) => {
  const [isLoading, setLoading] = useState<boolean>(false);
  const [isWrong, setWrong] = useState<boolean>(false);
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

  const setWrongWithDelay = () => setTimeout(() => setWrong(true), 500);

  const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>, URL: string) => {
    event.preventDefault();
    setModifiedURL('');
    setOriginalURL('');
    setLoading(true);
    setWrong(false);


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
        setLoading(false);
      })
      .catch(setWrongWithDelay);
  };

  const handleClose = () => {
    setWrong(false);
    setLoading(false);
  };

  return (modifiedURL || originalURL || isLoading) && !isWrong ? (
    <>
      <div className={styles.imageContainer}>
        {isLoading ? (
          <CircularProgress className={styles.loader} color="secondary" />
        ) : (
          <Paper className={styles.imagePaper}>
            <img
              className={styles.image}
              alt="Редактируемое изображение"
              src={modifiedURL || originalURL}
            />
            {!UNCONTROLLED_EFFECTS_NAMES.includes(effect) ? <IntensitySliderContainer /> : null}
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
    </>
  ) : (
    <>
      <Form onSubmit={handleSubmit} />
      <Snackbar open={isWrong} autoHideDuration={3000} onClose={handleClose}>
        <Alert variant="filled" severity="error">Неправильный URL. Попробуйте снова.</Alert>
      </Snackbar>
    </>
  );
};

export default EditableImage;
