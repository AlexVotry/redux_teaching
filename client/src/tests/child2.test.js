import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdaptor from 'enzyme-adapter-react-16';
// import { expect } from 'chai';
import Child2 from '../components/Child2';

Enzyme.configure({ adapter: new EnzymeAdaptor() });

/** 
  * Factory function to create a ShallowWrapper for the Child2 component
  * @function setup
  * @param {object} props - Component props specific to this setup.
  * @param {object} state - Initial state for setup.
  * @returns { ShallowWrapper }
  *  replaces: const wrapper = shallow(<Child2 />);
*/

const setup = (props={}, state=null) => {
  const wrapper = shallow(<Child2 {...props} />);
  if (state) {
    wrapper.setState(state);
  }
  return wrapper;
}

/**
 * Return ShallowWrapper containing node(s) with the given data-test value.
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper to search within.
 * @param {string} val - Value of data-test attribute for search
 * @returns {ShallowWrapper}
 * replaces: const child2Component = wrapper.find("[data-test='component-child2']");
 */

const findTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
}

test('renders without an error', () => {
  const wrapper = setup();
  const child2Component = findTestAttr(wrapper, 'component-child2');

  expect(child2Component.length).toBe(1);
});

test('renders increment button', () => {
  const wrapper = setup();
  const button = findTestAttr(wrapper, 'increment-button');

  expect(button.length).toBe(1);
});

test('renders counter display', () => {
  const wrapper = setup();
  const counterDisplay =findTestAttr(wrapper, 'counter-display');

  expect(counterDisplay.length).toBe(1);
});

test('counter starts at 0', () => {
  const wrapper = setup();
  const initialCounterState = wrapper.state('counter');

  expect(initialCounterState).toBe(0);
});

test('clicking button increments counter display', () => {
  const counter = 7;
  const wrapper = setup(null, { counter });
  const button = findTestAttr(wrapper, 'increment-button');

  // find button and click
  button.simulate('click');
  wrapper.update();

  // find display and test value
  const counterDisplay = findTestAttr(wrapper, 'counter-display');
  expect(counterDisplay.text()).toContain(counter + 1);
});

test('clicking decrement button decreases counter display by one', () => {
  const counter = 7;
  const wrapper = setup(null, { counter });
  const button = findTestAttr(wrapper, 'decrement-button');

  button.simulate('click');
  wrapper.update();

  const counterDisplay = findTestAttr(wrapper, 'counter-display');
  const error = findTestAttr(wrapper, 'error-display');

  expect(counterDisplay.text()).toContain(6);
  expect(error.length).toBe(0);
});

test('decrement button does not go below 0', () => {
  const counter = 0;
  const wrapper = setup(null, counter);
  const button = findTestAttr(wrapper, 'decrement-button');

  button.simulate('click');
  wrapper.update();
  
  const counterDisplay = findTestAttr(wrapper, 'counter-display');
  const error = findTestAttr(wrapper, 'error-display');

  expect(counterDisplay.text()).toContain(0);
  expect(error.length).toBe(1);
})