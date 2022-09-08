let fontSize = 16;

const updateFontSize = () => {
    localStorage.setItem('font-size', fontSize);
    document.querySelector('.fonts-zoom_item').textContent = fontSize;
    document.body.style.fontSize = fontSize + 'px';
}

if(localStorage.getItem('font-size')) {
    fontSize = localStorage.getItem('font-size');
}

updateFontSize();


document.querySelector('.fonts-zoom_plus').onclick = () => {
    fontSize++;
    updateFontSize();
};

document.querySelector('.fonts-zoom_minus').onclick = () => {
    fontSize--;
    updateFontSize();
};

// document.querySelector('.fonts-zoom_plus').addEventListener('click', () => {
//     fontSize++;
//     localStorage.setItem('font-size', fontSize);
//     document.querySelector('.fonts-size_item').textContent = fontSize;
//     document.body.style.fontSize = fontSize + 'px';
// });
