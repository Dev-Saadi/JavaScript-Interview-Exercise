let secretNumber = Math.floor(Math.random() * 100) + 1;

let chance = 10;

const check = () => {
  const guess = parseInt(document.getElementById("guess").value);
  if (isNaN(guess) || guess < 1 || guess > 100) {
    document.getElementById("result").innerHTML = "Enter a valid number";
    return;
  }
  chance--;

  if (guess === secretNumber) {
    document.getElementById("result").style.color = "green";
    document.getElementById("result").innerHTML = "Correct!!";
    disableInputButton();
  } else {
    const hint = guess > secretNumber ? "higher" : "lower";
    document.getElementById("result").innerHTML = "Your guess is" + " " + hint;
    document.getElementById("chance").innerHTML = chance;
  }

  if (chance === 1) {
    document.getElementById("chance").style.color = "red";
    document.querySelector(".chances").style.color = "red";
  } else if (chance === 0) {
    document.getElementById(
      "result"
    ).innerHTML = `You are out! The correct number is ${secretNumber}`;
    disableInputButton();
  }
};

const disableInputButton = () => {
  document.getElementById("guess").disabled = true;
  document.querySelector("button").disabled = true;
};

const replay = () => {
  secretNumber = Math.floor(Math.random() * 100) + 1;
  chance = 10;

  document.getElementById("guess").value = "";
  document.getElementById("result").innerHTML = "";
  document.getElementById("guess").style.color = "black";
  document.getElementById("chance").innerHTML = chance;
  document.getElementById("guess").disabled = false;
  document.querySelector("button").disabled = false;
};
