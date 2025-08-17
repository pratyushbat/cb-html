let value1 = document.getElementById("value1");
let value2 = document.getElementById("value2");
let value3 = document.getElementById("value3");
let value4 = document.getElementById("value4");

let values = ["😎", "😒", "😁", "😍", "😘", "😢", "😉", "🥲"];

function getRandomValue() {
  return values[Math.floor(Math.random() * 8)];
}

let animationId;

function updateAnimation(newSpeed) {
  if (animationId) clearInterval(animationId);
  animationId = setInterval(() => {
    value1.innerText = getRandomValue();
    value2.innerText = getRandomValue();
    value3.innerText = getRandomValue();
    value4.innerText = getRandomValue();
  }, 1000 / newSpeed);
  return animationId;
}

function startAnimation() {
  let inpSpeed = document.getElementById("inpSpeed");
  inpSpeed.value=7;
  document.documentElement.style.setProperty("--speed", inpSpeed.value);
  updateAnimation(inpSpeed.value);

  value1.style["animation-iteration-count"] = "infinite";
  value2.style["animation-iteration-count"] = "infinite";
  value3.style["animation-iteration-count"] = "infinite";

  value4.style["animation-iteration-count"] = "infinite";

  setTimeout(() => {
    console.log("stopping");
    stopAnimation();
  }, 5000);
}

function stopAnimation() {
  value1.style["animation-iteration-count"] = "";
  value2.style["animation-iteration-count"] = "";
  value3.style["animation-iteration-count"] = "";
  value4.style["animation-iteration-count"] = "";
  if (animationId) clearInterval(animationId);
}

console.log(inpSpeed.value);
inpSpeed.onchange = function (ev) {
  console.log("value changed", document.documentElement);
  document.documentElement.style.setProperty("--speed", ev.target.value);
  updateAnimation(ev.target.value);
};
