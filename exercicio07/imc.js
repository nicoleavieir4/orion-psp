function classIMC(imc) {
  if (imc < 18.5) {
    return "MAGREZA, GRAU 0";
  } else if (imc <= 24.9) {
    return "NORMAL, GRAU 0";
  } else if (imc >= 25 && imc <= 29.9) {
    return "SOBREPESO, GRAU I";
  } else if (imc >= 30 && imc <= 39.9) {
    return "OBESIDADE, GRAU II";
  } else if (imc > 40) {
    return "OBESIDADE, GRAU III";
  }
}

function calcularIMC(peso, altura) {
  const calculoImc = peso / (altura * altura);
  return calculoImc;
}


module.exports = {
  classIMC,
  calcularIMC
};
