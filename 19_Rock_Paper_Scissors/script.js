const moves = ['Rock', 'Paper', 'Scissors'];
const beats = { Rock: 'Scissors', Paper: 'Rock', Scissors: 'Paper' };
const icons = { Rock: '✊', Paper: '✋', Scissors: '✌' };
let wins = 0;
let losses = 0;
let draws = 0;
function showScore() {
    document.querySelector('#score').textContent =
        `You ${wins} · Computer ${losses} · Draws ${draws}`;
}
document.querySelectorAll('[data-move]').forEach((button) => {
    button.addEventListener('click', () => {
        const player = button.dataset.move;
        const computer = moves[Math.floor(Math.random() * moves.length)];
        document.querySelector('#player-icon').textContent = icons[player];
        document.querySelector('#computer-icon').textContent = icons[computer];
        document.querySelector('#player-move').textContent = player;
        document.querySelector('#computer-move').textContent = computer;
        document
            .querySelector('#player-choice')
            .classList.toggle('winner', beats[player] === computer);
        document
            .querySelector('#computer-choice')
            .classList.toggle('winner', beats[computer] === player);
        document.querySelectorAll('[data-move]').forEach((choice) => {
            choice.setAttribute('aria-pressed', choice === button);
        });
        let result;
        if (player === computer) {
            draws++;
            result = 'A draw!';
        } else if (beats[player] === computer) {
            wins++;
            result = 'You win!';
        } else {
            losses++;
            result = 'Computer wins.';
        }
        document.querySelector('#round').textContent =
            `You chose ${player.toLowerCase()}. Computer chose ${computer.toLowerCase()}. ${result}`;
        showScore();
    });
});
document.querySelector('#reset').addEventListener('click', () => {
    wins = losses = draws = 0;
    showScore();
    document.querySelector('#round').textContent = 'Ready when you are.';
    document.querySelector('#player-icon').textContent = '?';
    document.querySelector('#computer-icon').textContent = '?';
    document.querySelector('#player-move').textContent = 'Your move';
    document.querySelector('#computer-move').textContent = 'Waiting';
    document.querySelectorAll('.choice').forEach((choice) => choice.classList.remove('winner'));
    document
        .querySelectorAll('[data-move]')
        .forEach((choice) => choice.setAttribute('aria-pressed', 'false'));
});
