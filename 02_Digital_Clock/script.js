let use24Hours = false;
const time = document.querySelector('#time');
const date = document.querySelector('#date');
const button = document.querySelector('#format');

function updateClock() {
    const now = new Date();
    time.textContent = now.toLocaleTimeString('en-US', {
        hour12: !use24Hours,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        ...(use24Hours ? { hourCycle: 'h23', hour12: undefined } : {})
    });
    time.dateTime = now.toISOString();
    date.textContent = now.toLocaleDateString('en-US', {
        weekday: 'long',
        month: 'long',
        day: 'numeric',
        year: 'numeric'
    });
}

button.addEventListener('click', () => {
    use24Hours = !use24Hours;
    button.textContent = use24Hours ? 'Use 12-hour time' : 'Use 24-hour time';
    button.setAttribute('aria-pressed', use24Hours);
    updateClock();
});
updateClock();
setInterval(updateClock, 1000);
