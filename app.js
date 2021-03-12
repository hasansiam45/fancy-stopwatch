let millisecond = 0;
let second = 0;
let minute = 0;
let timer;

const stopwatch = document.getElementById('stopWatch');


function start() {
    if (!timer) {
        timer = setInterval(run, 10);
    }

}

function run() {
    stopwatch.textContent = setTime();
    millisecond++;
    if (millisecond === 100) {
        millisecond = 0;
        second++;
    }
    if (second === 60) {
        second = 0;
        minute++;
    }
}

function pause() {
    stopTimer();
}

function reset() {
    stopTimer();

    millisecond = 0;
    second = 0;
    minute = 0;

    stopwatch.textContent = setTime();
}

function restart() {
    reset();
    start();
}

function stopTimer() {
    clearInterval(timer);
    timer = false;
}

function setTime() {
    return (minute < 10 ? '0' + minute : minute) + ':' + (second < 10 ? '0' + second : second) + ':' + (millisecond < 10 ? '0' + millisecond : millisecond);
}