const estadoGuardado = JSON.parse(localStorage.getItem('detalhesProjetos')) || {};

// SELECIONAR TODOS OS TÍTULOS DOS PROJETOS
document.querySelectorAll('.titulo-projeto').forEach(titulo => {

    const chaveProjeto = titulo.closest('.projeto').querySelector('.slider').dataset.project;
    const detalhes = titulo.nextElementSibling;

    // RESTAURAR ESTADO (Abrir se estava aberto antes)
    if (estadoGuardado[chaveProjeto]) {
        detalhes.classList.add('show');
    }

    titulo.addEventListener('click', () => {
        detalhes.classList.toggle('show');

        // Guardar a nova escolha no localStorage
        estadoGuardado[chaveProjeto] = detalhes.classList.contains('show');
        localStorage.setItem('detalhesProjetos', JSON.stringify(estadoGuardado));
    });

    // EFEITO HOVER
    titulo.addEventListener('mouseenter', () => {
        titulo.style.textDecoration = 'underline';
    });

    titulo.addEventListener('mouseleave', () => {
        titulo.style.textDecoration = 'none';
    });
});