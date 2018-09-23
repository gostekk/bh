import React from 'react';
import { shallow } from 'enzyme';
import App from '../../components/App.jsx';

describe('App Component', () => {
  it('should render App component and match to snapshot', () => {
    const wrapper = shallow(<App />).dive();
    expect(wrapper).toMatchSnapshot();
  });
});
