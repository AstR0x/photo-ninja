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

import { FILTERS_NAMES, FILTERS_DESCRIPTIONS } from '../../constants';

import styles from './FiltersDescription.module.css';

class FiltersDescription extends Component {
  state = {
    isOpen: false,
  };

  handleClick = () => {
    const { isOpen } = this.state;

    this.setState({
      isOpen: !isOpen,
    });
  };

  render() {
    const { isOpen } = this.state;

    const classes = clsx(styles.expansionPanel, isOpen && styles.animatedExpansionPanel);

    return (
      <div className={styles.descriptionContainer}>
        <Button
          onClick={this.handleClick}
          variant="contained"
          color="primary"
          size="small"
        >
          Описание фильтров
        </Button>
        <div className={classes}>
          {FILTERS_NAMES.map(name => (
            <ExpansionPanel>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="h6">
                  {name.toUpperCase()}
                </Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                {FILTERS_DESCRIPTIONS[name]}
              </ExpansionPanelDetails>
            </ExpansionPanel>
          ))}
        </div>
      </div>
    );
  }
}

export default FiltersDescription;
