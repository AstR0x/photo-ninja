import {connect} from 'react-redux';

import {setPhotoFilter} from '../actions';

import PhotoCard from '../components/PhotoCard/PhotoCard';

function mapDispatchToProps(dispatch: any) {
    return {
        onSetFilter: (filter: string) => dispatch(setPhotoFilter(filter))
    };
}

export default connect(null, mapDispatchToProps)(PhotoCard);
