function atualizarTextoBotao(isLight) {
    const botao = document.getElementById("botao-alternar-tema");
    if (botao) {
        // Se o site está CLARO, o botão sugere mudar para DARK
        // Se o site está ESCURO, o botão sugere mudar para LIGHT
        botao.innerText = isLight ? "DARK" : "LIGHT";
    }
}

// ALTERAR TEMA
function toggleTheme() {
    const isLight = document.body.classList.toggle("modo-claro");
    localStorage.setItem("tema", isLight ? "claro" : "escuro");
    atualizarTextoBotao(isLight);
}

// APLICAR TEMA AO CARREGAR
function applyTheme() {
    const temaSalvo = localStorage.getItem("tema");
    const isLight = temaSalvo === "claro";
    
    if (isLight) {
        document.body.classList.add("modo-claro");
    }
    
    atualizarTextoBotao(isLight);
}

document.addEventListener("DOMContentLoaded", applyTheme);