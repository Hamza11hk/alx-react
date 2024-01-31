// task_3/dashboard/src/App.test.js

import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

// Test 1: App renders without crashing
test('App renders without crashing', () => {
  shallow(<App />);
});

// Test 2: Verify that App renders a div with the class App-header
test('App renders a div with the class App-header', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find('.App-header')).toHaveLength(1);
});

// Test 3: Verify that App renders a div with the class App-body
test('App renders a div with the class App-body', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find('.App-body')).toHaveLength(1);
});

// Test 4: Verify that App renders a div with the class App-footer
test('App renders a div with the class App-footer', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find('.App-footer')).toHaveLength(1);
});
