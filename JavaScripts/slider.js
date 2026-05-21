document.addEventListener("DOMContentLoaded", () => {

    const imagensProjetos = {
        bubble: [
            "IMGS/Bubble/Imagem1.png",
            "IMGS/Bubble/Imagem2.png",
            "IMGS/Bubble/Imagem3.png"
        ],
        colormorph: [
            "IMGS/ColorMorph/Imagem1.png",
            "IMGS/ColorMorph/Imagem2.png",
            "IMGS/ColorMorph/Imagem3.png"
        ]
    };

    document.querySelectorAll(".slider").forEach(slider => {
        const nome = slider.dataset.project;
        const lista = imagensProjetos[nome];
        if (!lista || lista.length === 0) return;

        let atual = 0;
        const img = slider.querySelector("img");
        const dotsContainer = slider.querySelector(".slider-dots");

        // CRIAR DOTS
        if (dotsContainer) {
            lista.forEach((_, i) => {
                const dot = document.createElement("div");
                dot.className = "dot" + (i === 0 ? " active" : "");
                dot.addEventListener("click", () => irPara(i));
                dotsContainer.appendChild(dot);
            });
        }

        function irPara(index) {
            atual = index;
            img.src = lista[atual];
            if (dotsContainer) {
                dotsContainer.querySelectorAll(".dot").forEach((d, i) => {
                    d.classList.toggle("active", i === atual);
                });
            }
        }

        const next = slider.querySelector(".next");
        const prev = slider.querySelector(".prev");

        if (next) {
            next.addEventListener("click", (e) => {
                e.stopPropagation();
                irPara((atual + 1) % lista.length);
            });
        }
        if (prev) {
            prev.addEventListener("click", (e) => {
                e.stopPropagation();
                irPara((atual - 1 + lista.length) % lista.length);
            });
        }
    });
});