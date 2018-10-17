//start button ON CLICK initiates first timer, and resets the game just played (if applicable)
    //this will require RESET FUNCTION
    //this will require a timer
    //display timer

// timer
var seconds = 20;

// function twentySeconds() {
//     seconds = setInterval(decrement, 1000);
//     $("#secondsDisplay").text(seconds)
// }

// var timer = setInterval(function() {
//    seconds--;
// }, 1000);

// $("#secondsDisplay").text(timer);
// console.log(timer);

var seconds = 20;

var intervalId;

// $("#stop").on("click", stop); //referencing the stop function which is below

$("#startButton").on("click", run); //referencing the run button which is below

function run() {
  //clicking on the resume button a whole bunch, broke it...the way to fix it is to clear the interval like below,
  clearInterval(intervalId);
  //the fix for clearing the interval is above, without it, resume clicked multiple times activated the interval at a faster and faster rate
  intervalId = setInterval(decrement, 1000); //setInterval(whatDoYouWantToAffect, by seconds)
}

function decrement() {

  seconds--;

  $("#secondsDisplay").text(seconds); //the decremented value is now showing on the page

  if (seconds === 0) {

    stop();

    alert("Time Up!");
  }
}

function stop() {

    clearInterval(intervalId);
  }

// run();

//QUESTIONS ARRAY of 30 items, containing questions and 30 answers

//user selects answer and CONFIRMS
    //answer correct or incorrect displays
    //if incorrect then correct answer inset box displays for 3 seconds
//if user does not CONFIRM answer within 20 seconds, the question is marked incomplete and marked incorrect
    //no correct answer displayed
//if user answers correctly, correct answers increments by 1
//if user answers incorrectly, incorrect answers increments by 1
//at end of 10 questions, the game is over
    //game status (win/losses) displays
    //notify user if they wish to play again to hit start button again