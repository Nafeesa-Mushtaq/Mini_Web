let items = [];
document.querySelectorAll('[name="color"]').forEach((input) => {
    input.addEventListener('change', () => {
        document.querySelector('#color-name').textContent = input.value;
        const mug = document.querySelector('#mug');
        mug.style.setProperty('--mug-color', input.dataset.color);
        mug.setAttribute('aria-label', input.value + ' colored mug');
    });
});
document.querySelector('#add').addEventListener('click', () => {
    const color = document.querySelector('[name="color"]:checked').value;
    items.push(color);
    document.querySelector('#bag').textContent =
        `${color} mug added. Bag: ${items.length} ${items.length === 1 ? 'mug' : 'mugs'} · $${(items.length * 18).toFixed(2)}`;
});
document.querySelector('#empty').addEventListener('click', () => {
    items = [];
    document.querySelector('#bag').textContent = 'Your sample bag is empty.';
});
