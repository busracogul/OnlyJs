let teamName1 = "Takım A";
let teamName2 = "Takım B";
let teamScore1 = 0;
let teamScore2 = 0;

function changeName(team) {
    if (typeof team !== "string" || team.trim().length < 1 || team === null || team === undefined) {
        console.error('hatalı değer girdiniz');
        return;
    }
    let changeTeamName = prompt('Takım ismini giriniz : ');
    if (changeTeamName === null || changeTeamName.trim().length < 1 || changeTeamName === undefined) {
        alert('Geçerli bir takım ismi girmelisiniz!');
        return;
    }
    if (team === 'first') {
        teamName1 = changeTeamName;
        document.getElementById('firstTeamName').innerText = teamName1;
        return;
    }
    if (team === 'second') {
        teamName2 = changeTeamName;
        document.getElementById('secondTeamName').innerText = teamName2;
        return;
    }
}
function incrementScore(team) {
    const scoreId = `${team}Score`;
    const scoreElement = document.getElementById(scoreId);
    let currentScore = parseInt(scoreElement.textContent);
    scoreElement.textContent = ++currentScore;
}
function decraseScore(team) {
    const scoreId = `${team}Score`;
    const scoreElement = document.getElementById(scoreId);
    let currentScore = parseInt(scoreElement.textContent);

    if (currentScore > 0) {
        scoreElement.textContent = --currentScore;
    }
}
function changeScore(team) {
    let currentScore = Number(prompt('Gol sayısını giriniz : '));
    if (typeof currentScore !== 'number' || currentScore === null || currentScore === undefined || currentScore < 1 || isNaN(currentScore)) {
        alert('Geçerli bir skor girmelisiniz!');
        return;
    }
    if (team === 'first') {
        teamScore1 = currentScore;
        document.getElementById('firstScore').innerText = teamScore1;
        return;
    }
    if (team === 'second') {
        teamScore2 = currentScore;
        document.getElementById('secondScore').innerText = teamScore2;
        return;
    }
}
function allReset(reset) {
    const resetScore = 0;
    document.getElementById("firstTeamReset").addEventListener("click", function () {
        document.getElementById('firstTeamName').innerText = "Takım A";
        document.getElementById('firstScore').innerText = resetScore;
    })
    document.getElementById("secondTeamReset").addEventListener("click", function () {
        document.getElementById('secondTeamName').textContent = "Takım B";
        document.getElementById('secondScore').innerText = resetScore;
    })
}

window.onload = () => {
    const teamNameElement = document.getElementById('firstTeamName');
    teamNameElement.innerHTML = teamName1;
    const teamNameElement2 = document.getElementById('secondTeamName');
    teamNameElement2.innerHTML = teamName2;

    const teamScoreElement = document.getElementById('firstScore');
    teamScoreElement.innerHTML = teamScore1;
    const teamScoreElement2 = document.getElementById('secondScore');
    teamScoreElement2.innerHTML = teamScore2;
};