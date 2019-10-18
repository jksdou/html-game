var heroLayer = null;
var monsterLayer = null;
var explosionLayer = null;

var isFirstPlay = true; //是否第一次玩这个游戏
var prepareMonsterArr = [];//即将出现的怪物数组
var monsterArray = [];//已经出现的怪物
var monsterShadowArray = [];//所有已出现的怪物的影子
var delArray = [];//被砍死的怪物，准备删除
var touchLocationX = null;//触摸的X坐标位置
var positionY = null;//怪物和hero的Y坐标
var bgSprite = null; //背景图片
var shadowBatchNode = null;
var heroSprite = null; //主角
var heroShadow = null;//主角的影子
var targetX = 0;//怪物要到达的X坐标
var durationLabel = null;//时间标签
var duration = 0;//游戏坚持的时间
var hpMax = 3;
var hpLabel = null;//血量标签
var hpProgress = null;
var hp = 0;//血量
var hpNode = null;
var scoreLabel = null;//分数标签
var score = 0;//分数
var isGameOver = false;//游戏是否结束
var coolDowan = 0;//冷却时间
var skillProgress = null;//技能冷却进度条

var isSkillPeriod = false; //是否在释放技能期间
var attackDir = 0;//hero攻击的方向，0表示不再攻击，1表示向左攻击，2表示向右攻击
var response = null;
var responsefailedLabel;//请求网络失败时显示的内容
var isSharelayer = false;//是否是分享界面

var BgLayer = cc.Layer.extend({
    ctor:function(){
        this._super();
        bgSprite = cc.Sprite.create(res.bg1_jpg);
        bgSprite.setPosition(cc.p(240,400));
        bgSprite.setScale(1.6);
        this.addChild(bgSprite);
    }
});

