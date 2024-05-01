

//   $(document).ready(function () {
//     $("#cil-silder").owlCarousel({
//         loop: true,
//         nav: true,
//         dots: true,
//         scroll:auto,
//         items: 1,
//     });
// });

$(document).ready(function () {
    $("#test_item").owlCarousel({
        items: 1,
        loop: true,
        nav: false,
        dots: true,
        // scroll:auto,
    });
});

$(document).ready(function () {
    $("#post-box").owlCarousel({
        items: 3,
        dots: true,
        loop: true,
        nav: false,
    });
});

$(document).ready(function () {
    $("#logo-sec").owlCarousel({
        items: 5,
        dots: true,
        loop: true,
        nav: false,
    });
});

// hdr
$(window).scroll(function(){
    var sticky = $('.sticky'),
        scroll = $(window).scrollTop();
  
    if (scroll >= 150) sticky.addClass('fixed');
    else sticky.removeClass('fixed');
  });

  $(document).ready(function(){
    setTimeout(function(){
        $('.loader').fadeOut();
    },2000);
    var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '500');
});
})