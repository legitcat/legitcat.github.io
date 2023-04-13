function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
}  


function openForm(type) {

     document.getElementById("contact").style.display = "none";
     document.getElementById("about").style.display = "none";

     if (type=='contact'){
        document.getElementById("contact").style.display = "block";
      }
     else if  (type=='about'){
        document.getElementById("about").style.display = "block";
      }


  }

  function closeForm() {

     <!--hide popups-->
     document.getElementById("contact").style.display = "none";
     document.getElementById("about").style.display = "none";
  }

