var x = document.getElementById("elem");

var addBtn = document.getElementById("add");

var flag = 0;

addBtn.onclick = function () {
  if (flag == 0) {
    x.innerHTML = "Friends";
    x.style.color = "#2FDB51";
    x.style.fontWeight = "600";
    x.style.fontSize = "25px";
    addBtn.innerHTML = "Remove";
    addBtn.style.backgroundColor = "orangered";
    flag = 1;
  } else {
    x.innerHTML = "Stranger";
    x.style.color = "red";
    x.style.fontWeight = "400";
    x.style.fontSize = "25px";
    addBtn.innerHTML = "Add Friend";
    addBtn.style.backgroundColor = "#1B47EA";
    flag = 0;
  }
};