var PlayLayer = cc.Layer.extend({

    ctor:function(){
        this._super();
        //初始化数值
        prepareMonsterArr = [];
        monsterArray = [];
        duration = 0;
        hp = hpMax;
        score = 0;
        isGameOver = false;
        coolDowan = 0;
        isSkillPeriod = false;
        attackDir = 0;
        isSharelayer = false;

        for(var i = 0;i < g_resources.length; i++){
            cc.textureCache.addImage(g_resources[i]);
        }

        var winSize = cc.director.getWinSize();
        positionY = winSize.height / 2 + 35;

        //添加背景
        /*bgSprite = cc.Sprite.create(res.bg1_jpg);
        bgSprite.setPosition(cc.p(winSize.width / 2, winSize.height / 2));
        bgSprite.setScale(1.6);
        this.addChild(bgSprite);*/

        //添加时间、血量、分数标签

        //添加血量数（爱心）
        hpNode = cc.Node.create();
        for(var i = 1; i <= hpMax; i++){
            var heart = cc.Sprite.create(res.xin_1_png);
            heart.setPosition(cc.p((hpMax -i) * 30, 0));
            hpNode.addChild(heart, 1, i);
        }
        //hpNode.setAnchorPoint(cc.p(1,1));
        hpNode.setPosition(cc.p(480 - hpMax * 30,780));
        //hpNode.setVisible(false);
        this.addChild(hpNode);

        //添加血量进度条
        /*var hpbg = cc.Sprite.create(res.hero_hp_bg_png);
        hpbg.setPosition(cc.p(winSize.width - 50,winSize.height - 60));
        hpbg.setVisible(false);
        this.addChild(hpbg);
        hpProgress = cc.ProgressTimer.create(cc.Sprite.create(res.hero_hp_png));
        hpProgress.setType(cc.ProgressTimer.TYPE_BAR);
        hpProgress.setMidpoint(cc.p(0, 0));
        hpProgress.setBarChangeRate(cc.p(1,0));
        hpProgress.setPosition(cc.p(winSize.width - 50,winSize.height - 60));
        hpProgress.setVisible(false);
        this.addChild(hpProgress,1);
        hpProgress.setPercentage(100);*/

        //添加hero精灵
        heroSprite = cc.Sprite.create(res.hero1_png);
        //heroSprite.setScale(0.8);
        heroSprite.setAnchorPoint(cc.p(0.3,0.5));
        heroSprite.setPosition(cc.p(winSize.width / 2, positionY - 10));
        //添加sword精灵
        /*swordSprite = cc.Sprite.create(res.sword1_png);
         swordSprite.setScale(1.0);
         swordSprite.setAnchorPoint(cc.p(0.48,0.5));
         swordSprite.setPosition(cc.p(winSize.width / 2, positionY + 10));
         swordSprite.setVisible(false);*/

        heroLayer.addChild(heroSprite,3);
        //heroLayer.addChild(swordSprite,3);

        //添加释放技能菜单选项
        var skillItem = cc.MenuItemImage.create(
            res.skill_png,
            res.skill_png,
            function(){
                cc.log("释放技能");
                if(heroSprite.getActionByTag(1024)==null){
                    useSkill(heroSprite.getParent());//释放技能调用的函数
                }
            },this);
        skillItem.setPosition(cc.p(240,280));
        var menu = cc.Menu.create(skillItem);
        menu.setPosition(cc.p(0,0));
        //this.addChild(menu,2);

        //添加技能冷却时间进度条


        //否是第一次进入游戏，若第一次则进入引导程序，否则直接开始游戏
        if(isFirstPlay){
            this.guidePrecess();
            isFirstPlay = false;
            var guideSprite = cc.Sprite.create(res.guide_png);
            guideSprite.setScale(1.0);
            guideSprite.setPosition(cc.p(240,200));
            this.addChild(guideSprite,1);
            guideSprite.runAction(cc.Sequence.create(cc.DelayTime.create(1.5),
                cc.FadeOut.create(1.0),cc.CallFunc.create(function(sender){
                    sender.removeFromParent();
                })));
        }
        else{
            this.initMonster();
            this.init();
        }
    },

    /**
     * 第一次游戏时的引导过程
     */
    guidePrecess:function(){
        var noticeNode = cc.Node.create();
        var noticeSprite = cc.Sprite.create(res.notice_board_png);
        noticeSprite.setPosition(cc.p(240,840));//提示窗初始化在屏幕上方
        noticeNode.addChild(noticeSprite);

        noticeSprite.runAction(cc.Sequence.create(cc.MoveTo.create(0.3,cc.p(240,400)),
            cc.MoveTo.create(0.05,cc.p(240,420)),
            cc.MoveTo.create(0.05,cc.p(240,400))));//提示窗口移动到屏幕中间

        //添加一个巫妖精灵
        var lichSprite = cc.Sprite.create(res.monster6_1_png);
        lichSprite.setPosition(cc.p(-lichSprite.getContentSize().width/2,450));//初始位置在屏幕中间左侧外
        noticeNode.addChild(lichSprite);
        this.addChild(noticeNode,3);

        var lichMoveTo = cc.moveTo(0.2,cc.p(lichSprite.getContentSize().width/2,450));
        var lichAnim = cc.Animation.create();
        for(var i = 1; i <= 4; i++){
            var frame = "res/monster6_" + i + ".png";
            lichAnim.addSpriteFrameWithFile(frame);
        }
        lichAnim.setDelayPerUnit(0.15);
        lichSprite.runAction(cc.RepeatForever.create(cc.Animate.create(lichAnim)));//播放帧动画
        lichSprite.runAction(cc.Sequence.create(cc.DelayTime.create(0.4),lichMoveTo,cc.CallFunc.create(noticeCallback)));//移动到屏幕左侧内，回调noticeCallback函数
    },

    init:function(){
        var winSize = cc.director.getWinSize();
        playIdleAction();
        var heroAttackAnim = cc.Animation.create();
        for(var i = 6; i<=8; i++){
            var heroAttackFrame = "res/hero" + i + ".png";
            heroAttackAnim.addSpriteFrameWithFile(heroAttackFrame);
        }
        heroAttackAnim.setDelayPerUnit(0.04);
        var heroAttackAction = cc.Animate.create(heroAttackAnim);

        var swordAttackAnim = cc.Animation.create();
        for(var i = 6; i<=8; i++){
            var swordAttackFrame = "res/sword" + i + ".png";
            swordAttackAnim.addSpriteFrameWithFile(swordAttackFrame);
        }
        swordAttackAnim.setDelayPerUnit(0.04);
        var swordAttackAction = cc.Animate.create(swordAttackAnim);

        var attackAction = cc.Sequence.create(heroAttackAction
            ,cc.CallFunc.create(heroAttackCallback));

        //给layer添加监听事件，点击屏幕，hero攻击怪物
        var listener = cc.EventListener.create({
            event:cc.EventListener.TOUCH_ONE_BY_ONE,
            swallowTouches: true,
            onTouchBegan:function(touch,event){
                if(isSkillPeriod || isGameOver || touch.getLocationY() > 350
                    || Math.abs(touch.getLocationX() - 240) < 20 )
                {
                    return false;
                }
                if(heroSprite.getActionByTag(1024)==null)
                {
                    touchLocationX = touch.getLocationX();
                    if(touchLocationX < 240){//向左
                        if(attackDir == 1) return false;
                        attackDir = 1;
                        heroSprite.setScaleX(-1.0);
                        //swordSprite.setScaleX(-1.0);
                    }else{//向右
                        if(attackDir == 2) return false;
                        attackDir = 2;
                        heroSprite.setScaleX(1.0);
                        //swordSprite.setScaleX(1.0);
                    }

                    heroSprite.stopAllActions();
                    heroSprite.runAction(attackAction);
                    //swordSprite.stopAllActions();
                    //swordSprite.runAction(swordAttackAction);
                }
                return true;
            }
        });
        cc.eventManager.addListener(listener,this);

        //this.scheduleUpdate();
        this.schedule(this.updateDuration,0.5,cc.REPEAT_FOREVER);
        //monsterCreater.getInstance(this);
    },

    //添加怪物精灵
    initMonster:function(){

        //for(var i = 0;i<100; i++) {
        /*var i = 0;
        prepareMonster(1.0 + i * 30, 6, 1, false);
        prepareMonster(2.0 + i * 30, 6, 1, false);
        prepareMonster(2.0 + i * 30, 6, 2, false);
        prepareMonster(3.0 + i * 30, 6, 1, false);*/
//        var i = 0;
//        var j = 1;
//            prepareMonster(1.0 * j + i * 30, 1, 2, false);
//            prepareMonster(3.0 * j + i * 30, 1, 1, false);
//            prepareMonster(4.0 * j + i * 30, 1, 1, false);
//            prepareMonster(4.0 * j + i * 30, 1, 2, false);
//            prepareMonster(5.0 * j + i * 30, 1, 1, false);
//            prepareMonster(5.0 * j + i * 30, 1, 2, false);
//            prepareMonster(6.0 * j + i * 30, 1, 0, true);
//            prepareMonster(6.5 * j + i * 30, 1, 0, true);
//            prepareMonster(7.0 * j + i * 30, 1, 0, true);
//            prepareMonster(7.5 * j + i * 30, 1, 0, true);
//            prepareMonster(8.0 * j + i * 30, 1, 0, true);
//            prepareMonster(8.5 * j + i * 30, 1, 1, true);
//            prepareMonster(8.5 * j + i * 30, 1, 2, true);
//            prepareMonster(9.0 * j + i * 30, 1, 1, true);
//            prepareMonster(9.0 * j + i * 30, 1, 2, true);
//            prepareMonster(9.5 * j + i * 30, 1, 1, true);
//            prepareMonster(9.5 * j + i * 30, 1, 2, true);
//            prepareMonster(10.0 * j + i * 30, 1, 1, true);
//            prepareMonster(10.0 * j + i * 30, 1, 2, true);
//            prepareMonster(11.0 * j + i * 30, 3, 2, false);
//            prepareMonster(14.0 * j + i * 30, 3, 1, false);
//            prepareMonster(16.0 * j + i * 30, 3, 1, false);
//            //prepareMonster(16.0 + i * 30, 3, 2, false);
//            prepareMonster(17.0 * j + i * 30, 3, 1, false);
//            prepareMonster(18.0 * j + i * 30, 3, 2, false);
//            //prepareMonster(19.0 + i * 30, 3, 1, false);
//            prepareMonster(19.0 * j + i * 30, 3, 2, false);
//            prepareMonster(20.0 * j + i * 30, 1, 1, false);
//            prepareMonster(20.0 * j + i * 30, 1, 2, false);
//            prepareMonster(20.5 * j + i * 30, 1, 1, true);
//            prepareMonster(20.5 * j + i * 30, 1, 2, true);
//            prepareMonster(21.0 * j + i * 30, 3, 2, false);
//            prepareMonster(22.0 * j + i * 30, 1, 0, true);
//            //prepareMonster(23.0 + i * 30, 3, 1, false);
//            prepareMonster(23.0 * j + i * 30, 3, 2, false);
//            prepareMonster(25.0 * j + i * 30, 2, 1, false);
//            prepareMonster(27.0 * j + i * 30, 2, 2, false);
//            prepareMonster(27.0 * j + i * 30, 1, 0, true);
//            prepareMonster(27.5 * j + i * 30, 1, 0, true);
//            prepareMonster(28.0 * j + i * 30, 1, 1, true);
//            prepareMonster(28.5 * j + i * 30, 1, 1, true);
//            prepareMonster(28.5 * j + i * 30, 1, 2, true);
//            prepareMonster(29.0 * j + i * 30, 2, 1, false);
//            prepareMonster(29.0 * j + i * 30, 2, 2, false);
//            prepareMonster(31.0 * j + i * 30, 6, 1, false);
//            //prepareMonster(32.0 + i * 30, 6, 1, false);
//            prepareMonster(32.0 * j + i * 30, 6, 2, false);
//            prepareMonster(33.0 * j + i * 30, 6, 1, false);
//        prepareMonster(34.0 * j + i * 30, 5, 2, false);
//        prepareMonster(35.0 * j + i * 30, 5, 1, false);
//        prepareMonster(35.0 * j + i * 30, 5, 2, false);
//        prepareMonster(36.0 * j + i * 30, 5, 1, false);
       // }

        //第零波
        prepareMonster(1.0, 1, 1.0, 0.0);
        prepareMonster(1.5, 1, 0.0, 0.0);
        prepareMonster(2.0, 1, 1.0, 0.0);
        prepareMonster(2.5, 1, 0.0, 0.0);
        prepareMonster(3.0, 1, 1.0, 0.0);
        prepareMonster(3.5, 1, 0.0, 0.0);
        prepareMonster(4.0, 1, 1.0, 0.0);
        prepareMonster(4.5, 1, 0.0, 0.0);
        prepareMonster(5.0, 1, 1.0, 0.0);
        prepareMonster(5.5, 1, 0.0, 0.0);
        prepareMonster(6.0, 1, 1.0, 0.0);
        prepareMonster(6.5, 1, 0.0, 0.0);
        prepareMonster(7.0, 1, 1.0, 0.0);
        prepareMonster(7.5, 1, 0.0, 0.0);
        prepareMonster(8.0, 1, 1.0, 0.0);

        //第一波
        var firstWave  = 10;
        prepareMonster(1.0 + firstWave, 1, 1.0, 0.0);
        prepareMonster(2.0 + firstWave, 1, 0.5, 0.0);
        prepareMonster(2.2 + firstWave, 1, 0.5, 1.0);
        prepareMonster(3.4 + firstWave, 1, 1.0, 1.0);
        prepareMonster(4.2 + firstWave, 1, 0.0, 0.0);
        prepareMonster(5.0 + firstWave, 1, 0.0, 0.0);
        prepareMonster(5.2 + firstWave, 1, 0.0, 1.0);
        prepareMonster(5.5 + firstWave, 1, 0.0, 0.0);
        prepareMonster(6.4 + firstWave, 1, 0.0, 1.0);
        prepareMonster(6.6 + firstWave, 1, 1.0, 0.0);
        prepareMonster(7.2 + firstWave, 1, 0.0, 0.0);
        prepareMonster(8.0 + firstWave, 1, 1.0, 0.0);
        prepareMonster(8.7 + firstWave, 1, 0.5, 0.0);
        prepareMonster(10.0 + firstWave, 1, 0.0, 1.0);
        //第二波
        var secondWave = 20;
        prepareMonster(3.0 + secondWave, 1, 1.0, 0.0);
        prepareMonster(3.5 + secondWave, 1, 0.5, 0.0);
        prepareMonster(4.5 + secondWave, 3, 0.5, 0.0);
        prepareMonster(4.6 + secondWave, 1, 1.0, 1.0);
        prepareMonster(4.9 + secondWave, 1, 0.0, 0.0);
        prepareMonster(4.9 + secondWave, 3, 1.0, 0.0);
        //prepareMonster(16.4, 1, 1.0, 0.3);
        prepareMonster(7.1 + secondWave, 1, 0.0, 1.0);
        prepareMonster(7.1 + secondWave, 3, 1.0, 0.0);
        prepareMonster(7.9 + secondWave, 3, 0.5, 0.0);
        prepareMonster(7.9 + secondWave, 1, 0.0, 1.0);
        //prepareMonster(18.1, 3, 0.0, 0.0);
        prepareMonster(8.4 + secondWave, 3, 1.0, 0.0);
        prepareMonster(8.6 + secondWave, 1, 0.5, 0.0);
        prepareMonster(9.7 + secondWave, 1, 1.0, 1.0);
        prepareMonster(10.0 + secondWave, 1, 0.5, 0.5);
        //第三波
        var thridWave = 30;
        prepareMonster(3.0 + thridWave, 1, 0.5, 1.0);
        prepareMonster(3.2 + thridWave, 1, 0.5, 0.0);
        prepareMonster(3.3 + thridWave, 3, 0.5, 0.0);
        prepareMonster(3.9 + thridWave, 2, 1.0, 0.0);
        prepareMonster(4.2 + thridWave, 3, 1.0, 0.0);
        prepareMonster(4.5 + thridWave, 1, 0.0, 0.0);
        prepareMonster(5.3 + thridWave, 1, 0.0, 1.0);
        prepareMonster(5.6 + thridWave, 2, 0.5, 0.0);
        prepareMonster(7.0 + thridWave, 1, 0.5, 1.0);
        prepareMonster(7.0 + thridWave, 3, 0.5, 0.0);
        prepareMonster(7.4 + thridWave, 3, 0.5, 0.0);
        prepareMonster(7.8 + thridWave, 2, 0.5, 0.0);
        prepareMonster(9.4 + thridWave, 2, 1.0, 0.0);
        prepareMonster(10.0 + thridWave, 2, 1.0, 1.0);
        //第四波
        var fourthWave = 40;
        prepareMonster(3.0 + fourthWave, 2, 0.5, 1.0);
        prepareMonster(3.0 + fourthWave, 1, 0.0, 0.0);
        prepareMonster(4.0 + fourthWave, 3, 1.0, 0.0);
        prepareMonster(4.5 + fourthWave, 1, 0.0, 0.0);
        prepareMonster(4.7 + fourthWave, 4, 0.0, 0.0);
        prepareMonster(4.8 + fourthWave, 3, 0.5, 0.0);
        prepareMonster(5.5 + fourthWave, 4, 1.0, 0.0);
        prepareMonster(5.6 + fourthWave, 1, 1.0, 1.0);
        prepareMonster(6.9 + fourthWave, 1, 0.0, 0.0);
        prepareMonster(6.9 + fourthWave, 3, 0.0, 0.0);
        prepareMonster(7.5 + fourthWave, 4, 0.5, 0.0);
        prepareMonster(7.8 + fourthWave, 3, 1.0, 0.0);
        prepareMonster(8.6 + fourthWave, 2, 1.0, 0.0);
        prepareMonster(8.7 + fourthWave, 3, 0.0, 0.0);
        prepareMonster(9.7 + fourthWave, 1, 1.0, 0.0);
        prepareMonster(10.0 + fourthWave, 3, 0.5, 0.0);
        prepareMonster(10.0 + fourthWave, 2, 0.0, 1.0);
        //第五波
        var fifthWave = 50;
        prepareMonster(3.0 + fifthWave, 3, 0.5, 0.0);
        prepareMonster(3.3 + fifthWave, 1, 0.5, 1.0);
        prepareMonster(3.8 + fifthWave, 4, 0.0, 0.0);
        prepareMonster(4.0 + fifthWave, 3, 0.5, 0.0);
        prepareMonster(4.3 + fifthWave, 2, 0.0, 0.0);
        prepareMonster(4.9 + fifthWave, 5, 0.0, 0.0);
        prepareMonster(5.3 + fifthWave, 3, 1.0, 0.0);
        prepareMonster(6.1 + fifthWave, 1, 1.0, 1.0);
        prepareMonster(6.1 + fifthWave, 5, 0.0, 0.0);
        prepareMonster(6.6 + fifthWave, 2, 0.0, 0.0);
        prepareMonster(6.6 + fifthWave, 4, 1.0, 0.0);
        prepareMonster(6.6 + fifthWave, 3, 0.0, 0.0);
        prepareMonster(7.1 + fifthWave, 1, 1.0, 0.0);
        prepareMonster(7.4 + fifthWave, 5, 0.5, 0.0);
        prepareMonster(7.9 + fifthWave, 2, 1.0, 1.0);
        prepareMonster(7.9 + fifthWave, 3, 0.0, 0.0);
        prepareMonster(8.5 + fifthWave, 4, 0.5, 0.0);
        prepareMonster(8.9 + fifthWave, 5, 0.5, 0.0);
        prepareMonster(9.3 + fifthWave, 5, 0.0, 0.0);
        prepareMonster(10.0 + fifthWave, 2, 0.5, 1.0);
        //第六波
        var sixWave = 60;
        prepareMonster(3.0 + sixWave, 4, 1.0, 0.0);
        prepareMonster(3.4 + sixWave, 4, 0.0, 0.0);
        prepareMonster(3.9 + sixWave, 2, 0.0, 1.0);
        prepareMonster(4.0 + sixWave, 4, 1.0, 0.0);
        prepareMonster(4.2 + sixWave, 3, 0.0, 0.0);
        prepareMonster(4.5 + sixWave, 2, 1.0, 0.0);
        prepareMonster(4.8 + sixWave, 3, 1.0, 0.0);
        prepareMonster(5.5 + sixWave, 5, 0.0, 0.0);
        prepareMonster(5.9 + sixWave, 4, 1.0, 0.0);
        prepareMonster(6.0 + sixWave, 3, 0.5, 0.0);
        prepareMonster(6.4 + sixWave, 2, 1.0, 0.0);
        prepareMonster(6.7 + sixWave, 6, 0.0, 0.0);
        prepareMonster(7.1 + sixWave, 3, 1.0, 0.0);
        prepareMonster(7.4 + sixWave, 5, 1.0, 0.0);
        prepareMonster(8.1 + sixWave, 4, 0.5, 0.0);
        prepareMonster(9.0 + sixWave, 2, 0.0, 1.0);
        prepareMonster(9.2 + sixWave, 6, 0.0, 0.0);
        prepareMonster(9.5 + sixWave, 3, 1.0, 0.0);
        prepareMonster(9.8 + sixWave, 5, 1.0, 0.0);
        prepareMonster(9.9 + sixWave, 3, 0.5, 0.0);
        prepareMonster(10.0 + sixWave, 2, 0.5, 1.0);
        //第七波
        var sevenWave = 70;
        prepareMonster(6.0 + sevenWave, 2, 0.5, 1);
        prepareMonster(6.2 + sevenWave, 2, 0.5, 1);
        prepareMonster(6.5 + sevenWave, 2, 0.5, 1);
        prepareMonster(6.6 + sevenWave, 2, 0.5, 1);
        prepareMonster(6.6 + sevenWave, 4, 0.5, 0);
        prepareMonster(6.6 + sevenWave, 3, 1.0, 0);
        prepareMonster(6.8 + sevenWave, 6, 0.0, 0);
        prepareMonster(6.8 + sevenWave, 2, 0.0, 1);
        prepareMonster(6.9 + sevenWave, 4, 1.0, 0);
        prepareMonster(7.0 + sevenWave, 3, 1.0, 0);
        prepareMonster(7.1 + sevenWave, 6, 0.5, 0);
        prepareMonster(7.2 + sevenWave, 2, 0.0, 1);
        prepareMonster(7.4 + sevenWave, 6, 0.0, 0);
        prepareMonster(7.4 + sevenWave, 3, 1.0, 1);
        prepareMonster(7.9 + sevenWave, 4, 1.0, 0);
        prepareMonster(8.0 + sevenWave, 4, 0.0, 0);
        prepareMonster(10.0 + sevenWave,  2, 0.5, 1);
        prepareMonster(10.2 + sevenWave,  2, 0.5, 1);
        prepareMonster(10.6 + sevenWave,  2, 0.5, 1);
        prepareMonster(10.6 + sevenWave,  5, 1.0, 0);
        prepareMonster(10.7 + sevenWave,  6, 0.5, 0);
        prepareMonster(10.7 + sevenWave,  2, 0.5, 1);
        prepareMonster(10.9 + sevenWave,  4, 0.0, 0);
        prepareMonster(11.0 + sevenWave,  4, 1.0, 0);
        prepareMonster(11.5 + sevenWave,  6, 0.5, 0);
        prepareMonster(14.0 + sevenWave,  2, 0.5, 1);
        prepareMonster(14.2 + sevenWave,  2, 0.5, 1);
        prepareMonster(14.4 + sevenWave,  2, 0.5, 1);
    },

    //update函数，每一帧重绘所有怪物影子的位置
    update:function(dt){
    },

    //定时更新函数，更新游戏坚持时间、冷却时间、准备出现的怪物
    updateDuration:function(dt){
        duration += dt;
        coolDowan += dt;
        if(coolDowan <= 30){
            //var to = cc.ProgressTo.create(0.01, (30 - coolDowan) / 30 * 100);
            //skillProgress.runAction(to);
        }else{
            coolDowan = 30;
        }

        var tempArr = [];
        for(var i = 0; i < prepareMonsterArr.length; i++){
            if(prepareMonsterArr[i].time <= duration){
                tempArr.push(prepareMonsterArr[i]);//即将出现的怪物的属性添加到tempArr数组中
            }else{
                break;
            }
        }

        for(var i = 0; i < tempArr.length; i++){
            this.createMonster(tempArr[i]);//创建即将出现的怪物
        }
        deleteChildFromArray(prepareMonsterArr,tempArr);//从prepareMonsterArr中删除已创建的怪物
        if(duration >= 88){
            gameOver();
        }
    },

    /**
     * 创建怪物
     * @param monsterData 怪物的属性
     */
    createMonster:function(prepareMonsterData){
        var monsterSprite = cc.Sprite.create("res/monster" + prepareMonsterData.type + "_1.png");//根据类型选择对应的图片
        monsterSprite.setScale(1.0/0.8);
        monsterSprite.setAnchorPoint(cc.p(0.5, 0));
        var dir = Math.random();
        if(Math.random() < prepareMonsterData.direction){
            targetX = 180;
            monsterSprite.setPosition(cc.p(-30,positionY - 55));
        }else{
            targetX = 300;
            monsterSprite.setPosition(cc.p(510,positionY - 55));
            monsterSprite.setFlippedX(true);//右边出现的怪物镜像显示
        }
        /*if(prepareMonsterData.direction == 0){//如果怪物出现的方向是随机的，则产生一个1或2的随机数，1表示左边，2表示右边
            prepareMonsterData.direction = Math.floor(Math.random() * 10 % 2 + 1);
        }
        if(prepareMonsterData.direction == 1){//从左边出现的怪物
            targetX = 180;
            monsterSprite.setPosition(cc.p(-30,positionY - 65));
        }else if(prepareMonsterData.direction == 2){//从右边出现的怪物
            targetX = 300;
            monsterSprite.setPosition(cc.p(510,positionY - 65));
            monsterSprite.setFlippedX(true);//右边出现的怪物镜像显示
        }*/


        monsterArray.push(monsterSprite);//已出现的怪物添加到monsterArray数组中

        monsterLayer.getChildByTag(prepareMonsterData.type).addChild(monsterSprite,1,prepareMonsterData.type);//添加怪物到Layer上，TAG即为怪物的类型
        //不同的怪物类型初始化不同的血量
        if(prepareMonsterData.type == 1 || prepareMonsterData.type ==3
            || prepareMonsterData.type == 4 || prepareMonsterData.type == 5){
            monsterSprite.setUserData(monsterUserData(1,1));
        }else{
            monsterSprite.setUserData(monsterUserData(2,2));
        }
        var walkLine = createMonsterWalkLine(prepareMonsterData.type,prepareMonsterData.rampageProb);

        //根据怪物类型设置怪物的行走路线和Action
        if(prepareMonsterData.type ==1 || prepareMonsterData.type == 2
            || prepareMonsterData.type == 5 || prepareMonsterData.type == 6){
            monsterSprite.runAction(createMonsterWalkAnimate(prepareMonsterData.type));
            monsterSprite.runAction(cc.Sequence.create(walkLine, cc.CallFunc.create(monsterAttackCallback)));
        }else if(prepareMonsterData.type ==3 || prepareMonsterData.type ==4){
            monsterSprite.runAction(walkLine);
        }
    }
/*    createMonster:function(dt) {
        var type = Math.floor(Math.random() * 10 % 3 + 1);
        cc.log("type:" + type);

        var monsterSprite = cc.Sprite.create("res/monster" + type + "_1.png");
        monsterSprite.setAnchorPoint(cc.p(0.5, 0));

        if (Math.random() < 0.5) {
            targetX = 180;
            monsterSprite.attr({
                x: 0,
                y: positionY - 65
            });
        }
        else {
            monsterSprite.setFlippedX(true);
            targetX = 480 - 180;
            monsterSprite.attr({
                x: 480,
                y: positionY - 60
            });
        }
        this.addChild(monsterSprite, 1, type);
        monsterArray.push(monsterSprite);

        var monsterAttackCallback = function () {
            cc.log("monsterAttackCallback");
            monsterSprite.stopAllActions();

            var  monsterAttack = cc.RepeatForever.create(cc.Sequence.create(createMonsterAttackAnimate(type), cc.CallFunc.create(function () {
                    heroBeHurt();
                }), cc.DelayTime.create(1.5)));
            monsterSprite.runAction(monsterAttack);
        }

        var walkLine = createMonsterWalkLine(type);

        if(type ==1 || type == 2){
            monsterSprite.runAction(createMonsterWalkAnimate(type));
            monsterSprite.runAction(cc.Sequence.create(walkLine, cc.CallFunc.create(monsterAttackCallback)));
        }else{
            monsterSprite.runAction(walkLine);
        }

        this.unschedule(this.createMonster);
        monsterCreater.time += monsterCreater.interval;
        if(monsterCreater.time < 10){
            monsterCreater.interval = 3;
        }else if(monsterCreater.time <20){
            monsterCreater.interval = 2;
        }else if(monsterCreater.time <30){
            monsterCreater.interval = 0.8;
        }else if(monsterCreater.time <60){
            monsterCreater.interval = 0.5;
        }else{
            monsterCreater.interval = 0.3;
        }
        this.schedule(this.createMonster,monsterCreater.interval);
    }*/
});

