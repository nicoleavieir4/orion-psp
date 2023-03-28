// ao inves de utilizar o for, substituir com reduce

function calcularMediaAluno(aluno) {
  var sum = 0;
  for (var i = 0; i < aluno.notas.length; i++) {
    sum += aluno.notas[i];
  }
  const mediaAluno = sum / aluno.notas.length;

  // console.log(sum);

  return mediaAluno;
}

module.exports = {
  calcularMediaAluno,
};
