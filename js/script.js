/*----- Hamburger menu -----*/
function changeClassAndAnimateButton(elem) {
  elem.classList.toggle("change"); // could also used addEventListener instead and select the element
  var topnavContainer = document.getElementById("topnav-container");
  var topnav = document.querySelector(".topnav");
  var footer = document.querySelector(".footer");
  var backgroundElem = document.querySelector(".main-background");

  if (topnavContainer.style.display === "block") {
    topnavContainer.style.display = "none";
    topnav.classList.remove("backgroundColorTopnav");
    backgroundElem.classList.remove("addBlur");
    footer.classList.remove("addBlur");
  } else {
    topnavContainer.style.display = "block";
    topnav.classList.add("backgroundColorTopnav");
    backgroundElem.classList.add("addBlur");
    footer.classList.add("addBlur");
  }
}

/* Fix a bug when you opened the hamburger menu on mobile and then resize window to desktop, topnav wouldn't show on desktop */
var elem = document.getElementById("topnav-container");
var topnav = document.querySelector(".topnav");
var mainBackground = document.querySelector(".main-background");
window.addEventListener("resize", displayWindowSize);

function displayWindowSize() {
  var currentWidth = window.innerWidth;

  if (currentWidth > 672) {
    elem.style.display = "block";
  } else {
    elem.style.display = "none";
    topnav.classList.remove("backgroundColorTopnav");
    mainBackground.classList.remove("addBlur");
  }
}

/* Update year in footer */
var copyrightElem = document.getElementById("copyright-element");

var date = new Date();
var currentYear = date.getFullYear();
var string = copyrightElem.innerHTML;
var replacedString = string.replace("year", currentYear);

copyrightElem.innerHTML = replacedString;
