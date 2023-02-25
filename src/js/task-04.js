let counterValue = 0;
const valueEl = document.querySelector("#value");
console.log(valueEl);
const decrementBtn = document.querySelector('[data-action="decrement"]');
console.log(decrementBtn);
const incrementBtn = document.querySelector('[data-action="increment"]');
console.log(incrementBtn);

const onClickDecrementBtn = (event) => {
  counterValue -= 1;
  valueEl.textContent = counterValue;
};

const onClickIncrementBtn = (event) => {
  counterValue += 1;
  valueEl.textContent = counterValue;
};

decrementBtn.addEventListener("click", onClickDecrementBtn);
incrementBtn.addEventListener("click", onClickIncrementBtn);
