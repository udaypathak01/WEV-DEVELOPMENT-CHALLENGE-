// object
let score = {
  win: 0,
  lost: 0,
  tie: 0,
  displayScore: function () {
    return `Won: ${score.win}, Lost:${score.lost}, Tie:${score.tie}`;
  },
};

let computerChoice;
function computerChoiceFucn() {
  let randomNumber = Math.random() * 3;

  if (randomNumber > 0 && randomNumber <= 1) {
    return "Bat";
  } else if (randomNumber > 1 && randomNumber <= 2) {
    return "Ball";
  } else {
    return "Stump";
  }
}
function getResult(userMove, computerMove) {
  if (computerMove === userMove) {
    score.tie++;
    return "it is a  tie";
  } else if (
    (computerMove === "Bat" && userMove === "Ball") ||
    (computerMove === "Ball" && userMove === "Stump") ||
    (computerMove === "Stump" && userMove === "Bat")
  ) {
    score.lost++;
    return "Computer won";
  } else {
    score.win++;
    return "User won";
  }
}
function showResult(userMove, computerMove, resultMess) {
  alert(
    `You have choose ${userMove}. Computer choice is ${computerMove},\n ${resultMess}\n ${score.displayScore()}`
  );
}
