const inputEl = document.querySelector("input");
console.log(inputEl);

const onBlurBorder = (event) => {
  const inputDataLength = Number(inputEl.dataset.length);
  console.log(inputDataLength);
  const inputValueLength = Number(inputEl.value.length);
  console.log(inputValueLength);

  if (inputValueLength === inputDataLength) {
    inputEl.classList.add("valid");
    inputEl.classList.remove("invalid");
  } else {
    inputEl.classList.remove("valid");
    inputEl.classList.add("invalid");
  }
};

inputEl.addEventListener("blur", onBlurBorder);
