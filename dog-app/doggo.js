const BREEDS_URL = 'https://dog.ceo/api/breeds/list/all';
const select = document.querySelector('.breed');

fetch(BREEDS_URL).then(function (response) {
    return response.json();
})
.then(function (data) {
    const breedsObject = data.message;
    const breedsArray = Object.keys(breedsObject);

    const select= document.querySelector('.breed')

    for (let i = 0; i < breedsArray.length; i++) {
        const option = document.createElement('option');
        option.value = breedsArray[i];
        option.innerText = breedsArray[i];
        select.appendChild(option);
    }
})
async function getDoggo(event) {
    const res = await fetch("https://dog.ceo/api/breeds/image/random");
    const resJson = await res.json();
    document.getElementById("doggo").src = resJson.message;
}

document.getElementById('get-doggo')
    .addEventListener('click', getDoggo)

select.addEventListener("change", function(event) {
    console.log(event.target.value);
    console.log(`https://dog.ceo/api/breed/${event.target.value}/images/random`);

});

getDoggo(url);

const img = document.querySelector('dog-img');
const spinner = document.querySelector('.spinner');

function getDoggo (url) {
    spinner.classList.add("show");
    img.classList.remove("show");
    img.style.addEventListener = 'none';
    fetch(url)
        .then(function(response) {
            return response.json();
    })
    .then(function(data) {
        img.src = data.message;
        // spinner.classList.remove("show");
        // img.classList.add("show");
    })
}

img.addEventListener("load", function() {
    spinner.classList.remove("show");
    img.classList.add("show");
}) 





