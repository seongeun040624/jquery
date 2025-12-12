// 기본기능해제 - 하이퍼링크 차단 2가지 방법

$(function(){
    $('.btn1').click(function(e){
        e.preventDefault();
        $('.txt1').css('color','red')
    });


    $('.btn2').click(function(){
        $('.txt2').css('color','red');
        return false;
    });
});