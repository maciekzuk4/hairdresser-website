//Deklaracja języków i umieszczenie każdego elementu w zmiennej.
let pl = document.querySelectorAll("span[lang=pl")
let nl = document.querySelectorAll("span[lang=nl]")
let en = document.querySelectorAll("span[lang=en]")

//Określenie domyślnego języka na podstawie preferencji przeglądarki
let defaultLanguage = eval((navigator.language).slice(0,2).toLowerCase())


//Umieszczenie wszystich języków w tablicy
let languages = [pl,nl,en]

//Funkcja chowająca wszyskie elementy w przekazanym języku
let hide =(language)=>{
    for (let i = 0; i < language.length; i++) {
        language[i].style.display = "none"
    }
}

//Funkcja pokazująca wszyskie elementy w przekazanym języku
let show =(language)=>{
    for (let i = 0; i < language.length; i++) {
        language[i].style.display = "block"
    }
}

//Funkcja pokazująca tylko elementy w przekazanym języku
let switchTo = (language)=>{
    for (let i = 0; i < languages.length; i++) {
        hide(languages[i])
    }
    show(language)
}

//Zmiana języka na domyślny po załadowaniu strony
document.addEventListener("load", switchTo(defaultLanguage))


