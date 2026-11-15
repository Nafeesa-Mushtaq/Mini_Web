const faces = ['⚀', '⚁', '⚂', '⚃', '⚄', '⚅'];
document.querySelector('#roll').addEventListener('click', () => {
    const first = Math.floor(Math.random() * 6);
    const second = Math.floor(Math.random() * 6);
    document.querySelector('#first').textContent = faces[first];
    document.querySelector('#second').textContent = faces[second];
    document.querySelector('#first').setAttribute('aria-label', 'First die: ' + (first + 1));
    document.querySelector('#second').setAttribute('aria-label', 'Second die: ' + (second + 1));
    document.querySelector('#total').textContent = 'Total: ' + (first + second + 2);
});
