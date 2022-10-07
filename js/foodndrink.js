$(document).ready(function(){
    $(".view-info").click(function(e){
        e.preventDefault();
        $(".store-info-bg").fadeIn(300).css("dispay", "flex");
    });
    $(".store-info-bg").click(function(e){
        e.preventDefault();
        $(this).fadeOut(300);
    });
});