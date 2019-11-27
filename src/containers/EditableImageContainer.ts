import {connect} from 'react-redux';

import EditableImage from "../components/EditableImage/EditableImage";

function mapStateToProps(state: any) {
    return {
        filter: state.filter,
    };
}

export default connect(mapStateToProps)(EditableImage);
