import { connect } from 'react-redux';
import { createNote } from '../../actions/note_actions';
import NewNote from './new_note';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
  errors: state.errors
});

const mapDispatchToProps = (dispatch) => {
  return {
    createNote: (note) => dispatch(createNote(note))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewNote);
