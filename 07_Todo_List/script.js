const list = document.querySelector('#tasks');
const input = document.querySelector('#task');
let tasks = [];
try {
    const saved = JSON.parse(localStorage.getItem('miniweb-tasks') || '[]');
    if (Array.isArray(saved))
        tasks = saved.filter(
            (task) => task && typeof task.text === 'string' && typeof task.done === 'boolean'
        );
} catch {
    document.querySelector('#storage').textContent =
        'Browser storage is unavailable. Tasks will last for this visit.';
}

function save() {
    try {
        localStorage.setItem('miniweb-tasks', JSON.stringify(tasks));
    } catch {
        document.querySelector('#storage').textContent =
            'Could not save. Keep this page open to keep your list.';
    }
}

function render() {
    list.replaceChildren();
    tasks.forEach((task, index) => {
        const item = document.createElement('li');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = 'task-' + index;
        checkbox.checked = task.done;
        const label = document.createElement('label');
        label.htmlFor = checkbox.id;
        label.textContent = task.text;
        if (task.done) label.className = 'done';
        const remove = document.createElement('button');
        remove.textContent = '×';
        remove.setAttribute('aria-label', 'Delete ' + task.text);
        checkbox.addEventListener('change', () => {
            task.done = checkbox.checked;
            save();
            render();
        });
        remove.addEventListener('click', () => {
            tasks.splice(index, 1);
            save();
            render();
        });
        item.append(checkbox, label, remove);
        list.append(item);
    });
    document.querySelector('#summary').textContent = tasks.length
        ? tasks.filter((task) => !task.done).length + ' tasks left'
        : 'Your list is clear. Add a task above.';
}

document.querySelector('#task-form').addEventListener('submit', (event) => {
    event.preventDefault();
    if (!input.value.trim()) return;
    tasks.push({ text: input.value.trim(), done: false });
    input.value = '';
    save();
    render();
    input.focus();
});
render();
