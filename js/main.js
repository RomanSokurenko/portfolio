$(function () {
  $(".burger").on("click", function () {
    $(".menu").toggleClass("menu--active");
  });

  var mixer = mixitup(".content");
});
