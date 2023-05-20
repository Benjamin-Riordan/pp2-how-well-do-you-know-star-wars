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
        getUsername()
        levelSelect();
    });
}

function welcomeUser(){
    let gameArea = document.getElementById("game-area")
    let userName = prompt("Hey please enter a user name")
    gameArea.innerHTML = `
    <header id="new-header"> Hello ${userName} and welcome to the Star Wars quiz!</header>
    <p class ="game-info">This quiz will test your knowlage, it has 5 diffculty levels and there are some very hard questions!<p>
    <p class ="game-info"> Are you ready to take the quiz? </p>
    <p class ="game-info"> please pick your level:</p>
        <ul id =level-selction">
            <li><button class ="Btn-style" id ="1" >Level 1(You cant get these wrong)</button>
            </li>
            <li><button class ="Btn-style" id ="2" >Level 2(You might get one wrong)</button>
            </li>
            <li><button class ="Btn-style" id ="3" >Level 3(ok you will get one wrong)</button>
            </li>
            <li><button class ="Btn-style" id ="4" >Level 4(ill be fair this is very diffcult)</button>
            </li>
            <li><button class ="Btn-style" id ="5" >Level 5(you need to be a jedi master to get these right)</button>
            </li>
        </ul>
    `
}

function levelSelect(){
    let levelBtn = document.getElementsByClassName("Btn-style")
    for (button of levelBtn){

    }

}

function updateScore(){

}

function displayQuestion(level){

}

function levelSelect(){
    

}