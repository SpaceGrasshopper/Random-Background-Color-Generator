const button = document.querySelector("#BTN");
const h1 = document.querySelector("h1");
button.addEventListener("click", function () {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    document.querySelector("body").style.backgroundColor = `rgb(${r},${g},${b})`;
    h1.innerText = `rgb(${r},${g},${b})`;
})
