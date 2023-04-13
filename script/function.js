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


