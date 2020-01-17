import React from 'react';

import Paper from '@material-ui/core/Paper';
import styles from './Information.module.css';

const Information: React.FC = () => (
  <Paper className={styles.informationContainer}>
    <h2 className={styles.heading}>Сайт для наложения фото эффектов</h2>
    <p className={styles.information}>
      Сайт находится в активной разработке. В дальнейшем будет добавлено большое количество фильтров и дополнительные
      возможности редактирования фотографий.
    </p>
  </Paper>
);

export default Information;
