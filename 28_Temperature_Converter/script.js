function convert() {
    const value = Number(document.querySelector('#value').value);
    const unit = document.querySelector('#unit').value;
    const celsius = unit === 'c' ? value : unit === 'f' ? ((value - 32) * 5) / 9 : value - 273.15;
    const output = document.querySelector('#result');
    if (celsius < -273.15 - 0.0000001) {
        output.textContent = 'Enter a temperature at or above absolute zero (−273.15 °C).';
        return;
    }
    output.textContent = `${celsius.toFixed(2)} °C\n${((celsius * 9) / 5 + 32).toFixed(2)} °F\n${Math.max(0, celsius + 273.15).toFixed(2)} K`;
}
document.querySelector('#form').addEventListener('submit', (event) => {
    event.preventDefault();
    convert();
});
convert();
