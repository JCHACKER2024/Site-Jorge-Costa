// Função para alternar o tema
function toggleTheme() {
    const isLight = document.body.classList.toggle("light-mode");
    localStorage.setItem("theme", isLight ? "light" : "dark");
}

// Função para aplicar o tema guardado ao carregar a página
function applyTheme() {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light") {
        document.body.classList.add("light-mode");
    }
}

document.addEventListener("DOMContentLoaded", applyTheme);