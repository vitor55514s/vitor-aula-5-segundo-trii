const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você acaba de ver o lançamento de um novo jogo de esportes com gráficos ultra-realistas e uma IA que ajusta a dificuldade com base no seu desempenho. Qual é a sua reação inicial?",
        alternativas: [
            "É um avanço incrível para os jogos!",
            "Isso é realmente impressionante!"
        ]
    },
    {
        enunciado: "Após o lançamento desse jogo, seu professor de educação física decide realizar uma série de aulas sobre o impacto dos jogos digitais e da tecnologia no mundo dos esportes. Ele pede que você escreva um trabalho sobre o impacto da IA nos jogos e esportes. Como você procede?",
        alternativas: [
            "Utilizo uma ferramenta de busca online que usa IA para encontrar informações e elaborar um trabalho claro e bem estruturado.",
            "Elaboro o trabalho com base em discussões com colegas, pesquisas pessoais e conhecimento prévio sobre o tema."
        ]
    },
    {
        enunciado: "Depois de concluir o trabalho, o professor promove um debate sobre como a IA está mudando os esportes e os jogos. Qual é a sua posição no debate?",
        alternativas: [
            "Acredito que a IA oferece novas oportunidades para otimizar treinamentos e estratégias em esportes.",
            "Estou preocupado com o potencial da tecnologia em criar dependência e reduzir a necessidade de habilidades pessoais."
        ]
    },
    {
        enunciado: "Você precisa criar uma imagem no computador que represente como a IA está transformando os esportes. Qual abordagem você escolhe?",
        alternativas: [
            "Desenvolvo a imagem usando um software de design gráfico, como o Photoshop.",
            "Utilizo um gerador de imagens com IA para criar uma visualização do impacto da IA nos esportes."
        ]
    },
    {
        enunciado: "Você está trabalhando em um projeto em grupo sobre a evolução dos jogos eletrônicos para entregar na próxima semana. Uma pessoa do grupo usou uma IA para gerar o conteúdo, mas o trabalho parece muito similar ao resultado do chat. O que você faz?",
        alternativas: [
           "Considero que o texto gerado pela IA é aceitável e entrego o trabalho sem alterações.",
            "Reviso o trabalho gerado pela IA e adiciono insights e contribuições pessoais para garantir originalidade e qualidade."
        ]
    },
];


let atual = 0;
let perguntaAtual;

function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa;
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

mostraPergunta();
