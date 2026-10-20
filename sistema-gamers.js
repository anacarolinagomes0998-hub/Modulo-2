const prompt = require('prompt-sync')();

let time = [];
let continuar = true;

function mostrarMenu() {
    console.log("\n============");
    console.log("-------Sistema de Gamers-------");
    console.log("1 - Cadastrar");
    console.log("2 - Deletar");
    console.log("3 - Mostrar Equipe");
    console.log("4 - Calcular Média da Equipe");
    console.log("5 - Atualizar Pontos");
    console.log("6 - Sair");
}

function mostraEquipe() {
    if (time.length === 0) {
        return;
    }

for (let i = 0; i < time.length; i++) {
     let jogador = time[i];
     console.log(`${i + 1} . ${jogador.nome} | Função: ${jogador.funcao} | Pontuação: ${jogador.pontuacao}`);
    }
}

function cadastrarJogador() {
    let nomeJogador = prompt("Digite o nome do jogador (ou 'sair'): ");
    let funcaoJogador = prompt("Digite a função do jogador: ");
    let pontuacaoJogador = Number(prompt("Digite a pontuação: "));

    if(isNaN(pontuacaoJogador)) {
        console.log("Pontuação inválida. Por favor, insira um número.");
        return;
    } else {
        let recruta = {
            nome: nomeJogador,
            funcao: funcaoJogador,
            pontuacao: pontuacaoJogador,
        };


        time.push({ nome: nomeJogador, funcao: funcaoJogador, pontuacao: pontuacaoJogador });
        console.log("Jogador " + nomeJogador + "foi cadastrado com sucesso");
    }
}

    function deletarJogador() {
         if (time.length === 0) {
            console.log("Não há jogadores cadastrados para deletar.");
            return;
        }

        let nomeDeletar = prompt("Digite o nome do jogador que deseja deletar: ");
        let indexDeletado = -1;

        for (let i = 0; i < time.length; i++) {

            if (time[i].nome === nomeDeletar) {
                indexDeletado = i;
                break;
            }
        }

        if (indexDeletado == -1) {
            console.log("Jogador não encontrado.");
            return;
        }

        time.splice(indexDeletado, 1);
        console.log("Jogador foi deletado com sucesso.");
    }

    function calcularMedia() {
        if (time.length === 0) {
            console.log("Não há jogadores cadastrados para calcular a média.");
            return;
        }

        let totalPontos = 0;

        for (let i = 0; i < time.length; i++) {
            totalPontos = totalPontos + time[i].pontuacao;
        }

        let media = totalPontos / time.length;

        console.log("O time possui uma média de pontos de: ", media);
    }


function atualizarPontuacao() {
    if (time.length === 0) {
        console.log("Não há jogadores cadastrados para atualizar.");
        return;
    }

    console.log("\n--- ATUALIZAÇÃO DE RANKING ---");
    let nomeBusca = prompt("Qual jogador deseja atualizar? ");

    for (let i = 0; i < time.length; i++) {
        let jogadorAtual = time[i];

        if (jogadorAtual.nome === nomeBusca) {
            let pontosNovos = Number(prompt("Quantos pontos ele ganhou hoje? "));

            if (isNaN(pontosNovos)) {
                console.log("Pontuação inválida. Por favor, insira um número.");
                return;
            }

            jogadorAtual.pontuacao += pontosNovos;
            console.log(`SUCESSO! A pontuação de ${jogadorAtual.nome} subiu para ${jogadorAtual.pontuacao} pontos!`);
            return;
        }
    }

    console.log("ERRO: Jogador não encontrado.");
}

while (continuar === true) {
    mostrarMenu();
    let opcao = prompt("Digite sua opção: ");
    
    if (opcao === '1') {
      cadastrarJogador();
    } else if (opcao === '2') {
       deletarJogador();
    } else if (opcao === '3') {
        mostraEquipe();
    } else if (opcao === '4') {
        calcularMedia();
    } else if (opcao === '5') {
        atualizarPontuacao();
    } else if (opcao === '6') {
        continuar = false;
    }
    else {
        console.log("Opção inválida. Tente novamente.");
    }
}
