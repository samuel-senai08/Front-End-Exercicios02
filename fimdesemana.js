const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Digite um número de 1 a 7 para saber se é fim de semana ou dia útil: ", (numero) => {
    let diaSemana = Number(numero);
    if (diaSemana === 1 || diaSemana === 7) {
        console.log("É fim de semana");
    } else if (diaSemana >= 2 && diaSemana <= 6) {
        console.log("É dia útil");
    } else {
        console.log("Número inválido. Por favor, digite um número de 1 a 7.");
    }
    rl.close();
});