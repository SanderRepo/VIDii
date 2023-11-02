// const articles = document.querySelectorAll("article");
// const images = document.getElementsByClassName("hand");
// let currentIndex = 0;

// // Verberg alle artikelen behalve het eerste
// for (let i = 1; i < articles.length; i++) {
//   articles[i].style.display = "none";
// }

// images[images.length - 1].addEventListener("click", () => {
//   articles.forEach((article) => {
//     article.style.display = "none";
//   });

//   // Toon het volgende artikel en zorg ervoor dat de index wordt gecirkeld
//   currentIndex = (currentIndex + 1) % articles.length;
//   articles[currentIndex].style.display = "block";
// });

const articles = document.querySelectorAll("article");
const images = document.getElementsByClassName("hand");
const articleImage = document.getElementsByClassName("article-image");
let currentIndex = 0;

// Array van afbeeldingsbronnen
const imageSources = [
  "../images/gezichtsuitdrukkingen/gezichtsuitdrukking-1.png",
  "../images/gezichtsuitdrukkingen/gezichtsuitdrukking-2.png",
  "image3.jpg",
  // Voeg hier de URL's toe voor de overige afbeeldingen
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

  // Wijzig de afbeelding buiten de article
  articleImage.src = imageSources[currentIndex];
});
