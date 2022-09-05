// 모바일 메뉴
$(function () {
  $(".a123").click(function () {
    $(" .MToggle").addClass('active');
  });
  $(".ax").click(function () {
    $(".MToggle").removeClass('active');
  });
});

// 모바일 스킬 보기
$(function () {
  $(".showSkills").click(function () {
    $(".mySkills").addClass('active');
  });
  $(".closeSkill").click(function () {
    $(".mySkills").removeClass('active');
  });
});

// PAGEABLE PART
let pageable = new Pageable("#container", {

  onFinish: function (data) {
    // do something when scrolling ends
    console.log('페이지 이동 완료');
    console.log(data.index); // 페이지 번호(0부터 시작)
    let pageNum = data.index;
    $("#container section")
      .eq(pageNum)
      .find('.ProfileNSkills, .mySkills, .swiper, .cont1, .snsLink1, .snsLink2, .commonInfoPC_OUTRO, .commonInfoM_OUTRO, .outroText , .outroTextM ')
      .addClass('aos-animate')

    $('.circle1, .circle2, .circle3').trigger('click')
  },
});

/**
  *  $("#container section 움직일 요소명")
  *  이동할 페이지의 요소에 aos 액션(class)를 추가 aos-animate
  * 
*/

console.log(pageable);
pageable.orientate("vertical"); // <- = API


// 스킬 퍼센테이지

const circle1 = document.querySelector(".circle1");
const circle2 = document.querySelector(".circle2");
const circle3 = document.querySelector(".circle3");
const ProgValue1 = document.getElementById("skillvalue1");
const ProgValue2 = document.getElementById("skillvalue2");
const ProgValue3 = document.getElementById("skillvalue3");

let progStart1 = 0;
let progEnd1 = 88;
let progStart2 = 0;
let progEnd2 = 80;
let progStart3 = 0;
let progEnd3 = 72;
let speed = 15;


$(function () {

  ProgValue1.innerHTML = 0 + '%';
  circle1.style.background = `conic-gradient(#1064FF ${0 * 3.6}deg, #fff 0deg)`

  $(".circle1").one("click", function () {
    let progress1 = setInterval(() => {
      progStart1++;

      ProgValue1.innerHTML = progStart1 + '%';

      circle1.style.background = `conic-gradient(#1064FF ${progStart1 * 3.6}deg, #fff 0deg)`

      if (progStart1 === progEnd1) {
        clearInterval(progress1);
      }

    }, speed);
  });

});

$(function () {

  ProgValue2.innerHTML = 0 + '%';
  circle2.style.background = `conic-gradient(#ff7d03 ${0 * 3.6}deg, #fff 0deg)`

  $(".circle1").one("click", function () {
    let progress2 = setInterval(() => {
      progStart2++;

      ProgValue2.innerHTML = progStart2 + '%';

      circle2.style.background = `conic-gradient(#ff7d03 ${progStart2 * 3.6}deg, #fff 0deg)`

      if (progStart2 === progEnd2) {
        clearInterval(progress2);
      }

    }, speed);
  });

});

$(function () {

  ProgValue3.innerHTML = 0 + '%';
  circle3.style.background = `conic-gradient(#eefa00 ${0 * 3.6}deg, #fff 0deg)`

  $(".circle3").one("click", function () {
    let progress3 = setInterval(() => {
      progStart3++;

      ProgValue3.innerHTML = progStart3 + '%';

      circle3.style.background = `conic-gradient(#eefa00 ${progStart3 * 3.6}deg, #fff 0deg)`

      if (progStart3 === progEnd3) {
        clearInterval(progress3);
      }

    }, speed);
  });

});