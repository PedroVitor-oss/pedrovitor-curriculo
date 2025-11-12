const projetos = [// lista de imagesn


    {
        index: 0,
        name: " archetype",
        img: {
            src: "img/projeto.png",
            largura: "",
            altura: "",
        },
        data: "2025",
        decrition: `Archetype é um jogo educativo desenvolvido com o objetivo de ensinar a história da arte por meio de uma experiência interativa e envolvente. Criado como projeto final do curso de Jogos Digitais do IFPR, o jogo utiliza elementos narrativos e mecânicas baseadas em quiz e exploração para conduzir o jogador por diferentes períodos artísticos, como Renascimento, Barroco, Modernismo, entre outros.
 Durante o desenvolvimento, foram aplicados conceitos avançados de design instrucional, narrativa interativa, animação frame-by-frame e gestão de cenas com Unity. O projeto também incluiu pesquisa histórica, design de interface acessível e testes com usuários para balancear a curva de aprendizado com a jogabilidade.
`,
        link: {
            href: "https://github.com/NadolnyJoao/ArcheType-Prot-tipos",
            text: "Acesar no Github"
        },
        grupo: ""
    },
    {
        index: 1,
        name: "Fight System Unity",
        img: {
            src: "img/projeto2.png",
            largura: "",
            altura: "",
        },
        data: "2024",
        decrition: "Este projeto foi focado no desenvolvimento de um sistema modular de combate corpo-a-corpo em 3D, com a possibilidade de ser reutilizado em diferentes jogos. O objetivo era criar uma base técnica que permitisse ataques combinados, defesa, movimentação estratégica e interação com o ambiente. Foram implementadas mecânicas como hitboxes dinâmicas, sistema de combos baseado em árvore de estados, detecção de colisões e controle de stamina. O projeto também envolveu o uso de animações via Animator Controller, integração com rigging de personagens e scripts customizados em C# para modularização do código.",
        link: {
            href: "https://github.com/PedroVitor-oss/FightSystem",
            text: "Acesar no Github"
        },
        grupo: ""
    },
    {
        index: 2,
        name: "Flappy Bird CPP",
        img: {
            src: "img/projeto3.png",
            largura: "",
            altura: "",
        },
        data: "2023",
        decrition: `Este projeto consistiu na recriação do clássico Flappy Bird com o propósito principal de criar uma biblioteca própria para abstração da SDL2, facilitando o desenvolvimento de jogos 2D em C++.
	A biblioteca desenvolvida oferece funções simplificadas para carregamento e manipulação de texturas, gerenciamento de janelas e eventos, colisões básicas e sistema de atualização de cena. Foi uma experiência prática em programação orientada a objetos em C++, design de APIs simples, além de proporcionar aprendizado aprofundado sobre gestão de memória e ponteiros inteligentes.
`,
        link: {
            href: "https://github.com/PedroVitor-oss/flaapping-bird",
            text: "Acesar no Github"
        },
        grupo: ""
    },
    {
        index: 3,
        name: "Farmer VS Zombie",
        img: {
            src: "img/projeto4.png",
            largura: "",
            altura: "",
        },
        data: "2024",
        decrition: `Farmer VS Zombie é um jogo de ação em 2D desenvolvido em colaboração com Jonas Gabriel, com o objetivo de testar fluxos de trabalho colaborativos usando Git e GitHub. O jogo envolve um fazendeiro que deve defender sua plantação de hordas de zumbis, utilizando diferentes armas e estratégias.
 Foi uma oportunidade de aplicar práticas de controle de versão com branches e pull requests, integração contínua, além de aprender a trabalhar com sprites reutilizáveis, tilemaps, sistemas de ondas de inimigos e HUD dinâmico. O uso de assets gratuitos exigiu também atenção ao licenciamento e atribuição no escopo do projeto.
`,
        link: {
            href: "https://github.com/PedroVitor-oss/famer-zumbi",
            text: "Acesar no Github"
        },
        grupo: ""
    },
    {
        index: 4,
        name: "Lua de sangue",
        img: {
            src: "img/projeto5.png",
            largura: "",
            altura: "",
        },
        data: "2024",
        decrition: `Lua de Sangue é um jogo de terror psicológico em 3D, criado como parte da disciplina de Desenvolvimento de Jogos 3D. A experiência mistura exploração, resolução de puzzles e atmosfera sombria para envolver o jogador em uma narrativa cheia de suspense e mistério.
	O desenvolvimento contou com técnicas de iluminação avançada, uso de som espacial e trilhas dinâmicas, sistemas de interações com objetos do cenário, e eventos baseados em gatilhos invisíveis. Além disso, foi utilizada a Unity Timeline para criação de cutscenes e a navmesh system para movimentação de inimigos controlados por IA.
`,
        link: {
            href: "https://github.com/PedroVitor-oss/pesadelo_na_floresta",
            text: "Acesar no Github"
        },
        grupo: ""
    },
    {
        index: 5,
        name: " BeeGame",
        img: {
            src: "img/projeto6.png",
            largura: "",
            altura: "",
        },
        data: "2025",
        decrition: `O projeto consiste em um jogo inspirado no clássico "Space Invaders", mas com uma temática única, onde o jogador controla uma abelha que se move para a direita e para a esquerda em um fundo amarelo. O objetivo principal é escapar das aranhas que surgem no cenário enquanto tenta coletar flores espalhadas pela tela. Este jogo foi desenvolvido para praticar conceitos de JavaScript, como o uso de setInterval para criar animações e controlar o tempo de movimentação dos elementos, além de classes para estruturar o código de forma organizada. A mecânica simples, mas desafiadora, visa não apenas aprimorar habilidades de programação, mas também proporcionar uma experiência interativa e divertida, focando em como manipular elementos DOM e tratar interações dentro de um ambiente de jogo.`,
        link: {
            href: "https://github.com/NadolnyJoao/ArcheType-Prot-tipos",
            text: "Acesar no Github"
        },
        href: "/pedrovitor-curriculo/game.html",
        grupo: ""
    },
]

