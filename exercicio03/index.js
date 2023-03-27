// Inserir dados de um aluno e as notas dos 4 bimestres, ao final, calcular a média das notas.
// 10 alunos dentro de um array
// for que printa a lista de alunos e a media

const prompt = require("prompt-sync")();
const escola = require("./calculaMediaAluno");
const final = require("./resultadoFinal");

const alunos = [];

do {
  const aluno = {};

  aluno.nome = prompt("Qual nome do(a) aluno(a)?");
  aluno.nota1 = parseInt(prompt("Qual a nota do 1 bimestre?"));
  aluno.nota2 = parseInt(prompt("Qual a nota do 2 bimestre?"));
  aluno.nota3 = +prompt("Qual a nota do 3 bimestre?");
  aluno.nota4 = +prompt("Qual a nota do 4 bimestre?");
  aluno.media = escola.calcularMediaAluno(aluno);
  aluno.resultadoFinal = final.resultadoFinal(aluno.media);

  alunos.push(aluno);
} while (alunos.length < 3);

console.log("Lista de alunos e suas médias:");
for (const aluno of alunos) {
  console.log(`
  Aluno: ${aluno.nome} 
  Média: ${aluno.media}
  Resultado final: ${aluno.resultadoFinal}
  `);
}
