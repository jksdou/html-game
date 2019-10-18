function ShakeCls() {
    this.shakeee = null;
    var b = this;
    this.bool = !1;
    this.hitAndShake = function(b, a, c, g, fb) {
        this.bool = !0;
        this.shakeee = b;
        null == this.shakeee.basex && (this.shakeee.basex = this.shakeee.x);
        null == this.shakeee.basey && (this.shakeee.basey = this.shakeee.y);
        this.shakeee.rangeX = null == a ? 20 : a;
        this.shakeee.rangeY = null == c ? 20 : c;
        this.shakeee.x = this.shakeee.basex - this.shakeee.rangeX / 2 + this.shakeee.rangeX * Math.random();
        this.shakeee.y = this.shakeee.basey - this.shakeee.rangeY + 2 * this.shakeee.rangeY * Math.random();
        this.shakeee.flashTime =
            6;
        this.shakeee.funcCall = null == fb ? null : fb;
        this.shakeee.shakeTimeCount = 0;
        this.shakeee.cframe = 0
    };
    this.update = function() {
        this.bool && (this.shakeee.cframe += 1, 2 > this.shakeee.cframe || (this.shakeee.cframe = 0, 5 == this.shakeee.shakeTimeCount ? b.cancelHitAndShake(this.shakeee) : (this.shakeee.shakeTimeCount++, this.shakeee.x += 1.7 * (this.shakeee.basex - this.shakeee.x), this.shakeee.y += 1.7 * (this.shakeee.basey - this.shakeee.y))))
    };
    this.cancelHitAndShake = function(b) {
        this.bool = !1;
        b || (b = this.shakeee);
        b.x = b.basex;
        b.y = b.basey
    }
}
var shake = new ShakeCls;
(function(b, d, a) {
    var c;
    b.properties = {
        width: 634,
        height: 1008,
        fps: 24,
        color: "#000000",
        manifest: [{
            src: "images/Bitmap1.png",
            id: "Bitmap1"
        }, {
            src: "images/mc_42.png",
            id: "mc_42"
        }]
    };
    (b.loading = function() {
        this.initialize();
        this.bb = new b.LOADUI;
        this.bb.setTransform(324.1, 446.5, 1, 1, 0, 0, 0, 324.1, 446.5);
        this.addChild(this.bb)
    }).prototype = c = new a.Container;
    c.nominalBounds = new a.Rectangle(155.6, 431, 997, 1138);
    (b.Bitmap1 = function() {
        this.initialize(d.Bitmap1)
    }).prototype = c = new a.Bitmap;
    c.nominalBounds = new a.Rectangle(0,
        0, 997, 1138);
    (b.mc_42 = function() {
        this.initialize(d.mc_42)
    }).prototype = c = new a.Bitmap;
    c.nominalBounds = new a.Rectangle(0, 0, 577, 203);
    (b.mc_18 = function() {
        this.initialize();
        this.instance = new b.mc_42;
        this.instance.setTransform(-288.5, -101.5);
        this.addChild(this.instance)
    }).prototype = c = new a.Container;
    c.nominalBounds = new a.Rectangle(-288.5, -101.5, 577, 203);
    (b.mc_17 = function(c, d, e) {
        null == e && (e = !1);
        this.initialize(c, d, e, {});
        this.frame_14 = function() {
            this.stop()
        };
        this.timeline.addTween(a.Tween.get(this).wait(14).call(this.frame_14).wait(1));
        this.instance = new b.mc_18("synched", 0);
        this.instance.alpha = 0;
        this.timeline.addTween(a.Tween.get(this.instance).to({
            alpha: 1
        }, 14, a.Ease.get(0.5)).wait(1))
    }).prototype = c = new a.MovieClip;
    c.nominalBounds = new a.Rectangle(-288.5, -101.5, 577, 203);
    (b.LOADUI = function() {
        this.initialize();
        this.text = new a.Text("\u4e0d\u8981\u8d70\u5f00,\u5c0f\u5de8\u4eba\u9a6c\u4e0a\u51fa\u6765\u6c42\u8650", "bold 25px 'Microsoft YaHei'", "#FFFFFE");
        this.text.lineHeight = 27;
        this.text.lineWidth = 380;
        this.text.setTransform(135.5, 566.6);
        this.numtxt = new a.Text(" 0%", "bold 26px 'Microsoft YaHei'", "#00D8FD");
        this.numtxt.name = "numtxt";
        this.numtxt.textAlign = "center";
        this.numtxt.lineHeight = 28;
        this.numtxt.lineWidth = 79;
        this.numtxt.setTransform(306.5, 495.1);
        this.instance = new b.mc_17;
        this.instance.setTransform(324.1, 364.1);
        this.instance_1 = new b.Bitmap1;
        this.instance_1.setTransform(-161.4, -73);
        this.addChild(this.instance_1, this.instance, this.numtxt, this.text)
    }).prototype = c = new a.Container;
    c.nominalBounds = new a.Rectangle(-161.4, -73, 997, 1138)
})(loadlib =
    loadlib || {}, loadimages = loadimages || {}, createjs = createjs || {});
