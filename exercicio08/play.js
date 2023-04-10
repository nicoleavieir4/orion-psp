/*
Regras do jogo:

Pedra esmaga Tesoura;
Tesoura corta Papel;
Papel cobre pedra;
*/

const regras = require("./regras");

function sortIndex(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function computerPlay() {
  const options = ["Pedra", "Papel", "Tesoura"];
  const index = sortIndex(0, options.length);
  var play = options[index];

  // const computerSelection = computerPlay();

  console.log(`Dessa vez é ${play}`);

  return play;
}

async function game() {
  let playerScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; i++) {
    const playerSelection = await player.playerPlay;
    const computerSelection = computerPlay();
    console.log(`Jogador: ${playerSelection}`);
    console.log(`Máquina: ${computerSelection}`);
    const result = regras.playing(playerSelection, computerSelection);
    console.log(result);
    if (result.includes("ganhou")) {
      playerScore++;
    } else if (result.includes("perdeu")) {
      computerScore++;
    }
    console.log(`Placar: Jogador ${playerScore} x ${computerScore} Máquina`);
  }
}

game();

module.exports = {
  computerPlay,
  game,
};
