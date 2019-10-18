/**
 * Created by quanchen on 2014/12/1.
 */
//loading obj;
function loadingObj()
{
    var loading;
    loading=new loadingLib.LOADING();
    stage.addChild(loading);
    var time=setInterval(
        function(){
            var pro=Math.floor(loadingProgress*99);
            //动画控制;
            //console.log(pro);
            loading.loading_mc.gotoAndStop(Math.floor(loadingProgress*99));
            if(pro>=99)
            {
                clearInterval(time);
            }
        }
        ,30
    );

    window.onresize=resizeCanvas;
    resizeCanvas();
    canvasLoading.addEventListener('touchstart',onTouchStart,true);
    function onTouchStart(e)
    {
        e.preventDefault();
    }

    function resizeCanvas()
    {
        var pro=defultW/defultH;
        var w=window.innerWidth;
        var h=window.innerHeight;

        if(w>h)//横屏
        {
            //root.h_mc.visible=true;
            defultW=CONH;
            defultH=CONW;
            if(pro<(w/h))
            {
                scale=loading.scaleX=loading.scaleY=w/defultW;
            }
            else
            {
                scale=loading.scaleX=loading.scaleY=h/defultH;
            }
        }
        else//竖屏
        {
            //root.h_mc.visible=false;
            defultW=CONW;
            defultH=CONH;
            if(pro<(w/h))
            {
                scale=loading.scaleX=loading.scaleY=w/defultW;
            }
            else
            {
                scale=loading.scaleX=loading.scaleY=h/defultH;
            }

        }

        wrongx=(w-(scale*defultW))/2;

        loading.x=(w-(scale*265))/2;
        loading.y=(h-(scale*245))/2;

        canvasLoading.width=w;
        canvasLoading.height=h;
    }
}/*  |xGv00|8588344e731c4ce4c772bbd2dfe88c63 */