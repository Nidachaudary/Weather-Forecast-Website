//select the tags by ids and class
//images select
const img1 = document.getElementById("img1");
const img2 = document.getElementById("img2");
const img3 = document.getElementById("img3");
const img4 = document.getElementById("img4");
const img5 = document.getElementById("img5");
const img6 = document.getElementById("img6");
const img7 = document.getElementById("img7");
const img8 = document.getElementById("img8");
//full image background show tag select
const fullImgBackgroundDisplay = document.getElementById(
  "fullImgBackgroundDisplay"
);
//select images which after click on image  show
const im1 = document.getElementById("im-1");
const im2 = document.getElementById("im-2");
const im3 = document.getElementById("im-3");
const im4 = document.getElementById("im-4");
const im5 = document.getElementById("im-5");
const im6 = document.getElementById("im-6");
const im7 = document.getElementById("im-7");
const im8 = document.getElementById("im-8");
//close icon tag select
const iconClose = document.querySelector(".icon");
//Next and back icon selection
const firstImageNextIcon = document.querySelector(".firstImageNextIcon");
const secondImageBackIcon = document.querySelector(".secondImageBackIcon");
const secondImageNextIcon = document.querySelector(".secondImageNextIcon");
const thirdImageBackIcon = document.querySelector(".thirdImageBackIcon");
const thirdImageNextIcon = document.querySelector(".thirdImageNextIcon");
const fourthImageBackIcon = document.querySelector(".fourthImageBackIcon");
const fourthImageNextIcon = document.querySelector(".fourthImageNextIcon");
const fifthImageBackIcon = document.querySelector(".fifthImageBackIcon");
const fifthImageNextIcon = document.querySelector(".fifthImageNextIcon");
const sixthImageBackIcon = document.querySelector(".sixthImageBackIcon");
const sixthImageNextIcon = document.querySelector(".sixthImageNextIcon");
const seventhImageBackIcon = document.querySelector(".seventhImageBackIcon");
const seventhImageNextIcon = document.querySelector(".seventhImageNextIcon");
const eightImageBackIcon = document.querySelector(".eighthImageBackIcon");

//Event listner on clicking on image1
img1.addEventListener("click", onClickImg1);
function onClickImg1(event) {
  //image backgrond show
  fullImgBackgroundDisplay.classList.remove("d-none");
  //image show
  im1.classList.remove("d-none");
}
//Event listner on clicking on image2
img2.addEventListener("click", onClickImg2);
function onClickImg2(event) {
  //image backgrond show
  fullImgBackgroundDisplay.classList.remove("d-none");
  //image show
  im2.classList.remove("d-none");
}
//Event listner on clicking on image3
img3.addEventListener("click", onClickImg3);
function onClickImg3(event) {
  //image backgrond show
  fullImgBackgroundDisplay.classList.remove("d-none");
  //image show
  im3.classList.remove("d-none");
}
//Event listner on clicking on image4
img4.addEventListener("click", onClickImg4);
function onClickImg4(event) {
  //image backgrond show
  fullImgBackgroundDisplay.classList.remove("d-none");
  //image show
  im4.classList.remove("d-none");
}
//Event listner on clicking on image5
img5.addEventListener("click", onClickImg5);
function onClickImg5(event) {
  //image backgrond show
  fullImgBackgroundDisplay.classList.remove("d-none");
  //image show
  im5.classList.remove("d-none");
}
//Event listner on clicking on image6
img6.addEventListener("click", onClickImg6);
function onClickImg6(event) {
  //image backgrond show
  fullImgBackgroundDisplay.classList.remove("d-none");
  //image show
  im6.classList.remove("d-none");
}
//Event listner on clicking on image7
img7.addEventListener("click", onClickImg7);
function onClickImg7(event) {
  //image backgrond show
  fullImgBackgroundDisplay.classList.remove("d-none");
  //image show
  im7.classList.remove("d-none");
}
//Event listner on clicking on image8
img8.addEventListener("click", onClickImg8);
function onClickImg8(event) {
  //image backgrond show
  fullImgBackgroundDisplay.classList.remove("d-none");
  //image show
  im8.classList.remove("d-none");
}
//clicking on close icon
iconClose.addEventListener("click", iconClick);
function iconClick(event) {
  //alll images display none
  im1.classList.add("d-none");
  im2.classList.add("d-none");
  im3.classList.add("d-none");
  im4.classList.add("d-none");
  im5.classList.add("d-none");
  im6.classList.add("d-none");
  im7.classList.add("d-none");
  im8.classList.add("d-none");
  //image background display none
  fullImgBackgroundDisplay.classList.add("d-none");
}

//clicking on next and back icon
//for first image
firstImageNextIcon.addEventListener("click", nextIconImg1);
function nextIconImg1(event) {
  im1.classList.add("d-none");
  im2.classList.remove("d-none");
}
//for second image
//for back icon
secondImageBackIcon.addEventListener("click", backIconImg2);
function backIconImg2(event) {
  im1.classList.remove("d-none");
  im2.classList.add("d-none");
}
//for next icon
secondImageNextIcon.addEventListener("click", nextIconImg2);
function nextIconImg2(event) {
  im1.classList.add("d-none");
  im2.classList.add("d-none");
  im3.classList.remove("d-none");
}

//for third image
//for back icon
thirdImageBackIcon.addEventListener("click", backIconImg3);
function backIconImg3(event) {
  im2.classList.remove("d-none");
  im3.classList.add("d-none");
}
//for next icon
thirdImageNextIcon.addEventListener("click", nextIconImg3);
function nextIconImg3(event) {
  im2.classList.add("d-none");
  im3.classList.add("d-none");
  im4.classList.remove("d-none");
}

//for fourth image
//for back icon
fourthImageBackIcon.addEventListener("click", backIconImg4);
function backIconImg4(event) {
  im3.classList.remove("d-none");
  im4.classList.add("d-none");
}
//for next icon
fourthImageNextIcon.addEventListener("click", nextIconImg4);
function nextIconImg4(event) {
  im3.classList.add("d-none");
  im4.classList.add("d-none");
  im5.classList.remove("d-none");
}

//for fifth image
//for back icon
fifthImageBackIcon.addEventListener("click", backIconImg5);
function backIconImg5(event) {
  im4.classList.remove("d-none");
  im5.classList.add("d-none");
}
//for next icon
fifthImageNextIcon.addEventListener("click", nextIconImg5);
function nextIconImg5(event) {
  im4.classList.add("d-none");
  im5.classList.add("d-none");
  im6.classList.remove("d-none");
}

//for sixth image
//for back icon
sixthImageBackIcon.addEventListener("click", backIconImg6);
function backIconImg6(event) {
  im5.classList.remove("d-none");
  im6.classList.add("d-none");
}
//for next icon
sixthImageNextIcon.addEventListener("click", nextIconImg6);
function nextIconImg6(event) {
  im5.classList.add("d-none");
  im6.classList.add("d-none");
  im7.classList.remove("d-none");
}

//for seventh image
//for back icon
seventhImageBackIcon.addEventListener("click", backIconImg7);
function backIconImg7(event) {
  im6.classList.remove("d-none");
  im7.classList.add("d-none");
}
//for next icon
seventhImageNextIcon.addEventListener("click", nextIconImg7);
function nextIconImg7(event) {
  im6.classList.add("d-none");

  im7.classList.add("d-none");
  im8.classList.remove("d-none");
}

//for eighth image
//for back icon
eightImageBackIcon.addEventListener("click", backIconImg8);
function backIconImg8(event) {
  im7.classList.remove("d-none");
  im8.classList.add("d-none");
}
