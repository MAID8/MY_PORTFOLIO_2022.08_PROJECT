// LOADING STYLE VERSION 01
$(function(){
    $(window).on('load',function(){
      $(".loader").fadeOut(1000);
      $(".contents").fadeIn(1000);
    });
  });


// LOADING STYLE VERSION 02
$(function () {
  $(window).on('load', function () {
    function counter() {
      var count = setInterval(function () {
        var c = parseInt($('.counter').text());
        $('.counter').text((++c).toString());
        if (c >= 99) {
          clearInterval(count);
          $(".counter").addClass('hide')
          $(".preloader").addClass('active')
        }
        console.log(c);
      }, 45);
    }
    counter();
  });
});