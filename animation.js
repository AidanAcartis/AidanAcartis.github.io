// ===== ANIMATION TYPING EFFECT =====

const words = [
  "Software Engineer",
  "Machine Learning Engineer",
  "Web Developer",
  "Deep Learning & NLP",
  "Computer Vision",
  "Systems & Algorithms (C/C++)",
  "Mobile Development (React Native)"
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingDelay = 150;
const erasingDelay = 80;
const newWordDelay = 2000; // Temps de pause avant d'effacer

const typedTitleElement = document.getElementById("typed-title");

function type() {
  const currentWord = words[wordIndex];
  
  if (isDeleting) {
    // Supprimer un caractère
    typedTitleElement.innerHTML = currentWord.substring(0, charIndex - 1) + '<span class="typed-cursor">_</span>';
    charIndex--;
  } else {
    // Ajouter un caractère
    typedTitleElement.innerHTML = currentWord.substring(0, charIndex + 1) + '<span class="typed-cursor">_</span>';
    charIndex++;
  }

  // Logique de vitesse
  let typeSpeed = isDeleting ? erasingDelay : typingDelay;

  // Si le mot est fini de taper
  if (!isDeleting && charIndex === currentWord.length) {
    typeSpeed = newWordDelay;
    isDeleting = true;
  } 
  // Si le mot est totalement effacé
  else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % words.length; // Passer au mot suivant
    typeSpeed = 500;
  }

  setTimeout(type, typeSpeed);
}

// Lancer l'animation au chargement
document.addEventListener("DOMContentLoaded", () => {
  if (typedTitleElement) {
    setTimeout(type, 1000);
  }
});