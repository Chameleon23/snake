var snake
var apple
var pause = false


function get_window_size(){
  var w = window.innerWidth
  var h = window.innerHeight

  var n_w = w % 20;  // remain
  var n_h = h % 20;  // remain
  if (n_w != 0){
    w = w - n_w  // now w % 20 is 0
  }

  if (n_h != 0){
    h = h - n_h // now h % 20 is 0
  }
  return [w, h]
}

var WINDOW_WIDTH = get_window_size()[0]
var WINDOW_HEIGHT = get_window_size()[1]


function reset()
{
  pause = false
  score = 0
  score_counter = 1
  var _name = prompt("Please enter your name", "name");
  if (_name != null){
    name = _name
  }
  print_have_fun()
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
      textSize(40);
      fill(255);
      text("Game paused, press Enter to continue.",lbl_left / 4, lbl_top);
    }
  }else if (keyCode === DELETE)
  {
    setup()  // new game
  }

}


// function mousePressed() {
//   // print_have_fun()
//   print_self_eat()
// }

