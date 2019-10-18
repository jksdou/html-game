/**
 * Created by fierayan on 2014/11/13.
 */


// 渐显元素
function showElement(){
    switch (pageNumber){
        case 1:
        case 2:
            var currentPage=pageNumber;
            if(isFlip[currentPage]===2){
                setTimeout(function(){
                    $(".p"+currentPage+"__f_des").addClass("fadeIn");
                },1000);
                setTimeout(function(){
                    $(".p"+currentPage+"__main").addClass("fadeIn");
                },1500);
                setTimeout(function(){
                    $(".p"+currentPage+"__f_band").addClass("fadeIn");
                    $(".p"+currentPage+"__f_1").addClass("fadeIn");
                    $(".p"+currentPage+"__f_2").addClass("fadeIn");
                },2000);
                setTimeout(function(){
                    $(".p"+currentPage+"__f_avatar_1").addClass("fadeIn");
                },2500);
                setTimeout(function(){
                    $(".p"+currentPage+"__f_bubble_1").addClass("bubble_show");
                },3000);
            }else{
                setTimeout(function(){
                    $(".p"+currentPage+"__b_des").addClass("fadeIn");
                },1000);
                setTimeout(function(){
                    $(".p"+currentPage+"__b_band").addClass("fadeIn");
                    $(".p"+currentPage+"__b_1").addClass("fadeIn");
                    $(".p"+currentPage+"__b_2").addClass("fadeIn");
                },1500);
                setTimeout(function(){
                    $(".p"+currentPage+"__b_avatar_1").addClass("fadeIn");
                },2000);
                setTimeout(function(){
                    $(".p"+currentPage+"__b_bubble_1").addClass("bubble_show");
                },2500);
                setTimeout(function(){
                    $(".p"+currentPage+"__b_avatar_2").addClass("fadeIn");
                },3000);
                setTimeout(function(){
                    $(".p"+currentPage+"__b_bubble_2").addClass("bubble_show");
                },3500);
            }
            break;
        case 3:
            var currentPage=pageNumber;
            if(isFlip[currentPage]===2){
                setTimeout(function(){
                    $(".p"+currentPage+"__f_des").addClass("fadeIn");
                },1000);
                setTimeout(function(){
                    $(".p"+currentPage+"__main").addClass("fadeIn");
                },1500);
                setTimeout(function(){
                    $(".p"+currentPage+"__f_band").addClass("fadeIn");
                    $(".p"+currentPage+"__f_1").addClass("fadeIn");
                    $(".p"+currentPage+"__f_2").addClass("fadeIn");
                },2000);
                setTimeout(function(){
                    $(".p"+currentPage+"__f_avatar_1").addClass("fadeIn");
                },2500);
                setTimeout(function(){
                    $(".p"+currentPage+"__f_bubble_1").addClass("bubble_show");
                },3000);
                setTimeout(function(){
                    $(".p"+currentPage+"__f_avatar_2").addClass("fadeIn");
                },3500);
                setTimeout(function(){
                    $(".p"+currentPage+"__f_bubble_2").addClass("bubble_show");
                },4000);
                setTimeout(function(){
                    $(".p"+currentPage+"__f_avatar_3").addClass("fadeIn");
                },4500);
                setTimeout(function(){
                    $(".p"+currentPage+"__f_bubble_3").addClass("bubble_show");
                },5000);
                setTimeout(function(){
                    $(".p"+currentPage+"__f_avatar_4").addClass("fadeIn");
                },5500);
                setTimeout(function(){
                    $(".p"+currentPage+"__f_bubble_4").addClass("bubble_show");
                },6000);
            }else{
                setTimeout(function(){
                    $(".p"+currentPage+"__b_des").addClass("fadeIn");
                },1000);
                setTimeout(function(){
                    $(".p"+currentPage+"__b_band").addClass("fadeIn");
                    $(".p"+currentPage+"__b_1").addClass("fadeIn");
                    $(".p"+currentPage+"__b_2").addClass("fadeIn");
                },1500);
                setTimeout(function(){
                    $(".p"+currentPage+"__b_avatar_1").addClass("fadeIn");
                },2000);
                setTimeout(function(){
                    $(".p"+currentPage+"__b_bubble_1").addClass("bubble_show");
                },2500);
                setTimeout(function(){
                    $(".p"+currentPage+"__b_avatar_2").addClass("fadeIn");
                },3000);
                setTimeout(function(){
                    $(".p"+currentPage+"__b_bubble_2").addClass("bubble_show");
                },3500);
                setTimeout(function(){
                    $(".p"+currentPage+"__b_avatar_3").addClass("fadeIn");
                },4000);
                setTimeout(function(){
                    $(".p"+currentPage+"__b_bubble_3").addClass("bubble_show");
                },4500);
            }
            break;
        case 4:
            setTimeout(function(){
                $(".p4__t_1").addClass("riseUp");
            },500);
            setTimeout(function(){
                $(".p4__t_2").addClass("riseUp");
            },700);
            setTimeout(function(){
                $(".p4__t_3").addClass("riseUp");
            },900);
            setTimeout(function(){
                $(".p4__hourglass").addClass("fadeIn");
            },2500);
            setTimeout(function(){
                $(".p4__t_4").addClass("fadeIn");
            },3500);
            break;
        case 5:
            setTimeout(function(){
                $(".p5__t_1").addClass("riseUp");
            },500);
            setTimeout(function(){
                $(".p5__t_2").addClass("riseUp");
            },700);
            setTimeout(function(){
                $(".p5__t_3").addClass("riseUp");
            },900);
            setTimeout(function(){
                $(".p5__lantern").addClass("fadeIn swing");
            },1600);
            setTimeout(function(){
                $(".p5__t_4").addClass("riseUp");
                //$(".p5__lantern").addClass("swing");
            },2500);
            setTimeout(function(){
                $(".p5__act-wrap").addClass("fadeIn");
                $(".p5__print-wrap").on("touchstart",function(){
                    $(".p5__scanner").css("display","none");
                    $(".p5__scanner").removeClass("scanner");
                    $(".p5__print").css("opacity","1");
                    setTimeout(function(){
                        showTheLast=1;
                        screenForward();
                    },500);
                });
            },3500);
            break;
        default :
            break;
    }
}
// 隐藏内容
function hideContent(){
    var currentPage=pageNumber;
    if(isFlip[currentPage]===2){
        $(".p"+currentPage+"__of").css("opacity","0");
    }else{
        $(".p"+currentPage+"__ob").css("opacity","0");
    }
}
// 显示内容
function showContent(){
    var currentPage=pageNumber;
    if(isFlip[currentPage]==1){
        setTimeout(function(){
            $(".p"+currentPage+"__of").css("opacity","1");
        },1000);

    }else{
        setTimeout(function(){
            $(".p"+currentPage+"__ob").css("opacity","1");
        },1000);
    }
}

