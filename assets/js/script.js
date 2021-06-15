function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

$(document).click(function (event) {
  var $target = $(event.target);
  if (
    !$target.closest(".header-menu").length &&
    $(".nav-menu").is(":visible") &&
    window.innerWidth <= 992
  ) {
    $(".nav-menu").hide();
  }
});

$(document).scroll(function (event) {
  if (window.innerWidth > 992) {
    var scroll = $(window).scrollTop();
    if (scroll > 454) {
      $(".form-search").addClass("stick-top");
    } else {
      $(".form-search").removeClass("stick-top");
    }
  }
});

$(".filter-tour-bg").click(function () {
  $(".filter-tour").hide();
});

$(".filter-tour-header .close").click(function () {
  $(".filter-tour").hide();
});
$(".menu-mobile").click(function () {
  $(".nav-menu").toggle();
});
$(".nav-menu .btn-close").click(function () {
  $(".nav-menu").hide();
});

$(".nav-menu-item .toggle-child").click(function () {
  $(this).toggleClass("rotate-90");
  $(this).parent().parent().find(".sub-menus").toggle();
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
  var current = parent.find(".input-quantity-number").html() * 1;
  var newQty = number + current > 1 ? number + current : 1;
  parent.find(".input-quantity-number").html(newQty);
  parent.find("input").val(newQty);
});
$(document).ready(function () {
  if ($(".selectFrom")) {
    console.log($(".selectFrom"));
    $(".selectFrom").select2({
      placeholder: "Chọn điểm đến",
      // minimumResultsForSearch: -1,
    });
  }

  if ($(".selectType")) {
    $(".selectType").select2({
      placeholder: "Hình thức du lịch",
      // minimumResultsForSearch: -1,
    });
  }
});

$(function () {
  if ($("#slider-range").slider) {
    $("#slider-range").slider({
      range: true,
      min: 0,
      step: 100000,
      max: 2000000,
      values: [0, 2000000],
      slide: function (event, ui) {
        $("#slider-range-input").val(ui.values[0] + "-" + ui.values[1]);
        $("#slider-range-value").html(
          numberWithCommas(ui.values[0]) +
            " vnd - " +
            numberWithCommas(ui.values[1]) +
            " vnd"
        );
      },
    });
  }
  if (document.getElementById("pickRange")) {
    new Litepicker({
      element: document.getElementById("pickRange"),
      singleMode: false,
      tooltipText: {
        one: "ngày",
        other: "ngày",
      },
      tooltipNumber: (totalDays) => {
        return totalDays;
      },
    });
  }

  if (document.getElementById("dateTo")) {
    new Litepicker({
      element: document.getElementById("dateTo"),
      lockDaysFilter: function (d) {
        var to = document.getElementById("dateFrom");
        if (to.value) {
          return (
            d.getTime() + 24 * 60 * 60 * 1000 < new Date(to.value).getTime()
          );
        }
        return d.getTime() + 24 * 60 * 60 * 1000 < new Date().getTime();
      },
    });
  }
  if (document.getElementById("dateFrom")) {
    new Litepicker({
      element: document.getElementById("dateFrom"),
      lockDaysFilter: function (d) {
        var to = document.getElementById("dateTo");
        if (to.value) {
          return (
            d.getTime() > new Date(to.value).getTime() ||
            d.getTime() + 24 * 60 * 60 * 1000 < new Date().getTime()
          );
        }
        return d.getTime() + 24 * 60 * 60 * 1000 < new Date().getTime();
      },
    });
  }
  if (document.getElementById("dateReturn")) {
    new Litepicker({
      element: document.getElementById("dateReturn"),
      lockDaysFilter: function (d) {
        return d.getTime() + 24 * 60 * 60 * 1000 < new Date().getTime();
      },
    });
  }
});
$("#checkbox").change(function (e) {
  const checked = $(this).is(":checked");
  $("button.submit").prop("disabled", !checked);
});
$("#openFilter").click(function () {
  $(".filter-tour").show();
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
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        // centerMode: false,
        slidesToScroll: 2,
        variableWidth: true,
        centerPadding: 0,
      },
    },
  ],
});

$("#promo-items").slick({
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
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        // centerMode: false,
        slidesToScroll: 2,
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
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        // centerMode: false,
        slidesToScroll: 2,
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
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        // centerMode: false,
        slidesToScroll: 2,
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
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        centerPadding: 0,
      },
    },
  ],
});

$("#top-location").slick({
  infinite: false,
  dots: true,
  arrows: false,
  slidesToShow: 5,
  slidesToScroll: 5,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding: 0,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        centerPadding: 0,
      },
    },
  ],
});

$("#detail-banner").slick({
  infinite: false,
  dots: true,
  arrows: false,
  slidesToShow: 1,
  slidesToScroll: 1,
});

$("#home-banner").slick({
  infinite: false,
  dots: true,
  arrows: false,
  slidesToShow: 1,
  slidesToScroll: 1,
});
var currentTime = 0;
function setCountTime(time, cb) {
  setInterval(function () {
    time = time - 1;
    currentTime = time;
    if (time <= 0) {
      cb();
      $("#time-count").html("");
    } else {
      $("#time-count").html(time + "s");
    }
  }, 1000);
}

$("#sendOTP").click(function () {
  var phone = $("#phoneNumber").val();
  var phonePre = $("#phonePre").val();

  setTimeout(function () {
    $("#resend").css("opacity", 0.5);
    $("#resend").css("cursor", "bane");
    $("#sendOTP").hide();
    $("#inputOTP").show();
    setCountTime(30, function () {});
  }, 1000);
  // sentOtp()
});

$("#resend").click(function () {
  if (currentTime > 0) {
    alert("Hãy đợi đủ 30s để hệ thống gửi lại OTP");
    return;
  }
});

$(".tabs .tab").click(function () {
  $(this).parent().find(".tab").removeClass("active");
  $(this).addClass("active");
  var idTarget = $(this).data("target");
  $(".tab-content").hide();
  $(idTarget).show();
});

$(".page-menu a").click(function () {
  $(this).parent().find("a").removeClass("active");
  $(this).addClass("active");
  var idTarget = $(this).data("target");
  var classParent = $(this).data("parent");
  $(classParent).hide();
  $(idTarget).show();
  if (!$(idTarget).hasClass("slick-initialized")) {
    setTimeout(function () {
      $(idTarget).slick({
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
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 2,
              // centerMode: false,
              slidesToScroll: 2,
              variableWidth: true,
              centerPadding: 0,
            },
          },
        ],
      });
    }, 100);
  }
});
