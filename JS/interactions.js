document.addEventListener("DOMContentLoaded", () => {
    
    // BANCO DE IMAGENS
    const baseImagens = {
        bubble: [
            "IMGS/Bubble/Imagem1.png",
            "IMGS/Bubble/Imagem2.png",
            "IMGS/Bubble/Imagem3.png",
            "IMGS/Bubble/Imagem4.png",
            "IMGS/Bubble/Imagem5.png"
        ],
        colormorph: [
            "IMGS/ColorMorph/Imagem1.png",
            "IMGS/ColorMorph/Imagem2.png",
            "IMGS/ColorMorph/Imagem3.png"
        ],
        lazerconnect: [
            "IMGS/LazerConnect/Imagem1.png",
            "IMGS/LazerConnect/Imagem2.png",
            "IMGS/LazerConnect/Imagem3.png"
        ],
        modelacao: [
            "IMGS/Skills/RádioLowPoly.png",
            "IMGS/Skills/RádioHighPoly.png"
        ],
        ambientes: [
            "IMGS/Skills/ParqueDia.png",
            "IMGS/Skills/ParqueNoite.png",
            "IMGS/Skills/Cabana.png"
        ]
    };

    // CONTEÚDO EXPANSÍVEL (ABRIR/FECHAR DETALHES)
    const estadoGuardado = JSON.parse(localStorage.getItem('detalhesProjetos')) || {};

    document.querySelectorAll('.titulo-projeto').forEach(titulo => {
        const projetoElemento = titulo.closest('.projeto');
        const slider = projetoElemento ? projetoElemento.querySelector('.slider') : null;
        const chaveProjeto = slider ? slider.dataset.project : null;
        const detalhes = titulo.nextElementSibling;

        if (!detalhes) return;

        if (chaveProjeto && estadoGuardado[chaveProjeto]) {
            detalhes.classList.add('show');
            titulo.classList.add('aberto');
        }

        titulo.addEventListener('click', () => {
            const estaAberto = detalhes.classList.toggle('show');
            titulo.classList.toggle('aberto', estaAberto);

            if (chaveProjeto) {
                estadoGuardado[chaveProjeto] = estaAberto;
                localStorage.setItem('detalhesProjetos', JSON.stringify(estadoGuardado));
            }
        });
    });

    // CONTROLO DOS SLIDERS
    const seletoresSliders = document.querySelectorAll(".slider, .portfolio-card");

    seletoresSliders.forEach(contentorSlider => {
        const nomeChave = contentorSlider.dataset.project;
        const listaImagens = baseImagens[nomeChave];
        
        if (!listaImagens || listaImagens.length === 0) return;

        let indiceAtual = 0;
        const imgElemento = contentorSlider.querySelector("img");
        const dotsContainer = contentorSlider.querySelector(".slider-dots");
        const botaoNext = contentorSlider.querySelector(".next");
        const botaoPrev = contentorSlider.querySelector(".prev");

        if (imgElemento) {
            imgElemento.src = listaImagens[0];
        }

        if (dotsContainer) {
            listaImagens.forEach((_, i) => {
                const dot = document.createElement("div");
                dot.className = "dot" + (i === 0 ? " active" : "");
                dot.addEventListener("click", () => irParaSlide(i));
                dotsContainer.appendChild(dot);
            });
        }

        function irParaSlide(index) {
            indiceAtual = index;
            if (imgElemento) {
                imgElemento.src = listaImagens[indiceAtual];
            }
            
            if (dotsContainer) {
                dotsContainer.querySelectorAll(".dot").forEach((dot, i) => {
                    dot.classList.toggle("active", i === indiceAtual);
                });
            }
        }

        if (botaoNext) {
            botaoNext.addEventListener("click", (e) => {
                e.stopPropagation();
                irParaSlide((indiceAtual + 1) % listaImagens.length);
            });
        }

        if (botaoPrev) {
            botaoPrev.addEventListener("click", (e) => {
                e.stopPropagation();
                irParaSlide((indiceAtual - 1 + listaImagens.length) % listaImagens.length);
            });
        }
    });

    // EFEITO HOVER NOS VÍDEOS
    const videosPreview = document.querySelectorAll('.card-video, .projeto-video, video[muted]');

    videosPreview.forEach(video => {
        video.muted = true;
        const zonaHover = video.closest('.portfolio-card, .card, .projeto, .projeto-card') || video;

        // Procura se o card tem um placeholder de texto ("Em Breve", etc.)
        const placeholderTexto = zonaHover.querySelector('.projeto-img-placeholder');
        let textoOriginal = "";

        zonaHover.addEventListener('mouseenter', () => {
            // 1. Teste para quando usares vídeos reais (vês o log na consola do F12)
            console.log("Rato entrou! Ativar simulação de vídeo para:", zonaHover.querySelector('.projeto-nome')?.textContent || "Card");

            // 2. Teste Visual Imediato no ecrã (muda o texto do placeholder)
            if (placeholderTexto) {
                textoOriginal = placeholderTexto.textContent;
                placeholderTexto.textContent = "▶ VÍDEO A FUNCIONAR!";
                placeholderTexto.style.background = "linear-gradient(135deg, #00ffcc, #00a896)";
                placeholderTexto.style.color = "#050505";
            }
            
            // Tenta dar play no elemento de vídeo nativo
            video.play().catch(err => {});
        });

        zonaHover.addEventListener('mouseleave', () => {
            console.log("Rato saiu! Parar simulação.");

            // Restaura o estado visual original quando o rato sai
            if (placeholderTexto) {
                placeholderTexto.textContent = textoOriginal;
                placeholderTexto.style.background = "";
                placeholderTexto.style.color = "";
            }

            video.pause();
            video.currentTime = 0;
        });
    });
});