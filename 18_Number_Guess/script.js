let secret;
let guesses;
let finished;
const input = document.querySelector('#guess');
const message = document.querySelector('#message');
function reset() {
    secret = Math.floor(Math.random() * 100) + 1;
    guesses = [];
    finished = false;
    input.disabled = false;
    document.querySelector('#check').disabled = false;
    input.value = '';
    message.textContent = 'Make your first guess.';
    document.querySelector('#history').textContent = 'No guesses yet.';
}
document.querySelector('#guess-form').addEventListener('submit', (event) => {
    event.preventDefault();
    if (finished) return;
    const guess = Number(input.value);
    if (!Number.isInteger(guess) || guess < 1 || guess > 100) return;
    if (guesses.includes(guess)) {
        message.textContent = 'You already tried that number.';
        return;
    }
    guesses.push(guess);
    if (guess === secret) {
        message.textContent =
            'You found it in ' + guesses.length + (guesses.length === 1 ? ' try!' : ' tries!');
        finished = true;
    } else if (guesses.length === 10) {
        message.textContent = 'Out of tries. The number was ' + secret + '.';
        finished = true;
    } else {
        message.textContent =
            (guess < secret ? 'Too low. ' : 'Too high. ') + (10 - guesses.length) + ' tries left.';
    }
    document.querySelector('#history').textContent = 'Tried: ' + guesses.join(', ');
    input.disabled = finished;
    document.querySelector('#check').disabled = finished;
    input.value = '';
    if (!finished) input.focus();
});
document.querySelector('#new').addEventListener('click', reset);
reset();
