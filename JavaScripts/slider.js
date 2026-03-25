// LISTA DE IMAGENS POR PROJETO
const projectImages = {
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

    const project = slider.dataset.project;
    const images = projectImages[project];

    if (!images || images.length === 0) return;

    let current = 0;

    const img = slider.querySelector("img");
    const nextBtn = slider.querySelector(".next");
    const prevBtn = slider.querySelector(".prev");

    // BOTÃO NEXT 
    nextBtn.addEventListener("click", () => {
        current = (current + 1) % images.length;
        img.src = images[current];
    });

    // BOTÃO PREV
    prevBtn.addEventListener("click", () => {
        current = (current - 1 + images.length) % images.length;
        img.src = images[current];
    });

});