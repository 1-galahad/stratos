// Ativar/desativar Modo Escuro
const darkModeToggle = document.getElementById('darkModeToggle');
darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    const socialButtons = document.querySelectorAll('.social-buttons a');
    socialButtons.forEach(button => button.classList.toggle('dark-mode'));

    // Alterna o ícone do botão de modo escuro
    darkModeToggle.textContent = document.body.classList.contains('dark-mode') ? '🌞 Modo Claro' : '🌙 Modo Escuro';
});
