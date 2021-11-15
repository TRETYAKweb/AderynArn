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

