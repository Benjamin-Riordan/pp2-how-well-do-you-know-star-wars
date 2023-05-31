/**
 * Displays the question based on the selected level.
 */

 function displayQuestion(levelSelected) {
    let levelStart = -1;
      
        // Find the index of the selected level in the levels arra
        for (let i = 0; i < levels.length; i++) {
          if (levels[i].difficulty === levelSelected) {
            levelStart = i;
            break;
          }
        }
      
        // If the level is found and there are questions remaining
        if (levelStart !== -1 && levels[levelStart].questions.length > currentQuestion) {
          const currentLevel = levels[levelStart];
          const currentQuestionToAsk = currentLevel.questions[currentQuestion];
          const question = currentQuestionToAsk.question;
          const answerOptions = currentQuestionToAsk.options;
          const answer = currentQuestionToAsk.answer;
            
          // Display the question and answer options
          gameArea.innerHTML = `
            <h1 id="new-header">Best of luck with the questions!</h1>
            <h2>${question}</h2>
            <ul>
              <li><button class="answer Btn-style">${answerOptions[0]}</button></li>
              <li><button class="answer Btn-style">${answerOptions[1]}</button></li>
              <li><button class="answer Btn-style">${answerOptions[2]}</button></li>
              <li><button class="answer Btn-style">${answerOptions[3]}</button></li>
            </ul>
      
            <p class="game-info">
              Correct: <span id="Cscores">${correctScore}</span>
              Wrong: <span id="Wscores">${wrongScore}</span>
            </p>`;

            // declaring the answer buttons
          let answerButtons = document.getElementsByClassName("answer");

            // Add event listeners to the answer buttons
          for (let i = 0; i < answerButtons.length; i++) {
            answerButtons[i].addEventListener("click", function() {
              let selectedAnswer = answerButtons[i].textContent;
      
              // Check if the selected answer is correct and update the scores
              if (selectedAnswer === answer) {
                alert("Well done, my young Padawan learner!");
                correctScore++;
              } else {
                alert("Sorry, that's wrong. Are you turning to the dark side?");
                wrongScore++;
              }

              currentQuestion++;
  
            // If there are more questions in the level, display the next question
            // Otherwise, end the game
              if (currentQuestion < currentLevel.questions.length) {
                displayQuestion(levelSelected);
              } else {
                endGame();
              }
            });
        }
    }
}
/**
 * Launches the quiz when the "Launch Quiz" button is clicked.
 */
  function lauchQuiz(){
    let quizLaunched = document.getElementById("launch-Btn");
    quizLaunched.addEventListener("click",function(){
        welcomeUser();
    });
}
/**
 * Ends the game and displays the final score.
 */
  function endGame(){
    gameArea.innerHTML =`
        <h1 id="new-header">Game Over</h1>
        <p class="game-info">Congratulations, ${userName} !</p>
        <p class="game-info">You have completed all the questions.</p>
        <p class="game-info">Final Score:</p>
        <div id="score-keeper">Correct <span id="Cscores">${correctScore}</span> Wrong <span id="Wscore">${wrongScore}</span></div>
        <button class="Btn-style" id="try-again">Try Again</button>
        `;
    jediOrSith();

    // Reset the current question, correct score, and wrong score
    let tryAgainButton = document.getElementById("try-again");
        tryAgainButton.addEventListener("click",function(){
            currentQuestion = 0;
            correctScore = 0;
            wrongScore = 0;
            welcomeUser();
        });
}
// Event listener for when the DOM content is loaded
document.addEventListener("DOMContentLoaded",function(){
    lauchQuiz();
});

/**
 * Displays a message indicating whether the user is a Jedi or Sith based on their scores.
 */
function jediOrSith(){
    let isUserjediOrSith = document.createElement("div");
    isUserjediOrSith.setAttribute("id", "is-jedi-or-not");
    let button = document.getElementById("try-again");
    gameArea.insertBefore(isUserjediOrSith, button);

    if (correctScore < wrongScore) {
    isUserjediOrSith.innerText = "THE FORCE, KNOW YOU DO NOT";
} else if (correctScore === wrongScore) {
    isUserjediOrSith.innerText = "MAYBE PADAWAN, YOU WILL MAKE";
} else if (correctScore > wrongScore) {
    isUserjediOrSith.innerText = "JEDI MASTER, WE WILL GRANT YOU!";
}
}

