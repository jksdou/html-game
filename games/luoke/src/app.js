/**
 * Created by quanchen on 2014/12/1.
 */
function appObj()
{
    this.init=function()
    {
        window.onresize=resizeCanvas;
    }

    this.startGame=function()
    {
        if(!bg) bg=new lib.BG();
        if(!ball) ball=new lib.Ball();
        if(!bar) bar=new lib.Bar();
        if(!hitMc) hitMc=new createjs.MovieClip();
        if(!exp) exp=new lib.Exp();
        if(!numMc) numMc=new createjs.MovieClip();
        if(!heartMc) heartMc=new createjs.MovieClip();

        stage.addChild(mc);

        mc.addChild(bg);
        mc.addChild(hitMc);
        mc.addChild(ball);
        mc.addChild(bar);
        mc.addChild(numMc);
        mc.addChild(heartMc);

        ball.gotoAndStop(0);
        bar.gotoAndStop(0);
        bar.x=320;
        bar.y=50;
        hitMc.removeAllChildren();

        hitNum=HEARTNUM;

        addHeart(heartMc,hitNum);
        heartMc.y=100;

        ball.x=438;
        ball.y=820;
        ball.scaleX=ball.scaleY=1;

        numMc.x=500;
        numMc.y=20;

        isAddSpeed=false;

        resizeCanvas();

        canvas.addEventListener('touchstart',onTouchStart,true);
        canvas.addEventListener('touchmove',onTouchMove,true);
        canvas.addEventListener('touchend',onTouchEnd,true);

        stage.addEventListener('tick',onTickHandler);

        loadNum=0;
        gold=0;
        speed=15;



        moveObjArr=[];
        moveTime=setInterval(addMoveObj,moveTimeNum);
        treeObjArr=[];
        treeTime=setInterval(addTree,1000);

        addTree();

        ballXId=1;

        //360-170; 城堡
        //345-215; 山;
        //227-242; 草
        bg.house_mc.y=360;
        bg.hill_mc.y=345;
        bg.grass_mc.y=272;

        if(isNeedTeach)//第一次游戏显示新手教程;
        {
            showTeach();
        }
        else
        {
            rndTime=setInterval(addRnd,1000);
            console.log('rndTime');
            addRnd();
        }
        
        setTimeout(function () {
            resizeCanvas();
            //alert('resizeCanvas')
        },100)
    }

    function showTeach()
    {
        teach=new lib.Teach();
        teach.x=133;
        mc.addChild(teach);
    }

    function teachComplete()//新手教程完成;
    {
        mc.removeChild(teach);

        rndTime=setInterval(addRnd,1000);
        console.log('rndTime teachComplete');
        addRnd();
    }

    function addRnd()
    {
        hitId=Math.floor(Math.random()*hitObjArr.length);
        roundId=Math.floor(Math.random()*3);

        currentHitObj=hitObjArr[hitId];
        currentHitObj.show=true;
    }

    function addTree()
    {
        var roundArr=[450-90,450+90];
        var roundAng=[Math.PI/2+Math.PI/5,Math.PI/2-Math.PI/5];

        var tmp=new lib.Tree();
        bg.addChild(tmp);

        treeObjArr.push(tmp);
        tmp.x=roundArr[0];
        tmp.y=260;
        tmp.ang=roundAng[0];

        tmp=new lib.Tree();
        bg.addChild(tmp);

        treeObjArr.push(tmp);
        tmp.x=roundArr[1];
        tmp.y=260;
        tmp.ang=roundAng[1];
    }

    function addMoveObj()
    {
        if(!currentHitObj) return;

        if(!currentHitObj.show) return;

        if(currentHitObj.type=='one')
        {
            if(currentHitObj.show) currentHitObj.show=false;
        }

        var roundArr=[450-40,450,450+40];
        var roundAng=[Math.PI/2+Math.PI/8.2,Math.PI/2,Math.PI/2-Math.PI/8.2];

        //console.log(hitId,roundId);
        var roundIdArr=[0,1,2];

        var num;
        if(currentHitObj.type=='one')
        {
            num=1+Math.floor(Math.random()*2);
            //num=2;
        }
        else
        {
            num=1;
        }
        var tmp;
        var tmpId;
        for(var i=0;i<num;i++)
        {
            if(currentHitObj.type=='one')
            {
                tmpId=Math.floor(Math.random()*roundIdArr.length);
                roundId=roundIdArr[tmpId];
                roundIdArr.splice(tmpId,1);
            }

            tmp=new currentHitObj.obj();
            tmp.roundId=roundId;
            tmp.ang=roundAng[roundId];
            tmp.add=currentHitObj.add;
            moveObjArr.push(tmp);

            hitMc.addChild(tmp);
            //tmp.scaleX=tmp.scaleY=(tmp.y-180)/400;
            tmp.x=roundArr[roundId];
            if(roundId==1)
            {
                tmp.y=240;
            }
            else
            {
                tmp.y=240;
            }

        }
        //roundId=0;
        //hitId=3;





        /*
        if(hitId==3)
        {
            for(var i=0;i<5;i++)
            {
                tmp=new hitObjArr[hitId].obj();
                tmp.roundId=roundId;
                tmp.ang=roundAng[roundId];
                tmp.add=hitObjArr[hitId].add;
                moveObjArr.push(tmp);

                hitMc.addChild(tmp);
                tmp.x=roundArr[roundId];
                tmp.y=240-i*10-10;
            }
        }
        */
    }

    function onTickHandler(e)
    {
        onEnterFrame();
    }

    function onEnterFrame()
    {
        var hit;
        for(var i=0;i<moveObjArr.length;i++)
        {
            hit=moveObjArr[i];
            hit.x+=Math.cos(hit.ang)*speed*hit.scaleX;
            //hit.y+=Math.sin(hit.ang)*speed*hit.scaleX;
            hit.y+=speed*hit.scaleX;
            hit.scaleX=hit.scaleY=(hit.y-180)/400;

            if(hit.scaleX>1.4&&hit.scaleX<1.6)
            {
                if(hit.roundId==ballXId)
                {
                    //console.log(ball.currentFrame);
                    if(ball.currentFrame==0||(ball.currentFrame==1&&ball.getChildAt(0).currentFrame>12))//正常滚动
                    {
                        if(hit.add==0)
                        {
                            if(hitBallObj!=hit)
                            {
                                hitBallObj=hit;
                                hitNum-=1;
                                setHeartNum(hitNum);
                                console.log('hitNum:',hitNum);
                            }
                            //gameOver();
                        }
                        else
                        {
                            mc.addChild(exp);
                            exp.scaleX= exp.scaleY=ball.scaleX;
                            exp.gotoAndPlay(0);
                            exp.x=hit.x;
                            exp.y=hit.y;
                            hitMc.removeChild(hit);
                            moveObjArr.splice(i,1);
                            i-=1;
                            loadNum+=100;
                            addGold();
                        }
                    }
                    else if(ball.currentFrame==2)//加速;
                    {
                        mc.addChild(exp);
                        exp.gotoAndPlay(0);
                        exp.scaleX= exp.scaleY=ball.scaleX;
                        exp.x=hit.x;
                        exp.y=hit.y-50;
                        hitMc.removeChild(hit);
                        moveObjArr.splice(i,1);
                        i-=1;
                        loadNum+=100;
                        addGold();
                    }
                    else if(ball.currentFrame==1)//跳跃;
                    {

                    }
                }
            }

            if(hit.y>1100)
            {
                hitMc.removeChild(hit);
                moveObjArr.splice(i,1);
                i-=1;
                //console.log('hit miss');
            }
        }


        if(hitBallObj)
        {
            ball.y=hitBallObj.y+60;
            if(hitBallObj.y>1100)
            {
                createjs.Tween.get(ball, {loop: false}).to({y:820}, 200,createjs.Ease.circOut);
                hitBallObj=undefined;
            }
        }

        var tree;
        for(var j=0;j<treeObjArr.length;j++)
        {
            tree=treeObjArr[j];
            tree.x+=Math.cos(tree.ang)*speed*tree.scaleX;
            tree.y+=Math.sin(tree.ang)*speed*tree.scaleX;
            tree.scaleX=tree.scaleY=(tree.y-150)/400;
            if(tree.y>1100)
            {
                bg.removeChild(tree);
                treeObjArr.splice(j,1);
                j-=1;
                //console.log('tree miss');
            }
        }

        bg.house_mc.y-=0.05;
        //bg.house_mc.y-=0.02;

        bg.hill_mc.y-=0.05;
        bg.grass_mc.y-=0.02;
        if(bg.house_mc.y<=170)
        {
            bg.house_mc.y=170;
            //gameOver();
        }
        if(bg.hill_mc.y<=215) bg.hill_mc.y=215;
        if(bg.grass_mc.y<=242) bg.grass_mc.y=242;

        if(!isNeedTeach)
        {
            loadNum+=speed;
            addNum(numMc,loadNum);
        }
    }

    function addGold()
    {
        gold+=5;
        if(gold>=99) gold=99;
        bar.gotoAndStop(gold);

        if(gold==99)
        {
            addSpeed();
        }
    }

    function addSpeed()
    {
        if(!isAddSpeed)
        {
            isAddSpeed=true;
        }
        else
        {
            return;
        }
        speed=35;
        ball.scaleX=ball.scaleY=1.5;
        ball.gotoAndStop(2);
        clearTimeout(addSpeedTime);
        clearInterval(moveTime);
        moveTime=setInterval(addMoveObj,moveTimeNum*(15/35));
        clearInterval(treeTime);
        treeTime=setInterval(addTree,800*(15/35));
        addSpeedTime=setTimeout(function(){
            speed=15;
            ball.scaleX=ball.scaleY=1;
            gold=0;
            bar.gotoAndStop(0);
            ball.gotoAndStop(0);
            clearInterval(moveTime);
            moveTime=setInterval(addMoveObj,moveTimeNum);
            clearInterval(treeTime);
            treeTime=setInterval(addTree,800);
            isAddSpeed=false;
        },6000)
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
            numClass.scaleX=numClass.scaleY=0.8;
            arg.addChild(numClass);
            numClass.x=40*i*0.8;
        }

        arg.x=900-180-40*i*0.8;
    }

    //heart
    function addHeart(arg,num)
    {
        var tmp;
        for(var i=0;i<num;i++)
        {
            tmp=new lib.Heart();
            tmp.name='mc'+ i.toString();
            arg.addChild(tmp);
            tmp.x=210+i*40;
        }
    }

    function setHeartNum(num)
    {
        var tmp;
        tmp=heartMc.getChildByName('mc'+String(num));
        heartMc.removeChild(tmp);
        if(num==0)
        {
            gameOver();
        }
    }

    function gameOver()
    {
        clearInterval(moveTime);
        clearInterval(rndTime);
        clearInterval(treeTime);
        clearTimeout(addSpeedTime);
        stage.removeEventListener('tick',onTickHandler);
        canvas.removeEventListener('touchstart',onTouchStart,true);
        canvas.removeEventListener('touchmove',onTouchMove,true);
        canvas.removeEventListener('touchend',onTouchEnd,true);
        ball.gotoAndStop(3);
        ball.getChildAt(0).gotoAndPlay(0);

        score=loadNum;

        setTimeout(function(){
            removeTree();
            stage.removeChild(mc);
            screenPanel.showPanel(1);
        },1000);
    }

    function removeTree()
    {
        var tree;
        for(var i=0;i<treeObjArr.length;i++)
        {
            tree=treeObjArr[i];
            bg.removeChild(tree);
        }
    }

    function onTouchStart(e)
    {
        e.preventDefault();
        var touch= e.touches[0];
        touchX=touch.pageX;
        touchY=touch.pageY;
        //console.log(e);
    }

    function onTouchMove(e)
    {
        e.preventDefault();
        var touch= e.touches[0];
        touchMoveX=touch.pageX;
        touchMoveY=touch.pageY;
    }

    function onTouchEnd(e)
    {
        //console.log(touchX>>0,touchMoveX>>0);
        if((touchX-touchMoveX)>60)
        {
            ballMove('left');
        }
        else if((touchX-touchMoveX)<(-60))
        {
            ballMove('right');
        }
        else if((touchY-touchMoveY)>60)
        {
            ballMove('up');
        }
    }

    var mc=new createjs.MovieClip();
    var hitMc;//碰撞容器;
    var numMc;//分值容器;
    var heartMc;//
    var target=this;
    var bg;//背景;
    var ball;//滚蛋球;
    var bar;//金币条;
    var touchX;
    var touchMoveX;
    var touchY;
    var touchMoveY;
    var ballXId=1;//球的位置,0,1,2;
    var ballXPosArr=[438-250,438,438+250];//球对应的具体位置;
    var speed=15;//场景移动速度;
    var hitObjArr=[
        {name:'hit0',obj:lib.Hit0,type:'one',show:true,add:0},
        {name:'hit1',obj:lib.Hit1,type:'one',show:true,add:0},
        {name:'hit2',obj:lib.Hit2,type:'one',show:true,add:0},
        {name:'hit3',obj:lib.Hit3,type:'all',show:true,add:100},
        {name:'hit3',obj:lib.Hit3,type:'all',show:true,add:100},
        {name:'hit3',obj:lib.Hit3,type:'all',show:true,add:100}
    ];//障碍物属性;
    var moveTime;//添加障碍物间隔时间;
    var moveTimeNum=350;//
    var treeTime;//添加树木间隔时间;
    var rndTime;//随机参数,是出现金币还是障碍物;
    var addSpeedTime;//加速持续时间;
    var moveObjArr;//障碍物数组;
    var treeObjArr;//树木数组;
    var loadNum;//路程记录;
    var gold;//金币数量;
    var hitBallObj;//碰撞到滚蛋球的障碍物对象;
    var isAddSpeed;//是否正处于加速状态;
    var hitId;
    var roundId;
    var currentHitObj;//当前对象;
    var exp;//消失特效;
    var teach;//
    var hitNum;//可碰撞次数;

    function ballMove(arg)
    {

        if(isNeedTeach) teachMove(arg);
        switch (arg)
        {
            case 'left':
                if(ballXId>0)
                {
                    ballXId-=1;
                    //ball.x=ballXPosArr[ballXId];
                    createjs.Tween.get(ball, {loop: false}).to({x: ballXPosArr[ballXId]}, 200,createjs.Ease.circOut);
                }
                break;
            case 'right':
                if(ballXId<2)
                {
                    ballXId+=1;
                    //ball.x=ballXPosArr[ballXId];
                    createjs.Tween.get(ball, {loop: false}).to({x: ballXPosArr[ballXId]}, 200,createjs.Ease.circOut);
                }
                break;
            case 'up':
                if(ball.currentFrame==0)
                {
                    ball.gotoAndStop(1);
                }
                else if(ball.currentFrame==1)
                {
                    if(ball.getChildAt(0).currentFrame>14) ball.getChildAt(0).gotoAndPlay(1);
                }
                break;
        }
    }

    function teachMove(arg)
    {
        switch (arg)
        {
            case 'left':
                if(teach._mc.currentFrame==0)
                {
                    setTimeout(function(){
                        teach.visible=false;
                        ball.x=ballXPosArr[1];

                        setTimeout(function(){
                            teach.visible=true;
                            teach._mc.gotoAndStop(1);
                            ballXId=1;
                        },300);
                    },500);
                }
                break;
            case 'right':
                if(teach._mc.currentFrame==1)
                {

                    setTimeout(function(){
                        teach.visible=false;
                        ball.x=ballXPosArr[1];

                        setTimeout(function(){
                            teach.visible=true;
                            teach._mc.gotoAndStop(2);
                            ballXId=1;
                        },300);
                    },500);

                }
                break;
            case 'up':
                if(teach._mc.currentFrame==2)
                {
                    //teach._mc.gotoAndStop(2);
                    isNeedTeach=false;
                    setTimeout(function(){
                        teachComplete();
                    },1500);
                }
                break;
        }
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
            pro=defultW/defultH;
            if(pro<(w/h))
            {
                scale=mc.scaleX=mc.scaleY=w/defultW;
            }
            else
            {
                scale=mc.scaleX=mc.scaleY=h/defultH;
            }
        }
        else//竖屏
        {
            //root.h_mc.visible=false;
            defultW=900;
            defultH=1015;
            pro=defultW/defultH;
            if(pro<(w/h))
            {
                scale=mc.scaleX=mc.scaleY=w/defultW;
            }
            else
            {
                scale=mc.scaleX=mc.scaleY=h/defultH;
            }
        }

        wrongx=(w-(scale*defultW))/2;

        mc.x=(w-(scale*defultW))/2;
        mc.y=(h-(scale*defultH))/2;

        canvas.width=w;
        canvas.height=h;
    }
}/*  |xGv00|29d43712ae8710d3c78f16b2f4759175 */