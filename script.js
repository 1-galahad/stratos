let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelector('.slides');
    const totalSlides = document.querySelectorAll('.slide').length;

    if (index >= totalSlides) {
        currentSlide = 0; 
    } else if (index < 0) {
        currentSlide = totalSlides - 1; 
    } else {
        currentSlide = index;
    }

    slides.style.transform = 'translateX(' + (-currentSlide * 100) + '%)';
}

setInterval(() => {
    showSlide(currentSlide + 1);
}, 5000);

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    const toggleCircle = document.querySelector('.toggle-circle');
    
    if (document.body.classList.contains('dark-mode')) {
        toggleCircle.style.transform = 'translateX(20px)';
    } else {
        toggleCircle.style.transform = 'translateX(0)';
    }
}
