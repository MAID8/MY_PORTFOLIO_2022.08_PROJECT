
# 2022.08 MY WEB PORTFOLIO PROJECT
#### Made Date: 2022.08.25~  //  Last Update: 2022.09.05
#### <b><i>2022.08 WEB PORTFOLIO PROJECT ver 1.33b</i></b>
<p>PC: 1920 x 1080p FHD Criterion // MOBILE: Galaxy S10+ Criterion (w: 412px, h: 869px, pixel ratio: 3.5)</p>

<br>

## 포트폴리오 링크 <br>
https://asben1.github.io/MY_PORTFOLIO_2022.08_PROJECT/
<br><p>전체 화면으로 보시는 것을 권장합니다.</p>
<br>

<br>

## 업데이트 내역
<details>

### MAJOR UPDATE - 기능 구현(+변경점)
<ul>
  <li>
    부트스트랩 기능을 아예 삭제(포기)하고 페이지를 원할하게끔 변경됨.
  </li>
  <li>
    맨 처음 페이지가 로딩시 애니메이션 추가.
  </li>
  <li>
    현재 홈페이지는 한 페이지로 구성이 되어있기 때문에 Pageable js를 사용.
  </li>
  <li>
    각 헤더 메뉴를 누르면 해당 페이지로 바로 이동하꼐끔 링크 추가.
  </li>
  <li>
    프로필(About Me) 항목에 좌-프로필 카드 / 우-스킬 카드로 구성<br>
    스킬 카드 속 언어 3가지 항목에 PERCENTAGE 애니메이션 추가(+숫자).
  </li>
  <li>
    포트폴리오 리스트는 Swiper로 구성.
  </li>
  <li>
    기존의 스타일 파일 1개로 PC와 모바일 화면으로 구성되었지만 많은 문제를 야기하여<br>
    각각의 스타일과 미디어쿼리를 따루 추가함.
  </li>
  <li>
    AOS 애니메이션 추가 예정(딜레이 포함)<br>
    https://github.com/michalsnik/aos
  </li>
  <li>
    포트폴리오 홈페이지 추가중...
  </li>
  <li>
    각 메뉴별 호버 스타일 & 애니메이션 추가.
  </li>
</ul>
<br>

### <i>UPDATE HISTORY</i>
- ver 0.90: 2022.08.25 - 초기 버전 + 피그마 시안
- ver 1.00: 2022.08.28 - 메인 타이틀 파트 파티클 Js 추가
- ver 1.10: 2022.08.29 - 프로필 항목 프로필 카드 추가
- ver 1.21: 2022.09.01 - (08/30 ~ 09/01: 1.10 -> 1.18b -> 1.20 -> 1.21) 로딩 애니메이션 추가
- ver 1.30a: 2022.09.02 - 프로필 항목 스킬 파트 숫자 애니메이션 추가
- ver 1.31a: 2022.09.03 - Style.css 파일 구성 변경 -> PC/MOBILE 스타일로 분리(+미디어쿼리)
- ver 1.32: 2022.09.04 - 전체 페이지 구성 완료, 포트폴리오 항목 추가 +README.md 구성 변경
- ver 1.33b: 2022.09.05 - 각 메뉴별 호버 스타일 & 애니메이션 추가. (추후 대폭 수정 예정)
<br>
  <p>a = Alpha, b = Beta</p>

</details>

<br>

## 문제점(갱신)
<details>
<br>
A. ★ 페이지어블 "모바일 모드"에서 각 페이지의 버튼들이 작동이 안되는 버그가 발생함. (미해결)<br>
https://github.com/Mobius1/Pageable/issues/22 
  <br><br>
  
  
B. particle과 pageable은 공생할 수가 없다 (id로만 써야 하는 상황)<br>
[충돌인지는 모르겠지만 particle과 함께 쓰면 particle 에픽트가 아예<br> pageable 뒤로 가거나 없어지는 문제가 발생했다.]<br>
-> 둘 중 하나를 포기해야 한다.<br>
=> 해결함... + fixed -> div id="particles-js"를<br>
메인 컨테이너 위에다 잡고 써야한다.<br>
프로필 컨테이너 안 프로필 카드가 브라우저 크기를 줄이면 오른쪽으로 가는 현상이 발생함

C. 부트스트랩 안쓰고 할지 아님 계속 이어서 써야할지 고민이 된다.<br>
내가 원하는 모양이 안나오는 것(모양)은 물론 자꾸 뭔가 결과물이 꼬여서 나온다.<br>

D. 부트스트랩 안에 AOS 애니메이션 적용이 안된다.<br>
<< 대안: 1. 스킬>>


</details>


<br>

## 사용한 언어 + 시안 프로그램
|JavaScript|HTML5|CSS3|FIGMA|
|---|---|---|---|

## 사용한 플러그인 Js(+라이브러리 Js)
|Swiper|Bootstrap 5|PAGEABLE|Particle|
|---|---|---|---|

<br>

------------------------------------------------------------

<br>

### 임시 메모정보
<details>

### 주요 목표 <br>
1. 반응형으로 만들어야 한다.(PC <-> Mobile)<br>
2. 부트스트랩 5를 활용해야 한다. (활용법 제대로 이해해아 한다.)

<br>

### 2022.08.31 메모
<p>결국 부트스트랩 5를 제거하고 다시 만들기로 결정(+모바일 반응형) </p>

### 2022.09.02 메모

<p>현재 여러 문제가 발생하여 처음부터 다시 만들기로 결정</p>
<p>만드는 순서: 페이지어블 -> AOS -> 로딩 -> 파티클</p>
<br>

## 개인 메모<br>
- 처음부터 포폴 홈페이지를 만들었어야 했는데<br>
개인 작품부터 만들려고 했던게 너무 <b>경솔했던</b> 것이다.<br>

- 현재 1.0 버전은 전체 틀을 잡고 어떤 방식으로 돌아갈지 구성한 것이고,<br>
모바일 크기가 잘 작동 되게끔 재구성 할 계획.<br>
(현재 내가 부트스트랩으로 구성한 페이지가 좀 문제가 많이 발생했다.)<br>
- "문제가 생각보다 훨씬 심할 경우엔 아예 싹다 갈아 엎는 방법밖에는 없을거 같은 느낌이 든다."
- "추후에 버튼 스타일(+크기) 전부 변경" & 모바일 메뉴 버튼 스타일 추가 해야한다.(+애니메이션)
