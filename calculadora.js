const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Digite o primeiro numero: "), (numero1) => {
    let valor1 = (Number)(numero1);
}

    rl.question("Digite o segundo numero: "), (numero2) => {
        let valor2 = (Number)(numero2);
    }

        rl.question(" Digite a operação (1-Adição, 2-Subtração): ", (operacao) => {
            let escolha = (Number)(operacao);

        if (escolha === 1){ 
        let resultado = valor1 + valor2;
        console.log("O resultado da adição e : " + resultado);

         } else if (escolha === 2) {
            let resultado = valor1 - valor2;
            console.log("O resultado da subtraçaõ e : " + resultado);
        }else {
            console.log("Operação Invalida");
        
        }});
