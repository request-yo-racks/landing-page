import React from 'react';
// import { expect } from 'chai';
import { shallow } from 'enzyme';
// import sinon from 'sinon';
import renderer from 'react-test-renderer'

// import Index from '../pages/index';
import App from '../pages/index.js'

describe('<Index />', () => {
  it('renders <App /> components', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(App)).toExist();
  });
});
