document.addEventListener('DOMContentLoaded', () => {
    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.flexDirection = 'column';
    container.style.alignItems = 'center';
    container.style.justifyContent = 'center';
    container.style.height = '100vh';
    container.style.backgroundColor='#af9483';

    const fetchButton = document.createElement('button');
    fetchButton.textContent = '¡Monstruos!';
    fetchButton.onclick = fetchMonsters;
    fetchButton.style.background = '#70594b';
    fetchButton.style.border = '2px solid #dbd2cc';
    fetchButton.style.color = '#dbd2cc';
    fetchButton.style.fontSize = '20px';

    const resultsContainer = document.createElement('div');
    resultsContainer.id = 'results';
    container.appendChild(fetchButton);
    container.appendChild(resultsContainer);
    document.body.appendChild(container);
});

function fetchMonsters() {
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

            const randomMonsters = data.sort(() => Math.random()-0.5).slice(0,9);

            randomMonsters.forEach(monster => {
                const monsterInfo = document.createElement('div');
                monsterInfo.innerHTML =`
                <p>ID: ${monster.id}</p>
                <p>Nombre: ${monster.name}</p>
                <p>Tipo: ${monster.type}</p>
                <p>Especie: ${monster.species}</p>
                <p>Elementos: ${monster.elements}</p>
                <p>Descripción: ${monster.description}</p>
                `;

                monsterInfo.style.border = '8px solid #dbd2cc';
                monsterInfo.style.padding = '10px';
                monsterInfo.style.borderRadius = '16px';
                monsterInfo.style.backgroundColor = '#70594b';
                monsterInfo.style.color = '#dbd2cc';
                resultsContainer.appendChild(monsterInfo);            
            });
            document.querySelector('button:nth-of-type(2)').style.display = 'block';
        })
        .catch(error => console.error('Error fetching monsters:', error));
}