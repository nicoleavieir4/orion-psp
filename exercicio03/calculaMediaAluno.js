const calc = require("./calculaNota");

function calcularMediaAluno(aluno) {
  const mediaAluno = calc.media(
    aluno.nota1,
    aluno.nota2,
    aluno.nota3,
    aluno.nota4
  );

  return mediaAluno;
}

module.exports = {
  calcularMediaAluno,
};
