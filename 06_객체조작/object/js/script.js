$(function(){
    //$('#div1').text(); //텍스트가 머야라고 묻는 거
    //$('#div1').text(""); //안에 내용 비워
    $('#div1').text("나는 text로 내용 바뀜");
    $('#div2').html("나는 html로 내용 바뀜");
    $('#div3').text("<strong>text 메소드</strong> 내용 바꿔쓰기"); //tag적용x
    $('#div4').html("<strong>html 메소드</strong> 내용 바꿔쓰기"); //tag적용o


    $('#changeThis').hover(function(){
        $(this).attr('src','./img/img2.gif');
    },function(){
        $(this).attr('src','./img/img1.gif');
    }) //attribute
});