let indiceAtual = 0; // apartir desse indece mostre as imagens afrente dele
const imagensPorTela = 3;// quantidade de imagens que aparece na tela
function exibirImagens() {// mudar o conteudo/imagens do carrosel
    const container = document.getElementById("carrossel-imagens");//seleciona DOM do carrassel de  imagens
    container.innerHTML = "";//deleta/apaga o conteudo que tem no carrossel
    for (let i = 0; i < imagensPorTela; i++) { //loop que adiciona as imagens
        const index = (indiceAtual + i) % projetos.length; // calcula qual imagem colocar
        if (projetos[index].href != null) {
            
            const contlink = document.createElement("a");
            contlink.href = projetos[index].href;
            const img = document.createElement("img");// cria uma imagem
            img.src = projetos[index].img.src;// passa o src para imagem apartir do index calculado 
            img.alt = `Imagem ${index + 1}`;// da um "nome" para imagem
            contlink.appendChild(img);
            container.appendChild(contlink);// adiciona a imagem no carrossel

            //open pop-up
            // img.onclick = () => {
            //     OpenPopUp(projetos[index].index);
            // }
        } else {

            const img = document.createElement("img");// cria uma imagem
            img.src = projetos[index].img.src;// passa o src para imagem apartir do index calculado 
            img.alt = `Imagem ${index + 1}`;// da um "nome" para imagem
            container.appendChild(img);// adiciona a imagem no carrossel

            //open pop-up
            img.onclick = () => { OpenPopUp(projetos[index].index); }
        }

    }
}
function mudarImagens(direcao) {
    indiceAtual = (indiceAtual + direcao * imagensPorTela + projetos.length) % projetos.length; //atualiza o índice, avançando ou voltando no carrossel de forma circular
    exibirImagens();// chama a função exibirImagens para mudar o conteudo
}

function OpenPopUp(index) {
    let projeto = projetos[index];

    const popup = window.open("", `popup${index}`, "width=500,height:250,resizable=yes,scrollbars=yes");
    if (popup) {
        popup.document.write(`
            <html lang="en">
                <head>
                    <title>${projeto.name}</title>
                    <link rel="stylesheet" href="/css/popup.css">
                    
                </head>
                <body>
                <style>
                    body{
                        background-color:#361E1E ;
                        margin: 0;
                        padding: 0 0px;
                        font-family: Arial, Helvetica, sans-serif;
                        overflow-x: hidden;
                        scroll-behavior: smooth;
                        transition:0.5s;
                        color: #fff;

                        display: flex;
                        flex-direction: column;
                        align-items: center;
                    }

                    h1{
                        margin: 0;

                    }
                    h2
                    {
                        color:#a39595;
                    }
                    .cont-img
                    {
                        width: 500px;
                        aspect-ratio: 2/1;
                        background-color: #3f3232;
                        border-radius: 10px;
                        box-sizing: border-box;
                        overflow: hidden;
                    }
                    .cont-img img {
                        width: 100%;
                    }
                    p {
                        max-width: 80%;
                        text-wrap: wrap;
                        height:auto;
                        text-align: justify;
                        color:#a38282;
                    }

                    a {
                        color: #f2b84b;
                    }

                    </style>
                    <h1>${projeto.name}</h1>
                    <h2>Data: ${projeto.data}</h2>
                    <div class="cont-img">
                        <img src="${projeto.img.src}" alt="${projeto.name}" width="${projeto.img.largura}" height="${projeto.img.altura}">
                    </div>
                    <p>${projeto.decrition}</p>
                    <a href="${projeto.link.href}">${projeto.link.text}</a>
                </body>
            </html>
            `);

        popup.document.close();
        popup.focus();
    } else {
        alert("Porfavor, permita pop-ups para visualizar as informações");
    }
}
// Inicializar carrossel do carregar a pogino 
document.addEventListener("DOMContentLoaded", exibirImagens);// chama a função quando a pagina/documento é carregado