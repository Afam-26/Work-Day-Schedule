let currentDayEl = $("#currentDay");
let timeEl = $("#time")
let saveBtnEl1 = $("#saveBtn-1")
let saveBtnEl2 = $("#saveBtn-2")
let saveBtnEl3 = $("#saveBtn-3")
let saveBtnEl4 = $("#saveBtn-4")
let saveBtnEl5 = $("#saveBtn-5")
let saveBtnEl6 = $("#saveBtn-6")
let saveBtnEl7 = $("#saveBtn-7")
let saveBtnEl8 = $("#saveBtn-8")
let saveBtnEl9 = $("#saveBtn-9")



// current day and time
function setTime() {
    let today = moment();
    currentDayEl.text("Current Day: " + today.format('MMMM Do YYYY, h:mm:ss a'));

}



//  storage for 9am
saveBtnEl1.on("click", saveEl1);
function saveEl1(event){
    event.preventDefault();
    let work1 = $("#work1").val();
    window.localStorage.setItem("9am", work1);  
   
};

function loadPlanner() {
    let work1 = localStorage.getItem("9am");
     $("#work1").val(work1);
         
}



// storage for 10am
saveBtnEl2.on("click", saveEl2);
function saveEl2(event){
    event.preventDefault();
    let work2 = $("#work2").val();
    window.localStorage.setItem("10am", JSON.stringify(work2));
    JSON.parse(window.localStorage.getItem("10am"));     
};

// storage for 11am
saveBtnEl3.on("click", saveEl3);
function saveEl3(event){
    event.preventDefault();
    let work3 = $("#work3").val();
    window.localStorage.setItem("11am", JSON.stringify(work3));  
    JSON.parse(window.localStorage.getItem("11am"));   
};

// storage for 12pm
saveBtnEl4.on("click", saveEl4);
function saveEl4(event){
    event.preventDefault();
    let work4 = $("#work4").val();
    window.localStorage.setItem("12pm", JSON.stringify(work4));   
    JSON.parse(window.localStorage.getItem("12pm")); 
};

// storage for 1pm
saveBtnEl5.on("click", saveEl5);
function saveEl5(event){
    event.preventDefault();
    let work5 = $("#work5").val();
    window.localStorage.setItem("1pm", JSON.stringify(work5)); 
    JSON.parse(window.localStorage.getItem("1pm"));   
};

// storage for 2pm
saveBtnEl6.on("click", saveEl6);
function saveEl6(event){
    event.preventDefault();
    let work6 = $("#work6").val();
    window.localStorage.setItem("2pm", JSON.stringify(work6));  
    JSON.parse(window.localStorage.getItem("2pm"));  
};

// storage for 3pm
saveBtnEl7.on("click", saveEl7);
function saveEl7(event){
    event.preventDefault();
    let work7 = $("#work7").val();
    window.localStorage.setItem("3pm", JSON.stringify(work7));   
    JSON.parse(window.localStorage.getItem("3pm")); 
};

// storage for 4pm
saveBtnEl8.on("click", saveEl8);
function saveEl8(event){
    event.preventDefault();
    let work8 = $("#work8").val();
    window.localStorage.setItem("4pm", JSON.stringify(work8)); 
    JSON.parse(window.localStorage.getItem("4pm"));   
};

// storage for 5pm
saveBtnEl9.on("click", saveEl9);
function saveEl9(event){
    event.preventDefault();
    let work9 = $("#work9").val();
    window.localStorage.setItem("5pm", JSON.stringify(work9));   
    JSON.parse(window.localStorage.getItem("5pm")); 
};


loadPlanner()
setInterval(setTime, 1000);