function changeName() {
    let teamName = prompt('Takım ismini giriniz : ');

    if (teamName !== null && teamName.trim() !== '') {
        document.getElementById('firstTeamName').innerText = teamName;
    }
    else {
        alert('Geçerli bir takım ismi girmelisiniz!')
    }
}

function incrementScore() {
    let incrementCurrentScore = document.getElementById("firstScore").innerText;
    document.getElementById("firstScore").innerText = parseInt(incrementCurrentScore) + 1;
}

function decraseScore() {
    let decraseCurrentScore = document.getElementById("firstScore").innerText;
    document.getElementById("firstScore").innerText = parseInt(decraseCurrentScore) - 1;
}

function changeScore() {
    let currentScore = prompt('Gol sayısını giriniz : ');
    if (currentScore !== null && currentScore.trim() !== '' && currentScore > 0) {
        document.getElementById("firstScore").innerText = currentScore;
    }
    else {
        alert('Lütfen geçerli bir score giriniz: ')
    }
}


/*2.takım */
function changeName2() {
    let teamName = prompt('Takım ismini giriniz : ');

    if (teamName !== null && teamName.trim() !== '') {
        document.getElementById('secondTeamName').innerText = teamName;
    }
    else {
        alert('Geçerli bir takım ismi girmelisiniz!')
    }
}

function incrementScore2() {
    let incrementCurrentScore = document.getElementById("secondScore").innerText;
    document.getElementById("secondScore").innerText = parseInt(incrementCurrentScore) + 1;
}

function decraseScore2() {
    let decraseCurrentScore = document.getElementById("secondScore").innerText;
    document.getElementById("secondScore").innerText = parseInt(decraseCurrentScore) - 1;
}

function changeScore2() {
    let currentScore = prompt('Gol sayısını giriniz: ');
    if (currentScore !== null && currentScore.trim() !== '' && currentScore > 0) {
        document.getElementById("secondScore").innerText = currentScore;
    }
    else {
        alert('Lütfen geçerli bir score giriniz: ')
    }

}

