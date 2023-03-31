// perguntar para o user ate qual numero ele deseja contar
// retornar entre os numeros escolhidos, quais sao os numeros pares, quais os numeros impares (separados) e printar na tela
// retornar a soma de todos os numeros pares e impares (separados)
// calcular a diferenca entre a soma dos numeros pares e impares (resultadoSomaPar - resultadoSomaImpar)
// multiplicar todos os numeros pares

// tudo é um array
// refatorar as funcoes (transformar em uma só)

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

function somando(pares, impares) {
  const resultadoSomaPar = pares.reduce((acumulador, valorAtual) =>
    calc.soma(acumulador, valorAtual)
  );

  const resultadoSomaImpar = impares.reduce((acumulador, valorAtual) =>
    calc.soma(acumulador, valorAtual)
  );

  return { resultadoSomaPar, resultadoSomaImpar };
}

const { resultadoSomaPar, resultadoSomaImpar } = somando(pares, impares);
const difSub = calc.sub(resultadoSomaPar, resultadoSomaImpar);

function multiplicando(pares) {
  const resultado = [];
  for (var i = 0; i < pares.length; i++) {
    resultado.push(pares[i] * pares[i]);
  }
  return resultado;
}

console.log("Números Pares: ", pares);
console.log("Números Ímpares: ", impares);
console.log(somando(pares, impares));
console.log(`A diferença entre a soma dos pares e ímpares é de ${difSub}`);
console.log(multiplicando(pares));
