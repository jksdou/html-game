var GD = GD || {};
GD.GAME_STATE = {
    HOME: 0,
    PLAY: 1,
    OVER: 2
};
GD.UNIT_TAG = {
    ENEMY: 100,
    PLAYER: 1E3,
    PET: 1010,
    BLOOD: 1020
};
GD.ACTIVE_PETS = 0;
GD.ACTIVE_ENEMIES = 0;
GD.CONTAINER = {
    ENEMIES: [],
    BLOOD: [],
    BACKSKYS: [],
    HitMo: [],
    PET: [],
    BACKTILEMAPS: []
};
GD.LIFE = 5;
GD.PETKIND = 0;
GD.SHOWLEVEL = 0;
GD.SCORE = 0;
GD.NUM = 0;
var winSize, centerPos;
GD.word = ["0", "1"];
var BitNumLayer = cc.Layer.extend({
    timeLabel: null,
    scoreLabel: null,
    time: null,
    timeAction: null,
    ctor: function() {
        this._super()
    },
    step: function(a) {
        this.time += a
    },
    init: function() {
        this._super();
        trace("res.num_png");
        var a = cc.Sprite.create("#time.png");
        this.timeLabel = cc.LabelAtlas.create("0", res.num_png, 36, 67, "0");
        this.timeLabel._textAlign = cc.TEXT_ALIGNMENT_LEFT;
        a.x = 0.1 * winSize.width;
        this.timeLabel.anchorX = 0.5;
        this.timeLabel.x = 0.3 * winSize.width;
        this.timeLabel.y = -110 + winSize.height;
        var b = cc.Sprite.create("#quan.png");
        this.addChild(b);
        b.x = 0.4 * winSize.width;
        b.y = -77 + winSize.height;
        a.y = -77 + winSize.height;
        this.scoreLabel = cc.LabelAtlas.create("0", res.num_png, 36, 67, "0");
        this.addChild(this.scoreLabel);
        this.scoreLabel.anchorX = 0.6;
        this.scoreLabel.x = 0.6 * winSize.width;
        this.scoreLabel.y = -130 + winSize.height;
        a = cc.ScaleBy.create(0.1, 1.1);
        this.scoreLabel.scale = 1.2;
        this.timeAction = cc.Sequence.create(a, a.reverse())
    },
    setNum: function(a, b) {
        GD.SCORE += a + b;
        GD.NUM += a;
        this.scoreLabel.scale = 1;
        trace(GD.NUM);
        this.scoreLabel.setString(GD.NUM +
            "");
        this.scoreLabel.scale = 1.2
    },
    setTimeNum: function(a) {
        this.timeLabel.setString(a + '"')
    }
});
BitNumLayer.create = function() {
    var a = new BitNumLayer;
    a.init();
    return a
};
var Fire = cc.Node.extend({
    _bgs: null,
    _start: null,
    _list: [],
    _lfire: null,
    _lfireA: null,
    _rfire: null,
    _lefttx: -350,
    _fid: 0,
    _bid: 0,
    _foot: null,
    _foot2: null,
    _kind: 0,
    _x: 0,
    _action: null,
    _showspeed: 0,
    _isPassed: !1,
    ctor: function(a) {
        this._super()
    },
    step: function(a) {
        this.time += a
    },
    init: function() {
        this._super();
        this._lfire = new cc.Sprite.create;
        this._foot = new cc.Sprite.create("#mfire.png");
        this._foot2 = new cc.Sprite.create("#mfire2.png");
        this._foot2.x = this._foot.x = 80;
        this._foot2.y = -230;
        this._foot.y = -180;
        this._lfire.addChild(this._foot,
            0);
        this._foot.visible = !1;
        this._lfire.addChild(this._foot2, 0);
        this._foot2.visible = !1;
        for (var a = [], b = 1; 3 >= b; b++) {
            var c = "lfire000" + b + ".png",
                c = cc.spriteFrameCache.getSpriteFrame(c);
            a.push(c)
        }
        this._lfireA = new cc.Sprite.create;
        this._action = cc.RepeatForever.create(cc.Animate.create(cc.Animation.create(a, 0.1)));
        this._lfireA.runAction(this._action);
        this._lfire.addChild(this._lfireA);
        this._rfire = new cc.Sprite.create("#rfire0001.png");
        a = [];
        for (b = 1; 3 >= b; b++) c = "rfire000" + b + ".png", c = cc.spriteFrameCache.getSpriteFrame(c),
            a.push(c);
        a = cc.RepeatForever.create(cc.Animate.create(cc.Animation.create(a, 0.1)));
        this._rfire.runAction(a)
    },
    setKind: function(a) {
        this._kind = a;
        0 == a ? (this._foot.visible = !0, this._foot2.visible = !1, this._lfire.y = this._rfire.y = winSize.height / 2 + 20) : (this._foot.visible = !1, this._foot2.visible = !0, this._lfire.y = this._rfire.y = winSize.height / 2 + 130);
        this._lfire.y += 1
    },
    setX: function(a) {
        this._x = a;
        this._lfire.x = a;
        this._rfire.x = a + 134
    },
    update: function() {
        this._lfire.x = this._x;
        this._rfire.x = this._x + 130
    }
});
Fire.create = function() {
    var a = new Fire;
    a.init();
    return a
};
var Helo = cc.Sprite.extend({
    eID: 0,
    active: !0,
    direct: 1,
    zOrder: 30,
    hurtAction: null,
    standAction: null,
    attactActionList: [],
    lock: !1,
    potList: [
        [-20, 19],
        [-80, 32],
        [-20, 40],
        [0, 0],
        [12, -6]
    ],
    frameObj: {},
    frameActionObj: null,
    frameList: [],
    state: "no",
    isAim: !1,
    dx: 0,
    dy: 0,
    oriy: 0,
    _isDouble: !1,
    powerx: 10,
    actiondata: [
        [
            [1, 2, 3, 4, 5, 6], "run"
        ],
        [
            [7, 8], "up"
        ],
        [
            [9, 9, 10, 10], "jump"
        ],
        [
            [15, 15, 16, 16, 16, 17, 17], "jump2"
        ],
        [
            [12, 12, 13, 14], "down"
        ],
        [
            [21, 22, 23, 24, 25, 26, 27, 28], "ready"
        ],
        [
            [23, 24, 25, 26, 27, 28], "die"
        ]
    ],
    ctor: function() {
        this._super("#role0021.png");
        this.install();
        this.anchorX = 0.5;
        this.anchorY = 0;
        this.g = 0.5;
        this.t = this.time = 0;
        this.lock = !0;
        this.state = "ready";
        this.runAction(this.frameObj.ready)
    },
    install: function() {
        var a = "",
            b = this.actiondata;
        this.frameObj = {};
        this.frameActionObj = {};
        for (var c = [], f, d = 0; d < b.length; d++) {
            for (var c = [], e = b[d][0], g = 0; g < e.length; g++) a = e[g], a = 10 > a ? "00" + a : 100 > a ? "0" + a : a, a = "role0" + a + ".png", a = cc.spriteFrameCache.getSpriteFrame(a), c.push(a);
            e = b[d][1];
            this.frameActionObj[e] = cc.Animation.create(c, 0.1);
            "run" == e ? f = cc.RepeatForever.create(cc.Animate.create(this.frameActionObj[e])) :
                "jump" == e || "jump2" == e ? f = cc.Sequence.create(cc.Animate.create(this.frameActionObj[e]), cc.CallFunc.create(this.jumpHigh, this)) : "ready" == e ? f = cc.Sequence.create(cc.Animate.create(this.frameActionObj[e]), cc.CallFunc.create(this.readyMove, this)) : "up" == e ? (this.frameActionObj.up = cc.Animation.create(c, 0.05), f = cc.Sequence.create(cc.Animate.create(this.frameActionObj[e]), cc.CallFunc.create(this.upHorse, this))) : "down" == e ? f = cc.Sequence.create(cc.Animate.create(this.frameActionObj[e]), cc.CallFunc.create(this.jumpEnd,
                    this)) : "die" == e && (f = cc.Sequence.create(cc.Animate.create(this.frameActionObj[e]), cc.CallFunc.create(this.dieEnd, this)));
            this.frameObj[e] = f
        }
    },
    upHorse: function() {
        this.stopAllActions();
        this._isDouble ? (this.state = "jump2", this.runAction(this.frameObj.jump2)) : (this.state = "jump", this.runAction(this.frameObj.jump))
    },
    readyMove: function() {
        "ready" == this.state && (this.lock = !1, g_sharedGameLayer.toRun(), this.run())
    },
    speedUp: function(a) {
        if (0 == a % 5) {
            a = Math.floor(a / 5);
            a = 13 < a ? 13 : a;
            this.powerx = a + 10;
            a = 1 - 0.04 * a;
            for (var b =
                0; b < this.actiondata.length; b++) {
                var c = this.actiondata[b][1];
                this.frameActionObj[c].setDelayPerUnit(this.frameActionObj[c].getDelayPerUnit() * a);
                "run" == c ? action = cc.RepeatForever.create(cc.Animate.create(this.frameActionObj[c])) : "jump" == c || "jump2" == c ? action = cc.Sequence.create(cc.Animate.create(this.frameActionObj[c]), cc.CallFunc.create(this.jumpHigh, this)) : "ready" == c ? action = cc.Sequence.create(cc.Animate.create(this.frameActionObj[c]), cc.CallFunc.create(this.readyMove, this)) : "up" == c ? action = cc.Sequence.create(cc.Animate.create(this.frameActionObj[c]),
                    cc.CallFunc.create(this.upHorse, this)) : "down" == c ? action = cc.Sequence.create(cc.Animate.create(this.frameActionObj[c]), cc.CallFunc.create(this.jumpEnd, this)) : "die" == c && (action = cc.Sequence.create(cc.Animate.create(this.frameActionObj[c]), cc.CallFunc.create(this.dieEnd, this)));
                this.frameObj[c] = action
            }
        }
    },
    jumpHigh: function() {
        this.state = "down";
        this.runAction(this.frameObj.down)
    },
    jumpEnd: function() {
        this._isDouble = !1;
        this.run();
        g_sharedGameLayer.toJump()
    },
    dieEnd: function() {
        g_sharedGameLayer.onGameOver()
    },
    update: function(a) {
        this.lock || (this.dx = this.powerx)
    },
    run: function() {
        this.state = "run";
        this.stopAllActions();
        this.runAction(this.frameObj.run)
    },
    toJump: function(a) {
        this._isDouble = 0 == a ? !1 : !0;
        this.stopAllActions();
        this.state = "up";
        this.runAction(this.frameObj.up)
    },
    touch: function(a) {
        "run" == this.state && this.toJump(a)
    },
    toDie: function() {
        this.stopAllActions();
        this.state = "die";
        this.runAction(this.frameObj.die)
    },
    destroy: function() {
        this.active = this.visible = !1;
        this.attactActionList = [];
        this.stopAllActions()
    },
    attactRect: function() {
        return cc.rect(this.x, -1, 130, -1)
    },
    collideRect: function(a, b) {
        return cc.rect(this.x, -1, 20, -1)
    }
});
Helo.getOrCreateEnemy = function(a) {
    return this
};
Helo.create = function() {
    return new Helo
};
var BgLayer = cc.Layer.extend({
    _bgs: null,
    _start: null,
    _bglist: [],
    _bgfshow: [],
    _bgbshow: [],
    _lefttx: -350,
    _fid: 0,
    _imgw: 853,
    _bid: 0,
    ctor: function() {
        this._super()
    },
    step: function(a) {
        this.time += a
    },
    init: function() {
        this._super();
        this._lefttx = -this._imgw / 2;
        this._bgs = cc.Node.create();
        this.addChild(this._bgs);
        var a = [res.bg_png, res.bg_png];
        this._bgfshow = [];
        this._bglist = [];
        for (var b = 0; 2 > b; b++) {
            var c = cc.Sprite.create(a[b]);
            c.anchorY = 0;
            this._bgs.addChild(c);
            c.visible = !0;
            c.y = 0;
            this._bglist.push(c)
        }
        this._bgfshow.push(this._bglist[0]);
        this._bgfshow.push(this._bglist[1]);
        this._bgfshow[1].x = this._bgfshow[0].x + this._imgw - 1;
        this._fid = 1;
        for (b = 0; 1 >= b; b++) this._bgfshow[b].visible = !0
    },
    update: function(a, b) {
        for (var c = 0; 2 > c; c++) this._bgfshow[c].x += a;
        this._bgfshow[0].x < this._lefttx && (c = this._bgfshow.shift(), c.visible = !1, this._fid += 1, this._bgfshow.push(c), this._bgfshow[1].x = this._bgfshow[0].x + this._imgw - 1, this._bgfshow[1].visible = !0)
    },
    destroy: function() {
        this._bgs.removeAllChildren();
        this.removeAllChildren();
        this._bgfshow = [];
        this._bglist = []
    },
    setIndex: function(a, b) {}
});
BgLayer.create = function() {
    var a = new BgLayer;
    a.init();
    return a
};
var MenuLayer = cc.Layer.extend({
        menu: null,
        title: null,
        isIntro: !1,
        _bglayer: null,
        logo: null,
        ctor: function() {
            this._super()
        },
        init: function() {
            this._super();
            cc.spriteFrameCache.addSpriteFrames(res.game_plist);
            cc.spriteFrameCache.addSpriteFrames(res.cb_plist);
            centerPos = cc.p(winSize.width / 2, winSize.height / 2);
            this._bglayer = BgLayer.create();
            this.addChild(this._bglayer);
            this._bglayer.y = 200;
            this.logo = cc.Layer.create();
            this.logo.x = winSize.width / 2;
            this.logo.y = winSize.height;
            this.title = cc.Sprite.create("#title.png");
            this.addChild(this.title);
            this.title.x = winSize.width / 2;
            this.title.y = winSize.height;
            var a = cc.Sprite.create("#cb0001.png");
            a.x = this.title.width / 2 - 2;
            a.y = this.title.height / 2;
            a.anchorX = 0.5;
            this.title.addChild(a, -1);
            for (var b = [], c, f = 1; 19 >= f; f++) c = 10 > f ? "0" + f : f, c = "cb00" + c + ".png", c = cc.spriteFrameCache.getSpriteFrame(c), b.push(c);
            b = cc.RepeatForever.create(cc.Animate.create(cc.Animation.create(b, 0.06)));
            a.runAction(b);
            this.title.anchorX = 0.5;
            a = cc.MoveTo.create(0.3, cc.p(winSize.width / 2, 0.6 * winSize.height));
            this.title.runAction(a);
            a = cc.Sprite.create("#frontbg.png");
            a.anchorY = 0;
            a.x = winSize.width / 2;
            a.y = 0;
            this.addChild(a);
            this.menu = cc.Sprite.create("#start0001.png");
            this.menu.x = winSize.width / 2;
            this.addChild(this.menu, 1);
            this.menu.anchorY = 0;
            this.menu.y = 40;
            this.initEvent();
            a = cc.Sprite.create(cc.tglogotexture2d);
            a.y = 26;
            a.anchorX = 0.5;
            a.x = winSize.width / 2;
            this.addChild(a);
            this.scheduleUpdate()
        },
        update: function(a) {
            this._bglayer.update(-5)
        },
        setIntro: function() {
            var a = cc.Sprite.create(res.gameintro);
            this.addChild(a, 0);
            a.y = 0.5 * winSize.height;
            a.x = winSize.width / 2;
            this.isIntro = !0;
            cc.eventManager.removeAllListeners();
            this.removeChild(this.menu);
            this.menu = cc.Sprite.create("#ok0001.png");
            this.menu.x = winSize.width / 2;
            this.addChild(this.menu, 1);
            this.menu.anchorY = 0;
            this.menu.y = 100;
            this.initEvent()
        },
        initEvent: function() {
            var a = this,
                b = cc.EventListener.create({
                    event: cc.EventListener.TOUCH_ONE_BY_ONE,
                    swallowTouches: !1,
                    onTouchBegan: function(c, b) {
                        var d = b.getCurrentTarget(),
                            e = d.convertToNodeSpace(c.getLocation()),
                            d = d.getContentSize(),
                            d = cc.rect(0, 0, d.width,
                                d.height);
                        return cc.rectContainsPoint(d, e) ? (a.menu.y -= 3, setTimeout(function() {
                            a.onPlay()
                        }, 20), !0) : !1
                    },
                    onTouchEnded: function(c, b) {
                        a.menu.y += 3;
                        return !1
                    }
                });
            cc.eventManager.addListener(b, a.menu)
        },
        onPlay: function() {
            this.isIntro ? (GD.SOUND && (cc.audioEngine.playMusic(res.bgsound, !0), cc.audioEngine.setMusicVolume(0.6)), /*pgvSendClick && "function" == typeof pgvSendClick && pgvSendClick({
                hottag: "h5game.horsegame.start"
            }),*/ cc.director.runScene(cc.TransitionFade.create(0.3, GameScene.create()))) : (cc.spriteFrameCache.removeSpriteFramesFromFile(res.cb_plist),
                this.removeChild(this.title), this.setIntro())
        }
    }),
    MenuScene = cc.Scene.extend({
        onEnter: function() {
            this._super();
            var a = new MenuLayer;
            a.init();
            this.addChild(a)
        }
    });
