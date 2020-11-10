var currentDayEl = $("#currentDay");
var timeEl = $("#time")
var saveBtnEl1 = $("#saveBtn-1")
var saveBtnEl2 = $("#saveBtn-2")
var saveBtnEl3 = $("#saveBtn-3")
var saveBtnEl4 = $("#saveBtn-4")
var saveBtnEl5 = $("#saveBtn-5")
var saveBtnEl6 = $("#saveBtn-6")
var saveBtnEl7 = $("#saveBtn-7")
var saveBtnEl8 = $("#saveBtn-8")
var saveBtnEl9 = $("#saveBtn-9")
var today = moment();


// current day and time
currentDayEl.text("Current Day: " + today.format('MMMM Do YYYY, h:mm:ss a'));

//  storage for 9am
saveBtnEl1.on("click", saveEl1);
function saveEl1(event){
    event.preventDefault();
    var work1 = $("#work1").val();
    window.localStorage.setItem("9am", (work1));    
};

// storage for 10am
saveBtnEl2.on("click", saveEl2);
function saveEl2(event){
    event.preventDefault();
    var work2 = $("#work2").val();
    window.localStorage.setItem("10am", (work2));    
};

// storage for 11am
saveBtnEl3.on("click", saveEl3);
function saveEl3(event){
    event.preventDefault();
    var work3 = $("#work3").val();
    window.localStorage.setItem("11am", (work3));    
};

// storage for 12pm
saveBtnEl4.on("click", saveEl4);
function saveEl4(event){
    event.preventDefault();
    var work4 = $("#work4").val();
    window.localStorage.setItem("12am", (work4));   
};

// storage for 1pm
saveBtnEl5.on("click", saveEl5);
function saveEl5(event){
    event.preventDefault();
    var work5 = $("#work5").val();
    window.localStorage.setItem("1pm", (work5));   
};

// storage for 2pm
saveBtnEl6.on("click", saveEl6);
function saveEl6(event){
    event.preventDefault();
    var work6 = $("#work6").val();
    window.localStorage.setItem("2pm", (work6));   
};

// storage for 3pm
saveBtnEl7.on("click", saveEl7);
function saveEl7(event){
    event.preventDefault();
    var work7 = $("#work7").val();
    window.localStorage.setItem("3pm", (work7));   
};

// storage for 4pm
saveBtnEl8.on("click", saveEl8);
function saveEl8(event){
    event.preventDefault();
    var work8 = $("#work8").val();
    window.localStorage.setItem("4pm", (work8));   
};

// storage for 5pm
saveBtnEl9.on("click", saveEl9);
function saveEl9(event){
    event.preventDefault();
    var work9 = $("#work9").val();
    window.localStorage.setItem("5pm", (work9));   
};