// 翻转图片
function flipCard(){
    var selectorMain=".p"+pageNumber+"__main";
    var selectorFI=".p"+pageNumber+"__f_img";
    var selectorBI=".p"+pageNumber+"__b_img";

    if(isFlip[pageNumber]===2){
        // 转到反面

        // 正面元素消失
        hideContent();

        // 背面元素显示
        showContent();

        // 照片翻转
        $(selectorMain).addClass("flip");

        if(bIsAndroid){
            $(selectorFI).addClass("fadeOut");
            $(selectorBI).addClass("fadeIn");
        }else{
            $(selectorBI).css("z-index","3");
            setTimeout(function(){
                $(selectorFI).css("display","none");
            },500);
        }

        // 背景变色
        $(".content-li").eq(pageNumber).addClass("fliped");

        // 显示指引
        setTimeout(function(){
            $(".notice-swipe-up").addClass("swipeMove");
        },1200);

        // 修改参数
        isFlip[pageNumber]=1;

        // 后面元素显示
        showElement();
    }else{

        // 转回正面

        // 背面元素消失
        hideContent();

        // 正面元素显示
        showContent();

        $(selectorMain).removeClass("flip");

        if(bIsAndroid){
            $(selectorFI).removeClass("fadeOut");
            $(selectorBI).removeClass("fadeIn");
        }else{
            $(selectorBI).css("z-index","1");
            setTimeout(function(){
                $(selectorFI).css("display","block");
            },500);
        }

        $(".content-li").eq(pageNumber).removeClass("fliped");
        isFlip[pageNumber]=2;

    }


}

// 滑动屏幕操作相关

// 上一屏
function screenBack(){

    var translateString,transitionString;
    pageNumber--;

    if(pageNumber<0){
        pageNumber=0;
    }
    currentDistance=screenHeight*pageNumber;
    translateString="translate3d(0, -"+currentDistance+"px, 0)";
    transitionString="all 0.5s ease-in";

    contentList.css({"-webkit-transform":translateString,"transform":translateString,"-webkit-transition":transitionString,"transition":transitionString});
}

