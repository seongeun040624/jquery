$(function(){
    $('.btn1').on({"mouseover":function(){
        $('.txt1').css({
            background:"yellow",
            border:"2px solid #f00",
            padding:"2px"
        });
    },"mouseout":function(){
        $('.txt1').css({
            background:"none",
            border:"none",
            padding:0
        });
    }});

    $('.btn2').hover(function(){
        $('.txt2').css({
            background:"pink",
            border:"2px solid rgba(16, 200, 44, 1)",
            padding:"2px"
        });
    },function(){
         $('.txt2').css({
            background:"none",
            border:"none",
            padding:"0"
        });
    });
});