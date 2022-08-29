// 로딩 전용
$(function(){
    $(window).on('load',function(){
      $(".loader").fadeOut(1000);
      $(".contents").fadeIn(1000);
    });
  });