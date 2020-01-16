import React from 'react';

import styles from './PhotoCard.module.css';

const PhotoCard = ({ effect, URL, onSetEffect }: {
  effect?: string,
  URL: string,
  onSetEffect?: (effect: string) => void,
}) => {
  return effect ? (
    <div
      role="button"
      className={styles.imageContainer}
      onClick={() => onSetEffect(effect)}
    >
      <span className={styles.effectName}>{effect.toUpperCase()}</span>
      <img alt="фото эффект" src={URL} className={styles.card} />
    </div>
  ) : (
    <div className={styles.imageContainer}>
      <img alt="фото эффект" src={URL} className={styles.card} />
    </div>
  );
};

export default PhotoCard;
