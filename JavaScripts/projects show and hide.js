document.addEventListener("DOMContentLoaded", () => {

    const estadoGuardado = JSON.parse(localStorage.getItem('detalhesProjetos')) || {};

    document.querySelectorAll('.titulo-projeto').forEach(titulo => {
        const projetoElemento = titulo.closest('.projeto');
        const slider = projetoElemento.querySelector('.slider');
        const chaveProjeto = slider ? slider.dataset.project : null;
        const detalhes = titulo.nextElementSibling;

        // RESTAURAR ESTADO
        if (chaveProjeto && estadoGuardado[chaveProjeto]) {
            detalhes.classList.add('show');
            titulo.classList.add('aberto');
        }

        // CLIQUE
        titulo.addEventListener('click', () => {
            const estaAberto = detalhes.classList.toggle('show');
            titulo.classList.toggle('aberto', estaAberto);

            if (chaveProjeto) {
                estadoGuardado[chaveProjeto] = estaAberto;
                localStorage.setItem('detalhesProjetos', JSON.stringify(estadoGuardado));
            }
        });
    });
});