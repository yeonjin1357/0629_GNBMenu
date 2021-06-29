/* eslint-disable */

$(function () {

    $("li.mainLi").mouseover(function(){

        $(this).children("ul.subMenu").stop().fadeIn();
//      $("ul.subMenu").stop().slideDown(800); 가로전체형 코드
        /* 추가 기능 */

    });


    $("li.mainLi").mouseout(function(){


        $(this).children("ul.subMenu").stop().hide();
//        $("ul.subMenu").stop().slideUp(800); 가로전체형 코드

    });


});
