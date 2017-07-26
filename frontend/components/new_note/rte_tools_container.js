import { connect } from 'react-redux';
import { createNote } from '../../actions/note_actions';
import RTETools from './rte_tools';
import { clearErrors } from '../../actions/errors_actions';

const mapStateToProps = (state) => {
  const notes = Object.values(state.notes);
  return {
    notesCount: notes.length,
    currentUser: state.session.currentUser,
    errors: state.errors,
    noteId: notes.slice(-1)[0].id
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createNote: (note) => dispatch(createNote(note)),
    clearErrors: () => dispatch(clearErrors())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RTETools);
