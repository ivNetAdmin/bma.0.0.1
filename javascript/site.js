$(window).scroll(function() {    
   var scroll = $(window).scrollTop();

   if (scroll >= 10) {
       $(".top-nav").addClass("light-header");
   } else {
       $(".top-nav").removeClass("light-header");
   }
});