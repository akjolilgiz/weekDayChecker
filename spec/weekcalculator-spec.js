import { Weekday, leapYear } from '../src/weekdaycalculator.js';

describe ("WeekDay test", function() {

  it('should determine wether its a leap year', function(){
    expect(leapYear(2012)).toEqual(true);
  });

  it('should determine the day of the week', function() {
    let userDay = new Weekday(10,02,2018);
    expect(userDay.findDay(10,02)).toEqual("Tuesday");
  });



});
