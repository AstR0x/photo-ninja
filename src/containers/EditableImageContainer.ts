import { connect } from 'react-redux';

import EditableImage from '../component/EditableImage/EditableImage';

const mapStateToProps = (state: any) => ({ effect: state.effect, intensity: state.value });

export default connect(mapStateToProps)(EditableImage);
