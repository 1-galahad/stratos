// Cria a bolinha do cursor e a faz seguir o mouse
document.addEventListener("mousemove", function(event) {
    let cursor = document.querySelector(".cursor");

    if (!cursor) {
        // Cria a bolinha se não existir
        cursor = document.createElement("div");
        cursor.classList.add("cursor");
        document.body.appendChild(cursor);
    }

    // Ajusta a posição da bolinha com base no movimento do mouse
    cursor.style.left = `${event.pageX}px`;
    cursor.style.top = `${event.pageY}px`;
});

// Garante que a bolinha seja removida quando o mouse sair da tela
document.addEventListener('mouseleave', function() {
    const cursor = document.querySelector('.cursor');
    if (cursor) cursor.remove();
});

// Função para controlar o menu dropdown
function toggleMenu() {
    const menu = document.getElementById('dropdown-menu');
    menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
}
