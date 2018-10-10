import { Weekday, leapYear } from './weekdaycalculator.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function() {
  $('#input').submit(function(event){
  event.preventDefault();
  let userInputDate = new Date(($('#inputDate').val()));
  let userDay = userInputDate.getUTCDate();
  let userMonth = userInputDate.getMonth();
  let userYear = userInputDate.getFullYear();
  let newDate = new Weekday(userMonth, userDay, userYear);
  let thisDay = newDate.findDay(userDay, userMonth);
  $("#result").text(thisDay);

});
});
