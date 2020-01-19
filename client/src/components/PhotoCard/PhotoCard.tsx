import React from 'react';

import styles from './PhotoCard.module.css';

interface PhotoCardProps {
  onSetEffect?: (effect: string) => () => void,
  effect?: string,
  URL: string,
}

const PhotoCard: React.FC<PhotoCardProps> = ({ onSetEffect, effect, URL }: PhotoCardProps) => (effect ? (
  <div
    role="button"
    className={styles.imageContainer}
    onClick={onSetEffect(effect)}
  >
    <span className={styles.effectName}>{effect.toUpperCase()}</span>
    <img
      alt="фото эффект"
      src={URL}
      className={styles.card}
    />
  </div>
) : (
  <div className={styles.imageContainer}>
    <img
      alt="фото эффект"
      src={URL}
      className={styles.card}
    />
  </div>
));

export default PhotoCard;
