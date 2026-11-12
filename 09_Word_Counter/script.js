const text = document.querySelector('#text');
function count() {
    const value = text.value;
    document.querySelector('#words').textContent = value.trim()
        ? value.trim().split(/\s+/).length
        : 0;
    document.querySelector('#characters').textContent = Array.from(value).length;
    document.querySelector('#lines').textContent = value
        .split('\n')
        .filter((line) => line.trim()).length;
}
text.addEventListener('input', count);
document.querySelector('#clear').addEventListener('click', () => {
    text.value = '';
    count();
    text.focus();
});
