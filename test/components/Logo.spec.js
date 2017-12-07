import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Logo from 'components/Logo';

Enzyme.configure({ adapter: new Adapter() });

describe('Logo', () => {
  const wrapper = mount(<Logo />);

  // it('should be a StatelessComponent', () => {
  //   expect(wrapper.instance().constructor.name).toBe('StatelessComponent');
  // });

  it('should render properly', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
});
