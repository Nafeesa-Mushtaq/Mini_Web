const value = document.querySelector('#value');
const from = document.querySelector('#from');
const to = document.querySelector('#to');
function convert() {
    if (!value.reportValidity()) return;
    const result = Number(
        ((Number(value.value) * Number(from.value)) / Number(to.value)).toPrecision(10)
    );
    document.querySelector('#result').textContent =
        `${value.value} ${from.selectedOptions[0].text.toLowerCase()} = ${result} ${to.selectedOptions[0].text.toLowerCase()}`;
}
document.querySelector('#form').addEventListener('submit', (event) => {
    event.preventDefault();
    convert();
});
document.querySelector('#swap').addEventListener('click', () => {
    [from.value, to.value] = [to.value, from.value];
    convert();
});
convert();
