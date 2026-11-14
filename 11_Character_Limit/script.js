const message = document.querySelector('#message');
function update() {
    const characters = Array.from(message.value);
    if (characters.length > 160) message.value = characters.slice(0, 160).join('');
    const length = Array.from(message.value).length;
    document.querySelector('#progress').value = length;
    document.querySelector('#remaining').textContent = 160 - length + ' characters left';
    document.querySelector('#remaining').classList.toggle('error', length === 160);
}
message.addEventListener('input', update);
document.querySelector('#clear').addEventListener('click', () => {
    message.value = '';
    update();
    message.focus();
});
