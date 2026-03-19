// Recupera estado do localStorage
const savedState = JSON.parse(localStorage.getItem('projectsDetails')) || {};

document.querySelectorAll('.project-title').forEach(title => {
    const projectKey = title.closest('.project').dataset.project;
    const details = title.nextElementSibling;

    // Aplica estado salvo
    if (savedState[projectKey]) {
        details.classList.add('show');
    }

    title.addEventListener('click', () => {
        details.classList.toggle('show');

        // Atualiza estado no localStorage
        savedState[projectKey] = details.classList.contains('show');
        localStorage.setItem('projectsDetails', JSON.stringify(savedState));
    });

    // Hover simples
    title.addEventListener('mouseenter', () => title.style.textDecoration = 'underline');
    title.addEventListener('mouseleave', () => title.style.textDecoration = 'none');
});