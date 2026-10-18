const prompt = require('prompt-sync')();

let time = [];
let continuar = true;

while (continuar === true) {
    let nomeUsuario = prompt("Digite o nome do usuário (ou 'sair'): ");
    
    if (nomeUsuario === 'sair') {
        continuar = false;
    } else {
        time.push(nomeUsuario);
        console.log("Usuario " + nomeUsuario + "foi cadastrado com sucesso");
        console.log("Seu time atual é: ", time);
    }
}
