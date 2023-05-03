const url = "https://api.thecatapi.com/v1/images/search";
const button = document.querySelector('.btn');
const image = document.querySelector('img')
const total = document.getElementById('total')
let i = 0;

async function fenchHandler () {
try {
const response = await fetch(url);
const data = await response.json();
image.src = data.file;
total.textContent = i
} catch (error){
    console.log(error);
}
}

button.addEventListener('click', () => {
i++
    fenchHandler()
})
