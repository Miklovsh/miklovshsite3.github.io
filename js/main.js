/* begin Scroll Down Button */
(function() {
    'use strict';
  
    var btnScrollDown = document.querySelector('#scroll_down');
  
    function scrollDown() {
      var windowCoords = document.documentElement.clientHeight;
      (function scroll() {
        if (window.pageYOffset < windowCoords) {
          window.scrollBy(0, 10);
          setTimeout(scroll, 0);
        }
        if (window.pageYOffset > windowCoords) {
          window.scrollTo(0, windowCoords);
        }
      })();
    }
  
    btnScrollDown.addEventListener('click', scrollDown);
  })();
  



  $(document).ready(function(){
    $('.portfolio__slider').slick({
        arrows:true, // показать стрелки
        slidesToShow:3, // показывать по 3 слайда
    });
});