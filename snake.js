let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");

context.fillStyle = "black";
context.fillRect(0, 0 ,400, 400);

context.fillStyle = "white";
context.fillRect(200, 200 ,20, 20);

function update(){
  console.log("update");
}

setInterval(update , 1000);