var loadlib, loadimages, createjs;
(function(b, d, a) {
    var c;
    b.properties = {
        width: 640,
        height: 8192,
        fps: 24,
        color: "#FFFFFF",
        manifest: [{
            src: "images/mc_41.png",
            id: "mc_41"
        }, {
            src: "images/mc_42.png",
            id: "mc_42"
        }, {
            src: "images/mc_43.png",
            id: "mc_43"
        }, {
            src: "images/mc_44.png",
            id: "mc_44"
        }, {
            src: "images/mc_45.png",
            id: "mc_45"
        }, {
            src: "images/mc_46.png",
            id: "mc_46"
        }, {
            src: "images/mc_47.png",
            id: "mc_47"
        }, {
            src: "images/mc_48.png",
            id: "mc_48"
        }, {
            src: "images/mc_49.jpg",
            id: "mc_49"
        }, {
            src: "images/mc_50.jpg",
            id: "mc_50"
        }, {
            src: "images/mc_51.png",
            id: "mc_51"
        }, {
            src: "images/mc_53.png",
            id: "mc_53"
        }, {
            src: "images/mc_54.png",
            id: "mc_54"
        }, {
            src: "images/mc_55.png",
            id: "mc_55"
        }, {
            src: "images/mc_70.png",
            id: "mc_70"
        }, {
            src: "images/mc_72.png",
            id: "mc_72"
        }, {
            src: "images/R3.png",
            id: "R3"
        }, {
            src: "images/tt1.png",
            id: "tt1"
        }, {
            src: "images/tt2.png",
            id: "tt2"
        }, {
            src: "images/tt3.png",
            id: "tt3"
        }, {
            src: "images/tt4.png",
            id: "tt4"
        }, {
            src: "images/wtxt1.png",
            id: "wtxt1"
        }, {
            src: "images/wtxt2.png",
            id: "wtxt2"
        }, {
            src: "images/wtxt3.png",
            id: "wtxt3"
        }, {
            src: "images/wtxt4.png",
            id: "wtxt4"
        }, {
            src: "images/Y1.png",
            id: "Y1"
        }]
    };
    (b.tpsh5 = function() {
        this.initialize()
    }).prototype =
        c = new a.Container;
    c.nominalBounds = null;
    (b.mc_41 = function() {
        this.initialize(d.mc_41)
    }).prototype = c = new a.Bitmap;
    c.nominalBounds = new a.Rectangle(0, 0, 67, 77);
    (b.mc_42 = function() {
        this.initialize(d.mc_42)
    }).prototype = c = new a.Bitmap;
    c.nominalBounds = new a.Rectangle(0, 0, 577, 203);
    (b.mc_43 = function() {
        this.initialize(d.mc_43)
    }).prototype = c = new a.Bitmap;
    c.nominalBounds = new a.Rectangle(0, 0, 67, 77);
    (b.mc_44 = function() {
        this.initialize(d.mc_44)
    }).prototype = c = new a.Bitmap;
    c.nominalBounds = new a.Rectangle(0, 0, 344, 192);
    (b.mc_45 = function() {
        this.initialize(d.mc_45)
    }).prototype = c = new a.Bitmap;
    c.nominalBounds = new a.Rectangle(0, 0, 67, 77);
    (b.mc_46 = function() {
        this.initialize(d.mc_46)
    }).prototype = c = new a.Bitmap;
    c.nominalBounds = new a.Rectangle(0, 0, 358, 164);
    (b.mc_47 = function() {
        this.initialize(d.mc_47)
    }).prototype = c = new a.Bitmap;
    c.nominalBounds = new a.Rectangle(0, 0, 682, 488);
    (b.mc_48 = function() {
        this.initialize(d.mc_48)
    }).prototype = c = new a.Bitmap;
    c.nominalBounds = new a.Rectangle(0, 0, 80, 62);
    (b.mc_49 = function() {
        this.initialize(d.mc_49)
    }).prototype =
        c = new a.Bitmap;
    c.nominalBounds = new a.Rectangle(0, 0, 1E3, 1136);
    (b.mc_50 = function() {
        this.initialize(d.mc_50)
    }).prototype = c = new a.Bitmap;
    c.nominalBounds = new a.Rectangle(0, 0, 1E3, 1136);
    (b.mc_51 = function() {
        this.initialize(d.mc_51)
    }).prototype = c = new a.Bitmap;
    c.nominalBounds = new a.Rectangle(0, 0, 266, 102);
    (b.mc_53 = function() {
        this.initialize(d.mc_53)
    }).prototype = c = new a.Bitmap;
    c.nominalBounds = new a.Rectangle(0, 0, 266, 102);
    (b.mc_54 = function() {
        this.initialize(d.mc_54)
    }).prototype = c = new a.Bitmap;
    c.nominalBounds =
        new a.Rectangle(0, 0, 675, 148);
    (b.mc_55 = function() {
        this.initialize(d.mc_55)
    }).prototype = c = new a.Bitmap;
    c.nominalBounds = new a.Rectangle(0, 0, 98, 98);
    (b.mc_70 = function() {
        this.initialize(d.mc_70)
    }).prototype = c = new a.Bitmap;
    c.nominalBounds = new a.Rectangle(0, 0, 565, 130);
    (b.mc_72 = function() {
        this.initialize(d.mc_72)
    }).prototype = c = new a.Bitmap;
    c.nominalBounds = new a.Rectangle(0, 0, 603, 764);
    (b.R3 = function() {
        this.initialize(d.R3)
    }).prototype = c = new a.Bitmap;
    c.nominalBounds = new a.Rectangle(0, 0, 402, 414);
    (b.tt1 = function() {
        this.initialize(d.tt1)
    }).prototype =
        c = new a.Bitmap;
    c.nominalBounds = new a.Rectangle(0, 0, 96, 96);
    (b.tt2 = function() {
        this.initialize(d.tt2)
    }).prototype = c = new a.Bitmap;
    c.nominalBounds = new a.Rectangle(0, 0, 48, 96);
    (b.tt3 = function() {
        this.initialize(d.tt3)
    }).prototype = c = new a.Bitmap;
    c.nominalBounds = new a.Rectangle(0, 0, 48, 96);
    (b.tt4 = function() {
        this.initialize(d.tt4)
    }).prototype = c = new a.Bitmap;
    c.nominalBounds = new a.Rectangle(0, 0, 470, 26);
    (b.wtxt1 = function() {
        this.initialize(d.wtxt1)
    }).prototype = c = new a.Bitmap;
    c.nominalBounds = new a.Rectangle(0, 0, 516,
        438);
    (b.wtxt2 = function() {
        this.initialize(d.wtxt2)
    }).prototype = c = new a.Bitmap;
    c.nominalBounds = new a.Rectangle(0, 0, 516, 437);
    (b.wtxt3 = function() {
        this.initialize(d.wtxt3)
    }).prototype = c = new a.Bitmap;
    c.nominalBounds = new a.Rectangle(0, 0, 516, 393);
    (b.wtxt4 = function() {
        this.initialize(d.wtxt4)
    }).prototype = c = new a.Bitmap;
    c.nominalBounds = new a.Rectangle(0, 0, 503, 393);
    (b.Y1 = function() {
        this.initialize(d.Y1)
    }).prototype = c = new a.Bitmap;
    c.nominalBounds = new a.Rectangle(0, 0, 603, 764);
    (b.wintxtmc = function(c, d, e) {
        this.initialize(c,
            d, e, {});
        this.instance = new b.wtxt1;
        this.instance.setTransform(-387.9, -73);
        this.instance_1 = new b.wtxt2;
        this.instance_1.setTransform(-388.9, -72.5);
        this.instance_2 = new b.wtxt3;
        this.instance_2.setTransform(-388, -71.6);
        this.instance_3 = new b.wtxt4;
        this.instance_3.setTransform(-389.5, -71.5);
        this.timeline.addTween(a.Tween.get({}).to({
            state: [{
                t: this.instance
            }]
        }).to({
            state: [{
                t: this.instance_1
            }]
        }, 1).to({
            state: [{
                t: this.instance_2
            }]
        }, 1).to({
            state: [{
                t: this.instance_3
            }]
        }, 1).wait(1))
    }).prototype = c = new a.MovieClip;
    c.nominalBounds = new a.Rectangle(-387.9, -73, 516, 438);
    (b.rolemc = function() {
        this.initialize();
        this.shape = new a.Shape;
        this.shape.graphics.f().s("rgba(0,0,0,0.498)").ss(1, 1, 1).p("AhlhlIDLAAIAADLIjLAAg");
        this.shape.setTransform(10.3, 10.3);
        this.shape_1 = new a.Shape;
        this.shape_1.graphics.f("#000000").s().p("AhlBmIAAjLIDLAAIAADLg");
        this.shape_1.setTransform(10.3, 10.3);
        this.addChild(this.shape_1, this.shape)
    }).prototype = c = new a.Container;
    c.nominalBounds = new a.Rectangle(-1, -1, 22.6, 22.6);
    (b.mc_40 = function() {
        this.initialize();
        this.shape = new a.Shape;
        this.shape.graphics.bf(d.mc_48, null, new a.Matrix2D(1, 0, 0, 1, -48.8, -15)).s().p("Ak2CWIAAghIApAAIAAkKIJEAAIAAErg");
        this.shape.setTransform(0.6, 0);
        this.addChild(this.shape)
    }).prototype = c = new a.Container;
    c.nominalBounds = new a.Rectangle(-30.5, -15, 62.4, 30.1);
    (b.mc_36 = function() {
        this.initialize();
        this.instance = new b.mc_51;
        this.instance.setTransform(-133, -51);
        this.addChild(this.instance)
    }).prototype = c = new a.Container;
    c.nominalBounds = new a.Rectangle(-133, -51, 266, 102);
    (b.mc_35 = function() {
        this.initialize();
        this.instance = new b.mc_51;
        this.instance.setTransform(-133, -51);
        this.addChild(this.instance)
    }).prototype = c = new a.Container;
    c.nominalBounds = new a.Rectangle(-133, -51, 266, 102);
    (b.mc_31 = function() {
        this.initialize();
        this.instance = new b.mc_53;
        this.instance.setTransform(-133, -51);
        this.addChild(this.instance)
    }).prototype = c = new a.Container;
    c.nominalBounds = new a.Rectangle(-133, -51, 266, 102);
    (b.mc_27 = function() {
        this.initialize();
        this.instance = new b.mc_72;
        this.instance.setTransform(-301.5, -382);
        this.addChild(this.instance)
    }).prototype =
        c = new a.Container;
    c.nominalBounds = new a.Rectangle(-301.5, -382, 603, 764);
    (b.mc_25 = function() {
        this.initialize();
        this.instance = new b.mc_44;
        this.instance.setTransform(-172, -96);
        this.addChild(this.instance)
    }).prototype = c = new a.Container;
    c.nominalBounds = new a.Rectangle(-172, -96, 344, 192);
    (b.mc_24 = function() {
        this.initialize();
        this.instance = new b.mc_47;
        this.instance.setTransform(-341, -244);
        this.addChild(this.instance)
    }).prototype = c = new a.Container;
    c.nominalBounds = new a.Rectangle(-341, -244, 682, 488);
    (b.mc_23 =
        function() {
            this.initialize();
            this.instance = new b.mc_42;
            this.instance.setTransform(-288.5, -101.5);
            this.addChild(this.instance)
        }).prototype = c = new a.Container;
    c.nominalBounds = new a.Rectangle(-288.5, -101.5, 577, 203);
    (b.mc_21 = function() {
        this.initialize();
        this.instance = new b.mc_70;
        this.instance.setTransform(-282.5, -65);
        this.addChild(this.instance)
    }).prototype = c = new a.Container;
    c.nominalBounds = new a.Rectangle(-282.5, -65, 565, 130);
    (b.mc_12 = function() {
        this.initialize();
        this.shape = new a.Shape;
        this.shape.graphics.f("#FFFFFF").s().p("EAmdADQIAAivIDHAAIAACvgEAm2AC2ICVAAIAAh8IiVAAgEAi8ADQIAAivIDHAAIAACvgEAjVAC2ICVAAIAAh8IiVAAgAfbDQIAAivIDHAAIAACvgAf0C2ICVAAIAAh8IiVAAgAeoDQIAAivIAZAAIAACvgAbgDQIAAgaIAaAAIAAgZIAZAAIAAgZIAYAAIAAgZIAZAAIAAgYIAZAAIAAgZIAZAAIAAgZIAaAAIAAAZIgZAAIAAAZIgZAAIAAAZIgZAAIAAAZIgZAAIAAAZIgZAAIAAAZIgZAAIAAAZgEgo0gCDIgGhMIAgAAIgFBMgEgpfgCDIgEhMIAeAAIgEBMg");
        this.shape.setTransform(29.7, 5.8);
        this.addChild(this.shape)
    }).prototype = c = new a.Container;
    c.nominalBounds = new a.Rectangle(-236.4, -15, 532.2, 41.7);
    (b.mc_10 = function(c, d, e) {
        this.initialize(c, d, e, {});
        var f = new a.Shape;
        f._off = !0;
        var h = (new a.Graphics).p("EglpACuIAAlbMBLTAAAIAAFbg"),
            k = (new a.Graphics).p("EglRACuIAAlbMBKjAAAIAAFbg"),
            l = (new a.Graphics).p("Egk5ACuIAAlbMBJzAAAIAAFbg"),
            m = (new a.Graphics).p("EgkgACuIAAlbMBJBAAAIAAFbg"),
            n = (new a.Graphics).p("EgkIACuIAAlbMBIRAAAIAAFbg"),
            p = (new a.Graphics).p("EgjwACuIAAlbMBHhAAAIAAFbg"),
            q = (new a.Graphics).p("EgjYACuIAAlbMBGxAAAIAAFbg"),
            r = (new a.Graphics).p("Egi/ACuIAAlbMBF/AAAIAAFbg"),
            s = (new a.Graphics).p("EginACuIAAlbMBFPAAAIAAFbg"),
            t = (new a.Graphics).p("EgiPACuIAAlbMBEfAAAIAAFbg"),
            u = (new a.Graphics).p("Egh3ACuIAAlbMBDvAAAIAAFbg"),
            v = (new a.Graphics).p("EgheACuIAAlbMBC9AAAIAAFbg"),
            w = (new a.Graphics).p("EghGACuIAAlbMBCNAAAIAAFbg"),
            x = (new a.Graphics).p("EgguACuIAAlbMBBdAAAIAAFbg"),
            y = (new a.Graphics).p("EggWACuIAAlbMBAtAAAIAAFbg"),
            z = (new a.Graphics).p("A/9CuIAAlbMA/7AAAIAAFbg"),
            A = (new a.Graphics).p("A/lCuIAAlbMA/LAAAIAAFbg"),
            B = (new a.Graphics).p("A/NCuIAAlbMA+bAAAIAAFbg"),
            C = (new a.Graphics).p("A+1CuIAAlbMA9rAAAIAAFbg"),
            D = (new a.Graphics).p("A+cCuIAAlbMA85AAAIAAFbg"),
            E = (new a.Graphics).p("A+ECuIAAlbMA8JAAAIAAFbg"),
            F = (new a.Graphics).p("A9sCuIAAlbMA7ZAAAIAAFbg"),
            G = (new a.Graphics).p("A9UCuIAAlbMA6pAAAIAAFbg"),
            H = (new a.Graphics).p("A87CuIAAlbMA53AAAIAAFbg"),
            I = (new a.Graphics).p("A8jCuIAAlbMA5HAAAIAAFbg"),
            J = (new a.Graphics).p("A8LCuIAAlbMA4XAAAIAAFbg"),
            K = (new a.Graphics).p("A7zCuIAAlbMA3nAAAIAAFbg"),
            L = (new a.Graphics).p("A7aCuIAAlbMA21AAAIAAFbg"),
            M = (new a.Graphics).p("A7CCuIAAlbMA2FAAAIAAFbg"),
            N = (new a.Graphics).p("A6qCuIAAlbMA1VAAAIAAFbg"),
            O = (new a.Graphics).p("A6SCuIAAlbMA0lAAAIAAFbg"),
            P = (new a.Graphics).p("A55CuIAAlbMAzzAAAIAAFbg"),
            Q = (new a.Graphics).p("A5hCuIAAlbMAzDAAAIAAFbg"),
            R = (new a.Graphics).p("A5JCuIAAlbMAyTAAAIAAFbg"),
            S = (new a.Graphics).p("A4xCuIAAlbMAxjAAAIAAFbg"),
            T = (new a.Graphics).p("A4YCuIAAlbMAwxAAAIAAFbg"),
            U = (new a.Graphics).p("A4ACuIAAlbMAwBAAAIAAFbg"),
            V = (new a.Graphics).p("A3oCuIAAlbMAvRAAAIAAFbg"),
            W = (new a.Graphics).p("A3QCuIAAlbMAuhAAAIAAFbg"),
            X = (new a.Graphics).p("A23CuIAAlbMAtvAAAIAAFbg"),
            Y = (new a.Graphics).p("A2fCuIAAlbMAs/AAAIAAFbg"),
            Z = (new a.Graphics).p("A2HCuIAAlbMAsPAAAIAAFbg"),
            $ = (new a.Graphics).p("A1vCuIAAlbMArfAAAIAAFbg"),
            aa = (new a.Graphics).p("A1WCuIAAlbMAqtAAAIAAFbg"),
            ba = (new a.Graphics).p("A0+CuIAAlbMAp9AAAIAAFbg"),
            ca = (new a.Graphics).p("A0mCuIAAlbMApNAAAIAAFbg"),
            da = (new a.Graphics).p("A0OCuIAAlbMAodAAAIAAFbg"),
            ea = (new a.Graphics).p("Az1CuIAAlbMAnrAAAIAAFbg"),
            fa = (new a.Graphics).p("AzdCuIAAlbMAm7AAAIAAFbg"),
            ga = (new a.Graphics).p("AzFCuIAAlbMAmLAAAIAAFbg"),
            ha = (new a.Graphics).p("AytCuIAAlbMAlbAAAIAAFbg"),
            ia = (new a.Graphics).p("AyUCuIAAlbMAkpAAAIAAFbg"),
            ja = (new a.Graphics).p("Ax8CuIAAlbMAj5AAAIAAFbg"),
            ka = (new a.Graphics).p("AxkCuIAAlbMAjJAAAIAAFbg"),
            la = (new a.Graphics).p("AxMCuIAAlbMAiZAAAIAAFbg"),
            ma = (new a.Graphics).p("AwzCuIAAlbMAhnAAAIAAFbg"),
            na = (new a.Graphics).p("AwbCuIAAlbMAg3AAAIAAFbg"),
            oa = (new a.Graphics).p("AwDCuIAAlbMAgHAAAIAAFbg"),
            pa = (new a.Graphics).p("AvrCuIAAlbIfXAAIAAFbg"),
            qa = (new a.Graphics).p("AvSCuIAAlbIelAAIAAFbg"),
            ra = (new a.Graphics).p("Au6CuIAAlbId1AAIAAFbg"),
            sa = (new a.Graphics).p("AuiCuIAAlbIdFAAIAAFbg"),
            ta = (new a.Graphics).p("AuKCuIAAlbIcVAAIAAFbg"),
            ua = (new a.Graphics).p("AtxCuIAAlbIbjAAIAAFbg"),
            va = (new a.Graphics).p("AtZCuIAAlbIazAAIAAFbg"),
            wa = (new a.Graphics).p("AtBCuIAAlbIaDAAIAAFbg"),
            xa = (new a.Graphics).p("AspCuIAAlbIZTAAIAAFbg"),
            ya = (new a.Graphics).p("AsQCuIAAlbIYhAAIAAFbg"),
            za = (new a.Graphics).p("Ar4CuIAAlbIXxAAIAAFbg"),
            Aa = (new a.Graphics).p("ArgCuIAAlbIXBAAIAAFbg"),
            Ba = (new a.Graphics).p("ArICuIAAlbIWRAAIAAFbg"),
            Ca = (new a.Graphics).p("AqvCuIAAlbIVfAAIAAFbg"),
            Da = (new a.Graphics).p("AqXCuIAAlbIUvAAIAAFbg"),
            Ea = (new a.Graphics).p("Ap/CuIAAlbIT/AAIAAFbg"),
            Fa = (new a.Graphics).p("ApnCuIAAlbITPAAIAAFbg"),
            Ga = (new a.Graphics).p("ApOCuIAAlbISdAAIAAFbg"),
            Ha = (new a.Graphics).p("Ao2CuIAAlbIRtAAIAAFbg"),
            Ia = (new a.Graphics).p("AoeCuIAAlbIQ9AAIAAFbg"),
            Ja = (new a.Graphics).p("AoGCuIAAlbIQNAAIAAFbg"),
            Ka = (new a.Graphics).p("AntCuIAAlbIPbAAIAAFbg"),
            La = (new a.Graphics).p("AnVCuIAAlbIOrAAIAAFbg"),
            Ma = (new a.Graphics).p("Am9CuIAAlbIN7AAIAAFbg"),
            Na = (new a.Graphics).p("AmlCuIAAlbINLAAIAAFbg"),
            Oa = (new a.Graphics).p("AmMCuIAAlbIMZAAIAAFbg"),
            Pa = (new a.Graphics).p("Al0CuIAAlbILpAAIAAFbg"),
            Qa = (new a.Graphics).p("AlcCuIAAlbIK5AAIAAFbg"),
            Ra = (new a.Graphics).p("AlECuIAAlbIKJAAIAAFbg"),
            Sa = (new a.Graphics).p("AkrCuIAAlbIJXAAIAAFbg"),
            Ta = (new a.Graphics).p("AkTCuIAAlbIInAAIAAFbg"),
            Ua = (new a.Graphics).p("Aj7CuIAAlbIH3AAIAAFbg"),
            Va = (new a.Graphics).p("AjjCuIAAlbIHHAAIAAFbg"),
            Wa = (new a.Graphics).p("AjKCuIAAlbIGVAAIAAFbg"),
            Xa = (new a.Graphics).p("AiyCuIAAlbIFlAAIAAFbg"),
            Ya = (new a.Graphics).p("AiaCuIAAlbIE1AAIAAFbg"),
            Za = (new a.Graphics).p("AiCCuIAAlbIEFAAIAAFbg"),
            $a = (new a.Graphics).p("AhpCuIAAlbIDTAAIAAFbg"),
            ab = (new a.Graphics).p("AhRCuIAAlbICjAAIAAFbg"),
            bb = (new a.Graphics).p("Ag5CuIAAlbIBzAAIAAFbg"),
            cb = (new a.Graphics).p("AghCuIAAlbIBDAAIAAFbg"),
            db = (new a.Graphics).p("AgJCuIAAlbIASAAIAAFbg");
        this.timeline.addTween(a.Tween.get(f).to({
            graphics: h,
            x: 0.8,
            y: 0
        }).wait(1).to({
            graphics: k,
            x: -1.7,
            y: 0
        }).wait(1).to({
            graphics: l,
            x: -4.1,
            y: 0
        }).wait(1).to({
            graphics: m,
            x: -6.5,
            y: 0
        }).wait(1).to({
            graphics: n,
            x: -8.9,
            y: 0
        }).wait(1).to({
            graphics: p,
            x: -11.4,
            y: 0
        }).wait(1).to({
            graphics: q,
            x: -13.8,
            y: 0
        }).wait(1).to({
            graphics: r,
            x: -16.2,
            y: 0
        }).wait(1).to({
            graphics: s,
            x: -18.6,
            y: 0
        }).wait(1).to({
            graphics: t,
            x: -21.1,
            y: 0
        }).wait(1).to({
            graphics: u,
            x: -23.5,
            y: 0
        }).wait(1).to({
            graphics: v,
            x: -25.9,
            y: 0
        }).wait(1).to({
            graphics: w,
            x: -28.3,
            y: 0
        }).wait(1).to({
            graphics: x,
            x: -30.8,
            y: 0
        }).wait(1).to({
            graphics: y,
            x: -33.2,
            y: 0
        }).wait(1).to({
            graphics: z,
            x: -35.6,
            y: 0
        }).wait(1).to({
            graphics: A,
            x: -38,
            y: 0
        }).wait(1).to({
            graphics: B,
            x: -40.5,
            y: 0
        }).wait(1).to({
            graphics: C,
            x: -42.9,
            y: 0
        }).wait(1).to({
            graphics: D,
            x: -45.3,
            y: 0
        }).wait(1).to({
            graphics: E,
            x: -47.7,
            y: 0
        }).wait(1).to({
            graphics: F,
            x: -50.2,
            y: 0
        }).wait(1).to({
            graphics: G,
            x: -52.6,
            y: 0
        }).wait(1).to({
            graphics: H,
            x: -55,
            y: 0
        }).wait(1).to({
            graphics: I,
            x: -57.4,
            y: 0
        }).wait(1).to({
            graphics: J,
            x: -59.9,
            y: 0
        }).wait(1).to({
            graphics: K,
            x: -62.3,
            y: 0
        }).wait(1).to({
            graphics: L,
            x: -64.7,
            y: 0
        }).wait(1).to({
            graphics: M,
            x: -67.1,
            y: 0
        }).wait(1).to({
            graphics: N,
            x: -69.6,
            y: 0
        }).wait(1).to({
            graphics: O,
            x: -72,
            y: 0
        }).wait(1).to({
            graphics: P,
            x: -74.4,
            y: 0
        }).wait(1).to({
            graphics: Q,
            x: -76.8,
            y: 0
        }).wait(1).to({
            graphics: R,
            x: -79.3,
            y: 0
        }).wait(1).to({
            graphics: S,
            x: -81.7,
            y: 0
        }).wait(1).to({
            graphics: T,
            x: -84.1,
            y: 0
        }).wait(1).to({
            graphics: U,
            x: -86.5,
            y: 0
        }).wait(1).to({
            graphics: V,
            x: -89,
            y: 0
        }).wait(1).to({
            graphics: W,
            x: -91.4,
            y: 0
        }).wait(1).to({
            graphics: X,
            x: -93.8,
            y: 0
        }).wait(1).to({
            graphics: Y,
            x: -96.2,
            y: 0
        }).wait(1).to({
            graphics: Z,
            x: -98.7,
            y: 0
        }).wait(1).to({
            graphics: $,
            x: -101.1,
            y: 0
        }).wait(1).to({
            graphics: aa,
            x: -103.5,
            y: 0
        }).wait(1).to({
            graphics: ba,
            x: -105.9,
            y: 0
        }).wait(1).to({
            graphics: ca,
            x: -108.4,
            y: 0
        }).wait(1).to({
            graphics: da,
            x: -110.8,
            y: 0
        }).wait(1).to({
            graphics: ea,
            x: -113.2,
            y: 0
        }).wait(1).to({
            graphics: fa,
            x: -115.6,
            y: 0
        }).wait(1).to({
            graphics: ga,
            x: -118.1,
            y: 0
        }).wait(1).to({
            graphics: ha,
            x: -120.5,
            y: 0
        }).wait(1).to({
            graphics: ia,
            x: -122.9,
            y: 0
        }).wait(1).to({
            graphics: ja,
            x: -125.3,
            y: 0
        }).wait(1).to({
            graphics: ka,
            x: -127.8,
            y: 0
        }).wait(1).to({
            graphics: la,
            x: -130.2,
            y: 0
        }).wait(1).to({
            graphics: ma,
            x: -132.6,
            y: 0
        }).wait(1).to({
            graphics: na,
            x: -135,
            y: 0
        }).wait(1).to({
            graphics: oa,
            x: -137.5,
            y: 0
        }).wait(1).to({
            graphics: pa,
            x: -139.9,
            y: 0
        }).wait(1).to({
            graphics: qa,
            x: -142.3,
            y: 0
        }).wait(1).to({
            graphics: ra,
            x: -144.7,
            y: 0
        }).wait(1).to({
            graphics: sa,
            x: -147.2,
            y: 0
        }).wait(1).to({
            graphics: ta,
            x: -149.6,
            y: 0
        }).wait(1).to({
            graphics: ua,
            x: -152,
            y: 0
        }).wait(1).to({
            graphics: va,
            x: -154.4,
            y: 0
        }).wait(1).to({
            graphics: wa,
            x: -156.9,
            y: 0
        }).wait(1).to({
            graphics: xa,
            x: -159.3,
            y: 0
        }).wait(1).to({
            graphics: ya,
            x: -161.7,
            y: 0
        }).wait(1).to({
            graphics: za,
            x: -164.1,
            y: 0
        }).wait(1).to({
            graphics: Aa,
            x: -166.6,
            y: 0
        }).wait(1).to({
            graphics: Ba,
            x: -169,
            y: 0
        }).wait(1).to({
            graphics: Ca,
            x: -171.4,
            y: 0
        }).wait(1).to({
            graphics: Da,
            x: -173.8,
            y: 0
        }).wait(1).to({
            graphics: Ea,
            x: -176.3,
            y: 0
        }).wait(1).to({
            graphics: Fa,
            x: -178.7,
            y: 0
        }).wait(1).to({
            graphics: Ga,
            x: -181.1,
            y: 0
        }).wait(1).to({
            graphics: Ha,
            x: -183.5,
            y: 0
        }).wait(1).to({
            graphics: Ia,
            x: -186,
            y: 0
        }).wait(1).to({
            graphics: Ja,
            x: -188.4,
            y: 0
        }).wait(1).to({
            graphics: Ka,
            x: -190.8,
            y: 0
        }).wait(1).to({
            graphics: La,
            x: -193.2,
            y: 0
        }).wait(1).to({
            graphics: Ma,
            x: -195.7,
            y: 0
        }).wait(1).to({
            graphics: Na,
            x: -198.1,
            y: 0
        }).wait(1).to({
            graphics: Oa,
            x: -200.5,
            y: 0
        }).wait(1).to({
            graphics: Pa,
            x: -202.9,
            y: 0
        }).wait(1).to({
            graphics: Qa,
            x: -205.4,
            y: 0
        }).wait(1).to({
            graphics: Ra,
            x: -207.8,
            y: 0
        }).wait(1).to({
            graphics: Sa,
            x: -210.2,
            y: 0
        }).wait(1).to({
            graphics: Ta,
            x: -212.6,
            y: 0
        }).wait(1).to({
            graphics: Ua,
            x: -215.1,
            y: 0
        }).wait(1).to({
            graphics: Va,
            x: -217.5,
            y: 0
        }).wait(1).to({
            graphics: Wa,
            x: -219.9,
            y: 0
        }).wait(1).to({
            graphics: Xa,
            x: -222.3,
            y: 0
        }).wait(1).to({
            graphics: Ya,
            x: -224.8,
            y: 0
        }).wait(1).to({
            graphics: Za,
            x: -227.2,
            y: 0
        }).wait(1).to({
            graphics: $a,
            x: -229.6,
            y: 0
        }).wait(1).to({
            graphics: ab,
            x: -232,
            y: 0
        }).wait(1).to({
            graphics: bb,
            x: -234.5,
            y: 0
        }).wait(1).to({
            graphics: cb,
            x: -236.9,
            y: 0
        }).wait(1).to({
            graphics: db,
            x: -239.3,
            y: 0
        }).wait(1));
        this.instance = new b.tt4;
        this.instance.setTransform(-234.8, -13);
        this.instance.mask = f;
        this.timeline.addTween(a.Tween.get(this.instance).wait(100))
    }).prototype = c = new a.MovieClip;
    c.nominalBounds = new a.Rectangle(-234.8, -13, 470, 26);
    (b.mc_8 = function(c, d, e) {
        this.initialize(c, d, e, {});
        var f = new a.Shape;
        f._off = !0;
        var h = (new a.Graphics).p("An1H0IAAvmIPmAAIAAPmg"),
            k = (new a.Graphics).p("AoCHjIAgvlIPlAgIggPlg"),
            l = (new a.Graphics).p("AoRHTIA/vkIPkA/Ig/Pkg"),
            m = (new a.Graphics).p("AogHCIBfviIPiBfIhfPig"),
            n = (new a.Graphics).p("AouGwIB/veIPeB/Ih/Peg"),
            p = (new a.Graphics).p("Ao7GeICevZIPZCeIiePZg"),
            q = (new a.Graphics).p("ApIGMIC9vUIPUC9Ii9PUg"),
            r = (new a.Graphics).p("ApUF5IDcvNIPNDcIjcPNg"),
            s = (new a.Graphics).p("ApgFmID7vGIPGD7Ij7PGg"),
            t = (new a.Graphics).p("AprFSIEau9IO9EaIkaO9g"),
            u = (new a.Graphics).p("Ap2E/IE4u1IO1E4Ik4O1g"),
            v = (new a.Graphics).p("Ap/EqIFWupIOpFWIlWOpg"),
            w = (new a.Graphics).p("AqJEWIF0ufIOfF0Il0Ofg"),
            x = (new a.Graphics).p("AqREBIGRuSIOSGRImROSg"),
            y = (new a.Graphics).p("AqZDsIGuuFIOFGuImuOFg"),
            z = (new a.Graphics).p("AqgDXIHKt3IN3HKInKN3g"),
            A = (new a.Graphics).p("AqnDBIHntoINoHnInnNog"),
            B = (new a.Graphics).p("AqsCsIIBtYINYIBIoBNYg"),
            C = (new a.Graphics).p("AqxCWIIctHINHIcIocNHg"),
            D = (new a.Graphics).p("Aq2CAII3s2IM2I3Io3M2g"),
            E = (new a.Graphics).p("Aq6BqIJRskIMkJRIpRMkg"),
            F = (new a.Graphics).p("Aq9BTIJrsQIMQJrIprMQg"),
            G = (new a.Graphics).p("Aq/A9IKDr8IL8KDIqDL8g"),
            H = (new a.Graphics).p("ArBAnIKbroILoKbIqbLog"),
            I = (new a.Graphics).p("ArBAQIKyrRILRKyIqyLRg"),
            J = (new a.Graphics).p("ArCgEILHq+IK+LHIrHK+g"),
            K = (new a.Graphics).p("ArBgbILdqmIKmLdIrdKmg"),
            L = (new a.Graphics).p("ArAgxILyqPIKPLyIryKPg"),
            M = (new a.Graphics).p("Aq+hHIMGp3IJ3MGIsGJ3g"),
            N = (new a.Graphics).p("Aq7heIMapdIJdMaIsaJdg"),
            O = (new a.Graphics).p("Aq4h0IMtpEIJEMtIstJEg"),
            P = (new a.Graphics).p("Aq0iKIM/oqIIqM/Is/Iqg"),
            Q = (new a.Graphics).p("AqvigINQoPIIPNQItQIPg"),
            R = (new a.Graphics).p("Aqqi2INhn0IH0NhIthH0g"),
            S = (new a.Graphics).p("AqjjLINvnYIHYNvItvHYg"),
            T = (new a.Graphics).p("AqdjgIN+m9IG9N+It+G9g"),
            U = (new a.Graphics).p("AqVj2IOMmfIGfOMIuMGfg"),
            V = (new a.Graphics).p("AqNkLIOZmCIGCOZIuZGCg"),
            W = (new a.Graphics).p("AqEkfIOkllIFlOkIukFlg"),
            X = (new a.Graphics).p("Ap7kzIOvlIIFIOvIuvFIg"),
            Y = (new a.Graphics).p("ApwlHIO4kpIEpO4Iu4Epg"),
            Z = (new a.Graphics).p("ApmlbIPCkLIELPCIvCELg"),
            $ = (new a.Graphics).p("ApalvIPKjrIDrPKIvKDrg"),
            aa = (new a.Graphics).p("ApOmBIPRjNIDMPQIvQDNg"),
            ba = (new a.Graphics).p("ApCmUIPXiuICuPXIvXCug"),
            ca = (new a.Graphics).p("Ao1mmIPciPICPPcIvcCPg"),
            da = (new a.Graphics).p("Aonm4IPghvIBvPgIvgBvg"),
            ea = (new a.Graphics).p("AoZnJIPjhQIBQPjIvjBQg"),
            fa = (new a.Graphics).p("AoKnaIPlgwIAwPlIvlAwg"),
            ga = (new a.Graphics).p("An6nrIPmgPIAPPmIvmAPg"),
            ha = (new a.Graphics).p("An6HsIAPvmIPmAPIgPPmg"),
            ia = (new a.Graphics).p("AoKHbIAwvlIPlAwIgwPlg"),
            ja = (new a.Graphics).p("AoZHKIBQvjIPjBQIhQPjg"),
            ka = (new a.Graphics).p("AonG5IBvvgIPgBvIhvPgg"),
            la = (new a.Graphics).p("Ao1GnICPvcIPcCPIiPPcg"),
            ma = (new a.Graphics).p("ApCGVICuvXIPXCuIiuPXg"),
            na = (new a.Graphics).p("ApOGCIDNvQIPQDNIjMPQg"),
            oa = (new a.Graphics).p("ApaFwIDrvKIPKDrIjrPKg"),
            pa = (new a.Graphics).p("ApmFcIELvCIPCELIkLPCg"),
            qa = (new a.Graphics).p("ApwFIIEpu4IO4EpIkpO4g"),
            ra = (new a.Graphics).p("Ap7E0IFIuvIOvFIIlIOvg"),
            sa = (new a.Graphics).p("AqEEgIFlukIOkFlIllOkg"),
            ta = (new a.Graphics).p("AqNEMIGCuZIOZGCImCOZg"),
            ua = (new a.Graphics).p("AqVD3IGfuMIOMGfImfOMg"),
            va = (new a.Graphics).p("AqdDhIG9t+IN+G9Im9N+g"),
            wa = (new a.Graphics).p("AqjDMIHYtvINvHYInYNvg"),
            xa = (new a.Graphics).p("AqqC3IH0thINhH0In0Nhg"),
            ya = (new a.Graphics).p("AqvChIIPtQINQIPIoPNQg"),
            za = (new a.Graphics).p("Aq0CLIIqs/IM/IqIoqM/g"),
            Aa = (new a.Graphics).p("Aq4B1IJEstIMtJEIpEMtg"),
            Ba = (new a.Graphics).p("Aq7BfIJdsaIMaJdIpdMag"),
            Ca = (new a.Graphics).p("Aq+BIIJ3sGIMGJ3Ip3MGg"),
            Da = (new a.Graphics).p("ArAAyIKPryILyKPIqPLyg"),
            Ea = (new a.Graphics).p("ArBAcIKmrdILdKmIqmLdg"),
            Fa = (new a.Graphics).p("ArCAFIK+rHILHK+Iq+LHg"),
            Ga = (new a.Graphics).p("ArBgPILRqyIKyLRIrRKyg"),
            Ha = (new a.Graphics).p("ArBgmILoqbIKbLoIroKbg"),
            Ia = (new a.Graphics).p("Aq/g8IL8qDIKDL8Ir8KDg"),
            Ja = (new a.Graphics).p("Aq9hSIMQprIJrMQIsQJrg"),
            Ka = (new a.Graphics).p("Aq6hpIMkpRIJRMkIskJRg"),
            La = (new a.Graphics).p("Aq2h/IM2o3II3M2Is2I3g"),
            Ma = (new a.Graphics).p("AqxiVINHocIIcNHItHIcg"),
            Na = (new a.Graphics).p("AqsirINYoBIIBNYItYIBg"),
            Oa = (new a.Graphics).p("AqnjAINonnIHnNoItoHng"),
            Pa = (new a.Graphics).p("AqgjWIN3nKIHKN3It3HKg"),
            Qa = (new a.Graphics).p("AqZjrIOFmuIGuOFIuFGug"),
            Ra = (new a.Graphics).p("AqRkAIOSmRIGROSIuSGRg"),
            Sa = (new a.Graphics).p("AqJkVIOfl0IF0OfIufF0g"),
            Ta = (new a.Graphics).p("Ap/kpIOplWIFWOpIupFWg"),
            Ua = (new a.Graphics).p("Ap2k+IO1k4IE4O1Iu1E4g"),
            Va = (new a.Graphics).p("AprlRIO9kaIEaO9Iu9Eag"),
            Wa = (new a.Graphics).p("ApgllIPGj7ID7PGIvGD7g"),
            Xa = (new a.Graphics).p("ApUl4IPNjcIDcPNIvNDcg"),
            Ya = (new a.Graphics).p("ApImLIPUi9IC9PUIvUC9g"),
            Za = (new a.Graphics).p("Ao7mdIPZieICePZIvZCeg"),
            $a = (new a.Graphics).p("AoumvIPeh/IB/PeIveB/g"),
            ab = (new a.Graphics).p("AognBIPihfIBfPiIviBfg"),
            bb = (new a.Graphics).p("AoRnSIPkg/IA/PkIvkA/g"),
            cb = (new a.Graphics).p("AoCniIPlggIAgPlIvlAgg"),
            db = (new a.Graphics).p("AnyH0IAAvmIPlAAIAAPmg");
        this.timeline.addTween(a.Tween.get(f).to({
            graphics: h,
            x: -50.3,
            y: 0.3
        }).wait(1).to({
            graphics: k,
            x: -50.5,
            y: -1.3
        }).wait(1).to({
            graphics: l,
            x: -50.5,
            y: -2.9
        }).wait(1).to({
            graphics: m,
            x: -50.4,
            y: -4.5
        }).wait(1).to({
            graphics: n,
            x: -50.2,
            y: -6.1
        }).wait(1).to({
            graphics: p,
            x: -50,
            y: -7.7
        }).wait(1).to({
            graphics: q,
            x: -49.7,
            y: -9.3
        }).wait(1).to({
            graphics: r,
            x: -49.4,
            y: -10.8
        }).wait(1).to({
            graphics: s,
            x: -49,
            y: -12.4
        }).wait(1).to({
            graphics: t,
            x: -48.6,
            y: -13.9
        }).wait(1).to({
            graphics: u,
            x: -48.1,
            y: -15.5
        }).wait(1).to({
            graphics: v,
            x: -47.6,
            y: -17
        }).wait(1).to({
            graphics: w,
            x: -47.1,
            y: -18.5
        }).wait(1).to({
            graphics: x,
            x: -46.4,
            y: -19.9
        }).wait(1).to({
            graphics: y,
            x: -45.8,
            y: -21.4
        }).wait(1).to({
            graphics: z,
            x: -45.1,
            y: -22.8
        }).wait(1).to({
            graphics: A,
            x: -44.3,
            y: -24.3
        }).wait(1).to({
            graphics: B,
            x: -43.5,
            y: -25.6
        }).wait(1).to({
            graphics: C,
            x: -42.7,
            y: -27
        }).wait(1).to({
            graphics: D,
            x: -41.8,
            y: -28.3
        }).wait(1).to({
            graphics: E,
            x: -40.9,
            y: -29.6
        }).wait(1).to({
            graphics: F,
            x: -40,
            y: -30.9
        }).wait(1).to({
            graphics: G,
            x: -39,
            y: -32.2
        }).wait(1).to({
            graphics: H,
            x: -37.9,
            y: -33.4
        }).wait(1).to({
            graphics: I,
            x: -36.8,
            y: -34.5
        }).wait(1).to({
            graphics: J,
            x: -35.7,
            y: -35.7
        }).wait(1).to({
            graphics: K,
            x: -34.6,
            y: -36.8
        }).wait(1).to({
            graphics: L,
            x: -33.4,
            y: -37.9
        }).wait(1).to({
            graphics: M,
            x: -32.2,
            y: -38.9
        }).wait(1).to({
            graphics: N,
            x: -30.9,
            y: -39.9
        }).wait(1).to({
            graphics: O,
            x: -29.6,
            y: -40.8
        }).wait(1).to({
            graphics: P,
            x: -28.3,
            y: -41.7
        }).wait(1).to({
            graphics: Q,
            x: -27,
            y: -42.6
        }).wait(1).to({
            graphics: R,
            x: -25.6,
            y: -43.4
        }).wait(1).to({
            graphics: S,
            x: -24.2,
            y: -44.2
        }).wait(1).to({
            graphics: T,
            x: -22.8,
            y: -44.9
        }).wait(1).to({
            graphics: U,
            x: -21.4,
            y: -45.6
        }).wait(1).to({
            graphics: V,
            x: -19.9,
            y: -46.3
        }).wait(1).to({
            graphics: W,
            x: -18.5,
            y: -46.9
        }).wait(1).to({
            graphics: X,
            x: -17,
            y: -47.4
        }).wait(1).to({
            graphics: Y,
            x: -15.4,
            y: -47.9
        }).wait(1).to({
            graphics: Z,
            x: -13.9,
            y: -48.4
        }).wait(1).to({
            graphics: $,
            x: -12.4,
            y: -48.8
        }).wait(1).to({
            graphics: aa,
            x: -10.8,
            y: -49.1
        }).wait(1).to({
            graphics: ba,
            x: -9.3,
            y: -49.4
        }).wait(1).to({
            graphics: ca,
            x: -7.7,
            y: -49.7
        }).wait(1).to({
            graphics: da,
            x: -6.1,
            y: -49.9
        }).wait(1).to({
            graphics: ea,
            x: -4.5,
            y: -50
        }).wait(1).to({
            graphics: fa,
            x: -2.9,
            y: -50.1
        }).wait(1).to({
            graphics: ga,
            x: -1.3,
            y: -50.2
        }).wait(1).to({
            graphics: ha,
            x: 0.2,
            y: -50.2
        }).wait(1).to({
            graphics: ia,
            x: 1.8,
            y: -50.1
        }).wait(1).to({
            graphics: ja,
            x: 3.4,
            y: -50
        }).wait(1).to({
            graphics: ka,
            x: 5,
            y: -49.9
        }).wait(1).to({
            graphics: la,
            x: 6.6,
            y: -49.7
        }).wait(1).to({
            graphics: ma,
            x: 8.2,
            y: -49.4
        }).wait(1).to({
            graphics: na,
            x: 9.7,
            y: -49.1
        }).wait(1).to({
            graphics: oa,
            x: 11.3,
            y: -48.8
        }).wait(1).to({
            graphics: pa,
            x: 12.8,
            y: -48.4
        }).wait(1).to({
            graphics: qa,
            x: 14.3,
            y: -47.9
        }).wait(1).to({
            graphics: ra,
            x: 15.9,
            y: -47.4
        }).wait(1).to({
            graphics: sa,
            x: 17.4,
            y: -46.9
        }).wait(1).to({
            graphics: ta,
            x: 18.8,
            y: -46.3
        }).wait(1).to({
            graphics: ua,
            x: 20.3,
            y: -45.6
        }).wait(1).to({
            graphics: va,
            x: 21.7,
            y: -44.9
        }).wait(1).to({
            graphics: wa,
            x: 23.1,
            y: -44.2
        }).wait(1).to({
            graphics: xa,
            x: 24.5,
            y: -43.4
        }).wait(1).to({
            graphics: ya,
            x: 25.9,
            y: -42.6
        }).wait(1).to({
            graphics: za,
            x: 27.2,
            y: -41.7
        }).wait(1).to({
            graphics: Aa,
            x: 28.5,
            y: -40.8
        }).wait(1).to({
            graphics: Ba,
            x: 29.8,
            y: -39.9
        }).wait(1).to({
            graphics: Ca,
            x: 31.1,
            y: -38.9
        }).wait(1).to({
            graphics: Da,
            x: 32.3,
            y: -37.9
        }).wait(1).to({
            graphics: Ea,
            x: 33.5,
            y: -36.8
        }).wait(1).to({
            graphics: Fa,
            x: 34.6,
            y: -35.7
        }).wait(1).to({
            graphics: Ga,
            x: 35.7,
            y: -34.5
        }).wait(1).to({
            graphics: Ha,
            x: 36.8,
            y: -33.4
        }).wait(1).to({
            graphics: Ia,
            x: 37.9,
            y: -32.2
        }).wait(1).to({
            graphics: Ja,
            x: 38.9,
            y: -30.9
        }).wait(1).to({
            graphics: Ka,
            x: 39.8,
            y: -29.6
        }).wait(1).to({
            graphics: La,
            x: 40.7,
            y: -28.3
        }).wait(1).to({
            graphics: Ma,
            x: 41.6,
            y: -27
        }).wait(1).to({
            graphics: Na,
            x: 42.4,
            y: -25.6
        }).wait(1).to({
            graphics: Oa,
            x: 43.2,
            y: -24.3
        }).wait(1).to({
            graphics: Pa,
            x: 44,
            y: -22.8
        }).wait(1).to({
            graphics: Qa,
            x: 44.7,
            y: -21.4
        }).wait(1).to({
            graphics: Ra,
            x: 45.3,
            y: -19.9
        }).wait(1).to({
            graphics: Sa,
            x: 46,
            y: -18.5
        }).wait(1).to({
            graphics: Ta,
            x: 46.5,
            y: -17
        }).wait(1).to({
            graphics: Ua,
            x: 47,
            y: -15.5
        }).wait(1).to({
            graphics: Va,
            x: 47.5,
            y: -13.9
        }).wait(1).to({
            graphics: Wa,
            x: 47.9,
            y: -12.4
        }).wait(1).to({
            graphics: Xa,
            x: 48.3,
            y: -10.8
        }).wait(1).to({
            graphics: Ya,
            x: 48.6,
            y: -9.3
        }).wait(1).to({
            graphics: Za,
            x: 48.9,
            y: -7.7
        }).wait(1).to({
            graphics: $a,
            x: 49.1,
            y: -6.1
        }).wait(1).to({
            graphics: ab,
            x: 49.3,
            y: -4.5
        }).wait(1).to({
            graphics: bb,
            x: 49.4,
            y: -2.9
        }).wait(1).to({
            graphics: cb,
            x: 49.4,
            y: -1.3
        }).wait(1).to({
            graphics: db,
            x: 49.5,
            y: 0.3
        }).wait(101));
        this.instance = new b.tt3;
        this.instance.setTransform(0, -47.8);
        this.instance.mask = f;
        this.timeline.addTween(a.Tween.get(this.instance).wait(200));
        var eb = new a.Shape;
        eb._off = !0;
        var gb = (new a.Graphics).p("AoBHkIAevlIPlAeIgePlg"),
            hb = (new a.Graphics).p("AoQHUIA9vkIPkA9Ig9Pkg"),
            ib = (new a.Graphics).p("AofHDIBdviIPiBdIhdPig"),
            jb = (new a.Graphics).p("AotGyIB8vfIPfB8Ih8Pfg"),
            kb = (new a.Graphics).p("Ao6GgICbvaIPaCbIibPag"),
            lb = (new a.Graphics).p("ApHGOIC6vVIPVC6Ii6PVg"),
            mb = (new a.Graphics).p("ApTF7IDZvOIPODZIjZPOg"),
            nb = (new a.Graphics).p("ApfFoID4vHIPHD4Ij4PHg"),
            ob = (new a.Graphics).p("ApqFVIEWu/IO/EWIkWO/g"),
            pb = (new a.Graphics).p("Ap0FBIE0u1IO1E0Ik0O1g"),
            qb = (new a.Graphics).p("Ap+EtIFSurIOrFSIlSOrg"),
            rb = (new a.Graphics).p("AqHEZIFvugIOgFvIlvOgg"),
            sb = (new a.Graphics).p("AqQEFIGMuVIOVGMImMOVg"),
            tb = (new a.Graphics).p("AqXDwIGouHIOHGoImoOHg"),
            ub = (new a.Graphics).p("AqfDbIHFt6IN6HFInFN6g"),
            vb = (new a.Graphics).p("AqlDGIHgtrINrHgIngNrg"),
            wb = (new a.Graphics).p("AqrCwIH8tbINbH8In8Nbg"),
            xb = (new a.Graphics).p("AqwCbIIWtLINLIWIoWNLg"),
            yb = (new a.Graphics).p("Aq1CFIIxs6IM6IxIoxM6g"),
            zb = (new a.Graphics).p("Aq5BvIJLsoIMoJLIpLMog"),
            Ab = (new a.Graphics).p("Aq8BZIJksVIMVJkIpkMVg"),
            Bb = (new a.Graphics).p("Aq+BDIJ8sBIMBJ8Ip8MBg"),
            Cb = (new a.Graphics).p("ArAAtIKUrtILtKUIqULtg"),
            Db = (new a.Graphics).p("ArBAXIKrrYILYKrIqrLYg"),
            Eb = (new a.Graphics).p("ArCAAILCrCILDLCIrDLDg"),
            Fb = (new a.Graphics).p("ArBgUILWqtIKtLWIrWKtg"),
            Gb = (new a.Graphics).p("ArAgqILrqWIKWLrIrrKWg"),
            Hb = (new a.Graphics).p("Aq/hAIMAp/IJ/MAIsAJ/g"),
            Ib = (new a.Graphics).p("Aq8hWIMTpmIJmMTIsTJmg"),
            Jb = (new a.Graphics).p("Aq5hsIMmpNIJNMmIsmJNg"),
            Kb = (new a.Graphics).p("Aq1iCIM4ozIIzM4Is4Izg"),
            Lb = (new a.Graphics).p("AqxiYINKoZIIZNKItKIZg"),
            Mb = (new a.Graphics).p("AqsiuINbn+IH+NbItbH+g"),
            Nb = (new a.Graphics).p("AqmjDINqnjIHjNqItqHjg"),
            Ob = (new a.Graphics).p("AqfjYIN4nHIHHN4It4HHg"),
            Pb = (new a.Graphics).p("AqYjtIOGmrIGrOGIuGGrg"),
            Qb = (new a.Graphics).p("AqQkCIOTmOIGOOTIuTGOg"),
            Rb = (new a.Graphics).p("AqIkXIOglxIFxOgIugFxg"),
            Sb = (new a.Graphics).p("Ap/krIOrlUIFUOrIurFUg"),
            Tb = (new a.Graphics).p("Ap1k/IO1k2IE2O1Iu1E2g"),
            Ub = (new a.Graphics).p("ApqlTIO+kXIEXO+Iu+EXg"),
            Vb = (new a.Graphics).p("ApflmIPGj5ID5PGIvGD5g"),
            Wb = (new a.Graphics).p("ApUl5IPOjbIDbPOIvODbg"),
            Xb = (new a.Graphics).p("ApImLIPUi9IC9PUIvUC9g"),
            Yb = (new a.Graphics).p("Ao7meIPaidICdPaIvaCdg"),
            Zb = (new a.Graphics).p("AoumvIPeh/IB/PeIveB/g"),
            $b = (new a.Graphics).p("AognBIPihfIBfPiIviBfg"),
            ac = (new a.Graphics).p("AoRnSIPkg/IA/PkIvkA/g"),
            bc = (new a.Graphics).p("AoCniIPlggIAgPlIvlAgg"),
            cc = (new a.Graphics).p("AnznvIPmAAIABPmIvmAAg"),
            dc = (new a.Graphics).p("AoCHkIAfvmIPmAfIgfPmg"),
            ec = (new a.Graphics).p("AoRHTIA/vkIPkA/Ig/Pkg"),
            fc = (new a.Graphics).p("AofHDIBdviIPiBdIhdPig"),
            gc = (new a.Graphics).p("AotGxIB9veIPeB9Ih9Peg"),
            hc = (new a.Graphics).p("Ao6GgICbvaIPaCbIibPag"),
            ic = (new a.Graphics).p("ApHGNIC7vUIPUC7Ii7PUg"),
            jc = (new a.Graphics).p("ApTF7IDZvOIPODZIjZPOg"),
            kc = (new a.Graphics).p("ApfFoID4vHIPHD4Ij4PHg"),
            lc = (new a.Graphics).p("ApqFVIEWu/IO/EWIkWO/g"),
            mc = (new a.Graphics).p("Ap0FBIE0u1IO1E0Ik0O1g"),
            nc = (new a.Graphics).p("Ap+EtIFSurIOrFSIlSOrg"),
            oc = (new a.Graphics).p("AqHEZIFvugIOgFvIlvOgg"),
            pc = (new a.Graphics).p("AqQEEIGNuUIOUGNImNOUg"),
            qc = (new a.Graphics).p("AqYDvIGquHIOHGqImqOHg"),
            rc = (new a.Graphics).p("AqfDaIHGt5IN5HGInGN5g"),
            sc = (new a.Graphics).p("AqlDFIHhtqINqHhInhNqg"),
            tc = (new a.Graphics).p("AqrCwIH8tbINbH8In8Nbg"),
            uc = (new a.Graphics).p("AqxCaIIYtKINLIXIoYNKg"),
            vc = (new a.Graphics).p("Aq1CEIIys5IM5IyIoyM5g"),
            wc = (new a.Graphics).p("Aq5BuIJMsnIMnJMIpMMng"),
            xc = (new a.Graphics).p("Aq8BYIJlsUIMUJlIplMUg"),
            yc = (new a.Graphics).p("Aq+BCIJ9sAIMAJ9Ip9MAg"),
            zc = (new a.Graphics).p("ArAAsIKVrsILsKVIqVLsg"),
            Ac = (new a.Graphics).p("ArBAWIKsrXILXKsIqsLXg"),
            Bc = (new a.Graphics).p("ArCAAILCrCILDLCIrDLDg"),
            Cc = (new a.Graphics).p("ArBgUILWqtIKtLWIrWKtg"),
            Dc = (new a.Graphics).p("ArAgrILsqVIKVLsIrsKVg"),
            Ec = (new a.Graphics).p("Aq+hBIMAp9IJ9MAIsAJ9g"),
            Fc = (new a.Graphics).p("Aq8hXIMUplIJlMUIsUJlg"),
            Gc = (new a.Graphics).p("Aq5htIMnpMIJMMnIsnJMg"),
            Hc = (new a.Graphics).p("Aq1iDIM5oyIIyM5Is5Iyg"),
            Ic = (new a.Graphics).p("AqxiZINLoYIIYNLItLIYg"),
            Jc = (new a.Graphics).p("AqriuINan9IH9NaItaH9g"),
            Kc = (new a.Graphics).p("AqmjEINrniIHiNrItrHig"),
            Lc = (new a.Graphics).p("AqfjZIN5nGIHGN5It5HGg"),
            Mc = (new a.Graphics).p("AqYjuIOHmqIGqOHIuHGqg"),
            Nc = (new a.Graphics).p("AqQkDIOUmNIGNOUIuUGNg"),
            Oc = (new a.Graphics).p("AqIkXIOglxIFwOgIufFxg"),
            Pc = (new a.Graphics).p("Ap+krIOqlTIFTOqIuqFTg"),
            Qc = (new a.Graphics).p("Ap1k/IO1k2IE2O1Iu1E2g"),
            Rc = (new a.Graphics).p("ApqlTIO+kXIEXO+Iu+EXg"),
            Sc = (new a.Graphics).p("ApflmIPGj5ID5PGIvGD5g"),
            Tc = (new a.Graphics).p("ApUl5IPOjbIDbPOIvODbg"),
            Uc = (new a.Graphics).p("ApHmMIPUi7IC7PUIvUC7g"),
            Vc = (new a.Graphics).p("Ao7meIPaidICdPaIvaCdg"),
            Wc = (new a.Graphics).p("AotmwIPeh9IB9PeIveB9g"),
            Xc = (new a.Graphics).p("AofnBIPhheIBePhIvhBeg"),
            Yc = (new a.Graphics).p("AoRnSIPkg/IA/PkIvkA/g"),
            Zc = (new a.Graphics).p("AoCnjIPmgfIAfPmIvmAfg"),
            $c = (new a.Graphics).p("AnzH0IAAvmIPnAAIAAPmg");
        this.timeline.addTween(a.Tween.get(eb).to({
            graphics: null,
            x: 0,
            y: 0
        }).wait(100).to({
            graphics: gb,
            x: 49.9,
            y: 1.8
        }).wait(1).to({
            graphics: hb,
            x: 49.8,
            y: 3.3
        }).wait(1).to({
            graphics: ib,
            x: 49.7,
            y: 4.9
        }).wait(1).to({
            graphics: jb,
            x: 49.6,
            y: 6.5
        }).wait(1).to({
            graphics: kb,
            x: 49.4,
            y: 8.1
        }).wait(1).to({
            graphics: lb,
            x: 49.1,
            y: 9.6
        }).wait(1).to({
            graphics: mb,
            x: 48.8,
            y: 11.2
        }).wait(1).to({
            graphics: nb,
            x: 48.5,
            y: 12.7
        }).wait(1).to({
            graphics: ob,
            x: 48.1,
            y: 14.3
        }).wait(1).to({
            graphics: pb,
            x: 47.6,
            y: 15.8
        }).wait(1).to({
            graphics: qb,
            x: 47.1,
            y: 17.3
        }).wait(1).to({
            graphics: rb,
            x: 46.6,
            y: 18.8
        }).wait(1).to({
            graphics: sb,
            x: 46,
            y: 20.2
        }).wait(1).to({
            graphics: tb,
            x: 45.4,
            y: 21.7
        }).wait(1).to({
            graphics: ub,
            x: 44.7,
            y: 23.1
        }).wait(1).to({
            graphics: vb,
            x: 44,
            y: 24.5
        }).wait(1).to({
            graphics: wb,
            x: 43.2,
            y: 25.9
        }).wait(1).to({
            graphics: xb,
            x: 42.4,
            y: 27.2
        }).wait(1).to({
            graphics: yb,
            x: 41.5,
            y: 28.6
        }).wait(1).to({
            graphics: zb,
            x: 40.6,
            y: 29.9
        }).wait(1).to({
            graphics: Ab,
            x: 39.7,
            y: 31.1
        }).wait(1).to({
            graphics: Bb,
            x: 38.7,
            y: 32.4
        }).wait(1).to({
            graphics: Cb,
            x: 37.7,
            y: 33.6
        }).wait(1).to({
            graphics: Db,
            x: 36.7,
            y: 34.8
        }).wait(1).to({
            graphics: Eb,
            x: 35.6,
            y: 35.9
        }).wait(1).to({
            graphics: Fb,
            x: 34.5,
            y: 37
        }).wait(1).to({
            graphics: Gb,
            x: 33.3,
            y: 38.1
        }).wait(1).to({
            graphics: Hb,
            x: 32.1,
            y: 39.1
        }).wait(1).to({
            graphics: Ib,
            x: 30.9,
            y: 40.1
        }).wait(1).to({
            graphics: Jb,
            x: 29.7,
            y: 41.1
        }).wait(1).to({
            graphics: Kb,
            x: 28.4,
            y: 42
        }).wait(1).to({
            graphics: Lb,
            x: 27.1,
            y: 42.8
        }).wait(1).to({
            graphics: Mb,
            x: 25.7,
            y: 43.7
        }).wait(1).to({
            graphics: Nb,
            x: 24.4,
            y: 44.5
        }).wait(1).to({
            graphics: Ob,
            x: 23,
            y: 45.2
        }).wait(1).to({
            graphics: Pb,
            x: 21.6,
            y: 45.9
        }).wait(1).to({
            graphics: Qb,
            x: 20.2,
            y: 46.6
        }).wait(1).to({
            graphics: Rb,
            x: 18.7,
            y: 47.2
        }).wait(1).to({
            graphics: Sb,
            x: 17.2,
            y: 47.7
        }).wait(1).to({
            graphics: Tb,
            x: 15.8,
            y: 48.3
        }).wait(1).to({
            graphics: Ub,
            x: 14.3,
            y: 48.7
        }).wait(1).to({
            graphics: Vb,
            x: 12.7,
            y: 49.1
        }).wait(1).to({
            graphics: Wb,
            x: 11.2,
            y: 49.5
        }).wait(1).to({
            graphics: Xb,
            x: 9.7,
            y: 49.8
        }).wait(1).to({
            graphics: Yb,
            x: 8.1,
            y: 50.1
        }).wait(1).to({
            graphics: Zb,
            x: 6.6,
            y: 50.3
        }).wait(1).to({
            graphics: $b,
            x: 5,
            y: 50.5
        }).wait(1).to({
            graphics: ac,
            x: 3.5,
            y: 50.6
        }).wait(1).to({
            graphics: bc,
            x: 1.9,
            y: 50.7
        }).wait(1).to({
            graphics: cc,
            x: 0.3,
            y: 50.4
        }).wait(1).to({
            graphics: dc,
            x: -1.3,
            y: 50.7
        }).wait(1).to({
            graphics: ec,
            x: -2.8,
            y: 50.7
        }).wait(1).to({
            graphics: fc,
            x: -4.4,
            y: 50.5
        }).wait(1).to({
            graphics: gc,
            x: -5.9,
            y: 50.4
        }).wait(1).to({
            graphics: hc,
            x: -7.5,
            y: 50.1
        }).wait(1).to({
            graphics: ic,
            x: -9.1,
            y: 49.9
        }).wait(1).to({
            graphics: jc,
            x: -10.6,
            y: 49.6
        }).wait(1).to({
            graphics: kc,
            x: -12.1,
            y: 49.2
        }).wait(1).to({
            graphics: lc,
            x: -13.6,
            y: 48.8
        }).wait(1).to({
            graphics: mc,
            x: -15.1,
            y: 48.3
        }).wait(1).to({
            graphics: nc,
            x: -16.6,
            y: 47.8
        }).wait(1).to({
            graphics: oc,
            x: -18.1,
            y: 47.2
        }).wait(1).to({
            graphics: pc,
            x: -19.5,
            y: 46.6
        }).wait(1).to({
            graphics: qc,
            x: -21,
            y: 46
        }).wait(1).to({
            graphics: rc,
            x: -22.4,
            y: 45.3
        }).wait(1).to({
            graphics: sc,
            x: -23.8,
            y: 44.5
        }).wait(1).to({
            graphics: tc,
            x: -25.1,
            y: 43.8
        }).wait(1).to({
            graphics: uc,
            x: -26.5,
            y: 42.9
        }).wait(1).to({
            graphics: vc,
            x: -27.8,
            y: 42.1
        }).wait(1).to({
            graphics: wc,
            x: -29.1,
            y: 41.2
        }).wait(1).to({
            graphics: xc,
            x: -30.3,
            y: 40.2
        }).wait(1).to({
            graphics: yc,
            x: -31.5,
            y: 39.2
        }).wait(1).to({
            graphics: zc,
            x: -32.7,
            y: 38.2
        }).wait(1).to({
            graphics: Ac,
            x: -33.9,
            y: 37.1
        }).wait(1).to({
            graphics: Bc,
            x: -35,
            y: 36
        }).wait(1).to({
            graphics: Cc,
            x: -36.1,
            y: 34.9
        }).wait(1).to({
            graphics: Dc,
            x: -37.2,
            y: 33.7
        }).wait(1).to({
            graphics: Ec,
            x: -38.2,
            y: 32.5
        }).wait(1).to({
            graphics: Fc,
            x: -39.1,
            y: 31.3
        }).wait(1).to({
            graphics: Gc,
            x: -40.1,
            y: 30
        }).wait(1).to({
            graphics: Hc,
            x: -41,
            y: 28.7
        }).wait(1).to({
            graphics: Ic,
            x: -41.8,
            y: 27.4
        }).wait(1).to({
            graphics: Jc,
            x: -42.7,
            y: 26
        }).wait(1).to({
            graphics: Kc,
            x: -43.4,
            y: 24.7
        }).wait(1).to({
            graphics: Lc,
            x: -44.2,
            y: 23.3
        }).wait(1).to({
            graphics: Mc,
            x: -44.8,
            y: 21.8
        }).wait(1).to({
            graphics: Nc,
            x: -45.5,
            y: 20.4
        }).wait(1).to({
            graphics: Oc,
            x: -46.1,
            y: 18.9
        }).wait(1).to({
            graphics: Pc,
            x: -46.6,
            y: 17.4
        }).wait(1).to({
            graphics: Qc,
            x: -47.1,
            y: 15.9
        }).wait(1).to({
            graphics: Rc,
            x: -47.6,
            y: 14.4
        }).wait(1).to({
            graphics: Sc,
            x: -48,
            y: 12.9
        }).wait(1).to({
            graphics: Tc,
            x: -48.3,
            y: 11.4
        }).wait(1).to({
            graphics: Uc,
            x: -48.6,
            y: 9.8
        }).wait(1).to({
            graphics: Vc,
            x: -48.9,
            y: 8.2
        }).wait(1).to({
            graphics: Wc,
            x: -49.1,
            y: 6.7
        }).wait(1).to({
            graphics: Xc,
            x: -49.3,
            y: 5.1
        }).wait(1).to({
            graphics: Yc,
            x: -49.4,
            y: 3.5
        }).wait(1).to({
            graphics: Zc,
            x: -49.4,
            y: 1.9
        }).wait(1).to({
            graphics: $c,
            x: -49.5,
            y: 0.3
        }).wait(1));
        this.instance_1 = new b.tt2;
        this.instance_1.setTransform(-47.8, -47.8);
        this.instance_1._off = !0;
        this.instance_1.mask = eb;
        this.timeline.addTween(a.Tween.get(this.instance_1).wait(100).to({
            _off: !1
        }, 0).wait(100));
        this.instance_2 = new b.tt1;
        this.instance_2.setTransform(-47.8, -47.8);
        this.timeline.addTween(a.Tween.get(this.instance_2).wait(200))
    }).prototype = c = new a.MovieClip;
    c.nominalBounds = new a.Rectangle(-47.8, -47.8, 96, 96);
    (b.mc_6 = function() {
        this.initialize();
        this.instance = new b.mc_55;
        this.instance.setTransform(-49, -49);
        this.addChild(this.instance)
    }).prototype = c = new a.Container;
    c.nominalBounds = new a.Rectangle(-49, -49, 98,
        98);
    (b.mc_4 = function() {
        this.initialize();
        this.instance = new b.mc_46;
        this.instance.setTransform(-179, -82);
        this.addChild(this.instance)
    }).prototype = c = new a.Container;
    c.nominalBounds = new a.Rectangle(-179, -82, 358, 164);
    (b.MASKUI = function() {
        this.initialize();
        this.instance = new b.R3;
        this.instance.setTransform(-202, -206.5);
        this.addChild(this.instance)
    }).prototype = c = new a.Container;
    c.nominalBounds = new a.Rectangle(-202, -206.5, 402, 414);
    (b.LIGHTMC = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.frame_6 = function() {
            this.stop()
        };
        this.timeline.addTween(a.Tween.get(this).wait(6).call(this.frame_6).wait(1));
        this.instance = new b.mc_41;
        this.instance.setTransform(-58.7, -66.2, 1.5, 1.5);
        this.instance_1 = new b.mc_43;
        this.instance_1.setTransform(-58.7, -66.2, 1.5, 1.5);
        this.instance_2 = new b.mc_45;
        this.instance_2.setTransform(-58.7, -66.2, 1.5, 1.5);
        this.timeline.addTween(a.Tween.get({}).to({
            state: [{
                t: this.instance
            }]
        }).to({
            state: [{
                t: this.instance_1
            }]
        }, 2).to({
            state: [{
                t: this.instance_2
            }]
        }, 2).to({
            state: []
        }, 2).wait(1))
    }).prototype = c = new a.MovieClip;
    c.nominalBounds = new a.Rectangle(-58.7, -66.2, 100.5, 115.5);
    (b.fontbg = function() {
        this.initialize();
        this.shape = new a.Shape;
        this.shape.graphics.bf(d.mc_49, null, new a.Matrix2D(1, 0, 0, 1, -500, -949.1)).s().p("EhOHAdNMAAAg41MAljAAAIAABcIBDATIAAAnIAxANIgEAiIAyBVIA9AAIAABBIDngBIAUATMBH4gAZIAZhBIBDAAIAMhDIAfAAIAegzIgIgqIAjgGIAshNIgGgqIGSgWIAAhEIEOAAIBeBEIIFAAIPxgPMAAAA5kg");
        this.addChild(this.shape)
    }).prototype = c = new a.Container;
    c.nominalBounds = new a.Rectangle(-500, -186.9, 1E3, 373.8);
    (b.bg = function() {
        this.initialize();
        this.instance = new b.mc_49;
        this.addChild(this.instance)
    }).prototype = c = new a.Container;
    c.nominalBounds = new a.Rectangle(0, 0, 1E3, 1136);
    (b.mc_39 = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.instance = new b.mc_40("synched", 0);
        this.instance.setTransform(0, -0.1);
        this.timeline.addTween(a.Tween.get(this.instance).to({
            y: -6
        }, 4, a.Ease.get(0.5)).to({
            y: 0
        }, 5, a.Ease.get(0.5)).wait(1))
    }).prototype = c = new a.MovieClip;
    c.nominalBounds = new a.Rectangle(-30.5, -20.1, 62.4, 35.1);
    (b.mc_38 = function() {
        this.initialize();
        this.instance =
            new b.mc_39;
        this.instance.setTransform(9, -2.8, 1.44, 1.44);
        this.shape = new a.Shape;
        this.shape.graphics.bf(d.mc_48, null, new a.Matrix2D(1.44, 0, 0, 1.44, -57.6, -44.5)).s().p("Ao+ANIAAgYIR+AAIAAAYg");
        this.shape.setTransform(10.4, 12.9);
        this.shape_1 = new a.Shape;
        this.shape_1.graphics.bf(d.mc_48, null, new a.Matrix2D(1.44, 0, 0, 1.44, -57.6, -69.4)).s().p("Ao+DHIAAmNIR+AAIAAGNg");
        this.shape_1.setTransform(10.4, 34.1);
        this.shape_2 = new a.Shape;
        this.shape_2.graphics.f("rgba(0,0,0,0.498)").s().p("ApXGQIAAsfISvAAIAAMfg");
        this.shape_2.setTransform(9,
            14);
        this.addChild(this.shape_2, this.shape_1, this.shape, this.instance)
    }).prototype = c = new a.Container;
    c.nominalBounds = new a.Rectangle(-51, -26, 120, 80.1);
    (b.mc_34 = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.frame_0 = function() {
            this.stop()
        };
        this.frame_1 = function() {
            this.stop()
        };
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));
        this.instance = new b.mc_35;
        this.instance_1 = new b.mc_36;
        this.instance_1.shadow = new a.Shadow("#3399FF", 0, 0, 50);
        this.instance_1.filters = [new a.ColorMatrixFilter(new a.ColorMatrix(10, 10, 10, 0))];
        this.instance_1.cache(-135, -53, 270, 106);
        this.timeline.addTween(a.Tween.get({}).to({
            state: [{
                t: this.instance
            }]
        }).to({
            state: [{
                t: this.instance_1
            }]
        }, 1).wait(1))
    }).prototype = c = new a.MovieClip;
    c.nominalBounds = new a.Rectangle(-133, -51, 266, 102);
    (b.mc_33 = function() {
        this.initialize();
        this.txtmc = new b.wintxtmc;
        this.txtmc.setTransform(137.6, -233.8);
        this.instance = new b.Y1;
        this.instance.setTransform(-301.5, -382);
        this.addChild(this.instance, this.txtmc)
    }).prototype =
        c = new a.Container;
    c.nominalBounds = new a.Rectangle(-301.5, -382, 603, 764);
    (b.mc_32 = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.frame_0 = function() {};
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(1));
        this.bb = new b.mc_33;
        this.timeline.addTween(a.Tween.get(this.bb).wait(1))
    }).prototype = c = new a.MovieClip;
    c.nominalBounds = new a.Rectangle(-301.5, -382, 609, 772);
    (b.mc_30 = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.frame_0 = function() {
            this.stop()
        };
        this.frame_1 = function() {
            this.stop()
        };
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));
        this.instance = new b.mc_31;
        this.timeline.addTween(a.Tween.get(this.instance).wait(2))
    }).prototype = c = new a.MovieClip;
    c.nominalBounds = new a.Rectangle(-133, -51, 266, 102);
    (b.mc_26 = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.frame_14 = function() {};
        this.timeline.addTween(a.Tween.get(this).wait(14).call(this.frame_14).wait(1));
        this.instance = new b.mc_27;
        this.instance.filters = [new a.ColorMatrixFilter(new a.ColorMatrix(25, 25, 10, 0))];
        this.instance.cache(-303, -384, 607, 768);
        this.timeline.addTween(a.Tween.get(this.instance).wait(15))
    }).prototype =
        c = new a.MovieClip;
    c.nominalBounds = new a.Rectangle(-301.5, -382, 609, 772);
    (b.mc_22 = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.frame_14 = function() {
            this.stop()
        };
        this.timeline.addTween(a.Tween.get(this).wait(14).call(this.frame_14).wait(1));
        this.instance = new b.mc_23;
        this.instance.setTransform(41.6, -244.9, 0.75, 0.75);
        this.instance.alpha = 0;
        this.timeline.addTween(a.Tween.get(this.instance).to({
            alpha: 1
        }, 14, a.Ease.get(0.5)).wait(1));
        this.instance_1 = new b.mc_24("synched", 0);
        this.instance_1.setTransform(50,
            77.1);
        this.instance_1.alpha = 0;
        this.timeline.addTween(a.Tween.get(this.instance_1).to({
            x: -10,
            alpha: 1
        }, 6, a.Ease.get(0.5)).to({
            x: 0
        }, 8).wait(1));
        this.instance_2 = new b.mc_25("synched", 0);
        this.instance_2.setTransform(101.1, -34.9);
        this.instance_2.alpha = 0;
        this.timeline.addTween(a.Tween.get(this.instance_2).to({
            x: 161.1,
            alpha: 1
        }, 6, a.Ease.get(0.5)).to({
            x: 151.1
        }, 8).wait(1))
    }).prototype = c = new a.MovieClip;
    c.nominalBounds = new a.Rectangle(-345.1, -321, 736.2, 642.2);
    (b.mc_20 = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.frame_0 = function() {};
        this.frame_1 = function() {};
        this.timeline.addTween(a.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));
        this.instance = new b.mc_21;
        this.timeline.addTween(a.Tween.get(this.instance).wait(2))
    }).prototype = c = new a.MovieClip;
    c.nominalBounds = new a.Rectangle(-282.5, -65, 565, 130);
    (b.mc_11 = function() {
        this.initialize();
        this.instance = new b.mc_12;
        this.instance.setTransform(12.8, -1.3);
        this.instance_1 = new b.mc_54;
        this.instance_1.setTransform(-337.5, -74);
        this.addChild(this.instance_1,
            this.instance)
    }).prototype = c = new a.Container;
    c.nominalBounds = new a.Rectangle(-337.5, -74, 675, 148);
    (b.mc_7 = function() {
        this.initialize();
        this.timetxt = new a.Text("30", "32px 'Microsoft YaHei'", "#FFFFFF");
        this.timetxt.name = "timetxt";
        this.timetxt.textAlign = "center";
        this.timetxt.lineHeight = 34;
        this.timetxt.lineWidth = 122;
        this.timetxt.setTransform(-247, -21.9);
        this.livetxt = new a.Text("89", "20px 'PXLXCT'", "#FF2900");
        this.livetxt.name = "livetxt";
        this.livetxt.textAlign = "right";
        this.livetxt.lineHeight = 22;
        this.livetxt.lineWidth =
            96;
        this.livetxt.setTransform(212.2, 5.8);
        this.livemc = new b.mc_10;
        this.livemc.setTransform(66.3, -27.4);
        this.timemc = new b.mc_8;
        this.timemc.setTransform(-243.2, -1.2);
        this.instance = new b.mc_11;
        this.addChild(this.instance, this.timemc, this.livemc, this.livetxt, this.timetxt)
    }).prototype = c = new a.Container;
    c.nominalBounds = new a.Rectangle(-343.8, -74, 681.3, 148);
    (b.SHAREUI = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.frame_12 = function() {
            this.stop()
        };
        this.timeline.addTween(a.Tween.get(this).wait(12).call(this.frame_12).wait(1));
        this.instance = new b.mc_4("synched", 0);
        this.instance.setTransform(-8, -50);
        this.instance.alpha = 0;
        this.timeline.addTween(a.Tween.get(this.instance).to({
            y: 10,
            alpha: 1
        }, 6, a.Ease.get(1)).to({
            y: 0
        }, 6, a.Ease.get(0.5)).wait(1))
    }).prototype = c = new a.MovieClip;
    c.nominalBounds = new a.Rectangle(-187, -132, 358, 222.4);
    (b.LOSTUI = function() {
        this.initialize();
        this.again = new b.mc_30;
        this.again.setTransform(316, 761.2);
        this.instance = new b.mc_26;
        this.instance.setTransform(323.1, 533.1);
        this.addChild(this.instance, this.again)
    }).prototype =
        c = new a.Container;
    c.nominalBounds = new a.Rectangle(21.6, 151.1, 607, 768);
    (b.INTROUI = function() {
        this.initialize();
        this.instance = new b.mc_22;
        this.instance.setTransform(293.1, 351);
        this.btn = new b.mc_20;
        this.btn.setTransform(317.5, 777.2);
        this.instance_1 = new b.mc_50;
        this.instance_1.setTransform(-179, -128);
        this.addChild(this.instance_1, this.btn, this.instance)
    }).prototype = c = new a.Container;
    c.nominalBounds = new a.Rectangle(-179, -128, 1E3, 1136);
    (b.GAMEUI = function() {
        this.initialize();
        this.bg = new b.fontbg;
        this.bg.setTransform(321.1,
            821.1);
        this.top = new b.mc_7;
        this.top.setTransform(312.1, 73);
        this.rolemc = new b.rolemc;
        this.rolemc.setTransform(10.3, 10.3, 1, 1, 0, 0, 0, 10.3, 10.3);
        this.instance = new b.bg;
        this.instance.setTransform(321.1, 440, 1, 1, 0, 0, 0, 500, 568);
        this.addChild(this.instance, this.rolemc, this.top, this.bg)
    }).prototype = c = new a.Container;
    c.nominalBounds = new a.Rectangle(-178.9, -128, 1E3, 1136);
    (b.BAXINMC = function(c, d, e) {
        this.initialize(c, d, e, {});
        this.instance = new b.mc_6("synched", 0);
        this.timeline.addTween(a.Tween.get(this.instance).to({
            scaleX: 0.9,
            scaleY: 0.9
        }, 7, a.Ease.get(0.5)).to({
            scaleX: 1,
            scaleY: 1
        }, 7, a.Ease.get(0.5)).wait(1))
    }).prototype = c = new a.MovieClip;
    c.nominalBounds = new a.Rectangle(-49, -49, 98, 98);
    (b.WINUI = function() {
        this.initialize();
        this.numtxt = new a.Text("89", "40px 'SimHei'", "#01FBFE");
        this.numtxt.name = "numtxt";
        this.numtxt.textAlign = "center";
        this.numtxt.lineHeight = 42;
        this.numtxt.lineWidth = 122;
        this.numtxt.setTransform(206.1, 492.7);
        this.score = new a.Text("89:99", "48px 'SimHei'", "#01FBFE");
        this.score.name = "score";
        this.score.textAlign =
            "center";
        this.score.lineHeight = 50;
        this.score.lineWidth = 176;
        this.score.setTransform(181, 248.6);
        this.again = new b.mc_34;
        this.again.setTransform(315.9, 761.2);
        this.bb = new b.mc_32;
        this.bb.setTransform(323.1, 533.1);
        this.addChild(this.bb, this.again, this.score, this.numtxt)
    }).prototype = c = new a.Container;
    c.nominalBounds = new a.Rectangle(21.6, 151.1, 607, 768);
    (b.OVERBG = function() {
        this.initialize();
        this.share = new b.mc_38;
        this.share.setTransform(560.2, 74);
        this.logo = new b.mc_23;
        this.logo.setTransform(193.6, 86.1, 0.65,
            0.65);
        this.instance = new b.mc_50;
        this.instance.setTransform(-180, -64);
        this.addChild(this.instance, this.logo, this.share)
    }).prototype = c = new a.Container;
    c.nominalBounds = new a.Rectangle(-180, -64, 1E3, 1136)
})(lib = lib || {}, images = images || {}, createjs = createjs || {});
var lib, images;

