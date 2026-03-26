// LISTA DE IMAGENS POR PROJETO
const imagensPorProjeto = {
    bubble: [
        "IMGS/Bubble/Imagem1.png",
        "IMGS/Bubble/Imagem2.png",
        "IMGS/Bubble/Imagem3.png",
        "IMGS/Bubble/Imagem4.png",
        "IMGS/Bubble/Imagem5.png",
    ],
    colormorph: [
        "IMGS/ColorMorph/Imagem1.png",
        "IMGS/ColorMorph/Imagem2.png",
        "IMGS/ColorMorph/Imagem3.png",
    ],
    cursed: [
        "IMGS/CursedByRevenge/Imagem1.png",
        "IMGS/CursedByRevenge/Imagem2.png",
        "IMGS/CursedByRevenge/Imagem3.png",
        "IMGS/CursedByRevenge/Imagem4.png",
        "IMGS/CursedByRevenge/Imagem5.png",
        "IMGS/CursedByRevenge/Imagem6.png",
    ]
};

// INICIAR SLIDERS
document.querySelectorAll(".slider").forEach(slider => {
    const nomeProjeto = slider.dataset.project;
    const listaImagens = imagensPorProjeto[nomeProjeto];

    if (!listaImagens) return;

    let indiceAtual = 0;
    const elementoImg = slider.querySelector("img");
    const botaoProximo = slider.querySelector(".next"); 
    const botaoAnterior = slider.querySelector(".prev"); 

    // BOTÃO PRÓXIMO
    botaoProximo.addEventListener("click", (e) => {
        e.stopPropagation(); 
        indiceAtual = (indiceAtual + 1) % listaImagens.length;
        elementoImg.src = listaImagens[indiceAtual];
    });

    // BOTÃO ANTERIOR
    botaoAnterior.addEventListener("click", (e) => {
        e.stopPropagation();
        indiceAtual = (indiceAtual - 1 + listaImagens.length) % listaImagens.length;
        elementoImg.src = listaImagens[indiceAtual];
    });
});