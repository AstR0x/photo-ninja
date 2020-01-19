import { connect } from 'react-redux';

import { setPhotoEffect } from '../actions';

import PhotoCard from '../components/PhotoCard/PhotoCard';

const mapDispatchToProps = (dispatch: any) => ({
  onSetEffect: (effect: string) => () => dispatch(setPhotoEffect(effect)),
});

export default connect(null, mapDispatchToProps)(PhotoCard);
