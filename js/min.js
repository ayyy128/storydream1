$(document).ready(function(){  //문서 준비 이벤트

//제품 슬라이드
const product_list = new Swiper('.product_list', {

    autoplay: {
      delay: 5000, //5초
      disableOnInteraction: false,
    },

    slidesPerView: 3, //가로방향 슬라이드 스와이퍼사이트-데모-slidesPerView-core
    spaceBetween: 50, //슬라이드 사이의 간격(css로 줄 필요 없음)스와이퍼사이트-데모-slidesPerView-core

    loop: true,
    speed: 1000,  //1초

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

});//문서 준비 이벤트