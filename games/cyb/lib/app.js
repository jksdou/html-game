/**
 * Created by quanchen on 2014/8/26.
 */
(function(arg)
{
    (arg.init=function(){
        //this.initialize();
        console.log('app run');

        //var loading=new loadingLib.LOADING();
        //stage.addChild(loading);
        var mc=new createjs.MovieClip();

        var story=new lib.STORY();//情节1;
        var story1;//情节2;
        var main;//游戏主画面;
        var end;//
        var hmc;//横屏;

        var numArrClass=[lib.NUM0,lib.NUM1,lib.NUM2,lib.NUM3,lib.NUM4,lib.NUM5,lib.NUM6,lib.NUM7,lib.NUM8,lib.NUM9];

        //游戏设定;
        //1 2 3 随机;
        var TIMESARRCON=[1,1,2,2,3,3,3,4,4,5,5];
        var timesArr=[1,1,2,2,3,3,3,4,4];
        var moonPlayTimesArr=[];//记录月饼飞行时间;
        var score=0;
        var starNum=5;
        var mainTime;//延迟数据记录;
        var shootTime=550;//

        //end;
        var isShare=false;

        stage.addChild(mc);

        //test;
        //gotoMain();
        //gotoEnd();

        gotoStroy();
        var defultW=640;
        var defultH=1008;
        window.onresize=resizeCanvas;
        resizeCanvas();

        hmc=new lib.HMC();

        function resizeCanvas()
        {
            var pro = defultW / defultH;
            var w = window.innerWidth;
            var h = window.innerHeight;

            if (w > h)//横屏
            {
                //root.h_mc.visible=true;
                //hmc=new lib.HMC();
                mc.addChild(hmc);
                defultW = 756;
                defultH = 480;
                if (pro < (w / h)) {
                    scale = mc.scaleX = mc.scaleY = w / defultW;
                }
                else {
                    scale = mc.scaleX = mc.scaleY = h / defultH;
                }
            }
            else//竖屏
            {
                //root.h_mc.visible=false;
                //if(hmc)
                //{
                mc.removeChild(hmc);

                //}
                defultW = 480;
                defultH = 756;
                if (pro > (w / h)) {
                    scale = mc.scaleX = mc.scaleY = w / defultW;
                }
                else {
                    scale = mc.scaleX = mc.scaleY = h / defultH;
                }

            }

            wrongx = mc.x = (w - (scale * defultW)) / 2;
            mc.y = (h - (scale * defultH)) / 2;

            canvas.width = w;
            canvas.height = h;
        }

        function gotoStroy()
        {
            mc.addChild(story);
            canvas.addEventListener('touchstart',onTouchStart,true);
            story._mc.mc0.name='mc0';
        }

        function onTouchMove(e)
        {
            var touch=e.touches[0];
            //console.log('touch.pageY:'+touch.pageY);

            var pro=1-(touch.pageY/scale-260)/380;
            pro=Math.ceil(pro*14);
            if(pro>=14) pro=14;
            story._mc.mc1.gotoAndStop(pro);
            //console.log('pro:'+pro);
        }

        function onTouchEnd(e)
        {
            var touch=e.touches[0];
            //console.log(story._mc.mc1)
            canvas.removeEventListener('touchmove',onTouchMove,true);
            canvas.removeEventListener('touchend',onTouchEnd,true);
            if(story._mc.mc1.currentFrame==14)
            {
                story._mc.mc1.gotoAndPlay(14);
                mcFrame(story._mc.mc1,33,gotoStory1)
            }
            else
            {
                story._mc.gotoAndStop(0);
                if(story._mc.tips_mc) story._mc.removeChild(story._mc.tips_mc);
                canvas.addEventListener('touchstart',onTouchStart,true);
            }
        }

        function onTouchStart(e)
        {
            e.preventDefault();
            var touch=e.touches[0];
            var obj=checkClickArr(touch,[story._mc.mc0]);
            if(obj.click==true)
            {
                if(obj.mcname=='mc0')
                {
                    canvas.addEventListener('touchmove',onTouchMove,true);
                    canvas.addEventListener('touchend',onTouchEnd,true);
                    canvas.removeEventListener("touchstart", onTouchStart,true);
                    console.log('mouse down mc0');
                    story._mc.gotoAndStop(1);
                }
            }
        }

        //故事1切换到故事2;
        function gotoStory1()
        {
            console.log('gotoStory1');
            mc.removeChild(story);
            story1=new lib.STORY1();
            mc.addChild(story1);

            //85 95 99 112;
            mcFrame(story1,85,story1NextFun);
            mcFrame(story1,95,story1NextFun);
            mcFrame(story1,99,story1NextFun);
            mcFrame(story1,112,story1NextFun);
        }

        function story1NextFun()
        {
            story1.next_mc.name='next_mc';
            canvas.addEventListener('touchstart',onStory1TouchStart,true);
        }

        function onStory1TouchStart(e)
        {
            e.preventDefault();
            var touch=e.touches[0];
            var obj=checkClickArr(touch,[story1.next_mc]);
            if(obj.click==true)
            {
                if(obj.mcname=='next_mc')
                {
                    canvas.removeEventListener("touchstart", onStory1TouchStart,true);
                    if(story1.currentFrame==112)
                    {
                        gotoMain();
                    }
                    else
                    {
                        story1.play();
                    }
                }
            }
        }

        //游戏主画面;
        function gotoMain()
        {
            if(story1) mc.removeChild(story1);
            if(end) mc.removeChild(end);
            main=new lib.MAIN();
            mc.addChild(main);

            main.hand_mc.visible=true;
            setTimeout(function(){
                main.hand_mc.visible=false;
                mainShowCannon();
            },2000);

            canvas.addEventListener('touchstart',onMainTouchStart,true);
            /*
            setInterval(function(){
                mainShowCannon();
            },4000);
            */
            timesArr=TIMESARRCON.slice(0);
            starNum=5;
            score=0;

            //main._txt.text=score.toString();

            setNum(main.num_mc,score,1);
            main.num_mc.x=530-score.toString().length*50;
            var star;
            for(var i=0;i<starNum;i++)
            {
                star=new lib.STAR();
                star.y=i*40;
                main.star_mc.addChild(star);
            }

            SHARE_STR='你收到一份来自月球的思念和祝福!快快点击体验吧！';
        }

        function mainRemoveStar()
        {

            starNum-=1;
            main.star_mc.removeChildAt(0);
            if(starNum==0)
            {
                mainRemove();
                setTimeout(gotoEnd,500);
            }
            console.log('mainRemoveStars');

        }

        function onMainTouchStart(e)
        {
            e.preventDefault();
            var touch=e.touches[0];
            mainHitMoon();
            //console.log('touch');
        }

        function mainHitMoon()
        {
            if(main.moon_mc.currentFrame>=10&&main.moon_mc.currentFrame<=13)
            {
                score+=1;
                //main._txt.text=score.toString();
                setNum(main.num_mc,score,1);
                main.num_mc.x=530-score.toString().length*50;
                main.rabbits_mc.gotoAndStop(1);
                playSound2();
                main.moon_mc.gotoAndStop(0);

                clickBtnPgv('act.html5MidAutumn.hit');
            }
            else
            {
                if(main.moon_mc.currentFrame!=0)
                {
                    removeMcFrame(main.moon_mc,13);
                    mainRemoveStar();
                }
                main.rabbits_mc.gotoAndStop(2);
                clickBtnPgv('act.html5MidAutumn.miss');
            }
            setTimeout(function(){
                main.rabbits_mc.gotoAndStop(0);
            },200);
        }

        //开始展示火炮;
        function mainShowCannon()
        {
            var times=0;
            if(timesArr.length!=0)//循序渐进;
            {
                times=timesArr[0];
                timesArr.splice(0,1);

                moonPlayTimesArr=[];
                var tmp;
                for(var i=0;i<times;i++)
                {
                    tmp=1+Math.floor(Math.random()*2);
                    moonPlayTimesArr.push(tmp*shootTime);
                }
                mainPlayCannon(moonPlayTimesArr.slice(0));

                if(timesArr.length==0)timesArr=TIMESARRCON.slice(0);
            }
            else//随机;
            {

            }

        }
        //播放炮弹;
        function mainPlayCannon(arr)
        {
            var tmp=0;
            var l=arr.length;
            var num=arr.length;
            tmp-=arr[0];
            for(var i=0;i<l;i++)
            {
                tmp+=arr[0];
                arr.splice(0,1);

                mainTime=setTimeout(function(){
                    playSound0();
                    main.cannon_mc._mc.mc0.gotoAndPlay(1);
                    num-=1
                    if(num==0)//
                    {
                        //console.log(moonPlayTimesArr.slice(0));
                        mainPlayMoon(moonPlayTimesArr.slice(0));
                    }
                },tmp);
            }

        }
        //播放月饼;
        function mainPlayMoon(arr)
        {
            mainTime=setTimeout(function(){
                var tmp=0;
                var l=arr.length;
                var num=arr.length;
                for(var i=0;i<l;i++)
                {
                    tmp+=arr[0];
                    arr.splice(0,1);
                    mainTime=setTimeout(function(){
                        playSound1();
                        main.moon_mc.gotoAndPlay(1);
                        mcFrame(main.moon_mc,13,function(){
                            mainRemoveStar();
                        })
                        num-=1;
                        if(num==0)//开启下一个大炮;
                        {
                            mainTime=setTimeout(mainShowCannon,1000);
                        }
                    },tmp);
                }
            },500);
        }

        function mainRemove()
        {
            clearTimeout(mainTime);
            canvas.removeEventListener('touchstart',onMainTouchStart,true);
        }

        //
        function gotoEnd()
        {
            SHARE_STR='你插中了'+score.toString()+'枚从月球飞来的月饼，快快与你的家人一起享用吧！';

            mc.removeChild(main);
            end=new lib.END();
            mc.addChild(end);

            mcFrame(end,59,endEndFrame);
        }

        function endRemove()
        {

            canvas.removeEventListener('touchstart',onEndTouchStart,true);
        }

        function endEndFrame()
        {
            //end._txt0.text=score.toString();
            //score=55;
            setNum(end.num_mc,score,1);
            setNum(end.num0_mc,score,0.5);
            end.num_mc.x=25+(640-score.toString().length*50)/2;
            end.num0_mc.x=25*0.5+(430-score.toString().length*50*0.5)/2;
            //end._txt1.text=score.toString();

            end.restart_mc.name='restart_mc';
            end.share_mc.name='share_mc';
            canvas.addEventListener('touchstart',onEndTouchStart,true);
        }

        function onEndTouchStart(e)
        {
            e.preventDefault();
            var touch=e.touches[0];
            var obj=checkClickArr(touch,[end.restart_mc,end.share_mc]);

            if(obj.click==true&&!isShare)
            {
                if(obj.mcname=='restart_mc')
                {
                    endRestartFun();
                }
                else if(obj.mcname=='share_mc')
                {
                    endShareFun();
                }
            }
            else if(isShare)
            {
                isShare=false;
                //end.bg_mc.visible=false;
                //end.tips_mc.visible=false;
                console.log('end.children:'+end.children.length)
                end.removeChildAt(end.children.length-1);
                end.removeChildAt(end.children.length-1);
            }
        }

        function endRestartFun()
        {
            gotoMain();
            endRemove();
            clickBtnPgv('act.html5MidAutumn.restart');
        }

        function endShareFun()
        {
            isShare=true;
            var bg=new lib.SHAREBG();
            var tips=new lib.SHARETIPS();

            end.addChild(bg);
            end.addChild(tips);
            tips.x=480-60+(((window.innerWidth-(480*scale))/2)/scale);
            clickBtnPgv('act.html5MidAutumn.share');
        }

        //指定MC 指定帧 添加函数;
        function mcFrame(mc,frame,fun)
        {
            clearInterval(mc['num'+frame.toString()]);
            var num=setInterval(function(){
                if(mc.currentFrame==frame)
                {
                    clearInterval(mc['num'+frame.toString()]);
                    fun();
                }
            },30);
            mc['num'+frame.toString()]=num;
        }

        function removeMcFrame(mc,frame)
        {
            clearInterval(mc['num'+frame.toString()]);
        }

        function setNum(arg,argNum,argScale)
        {
            var l=arg.children.length;
            for(var i= 0;i<l;i++)
            {
                arg.removeChildAt(0);
            }
            var str=argNum.toString();
            var num;
            for(var i=0;i<str.length;i++)
            {
                num=new numArrClass[Number(str.substr(i,1))]();
                num.scaleX=num.scaleY=argScale;
                arg.addChild(num);
                num.x=argScale*55*i;
            }
        }
    })
})(app=app||{});
var app;
/*  |xGv00|6242571a97844cc978495a430881fa4c */