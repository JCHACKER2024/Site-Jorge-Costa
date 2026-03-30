document.addEventListener("DOMContentLoaded", () => {

    const imagensCompetencias = {
        modelacao: [
            "IMGS/Skills/RádioLowPoly.png",
            "IMGS/Skills/RádioHighPoly.png"
        ],
        ambientes: [
            "IMGS/Skills/ParqueDia.png",
            "IMGS/Skills/ParqueNoite.png",
            "IMGS/Skills/Cabana.png"
        ]
    };

    document.querySelectorAll(".slider").forEach(slider => {
        const nome = slider.dataset.project;
        const lista = imagensCompetencias[nome];

        if (!lista || lista.length === 0) return;

        let atual = 0;
        const img = slider.querySelector("img");
        const next = slider.querySelector(".next");
        const prev = slider.querySelector(".prev");

        if (img) img.src = lista[0];

        if (next) {
            next.addEventListener("click", (e) => {
                e.stopPropagation(); // Impede que o clique abra/feche os detalhes
                atual = (atual + 1) % lista.length;
                img.src = lista[atual];
            });
        }

        if (prev) {
            prev.addEventListener("click", (e) => {
                e.stopPropagation();
                atual = (atual - 1 + lista.length) % lista.length;
                img.src = lista[atual];
            });
        }
    });
});