/**
 * 使用技能调用的函数
 * @param layer  指当前Layer，即PlayLayer
 */
var useSkill = function(layer) {
    if(isSkillPeriod || isGameOver){//正在释放技能期间或者游戏已经结束则不能释放技能
        return;
    }
    if(coolDowan < 30)//冷却时间未到不能释放技能
    {
        cc.log("冷却时间，不能释放技能");
        //return;
    }
    coolDowan = 0;//重置冷却时间为0
    isSkillPeriod = true;//标记为正在释放技能为true
    var moveToTop = cc.MoveTo.create(0.3,cc.p(240,700));
    var moveToFloor = cc.EaseBackIn.create(cc.MoveTo.create(0.3,cc.p(240,positionY + 10)));

    var heroAttackAnim = cc.Animation.create();
    for(var i = 6; i<=9; i++){
        var heroAttackFrame = "res/hero" + i + ".png";
        heroAttackAnim.addSpriteFrameWithFile(heroAttackFrame);
    }
    heroAttackAnim.setDelayPerUnit(0.1);
    var heroAttackAction = cc.Animate.create(heroAttackAnim);

    heroSprite.stopAllActions();
    var action = cc.Sequence.create(moveToTop,
        cc.Spawn.create(moveToFloor, heroAttackAction),
        cc.CallFunc.create(useSkillCallback));

    heroSprite.runAction(action);//hero执行action，hero跳到屏幕上方再调到地面，播放攻击帧动画，调用useSkillCallback函数
}

