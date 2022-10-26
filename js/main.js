$(document).ready(function () {  //문서 준비 이벤트

    //모바일 메뉴 시험에 나옴

    $('.mgnb_wrap').hide();

    $('.ham').click(function (){
        $('.mgnb_wrap').fadeIn();
        $('body').css({'overflow':'hidden'}); //스크롤바 없애기
    });

    $('.close').click(function (){
        $('.mgnb_wrap').fadeOut();
        $('body').css({'overflow':'auto'}); //스크롤바 나타내기
    });
    

    //search
    $('.search').hide();

    $('.util li:nth-child(3)').click(function (){
    $('.search').slideDown();
    });

    $('.search_close').click(function (){
        $('.search').slideUp();
        });


    //제품 슬라이드
    const product_list = new Swiper('.product_list', {

        autoplay: {
            delay: 5000, //5초
            disableOnInteraction: false,
        },
        centeredSlides: true, //현재 슬라이드가 중앙에 배치 -데모-centered-core

        slidesPerView: 2, //가로방향 슬라이드 스와이퍼사이트-데모-slidesPerView-core
        spaceBetween: 20, //슬라이드 사이의 간격(css로 줄 필요 없음)스와이퍼사이트-데모-slidesPerView-core

        loop: true,
        speed: 1000,  //1초

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        breakpoints: {  // -데모-Responsive breakpoints-croe

            768: {   //min-width:300; 300px 이상에서 보이는 갯수 
                slidesPerView: 4,
                spaceBetween: 20,
            },
            1400: {
                slidesPerView: 6,
                spaceBetween: 50,
            },

        },
    });//제품슬라이드 종료

    $(window).scroll(function(){
        if ($(this).scrollTop() > 500) {
            $('#header').addClass('fix')
        } else {
            $('#header').removeClass('fix')
        }
    });

});//문서 준비 이벤트 종료