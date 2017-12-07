import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import NotFound from 'containers/NotFound';

Enzyme.configure({ adapter: new Adapter() });

function setup() {
  return mount(<NotFound />);
}


describe('NotFound', () => {
  const wrapper = setup(true);

  // it('should be a StatelessComponent', () => {
  //   expect(wrapper.instance().constructor.name).toBe('StatelessComponent');
  // });

  it('should render properly', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
});
