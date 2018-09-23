import {
  addNewPerson,
  addNewPersonError,
  addNewPersonRequest,
  addNewPersonSuccess,
  resetSuccess,
} from '../../actions/form';
import { person, errors } from '../fixtures/form';

// ADD_NEW_PERSON_REQUEST
it('should setup addNewPersonRequest action', () => {
  const action = addNewPersonRequest(person);

  expect(action).toEqual({
    type: 'ADD_NEW_PERSON_REQUEST',
    person,
  });
});

// ADD_NEW_PERSON_SUCCESS
it('should setup addNewPersonSuccess action', () => {
  const action = addNewPersonSuccess(person);

  expect(action).toEqual({
    type: 'ADD_NEW_PERSON_SUCCESS',
  });
});

// ADD_NEW_PERSON_ERROR
it('should setup addNewPersonError action', () => {
  const action = addNewPersonError(errors);

  expect(action).toEqual({
    type: 'ADD_NEW_PERSON_ERROR',
    errors,
  });
});

// ADD_NEW_PERSON
it('should setup addNewPerson action', () => {
  const dispatch = jest.fn();

  addNewPerson(person)(dispatch);

  expect(dispatch.mock.calls.length).toBe(1);

  expect(dispatch.mock.calls[0][0]).toEqual({
    type: 'ADD_NEW_PERSON_REQUEST',
    person,
  });
});

// RESET_SUCCESS
it('should setup resetSuccess action', () => {
  const action = resetSuccess();

  expect(action).toEqual({
    type: 'RESET_SUCCESS',
  });
});