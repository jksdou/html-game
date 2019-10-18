function isAndroid() {
    return /Android/i.test(navigator.userAgent)
}
var atype = "",
    atype = isAndroid() ? ".ogg" : ".mp3",
    res = {
        role_plist: "res/roles.plist",
        role_png: "res/roles.png",
        light_plist: "res/light.plist",
        light_png: "res/light.png",
        blood_plist: "res/blood.plist",
        blood_png: "res/blood.png",
        game_png: "res/games.png",
        game_plist: "res/games.plist",
        num_png: "res/num50.png",
        bg: "res/gamebg.png",
        shareword: "res/shareword.png"
    },
    g_mainmenu = [res.game_plist, res.game_png, res.role_png, res.role_plist, res.light_png, res.light_plist, res.blood_png, res.blood_plist, res.num_png, res.bg, res.shareword];
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
    LIGHT: [],
    LIGHT2: [],
    BACKSKYS: [],
    HitMo: [],
    PET: [],
    BACKTILEMAPS: []
};
GD.ENEMIES = {};
GD.ENEMIES.DATA = [{
    power: 0.6,
    live: 1,
    speed: 4,
    fimg: "npc1",
    bimg: "npc2"
}, {
    power: 1,
    live: 1,
    speed: 4,
    fimg: "npc3",
    bimg: "npc4"
}];
GD.LIFE = 10;
GD.PETKIND = 0;
GD.SHOWLEVEL = 0;
GD.SCORE = 0;
var winSize, centerPos;
GD.word = ["0", "1"];
var BitNumLayer = cc.Layer.extend({
    timeLabel: null,
    scoreLabel: null,
    time: null,
    timeAction: null,
    _bg: null,
    ctor: function() {
        this._super()
    },
    step: function(a) {
        this.time += a
    },
    init: function() {
        this._super();
        this.scoreLabel = cc.LabelAtlas.create("0", res.num_png, 65, 87, "0");
        this.addChild(this.scoreLabel);
        this.scoreLabel.anchorX = 0.5;
        this.scoreLabel.x = winSize.width / 2;
        this.scoreLabel.y = -120 + winSize.height;
        var a = cc.ScaleBy.create(0.1, 1.2);
        this.scoreLabel.scale = 0.8;
        cc.ScaleBy.create(2, 0.25, 4.5);
        this.timeAction = cc.Sequence.create(a,
            a.reverse());
        this.schedule(this.step);
        this.setTimeNum(0)
    },
    setNum: function(a) {
        GD.SCORE += a;
        trace("--------SCORE---" + GD.SCORE);
        this.scoreLabel.scale = 0.8;
        this.scoreLabel.runAction(this.timeAction);
        this.scoreLabel.setString(GD.SCORE + "")
    },
    setTimeNum: function(a) {}
});
BitNumLayer.create = function() {
    var a = new BitNumLayer;
    a.init();
    return a
};
var Fire = cc.Layer.extend({
    _tao: null,
    _live: 3,
    _action: null,
    _hp: null,
    _barRenderer: null,
    _barsize: null,
    barbg: null,
    ctor: function(a) {
        this._super()
    },
    setLive: function(a) {
        0 != this._live && (this._live -= a, 0 >= this._live && (this._live = 0, this.toEnd()), a = 100 * (this._live / GD.LIFE) | 0, a = Math.min(a, 100), this._barRenderer && this._barRenderer.setTextureRect(cc.rect(0, 0, 95 * a / 100, 10)))
    },
    step: function(a) {
        this.time += a
    },
    init: function() {
        this._super();
        this._barRenderer = new cc.Sprite.create("#bar.png");
        this._barsize = [this._barRenderer.width,
            this._barRenderer.height
        ];
        this._live = GD.LIFE;
        var a = new cc.Sprite.create("#bar.png");
        a.color = cc.color(25, 25, 25, 150);
        a.anchorX = this._barRenderer.anchorX = 0;
        a.anchorY = this._barRenderer.anchorY = 0;
        a.x = this._barRenderer.x = -50;
        a.y = this._barRenderer.y = 160;
        a.y -= 3;
        this.addChild(a);
        this.barbg = a;
        this._barRenderer.color = cc.color.RED;
        this.addChild(this._barRenderer);
        this._tao = new cc.Sprite.create("#ta0001.png");
        this._tao.anchorY = 0.3;
        this._tao.anchorX = 0.55;
        this.addChild(this._tao);
        for (var a = [], b = 1; 12 >= b; b++) {
            var c =
                cc.spriteFrameCache.getSpriteFrame("ta00" + (9 < b ? b : "0" + b) + ".png");
            a.push(c)
        }
        this._action = cc.Sequence.create(cc.Animate.create(cc.Animation.create(a, 0.06)), cc.CallFunc.create(this.gameOver, this));
        this.setLive(0)
    },
    toEnd: function() {
        this.barbg.visible = !1;
        this._tao.runAction(this._action);
        g_sharedGameLayer.loseGame()
    },
    gameOver: function() {}
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
    hurtAction: null,
    standAction: null,
    hasFired: !1,
    attactKind: 0,
    lock: !1,
    ax: 0,
    ay: 0,
    ox: 0,
    oy: 0,
    apot: null,
    addpot: null,
    speednum: 20,
    speedp: null,
    nextaim: null,
    isOpen: !1,
    roadlist: [],
    _draw: null,
    circle: 140,
    _linep: null,
    ctor: function() {
        this._super("#role0001.png");
        this.install();
        this.anchorY = this.anchorX = 0.5;
        this.runAction(this.frameObj.round);
        this.isOpen = !0;
        this.scale = 1.1
    },
    install: function() {
        this.apot = this.getPosition();
        this.attactActionList = [];
        var a = [
                [
                    [2, 9], "round"
                ],
                [
                    [10, 42], "die"
                ]
            ],
            b;
        this.frameObj = {};
        for (var c = [], e, d = 0; d < a.length; d++)
            for (var c = [], f = a[d][0], g = f[0]; g < f[1]; g++) b = g, b = 10 > b ? "00" + b : 100 > b ? "0" + b : b, str = "role0" + b + ".png", b = cc.spriteFrameCache.getSpriteFrame(str), c.push(b), b = a[d][1], "round" == b ? e = cc.RepeatForever.create(cc.Animate.create(cc.Animation.create(c, 0.025))) : "die" == b && (e = cc.Sequence.create(cc.Animate.create(cc.Animation.create(c, 0.05)), cc.CallFunc.create(this.destroy, this))), e.retain(), this.frameObj[a[d][1]] = e
    },
    setDirect: function(a) {
        this.scaleX =
            this.direct = a
    },
    setNewPot: function(a) {
        a.x == this.apot.x && a.y == this.apot.y || (this.apot = a, this.findRoad())
    },
    update: function(a) {
        this.nextaim && (cc.pDistance(this.nextaim, this.getPosition()) > this.speednum ? (a = cc.pAdd(this.getPosition(), this.speedp), this.setPosition(a)) : (this.setPosition(this.nextaim), this.roadlist.shift(), this.refreshNext()), this.scale = (1E3 - this.y) / 1E3 + 0.7, this.scale = 1.2 < this.scale ? 1.2 : this.scale)
    },
    refreshNext: function() {
        1 < this.roadlist.length ? (this.nextaim = this.roadlist[1], this.speedp = cc.pMult(cc.pNormalize(cc.pSub(this.nextaim,
            this.getPosition())), this.speednum), this.drawdot(this.roadlist)) : (this._draw.clear(), this.nextaim = null)
    },
    findRoad: function() {
        this.roadlist = [];
        this.roadlist.push(this.getPosition());
        cc.pDistance(this.getPosition(), this.apot);
        var a = cc.pDistance(centerPos, this.getPosition());
        this._linep = cc.pSub(this.apot, this.getPosition());
        var b = cc.pSub(centerPos, this.getPosition()),
            c = cc.pNormalize(this._linep),
            e = cc.pAngle(b, this._linep),
            d = Math.floor(a * Math.sin(e)),
            a = Math.floor(a * Math.cos(e));
        cc.pDistance(centerPos,
            this.apot) < this.circle ? (b = Math.sqrt(this.circle * this.circle - d * d), cc.pSub(centerPos, this._linep), this.apot = cc.pAdd(this.getPosition(), cc.pMult(c, a - b))) : (e = 180 * cc.pAngle(cc.pSub(this.apot, centerPos), cc.pSub(this.getPosition(), centerPos)) / Math.PI, d < this.circle && 90 < e && (c = cc.pSub(cc.pMult(c, a), b), c = cc.pAdd(centerPos, cc.pMult(cc.pNormalize(c), this.circle)), this.roadlist.push(c)));
        this.roadlist.push(this.apot);
        c = [];
        for (b = 0; b < this.roadlist.length - 1; b++)
            if (d = cc.pDistance(this.roadlist[b + 1], this.roadlist[b]),
                25 < d) {
                d = Math.floor(d / 25);
                a = cc.pNormalize(cc.pSub(this.roadlist[b + 1], this.roadlist[b]));
                for (e = 0; e <= d; e++) {
                    var f = cc.pAdd(this.roadlist[b], cc.pMult(a, 25 * e));
                    c.push(f)
                }
            } else c.push(this.roadlist[b]);
        this.roadlist = c;
        this.drawdot(this.roadlist);
        this.refreshNext()
    },
    drawdot: function(a) {
        this._draw || (this._draw = cc.DrawNode.create(), g_sharedGameLayer.addRoad(this._draw));
        this._draw.clear();
        for (var b = 0; b < a.length - 1; b++) this._draw.drawDot(a[b], 5, cc.color(0, 255, 255, 50))
    },
    destroy: function() {
        this.scheduleOnce(this.callBackOver,
            0.5);
        this.attactActionList = [];
        this.stopAllActions()
    },
    callBackOver: function() {
        g_sharedGameLayer.onGameOver()
    },
    attactRect: function() {
        return cc.rect(this.x, this.y, 100, 100)
    },
    toDie: function() {
        this.stopAllActions();
        this.runAction(this.frameObj.die)
    }
});
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
        for (var a = [res.bg_png, res.bg_png], b = 0; 2 > b; b++) {
            var c = cc.Sprite.create(a[b]);
            c.anchorY = 0;
            this._bgs.addChild(c);
            c.visible = !0;
            c.y = 0;
            this._bglist.push(c)
        }
        this._bgfshow.push(this._bglist[0]);
        this._bgfshow.push(this._bglist[1]);
        this._bgfshow[1].x = this._bgfshow[0].x + this._imgw;
        this._fid = 1;
        for (b = 0; 1 >= b; b++) this._bgfshow[b].visible = !0
    },
    update: function(a, b) {
        for (var c = 0; 2 > c; c++) this._bgfshow[c].x += a;
        this._bgfshow[0].x < this._lefttx && (c = this._bgfshow.shift(), c.visible = !1, this._fid += 1, this._bgfshow.push(c), this._bgfshow[1].x = this._bgfshow[0].x + this._imgw, this._bgfshow[1].visible = !0)
    },
    setIndex: function(a, b) {}
});
BgLayer.create = function() {
    var a = new BgLayer;
    a.init();
    return a
};
var Light2 = cc.Sprite.extend({
    active: !1,
    ctor: function() {
        this._super("#l20001.png")
    },
    destroy: function() {
        this.active = this.visible = !1
    },
    init: function() {
        this._super()
    },
    playMo: function() {
        this.scale = 1.3;
        this.active = this.visible = !0;
        this.runAction(cc.Sequence.create(cc.Animate.create(cc.animationCache.getAnimation("l22")), cc.CallFunc.create(this.destroy, this)))
    }
});
Light2.addNew = function(a) {
    Light2.getOrCreate(a).playMo()
};
Light2.getOrCreate = function(a) {
    for (var b = null, c = 0; c < GD.CONTAINER.LIGHT2.length; c++)
        if (b = GD.CONTAINER.LIGHT2[c], !1 == b.active) return b.setPosition(a), b;
    b = Light2.create();
    b.setPosition(a);
    return b
};
Light2.shared = function() {
    for (var a = [], b = 1; 7 >= b; b++) {
        var c = cc.spriteFrameCache.getSpriteFrame("l2000" + b + ".png");
        a.push(c)
    }
    cc.animationCache.addAnimation(cc.Animation.create(a, 0.02), "l22")
};
Light2.create = function(a) {
    a = new Light2(a);
    g_sharedGameLayer.addLight2(a);
    GD.CONTAINER.LIGHT2.push(a);
    return a
};
var Blood = cc.Sprite.extend({
    active: !1,
    ctor: function() {
        this._super("#blood0001.png");
        this.anchorX = 0;
        this.anchorY = 0.5
    },
    destroy: function() {
        this.active = this.visible = !1
    },
    init: function() {
        this._super()
    },
    playMo: function() {
        this.active = this.visible = !0;
        this.runAction(cc.Sequence.create(cc.Animate.create(cc.animationCache.getAnimation("Blood")), cc.CallFunc.create(this.destroy, this)))
    }
});
Blood.addNew = function(a, b) {
    var c = Blood.getOrCreate();
    c.setPosition(a);
    c.rotation = 360 - b;
    c.playMo()
};
Blood.getOrCreate = function() {
    for (var a = null, b = 0; b < GD.CONTAINER.BLOOD.length; b++)
        if (a = GD.CONTAINER.BLOOD[b], !1 == a.active) return a;
    return a = Blood.create()
};
Blood.shared = function() {
    for (var a = [], b = 2; 9 >= b; b++) {
        var c = cc.spriteFrameCache.getSpriteFrame("blood000" + b + ".png");
        a.push(c)
    }
    cc.animationCache.addAnimation(cc.Animation.create(a, 0.1), "Blood")
};
Blood.create = function(a) {
    a = new Blood(a);
    g_sharedGameLayer.addBlood(a);
    GD.CONTAINER.BLOOD.push(a);
    return a
};
var Enemy = cc.Sprite.extend({
    aimX: 0,
    speedx: 5,
    speedy: 0,
    rightsidex: 0,
    leftsidex: 0,
    showLevel: 0,
    hasFired: !1,
    race: 1,
    kind: 1,
    power: 1,
    liveAction: null,
    dieAction: null,
    attactSpace: 6,
    attactAction: null,
    speednum: 1,
    state: "no",
    dirx: 1,
    diry: 1,
    live: 1,
    angle: null,
    speedp: null,
    orip: null,
    race: null,
    attactLen: 150,
    oripot: null,
    angle: null,
    money: null,
    ctor: function(a, b) {
        this.diry = 2 < b ? 1 : -1;
        1 == this.diry && (this.attactLen = 160);
        this.dirx = 1 == b % 2 ? 1 : -1;
        this.race = a; - 1 == this.diry ? this._super("#" + GD.ENEMIES.DATA[a].fimg + "0001.png") : this._super("#" +
            GD.ENEMIES.DATA[a].bimg + "0001.png");
        1 == a ? (this.attactLen += 10, this.money = 40) : 1 == this.diry ? (this.money = 19, this.attactLen -= 30) : (this.money = 16, this.attactLen -= 10);
        this.kind = b;
        this.anchorY = this.anchorX = 0.5;
        this.rightsidex = winSize.width;
        this.power = GD.ENEMIES.DATA[a].power;
        this.speednum = GD.ENEMIES.DATA[a].speed;
        this.live = GD.ENEMIES.DATA[a].live;
        for (var c = [], e = [], d = 1; 6 >= d; d++) {
            var f = cc.spriteFrameCache.getSpriteFrame(-1 == this.diry ? "" + GD.ENEMIES.DATA[a].fimg + "000" + d + ".png" : "" + GD.ENEMIES.DATA[a].bimg + "000" +
                d + ".png");
            3 >= d ? c.push(f) : e.push(f)
        }
        this.liveAction = cc.RepeatForever.create(cc.Animate.create(cc.Animation.create(c, 0.1)));
        this.attactAction = cc.Sequence.create(cc.Animate.create(cc.Animation.create(e, 0.1)), cc.CallFunc.create(this.attactEnd, this));
        this.scaleX = this.dirx
    },
    toGetNewPot: function() {
        this.angle = 8 * (6 * Math.random() - 3) + [135, 45, 225, 315][this.kind - 1];
        for (var a = 0; a < GD.CONTAINER.ENEMIES.length; a++) {
            var b = GD.CONTAINER.ENEMIES[a];
            if ("run" == b.state && this.angle == b.angle) {
                this.toGetNewPot();
                return
            }
        }
        a =
            cc.pForAngle(this.angle / 360 * 2 * Math.PI);
        b = cc.pMult(a, 500);
        this.orip = a;
        this.oripot = cc.pAdd(centerPos, b);
        this.speedp = cc.pNeg(cc.pMult(a, this.speednum))
    },
    toActive: function(a) {
        this.speednum = a + GD.ENEMIES.DATA[this.race].speed;
        this.toGetNewPot();
        this.dieAction = cc.Sequence.create(cc.MoveTo.create(0.1, this.oripot), cc.CallFunc.create(this.destroy, this));
        this.setPosition(this.oripot);
        this.visible = !0;
        this.alpha = 1;
        this.toRun()
    },
    update: function(a) {
        "run" == this.state && (cc.pDistance(centerPos, this.getPosition()) >
            this.attactLen ? (a = cc.pAdd(this.getPosition(), this.speedp), this.setPosition(a)) : this.toAttact())
    },
    toAttact: function() {
        "run" != this.state && "attact" != this.state || (this.state = "attact", this.stopAllActions(), this.runAction(this.attactAction))
    },
    attactEnd: function() {
        this.scheduleOnce(this.toAttact, 1);
        g_sharedGameLayer.enemyAttact(this.power, this.orip)
    },
    toRun: function() {
        this.state = "run";
        this.stopAllActions();
        this.runAction(this.liveAction)
    },
    toBeHurt: function(a, b) {
        this.state = "hurt";
        this.kill(b)
    },
    kill: function(a) {
        this.state =
            "die";
        this.stopAllActions();
        this.runAction(this.dieAction);
        g_sharedGameLayer.killOneEnemy(this)
    },
    destroy: function() {
        this.active = this.visible = !1;
        GD.ACTIVE_ENEMIES--;
        this.stopAllActions();
        g_sharedGameLayer.oneEnemyDie(this)
    },
    gameOver: function() {},
    attactRect: function() {
        return cc.rect(this.x, -1, 60, -1)
    },
    collideRect: function(a, b) {
        return cc.rect(this.x, -1, 50, -1)
    }
});
Enemy.addNewEnemy = function(a, b) {
    if (!(20 <= GD.ACTIVE_ENEMIES)) {
        GD.SHOWLEVEL += 1;
        var c = 0.7 < Math.random() ? 1 : 0;
        Enemy.getOrCreateEnemy(c, a).toActive(b)
    }
};
Enemy.getOrCreateEnemy = function(a, b) {
    for (var c = null, e = 0; e < GD.CONTAINER.ENEMIES.length; e++)
        if (c = GD.CONTAINER.ENEMIES[e], c.race == a && c.kind == b && "no" == c.state) return GD.ACTIVE_ENEMIES++, c;
    c = Enemy.create(a, b);
    GD.ACTIVE_ENEMIES++;
    return c
};
Enemy.create = function(a, b) {
    var c = new Enemy(a, b);
    g_sharedGameLayer.addEnemy(c, GD.UNIT_TAG.ENEMY, c.zOrder);
    GD.CONTAINER.ENEMIES.push(c);
    return c
};
Enemy.preSet = function() {
    for (var a = null, a = 1, b, c = 0; 8 > c; c++) a = 3 < c ? 1 : 0, b = c % 4, a = Enemy.create(a, b + 1), a.visible = !1, a.state = "no", a.stopAllActions(), a.unscheduleAllCallbacks()
};

