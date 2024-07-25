var imgList = Array.from(document.querySelectorAll(".item img"));
var lightBox = document.getElementById("light-box");
var lightBoxItem = document.getElementById("light-box-item");
var currentSlideIndex;
var closeBtn = document.getElementById("close-btn");
var nextBtn = document.getElementById("right-btn");
var previousBtn = document.getElementById("left-btn");

for (var i = 0; i < imgList.length; i++) {
  imgList[i].addEventListener("click", function (e) {
    lightBox.classList.remove("d-none");
    var imgSrc = e.target.getAttribute("src");
    lightBoxItem.style.backgroundImage = ` url(${imgSrc})`;
    currentSlideIndex = imgList.indexOf(e.target);
  });
}

function nextSlide() {
  currentSlideIndex++;
  if (currentSlideIndex > imgList.length - 1) {
    currentSlideIndex = 0;
  }
  var imgSrc = imgList[currentSlideIndex].getAttribute("src");
  lightBoxItem.style.backgroundImage = `url(${imgSrc})`;
}

function previousSlide() {
  currentSlideIndex--;
  if (currentSlideIndex < 0) {
    currentSlideIndex = imgList.length - 1;
  }

  var imgSrc = imgList[currentSlideIndex].getAttribute("src");
  lightBoxItem.style.backgroundImage = `url(${imgSrc})`;
}

function closeSlide() {
  lightBox.classList.add("d-none");
}

nextBtn.addEventListener("click", nextSlide);
previousBtn.addEventListener("click", previousSlide);
closeBtn.addEventListener("click", closeSlide);
