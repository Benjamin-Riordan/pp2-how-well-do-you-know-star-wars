/** Hello And welcome to my PP2 project for my ci portfolio.
 * this is my submmison for pp2
 * I hope you enjoy
 */

console.log(" Hello And welcome to my PP2 project for my ci portfolio.this is my submmison for pp2 I hope you enjoy")
 
const levels = [
    {
      difficulty: "level-1",
      questions: [
        {
          question: "Who is Luke Skywalker's father?",
          options: ["Darth Vader", "Obi-Wan Kenobi", "Yoda", "Han Solo"],
          answer: "Darth Vader"
        },
        {
          question: "What is the name of Han Solo's ship?",
          options: ["Millennium Falcon", "Star Destroyer", "X-wing", "TIE Fighter"],
          answer: "Millennium Falcon"
        },
        {
          question: "Which planet is home to Chewbacca and the Wookiees?",
          options: ["Kashyyyk", "Tatooine", "Hoth", "Endor"],
          answer: "Kashyyyk"
        },
        {
          question: "Who is the famous Jedi Master that trained Obi-Wan Kenobi?",
          options: ["Qui-Gon Jinn", "Mace Windu", "Yoda", "Anakin Skywalker"],
          answer: "Yoda"
        },
        {
          question: "What is the name of the bounty hunter who captures Han Solo?",
          options: ["Boba Fett", "Jango Fett", "Cad Bane", "Dengar"],
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
          question: "Which bounty hunter did Jango Fett request to be the template for the clone army?",
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
          answer: "Korriban"
        },
        {
          question: "Who is the mastermind behind the creation of the Death Star?",
          options: ["Galen Erso", "Wilhuff Tarkin", "Orson Krennic", "Darth Sidious"],
          answer: "Galen Erso"
        },
        {
          question: "Which Jedi Master ignited their lightsaber in Attack of the Clones?",
          options: ["Mace Windu", "Yoda", "Obi-Wan Kenobi", "Kit Fisto"],
          answer: "Obi-Wan Kenobi"
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
  let userName =""
  let gameArea = document.getElementById("game-area");

  /** the welcome user fucntion .
   * when the user loads the quiz this fucntion will fire and propmt the user to enter a name
   * it will also check if the user has enterd a a name or not and if not then loops the prompt until the user does enter a name
   * then itr will display the game area using inner html and some template literals
   */
  function welcomeUser(){
    userName = prompt("Hey please enter a user name");
    while(!userName){
        alert("You didn't enter a name. To be considered a Jedi, enter a name, you must.");
        userName = prompt("Ask again I will not, young padawan.");
      }
    
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
                <li><button class ="Btn-style" id ="level-4" >Level 4(ill be fair this is very diffcult)</button>
                </li>
                <li><button class ="Btn-style" id ="level-5" >Level 5(you need to be a jedi master to get these right)</button>
                </li>
            </ul>
        `;
    levelSelection();
    // this will return the user name back to the gobal variable to be called later by endgame()
return userName
    }

function levelSelection(){
    let buttons = document.getElementsByTagName("button");
    let levelSelected = "";
    for (let button of buttons) {
      button.addEventListener("click", function() {
        levelSelected = button.id;
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
          displayQuestion(levelSelected)
        }
    });
}}

function displayQuestion(levelSelected) {
    let levelStart = -1;
      
        for (let i = 0; i < levels.length; i++) {
          if (levels[i].difficulty === levelSelected) {
            levelStart = i;
            break;
          }
        }
      
        if (levelStart !== -1 && levels[levelStart].questions.length > currentQuestion) {
          const currentLevel = levels[levelStart];
          const currentQuestionToAsk = currentLevel.questions[currentQuestion];
          const question = currentQuestionToAsk.question;
          const answerOptions = currentQuestionToAsk.options;
          const answer = currentQuestionToAsk.answer;
      
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
          
          let answerButtons = document.getElementsByClassName("answer");
      
          for (let i = 0; i < answerButtons.length; i++) {
            answerButtons[i].addEventListener("click", function() {
              let selectedAnswer = answerButtons[i].textContent;
      
              if (selectedAnswer === answer) {
                alert("Well done, my young Padawan learner!");
                correctScore++;
              } else {
                alert("Sorry, that's wrong. Are you turning to the dark side?");
                wrongScore++;
              }

              currentQuestion++;
  
              if (currentQuestion < currentLevel.questions.length) {
                displayQuestion(levelSelected);
              } else {
                endGame();
              }
            });
        }
    }
}

  function lauchQuiz(){
    let quizLaunched = document.getElementById("launch-Btn");
    quizLaunched.addEventListener("click",function(){
        welcomeUser();
    });
}
  function endGame(){
    gameArea.innerHTML =`
        <h1 id="new-header">Game Over</h1>
        <p class="game-info">Congratulations, ${userName} !</p>
        <p class="game-info">You have completed all the questions.</p>
        <p class="game-info">Final Score:</p>
        <div id="score-keeper">Correct <span id="Cscores">${correctScore}</span> Wrong <span id="Wscore">${wrongScore}</span></div>
        <button class="Btn-style" id="try-again">Try Again</button>
        `;
    jediOrSith()


    let tryAgainButton = document.getElementById("try-again");
        tryAgainButton.addEventListener("click",function(){
            currentQuestion = 0;
            correctScore = 0;
            wrongScore = 0;
            welcomeUser();
        });
}
document.addEventListener("DOMContentLoaded",function(){
    lauchQuiz();
});

function jediOrSith(){
    let isUserjediOrSith = document.createElement("div");
    isUserjediOrSith.setAttribute("id", "scorekeeper");
    let button = document.getElementById("try-again")
    gameArea.insertBefore(isUserjediOrSith, button)

    if(correctScore < wrongScore){
        isUserjediOrSith.innerText= "THE FORCE, KNOW YOU DO NOT"
    }else if(correctScore = wrongScore){
        isUserjediOrSith.innerText ="MAYBE PADAWAN, YOU WILL MAKE"
    }else{correctScore > wrongScore}{
        isUserjediOrSith.innerText="JEDI MASTER, WE WILL GRANT YOU!"
    }
}

