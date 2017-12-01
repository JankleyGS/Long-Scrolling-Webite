var icon = document.getElementById("icon");
var stickyCat = document.getElementById("stickyCat");

////image switch for ladyRatHouse/////////
window.onscroll = function(){
      var y = window.pageYOffset;
      console.log(y);

      if(y > 1500){
            icon.src="images/ladyratHouse_open.png";
        }else{
        icon.src="images/ladyratHouse_closed.png";
        }

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
