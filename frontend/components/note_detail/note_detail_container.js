import { connect } from 'react-redux';
import Note from './note';
import NoteDetail from './note';
import { fetchNotes, fetchNote, editNote } from '../actions/session_actions';

const mapStateToProps = (state) => ({
  loggedIn: Boolean(state.session.currentUser),
  errors: state.errors
});

const mapDispatchToProps = (dispatch) => {
  return {
    fetchNotes: () => dispatch(fetchNotes()),
    fetchNote: (id) => dispatch(fetchNote(id)),
    editNote: (id, note) => dispatch(editNote(id, note))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NoteDetail);
