# JavaScript Code Quiz

A timed quiz on JavaScript fundamentals that stores high scores
This project is a JavaScript learning experience for module 4 in the UofT coding bootcamp.

## Build status

Live

## Deployed application
https://malloryfaria.github.io/coding-quiz/
 
## Screenshots

![quiz screenshot](/assets/images/screenshot.jpg?raw=true "quiz screenshot")

## Tech/framework used

<b>Built with</b>
- HTML
- JavaScript
- CSS

## Features
Semantic tags

## Code Example

```
function compareAnswer(event) {
            var element = event.target;
            console.log(element);

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

            // check if quiz is done (either if it was the last question or time is up)
            if (questionIndex >= questions.length) {
                quizComplete();
                createDiv.textContent = "Quiz complete! You got " + score + " answers correct.";    
                }
                else {
                    startQuiz(questionIndex);                    
                }
                mainEl.appendChild(createDiv);
        }
```


## License
None

© [Mallory](https://github.com/malloryfaria)