/**
 * hero释放技能落地后回调的函数
 * @param sender
 */
var useSkillCallback = function(sender){
    cc.director.getScheduler().setTimeScale(0.2);
    //bgSprite.runAction(cc.TintTo.create(0.2,50,50,50));//释放技能后背景变暗
    var darkSprite = cc.Sprite.create(res.eff_dark_png);
    darkSprite.setScale(800);
    darkSprite.setPosition(cc.p(240,400));
    heroSprite.getParent().addChild(darkSprite, 2, 1001);
    heroSprite.getParent().runAction(cc.Sequence.create(cc.ScaleTo.create(0.2,1.5)));//整个场景缩放到原来的1.5倍
    heroSprite.getParent().runAction(cc.Spawn.create(cc.CallFunc.create(function(){
        var tempArray = [];
        //释放技能后，遍历已出现的怪物，所有怪物掉一滴血
        for(var i = 0; i < monsterArray.length; i++){
            monsterBeHurt(monsterArray[i]);
            if(monsterArray[i].getUserData().curBlood <= 0){
                tempArray.push(monsterArray[i]);
            }
        }
        //删除已死亡的怪物和怪物的影子
        for(var i=0;i<tempArray.length;i++)
        {
            if(tempArray[i].getUserObject() != null){
                tempArray[i].getUserObject().removeFromParent();
            }
            tempArray[i].removeFromParent();
        }
        //从monsterArray中删除已死亡的怪物
        deleteChildFromArray(monsterArray,tempArray);
    })));
    //技能释放后，背景颜色还原，缩放到原来大小
    heroSprite.getParent().runAction(cc.Sequence.create(cc.DelayTime.create(0.3),cc.CallFunc.create(function(){
        cc.director.getScheduler().setTimeScale(1);
        //bgSprite.runAction(cc.TintTo.create(0.5,255,255,255));
        heroSprite.getParent().getChildByTag(1001).removeFromParent();
        playIdleAction();
        isSkillPeriod = false;//是否为放技能期间重置为false
    }),cc.ScaleTo.create(0.2,1)));
}

