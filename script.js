let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelector('.slides');
    const totalSlides = document.querySelectorAll('.slide').length;

    if (index >= totalSlides) {
        currentSlide = 0; // Volta ao primeiro slide
    } else if (index < 0) {
        currentSlide = totalSlides - 1; // Vai para o último slide
    } else {
        currentSlide = index;
    }

    slides.style.transform = 'translateX(' + (-currentSlide * 100) + '%)';
}

// Muda de slide a cada 5 segundos
setInterval(() => {
    showSlide(currentSlide + 1);
}, 5000);

// Função para alternar entre modo claro e escuro
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    const toggleCircle = document.querySelector('.toggle-circle');
    
    if (document.body.classList.contains('dark-mode')) {
        toggleCircle.style.transform = 'translateX(20px)'; // Mova a bolinha
    } else {
        toggleCircle.style.transform = 'translateX(0)'; // Mova de volta
    }
}
