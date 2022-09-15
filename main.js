var ms = 0, s = 0, m = 0;
var timer;

var timerEl = document.querySelector('.timer');

function start() {
    timer = setInterval(run, 10);
}

function run() {
    timerEl.textContent = (m < 10 ? '0' + m : m) + ':' + (s < 10 ? '0' + s : s) + ':' + (ms < 10 ? '0' + ms : ms);
    ms++;
    if (ms == 100) {
        ms = 0;
        s++;
    }
    if (s == 60) {
        s = 0;
        m++;
    }
}

function end() {
    stopTimer();
}

function reset() {
    stopTimer();
    ms = 0;
    s = 0;
    m = 0;
    timerEl.textContent = getTimer();
}

function stopTimer() {
    clearInterval(timer);
    timer = false;
}

function getTimer() {
    return (m < 10 ? '0' + m : m) + ':' + (s < 10 ? '0' + s : s) + ':' + (ms < 10 ? '0' + ms : ms);
}