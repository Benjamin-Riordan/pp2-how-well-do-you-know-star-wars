
// Array containing levels and their respective questions
const levels = [
    {
      difficulty: "level-1",
      questions: [
        {
          question: "Who is Luke Skywalker's father?",
          options: [ "Obi-Wan Kenobi","Darth Vader", "Yoda", "Han Solo"],
          answer: "Darth Vader"
        },
        {
          question: "What is the name of Han Solo's ship?",
          options: [ "Star Destroyer", "X-wing","Millennium Falcon", "TIE Fighter"],
          answer: "Millennium Falcon"
        },
        {
          question: "Which planet is home to Chewbacca and the Wookiees?",
          options: ["Tatooine","Kashyyyk",  "Hoth", "Endor"],
          answer: "Kashyyyk"
        },
        {
          question: "Who is the famous Jedi Master that trained Obi-Wan Kenobi?",
          options: ["Qui-Gon Jinn", "Mace Windu", "Yoda", "Anakin Skywalker"],
          answer: "Qui-Gon Jinn"
        },
        {
          question: "What is the name of the bounty hunter who captures Han Solo?",
          options: ["Jango Fett","Boba Fett",  "Cad Bane", "Dengar"],
          answer: "Boba Fett"
        }
      ]
    },
    {
      difficulty: "level-2",
      questions: [
        {
          question: "Who is the supreme leader of the First Order?",
          options: ["Snoke", "Kylo Ren", "General Hux", "Captain Phasma"],
          answer: "Snoke"
        },
        {
          question: "What is the weapon used by Jedi and Sith called?",
          options: ["Lightsaber", "Blaster", "Ion Cannon", "Thermal Detonator"],
          answer: "Lightsaber"
        },
        {
          question: "Who is the smuggler turned Resistance general in the sequel trilogy?",
          options: ["Poe Dameron", "Lando Calrissian", "Finn", "Leia Organa"],
          answer: "Poe Dameron"
        },
        {
          question: "Which famous ship made the Kessel Run in less than 12 parsecs?",
          options: ["Millennium Falcon", "Death Star", "Star Destroyer", "X-wing"],
          answer: "Millennium Falcon"
        },
        {
          question: "What is the name of the desert planet where Rey is first discovered?",
          options: ["Jakku", "Tatooine", "Naboo", "Geonosis"],
          answer: "Jakku"
        }
      ]
    },
    {
      difficulty: "level-3",
      questions: [
        {
          question: "Which Sith Lord is the apprentice of Darth Sidious?",
          options: ["Darth Maul", "Darth Tyranus", "Darth Vader", "Darth Plagueis"],
          answer: "Darth Maul"
        },
        {
          question: "What is the capital planet of the Galactic Republic?",
          options: ["Coruscant", "Naboo", "Alderaan", "Kamino"],
          answer: "Coruscant"
        },
        {
          question: "Who is the leader of the Separatist Alliance during the Clone Wars?",
          options: ["Count Dooku", "General Grievous", "Nute Gunray", "Asajj Ventress"],
          answer: "Count Dooku"
        },
        {
          question: "What is the name of Anakin Skywalker's Padawan in the Clone Wars?",
          options: ["Ahsoka Tano", "Shaak Ti", "Barriss Offee", "Luminara Unduli"],
          answer: "Ahsoka Tano"
        },
        {
          question: "Which bounty hunter did tyranus request to be the template for the clone army?",
          options: ["Boba Fett", "Dengar", "Zam Wesell", "Cad Bane"],
          answer: "Boba Fett"
        }
      ]
    },
    {
      difficulty: "level-4",
      questions: [
        {
          question: "Who killed Jabba the Hutt?",
          options: ["Princess Leia", "Luke Skywalker", "Han Solo", "Lando Calrissian"],
          answer: "Princess Leia"
        },
        {
          question: "What is the name of the ancient Sith homeworld?",
          options: ["Korriban", "Moraband", "Exegol", "Malachor"],
          answer: "Moraband"
        },
        {
          question: "Who is the mastermind behind the creation of the Death Star?",
          options: ["Galen Erso", "Wilhuff Tarkin", "Orson Krennic", "Darth Sidious"],
          answer: "Wilhuff Tarkin"
        },
        {
          question: "Which Jedi Master ignited their lightsaber for the first time in Attack of the Clones?",
          options: ["Mace Windu", "Yoda", "Obi-Wan Kenobi", "Kit Fisto"],
          answer: "Yoda"
        },
        {
          question: "What is the name of the species that Yoda belongs to?",
          options: ["Yoda's species", "Dagobah", "Kashyyyk", "Kamino"],
          answer: "Yoda's species"
        }
      ]
    },
    {
      difficulty: "level-5",
      questions: [
        {
          question: "Who killed Supreme Leader Snoke?",
          options: ["Kylo Ren", "Rey", "Luke Skywalker", "Darth Vader"],
          answer: "Kylo Ren"
        },
        {
          question: "What is the name of Darth Vader's fortress on Mustafar?",
          options: ["Fortress Vader", "Castle Ren", "Sith Citadel", "Mustafar Stronghold"],
          answer: "Mustafar Stronghold"
        },
        {
          question: "Who is the creator of the Mandalorian series?",
          options: ["Jon Favreau", "George Lucas", "Dave Filoni", "Rian Johnson"],
          answer: "Jon Favreau"
        },
        {
          question: "What is the name of the planet where the final battle in The Rise of Skywalker takes place?",
          options: ["Exegol", "Ahch-To", "Crait", "Endor"],
          answer: "Exegol"
        },
        {
          question: "Which Jedi Master survived Order 66?",
          options: ["Yoda", "Obi-Wan Kenobi", "Mace Windu", "Qui-Gon Jinn"],
          answer: "Obi-Wan Kenobi"
        }
      ]
    }
  ];
