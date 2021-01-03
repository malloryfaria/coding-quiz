// Declare the variables 
var score = 0;
var questionIndex = 0;
var timerEl = document.getElementById("countdown");
var mainEl = document.getElementById("mainGame");
var startBtn = document.getElementById("start");
var message = "You have run out of time!";
var penalty = "10";

startQuiz();

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

    // Display question to the user
    function startQuiz(questionIndex) {
        // Clear existing question from the page
        mainEl.innerHTML = "";

        // Loop to go through all the questions
        for(var i = 0; i < questions.length; i++) {
            // display the selected question title
            var title = document.createElement("div");
            title.setAttribute("id", "title");
            title.textContent = questions[questionIndex].title;
            // display the selected question's choices
            var choices = document.createElement("li");
            choices.setAttribute("id", "choices");
            choices.textContent = questions[questionIndex].choices;
            // add the content to the page
            mainEl.textContent = title;
            mainEl.textContent = choices;
        }
            mainEl.appendChild(document.createElement("li"));
            choices.addEventListener("click", (compareAnswer));
            return;
        };

        function compareAnswer(event) {
            var element = event.target;
            if (element.matches("li")) {
                var createDiv = document.createElement("div");
                createDiv.setAttribute("id", "createDiv");
                // If answer is correct
                if (element.textContent === questions[questionIndex].answer) {
                    score ++;
                    createDiv.textContent = "That is correct!"
                }
                else {
                    // If answer is incorrect, remove 10 seconds from the timer
                    timerEl = timerEl - penalty;
                    createDiv.textContent = "That is incorrect! The correct answer is: " + questions[questionIndex].answer;
                }
            }
            // move on to the next question
            questionIndex ++;


            function quizComplete () {
                if (questionIndex >= questions.length) {
                    createDiv.textContent = "Quiz complete! Your score was: " + score;    
                }
                else {
                    mainEl.appendChild(createDiv);
                }
            }
        };

    // GIVEN I am taking a code quiz WHEN I click the start button THEN a timer starts and I am presented with a question
        // timer function
        // TODO: Timer that counts down from 90
        function countdown() {
            var timeLeft = 20;
        
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
                alert(message);
            }

// WHEN I answer a question THEN I am presented with another question

// WHEN I answer a question incorrectly THEN time is subtracted from the clock

// WHEN all questions are answered or the timer reaches 0

// THEN the game is over

// WHEN the game is over THEN I can save my initials and score

  }, 1000)
}



startBtn.onclick = countdown;
