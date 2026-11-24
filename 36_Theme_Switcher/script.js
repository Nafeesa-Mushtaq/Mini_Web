const button = document.querySelector('#toggle');
function applyTheme(dark) {
    document.body.classList.toggle('dark', dark);
    button.setAttribute('aria-pressed', dark);
    button.textContent = dark ? 'Light mode' : 'Dark mode';
}
try {
    applyTheme(localStorage.getItem('miniweb-theme') === 'dark');
} catch {
    applyTheme(false);
}
button.addEventListener('click', () => {
    const dark = !document.body.classList.contains('dark');
    applyTheme(dark);
    try {
        localStorage.setItem('miniweb-theme', dark ? 'dark' : 'light');
        document.querySelector('#status').textContent = 'Theme saved for your next visit.';
    } catch {
        document.querySelector('#status').textContent = 'Theme changed for this visit.';
    }
});
