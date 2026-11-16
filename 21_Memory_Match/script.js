const board = document.querySelector('#cards');
const symbols = ['☀', '☂', '★', '♫', '♥', '✿'];
let first = null;
let locked = false;
let matches = 0;
let moves = 0;
let timeout;

function reset() {
    clearTimeout(timeout);
    first = null;
    locked = false;
    matches = moves = 0;
    document.querySelector('#moves').textContent = 'Moves: 0';
    document.querySelector('#status').textContent = 'Find the six matching pairs.';
    const deck = [...symbols, ...symbols];
    for (let i = deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]];
    }
    board.replaceChildren();
    deck.forEach((symbol, index) => {
        const card = document.createElement('button');
        card.textContent = '?';
        card.dataset.symbol = symbol;
        card.dataset.number = index + 1;
        card.setAttribute('aria-label', 'Card ' + (index + 1) + ', face down');
        card.addEventListener('click', () => flip(card));
        board.append(card);
    });
}

function flip(card) {
    if (locked || card.disabled || card === first) return;
    card.textContent = card.dataset.symbol;
    card.classList.add('revealed');
    card.setAttribute('aria-label', 'Card ' + card.dataset.number + ', ' + card.dataset.symbol);
    if (!first) {
        first = card;
        return;
    }
    moves++;
    document.querySelector('#moves').textContent = 'Moves: ' + moves;
    const previous = first;
    first = null;
    if (previous.dataset.symbol === card.dataset.symbol) {
        [previous, card].forEach((item) => {
            item.disabled = true;
            item.classList.add('matched');
        });
        matches++;
        document.querySelector('#status').textContent =
            matches === 6
                ? 'All pairs found in ' + moves + ' moves!'
                : matches + ' of 6 pairs found.';
    } else {
        locked = true;
        timeout = setTimeout(() => {
            [previous, card].forEach((item) => {
                item.textContent = '?';
                item.classList.remove('revealed');
                item.setAttribute('aria-label', 'Card ' + item.dataset.number + ', face down');
            });
            locked = false;
        }, 800);
    }
}
document.querySelector('#restart').addEventListener('click', reset);
reset();
