import React from 'react';

import PhotoCard from '../PhotoCard/PhotoCard';

import { PHOTOS_URLS } from '../../constants';

import styles from './Photos.module.css';

const Photos: React.FC = () => (
  <div className={styles.photosContainer}>
    {PHOTOS_URLS.map(url => <PhotoCard URL={url} />)}
  </div>
);

export default Photos;
