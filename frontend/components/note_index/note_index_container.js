import { connect } from 'react-redux';
import NoteIndex from './note_index';
import { fetchNotes } from '../../actions/note_actions';
// import { selectAllPokemon } from '../../reducers/selectors';

const mapStateToProps = state => ({
  // pokemon: selectAllPokemon(state),
  loggedIn: Boolean(state.session.currentUser),
  errors: state.errors
});

const mapDispatchToProps = dispatch => ({
  fetchNotes: () => dispatch(fetchNotes())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NoteIndex);
