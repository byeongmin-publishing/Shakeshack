$(document).ready(function(){  

    $(".category-contents li").eq(0).click(function(){
    // Class ="category-contents li"를 누를때

        $(".food-contents li").css("visibility", "visible");

        $.ajax({
        // ajax에서

            type : "GET",
            url:"/js/foodndrink-data.json",
            dataType: "Json",
    
            success:function(data){ 
            // 성공했을 때

                $(".food-contents li").each(function(){
                    let a = $(this).index()
                    // food-contents li 갯수 구하기

                    $(".food-title-kr").eq(a).text(data.food[0].burger.TitleKr[a]);
                    $(".food-title-en").eq(a).text(data.food[0].burger.TitleEn[a]);
                    $(".food-text").eq(a).text(data.food[0].burger.FoodText[a]);
                    $(".food-price-top").eq(a).html(data.food[0].burger.FoodTop[a]);
                    $(".food-price-bot").eq(a).html(data.food[0].burger.FoodBot[a]);
                });

            },
            error:function(){
            // 실패했을때

                console.log("error");
                // console에 error 입력
            }
        });  

        return false;
    }); 



    $(".category-contents li").eq(1).click(function(){
        // event.preventDefault();
        $(".food-contents li:gt(1)").css("visibility", "hidden");
        $.ajax({
            type : "GET",
            url:"/js/foodndrink-data.json",
            dataType: "Json",  
            success:function(data){
                $(".food-contents li").each(function(){
                    let a = $(this).index()
                    $(".food-title-kr").eq(a).text(data.food[0].chicken.TitleKr[a]);
                    $(".food-title-en").eq(a).text(data.food[0].chicken.TitleEn[a]);
                    $(".food-text").eq(a).text(data.food[0].chicken.FoodText[a]);
                    $(".food-price-top").eq(a).html(data.food[0].chicken.FoodTop[a]);
                    $(".food-price-bot").eq(a).html(data.food[0].chicken.FoodBot[a]);
                    });
            },
            error:function(){
                console.log("error");
            }
        }); 
        return false; 
    }); 



    $(".category-contents li").eq(1).click(function(){
        // event.preventDefault();
        $(".food-contents li:gt(1)").css("visibility", "hidden");
        $.ajax({
            type : "GET",
            url:"/js/foodndrink-data.json",
            dataType: "Json",  
            success:function(data){
                $(".food-contents li").each(function(){
                    let a = $(this).index()
                    $(".food-title-kr").eq(a).text(data.food[0].chicken.TitleKr[a]);
                    $(".food-title-en").eq(a).text(data.food[0].chicken.TitleEn[a]);
                    $(".food-text").eq(a).text(data.food[0].chicken.FoodText[a]);
                    $(".food-price-top").eq(a).html(data.food[0].chicken.FoodTop[a]);
                    $(".food-price-bot").eq(a).html(data.food[0].chicken.FoodBot[a]);
                    });
            },
            error:function(){
                console.log("error");
            }
        }); 
        return false; 
    }); 


});