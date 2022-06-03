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
  // for (let i = 0; i < questionsArray.length; i++) {
    const chosenQIndex = Math.floor(Math.random() * questionsArray.length)
    console.log(chosenQIndex)
  // }
  return questionsArray[chosenQIndex]
}

function displayQ(chosenQ) {
    // const qArray = Object.values(chosenQ);
    question.textContent = chosenQ.Question;
    answerA.textContent = chosenQ.A;
    answerB.textContent = chosenQ.B;
    answerC.textContent = chosenQ.C;
    answerD.textContent = chosenQ.D;
  }



  // for (let j = 0; j < qArray.length; j++) {
  //   document.getElementById("question").innerHTML = [j].Question;
  //   document.getElementById("A").innerHTML = [j].A;
  //   document.getElementById("B").innerHTML = [j].B;
  //   document.getElementById("C").innerHTML = [j].C;
  //   document.getElementById("D").innerHTML = [j].D;
  // }

//when questions answered or timer === 0 game over

// save initials and score

const question1 = {
  Question: "What kind of primitive type refers to a true or false value?",
  A: "Boolean",
  B: "Variable",
  C: "String",
  D: "Number"
};

const question2 = {
  Question: "What holds a collection of items, referred to by indices?",
  A: "String",
  B: "Boolean",
  C: "Array",
  D: "List"
}

const question3 = {
  Question: "What is the term for using JavaScript to access specific parts of the HTML?",
  A: "Third party API",
  B: "Traversing the DOM",
  C: "Pathing via javascript",
  D: "Navigating the HTML"
}

const question4 = {
  Question: "What is a section of code that runs repeatedly until conditions are met?",
  A: "Loop",
  B: "Object",
  C: "Element",
  D: "Variable"
}

const question5 = {
  Question: "What is used to create an arbitrary name given to a specific piece of information?",
  A: "Variable",
  B: "String",
  C: "Boolean",
  D: "Array"
}

const question6 = {
  Question: "What allows elements within HTML to arrange themselves according to element size and space in a parent element?",
  A: "Flow-square",
  B: "Justify-content",
  C: "Media-query",
  D: "Flex-box"
}

const question7 = {
  Question: "What is it called when an app rescales according to screen size?",
  A: "Scaling Design",
  B: "Media Rescaling",
  C: "Responsive Design",
  D: "Screen resizing"
}

startBtn.addEventListener("click", startGame)

var questionIndex = 0
var questionsArray = [question1, question2, question3, question4, question5, question6, question7]



startBtn.addEventListener("click", startGame)