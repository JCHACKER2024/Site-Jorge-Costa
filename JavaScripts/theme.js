// ALTERAR TEMA
function toggleTheme() {
    const isLight = document.body.classList.toggle("light-mode");
    localStorage.setItem("theme", isLight ? "light" : "dark");
}

// GUARDAR TEMA
function applyTheme() {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light") {
        document.body.classList.add("light-mode");
    }
}

document.addEventListener("DOMContentLoaded", applyTheme);