const age = document.getElementById("age");
const work = document.getElementById("work");
const club = document.getElementById("club");

age.onclick = function () {
  display.textContent = "ギリ20です";
};
work.onclick = function () {
  display.textContent = "ユニクロの売り場歩きまくってるよ";
};
club.onclick = function () {
  display.textContent = "釣り部：幽霊部員";
};
