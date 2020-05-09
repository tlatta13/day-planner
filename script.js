// Display current date and time
var currentDateAndTime = Date(Date.now());
    $("#currentDay").append(currentDateAndTime);

var currentHour = new Date().getHours();

// Click function for save buttons  
$(".btn").click(function() {
    var hour = $(this).val()
    localStorage.setItem("time" + hour, $("#textInput").val());
})


// Loop through hours to change text area color
for (var i = 9; i < 18; i++) {
    var noteInput = localStorage.getItem("time" + i)
    if(noteInput !== null) {
        $("#textInput" + i).val(noteInput);
        console.log(noteInput)
    }       
}        