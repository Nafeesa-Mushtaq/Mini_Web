document.querySelector('#picker').addEventListener('input', (event) => {
    const hex = event.target.value;
    const red = parseInt(hex.slice(1, 3), 16);
    const green = parseInt(hex.slice(3, 5), 16);
    const blue = parseInt(hex.slice(5, 7), 16);
    document.querySelector('#swatch').style.backgroundColor = hex;
    document.querySelector('#hex').textContent = hex.toUpperCase();
    document.querySelector('#rgb').textContent = `rgb(${red}, ${green}, ${blue})`;
});
