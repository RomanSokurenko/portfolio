// document.querySelector(".burger__btn").addEventListener("click", function (e) {
//   e.preventDefault();
//   this.classList.toggle(".is-active");
// });
$(function () {
  $(".burger__btn").on("click", function () {
    $(".burger__btn").toggleClass("is-active");
  });
});

$(function () {
  $(".menu").on("click", function () {
    $(".menu").toggleClass("menu--active");
  });

  var mixer = mixitup(".content");
});
