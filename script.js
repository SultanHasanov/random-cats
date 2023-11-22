const button = document.querySelector(".btn");
const image = document.querySelector("img");
const total = document.getElementById("total");
let i = 0;
let timeLeft = 3;
var timerDiv = document.getElementById("timer");

function updateTimer() {
  timerDiv.innerHTML = `Осталось времени: ${timeLeft} сек.`;
  if (timeLeft === 0) {
    clearInterval(interval);
    button.disabled = false;
    button.classList.add("button-active");
    timerDiv.innerHTML = "Время вышло!";
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
  let isLoaded = image.complete;
  if (isLoaded) {
    i++;
    fenchHandler();
  }
});
