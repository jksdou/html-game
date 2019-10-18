/**
 * Created by quanchen on 2014/8/26.
 */
(function(arg)
{
    (arg.init=function(){
           //this.initialize();
        //console.log('loadingContent run');


        var loading=new loadingLib.LOADING();
        stage.addChild(loading);
        var time=setInterval(function(){

            var pro=Math.floor(loadingProgress*30);
            loading.loading_mc.gotoAndStop(Math.floor(loadingProgress*30));
            //console.log(loadingProgress,'loadingContent pro');
            if(pro>=30)
            {
                //console.log('removeChild');
                //stage.removeChild(loading);
                clearInterval(time);
            }
        },30);

        window.onresize=resizeCanvas;
        resizeCanvas();

        var defultW=640;
        var defultH=1008;
        function resizeCanvas()
        {
            var pro=defultW/defultH;
            var w=window.innerWidth;
            var h=window.innerHeight;

            if(w>h)//横屏
            {
                //root.h_mc.visible=true;
                defultW=756;
                defultH=480;
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
                defultW=480;
                defultH=756;
                if(pro>(w/h))
                {
                    scale=loading.scaleX=loading.scaleY=w/defultW;
                }
                else
                {
                    scale=loading.scaleX=loading.scaleY=h/defultH;
                }

            }

            wrongx=loading.x=(w-(scale*defultW))/2;
            loading.y=(h-(scale*defultH))/2;

            canvasLoading.width=w;
            canvasLoading.height=h;
        }

        }
    )
})(loadingContent=loadingContent||{});
var loadingContent;
/*  |xGv00|971559f9c356dc79e216704784027228 */