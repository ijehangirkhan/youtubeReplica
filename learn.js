/* const openMenu = document.querySelector('show-menu');
const hideMenuIcon = document.querySelector('hide-menu');
const sideMenu = document.querySelector('mySidenav');

openMenu.addEventListener('click', function(){
    sideMenu.classList.add('active');
})

hideMenuIcon.addEventListener('click', function(){
    sideMenu.classList.remove('active');
}) */

document.getElementById("mySidenav").addEventListener("click", toggleNav);

function toggleNav(){
    navSize = document.getElementById("mySidenav").style.width;
    if (navSize == 250) {
        return closeNav();
    }
    return openNav();
}

    function openNav() {
      document.getElementById("mySidenav").style.width = "250px";
      document.getElementById("main").style.marginLeft = "250px";
    }
    
    function closeNav() {
      document.getElementById("mySidenav").style.width = "100px";
      document.getElementById("main").style.marginLeft= "100px";
    }