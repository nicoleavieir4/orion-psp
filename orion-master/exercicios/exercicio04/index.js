const prompt = require("prompt-sync")();
const escola = require("./calculaMediaAluno");
const final = require("./resultadoFinal");

const alunos = [];
const qtdAlunos = +prompt("Quantos alunos serão inseridos?");

do {
  const aluno = {
    nome: "",
    notas: [],
    media: 0, 
  };

  aluno.nome = prompt("Qual nome do(a) aluno(a)?");

  const qtdNotas = +prompt("Qual a quantidade de notas serão inseridas? ");

  for (var i = 0; i < qtdNotas; i++) {
    aluno.notas[i] = parseInt(prompt(`Qual nota ${i+1} do(a) aluno(a)?`));
  }

  aluno.media = escola.calcMedAlunoFuncaoExterna(aluno);
  aluno.resultadoFinal = final.resultadoFinal(aluno.media);
  alunos.push(aluno);

} while (alunos.length < qtdAlunos);

console.log("Lista de alunos e suas médias:");
for (const aluno of alunos) {
  console.log(`
  Aluno: ${aluno.nome} 
  Média: ${aluno.media.toFixed(2)}
  Resultado final: ${aluno.resultadoFinal}
  `);
}