function ShakeCls() {
    this.shakeee = null;
    var a = this;
    this.bool = !1;
    this.hitAndShake = function(a, c, e, d, f) {
        this.bool = !0;
        this.shakeee = a;
        null == this.shakeee.basex && (this.shakeee.basex = this.shakeee.x);
        null == this.shakeee.basey && (this.shakeee.basey = this.shakeee.y);
        this.shakeee.rangeX = null == c ? 20 : c;
        this.shakeee.rangeY = null == e ? 20 : e;
        this.shakeee.x = this.shakeee.basex - this.shakeee.rangeX / 2 + this.shakeee.rangeX * Math.random();
        this.shakeee.y = this.shakeee.basey - this.shakeee.rangeY + 2 * this.shakeee.rangeY * Math.random();
        this.shakeee.flashTime =
            6;
        this.shakeee.funcCall = null == f ? null : f;
        this.shakeee.shakeTimeCount = 0;
        this.shakeee.cframe = 0
    };
    this.update = function() {
        this.bool && (this.shakeee.cframe += 1, 2 > this.shakeee.cframe || (this.shakeee.cframe = 0, 5 == this.shakeee.shakeTimeCount ? a.cancelHitAndShake(this.shakeee) : (this.shakeee.shakeTimeCount++, this.shakeee.x += 1.7 * (this.shakeee.basex - this.shakeee.x), this.shakeee.y += 1.7 * (this.shakeee.basey - this.shakeee.y))))
    };
    this.cancelHitAndShake = function(a) {
        this.bool = !1;
        a || (a = this.shakeee);
        a.x = a.basex;
        a.y = a.basey
    }
}
var shake = new ShakeCls;
var MenuLayer = cc.Layer.extend({
        menu: null,
        ctor: function() {
            this._super()
        },
        init: function() {
            this._super();
            cc.spriteFrameCache.addSpriteFrames(res.game_plist);
            centerPos = cc.p(winSize.width / 2, winSize.height / 2);
            var a = cc.Sprite.create("#gameintro.png");
            this.addChild(a);
            this.menu = cc.Sprite.create("#start.png");
            this.menu.x = winSize.width / 2;
            this.addChild(this.menu);
            a.y = winSize.height / 2 + 351.5 - 274;
            this.menu.y = a.y - 351.5;
            a.x = winSize.width / 2;
            this.initEvent();
            a = cc.Sprite.create(cc.tglogotexture2d);
            a.y = 50;
            a.anchorX =
                0.5;
            a.x = winSize.width / 2;
            this.addChild(a)
        },
        initEvent: function() {
            var a = this,
                b = cc.EventListener.create({
                    event: cc.EventListener.TOUCH_ONE_BY_ONE,
                    swallowTouches: !1,
                    onTouchBegan: function(b, e) {
                        var d = e.getCurrentTarget(),
                            f = d.convertToNodeSpace(b.getLocation()),
                            d = d.getContentSize(),
                            d = cc.rect(0, 0, d.width, d.height);
                        return cc.rectContainsPoint(d, f) ? (a.menu.y -= 3, a.menu.color = cc.color(150, 150, 150, 150), a.onPlayG(), !0) : !1
                    },
                    onTouchEnded: function(a, b) {
                        return !1
                    }
                });
            cc.eventManager.addListener(b, a.menu)
        },
        onPlayG: function() {
            // pgvSendClick &&
            //     "function" == typeof pgvSendClick && pgvSendClick({
            //         hottag: "h5game.zgl.start"
            //     });
            cc.director.runScene(cc.TransitionFade.create(0.3, GameScene.create()))
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
        _roles: null,
        _time: GD.MAXTIME,
        _midx: 0,
        _leftmidx: 0,
        _rightmidx: 0,
        _attactzone: [],
        _npcontainer: null,
        _introscene: null,
        _live: 0,
        _blood: null,
        _attackLeft: null,
        _attackRight: null,
        _dataLayer: null,
        _state: STATE_PLAYING,
        _hitUI: null,
        numLayer: null,
        _hitNum: 0,
        _liveBar: null,
        _barRenderer: null,
        _time2: 0,
        _others: null,
        _BtnColor: null,
        _space: 60,
        _barsize: [168, 17],
        _locktime: 3,
        _ta: null,
        emyspd: 0,
        moved: !0,
        ctor: function() {
            this._super()
        },
        init: function() {
            this._super() &&
                (this._space = 0, GD.SCORE = 0, this._time = GD.MAXTIME, GD.CONTAINER.ENEMIES = [], GD.CONTAINER.BLOOD = [], GD.CONTAINER.PET = [], GD.ACTIVE_PETS = 0, GD.ACTIVE_ENEMIES = 0, this._midx = winSize.width / 2, this._leftmidx = this._midx / 2 - 120, this._rightmidx = this._midx + 120, g_sharedGameLayer = this, this.initBg(), this.initRoles(), this.initUserControl(), this.initData(), this._state = STATE_PLAYING, this.schedule(this.clockCounter2, 0.1), this.scheduleUpdate())
        },
        initRoles: function() {
            cc.spriteFrameCache.addSpriteFrames(res.role_plist);
            cc.spriteFrameCache.addSpriteFrames(res.light_plist);
            cc.spriteFrameCache.addSpriteFrames(res.blood_plist);
            var a = cc.textureCache.addImage(res.role_png);
            this._roles = cc.SpriteBatchNode.create(a);
            this._roles.setBlendFunc(cc.SRC_ALPHA, cc.ONE);
            this._ta = Fire.create();
            this._ta.x = winSize.width / 2;
            this._ta.y = winSize.height / 2;
            this.addChild(this._ta, 10);
            this.addChild(this._roles, 11);
            this._helo = Helo.create();
            this._roles.addChild(this._helo);
            this._helo.y = winSize.height / 3;
            this._helo.x = winSize.width / 2;
            a = cc.textureCache.addImage(res.blood_png);
            this._blood = cc.SpriteBatchNode.create(a);
            this.addChild(this._blood);
            Light2.shared();
            Blood.shared();
            Enemy.preSet()
        },
        initData: function() {
            this._time = this._time2 = GD.MAXTIME;
            this._dataLayer = BitNumLayer.create();
            this.addChild(this._dataLayer, 100)
        },
        setLive: function(a) {
            this._ta.setLive(a)
        },
        enemyAttact: function(a, b) {
            this._state == STATE_PLAYING && (Light2.addNew(cc.pAdd(centerPos, cc.pMult(b, 30))), this.setLive(a))
        },
        killOneEnemy: function(a) {
            this._dataLayer.setNum(a.money);
            Blood.addNew(a.getPosition(), a.angle)
        },
        oneEnemyDie: function(a) {},
        initUserControl: function() {
            var a =
                this,
                b = cc.EventListener.create({
                    event: cc.EventListener.TOUCH_ONE_BY_ONE,
                    swallowTouches: !1,
                    onTouchBegan: function(b, e) {
                        a._helo.setNewPot(b.getLocation());
                        return !0
                    },
                    onTouchMoved: function(b, e) {
                        a.moved && (a._helo.setNewPot(b.getLocation()), a.moved = !1)
                    },
                    onTouchEnded: function(a, b) {
                        return !0
                    }
                });
            cc.eventManager.addListener(b, this)
        },
        initBg: function() {
            this._bg = new cc.Sprite(res.bg);
            this._bg.x = winSize.width / 2;
            this._bg.y = winSize.height / 2;
            this._bg.anchorX = this._bg.anchorY = 0.5;
            this.addChild(this._bg, 0);
            var a = new cc.Sprite("#quan.png");
            this.addChild(a);
            a.x = winSize.width / 2;
            a.y = winSize.height / 2
        },
        addEnemy: function(a, b, c) {
            this._roles.addChild(a, b, c)
        },
        addBlood: function(a, b) {
            this._blood.addChild(a, b)
        },
        addLight: function(a, b) {
            this._blood.addChild(a, b)
        },
        addLight2: function(a, b) {
            this.addChild(a, 110)
        },
        toAddBlood: function(a) {},
        clockCounter2: function() {
            if (this._state == STATE_PLAYING)
                if (this._time2 -= 0.1, 0 > this._time2 && (this._time2 = 0), this._time = Math.floor(this._time2), this._time2 = Math.floor(10 * this._time2) / 10, GD.USETIME = GD.MAXTIME - this._time2,
                    0 >= this._space) {
                    this.emyspd = 0.08 * Math.floor(GD.USETIME / 10);
                    this.emyspd = 10 < this.emyspd ? 10 : this.emyspd;
                    this._space = 10 - Math.floor(0.2 * GD.USETIME);
                    var a = Math.floor(4 * Math.random());
                    Enemy.addNewEnemy(a + 1, this.emyspd)
                } else this._space--
        },
        update: function(a) {
            this._state == STATE_PLAYING && (this.moved = !0, this.checkIsCollide(a), this.updateUI(), this.toReorderChild())
        },
        checkIsCollide: function(a) {
            var b, c = this._helo.getPosition(),
                e = {},
                d = !1;
            for (b = 0; b < GD.CONTAINER.ENEMIES.length; b++)
                if (a = GD.CONTAINER.ENEMIES[b], "run" ==
                    a.state || "attact" == a.state) {
                    a.update(e);
                    var f = a.getPosition();
                    140 > cc.pDistance(c, f) && (d = cc.pNormalize(cc.pSub(f, c)), a.toBeHurt(1, d), d = !0)
                }
            d && shake.hitAndShake(this, 10, 10)
        },
        toReorderChild: function() {
            this._helo.y > winSize.height / 2 + 50 ? this.reorderChild(this._roles, 9) : this.reorderChild(this._roles, 11)
        },
        updateUI: function() {
            shake && shake.update();
            this._helo.update()
        },
        clearEmeny: function() {
            for (i = 0; i < GD.CONTAINER.ENEMIES.length; i++) {
                var a = GD.CONTAINER.ENEMIES[i];
                a && this._roles.removeChild(a)
            }
            GD.CONTAINER.ENEMIES = []
        },
        addRoad: function(a) {
            this.addChild(a, 0)
        },
        loseGame: function() {
            this._helo.toDie();
            this.toGameEnd()
        },
        winGame: function() {
            this.toGameEnd();
            this.onGameOver()
        },
        toGameEnd: function() {
            this._state = STATE_GAMEOVER;
            this.unschedule(this.clockCounter2, 0.1);
            cc.eventManager.removeAllListeners()
        },
        onGameOver: function() {
            this._state = STATE_GAMEOVER;
            this.clearEmeny();
            this._roles.removeAllChildren();
            this._blood.removeAllChildren();
            this._helo = null;
            cc.spriteFrameCache.removeSpriteFramesFromFile(res.role_plist);
            cc.spriteFrameCache.removeSpriteFramesFromFile(res.blood_plist);
            cc.spriteFrameCache.removeSpriteFramesFromFile(res.light_plist);
            cc.director.runScene(cc.TransitionFade.create(0.6, GameOverScene.create()))
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
        _commentLabel: null,
        _iconLabel: null,
        moremenu: null,
        ctor: function() {
            this._super()
        },
        init: function() {
            cc.spriteFrameCache.addSpriteFrames(res.gameover_plist);
            this.initBg();
            this.initMenu();
            var a = cc.Sprite.create(cc.tglogotexture2d);
            a.y = 70;
            a.anchorX = 0.5;
            a.x = winSize.width / 2;
            this.addChild(a)
        },
        initEvent: function() {
            var a = this,
                b = cc.EventListener.create({
                    event: cc.EventListener.TOUCH_ONE_BY_ONE,
                    swallowTouches: !1,
                    onTouchBegan: function(b, e) {
                        var d = e.getCurrentTarget(),
                            f = d.convertToNodeSpace(b.getLocation()),
                            g = d.getContentSize(),
                            g = cc.rect(0, 0, g.width, g.height);
                        if (cc.rectContainsPoint(g, f)) {
                            d.y -= 2;
                            if (d == a.sharemenu) a.onShare();
                            else if (d == a.againmenu) a.onAgain();
                            else if (d == a.moremenu) a.onMore();
                            return !0
                        }
                        return !1
                    },
                    onTouchEnded: function(a, b) {
                        var d = b.getCurrentTarget();
                        d.y += 2
                    }
                });
            cc.eventManager.addListener(b, a.sharemenu);
            cc.eventManager.addListener(b.clone(), a.againmenu);
            cc.eventManager.addListener(b.clone(),
                a.moremenu)
        },
        initMenu: function() {
            this.sharemenu = cc.Sprite.create("#share.png");
            this.againmenu = cc.Sprite.create("#again.png");
            this.moremenu = cc.Sprite.create("#more.png");
            this.addChild(this.sharemenu);
            this.addChild(this.againmenu);
            this.addChild(this.moremenu);
            this._bg.x = winSize.width / 2;
            this._bg.y = winSize.height / 2 + 307 - 265.5 + 70;
            this._scoreLabel.x = this._bg.x;
            this._scoreLabel.y = this._bg.y - 50;
            this._commentLabel.y = this._bg.y - 130;
            this._commentLabel.x = this._bg.x + 90;
            this._iconLabel.x = this._bg.x + 30;
            this._iconLabel.y =
                this._bg.y - 188;
            this.sharemenu.x = this._bg.x + 138;
            this.againmenu.y = this.sharemenu.y = this._bg.y - 307 + 5;
            this.againmenu.x = this._bg.x - 138;
            this.moremenu.y = this._bg.y - 307 - 90;
            this.moremenu.x = this._bg.x;
            var a = this;
            setTimeout(function() {
                a.initEvent()
            }, 500)
        },
        initBg: function() {
            this._sharelayer = null;
            trace("initBg");
            var a = cc.DrawNode.create();
            this.addChild(a, 0);
            a.drawRect(cc.p(-56, -10), cc.p(800, winSize.height + 20), cc.color(25, 25, 25, 24), 0, 0);
            this._bg = new cc.Sprite("#over.png");
            this.addChild(this._bg);
            this._scoreLabel =
                cc.LabelAtlas.create("0", res.num_png, 65, 87, "0");
            this.addChild(this._scoreLabel);
            this._scoreLabel.anchorX = 0.5;
            this._scoreLabel.setString(GD.SCORE);
            this._commentLabel = cc.LabelTTF.create("", "Arial", 40);
            this.addChild(this._commentLabel);
            var b = "\u63d0\u83ab\u7684\u5de1\u903b\u5bc6\u6797 \u963f\u72f8\u7684\u9b45\u60d1\u7a7a\u95f4 \u5361\u7279\u7684\u523a\u6740\u4e4b\u9986 \u7490\u7490\u7684\u5947\u5e7b\u4ed9\u5883 \u7d22\u62c9\u5361\u661f\u5149\u5723\u5730 \u6cf0\u9686\u7684\u523a\u6740\u5730\u7262 \u83ab\u7518\u5a1c\u90aa\u7ffc\u82cd\u7a79 \u5e03\u5170\u5fb7\u6012\u7130\u7a7a\u95f4 \u827e\u5e0c\u7684\u8fdc\u89c1\u51b0\u539f \u76d6\u4f26\u7684\u519b\u56e2\u8425\u5730 \u7687\u5bb6\u6597\u6280\u573a \u8363\u8000\u89d2\u6597\u573a \u4f0a\u6cfd\u7684\u534e\u4e3d\u821e\u53f0 \u745e\u96ef\u7684\u6e38\u8361\u5e73\u539f \u6613\u7684\u65e0\u6781\u4e4b\u9986 \u8d3e\u514b\u65af\u7684\u89d2\u6597\u573a \u5d14\u4e1d\u5854\u5a1c\u7684\u8425\u5730 \u5b89\u59ae\u7684\u70c8\u7130\u4e50\u56ed".split(" "),
                c = Math.floor(GD.USETIME / 10),
                c = 6 < c ? 6 : c,
                a = "0\u4e2a \u82f1\u52c7\u9ec4\u94dc \u4e0d\u5c48\u767d\u94f6 \u8363\u8000\u9ec4\u91d1 \u534e\u8d35\u94c2\u91d1 \u7480\u74a8\u94bb\u77f3 \u6700\u5f3a\u738b\u8005".split(" ")[c];
            GD.SHARE = "\u6211\u5728\u5b88\u62a4\u6c34\u6676\u65f6\u83b7\u5f97\u4e86" + GD.SCORE + "\u5206\u548c" + a + "\u5fbd\u7ae0\uff0c\u4f60\u6765\u8bd5\u8bd5~";
            trace("num------------" + c + ":" + GD.SHARE);
            this._commentLabel.anchorX = 0.5;
            b = b[Math.floor(Math.random() * b.length)];
            this._commentLabel.setString("\u201c" +
                b + "\u201d");
            this._commentLabel.color = cc.color.YELLOW;
            this._iconLabel = cc.LabelTTF.create("", "Arial", 40);
            this._iconLabel.color = cc.color.YELLOW;
            this._iconLabel.anchorX = 0.5;
            this.addChild(this._iconLabel);
            this._iconLabel.setString(a);
            a = cc.LabelTTF.create("", "Arial", 40);
            b = cc.LabelTTF.create("", "Arial", 40);
            c = cc.LabelTTF.create("", "Arial", 40);
            a.anchorX = 0.5;
            b.anchorX = 0.5;
            c.anchorX = 0.5;
            this.addChild(a);
            this.addChild(b);
            this.addChild(c);
            a.setString("\u4e2d\u83b7\u5f97\u4e86");
            b.setString("\u5fbd\u7ae0!");
            c.setString("\u4f60\u5728\u9547\u5b88");
            a.x = winSize.width / 2 - 170;
            b.x = winSize.width / 2 + 185;
            c.x = winSize.width / 2 - 170;
            a.y = b.y = winSize.height / 2 - 75;
            c.y = winSize.height / 2 - 20
        },
        onAgain: function() {
            // pgvSendClick && "function" == typeof pgvSendClick && pgvSendClick({
            //     hottag: "h5game.zgl.again"
            // });
            cc.spriteFrameCache.removeSpriteFramesFromFile(res.npc_plist);
            cc.director.runScene(cc.TransitionFade.create(0.3, MenuScene.create()))
        },
        onMore: function() {
            // pgvSendClick && "function" == typeof pgvSendClick && pgvSendClick({
            //     hottag: "h5game.zgl.more"
            // });
            // window.open("http://tgideas.qq.com/weixin/works/game.shtml",
            //     "_blank")
        },
        onShare: function() {
            // pgvSendClick && "function" == typeof pgvSendClick && pgvSendClick({
            //     hottag: "h5game.zgl.sharebtn"
            // });
            cc.eventManager.removeAllListeners();
            trace("onShare");
            cc.director.runScene(ShareScene.create())
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
var ShareLayer = cc.Layer.extend({
        _time: null,
        _bg: null,
        _scoreLabel: null,
        menu: null,
        listener4: null,
        ctor: function() {
            this._super()
        },
        init: function() {
            this.initBg();
            this.initMenu();
            var a = cc.Sprite.create(cc.tglogotexture2d);
            a.y = 70;
            a.anchorX = 0.5;
            a.x = winSize.width / 2;
            this.addChild(a)
        },
        initMenu: function() {
            this.menu = cc.Sprite.create("#return.png");
            this.menu.x = winSize.width / 2;
            this.menu.y = 180;
            this.addChild(this.menu);
            var a = this;
            this.listener4 = cc.EventListener.create({
                event: cc.EventListener.TOUCH_ONE_BY_ONE,
                swallowTouches: !1,
                onTouchBegan: function(a, c) {
                    var e = c.getCurrentTarget(),
                        d = e.convertToNodeSpace(a.getLocation()),
                        f = e.getContentSize(),
                        f = cc.rect(0, 0, f.width, f.height);
                    cc.rectContainsPoint(f, d) && (e.y -= 2);
                    return !0
                },
                onTouchEnded: function(b, c) {
                    a.onReturn()
                }
            });
            cc.eventManager.addListener(this.listener4, this.menu)
        },
        onReturn: function() {
            cc.eventManager.removeListener(this.listener4, this.menu);
            cc.director.runScene(GameOverScene.create())
        },
        initBg: function() {
            trace("initBg");
            this._bg = new cc.Sprite(res.shareword);
            this._bg.x = winSize.width /
                2;
            this._bg.y = winSize.height / 2 + 200;
            this.addChild(this._bg)
        }
    }),
    ShareScene = cc.Scene.extend({
        onEnter: function() {
            this._super();
            var a = new ShareLayer;
            a.init();
            this.addChild(a)
        }
    });
ShareScene.create = function() {
    var a = new ShareScene;
    return a && a.init() ? a : null
};
cc.game.onStart = function() {
    cc.sys.isMobile ? cc.view.setDesignResolutionSize(640, 1008, cc.ResolutionPolicy.FIXED_HEIGHT) : cc.view.setDesignResolutionSize(640, 1008, cc.ResolutionPolicy.SHOW_ALL);
    winSize = cc.director.getWinSize();
    centerPos = cc.p(winSize.width / 2, winSize.height / 2);
    cc.LoaderScene.preload(g_mainmenu, function() {
        cc.director.runScene(MenuScene.create())
    }, this)
}; /*  |xGv00|47f21dad2466eb15234303109127fddd */