const articles = document.querySelectorAll("article");
const images = document.getElementsByClassName("hand");
const articleImage = document.getElementById("article-image");
let currentIndex = 0;

const imageSources = [
   "images/gezichtsuitdrukkingen/gezichtsuitdrukking-1.png",
   "images/gezichtsuitdrukkingen/gezichtsuitdrukking-2.png",
   "images/gezichtsuitdrukkingen/gezichtsuitdrukking-3.png",
   "images/gezichtsuitdrukkingen/gezichtsuitdrukking-4.png",
   "images/gezichtsuitdrukkingen/gezichtsuitdrukking-5.png",
   "images/gezichtsuitdrukkingen/gezichtsuitdrukking-6.png",
];

for (let i = 1; i < articles.length; i++) {
   articles[i].style.display = "none";
}

images[images.length - 1].addEventListener("click", () => {
   articles.forEach((article) => {
      article.style.display = "none";
   });

   currentIndex = (currentIndex + 1) % articles.length;
   articles[currentIndex].style.display = "block";

   articleImage.src = imageSources[currentIndex];
});

// De selector van de images is gemaakt met behulp van ChatGPT. Een gedeelte van de code begrijp ik zelf niet.

// ----------------- //

const image = document.getElementById("machine");
const originalSrc = "images/hand/machine.svg";
const newSrc = "images/hand/machine-active.svg";
const changeDuration = 300;

const selectHook = document.getElementById("hook");
var buttonSound = document.getElementById("button-sound");

image.addEventListener("click", function () {
   image.src = newSrc;

   selectHook.classList.add("hook-animation");

   setTimeout(function () {
      selectHook.classList.remove("hook-animation");
   }, 3000);

   setTimeout(function () {
      image.src = originalSrc;
   }, changeDuration);

   buttonSound.play();
});

// ----------------- //

var easterEggSound = document.getElementById("easter-egg-sound");

selectHook.addEventListener("click", function () {
   if (!easterEggSound.paused) {
      easterEggSound.pause();
      easterEggSound.currentTime = 0;
   }

   easterEggSound.play();
});
