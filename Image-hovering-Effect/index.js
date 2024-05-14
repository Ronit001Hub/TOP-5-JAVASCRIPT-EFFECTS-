var container = document.querySelector(".elem");
var container2 = document.querySelector(".elem2");
var container3 = document.querySelector(".elem3");
var container4 = document.querySelector(".elem4");
var container5 = document.querySelector(".elem5");

var img = document.querySelector(".elem>img");
var img2 = document.querySelector(".elem2>img");
var img3 = document.querySelector(".elem3>img");
var img4 = document.querySelector(".elem4>img");
var img5 = document.querySelector(".elem5>img");

// Image Ko ( Position : Absolute ) Dena Mat Bhulna warna Kaam nhi Karega

container.onmousemove = function (dets) {
  img.style.display = "block";
  img.style.left = dets.x + "px";
  img.style.top = dets.y + "px";
};

container.onmouseout = function () {
  img.style.display = "none";
};

container2.onmousemove = function (dets) {
  img2.style.display = "block";
  img2.style.left = dets.x + "px";
  img2.style.top = dets.y + "px";
};

container2.onmouseout = function () {
  img2.style.display = "none";
};
container3.onmousemove = function (dets) {
  img3.style.display = "block";
  img3.style.left = dets.x + "px";
  img3.style.top = dets.y + "px";
};

container3.onmouseout = function () {
  img3.style.display = "none";
};
container4.onmousemove = function (dets) {
  img4.style.display = "block";
  img4.style.left = dets.x + "px";
  img4.style.top = dets.y + "px";
};

container4.onmouseout = function () {
  img4.style.display = "none";
};
container5.onmousemove = function (dets) {
  img5.style.display = "block";
  img5.style.left = dets.x + "px";
  img5.style.top = dets.y + "px";
};

container5.onmouseout = function () {
  img5.style.display = "none";
};

