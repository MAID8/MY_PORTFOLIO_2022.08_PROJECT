// 헤더 메뉴
$(function () {
  $('.a1').click(function () {
    $('.a1').addClass('ac0'),
      $('.a1').removeClass('ac1')
    $('.a2').removeClass('ac2');
  });
  $('.a2').click(function () {
    $('.a1').addClass('ac1'),
      $('.a2').addClass('ac2'),
      $('.a1').removeClass('ac0');
  });
});


// 토글 메뉴 스타일 v1
// $(function(){
//   $('.TOI1').click(function(){
//     $('.TOI1').addClass('TOI1on'),
//     $('.TOI2').addClass('TOI2on');
//   });
//   $('.TOI2').click(function(){
//     $('.TOI2').removeClass('TOI2on'),
//     $('.TOI1').removeClass('TOI1on');
//   });

// });


// 토글 메뉴 스타일 v2
$(function () {

  $('.TOI1').click(function () {
    $('.TOI1').addClass('TOI1on'),
      $('.TOI2').addClass('TOI2on'),
      $('#TGM').addClass('Gon');
  });
  $('.TOI2').click(function () {
    $('.TOI2').removeClass('TOI2on'),
      $('.TOI1').removeClass('TOI1on'),
      $('#TGM').removeClass('Gon');
  });

});

// 검색기능
$(function () {
  const icon = document.querySelector('.SCicon');
  const search = document.querySelector('.searchPart');

  icon.onclick = (function () {
    search.classList.toggle('active');
  });
});