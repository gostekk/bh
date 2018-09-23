import React from 'react';
import { shallow } from 'enzyme';
import Form from '../../components/Form.jsx';
import TextField from '@material-ui/core/TextField';

describe('Form Component', () => {
  let wrapper;
  let props;
  
  beforeEach(() => {
    props = {
      addNewPerson: jest.fn(),
      resetSuccess: jest.fn(),
      success: false,
      errors: {},
    };

    wrapper = shallow(<Form {...props} />).dive();
  });

  it('should render Form component and match to snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should click button and call addNewPerson function', () => {
    wrapper.find('form').simulate('submit', { preventDefault() {} });
    expect(props.addNewPerson).toHaveBeenCalled();
  });

  it('should reset state of the component after true in success prop', () => {
    wrapper.find(TextField).at(0).props().onChange({ target: { value: 'test', name: 'firstname' } });
    expect(wrapper.state().firstname).toEqual('test');
    expect(wrapper.props().success).toBeFalsy();
    wrapper.setProps({ success: true });
    expect(wrapper.state().firstname).toEqual('');
  });
});
