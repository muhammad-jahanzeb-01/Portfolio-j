const textToType = "M.Jahanzeb\nFrontEnd\nDeveloper";
const typingSpeed = 150; // Speed of typing in milliseconds

const typingEffectElement = document.getElementById("typing-effect");

let index = 0;

function typeText() {
  if (index < textToType.length) {
    typingEffectElement.textContent += textToType[index];
    index++;
    setTimeout(typeText, typingSpeed);
  }
}

typeText();
