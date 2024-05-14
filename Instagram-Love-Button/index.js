var container = document.querySelector("#card");
var loveBtn = document.querySelector("#card>i");

container.ondblclick = function () {
  loveBtn.style.color = "red";
  loveBtn.style.transform = "translate(-50%, -50%) scale(1)";
  loveBtn.style.opacity = 1;
  setTimeout(() => {
    loveBtn.style.opacity = 0;
    loveBtn.style.transform = "translate(-50%, -50%) scale(0)";
  }, 1000);
};
