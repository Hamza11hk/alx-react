// js/dashboard_main.js
import $ from 'jquery';
import _ from 'lodash';

$(document).ready(function () {
  let count = 0;

  function updateCounter() {
    count += 1;
    $('#count').text(`${count} clicks on the button`);
  }

  $('#root').append('<p>Holberton Dashboard</p>');
  $('#root').append('<p>Dashboard data for the students</p>');
  $('#root').append('<button id="startBtn">Click here to get started</button>');
  $('#root').append('<p id="count"></p>');
  $('#root').append('<p>Copyright - Holberton School</p>');

  $('#startBtn').on('click', _.debounce(updateCounter, 1000));
});
