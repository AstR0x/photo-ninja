import React, { Component } from 'react';

import vintagejs from 'vintagejs';

import IntensitySliderContainer from '../../containers/IntensitySliderContainer';

import Form from '../Form/Form';

import { FILTERS_SETTINGS, UNCONTROLLED_FILTERS_NAMES, INITIAL_INTENSITY } from '../../constants';

import styles from './EditableImage.module.css';

class EditableImage extends Component<{ filter: string, intensity: number | number[] }, {}> {
  state = {
    originalURL: '',
    modifiedURL: '',
  };

  UNSAFE_componentWillReceiveProps({ filter, intensity }) {
    const { originalURL } = this.state;
    const controlledSettings = FILTERS_SETTINGS[filter];

    if (!controlledSettings.screen) {
      controlledSettings[filter] = intensity || INITIAL_INTENSITY;
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
    const { filter } = this.props;

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
        {!UNCONTROLLED_FILTERS_NAMES.includes(filter) ? <IntensitySliderContainer /> : null}
      </>
    ) : <Form onSubmit={this.handleSubmit} />;
  }
}

export default EditableImage;
