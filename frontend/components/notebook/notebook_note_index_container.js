import { connect } from 'react-redux';
import NotebookNoteIndex from './notebook_note_index';
import { fetchNotebookNotes, fetchNotebook } from '../../actions/notebook_actions';
import { selectNotebookNotes, selectSingleNotebook, selectAllNotes } from '../../reducers/selectors';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  const notebookId = ownProps.match.params.notebookId;
  return {
  notebookNotes: selectAllNotes(state),
  notebook: selectSingleNotebook(state, notebookId)
  };
};

const mapDispatchToProps = dispatch => ({
  fetchNotebookNotes: (id) => dispatch(fetchNotebookNotes(id)),
  fetchNotebook: (id) => dispatch(fetchNotebook(id))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(NotebookNoteIndex));
