import React from 'react';

import clsx from "clsx";

import styles from './PhotoCard.module.css';

const PhotoCard = ({mode, onSetFilter}: {mode: string, onSetFilter?: (mode: string) => void}) => {
    const classes = mode ? clsx(styles.card, styles[mode]) : styles.card;

    return (
        <div onClick={() => onSetFilter(mode)} className={styles.imageContainer}>
            <img className={classes}/>
        </div>
    );
}

export default PhotoCard;
