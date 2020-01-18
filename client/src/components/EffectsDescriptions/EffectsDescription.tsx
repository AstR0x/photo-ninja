import React, { useState } from 'react';

import clsx from 'clsx';

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import {
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
} from '@material-ui/core';

import { EFFECTS_NAMES, EFFECTS_DESCRIPTIONS } from '../../constants';

import styles from './EffectsDescription.module.css';

const EffectsDescription = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedPanel, setExpandedPanel] = useState(null);

  const handleClickPanel = (nextExpandedPanel: string) => (): void => {
    const newValue = expandedPanel !== nextExpandedPanel ? nextExpandedPanel : null;
    setExpandedPanel(newValue);
  };

  const handleClickButton = () => {
    setIsOpen(!isOpen);
  };

  const classes = clsx(styles.expansionPanel, isOpen && styles.animatedExpansionPanel);

  return (
    <div className={styles.descriptionContainer}>
      <Button
        onClick={handleClickButton}
        variant="contained"
        color="primary"
        size="small"
      >
        Описание фильтров
      </Button>
      <div className={classes}>
        {EFFECTS_NAMES.map(name => (
          <ExpansionPanel key={name} onClick={handleClickPanel(name)} expanded={isOpen && expandedPanel === name}>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="h6">
                {name.toUpperCase()}
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              {EFFECTS_DESCRIPTIONS[name]}
            </ExpansionPanelDetails>
          </ExpansionPanel>
        ))}
      </div>
    </div>
  );
};

export default EffectsDescription;
