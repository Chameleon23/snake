function get_label_from_center(){
  console.log("start")
  var x = document.getElementById("lbl_center")// .innerHTML("heey")
  x.innerText = "Don't eat yourself !!!"
  if($("label").is(":visible")) {
    $("label").fadeOut(3000)
  }
  else {
    $("label").fadeIn(3000)
    get_label_from_center()
  }
}

