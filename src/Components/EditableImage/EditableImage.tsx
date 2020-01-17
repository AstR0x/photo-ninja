import React, { Component } from 'react';

import Paper from '@material-ui/core/Paper';
import vintagejs from 'vintagejs';

import IntensitySliderContainer from '../../containers/IntensitySliderContainer';

import Form from '../Form/Form';
import Loader from '../Loader/Loader';

import { EFFECTS_SETTINGS, UNCONTROLLED_EFFECTS_NAMES, INITIAL_INTENSITY } from '../../constants';

import styles from './EditableImage.module.css';

interface Props {
  effect: string,
  intensity: number,
}

class EditableImage extends Component<{ effect: string, intensity: number | number[] }, {}> {
  state = {
    isLoading: false,
    originalURL: null,
    modifiedURL: null,
  };

  UNSAFE_componentWillReceiveProps({ effect, intensity }: Props) {
    const { originalURL } = this.state;
    const controlledSettings = EFFECTS_SETTINGS[effect];

    if (!controlledSettings.screen) {
      controlledSettings[effect] = intensity || INITIAL_INTENSITY;
    } else {
      controlledSettings.screen.a = intensity || INITIAL_INTENSITY;
    }

    vintagejs(originalURL, controlledSettings)
      .then(res => res.getDataURL())
      .then(modifiedURL => this.setState({ modifiedURL }));
  }

  handleSubmit = (event: any, URL: string) => {
    event.preventDefault();

    this.setState({
      isLoading: true,
    });

    fetch('http://localhost:5000', {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        URL,
        controlledSettings: {},
      }),
    }).then(response => response.json())
      .then(({ code }) => this.setState({ originalURL: code, modifiedURL: null, isLoading: false }));
  };

  render() {
    const { originalURL, modifiedURL, isLoading } = this.state;
    const { effect } = this.props;

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
        <Form onSubmit={this.handleSubmit} />
        {!UNCONTROLLED_EFFECTS_NAMES.includes(effect) ? <IntensitySliderContainer /> : null}
      </>
    ) : <Form onSubmit={this.handleSubmit} />;
  }
}

export default EditableImage;
