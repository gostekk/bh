import { shallow } from 'enzyme';
import React from 'react';
import configureStore from 'redux-mock-store';

import FormContainer from '../../containers/Form';
import { fullState } from '../fixtures/form';

const mockStore = configureStore();

describe('Form Container', () => {
  let wrapper;
  let store;
  const state = { form: fullState };

  beforeEach(() => {
    store = mockStore(state);
    store.dispatch = jest.fn();
    wrapper = shallow(<FormContainer store={store}/>);
  });

  it('maps addNewPerson to dispatch action', () => {
    wrapper.props().addNewPerson();

    expect(store.dispatch).toHaveBeenCalled();
  });

  it('maps resetSuccess to dispatch action', () => {
    wrapper.props().resetSuccess();

    expect(store.dispatch).toHaveBeenCalled();
  });
})