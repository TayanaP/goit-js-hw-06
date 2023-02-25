const inputEl = document.querySelector("input");
console.log(inputEl);
const spanEl = document.querySelector("span");
console.log(spanEl);

const fontSizeCheck = (event) => {
  spanEl.style.fontSize = event.currentTarget.value + "px";
};

inputEl.addEventListener("input", fontSizeCheck);
