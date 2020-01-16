import React, { Component } from 'react';

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

class EffectsDescription extends Component {
  state = {
    isOpen: false,
    expandedPanel: null,
  };

  handleClickButton = () => {
    const { isOpen } = this.state;

    this.setState({
      isOpen: !isOpen,
    });
  };

  handleClickPanel = (nextExpandedPanel: string) => (): void => {
    const { expandedPanel } = this.state;
    const newValue = expandedPanel !== nextExpandedPanel ? nextExpandedPanel : null;

    this.setState({
      expandedPanel: newValue,
    });
  };

  render() {
    const { isOpen, expandedPanel } = this.state;

    const classes = clsx(styles.expansionPanel, isOpen && styles.animatedExpansionPanel);

    return (
      <div className={styles.descriptionContainer}>
        <Button
          onClick={this.handleClickButton}
          variant="contained"
          color="primary"
          size="small"
        >
          Описание фильтров
        </Button>
        <div className={classes}>
          {EFFECTS_NAMES.map(name => (
            <ExpansionPanel onClick={this.handleClickPanel(name)} expanded={isOpen && expandedPanel === name}>
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
  }
}

export default EffectsDescription;
