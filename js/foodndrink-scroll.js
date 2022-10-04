$(window).scroll(function () { 
// 스크롤 했을때

    if($(this).scrollTop() > 600){
    // 스크롤 값이 600보다 클경우

        $(".food").addClass("on")
        // 푸드에 클래스 on
    }
});