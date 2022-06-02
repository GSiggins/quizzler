var questionInput = document.getElementById("question")
var answerA = document.getElementById("A")
var answerB = document.getElementById("B")
var answerC = document.getElementById("C")
var answerD = document.getElementById("D")

init()

// event listener for start game

// timer starts
function setTime() {
  // Sets interval in variable
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = "You have " + secondsLeft + "seconds left!";

    if(secondsLeft === 0) {
      clearInterval(timerInterval);
      timeUp();
    }

  }, 1000);
}
// question and answers populate


// correct answer gives new question



// wrong answer subtracts time AND gives new question



//when questions answered or timer === 0 game over



// save initials and score

var question1 = {
  Question: "What kind of primitive type refers to a true or false value?",
  A: "Boolean",
  B: "Variable",
  C: "String",
  D: "Number"
};

var question2 = {
Question: "What holds a collection of items, referred to by indices?",
A: "String",
B: "Boolean",
C: "Array",
D: "List"
}

var question3 = {
  Question: "What is the term for using JavaScript to access specific parts of the HTML?",
  A: "Third party API",
  B: "Traversing the DOM",
  C: "Pathing via javascript",
  D: "Navigating the HTML"
}

var question4 = {
  Question: "What is a section of code that runs repeatedly until conditions are met?",
  A: "Loop",
  B: "Object",
  C: "Element",
  D: "Variable"
}

var question5 = {
  Question: "What is used to create an arbitrary name given to a specific piece of information?",
  A: "Variable",
  B: "String",
  C: "Boolean",
  D: "Array"
}

var question6 = {
  Question: "What allows elements within HTML to arrange themselves according to element size and space in a parent element?",
  A: "Flow-square",
  B: "Justify-content",
  C: "Media-query",
  D: "Flex-box"
}

var question7 = {
Question: "What is it called when an app rescales according to screen size?",
A: "Scaling Design",
B: "Media Rescaling",
C: "Responsive Design",
D: "Screen resizing"
}