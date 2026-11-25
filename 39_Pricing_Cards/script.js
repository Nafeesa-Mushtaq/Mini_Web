const yearly = document.querySelector('#yearly');
yearly.addEventListener('change', () => {
    document.querySelector('#starter-price').textContent = yearly.checked ? '$4' : '$5';
    document.querySelector('#plus-price').textContent = yearly.checked ? '$8' : '$10';
    document.querySelector('#starter-billing').textContent = yearly.checked
        ? '$48 billed yearly'
        : 'Billed monthly';
    document.querySelector('#plus-billing').textContent = yearly.checked
        ? '$96 billed yearly'
        : 'Billed monthly';
    document.querySelector('#selection').textContent =
        'These are practice plans; no purchase is made.';
});
document.querySelectorAll('[data-plan]').forEach((button) => {
    button.addEventListener('click', () => {
        const price = Number(button.dataset.monthly);
        const cost = yearly.checked
            ? '$' + (price * 0.8 * 12).toFixed(0) + ' per year'
            : '$' + price + ' per month';
        document.querySelector('#selection').textContent =
            button.dataset.plan + ' selected: ' + cost + '. This is a sample selection.';
    });
});
