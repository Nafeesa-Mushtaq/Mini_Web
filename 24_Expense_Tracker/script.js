let expenses = [];
try {
    const saved = JSON.parse(localStorage.getItem('miniweb-expenses') || '[]');
    if (Array.isArray(saved))
        expenses = saved.filter(
            (item) =>
                item &&
                typeof item.name === 'string' &&
                Number.isFinite(item.amount) &&
                item.amount > 0
        );
} catch {
    document.querySelector('#status').textContent =
        'Storage is unavailable. This list lasts for this visit.';
}
function save() {
    try {
        localStorage.setItem('miniweb-expenses', JSON.stringify(expenses));
    } catch {
        document.querySelector('#status').textContent =
            'Could not save this list. Keep the page open.';
    }
}
function render() {
    const list = document.querySelector('#expenses');
    list.replaceChildren();
    expenses.forEach((expense, index) => {
        const item = document.createElement('li');
        const name = document.createElement('span');
        name.textContent = expense.name;
        const amount = document.createElement('strong');
        amount.textContent = expense.amount.toFixed(2);
        const remove = document.createElement('button');
        remove.textContent = '×';
        remove.setAttribute('aria-label', 'Remove ' + expense.name);
        remove.addEventListener('click', () => {
            expenses.splice(index, 1);
            save();
            render();
        });
        item.append(name, amount, remove);
        list.append(item);
    });
    const cents = expenses.reduce((sum, expense) => sum + Math.round(expense.amount * 100), 0);
    document.querySelector('#total').textContent = (cents / 100).toFixed(2);
}
document.querySelector('#form').addEventListener('submit', (event) => {
    event.preventDefault();
    const name = document.querySelector('#name');
    const amount = document.querySelector('#amount');
    if (!name.value.trim()) return;
    expenses.push({ name: name.value.trim(), amount: Number(amount.value) });
    save();
    render();
    event.target.reset();
    name.focus();
});
render();
