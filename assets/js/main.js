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

  let currentQuestion = 0
  let currentlevel = 0
  let gameArea = document.getElementById("game-area")


document.addEventListener("DOMContentLoaded",function(){
    lauchQuiz()
})

function consoleTester(){
    console.log("this logic works")
}

function lauchQuiz(){
    let quizLaunched = document.getElementById("launch-Btn")
    quizLaunched.addEventListener("click",function(){
        welcomeUser();
    });
}

function welcomeUser(){
    // let gameArea = document.getElementById("game-area")
    let userName = prompt("Hey please enter a user name")
    gameArea.innerHTML = `
    <header id="new-header"> Hello ${userName} and welcome to the Star Wars quiz!</header>
    <p class ="game-info">This quiz will test your knowlage, it has 5 diffculty levels and there are some very hard questions!<p>
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
    `
    let buttons = document.getElementsByTagName("button");
    let levelSelected = ""
    for (let button of buttons) {
      button.addEventListener("click", function() {
        levelSelected = button.id;
        if (levelSelected === "level-1") {
            displayQuestion(levelSelected)
            console.log(levelSelected)
        } else if (levelSelected === "level-2") {
            displayQuestion(levelSelected)
            console.log(levelSelected)
        } else if (levelSelected === "level-3") {
            displayQuestion(levelSelected)
            console.log(levelSelected)
        } else if (levelSelected === "level-4") {
            displayQuestion(levelSelected)
            console.log(levelSelected)
        } else if (levelSelected === "level-5") {
            displayQuestion(levelSelected)
            console.log(levelSelected)
        } else {
          console.log("No level selected");
        }
      });
    }
}
function updateScore(){
}

function displayQuestion(levelSelected){
  console.log(levelSelected)
  let LevelStart = 0
  for (let i = 0;i < levels.length; i ++){
    if(levels[i].difficulty === levelSelected){
      LevelStart = i
      console.log(levels[i])
      break
    }
  }

  if(LevelStart !== 0 && levels[LevelStart].questions.length > currentQuestion){
    const currentlevel = levels[LevelStart]
    const currentQuestionToAsk = currentlevel.questions[currentQuestion]
    const question = currentQuestionToAsk.question
    const answerOptions = currentQuestionToAsk.options
    const answer = currentQuestionToAsk.answer
  
  gameArea.innerHTML= `
  <h1>${question}placeholder</h1>
    <ul>
        <li><button id="answer">${answerOptions}placeholder</button></li>
        <li><button id="answer">${answerOptions}placeholder</button></li>
        <li><button id="answer">${answerOptions}placeholder</button></li>
        <li><button id="answer">${answerOptions}placeholder</button></li>
    </ul>
  `
  ;
  let answerButton = document.getElementById("answer")