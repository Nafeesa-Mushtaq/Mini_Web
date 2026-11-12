const note = document.querySelector('#note');
const status = document.querySelector('#status');
const undo = document.querySelector('#undo');
let previous = '';
try {
    note.value = localStorage.getItem('miniweb-note') || '';
} catch {
    status.textContent = 'Storage is unavailable. You can still write a note for this visit.';
}

function save() {
    try {
        localStorage.setItem('miniweb-note', note.value);
        status.textContent = 'Saved in this browser.';
    } catch {
        status.textContent = 'Could not save. Copy your note before closing this page.';
    }
}
note.addEventListener('input', save);
document.querySelector('#clear').addEventListener('click', () => {
    if (!note.value) return;
    previous = note.value;
    note.value = '';
    undo.hidden = false;
    save();
    note.focus();
});
undo.addEventListener('click', () => {
    note.value = previous;
    undo.hidden = true;
    save();
});
