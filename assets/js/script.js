// Declare the variables 
var score = 0;
var questionIndex = 0;
var timerEl = document.getElementById("countdown");
var mainEl = document.getElementById("mainGame");
var startBtn = document.getElementById("start");
var timeRemaining = document.getElementById("timeRemaining");
var message = "You have run out of time!";
var penalty = "10";
var createUl = document.createElement("ul");



// GIVEN I am taking a code quiz WHEN I click the start button THEN a timer starts and I am presented with a question
    // timer function
    // TODO: Timer that counts down from x
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
    function displayQuestion(questionIndex) {
        // Clear existing question from the page
        mainEl.innerHTML = "";
        createUl.innerHTML = "";

        // Loop to go through all the questions
        for(var i = 0; i < questions.length; i++) {
            // display the selected question title
            var question = questions[questionIndex].title;
            // display the selected question's choices
            var choices = questions[questionIndex].choices;
        }
    }

// WHEN I answer a question THEN I am presented with another question

// WHEN I answer a question incorrectly THEN time is subtracted from the clock

// WHEN all questions are answered or the timer reaches 0

// THEN the game is over

// WHEN the game is over THEN I can save my initials and score

  }, 1000)
}



startBtn.onclick = countdown;