function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
} 

function closePopup() {
     document.getElementById("about").style.display  = "";
     document.getElementById("contact").style.display  = "";
} 


function openPopup(type) {

     if (type=='contact'){
        document.getElementById("contact").style.display = "block";
      }
     else if  (type=='about'){
        document.getElementById("about").style.display = "block";
      }

     document.getElementById("mySidenav").style.width = "0";
     document.getElementById("main").style.marginLeft= "0";

  }

      function animate(){

         var image = [ './images/cat1.png', './images/cat2.png', './images/cat3.png','./images/cat4.png','./images/cat5.png' ];

         value=0;
         setInterval(function() {    
             //alert(image[value]);
             $('#img1').attr('src', + image[value]);
             $('.hide').show(1000);
             value++;
        }, 1000);

     }


