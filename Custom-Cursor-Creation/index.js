var doc = document.querySelector(".main");
var crsr = document.querySelector(".cursor");

doc.onmousemove = function (dets) {
  crsr.style.left = dets.x + "px";
  crsr.style.top = dets.y + "px";
};
