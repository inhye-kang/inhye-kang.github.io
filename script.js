function openNav() {
    document.getElementById("mySidebar").style.width = "100%";
    document.getElementById("main").style.marginRight = "250px";
    }
    
    function closeNav() {
    document.getElementById("mySidebar").style.width = "0%";
    document.getElementById("main").style.marginRight= "0%";
}
    
function openPage(pageName,elmnt,color) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
    }
    document.getElementById(pageName).style.display = "block";
    elmnt.style.backgroundColor = color;
}
    


//top nav sticky
window.onscroll = function() {myFunction()};

var topnav = document.getElementById("topnav");
var sticky = topnav.offsetTop;

function myFunction() {
    if (window.pageYOffset >= sticky) {
    topnav.classList.add("sticky")
    } else {
    topnav.classList.remove("sticky");
    }
}

$(function() {
    $('a[href*=#]').on('click', function(e) {
      e.preventDefault();
      $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
    });
  });