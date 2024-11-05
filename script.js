document.addEventListener("DOMContentLoaded", function() {
    const toggleModeButton = document.getElementById("toggle-mode");
    const body = document.body;

    // Verifica se o modo escuro está ativado previamente
    if (localStorage.getItem("dark-mode") === "enabled") {
        body.classList.add("dark-mode");
    }

    toggleModeButton.addEventListener("click", function() {
        body.classList.toggle("dark-mode");

        // Salva a preferência do usuário
        if (body.classList.contains("dark-mode")) {
            localStorage.setItem("dark-mode", "enabled");
        } else {
            localStorage.setItem("dark-mode", "disabled");
        }
    });
});
