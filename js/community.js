$(document).ready(function () { //문서준비이벤트

//header 고정
$(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
        $('#header').addClass('fix')
    } else {
        $('#header').removeClass('fix')
    }

});


//tap
$('.fallow_all > div:not(:first-child)').hide();
$('.fallow_name > li').click(function () {
    $(this).addClass('active').siblings().removeClass('active');
    let indexNum = $(this).index();
    $('.fallow_all > div').eq(indexNum).show().siblings().hide();
});

});//문서준비이벤트 끝