const pCare = document.getElementById("pCare");
const energy = document.getElementById("energy");
const internet = document.getElementById("internet");
const kitchen = document.getElementById("kitchen");
const hKeeping = document.getElementById("hKeeping");


pCare.addEventListener("onclick",showCare)
energy.addEventListener("onclick",showEnergy)
internet.addEventListener("onclick",showMe)
kitchen.addEventListener("onclick",showMe)
hKeeping.addEventListener("onclick",showMe)



const slides = document.getElementsByClassName('itemBox');
let slidePosition = 0;
const totalSlides = slides.length;

function hideAllSlides() {
    for (let slide of slides) {
        slide.classList.remove('itemBoxVisible');
        slide.classList.add('itemBoxHidden');
    }
}

function showCare() {
    hideAllSlides();
    
    if (slidePosition === totalSlides - 5) {
        slidePosition = 0;
    }
    
    slides[slidePosition].classList.add("itemBoxVisible");
}

function showEnergy() {
    hideAllSlides();
    
    if (slidePosition === totalSlides - 4) {
        slidePosition = 1;
    } 
    
    slides[slidePosition].classList.add("itemBoxVisible");
}