// 下一屏
function screenForward(){

    var translateString,transitionString;
    pageNumber++;

    if(!showTheLast && pageNumber===6){
        pageNumber=5;
    }

    if(pageNumber>6){
        pageNumber=6;
    }
    currentDistance=screenHeight*pageNumber;
    translateString="translate3d(0, -"+currentDistance+"px, 0)";
    transitionString="all 0.5s ease-in";

    contentList.css({"-webkit-transform":translateString,"transform":translateString,"-webkit-transition":transitionString,"transition":transitionString});

    // 显示元素
    showElement();

    // 显示引导
    if(pageNumber!==6 ){
        if(pageNumber===5){
            if(showTheLast){
                setTimeout(function(){
                    $(".notice-swipe-up").addClass("swipeMove");
                },800);
            }
        }else{
            setTimeout(function(){
                $(".notice-swipe-up").addClass("swipeMove");
            },800);
        }

    }else{
      $(".notice-swipe-up").css("display","none");
    }
}

function startTouch(event) {
    if (!event.touches.length) {
        return;
    }
    tmpEndY = 0;
    var touch = event.touches[0];
    tmpStartY = touch.pageY;
}

function moveTouch(event) {
    event.preventDefault();
    if (!event.touches.length) {
        return;
    }
    var touch = event.touches[0];
    tmpEndY = touch.pageY;
}

// 触摸结束时判断执行上翻或者下翻
function endTouch() {
    var endY = tmpEndY;
    var startY = tmpStartY;
    if (endY && endY !== startY && endY-startY<=-25) {
        console.log(pageNumber+":"+isFlip[pageNumber]);
        if(isFlip[pageNumber]<=1){
            screenForward();
            $(".notice-swipe-up").removeClass("swipeMove");

        }else{
            flipCard();
        }

    }else if(endY && endY !== startY && endY-startY>=25){
        console.log(pageNumber+":"+isFlip[pageNumber]);
        if(!isFlip[pageNumber] || isFlip[pageNumber]===2){
            screenBack();
        }else{
            flipCard();
        }

    }
}

// 滑动相关 end

// 预加载图片

function preImg(ele){
    var img_src=$(ele).css("background-image");
    img_src=img_src.split("(")[1].split(")")[0];
    var preImg=new Image();
    preImg.src=img_src;
    return preImg;
}

// 正式开始

// 定义变量
var screenHeight=$(window).height();
var pageNumber=0;
var currentDistance=0;
var contentList=$(".content-list");
var tmpEndY,tmpStartY;
var isFlip=[0,2,2,2,0,0,0];
var showTheLast=0;


// 判断是否安卓

var sUserAgent = navigator.userAgent.toLowerCase();
var bIsAndroid = sUserAgent.match(/android/i) == "android";

// 判断是否短屏手机
var isShort;
if($(window).height()<=416){
    isShort=true;
}


// 每一页高度自适应
$(".content-li").each(function () {
    $(this).css("height", $(window).height());
});

// 长屏幕增加背景
if(screenHeight>504){
    var gapHeight=(screenHeight-504)/2;
    $(".p5__extra").css({"top":-gapHeight,"height":gapHeight+5});
    $(".p6__extra").css({"top":-gapHeight,"height":gapHeight+5});
}

// 首屏动画
setTimeout(function(){
    $(".p0__bubble").addClass("riseUp");
},500);
setTimeout(function(){
    $(".p0__t_1").addClass("riseUp");
},800);
setTimeout(function(){
    $(".p0__t_2").addClass("riseUp");
},1000);
setTimeout(function(){
    $(".p0__t_3").addClass("riseUp");
},1200);


// 绑定翻页
contentList.on("touchstart",function(e){
    startTouch(e);
});
contentList.on("touchmove",function(e){
    moveTouch(e);
});
contentList.on("touchend",function(e){
    endTouch(e);
});

// 载入后显示指引
setTimeout(function(){
    $(".notice-swipe-up").addClass("swipeMove");
},500);

// 显示分享浮层
$(".p6__share-btn").on("tap",function(){
    $(".speaker").css("display","none");
    $(".share-mask").css({"display":"block","-webkit-transition":"display 0.3s ease-in","transition":"display 0.3s ease-in"});
    setTimeout(function(){
        $(".share-mask").css("display","none");
        $(".speaker").css("display","block");
    },1500);
});

// 控制声音
$(".speaker").on("click",function(){
    var audioEle=document.querySelector("audio");
    if(audioEle.paused){
        $(".speaker").removeClass("speaker_muted");
        audioEle.play();
    }else{
        $(".speaker").addClass("speaker_muted");
        audioEle.pause();
    }
});


