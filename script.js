const typingText = document.getElementById("typingText");
const texts = [
  "Web Developer",
  "Python Developer",
  "Telegram Bot Developer",
  "Full-Stack Learner"
];

let textIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {
  const current = texts[textIndex];

  if (!deleting) {
    typingText.textContent = current.slice(0, charIndex + 1);
    charIndex++;

    if (charIndex >= current.length) {
      deleting = true;
      setTimeout(typeEffect, 1500);
      return;
    }
  } else {
    typingText.textContent = current.slice(0, charIndex - 1);
    charIndex--;

    if (charIndex <= 0) {
      deleting = false;
      textIndex = (textIndex + 1) % texts.length;
    }
  }

  setTimeout(typeEffect, deleting ? 45 : 85);
}

typeEffect();

const themeToggle = document.getElementById("themeToggle");
const savedTheme = localStorage.getItem("saran-theme");

if (savedTheme === "light") {
  document.body.classList.add("light");
}

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light");
  localStorage.setItem(
    "saran-theme",
    document.body.classList.contains("light") ? "light" : "dark"
  );
});

document.getElementById("year").textContent = new Date().getFullYear();
