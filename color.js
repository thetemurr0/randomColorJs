const btn = document.querySelector('button');
const h1 = document.querySelector('h1');

btn.addEventListener('click', function () {
    const colorName = makeRandomColor();
    document.body.style.backgroundColor = colorName;
    h1.innerText = colorName;
});

const makeRandomColor =  () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
};