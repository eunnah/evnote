import { connect } from 'react-redux';
import NoteDetail from './note_detail';
import { fetchNote, fetchNotes, editNote } from '../../actions/note_actions';
import { selectSingleNote } from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => {
  const note = selectSingleNote(state, ownProps.match.params.noteId);
  return {note};
};

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
