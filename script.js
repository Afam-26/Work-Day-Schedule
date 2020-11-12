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

//  storage section for 9am
saveBtnEl1.on("click", saveEl1);
function saveEl1(event){
    event.preventDefault();
    let work1 = $("#work1").val();
    window.localStorage.setItem("9am", work1);   
    let t = new Date().getHours();
    if(t  > 9){
        // $("#work").css({"background-color":"red"});
        document.body.style.backgroundColor="orange";
    }else {
        // $("#work").css({"background-color":"yellow"});
        document.body.style.backgroundColor="red";
    }
};

function loadPlanner1() {
    let work1 = localStorage.getItem("9am");
     $("#work1").val(work1);         
}


// storage section for 10am
saveBtnEl2.on("click", saveEl2);
function saveEl2(event){
    event.preventDefault();
    let work2 = $("#work2").val();
    window.localStorage.setItem("10am", work2);       
};

function loadPlanner2() {
    let work2 = localStorage.getItem("10am");
     $("#work2").val(work2);
         
}

// storage section for 11am
saveBtnEl3.on("click", saveEl3);
function saveEl3(event){
    event.preventDefault();
    let work3 = $("#work3").val();
    window.localStorage.setItem("11am", work3);        
};

function loadPlanner3() {
    let work3 = localStorage.getItem("11am");
     $("#work3").val(work3);
         
}

// storage section for 12pm
saveBtnEl4.on("click", saveEl4);
function saveEl4(event){
    event.preventDefault();
    let work4 = $("#work4").val();
    window.localStorage.setItem("12pm", work4);     
};

function loadPlanner4() {
    let work4 = localStorage.getItem("12pm");
     $("#work4").val(work4);
         
}

// storage section for 1pm
saveBtnEl5.on("click", saveEl5);
function saveEl5(event){
    event.preventDefault();
    let work5 = $("#work5").val();
    window.localStorage.setItem("1pm", work5); 
};

function loadPlanner5() {
    let work5 = localStorage.getItem("1pm");
     $("#work5").val(work5);
         
}

// storage section for 2pm
saveBtnEl6.on("click", saveEl6);
function saveEl6(event){
    event.preventDefault();
    let work6 = $("#work6").val();
    window.localStorage.setItem("2pm", work6);   
};

function loadPlanner6() {
    let work6 = localStorage.getItem("2pm");
     $("#work6").val(work6);
         
}


// storage section for 3pm
saveBtnEl7.on("click", saveEl7);
function saveEl7(event){
    event.preventDefault();
    let work7 = $("#work7").val();
    window.localStorage.setItem("3pm", work7);   
};

function loadPlanner7() {
    let work7 = localStorage.getItem("3pm");
     $("#work7").val(work7);
         
}

// storage section for 4pm
saveBtnEl8.on("click", saveEl8);
function saveEl8(event){
    event.preventDefault();
    let work8 = $("#work8").val();
    window.localStorage.setItem("4pm", work8);  
};

function loadPlanner8() {
    let work8 = localStorage.getItem("4pm");
     $("#work8").val(work8);
         
}

// storage section for 5pm
saveBtnEl9.on("click", saveEl9);
function saveEl9(event){
    event.preventDefault();
    let work9 = $("#work9").val();
    window.localStorage.setItem("5pm", work9);   
};

function loadPlanner9() {
    let work9 = localStorage.getItem("5pm");
     $("#work9").val(work9);
         
}


loadPlanner1()
loadPlanner2()
loadPlanner3()
loadPlanner4()
loadPlanner5()
loadPlanner6()
loadPlanner7()
loadPlanner8()
loadPlanner9()
setInterval(setTime, 1000);