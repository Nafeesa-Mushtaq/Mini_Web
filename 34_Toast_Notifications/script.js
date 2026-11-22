const messages = {
    success: 'Your changes were saved.',
    error: 'Something went wrong. Please try again.',
    info: 'You have a new reminder.'
};
document.querySelectorAll('[data-type]').forEach((button) => {
    button.addEventListener('click', () => {
        const container = document.querySelector('#toasts');
        if (container.children.length >= 3) container.firstElementChild.remove();
        const toast = document.createElement('div');
        toast.className = 'toast ' + button.dataset.type;
        const message = document.createElement('span');
        message.textContent = messages[button.dataset.type];
        const close = document.createElement('button');
        close.textContent = '×';
        close.setAttribute('aria-label', 'Dismiss notification');
        const timer = setTimeout(() => toast.remove(), 5000);
        close.addEventListener('click', () => {
            clearTimeout(timer);
            toast.remove();
        });
        toast.append(message, close);
        container.append(toast);
    });
});
