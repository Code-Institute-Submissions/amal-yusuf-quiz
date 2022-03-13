![CI logo](https://codeinstitute.s3.amazonaws.com/fullstack/ci_logo_small.png)

# Quiz Game Website 
This quiz is a very practical and informative way to learn about a subject. The quiz is about testing your basic knowledge about the three front-end programming languages (html, css, and js) based on a total of 5 different questions. The site is targeted toward users who are looking to test their basic knowledge about programming and have fun at the same time by taking part of the quiz. This website is aiming to enhance the users knowledge both adults and children by providing useful information in a very fun and interactive way.

![image](https://user-images.githubusercontent.com/91415085/158038177-89fa1ddd-f612-4007-b7af-f8dc636efca2.png)
http://ami.responsivedesign.is/?url=https%3A%2F%2Famal-yusuf.github.io%2Fquiz%2F#

# Features 
## Existing Features
### Heading 
The heading shows the quiz name which clearing tells the user what type of game.
### Start Quiz Button
This feature shows up as a button with clear instructions within it (Start Quiz) at the middle of the first page and it direct the user to the quiz questions area once the user has clicked on it

https://amal-yusuf.github.io/quiz/index.html
![image](https://user-images.githubusercontent.com/91415085/158038618-21c4b42a-42a2-4d1e-ab61-b107100440c6.png)

### Next Feature is the questions area 
There are 5 different questions, each question has 3 options to choose from, once the user has selected the an option for the first question an alert system will appear to notify the user if answer is correct or wrong, and It will navigate to the next question on the following page and so on, till reach the results section. The question is written in a clear font and the 3 options for each question are showing in buttons as per below images:
![image](https://user-images.githubusercontent.com/91415085/158038812-5a3293d9-94d3-4baf-beff-9293717f44c6.png)
![image](https://user-images.githubusercontent.com/91415085/158039004-6c87ec37-3e01-47b5-b5ad-20f36ce9a354.png)
![image](https://user-images.githubusercontent.com/91415085/158039013-22752562-d0bf-42cd-ace5-9b21bbfe0783.png)
![image](https://user-images.githubusercontent.com/91415085/158039023-f305fa63-a14b-407b-a6a2-a8b9b4a36def.png)
![image](https://user-images.githubusercontent.com/91415085/158039037-7f9fc0b8-3fd6-43bb-930b-711349dcb5e0.png)

### Next feature is the score-container area 
This section shows the results as a heading at the top of the page, the scores in the middle, and the retake Quiz below the scores. 
At the end of the fifth question, the user will be navigated to the results area which shows the number of correct answers out of the totals, and the user can retake the quiz via clicking the restart quiz link provided as per below:
![image](https://user-images.githubusercontent.com/91415085/158039224-8327ac23-ada4-4e1e-8b45-5709fc4627ba.png)

# Testing 

I have done testing to my code and checked all the features are working efficiently. 
I have run a lighthouse check on the project to inspect if there are any problems with accessibility, performance, and user experience
and I can confirm that the colors and fonts used are easy to read and accessible as per below link:
https://8000-amalyusuf-quiz-avle7wfxa2m.ws-eu34.gitpod.io/index.html
![image](https://user-images.githubusercontent.com/91415085/158040412-a0b50fc9-888c-42a5-9dae-af5882e28ba2.png)


I have taken My Mentor Nishant Kumar's advise, who has also looked at my code to check for mistakes and gave valuable advice to do few changes which I have implemented. I have mentioned the details on the credit section below 

I've also have checked this project through the W3C HTML validator and it passes.
No errors were returned when passing through the official W3C validator 
![image](https://user-images.githubusercontent.com/91415085/158039726-7a1882c4-ac77-406f-9bf5-09540b1599c4.png)
https://validator.w3.org/nu/#textarea


I have also checked it through the W3C CSS validator:
No errors were found when passing through the official (Jigsaw) validator
![image](https://user-images.githubusercontent.com/91415085/158039680-edbe5ff9-b235-49eb-8a24-f517b9b76cbd.png)
https://jigsaw.w3.org/css-validator/validator


JS 
https://jshint.com/
![image](https://user-images.githubusercontent.com/91415085/158039769-19f4e396-3f29-486c-8311-913958904a54.png)


I can confirm that the quiz results are always correct 
I can confirm that the header, instructions, questions, options, and results are all readable and easy to understand 
I have tested playing this quiz in different browsers: Chrome, Firefox, Safari
I confirmed that this project is responsive, looks good and functions on all standard screen sizes using the devtools device toolbar
![image](https://user-images.githubusercontent.com/91415085/158038177-89fa1ddd-f612-4007-b7af-f8dc636efca2.png)
http://ami.responsivedesign.is/?url=https%3A%2F%2Famal-yusuf.github.io%2Fquiz%2F#


# Bugs
When I have deployed my project I have discovered that on JS file the isCorrect and isWrong functions did not work properly, the way I was intending was to change the button color to either green or red depending on the answer if it is correct or wrong. I was running out of time. So alternatively I have created the alert system to alert the user with the correct and incorrect answers. And I have placed comments on the two functions on my project.

# Unfixed Bugs
No unfixed bugs

# Deployment
The site was deployed to GitHub pages. The steps to deploy are as follow:
 1- In the GitHub repository, navigate to the settings tab
 2- From the source section drop-down menu, select the Master Branch
 3- Once the master branch has been selected, the page provided the link to the completed website.
 The live link can be found here: https://amal-yusuf.github.io/quiz/
 
 
 # Credits 
 
My mentor Nishant Kumar has advised to use the const variable instead of using let variable for declaring variables that I havent used them, as that is a good practice that I should always follow.
 
 # Content 
 
The quiz materials were taken from: href="https://www.w3schools.com/quiztest/"

# Media 
No images were used on this project 
 










