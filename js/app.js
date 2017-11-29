$(document).foundation()

var rin = document.getElementById("rin");
window.onscroll = function(){
  var y = window.pageXOffset;
  if(y>1000){
    rin.style.left = 200 + x;

  }

}
window.onscroll = function(){


  var y = window.pageYOffset;

  console.log(y);

  counter.style.left = 100 + x * 0.97 + "px";

  counter.innerHTML = x + "px";

  if (x > 2000) {
    counter.style.backgroundColor = "green";
  }else{
    counter.style.backgroundColor = "blue";}

    icon.style.top = 200 + x  + "px";

  if(x > 30){

      icon.src="https://2.bp.blogspot.com/-MTmoGMeE2cc/WSGIutFSHoI/AAAAAAAAK6o/Ya-tX6NvAqUM2LqV4VlxzsfwzD8xXEPFACLcB/s1600/254___thumbs-up-emoji.png";

  }else{

  icon.src="https://1.bp.blogspot.com/-jnt2C7f2HH8/WSGIun5uhGI/AAAAAAAAK6s/A1R4fUrtMUsQtEbKqopa2xTWqaEtxClogCLcB/s1600/256___come-to-fight-emoji.png";
 }

};
// var body = document.getElementById("body");
// var counterY = document.getElementById("counterY");
// var counterX = document.getElementById("counterX");
// var icon = document.getElementById("icon");
//
// window.onscroll = function(){
//
//
//   var y = window.pageYOffset;
//
//   console.log(y);
//
//   counter.style.top = 400 + y * .97 + "px";
//
//   counterY.innerHTML = y + "px";
//
//   if (y > 2000) {
//     counterY.style.backgroundColor = "green";
//   }else{
//     counterY.style.backgroundColor = "blue";}
//
//     icon.style.top = 200 + y  + "px";

//   if(y > 2000){
//
//       icon.src="https://2.bp.blogspot.com/-MTmoGMeE2cc/WSGIutFSHoI/AAAAAAAAK6o/Ya-tX6NvAqUM2LqV4VlxzsfwzD8xXEPFACLcB/s1600/254___thumbs-up-emoji.png";
//
//   }else{
//
//   icon.src="https://1.bp.blogspot.com/-jnt2C7f2HH8/WSGIun5uhGI/AAAAAAAAK6s/A1R4fUrtMUsQtEbKqopa2xTWqaEtxClogCLcB/s1600/256___come-to-fight-emoji.png";
//  }
//
// };
