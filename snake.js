var blue_colour = [30,144,255]
var cube_size = 20
var name
var score = 0
var score_counter = 1


function Snake() {
  this.xdir = 1
  this.ydir = 0
  this.x = 0
  this.y = 0
  this.speed = 20
  this.tail = []
  this.snake_body_colour = blue_colour

  this.tail.push([0, 0])

  this.grow = function (n) {
    for (var i = 0; i < n; ++ i) {
      this.tail.push([this.tail[0], this.tail[1]])
    }
  }


  // change direction function
  this.change_dir = function (x, y) {
    this.xdir = x
    this.ydir = y
  }


  // draw snake on screen
  this.draw = function () {
    for (var i = 1; i < this.tail.length; ++i) {
      fill(this.snake_body_colour)
      rect(this.tail[i][0], this.tail[i][1], cube_size, cube_size)
    }
    fill(200)
    rect(this.tail[0][0], this.tail[0][1], cube_size, cube_size)
  }


  // move snake
  this.move = function () {
    this.check_life()

    if (this.tail.length > 0) {
      var tmp_back = this.tail.pop()
      tmp_back[0] = this.x
      tmp_back[1] = this.y
      this.tail.unshift(tmp_back)
    }

    this.x += this.speed * this.xdir
    this.y += this.speed * this.ydir
    this.x = constrain(this.x, 0, WINDOW_WIDTH - cube_size)
    this.y = constrain(this.y, 0, WINDOW_HEIGHT - cube_size)

  }


  this.check_life = function () {
    var head = [this.x, this.y]

    for (var i = 1; i < this.tail.length; ++i){
      var corrent_cube = this.tail[i]
      var distance = dist(head[0], head[1], corrent_cube[0], corrent_cube[1])
      if (distance < 1){
        if (this.tail.length > 3) {
          this.tail.length = 3
          score = 0
          score_counter = 1
          get_label_from_center()
        }

      }
    }
  }


  // if apple was eaten return true else false
  this.eat = function (apple) {
    var head = this.tail[0]
    var size = 1

    if (apple[2] === 40)
      size *= 2

    if (apple[3][1] === "red")
      size *= 2

    var distance = dist(head[0], head[1], apple[0], apple[1])
    if (distance < 1){
      this.grow(size)
      console.log("shesrulda")
      score += score_counter;
      ++score_counter;
      return true
    }
    return false
  }


  this.draw_score = function () {
    textSize(20);
    fill(255);
    text(name+ ": " + score, 0, 20);
  }
}
