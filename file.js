// HOME


$('nav').animate({opacity:1}, 1000,(function(){
    $("#destination").animate({opacity: 1}, 1000);
    $("#crew").animate({opacity: 1}, 1000);
    $("#technology").animate({opacity: 1}, 1000);
    $('p').animate({opacity:1}, 4000);
    $('#heading1').animate({opacity:1}, 1000, (function(){
        $('h1').animate({opacity:1}, 2000, (function(){
            $('#last').animate({opacity:1}, 1000);
        }));
    }));
}));





let hamburger = document.getElementById("hamburger");

function show(){
    // hamburger.style.display = "block"
    hamburger.style.width = "80%";
}
function hide(){
    // hamburger.style.display = "none"
    hamburger.style.width = "0%";
}






