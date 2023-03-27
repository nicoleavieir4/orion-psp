const calc = require("./calc");

// console.log(calc)
// console.log(calc.soma(2, 5))
// console.log(calc.sub(5, 2))
// console.log(calc.div(5, 2))
// console.log(calc.mult(5, 2))

const n1 = 5;
const n2 = 5;

const somaResult = calc.soma(n1, n2);
const multResult = calc.mult(somaResult, somaResult);
const divResult = calc.div(multResult, somaResult);

// console.log(somaResult)
// console.log(multResult)
// console.log(divResult)

// console.log(calc.div(calc.mult(calc.soma(5, 5), calc.soma(5, 5)), calc.soma(5, 5)))

// const x = console.log("Olá mundo!");
// console.log(x);

// console.log(calc.sub(calc.soma(5, 5), 2))
// console.log(calc.div(calc.soma(5, 5), divResult))
// console.log(calc.sub(calc.div(456, 3), 12))
// console.log(calc.mult(calc.mult(75, 75), 2))
// console.log(calc.mult(calc.div(40, 3), 4))
// console.log(calc.div(calc.mult(12, 5), 3))

// dividir a mult da soma de 2 numeros
// sub por dois o res de uma soma
// o resultado de uma funcao pode ser o resultado de outra

const pessoa1 = {
  nome: "João",
  idade: 22,
  salario: 3950
};

const pessoa2 = {
  nome: "Matias",
  idade: 24,
  salario: 5680
};

function exibeNomePessoa(pessoa, pessoa_1) {
    //console.log(pessoa.nome)
    console.log(`O nome das pessoas são ${pessoa.nome} e ${pessoa_1.nome}, as idades ${pessoa.idade} e ${pessoa_1.idade}, respectivamente
e juntas recebem ${pessoa.salario + pessoa_1.salario} reais.`)
}
//console.log(pessoa1)
exibeNomePessoa(pessoa1, pessoa2)
//exibeNomePessoa(pessoa2)



// function exibeNomeIdade(nome, idade) {
//     console.log(`O nome da pessoa é ${nome} e sua idade é ${idade}.`)
// }

// exibeNomeIdade("Joao", 28)
// exibeNomeIdade("Maria", 25)
// exibeNomeIdade(pessoa2.nome, pessoa2.idade)



//console.log(exibeNome("Maria"))

// funcao é subprograma que pode receber argumentos e retorna um resultado
