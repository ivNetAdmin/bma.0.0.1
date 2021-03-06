$(function() { 
    $('.navbar-brand strong').addClass('hide');
}); 

$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 180) {
        $('.top-nav').addClass('light-header');
        $('.top-nav').addClass('light-header-bg');
        $('.top-nav').removeClass('dark-header-bg');
        $('.bmaname').removeClass('hide');
        $('.bmalogo').addClass('hide');
        $('.icaewlogo').removeClass('icaewlogo-img');
        $('.icaewlogo').addClass('icaewlogo-img-small');
    } else {        
        $('.top-nav').addClass('dark-header-bg');
        $('.top-nav').removeClass('light-header');
        $('.top-nav').removeClass('light-header-bg');
        $('.icaewlogo').removeClass('icaewlogo-img-small');
        $('.icaewlogo').addClass('icaewlogo-img');
        $('.bmaname').addClass('hide');
        $('.bmalogo').removeClass('hide');
   }
});

window.onresize = displayWindowSize;
window.onload = displayWindowSize;

function displayWindowSize() {
    var myWidth = window.innerWidth;
    var myHeight = window.innerHeight;
    document.getElementById("screenWidth").innerHTML = myWidth + "x" + myHeight;
};