// ALTERAR TEMA
function toggleTheme() {
    const isLight = document.body.classList.toggle("modo-claro");
    localStorage.setItem("tema", isLight ? "claro" : "escuro");
}

// GUARDAR TEMA
function applyTheme() {
    const temaSalvo = localStorage.getItem("tema");
    if (temaSalvo === "claro") {
        document.body.classList.add("modo-claro");
    }
}

document.addEventListener("DOMContentLoaded", applyTheme);