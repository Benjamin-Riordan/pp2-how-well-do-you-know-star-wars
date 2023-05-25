function updateScore(){
    let correctScoreMarker = document.getElementById("Cscores");
    let wrongScoreMarker = document.getElementById("Wscores");
    correctScoreMarker.textContent = correctScore;
    wrongScoreMarker.textContent = wrongScore;
}