/**
 * 屏幕中间添加一个标签"面对你从未见过的恐惧"
 * @param sender
 */
var noticeCallback = function(sender) {
    var noticeLabel = cc.LabelTTF.create("据说没有人能过37秒", "Arial", 24);
    noticeLabel.setColor(cc.color(204,255,0,255));
    noticeLabel.setPosition(cc.p(240,400));
    sender.getParent().addChild(noticeLabel,4);
    var noticeMoveTo = cc.moveTo(0.2,cc.p(0,450));
    //标签1.5秒后从屏幕上方移除，回调helpCallback函数
    sender.getParent().runAction(cc.Sequence.create(cc.DelayTime.create(1.5),noticeMoveTo,cc.CallFunc.create(helpCallback)));
    //sender.removeFromParent();
}

/**
 * 提示游戏的玩法
 * @param sender
 */
var helpCallback = function(sender){
    //cc.log("notice:function(sender)");
    var helpLabel = cc.LabelTTF.create("点击屏幕下方左右键砍杀怪物", "Arial", 20);
    helpLabel.setColor(cc.color(255,255,0,255));
    helpLabel.setPosition(240,340);
    sender.getParent().addChild(helpLabel,3);
    sender.getParent().initMonster();
    sender.getParent().init();
    //提示标签。5秒后淡出屏幕并移除
    helpLabel.runAction(cc.Sequence.create(cc.DelayTime.create(1.5),
        cc.FadeOut.create(1.0),cc.CallFunc.create(function(sender){
            sender.removeFromParent();
    })));
}

/**
 * 准备出现的怪物的属性类
 *
 * @param time 怪物出现的时间
 * @param type 出现的怪物的类型(以Tag区分):1.小哥布林,2.绿巨人，3.狼，4.骷髅弓箭手，5.蝙蝠，6.巫妖，11.弓箭
 * @param direction 出来的方向：0表示随机，1表示从左边，2表示从右边
 * @param rampageProb 暴走的概率
 */
var PrepareMonsterData = function(time, type, direction, rampageProb){
    return {
        time: time
        ,type: type
        ,direction: direction
        , rampageProb: rampageProb
    }
}

/**
 * 初始化准备出场的怪物的属性
 * @param time
 * @param type
 * @param direction
 * @param rampageProb
 */
var prepareMonster = function(time, type, direction, rampageProb){
    var monsterData = PrepareMonsterData(time, type, direction, rampageProb);
    prepareMonsterArr.push(monsterData);
};

/**
 * 已出场的怪物的UserData
 * @param maxBlood 最大血量
 * @param curBlood 当前血量
 * @returns {{maxBlood: *, curBlood: *}}  怪物的UserData
 */
var monsterUserData = function(maxBlood,curBlood){
    return {
        maxBlood: maxBlood
        ,curBlood: curBlood
    }
}

/**
 * 怪物攻击hero，执行攻击动画，使hero掉血
 * @param sender
 */
var monsterAttackCallback = function(sender){
    //cc.log("monsterAttackCallback");
    sender.stopAllActions();

    var  monsterAttack = cc.RepeatForever.create(cc.Sequence.create(createMonsterAttackAnimate(sender.getTag()), cc.CallFunc.create(function () {
        heroBeHurt();
    }), cc.DelayTime.create(1.5)));
    sender.runAction(monsterAttack);//怪物执行完攻击动画后使英雄受到伤害并掉血
};

/**
 * 根据怪物类型设计怪物行走路线
 * @param type 怪物的类型（Tag）
 * @param rampageProb 暴走概率
 * @returns {*} 怪物行走路线的Action
 */
var createMonsterWalkLine = function(type,rampageProb){
    var action = null;
    var interval = Math.random() < rampageProb ? 0.75 : 1.5;
    if(type == 1){//小哥布林
        action = cc.MoveTo.create(interval, cc.p(targetX, positionY - 55));
    }else if(type ==2){//绿巨人
        action = cc.MoveTo.create(interval / 1.5, cc.p(targetX, positionY - 55));
    }else if(type ==3){//狼
        var placeAction;
        var jumpAction;//狼加速跳跃动作，从屏幕两侧跳出
        var moveNearAction = cc.MoveTo.create(0.3,cc.p(targetX,positionY - 55));
        var moveFarAction;//跳跃后逃走action
        var warningSprite = cc.Sprite.create(res.warning_wolf_png);
        if(targetX < 240){
            placeAction = cc.Place.create(cc.p(-30,positionY + 100));
            jumpAction = cc.EaseBackIn.create(cc.JumpTo.create(2,cc.p(targetX - 70,positionY - 55),100,1));
            moveFarAction = cc.MoveTo.create(2,cc.p(580,positionY - 55));
            //moveNearAction = cc.MoveTo.create(0.5,cc.p(targetX,positionY - 55));
            warningSprite.setPosition(cc.p(50,positionY + 150));
        }
        else{
            placeAction = cc.Place.create(cc.p(510,positionY + 100));
            jumpAction = cc.EaseBackIn.create(cc.JumpTo.create(2,cc.p(targetX + 70,positionY - 55),100,1));
            moveFarAction = cc.MoveTo.create(2,cc.p(-100,positionY - 55));
            warningSprite.setPosition(cc.p(430,positionY + 150));
            warningSprite.setScaleX(-1);
        }
        var scaleAction = cc.ScaleBy.create(0.2,1.8);
        var warningAction = cc.Sequence.create(scaleAction,scaleAction.reverse());//警告狼即将出现的action
        heroSprite.getParent().addChild(warningSprite);
        //警告狼即将出现
        warningSprite.runAction(cc.Sequence.create(warningAction,cc.CallFunc.create(function(){
            warningSprite.removeFromParent();
        })));
        var callFunAction = cc.CallFunc.create(function(){
            heroBeHurt();
        });

        //action1:狼逃走时的帧动画，action2:整个狼的action
        var action1 = cc.Sequence.create(cc.DelayTime.create(2.0),createMonsterWalkAnimate(type));
        var action2 = cc.Sequence.create(placeAction,jumpAction,moveNearAction,createMonsterAttackAnimate(type),
            callFunAction,cc.Spawn.create(moveFarAction),cc.CallFunc.create(function(sender){
                monsterArray.splice(monsterArray.indexOf(sender), 1);
                if(sender.getUserObject() != null){
                    sender.getUserObject().removeFromParent();
                }

                sender.removeFromParent();
        }));
        action = cc.Spawn.create(action1,action2);
    }else if(type == 4){//骷髅弓箭手
        var moveAction;
        if(targetX < 240){
            moveAction = cc.MoveTo.create(1, cc.p(50, positionY - 60));
        }else{
            moveAction = cc.MoveTo.create(1, cc.p(430, positionY - 60));
        }
        //骷髅弓箭手走到一定位置开始射箭
        action = cc.Sequence.create(moveAction,createMonsterAttackAnimate(type),cc.CallFunc.create(shootArrow));
    }else if(type == 5){//蝙蝠
        var placeAction;
        var moveAction;
        if(targetX < 240){
            placeAction = cc.Place.create(cc.p(-50,positionY + 200));
            moveAction = cc.MoveTo.create(2, cc.p(targetX, positionY - 30));
        }else{
            placeAction = cc.Place.create(cc.p(530,positionY + 200));
            moveAction = cc.MoveTo.create(2, cc.p(targetX, positionY - 30));
        }
        action = cc.Sequence.create(placeAction,moveAction);
    }else if(type == 6){//巫妖
        var placeAction;
        var moveAction;
        var XOffset = Math.random() * 30;
        var YOffset = Math.random() * 30;
        if(targetX < 240){
            placeAction = cc.Place.create(cc.p(-30 + XOffset, -30 + YOffset));
            moveAction = cc.MoveTo.create(2, cc.p(targetX, positionY - 60));
        }else{
            placeAction = cc.Place.create(cc.p(510 - XOffset, -30 + YOffset));
            moveAction = cc.MoveTo.create(2, cc.p(targetX, positionY - 60));
        }
        action = cc.Sequence.create(placeAction,moveAction);
    }
    return action;
};

