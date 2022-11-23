$(document).ready(function () { //문서준비이벤트

    //header 고정
  /*   $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('#header').addClass('fix')
        } else {
            $('#header').removeClass('fix')
        }
    
    }); */

    //베스트 슬라이드
    const best_all = new Swiper('.best_all', {

        centeredSlides: false,  // 첫번째 슬라이드 가운데 배치
        slidesPerView: '4',  // 한 슬라이드에 보여줄 갯수
        spaceBetween: 20,  // 슬라이드 사이 여백

        breakpoints: {

            390: {
                slidesPerView: '3.8',  // 한 슬라이드에 보여줄 갯수
                spaceBetween: 20,  // 슬라이드 사이 여백
            },

        },

        loop: true,  // 슬라이드 반복 여부
        speed: 1000  // 슬라이드 동작 속도 기본이 300인데 부드럽게 넘기기 위해 1000으로 사용

    });

});//문서준비이벤트 끝