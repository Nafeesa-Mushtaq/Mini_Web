const display = document.querySelector('#display');
let current = '0';
let stored = null;
let operator = null;
let fresh = false;

function calculate() {
    const number = Number(current);
    if (operator === '/' && number === 0) {
        current = 'Cannot divide by zero';
    } else {
        let answer = number;
        if (operator === '+') answer = stored + number;
        if (operator === '-') answer = stored - number;
        if (operator === '*') answer = stored * number;
        if (operator === '/') answer = stored / number;
        current = Number.isFinite(answer)
            ? String(Number(answer.toPrecision(12)))
            : 'Number too large';
    }
    stored = null;
    operator = null;
    fresh = true;
}

function press(key) {
    if (key === 'clear') {
        current = '0';
        stored = null;
        operator = null;
        fresh = false;
    } else if (/^[0-9.]$/.test(key)) {
        if (fresh || !Number.isFinite(Number(current))) current = '0';
        fresh = false;
        if (key === '.' && !current.includes('.')) current += '.';
        if (key !== '.' && current.length < 14) current = current === '0' ? key : current + key;
    } else if (key === 'delete') {
        current = fresh ? '0' : current.slice(0, -1);
        if (!current || current === '-' || !Number.isFinite(Number(current))) current = '0';
        fresh = false;
    } else if (key === 'sign' && Number.isFinite(Number(current))) {
        current = String(-Number(current));
    } else if (['+', '-', '*', '/'].includes(key) && Number.isFinite(Number(current))) {
        if (operator && !fresh) calculate();
        if (Number.isFinite(Number(current))) {
            stored = Number(current);
            operator = key;
            fresh = true;
        }
    } else if (key === '=' && operator && !fresh) {
        calculate();
    }
    display.textContent = current;
}

document.querySelectorAll('[data-key]').forEach((button) => {
    button.addEventListener('click', () => press(button.dataset.key));
});

document.addEventListener('keydown', (event) => {
    if (event.ctrlKey || event.metaKey || event.altKey) return;
    const key = { Enter: '=', Escape: 'clear', Backspace: 'delete' }[event.key] || event.key;
    if (/^[0-9.+*/=-]$/.test(key) || ['clear', 'delete'].includes(key)) {
        if (event.key === 'Enter' && event.target.tagName === 'BUTTON') return;
        event.preventDefault();
        press(key);
    }
});
