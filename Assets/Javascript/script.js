var questionInput = document.getElementById("question")
var timeEl = document.getElementById("timer")
var answerA = document.getElementById("A")
var answerB = document.getElementById("B")
var answerC = document.getElementById("C")
var answerD = document.getElementById("D")
var startBtn = document.getElementById("startBtn")
var questions = document.querySelector("#questionsBox")
var intro = document.querySelector("#intro")
var question = document.querySelector("#question")
var gameOver = document.querySelector('#game-over')
var buttons = document.querySelector('#buttons')
var result = document.getElementById('result')
var winner = document.querySelector('#winScreen')
var highscorePage = document.getElementById('highscore-page')
var secondsLeft = 15
var questionIndex = 0

//Sets each question object including a QUESTION property and A-D SUB-OBJECTS
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
var questionsArray = [question1, question2, question3, question4, question5, question6, question7]

//starts game by hiding the intro screen and starting the timer, 
//then choosing and displaying the first question.
function startGame() {
  console.log(questionsArray)
  intro.className = "hidden";
  questions.className = "show";
  setTime();
  displayQ(chooseQ());
}


//sets condition if time runs out or if the player exhausts the questions array
function setTime() {
  secondsLeft = 15
  timerInterval = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = "You have " + secondsLeft + " seconds left!";
    if (secondsLeft === 0) {
      clearInterval(timerInterval);
      timeUp();
    }
  }, 1000);
  return secondsLeft;
}

// event listener for start game
function chooseQ() {
  chosenQIndex = Math.floor(Math.random() * questionsArray.length);
  console.log("The index of the question chosen was " + chosenQIndex);
  // displayQ(questionsArray[chosenQIndex]);
  return questionsArray[chosenQIndex];
}

function displayQ(chosenQ) {
  // const qArray = Object.values(chosenQ);
  console.log("showing index " + chosenQIndex)
  question.textContent = chosenQ.Question;
  answerA.textContent = chosenQ.A.answerText;
  answerA.dataset.correct = chosenQ.A.correct;
  answerB.textContent = chosenQ.B.answerText;
  answerB.dataset.correct = chosenQ.B.correct;
  answerC.textContent = chosenQ.C.answerText;
  answerC.dataset.correct = chosenQ.C.correct;
  answerD.textContent = chosenQ.D.answerText;
  answerD.dataset.correct = chosenQ.D.correct;
  questionsArray.splice(chosenQIndex, 1);
  console.log(questionsArray);
}
if (questionsArray.length === 0) {
  winScreen();
}

// Displays a correct message and moves to the next question
function checkAnswer() {
  var checkCorrect = this.dataset.correct;
  console.log(this.dataset.correct);
  console.log(checkCorrect);
  displayResult(checkCorrect, secondsLeft);
}

//Display an incorrect message and moves to the next question
function displayResult(checkCorrect, secondsLeft) {
  if (checkCorrect === 'true') {
    result.innerHTML = "Correct!";
    displayQ(chooseQ());
  } else {
    result.innerHTML = "Incorrect!";
    secondsLeft = +document.getElementById("timer").value
    secondsLeft -= 3;
    displayQ(chooseQ());
  }
  return;
}


//displays a game over screen if the player runs out of time
function timeUp() {
  questions.className = "hidden";
  gameOver.className = "show";
  resultTimeout = setTimeout(function () {
    highscorePage.className = "show";
  }, 5000);
  return;
}


//shows a YOU WIN dialogue if the player exhausts the questions array (answers all questions)
function winScreen() {
  questions.className = "hidden";
  winner.className = "show";
  resultTimeout = setTimeout(function () {
    highscorePage.className = "show";
  }, 5000);
  highscoreScreen();
  return;
}


//displays the highscore Screen and saves inputs to localstorage
function highscoreScreen() {
  questions.className = "hidden";
  highscorePage.className = "show";
  return;
}

startBtn.addEventListener("click", startGame)
answerA.addEventListener("click", checkAnswer)
answerB.addEventListener("click", checkAnswer)
answerC.addEventListener("click", checkAnswer)
answerD.addEventListener("click", checkAnswer)


// Displays an correct message and moves to the next question
// function answerCorrect(checkCorrect) {
//   if (checkCorrect) {
//   result.textContent = "Correct!";
//   displayQ(chooseQ());
//   return;
// }
// }
