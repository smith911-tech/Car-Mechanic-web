const btn = document.getElementsByClassName('container')[0]
const nav = document.getElementsByClassName('nav')[0]


btn.addEventListener('click', () => {
    nav.classList.toggle('active')
})
function myfunction(x) {
    btn.classList.toggle("change")
}


let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
   
}

let slideInde = 1;
showSlides(slideInde);

//! Next/previous controls
function plusSlides(n) {
  showSlides(slideInde += n);
}

// ! preloader
const preloader = document.querySelector(".preloader");

window.addEventListener("load", function () {
  preloader.classList.add("hide-preloader");
});


// ! passport slide //
let slideindex = 0;
showslides();

function showslides() {
  let i;
  let slides = document.getElementsByClassName("Myslides-two");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideindex++;
  if (slideindex > slides.length) {slideindex = 1}
  slides[slideindex-1].style.display = "block";setTimeout(showslides, 3000)
   
}
//! end of passport slide //

// ! passport- two slide //
let sliderindex = 0;
showerSlides()

function showerSlides() {
  let i;
  let sliders = document.getElementsByClassName("Myslides-three");
  for (i = 0; i < sliders.length; i++) {
    sliders[i].style.display = "none";
  }
  slideInde++;
  if(slideInde > sliders.length) {slideInde = 1} 
  sliders[slideInde-1].style.display = "block";setTimeout(showerSlides,   3000 )
}


