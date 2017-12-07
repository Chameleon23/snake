var lbl_left = (WINDOW_WIDTH / 2) - 100
var lbl_top = WINDOW_HEIGHT / 4


function print_self_eat(){
  var x = document.getElementById("lbl_self_eat")

  x.innerText = "Don't eat yourself !!!"
  x.style.left = lbl_left;
  x.style.top = lbl_top;

  if($("#lbl_self_eat").is(":visible")) {
    $("#lbl_self_eat").fadeOut(3000)
  }
  else {
    $("#lbl_self_eat").fadeIn(3000)
    print_self_eat()

  }

  // $("#lbl_self_eat").fadeToggle(3000) doen't work as I want

}


function print_have_fun() {
  var x = document.getElementById("lbl_have_fun")

  x.innerText = "Have Fun :) ..."
  x.style.left = lbl_left;
  x.style.top = lbl_top;


  if($("#lbl_have_fun").is(":visible")) {
    $("#lbl_have_fun").hide(3000)
  }
  else {
    $("#lbl_have_fun").show(4000)
    print_have_fun()
  }

}
