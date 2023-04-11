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

