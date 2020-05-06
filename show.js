const params = window.location.search
const searchParams = new URLSearchParams(params)
const id = searchParams.get("id")

fetch(`http://localhost:3000/fish/${id}`)
    .then(response => response.json())
    .then(fish => displayFishData(fish))
    
    function displayFishData(fish){
    
        const fishContainer = document.querySelector('.fish-container')
        // const card = document.createElement('div')
        const h2 = document.createElement('h2')
        h2.id = "species-name-show"
        const h3 = document.createElement('h3')
        h3.id = "scientific-name"
        const habitat = document.createElement('h5')
        habitat.id = "habitat"
        const location = document.createElement('h5')
        location.id = "location"

        // card.className = 'fish-card'
        h2.innerText = fish.species_name
        h3.innerText = fish.scientific_name
        habitat.innerHTML = "Habitat:" + fish.habitat
        location.innerHTML = "Location:" + fish.location
        
        fishContainer.append(h2, h3, habitat, location)
    }





        // t.string "species_name"
        // t.string "scientific_name"
        // t.text "habitat"
        // t.text "location"
        // t.string "species_illustration_photo"