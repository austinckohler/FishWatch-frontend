fetch("http://localhost:3000/fish")
.then(response => response.json())
.then(displayFish)

    function displayFish(fishinfo) {
        fishinfo.forEach(fish => {
            const cardContainer = document.querySelector("#card-container")
            const species_illustration_photo = document.createElement('img')

            cardContainer.innerHTML = cardContainer.innerHTML + `<a href=show.html?id=${fish.id}<button>${fish.species_name}</button></a>`

            if (fish.species_illustration_photo) {
            species_illustration_photo.src = fish.species_illustration_photo
            } else {
                noImage.textContent = 'No image available'
            }
           cardContainer.append(species_illustration_photo)
        })
    }

    // function displayFishData(fish){
    //     fish.forEach(fish => {
    //         const h5 = document.createElement('h5')
    //         const species_illustration_photo = document.createElement('img')
    //         const p = document.createElement('p')
    //         h5.innerHTML = fish.species_name
    //         species_illustration_photo.innerHTML = fish.species_illustration_photo
    //         p.innerHTML = fish.habitat
    //         document.body.append(h5, species_illustration_photo, p)
    //        