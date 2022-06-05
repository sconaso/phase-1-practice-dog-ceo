// challenge 1

function fetchRandomDogs(){
    fetch('https://dog.ceo/api/breeds/image/random/4')
    .then((resp) => resp.json())
    .then((data) => addImagesToPage(data))
}

function addImagesToPage(data){
    let urls = data.message
    urls.forEach((url) => {
        let imageDiv = document.querySelector('div#dog-image-container')
        let newImage = document.createElement('img')
        imageDiv.appendChild(newImage).src = `${url}`
    })
}

document.addEventListener('DOMContentLoaded', fetchRandomDogs)

// challenge 2

function fetchAllDogs(){
    fetch('https://dog.ceo/api/breeds/list/all')
    .then((resp) => resp.json())
    .then((data) => addNamesToPage(data))
}

function addNamesToPage(data){
    let breedsObj = data.message
    let breedsArr = Object.keys(breedsObj)
    breedsArr.forEach((breed) => {
        let dogList = document.querySelector('ul#dog-breeds')
        let newItem = document.createElement('li')
        dogList.appendChild(newItem).innerText = `${breed}`
    })
}

document.addEventListener('DOMContentLoaded', fetchAllDogs)

// challenge 3

setTimeout(updateColors, 3000) // wait 3 sec for the images, names to load

function updateColors(){
    let doggoList = document.querySelectorAll('li')
    doggoList.forEach((item) => {
        item.addEventListener('click', () => {
            item.setAttribute("style", "color:red")
        })
    })
}

// challenge 4

setTimeout(useDropdown, 3000) // wait 3 sec for the images, names to load

function useDropdown(){
    let letterDropdown = document.querySelector('select#breed-dropdown')
    letterDropdown.addEventListener('change', (e) => {
        compareLetterToList(e.target.value)
    })
}

function compareLetterToList(selectedLetter){
    let doggoList = document.querySelectorAll('li')
    doggoList.forEach((item) => {
        let firstLetter = item.innerText.split('')[0]
        if (firstLetter !== selectedLetter){
            item.hidden = true
        } else {
            item.hidden = false
        }
    })
}