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

Object.values(imagensPorProjeto).flat().forEach(src => {
    const img = new Image();
    img.src = src;
});

// INICIAR SLIDERS
document.querySelectorAll(".slider").forEach(slider => {
    const nomeProjeto = slider.dataset.project;
    const listaImagens = imagensPorProjeto[nomeProjeto];

    if (!listaImagens || listaImagens.length === 0) return;

    let indiceAtual = 0;
    const elementoImg = slider.querySelector("img");
    const botaoProximo = slider.querySelector(".next"); 
    const botaoAnterior = slider.querySelector(".prev"); 

    // BOTÃO PRÓXIMO
    if (botaoProximo) {
        botaoProximo.addEventListener("click", (e) => {
            e.stopPropagation(); 
            indiceAtual = (indiceAtual + 1) % listaImagens.length;
            elementoImg.src = listaImagens[indiceAtual];
        });
    }

    if (botaoAnterior) {
        botaoAnterior.addEventListener("click", (e) => {
            e.stopPropagation();
            indiceAtual = (indiceAtual - 1 + listaImagens.length) % listaImagens.length;
            elementoImg.src = listaImagens[indiceAtual];
        });
    }
});