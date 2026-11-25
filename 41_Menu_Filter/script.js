document.querySelectorAll('[data-filter]').forEach((button) => {
    button.addEventListener('click', () => {
        document
            .querySelectorAll('[data-filter]')
            .forEach((item) => item.setAttribute('aria-pressed', item === button));
        let count = 0;
        document.querySelectorAll('[data-category]').forEach((item) => {
            const visible =
                button.dataset.filter === 'all' || item.dataset.category === button.dataset.filter;
            item.hidden = !visible;
            if (visible) count++;
        });
        document.querySelector('#count').textContent = count + ' items on the menu';
    });
});