function GameOver(b) {
    this.isGame = !1;
    this.scene;
    this.kind = 0;
    this.share;
    this.logo;
    this.share;
    this.bg;
    this.maskmc;
    this.maskmsgmc;
    this.wtxt;
    this.score;
    this.bgs;
    this.init = function(d) {
        var a = this;
        d = Math.floor((GD.RETIME - 50) / 2);
        this.score = 99 - (0 < d ? d : 0);
        GD.TIMESTRING = GD.RETIME / 10 + "";
        12 <= GD.TIME ? this.kind = 4 : 10 <= GD.TIME ? this.kind = 3 : 8 <= GD.TIME && 10 > GD.TIME ? this.kind = 2 : 5 <= GD.TIME && 8 > GD.TIME ? this.kind = 1 : 5 > GD.TIME && (this.kind = 0);
        GD.ENDKIND = this.kind;
        this.bg = new b.OVERBG;
        this.addChild(this.bg);
        4 == this.kind ? (GD.SHAREWORD =
            "\u4eca\u5929\u6253\u4e86\u5c0f\u5de8\u4eba\uff0c\u611f\u89c9\u81ea\u5df1\u840c\uff01\u840c\uff01\u54d2\uff01", this.scene = new b.LOSTUI) : (GD.SHAREWORD = " \u7237\u5728\u67aa\u795e\u7eaa\u7528" + GD.TIMESTRING + "\u79d2\u5e72\u6389\u5de8\u4eba\uff0c\u51fb\u8d25\u4e86" + this.score + "%\u7684\u73a9\u5bb6\uff0c\u4f60\u80fd\u7528\u51e0\u79d2?\u4e0d\u670d\u6765\u6218\uff01", this.scene = new b.WINUI, this.initWin());
        this.addChild(this.scene);
        this.scene.addChild(this.share);
        this.scene.again.addEventListener("click", function() {
            a.onAgain()
        });
        this.openMaskBG();
        this.closeMsk(!1);
        this.bg.share.addEventListener("click", function() {
            a.onShare()
        })
    };
    this.initLost = function() {};
    this.initWin = function() {
        this.scene.bb.gotoAndPlay(0);
        this.scene.bb.bb.txtmc.gotoAndStop(this.kind);
        this.scene.score.text = GD.TIMESTRING + '"';
        this.scene.numtxt.text = this.score + ""
    };
    this.openMaskBG = function() {
        this.bgs = new createjs.Shape;
        this.bgs.graphics.beginFill("#000000").drawRect(0, 0, 1E3, 1136);
        this.bgs.x = -657;
        this.bgs.y = -229;
        this.maskmc = new createjs.Container;
        this.maskmsgmc =
            new b.SHAREUI;
        this.addChild(this.maskmc);
        this.maskmc.x = 457;
        this.maskmc.y = 96;
        this.bgs.alpha = 0.5;
        this.maskmc.addChild(this.bgs);
        this.maskmc.addChild(this.maskmsgmc);
        this.maskmsgmc.gotoAndStop(0)
    };
    this.maskmceve = function() {
        var b = this;
        this.bgs.removeEventListener("click", function() {
            b.closeMsk(!1)
        });
        this.bgs.addEventListener("click", function() {
            b.closeMsk(!1)
        })
    };
    this.closeMsk = function(b) {
        (this.maskmc.visible = b) && this.maskmsgmc.gotoAndPlay(0)
    };
    this.setLive = function(b) {
        GD.NPCLIVE -= b;
        this.livetxt.text = GD.NPCLIVE +
            "";
        this.livemc.gotoAndStop(Math.floor(GD.NPCLIVE / 1E3))
    };
    this.onShare = function() {
        trace(GD.SHAREWORD);
        var b = this;
        this.closeMsk(!0);
        setTimeout(function() {
            b.maskmceve()
        }, 500)
    };
    this.onAgain = function() {
        this.dispatchEvent(new createjs.Event("AGAIN"))
    }
}
GameOver.prototype = new createjs.Container;

