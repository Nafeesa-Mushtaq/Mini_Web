const dialog = document.querySelector('#dialog');
document.querySelector('#open').addEventListener('click', () => dialog.showModal());
dialog.addEventListener('click', (event) => {
    const bounds = dialog.getBoundingClientRect();
    if (
        event.target === dialog &&
        (event.clientX < bounds.left ||
            event.clientX > bounds.right ||
            event.clientY < bounds.top ||
            event.clientY > bounds.bottom)
    )
        dialog.close();
});
