document.querySelector('#change').addEventListener('click', () => {
    let color;
    do {
        color =
            '#' +
            Math.floor(Math.random() * 16777216)
                .toString(16)
                .padStart(6, '0')
                .toUpperCase();
    } while (color === document.querySelector('#color').textContent);
    document.body.style.backgroundColor = color;
    document.querySelector('#color').textContent = color;
});
