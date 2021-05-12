$(document).click(function (event) {
  var $target = $(event.target);
  if (
    !$target.closest(".header-menu").length &&
    $(".nav-menu").is(":visible") &&
    window.innerWidth <= 768
  ) {
    $(".nav-menu").hide();
  }
});

$(".menu-mobile").click(function () {
  $(".nav-menu").toggle();
});
$('.nav-menu .btn-close').click(function(){
  $(".nav-menu").hide();

})
$("#book-items").slick({
  infinite: false,
  dots: true,
  arrows: false,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        // centerMode: false,
        slidesToScroll: 1,
        variableWidth: true,
        centerPadding: 0,
      },
    },
  ],
});

$("#guide-items").slick({
  infinite: false,
  dots: true,
  arrows: false,
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        centerPadding: 0,
      },
    },
  ],
});

$("#news-items").slick({
  infinite: false,
  dots: true,
  arrows: false,
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        centerPadding: 0,
      },
    },
  ],
});

$("#customer-items").slick({
  infinite: false,
  dots: true,
  arrows: false,
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding: 0,
      },
    },
  ],
});
