// vctalent.xyz - brand system v1.0
console.log('system operational');

// --- Typewriter Effect ---
const textToType = "hiring for early-stage crypto teams.";
const typeSpeed = 80; // ms per char
const typeElement = document.getElementById('typewriter');
const cursorLogo = document.querySelector('.cursor-logo');

function typeWriter() {
    if (!typeElement) return;

    let i = 0;
    typeElement.textContent = '';

    function type() {
        if (i < textToType.length) {
            typeElement.textContent += textToType.charAt(i);
            i++;
            setTimeout(type, typeSpeed);
        } else {
            // Typing finished, stop cursor blink
            if (cursorLogo) {
                cursorLogo.classList.add('stopped');
            }
        }
    }

    // Start typing after the fade-in animation (approx 500ms)
    setTimeout(type, 600);
}

document.addEventListener('DOMContentLoaded', () => {
    typeWriter();
});
