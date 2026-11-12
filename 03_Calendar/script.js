const today = new Date();
let viewed = new Date(today.getFullYear(), today.getMonth(), 1);

function renderMonth() {
    document.querySelector('#month').textContent = viewed.toLocaleDateString('en-US', {
        month: 'long',
        year: 'numeric'
    });
    const days = document.querySelector('#days');
    days.replaceChildren();
    for (let blank = 0; blank < viewed.getDay(); blank++)
        days.append(document.createElement('span'));
    const total = new Date(viewed.getFullYear(), viewed.getMonth() + 1, 0).getDate();
    for (let day = 1; day <= total; day++) {
        const cell = document.createElement('span');
        cell.textContent = day;
        if (
            day === today.getDate() &&
            viewed.getMonth() === today.getMonth() &&
            viewed.getFullYear() === today.getFullYear()
        ) {
            cell.className = 'today';
            cell.setAttribute('aria-current', 'date');
        }
        days.append(cell);
    }
}

document.querySelector('#previous').addEventListener('click', () => {
    viewed.setMonth(viewed.getMonth() - 1);
    renderMonth();
});
document.querySelector('#next').addEventListener('click', () => {
    viewed.setMonth(viewed.getMonth() + 1);
    renderMonth();
});
document.querySelector('#today').addEventListener('click', () => {
    viewed = new Date(today.getFullYear(), today.getMonth(), 1);
    renderMonth();
});
renderMonth();
