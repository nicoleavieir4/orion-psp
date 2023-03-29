// ao inves de utilizar o for, substituir com reduce
const calc = require("./calc");

function calcularMediaAluno(aluno) {
  var sum = 0;
  for (var i = 0; i < aluno.notas.length; i++) {
    sum += aluno.notas[i];
  }
  const mediaAluno = sum / aluno.notas.length;

  return mediaAluno;
}

function calcMedAlunoReduce(aluno) {
  const resultadoSoma = aluno.notas.reduce(function (acumulador, valorAtual) {
    const resultado = acumulador + valorAtual;
    console.log(`acumulador: ${acumulador}, valorAtual: ${valorAtual}`);

    return resultado;
  });

  const med = resultadoSoma / aluno.notas.length;

  return med;
}

function calcMedAlunoFuncaoExterna(aluno) {
  const resultadoSoma = aluno.notas.reduce((acumulador, valorAtual) =>
    calc.soma(acumulador, valorAtual)
  );

  const med = resultadoSoma / aluno.notas.length;

  return med;
}

// const sumWithInitial = array1.reduce(
//   (accumulator, currentValue) => accumulator + currentValue,
//   initialValue

module.exports = {
  calcularMediaAluno,
  calcMedAlunoReduce,
  calcMedAlunoFuncaoExterna,
};
