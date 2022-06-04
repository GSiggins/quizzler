var questionInput = document.getElementById("question")
var timeEl = document.getElementById("timer")
var answerA = document.getElementById("A")
var answerB = document.getElementById("B")
var answerC = document.getElementById("C")
var answerD = document.getElementById("D")
var startBtn = document.getElementById("startBtn")
var questions = document.querySelector(".questions")
var intro = document.querySelector(".intro")
var question = document.getElementById("question")
var buttons = document.getElementById('buttons')
var gameOver = document.getElementById('game-over')
var correct = document.getElementById('correct')
var incorrect = document.getElementById('incorrect')


// init()
function startGame() {
  questions.setAttribute("style", "display:flex");
  intro.setAttribute("style", "display:none");
  setTime();
  displayQ(chooseQ());
}

function setTime() {
  var secondsLeft = 35
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = "You have " + secondsLeft + " seconds left!";
    if (secondsLeft === 0) {
      clearInterval(timerInterval);
      timeUp();
    }
  }, 1000);
}

// event listener for start game
function chooseQ() {
  const chosenQIndex = Math.floor(Math.random() * questionsArray.length)
  console.log(chosenQIndex)
  return questionsArray[chosenQIndex]
}

function displayQ(chosenQ, chosenQIndex) {
  // const qArray = Object.values(chosenQ);
  question.textContent = chosenQ.Question;
  answerA.textContent = chosenQ.A.answerText;
  answerB.textContent = chosenQ.B.answerText;
  answerC.textContent = chosenQ.C.answerText;
  answerD.textContent = chosenQ.D.answerText;
  questionsArray.splice(chosenQIndex, 1);
  console.log(questionsArray);
}

//when questions answered or timer === 0 game over
// function timeUp () {
//   gameOver.setAttribute("style", "display:block");
//   questions.setAttribute("style", "display:none");
//   setTimeout(gameOver.setAttribute("style", "display:none"), questions.setAttribute("style", "display:block"), 5000);
//   return;
// }

// function checkAnswer(event)

// save initials and score
// function correct() {
//   correct.setAttribute("style", "display:block");
//   buttons.setAttribute("style", "display:none");
//   setTimeout(correct.setAttribute("style", "display:none"), buttons.setAttribute("style", "display:block"), 2000);
//   return;
// }

// function incorrect(secondsLeft) {
//   incorrect.setAttribute("style", "display:block");
//   buttons.setAttribute("style", "display:none");
//   setTimeout(incorrect.setAttribute("style", "display:none"), buttons.setAttribute("style", "display:block"), 2000);
//   secondsLeft - 3;
//   return;
// }


const question1 = {
  Question: "What kind of primitive type refers to a true or false value?",
  A: { answerText: "Boolean", correct: 'true' },
  B: { answerText: "Variable", correct: 'false' },
  C: { answerText: "String", correct: 'false' },
  D: { answerText: "Number", correct: 'false' }
};

const question2 = {
  Question: "What holds a collection of items, referred to by indices?",
  A: { answerText: "String", correct: 'false' },
  B: { answerText: "Boolean", correct: 'false' },
  C: { answerText: "Array", correct: 'true' },
  D: { answerText: "List", correct: 'false' }
}

const question3 = {
  Question: "What is the term for using JavaScript to access specific parts of the HTML?",
  A: { answerText: "Third party API", correct: 'false' },
  B: { answerText: "Traversing the DOM", correct: 'true' },
  C: { answerText: "Pathing via javascript", correct: 'false' },
  D: { answerText: "Navigating the HTML", correct: 'false' }
}

const question4 = {
  Question: "What is a section of code that runs repeatedly until conditions are met?",
  A: { answerText: "Loop", correct: 'true' },
  B: { answerText: "Object", correct: 'false' },
  C: { answerText: "Element", correct: 'false' },
  D: { answerText: "Variable", correct: 'false' }
}

const question5 = {
  Question: "What is used to create an arbitrary name given to a specific piece of information?",
  A: { answerText: "Variable", correct: 'true' },
  B: { answerText: "String", correct: 'false' },
  C: { answerText: "Boolean", correct: 'false' },
  D: { answerText: "Array", correct: 'false' }
}

const question6 = {
  Question: "What allows elements within HTML to arrange themselves according to element size and space in a parent element?",
  A: { answerText: "Flow-square", correct: 'false' },
  B: { answerText: "Justify-content", correct: 'false' },
  C: { answerText: "Media-query", correct: 'false' },
  D: { answerText: "Flex-box", correct: 'true' }
}

const question7 = {
  Question: "What is it called when an app rescales according to screen size?",
  A: { answerText: "Scaling Design", correct: 'false' },
  B: { answerText: "Media Rescaling", correct: 'false' },
  C: { answerText: "Responsive Design", correct: 'true' },
  D: { answerText: "Screen resizing", correct: 'false' }
}

startBtn.addEventListener("click", startGame)

var questionIndex = 0
var questionsArray = [question1, question2, question3, question4, question5, question6, question7]

// buttons.addEventListener("click", checkAnswer)
