const readline = require('readline')

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
})

rl.question("Digite um numero: ", (numero) => {
    let valor = (Number)(numero);

    if (valor < 0) {
        console.log("O numero e Negativo");

       }   else if (valor = 0) {
        console.log("O numero e Igual a 0");

       }else{
        console.log("O numero e Positivo");
       }

       console.log("O numero digitado foi: " + valor);

        });