$(document).ready(function(){
  $('.bxslider').bxSlider ({
  });

  $(window).scroll(function(){
      if($(window).scrollTop() < 100) {
          $('.site-nav').removeClass('attached');
      } else {
          $('.site-nav').addClass('attached');
      }
  });
});
