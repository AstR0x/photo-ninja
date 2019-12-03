import React, { Component } from 'react';

import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';

import styles from './Form.module.css';

class Form extends Component<{ onSubmit: (event: any, url: string) => void }, {}> {
  state = {
    inputValue: '',
  };

  handleChangeValue = (event: any) => {
    this.setState({
      inputValue: event.target.value,
    });
  };

  render() {
    const { inputValue } = this.state;
    const { onSubmit } = this.props;

    return (
      <div className={styles.form}>
        <Input
          className={styles.input}
          color="primary"
          onChange={this.handleChangeValue}
          value={inputValue}
          placeholder="Ссылка на фотографию"
        />
        <Button
          variant="contained"
          color="primary"
          size="small"
          onClick={event => onSubmit(event, inputValue)}
        >
          Загрузить
        </Button>
      </div>
    );
  }
}

export default Form;
