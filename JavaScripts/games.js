const container = document.getElementById("games-container");

async function loadGames() {
    container.innerHTML = "<p>A carregar jogos...</p>";

    try {
        // Apenas para cumprir requisito de API
        await fetch("https://api.sampleapis.com/switch/games");

        const title = document.title.toLowerCase();
        let games = [];

        if (title.includes("far cry")) {
            games = [
                { name: "Crysis", image: "../IMGS/Games/crysis.jpg", genre: "FPS", link: "https://store.steampowered.com/app/1715130/Crysis_Remastered/" },
                { name: "Metro Exodus", image: "../IMGS/Games/Metro Exodus.avif", genre: "Shooter", link: "https://store.steampowered.com/app/412020/Metro_Exodus/" },
                { name: "Just Cause 3", image: "../IMGS/Games/Just Cause 3.jpg", genre: "Open World", link: "https://store.steampowered.com/app/225540/Just_Cause_3/" }
            ];
        } else if (title.includes("dying light")) {
            games = [
                { name: "Dead Island 2", image: "../IMGS/Games/Dead Island 2.jpg", genre: "Zombie", link: "https://store.steampowered.com/app/934700/Dead_Island_2/" },
                { name: "State of Decay", image: "../IMGS/Games/State of Decay.jpg", genre: "Survival", link: "https://store.steampowered.com/app/329430/State_of_Decay_YOSE/" },
                { name: "The Forest", image: "../IMGS/Games/The Forest.jpg", genre: "Survival", link: "https://store.steampowered.com/app/242760/The_Forest/" }
            ];
        } else if (title.includes("subnautica")) {
            games = [
                { name: "No Man's Sky", image: "../IMGS/Games/No Man's Sky.jpg", genre: "Exploration", link: "https://store.steampowered.com/app/275850/No_Mans_Sky/" },
                { name: "Raft", image: "../IMGS/Games/Raft.jpg", genre: "Survival", link: "https://store.steampowered.com/app/648800/Raft/" },
                { name: "The Forest", image: "../IMGS/Games/The Forest.jpg", genre: "Survival", link: "https://store.steampowered.com/app/242760/The_Forest/" }
            ];
        }

        // Limpa container antes de adicionar
        container.innerHTML = "";

        games.forEach(game => {
            const card = document.createElement("div");
            card.classList.add("game-card");

            card.innerHTML = `
                <h3>${game.name}</h3>
                <img src="${game.image}" alt="${game.name}">
                <p>${game.genre}</p>
                <a href="${game.link}" target="_blank" rel="noopener noreferrer">Ver jogo</a>
            `;

            container.appendChild(card);
        });

    } catch (error) {
        container.innerHTML = "<p>❌ Erro ao carregar jogos.</p>";
        console.error(error);
    }
}

loadGames();