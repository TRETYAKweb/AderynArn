$(function () {

});


$('.menu-btn').on('click', function(){
  $('.menu').addClass('active');
});

$('.clouse-btn').on('click', function(){
  $('.menu').removeClass('active');
});
// $('.menu__btn, .menu a').on('click', function () {
//   $('.menu__list, .menu__btn').toggleClass('menu__list--active');
//   $('body').toggleClass('open-menu');
// });