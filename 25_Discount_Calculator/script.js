document.querySelector('#form').addEventListener('submit', (event) => {
    event.preventDefault();
    const price = Number(document.querySelector('#price').value);
    const discount = Number(document.querySelector('#discount').value);
    const savings = Math.round(price * discount) / 100;
    document.querySelector('#result').textContent =
        `You save: ${savings.toFixed(2)}\nSale price: ${(price - savings).toFixed(2)}`;
});
