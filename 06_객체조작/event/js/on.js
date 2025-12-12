$(function(){
    /* $('.btn1').on("mouseover focus", function(){
        console.log('hi');
    }); */

    /* $('.btn1').on({'mouseover focus': function(){
        console.log('마우스 올렸네');
    }}); */

    $('.btn1').on({'mouseover':function(){
        console.log('마우스 올렸네'); //호버

    }, 'focus':function(){
        console.log('포커스');  //탭 또는 클릭?

    }});
});