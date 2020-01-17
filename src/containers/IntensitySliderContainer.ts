import { connect } from 'react-redux';

import IntensitySlider from '../component/IntensitySlider/IntensitySlider';

import { setIntensity } from '../actions';

const mapDispatchToProps = (dispatch: any) => ({
  onSetIntensity: (event: any, intensity: number | number[]) => dispatch(setIntensity(intensity)),
});

const mapStateToProps = (state: any) => ({
  intensity: state.intensity,
});

export default connect(mapStateToProps, mapDispatchToProps)(IntensitySlider);
