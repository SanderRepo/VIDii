// define variables – Hulp van Bahaa Salaymeh bij het verduidelijken van de code
const articles = document.querySelectorAll("article");
const face = document.querySelector("#face");
const machineBtn = document.querySelector(".machine-btn");
const machineLever = document.querySelector(".machine-lever");
//
const machineBtnImg = document.querySelector("#machine");
const originalSrc = "./images/hand/machine.svg";
const newSrc = "./images/hand/machine-pressed.svg";

const selectHook = document.querySelector("#hook");
const buttonSound = document.querySelector("#button-sound");

var easterEggSound = document.querySelector("#easter-egg-sound");

// count
let currentIndex = 0;

// paths of faces
const faceSources = [
   "./images/gezichtsuitdrukkingen/gezichtsuitdrukking-1.png",
   "./images/gezichtsuitdrukkingen/gezichtsuitdrukking-2.png",
   "./images/gezichtsuitdrukkingen/gezichtsuitdrukking-3.png",
   "./images/gezichtsuitdrukkingen/gezichtsuitdrukking-4.png",
   "./images/gezichtsuitdrukkingen/gezichtsuitdrukking-5.png",
   "./images/gezichtsuitdrukkingen/gezichtsuitdrukking-6.png",
];

// hide articles except the first one
for (let i = 1; i < articles.length; i++) {
   articles[i].style.display = "none";
}

// actions
machineBtn.onclick = fall;
machineLever.onclick = changeFaceAndArticle;
selectHook.onclick = playEggSound;

// functions
function fall() {
   machineBtnImg.src = newSrc;

   selectHook.classList.add("hook-animation");

   setTimeout(function () {
      selectHook.classList.remove("hook-animation");
   }, 3000);

   setTimeout(function () {
      machineBtnImg.src = originalSrc;
   }, 300);

   // play sound
   buttonSound.play();
   // Bron informatie: https://stackoverflow.com/questions/18826147/javascript-audio-play-on-click
}

function changeFaceAndArticle() {
   articles.forEach((article) => {
      article.style.display = "none";
   });

   currentIndex = (currentIndex + 1) % articles.length;
   articles[currentIndex].style.display = "block";

   face.src = faceSources[currentIndex];
}
// De selector van de images is gemaakt met behulp van ChatGPT. Een gedeelte van de code begrijp ik zelf niet.

function playEggSound() {
   easterEggSound.play();
}
