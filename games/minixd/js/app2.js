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
        this.timeLabel = cc.LabelTTF.create("", "Arial", 26);
        this.timeLabel._textAlign = cc.TEXT_ALIGNMENT_LEFT;
        this.addChild(this.timeLabel);
        this.timeLabel.anchorX = 0.5;
        this.timeLabel.x = 0.5 * winSize.width + 150;
        this.timeLabel.y = -70 + winSize.height;
        this.scoreLabel = cc.LabelAtlas.create("0", res.num_png, 65, 87, "0");
        this.addChild(this.scoreLabel);
        this.scoreLabel.anchorX = 0.5;
        this.scoreLabel.x = winSize.width / 2 - 21;
        this.scoreLabel.y = -77 + winSize.height;
        var a = cc.ScaleBy.create(0.1, 1.1);
        this.scoreLabel.scale = 0.5;
        this.timeAction = cc.Sequence.create(a, a.reverse());
        this.schedule(this.step)
    },
    setNum: function(a, b) {
        GD.SCORE += 10 * a + 1 * b;
        this.scoreLabel.scale = 0.5;
        this.scoreLabel.runAction(this.timeAction);
        this.scoreLabel.setString(GD.SCORE + "")
    },
    setTimeNum: function(a) {
        10 > Number(a) && (this.timeLabel.color = cc.color(255, 0, 0, 0));
        this.timeLabel.setString(a + '"')
    }
});
BitNumLayer.create = function() {
    var a = new BitNumLayer;
    a.init();
    return a
};
var Light = cc.Sprite.extend({
    active: !1,
    ctor: function() {
        this._super("#light0001.png")
    },
    destroy: function() {
        this.active = this.visible = !1
    },
    init: function() {
        this._super()
    },
    playMo: function() {
        this.visible = !0;
        this.runAction(cc.Sequence.create(cc.Animate.create(cc.animationCache.getAnimation("Blood")), cc.CallFunc.create(this.destroy, this)))
    }
});
Light.addNew = function(a, b) {
    Light.getOrCreate(a, b).playMo()
};
Light.getOrCreate = function(a, b) {
    for (var e = null, d = 0; d < GD.CONTAINER.BLOOD.length; d++)
        if (e = GD.CONTAINER.BLOOD[d], !1 == e.active) return e.x = a, e.y = b, e;
    e = Light.create();
    e.x = a;
    e.y = b;
    return e
};
Light.shared = function() {
    for (var a = [], b = 1; 5 > b; b++) {
        var e = cc.spriteFrameCache.getSpriteFrame("light000" + b + ".png");
        a.push(e);
        a.push(e)
    }
    cc.animationCache.addAnimation(cc.Animation.create(a, 0.02), "Blood")
};
Light.create = function(a) {
    a = new Light(a);
    g_sharedGameLayer.addBlood(a);
    GD.CONTAINER.BLOOD.push(a);
    return a
};
Light.preSet = function() {
    for (var a = null, b = 0; 1 > b; b++) a = Light.create(), a.visible = !1, a.active = !1
};
var Pet = cc.Sprite.extend({
    eID: 0,
    active: !0,
    direct: 1,
    isFire: !1,
    zOrder: 10,
    dieAction: null,
    liveAction: null,
    speed: 2,
    speedV: 15,
    rightsidex: 0,
    leftsidex: 0,
    speedY: 0,
    kind: 1,
    _zone: 100,
    state: 0,
    id: 0,
    _isEmpty: !0,
    ctor: function(a) {
        trace("addNewpet-----------" + a);
        this._super("#pet" + a + "0001.png");
        this.kind = 1.5 * a;
        this.anchorY = this.anchorX = 0.5;
        this.pot = [winSize.width / 2, 0];
        this.dieAction = cc.RepeatForever.create(cc.Animate.create(cc.animationCache.getAnimation("pet" + a)));
        this.liveAction = cc.RepeatForever.create(cc.Animate.create(cc.animationCache.getAnimation("pet" +
            a)));
        this.scheduleUpdate()
    },
    update: function(a) {
        1 == this.state && (a = this.x, 1 == this.direct ? a < this.pot[0] + this._zone ? a += this.speed : this.scaleX = this.direct = -1 : a > this.pot[0] - this._zone ? a -= this.speed : this.direct = this.scaleX = 1, this.x = a)
    },
    toRun: function() {
        this.active = !0;
        this.stopAllActions();
        this.state = 1;
        this.runAction(this.liveAction)
    },
    toFire: function(a, b, e) {
        this.isFire || (this.isFire = !0, b = cc.MoveTo.create(0.1, cc.p(b, e)), this.state = 2, this.active = !1, this.runAction(cc.Sequence.create(b, cc.CallFunc.create(function() {
                this.toDie(a)
            },
            this))))
    },
    toDie: function(a) {
        this.stopAllActions();
        g_sharedGameLayer.petFire(a, 3);
        a = cc.MoveTo.create(0.2, cc.p(this.x, -50));
        this.runAction(cc.Sequence.create(a, cc.CallFunc.create(this.destroy, this)))
    },
    destroy: function() {
        GD.ACTIVE_PETS = 0;
        this.visible = !1;
        this._isEmpty = !0;
        this.stopAllActions()
    },
    collideRect: function(a, b) {
        return cc.rect(this.x, -1, 50, -1)
    },
    toActive: function(a) {
        GD.ACTIVE_PETS += 1;
        this.state = 0;
        this.isFire = this.active = this._isEmpty = !1;
        this.y = this.pot[1] + 50;
        this.x = 80 * a + this.pot[0];
        var b = 10 * Math.floor(3 *
                Math.random()),
            e = cc.MoveTo.create(0.3, cc.p(this.x, this.pot[1] + 150)),
            b = cc.MoveTo.create(0.5, cc.p(this.x, this.pot[1] - b + 10)),
            d = cc.RotateBy.create(0.3, 360);
        this.running = !1;
        this.visible = !0;
        this.scaleX = -a;
        this.direct = -a;
        this.runAction(cc.Sequence.create(e, b, cc.CallFunc.create(this.toRun, this)));
        this.runAction(d)
    }
});
Pet.addNew = function(a) {
    if (1 > GD.ACTIVE_PETS) {
        GD.PETKIND += 1;
        3 < GD.PETKIND && (GD.PETKIND = 1);
        var b = Pet.getOrCreate(GD.PETKIND);
        b ? b.toActive(a) : Pet.addNew(a)
    }
};
Pet.removeOne = function(a) {
    trace("removepet" + a);
    for (var b = 0; b < GD.CONTAINER.PET.length; b++)
        if (a == GD.CONTAINER.PET[b]) {
            GD.CONTAINER.PET.splice(b, 1);
            break
        }
    g_sharedGameLayer.removePet(a)
};
Pet.getOrCreate = function(a) {
    var b = null;
    trace("GD.CONTAINER.PET.length" + GD.CONTAINER.PET.length);
    for (var e = 0; e < GD.CONTAINER.PET.length; e++)
        if (b = GD.CONTAINER.PET[e], !0 == b._isEmpty && b.kind == a) return b;
    return Pet.create(a)
};
Pet.shared = function() {
    for (var a = [], b = [], e = [], d = "", c = 1; 8 > c; c++) d = "pet100" + (10 > c ? "0" + c : c) + ".png", d = cc.spriteFrameCache.getSpriteFrame(d), a.push(d), d = "pet200" + (10 > c ? "0" + c : c) + ".png", d = cc.spriteFrameCache.getSpriteFrame(d), b.push(d), d = "pet300" + (10 > c ? "0" + c : c) + ".png", d = cc.spriteFrameCache.getSpriteFrame(d), e.push(d);
    cc.animationCache.addAnimation(cc.Animation.create(a, 0.02), "pet1");
    cc.animationCache.addAnimation(cc.Animation.create(b, 0.02), "pet2");
    cc.animationCache.addAnimation(cc.Animation.create(e, 0.02),
        "pet3")
};
Pet.create = function(a) {
    a = new Pet(a);
    g_sharedGameLayer.addPet(a, GD.UNIT_TAG.PET, "pet");
    GD.CONTAINER.PET.push(a);
    a.id = GD.CONTAINER.PET.length;
    !0 == a._isEmpty;
    return a
};
Pet.preSet = function() {
    for (var a = null, b = 0; 2 > b; b++) a = Pet.create(b + 1), a.visible = !1, a.active = !1
};
var Enemy = cc.Sprite.extend({
    eID: 0,
    active: !0,
    isLive: !0,
    aimX: 0,
    direct: 1,
    zOrder: 10,
    dieAction: null,
    liveAction: null,
    speed: 5,
    speedV: 15,
    rightsidex: 0,
    leftsidex: 0,
    showLevel: 0,
    showSpace: 0,
    hasFired: !1,
    speedY: 0,
    livenum: 1,
    kind: 1,
    power: 1,
    oric: null,
    ctor: function(a) {
        this._super("#npc" + a + "0001.png");
        this.kind = a;
        this.power = 1.5 * a;
        this.oric = this.color;
        this.anchorY = this.anchorX = 0.5;
        this.rightsidex = winSize.width
    },
    update: function(a) {
        if (this.active) {
            a = this.x;
            var b = this.y; - 50 < a && -1 == this.direct || a < winSize.width + 50 && 1 == this.direct ?
                (a += this.speed, this.y = b += this.speedY, this.x = a) : this.destroy()
        }
    },
    toRun: function() {
        this.liveAction = cc.RepeatForever.create(cc.Animate.create(cc.animationCache.getAnimation("emy" + this.kind)));
        this.stopAllActions();
        this.runAction(this.liveAction)
    },
    toBeHurt: function(a) {
        this.livenum -= a;
        0 >= this.livenum ? this.kill() : (this.hasFired = !1, this.x -= 0.2 * winSize.width * this.direct)
    },
    kill: function() {
        this.isLive = !1;
        this.stopAllActions();
        this.dieAction = cc.Animate.create(cc.animationCache.getAnimation("emy" + this.kind + "die"));
        this.ratoteAction = cc.RepeatForever.create(cc.RotateBy.create(0.2, 360));
        this.runAction(this.dieAction);
        this.runAction(this.ratoteAction);
        this.speedY = 10 * Math.random() + 5;
        this.x > winSize.width / 2 ? (this.direct = 1, this.speed = this.speedV) : (this.direct = -1, this.speed = -this.speedV)
    },
    destroy: function() {
        this.speedY = 0;
        this.active = this.visible = !1;
        this.liveAction = this.dieAction = null;
        GD.ACTIVE_ENEMIES--;
        this.stopAllActions()
    },
    attactRect: function() {
        return cc.rect(this.x, -1, 60, -1)
    },
    collideRect: function(a, b) {
        return cc.rect(this.x, -1, 50, -1)
    },
    toActive: function(a, b) {
        trace("----Enemy.toActive-" + a + "--");
        this.active = this.visible = !0;
        this.direct = 0 == a ? -1 : 1;
        this.y = [45, 60, 50][this.kind - 1];
        this.speedY = 0;
        this.livenum = this.kind;
        var e = 65 * b;
        1 == this.direct ? (this.speed = 1.5 * this.kind + 4, this.x = this.leftsidex - e, this.scaleX = 1) : (this.scaleX = -1, this.speed = -(2 * this.kind + 3), this.x = this.rightsidex + e);
        this.hasFired = !1;
        this.isLive = !0;
        this.rotation = 0;
        this.toRun()
    }
});
Enemy.addNewEnemy = function(a, b) {
    if (0 < this.showSpace) this.showSpace--;
    else if (!(10 <= GD.ACTIVE_ENEMIES)) {
        GD.SHOWLEVEL += 1;
        var e = 0.5 < Math.random() ? 1 : 0;
        if (3 > b) Enemy.getOrCreateEnemy(a).toActive(e, 0);
        else {
            this.showSpace = 1;
            for (var d = 0; d < b; d++) Enemy.getOrCreateEnemy(a).toActive(e, d)
        }
    }
};
Enemy.getOrCreateEnemy = function(a) {
    for (var b = null, e = 0; e < GD.CONTAINER.ENEMIES.length; e++)
        if (b = GD.CONTAINER.ENEMIES[e], !1 == b.active && b.kind == a) return GD.ACTIVE_ENEMIES++, b;
    b = Enemy.create(a);
    GD.ACTIVE_ENEMIES++;
    return b
};
Enemy.shared = function() {
    for (var a = [], b = [], e = [], d = "", c = 1; 19 > c; c++) d = "npc100" + (10 > c ? "0" + c : c) + ".png", d = cc.spriteFrameCache.getSpriteFrame(d), a.push(d), d = "npc200" + (10 > c ? "0" + c : c) + ".png", d = cc.spriteFrameCache.getSpriteFrame(d), b.push(d), d = "npc300" + (10 > c ? "0" + c : c) + ".png", d = cc.spriteFrameCache.getSpriteFrame(d), e.push(d);
    cc.animationCache.addAnimation(cc.Animation.create(a, 0.04), "emy1");
    cc.animationCache.addAnimation(cc.Animation.create(b, 0.04), "emy2");
    cc.animationCache.addAnimation(cc.Animation.create(e,
        0.04), "emy3");
    cc.animationCache.addAnimation(cc.Animation.create([cc.spriteFrameCache.getSpriteFrame("npc12.png")], 0.04), "emy1die");
    cc.animationCache.addAnimation(cc.Animation.create([cc.spriteFrameCache.getSpriteFrame("npc22.png")], 0.04), "emy2die");
    cc.animationCache.addAnimation(cc.Animation.create([cc.spriteFrameCache.getSpriteFrame("npc32.png")], 0.04), "emy3die")
};
Enemy.create = function(a) {
    a = new Enemy(a);
    g_sharedGameLayer.addEnemy(a, GD.UNIT_TAG.ENEMY, a.zOrder);
    GD.CONTAINER.ENEMIES.push(a);
    return a
};
Enemy.preSet = function() {
    for (var a = null, b = 0; 2 > b; b++) a = Enemy.create(b + 1), a.visible = !1, a.active = !1, a.stopAllActions(), a.unscheduleAllCallbacks()
};
var Helo = cc.Sprite.extend({
    eID: 0,
    active: !0,
    direct: 1,
    zOrder: 30,
    hurtAction: null,
    standAction: null,
    attactActionList: [],
    hasFired: !1,
    attactKind: 0,
    lock: !1,
    potList: [
        [-20, 19],
        [-80, 32],
        [-20, 40],
        [0, 0],
        [12, -6]
    ],
    ctor: function() {
        this._super("#role0001.png");
        this.install();
        this.toStand();
        this.anchorY = this.anchorX = 0.5;
        this.y = 50
    },
    install: function() {
        this.attactActionList = [];
        for (var a = [], b = [], e = [], d = "", c = 10; 18 > c; c++) {
            var f = 14 < c ? 14 : c,
                d = "role00" + f + ".png",
                d = cc.spriteFrameCache.getSpriteFrame(d);
            a.push(d);
            d = "role00" + (f +
                5) + ".png";
            d = cc.spriteFrameCache.getSpriteFrame(d);
            b.push(d);
            d = "role00" + (f + 10) + ".png";
            d = cc.spriteFrameCache.getSpriteFrame(d);
            e.push(d)
        }
        c = cc.Sequence.create(cc.Animate.create(cc.Animation.create(a, 0.04)), cc.CallFunc.create(this.toStand, this));
        c.retain();
        this.attactActionList.push(c);
        c = cc.Sequence.create(cc.Animate.create(cc.Animation.create(b, 0.04)), cc.CallFunc.create(this.toStand, this));
        c.retain();
        this.attactActionList.push(c);
        c = cc.Sequence.create(cc.Animate.create(cc.Animation.create(e, 0.04)), cc.CallFunc.create(this.toStand,
            this));
        c.retain();
        this.attactActionList.push(c);
        b = [];
        for (c = 1; 9 > c; c++) d = "role000" + c + ".png", d = cc.spriteFrameCache.getSpriteFrame(d), b.push(d);
        this.standAction = cc.RepeatForever.create(cc.Animate.create(cc.Animation.create(b, 0.08)));
        this.standAction.retain();
        b = [];
        for (c = 25; 36 > c; c++) f = 34 < c ? 34 : c, d = "role00" + (10 > f ? "0" + f : f) + ".png", d = cc.spriteFrameCache.getSpriteFrame(d), b.push(d);
        c = cc.Animation.create(b, 0.04);
        this.hurtAction = cc.Sequence.create(cc.Animate.create(c), cc.CallFunc.create(this.toStand, this));
        this.hurtAction.retain()
    },
    setDirect: function(a) {
        this.scaleX = this.direct = a
    },
    setNewPot: function(a) {
        this.x = -20 * this.direct + winSize.width / 2
    },
    update: function(a) {},
    toStand: function() {
        this.lock = !1;
        this.stopAllActions();
        this.runAction(this.standAction);
        this.setNewPot(3)
    },
    beHurt: function(a) {
        this.lock = !1;
        1 == a ? this.setDirect(1) : this.setDirect(-1);
        this.stopAllActions();
        this.setNewPot(4);
        this.runAction(this.hurtAction)
    },
    toAttact: function() {
        this.lock = !0;
        this.stopAllActions();
        var a = Math.floor(3 * Math.random());
        this.attactKind = a;
        this.setNewPot(a);
        this.runAction(this.attactActionList[a])
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
var HitMo = cc.Sprite.extend({
    active: !0,
    animation: null,
    addScoreLabel: null,
    bg: null,
    ctor: function() {
        this._super();
        this.bg = cc.Sprite.create("#hit.png");
        this.addChild(this.bg);
        this.addScoreLabel = cc.LabelAtlas.create("0", res.num_png, 65, 87, "0");
        this.addScoreLabel.anchorX = 0.5;
        this.scale = 0.85;
        this.addChild(this.addScoreLabel);
        this.addScoreLabel.color = cc.color.RED;
        this.addScoreLabel.scale = 0.5;
        this.addScoreLabel.x = -40;
        this.addScoreLabel.y = 0;
        this.x = winSize.width / 2;
        this.actionMove = cc.MoveTo.create(0.3, cc.p(this.x, -130 + winSize.height / 2));
        this.fade = cc.FadeOut.create(0.3);
        this.destroy()
    },
    init: function() {
        this._super()
    },
    play: function() {
        this.visible = !0;
        this.stopAllActions();
        this.y = -200 + winSize.height / 2;
        this.runAction(cc.Sequence.create(this.fade, cc.CallFunc.create(this.destroy, this)));
        this.runAction(this.actionMove)
    },
    destroy: function() {
        this.visible = !1
    },
    setNum: function(a) {
        this.active = !0;
        this.addScoreLabel.setString(a + "");
        this.play()
    }
});
HitMo.create = function() {
    return new HitMo
};

function ShakeCls() {
    this.shakeee = null;
    var a = this;
    this.bool = !1;
    this.hitAndShake = function(a, e, d, c, f) {
        this.bool = !0;
        this.shakeee = a;
        null == this.shakeee.basex && (this.shakeee.basex = this.shakeee.x);
        null == this.shakeee.basey && (this.shakeee.basey = this.shakeee.y);
        this.shakeee.rangeX = null == e ? 20 : e;
        this.shakeee.rangeY = null == d ? 20 : d;
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
            centerPos = cc.p(winSize.width / 2, winSize.height / 2);
            var a = cc.Sprite.create(res.gameintro),
                b = cc.DrawNode.create();
            this.addChild(b, 0);
            b.drawRect(cc.p(-56, -5), cc.p(800, winSize.height + 7), cc.color(25, 25, 25, 255), 0, 0);
            this.addChild(a);
            this.menu = cc.Sprite.create(res.start);
            this.menu.x = winSize.width / 2;
            this.addChild(this.menu);
            a.y = winSize.height / 2 + 267.5 - 211;
            this.menu.y = a.y - 267.5;
            a.x = winSize.width / 2;
            this.initEvent();
            a = cc.Sprite.create(cc.tglogotexture2d);
            a.y = 26;
            a.anchorX = 0.5;
            a.x = winSize.width / 2;
            this.addChild(a)
        },
        initEvent: function() {
            var a = this,
                b = cc.EventListener.create({
                    event: cc.EventListener.TOUCH_ONE_BY_ONE,
                    swallowTouches: !1,
                    onTouchBegan: function(b, d) {
                        var c = d.getCurrentTarget(),
                            f = c.convertToNodeSpace(b.getLocation()),
                            c = c.getContentSize(),
                            c = cc.rect(0, 0, c.width, c.height);
                        return cc.rectContainsPoint(c, f) ? (a.menu.y -= 3, a.menu.color = cc.color(150, 150, 150, 150), setTimeout(function() {
                            a.onPlay()
                        }, 20), !0) : !1
                    },
                    onTouchEnded: function(a,
                        b) {
                        return !1
                    }
                });
            cc.eventManager.addListener(b, a.menu)
        },
        onPlay: function() {
            // pgvSendClick && "function" == typeof pgvSendClick && pgvSendClick({
            //     hottag: "act.minixd.start"
            // });
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
        _heloB: null,
        _time: GD.MAXTIME,
        _midx: 0,
        _leftmidx: 0,
        _rightmidx: 0,
        _attactzone: [],
        _npcontainer: null,
        _introscene: null,
        _live: 0,
        _roles: null,
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
        ctor: function() {
            this._super()
        },
        init: function() {
            if (this._super()) {
                this._space = 40;
                GD.SCORE =
                    0;
                this._time = GD.MAXTIME;
                GD.CONTAINER.ENEMIES = [];
                GD.CONTAINER.BLOOD = [];
                GD.CONTAINER.PET = [];
                GD.ACTIVE_PETS = 0;
                GD.ACTIVE_ENEMIES = 0;
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
                this.addChild(a);
                this._state = STATE_PLAYING;
                this.schedule(this.clockCounter2, 0.1);
                this.scheduleUpdate()
            }
        },
        initRoles: function() {
            cc.spriteFrameCache.addSpriteFrames(res.helo_plist);
            var a = cc.textureCache.addImage(res.helo_png);
            this._heloB = cc.SpriteBatchNode.create(a);
            this._heloB.setBlendFunc(cc.SRC_ALPHA, cc.ONE);
            this.addChild(this._heloB);
            this._helo = Helo.create();
            this._heloB.addChild(this._helo, 0);
            this._helo.y = winSize.height / 2 + 10;
            cc.spriteFrameCache.addSpriteFrames(res.npc_plist);
            a = cc.textureCache.addImage(res.npc_png);
            this._roles = cc.SpriteBatchNode.create(a);
            this._roles.setBlendFunc(cc.SRC_ALPHA, cc.ONE);
            this.addChild(this._roles);
            this._roles.y = winSize.height / 2 - 40;
            Pet.shared();
            Pet.preSet();
            Light.shared();
            Light.preSet();
            Enemy.shared();
            Enemy.preSet();
            trace("GD.CONTAINER.PET------" + GD.CONTAINER.PET.length)
        },
        initData: function() {
            this._time = this._time2 = GD.MAXTIME;
            this._barRenderer = new cc.Sprite.create("#bar.png");
            this._barsize = [this._barRenderer.width, this._barRenderer.height];
            this._live = GD.LIFE;
            var a = new cc.Sprite.create("#bar.png");
            a.color = cc.color(25, 25, 25, 150);
            a.anchorX = this._barRenderer.anchorX = 0;
            a.anchorY = this._barRenderer.anchorY = 0;
            a.x = this._barRenderer.x = winSize.width /
                2 - 145;
            a.y = this._barRenderer.y = winSize.height / 2 + 239;
            a.y -= 3;
            this.addChild(a);
            this._barRenderer.color = cc.color.RED;
            this.addChild(this._barRenderer);
            this.setLive(0);
            this._dataLayer = BitNumLayer.create();
            this.addChild(this._dataLayer);
            cc.Scheduler && (this._hitUI = HitMo.create());
            this._roles.addChild(this._hitUI)
        },
        initUserControl: function() {
            this._attackLeft = new cc.Sprite("#left.png");
            this._attackRight = new cc.Sprite("#left.png");
            this._BtnColor = this._attackLeft.color;
            this._attackRight.scaleX = -1;
            this._attackLeft.x =
                0.3 * winSize.width;
            this._attackLeft.y = this._attackRight.y = 0.2 * winSize.height;
            this._attackRight.x = 0.7 * winSize.width;
            this.addChild(this._attackLeft);
            this.addChild(this._attackRight);
            this._attackRight.scaleX = -1;
            var a = this,
                b = cc.EventListener.create({
                    event: cc.EventListener.TOUCH_ONE_BY_ONE,
                    swallowTouches: !1,
                    onTouchBegan: function(b, d) {
                        var c = d.getCurrentTarget(),
                            f = c.convertToNodeSpace(b.getLocation());
                        c.getContentSize();
                        c = cc.rect(0, 0, winSize.width / 2, winSize.height);
                        cc.rectContainsPoint(c, f) ? a.processTouchEvent(-1) :
                            a.processTouchEvent(1);
                        return !0
                    },
                    onTouchEnded: function(b, d) {
                        a.processTouchEndEvent()
                    }
                });
            cc.eventManager.addListener(b, this);
            cc.eventManager.addListener(b.clone(), this)
        },
        initBg: function() {
            this._bg = new cc.Sprite(res.gamebg);
            this._bg.setPosition(centerPos);
            this.addChild(this._bg)
        },
        addEnemy: function(a, b, e) {
            trace("----addEnemy.-" + a + "--" + b);
            this._roles.addChild(a, b, e)
        },
        addPet: function(a, b, e) {
            this._roles.addChild(a, b, e)
        },
        removePet: function(a) {
            this._roles.addChild(a)
        },
        addBlood: function(a, b) {
            this._roles.addChild(a,
                b)
        },
        attactEnemy: function(a) {
            if (!(0 < this._locktime)) {
                this._locktime = 6;
                var b, e, d = this._helo.attactRect(),
                    c = 1,
                    f = !1;
                for (e = 0; e < GD.CONTAINER.ENEMIES.length; e++)
                    if (b = GD.CONTAINER.ENEMIES[e], b.active && b.isLive && (b.x - this._midx < d.width && 1 == a && b.x > this._midx || this._midx - b.x < d.width && -1 == a && b.x < this._midx)) b.toBeHurt(1), f = !0, Light.addNew(b.x, b.y), 0 == b.livenum && (GD.GETNUM += 1, c += b.kind, 1 < b.kind && Pet.addNew(b.x > this._midx ? 1 : -1));
                cc.audioEngine.stopAllEffects();
                f ? (this._hitNum += 1, GD.MAXHITUM < this._hitNum && (GD.MAXHITUM =
                    this._hitNum), this._hitUI.setNum(this._hitNum), shake.hitAndShake(this._bg, 10, 10), 0 < c && this._dataLayer.setNum(c, this._hitNum), GD.SOUND && cc.audioEngine.playEffect(res.role_a2, !1)) : GD.SOUND && cc.audioEngine.playEffect(res.role_a1, !1);
                this._helo.toAttact()
            }
        },
        setLive: function(a) {
            this._live -= a;
            if (0 >= this._live) {
                this._live = 0;
                var b = this;
                setTimeout(function() {
                    b.onGameOver()
                }, 500)
            }
            a = Math.floor(100 * this._live / GD.LIFE);
            a = 182 * (0 >= a ? 0 : 100 < a ? 100 : a) / 100;
            this._barRenderer && this._barRenderer.setTextureRect(cc.rect(0,
                0, a, 11))
        },
        clockCounter2: function() {
            if (this._state == STATE_PLAYING)
                if (0 < this._time2) {
                    this._time2 -= 0.1;
                    this._time = Math.floor(this._time2);
                    this._time2 = Math.floor(10 * this._time2) / 10;
                    var a = 0 == this._time2 - this._time ? this._time2 + ".0" : this._time2;
                    GD.USETIME = GD.MAXTIME - Number(this._time2);
                    GD.USETIME = 0 > GD.USETIME ? 0 : GD.USETIME;
                    GD.USETIME = Math.floor(10 * GD.USETIME) / 10;
                    this._dataLayer.setTimeNum(a)
                } else this.onGameOver()
        },
        processTouchEndEvent: function() {
            this._attackLeft.color = this._BtnColor;
            this._attackRight.color =
                this._BtnColor
        },
        processTouchEvent: function(a) {
            this._state == STATE_PLAYING && (-1 == a ? (this._attackLeft.color = cc.color.RED, this._helo.setDirect(1), this.attactEnemy(-1)) : 1 == a && (this._attackRight.color = cc.color.RED, this._helo.setDirect(-1), this.attactEnemy(1)))
        },
        update: function(a) {
            this._state == STATE_PLAYING && (0 >= this._locktime ? this._locktime = 0 : this._locktime--, this.checkIsCollide(a), this.updateUI())
        },
        checkIsCollide: function(a) {
            var b, e, d;
            this._helo.collideRect();
            for (d = 0; d < GD.CONTAINER.ENEMIES.length; d++)
                if (b =
                    GD.CONTAINER.ENEMIES[d], b.active && (b.update(a), b.isLive && !b.hasFired && (e = b.attactRect(), e.width + e.x > this._midx && 1 == b.direct || e.x - e.width < this._midx && -1 == b.direct))) b.hasFired = !0, this.checkPet(b) || (this._hitNum = 0, this.setLive(b.power), this._helo.beHurt(b.direct))
        },
        checkPet: function(a) {
            if (0 < GD.CONTAINER.PET.length)
                for (var b = 0; b < GD.CONTAINER.PET.length; b++) {
                    var e = GD.CONTAINER.PET[b];
                    if (e && e.active) return e.toFire(a, a.x, a.y), !0
                }
            return !1
        },
        petFire: function(a, b) {
            Light.addNew(a.x, a.y);
            a.toBeHurt(3)
        },
        updateUI: function() {
            shake &&
                shake.update();
            if (this._state == STATE_PLAYING)
                if (0 >= this._space) {
                    this._space = 30;
                    var a = 1,
                        b;
                    10 > this._time ? (a = 3, b = 0.3 < Math.random() ? 4 : 3) : 20 >= this._time ? (a = 0.3 < Math.random() ? 3 : 2, b = 3) : 50 > this._time ? 20 < this._time && 24 > this._time || 30 < this._time && 34 > this._time || 40 < this._time && 44 > this._time ? (a = 0.2 < Math.random() ? 3 : 2, b == 0.7 < Math.random() ? 2 : 1) : (a = Math.floor(2 * Math.random()) + 1, b = 1 != a ? 2 : 3) : 55 > this._time ? (a = 0.3 < Math.random() ? 2 : 1, b = 2 - a + 2) : 57 != this._time ? (a = 1, b = Math.floor(1 * Math.random()) + 2) : (a = 2, b = Math.floor(1 * Math.random()) +
                        1);
                    Enemy.addNewEnemy(a, b)
                } else this._space--
        },
        clearEmeny: function() {
            for (i = 0; i < GD.CONTAINER.ENEMIES.length; i++) {
                var a = GD.CONTAINER.ENEMIES[i];
                a && this._roles.removeChild(a)
            }
            GD.CONTAINER.ENEMIES = []
        },
        onGameOver: function() {
            trace("ENEMIES------------" + GD.CONTAINER.ENEMIES.length);
            trace("PET------------" + GD.CONTAINER.PET.length);
            trace("BLOOD------------" + GD.CONTAINER.BLOOD.length);
            trace("onGameOver------------" + this._roles.getChildrenCount());
            this._state = STATE_GAMEOVER;
            this.unschedule(this.clockCounter2,
                0.1);
            this.clearEmeny();
            this._heloB.removeAllChildren();
            this._helo = null;
            cc.eventManager.removeAllListeners();
            this._roles.removeAllChildren();
            cc.spriteFrameCache.removeSpriteFramesFromFile(res.helo_plist);
            cc.spriteFrameCache.removeSpriteFramesFromFile(res.npc_plist);
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
            a.y = 26;
            a.anchorX = 0.5;
            a.x = winSize.width / 2;
            this.addChild(a)
        },
        initMenu: function() {
            this.menu = cc.Sprite.create("#return0001.png");
            this.menu.x = winSize.width / 2;
            this.menu.y = 100;
            this.addChild(this.menu);
            var a = this;
            this.listener4 = cc.EventListener.create({
                event: cc.EventListener.TOUCH_ONE_BY_ONE,
                swallowTouches: !1,
                onTouchBegan: function(a, e) {
                    var d = e.getCurrentTarget(),
                        c = d.convertToNodeSpace(a.getLocation()),
                        f = d.getContentSize(),
                        f = cc.rect(0, 0, f.width, f.height);
                    cc.rectContainsPoint(f, c) && (d.y -= 2);
                    return !0
                },
                onTouchEnded: function(b, e) {
                    a.onReturn()
                }
            });
            cc.eventManager.addListener(this.listener4, this.menu)
        },
        onReturn: function() {
            cc.eventManager.removeListener(this.listener4, this.menu);
            cc.director.runScene(cc.TransitionFade.create(0.3, GameOverScene.create()))
        },
        initBg: function() {
            trace("initBg");
            var a = cc.DrawNode.create();
            a.drawRect(cc.p(-56, -10), cc.p(800, winSize.height + 20), cc.color(25, 25, 25, 255), 0, 0);
            this.addChild(a);
            this._bg = new cc.Sprite("#shareword.png");
            this._bg.x = winSize.width / 2;
            this._bg.y = winSize.height - 270;
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
var GameOverLayer = cc.Layer.extend({
        _time: null,
        _bg: null,
        _scoreLabel: null,
        _sharelayer: null,
        _viewB: null,
        sharemenu: null,
        againmenu: null,
        downmenu: null,
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
            this.addChild(a)
        },
        initEvent: function() {
            var a = this,
                b = cc.EventListener.create({
                    event: cc.EventListener.TOUCH_ONE_BY_ONE,
                    swallowTouches: !1,
                    onTouchBegan: function(b,
                        d) {
                        var c = d.getCurrentTarget();
                        trace(c);
                        var f = c.convertToNodeSpace(b.getLocation()),
                            g = c.getContentSize(),
                            g = cc.rect(0, 0, g.width, g.height);
                        if (cc.rectContainsPoint(g, f)) {
                            c.y -= 2;
                            if (c == a.sharemenu) a.onShare();
                            else if (c == a.againmenu) a.onAgain();
                            else if (c == a.downmenu) a.onDownLoad();
                            return !0
                        }
                        return !1
                    },
                    onTouchEnded: function(a, b) {
                        var c = b.getCurrentTarget();
                        c.y += 2
                    }
                });
            cc.eventManager.addListener(b, a.sharemenu);
            cc.eventManager.addListener(b.clone(), a.againmenu);
            cc.eventManager.addListener(b.clone(), a.downmenu)
        },
        initMenu: function() {
            this.sharemenu = cc.Sprite.create("#share.png");
            this.againmenu = cc.Sprite.create("#again.png");
            this.downmenu = cc.Sprite.create("#enter.png");
            this.addChild(this.sharemenu);
            this.addChild(this.againmenu);
            this.addChild(this.downmenu);
            this._bg.x = winSize.width / 2;
            this._bg.y = winSize.height / 2 + 230.5 - 189 + 70;
            this._scoreLabel.x = this._bg.x;
            this._scoreLabel.y = this._bg.y - 10;
            this.sharemenu.x = this._bg.x + 100;
            this.againmenu.y = this.sharemenu.y = this._bg.y - 230.5;
            this.againmenu.x = this._bg.x - 85;
            this.downmenu.x =
                this._bg.x + 8;
            this.downmenu.y = this._bg.y - 230.5 - 75;
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
            this._bg = new cc.Sprite("#gameover.png");
            this.addChild(this._bg);
            this._scoreLabel = cc.LabelAtlas.create("0", res.num_png, 65, 87, "0");
            this.addChild(this._scoreLabel);
            this._scoreLabel.anchorX = 0.5;
            this._scoreLabel.setString(GD.SCORE)
        },
        onAgain: function() {
            // pgvSendClick && "function" == typeof pgvSendClick && pgvSendClick({
            //     hottag: "act.minixd.again"
            // });
            cc.spriteFrameCache.removeSpriteFramesFromFile(res.npc_plist);
            cc.director.runScene(cc.TransitionFade.create(0.3, MenuScene.create()))
        },
        onDownLoad: function() {
            // pgvSendClick && "function" == typeof pgvSendClick && pgvSendClick({
            //     hottag: "act.minixd.download"
            // });
            // window.open("http://ttxd.qq.com/act/minixd/play.html", "_blank")
        },
        onShare: function() {
            // pgvSendClick && "function" == typeof pgvSendClick && pgvSendClick({
            //     hottag: "act.minixd.share"
            // });
            cc.eventManager.removeAllListeners();
            trace("onShare");
            cc.director.runScene(cc.TransitionFade.create(0.3, ShareScene.create()))
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
    cc.sys.isMobile ? cc.view.setDesignResolutionSize(445, 700, cc.ResolutionPolicy.FIXED_HEIGHT) : cc.view.setDesignResolutionSize(445, 700, cc.ResolutionPolicy.SHOW_ALL);
    winSize = cc.director.getWinSize();
    cc.LoaderScene.preload(g_mainmenu, function() {
        cc.director.runScene(MenuScene.create())
    }, this)
}; /*  |xGv00|07811e1180a44cccec77175fcb6e7275 */