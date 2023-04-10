// Inserir dados de um aluno e as notas dos 4 bimestres, ao final, calcular a média das notas.
// 10 alunos dentro de um array

const prompt = require("prompt-sync")();
const escola = require("./calculaMediaAluno");
 
const alunos = [0, 0, 0];

for (var i = 0; i < alunos.length; i++) {
  // const input = prompt("What is your name? ");
  alunos.nome = prompt("Qual nome do(a) aluno(a)?");
  alunos.nota1 = parseInt(prompt("Qual a nota do 1 bimestre?"));
  alunos.nota2 = parseInt(prompt("Qual a nota do 2 bimestre?"));
  alunos.nota3 = +prompt("Qual a nota do 3 bimestre?");
  alunos.nota4 = +prompt("Qual a nota do 4 bimestre?");

  escola.calcularMediaAluno(alunos);
  
}

// escola.calcularMediaAluno(aluno1);
// escola.calcularMediaAluno(aluno2);

// const aluno1 = { 
//   nome: "Henrique",
//   nota1: 5,
//   nota2: 7,
//   nota3: 6,
//   nota4: 10,
// };

// const aluno2 = {
//   nome: "Juliana",
//   nota1: 10,
//   nota2: 7,
//   nota3: 8,
//   nota4: 10,
// };

// const input = prompt("What is your name? ");
// console.log(`Oh, so your name is ${input}`);
