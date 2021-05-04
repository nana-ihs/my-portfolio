const age = document.getElementById("age");
const work = document.getElementById("work");
const club = document.getElementById("club");
const good = document.getElementById("good");

let count = 5678;

var pics_src = new Array(
  "pics/kikai.JPG",
  "pics/DSCF0294.JPG",
  "pics/DSC-0046-2.JPG"
);
var num = -1;

slideshow_timer();
function slideshow_timer() {
  if (num == 2) {
    num = 0;
  } else {
    num++;
  }
  document.getElementById("mypic").src = pics_src[num];
  setTimeout("slideshow_timer()", 2500);
}

age.onclick = function () {
  display.textContent = "横浜市立大学です";
};
work.onclick = function () {
  display.textContent = "ユニクロの売り場歩いてます";
};
club.onclick = function () {
  display.textContent = "釣り部（幽霊部員）";
};
good.onclick = function () {
  count += 1;
  show.textContent = count;
};
