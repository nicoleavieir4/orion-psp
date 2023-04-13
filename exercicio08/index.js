const prompt = require("prompt-sync")();
const { game, score } = require("./regras");

const name = prompt("Qual o seu nome?");

function playerPlay() {
  console.log(`Olá, ${name}!`);
  console.log("Selecione a operação que você deseja realizar:");
  console.log("1 - Pedra");
  console.log("2 - Papel");
  console.log("3 - Tesoura");
  console.log("S - Sair");

  const escolha = prompt("Escolha uma opção:");

  switch (escolha) {
    case "1":
      console.log(`Player ${name} escolheu Pedra.`);
      game(0);
      break;
    case "2":
      console.log(`Player ${name} escolheu Papel.`);
      game(1);
      break;
    case "3":
      console.log(`Player ${name} escolheu Tesoura.`);
      game(2);
    case "S":
      escolha === "S";
      console.log("Até a próxima!");
      break;
    default:
      console.log("Opção inválida. Por favor, digite uma opção válida.");
      break;
  }
}

let escolha = "";

do {
  playerPlay();
  escolha = prompt(
    "Deseja jogar novamente? Digite S para sair ou qualquer outra tecla para continuar."
  );
} while (escolha != "S");

console.log(`Player: ${score.player}`);
console.log(`Computer: ${score.computer}`);

if (score.play > score.computer) {
  console.log(`Parabéns ${name}, você venceu`);
} else {
  console.log("Parece que vc está sem sorte e perdeu para o robô.");
}
