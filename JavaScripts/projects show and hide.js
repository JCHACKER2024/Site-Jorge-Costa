const savedState = JSON.parse(localStorage.getItem('projectsDetails')) || {};

// SELECIONAR TODOS OS TÍTULOS DOS PROJETOS
document.querySelectorAll('.project-title').forEach(title => {

    const projectKey = title.closest('.project').dataset.project;
    const details = title.nextElementSibling;

    // RESTAURAR ESTADO (SHOW/HIDE)
    if (savedState[projectKey]) {
        details.classList.add('show');
    }

    // EVENTO CLICK (SHOW/HIDE)
    title.addEventListener('click', () => {
        details.classList.toggle('show');

        savedState[projectKey] = details.classList.contains('show');
        localStorage.setItem('projectsDetails', JSON.stringify(savedState));
    });

    // EFEITO HOVER
    title.addEventListener('mouseenter', () => {
        title.style.textDecoration = 'underline';
    });

    title.addEventListener('mouseleave', () => {
        title.style.textDecoration = 'none';
    });

});