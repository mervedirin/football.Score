
function increaseScore(teamId) {
    var scoreElement = document.querySelector(`#${teamId} .score`);
    var score = parseInt(scoreElement.textContent);
    scoreElement.textContent = score + 1;
}

function decreaseScore(teamId) {
    var scoreElement = document.querySelector(`#${teamId} .score`);
    var score = parseInt(scoreElement.textContent);
    if (score > 0) {
        scoreElement.textContent = score - 1;
    }
}

function setScore(teamId) {
    var newScore = prompt("Lütfen yeni skoru girin:");
    if (!isNaN(newScore) && newScore !== null) {
        document.querySelector(`#${teamId} .score`).textContent = parseInt(newScore);
    } else {
        alert("Lütfen geçerli bir sayı girin!");
    }
}

function changeTeamName(teamId) {
    var newName = prompt("Lütfen yeni takım ismini girin:");
    if (newName !== null && newName !== "") {
        document.querySelector(`#${teamId} .team-name`).textContent = newName;
    }
}
