    // questions index
    var questions = [
        {
            title: "Commonly used data types DO NOT include:",
            choices: ["strings", "booleans", "alerts", "numbers"],
            answer: "alerts"
        },
        {
            title: "The condition in an if / else statement is enclosed within ____.",
            choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
            answer: "parentheses"
        },
        {
            title: "Arrays in Javascript can be used to store ____.",
            choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
            answer: "all of the above"
        },
        {
            title: "String values must be enclosed within ____ when being assigned to variables.",
            choices: ["commas", "curly brackets", "quotes", "parenthesis"],
            answer: "quotes"
        },
        {
            title: "A very useful tool used during development and debugging for printing content to the debugger is:",
            choices: ["Javascript", "terminal / bash", "for loops", "console log"],
            answer: "console log"
        },
    ]; 

// Declare the variables 
var score = 0;
var questionIndex = 0;

var timeLeft = 90;
var timerEl = document.getElementById("countdown");
var mainEl = document.getElementById("mainGame");
var startBtn = document.getElementById("start");
var timeIsUpMessage = "You have run out of time!";
var penalty = "10";
var ulCreateEl = document.createElement("ul");
var divCreateEl = document.createElement("div");

    // Display question to the user & starts the countdown
    startBtn.addEventListener("click", function() {
        countdown();
        startQuiz(questionIndex);
    });

    function startQuiz(questionIndex) {
        // Clear the screen
            ulCreateEl.innerHTML = "";
            mainEl.innerHTML = "";
        
        // Loop to go through all the questions
        for (var i = 0; i < questions.length; i++) {
            // display the selected question title
            var questionTitle = questions[questionIndex].title;
            var questionChoices = questions[questionIndex].choices;
            // add the Question title to the page
            mainEl.textContent= questionTitle;
        }
        questionChoices.forEach(function (newButton) {
            var optionList = document.createElement("button");
            optionList.textContent = newButton;
            optionList.setAttribute("id", "choices");
            mainEl.appendChild(ulCreateEl);
            ulCreateEl.appendChild(optionList);
            optionList.addEventListener("click", (compareAnswer));
        })
        };

        function compareAnswer(event) {
            var element = event.target;

            if (element.matches("button")) {

                var createDiv = document.createElement("div");
                createDiv.setAttribute("id", "createDiv");
                // If answer is correct
                if (element.textContent == questions[questionIndex].answer) {
                    score ++;
                    alert("That is correct! The answer is: " + questions[questionIndex].answer);
                }
                else {
                    // If answer is incorrect, remove 10 seconds from the timer
                    timeLeft = timeLeft - penalty;
                    alert("That is incorrect! The correct answer is: " + questions[questionIndex].answer);
                }
            }
            // move on to the next question
            questionIndex ++;

            // check if that was the last question
            if (questionIndex >= questions.length) {
                quizComplete();
                createDiv.textContent = "Quiz complete! Your score was: " + score;    
                }
                else {
                    startQuiz(questionIndex);                    
                }
                mainEl.appendChild(createDiv);
        }

        // Quiz complete function
        function quizComplete() {
            mainEl.innerHTML = "";
            timeLeft = "";
        }

    // GIVEN I am taking a code quiz WHEN I click the start button THEN a timer starts and I am presented with a question
        // timer function
        // TODO: Timer that counts down from 90
        function countdown() {        
            // Use the setInterval() method to call a function to be executed every 1000 milliseconds (every 1 second)
            var timeInterval = setInterval(function() {
            if(timeLeft >= 1) {
                timerEl.textContent = timeLeft;
                timeLeft -= 1;
            }
            else if(timeLeft === 0){
                timerEl.textContent = "";
                clearInterval(timeInterval);
                console.log("I'm here");
                displayMessage();
            }
        
            function displayMessage() {
                alert(timeIsUpMessage);
            };
  }, 1000)
}


// WHEN I answer a question THEN I am presented with another question

// WHEN I answer a question incorrectly THEN time is subtracted from the clock

// WHEN all questions are answered or the timer reaches 0

// THEN the game is over

// WHEN the game is over THEN I can save my initials and score