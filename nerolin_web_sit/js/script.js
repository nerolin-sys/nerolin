$(function () {
  $(".hamburger").click(function () {
    $(".hamburger").toggleClass("open");
    $(".header_nav-sp").fadeToggle();
  });
});
