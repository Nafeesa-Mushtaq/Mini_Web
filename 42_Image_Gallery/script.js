const pictures = [
    {
        src: 'mountains.svg',
        title: 'Blue mountains',
        alt: 'Layered blue mountains beneath a pale sun'
    },
    { src: 'coast.svg', title: 'By the coast', alt: 'Gentle blue waves meeting a sandy shore' },
    {
        src: 'forest.svg',
        title: 'Among the pines',
        alt: 'Green pine trees beneath a soft morning sky'
    },
    { src: 'desert.svg', title: 'Evening dunes', alt: 'Warm terracotta dunes under a setting sun' }
];
let index = 0;
function showImage() {
    const image = document.querySelector('#image');
    image.src = pictures[index].src;
    image.alt = pictures[index].alt;
    document.querySelector('#caption').textContent = pictures[index].title;
    document.querySelector('#position').textContent = index + 1 + ' / ' + pictures.length;
}
document.querySelector('#next').addEventListener('click', () => {
    index = (index + 1) % pictures.length;
    showImage();
});
document.querySelector('#previous').addEventListener('click', () => {
    index = (index + pictures.length - 1) % pictures.length;
    showImage();
});
