import { connect } from 'react-redux';
import NoteTools from './note_tools';
import { deleteNote } from '../../actions/note_actions';

const mapStateToProps = (state) => {
  const notes = Object.values(state.notes);
  return {
    firstNote: notes[0].id,
    notesCount: notes.length,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteNote: (id) => dispatch(deleteNote(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NoteTools);
