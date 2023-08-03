const container = document.querySelector(".container");
const inputEmail = document.getElementById("email");

const btnSubscribe = document.querySelector(".btn-subscribe");
const thanks = document.querySelector(".thanks");
const labelError = document.querySelector(".label-error");

btnSubscribe.addEventListener("click", (e) => {
  e.preventDefault();
  validEmail();
});

function validEmail() {
  const email = inputEmail.value.trim();

  const emailPattern = /^[^\s@]+@[^\s@]+.[^\s@]+$/;

  if (!emailPattern.test(email)) {
    labelError.style.display = "block";
    inputEmail.classList.add("error");
  } else {
    labelError.style.display = "block";
    inputEmail.classList.remove("error");

    if (inputEmail.value) {
      container.style.display = "none";
      thanks.style.display = "block";
    } else {
      inputEmail.classList.add("error");
      labelError.style.display = "block";
    }
  }
}
