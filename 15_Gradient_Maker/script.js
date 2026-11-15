const first = document.querySelector('#first');
const second = document.querySelector('#second');
const angle = document.querySelector('#angle');
function update() {
    const gradient = `linear-gradient(${angle.value}deg, ${first.value}, ${second.value})`;
    document.querySelector('#preview').style.background = gradient;
    document.querySelector('#degrees').textContent = angle.value;
    document.querySelector('#code').value = 'background: ' + gradient + ';';
}
[first, second, angle].forEach((input) => input.addEventListener('input', update));
update();
