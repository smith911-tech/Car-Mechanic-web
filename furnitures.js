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
