// LISTA DE IMAGENS POR PROJETO
const projectImages = {
    springup: [
        "../IMGS/SpringUp/imagem1.png",
        "../IMGS/SpringUp/imagem2.png",
        "../IMGS/SpringUp/imagem3.png",
    ],
    colormorph: [
        "../IMGS/ColorMorph/imagem1.png",
        "../IMGS/ColorMorph/imagem2.png",
        "../IMGS/ColorMorph/imagem3.png",
    ],
    cursed: [
        "../IMGS/CursedByRevenge/imagem1.png",
        "../IMGS/CursedByRevenge/imagem2.png",
        "../IMGS/CursedByRevenge/imagem3.png",
        "../IMGS/CursedByRevenge/imagem4.png",
        "../IMGS/CursedByRevenge/imagem5.png",
        "../IMGS/CursedByRevenge/imagem6.png",
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