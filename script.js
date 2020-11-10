var currentDayEl = $("#currentDay");
var timeEl = $("#time")
var saveBtnEl = $("#saveBtn")
var today = moment();


// current day and time
currentDayEl.text("Current Day: " + today.format('MMMM Do YYYY, h:mm:ss a'));


saveBtnEl.on("click", saveEl);

function saveEl(event){

    event.preventDefault();
    var workV = $("#work").value;

    window.localStorage.setItem("user", "workV");

    
};





