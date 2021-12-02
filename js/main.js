$(function () {
  $(".burger__line").on("click", function () {
    $(".burger__line").toggleClass("burger--active");
  });
  $(".burger__line").on("click", function () {
    $(".menu").toggleClass("menu--active");
  });
  var mixer = mixitup(".content");
});