// gobal scoped variables to be accesed by multiple fucntions 
let currentQuestion = 0;
let correctScore = 0;
let wrongScore = 0;
let userName ="";
let gameArea = document.getElementById("game-area");

 /**
 * The welcomeUser function.
 * When the user loads the quiz, this function will be fired and prompt the user to enter a name.
 * It will also check if the user has entered a name or not, and if not, then loop the prompt until the user does enter a name.
 * Then, it will display the game area using innerHTML and some template literals.
 */
function welcomeUser() {
    // When the user clicks on "Click Me", they will get a prompt to enter a name which will be stored in userName
    userName = prompt("Hey please enter a user name");
    // Check to see if the user has entered a username by checking the truthiness or falsiness of the input 
    while(!userName) {
         // If the username is falsy (empty or null), prompt the user again until a valid username is entered
        alert("You didn't enter a name. To be considered a Jedi, enter a name, you must.");
        userName = prompt("Ask again I will not, young padawan.");
      }
    /**
     * This creats the nect page of the quiz taking the user name input
     */
    gameArea.innerHTML = `
        <header id="new-header"> Hello ${userName} and welcome to the Star Wars quiz!</header>
        <p class ="game-info">This quiz will test your knowlage, it has 5 diffculty levels and there are some very hard questions!</p>
        
        
        <p class ="game-info"> Are you ready to take the quiz? </p>
        <p class ="game-info"> please pick your level:</p>
            <ul id =level-selction">
                <li><button class ="Btn-style" id ="level-1" >Level 1(You cant get these wrong)</button>
                </li>
                <li><button class ="Btn-style" id ="level-2" >Level 2(You might get one wrong)</button>
                </li>
                <li><button class ="Btn-style" id ="level-3" >Level 3(ok you will get one wrong)</button>
                </li>
                <li><button class ="Btn-style" id ="level-4" >Level 4(I will  be fair this is very diffcult)</button>
                </li>
                <li><button class ="Btn-style" id ="level-5" >Level 5(you need to be a jedi master to get these right)</button>
                </li>
            </ul>
        `;
    levelSelection();
    // this will return the user name back to the gobal variable to be called later by endgame()
return userName;
    }


/**
 * The levelSelection function.
 * It handles the selection of quiz levels by adding event listeners to the level selection buttons.
 * When a button is clicked, it retrieves the id of the button and calls the displayQuestion function with the selected level.
 */
function levelSelection(){
    // Retrieve all the buttons on the page
    let buttons = document.getElementsByTagName("button");
    // Variable to store the selected level
    let levelSelected = "";
    // Loop through each button
    for (let button of buttons) {
        // Add event listener to each button
      button.addEventListener("click", function() {
        // Retrieve the id of the clicked button
        levelSelected = button.id;
         // Based on the selected level, call the displayQuestion function with the selected level
        if (levelSelected === "level-1") {
            displayQuestion(levelSelected);
        } else if (levelSelected === "level-2") {
            displayQuestion(levelSelected);
        } else if (levelSelected === "level-3") {
            displayQuestion(levelSelected);
        } else if (levelSelected === "level-4") {
            displayQuestion(levelSelected);
        } else if (levelSelected === "level-5") {
            displayQuestion(levelSelected);
        } else {
          displayQuestion(levelSelected);
        }
    });
}}

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
          const shuffeldAnswersOptions =shuffleArray(answerOptions);
            
          // Display the question and answer options
          gameArea.innerHTML = `
            <h1 id="new-header">Best of luck with the questions!</h1>
            <h2>${question}</h2>
            <ul>
              <li><button class="answer Btn-style">${shuffeldAnswersOptions[0]}</button></li>
              <li><button class="answer Btn-style">${shuffeldAnswersOptions[1]}</button></li>
              <li><button class="answer Btn-style">${shuffeldAnswersOptions[2]}</button></li>
              <li><button class="answer Btn-style">${shuffeldAnswersOptions[3]}</button></li>
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


function shuffleArray(array) {
    // Create a new array with the same elements
  
    const newArray = array.slice(); 
    for (let i = newArray.length - 1; i > 0; i--) {
        // Generate a random index
      const j = Math.floor(Math.random() * (i + 1)); 
      // Swap elements at indices i and j
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
  
    return newArray;
  }
