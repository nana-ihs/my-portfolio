const school = document.getElementById("school");
const work = document.getElementById("work");
const club = document.getElementById("club");
const good = document.getElementById("good");
let count = 5678;

var pics_src = new Array(
  "pics/pic1.JPG",
  "pics/pic2.JPG",
  "pics/pic3.JPG",
  "pics/pic4.JPG",
  "pics/pic6.JPG"
);
var num = -1;

slideshow_timer();
function slideshow_timer() {
  if (num == 4) {
    num = 0;
  } else {
    num += 1;
  }
  document.getElementById("mypic").src = pics_src[num];
  setTimeout("slideshow_timer()", 2500);
}

school.onclick = function () {
  display1.textContent = "横浜市立大学です";
};
work.onclick = function () {
  display2.textContent = "ユ二クロです";
};
club.onclick = function () {
  display3.textContent = "釣り部（幽霊部員）";
};

good.onclick = function () {
  count += 3;
  number.textContent = count;
};
