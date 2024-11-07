function toggleMenu() {
    const menu = document.getElementById('dropdown-menu');
    menu.classList.toggle('show');
}
// Cria a bolinha do cursor e a faz seguir o mouse
document.addEventListener("mousemove", function(event) {
    let cursor = document.querySelector(".cursor");

    if (!cursor) {
        // Cria a bolinha se ela não existir
        cursor = document.createElement("div");
        cursor.classList.add("cursor");
        document.body.appendChild(cursor);
    }

    // Ajusta a posição da bolinha com base no movimento do mouse
    cursor.style.left = `${event.pageX}px`;
    cursor.style.top = `${event.pageY}px`;
});

// Remover a bolinha quando o mouse sair da página
document.addEventListener('mouseleave', function() {
    const cursor = document.querySelector('.cursor');
    if (cursor) cursor.remove();
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
