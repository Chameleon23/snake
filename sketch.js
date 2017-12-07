var snake
var apple
var pause = false

var WINDOW_WIDTH = 1360;
var WINDOW_HEIGHT = 700;


function reset()
{
  pause = false
  score = 0
  score_counter = 1
}


function setup() {
  reset()
  createCanvas(WINDOW_WIDTH, WINDOW_HEIGHT);
  snake = new Snake()
  apple = new Apple()
  apple.spawn_apple()
  frameRate(10);
}


function draw() {
  if (!pause) {
    background(50);

    snake.draw()
    snake.move()
    apple.draw_apple()
    snake.draw_score()

    var new_apple = apple.get_apple()

    // if apple was eaten spawn it again
    if (snake.eat(new_apple)) {
      apple.spawn_apple()
    }

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
  } else if (keyCode === ENTER)
  {
    if (pause) {
      pause = false
    }
    else {
      pause = true
      textSize(60);
      fill(255);
      text("Game paused, press Enter to continue.", 150, 300);
    }
  }else if (keyCode === DELETE)
  {
    setup()  // new game
  }

}


function mousePressed() {
  snake.grow(1)
}

