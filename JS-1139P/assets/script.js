function changeName(team) {
    let changeTeamName = prompt('Takım ismini giriniz : ');

    if (changeTeamName !== null && changeTeamName.trim() !== '') {
        document.getElementById(`${team}TeamName`).innerText = changeTeamName;
    }
    else {
        alert('Geçerli bir takım ismi girmelisiniz!')
    }
}

function incrementScore(team) {
    const scoreId = `${team}Score`;
    const scoreElement = document.getElementById(scoreId);
    let score = parseInt(scoreElement.textContent);
    scoreElement.textContent = ++score;
}

function decraseScore(team) {
    const scoreId = `${team}Score`;
    const scoreElement = document.getElementById(scoreId);
    let score = parseInt(scoreElement.textContent);

    if (score > 0) {
        scoreElement.textContent = --score;
    }
}

function changeScore(team) {
    let currentScore = prompt('Gol sayısını giriniz : ');
    if (currentScore !== null && currentScore.trim() !== '' && currentScore > 0) {
        document.getElementById(`${team}Score`).innerText = currentScore;
    }
    else {
        alert('Lütfen geçerli bir skor giriniz: ');
    }
}

function allReset(reset) {
    const number = 0;
    document.getElementById(`${reset}Score`).innerText = number;

    document.getElementById("firstTeamReset").addEventListener("click", function () {
        document.getElementById('firstTeamName').innerText = "Takım A";
    })
    document.getElementById("secondTeamReset").addEventListener("click", function () {
        document.getElementById('secondTeamName').innerText = "Takım B";
    })
}