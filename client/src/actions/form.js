import axios from 'axios';

// ADD_NEW_PERSON_REQUEST
export const addNewPersonRequest = person => ({
  type: 'ADD_NEW_PERSON_REQUEST',
  person,
});

// ADD_NEW_PERSON_SUCCESS
export const addNewPersonSuccess = () => ({
  type: 'ADD_NEW_PERSON_SUCCESS',
});

// ADD_NEW_PERSON_ERROR
export const addNewPersonError = errors => ({
  type: 'ADD_NEW_PERSON_ERROR',
  errors,
});

// ADD_NEW_PERSON
export const addNewPerson = person => (
  dispatch => {
    dispatch(addNewPersonRequest(person));
    axios
      .post('/api/form', person)
      .then(() => dispatch(addNewPersonSuccess()))
      .catch(err => {
        const errors = err.response ? err.response.data : {};
        dispatch(addNewPersonError(errors));
        return false;
      });
  }
);

// RESET_SUCCESS
export const resetSuccess = () => ({
  type: 'RESET_SUCCESS',
});
