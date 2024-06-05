const COLORS = ["#e00", "#0e0", "#00e", "#e0e", "#ee0", "#0ee"];
const counter = document.querySelector(".counter");
const digits = document.querySelector(".digits");
let count = 0;
let currentTheme = 0;
console.log(COLORS[0]);
const updateCounter = () => {
    digits.textContent = count.toString().padStart(6, "0");
};

const incrementCounter = () => {
    count++;
    updateCounter();
};

const resetCounter = (ev) =>{
    ev.preventDefault();
    count = 0;
    updateCounter();
};

const changeTheme = () => {
    console.log((currentTheme + 1) % COLORS.length);
    currentTheme = (currentTheme + 1) % COLORS.length;
    counter.style.setProperty("--color", COLORS[currentTheme]);

}

document.addEventListener("pointermove", incrementCounter);
document.addEventListener("contextmenu", resetCounter);
document.addEventListener("click", changeTheme);