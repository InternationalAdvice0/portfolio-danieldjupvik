/*----- Hamburger menu -----*/
function changeClassAndAnimateButton(x) {
  x.classList.toggle("change");
  var x = document.getElementById("topnav-container");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
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
