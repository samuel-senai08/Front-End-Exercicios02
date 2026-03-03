const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Digite um número de 1 a 7 para saber o dia da semana: ", (numero) => {
    let diaSemana =Number(numero);  

    switch (diaSemana) {    
        case 1: 
        console.log("Domingo");
        break;
        case 2:
        console.log("Segunda-feira");
        break;
        case 3:
        console.log("Terça-feira");
        break;
        case 4:
        console.log("Quarta-feira");
        break;
        case 5:
        console.log("Quinta-feira");
        break;
        case 6:
        console.log("Sexta-feira");
        break;
        case 7:
        console.log("Sábado");
        break;
    }
    rl.close();
});
