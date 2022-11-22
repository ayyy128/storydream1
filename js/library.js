$(document).ready(function () { //문서준비이벤트


    //tap
$('.library_all > div:not(:first-child)').hide();
$('.library_list > li').click(function () {
    $(this).addClass('active').siblings().removeClass('active');
    let indexNum = $(this).index();
    $('.library_all > div').eq(indexNum).show().siblings().hide();
});

});//문서준비이벤트 끝