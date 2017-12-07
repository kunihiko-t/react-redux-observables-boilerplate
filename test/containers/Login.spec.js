import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Login from 'containers/Login';

Enzyme.configure({ adapter: new Adapter() });

function setup() {
  const props = {
    location: {},
  };

  return mount(<Login {...props} />);
}

describe('Login', () => {
  const wrapper = setup(true);

  // it('should be a StatelessComponent', () => {
  //   expect(wrapper.instance().constructor.name).toBe('StatelessComponent');
  // });

  it('should render properly', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should render the redirect location', () => {
    wrapper.setProps({
      location: {
        state: { from: '/private' },
      },
    });

    expect(wrapper.html()).toMatchSnapshot();
  });
});
