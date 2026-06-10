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
        laserconnect: [
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

    // ABRIR/FECHAR DETALHES — funciona com e sem slider
    const estadoGuardado = JSON.parse(localStorage.getItem('detalhesProjetos')) || {};

    document.querySelectorAll('.titulo-projeto').forEach(titulo => {
        const projetoElemento = titulo.closest('.projeto');
        const slider = projetoElemento ? projetoElemento.querySelector('.slider[data-project]') : null;
        const chaveProjeto = slider ? slider.dataset.project : null;
        const detalhes = titulo.nextElementSibling;

        if (!detalhes || !detalhes.classList.contains('detalhes')) return;

        // RESTAURAR ESTADO GUARDADO
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
    document.querySelectorAll(".slider, .portfolio-card").forEach(contentorSlider => {
        const nomeChave = contentorSlider.dataset.project;
        const listaImagens = baseImagens[nomeChave];

        if (!listaImagens || listaImagens.length === 0) return;

        let indiceAtual = 0;
        const imgElemento = contentorSlider.querySelector("img");
        const dotsContainer = contentorSlider.querySelector(".slider-dots");
        const botaoNext = contentorSlider.querySelector(".next");
        const botaoPrev = contentorSlider.querySelector(".prev");

        if (imgElemento) imgElemento.src = listaImagens[0];

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
            if (imgElemento) imgElemento.src = listaImagens[indiceAtual];
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

    // HOVER NOS VÍDEOS
    document.querySelectorAll('.projeto-video, video[muted]').forEach(video => {
        video.muted = true;
        const zonaHover = video.closest('.projeto-card, .projeto') || video;

        zonaHover.addEventListener('mouseenter', () => {
            video.play().catch(() => {});
        });

        zonaHover.addEventListener('mouseleave', () => {
            video.pause();
            video.currentTime = 0;
        });
    });

});