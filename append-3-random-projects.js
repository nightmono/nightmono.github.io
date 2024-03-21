async function fetchRandomProjects() {
    fetch('/favourite-projects.txt')
        .then(response => response.text())
        .then(text => {
            const lines = text.split('\n').filter(line => line.trim() !== '');
            const randomLines = [];
            while (randomLines.length < 3 && lines.length > 0) {
                const randomIndex = Math.floor(Math.random() * lines.length);
                randomLines.push(lines.splice(randomIndex, 1)[0]);
            }
            appendProjects(randomLines);
        })
        .catch(error => console.error('Error fetching projects:', error));
}

async function appendProjects(projects) {
    const projectsList = document.getElementById('projects-list');
    projects.forEach(project => {
        const [url, title] = project.split('|').map(item => item.trim());
        const listItem = document.createElement('li');
        const link = document.createElement('a');
        link.href = url;
        link.textContent = title;
        listItem.appendChild(link);
        projectsList.appendChild(listItem);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const noscript = document.querySelector('noscript');
    if (noscript) {
        noscript.style.display = 'none';
        fetchRandomProjects();
    }
});
