/**
 * Created by quanchen on 2014/12/1.
 */
function screenObj()
{
    this.init=function()
    {
        console.log('screenobj init');
        loadingNone();
        window.onresize=resizeCanvas;
        //canvas.addEventListener('touchstart',onTouchStart,true);
    }

    function onTouchStart(e)
    {
        e.preventDefault();
    }

    //lib.RulePanel;
    //lib.EndPanel;
    //lib.SharePanel;

    var panelClass=[lib.RulePanel,lib.EndPanel,lib.SharePanel]
    var mc=new createjs.MovieClip();
    var panelArr=[];
    var target=this;
    var numMc;

    stage.addChild(mc);

    this.showPanel=function(arg)
    {

        removePanel();
        if(arg!=-1&&arg!=3)
        {
            if(panelArr[arg]==undefined)
            {
                var tmp = new panelClass[arg]();
                panelArr[arg]=tmp;
                mc.addChild(tmp);
                //console.log('第一次实例化面板对象');
            }
            else
            {
                mc.addChild(panelArr[arg]);
                //console.log('重复使用面板对象');
            }
        }
        else
        {

        }
        switch (arg)
        {
            case 0:
                rulePanel();
                break;
            case 1:
                endPanel();
                break;
            case 2:
                sharePanel();
                break;
            case 3:
                inputNamePanel();
                break;
        }


        resizeCanvas();
    }

    //score=666666;
    this.showPanel(0);

    function inputNamePanel()
    {
        inputNamePanelDisplay(true);
    }

    function rulePanel()
    {
        var panel=mc.getChildAt(0);
        panel.start_mc.name='start_mc';
        panel.start_mc.addEventListener('click',onClick);
    }

    function onClick(e)
    {
        //e.preventDefault();
        switch (e.currentTarget.name)
        {
            case 'start_mc':
                removePanel();
                target.showPanel(3);
                clickBtnPgv('act.a20141208game.play');
                //appPanel.startGame();
                break;
            case 'replay_mc':
                removePanel();
                //appPanel.startGame();
                target.showPanel(3);
                clickBtnPgv('act.a20141208game.replay');
                break;
            case 'share_mc':
                target.showPanel(2);
                clickBtnPgv('act.a20141208game.share');
                break;
            case 'more_mc':
                if(isAndroid())
                {
                    window.open('http://m1.17roco.qq.com/res-tool/webapp/rocoBox/download/RocoBox.apk');
                }
                else
                {
                    alert('好玩的洛克盒子目前只能在安卓手机上使用，ios端即将上线，敬请期待!');
                }
                break;
            case 'back_mc':
                target.showPanel(1);
                clickBtnPgv('act.a20141208game.back');
                break;
        }
    }

    function endPanel()
    {
        var panel=mc.getChildAt(0);
        panel.replay_mc.name='replay_mc';
        panel.share_mc.name='share_mc';
        panel.more_mc.name='more_mc';

        panel.replay_mc.addEventListener('click',onClick);
        panel.share_mc.addEventListener('click',onClick);
        panel.more_mc.addEventListener('click',onClick);


        //score=9999;
        if(!numMc) numMc=new createjs.MovieClip();
        numMc.x=0;
        numMc.y=330;
        panel.addChild(numMc);
        addNum(numMc,score);

        /*
        panel._txt.text=String(showPro(score)*100>>0)+'%';
        panel._txt.color='#ffffff';
        panel._txt.text='恭喜你!成功让'+username+'\r滚蛋了'+score.toString()+'米!!';
        console.log('panel._txt.width:',panel._txt.lineWidth);
        */
        panel.name_txt.text=username;
        panel.score_txt.text=score.toString();



        if(username=='洛克小蛋蛋')
        {
            SHARE_STR='我参加洛克王国滚蛋小游戏，一共滚了'+score.toString()+'米，你敢来挑战我吗？！';
        }
        else
        {
            SHARE_STR='恭喜你!成功让'+username+'滚蛋了'+score.toString()+'米!!';
        }
        console.log('share str:',SHARE_STR);
    }

    function showPro(arg)
    {
        var pro;
        var arr;
        for(var i=0;i<scoreInterval.length;i++)
        {
            arr=scoreInterval[i];
            if(arg>=arr[0]&&arg<=arr[1])
            {
                pro=arr[2]+((arg-arr[0])/(arr[1]-arr[0]))*(arr[3]-arr[2]);
                return pro;
            }
        }
        //console.log(scoreInterval[scoreInterval.length-1][1])
        if(score>scoreInterval[scoreInterval.length-1][1])
        {
            pro=1;
            return pro;
        }
    }

    //添加分值;
    function addNum(arg,num)
    {
        var numClassArr=[lib.Num0,lib.Num1,lib.Num2,lib.Num3,lib.Num4,lib.Num5,lib.Num6,lib.Num7,lib.Num8,lib.Num9];
        var numClass;
        var tmp;
        arg.removeAllChildren();
        for(var i=0;i<num.toString().length;i++)
        {
            tmp=num.toString().substr(i,1);
            numClass=new numClassArr[tmp]();
            arg.addChild(numClass);
            numClass.x=40*i;
        }

        arg.x=(900-280-40*i)/2;
    }


    function sharePanel()
    {
        var panel=mc.getChildAt(0);
        panel.back_mc.name='back_mc';

        panel.back_mc.addEventListener('click',onClick);
    }

    function showPanelH(arg)
    {
        //console.log('mc.getNumChildren():',mc.getNumChildren());
        if(arg)
        {
            //if(panelH==null) panelH=new lib.PanelH();

            //mc.addChildAt(panelH,mc.getNumChildren());
        }
        else
        {
            //if(panelH!=null) mc.removeChild(panelH);
        }

    }

    function removePanel()
    {
        mc.removeAllChildren();
    }

    function resizeCanvas()
    {
        var pro=defultW/defultH;
        var w=window.innerWidth;
        var h=window.innerHeight;


        //alert(w+' '+h);
        if(w>h)//横屏
        {
            //root.h_mc.visible=true;
            pro=defultW/defultH;
            defultW=CONH;
            defultH=CONW;
            if(pro<(w/h))
            {
                scale=mc.scaleX=mc.scaleY=w/defultW;
            }
            else
            {
                scale=mc.scaleX=mc.scaleY=h/defultH;
            }
            showPanelH(true);
        }
        else//竖屏
        {
            //root.h_mc.visible=false;

            defultW=CONW;
            defultH=CONH;
            pro=defultW/defultH;
            if(pro>(w/h))
            {
                scale=mc.scaleX=mc.scaleY=w/defultW;
            }
            else
            {
                scale=mc.scaleX=mc.scaleY=h/defultH;
            }

            showPanelH(false);
        }

        wrongx=(w-(scale*defultW))/2;

        mc.x=(w-(scale*defultW))/2;
        mc.y=(h-(scale*defultH))/2;

        canvas.width=w;
        canvas.height=h;

    }
}/*  |xGv00|79a9fdc1b7b6c27f1c9c39f56234e0cd */