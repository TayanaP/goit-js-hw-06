function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const spanColorEl = document.querySelector(".color");
console.log(spanColorEl);
const changeColorBtnEl = document.querySelector(".change-color");
console.log(changeColorBtnEl);
const body = document.body;

const changeColor = (event) => {
  spanColorEl.textContent = getRandomHexColor();
  body.style.backgroundColor = spanColorEl.textContent;
};

changeColorBtnEl.addEventListener("click", changeColor);
