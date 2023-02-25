const loginFormEl = document.querySelector("form");
console.log(loginFormEl);

function handlerSubmit(event) {
  event.preventDefault();

  const email = event.currentTarget.elements.email;
  const password = event.currentTarget.elements.password;

  if (email.value === "" || password.value === "") {
    alert("Please fill in all the fields!");
  } else {
    console.log(`Email: ${email.value}, Password: ${password.value}`);
  }
  event.currentTarget.reset();
}

loginFormEl.addEventListener("submit", handlerSubmit);
