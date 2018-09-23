import { connect } from 'react-redux';
import { addNewPerson, resetSuccess } from '../actions/form';
import Form from '../components/Form.jsx';

export const mapStateToProps = state => ({
  success: state.form.success,
  errors: state.form.errors,
});

export const mapDispatchToProps = dispatch => ({
  addNewPerson: person => dispatch(addNewPerson(person)),
  resetSuccess: () => dispatch(resetSuccess()),
});

const FormContainer = connect(mapStateToProps, mapDispatchToProps)(Form);
export default FormContainer;