/**
 * 骷髅弓箭手射出弓箭
 * @param sender 射出箭的骷髅
 */
var shootArrow = function(sender){
    //添加一个弓箭
    var arrowSprite = cc.Sprite.create(res.arrow_png);
    arrowSprite.setPosition(cc.p(sender.getPosition().x,positionY - 40));
    arrowSprite.setAnchorPoint(cc.p(1,0.5));
    arrowSprite.setScale(0.8);
    sender.getParent().addChild(arrowSprite,1,11);//弓箭作为怪物的Tag为11，即type为11
    arrowSprite.setUserData(monsterUserData(1,1));
    monsterArray.push(arrowSprite);



    var arrowMoveTo;
    var monsterMoveTo;
    if(sender.isFlippedX()){//根据不同方向判断弓箭射出的方向
        arrowSprite.setScaleX(-0.8);
        arrowSprite.setPosition(cc.p(sender.getPosition().x - 20,positionY - 40));
        arrowMoveTo = cc.MoveTo.create(1,cc.p(260,positionY - 40));
        monsterMoveTo = cc.MoveTo.create(0.5,cc.p(530,positionY - 60));
    }else{
        arrowSprite.setPosition(cc.p(sender.getPosition().x + 20,positionY - 40));
        arrowMoveTo = cc.MoveTo.create(1,cc.p(220,positionY - 40));
        monsterMoveTo = cc.MoveTo.create(0.5,cc.p(-50,positionY - 60));
    }

    //弓箭射出后射手（骷髅）从屏幕一侧移出并删除
    sender.runAction(cc.Sequence.create(cc.DelayTime.create(1),monsterMoveTo,cc.CallFunc.create(function(){
        monsterArray.splice(monsterArray.indexOf(sender),1);
        if(sender.getUserObject() != null){
            sender.getUserObject().removeFromParent();
        }

        sender.removeFromParent();
    })));

    // 射出弓箭，英雄造成伤害，并且移除弓箭和影子
    arrowSprite.runAction(cc.Sequence.create(arrowMoveTo,cc.CallFunc.create(function(sender){
        heroBeHurt();
        monsterArray.splice(monsterArray.indexOf(arrowSprite), 1);
        arrowSprite.removeFromParent();
    })));
};

/**
 * 创建怪物行走时的帧动画
 * @param type 怪物类型
 * @returns {anim} 怪物行走帧动画（Animate）
 */
var createMonsterWalkAnimate = function(type){
    var fileName = "res/monster" + type + "_";
    var anim = cc.Animation.create();
    for(var i = 1; i <= 4; i++){
        var frame = fileName + (i%4+1)  + ".png";
        anim.addSpriteFrameWithFile(frame);
    }
    anim.setDelayPerUnit(0.12);
    return cc.Repeat.create(cc.Animate.create(anim),50);
};

/**
 * 创建怪物攻击时的帧动画
 * @param type 怪物类型
 * @returns {anim} 怪物攻击帧动画（Animate）
 */
var createMonsterAttackAnimate = function(type){
    var fileName = "res/monster" + type + "_";
    var anim = cc.Animation.create();
    for(var i = 7; i <= 9; i++){
        var frame = fileName + i + ".png";
        anim.addSpriteFrameWithFile(frame);
    }
    anim.addSpriteFrameWithFile(fileName + "4.png");
    anim.setDelayPerUnit(0.04);
    return cc.Animate.create(anim);
};

/**
 * 英雄受到伤害时调用的函数
 */
var heroBeHurt = function(){
    if(isSkillPeriod){//释放技能期间英雄不掉血
        cc.log("释放技能期间英雄不掉血");
        return;
    }
    hp--;//血量减一
/*    if(heroSprite.getActionByTag(1025) != null) {
        cc.log("无敌时间");
        return;
    }
    var action1 = cc.FadeTo.create(0.05,128);
    var action2 = cc.FadeTo.create(0.05,255);
    var action = cc.Repeat.create(cc.Sequence.create(action1,action2),2);
    action.setTag(1025);
    heroSprite.runAction(action);*/

    if(hpNode.getChildByTag(hp + 1) != null){
        hpNode.getChildByTag(hp + 1).setVisible(false);
    }

    //hero受伤后屏幕出现红色闪烁
    var hurted = cc.Sprite.create(res.be_shot_png);
    hurted.attr({
        x:240,
        y:400,
        scaleX:2.4,
        scaleY:2.5
    });
    heroSprite.getParent().addChild(hurted);
    var actionFadeIn = cc.FadeIn.create(0.1);
    var actionFadeout = cc.FadeOut.create(0.1);
    //红色图片淡入淡出后删除
    hurted.runAction(cc.Sequence.create(cc.Repeat.create(cc.Sequence.create(actionFadeIn,actionFadeout),1),cc.CallFunc.create(function(){
        hurted.removeFromParent();
    })));

    if (hp <= 0) {//血量减少到0后猴戏结束
        gameOver();
    }
};

/**
 * 英雄站立空闲时执行的动作
 */
var playIdleAction = function (){

    //cc.log("idle");
    var heroIdleAnim = cc.Animation.create();
    for (var i = 1; i <= 6; i++){
        var heroIdleFrame = "res/hero" + i + ".png";
        heroIdleAnim.addSpriteFrameWithFile(heroIdleFrame);
    }
    heroIdleAnim.setDelayPerUnit(0.1);
    var heroIdleAction = cc.RepeatForever.create(cc.Animate.create(heroIdleAnim));

    /*var swordIdleAnim = cc.Animation.create();
    for(var i = 1; i <= 6; i++){
        var swordIdleFrame = "res/sword" + i + ".png";
        swordIdleAnim.addSpriteFrameWithFile(swordIdleFrame);
    }
    swordIdleAnim.setDelayPerUnit(0.1);
    var swordIdleAction = cc.RepeatForever.create(cc.Animate.create(swordIdleAnim));*/

    heroSprite.stopAllActions();
    heroSprite.runAction(heroIdleAction);

    //swordSprite.stopAllActions();
    //swordSprite.runAction(swordIdleAction);
}

/**
 * 英雄攻击怪物回调的函数
 */
