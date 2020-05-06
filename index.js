fetch("http://localhost:3000/fish")
.then(response => response.json())
.then(displayFish)


    function displayFish(fishinfo) {
        const cardContainer = document.querySelector("#card-container")
        
        fishinfo.forEach(fish => {
            const fishCard = document.createElement("div")
            const fishPhoto = document.createElement('img')
            const fishLink = document.createElement("a")

            fishLink.innerHTML = `<a href=show.html?id=${fish.id}>${fish.species_name}</a>`
            

            if (fish.species_illustration_photo) {
                fishPhoto.src = fish.species_illustration_photo
            } else {
               const noImage = document.createElement("p") 
               noImage.innerText = 'No image available'
               fishCard.append(noImage)
            }

            // const fishCardHolder = document.querySelector("div")
            //     fishCardHolder.classList.add("fishcard")
        
            cardContainer.append(fishCard)
            fishCard.append(fishPhoto, fishLink)
           
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

    // document.querySelector("#cards")