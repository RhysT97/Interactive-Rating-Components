let buttons = document.querySelectorAll(".button");
let submit = document.querySelector(".submit");
const container = document.querySelector(".container");
let userRating;

function getNumberValue(number) {
    userRating = number.value;
}

for(let i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function() {
        getNumberValue(this);

    }
}

submit.addEventListener("click", e => {
    e.preventDefault();

  container.innerHTML = `<div class="submitted-content">
  <img src="images/illustration-thank-you.svg" alt="thank-you">
  <p class="user-rating primary-style p1">You selected ${userRating} out of 5</p>
  <h1 class="white">Thank you!</h1>
  <p class="text-center">We appreciate you taking the time to give a rating. if you ever need more support, don't hesitate to get in touch! </p>
  </div> `;
});