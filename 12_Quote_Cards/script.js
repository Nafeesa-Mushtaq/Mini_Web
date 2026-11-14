const quotes = [
    'A small step still moves you forward.',
    'Make room for a little curiosity.',
    'Practice makes the unfamiliar familiar.',
    'Slow progress is progress worth keeping.',
    'Start with what you have today.',
    'A good question is a good beginning.',
    'Rest, then try again.',
    'Finish one small thing.'
];
let index = 0;
function showQuote() {
    document.querySelector('#quote').textContent = '“' + quotes[index] + '”';
    document.querySelector('#position').textContent = index + 1 + ' / ' + quotes.length;
}
document.querySelector('#next').addEventListener('click', () => {
    index = (index + 1) % quotes.length;
    showQuote();
});
document.querySelector('#previous').addEventListener('click', () => {
    index = (index + quotes.length - 1) % quotes.length;
    showQuote();
});
showQuote();
