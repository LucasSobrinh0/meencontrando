const texts = ["A higiene do sono refere-se a práticas e hábitos que promovem um sono de qualidade. Fazer higiene do sono é essencial porque melhora a saúde física e mental, aumenta a energia e a produtividade, e reduz o risco de problemas de saúde.",
 "Vá para a cama e acorde no mesmo horário todos os dias. Exemplo: Dormir às 22h e acordar às 6h.",
"Mantenha seu quarto escuro, silencioso e fresco. Exemplo: Use cortinas blackout e ajuste o termostato para uma temperatura confortável.",
"Não consuma café, chá ou refrigerante após as 14h. Exemplo: Troque seu café da tarde por uma infusão sem cafeína."];

let currentIndex = 0;

const progressBar = document.getElementById("progressBar");
const displayText = document.getElementById("displayText");

function updateProgressBar() {
    const progress = ((currentIndex + 1) / texts.length) * 100;
    progressBar.style.width = `${progress}%`;
}

function updateDisplayText() {
    displayText.textContent = texts[currentIndex];
}

function prevText() {
    if (currentIndex > 0) {
        currentIndex--;
        updateProgressBar();
        updateDisplayText();
    }
}

function nextText() {
    if (currentIndex < texts.length - 1) {
        currentIndex++;
        updateProgressBar();
        updateDisplayText();
    }
}

// Initial setup
updateProgressBar();
updateDisplayText();