function GameManager(b) {
    this.isGame = !1;
    this.scene;
    this.maskmc;
    this.scene;
    this.npc;
    this.helo;
    this.timetxt;
    this.livetxt;
    this.livemc;
    this.timemc;
    this.npc;
    this.helo;
    this.rolesmc;
    this.aimmc;
    this.butList = [];
    this.space = 0;
    this.g = 2.6 / (10 * GD.LIMIT);
    this.helof = 0;
    this.init = function() {
        GD.NPCLIVE = 1E3;
        GD.TIME = 1;
        GD.RETIME = 1;
        this.firsttime = this.lasttime = 0;
        this.npcsc = 0.6;
        this.scene = new b.GAMEUI;
        this.addChild(this.scene);
        this.livetxt = this.scene.top.livetxt;
        this.timetxt = this.scene.top.timetxt;
        this.livemc = this.scene.top.livemc;
        this.timemc = this.scene.top.timemc;
        this.rolesmc = this.scene.rolemc;
        this.aimmc = new b.BAXINMC;
        this.aimmc.visible = !1;
        this.createRoles();
        this.setLive(0);
        this.setTime(0);
        this.aimPot = [0, 0];
        this.gdate = new Date;
        this.npcContainer;
        this.aimSpace;
        this.openMaskBG()
    };
    this.openMaskBG = function() {
        var d = new createjs.Shape;
        d.graphics.beginFill("#000000").drawRect(0, 0, 1E3, winSize.height);
        d.x = -500;
        d.y = -winSize.height / 2;
        this.maskmc = new b.MASKUI;
        this.addChild(this.maskmc);
        this.maskmc.x = winSize.width / 2;
        this.maskmc.y = winSize.height /
            2;
        d.alpha = 0.5;
        this.maskmc.addChildAt(d, 0);
        var a = this;
        setTimeout(function() {
            a.maskmcEvent()
        }, 300)
    };
    this.maskmcEvent = function() {
        var b = this;
        this.maskmc.addEventListener("mousedown", function() {
            b.gameStart()
        })
    };
    this.setTime = function(b) {
        GD.RETIME = b;
        GD.TIME = Math.floor(b / 10);
        b = Math.floor(GD.RETIME * (200 / (10 * GD.LIMIT)));
        this.timemc.gotoAndStop(199 < b ? 199 : b);
        this.timetxt.text = GD.LIMIT - GD.TIME + "";
        GD.TIME >= GD.LIMIT && this.lostGame()
    };
    this.toFire = function(b, a, c) {
        this.helof = 1 == this.helof ? 2 : 1;
        this.helo.gotoAndPlay("fire" +
            this.helof);
        var g = this.getBut();
        g.active = !1;
        g.x = b;
        g.y = a;
        this.setLive(c);
        g.gotoAndPlay(0)
    };
    this.onClickAim = function() {
        clearTimeout(this.aimSpace);
        var b = this;
        shake.hitAndShake(this.scene, 10, 10);
        this.aimmc.visible = !1;
        this.aimSpace = setTimeout(function() {
            b.moveAim()
        }, 1500);
        this.toFire(this.aimmc.x, this.aimmc.y, 2)
    };
    this.setLive = function(b) {
        var a = 0;
        1 == b ? a = 10 : 2 == b && (a = 100);
        GD.NPCLIVE -= a;
        0 >= GD.NPCLIVE && (GD.NPCLIVE = 0);
        this.livetxt.text = GD.NPCLIVE + "";
        this.livemc.gotoAndStop(99 - Math.floor(100 * GD.NPCLIVE / 1E3));
        0 == GD.NPCLIVE && this.winGame()
    };
    this.getBut = function() {
        if (0 < this.butList.length)
            for (var d = 0; d < this.butList.length; d++)
                if (this.butList[d] && !this.butList[d].active) return this.butList[d];
        d = new b.LIGHTMC;
        this.rolesmc.addChild(d);
        this.butList.push(d);
        d.active = !1;
        return d
    };
    this.npcMove = function() {
        this.npc.scaleX = this.npc.scaleY = Math.floor(1E3 * this.npcsc) / 1E3;
        this.npc.x = winSize.width / 2 - this.npc.getBounds().width * this.npcsc / 2;
        this.npc.y = 500 - 210 * this.npcsc;
        var b = [
            [240, 53],
            [240, 130],
            [280, 250],
            [180, 250],
            [240,
                350
            ]
        ];
        this.aimPot = [];
        for (var a = 0; a < b.length; a++) this.aimPot.push([b[a][0] * this.npcsc + this.npc.x, b[a][1] * this.npcsc + this.npc.y])
    };
    this.moveAim = function() {
        this.aimmc.visible = !0;
        var b = Math.floor(5 * Math.random());
        this.aimmc.x = this.aimPot[b][0];
        this.aimmc.y = 600 < this.aimPot[b][1] ? 600 : 150 > this.aimPot[b][1] ? 150 : this.aimPot[b][1];
        clearTimeout(this.aimSpace);
        var a = this;
        this.isGame && (this.aimSpace = setTimeout(function() {
            a.moveAim()
        }, 2500))
    };
    this.gameStart = function() {
        var b = this;
        this.maskmc && (this.maskmc.removeEventListener("click",
            function() {
                b.gameStart()
            }), this.removeChild(this.maskmc), this.maskmc = null);
        this.npc.gotoAndPlay("run");
        this.rolesmc.addChild(this.aimmc);
        this.firsttime = new Date;
        this.isGame = !0;
        this.npcMove();
        b.moveAim();
        this.aimmc.addEventListener("click", function() {
            b.onClickAim()
        })
    };
    this.createRoles = function() {
        trace("createRoles");
        var b = this;
        this.npc = new createjs.Sprite(new createjs.SpriteSheet({
            framerate: 6,
            images: ["images/npc.png"],
            frames: [
                [1469, 540, 487, 536],
                [1469, 2, 487, 536],
                [980, 540, 487, 536],
                [980, 2, 487, 536],
                [491,
                    540, 487, 536
                ],
                [491, 2, 487, 536],
                [2, 540, 487, 536],
                [2, 2, 487, 536]
            ],
            animations: {
                stand: 0,
                run: [0, 7, !0]
            }
        }));
        this.rolesmc.addChild(this.aimmc);
        this.helo = new createjs.Sprite(new createjs.SpriteSheet({
            framerate: 30,
            images: ["images/helo.png"],
            frames: [
                [546, 2, 134, 209],
                [410, 2, 134, 209],
                [274, 2, 134, 209],
                [138, 2, 134, 209],
                [2, 2, 134, 209]
            ],
            animations: {
                stand: 0,
                fire1: [1, 2, "stand", 0.5],
                fire2: [3, 4, "stand", 0.5]
            }
        }));
        this.rolesmc.addChild(this.npc);
        this.addChild(this.helo);
        this.helo.scaleX = this.helo.scaleY = 2.2;
        this.helo.x = (winSize.width -
            275) / 2;
        this.helo.y = winSize.height - 429;
        this.npcMove();
        this.helo.gotoAndStop("stand");
        this.npc.gotoAndStop("stand");
        this.npc.addEventListener("mousedown", function(a) {
            b.clickNpc(a)
        });
        this.npc.addEventListener("animationend", function(a) {
            b.npcAnimateEnd(a)
        })
    };
    this.npcAnimateEnd = function() {};
    this.clickNpc = function(b) {
        b = this.globalToLocal(stage.mouseX, stage.mouseY);
        this.toFire(b.x, b.y, 1);
        return !1
    };
    this.winGame = function() {
        new createjs.ColorMatrixFilter([0.33, 0.33, 0.33, 0, 0, 0.33, 0.33, 0.33, 0, 0, 0.33, 0.33, 0.33,
            0, 0, 0, 0, 0, 1, 0
        ]);
        this.closeGame()
    };
    this.lostGame = function() {
        new createjs.ColorFilter(1, 0, 0, 1);
        this.closeGame()
    };
    this.closeGame = function() {
        this.isGame = !1;
        this.npc.removeEventListener("mousedown", function(b) {
            a.clickNpc(b)
        });
        this.npc.removeEventListener("animationend", function(b) {
            a.npcAnimateEnd(b)
        });
        this.aimmc.removeEventListener("click", function() {
            a.onClickAim()
        });
        this.npc.gotoAndStop("stand");
        this.rolesmc.removeChild(this.aimmc);
        for (var b = 0; b < this.butList.length; b++) this.butList[b] && this.rolesmc.removeChild(this.butList[b]);
        this.butList = [];
        var a = this;
        a.nextScene()
    };
    this.nextScene = function() {
        this.removeChild(this.helo);
        this.rolesmc.removeChild(this.npc);
        this.dispatchEvent(new createjs.Event("GAMEEND"))
    };
    this.update = function(b) {
        this.isGame && (shake && shake.update(), b = (new Date).getTime(), 100 < b - this.firsttime && (this.firsttime = b, this.npcsc += 1 * this.g, this.npcMove(), this.setTime(GD.RETIME + 1)))
    }
}
GameManager.prototype = new createjs.Container;

