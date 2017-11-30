$(document).foundation()

var rin = document.getElementById("rin");
var ladyRat = document.getElementById("ladyRat")
var icon = document.getElementById("icon");


window.onscroll = function(){

  var y = window.pageYOffset;

ladyRat.style.top = 200 + y  + "px";

  if(y > 100){

      ladyRat.src="../images/ladyratHouse_open.png";

  }else{

      ladyRat.src="../images/ladyratHouse_closed.png";
 }

};
