import formReducer, { formDefaultState } from '../../reducers/form';
import { person, errors, fullState } from '../fixtures/form';

// DEFAULT
it("should set default state", () => {
  const state = formReducer(undefined, { type: "@@INIT" });

  expect(state).toEqual(formDefaultState);
});

// ADD_NEW_PERSON_REQUEST
it('should initialize addNewPersonRequest', () => {
  const action = {
    type: 'ADD_NEW_PERSON_REQUEST',
    person,
  };

  const state = formReducer(fullState, action);

  expect(state).toEqual({
    form: person,
    errors: {},
    success: false,
  });
});

// ADD_NEW_PERSON_SUCCESS
it('should initialize addNewPersonSuccess', () => {
  const action = {
    type: 'ADD_NEW_PERSON_SUCCESS',
  };

  const state = formReducer(fullState, action);

  expect(state).toEqual({
    form: {},
    errors: {},
    success: true,
  });
});

// ADD_NEW_PERSON_ERROR
it('should initialize addNewPersonError', () => {
  const action = {
    type: 'ADD_NEW_PERSON_ERROR',
    errors,
  };

  const state = formReducer(fullState, action);

  expect(state).toEqual({
    form: fullState.form,
    errors,
    success: fullState.success,
  });
});

// RESET_SUCCESS
it('should initialize addNewPersonError', () => {
  const action = {
    type: 'RESET_SUCCESS',
  };

  const newFullState = { ...fullState, success: true };
  const state = formReducer(newFullState, action);

  expect(state).toEqual({
    form: fullState.form,
    errors: {},
    success: false,
  });
});