var turn = 0;
var randNum1 = 0,
  randNum2 = 0;

function fun1() {
  if (turn) {
    document.querySelectorAll("p")[2].innerHTML = "Player 2's turn!";
  } else {
    randNum1 = Math.floor(Math.random() * 6) + 1;
    var randImage1 = "dice" + randNum1 + ".png";
    var randImageSource = "images/" + randImage1;
    var image1 = document.querySelectorAll("img")[0];
    image1.setAttribute("src", randImageSource);
    turn = 1;
  }
}

function fun2() {
  randNum2 = Math.floor(Math.random() * 6) + 1;
  if (turn == 0) {
    document.querySelectorAll("p")[2].innerHTML = "Player 1's turn!";
  } else {
    var randImage2 = "dice" + randNum2 + ".png";
    randImageSource = "images/" + randImage2;
    var image2 = document.querySelectorAll("img")[1];
    image2.setAttribute("src", randImageSource);
    turn = 0;
    checkWinner();
  }
}

function checkWinner() {
  var trophy = '<i class="fa-solid fa-trophy"></i>';
  if (randNum1 > randNum2) {
    document.querySelectorAll("h1")[0].innerHTML =
      trophy + " Player 1 wins! " + trophy;
  } else if (randNum1 < randNum2) {
    document.querySelectorAll("h1")[0].innerHTML =
      trophy + " Player 2 wins! " + trophy;
  } else {
    document.querySelectorAll("h1")[0].innerHTML = "Match Draw!";
  }
}

function reset() {
  randNum1 = 0;
  randNum2 = 0;
  turn = 0;
  document.querySelectorAll("img")[0].setAttribute("src", "images/dice1.png");
  document.querySelectorAll("img")[1].setAttribute("src", "images/dice1.png");
  document.querySelectorAll("h1")[0].innerHTML = "Dice Me";
}
