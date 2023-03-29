const itens = [10, 10, 10, 10];

const valor = itens.reduce(function (
  acumulador,
  valorAtual,
  index,
  array
) {
  const resultado = acumulador + valorAtual;
  console.log(
    `${index} - acumulador: ${acumulador}, valorAtual: ${valorAtual}, resultado: ${resultado}`
  );

  return resultado;
});

const media = valor / itens.length;

console.log(`Resultado final da soma: ${valor}`);
console.log(`Media: ${media}`);
