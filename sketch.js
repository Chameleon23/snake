var snake
var stop = false


var WINDOW_WIDTH = 1200;
var WINDOW_HEIGHT = 600;
function setup() {
  createCanvas(WINDOW_WIDTH, WINDOW_HEIGHT);
  snake = new Snake()
  frameRate(10);
}

function stop_resume_game() {
  if (stop){
    stop = false
  }
  else {
    stop = true
  }
  console.log("true")
}

function gr() {
  snake.grow()
}

function draw() {
  background(50);
  // var p = rect(50 + x, 50 + y, 20, 20);
  // p["drawingContext"]["fillStyle"] = '#ff00ff'
  snake.draw()
  snake.move()
  if (stop){
    console.log("work")
    remove()
  }
}


function keyPressed() {
  if (keyCode === UP_ARROW) {
    snake.change_dir(0, -1);
  } else if (keyCode === DOWN_ARROW) {
    snake.change_dir(0, 1);
  } else if (keyCode === RIGHT_ARROW) {
    snake.change_dir(1, 0);
  } else if (keyCode === LEFT_ARROW) {
    snake.change_dir(-1, 0);
  }
}