function Snake() {
  this.xdir = 1
  this.ydir = 0
  this.x = 0
  this.y = 0
  this.speed = 20
  this.point = 0
  this.tail = []

 
  this.tail.push([80, 0])
  this.tail.push([60, 0])
  this.tail.push([40, 0])
  this.tail.push([20, 0])
  this.tail.push([0, 0])



  // change direction function
  this.change_dir = function (x, y) {
    this.xdir = x
    this.ydir = y
  }

  this.draw = function () {
    var head = this.tail[0]
    for (var i = 0; i < this.tail.length; ++i) {
      if (i === 0) {
        fill(255,0,0)
        rect(this.tail[i][0], this.tail[i][1], 20, 20)
      }
      else{
        fill(200)
        rect(this.tail[i][0], this.tail[i][1], 20, 20)
      }
    }
  }

  this.move = function () {
    if (this.tail.length > 0){
      var tmp_back = this.tail.pop()
      tmp_back[0] = this.x
      tmp_back[1] = this.y
      this.tail.unshift(tmp_back)
    }

    this.x += this.speed * this.xdir
    this.y += this.speed * this.ydir
  }


}