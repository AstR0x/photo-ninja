import { connect } from 'react-redux';

import { setPhotoFilter } from '../actions';

import PhotoCard from '../components/PhotoCard/PhotoCard';

const mapDispatchToProps = (dispatch: any) => ({
  onSetFilter: (filter: string) => dispatch(setPhotoFilter(filter)),
});

export default connect(null, mapDispatchToProps)(PhotoCard);
