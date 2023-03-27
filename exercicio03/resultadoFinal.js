function resultadoFinal(media) {
  if (media > 7) {
    return "O aluno está aprovado.";
  } else {
    return "O aluno está reprovado.";
  }
}

module.exports = {
  resultadoFinal,
};
