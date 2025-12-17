$(function(){
    $('.div1').show().text('나 이제 보여');
    $('.div2').hide().text('나 이제 안보여');

    $('.div3').width(300);
    $('.div4').height(100);

    $('.div5').fadeIn(1000); //fast, slow
    $('.div6').fadeOut(1000); //fast, slow
    $('.div7').fadeTo(3000, .3); //3s동안 .3 opacity까지 fadeOut

    $('#div8').slideDown();
    $('#div9').slideUp();

    $('.div10').animate({left: 400, top:400}).animate({top:300});

    $('.div11').animate({left: 500}, 2000).animate({left:10}, 500);
    $('.div12').delay(2500).animate({bottom: 500}).animate({bottom:10});


    $('.stick').animate({bottom: 50}, 1000).animate({bottom: 40}, 500).animate({bottom:100}, 300);
    $('.whiteBall').delay(1800).animate({bottom: 470}, 500);
    $('.ball1').delay(2220).animate({bottom: 770}, 800).animate({bottom: 600, left: 210}, 2000);
    $('.ball2').delay(2250).animate({bottom: 770, left:180},800).animate({bottom: 700, left: 150}, 2000);
    $('.ball3').delay(2250).animate({bottom: 770, left: 450},800).animate({bottom: 550, left: 470}, 2000);

})