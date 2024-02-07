$(document).ready(function() {
  $('.nav__btn').on('click', function(e) {
    $('.nav__list').toggleClass("is-active");
    e.preventDefault();
  });


  $('.nav__list--second .nav__list--item').on('click', function(e) {
    $(this).parent().toggleClass("is-active");
    e.preventDefault();
  });


  // $('.nav__phone').on('click', function(e) {
  //   $('.nav__phone--numbers').trigger('click');
  //   e.preventDefault();
  // });
})
