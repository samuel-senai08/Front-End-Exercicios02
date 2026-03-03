const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output:process.stdout
})

rl.question("Digite o primeiro numero: ", (numero1) => {
    let valor1 = (Number)(numero1);

    rl.question("Digite o segundo numero: ", (numero2) =>{
        let valor2 = (Number)(numero2);

        if (valor1 > valor2) {
            console.log("O primeiro numero e maior");
        } else if (valor2 > valor1) {
            console.log("O segundo numero e maior");
        } else {
            console.log("Os numeros sao iguais");
        }
    }
)})