var WelcomeLayer = cc.Layer.extend({
    ctor:function(){
        this._super();

        //cc.director.setDisplayStats(true);
        var winSize = cc.director.getWinSize();

        var backgroundSprite = cc.Sprite.create(res.map_00_02_jpg);
        backgroundSprite.attr({
            x: winSize.width / 2,
            y: winSize.height / 2 + 100,
            scale: 2
        });
        this.addChild(backgroundSprite);

        var mapAction =cc.RepeatForever.create(cc.Sequence.create(cc.MoveTo.create(6,cc.p(winSize.width/2,winSize.height/2-100)),
            cc.MoveTo.create(6,cc.p(winSize.width/2,winSize.height/2 + 100))));
        backgroundSprite.runAction(mapAction);

        var logoSprite = cc.Sprite.create(res.logo_png);
        logoSprite.attr({
            x: winSize.width / 2,
            y: winSize.height - 200,
            scale: 2
        });
        this.addChild(logoSprite);

        var listener = cc.EventListener.create({
            event:cc.EventListener.TOUCH_ONE_BY_ONE,
            swallowTouches:true,
            onTouchBegan:function(touch,event){
                cc.log("onTouchBegan");
                var playScene = new PlayScene();
                cc.director.pushScene(playScene);
                return true;
            }
        });
        cc.eventManager.addListener(listener,this);

        var labelStart = cc.LabelTTF.create("点击开始游戏", "Arial", 24);
        labelStart.setColor(cc.color(255,255,255,255));
        labelStart.setPosition(cc.p(winSize.width/2,300));
        var action1 = cc.RepeatForever.create(cc.Sequence.create(cc.ScaleTo.create(0.5,1.2),cc.ScaleTo.create(0.5,1)));
        labelStart.runAction(action1);
        var action2 = cc.RepeatForever.create(cc.Sequence.create(cc.FadeTo.create(0.5,255),cc.FadeTo.create(0.5,150)));
        labelStart.runAction(action2);
        this.addChild(labelStart,3);


        return true;
    }
});

var WelcomeScene = cc.Scene.extend({
    onEnter:function(){
        this._super();
//        if(isMobile.phone || isMobile.tablet){
            var welcomeLayer = new WelcomeLayer();
            this.addChild(welcomeLayer);
//        }else{
//            var label1 = cc.LabelTTF.create("请用手机浏览器打开", "Arial", 36);
//            label1.setPosition(240,400);
//            this.addChild(label1);
//        }

    }
});

