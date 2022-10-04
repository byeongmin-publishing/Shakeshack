$(document).ready(function(){ 

    $(".category-contents li").click(function(){
        var num = $(this).index();


        $(this).index(num).click(function(){
            console.log("88")
        });

































        return false;
    })
});