import React, { useState } from 'react';

import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';

import styles from './Form.module.css';

interface FormProps {
  onSubmit: (event: React.MouseEvent<HTMLButtonElement>, url: string) => void,
}

const Form: React.FC<FormProps> = ({ onSubmit }: FormProps) => {
  const [inputValue, setInputValue] = useState('');

  const handleChangeIntensity = (event: any) => {
    setInputValue(event.target.value);
  };

  return (
    <div className={styles.form}>
      <Input
        className={styles.input}
        color="primary"
        onChange={handleChangeIntensity}
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
};

export default Form;
