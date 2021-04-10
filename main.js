function toggle () {  
    console.log("In the toggle function")
    // Declare variable menu
    let menu = document.getElementById("the-menu");
    console.log(menu.style.display)
    // toggle code
   if (menu.style.display === "block") {
      menu.style.display = "none";
    }
    else{
      menu.style.display = "block"; 
    }
  } 