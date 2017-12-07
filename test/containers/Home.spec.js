import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { Home } from 'containers/Home';

Enzyme.configure({ adapter: new Adapter() });

const mockDispatch = jest.fn();

function setup() {
  const props = {
    dispatch: mockDispatch,
    location: {},
  };

  return mount(<Home {...props} />);
}

describe('Home', () => {
  const wrapper = setup(true);

  it('should be a Component', () => {
    expect(wrapper.instance() instanceof React.Component).toBe(true);
  });

  it('should render properly', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
});
