$(document).ready(function () {
    // 캘린더에서 일자 선택시
    $(".calendar>ul.cell>li button").click(function(){
        $(this).parents("li").addClass("act");
        $(this).parents("li").siblings("li").removeClass("act");
    });

    // 캘린더 팝업에서 월 선택시
    $(".popup.calendar ul li button").click(function(){
        $(this).parents("li").addClass("today");
        $(this).parents("li").siblings("li").removeClass("today");
    });

    // 쪽지 팝업
    $(".util .letter").click(function(){
        popUpOpen();
        $(".popup.letter").addClass("act");
    });

    // 탭기능
    $(".tab-in-tab ul li button").click(function(){
        $(this).parents("li").addClass("act");
        $(this).parents("li").siblings("li").removeClass("act");
    });

    // 모바일 메뉴 오픈
    $(".m-icn-menu").click(function(){
        popUpOpen();
        $(this).toggleClass("act");
        $(".popup.m-header").toggleClass("act");
    });

    $(".slide-controller .num").click(function(){
        popUpOpen();
        $(".popup.calendar").addClass("act");
    });

    // 팝업창 닫기
    $(".popup .close").click(function(){
        popUpOpen();
        $(".dimmed .popup").removeClass("act");
    });
});

// 딤창 온/오프프
function popUpOpen(){
    $(".dimmed").toggleClass("act");
};