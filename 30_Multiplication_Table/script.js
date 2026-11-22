function showTable() {
    const number = Number(document.querySelector('#number').value);
    const table = document.querySelector('#table');
    table.replaceChildren();
    for (let i = 1; i <= 12; i++) {
        const row = document.createElement('li');
        row.textContent = `${number} × ${i} = ${number * i}`;
        table.append(row);
    }
}
document.querySelector('#form').addEventListener('submit', (event) => {
    event.preventDefault();
    showTable();
});
showTable();
