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

        if (!lista) return;

        let atual = 0;

        const img = slider.querySelector("img");
        const next = slider.querySelector(".next");
        const prev = slider.querySelector(".prev");

        img.src = lista[0];

        next.addEventListener("click", (e) => {
            e.stopPropagation();
            atual = (atual + 1) % lista.length;
            img.src = lista[atual];
        });

        prev.addEventListener("click", (e) => {
            e.stopPropagation();
            atual = (atual - 1 + lista.length) % lista.length;
            img.src = lista[atual];
        });

    });

});