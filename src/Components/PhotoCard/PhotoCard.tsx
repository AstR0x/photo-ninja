import React from 'react';

import clsx from "clsx";

import styles from './PhotoCard.module.css';

const PhotoCard = ({mode}: { mode?: string }) => {
    const classes = mode ? clsx(styles.card, styles[mode]) : styles.card;

    return (
        <div className={styles.imageContainer}>
            <img className={classes}/>
        </div>
    );
}

export default PhotoCard;
