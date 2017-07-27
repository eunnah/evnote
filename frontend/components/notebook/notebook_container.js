import { connect } from 'react-redux';
import Notebook from './notebook';
import { fetchNotebooks } from '../../actions/notebook_actions';
import { selectAllNotebooks } from '../../reducers/selectors';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state) => ({
  notebooks: selectAllNotebooks(state)
});

const mapDispatchToProps = dispatch => ({
  fetchNotebooks: (id) => dispatch(fetchNotebooks(id))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Notebook));
