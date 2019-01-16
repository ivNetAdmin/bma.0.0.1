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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJzaXRlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIiQoZnVuY3Rpb24oKSB7IFxyXG4gICAgJCgnLm5hdmJhci1icmFuZCBzdHJvbmcnKS5hZGRDbGFzcygnaGlkZScpO1xyXG59KTsgXHJcblxyXG4kKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uKCkgeyAgICBcclxuICAgIHZhciBzY3JvbGwgPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCk7XHJcblxyXG4gICAgaWYgKHNjcm9sbCA+PSAxODApIHtcclxuICAgICAgICAkKCcudG9wLW5hdicpLmFkZENsYXNzKCdsaWdodC1oZWFkZXInKTtcclxuICAgICAgICAkKCcudG9wLW5hdicpLmFkZENsYXNzKCdsaWdodC1oZWFkZXItYmcnKTtcclxuICAgICAgICAkKCcudG9wLW5hdicpLnJlbW92ZUNsYXNzKCdkYXJrLWhlYWRlci1iZycpO1xyXG4gICAgICAgICQoJy5ibWFuYW1lJykucmVtb3ZlQ2xhc3MoJ2hpZGUnKTtcclxuICAgICAgICAkKCcuYm1hbG9nbycpLmFkZENsYXNzKCdoaWRlJyk7XHJcbiAgICAgICAgJCgnLmljYWV3bG9nbycpLnJlbW92ZUNsYXNzKCdpY2Fld2xvZ28taW1nJyk7XHJcbiAgICAgICAgJCgnLmljYWV3bG9nbycpLmFkZENsYXNzKCdpY2Fld2xvZ28taW1nLXNtYWxsJyk7XHJcbiAgICB9IGVsc2UgeyAgICAgICAgXHJcbiAgICAgICAgJCgnLnRvcC1uYXYnKS5hZGRDbGFzcygnZGFyay1oZWFkZXItYmcnKTtcclxuICAgICAgICAkKCcudG9wLW5hdicpLnJlbW92ZUNsYXNzKCdsaWdodC1oZWFkZXInKTtcclxuICAgICAgICAkKCcudG9wLW5hdicpLnJlbW92ZUNsYXNzKCdsaWdodC1oZWFkZXItYmcnKTtcclxuICAgICAgICAkKCcuaWNhZXdsb2dvJykucmVtb3ZlQ2xhc3MoJ2ljYWV3bG9nby1pbWctc21hbGwnKTtcclxuICAgICAgICAkKCcuaWNhZXdsb2dvJykuYWRkQ2xhc3MoJ2ljYWV3bG9nby1pbWcnKTtcclxuICAgICAgICAkKCcuYm1hbmFtZScpLmFkZENsYXNzKCdoaWRlJyk7XHJcbiAgICAgICAgJCgnLmJtYWxvZ28nKS5yZW1vdmVDbGFzcygnaGlkZScpO1xyXG4gICB9XHJcbn0pO1xyXG5cclxud2luZG93Lm9ucmVzaXplID0gZGlzcGxheVdpbmRvd1NpemU7XHJcbndpbmRvdy5vbmxvYWQgPSBkaXNwbGF5V2luZG93U2l6ZTtcclxuXHJcbmZ1bmN0aW9uIGRpc3BsYXlXaW5kb3dTaXplKCkge1xyXG4gICAgdmFyIG15V2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcclxuICAgIHZhciBteUhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2NyZWVuV2lkdGhcIikuaW5uZXJIVE1MID0gbXlXaWR0aCArIFwieFwiICsgbXlIZWlnaHQ7XHJcbn07Il0sImZpbGUiOiJzaXRlLmpzIn0=
