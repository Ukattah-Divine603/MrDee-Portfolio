const navlinks = document.querySelectorAll(".navlink");

navlinks.forEach((link) => {
  link.addEventListener("click", () => {
    const active = document.querySelector(".active-nav");
    active.classList.remove("active-nav");
    link.classList.add("active-nav");
  });
});

const words = ["Ukattah Divinee", "MrDee.."];
let wordIndex = 0;
let letterIndex = 0;
let currentText = "";
let isDeleting = false;
const speed = 150;
const pause = 1000;

function typeWriter() {
  const textElement = document.getElementById("text");
  const currentWord = words[wordIndex];

  if (!isDeleting) {
    currentText = currentWord.slice(0, letterIndex + 1);
    letterIndex++;
    if (letterIndex === currentWord.length) {
      isDeleting = true;
      setTimeout(typeWriter, pause);
      return;
    }
  } else {
    currentText = currentWord.slice(0, letterIndex - 1);
    letterIndex--;
    if (letterIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
    }
  }

  textElement.textContent = currentText;
  setTimeout(typeWriter, isDeleting ? speed / 2 : speed);
}

document.addEventListener("DOMContentLoaded", typeWriter);
