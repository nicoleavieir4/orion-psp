// perguntar para o user ate qual numero ele deseja contar
// retornar entre os numeros escolhidos, quais sao os numeros pares, quais os numeros impares (separados) e printar na tela
// retornar a soma de todos os numeros pares e impares (separados)
// calcular a diferenca entre a soma dos numeros pares e impares (resultadoSomaPar - resultadoSomaImpar)
// multiplicar todos os numeros pares

const prompt = require("prompt-sync")();
const calc = require("./calc");

const pares = [];
const impares = [];
const qtdNum = parseInt(prompt("Até qual número você deseja contar?"));

for (var i = 0; i <= qtdNum; i++) {
  if (i % 2 === 0) {
    pares.push(i);
  } else {
    impares.push(i);
  }
} 

function somando(valores){
  const resultSoma = valores.reduce((acumulador, valorAtual) =>
    calc.soma(acumulador, valorAtual)
  );
  return resultSoma
}

function multiplicando(valores) {
  const resultMult = valores.reduce((acumulador, valorAtual) => {
    const fator1 = valorAtual == 0 ? 1 : valorAtual;
    const fator2 = acumulador == 0 ? 1 : acumulador;

    const produto = calc.mult(fator1, fator2);
    // console.log(`Acumulador: ${acumulador}, Valor atual: ${valorAtual}, Produto: ${produto}`);
    return produto;
  });

  return resultMult;
}

const resultadoSomaPar = somando(pares)
const resultadoSomaImpar = somando(impares)
const difSub = calc.sub(resultadoSomaPar, resultadoSomaImpar)

console.log("Números Pares: ", pares);
console.log("Números Ímpares: ", impares);
console.log(`A soma de pares é ${resultadoSomaPar}.`);
console.log(`A soma de impares é ${resultadoSomaImpar}`);
console.log(`A diferença entre a soma dos pares e ímpares é de ${difSub}`);
console.log(`A multiplicação de pares é ${multiplicando(pares)}.`);
console.log(`A multiplicação dos impares é ${multiplicando(impares)}.`);
