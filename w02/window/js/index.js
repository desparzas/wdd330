const hambutton = document.querySelector(".🍔");
const mainnav = document.querySelector(".navigation");

hambutton.addEventListener(
  "click",
  () => {
    mainnav.classList.toggle("responsive");
  },
  false
);

// To solve the mid resizing issue with responsive class [window.onresize]

let alertShown = false;

window.addEventListener("resize", () => {
  if (window.innerWidth > 760) {
    // window.innerWidth includes the scrollbar (if any), document.documentElement.clientWidth does not
    mainnav.classList.remove("responsive");
    if (!alertShown) {
      window.alert("Responsive class removed due to window resizing.");
      alertShown = true;
    }
  } else {
    alertShown = false;
  }
});
