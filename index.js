let fishUrl;
const queryParams = new URLSearchParams(window.location.search);
const search = queryParams.get('search');

if(search) {
    fishUrl = `http://localhost:3000/fish?search=${search}`
}
else { 
    fishUrl = "http://localhost:3000/fish"
}



fetch(fishUrl)
    .then(response => response.json())
    .then(displayFish)

function displayFish(fishinfo) {
    console.log(fishinfo)
    fishinfo.forEach(fish => {
        const cardContainer = document.querySelector(".card-container")
        const species_illustration_photo = document.createElement('img')

        cardContainer.innerHTML = cardContainer.innerHTML + `<a href=show.html?id=${fish.id}><button>${fish.species_name}</button></a>`

        if (fish.species_illustration_photo) {
        species_illustration_photo.src = fish.species_illustration_photo
        } else {
            // noImage.textContent = 'No image available'
        }

        searchFish(fish)
        
        cardContainer.append(species_illustration_photo)
    })
}

function searchFish(fish) { 
    const $li = createElement("li")
    $li.innerHTML = `<a href=show.html?id=${fish.id}><button>${fish.species_name}</button></a>`
    cardContainer.append($li)
    }  