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

