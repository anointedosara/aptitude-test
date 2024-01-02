document.addEventListener("DOMContentLoaded", function () {
  var splide = new Splide(".splide", {
    perPage: 4,
    rewind: true,
  });

  splide.mount();
});

const btmNav = document.querySelector(".btm-nav");

window.addEventListener("scroll", () => {
  if (window.scrollY > 550) {
    btmNav.classList.add("add");
  } else {
    btmNav.classList.remove("add");
  }
});

let buttons = document.querySelectorAll(".btn");
let banner1 = document.querySelector(".banner1");
let banner2 = document.querySelector(".banner2");

for (let i = 0; i < buttons.length; i++) {
  buttons[0].classList.add("bg");
  buttons[0].querySelector(".mountains-line").classList.add("line-color");
  buttons[i].addEventListener("click", () => {
    buttons[i].classList.add("bg");
    buttons[i].querySelector(".mountains-line").classList.add("line-color");
    if (i === 0) {
      banner1.style.opacity = 1;
      banner2.style.opacity = 0;
    } else {
      banner1.style.opacity = 0;
      banner2.style.opacity = 1;
    }

    for (let j = 0; j < buttons.length; j++) {
      if (i != j) {
        buttons[j].classList.remove("bg");
        buttons[j]
          .querySelector(".mountains-line")
          .classList.remove("line-color");
      }
    }
  });
}

let open = document.querySelector(".open");
let close = document.querySelector(".close");
let dropdown = document.querySelector(".dropdown");
let body = document.querySelector("body");
// open.style.display = "block"
open.addEventListener("click", () => {
  body.style.overflow = "hidden";
  open.classList.add("hide-dropdown");
  close.classList.remove("hide-dropdown");
  close.style.display = "block";
  dropdown.style.height = "100vh";
  dropdown.style.overflow = "hidden";
});

close.addEventListener("click", () => {
  open.classList.remove("hide-dropdown");
  close.classList.add("hide-dropdown");
  dropdown.style.height = "0";
  dropdown.style.overflow = "hidden";
  body.style.overflow = "unset";
});

let btmOpen = document.querySelector(".btm-nav-open");
let btmClose = document.querySelector(".btm-nav-close");
let btmDropdown = document.querySelector(".btm-nav-dropdown");
// open.style.display = "block"
btmOpen.addEventListener("click", () => {
  body.style.overflow = "hidden";
  btmOpen.classList.add("hide-dropdown");
  btmClose.classList.remove("hide-dropdown");
  btmClose.style.display = "block";
  btmDropdown.style.height = "100vh";
  btmDropdown.style.overflow = "hidden";
});

btmClose.addEventListener("click", () => {
  btmOpen.classList.remove("hide-dropdown");
  btmClose.classList.add("hide-dropdown");
  btmDropdown.style.height = "0";
  btmDropdown.style.overflow = "hidden";
  body.style.overflow = "unset";
});

const slide = document.querySelectorAll('.splide__slide')
const modal = document.querySelector('.modal')
const modalImg = document.querySelector('.modal-img')
const closeModal = document.querySelector('.modal-close')

for (let i = 0; i < slide.length; i++) {
slide[i].addEventListener("click", () => {
  let src = slide[i].src
  body.style.overflow = "hidden";
  modalImg.src = src
      modal.style.display = 'flex'
})
}
closeModal.addEventListener("click", () => {
  body.style.overflow = "unset";
  modal.style.display = 'none'
})