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
    <p id ="game-info">This quiz will test you knowlage, it has 5 diffculty levels and there are some very hard questions "<p>
    <p id ="game-info> Are toy ready to take the quiz<p>
    `
}

function updateScore(){

}

function displayQuestion(level){

}

function levelSelect(){

}