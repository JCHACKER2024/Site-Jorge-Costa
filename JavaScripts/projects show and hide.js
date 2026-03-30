const estadoGuardado = JSON.parse(localStorage.getItem('detalhesProjetos')) || {};

// SELECIONAR TODOS OS TÍTULOS DOS PROJETOS
document.querySelectorAll('.titulo-projeto').forEach(titulo => {
    
    const projetoElemento = titulo.closest('.projeto');
    const slider = projetoElemento.querySelector('.slider');
    const chaveProjeto = slider.dataset.project;
    const detalhes = titulo.nextElementSibling;

    // RESTAURAR ESTADO (Abrir se estava aberto antes)
    if (estadoGuardado[chaveProjeto]) {
        detalhes.classList.add('show');
    }

    // EVENTO DE CLIQUE PARA MOSTRAR/ESCONDER
    titulo.addEventListener('click', () => {
        const estaAberto = detalhes.classList.toggle('show');

        estadoGuardado[chaveProjeto] = estaAberto;
        localStorage.setItem('detalhesProjetos', JSON.stringify(estadoGuardado));
    });
});
