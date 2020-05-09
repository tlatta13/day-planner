// Display current date and time
var currentDateAndTime = Date(Date.now());
$("#currentDay").append(currentDateAndTime);

var currentHour = new Date().getHours();
        console.log(currentHour);

// Click function for save buttons  
$(".btn").click(function() { 
    var hourNum = $(this).val();
    localStorage.setItem("time" + hourNum, $("#textInput" + hourNum).val());
})

function checkHours() {
    // Loop through hours
    for (var i = 9; i < 18; i++) {
        
        // get local storage
        var noteInput = localStorage.getItem("time" + i);
        if(noteInput !== null) {
            $(".description" + i).val(noteInput);
            // console.log(noteInput)
        }   
        
        // Change text area color
        if (parseInt(currentHour) > i) {
            $(".description").addClass("past");
            $(".description").removeClass("present");
            $(".description").removeClass("future");
            // console.log(i)
        } 
        else if (parseInt(currentHour) === i) {
            $(".description").addClass("present");
            $(".description").removeClass("past");
            $(".description").removeClass("future");
            // console.log(i) 
        } 
        else { 
            $(".description").addClass("future");
            $(".description").removeClass("present");
            $(".description").removeClass("past");
            // console.log(i)
        }
        
    }
}


checkHours()