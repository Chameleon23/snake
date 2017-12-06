function Snake() {
  this.xdir = 1
  this.ydir = 0
  this.x = 0
  this.y = 0
  this.speed = 40
  this.point = 0
  this.tail = []
  this.isAlive = true


  this.tail.push([0, 0])

  this.grow = function () {
    this.tail.push([this.x-this.speed, this.y-this.speed])
  }


  // change direction function
  this.change_dir = function (x, y) {
    this.xdir = x
    this.ydir = y
  }


  // draw snake on screen
  this.draw = function () {
    for (var i = 1; i < this.tail.length; ++i) {
      fill(30,144,255)
      rect(this.tail[i][0], this.tail[i][1], 20, 20)
    }

    fill(200)
    rect(this.tail[0][0], this.tail[0][1], 20, 20)
  }


  // move snake
  this.move = function () {
    this.check_life()
    if (this.isAlive) {
      if (this.tail.length > 0) {
        var tmp_back = this.tail.pop()
        tmp_back[0] = this.x
        tmp_back[1] = this.y
        this.tail.unshift(tmp_back)
      }

      this.x += this.speed * this.xdir
      this.y += this.speed * this.ydir
    }
  }


  this.check_life = function () {
    var head = [this.x, this.y]
    for (var i = 1; i < this.tail.length; ++i){
      var corrent_cube = this.tail[i]
      var distance = dist(head[0], head[1], corrent_cube[0], corrent_cube[1])
      if (distance < 1){
        console.log("snake is dead!!!")
        if (this.tail.length > 2)
          this.tail.length = 3
      }
    }


  }




}