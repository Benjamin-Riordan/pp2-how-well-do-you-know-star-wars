document.addEventListener("DOMContentLoaded",function(){
    lauchQuiz()
})

function consoleTester(){
    console.log("this logic works")
}

function lauchQuiz(){
    let quizLaunched = document.getElementById("launch-Btn")
    quizLaunched.addEventListener("click",function(){
        welcomeUser()
    });
}

function welcomeUser(){
    let gameArea = document.getElementById("game-area")
    gameArea.innerHTML = `
    <header id="new-header"> Hello and wellcome to the Star Wars quiz!</header>
    <p class ="game-info">This quiz will test you knowlage, it has 5 diffculty levels and there are some very hard questions!<p>
    <p class ="game-info"> Are you ready to take the quiz? </p>
    <p class ="game-info"> please pick your level:</p>
        <ul id ="level-selction">
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
}

function updateScore(){

}

function displayQuestion(level){

}

function levelSelect(){

}