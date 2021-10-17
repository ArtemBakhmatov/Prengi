$(document).ready(function(){
      $('.promo__slider').slick({
        autoplay: true,
        autoplaySpeed: 2500,
        arrows: false,
    });

    $('.decisions__slider').slick({
      speed: 1200,
      adaptiveHeight: true,
      prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.svg"></button>',
      nextArrow: '<button type="button" class="slick-next"><img src="icons/right.svg"></button>',
  });
});