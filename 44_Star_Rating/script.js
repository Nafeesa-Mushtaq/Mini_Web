const labels = ['Poor', 'Fair', 'Good', 'Very good', 'Excellent'];
document.querySelectorAll('[name="rating"]').forEach((input) => {
    input.addEventListener('change', () => {
        const value = Number(input.value);
        document
            .querySelectorAll('.stars label')
            .forEach((label, index) => label.classList.toggle('selected', index < value));
        document.querySelector('#label').textContent = labels[value - 1];
        document.querySelector('#status').textContent = 'Ready to submit.';
    });
});
document.querySelector('#form').addEventListener('submit', (event) => {
    event.preventDefault();
    const value = document.querySelector('[name="rating"]:checked').value;
    document.querySelector('#status').textContent =
        'Thanks! You selected ' + value + (value === '1' ? ' star.' : ' stars.');
});
