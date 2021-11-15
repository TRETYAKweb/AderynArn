$(function () {

  $('.reviews__list').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,
    dots: true,
  });

});

$('.menu-btn').on('click', function () {
  $('.menu').addClass('active');
});

$('.clouse-btn').on('click', function () {
  $('.menu').removeClass('active');
});

// new Swiper({
//   el: '#reviews-slider',
//   slidesPerView: 3,
// });


// $('.menu__btn, .menu a').on('click', function () {
//   $('.menu__list, .menu__btn').toggleClass('menu__list--active');
//   $('body').toggleClass('open-menu');
// });