function GameMain(b) {
    this.stage = null;
    this.menuScene;
    this.gameScene;
    this.loadScene;
    this.overScene;
    this.state;
    this.gameBounds;
    this.asset;
    this.init = function() {
        this.stage = new createjs.Container;
        this.addChild(this.stage);
        this.stage.snapToPixelsEnabled = !0;
        this.toMenuScene()
    };
    this.update = function(b) {
        this.gameScene && this.gameScene.update(b)
    };
    this.toMenuScene = function() {
        trace("toMenuScene");
        this.menuScene = new b.INTROUI;
        this.runScence(this.menuScene);
        var d = this;
        this.menuScene.btn.addEventListener("click", function() {
            d.startGame()
        })
    };
    this.toGameScene = function() {
        var d = this;
        trace("toGameScene" + b);
        this.gameScene = new GameManager(b);
        this.gameScene.addEventListener("GAMEEND", function() {
            d.gameEnd()
        });
        this.runScence(this.gameScene);
        this.gameScene.init()
    };
    this.toGameOverScene = function() {
        var d = this;
        this.overScene = new GameOver(b);
        this.overScene.addEventListener("AGAIN", function() {
            d.againGame()
        });
        this.runScence(this.overScene);
        this.overScene.init()
    };
    this.gameEnd = function() {
        this.gameScene.removeEventListener("GAMEEND", function() {
            self.gameEnd()
        });
        this.toGameOverScene()
    };
    this.againGame = function() {
        GD.PLAYEDNUM += 1;
        this.overScene.removeEventListener("AGAIN", function() {
            self.againGame()
        });
        this.toGameScene()
    };
    this.startGame = function() {
        this.toGameScene()
    };
    this.runScence = function(b) {
        b && (this.curScene && this.stage.removeChild(this.curScene), this.curScene = b, this.stage.addChild(b))
    }
}
GameMain.prototype = new createjs.Container;
var GD = {
    SCORE: 0,
    NPCLIVE: 0,
    LIMIT: 12,
    TIME: 0,
    RETIME: 0,
    ENDKIND: 0
};
GD.LIB;
GD.TIMESTRING = "00:00";
GD.PLAYEDNUM = 0;
GD.SHAREWORD = "\u4eca\u5929\u6253\u4e86\u5c0f\u5de8\u4eba\uff0c\u611f\u89c9\u81ea\u5df1\u840c\uff01\u840c\uff01\u54d2\uff01";
shake = new ShakeCls;

