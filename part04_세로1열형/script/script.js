/* eslint-disable */

$(function () {

    $("li.mainLi").mouseover(function(){

        $(this).children("ul.subMenu").stop().slideDown(300);
//      $("ul.subMenu").stop().slideDown(800); 가로전체형 코드
        /* 추가 기능 */

    });


    $("li.mainLi").mouseout(function(){


        $(this).children("ul.subMenu").stop().slideUp(800);
//        $("ul.subMenu").stop().slideUp(800); 가로전체형 코드

    });


});
