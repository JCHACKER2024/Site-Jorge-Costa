const savedState = JSON.parse(localStorage.getItem('projectsDetails')) || {};

// FUNÇAO PARA SHOW/HIDE INFO
document.querySelectorAll('.project-title').forEach(title => {
    const projectKey = title.closest('.project').dataset.project;
    const details = title.nextElementSibling;

    if (savedState[projectKey]) {
        details.classList.add('show');
    }

    title.addEventListener('click', () => {
        details.classList.toggle('show');

        savedState[projectKey] = details.classList.contains('show');
        localStorage.setItem('projectsDetails', JSON.stringify(savedState));
    });

// HOVER
    title.addEventListener('mouseenter', () => title.style.textDecoration = 'underline');
    title.addEventListener('mouseleave', () => title.style.textDecoration = 'none');
});