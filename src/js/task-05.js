const nameInputEl = document.querySelector("#name-input");
console.log(nameInputEl);
const nameOutputEl = document.querySelector("#name-output");
console.log(nameOutputEl);

const getInputValue = (event) => {
  if (nameInputEl.value === "") {
    nameOutputEl.textContent === "Anonymous";
  } else {
    nameOutputEl.textContent = event.currentTarget.value;
  }
};

nameInputEl.addEventListener("input", getInputValue);