var heroAttackCallback = function(){
    //cc.log("monsterArray.length:" + monsterArray.length);
    attackDir = 0;
    delArray = [];
    var isAttackSuccess = false;//是否攻击上怪物

    for(var i = 0; i < monsterArray.length; i++){
        var scale = monsterArray[i].getScaleX();
        var monsterPosX = monsterArray[i].getPositionX();
        //检测有没有在攻击范围内的怪物
        if(monsterPosX > 130 && monsterPosX < 240 && touchLocationX < 240){
            //delArray.push(monsterArray[i]);
            isAttackSuccess = true;
            monsterBeHurt(monsterArray[i]);
        }else if(  monsterPosX > 240 && monsterPosX < 350 && touchLocationX > 240){
            //delArray.push(monsterArray[i]);
            isAttackSuccess = true;
            monsterBeHurt(monsterArray[i]);
        }

    }

    var attackAfterAnim = cc.Animation.create();
    for(var i = 9; i<=10; i++){
        var attackBeforeFrame = "res/hero" + i + ".png";
        attackAfterAnim.addSpriteFrameWithFile(attackBeforeFrame);
    }
    attackAfterAnim.setDelayPerUnit(0.04);
    var attackAfterAction = cc.Animate.create(attackAfterAnim);
    attackAfterAction.setTag(1024);

    var swordAttackAfterAnim = cc.Animation.create();
    for(var i = 9; i<=10; i++){
        var swordAttackBeforeFrame = "res/sword" + i + ".png";
        swordAttackAfterAnim.addSpriteFrameWithFile(swordAttackBeforeFrame);
    }
    swordAttackAfterAnim.setDelayPerUnit(0.04);
    var swordAttackAfterAction = cc.Animate.create(swordAttackAfterAnim);
    swordAttackAfterAction.setTag(1024);



    //如果没有碰到怪物，则硬直状态
    if(!isAttackSuccess)
    {
        cc.log("硬直");
        var heroDelay = cc.DelayTime.create(0.5);//没有攻击上怪物则停顿0.5秒
        heroSprite.stopAllActions();

        var waitAction = cc.Sequence.create(attackAfterAction,heroDelay,cc.CallFunc.create(playIdleAction));
        var swordWaitAction = cc.Sequence.create(swordAttackAfterAction,heroDelay.clone());
        waitAction.setTag(1024);
        heroSprite.runAction(cc.Sequence.create(waitAction));
        //swordSprite.runAction(swordWaitAction);

        //添加一滴汗液
        var sweat = cc.Sprite.create(res.miss_png);
        sweat.setScale(0.8);
        var positionX = heroSprite.getScale() < 0 ? heroSprite.getPositionX() - 10 : heroSprite.getPositionX() + 10;
        sweat.setPosition(cc.p(positionX,heroSprite.getPositionY() + 12));
        heroSprite.getParent().addChild(sweat,3);
        var sweatAction = cc.Sequence.create(cc.Sequence.create(cc.MoveBy.create(0.3, cc.p(0, -7)),cc.FadeOut.create(0.1)),
            cc.CallFunc.create(
            function(sender){
                sender.removeFromParent();
            }
        ));
        sweat.runAction(sweatAction);//汗液流下后淡出并移除


        var shakeTime = 0.03;
        var moveRight = cc.MoveBy.create(shakeTime,cc.p(3,0));
        var moveleft = cc.MoveBy.create(shakeTime,cc.p(-3,0));
        var moveTop = cc.MoveBy.create(shakeTime,cc.p(0,3));
        var moveBottom = cc.MoveBy.create(shakeTime,cc.p(0,-3));

        var shakeAction = cc.Repeat.create(cc.Sequence.create(moveRight,moveleft,moveTop,moveBottom),2);
        heroSprite.getParent().getParent().runAction(shakeAction);//没有攻击上怪物后屏幕震动

    }else{
        heroSprite.runAction(cc.Sequence.create(attackAfterAction,cc.CallFunc.create(playIdleAction)));
        //swordSprite.runAction(swordAttackAfterAction);
    }

    //从monsterArray数组中删除已经死去的怪物即它们的影子
    deleteChildFromArray(monsterArray,delArray);
    for(var i=0;i<delArray.length;i++)
    {
        if(delArray[i].getUserObject() != null){
            delArray[i].getUserObject().removeFromParent();
        }
        delArray[i].removeFromParent();
    }
};

/**
 * 怪物被hero砍受伤
 * @param monster 被砍受伤的怪物
 */
var monsterBeHurt = function(monster){
    var userData = monster.getUserData();
    userData.curBlood --;
    score ++;

    if(userData.curBlood <= 0){//如果怪物血量为0后调用monsterDead执行死亡动画
        monsterDead(monster);
    }else {
        monster.stopAllActions();
        var anim = cc.Animation.create();
        for (var i = 1; i <= 2; i++) {
            var frame = "res/monster" + monster.getTag() + "_10.png";
            anim.addSpriteFrameWithFile(frame);
        }
        anim.setDelayPerUnit(0.12);
        monster.runAction(cc.Animate.create(anim));//怪物执行被攻击后的帧动画
        if (monster.getTag() == 1 || monster.getTag() == 2) {//怪物1和怪物2受伤后后退
            var moveToFar;
            var moveToNear;
            if (!monster.isFlippedX()) {
                moveToFar = cc.EaseBackOut.create(cc.MoveTo.create(0.5, cc.p(120, monster.getPositionY())));
                moveToNear = cc.MoveTo.create(0.5, cc.p(180, monster.getPositionY()));
            } else {
                moveToFar = cc.EaseBackOut.create(cc.MoveTo.create(0.5, cc.p(360, monster.getPositionY())));
                moveToNear = cc.MoveTo.create(0.5, cc.p(300, monster.getPositionY()));
            }
            //怪物后退后，再次攻击hero
            monster.runAction(cc.Sequence.create(moveToFar, moveToNear, cc.CallFunc.create(monsterAttackCallback)));
            monster.runAction(cc.Sequence.create(cc.DelayTime.create(0.5), createMonsterWalkAnimate(monster.getTag())));
        }else if(monster.getTag() == 6){//怪物6受伤后不后退
            var moveTo;
            var times;//移动速度加快的倍数
            if(!monster.isFlippedX()){
                times = 180 / (180 - monster.getPositionX());
                moveTo = cc.MoveTo.create(4/times, cc.p(180, positionY - 60));
            }else{
                times = 180 / (monster.getPositionX() - 300);
                moveTo = cc.MoveTo.create(4/times, cc.p(300, positionY - 60));
            }
            //受伤后继续攻击hero
            monster.runAction(cc.Sequence.create(cc.DelayTime.create(0.5), createMonsterWalkAnimate(monster.getTag())));
            monster.runAction(cc.Sequence.create(cc.DelayTime.create(0.5), moveTo, cc.CallFunc.create(monsterAttackCallback)));
        }else{
            monster.runAction(cc.Sequence.create(cc.DelayTime.create(0.5), cc.CallFunc.create(monsterAttackCallback)));
        }
    }
}

/**
 * 怪物被hero砍死
 * @param monster 被砍死的怪物
 */
var monsterDead = function(monster){
    delArray.push(monster);
    var parentNode = monster.getParent();
    var type = monster.getTag();
    var monsterPosX = monster.getPositionX();
    var monsterPosY = monster.getPositionY();

    //怪物死后的爆炸动画
    var explosionAnim = cc.Animation.create();
//    for(var i = 0; i < 6; i++){
//        var frame = "res/explosion" + i + ".png";
//        explosionAnim.addSpriteFrameWithFile(frame);
//    }
    explosionAnim.addSpriteFrameWithFile(res.explosion0_png);
    //explosionAnim.addSpriteFrameWithFile(res.explosion1_png);
    explosionAnim.addSpriteFrameWithFile(res.explosion2_png);
    //explosionAnim.addSpriteFrameWithFile(res.explosion3_png);
    explosionAnim.addSpriteFrameWithFile(res.explosion4_png);
    //explosionAnim.addSpriteFrameWithFile(res.explosion5_png);

    explosionAnim.setDelayPerUnit(0.08);
    var explosionAction = cc.Animate.create(explosionAnim);
    var explosionSprite = cc.Sprite.create(res.explosion0_png);
    explosionSprite.attr({
        x: monsterPosX,
        y: monsterPosY + 30,
        scale:2.4
    });
    explosionLayer.addChild(explosionSprite,2);
    explosionSprite.runAction(cc.Sequence.create(explosionAction,cc.CallFunc.create(function(sender){
        sender.removeFromParent();//爆炸后删除爆炸的sprite
    })));
    //type==11,表示monster4射出的弓箭怪物，不执行后面怪物死亡跌落的动画
    if(type == 11){
        return;
    }
    var monsterHead = cc.Sprite.create("res/monster" + type + "_5.png");
    monsterHead.setScale(1.0/0.8);
    monsterHead.setPosition(cc.p(monsterPosX + 10,monsterPosY));
    var monsterBody = cc.Sprite.create("res/monster" + type + "_6.png");
    monsterBody.setPosition(cc.p(monsterPosX - 10,monsterPosY));

    var headJumpAction;//怪物头部的跳跃动作
    var bodyJumpAtion;//怪物的身子的调血动作
    var jumpHeight1 = 200 + Math.random() * 300;//随机产生跳跃高度
    var jumpHeight2 = 200 + Math.random() * 300;
    if(!monster.isFlippedX()){
        headJumpAction = cc.JumpTo.create(0.8,cc.p(80 - Math.random() * 100,-50),jumpHeight1,1);
        bodyJumpAtion = cc.JumpTo.create(0.8,cc.p(200 + Math.random() * 100,-50),jumpHeight2,1);
    }else{
        headJumpAction = cc.JumpTo.create(0.8,cc.p(400 + Math.random() * 100,-50),jumpHeight1,1);
        bodyJumpAtion = cc.JumpTo.create(0.8,cc.p(280 - Math.random() * 100,-50),jumpHeight2,1);
        monsterHead.setFlippedX(true);
        monsterBody.setFlippedX(true);
    }

    parentNode.addChild(monsterHead,2);
    parentNode.addChild(monsterBody,2);
    var rotateDir = Math.random() > 0.5 ? 1 : -1;//随机产生尸体的旋转方向
    //头部和身体执行动画后移除屏幕并删除
    monsterHead.runAction(cc.Sequence.create(cc.Spawn.create(headJumpAction,cc.RotateBy.create(0.8,360 * rotateDir)),cc.CallFunc.create(
        function(pSender) {
            pSender.removeFromParent();
        }
    )));
    monsterBody.runAction(cc.Sequence.create(cc.Spawn.create(bodyJumpAtion,cc.RotateBy.create(0.8,-360 * rotateDir)),cc.CallFunc.create(
        function(pSender){
            pSender.removeFromParent();
        }
    )));
    //monster.removeFromParent();
}

