// PAGEABLE ONLY
let pageable = new Pageable("#container", {
  // infinite: true,
}); // <- = API
console.log(pageable);


pageable.orientate("vertical");


// Swiper

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});