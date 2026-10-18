const prompt = require("prompt-sync");

let continuar = true;

while (continuar === true) {
    let nomeUsuario = prompt("Digite seu nome (ou 'sair'): ");
    
    if (nomeUsuario === 'sair') {
        continuar = false;
    } else {
        console.log("Usuario " + nomeUsuario + "foi cadastrado com sucesso");
    }
}
