# Daily Schedule Planner

## Objective
This project required us to create a daily schedule planner for employees to use to log out their daily schedule and store their list in local storage using javascript and jquery methods. 

## Project Accomplishments
* Created a UI with text inputs for every hour of the workday
* Called on the stylesheet through the js file to change the color of input areas based on time of day


## Site Link
https://tlatta13.github.io/online-quiz/
[Arsenal Quiz](https://tlatta13.github.io/online-quiz/)




# JavaScript
- Wait for DOM to be "ready", then...
  - Create a function to update the hours
    - Get the current hour in military time (i.e. 14 for 2pm)
    - Loop over all of the .time-blocks
      - Figure out which hour this block represents
      - If this block's hour is less than the current hour:
        - Add the class "past" to this block
      - Else if this block's hour is the current hour:
        - Remove "past" class from this time block
        - Add "present" class to this time block
      - Else
        - Remote the "past" class from this time block
        - Remove the "present" class from this time block
        - Add the "future" class to this time block
  - Call the function we just created to update the hours the first time
  - Re-run the function on an interval (every 60s?) to update as time changes
  - Load data for 9AM block from localStorage
  - Load data for 10AM block from localStorage
  - Load data for 11AM block from localStorage
  - Load data for 12PM block from localStorage
  - Load data for 1PM block from localStorage
  - Load data for 2PM block from localStorage
  - Load data for 3PM block from localStorage
  - Load data for 4PM block from localStorage
  - Load data for 5PM block from localStorage
  - Update the current date/time at the top of the page
  - Set up a click handler for the save button:
    - Get the value from the textarea in the block that is being saved
    - Get the time (i.e. 9) of the time block that's being saved
    - Store the value from the textarea in localStorage, using the hour as the key



