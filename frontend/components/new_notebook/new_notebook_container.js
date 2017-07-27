import { connect } from 'react-redux';
import { createNotebook } from '../../actions/notebook_actions';
import NewNotebook from './new_notebook';
import { clearErrors } from '../../actions/errors_actions';

const mapStateToProps = (state) => {
  const notebooks = Object.values(state.notebooks);

  return {
    notebooksCount: notebooks.length,
    currentUser: state.session.currentUser,
    errors: state.errors,
    notebookId: notebooks.slice(-1)[0].id
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createNotebook: (notebook) => dispatch(createNotebook(notebook)),
    clearErrors: () => dispatch(clearErrors())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewNotebook);
