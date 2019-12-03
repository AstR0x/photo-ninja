import React, { Component } from 'react';

import vintagejs from 'vintagejs';

import Form from '../Form/Form';

import styles from './EditableImage.module.css';


class EditableImage extends Component<{ filter: string }, {}> {
  state = {
    originalURL: '',
    modifiedURL: '',
  };

  componentWillReceiveProps({ filter }) {
    const { originalURL } = this.state;

    vintagejs(originalURL, { [filter]: 0.2 })
      .then(res => res.getDataURL())
      .then(modifiedURL => this.setState({ modifiedURL }));
  }

  handleSubmit = (event: any, URL: string) => {
    event.preventDefault();
    this.setState({ originalURL: URL });
  };

  render() {
    const { originalURL, modifiedURL } = this.state;

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
      </>
    ) : <Form onSubmit={this.handleSubmit} />;
  }
}

export default EditableImage;
