// fetch("http://localhost:3000/fish")
// .then(response => response.json())
// .then(displayFish)


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
        const cardContainer = document.querySelector("#card-container")
        
        fishinfo.forEach(fish => {
            const fishCard = document.createElement("div")
            fishCard.className = 'fish-cards'
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
        
            cardContainer.append(fishCard)
            fishCard.append(fishPhoto, fishLink)
           
            function searchFish(fishinfo) { 
                const $li = createElement("li")
                $li.innerHTML = `<a href=show.html?id=${fish.id}>${fish.species_name}</a>`
                fishinfo.append($li)
            }  

        })
    }

   

    // let fishUrl;
    // const queryParams = new URLSearchParams(window.location.search);
    // const search = queryParams.get('search');
    
    // if(search) {
    //     fishUrl = `http://localhost:3000/fish?search=${search}`
    // }
    // else { 
    //     fishUrl = "http://localhost:3000/fish"
    // }
    
    
    
    // fetch(fishUrl)
    //     .then(response => response.json())
    //     .then(displayFish)