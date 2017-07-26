import { connect } from 'react-redux';
import NoteTools from './note_tools';
import { deleteNote } from '../../actions/note_actions';

const mapStateToProps = (state, ownProps) => {
  return {
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteNote: (id) => dispatch(deleteNote(id))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(NoteTools);
