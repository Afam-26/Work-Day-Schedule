var currentDayEl = $("#currentDay");


currentDayEl.text("Current Time: ");

var dt = new Date();
var time = dt.getHours() + ":" + dt.getMinutes() + ":" + dt.getSeconds();


currentDayEl.append(time);
