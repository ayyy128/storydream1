$(document).ready(function () { //문서준비이벤트

  //header 고정
  $(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
        $('#header').addClass('fix');
        $('.depth2_bg').addClass('on');
    } else {
        $('#header').removeClass('fix');
        $('.depth2_bg').removeClass('on');
    }

});

    //메인배너 슬라이드
    const mb = new Swiper('.mb', {

        autoplay: {
            delay: 5000,  // 슬라이드가 머무르는 시간, 5000=5초
            disableOnInteraction: false,  // false로 설정하면 스와이프 후 자동 재생이 비활성화 되지 않음
        },

        navigation: {
            nextEl: '.swiper-button-next',  // 다음 버튼
            prevEl: '.swiper-button-prev',  // 이전 버튼
        },

        pagination: {
            el: '.swiper-pagination',  // 버튼 태그 설정
            type: 'fraction',  // 버튼 종류 설정 'bullets' 기본 동그란 모양 | 'fraction' 숫자 | 'progressbar' 슬라이드 위쪽에 생성
            clickable: true,  // 버튼 클릭 여부
        },

        loop: true,  // 슬라이드 반복 여부
        speed: 1000  // 슬라이드 동작 속도 기본이 300인데 부드럽게 넘기기 위해 1000으로 사용
    });

    //완독률 슬라이드

    const up_today = new Swiper('.up_today', {

        centeredSlides: false,  // 첫번째 슬라이드 가운데 배치
        slidesPerView: '3.8',  // 한 슬라이드에 보여줄 갯수
        spaceBetween: 20,  // 슬라이드 사이 여백

        loop: true,  // 슬라이드 반복 여부
        speed: 1000  // 슬라이드 동작 속도 기본이 300인데 부드럽게 넘기기 위해 1000으로 사용

    });

    const up_month = new Swiper('.up_month', {

        centeredSlides: false,  // 첫번째 슬라이드 가운데 배치
        slidesPerView: '3.8',  // 한 슬라이드에 보여줄 갯수
        spaceBetween: 20,  // 슬라이드 사이 여백

        loop: true,  // 슬라이드 반복 여부
        speed: 1000  // 슬라이드 동작 속도 기본이 300인데 부드럽게 넘기기 위해 1000으로 사용

    });

    const short_today = new Swiper('.short_today', {

        centeredSlides: false,  // 첫번째 슬라이드 가운데 배치
        slidesPerView: '3.8',  // 한 슬라이드에 보여줄 갯수
        spaceBetween: 20,  // 슬라이드 사이 여백

        loop: true,  // 슬라이드 반복 여부
        speed: 1000  // 슬라이드 동작 속도 기본이 300인데 부드럽게 넘기기 위해 1000으로 사용

    });

    const short_month = new Swiper('.short_month', {

        centeredSlides: false,  // 첫번째 슬라이드 가운데 배치
        slidesPerView: '3.8',  // 한 슬라이드에 보여줄 갯수
        spaceBetween: 20,  // 슬라이드 사이 여백

        loop: true,  // 슬라이드 반복 여부
        speed: 1000  // 슬라이드 동작 속도 기본이 300인데 부드럽게 넘기기 위해 1000으로 사용

    });


    $('.option_1 li:nth-child(2)').hide();

    $('.option_1 li').click(function () {
        $(this).siblings().toggle();
    });





    $('.day_all > div:not(.view1)').hide();

    $('.option1,.option2').change(function () {
        let result1 = $('.option1 option:selected').val();
        let result2 = $('.option2 option:selected').val();

        if ((result1 == 'opt1_1') && (result2 == 'opt2_1')) {
            $('.view1').show();
            $('.view2,.view3,.item4').hide();
        } else if ((result1 == 'opt1_1') && (result2 == 'opt2_2')) {
            $('.view2').show();
            $('.view1,.view3,.view4').hide();
        } else if ((result1 == 'opt1_2') && (result2 == 'opt2_1')) {
            $('.view3').show();
            $('.view1,.view2,.view4').hide();
        } else if ((result1 == 'opt1_2') && (result2 == 'opt2_2')) {
            $('.view4').show();
            $('.view1,.view2,.view3').hide();
        } else { 
            return false();
        }
    });


    //드림이 선택한 판타지 슬라이드
    const review = new Swiper('.review', {

        centeredSlides: false,  // 첫번째 슬라이드 가운데 배치
        slidesPerView: '4.2',  // 한 슬라이드에 보여줄 갯수
        spaceBetween: 20,  // 슬라이드 사이 여백

        loop: true,  // 슬라이드 반복 여부
        speed: 1000  // 슬라이드 동작 속도 기본이 300인데 부드럽게 넘기기 위해 1000으로 사용

    });



    // dream_best
    $('.best dd').hide();
    $('.best_list1 > div:nth-child(2) dd').show();
    $('.best_list2 > div:nth-child(1) dd').show();
    $('.best_list3 > div:nth-child(2) dd').show();
    $('.best_list4 > div:nth-child(3) dd').show();

    $('.best dl dt').click(function () {
        $(this).siblings('dd').slideDown();
        $(this).parents('.best').siblings().find('dd').slideUp();
    });

    //best_all
    const best_all = new Swiper('.best_all', {

        centeredSlides: false,  // 첫번째 슬라이드 가운데 배치
        slidesPerView: '3.8',  // 한 슬라이드에 보여줄 갯수
        spaceBetween: -10,  // 슬라이드 사이 여백

        loop: true,  // 슬라이드 반복 여부
        speed: 1000  // 슬라이드 동작 속도 기본이 300인데 부드럽게 넘기기 위해 1000으로 사용

    });

    //tag 슬라이드

    const tag_list1 = new Swiper('.tag_list1', {

        centeredSlides: false,  // 첫번째 슬라이드 가운데 배치
        slidesPerView: '3.2',  // 한 슬라이드에 보여줄 갯수
        spaceBetween: 20,  // 슬라이드 사이 여백

        navigation: {
            nextEl: '.swiper-button-next',  // 다음 버튼
            prevEl: '.swiper-button-prev',  // 이전 버튼
        },

        breakpoints: {

            768: {
                slidesPerView: '3',  // 한 슬라이드에 보여줄 갯수
                spaceBetween: 30,  // 슬라이드 사이 여백
            },

        },

        loop: true,  // 슬라이드 반복 여부
        speed: 1000  // 슬라이드 동작 속도 기본이 300인데 부드럽게 넘기기 위해 1000으로 사용

    });

    const tag_list2 = new Swiper('.tag_list2', {

        centeredSlides: false,  // 첫번째 슬라이드 가운데 배치
        slidesPerView: '3.2',  // 한 슬라이드에 보여줄 갯수
        spaceBetween: 20,  // 슬라이드 사이 여백

        navigation: {
            nextEl: '.swiper-button-next',  // 다음 버튼
            prevEl: '.swiper-button-prev',  // 이전 버튼
        },

        breakpoints: {

            768: {
                slidesPerView: '3',  // 한 슬라이드에 보여줄 갯수
                spaceBetween: 30,  // 슬라이드 사이 여백
            },

        },

        loop: true,  // 슬라이드 반복 여부
        speed: 1000  // 슬라이드 동작 속도 기본이 300인데 부드럽게 넘기기 위해 1000으로 사용

    });

    const tag_list3 = new Swiper('.tag_list3', {

        centeredSlides: false,  // 첫번째 슬라이드 가운데 배치
        slidesPerView: '3.2',  // 한 슬라이드에 보여줄 갯수
        spaceBetween: 20,  // 슬라이드 사이 여백

        navigation: {
            nextEl: '.swiper-button-next',  // 다음 버튼
            prevEl: '.swiper-button-prev',  // 이전 버튼
        },

        breakpoints: {

            768: {
                slidesPerView: '3',  // 한 슬라이드에 보여줄 갯수
                spaceBetween: 30,  // 슬라이드 사이 여백
            },

        },

        loop: true,  // 슬라이드 반복 여부
        speed: 1000  // 슬라이드 동작 속도 기본이 300인데 부드럽게 넘기기 위해 1000으로 사용

    });

    const tag_list4 = new Swiper('.tag_list4', {

        centeredSlides: false,  // 첫번째 슬라이드 가운데 배치
        slidesPerView: '3.2',  // 한 슬라이드에 보여줄 갯수
        spaceBetween: 20,  // 슬라이드 사이 여백

        navigation: {
            nextEl: '.swiper-button-next',  // 다음 버튼
            prevEl: '.swiper-button-prev',  // 이전 버튼
        },

        breakpoints: {

            768: {
                slidesPerView: '3',  // 한 슬라이드에 보여줄 갯수
                spaceBetween: 30,  // 슬라이드 사이 여백
            },

        },

        loop: true,  // 슬라이드 반복 여부
        speed: 1000  // 슬라이드 동작 속도 기본이 300인데 부드럽게 넘기기 위해 1000으로 사용

    });


    //tag tap
    $('.tag_all > div:not(:first-child)').hide();
    $('.tag_name > li').click(function () {
        $(this).addClass('active').siblings().removeClass('active');
        let indexNum = $(this).index();
        $('.tag_all > div').eq(indexNum).show().siblings().hide();
    });

    //new
    const new1_img1 = new Swiper('.new1_img1', {

        centeredSlides: false,  // 첫번째 슬라이드 가운데 배치
        slidesPerView: '6.5',  // 한 슬라이드에 보여줄 갯수
        spaceBetween: 20,  // 슬라이드 사이 여백

        autoplay: {
            delay: 0,  // 슬라이드가 머무르는 시간, 5000=5초
            disableOnInteraction: false,  // false로 설정하면 스와이프 후 자동 재생이 비활성화 되지 않음
            reverseDirection: false,
        },

        loop: true,  // 슬라이드 반복 여부
        speed: 5000  // 슬라이드 동작 속도 기본이 300인데 부드럽게 넘기기 위해 1000으로 사용
    });


    const new1_img2 = new Swiper('.new1_img2', {

        centeredSlides: false,  // 첫번째 슬라이드 가운데 배치
        slidesPerView: '6.5',  // 한 슬라이드에 보여줄 갯수
        spaceBetween: 20,  // 슬라이드 사이 여백

        autoplay: {
            delay: 0,  // 슬라이드가 머무르는 시간, 5000=5초
            disableOnInteraction: false,  // false로 설정하면 스와이프 후 자동 재생이 비활성화 되지 않음
            reverseDirection: true,
        },

        loop: true,  // 슬라이드 반복 여부
        speed: 5000  // 슬라이드 동작 속도 기본이 300인데 부드럽게 넘기기 위해 1000으로 사용
    });


     //리더 슬라이드

     const reader_slide = new Swiper('.reader_slide', {

        centeredSlides: false,  // 첫번째 슬라이드 가운데 배치
        slidesPerView: '4',  // 한 슬라이드에 보여줄 갯수
        spaceBetween: 20,  // 슬라이드 사이 여백

        loop: true,  // 슬라이드 반복 여부
        speed: 1000  // 슬라이드 동작 속도 기본이 300인데 부드럽게 넘기기 위해 1000으로 사용

    });







});//문서준비이벤트