document.querySelector('#form').addEventListener('submit', (event) => {
    event.preventDefault();
    const number = Number(document.querySelector('#decimal').value);
    document.querySelector('#binary').textContent = number.toString(2);
});
