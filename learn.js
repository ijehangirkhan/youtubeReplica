document.getElementById("mySidenav").addEventListener("click", toggleNav);

function toggleNav(){
  var navSize = document.getElementById("mySidenav").style.width;
  console.log(navSize);
  if (navSize == '250px') {
        return closeNav();
    }
    return openNav();
}

    function openNav() {
      document.getElementById("mySidenav").style.width = "250px";
      document.getElementById("main").style.marginLeft = "250px";
    }
    
    function closeNav() {
      document.getElementById("mySidenav").style.width = "0px";
      document.getElementById("main").style.marginLeft= "0px";
    }
