document.querySelector('#form').addEventListener('submit', (event) => {
    event.preventDefault();
    const bill = Number(document.querySelector('#bill').value);
    const rate = Number(document.querySelector('#tip').value);
    const people = Number(document.querySelector('#people').value);
    const tip = Math.round(bill * rate) / 100;
    const total = bill + tip;
    document.querySelector('#result').textContent =
        `Tip: ${tip.toFixed(2)}\nTotal: ${total.toFixed(2)}\nPer person: ${(total / people).toFixed(2)}`;
});
