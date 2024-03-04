let number = 0;
function incrementNumber() {
    number++;
    document.getElementById("number").innerHTML = number;
}

function resetNumber() {
    number = 0;
    document.getElementById("number").innerHTML = number;
}

//kronomotre
let [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
const timeRef = document.getElementById("timer-display");
let interval = null;
const delay = 100;

document.getElementById("start-timer").addEventListener("click", () => {
    if (interval !== null) {
        clearInterval(interval);
    }
    interval = setInterval(displayTimer, delay);
});

document.getElementById("pause-timer").addEventListener("click", () => {
    clearInterval(interval);
});

document.getElementById("reset-timer").addEventListener("click", () => {
    clearInterval(interval);
    [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
    timeRef.innerHTML = "00 : 00 : 00 : 000 ";
});

function displayTimer() {
    milliseconds += delay;
    if (milliseconds === 1000) {
        milliseconds = 0;
        seconds++;
    }
    if (seconds === 60) {
        seconds = 0;
        minutes++;
    }
    if (minutes === 60) {
        minutes = 0;
        hours++;
    }

    let ms =
        milliseconds < 100
            ? "0" + milliseconds
            : milliseconds;

    let s = seconds < 10 ? "0" + seconds : seconds;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let h = hours < 10 ? "0" + hours : hours;

    timeRef.innerHTML = `${h} : ${m} : ${s} : ${ms}`;
}