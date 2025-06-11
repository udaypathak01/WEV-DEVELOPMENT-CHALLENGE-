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
    return "it is a  tie";
  } else if (
    (computerMove === "Bat" && userMove === "Ball") ||
    (computerMove === "Ball" && userMove === "Stump") ||
    (computerMove === "Stump" && userMove === "Bat")
  ) {
    return "Computer won";
  } else {
    return "User won";
  }
}
function showResult(userMove, computerMove,resultMess) {
  alert(
    `You have choose ${userMove}. Computer choice is ${computerMove}, ${resultMess}`
  );
}
