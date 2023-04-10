const prompt = require("prompt-sync")();
const imc = require("./imc");

const altura = +prompt("Informe sua altura em metros: ");
const peso = +prompt("informe seu peso em kg: ");

const resultadoIMC = imc.calcularIMC(peso, altura)
const sitFinal = imc.classIMC(resultadoIMC)

console.log(`Seu IMC é de ${resultadoIMC.toFixed(2)}.`);
console.log(`Sua classificação é: ${sitFinal}.`)
 