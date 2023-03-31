const prompt = require("prompt-sync")();
const calc = require("./calc");

console.log("Selecione a operação que você deseja realizar:");
console.log("1 - Soma");
console.log("2 - Divisão");
console.log("3 - Multiplicação");
console.log("4 - Subtração");

const pergunta = prompt("Qual operação você deseja realizar?");

switch (pergunta) {
  case "1":
    const num1 = +prompt("Digite o primeiro número: ");
    const num2 = +prompt("Digite o segundo número: ");
    console.log(`Resultado: ${calc.soma(num1, num2)}`);
    break;
  case "2":
    const num3 = +prompt("Digite o primeiro número: ");
    const num4 = +prompt("Digite o segundo número: ");
    console.log(`Resultado: ${calc.div(num3, num4)}`);
    break;
  case "3":
    const num5 = +prompt("Digite o primeiro número: ");
    const num6 = +prompt("Digite o segundo número: ");
    console.log(`Resultado: ${calc.mult(num5, num6)}`);
    break;
  case "4":
    const num7 = +prompt("Digite o primeiro número: ");
    const num8 = +prompt("Digite o segundo número: ");
    console.log(`Resultado: ${calc.sub(num7, num8)}`);
    break;
  default:
    console.log("Opção inválida!");
    break;
}
