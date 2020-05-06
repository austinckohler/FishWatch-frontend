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
        const h3 = document.createElement('h3')
        const habitat = document.createElement('p')
        const location = document.createElement('p')

        // card.className = 'fish-card'
        h2.innerText = fish.species_name
        h3.innerText = fish.scientific_name
        habitat.innerHTML = fish.habitat
        location.innerHTML = fish.location
        
        fishContainer.append(h2, h3, habitat, location)
    }





        // t.string "species_name"
        // t.string "scientific_name"
        // t.text "habitat"
        // t.text "location"
        // t.string "species_illustration_photo"