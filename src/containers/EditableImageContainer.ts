import { connect } from 'react-redux';

import EditableImage from '../components/EditableImage/EditableImage';

const mapStateToProps = (state: any) => ({ filter: state.filter });

export default connect(mapStateToProps)(EditableImage);
