const button = document.querySelector(".btn");
const image = document.querySelector("img");
const total = document.getElementById("total");
let i = 0;
let timeLeft = 50;
var timerDiv = document.getElementById("timer");

function updateTimer() {
  timerDiv.innerHTML = `Осталось времени: <span class="timer-value">${timeLeft}</span> сек.`;
  if (timeLeft === 0) {
    clearInterval(interval);
    button.disabled = false;
    button.classList.add("button-active");
    timerDiv.innerHTML = "Можно нажимать";
  } else {
    timeLeft -= 1;
  }
}

var interval = setInterval(updateTimer, 1000);
async function fenchHandler() {
  const response = await fetch("https://api.thecatapi.com/v1/images/search");
  const data = await response.json();
  console.log(data[0].url);
  image.src = data[0].url;
  total.textContent = i;
}

button.addEventListener("click", () => {
  i++;
  fenchHandler();
});
