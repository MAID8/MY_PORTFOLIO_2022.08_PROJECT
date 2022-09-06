 // 공지사항/갤러리 tab 버튼
 $('.info-btn').click(function () {
  // 텝 초기화
  $('tab_contents, .delivery-btn, #delivery, .bank-btn, #bank').removeClass('on');
  // 표시
  $('#info, .info-btn').addClass('on');
});

 $('.delivery-btn').click(function () {
  // 텝 초기화
  $('.tab_contents, .info-btn, .bank-btn').removeClass('on');
  // 표시
  $('#delivery, .delivery-btn').addClass('on');
});

 $('.bank-btn').click(function () {
  // 텝 초기화
  $('.tab_contents, .delivery-btn, .info-btn').removeClass('on');
  // 표시
  $('#bank, .bank-btn').addClass('on');
});