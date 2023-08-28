const container = document.querySelector(".container");
const inputEmail = document.getElementById("email");
const btnSubscribe = document.querySelector(".btn-subscribe");
const thanks = document.querySelector(".thanks");
const labelError = document.querySelector(".label-error");
const msg = document.querySelector(".msg");

btnSubscribe.addEventListener("click", (e) => {
  e.preventDefault();
  validEmail();
});

function validEmail() {
  const email = inputEmail.value.trim();
  const emailPattern = /^[^\s@]+@[^\s@]+.[^\s@]+$/;

  if (!emailPattern.test(email) || inputEmail === "") {
    labelError.classList.add("label-error-visible");
    inputEmail.classList.add("error");
  } else {
    labelError.classList.remove("label-error-visible");
    inputEmail.classList.remove("error");
    container.classList.add("container-hidden");
    thanks.classList.add("thanks-visible");
    msg.innerText = `A confirmation email has been sent to ${email}. Please openit and click the button inside to confirm your subscription.`;
  }
}
