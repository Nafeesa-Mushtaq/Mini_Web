const input = document.querySelector('#file');
const image = document.querySelector('#image');
const info = document.querySelector('#info');
let url = null;
function clear() {
    if (url) URL.revokeObjectURL(url);
    url = null;
    image.onload = image.onerror = null;
    image.removeAttribute('src');
    image.hidden = true;
    input.value = '';
    document.querySelector('#empty').hidden = false;
    document.querySelector('#clear').disabled = true;
    info.textContent = '';
}
input.addEventListener('change', () => {
    const file = input.files[0];
    if (!file) return;
    clear();
    if (!['image/png', 'image/jpeg', 'image/webp', 'image/gif'].includes(file.type)) {
        info.textContent = 'Please choose a PNG, JPEG, WebP, or GIF image.';
        return;
    }
    if (file.size > 5 * 1024 * 1024) {
        info.textContent = 'This image is too large. Choose one under 5 MB.';
        return;
    }
    url = URL.createObjectURL(file);
    image.onload = () => {
        image.hidden = false;
        document.querySelector('#empty').hidden = true;
        document.querySelector('#clear').disabled = false;
        info.textContent = `${file.name} · ${image.naturalWidth} × ${image.naturalHeight} · ${(file.size / 1024).toFixed(1)} KB`;
    };
    image.onerror = () => {
        clear();
        info.textContent = 'This file could not be opened as an image.';
    };
    image.src = url;
});
document.querySelector('#clear').addEventListener('click', clear);
window.addEventListener('beforeunload', () => {
    if (url) URL.revokeObjectURL(url);
});
