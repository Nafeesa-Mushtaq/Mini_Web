let count = 0;
const output = document.querySelector('#count');
function update() {
    output.textContent = count;
    output.style.color = count > 0 ? '#27754a' : count < 0 ? '#b13e45' : '#263238';
}
document.querySelector('#plus').addEventListener('click', () => {
    count++;
    update();
});
document.querySelector('#minus').addEventListener('click', () => {
    count--;
    update();
});
document.querySelector('#reset').addEventListener('click', () => {
    count = 0;
    update();
});
