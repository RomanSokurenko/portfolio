$(function () {
  $(".burger__btn").on("click", function () {
    $(".burger__btn").toggleClass("is-active");
  });
  $(".burger__btn").on("click", function () {
    $(".menu").toggleClass("menu--active");
  });
  var mixer = mixitup(".content");
});
