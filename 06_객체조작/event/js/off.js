$(function(){
    $('.btn1').click(function(){
        $('.btn1').parent().next().css({"color":"red"})
    });

    //tab 키를 눌러도 동작이 됨 2가지 행동?을 넣어둠
    $('.btn2').on({'mouseover focus':function(){
        $('.btn2').parent().next().css({"color":"pink"})
    }});

    $('.btn1').click();
    $('.btn2').off('mouseover focus');
});