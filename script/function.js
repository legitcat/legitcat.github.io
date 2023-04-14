
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

     var image = [ 'cat1.png', 'cat2.png', 'cat3.png','cat4.png','cat5.png' ];

     value=0;
     img='';

     vat Timmer=setInterval(function() {    
             //alert(image[value]);
             img='./images/' + image[value];
             $('#img1').attr('src', img);
             $('.hide').show(1000);
             value++;
             If (value==4){
                clearInterval(Timmer);
              }
        }, 1000);

     }

