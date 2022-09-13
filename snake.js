let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");

let snakeX = 200;
let snakeY = 200;
let direction = "up";

function drawBackground() {
  context.fillStyle = "black";
  context.fillRect(0, 0, 400, 400);
}

function drawSnake() {
  context.fillStyle = "white";
  context.fillRect(snakeX, snakeY, 20, 20);
}

function update() {
  if (direction == "right") {
    snakeX += 20;
  } else if (direction == "left") {
    snakeX -= 20;
  } else if (direction == "up") {
    snakeY -= 20;
  } else if (direction == "down") {
    snakeY += 20;
  }

  drawBackground();
  drawSnake();
}
function changeDirection(event) {
console.log("direction");
}

drawBackground();
drawSnake();
setInterval(update, 1000);
addEventListener("keydown", changeDirection);
