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
$(".nav-menu .btn-close").click(function () {
  $(".nav-menu").hide();
});

$(".login .tab").click(function () {
  $(".login .tab").removeClass("active");
  $(this).addClass("active");
  var target = $(this).data("target");
  $("#email-mode").hide();
  $("#phone-mode").hide();
  $("#" + target).show();
});
$(".input-group .toggle-pass").click(function () {
  var i = $(this).parent().find("input");
  if (i.attr("type") == "password") {
    i.attr("type", "text");
  } else {
    i.attr("type", "password");
  }
});

$(".input-quantity button").click(function () {
  var parent = $(this).parent();
  var number = $(this).data("qty") * 1;
  console.log(number);
  var current = parent.find(".input-quantity-number").html() * 1;
  var newQty = number + current > 1 ? number + current : 1;
  parent.find(".input-quantity-number").html(newQty);
  parent.find("input").val(newQty);
});
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
