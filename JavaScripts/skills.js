document.addEventListener("DOMContentLoaded", () => {

    const imagens = {
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

    document.querySelectorAll(".portfolio-card").forEach(card => {
        const nome = card.dataset.project;
        const lista = imagens[nome];
        if (!lista || lista.length === 0) return;

        let atual = 0;
        const img = card.querySelector("img");
        const next = card.querySelector(".next");
        const prev = card.querySelector(".prev");

        if (img) img.src = lista[0];

        if (next) {
            next.addEventListener("click", (e) => {
                e.stopPropagation();
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