let started = 0;
let elapsed = 0;
let timer = null;
const start = document.querySelector('#start');
const lap = document.querySelector('#lap');
const display = document.querySelector('#time');

function formatTime(milliseconds) {
    const minutes = Math.floor(milliseconds / 60000);
    const seconds = Math.floor(milliseconds / 1000) % 60;
    const hundredths = Math.floor(milliseconds / 10) % 100;
    return (
        [minutes, seconds].map((value) => String(value).padStart(2, '0')).join(':') +
        '.' +
        String(hundredths).padStart(2, '0')
    );
}

function totalTime() {
    return elapsed + (timer === null ? 0 : performance.now() - started);
}

start.addEventListener('click', () => {
    if (timer === null) {
        started = performance.now();
        timer = setInterval(() => (display.textContent = formatTime(totalTime())), 20);
        start.textContent = 'Pause';
        lap.disabled = false;
    } else {
        elapsed = totalTime();
        clearInterval(timer);
        timer = null;
        display.textContent = formatTime(elapsed);
        start.textContent = 'Resume';
        lap.disabled = true;
    }
});
lap.addEventListener('click', () => {
    const item = document.createElement('li');
    item.textContent = formatTime(totalTime());
    document.querySelector('#laps').append(item);
});
document.querySelector('#reset').addEventListener('click', () => {
    clearInterval(timer);
    timer = null;
    elapsed = 0;
    display.textContent = '00:00.00';
    start.textContent = 'Start';
    lap.disabled = true;
    document.querySelector('#laps').replaceChildren();
});
