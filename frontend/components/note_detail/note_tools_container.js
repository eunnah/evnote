import { connect } from 'react-redux';
import NoteTools from './note_tools';
import { deleteNote } from '../../actions/note_actions';
import {Redirect, withRouter} from 'react-router-dom';

const mapStateToProps = (state) => {
  const notes = Object.values(state.notes);
  return {
    firstNote: notes[0],
    notesCount: notes.length,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteNote: (id) => dispatch(deleteNote(id))
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(NoteTools));
