/*----- Hamburger menu -----*/
function changeClassAndAnimateButton(x) {
  x.classList.toggle("change");
  var x = document.getElementById("topnav-container");
  var topnav = document.querySelector(".topnav");
  var footer = document.querySelector(".footer");
  var backgroundElem = document.querySelector(".main-background");
  if (x.style.display === "block") {
    x.style.display = "none";
    topnav.classList.remove("backgroundColorTopnav");
    backgroundElem.classList.remove("addBlur");
    footer.classList.remove("addBlur");
  } else {
    x.style.display = "block";
    topnav.classList.add("backgroundColorTopnav");
    backgroundElem.classList.add("addBlur");
    footer.classList.add("addBlur");
  }
}

/* Fix a bug when you opened the hamburger menu and closed it on mobile, it wouldn't show on desktop */
var x = document.getElementById("topnav-container");
window.addEventListener("resize", displayWindowSize);

function displayWindowSize() {
  var currentWidth = window.innerWidth;

  if (currentWidth > 630) {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
