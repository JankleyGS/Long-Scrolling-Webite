var icon = document.getElementById("icon");
var stickyCat = document.getElementById("stickyCat");
var trippingRin = document.getElementById("trippingRin");
var greetMouse = document.getElementById("greetMouse")
var greetRin = document.getElementById("greetRin")

////image switch for ladyRatHouse///////////////////
window.onscroll = function(){

      var y = window.pageYOffset;
      var x = window.pageXOffset;
      console.log(y);
      console.log(x);


////////////this makes Rinrin run across screen
      if( y > 0){
        trippingRin.style.left =  y + "px";
      }
      else{
        trippingRin.style.left = "0px";
      }




      /////////////Rinrin and Mouse meet////
            if( y > 800){
              // greetMouse.style.top = 400 + y + "px";
               greetMouse.style.top = 8000 - y * .8+ "px";
            }else{
              greetMouse.style.top = "1200px";
            }




////////////image switch for ladyRatHouse///////////////////
      if(y > 2000){
            icon.src="images/ladyratHouse_open.png";
        }else{
        icon.src="images/ladyratHouse_closed.png";
        }




///////stickyCat/////////////////////////////////////////////
       // if scrolled > 400px the stickyCat position fixed to top of viewport
       if( y > 4000){
       stickyCat.style.top = y + "px";

       } else {
       stickyCat.style.top = "4000px" ;
       }

       //if scrolled > 3800px sticky cat visible
       if( y > 3800){
      stickyCat.style.opacity = 1;
      }else {
      stickyCat.style.opacity = 0;
      }

      //after 5300px cat not visible
      if( y < 5300){
     stickyCat.style.opacity = 1;
     }else {
     stickyCat.style.opacity = 0;
     }




}
