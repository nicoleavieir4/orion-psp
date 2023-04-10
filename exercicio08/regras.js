const computer = require("./play");

function playing(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "Empate!";
  } else if (
    (playerSelection === "Pedra" && computerSelection === "Tesoura") ||
    (playerSelection === "Papel" && computerSelection === "Pedra") ||
    (playerSelection === "Tesoura" && computerSelection === "Papel")
  ) {
    return `Você ganhou! ${playerSelection} vence ${computerSelection}.`;
  } else {
    return `Você perdeu! ${computerSelection} vence ${playerSelection}.`;
  }
}

const playerSelection = player
const computerSelection = computer

playing(playerSelection, computerSelection);

module.exports = {
  playing
}