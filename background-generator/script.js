var body = document.querySelector('body');
var color1 = document.querySelector('#first');
var css = document.querySelector('h3');
var color2 = document.querySelector('#second');

function setgradient() {
  body.style.background =
  "linear-gradient(to right,"
  + color1.value
  +","
  + color2.value
  +")";
  css.textContent = body.style.background + ";";
}
color1.addEventListener('input', setgradient);

color2.addEventListener('input', setgradient);
