import { connect } from 'react-redux';
import Note from './note';
import { fetchNote, fetchNotes, editNote } from '../../actions/note_actions';
import { selectSingleNote } from '../../reducers/selectors';
import { clearErrors } from '../../actions/errors_actions';
import {withRouter} from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  const note = selectSingleNote(state, ownProps.match.params.noteId);
  return {
    note,
    currentUser: state.session.currentUser,
    errors: state.errors,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    editNote: (id, note) => dispatch(editNote(id, note)),
    clearErrors: () => dispatch(clearErrors())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Note);
