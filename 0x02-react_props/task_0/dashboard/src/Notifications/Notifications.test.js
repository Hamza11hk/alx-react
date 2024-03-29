// task_3/dashboard/src/Notifications.test.js

import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';

// Test 1: Notifications renders without crashing
test('Notifications renders without crashing', () => {
  shallow(<Notifications />);
});

// Test 2: Verify that Notifications renders three list items
test('Notifications renders three list items', () => {
  const wrapper = shallow(<Notifications />);
  expect(wrapper.find('li')).toHaveLength(3);
});

// Test 3: Verify that Notifications renders the text Here is the list of notifications
test('Notifications renders the text Here is the list of notifications', () => {
  const wrapper = shallow(<Notifications />);
  expect(wrapper.text()).toContain('Here is the list of notifications');
});
