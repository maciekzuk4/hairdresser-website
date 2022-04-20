let photos = document.querySelectorAll(".change")

let changePhoto = function(){
    let photoBefore = this.querySelector(".photoBefore")
    let photoAfter = this.querySelector(".photoAfter")
    console.log(photoBefore)
    if(photoBefore.classList.contains("fadeIn")){
        photoBefore.classList.remove("fadeIn")
        photoBefore.classList.add("fadeOut")
    } else{
        photoBefore.classList.remove("fadeOut")
        photoBefore.classList.add("fadeIn")
    }
    let before = this.querySelectorAll(".before")
    let after = this.querySelectorAll(".after")
    before[0].classList.toggle("hide")
    after[0].classList.toggle("hide")
}

for (let i = 0; i < photos.length; i++) {
    photos[i].addEventListener("click", changePhoto) //;
}