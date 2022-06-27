const url = "https://aws.random.cat/meow";
const button = document.querySelector('.btn');
const image = document.querySelector('img')


async function fenchHandler () {
try {
const response = await fetch(url);
const data = await response.json();
image.src = data.file;
} catch (error){
    console.log(error);
}
}

button.addEventListener('click', () => {
    fenchHandler()
})
