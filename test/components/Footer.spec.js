import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Footer from 'components/Footer';

Enzyme.configure({ adapter: new Adapter() });

function setup() {
  return mount(<Footer />);
}

describe('Footer', () => {
  const wrapper = setup();

  // it('should be a StatelessComponent', () => {
  //   expect(wrapper.instance().constructor.name).toBe('StatelessComponent');
  // });

  it('should render properly', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
});