MenuScene.create = function() {
    var a = new MenuScene;
    return a && a.init() ? a : null
};
STATE_PLAYING = 0;
STATE_GAMEOVER = 1;
var g_sharedGameLayer, GameLayer = cc.Layer.extend({
        _size: 0,
        _helo: null,
        _heloB: null,
        _time: GD.MAXTIME,
        _midx: 0,
        _attactzone: [],
        _npcontainer: null,
        _introscene: null,
        _live: 0,
        _dataLayer: null,
        _state: STATE_PLAYING,
        _hitUI: null,
        numLayer: null,
        _hitNum: 0,
        _barRenderer: null,
        _time2: 0,
        _others: null,
        _bgs: null,
        _space: 60,
        _bgbg: null,
        _bglayer: null,
        isRun: !1,
        _oneHitBtn: null,
        _twoHiBtn: null,
        _locktime: 5,
        _firelist: [],
        clicked: !1,
        _isChecked: !1,
        ctor: function() {
            this._super()
        },
        init: function() {
            if (this._super()) {
                this._space = 40;
                GD.SCORE = 0;
                this._time = GD.NUM = 0;
                this._midx = winSize.width / 2;
                this._leftmidx = this._midx / 2 - 120;
                this._rightmidx = this._midx + 120;
                g_sharedGameLayer = this;
                this.initBg();
                this.initRoles();
                this.initData();
                this.initUserControl();
                var a = cc.Sprite.create(cc.tglogotexture2d);
                a.y = 26;
                a.anchorX = 0.5;
                a.x = winSize.width / 2;
                this._state = STATE_PLAYING;
                this.schedule(this.clockCounter2, 1);
                this.scheduleUpdate()
            }
        },
        toRun: function() {
            this.isRun = !0
        },
        toJump: function(a) {
            this._isChecked = !1
        },
        initRoles: function() {
            cc.spriteFrameCache.addSpriteFrames(res.role_plist);
            cc.spriteFrameCache.addSpriteFrames(res.rolef_plist);
            var a = cc.textureCache.addImage(res.role_png);
            this._heloB = cc.SpriteBatchNode.create(a);
            this._heloB.setBlendFunc(cc.SRC_ALPHA, cc.ONE);
            this.addChild(this._heloB);
            this._helo = Helo.create();
            this._heloB.addChild(this._helo, 1);
            this._helo.y = 0.3 * winSize.height;
            this._helo.x = winSize.width / 3;
            this._firelist = [];
            for (a = 0; 2 > a; a++) {
                var b = Fire.create();
                this._heloB.addChild(b._foot, 0);
                this._heloB.addChild(b._lfire, 0);
                this._heloB.addChild(b._rfire, 2);
                b._showspeed = winSize.width;
                b.setX(2 * winSize.width * (1 + 1 * a));
                this._firelist.push(b)
            }
            this._firelist[0].setKind(0);
            this._firelist[1].setKind(1);
            trace(this._firelist[1]._kind)
        },
        initData: function() {
            this._live = this._time = this._time2 = 0;
            this._dataLayer = BitNumLayer.create();
            this.addChild(this._dataLayer)
        },
        initUserControl: function() {
            var a = this,
                b = cc.EventListener.create({
                    event: cc.EventListener.TOUCH_ONE_BY_ONE,
                    swallowTouches: !1,
                    onTouchBegan: function(b, f) {
                        var d = f.getCurrentTarget(),
                            e = d.convertToNodeSpace(b.getLocation()),
                            g = d.getContentSize(),
                            g = cc.rect(0, 0, g.width, g.height);
                        return cc.rectContainsPoint(g, e) ? (d.y -= 2, d == a._oneHitBtn ? a._helo.touch(0) : d == a._twoHiBtn && a._helo.touch(1), !0) : !1
                    },
                    onTouchEnded: function(b, f) {
                        a.processTouchEndEvent(f.getCurrentTarget());
                        return !0
                    }
                });
            cc.eventManager.addListener(b, this._oneHitBtn);
            cc.eventManager.addListener(b.clone(), this._twoHiBtn)
        },
        clickEvent: function() {
            this.clicked && (this.clicked = !1)
        },
        initBg: function() {
            cc.spriteFrameCache.addSpriteFrames(res.game_plist);
            this._bglayer = BgLayer.create();
            this.addChild(this._bglayer);
            this._bglayer.y = 200;
            var a = cc.Sprite.create("#frontbg.png");
            a.anchorY = 0;
            a.x = winSize.width / 2;
            a.y = 0;
            this.addChild(a);
            this._oneHitBtn = cc.Sprite.create("#left.png");
            this._oneHitBtn.anchorY = 0;
            this._oneHitBtn.x = winSize.width / 2 - 150;
            this._oneHitBtn.y = 40;
            this.addChild(this._oneHitBtn);
            this._twoHiBtn = cc.Sprite.create("#right.png");
            this._twoHiBtn.anchorY = 0;
            this._twoHiBtn.x = winSize.width / 2 + 150;
            this._twoHiBtn.y = 40;
            this.addChild(this._twoHiBtn)
        },
        addPet: function(a, b, c) {
            this._roles.addChild(a, b, c)
        },
        removePet: function(a) {
            this._roles.addChild(a)
        },
        clockCounter2: function() {
            this._state == STATE_PLAYING && (this._time2 += 1, this._helo.speedUp(this._time2))
        },
        processTouchEndEvent: function(a) {
            a == this._oneHitBtn ? this._oneHitBtn.y += 2 : this._twoHiBtn.y += 2
        },
        processTouchEvent: function(a) {},
        update: function(a) {
            this._state == STATE_PLAYING && (0 >= this._locktime ? this._locktime = 5 : this._locktime--, this.checkIsCollide(a), this.updateUI())
        },
        checkIsCollide: function(a) {
            if (this.isRun) {
                this._helo.update();
                var b = -this._helo.dx;
                this._bglayer.update(b);
                for (var c = 0; 2 > c; c++) {
                    if (a =
                        this._firelist[c]) a._x += b, a.update(b);
                    if (!a._isPassed && !this._isChecked && -20 > a._x - this._helo.x)
                        if (this._isChecked = !0, "jump2" == this._helo.state && 1 == a._kind || "jump" == this._helo.state && 0 == a._kind) a._isPassed = !0, this._dataLayer.setNum(1, a._kind);
                        else {
                            this.toDie();
                            return
                        }
                }
                a = this._firelist[0]; - 150 > a._x && (a._x = this._firelist[1]._x + a._showspeed * (1 * Math.random() + 1), a._isPassed = !1, b = Math.floor(2 * Math.random()), a.setKind(b), this._firelist.shift(), this._firelist.push(a))
            }
        },
        updateUI: function() {},
        clearEmeny: function() {
            for (i =
                0; i < GD.CONTAINER.ENEMIES.length; i++) {
                var a = GD.CONTAINER.ENEMIES[i];
                a && this._roles.removeChild(a)
            }
            GD.CONTAINER.ENEMIES = []
        },
        toDie: function() {
            this._state = STATE_GAMEOVER;
            this._helo.toDie()
        },
        onGameOver: function() {
            this.isRun = !1;
            this._state = STATE_GAMEOVER;
            this.unschedule(this.clockCounter2, 0.1);
            this._bglayer.destroy();
            this._heloB.removeAllChildren();
            this._helo = null;
            cc.eventManager.removeAllListeners();
            cc.spriteFrameCache.removeSpriteFramesFromFile(res.rolef_plist);
            cc.spriteFrameCache.removeSpriteFramesFromFile(res.role_plist);
            cc.director.runScene(GameOverScene.create())
        },
        reStart: function() {
            this.init()
        }
    }),
    GameScene = cc.Scene.extend({
        onEnter: function() {
            this._super();
            var a = new GameLayer;
            a.init();
            this.addChild(a)
        }
    });
