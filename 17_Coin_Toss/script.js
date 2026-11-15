let heads = 0;
let tails = 0;
document.querySelector('#flip').addEventListener('click', () => {
    const isHeads = Math.random() < 0.5;
    if (isHeads) heads++;
    else tails++;
    document.querySelector('#coin').textContent = isHeads ? 'H' : 'T';
    document.querySelector('#result').textContent = isHeads ? 'It’s heads!' : 'It’s tails!';
    document.querySelector('#heads').textContent = heads;
    document.querySelector('#tails').textContent = tails;
});
document.querySelector('#reset').addEventListener('click', () => {
    heads = tails = 0;
    document.querySelector('#heads').textContent = '0';
    document.querySelector('#tails').textContent = '0';
    document.querySelector('#coin').textContent = 'H';
    document.querySelector('#result').textContent = 'Give it a flip.';
});
