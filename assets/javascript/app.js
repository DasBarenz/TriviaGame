var correctCount = 0;
var incorrectCount = 0;
var userGuess = "";
var questionCount = 0;
// timer
var seconds = 5; //CHANGE THIS BACK to 20 to SUBMIT!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
var intervalId;

function run() {
  clearInterval(intervalId);
  intervalId = setInterval(decrement, 1000);
}

$("#startButton").on("click", function() {
  run();
  displayQuestion();
});//referencing the run button which is up with timer stuff

function decrement() {
  seconds--;
  $("#secondsDisplay").text(seconds);
  if (seconds === 0) {
    stop();
    incorrectCount++;
    $("#answerStatus").html("<p>Oh no! You ran out of time!</p>");
  }
}

function stop() {
    clearInterval(intervalId);
  }


//QUESTIONS ARRAY of 30 items, containing questions and 30 answers
var questions = [
  {question:"'Give me your tired, your poor / Your huddled masses' reads the plaque at the base of the Statue of Liberty.", choice:["TRUE", "FALSE"], 
      answer:"TRUE"},
  {question:"Paprika is the Hungarian word for pepper.", choice:["TRUE", "FALSE"], 
      answer:"TRUE"},
  {question:"A right triangle can never be equilateral.", choice:["TRUE", "FALSE"], 
      answer:"TRUE"},
  {question:"Albert Einstein was awarded the Nobel Prize in Physics.", choice:["TRUE", "FALSE"], 
      answer:"TRUE"},
  {question:"Baby koalas are called joeys.", choice:["TRUE", "FALSE"], 
      answer:"TRUE"},
  {question:"Brazil is the only country in the Americas whose official language is Portuguese.", choice:["TRUE", "FALSE"], 
      answer:"TRUE"},
  {question:"Dracula was a real-life figure in history.", choice:["TRUE", "FALSE"], 
      answer:"TRUE"},
  {question:"Edward in the Twilight series is a 'vegetarian vampire,' meaning he drinks only non-human, animal blood.", choice:["TRUE", "FALSE"], 
      answer:"TRUE"},
  {question:"Freddy Kreuger is the villain in the 'Friday the 13th' movies.", choice:["TRUE", "FALSE"], 
      answer:"FALSE"},
  {question:"Gone with the Wind takes place in Savannah, Georgia.", choice:["TRUE", "FALSE"], 
      answer:"FALSE"},
  {question:"In Dante's Inferno, the deepest ring of Hell is reserved for murderers.", choice:["TRUE", "FALSE"], 
      answer:"FALSE"},
  {question:"In the famous novel of the same name, Frankenstein is a monster constructed from body parts.", choice:["TRUE", "FALSE"], 
      answer:"FALSE"},
  {question:"Long useful to archaeologists, The 'La Brea Tar Pits' are found in Los Angeles.", choice:["TRUE", "FALSE"], 
      answer:"TRUE"},
  {question:"No bird can fly backwards.", choice:["TRUE", "FALSE"], 
      answer:"FALSE"},
  {question:"Snow White’s seven dwarfs all worked as lumberjacks.", choice:["TRUE", "FALSE"], 
      answer:"FALSE"},
  {question:"The African elephant is the largest carnivore on land.", choice:["TRUE", "FALSE"], 
      answer:"FALSE"},
  {question:"The American Civil War ended in 1776.", choice:["TRUE", "FALSE"], 
      answer:"FALSE"},
  {question:"The Bill of Rights contains 10 amendments to the Constitution.", choice:["TRUE", "FALSE"], 
      answer:"TRUE"},
  {question:"The capital of Libya is Benghazi.", choice:["TRUE", "FALSE"], 
      answer:"FALSE"},
  {question:"The Dickens novel Oliver Twist begins with the well-known phrase, 'It was the best of times, it was the worst of times.'", choice:["TRUE", "FALSE"], 
      answer:"FALSE"},
  {question:"The favorite food of the Teenage Mutant Ninja Turtles is pizza.", choice:["TRUE", "FALSE"], 
      answer:"FALSE"},
  {question:"The first name of Kramer in Seinfeld is Cosmo.", choice:["TRUE", "FALSE"], 
      answer:"FALSE"},
  {question:"The Ford Edsel was named after Henry Ford’s father.", choice:["TRUE", "FALSE"], 
      answer:"FALSE"},
  {question:"The Indy 500 car race is the largest single-day, spectator-attended sporting event.", choice:["TRUE", "FALSE"], 
      answer:"TRUE"},
  {question:"The modern Caesar salad is derived from a recipe dating back to ancient Rome.", choice:["TRUE", "FALSE"], 
      answer:"FALSE"},
  {question:"The name Sylvia Plath was a pseudonym.", choice:["TRUE", "FALSE"], 
      answer:"FALSE"},
  {question:"The tiniest bones in the human body are found in the hand.", choice:["TRUE", "FALSE"], 
      answer:"FALSE"},
  {question:"There are seven red stripes in the United States flag.", choice:["TRUE", "FALSE"], 
      answer:"TRUE"},
  {question:"Thomas Jefferson was the second president of the United States.", choice:["TRUE", "FALSE"], 
      answer:"FALSE"},
  {question:"Tug-of-war was once an Olympic sport.", choice:["TRUE", "FALSE"], 
      answer:"TRUE"},             
];
console.log(questions);
var qCount = questions.length;

//reusable reset function for use between questions
function minorReset() {
    stop();
    setTimeout(displayQuestion(), 3000);
    userGuess = ""; //this is not reseting properly...gets my counts off bc they are all compounding
    seconds = 20;
    run();
    // displayQuestion();
  }

//Select random question from array
function displayQuestion() {
    var index = Math.floor(Math.random() * questions.length);
    var pick = questions[index];
    questionCount++;
    console.log (questionCount);
    $("#questionsDisplay").text(pick.question);

    //Click to answer
    $(".answerChoice").on("click", function () {
      userGuess = ($(this).val());
      console.log(userGuess);
      console.log(pick.answer);
      // correct or incorrect response
      if (userGuess === pick.answer) {
        correctCount++;
        $("#correctCount").text(correctCount);
        $("#answerStatus").text("Ya did it!");
        minorReset();
      } else {
        incorrectCount++;
        $("#incorrectCount").text(incorrectCount);
        $("#answerStatus").text("Wrongo, blockhead.");
        minorReset();
      };
    });
  };



// $("#startButton").on("click", run() {
//   displayQuestion();
// }); //referencing the run button which is up with timer stuff