/**
 * 游戏结束
 */
var gameOver = function(){

    console.log("gameover");
    isGameOver = true;//标记游戏已经结束
    hpNode.getParent().unscheduleAllCallbacks();//停止调用定时跟新函数
    //停止怪物的所有动画
    for(var i = 0; i < monsterArray.length; i++){
        monsterArray[i].stopAllActions();
    };
    heroSprite.stopAllActions();
    var heroJumpAction = cc.JumpTo.create(1.0,cc.p(100,-500),580,1);

    //hero死后让英雄回到第一针
    var heroAnim = cc.Animation.create();
    heroAnim.addSpriteFrameWithFile(res.hero1_png);
    heroAnim.setDelayPerUnit(0.04);
    var heroAction = cc.Animate.create(heroAnim);
    //hero跳出屏幕后弹出窗口
    heroSprite.runAction(cc.Sequence.create(heroAction, heroJumpAction,cc.DelayTime.create(0.6),cc.CallFunc.create(popupWindow)));
    /*var swordJumpAction = cc.JumpTo.create(0.15*7,cc.p(-100,-7),360,1);
    var swordRotation = cc.Repeat.create(cc.RotateBy.create(0.075,180),12);

    swordSprite.runAction(cc.Spawn.create(swordJumpAction,swordRotation));

    var anim = cc.Animation.create();
    for (var i = 1; i <= 2; i++){
        anim.addSpriteFrameWithFile(res.sword12_png);
    }
    anim.setDelayPerUnit(0.1);
    var action = cc.Animate.create(anim);

    swordSprite.runAction(cc.Sequence.create(cc.DelayTime.create(0.15*7),action,cc.DelayTime.create(1),cc.CallFunc.create(popupWindow)));*/
};

/**
 * 游戏结束后弹出窗口
 */
var popupWindow = function(){
    var popWindow = cc.Node.create();
    popWindow.setPosition(cc.p(240,400));
    popWindow.setScale(0);
    var popBg = cc.Sprite.create(res.popup_r_png);
    popBg.setScaleY(1.7);
    popWindow.addChild(popBg);
    heroSprite.getParent().addChild(popWindow,3);

    var restartItem = cc.MenuItemImage.create(
        res.btn_1,
        res.btn_2,
        function(){
            cc.log("再来一次");
            if(isSharelayer){
                isSharelayer = false;
                return;
            }
            var playScene = new PlayScene();
            cc.director.pushScene(playScene);
        },popWindow);
    restartItem.setPosition(cc.p(-100,-120));
    restartItem.setScaleX(2.0);
    restartItem.setScaleY(0.8);
    var labelStart = cc.LabelTTF.create("再来一次", "Arial", 24);
    labelStart.setColor(cc.color(255,144,0,255));
    labelStart.setPosition(cc.p(-100,-120));
    popWindow.addChild(labelStart,999);

    var shareItem = cc.MenuItemImage.create(
        res.btn_1,
        res.btn_2,
        function(){
            cc.log("分享");
            // dp_share();
        },popWindow);
    shareItem.setPosition(cc.p(100,-120));
    shareItem.setScaleX(2.0);
    shareItem.setScaleY(0.8);
    var labelShare = cc.LabelTTF.create("炫耀一下", "Arial", 24);
    labelShare.setColor(cc.color(255,144,0,255));
    labelShare.setPosition(shareItem.getPosition());
    popWindow.addChild(labelShare,999);

    var menu = cc.Menu.create(restartItem,shareItem);
    menu.x = 0;
    menu.y = 0;
    popWindow.addChild(menu, 3);


    var resultLabel = cc.LabelTTF.create("您坚持了" + Math.floor(duration * 100) / 100 + "秒，听说没人能过37秒，快让小伙伴们来挑战吧！！！",
        "Arial", 26,cc.size(400,100));
    resultLabel.setPosition(cc.p(0, 35));
    popWindow.addChild(resultLabel);
    popWindow.runAction(cc.ScaleTo.create(0.3,0.9));//弹窗从屏幕中间慢慢放大
	// dp_submitScore(Math.floor(duration * 100) / 100);
};

/**
 * 
 * @param popWindow
 */
var sendResult = function(popWindow){
    
}

var getnickname = function(time){
    var nickname = "";
    if(time < 10){
        nickname = "初学菜鸟";
    }else if(time < 20){
        nickname = "挑战者  ";
    }else if(time < 30){
        nickname = "屠龙战神";
    }else if(time < 40){
        nickname = "一代宗师";
    }else if(time < 50){
        nickname = "难逢敌手";
    }else if(time < 60){
        nickname = "生存勇者";
    }else if(time < 70){
        nickname = "钢铁意志";
    }else {
        nickname = "不死之躯";
    }
    return nickname;
}

/**
 * 将数组中的子数组删除
 * @param array
 * @param childArray 需要删除的子数组
 */
var deleteChildFromArray = function(array,childArray){
    if(array.length < 1 || childArray.length < 1){
        return;
    }
    for(var i = 0;i < childArray.length; i++){
        var index = array.indexOf(childArray[i]);
        if(index > -1){
            array.splice(index, 1);
        }
    }

};

/**
 * 格式化时间，秒数转换成“12:50”的形式
 * @param value 时间
 * @returns {string}
 */
var timeFormat = function(value){
    value = Math.floor(value);
    var align = function(value1){
        var str1 = "";
        if(value1 < 10){
            str1 = "0" + value1;
        }else{
            str1 = value1;
        }
        return str1;
    }
    var str = "";
    if(value < 10){
        str = "00:" + align(value);
    }else{
        str = align(Math.floor(value / 60)) + ":" + align(value % 60);
    }
    return str;
}

//创造怪物的对象
/*var monsterCreater = {
    time : null,
    interval : null,
    node : null,
    getInstance : function(value){
        this.time = 0;
        this.interval = 1;
        this.node  = value;
        this.node.schedule(this.node.createMonster,this.interval);
    }
};*/

/**
 * 创建游戏场景
 */
var PlayScene = cc.Scene.extend({
    onEnter:function(){
        this._super();
        var layer = new cc.Layer();

        var bgLayer = new BgLayer();
        layer.addChild(bgLayer);//添加背景层

        monsterLayer = new cc.Layer();
        layer.addChild(monsterLayer);//添加怪物层

        heroLayer = new cc.Layer();
        layer.addChild(heroLayer);//添加hero层

        explosionLayer = new cc.Layer();
        layer.addChild(explosionLayer);//添加怪物死亡爆炸层

        var playLayer = new PlayLayer();
        layer.addChild(playLayer);//游戏层

        for(var i = 0; i <6; i++){
            var childLayer = new cc.Layer();
            monsterLayer.addChild(childLayer, 0, i + 1);
        }

        this.addChild(layer);
    }
});