/* The Quiz Logic:
We are creating total of 5 questions 
We are using 6 helper functions 
We starting the game with a start button
For each question,find the selected answer button
If the answer is correct respond accordignly  
If the answer is inccorect respond accordignly
Show the number of correct answers out of the totals
Finally retake the quiz via clicking the restart quiz link provided */


// The quiz data 

let questions = [{
    question: " Which HTML element defines navigation links?",
    A: "nav",
    B: "navigate",
    C: "navigation",
    correctAnswer: "A"
},


{
    question: "what does the CSS stand for?",
    A: "Cascading Style Sheets",
    B: "Computer Style Sheets",
    C: "Creative Style Sheets",
    correctAnswer: "A"
},

{
    question: "Which property is used to change the font of an element?",
    A: "font-weight",
    B: "font-style",
    C: "font-family",
    correctAnswer: "C"
},


{
    question: "How do you create a function in JavaScript?",
    A: "function:myFunction()",
    B: "function = myFunction()",
    C: "function myFunction()",
    correctAnswer: "C"
},


{
    question: "How does a WHILE loop start?",

    A: "while (i <= 10)",
    B: "while (i <= 10; i++)",
    C: "while i = 1 to 10",
    correctAnswer: "A"
}
];

// Defining the quiz global variables 

// array question index variable 
let questionIndex = 0;

// declaring answer options varibale 
let options = document.getElementById("options");

// The score varibale 
let score = 0;

// Get the start button and add event listener to it to start the quiz
let startButton = document.getElementById("start");
startButton.addEventListener("click", startQuiz);

// Start the Quiz function
function startQuiz() {

    start.style.display = "none";
    
    let quiz = document.getElementById("quiz"); 
    quiz.style.display = "block";
};

//  Declaring the question and the options variables, 
// and displaying the question with the options to the user 

function showQuestion() {
// Show questions and options
let question = document.getElementById("question");
let A = document.getElementById('btn0');
let B = document.getElementById('btn1');
let C = document.getElementById('btn2');

// declaring question number variable 
let questionNumber = document.getElementById("qno");


let questionElement = questions[questionIndex];

question.innerHTML = questionElement.question;
A.innerHTML = questionElement.A;
B.innerHTML = questionElement.B;
C.innerHTML = questionElement.C;

showProgress();
   
};

/*This function helps to iterate through questions with its options 
  and display it to the user*/

function showProgress() {

let progress = document.getElementById("progress");

for (let i = 0; i < questions[questionIndex].options; i++) {
    progress.innerHTML += questions[questionIndex].options[i];
}
    
};

// If the answer is correct, give the selected option a green color

function isCorrect() {
    options.style.backgroundColor = "green";

};

// if the answer is wrong, give the selected option red color

function isWrong() {
    options.style.backgroundColor = "red";
};


/* This function helps the user to select the answer 
from the options. We are using the options variable as the argument 
to check whether the user is giving us the correct answer or not
*/

function checkAnswer(options) {
    
    if (options === questions[questionIndex].correctAnswer) {
        alert("Correct Answer! :D");
        // this.style.backgroundColor = "green"

        score++;
        // isCorrect();

    } else {
        alert("Answer is Inccorect! :(");
        // this.style.backgroundColor = "red";
        // isWrong();
    }

    // If the user has not exceeded the numbers of questions given 
    // we show the next question 

    if (questionIndex < questions.length - 1) {

        questionIndex++;
        showQuestion();
        showProgress();

    } else {
        //Alrert Quiz is completed, show the results to the user and retake quiz

        alert("Quiz is Completed!");

        // declare the score container varible and display the reults area 

        let scoreContainer = document.getElementById("score-container");
        scoreContainer.style.display = "block";

        // Add event listener to restart the quiz and reneder the questions on page load event
        window.addEventListener("load", startQuiz);

        // declaring Quiz container variable 
        let quizContainer = document.getElementById("container");

        //Show results, and retake quiz via the restart quiz link 
        quizContainer.innerHTML = `<h1> Results </h1>
        <h3 id="score">You Scored:${score} of ${questions.length}</h3><button class="restart btn"><a href="index.html">Restart Quiz </a></button>`;
    }
        

};













