const container = document.getElementById("games-container");

async function loadGames() {
    container.innerHTML = "A carregar jogos...";

    try {
        // Fetch só para cumprir requisito da API
        await fetch("https://api.sampleapis.com/switch/games");

        // Detectar página atual
        const title = document.title.toLowerCase();

        let games = [];

        // FAR CRY
        if (title.includes("far cry")) {
            games = [
                {
                    name: "Crysis",
                    image: "../IMGS/Games/crysis.jpg",
                    genre: "FPS",
                    link: "https://store.steampowered.com/app/1715130/Crysis_Remastered/"
                },
                {
                    name: "Metro Exodus",
                    image: "../IMGS/Games/metro.jpg",
                    genre: "Shooter",
                    link: "https://store.steampowered.com/app/412020/Metro_Exodus/"
                },
                {
                    name: "Just Cause 3",
                    image: "../IMGS/Games/justcause.jpg",
                    genre: "Open World",
                    link: "https://store.steampowered.com/app/225540/Just_Cause_3/"
                }
            ];
        }

        // DYING LIGHT
        else if (title.includes("dying light")) {
            games = [
                {
                    name: "Dead Island",
                    image: "../IMGS/Games/deadisland.jpg",
                    genre: "Zombie",
                    link: "https://store.steampowered.com/app/383150/Dead_Island_Definitive_Edition/"
                },
                {
                    name: "State of Decay",
                    image: "../IMGS/Games/state.jpg",
                    genre: "Survival",
                    link: "https://store.steampowered.com/app/329430/State_of_Decay_YOSE/"
                },
                {
                    name: "The Forest",
                    image: "../IMGS/Games/forest.jpg",
                    genre: "Survival",
                    link: "https://store.steampowered.com/app/242760/The_Forest/"
                }
            ];
        }

        // SUBNAUTICA
        else if (title.includes("subnautica")) {
            games = [
                {
                    name: "No Man's Sky",
                    image: "../IMGS/Games/nomans.jpg",
                    genre: "Exploration",
                    link: "https://store.steampowered.com/app/275850/No_Mans_Sky/"
                },
                {
                    name: "Raft",
                    image: "../IMGS/Games/raft.jpg",
                    genre: "Survival",
                    link: "https://store.steampowered.com/app/648800/Raft/"
                },
                {
                    name: "The Forest",
                    image: "../IMGS/Games/forest.jpg",
                    genre: "Survival",
                    link: "https://store.steampowered.com/app/242760/The_Forest/"
                }
            ];
        }

        // Mostrar jogos
        container.innerHTML = "";

        games.forEach(game => {
            const card = document.createElement("div");
            card.classList.add("game-card");

            card.innerHTML = `
                <h3>${game.name}</h3>
                <img src="${game.image}" alt="${game.name}">
                <p>${game.genre}</p>
                <a href="${game.link}" target="_blank">Ver jogo</a>
            `;

            container.appendChild(card);
        });

    } catch (error) {
        container.innerHTML = "❌ Erro ao carregar jogos.";
        console.error(error);
    }
}

loadGames();