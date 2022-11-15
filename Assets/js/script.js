// Wrap all code that interacts with the DOM in a call to jQuery to ensure that the code isn't run until the browser has finished rendering all the elements in the html.
// following 2 const variables get the current time/date at time of loading application, verified in the console. 
const currentUnix = dayjs().unix();
console.log(currentUnix);
const currentTime = dayjs.unix(currentUnix).format('M/D/YYYY h:mm:ss');
console.log(currentTime);
$('#currentDay').text(currentTime);

var timeBlockArray = ['9','10','11','12','13','14','15','16','17'];

$(function () {
  // TODO: Add a listener for click events on the save button. This code should use the id in the containing time-block as a key to save the user input in local storage. HINT: What does `this` reference in the click listener function? How can DOM traversal be used to get the "hour-x" id of the time-block containing the button that was clicked? How might the id be useful when saving the description in local storage?
  // use for loop to iterate through buttons and add event listeners to all(look into jquery .on)
  var saveBtn = document.getElementsByClassName("saveBtn");
  var eventDescription = document.querySelector("#description");
  saveBtn.addEventListener('click', function(){
    localStorage.setItem()
  });

  
  // TODO: Add code to apply the past, present, or future class to each time block by comparing the id to the current hour. HINTS: How can the id attribute of each time-block be used to conditionally add or remove the past, present, and future classes? How can Day.js be used to get the current hour in 24-hour time?

  // takes current time and time array to grab relevant HTML timeblock
  // TODO: fix 24hr bug, past time 12 noon, all timeblocks are green(future)
  for (var i = 0; i < timeBlockArray.length; i++) {
    let time = timeBlockArray[i] * 1;
    var timeBlock = document.querySelector('#hour-' + time)
    var currentTime24Hr = (dayjs().format('H')) * 1
      console.log(currentTime24Hr, time)
    if (time === currentTime24Hr) {
      timeBlock.classList.add("present");/*present = red*/
    } else if (time < currentTime24Hr) {
      timeBlock.classList.add("past");/*past = grey*/
    } else if (time > currentTime24Hr) {
      timeBlock.classList.add("future");/*future = green*/
    }
    // TODO: use setInterval to update css color styling
      
  }

  // TODO: Add code to get any user input that was saved in localStorage and set the values of the corresponding textarea elements. HINT: How can the id attribute of each time-block be used to do this?
  // place getItem towards top, needs similar loop 
  var textArea = document.getElementsByClassName("description");
  localStorage.getItem();
  textArea.textContent = 
});