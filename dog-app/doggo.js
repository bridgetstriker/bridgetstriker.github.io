// Declare variables for the URL and UI elements
const BREEDS_URL = 'https://dog.ceo/api/breeds/list/all';
const select = document.querySelector('.breed');
const img = document.querySelector('.dog-img');
const spinner = document.querySelector('.spinner');

// Fetch breeds. Then populate the select menu
fetch(BREEDS_URL).then(function (response) {
    return response.json();
})
    .then(function (data) {
        const breedsObject = data.message;
        const breedsArray = Object.keys(breedsObject);

        for (let i = 0; i < breedsArray.length; i++) {
            const option = document.createElement('option');
            option.value = breedsArray[i];
            option.innerText = breedsArray[i];
            select.appendChild(option);
        }
    })

// When the select is changed, call getDoggo and pass the selected URL
select.addEventListener("change", function (event) {
    console.log(event.target.value);
    // I made a variable for the loooong URL string
    const url = `https://dog.ceo/api/breed/${event.target.value}/images/random`
    console.log(url);

    // call the function and pass the URL
    getDoggo(url);
});

async function getDoggo(url) {
    // show spinner and hide image when loading
    spinner.classList.add("show");
    img.classList.remove("show");
    // get the image data from the URL (random image)
    const response = await fetch(url)
    const data = await response.json()

    // the message property has the .jpg URL so log it and tell the image to load it.
    console.log(data.message)
    img.src = data.message;
}

// when an image is loaded, hide the spinner and show the image
img.addEventListener("load", function () {
    spinner.classList.remove("show");
    img.classList.add("show");
})

// If you want an initial image, you can call getDoggo manually
// getDoggo("https://dog.ceo/api/breed/african/images/random");


