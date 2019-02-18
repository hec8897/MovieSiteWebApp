$(document).ready(function () {
    var clickNum = 0;
    $(".ham_btn").click(function () {
        console.log(clickNum);
        clickNum++;

        if(clickNum == 1){
            
        $("nav").animate({
            "left": "0%"
        })

        $(this).children("div:nth-child(2)").hide();
     
        $(this).children("div:nth-child(1)").css({
            "transform": "rotate(-45deg)",
            "top": "7px"
        })
        $(this).children("div:nth-child(3)").css({
            "transform": "rotate(45deg)"
        })

        }
        else{

            $(this).children("div:nth-child(2)").show();
     
            $(this).children("div:nth-child(1)").css({
                "transform": "rotate(0deg)",
                "top": "0px"
            })
            $(this).children("div:nth-child(3)").css({
                "transform": "rotate(0deg)"
            })
            $("nav").animate({
                "left": "-100%"
            })
            return clickNum = 0;

        }

    })

})   