var green_colour = [0, 255, 0]
var x_apple = []
for (var i = 0; i < WINDOW_WIDTH/cube_size; ++i)
  x_apple.push(i * 20)


function Apple() {
  this.colour = green_colour
  this.alive = true


  this.spawn = function () {
    this.apple = [Math.floor(random(WINDOW_WIDTH)), Math.floor(random(WINDOW_HEIGHT))]
    console.log(this.apple)
  }


  this.draw_apple = function () {
    fill(this.colour)
    rect(this.apple[0], this.apple[1], cube_size, cube_size, cube_size, cube_size)
  }


  this.get_apple =function () {
    return this.apple
  }
}