$(document).ready(function () {
  // navigation click actions
  $('.scroll-link').on('click', function (event) {
    event.preventDefault();
    var sectionID = $(this).attr("data-id");
    scrollToID('#' + sectionID, 750);
  });
  // scroll to top action
  $('.scroll-top').on('click', function (event) {
    event.preventDefault();
    $('html, body').animate({
      scrollTop: 0
    }, 'slow');
  });
  // mobile nav toggle
  $('#nav-toggle').on('click', function (event) {
    event.preventDefault();
    $('#main-nav').toggleClass("open");
  });

  // Swiper
  var mySwiper = new Swiper('.swiper-container', {
    pagination: '.swiper-pagination',
    paginationClickable: true,
    touchReleaseOnEdges: true,
    grabCursor: true,
    loop: true,
    autoplay: 3200,
    speed: 800,
    autoplayDisableOnInteraction: false,
  });

  $('#refill').on('click', function (event) {
    $('#rsvp_form').show();
    $('#refill').hide();
  });

});
// scroll function
function scrollToID(id, speed) {
  var offSet = 50;
  var targetOffset = $(id).offset().top - offSet;
  var mainNav = $('#main-nav');
  $('html,body').animate({
    scrollTop: targetOffset
  }, speed);
  if (mainNav.hasClass("open")) {
    mainNav.css("height", "1px").removeClass("in").addClass("collapse");
    mainNav.removeClass("open");
  }
}
if (typeof console === "undefined") {
  console = {
    log: function () {}
  };
}