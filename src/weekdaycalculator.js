export function Weekday(month, day, year){
  this.month = month;
  this.day = day;
  this.year = year;

}
export function leapYear(year) {
  //year is a number
  if (year % 4 == 0) {
    if (year % 100 == 0) {
      if (year % 400 == 0) {
        return true;
      }
      else {
        return false;
      }
    }
    else {
      return true;
    }
  }
  else {
    return false;
  }
};

Weekday.prototype.findDay = function(newDay, newMonth) {
  var weekDay = newDay;
  var weekday = "";

  if(newMonth === 0 || newMonth === 9) {
    weekDay = newDay;
  }
  else if (newMonth === 1 || newMonth === 2 || newMonth === 10){
    weekDay = newDay + 3;
  }
    else if (newMonth === 3 || newMonth === 6){
      weekDay = newDay -1;
    }
    else if (newMonth === 8 || newMonth === 11){
       weekDay = newDay + 5;
    }
    else if (newMonth === 5) {
       weekDay = newDay + 4;
    }
    else if (newMonth === 4) {
       weekDay = newDay +1;
    }
    else if (newMonth === 7) {
       weekDay = newDay + 2;
    }


    if(weekDay%7 === 1){
      weekday = "Monday";
    }
    else if(weekDay%7 === 2){
      weekday = "Tuesday";
    }
    else if (weekDay%7 === 3){
      weekday = "Wednesday";
    }
    else if(weekDay%7 === 4){
      weekday = "Thursday";
    }
    else if(weekDay%7 === 5){
      weekday = "Friday";
    }
    else if(weekDay%7 === 6){
      weekday = "Saturday";
    }
    else if(weekDay%7 === 0){
      weekday = "Sunday";
    }
    return weekday;
  };



  //
  // <!DOCTYPE html>
  // <html>
  // <body>
  //
  // <h2>JavaScript new Date()</h2>
  //
  // <p id="demo"></p>
  // <p id="day"></p>
  // <p id="year"></p>
  // <p id="extraDay"></p>
  // <p id="newDay"></p>
  //
  // <p id="weekday"></p>
  //
  //
  // <script>
  // var d = new Date();
  // var day = d.getDay();
  // var year = d.getYear();
  // var extraDay = (year-118);
  // var newDay = (day+extraDay);
  //
  // var weekday = "";
  // if (newDay%7 === 1){weekday = "Monday"}
  // 	else if(day%7 === 2){weekday = "Tuesday"}
  //     else if (day%7 === 3){weekday = "Wednesday"}
  // 	else if(day%7 === 4){weekday = "Thursday"}
  // 	else if(day%7 === 5){weekday = "Friday"}
  // 	else if(day%7 === 6){weekday = "Saturday"}
  // 	else if(day%7 === 0){weekday = "Sunday"}
  //
  // document.getElementById("demo").innerHTML = d;
  // document.getElementById("day").innerHTML = day;
  // document.getElementById("year").innerHTML = year;
  // document.getElementById("extraDay").innerHTML = extraDay;
  // document.getElementById("newDay").innerHTML = newDay;
  //
  // document.getElementById("weekday").innerHTML = weekday;
  //
  // </script>
  //
  // </body>
  // </html>
  //
