const minutes = document.querySelector('#minutes');
const seconds = document.querySelector('#seconds');
const display = document.querySelector('#time');
const start = document.querySelector('#start');
const status = document.querySelector('#status');
let remaining = 0;
let deadline = 0;
let timer = null;
let paused = false;

function showTime(value) {
    const total = Math.ceil(value / 1000);
    display.textContent =
        String(Math.floor(total / 60)).padStart(2, '0') + ':' + String(total % 60).padStart(2, '0');
}

function tick() {
    remaining = Math.max(0, deadline - Date.now());
    showTime(remaining);
    if (remaining === 0) {
        clearInterval(timer);
        timer = null;
        paused = false;
        minutes.disabled = seconds.disabled = false;
        start.textContent = 'Start';
        status.textContent = 'Time is up!';
    }
}

start.addEventListener('click', () => {
    if (timer !== null) {
        remaining = Math.max(0, deadline - Date.now());
        clearInterval(timer);
        timer = null;
        paused = true;
        showTime(remaining);
        start.textContent = 'Resume';
        status.textContent = 'Paused.';
        return;
    }
    if (!paused) {
        if (!minutes.reportValidity() || !seconds.reportValidity()) return;
        remaining = (Number(minutes.value) * 60 + Number(seconds.value)) * 1000;
        if (remaining <= 0) {
            status.textContent = 'Enter a time greater than zero.';
            return;
        }
    }
    deadline = Date.now() + remaining;
    minutes.disabled = seconds.disabled = true;
    start.textContent = 'Pause';
    status.textContent = 'Counting down…';
    timer = setInterval(tick, 100);
    tick();
});
document.querySelector('#reset').addEventListener('click', () => {
    clearInterval(timer);
    timer = null;
    paused = false;
    minutes.disabled = seconds.disabled = false;
    showTime((Number(minutes.value) * 60 + Number(seconds.value)) * 1000);
    start.textContent = 'Start';
    status.textContent = 'Set a time and press start.';
});
