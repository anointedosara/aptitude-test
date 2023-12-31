document.addEventListener("DOMContentLoaded", function () {
  var splide = new Splide(".splide", {
    perPage: 4,
    rewind: true,
  });

  splide.mount();
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
