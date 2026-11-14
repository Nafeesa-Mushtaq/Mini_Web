const text = document.querySelector('#text');
const status = document.querySelector('#status');
document.querySelectorAll('[data-case]').forEach((button) => {
    button.addEventListener('click', () => {
        if (!text.value.trim()) {
            status.textContent = 'Enter some text first.';
            return;
        }
        if (button.dataset.case === 'upper') text.value = text.value.toUpperCase();
        if (button.dataset.case === 'lower') text.value = text.value.toLowerCase();
        if (button.dataset.case === 'title')
            text.value = text.value
                .toLowerCase()
                .replace(/(^|\s)(\S)/gu, (match, space, letter) => space + letter.toUpperCase());
        status.textContent = 'Changed to ' + button.textContent + '.';
    });
});
document.querySelector('#clear').addEventListener('click', () => {
    text.value = '';
    status.textContent = 'Text cleared.';
    text.focus();
});
