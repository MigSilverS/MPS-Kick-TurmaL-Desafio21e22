const prompt = require('prompt-sync')({sigint:true});

function escolherTema() {
    let op = parseInt(prompt("Qual tema você deseja jogar?  1 - Star Wars  2 - Marvel  3 - DC Comics  0 - Sair "));
    return op;
}

function fazerPerguntas(tema) {
    let perguntas;
    switch (tema) {
        case 1:
            perguntas = [
                {pergunta: "O nome real de Darth Vader é Anakin Skywalker. Verdadeiro ou falso? ", resposta: "verdadeiro", explicacao: ""},
                {pergunta: "Yoda treinou Luke Skywalker. Verdadeiro ou falso? ", resposta: "verdadeiro", explicacao: ""},
                {pergunta: "A Estrela da Morte é um planeta. Verdadeiro ou falso? ", resposta: "falso", explicacao: "A Estrela da Morte é uma estação espacial."}
            ];
            break;
        case 2:
            perguntas = [
                {pergunta: "Tony Stark é o nome verdadeiro do Homem de Ferro. Verdadeiro ou falso? ", resposta: "verdadeiro", explicacao: ""},
                {pergunta: "O Capitão América foi congelado durante a Segunda Guerra Mundial. Verdadeiro ou falso? ", resposta: "verdadeiro", explicacao: ""},
                {pergunta: "Thor é o Deus do Vento na mitologia nórdica. Verdadeiro ou falso? ", resposta: "falso", explicacao: "Thor é o Deus do Trovão."}
            ];
            break;
        case 3:
            perguntas = [
                {pergunta: "Bruce Wayne é o nome verdadeiro do Batman. Verdadeiro ou falso? ", resposta: "verdadeiro", explicacao: ""},
                {pergunta: "Superman vem do planeta Krypton. Verdadeiro ou falso? ", resposta: "verdadeiro", explicacao: ""},
                {pergunta: "A Mulher-Maravilha é filha de Zeus. Verdadeiro ou falso? ", resposta: "verdadeiro", explicacao: ""}
            ];
            break;
        default:
            perguntas = [];
            break;
    }
    return perguntas;
}

function processarRespostas(perguntas) {
    let pontuacao = 0;
    for (let i = 0; i < perguntas.length; i++) {
        let resposta = prompt(perguntas[i].pergunta).toLowerCase();
        if (resposta === perguntas[i].resposta) {
            console.log("Parabéns!");
            pontuacao++;
        } else {
            console.log("Resposta incorreta. " + perguntas[i].explicacao);
        }
    }
    return pontuacao;
}

const jogador = prompt('Qual o seu nome? ');
let pontuacaoTotal = 0;
let op = 10;

while (op != 0) {
    op = escolherTema();
    if (op !== 0) {
        let perguntas = fazerPerguntas(op);
        if (perguntas.length > 0) {
            pontuacaoTotal += processarRespostas(perguntas);
        } else {
            console.log("Digite uma opção válida.");
        }
    } else {
        console.log("Você saiu!");
    }
}

console.log(`Obrigado por jogar, ${jogador}! Sua pontuação foi: ${pontuacaoTotal}`);
