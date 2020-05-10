// Display current date and time
var currentDateAndTime = Date(Date.now());
$("#currentDay").append(currentDateAndTime);

    // Click function for save buttons  
    $(".btn").click(function() { 
        var hourNum = $(this).val();
        localStorage.setItem("hour" + hourNum, $(".description").val());
    })
        
function checkHours() {
    
    var currentHour = new Date().getHours();
    console.log(currentHour);
    
    // Loop through hours
    for (var i = 9; i < 18; i++) {


        // get local storage
        var noteInput = localStorage.getItem("hour" + i);
        if(noteInput !== null) {
            $(".description").val(noteInput);
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