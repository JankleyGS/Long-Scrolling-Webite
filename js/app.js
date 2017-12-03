var icon = document.getElementById("icon");
var stickyCat = document.getElementById("stickyCat");
var trippingRin = document.getElementById("trippingRin");
var greetMouse = document.getElementById("greetMouse");
var greetRin = document.getElementById("greetRin");
var rockMouse = document.getElementById("rockMouse");
var grassMouse = document.getElementById("grassMouse");
var waving = document.getElementById("waving");
var shocked = document.getElementById("shocked");
var escape = document.getElementById("escape");
window.onscroll = function(){

      var y = window.pageYOffset;
      var x = window.pageXOffset;
      console.log(y);
      console.log(x);


////////////this makes Rinrin run across screen
        trippingRin.style.left =200 + y *.30 + "px";



      /////////////Rinrin and Mouse meet--PARALLAX////
        /////////this parallaxes mouse
              greetMouse.style.top = 1800 + y * -.40 + "px";
              /////this paralaxxes props behind mouse
                rockMouse.style.top = 1780 + y * -.30 + "px";
                grassMouse.style.top = 1800 + y * -.40 + "px";

          ////////this parallaxes Rinrin
              greetRin.style.top = 2700 + y * -.99 + "px";




////////////image switch for ladyRatHouse///////////////////
      if(y > 2300){
            icon.src="images/ladyratHouse_open.png";
        }else{
        icon.src="images/ladyratHouse_closed.png";
        }

/////////////////parallax for Rinrin and Mouse at Lady Rat's House
              waving.style.top = 3500 + y * -.30 + "px";


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
      if( y > 5400){
     stickyCat.style.opacity = 0;
     }else {
     stickyCat.style.opacity = 1;
     }

     // this moves Rinrin across screen in front of Cat
           // shocked.style.left = - 2000 + y *.50 + "px";

    ////////this moves rin across as he escaped from cat
      escape.style.left = -2000 + y *.35 + "px";


}
