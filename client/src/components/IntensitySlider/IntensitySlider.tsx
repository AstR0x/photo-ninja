import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';

import styles from './IntensitySlider.module.css';

interface IntensitySliderProps{
  onSetIntensity?: (event: any, intensity: number | number[]) => void,
  intensity: any,
}

const IntensitySlider: React.FC<IntensitySliderProps> = ({ intensity, onSetIntensity }: IntensitySliderProps) => (
  <div className={styles.sliderContainer}>
    <Typography id="slider-label" color="primary" gutterBottom>
      Интенсивность
    </Typography>
    <Slider
      aria-label="slider-label"
      defaultValue={0.25}
      step={0.01}
      max={1}
      value={intensity}
      onChangeCommitted={onSetIntensity}
    />
  </div>
);

export default IntensitySlider;
