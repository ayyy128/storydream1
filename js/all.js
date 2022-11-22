$(document).ready(function () { //문서준비이벤트

    //header 고정
    $(window).scroll(function () {
        if ($(this).scrollTop() > 500) {
            $('#header').addClass('fix')
        } else {
            $('#header').removeClass('fix')
        }
    
    });

    //

    $('.all_more').hide();
    $('.more_bt').click(function () {
        $('.all_more').fadeIn();
        $('.more_bt').hide();
    });

});//문서준비이벤트 끝