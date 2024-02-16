import JSConfetti from "js-confetti";
const jsConfetti = new JSConfetti();
const addButton = document.querySelector(".add--js");
const subtractButton = document.querySelector(".subtract--js");
const counterValue = document.querySelector(".counter--js");
const hour = new Date().getHours();
const actualMinute = new Date().getMinutes();

let glasses = 0;

let key = new Date().toLocaleString().slice(0, 10);
console.log(key);

setInterval(() => {
  console.log("tik-tak");
  if (key !== new Date().toLocaleString().slice(0, 10)) {
    key = new Date().toLocaleString().slice(0, 10);
    setCounterValue(0);
    glasses = 0;
  }
}, 1000 * 60);

if (localStorage.getItem(key)) {
  glasses = parseInt(localStorage.getItem(key));
}

const setCounterValue = (value) => {
  counterValue.innerHTML = value;
  localStorage.setItem(key, value);
};

setCounterValue(glasses);

addButton.addEventListener("click", () => {
  glasses++;
  setCounterValue(glasses);
});

subtractButton.addEventListener("click", () => {
  if (glasses >= 1) {
    glasses -= 1;
    setCounterValue(glasses);
  }
});

setInterval(() => {
  if(hour === actualMinute){
    jsConfetti.addConfetti();
  }
}, 1000*60);