const btn = document.getElementsByClassName('container')[0]
const nav = document.getElementsByClassName('nav')[0]


btn.addEventListener('click', () => {
    nav.classList.toggle('active')
})
function myfunction(x) {
    btn.classList.toggle("change")
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




let slideInde = 1;

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