// Paspaudus rodyti į section įdedama 10 paveikslėlių HTML saraše.


function randomPhoto() {
    let number = Math.floor(Math.random() * 21) + 1
    let path = `img/${number}.jpg`
    return path
}


function showPhotos() {
    const gallery = document.querySelector(".gallery")
    // gallery.innerHTML = ""
    let h2 = document.createElement("h2")
    h2.textContent = "Atsitiktinai atrinktos nuotraukos"
    h2.classList.add("text-center", "mb-4")
    gallery.appendChild(h2)

    let ul = document.createElement("ul")
    ul.classList.add("row", "justify-content-around")
    gallery.appendChild(ul)

    let paths = []
    for (let i = 0; i < 10; i++) {
        let li = document.createElement("li")
        li.classList.add("col-3", "mb-3")
        let img = document.createElement("img")
        let path = randomPhoto()
        while (paths.includes(path)) {
            path = randomPhoto()
        }
        paths.push(path)
        img.setAttribute("src", path)
        img.classList.add("img-fluid")
        img.ondblclick = changePhoto
        ul.appendChild(li).appendChild(img)
    }
    showBtn.disabled = true
    mixBtn.disabled = false
}


const showBtn = document.querySelector("#show")

showBtn.onclick = showPhotos


// Paspaudus ant paveikslėlio du kartus pakeičiama Jūsų pasirinkta standartine nuotrauka.


function changePhoto(e) {
    const selectedPhoto = "img/22.jpg"
    e.target.setAttribute("src", selectedPhoto)
}


// Paspaudus Maišyti, sukeičiama vieta saraše (atsitiktiniu būdu).


function mixPhotos() {
    let showed = document.querySelectorAll("img")
    let paths = []
    for (let photoSrc of showed) {
        paths.push(photoSrc.getAttribute("src"))
    }
    let newOrder = []
    while (0 < paths.length) {
        let index = Math.floor(Math.random() * paths.length)
        newOrder.push(paths[index])
        paths.splice(index, 1)
    }
    for (let i = 0; i < showed.length;i++) {
        showed[i].setAttribute("src", newOrder[i])
    }
}


const mixBtn = document.querySelector("#mix")

mixBtn.onclick = mixPhotos