function trace(b) {}
var canvas, stage, loaderview, gameView, loader, preload, winSize, mainui, maskshpe;
winSize = {
    width: 640,
    height: 1008
};
var gameManifest = [{
    src: "images/mc_49.jpg",
    id: "mc_49"
}, {
    src: "images/mc_50.jpg",
    id: "mc_50"
}, {
    src: "images/games.png",
    id: "game"
}, {
    src: "images/npc.png",
    id: "npc"
}, {
    src: "images/helo.png",
    id: "helo"
}];
images = images || {};

function initApp() {
    canvas = document.getElementById("canvas");
    stage = new createjs.Stage(canvas);
    maskshpe = new createjs.Shape;
    maskshpe.graphics.drawRect(-178, -128, 990, 1136);
    maskshpe._off = !0;
    mainui = new createjs.Container;
    stage.addChild(mainui);
    initLoader();
    window.onresize = resizeCanvas;
    resizeCanvas();
    createjs.Touch.enable(stage)
}

function initLoader() {
    createjs.Ticker.setFPS(60);
    createjs.Ticker.addEventListener("tick", update);
    stage.update();
    loader = new createjs.LoadQueue(!1);
    loader.addEventListener("fileload", handleFileLoad);
    loader.addEventListener("complete", handleComplete);
    loadLoadUI()
}

