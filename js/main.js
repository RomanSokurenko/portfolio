$(function () {
  $(".menu a").on("click", function (event) {
    event.preventDefault();
    var id = $(this).attr("href"),
      top = $(id).offset().top;
    $("body,html").animate({ scrollTop: top }, 1500);
  });

  $(".burger__line").on("click", function () {
    $(".burger__line").toggleClass("burger--active");
  });
  $(".burger__line, .menu a").on("click", function () {
    $(".menu").toggleClass("menu--active");
  });
  var mixer = mixitup(".content");
});
window.onscroll = function showHeader() {
  var header__nav = document.querySelector(".header__nav");

  if (window.pageYOffset > 100) {
    header__nav.classList.add("header__fixed");
  } else {
    header__nav.classList.remove("header__fixed");
  }
};
