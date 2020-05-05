fetch("http://localhost:3000/fish")
.then(response => response.json())
.then(displayFish)

    function displayFish(fishinfo) {
        fishinfo.forEach(fish => {
            const cardContainer = document.querySelector("#card-container")

            cardContainer.innerHTML = cardContainer.innerHTML + `<h3>${fish.species_name}</h3>
            <img src = ${fish.species_illustration_photo}></img>
            <a href=show.html?id=${fish.id}<button>Click here!</button></a>`

            
            // document.body.append(h2)
        })
    }