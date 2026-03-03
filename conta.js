const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Digite o seu Salário: ", (salario) => {
    let valor = (Number)(salario);

 
    if (valor < 0 ){
        console.log("Salário abaixo de 0");
    
    }else{ (valor > 0) 
        console.log("Salário acima de 0");
    }
});