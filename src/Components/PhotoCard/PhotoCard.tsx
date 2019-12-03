import React from 'react';

import styles from './PhotoCard.module.css';

const PhotoCard = ({ filter, URL, onSetFilter }: {
  filter: string,
  URL: string,
  onSetFilter?: (filter: string) => void,
}) => (
  <div
    role="button"
    className={styles.imageContainer}
    onClick={() => onSetFilter(filter)}
  >
    <img alt="фото фильтр" src={URL} className={styles.card} />
  </div>
);

export default PhotoCard;
