document.addEventListener("DOMContentLoaded", function () {
  var splide = new Splide(".splide", {
    perPage: 4,
    rewind: true,
  });

  splide.mount();
});

const topNav = document.querySelector(".top-nav");

window.addEventListener("scroll", () => {
  if (window.scrollY > 470) {
    topNav.classList.add("remove");
  } else {
    topNav.classList.remove("remove");
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
  window.scroll(0, 550)
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


let imageToShow = 0;

let showImage = () => {
    productImages.forEach((productImage, i) => {
        if (i != imageToShow) {
            productImage.classList.remove("opacity")
        } else {
            productImage.classList.add("opacity")
        }
    })
}

let thumbnails = document.querySelectorAll(".thumbnail")
let productImages = document.querySelectorAll(".product")

thumbnails.forEach((thumbnail, i) => {
    thumbnail.onclick = () => {
        imageToShow = i;
        thumbnails.forEach(thumbnail => {
            thumbnail.classList.remove("outline")
            thumbnail.classList.remove("bg")
        })
        if (i === imageToShow) {
            thumbnail.classList.add("outline")
            thumbnail.classList.add("bg")
        }
        showImage()

    }
})

showImage()