$(function(){
    //$('#div1').text(); //텍스트가 머야라고 묻는 거
    //$('#div1').text(""); //안에 내용 비워
    $('#div1').text("나는 text로 내용 바뀜");
    $('#div2').html("나는 html로 내용 바뀜");
    $('#div3').text("<strong>text 메소드</strong> 내용 바꿔쓰기"); //tag적용x
    $('#div4').html("<strong>html 메소드</strong> 내용 바꿔쓰기"); //tag적용o


    //이미지 속성 변경하기
    $('#changeThis').hover(function(){
        $(this).attr('src','./img/img2.gif');
    },function(){
        $(this).attr('src','./img/img1.gif');
    }) //attribute > 속성제어


    //객체 조작 및 생성 삭지
    let srcVal = $('#sec_1 img').attr('src');
    //console.log(srcVal);
    $('#sec_1 img').attr({
        width:200, src:srcVal.replace(
        '1.png','2.png'), alt:'바위'}).removeAttr('border');

    //클래스 추가/삭제 >addId는 없음
    $('#class1').addClass('class'); //addClass라서 괄호안에 .찍으면 x
    $('#class2').removeClass('class');
    $('#class3').addClass('add');
    $('#class4').removeClass('add');


    //toggleClass - 클래스가 없으면 생성, 있으면 삭제
    $('.click').click(function(){
        $('#imgs').find('img').toggleClass('red');
    });


    //입력값 변경하기
    let b= $('#input1').val('텍스트필드값을 다시 썼음');

    $('#textarea1').val('텍스트애리아영역바꿔쓰기');
    $('#select1').val('city2');
    $('#select2').val(['town2','town3']);


    let result1 = $('#form_1 #chk2').prop('checked');
    console.log(result1); //true

    result1= $('#chk3').prop('checked', true);

    let result2 = $('#se_1').prop('selectedIndex');
    console.log(result2);  //2

    //수치
    let width1 = $('#po1').width();
    console.log(width1); //400 -> 직접 쓴 width 값
    
    let width2 = $('#po1').innerWidth();
    console.log(width2); //440 -> padding값까지 합한 값

    let width3 = $('#po1').outerWidth();
    console.log(width3); //450 -> padding+border 값까지 합한 값

    $('#po2').outerWidth(500).outerHeight(500); //변경도 ㄱㄴ
    
});