import React, { Component } from 'react';

import vintagejs from 'vintagejs';

import IntensitySliderContainer from '../../containers/IntensitySliderContainer';

import Form from '../Form/Form';

import { EFFECTS_SETTINGS, UNCONTROLLED_EFFECTS_NAMES, INITIAL_INTENSITY } from '../../constants';

import styles from './EditableImage.module.css';

interface Props {
  effect: string,
  intensity: number,
}

class EditableImage extends Component<{ effect: string, intensity: number | number[] }, {}> {
  state = {
    originalURL: '',
    modifiedURL: '',
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
    this.setState({ originalURL: URL });
  };

  render() {
    const { originalURL, modifiedURL } = this.state;
    const { effect } = this.props;

    return modifiedURL || originalURL ? (
      <>
        <div className={styles.imageContainer}>
          <img
            className={styles.image}
            alt="Редактируемое изображение"
            src={modifiedURL || originalURL}
          />
        </div>
        <Form onSubmit={this.handleSubmit} />
        {!UNCONTROLLED_EFFECTS_NAMES.includes(effect) ? <IntensitySliderContainer /> : null}
      </>
    ) : <Form onSubmit={this.handleSubmit} />;
  }
}

export default EditableImage;
