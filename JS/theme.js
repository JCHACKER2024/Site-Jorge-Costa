// ATUALIZAR TEXTO DO BOTÃO
function atualizarTextoBotao(isLight) {
    const botao = document.getElementById("botao-alternar-tema");
    if (botao) {
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
    
    // Verifica se o tema guardado é "claro"
    const deveSerClaro = (temaSalvo === "claro");
    
    if (deveSerClaro) {
        document.body.classList.add("modo-claro");
    } else {
        document.body.classList.remove("modo-claro");
    }
    
    atualizarTextoBotao(deveSerClaro);
}

document.addEventListener("DOMContentLoaded", applyTheme);