GameScene.create = function() {
    var a = new GameScene;
    return a && a.init() ? a : null
};
var GameOverLayer = cc.Layer.extend({
        _time: null,
        _bg: null,
        _scoreLabel: null,
        _sharelayer: null,
        _viewB: null,
        sharemenu: null,
        againmenu: null,
        downmenu: null,
        _sharebg: null,
        isShare: !1,
        ctor: function() {
            this._super()
        },
        init: function() {
            cc.spriteFrameCache.addSpriteFrames(res.gameover_plist);
            this.initBg();
            this.initMenu();
            var a = cc.Sprite.create(cc.tglogotexture2d);
            a.y = 26;
            a.anchorX = 0.5;
            a.x = winSize.width / 2;
            this.createshare();
            this.hideShare()
        },
        initEvent: function() {
            var a = this,
                b = cc.EventListener.create({
                    event: cc.EventListener.TOUCH_ONE_BY_ONE,
                    swallowTouches: !1,
                    onTouchBegan: function(b, f) {
                        var d = f.getCurrentTarget(),
                            e = d.convertToNodeSpace(b.getLocation()),
                            g = d.getContentSize(),
                            g = cc.rect(0, 0, g.width, g.height);
                        if (cc.rectContainsPoint(g, e)) {
                            trace("\x3d---" + a.isShare + d);
                            if (!1 == a.isShare) {
                                d.y -= 2;
                                if (d == a.sharemenu) trace("shrae0"), a.onShare();
                                else if (d == a.againmenu) a.onAgain();
                                else if (d == a.downmenu) a.onDownLoad();
                                return !0
                            }
                            d == a._sharebg && a.hideShare()
                        }
                        return !1
                    },
                    onTouchEnded: function(a, b) {
                        var d = b.getCurrentTarget();
                        d.y += 2
                    }
                });
            cc.eventManager.addListener(b,
                this.sharemenu);
            cc.eventManager.addListener(b.clone(), this.againmenu);
            cc.eventManager.addListener(b.clone(), this.downmenu);
            cc.eventManager.addListener(b.clone(), this._sharebg)
        },
        initMenu: function() {
            var a = this;
            this.sharemenu = cc.Sprite.create("#sharebtn.png");
            this.againmenu = cc.Sprite.create("#again.png");
            this.downmenu = cc.Sprite.create("#get0001.png");
            this.addChild(this.sharemenu);
            this.addChild(this.againmenu);
            this.addChild(this.downmenu);
            this.downmenu.x = this.againmenu.x = this.sharemenu.x = winSize.width /
                2;
            this.sharemenu.y = winSize.height / 2 - 20;
            this.downmenu.y = winSize.height / 2 - 160;
            this.againmenu.y = 100;
            setTimeout(function() {
                a.initEvent()
            }, 200)
        },
        initBg: function() {
            this._sharelayer = null;
            this._bg = cc.Sprite.create(res.bg_png);
            this.addChild(this._bg, 0);
            this._bg.anchorY = 0;
            this._bg.x = winSize.width / 2;
            this._bg.y = 200;
            this.addChild(this._bg);
            var a = cc.Sprite.create("#score.png");
            this.addChild(a);
            a.y = 0.6 * winSize.height;
            a.x = winSize.width / 2;
            a = cc.Sprite.create("#frontbg.png");
            a.anchorY = 0;
            a.x = winSize.width / 2;
            a.y = 0;
            this.addChild(a);
            this._scoreLabel = cc.LabelAtlas.create("0", res.num_png, 36, 65, "0");
            this.addChild(this._scoreLabel);
            this._scoreLabel.color = cc.color.RED;
            this._scoreLabel.anchorX = 0.5;
            this._scoreLabel.setString(GD.NUM);
            this._scoreLabel.x = 0.5 * winSize.width + 100;
            this._scoreLabel.y = 0.6 * winSize.height + 80;
            this._scoreLabel.scale = 1.5;
            a = cc.LabelTTF.create("", "Arial", 50);
            this.addChild(a);
            a.color = cc.color.RED;
            a.anchorX = 0.5;
            a.setString(GD.NUM);
            a.x = 0.5 * winSize.width + 30;
            a.y = 0.5 * winSize.height + 95
        },
        hideShare: function() {
            this.isShare = !1;
            this._sharebg && (this._sharebg.visible = !1)
        },
        showShare: function() {
            this.isShare = !0;
            this._sharebg.visible = !0
        },
        createshare: function() {
            trace("createshare");
            if (!this._sharebg) {
                this._sharebg = new cc.Layer.create;
                this.share = cc.Sprite.create("#share.png");
                this.share.anchorX = 1;
                this.share.anchorY = 1;
                this.share.x = winSize.width - 20;
                this.share.y = winSize.height - 10;
                var a = cc.DrawNode.create();
                a.drawRect(cc.p(-56, -10), cc.p(800, winSize.height + 20), cc.color(25, 25, 25, 180), 0, 0);
                this._sharebg.addChild(a);
                this._sharebg.addChild(this.share);
                this.addChild(this._sharebg)
            }
        },
        onAgain: function() {
            // pgvSendClick && "function" == typeof pgvSendClick && pgvSendClick({
            //     hottag: "h5game.horsegame.again"
            // });
            cc.spriteFrameCache.removeSpriteFramesFromFile(res.npc_plist);
            cc.director.runScene(cc.TransitionFade.create(0.3, GameScene.create()))
        },
        onDownLoad: function() {
            // pgvSendClick && "function" == typeof pgvSendClick && pgvSendClick({
            //     hottag: "h5game.horsegame.download"
            // });
            // window.open("http://dnf.qq.com/act/a20140918wxlucky/index.htm", "_blank")
        },
        onShare: function() {
            // pgvSendClick &&
            //     "function" == typeof pgvSendClick && pgvSendClick({
            //         hottag: "h5game.horsegame.sharebtn"
            //     });
            this.showShare()
        },
        onOver: function() {}
    }),
    GameOverScene = cc.Scene.extend({
        onEnter: function() {
            this._super();
            var a = new GameOverLayer;
            a.init();
            this.addChild(a)
        }
    });
GameOverScene.create = function() {
    var a = new GameOverScene;
    return a && a.init() ? a : null
};
cc.game.onStart = function() {
    cc.sys.isMobile ? cc.view.setDesignResolutionSize(640, 1008, cc.ResolutionPolicy.FIXED_HEIGHT) : cc.view.setDesignResolutionSize(640, 1008, cc.ResolutionPolicy.SHOW_ALL);
    winSize = cc.director.getWinSize();
    cc.LoaderScene.preload(g_mainmenu, function() {
        cc.director.runScene(MenuScene.create())
    }, this)
}; /*  |xGv00|95b26c12cfec2fb4c476231d744743c9 */