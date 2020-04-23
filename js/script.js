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
