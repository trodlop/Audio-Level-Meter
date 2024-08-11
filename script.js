const decibels = document.getElementById("decibels");
const refresh = document.getElementById("refresh");

decibels.innerText = "testing123"

var data = [5,7,3,98,14,5]

function Refresh() {
  decibels.innerText += data
};

refresh.addEventListener("click", Refresh);
