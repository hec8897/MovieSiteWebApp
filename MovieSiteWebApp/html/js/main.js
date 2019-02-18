$(document).ready(function () {
    var clickNum = 0;
    $(".ham_btn").click(function () {
        console.log(clickNum);
        clickNum++;
        if (clickNum == 1) {
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
        else {
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

function swipeEvent() {

    var outBox = document.querySelector(".contents");
    outBox.addEventListener("touchstart", eventHandle1, false)
    outBox.addEventListener("touchend", eventHandle2, false)

    var touchStart = 0;
    var touchEnd = 0;
    var touchNum = 0;

    function eventHandle1(ev) {
        touchStart = event.touches[0].clientX;
    }

    function eventHandle2(ev) {
        touchEnd = event.changedTouches[0].clientX
        var gep = touchStart - touchEnd;

        if (gep > 50 & touchNum < 8 ) {
            touchNum++;
            $(".contents").animate({
                "marginLeft":"-=42%"
            },100)
          
        }
        else if(gep < 50  & touchNum > 0 ) {
            touchNum--;
            $(".contents").animate({
                "marginLeft":"+=42%"
            },100)            
        }

        console.log(touchNum);


    }

}

swipeEvent();