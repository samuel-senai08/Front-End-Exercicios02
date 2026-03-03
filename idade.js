const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Digite sua idade: ", (idade) => {
    let idadeNumerica = Number(idade);
    if (idadeNumerica < 0) {
        console.log("Idade inválida. Por favor, digite uma idade positiva.");
    } else if (idadeNumerica < 18) {
        console.log("Você é menor de idade.");
    } else {
        console.log("Você é maior de idade.");
    }
    rl.close();
});
