// Wrap all code that interacts with the DOM in a call to jQuery to ensure that the code isn't run until the browser has finished rendering all the elements in the html.
// following 2 const variables get the current time/date at time of loading application, verified in the console. 
const currentUnix = dayjs().unix();
console.log(currentUnix);
const currentTime = dayjs.unix(currentUnix).format('M/D/YYYY h:mm:ss');
console.log(currentTime);
$('#currentDay').text(currentTime);

var timeBlockArray = ['9','10','11','12','13','14','15','16','17'];

$(function () {
  
  $(".saveBtn").on("click", function() {
    // local storage key = saveBtn parent, the div and id 'hour-#'
    // local storage value = saveBtn prev element, the textarea and its text value
    localStorage.setItem($(this).parent().attr("id"), $(this).prev().val())
  });
  console.log(localStorage) // unsure what "undefined" comes from in results? Does not appear to affect anything

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
      
  }

  // TODO: Add code to get any user input that was saved in localStorage and set the values of the corresponding textarea elements. HINT: How can the id attribute of each time-block be used to do this?
  // var textArea = document.getElementsByClassName("description");
  // localStorage.getItem();
  // textArea.textContent = 
});