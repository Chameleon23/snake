var green_colour = [0, 255, 0]
var red_colour = [220,20,60]
var x_apple = []
var y_apple = []


for (var i = 0; i < WINDOW_WIDTH/cube_size; ++i)
  x_apple.push(i * 20)


for (var i = 0; i < WINDOW_HEIGHT/cube_size; ++i)
  y_apple.push(i * 20)


function Apple() {
  this.colour = [green_colour, "green"]
  this.size = 20


  this.spawn_apple = function () {
    var x = Math.floor(random((WINDOW_WIDTH/cube_size) -1))
    var y = Math.floor(random((WINDOW_HEIGHT/cube_size)-1))
    var size = Math.random()
    var color = Math.random()

    // get random size for apple
    if (size > 0.5){
      // TODO: size value to 40
      this.size = 40
    }
    else{
      this.size = 20
    }

    // get random color for snake
    if (color > 0.5){
      this.colour[0] = red_colour
      this.colour[1] = "red"
    }
    else{
      this.colour[0] = green_colour
      this.colour[1] = "green"
    }

    this.apple = [x_apple[x], y_apple[y], this.size, this.colour]
  }


  this.draw_apple = function () {
    var apple = this.apple
    fill(apple[3][0])
    rect(apple[0], apple[1], apple[2], apple[2], apple[2], apple[2])
  }


  this.get_apple = function () {
    return this.apple
  }
}