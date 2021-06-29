/* eslint-disable */

$(function(){

    /* 1차 기능 */
    $("li.mainLi").mouseover(function(){

        $("ul.subMenu").stop().slideDown(800);
        /* 추가 기능 */

    });


    $("li.mainLi").mouseout(function(){

        $("ul.subMenu").stop().slideUp(800);

    });

    /* .stop() 메서드는 메모리 유지기능을 소멸시켜서 사용자의 이벤트가 즉시 종료되는 기능*/
});
