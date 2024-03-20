const button = document.querySelector(".btn");
const image = document.querySelector("img");
const total = document.getElementById("total");
let i = 0;





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
