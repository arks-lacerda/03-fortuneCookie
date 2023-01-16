const screenOne = document.querySelector(".screenOne");
const screenTwo = document.querySelector(".screenTwo");
const openFortuneCookieButton = document.querySelector("#openFortuneCookie");
const anotherCookieButton = document.querySelector("#anotherCookie");
const message = document.querySelector(".message p");

openFortuneCookieButton.addEventListener('click', function() {
  changeScreen();
})
let messageRandom = [
  "If someone is so tired that they can't give you a smile, leave them yours.",
  "Don't make up in anger what you lack in reason.",
  "Life will bring good things if you are patient.",
  "Show love and joy at every opportunity and you will see that peace is born within you.",
  "The tallest of all towers starts on the ground.",
  "Defects and virtues are just two sides of the same coin.",
  "Youth is not a time of life, it's a state of mind.",
  "You don't have to be strong. You have to be flexible.",
]

function messageNew() {
  return messageRandom[Math.floor(Math.random() * messageRandom.length)];
}

anotherCookieButton.addEventListener('click', function() {
  changeScreen();
})

function changeScreen() {
  screenOne.classList.toggle("hide");
  screenTwo.classList.toggle("hide");
  message.textContent = messageNew();
}