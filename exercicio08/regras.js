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

module.exports = {
  score,
  game
};
