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

const questions = [{
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
const options = document.getElementById("options");

// The score varibale 
let score = 0;

// Get the start button and add event listener to it to start the quiz
const startButton = document.getElementById("start");
startButton.addEventListener("click", startQuiz);

// Start the Quiz 

function startQuiz() {

    start.style.display = "none";
    showQuestion();
    showProgress();
    document.getElementById("quiz").style.display = "block";
};

//  Declaring the question and the options variables, 
// and displaying the question with the options to the user 

function showQuestion() {
    // Show questions and options
    let question = document.getElementById("question");
    let A = document.getElementById('btn0');
    let B = document.getElementById('btn1');
    let C = document.getElementById('btn2');

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

    const progress = document.getElementById("progress");

    for (let i = 0; i < questions[questionIndex].options; i++) {
        progress.innerHTML += questions[questionIndex].options[i];
    }

};
/* These two functions did not work for me 
the way I was intending was to change the button color 
to either green or red, alternatively I have used the alert system.

// If the answer is correct, give the selected option a green color

function isCorrect() {
    options.style.backgroundColor = "green";

};

// if the answer is wrong, give the selected option red color

function isWrong() {
    options.style.backgroundColor = "red";
};

*/


/* This function helps the user to select the answer 
from the options. We are using the options variable as the argument 
to check whether the user is giving us the correct answer or not
*/

function checkAnswer(options) {

    if (options === questions[questionIndex].correctAnswer) {
        alert("Correct Answer! :D");

        score++;
        //isCorrect();

    } else {
        alert("Answer is Inccorect! :(");
        // isWrong();

    }

    // If the user has not exceeded the numbers of questions given 
    // show the next question 

    if (questionIndex < questions.length - 1) {

        questionIndex++;
        showQuestion();
        showProgress();

    } else {
        //Alrert Quiz is completed, show the results to the user and retake quiz

        alert("Quiz is Completed!");

        // display the reults area 
        document.getElementById("score-container").style.display = "block";

        //Show results, and retake quiz via the restart quiz link 
        document.getElementById("container").innerHTML = `<h1> Results </h1>
        <h3 id="score">You Scored:${score} of ${questions.length}</h3><button class="restart btn"><a href="index.html">Restart Quiz </a></button>`;
    }


};