/*
O primeiro passo consiste em solicitar o nome do jogador;
Em seguida, no terminal devemos exibir as 3 opções para o jogador:

1 - Pedra, 2 - Tesoura, 3 - Papel, (S) - Sair;

Quando o jogador selecionar umas da opções, o algoritmo deve sortear um numero entre 1 e 3 de acordo com a regras do jogo respectivamente.
Na sequencia uma comparação entre o numero sorteado e o que foi escolhido pelo jogador deve ser feita, e um ponto deve ser adicionado para o vencedor da rodada.
Se o jogador escolher a opção (S) - Sair, a pontuação deve ser exibida mostrando:
'Parabéns {nome do jogador}, você venceu'
caso o jogador tenha feito o maior numero de pontos
ou
'Parece que vc está sem sorte e perdeu para o robo'
caso o robô tenha vencido.
Em ambos os casos o total de pontos deve ser exibido.
*/
const prompt = require("prompt-sync")();

const score = {
  player: 0,
  computer: 0,
};

function game(playerChoiceIndex) {
  const botChoiceIndex = Math.floor(Math.random() * 3);
  const select = ["Pedra", "Papel", "Tesoura"];
  const playerChoice = select[playerChoiceIndex];
  const botChoice = select[botChoiceIndex];

  console.log(`O computador escolheu ${botChoice}.`);
  console.log(`O computador escolheu ${botChoiceIndex}.`);

  if (playerChoice === botChoice) {
    console.log("Empate!");
  } else if (
    (playerChoice === "Pedra" && botChoice === "Tesoura") ||
    (playerChoice === "Papel" && botChoice === "Pedra") ||
    (playerChoice === "Tesoura" && botChoice === "Papel")
  ) {
    console.log(`Você ganhou! ${playerChoice} vence ${botChoice}.`);
    score.player++;
  } else {
    console.log(`Você perdeu! ${botChoice} vence ${playerChoice}.`);
    score.computer++;
  }
}

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

playerPlay();

let escolha = "";
while (escolha != "S") {
  playerPlay();
  escolha = prompt(
    "Deseja jogar novamente? Digite S para sair ou qualquer outra tecla para continuar."
  );
}

console.log(`Player: ${score.player}`);
console.log(`Computer: ${score.computer}`);

if (score.play > score.computer) {
  console.log(`Parabéns ${name}, você venceu`);
} else {
  console.log("Parece que vc está sem sorte e perdeu para o robô.");
}

//   switch (escolha) {
//     case "S":
//       //escolha === "S";
//       console.log("Até a próxima!");
//       break;
//     case "isNaN(parseInt(escolha)) || parseInt(escolha) < 1 || parseInt(escolha) > 3":
//       console.log(
//         "Opção inválida! Por favor, escolha uma das opções listadas."
//       );
//       break;
//     default:
//       const jogada = select[parseInt(escolha) - 1];
//       console.log(`Você escolheu ${jogada}!`);
//       console.log(
//         `Placar: Jogador ${play.playerScore} x ${play.computerScore} Máquina`
//       );

//       return jogada;
//   }

//   if (escolha === "S") {
//     console.log("Até a próxima!");
//   } else if (isNaN(parseInt(escolha)) || parseInt(escolha) < 1 || parseInt(escolha > 3)) {
//     console.log("Opção inválida! Por favor, escolha uma das opções listadas.");
//     return playerPlay()
//   } else {
//     const jogada = select[parseInt(escolha) - 1];
//     console.log(`Você escolheu ${jogada}!`)
//     return jogada;
//   }
// }
