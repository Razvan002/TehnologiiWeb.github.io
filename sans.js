var hoverSound = document.getElementById("hoverSound");
var clickSound = document.getElementById("clickSound");

var sprites = document.getElementById("sprites");
var isHovered = false;
var isMouseDown = false;

sprites.addEventListener("mouseenter", function() {
  isHovered = true;
  hoverSound.play();
});

sprites.addEventListener("mouseleave", function() {
  isHovered = false;
  hoverSound.pause();
  hoverSound.currentTime = 0;
});

sprites.addEventListener("mousedown", function() {
  if (isHovered) {
    hoverSound.pause();
    hoverSound.currentTime = 0;
  }
  
  isMouseDown = true;
  clickSound.play();
});

sprites.addEventListener("mouseup", function() {
  isMouseDown = false;
  clickSound.pause();
  clickSound.currentTime = 0;
});
