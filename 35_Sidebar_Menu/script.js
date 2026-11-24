const menu = document.querySelector('#menu');
const pages = {
    home: [
        '01 / HOME',
        'A place for small ideas.',
        'Keep a list, make a sketch, or write down something you learned today.'
    ],
    notes: [
        '02 / NOTES',
        'Today I learned…',
        'A clear name makes code easier to read. Small functions are easier to test. A little practice every day adds up.'
    ],
    about: [
        '03 / ABOUT',
        'Built one page at a time.',
        'This notebook is a simple practice page for a sidebar menu, a few sections, and keyboard navigation.'
    ]
};
document.querySelector('#open').addEventListener('click', () => menu.showModal());
document.querySelector('#close').addEventListener('click', () => menu.close());
document.querySelectorAll('[data-page]').forEach((button) => {
    button.addEventListener('click', () => {
        const page = pages[button.dataset.page];
        document.querySelector('#label').textContent = page[0];
        document.querySelector('#title').textContent = page[1];
        document.querySelector('#text').textContent = page[2];
        document
            .querySelectorAll('[data-page]')
            .forEach((item) => item.removeAttribute('aria-current'));
        button.setAttribute('aria-current', 'page');
        menu.close();
        document.querySelector('#content').focus();
    });
});
