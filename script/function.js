
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

     var image = [ 'toon.png', 'toon1.png', 'toon2.png','toon3.png' ];

     value=0;
     img='';

     const t=setInterval(function() {  
          if (value <4){  
             //alert(image[value]);
             img='./images/' + image[value];
             $('#img1').attr('src', img);
             $('.hide').show(900);
             value++;
           }
          else{
               clearInterval(t);
            }
        }, 1000);

 }
