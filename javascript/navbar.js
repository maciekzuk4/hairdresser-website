let hamburger = document.querySelector(".navbar__hamburger");
let landingPage = document.querySelector(".landingPage");
let news = document.querySelector(".news");
let aboutUs = document.querySelector(".aboutUs");
let qualifications = document.querySelector(".qualifications");
let gallery = document.querySelector(".gallery");
let priceList = document.querySelector(".prices");
let contact = document.querySelector(".footer");
let navbar = document.querySelector(".navbar")
let html = document.querySelector("html")
let body = document.querySelector("body")
let hamburgerMenu = document.querySelector(".menu")
let cross = document.querySelector(".menu__cross")
let elements = document.querySelectorAll(".menu__element")
let navbarList = document.querySelectorAll(".navbar__list li")
let sections = document.querySelectorAll("#section")
let navbarShowAllow = true;

let showMenu = () => {
    hamburgerMenu.classList.add("active");
    hamburgerMenu.classList.remove("hideHam")
    hideNavbar();
    for (let i = 0; i < sections.length; i++) {
        sections[i].classList.add("blur")
    }
    navbarShowAllow = false;
}

let hideMenu = () => {
    hamburgerMenu.classList.remove("active")
    hamburgerMenu.classList.add("hideHam")
    navbar.classList.remove("hide")
    for (let i = 0; i < sections.length; i++) {
        sections[i].classList.remove("blur")
    }
    navbarShowAllow = true;
}


navbarList[0].addEventListener("click", () => {

    landingPage.scrollIntoView()

})

navbarList[1].addEventListener("click", () => {

    news.scrollIntoView()

})

navbarList[2].addEventListener("click", () => {
    aboutUs.scrollIntoView()
})

navbarList[3].addEventListener("click", () => {
    gallery.scrollIntoView()
})

navbarList[4].addEventListener("click", () => {
    priceList.scrollIntoView()
})

navbarList[5].addEventListener("click", () => {
    contact.scrollIntoView()
})




elements[0].addEventListener("click", () => {
    landingPage.scrollIntoView()
    hideMenu()
})

elements[1].addEventListener("click", () => {
    news.scrollIntoView()
    hideMenu()
})

elements[2].addEventListener("click", () => {
    aboutUs.scrollIntoView()
    hideMenu()
})

elements[3].addEventListener("click", () => {
    gallery.scrollIntoView()
    hideMenu()
})

elements[4].addEventListener("click", () => {
    priceList.scrollIntoView()
    hideMenu()
})

elements[5].addEventListener("click", () => {
    contact.scrollIntoView()
    hideMenu()
})


hamburger.addEventListener("click", () => {
    showMenu()
})



cross.addEventListener("click", () => {
    hideMenu()
})

let showNavbar = () => {
    navbar.classList.remove("hide")
    navbar.classList.add("show")
}

let hideNavbar = () => {
    navbar.classList.add("hide")
}

let lastScrollTop = 0;
window.addEventListener("scroll", () => {
    let scrollPosition = window.pageYOffset;
    if (scrollPosition > 800 & navbarShowAllow == true) {
        if (scrollPosition > lastScrollTop) {
            hideNavbar();
        } else {
            showNavbar();
        }
    } else {
        hideNavbar();
    }
    if (scrollPosition < 300) {
        navbar.classList.remove("hide")
        navbar.classList.remove("show")
    }
    lastScrollTop = scrollPosition
})