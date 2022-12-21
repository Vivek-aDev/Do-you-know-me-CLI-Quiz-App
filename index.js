var readlineSync = require("readline-sync");

var score = 0;

// data of high score
var highScores = [
  {
    name: "Vivek",
    score: 3,
  },

  {
    name: "Rajesh",
    score: 2,
  },{
    name: "Sachin",
    score: 4,
  }
]

// array of objects
var questions = [{
  question: "Where do I live? ",
  answer: "Bhubaneswar"
}, {
  question: "My favorite food is? ",
  answer: "Pakhala"
},
{
  question: "What is my age? ",
  answer: "23"
},{
  question: "what is my school name ?",
  answer: "svm"
}];

function welcome() {
 var userName = readlineSync.question("What's your name? ");

  console.log("Welcome "+ userName + " to DO YOU KNOW Vivek?");
}


// play function
function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) { // branching
    console.log("right!");
    score = score + 1;
    
  } else {
    console.log("oops!");
   
  }

  console.log("current score: ", score);
  console.log("-------------")
}

function game() {
  for (var i=0; i<questions.length; i++) {
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer)
  }
}

function showScores() {
  console.log("YAY! You SCORED: ", score);

  console.log("Check out the high scores, if you should be there ping me and I'll update it");

  highScores.map(score => console.log(score.name, " : ", score.score))
}


welcome();
game();
showScores();
