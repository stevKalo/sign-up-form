const inputFirst = document.querySelector(".first");
const inputLast = document.querySelector(".last");
const inputEmail = document.querySelector(".email");
const inputPhone = document.querySelector(".phone");
const inputPW = document.querySelector(".pw");
const inputConfirm = document.querySelector(".confirm");

const join = document.querySelector("#join");

// if input value is empty

function blink(element) {
  element.style.visibility =
    element.style.visibility === "hidden" ? "visible" : "hidden";
}
