$(function() { 
    $('.navbar-brand strong').addClass('hide');
}); 

$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 10) {
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJzaXRlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIiQoZnVuY3Rpb24oKSB7IFxyXG4gICAgJCgnLm5hdmJhci1icmFuZCBzdHJvbmcnKS5hZGRDbGFzcygnaGlkZScpO1xyXG59KTsgXHJcblxyXG4kKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uKCkgeyAgICBcclxuICAgIHZhciBzY3JvbGwgPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCk7XHJcblxyXG4gICAgaWYgKHNjcm9sbCA+PSAxMCkge1xyXG4gICAgICAgICQoJy50b3AtbmF2JykuYWRkQ2xhc3MoJ2xpZ2h0LWhlYWRlcicpO1xyXG4gICAgICAgICQoJy50b3AtbmF2JykuYWRkQ2xhc3MoJ2xpZ2h0LWhlYWRlci1iZycpO1xyXG4gICAgICAgICQoJy50b3AtbmF2JykucmVtb3ZlQ2xhc3MoJ2RhcmstaGVhZGVyLWJnJyk7XHJcbiAgICAgICAgJCgnLmJtYW5hbWUnKS5yZW1vdmVDbGFzcygnaGlkZScpO1xyXG4gICAgICAgICQoJy5ibWFsb2dvJykuYWRkQ2xhc3MoJ2hpZGUnKTtcclxuICAgICAgICAkKCcuaWNhZXdsb2dvJykucmVtb3ZlQ2xhc3MoJ2ljYWV3bG9nby1pbWcnKTtcclxuICAgICAgICAkKCcuaWNhZXdsb2dvJykuYWRkQ2xhc3MoJ2ljYWV3bG9nby1pbWctc21hbGwnKTtcclxuICAgIH0gZWxzZSB7ICAgICAgICBcclxuICAgICAgICAkKCcudG9wLW5hdicpLmFkZENsYXNzKCdkYXJrLWhlYWRlci1iZycpO1xyXG4gICAgICAgICQoJy50b3AtbmF2JykucmVtb3ZlQ2xhc3MoJ2xpZ2h0LWhlYWRlcicpO1xyXG4gICAgICAgICQoJy50b3AtbmF2JykucmVtb3ZlQ2xhc3MoJ2xpZ2h0LWhlYWRlci1iZycpO1xyXG4gICAgICAgICQoJy5pY2Fld2xvZ28nKS5yZW1vdmVDbGFzcygnaWNhZXdsb2dvLWltZy1zbWFsbCcpO1xyXG4gICAgICAgICQoJy5pY2Fld2xvZ28nKS5hZGRDbGFzcygnaWNhZXdsb2dvLWltZycpO1xyXG4gICAgICAgICQoJy5ibWFuYW1lJykuYWRkQ2xhc3MoJ2hpZGUnKTtcclxuICAgICAgICAkKCcuYm1hbG9nbycpLnJlbW92ZUNsYXNzKCdoaWRlJyk7XHJcbiAgIH1cclxufSk7Il0sImZpbGUiOiJzaXRlLmpzIn0=
