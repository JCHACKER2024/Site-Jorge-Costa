const container = document.getElementById("games-container");

async function loadGames() {
    // LOADING SPINNER
    container.innerHTML = `
        <div class="loader-container">
            <div class="loader"></div>
            <p>A sincronizar preços reais via API...</p>
        </div>`;

    const title = document.title.toLowerCase();
    let gamesList = [];

    // LISTA COMPLETA
    if (title.includes("far cry")) {
        gamesList = [
            { name: "Crysis Remastered", image: "../IMGS/Games/Crysis.jpg", genre: "FPS", link: "https://store.steampowered.com/app/1715130/" },
            { name: "Metro Exodus", image: "../IMGS/Games/Metro Exodus.avif", genre: "Shooter", link: "https://store.steampowered.com/app/412020/" },
            { name: "Just Cause 3", image: "../IMGS/Games/Just Cause 3.jpg", genre: "Open World", link: "https://store.steampowered.com/app/225540/" }
        ];
    } else if (title.includes("dying light")) {
        gamesList = [
            { name: "Dead Island 2", image: "../IMGS/Games/Dead Island 2.jpg", genre: "Zombie", link: "https://store.steampowered.com/app/934700/" },
            { name: "State of Decay 2", image: "../IMGS/Games/State of Decay.jpg", genre: "Survival", link: "https://store.steampowered.com/app/1291510/" },
            { name: "The Forest", image: "../IMGS/Games/The Forest.jpg", genre: "Survival", link: "https://store.steampowered.com/app/242760/" }
        ];
    } else if (title.includes("subnautica")) {
        gamesList = [
            { name: "No Man's Sky", image: "../IMGS/Games/No Man's Sky.jpg", genre: "Exploration", link: "https://store.steampowered.com/app/275850/" },
            { name: "Raft", image: "../IMGS/Games/Raft.jpg", genre: "Survival", link: "https://store.steampowered.com/app/648800/" },
            { name: "The Forest", image: "../IMGS/Games/The Forest.jpg", genre: "Survival", link: "https://store.steampowered.com/app/242760/" }
        ];
    }

    container.innerHTML = "";

    // PREÇOS DA API
    for (const game of gamesList) {
        let displayPrice = "Consultar Loja";

        try {
            const response = await fetch(`https://www.cheapshark.com/api/1.0/games?title=${encodeURIComponent(game.name)}&limit=1`);
            const data = await response.json();

            if (data && data.length > 0) {
                displayPrice = `${data[0].cheapest} €`;
            }
        } catch (error) {
            console.warn("API Error for " + game.name);
        }

        const card = document.createElement("div");
        card.classList.add("game-card");
        card.innerHTML = `
            <h3>${game.name}</h3>
            <img src="${game.image}" alt="${game.name}">
            <p>${game.genre}</p>
            <p class="price-tag">Preço API: <span>${displayPrice}</span></p>
            <a href="${game.link}" target="_blank" class="buy-link">Ver na Steam</a>
        `;
        container.appendChild(card);
    }
}

loadGames();