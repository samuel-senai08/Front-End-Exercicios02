const readline= require ('readline')

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
})

rl.question("Digite um numero de 1 a 12: ", (numero) => {
    let escolha = Number(numero);
    switch (escolha) {
        case 1:
        case 2:
        case 12:
            console.log("Você escolheu Verão!");
            break;
        case 3:
        case 4:
        case 5:
            console.log("Você escolheu Outono!");
            break;
        case 6:
        case 7:
        case 8:
            console.log("Você escolheu Inverno!");
            break;
        case 9:
        case 10:
        case 11:
            console.log("Você escolheu Primavera!");
            break;
        default:
            console.log("Número inválido! Por favor, digite um número de 1 a 12.");
    }
    rl.close();
});
