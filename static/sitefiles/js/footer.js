window.onload = function() {
  var footer = document.querySelector("footer");
  var body = document.querySelector("body");
  var bodyHeight = body.offsetHeight;
  var windowHeight = window.innerHeight;
  
  if (bodyHeight < windowHeight) {
    footer.style.position = "absolute";
    footer.style.bottom = "0";
  } else {
    footer.style.position = "static";
  }
}