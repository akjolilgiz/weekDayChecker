import { Weekday } from './weekdaycalculator.js';
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
  let thisDay = newDate.findDay();
  $("#result").text(thisDay);

});
});
