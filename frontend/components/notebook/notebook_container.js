import { connect } from 'react-redux';
import Notebook from './notebook';
import { fetchNotes } from '../../actions/note_actions';
import { selectAllNotes } from '../../reducers/selectors';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => ({
  notes: selectAllNotes(state),
  loggedIn: Boolean(state.session.currentUser),
  errors: state.errors
});

const mapDispatchToProps = dispatch => ({
  fetchNotes: () => dispatch(fetchNotes())
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Notebook));
