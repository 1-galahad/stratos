function toggleMenu() {
    const menu = document.getElementById('dropdown-menu');
    menu.classList.toggle('show');
}

// Adiciona a bolinha do cursor que segue o mouse
document.addEventListener("mousemove", function(event) {
    const cursor = document.createElement("div");
    cursor.classList.add("cursor");
    document.body.appendChild(cursor);

    cursor.style.left = `${event.pageX}px`;
    cursor.style.top = `${event.pageY}px`;

    // Remove a bolinha após um pequeno delay para não sobrecarregar a página
    setTimeout(() => {
        cursor.remove();
    }, 100);
});

// Fechar o menu ao clicar fora dele
document.addEventListener('click', function(event) {
    const menu = document.getElementById('dropdown-menu');
    const button = document.querySelector('.menu-icon');

    // Verifica se o clique foi fora do menu ou do botão
    if (!menu.contains(event.target) && !button.contains(event.target)) {
        menu.classList.remove('show');
    }
});
