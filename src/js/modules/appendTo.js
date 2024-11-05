function appendTo() {
  if ($(window).width() <= 768) {
    $(".nav__list").appendTo(".mobile-nav");
    $(".header__record").appendTo(".mobile-nav");
  }
}
export default appendTo;
