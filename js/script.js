// dir
var bodyDir = $('body').css('direction')
console.log(bodyDir)
var dirAr
if (bodyDir == "rtl") {
  dirAr = true
  console.log('dir' + dirAr)
  $('.owl-carousel').addClass('owl-rtl')
}
else {
  dirAr = false
  console.log('dir' + dirAr)
}

// loader
$('#loading').fadeOut(3000);

// owl carousel
$(document).ready(function () {

  $(".hero-sec .owl-carousel").owlCarousel({
    nav: false,
    autoplay: false,
    autoplayHoverPause: true,
    responsiveClass: true,
    items: 1,
    rtl: dirAr,
    animateIn: 'fadeInLeft',
    dots: true,
    margin: 20
  });

  $('.services .owl-carousel').owlCarousel({
    margin: 20,
    responsiveClass: true,
    rtl: dirAr,
    nav: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      }
    }
  });

  $('.reviews .owl-carousel').owlCarousel({
    center: true,
    loop: true,
    autoplay: true,
    // margin: 16,
    responsiveClass: true,
    rtl: dirAr,
    nav: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      }
    }
  });

});

// scroll to top page
var btn_top = $('#scrollUp');
$(window).scroll(function () {
  if ($(window).scrollTop() > 300) {
    btn_top.show();
  } else {
    btn_top.hide();
  }
});

new WOW().init();
