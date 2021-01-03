// Declared variables
var highScore = document.getElementById("high-score");
var clearScores = document.getElementById("clear-scores");
var goBack = document.getElementById("go-back");

// Listener & function to clear all high scores 
clearScores.addEventListener("click", function () {
    localStorage.clear();
    location.reload();
});

// Display all high scores
var allScores = localStorage.getItem("allScores");
allScores = JSON.parse(allScores);

if (allScores !== null) {

    for (var i = 0; i < allScores.length; i++) {

        var createDiv = document.createElement("div");
        createDiv.textContent = allScores[i].initials + " " + allScores[i].score;
        createDiv.setAttribute("id", "high-score")
        highScore.appendChild(createDiv);

    }
}
// Event listener to go back to the index page
goBack.addEventListener("click", function () {
    window.location.replace("./index.html");
});