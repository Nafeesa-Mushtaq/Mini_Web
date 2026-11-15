const board = document.querySelector('#board');
const status = document.querySelector('#status');
const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
let cells;
let player;
let finished;
function reset() {
    cells = Array(9).fill('');
    player = 'X';
    finished = false;
    status.textContent = 'X goes first.';
    board.replaceChildren();
    cells.forEach((value, index) => {
        const button = document.createElement('button');
        button.setAttribute('aria-label', 'Square ' + (index + 1) + ', empty');
        button.addEventListener('click', () => play(index, button));
        board.append(button);
    });
}
function play(index, button) {
    if (finished || cells[index]) return;
    cells[index] = player;
    button.textContent = player;
    button.setAttribute('aria-label', 'Square ' + (index + 1) + ', ' + player);
    button.disabled = true;
    const winner = lines.find((line) => line.every((position) => cells[position] === player));
    if (winner) {
        finished = true;
        status.textContent = player + ' wins!';
        winner.forEach((position) => board.children[position].classList.add('winner'));
    } else if (cells.every(Boolean)) {
        finished = true;
        status.textContent = 'It’s a draw.';
    } else {
        player = player === 'X' ? 'O' : 'X';
        status.textContent = player + ' to play.';
    }
    if (finished) [...board.children].forEach((cell) => (cell.disabled = true));
}
document.querySelector('#restart').addEventListener('click', reset);
reset();
