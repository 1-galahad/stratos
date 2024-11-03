// Ativar/desativar Modo Escuro com efeito deslizante
const darkModeToggle = document.getElementById('darkModeToggle');
darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    darkModeToggle.classList.toggle('active');
});

// Função para alternar slides do portfólio
let currentSlide = 0;
const slides = document.querySelectorAll('.portfolio-slide');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.transform = `translateX(${(i - index) * 100}%)`;
    });
}

document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentSlide);
});