function loadLoadUI() {
    loader.loadManifest(loadlib.properties.manifest)
}

function handleFileLoad(b) {
    "image" == b.item.type && (loadimages[b.item.id] = b.result)
}

function handleComplete() {
    document.getElementById("loadicon").style.display = "none";
    loaderview = new loadlib.loading;
    mainui.addChild(loaderview);
    loader.removeEventListener("complete", handleComplete);
    loadGameAssets()
}

function loadGameAssets() {
    images = images || {};
    preload = new createjs.LoadQueue(!0);
    preload.on("progress", handleOverallProgress);
    preload.on("fileprogress", handleGameFileProgress);
    preload.on("fileload", handleGameFileLoad);
    preload.on("complete", handleGameComplete);
    preload.on("error", handleFileError);
    preload.setMaxConnections(5);
    preload.loadManifest(gameManifest)
}

function update(b) {
    stage.update(b);
    gameView && gameView.update(b)
}

function handleGameFileLoad(b) {
    trace(b.item.id);
    "image" == b.item.type && (images[b.item.id] = b.result)
}

function tprogress(b) {
    b = Math.floor(100 * b);
    loaderview.bb.numtxt.text = b + "%"
}

function handleGameFileProgress(b) {}

function handleOverallProgress(b) {
    tprogress(preload.progress)
}

