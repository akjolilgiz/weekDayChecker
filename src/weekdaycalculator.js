export function Weekday(month, day, year){
  this.month = month;
  this.day = day;
  this.year = year;

}

Weekday.prototype.findDay = function() {
  var weekDay = "";
  if(this.day%7 === 1){
    weekDay = "Monday";
  }
  	else if(this.day%7 === 2){
      weekDay = "Tuesday";
  }
    else if (this.day%7 === 3){
      weekDay = "Wednesday";
  }
  	else if(this.day%7 === 4){
      weekDay = "Thursday";
  }
  	else if(this.day%7 === 5){
      weekDay = "Friday";
  }
  	else if(this.day%7 === 6){
      weekDay = "Saturday";
  }
  	else if(this.day%7 === 0){
      weekDay = "Sunday";
  }
  return weekDay;
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
