const contentor = document.getElementById("zona-jogos-api");

async function carregarSugestoesJogos() {

    if (!contentor) return;

    // MOSTRAR LOADER ENQUANTO CARREGA
    contentor.innerHTML = `
        <div class="contentor-carregamento">
            <div class="loader"></div>
            <p>A sincronizar preços reais via API...</p>
        </div>
    `;

    const tituloPagina = document.title.toLowerCase();
    let listaDeJogos = [];

    // LÓGICA DE SELEÇÃO DE JOGOS BASEADA NO TÍTULO
    if (tituloPagina.includes("far cry")) {
        listaDeJogos = [
            { nome: "Crysis Remastered", imagem: "../IMGS/Games/Crysis.jpg", genero: "FPS", link: "https://store.steampowered.com/app/1715130/" },
            { nome: "Metro Exodus", imagem: "../IMGS/Games/Metro Exodus.avif", genero: "Shooter", link: "https://store.steampowered.com/app/412020/" },
            { nome: "Just Cause 3", imagem: "../IMGS/Games/Just Cause 3.jpg", genero: "Mundo Aberto", link: "https://store.steampowered.com/app/225540/" }
        ];
    } 
    else if (tituloPagina.includes("dying light")) {
        listaDeJogos = [
            { nome: "Dead Island 2", imagem: "../IMGS/Games/Dead Island 2.jpg", genero: "Zombies", link: "https://store.steampowered.com/app/934700/" },
            { nome: "State of Decay 2", imagem: "../IMGS/Games/State of Decay.jpg", genero: "Sobrevivência", link: "https://store.steampowered.com/app/1291510/" },
            { nome: "The Forest", imagem: "../IMGS/Games/The Forest.jpg", genero: "Sobrevivência", link: "https://store.steampowered.com/app/242760/" }
        ];
    } 
    else if (tituloPagina.includes("subnautica")) {
        listaDeJogos = [
            { nome: "No Man's Sky", imagem: "../IMGS/Games/No Man's Sky.jpg", genero: "Exploração", link: "https://store.steampowered.com/app/275850/" },
            { nome: "Raft", imagem: "../IMGS/Games/Raft.jpg", genero: "Sobrevivência", link: "https://store.steampowered.com/app/648800/" },
            { nome: "The Forest", imagem: "../IMGS/Games/The Forest.jpg", genero: "Sobrevivência", link: "https://store.steampowered.com/app/242760/" }
        ];
    }

    contentor.innerHTML = ""; 

    // CRIAR OS CARTÕES PARA CADA JOGO NA LISTA
    for (const jogo of listaDeJogos) {
        let precoExibicao = "Consultar Loja";

        try {
            // Chamada otimizada à API CheapShark
            const resposta = await fetch(
                `https://www.cheapshark.com/api/1.0/games?title=${encodeURIComponent(jogo.nome)}&limit=1`
            );

            if (resposta.ok) {
                const dados = await resposta.json();
                if (dados.length > 0 && dados[0].cheapest) {
                    precoExibicao = `${dados[0].cheapest} €`;
                }
            }
        } catch (erro) {
            console.warn("Erro na API para o jogo:", jogo.nome);
        }

        const cartao = document.createElement("div");
        cartao.className = "cartao-jogo";

        cartao.innerHTML = `
            <h3>${jogo.nome}</h3>
            <img src="${jogo.imagem}" alt="${jogo.nome}">
            <p>${jogo.genero}</p>
            <p class="etiqueta-preco">Preço API: <span>${precoExibicao}</span></p>
            <a href="${jogo.link}" target="_blank">Ver na Steam</a>
        `;

        contentor.appendChild(cartao);
    }
}

carregarSugestoesJogos();