function handleGameComplete(b) {
    mainui.removeChild(loaderview);
    b = new createjs.SpriteSheet(gamedata);
    trace("----" + b);
    for (var d = 0; d < lib.properties.manifest.length; d++) {
        var a = lib.properties.manifest[d].id;
        trace("----" + a);
        gamedata.animations[a] && (images[a] = new createjs.SpriteSheetUtils.extractFrame(b, a))
    }
    images.mc_49 = preload.getResult("mc_49");
    images.mc_50 = preload.getResult("mc_50");
    images.mc_42 = loadimages.mc_42;
    gameView = new GameMain(lib);
    mainui.addChild(gameView);
    mainui.addChild(maskshpe);
    gameView.init();
    gameView.mask = maskshpe
}

function handleFileError(b) {}
var root = mainui,
    scale;

function resizeCanvas() {
    var b = window.innerWidth,
        d = window.innerHeight;
    scale = 640 / 1008 > b / d ? mainui.scaleX = mainui.scaleY = b / 640 : mainui.scaleX = mainui.scaleY = d / 1008;
    canvas.width = b;
    canvas.height = d;
    mainui.x = (b - 640 * scale) / 2
}
var gamedata = {
    images: ["images/games.png"],
    frames: [
        [1125, 887, 402, 414],
        [2, 768, 603, 764],
        [1197, 1767, 67, 77],
        [2, 1534, 577, 203],
        [1559, 2, 67, 77],
        [1174, 1303, 344, 192],
        [1291, 106, 67, 77],
        [1197, 1497, 358, 164],
        [607, 2, 682, 488],
        [1529, 987, 80, 62],
        [1197, 1663, 266, 102],
        [1291, 2, 266, 102],
        [2, 1739, 675, 148],
        [1529, 887, 98, 98],
        [607, 1371, 565, 130],
        [2, 2, 603, 764],
        [581, 1534, 96, 96],
        [581, 1632, 48, 96],
        [1465, 1663, 48, 96],
        [2, 1889, 470, 26],
        [607, 492, 516, 438],
        [607, 932, 516, 437],
        [679, 1503, 516, 393],
        [1125, 492, 503, 393]
    ],
    animations: {
        R3: [0],
        Y1: [1],
        mc_41: [2],
        mc_42: [3],
        mc_43: [4],
        mc_44: [5],
        mc_45: [6],
        mc_46: [7],
        mc_47: [8],
        mc_48: [9],
        mc_51: [10],
        mc_53: [11],
        mc_54: [12],
        mc_55: [13],
        mc_70: [14],
        mc_72: [15],
        tt1: [16],
        tt2: [17],
        tt3: [18],
        tt4: [19],
        wtxt1: [20],
        wtxt2: [21],
        wtxt3: [22],
        wtxt4: [23]
    }
}; /*  |xGv00|63f5fe5bd447bfd09f12282699256cfb */