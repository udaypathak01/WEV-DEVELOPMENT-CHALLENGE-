// object
let scoreStr = localStorage.getItem("Score");
let score;
resetScore(scoreStr);

function resetScore(scoreStr) {
  score = scoreStr
    ? JSON.parse(scoreStr)
    : {
        win: 0,
        lost: 0,
        tie: 0,
      };

  score.displayScore = function () {
    return `Score: Won: ${score.win}, Lost:${score.lost}, Tie:${score.tie}`;
  };
  showResult();
}

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
  localStorage.setItem("Score", JSON.stringify(score));

  document.querySelector("#User_move").innerText =
    userMove !== undefined ? `You have choose ${userMove}` : "";

  document.querySelector("#computer_move").innerText =
    computerMove !== undefined ? `Computer choice is ${computerMove}` : "";

  document.querySelector("#result").innerText =
    resultMess !== undefined ? `${resultMess}` : "";

  document.querySelector("#score").innerText = `${score.displayScore()}`;
  
}



