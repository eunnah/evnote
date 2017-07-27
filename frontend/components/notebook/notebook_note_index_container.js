import { connect } from 'react-redux';
import NotebookNoteIndex from './notebook_note_index';
import { fetchNotebookNotes } from '../../actions/notebook_actions';
import { selectNotebookNotes } from '../../reducers/selectors';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => ({
  notebookNotes: selectNotebookNotes(state, ownProps.match.params.notebookId)
});

const mapDispatchToProps = dispatch => ({
  fetchNotebookNotes: () => dispatch(fetchNotebookNotes())
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(NotebookNoteIndex));
