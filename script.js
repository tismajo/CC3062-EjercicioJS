document.addEventListener('DOMContentLoaded', () => {
    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.flexDirection = 'column';
    container.style.alignItems = 'center';
    container.style.justifyContent = 'center';
    container.style.height = '100vh';

    const fetchButton = document.createElement('button');
    fetchButton.textContent = 'Fetch Fruits';
    fetchButton.onclick = fetchFruits;

    const resultsContainer = document.createElement('div');
    resultsContainer.id = 'results';
    container.appendChild(fetchButton);
    container.appendChild(resultsContainer);
    document.body.appendChild(container);
});

function fetchFruits() {
    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = 'Loading monsters...';

    fetch('https://mhw-db.com/monsters')
        .then(response => response.json())
        .then(data => {
            const resultsContainer = document.getElementById('results');
            resultsContainer.style.width = '80%';
            resultsContainer.style.height = '100vh';
            resultsContainer.style.margin = '0 auto';
            resultsContainer.style.overflow = 'auto';

            resultsContainer.innerHTML = '';
            resultsContainer.style.display = 'grid';
            resultsContainer.style.gridTemplateColumns = 'repeat(3, 1fr)';
            resultsContainer.style.gap = '10px';

            dataDisplay = data.sort(() => Math.random() - 0.5).slice(0,10);
        });
}