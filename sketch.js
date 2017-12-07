var snake
var apple


var WINDOW_WIDTH = 1360;
var WINDOW_HEIGHT = 680;


function setup() {
  createCanvas(WINDOW_WIDTH, WINDOW_HEIGHT);
  snake = new Snake()
  apple = new Apple()
  apple.spawn_apple()
  frameRate(10);
}


function draw() {
  background(50);
  snake.draw()
  snake.move()
  apple.draw_apple()
  snake.draw_score()
  var new_apple = apple.get_apple()

  // if apple was eaten spawn it again
  if (snake.eat(new_apple))
  {
    apple.spawn_apple()
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


function mousePressed() {
  snake.grow(1)
}
