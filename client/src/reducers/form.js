// Form Reducer
export const formDefaultState = {
  form: {},
  errors: {},
  success: false,
};

const formReducer = (state = formDefaultState, action) => {
  switch (action.type) {
    case 'ADD_NEW_PERSON_REQUEST':
      return {
        ...state,
        form: action.person,
        errors: state.errors,
        success: false,
      };
    case 'ADD_NEW_PERSON_SUCCESS':
      return {
        ...state,
        form: state.form,
        errors: {},
        success: true,
      };
    case 'ADD_NEW_PERSON_ERROR':
      return {
        ...state,
        form: {},
        errors: action.errors,
        success: false,
      };
    case 'RESET_SUCCESS':
      return {
        ...state,
        success: false,
      };
    default:
      return state;
  }
};

export default formReducer;
