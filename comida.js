const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("Menu:");
console.log("1. Pizza");
console.log("2. Hambúrguer");
console.log("3. Salada");

rl.question("Escolha uma opção (1, 2 ou 3): ", (opcao) => {
    let escolha = Number(opcao);
    switch (escolha) {
        case 1:
            console.log("Você escolheu Pizza!");        
            break;
        case 2:
            console.log("Você escolheu Hambúrguer!");
            break;
        case 3:
            console.log("Você escolheu Salada!");
            break;
        default:
            console.log("Opção inválida! Por favor, escolha 1, 2 ou 3.");
    }
    rl.close();
});
