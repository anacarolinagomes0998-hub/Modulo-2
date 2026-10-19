const prompt = require('prompt-sync')();

let time = [];
let continuar = true;

function mostrarMenu() {
    console.log("1 - Cadastrar");
    console.log("2 - Deletar");
    console.log("3 - Mostrar equipe");
    console.log("4 - Sair");
    console.log("\n");
}

function mostraEquipe() {
    console.log("------------------------");
    console.log("Seu time atual é: ", time);
    console.log("------------------------");
}

function cadastrarJogador() {
    let nomeJogador = prompt("Digite o nome do jogador (ou 'sair'): ");

        time.push(nomeJogador);
        console.log("Jogador " + nomeJogador + "foi cadastrado com sucesso");
        console.log("--------------------------------");
    }

    function deletarJogador() {
         if (time.length === 0) {
            console.log("Não há jogadores cadastrados para deletar.");
            return;
        }

        let nomeDeletar = prompt("Digite o nome do jogador que deseja deletar: ");
        let index = time.indexOf(nomeDeletar);

        if (index == -1) {
            console.log("Jogador não encontrado.");
            return;
        }

        time.splice(index, 1);
        console.log("Jogador foi deletado com sucesso.");
        console.log("--------------------------------");
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
        continuar = false;
    } 
    else {
        console.log("Opção inválida. Tente novamente.");
    }
}
