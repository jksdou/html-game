
'use strict';
(function () {
    function z(a, b) {
        function c() {}
        c.prototype = a;
        var e = new c,
            g;
        for (g in b) e[g] = b[g];
        b.toString !== Object.prototype.toString && (e.toString = b.toString);
        return e
    }

    function sc(a) {
        return a instanceof Array ? function () {
            return p.iter(a)
        } : "function" == typeof a.iterator ? ea(a, a.iterator) : a.iterator
    }

    function ea(a, b) {
        if (null == b) return null;
        null == b.__id__ && (b.__id__ = Dc++);
        var c;
        null == a.hx__closures__ ? a.hx__closures__ = {} : c = a.hx__closures__[b.__id__];
        null == c && (c = function () {
            return c.method.apply(c.scope,
                arguments)
        }, c.scope = a, c.method = b, a.hx__closures__[b.__id__] = c);
        return c
    }
    var f = {},
        s = function () {
            return N.__string_rec(this, "")
        },
        $ = function (a, b) {
            b = b.split("u").join("");
            this.r = RegExp(a, b)
        };
    f.EReg = $;
    $.__name__ = ["EReg"];
    $.prototype = {
        match: function (a) {
            this.r.global && (this.r.lastIndex = 0);
            this.r.m = this.r.exec(a);
            this.r.s = a;
            return null != this.r.m
        },
        matched: function (a) {
            if (null != this.r.m && 0 <= a && a < this.r.m.length) return this.r.m[a];
            throw "EReg::matched";
        },
        matchedPos: function () {
            if (null == this.r.m) throw "No string matched";
            return {
                pos: this.r.m.index,
                len: this.r.m[0].length
            }
        },
        split: function (a) {
            return a.replace(this.r, "#__delim__#").split("#__delim__#")
        },
        __class__: $
    };
    var fa = function () {};
    f.G = fa;
    fa.__name__ = ["G"];
    fa.saveData = function () {
        d.saveData("unlocked_levels", fa.unlockedLevels)
    };
    fa.loadData = function () {
        var a = d.loadData("unlocked_levels");
        fa.unlockedLevels = 0 < a ? a : 0
    };
    var la = function (a, b) {
        null == b && (b = 0);
        null == a && (a = 0);
        this.x = a;
        this.y = b
    };
    f["flambe.math.Point"] = la;
    la.__name__ = ["flambe", "math", "Point"];
    la.prototype = {
        set: function (a,
            b) {
            this.x = a;
            this.y = b
        },
        distanceTo: function (a, b) {
            return Math.sqrt(this.distanceToSquared(a, b))
        },
        distanceToSquared: function (a, b) {
            var c = this.x - a,
                e = this.y - b;
            return c * c + e * e
        },
        __class__: la
    };
    var i = function (a, b, c) {
        i.ref = this;
        this.gridLayer = a;
        this.width = b;
        this.height = c;
        i.offsetX = (d.width - b * (i.pieceWidth + i.gap)) / 2 + i.pieceWidth / 2 | 0;
        i.offsetY = 150;
        i.playingGridHeight = i.initPlayingGridHeight;
        c < i.playingGridHeight && (i.playingGridHeight = c, i.offsetY += (i.initPlayingGridHeight - c) * i.pieceHeight);
        c > i.playingGridHeight +
            1 && (a._compMap.Sprite_0.y.set__(-(c - i.playingGridHeight) * i.pieceHeight), L.tween(a._compMap.Sprite_0, 0.08 * c, {
                y: 0
            }, 0, function () {}, q.quadOut));
        this.genEmptyGrid()
    };
    f.Grid = i;
    i.__name__ = ["Grid"];
    i.prototype = {
        genEmptyGrid: function () {
            for (var a = [], b = 0, c = this.height; b < c;) b++, a.push(function (a) {
                for (var b = [], c = 0, a = a.width; c < a;) c++, b.push(null);
                return b
            }(this));
            this.grid = a
        },
        genGridFromArray: function (a) {
            for (var b = 0, c = this.grid.length; b < c;) {
                var e = b++;
                null != a[e] && this.addRowFromArrayAt(a[e], e)
            }
        },
        getEmptySpaceAbove: function () {
            for (var a = [], b = 0, c = this.grid[0].length; b < c;)
                for (var e = b++, g = 0; g < this.grid.length;) null == this.grid[g][e] ? a.push([g, e]) : g = this.grid.length, g++;
            return a
        },
        addRowFromArrayAt: function (a, b) {
            for (var c = 0, e = this.grid[b].length; c < e;) {
                var g = c++; - 1 != a[g] && null == this.grid[b][g] ? this.grid[b][g] = new C(g, b, a[g] | 0) : null == this.grid[b][g] && null
            }
        },
        getRow: function (a) {
            var b = [];
            if (null != this.grid[a])
                for (var c = 0, e = this.grid[a].length; c < e;) {
                    var g = c++;
                    null != this.grid[a][g] && b.push(this.grid[a][g])
                }
            return b
        },
        getColumn: function (a) {
            for (var b = [], c = 0, e = i.playingGridHeight; c < e;) {
                var g = c++;
                null != this.grid[g][a] && b.push(this.grid[g][a])
            }
            return b
        },
        getPiecesOfType: function (a) {
            for (var b = [], c = 0, e = i.playingGridHeight; c < e;)
                for (var g = c++, h = 0, d = this.grid[g].length; h < d;) {
                    var j = h++;
                    null != this.grid[g][j] && this.grid[g][j].type == a && b.push(this.grid[g][j])
                }
            return b
        },
        getNOfTypes: function (a) {
            for (var b = 0, c = 0, e = i.playingGridHeight; c < e;)
                for (var g = c++, h = 0, d = this.grid[g].length; h < d;) {
                    var j = h++;
                    if (null != this.grid[g][j])
                        for (var f = 0, k = a.length; f < k;) {
                            var m = f++;
                            this.grid[g][j].type ==
                                a[m] && b++
                        }
                }
            return b
        },
        getPiecesAroundPiece: function (a) {
            for (var b = [], c = a.gridX - 1, e = a.gridY - 1, g = c + 3, h = e + 3; e < h;) {
                for (; c < g;) 0 <= e && e < i.playingGridHeight && 0 <= c && c < this.width && null != this.grid[e][c] && b.push(this.grid[e][c]), c++;
                c = a.gridX - 1;
                e++
            }
            return b
        },
        getTopPieceY: function () {
            for (var a = 0, b = this.grid.length; a < b;)
                for (var c = a++, e = 0, g = this.grid[c].length; e < g;) {
                    var h = e++;
                    if (null != this.grid[c][h] && 222 != this.grid[c][h].type) return c
                }
            return 0
        },
        getAllBonuses: function () {
            for (var a = [], b = 0, c = i.playingGridHeight; b < c;)
                for (var e =
                    b++, g = 0, h = this.grid[e].length; g < h;) {
                    var d = g++;
                    null != this.grid[e][d] && (5 <= this.grid[e][d].type && 9 >= this.grid[e][d].type ? a.push(this.grid[e][d]) : 20 == this.grid[e][d].type && a.push(this.grid[e][d]))
                }
            return a
        },
        getPetsOnBottom: function () {
            for (var a = [], b = this.grid[this.height - 1], c = 0, e = b.length; c < e;) {
                var g = c++;
                null != b[g] && 111 == b[g].type && a.push(b[g])
            }
            return a
        },
        applyGravityDown: function () {
            for (var a = i.playingGridHeight - 1, b = []; 0 < a;) {
                for (var c = this.grid[a], e = 0, g = c.length; e < g;) {
                    var h = e++;
                    if (null == c[h])
                        for (var d =
                            a; 0 < d;) d--, null != this.grid[d][h] && 222 != this.grid[d][h].type ? (this.grid[a][h] = this.grid[d][h], this.grid[a][h].gridY = a, b.push(this.grid[a][h]), this.grid[d][h] = null, d = 0) : null != this.grid[d][h] && 222 == this.grid[d][h].type && (d = 0)
                }
                a--
            }
            return b
        },
        needForGravity: function () {
            for (var a = i.playingGridHeight - 1; 0 < a;) {
                for (var b = this.grid[a], c = 0, e = b.length; c < e;) {
                    var g = c++;
                    if (null == b[g])
                        for (var h = a; 0 < h;) {
                            h--;
                            if (null != this.grid[h][g] && 222 != this.grid[h][g].type) return !0;
                            null != this.grid[h][g] && 222 == this.grid[h][g].type &&
                                (h = 0)
                        }
                }
                a--
            }
            return !1
        },
        slideToLeft: function () {
            for (var a = this.grid[i.playingGridHeight - 1], b = 0, c = [], e = 0; e < a.length;) {
                if (null == a[e] && e != a.length - 1 && (b++, null != a[e + 1] && 222 != a[e + 1].type)) {
                    for (var g = e + 1, h = a[g]; null != h;) {
                        for (h = i.playingGridHeight - 1; - 1 < h;) null != this.grid[h][g] && 222 != this.grid[h][g].type ? null == this.grid[h][g - 1] ? (this.grid[h][g - 1] = this.grid[h][g], this.grid[h][g - 1].gridX = g - 1, c.push(this.grid[h][g - 1]), this.grid[h][g] = null) : h = 0 : null != this.grid[h][g] && 222 == this.grid[h][g].type && (h = 0), h--;
                        g++;
                        h = a[g]
                    }
                    e -=
                        b;
                    0 > e && (e = -1);
                    b = 0
                }
                e++
            }
            a = 0;
            for (b = i.playingGridHeight; a < b;) {
                e = a++;
                g = 0;
                for (h = this.grid[e].length; g < h;) {
                    var d = g++;
                    if (null != this.grid[e][d] && 222 == this.grid[e][d].type && 0 != d && (null == this.grid[e][d - 1] || 222 == this.grid[e][d - 1].type))
                        for (var j = e; 0 < j;) j--, null != this.grid[j][d] && 222 != this.grid[j][d].type ? null == this.grid[j][d - 1] ? (this.grid[j][d - 1] = this.grid[j][d], this.grid[j][d - 1].gridX = d - 1, c.push(this.grid[j][d - 1]), this.grid[j][d] = null) : j = 0 : null != this.grid[j][d] && 222 == this.grid[j][d].type ? j = 0 : null == this.grid[j +
                            1][d] && (j = 0)
                }
            }
            return c
        },
        needForSlideToLeft: function () {
            for (var a = this.grid[i.playingGridHeight - 1], b = 0, c = 0; c < a.length;) {
                if (null == a[c] && c != a.length - 1 && (b++, null != a[c + 1] && 222 != a[c + 1].type)) {
                    for (var e = c + 1, g = a[e]; null != g;) {
                        for (g = i.playingGridHeight - 1; - 1 < g;) {
                            if (null != this.grid[g][e] && 222 != this.grid[g][e].type) {
                                if (null == this.grid[g][e - 1]) return !0;
                                g = 0
                            } else null != this.grid[g][e] && 222 == this.grid[g][e].type && (g = 0);
                            g--
                        }
                        e++;
                        g = a[e]
                    }
                    c -= b;
                    0 > c && (c = -1);
                    b = 0
                }
                c++
            }
            a = 0;
            for (b = i.playingGridHeight; a < b;) {
                c = a++;
                e = 0;
                for (g = this.grid[c].length; e <
                    g;) {
                    var h = e++;
                    if (null != this.grid[c][h] && 222 == this.grid[c][h].type && 0 != h && (null == this.grid[c][h - 1] || 222 == this.grid[c][h - 1].type))
                        for (var d = c; 0 < d;)
                            if (d--, null != this.grid[d][h] && 222 != this.grid[d][h].type) {
                                if (null == this.grid[d][h - 1]) return !0;
                                d = 0
                            } else null != this.grid[d][h] && 222 == this.grid[d][h].type ? d = 0 : null == this.grid[d + 1][h] && (d = 0)
                }
            }
            return !1
        },
        updateGridView: function () {
            if (i.playingGridHeight != this.height) {
                var a = this.getTopPieceY();
                i.playingGridHeight < i.initPlayingGridHeight + a && (i.playingGridHeight = i.initPlayingGridHeight +
                    a, i.playingGridHeight > this.height && (i.playingGridHeight = this.height), this.gridLayer._compMap.Sprite_0.y._value > -(this.height - i.initPlayingGridHeight) * i.pieceHeight && this.gridLayer._compMap.Sprite_0.y.animateTo(-((i.playingGridHeight - i.initPlayingGridHeight) * i.pieceHeight), 0.4, q.quadOut))
            }
        },
        getGridRowsBelow: function () {
            return this.height - i.playingGridHeight
        },
        coordsInGrid: function (a, b) {
            return 0 <= a && 0 <= b && a < this.width && b < i.playingGridHeight
        },
        getPiece: function (a, b) {
            return this.coordsInGrid(a, b) && null !=
                this.grid[b][a] ? this.grid[b][a] : null
        },
        neighbourOf: function (a, b) {
            var c = a.relativeCoordinates(b, 1);
            return this.getPiece(c.x | 0, c.y | 0)
        },
        neighboursOf: function (a) {
            for (var b = [], c = 0, e = i.dirs.length; c < e;) {
                var g = c++;
                b.push(this.neighbourOf(a, i.dirs[g]))
            }
            return b
        },
        getDeepMatches: function (a) {
            null == a && (a = 2);
            for (var b = [], c = [], e = 0, g = i.playingGridHeight; e < g;)
                for (var h = this.grid[e++], d = 0, j = h.length; d < j;) {
                    var f = d++,
                        k = h[f];
                    if (null != k && -1 == va.indexOf(b, k)) {
                        for (var f = k.deepMatchingNeighbours(), m = 0, l = f.length; m < l;) {
                            var n =
                                m++;
                            b.push(f[n])
                        }
                        if (f.length >= a && null != k) {
                            k = 0;
                            for (m = f.length; k < m;) l = k++, c.push(f[l])
                        }
                    }
                }
            return c
        },
        __class__: i
    };
    var p = function () {};
    f.HxOverrides = p;
    p.__name__ = ["HxOverrides"];
    p.dateStr = function (a) {
        var b = a.getMonth() + 1,
            c = a.getDate(),
            e = a.getHours(),
            g = a.getMinutes(),
            h = a.getSeconds();
        return a.getFullYear() + "-" + (10 > b ? "0" + b : "" + b) + "-" + (10 > c ? "0" + c : "" + c) + " " + (10 > e ? "0" + e : "" + e) + ":" + (10 > g ? "0" + g : "" + g) + ":" + (10 > h ? "0" + h : "" + h)
    };
    p.strDate = function (a) {
        switch (a.length) {
        case 8:
            var a = a.split(":"),
                b = new Date;
            b.setTime(0);
            b.setUTCHours(a[0]);
            b.setUTCMinutes(a[1]);
            b.setUTCSeconds(a[2]);
            return b;
        case 10:
            return a = a.split("-"), new Date(a[0], a[1] - 1, a[2], 0, 0, 0);
        case 19:
            return b = a.split(" "), a = b[0].split("-"), b = b[1].split(":"), new Date(a[0], a[1] - 1, a[2], b[0], b[1], b[2]);
        default:
            throw "Invalid date format : " + a;
        }
    };
    p.cca = function (a, b) {
        var c = a.charCodeAt(b);
        return c != c ? void 0 : c
    };
    p.substr = function (a, b, c) {
        if (null != b && 0 != b && null != c && 0 > c) return "";
        null == c && (c = a.length);
        0 > b ? (b = a.length + b, 0 > b && (b = 0)) : 0 > c && (c = a.length + c - b);
        return a.substr(b,
            c)
    };
    p.remove = function (a, b) {
        var c = a.indexOf(b);
        if (-1 == c) return !1;
        a.splice(c, 1);
        return !0
    };
    p.iter = function (a) {
        return {
            cur: 0,
            arr: a,
            hasNext: function () {
                return this.cur < this.arr.length
            },
            next: function () {
                return this.arr[this.cur++]
            }
        }
    };
    var va = function () {};
    f.Lambda = va;
    va.__name__ = ["Lambda"];
    va.array = function (a) {
        for (var b = [], a = sc(a)(); a.hasNext();) {
            var c = a.next();
            b.push(c)
        }
        return b
    };
    va.count = function (a, b) {
        var c = 0;
        if (null == b)
            for (var e = sc(a)(); e.hasNext();) e.next(), c++;
        else
            for (e = sc(a)(); e.hasNext();) {
                var g = e.next();
                b(g) && c++
            }
        return c
    };
    va.indexOf = function (a, b) {
        for (var c = 0, e = sc(a)(); e.hasNext();) {
            var g = e.next();
            if (b == g) return c;
            c++
        }
        return -1
    };
    var fb = function () {
        this.length = 0
    };
    f.List = fb;
    fb.__name__ = ["List"];
    fb.prototype = {
        add: function (a) {
            a = [a];
            null == this.h ? this.h = a : this.q[1] = a;
            this.q = a;
            this.length++
        },
        iterator: function () {
            return {
                h: this.h,
                hasNext: function () {
                    return null != this.h
                },
                next: function () {
                    if (null == this.h) return null;
                    var a = this.h[0];
                    this.h = this.h[1];
                    return a
                }
            }
        },
        __class__: fb
    };
    var W = function () {};
    f.Main = W;
    W.__name__ = ["Main"];
    W.main = function () {
        l.init();
        d.systemBgColor = 5459013;
        (new d(640, 960)).init.connect(W.onInit).once()
    };
    W.onInit = function () {
        W.lang = 'cn';//SG_Hooks.getLanguage("en,de,es,fr,it,pt,ru,tk".split(","));
        //SG_Hooks.setResizeHandler(d.onResizeCallback);
        //SG_Hooks.setOrientationHandler(d.onOrientationChangeCallback);
        if(W.lang == "cn") d.defaultFont = "default_font2";
        d.initFlipbooks([
            ["bl111", 3, 1, 0.5, 35, 35],
            ["bl112", 3, 1, 0.5, 35, 35],
            ["bl113", 3, 1, 0.5, 35, 35],
            ["fx/booster_fx", 2, 1, 0.2, 50, 40],
            ["fx/flash_fx", 2, 1, 0.2, 35, 35],
            ["fx/block_explosion1", 3, 1, 0.2, 48, 48],
            ["bottom_wheels",
                3, 1, 0.5, 35, 35
            ]
        ]);
        fa.loadData();
        d.buttonClickSfx = "button_click_sfx";
        d.goToScene((new wa).root)
    };
    var Qb = function () {};
    f.IMap = Qb;
    Qb.__name__ = ["IMap"];
    Math.__name__ = ["Math"];
    var C = function (a, b, c, e) {
        null == e && (e = !1);
        this.sx = 1;
        this.cageEnt = null;
        this.gridX = a;
        this.gridY = b;
        this.type = c;
        this.drop = e;
        this.init()
    };
    f.Piece = C;
    C.__name__ = ["Piece"];
    C.prototype = {
        init: function () {
            var a = this;
            C.gridIsActive = !0;
            var b = "bl" + this.type;
            30 <= this.type && 34 >= this.type && (b = "bl" + (this.type - 30));
            111 == this.type && (b = "bl" + (111 + d.rand(3)));
            var c = this.getY();
            this.drop && (c = 70);
            this.pieceEnt = 111 == this.type ? d.addMovieSprite(i.ref.gridLayer, this.getX(), c, b, function () {
                var b = a.pieceEnt._compMap.Sprite_0;
                b.set_paused(!0);
                d.addDelay(a.pieceEnt, 3 + d.rand(40) / 10, function () {
                    0 != (b._flags & 16) ? b.set_paused(!1) : b.set_paused(!0);
                    1 == d.rand(2) ? b.setScaleXY(-1, 1) : b.setScaleXY(1, 1)
                }, !1)
            }) : d.addImageSprite(i.ref.gridLayer, this.getX(), c, b);
            1 == d.rand(2) && (this.sx = -1);
            this.pieceEnt._compMap.Sprite_0.setScaleXY(this.sx, 1);
            this.pieceEnt.add(new ma);
            30 <= this.type &&
                34 >= this.type && (this.cageEnt = d.addImageSprite(this.pieceEnt, i.pieceWidth / 2 | 0, i.pieceHeight / 2 | 0, "cage"));
            40 > this.type && this.pieceEnt._compMap.Disposer_2.connect1(this.pieceEnt._compMap.Sprite_0.get_pointerUp(), ea(this, this.onPointerUp));
            null == C.applyGravSlideAction && (C.applyGravSlideAction = new xa([new ga(function () {
                C.gridIsActive = !1;
                for (var a = i.ref.applyGravityDown(), b = 0, c = a.length; b < c;) {
                    var d = b++;
                    a[d].tweenOnGravityDown()
                }
            }), new na(0.2), new ga(function () {
                for (var b = i.ref.slideToLeft(), c = 0, h = b.length; c <
                    h;) {
                    var d = c++;
                    b[d].tweenOnSlideLeft()
                }
                a.removePetsOnBottom()
            })]));
            this.drop && this.tweenOnInit();
            null == C.emt && (C.emtMold = new w(d.assets, "fx/explode"), C.emt = C.emtMold.createEmitter(), C.emt.disablePointer(), C.emt.setXY(0, -1E3), i.ref.gridLayer.parent.addChild((new D).add(C.emt)))
        },
        onPointerUp: function () {
            if (i.ref.coordsInGrid(this.gridX, this.gridY) && C.gridIsActive)
                if (5 <= this.type && 9 >= this.type) this.activateBonusColorBomb();
                else if (20 == this.type) this.activateBonusBomb();
            else {
                var a = this.deepMatchingNeighbours();
                if (0 < a.length) {
                    t.playSfx("pop_sfx");
                    this.unlockNeighbours(a);
                    for (var b = 0, c = a.length; b < c;) {
                        var e = b++;
                        this.tweenOnRemove(a[e])
                    }
                    this.updateGrid(a.length)
                } else this.tweenShake()
            }
        },
        updateGrid: function (a) {
            this.updateScore(10 * a * a - 10 * a);
            i.ref.gridLayer._compMap.Script_3.run(C.applyGravSlideAction);
            var b = null,
                b = d.addDelay(i.ref.gridLayer, 0.6, function () {
                    i.ref.needForGravity() || i.ref.needForSlideToLeft() ? i.ref.gridLayer._compMap.Script_3.run(C.applyGravSlideAction) : (b._compMap.Script_3.stopAll(), i.ref.updateGridView(),
                        i.ref.gridLayer.parent._compMap.GameSceneComp_8.updateGame(), C.gridIsActive = !0)
                }, !0)
        },
        updateScore: function (a) {
            if (0 < a) {
                i.ref.gridLayer.parent._compMap.GameSceneComp_8.updateScore(a);
                var b = d.localPointerX(),
                    c = d.localPointerY(),
                    e = 0;
                111 == this.type && (e = 50);
                var g;
                g = d.addLabel(i.ref.gridLayer.parent, b, c, "" + a, 1, 1, !0, "score_font2")._compMap.Sprite_0;
                g.disablePointer();
                var h = x["int"](g.getNaturalWidth() / 2);
                b < h && g.x.set__(1.4 * h + 20);
                b + h > d.width && g.x.set__(d.width - 1.4 * h - 20);
                g.setScale(0.8);
                L.tween(g, 0.8, {
                    y: g.y._value -
                        120 - e,
                    scaleX: 1.4,
                    scaleY: 1.4
                }, 0, null, q.cubeOut);
                L.tween(g, 0.6, {
                    y: g.y._value + 20,
                    alpha: 0
                }, 0.7, function () {
                    g.dispose()
                }, q.cubeIn);
                e = "";
                420 == a && (e = d.settings.get(W.lang + ".enfx1"));
                560 == a && (e = d.settings.get(W.lang + ".enfx2"));
                720 == a && (e = d.settings.get(W.lang + ".enfx3"));
                900 <= a && (e = d.settings.get(W.lang + ".enfx4"));
                var f;
                f = d.addLabel(i.ref.gridLayer.parent, d.halfWidth, d.halfHeight, e, 0.1, 1, !0)._compMap.Sprite_0;
                f.disablePointer();
                a = 6;
                0 == d.rand(2) && (a *= -1);
                L.tween(f, 0.6, {
                    scaleX: 1.8,
                    scaleY: 1.8,
                    y: f.y._value - 120 -
                        d.rand(40),
                    rotation: a
                }, 0, function () {
                    f.dispose()
                }, q.backOut);
                C.emt.setXY(b, c);
                C.emt.restart()
            }
        },
        removePetsOnBottom: function () {
            for (var a = i.ref.getPetsOnBottom(), b = 0, c = a.length; b < c;) {
                var e = b++;
                this.updateScore(1E3);
                i.ref.gridLayer.parent._compMap.GameSceneComp_8.cRescuedPets++;
                this.tweenOnRemove(a[e])
            }
        },
        unlockNeighbours: function (a) {
            for (var b = 0, c = a.length; b < c;)
                for (var e = b++, e = a[e].neighbours(), g = 0, h = e.length; g < h;) {
                    var d = g++;
                    null != e[d] && 30 <= e[d].type && 34 >= e[d].type && (e[d].type -= 30, null != e[d].cageEnt &&
                        e[d].cageEnt.dispose())
                }
        },
        activateBonusColorBomb: function () {
            var a = i.ref.getPiecesOfType(this.type - 5);
            this.unlockNeighbours(a);
            for (var b = 0, c = a.length; b < c;) {
                var e = b++;
                this.tweenOnRemove(a[e])
            }
            this.makeExplosion(this.getX(), this.getY());
            this.tweenOnRemove(this);
            t.playSfx("bonus_sfx", 0.6);
            i.ref.gridLayer._compMap.Script_3.run(new ya(10, 0, 0.5));
            this.updateGrid(a.length)
        },
        chainedExplBonusColorBomb: function () {
            var a = i.ref.getPiecesOfType(this.type - 5);
            this.unlockNeighbours(a);
            for (var b = 0, c = a.length; b < c;) {
                var e =
                    b++;
                this.tweenOnRemove(a[e])
            }
            this.makeExplosion(this.getX(), this.getY());
            this.tweenOnRemove(this);
            return a.length
        },
        activateBonusBomb: function () {
            for (var a = i.ref.getPiecesAroundPiece(this), b = [], c = 0, e = 0, g = a.length; e < g;) {
                var h = e++;
                4 >= a[h].type || 40 == a[h].type ? (this.tweenOnRemove(a[h]), c++) : 30 <= a[h].type && 34 >= a[h].type ? (a[h].type -= 30, null != a[h].cageEnt && a[h].cageEnt.dispose()) : 20 == a[h].type && a[h] != this && b.push(a[h])
            }
            this.makeExplosion(this.getX(), this.getY());
            this.tweenOnRemove(this);
            t.playSfx("bonus_sfx",
                0.6);
            a = 0;
            for (e = b.length; a < e;) g = a++, c += b[g].chainedExplBonusBomb();
            i.ref.gridLayer._compMap.Script_3.run(new ya(10, 0, 0.5));
            this.updateGrid(c)
        },
        chainedExplBonusBomb: function () {
            for (var a = i.ref.getPiecesAroundPiece(this), b = [], c = 0, e = 0, g = a.length; e < g;) {
                var h = e++;
                4 >= a[h].type || 40 == a[h].type ? (this.tweenOnRemove(a[h]), c++) : 30 <= a[h].type && 34 >= a[h].type ? (a[h].type -= 30, null != a[h].cageEnt && a[h].cageEnt.dispose()) : 20 == a[h].type && a[h] != this && b.push(a[h])
            }
            this.makeExplosion(this.getX(), this.getY());
            this.tweenOnRemove(this);
            a = 0;
            for (e = b.length; a < e;) g = a++, c += b[g].chainedExplBonusBomb();
            return c
        },
        activateBooster: function (a, b, c, e) {
            var g = [];
            "row" == b ? g = i.ref.getRow(a) : "column" == b && (g = i.ref.getColumn(a));
            if ("row" == b) {
                var h;
                h = d.addMovieSprite(i.ref.gridLayer, c, e - i.ref.gridLayer._compMap.Sprite_0.y._value, "fx/booster_fx")._compMap.Sprite_0;
                var f;
                f = d.addMovieSprite(i.ref.gridLayer, c, e - i.ref.gridLayer._compMap.Sprite_0.y._value, "fx/booster_fx")._compMap.Sprite_0;
                f.setRotation(180);
                L.tween(h, 0.4, {
                        x: d.width + 100
                    }, 0, function () {
                        h.dispose()
                    },
                    q.backIn);
                L.tween(f, 0.4, {
                    x: -100
                }, 0, function () {
                    f.dispose()
                }, q.backIn)
            }
            c = a = 0;
            for (e = g.length; c < e;) {
                var j = c++;
                if ("column" == b && 222 != g[j].type && 111 != g[j].type) {
                    var y = [d.addMovieSprite(i.ref.gridLayer, g[j].getX(), g[j].getY(), "fx/flash_fx")._compMap.Sprite_0];
                    y[0].setRotation(90);
                    d.addDelay(y[0].owner, 0.4, function (a) {
                        return function () {
                            a[0].dispose()
                        }
                    }(y))
                }
                4 >= g[j].type || 40 == g[j].type ? (this.tweenOnRemove(g[j]), a++) : 30 <= g[j].type && 34 >= g[j].type ? (g[j].type -= 30, null != g[j].cageEnt && g[j].cageEnt.dispose()) : 20 ==
                    g[j].type ? a += g[j].chainedExplBonusBomb() : 5 <= g[j].type && 9 >= g[j].type && (a += g[j].chainedExplBonusColorBomb())
            }
            i.ref.gridLayer._compMap.Script_3.run(new ya(10, 0, 0.5));
            this.updateGrid(a)
        },
        makeExplosion: function (a, b) {
            var c = 0,
                e = new D;
            i.ref.gridLayer.addChild(e);
            d.addDelay(i.ref.gridLayer, 0.05, function () {
                5 > c ? e.add(d.initImageSpriteComp(a, b, "fx/explosion_" + c, 0.7)) : e.dispose();
                c++
            }, !0, 6)
        },
        getX: function () {
            return this.gridX * (i.pieceWidth + i.gap) + (i.gap / 2 | 0) + i.offsetX
        },
        getY: function () {
            return this.gridY * (i.pieceHeight +
                i.gap) + (i.gap / 2 | 0) + i.offsetY
        },
        tweenOnInit: function () {
            this.tweenOnGravityDown()
        },
        tweenOnRemove: function (a) {
            i.ref.grid[a.gridY][a.gridX] = null;
            if (4 >= a.type) {
                var b = null,
                    b = d.addMovieSprite(i.ref.gridLayer, a.getX(), a.getY(), "fx/block_explosion1", function () {
                        b.dispose()
                    }, 0.7, 0.4);
                b._compMap.Sprite_0.disablePointer();
                L.tween(b._compMap.Sprite_0, 0.1, {
                    scaleX: 1.3,
                    scaleY: 1.3
                }, 0, null, q.backIn)
            }
            a.pieceEnt._compMap.Sprite_0.setAlpha(0.7);
            var c = 0;
            111 == a.type && (c = 0.2);
            L.tween(a.pieceEnt._compMap.Sprite_0, 0.3, {
                alpha: 0.5,
                scaleX: 0 * this.sx,
                scaleY: 0
            }, c, function () {
                a.pieceEnt.dispose();
                a = null
            }, q.backIn)
        },
        tweenOnSlideLeft: function () {
            var a = this;
            C.gridIsActive = !1;
            this.pieceEnt._compMap.Sprite_0.x.animateTo(this.getX(), 0.3, q.backInOut);
            L.tween(this.pieceEnt._compMap.Sprite_0, 0.1, {
                rotation: 10,
                scaleX: 0.7 * this.sx
            }, 0.1, function () {
                L.tween(a.pieceEnt._compMap.Sprite_0, 0.2, {
                    rotation: 0,
                    scaleX: a.sx
                }, 0, null, q.backOut)
            }, q.backIn)
        },
        tweenOnGravityDown: function () {
            var a = this;
            C.gridIsActive = !1;
            this.pieceEnt._compMap.Sprite_0.y.animateTo(this.getY(),
                0.3, q.backIn);
            L.tween(this.pieceEnt._compMap.Sprite_0, 0.15, {
                scaleX: 1.2 * this.sx,
                scaleY: 0.9
            }, 0.2, function () {
                L.tween(a.pieceEnt._compMap.Sprite_0, 0.25, {
                    scaleX: a.sx,
                    scaleY: 1
                }, 0, null, q.bounceOut)
            }, q.cubeIn)
        },
        tweenShake: function () {
            t.playSfx("no_match_sfx", 0.5);
            this.pieceEnt._compMap.Sprite_0.x.set__(this.getX());
            this.pieceEnt._compMap.Sprite_0.y.set__(this.getY());
            this.pieceEnt._compMap.Script_3.run(new ya(10, 0, 0.3))
        },
        relativeCoordinates: function (a, b) {
            return new la(this.gridX + b * a.x, this.gridY + b * a.y)
        },
        neighbours: function () {
            return i.ref.neighboursOf(this)
        },
        matchingNeighbours: function () {
            for (var a = [], b = this.neighbours(), c, e = 0, g = b.length; e < g;) c = e++, c = b[c], null != c && c.type == this.type && 4 >= this.type && a.push(c);
            return a
        },
        deepMatchingNeighbours: function () {
            var a = [],
                b = null,
                b = function (c) {
                    for (var c = c.matchingNeighbours(), e = 0, g = c.length; e < g;) {
                        var h = e++,
                            h = c[h]; - 1 == va.indexOf(a, h) && (a.push(h), b(h))
                    }
                };
            b(this);
            return a
        },
        __class__: C
    };
    var F = function () {};
    f.Reflect = F;
    F.__name__ = ["Reflect"];
    F.field = function (a, b) {
        try {
            return a[b]
        } catch (c) {
            return null
        }
    };
    F.getProperty = function (a,
        b) {
        var c;
        return null == a ? null : a.__properties__ && (c = a.__properties__["get_" + b]) ? a[c]() : a[b]
    };
    F.callMethod = function (a, b, c) {
        return b.apply(a, c)
    };
    F.fields = function (a) {
        var b = [];
        if (null != a) {
            var c = Object.prototype.hasOwnProperty,
                e;
            for (e in a) "__id__" != e && "hx__closures__" != e && c.call(a, e) && b.push(e)
        }
        return b
    };
    F.isFunction = function (a) {
        return "function" == typeof a && !(a.__name__ || a.__ename__)
    };
    F.deleteField = function (a, b) {
        if (!Object.prototype.hasOwnProperty.call(a, b)) return !1;
        delete a[b];
        return !0
    };
    var x = function () {};
    f.Std = x;
    x.__name__ = ["Std"];
    x.is = function (a, b) {
        return N.__instanceof(a, b)
    };
    x.string = function (a) {
        return N.__string_rec(a, "")
    };
    x["int"] = function (a) {
        return a | 0
    };
    x.parseInt = function (a) {
        var b = parseInt(a, 10);
        if (0 == b && (120 == p.cca(a, 1) || 88 == p.cca(a, 1))) b = parseInt(a);
        return isNaN(b) ? null : b
    };
    x.parseFloat = function (a) {
        return parseFloat(a)
    };
    x.random = function (a) {
        return 0 >= a ? 0 : Math.floor(Math.random() * a)
    };
    var Ga = function () {
        this.b = ""
    };
    f.StringBuf = Ga;
    Ga.__name__ = ["StringBuf"];
    Ga.prototype = {
        add: function (a) {
            this.b +=
                x.string(a)
        },
        addSub: function (a, b, c) {
            this.b = null == c ? this.b + p.substr(a, b, null) : this.b + p.substr(a, b, c)
        },
        __class__: Ga
    };
    var I = function () {};
    f.StringTools = I;
    I.__name__ = ["StringTools"];
    I.startsWith = function (a, b) {
        return a.length >= b.length && p.substr(a, 0, b.length) == b
    };
    I.replace = function (a, b, c) {
        return a.split(b).join(c)
    };
    I.fastCodeAt = function (a, b) {
        return a.charCodeAt(b)
    };
    var v = f.ValueType = {
        __ename__: ["ValueType"],
        __constructs__: "TNull,TInt,TFloat,TBool,TObject,TFunction,TClass,TEnum,TUnknown".split(",")
    };
    v.TNull = ["TNull", 0];
    v.TNull.toString = s;
    v.TNull.__enum__ = v;
    v.TInt = ["TInt", 1];
    v.TInt.toString = s;
    v.TInt.__enum__ = v;
    v.TFloat = ["TFloat", 2];
    v.TFloat.toString = s;
    v.TFloat.__enum__ = v;
    v.TBool = ["TBool", 3];
    v.TBool.toString = s;
    v.TBool.__enum__ = v;
    v.TObject = ["TObject", 4];
    v.TObject.toString = s;
    v.TObject.__enum__ = v;
    v.TFunction = ["TFunction", 5];
    v.TFunction.toString = s;
    v.TFunction.__enum__ = v;
    v.TClass = function (a) {
        a = ["TClass", 6, a];
        a.__enum__ = v;
        a.toString = s;
        return a
    };
    v.TEnum = function (a) {
        a = ["TEnum", 7, a];
        a.__enum__ = v;
        a.toString = s;
        return a
    };
    v.TUnknown = ["TUnknown", 8];
    v.TUnknown.toString = s;
    v.TUnknown.__enum__ = v;
    var H = function () {};
    f.Type = H;
    H.__name__ = ["Type"];
    H.getClass = function (a) {
        return null == a ? null : a instanceof Array && null == a.__enum__ ? Array : a.__class__
    };
    H.getClassName = function (a) {
        return a.__name__.join(".")
    };
    H.getEnumName = function (a) {
        return a.__ename__.join(".")
    };
    H.resolveClass = function (a) {
        a = f[a];
        return null == a || !a.__name__ ? null : a
    };
    H.resolveEnum = function (a) {
        a = f[a];
        return null == a || !a.__ename__ ? null : a
    };
    H.createEmptyInstance = function (a) {
        function b() {}
        b.prototype = a.prototype;
        return new b
    };
    H.createEnum = function (a, b, c) {
        var e = F.field(a, b);
        if (null == e) throw "No such constructor " + b;
        if (F.isFunction(e)) {
            if (null == c) throw "Constructor " + b + " need parameters";
            return e.apply(a, c)
        }
        if (null != c && 0 != c.length) throw "Constructor " + b + " does not need parameters";
        return e
    };
    H.getEnumConstructs = function (a) {
        return a.__constructs__.slice()
    };
    H["typeof"] = function (a) {
        switch (typeof a) {
        case "boolean":
            return v.TBool;
        case "string":
            return v.TClass(String);
        case "number":
            return Math.ceil(a) ==
                a % 2147483648 ? v.TInt : v.TFloat;
        case "object":
            if (null == a) return v.TNull;
            var b = a.__enum__;
            if (null != b) return v.TEnum(b);
            a = a instanceof Array && null == a.__enum__ ? Array : a.__class__;
            return null != a ? v.TClass(a) : v.TObject;
        case "function":
            return a.__name__ || a.__ename__ ? v.TObject : v.TFunction;
        case "undefined":
            return v.TNull;
        default:
            return v.TUnknown
        }
    };
    f.XmlType = {
        __ename__: ["XmlType"],
        __constructs__: []
    };
    var o = function () {};
    f.Xml = o;
    o.__name__ = ["Xml"];
    o.parse = function (a) {
        return ra.parse(a)
    };
    o.createElement = function (a) {
        var b =
            new o;
        b.nodeType = o.Element;
        b._children = [];
        b._attributes = new O;
        b.set_nodeName(a);
        return b
    };
    o.createPCData = function (a) {
        var b = new o;
        b.nodeType = o.PCData;
        b.set_nodeValue(a);
        return b
    };
    o.createCData = function (a) {
        var b = new o;
        b.nodeType = o.CData;
        b.set_nodeValue(a);
        return b
    };
    o.createComment = function (a) {
        var b = new o;
        b.nodeType = o.Comment;
        b.set_nodeValue(a);
        return b
    };
    o.createDocType = function (a) {
        var b = new o;
        b.nodeType = o.DocType;
        b.set_nodeValue(a);
        return b
    };
    o.createProcessingInstruction = function (a) {
        var b = new o;
        b.nodeType =
            o.ProcessingInstruction;
        b.set_nodeValue(a);
        return b
    };
    o.createDocument = function () {
        var a = new o;
        a.nodeType = o.Document;
        a._children = [];
        return a
    };
    o.prototype = {
        get_nodeName: function () {
            if (this.nodeType != o.Element) throw "bad nodeType";
            return this._nodeName
        },
        set_nodeName: function (a) {
            if (this.nodeType != o.Element) throw "bad nodeType";
            return this._nodeName = a
        },
        set_nodeValue: function (a) {
            if (this.nodeType == o.Element || this.nodeType == o.Document) throw "bad nodeType";
            return this._nodeValue = a
        },
        get: function (a) {
            if (this.nodeType !=
                o.Element) throw "bad nodeType";
            return this._attributes.get(a)
        },
        set: function (a, b) {
            if (this.nodeType != o.Element) throw "bad nodeType";
            this._attributes.set(a, b)
        },
        exists: function (a) {
            if (this.nodeType != o.Element) throw "bad nodeType";
            return this._attributes.exists(a)
        },
        elements: function () {
            if (null == this._children) throw "bad nodetype";
            return {
                cur: 0,
                x: this._children,
                hasNext: function () {
                    for (var a = this.cur, b = this.x.length; a < b && !(this.x[a].nodeType == o.Element);) a += 1;
                    this.cur = a;
                    return a < b
                },
                next: function () {
                    for (var a = this.cur,
                        b = this.x.length; a < b;) {
                        var c = this.x[a],
                            a = a + 1;
                        if (c.nodeType == o.Element) return this.cur = a, c
                    }
                    return null
                }
            }
        },
        firstElement: function () {
            if (null == this._children) throw "bad nodetype";
            for (var a = 0, b = this._children.length; a < b;) {
                var c = this._children[a];
                if (c.nodeType == o.Element) return c;
                a++
            }
            return null
        },
        addChild: function (a) {
            if (null == this._children) throw "bad nodetype";
            null != a._parent && p.remove(a._parent._children, a);
            a._parent = this;
            this._children.push(a)
        },
        __class__: o,
        __properties__: {
            set_nodeValue: "set_nodeValue",
            set_nodeName: "set_nodeName",
            get_nodeName: "get_nodeName"
        }
    };
    var ha = function () {};
    f["flambe.util.Disposable"] = ha;
    ha.__name__ = ["flambe", "util", "Disposable"];
    ha.prototype = {
        __class__: ha
    };
    var E = function () {};
    f["flambe.Component"] = E;
    E.__name__ = ["flambe", "Component"];
    E.__interfaces__ = [ha];
    E.prototype = {
        onAdded: function () {},
        onRemoved: function () {},
        onUpdate: function () {},
        dispose: function () {
            null != this.owner && this.owner.remove(this)
        },
        get_name: function () {
            return null
        },
        init: function (a, b) {
            this.owner = a;
            this.next = b
        },
        __class__: E,
        __properties__: {
            get_name: "get_name"
        }
    };
    var sa = function () {
        this._disposables = []
    };
    f["flambe.Disposer"] = sa;
    sa.__name__ = ["flambe", "Disposer"];
    sa.__super__ = E;
    sa.prototype = z(E.prototype, {
        get_name: function () {
            return "Disposer_2"
        },
        add: function (a) {
            this._disposables.push(a);
            return this
        },
        connect0: function (a, b) {
            this.add(a.connect(b));
            return this
        },
        connect1: function (a, b) {
            this.add(a.connect(b));
            return this
        },
        onRemoved: function () {
            this.freeDisposables()
        },
        dispose: function () {
            E.prototype.dispose.call(this);
            this.freeDisposables()
        },
        freeDisposables: function () {
            var a =
                this._disposables;
            this._disposables = [];
            for (var b = 0; b < a.length;) {
                var c = a[b];
                ++b;
                c.dispose()
            }
        },
        __class__: sa
    });
    var D = function () {
        this.parent = this.firstChild = this.next = this.firstComponent = null;
        this._compMap = {}
    };
    f["flambe.Entity"] = D;
    D.__name__ = ["flambe", "Entity"];
    D.__interfaces__ = [ha];
    D.prototype = {
        add: function (a) {
            null != a.owner && a.owner.remove(a);
            var b = a.get_name(),
                c = this._compMap[b];
            null != c && this.remove(c);
            this._compMap[b] = a;
            b = null;
            for (c = this.firstComponent; null != c;) b = c, c = c.next;
            null != b ? b.next = a : this.firstComponent =
                a;
            a.init(this, null);
            a.onAdded();
            return this
        },
        remove: function (a) {
            for (var b = null, c = this.firstComponent; null != c;) {
                var e = c.next;
                if (c == a) return null == b ? this.firstComponent = e : b.init(this, e), delete this._compMap[c.get_name()], c.onRemoved(), c.init(null, null), !0;
                b = c;
                c = e
            }
            return !1
        },
        addChild: function (a, b) {
            null == b && (b = !0);
            null != a.parent && a.parent.removeChild(a);
            a.parent = this;
            if (b) {
                for (var c = null, e = this.firstChild; null != e;) c = e, e = e.next;
                null != c ? c.next = a : this.firstChild = a
            } else a.next = this.firstChild, this.firstChild =
                a;
            return this
        },
        removeChild: function (a) {
            for (var b = null, c = this.firstChild; null != c;) {
                var e = c.next;
                if (c == a) {
                    null == b ? this.firstChild = e : b.next = e;
                    c.parent = null;
                    c.next = null;
                    break
                }
                b = c;
                c = e
            }
        },
        disposeChildren: function () {
            for (; null != this.firstChild;) this.firstChild.dispose()
        },
        dispose: function () {
            for (null != this.parent && this.parent.removeChild(this); null != this.firstComponent;) this.firstComponent.dispose();
            this.disposeChildren()
        },
        __class__: D
    };
    var tc = function () {};
    f["flambe.util.PackageLog"] = tc;
    tc.__name__ = ["flambe",
        "util", "PackageLog"
    ];
    var Rb = function () {};
    f["flambe.platform.Platform"] = Rb;
    Rb.__name__ = ["flambe", "platform", "Platform"];
    Rb.prototype = {
        __class__: Rb
    };
    var ta = function () {};
    f["flambe.platform.html.HtmlPlatform"] = ta;
    ta.__name__ = ["flambe", "platform", "html", "HtmlPlatform"];
    ta.__interfaces__ = [Rb];
    ta.prototype = {
        init: function () {
            var a = this;
            u.fixAndroidMath();
            var b = null;
            try {
                b = window.flambe.canvas
            } catch (c) {}
            b.setAttribute("tabindex", "0");
            b.style.outlineStyle = "none";
            b.style.webkitTapHighlightColor = "transparent";
            b.setAttribute("moz-opaque", "true");
            this._stage = new Ha(b);
            this._pointer = new Q;
            this._mouse = new gb(this._pointer, b);
            this._renderer = this.createRenderer(b);
            this.mainLoop = new Ia;
            this.musicPlaying = !1;
            this._canvas = b;
            this._container = b.parentElement;
            this._container.style.overflow = "visible";
            this._container.style.position = "relative";
            this._container.style.msTouchAction = "none";
            var e = 0,
                g = function (c) {
                    if (!(1E3 > c.timeStamp - e)) {
                        var g = b.getBoundingClientRect(),
                            d = a.getX(c, g),
                            g = a.getY(c, g);
                        switch (c.type) {
                        case "mousedown":
                            c.target ==
                                b && (c.preventDefault(), a._mouse.submitDown(d, g, c.button), b.focus());
                            break;
                        case "mousemove":
                            a._mouse.submitMove(d, g);
                            break;
                        case "mouseup":
                            a._mouse.submitUp(d, g, c.button);
                            break;
                        case "mousewheel":
                        case "DOMMouseScroll":
                            a._mouse.submitScroll(d, g, "mousewheel" == c.type ? c.wheelDelta / 40 : -c.detail) && c.preventDefault()
                        }
                    }
                };
            window.addEventListener("mousedown", g, !1);
            window.addEventListener("mousemove", g, !1);
            window.addEventListener("mouseup", g, !1);
            b.addEventListener("mousewheel", g, !1);
            b.addEventListener("DOMMouseScroll",
                g, !1);
            b.addEventListener("contextmenu", function (a) {
                a.preventDefault()
            }, !1);
            var h = "undefined" != typeof window.ontouchstart,
                g = "msMaxTouchPoints" in window.navigator && 1 < window.navigator.msMaxTouchPoints;
            if (h || g) {
                var d = new hb(this._pointer, h ? 4 : window.navigator.msMaxTouchPoints);
                this._touch = d;
                g = function (b) {
                    var c;
                    c = h ? b.changedTouches : [b];
                    var g = b.target.getBoundingClientRect();
                    e = b.timeStamp;
                    switch (b.type) {
                    case "touchstart":
                    case "MSPointerDown":
                    case "pointerdown":
                        b.preventDefault();
                        u.SHOULD_HIDE_MOBILE_BROWSER &&
                            u.hideMobileBrowser();
                        for (b = 0; b < c.length;) {
                            var j = c[b];
                            ++b;
                            var f = a.getX(j, g),
                                y = a.getY(j, g);
                            d.submitDown((h ? j.identifier : j.pointerId) | 0, f, y)
                        }
                        break;
                    case "touchmove":
                    case "MSPointerMove":
                    case "pointermove":
                        b.preventDefault();
                        for (b = 0; b < c.length;) j = c[b], ++b, f = a.getX(j, g), y = a.getY(j, g), d.submitMove((h ? j.identifier : j.pointerId) | 0, f, y);
                        break;
                    case "touchend":
                    case "touchcancel":
                    case "MSPointerUp":
                    case "pointerup":
                        for (b = 0; b < c.length;) j = c[b], ++b, f = a.getX(j, g), y = a.getY(j, g), d.submitUp((h ? j.identifier : j.pointerId) |
                            0, f, y)
                    }
                };
                h ? (b.addEventListener("touchstart", g, !1), b.addEventListener("touchmove", g, !1), b.addEventListener("touchend", g, !1), b.addEventListener("touchcancel", g, !1)) : (b.addEventListener("MSPointerDown", g, !1), b.addEventListener("MSPointerMove", g, !1), b.addEventListener("MSPointerUp", g, !1))
            } else this._touch = new ib;
            var j = window.onerror;
            window.onerror = function (a, b, c) {
                l.uncaughtError.emit(a);
                return null != j ? j(a, b, c) : !1
            };
            var f = u.loadExtension("hidden", window.document);
            null != f.value ? (g = function () {
                l.hidden.set__(F.field(window.document,
                    f.field))
            }, g(null), window.document.addEventListener(f.prefix + "visibilitychange", g, !1)) : (g = function (a) {
                l.hidden.set__("pagehide" == a.type)
            }, window.addEventListener("pageshow", g, !1), window.addEventListener("pagehide", g, !1));
            l.hidden.get_changed().connect(function (b) {
                b || (a._skipFrame = !0)
            });
            this._skipFrame = !1;
            this._lastUpdate = Date.now();
            var i = u.loadExtension("requestAnimationFrame").value,
                g = u.loadExtension("requestAnimationFrame").prefix;
            if (null != i && "webkit" != g) {
                var m = window.performance,
                    k = null != m && u.polyfill("now",
                        m);
                k ? this._lastUpdate = m.now() : null;
                var n = null,
                    n = function (c) {
                        a.update(k ? m.now() : c);
                        i(n, b)
                    };
                i(n, b)
            } else window.setInterval(function () {
                a.update(Date.now())
            }, 16);
            Ra.info("Initialized HTML platform", ["renderer", this._renderer.get_type()])
        },
        loadAssetPack: function (a) {
            return (new B(this, a)).promise
        },
        getStage: function () {
            return this._stage
        },
        getStorage: function () {
            if (null == this._storage) {
                var a = uc.getLocalStorage();
                this._storage = null != a ? new jb(a) : new kb
            }
            return this._storage
        },
        update: function (a) {
            var b = (a - this._lastUpdate) /
                1E3;
            this._lastUpdate = a;
            l.hidden._value || (this._skipFrame ? this._skipFrame = !1 : (this.mainLoop.update(b), this.mainLoop.render(this._renderer)))
        },
        getPointer: function () {
            return this._pointer
        },
        getWeb: function () {
            null == this._web && (this._web = new lb(this._container));
            return this._web
        },
        getRenderer: function () {
            return this._renderer
        },
        getX: function (a, b) {
            return (a.clientX - b.left) * this._stage.get_width() / b.width
        },
        getY: function (a, b) {
            return (a.clientY - b.top) * this._stage.get_height() / b.height
        },
        createRenderer: function (a) {
            return new Ja(a)
        },
        __class__: ta
    };
    var S = function (a, b) {
        this._value = a;
        this._changed = null != b ? new Sa(b) : null
    };
    f["flambe.util.Value"] = S;
    S.__name__ = ["flambe", "util", "Value"];
    S.prototype = {
        watch: function (a) {
            a(this._value, this._value);
            return this.get_changed().connect(a)
        },
        set__: function (a) {
            var b = this._value;
            a != b && (this._value = a, null != this._changed && this._changed.emit(a, b));
            return a
        },
        get_changed: function () {
            null == this._changed && (this._changed = new Sa);
            return this._changed
        },
        __class__: S,
        __properties__: {
            get_changed: "get_changed",
            set__: "set__"
        }
    };
    var Ka = function (a, b) {
        this._next = null;
        this._signal = a;
        this._listener = b;
        this.stayInList = !0
    };
    f["flambe.util.SignalConnection"] = Ka;
    Ka.__name__ = ["flambe", "util", "SignalConnection"];
    Ka.__interfaces__ = [ha];
    Ka.prototype = {
        once: function () {
            this.stayInList = !1;
            return this
        },
        dispose: function () {
            null != this._signal && (this._signal.disconnect(this), this._signal = null)
        },
        __class__: Ka
    };
    var P = function (a) {
        this._head = null != a ? new Ka(this, a) : null;
        this._deferredTasks = null
    };
    f["flambe.util.SignalBase"] = P;
    P.__name__ = ["flambe", "util",
        "SignalBase"
    ];
    P.prototype = {
        connectImpl: function (a, b) {
            var c = this,
                e = new Ka(this, a);
            this._head == P.DISPATCHING_SENTINEL ? this.defer(function () {
                c.listAdd(e, b)
            }) : this.listAdd(e, b);
            return e
        },
        disconnect: function (a) {
            var b = this;
            this._head == P.DISPATCHING_SENTINEL ? this.defer(function () {
                b.listRemove(a)
            }) : this.listRemove(a)
        },
        defer: function (a) {
            for (var b = null, c = this._deferredTasks; null != c;) b = c, c = c.next;
            a = new Sb(a);
            null != b ? b.next = a : this._deferredTasks = a
        },
        willEmit: function () {
            var a = this._head;
            this._head = P.DISPATCHING_SENTINEL;
            return a
        },
        didEmit: function (a) {
            this._head = a;
            a = this._deferredTasks;
            for (this._deferredTasks = null; null != a;) a.fn(), a = a.next
        },
        listAdd: function (a, b) {
            if (b) a._next = this._head, this._head = a;
            else {
                for (var c = null, e = this._head; null != e;) c = e, e = e._next;
                null != c ? c._next = a : this._head = a
            }
        },
        listRemove: function (a) {
            for (var b = null, c = this._head; null != c;) {
                if (c == a) {
                    a = c._next;
                    null == b ? this._head = a : b._next = a;
                    break
                }
                b = c;
                c = c._next
            }
        },
        __class__: P
    };
    var Sa = function (a) {
        P.call(this, a)
    };
    f["flambe.util.Signal2"] = Sa;
    Sa.__name__ = ["flambe", "util",
        "Signal2"
    ];
    Sa.__super__ = P;
    Sa.prototype = z(P.prototype, {
        connect: function (a, b) {
            null == b && (b = !1);
            return this.connectImpl(a, b)
        },
        emit: function (a, b) {
            var c = this;
            this._head == P.DISPATCHING_SENTINEL ? this.defer(function () {
                c.emitImpl(a, b)
            }) : this.emitImpl(a, b)
        },
        emitImpl: function (a, b) {
            for (var c = this.willEmit(), e = c; null != e;) e._listener(a, b), e.stayInList || e.dispose(), e = e._next;
            this.didEmit(c)
        },
        __class__: Sa
    });
    var G = function (a) {
        P.call(this, a)
    };
    f["flambe.util.Signal1"] = G;
    G.__name__ = ["flambe", "util", "Signal1"];
    G.__super__ =
        P;
    G.prototype = z(P.prototype, {
        connect: function (a, b) {
            null == b && (b = !1);
            return this.connectImpl(a, b)
        },
        emit: function (a) {
            var b = this;
            this._head == P.DISPATCHING_SENTINEL ? this.defer(function () {
                b.emitImpl(a)
            }) : this.emitImpl(a)
        },
        emitImpl: function (a) {
            for (var b = this.willEmit(), c = b; null != c;) c._listener(a), c.stayInList || c.dispose(), c = c._next;
            this.didEmit(b)
        },
        __class__: G
    });
    var n = function (a, b) {
        this._behavior = null;
        S.call(this, a, b)
    };
    f["flambe.animation.AnimatedFloat"] = n;
    n.__name__ = ["flambe", "animation", "AnimatedFloat"];
    n.__super__ = S;
    n.prototype = z(S.prototype, {
        set__: function (a) {
            this._behavior = null;
            return S.prototype.set__.call(this, a)
        },
        update: function (a) {
            null != this._behavior && (S.prototype.set__.call(this, this._behavior.update(a)), this._behavior.isComplete() && (this._behavior = null))
        },
        animateTo: function (a, b, c) {
            this.set_behavior(new La(this._value, a, b, c))
        },
        animateBy: function (a, b, c) {
            this.set_behavior(new La(this._value, this._value + a, b, c))
        },
        set_behavior: function (a) {
            this._behavior = a;
            this.update(0);
            return a
        },
        __class__: n,
        __properties__: z(S.prototype.__properties__, {
            set_behavior: "set_behavior"
        })
    });
    var l = function () {};
    f["flambe.System"] = l;
    l.__name__ = ["flambe", "System"];
    l.init = function () {
        l._calledInit || (l._platform.init(), l._calledInit = !0)
    };
    l.loadAssetPack = function (a) {
        return l._platform.loadAssetPack(a)
    };
    var Ra = function () {};
    f["flambe.Log"] = Ra;
    Ra.__name__ = ["flambe", "Log"];
    Ra.info = function () {
        null
    };
    Ra.__super__ = tc;
    Ra.prototype = z(tc.prototype, {
        __class__: Ra
    });
    var Tb = function () {
        this._realDt = 0
    };
    f["flambe.SpeedAdjuster"] = Tb;
    Tb.__name__ = ["flambe", "SpeedAdjuster"];
    Tb.__super__ = E;
    Tb.prototype = z(E.prototype, {
        get_name: function () {
            return "SpeedAdjuster_6"
        },
        onUpdate: function (a) {
            0 < this._realDt && (a = this._realDt, this._realDt = 0);
            this.scale.update(a)
        },
        __class__: Tb
    });
    var mb = function () {};
    f["flambe.animation.Behavior"] = mb;
    mb.__name__ = ["flambe", "animation", "Behavior"];
    mb.prototype = {
        __class__: mb
    };
    var q = function () {};
    f["flambe.animation.Ease"] = q;
    q.__name__ = ["flambe", "animation", "Ease"];
    q.linear = function (a) {
        return a
    };
    q.quadIn = function (a) {
        return a *
            a
    };
    q.quadOut = function (a) {
        return a * (2 - a)
    };
    q.cubeIn = function (a) {
        return a * a * a
    };
    q.cubeOut = function (a) {
        return 1 + --a * a * a
    };
    q.bounceOut = function (a) {
        return 0.36363636363636365 > a ? 7.5625 * a * a : 0.7272727272727273 > a ? 7.5625 * (a - 0.5454545454545454) * (a - 0.5454545454545454) + 0.75 : 0.9090909090909091 > a ? 7.5625 * (a - 0.8181818181818182) * (a - 0.8181818181818182) + 0.9375 : 7.5625 * (a - 0.9545454545454546) * (a - 0.9545454545454546) + 0.984375
    };
    q.circInOut = function (a) {
        return 0.5 >= a ? (Math.sqrt(1 - 4 * a * a) - 1) / -2 : (Math.sqrt(1 - (2 * a - 2) * (2 * a - 2)) + 1) / 2
    };
    q.backIn = function (a) {
        return a * a * (2.70158 * a - 1.70158)
    };
    q.backOut = function (a) {
        return 1 - --a * a * (-2.70158 * a - 1.70158)
    };
    q.backInOut = function (a) {
        a *= 2;
        if (1 > a) return a * a * (2.70158 * a - 1.70158) / 2;
        a -= 2;
        return (1 - a * a * (-2.70158 * a - 1.70158)) / 2 + 0.5
    };
    var Ta = function (a, b) {
        this.base = a;
        this.strength = b
    };
    f["flambe.animation.Jitter"] = Ta;
    Ta.__name__ = ["flambe", "animation", "Jitter"];
    Ta.__interfaces__ = [mb];
    Ta.prototype = {
        update: function () {
            return this.base + 2 * Math.random() * this.strength - this.strength
        },
        isComplete: function () {
            return !1
        },
        __class__: Ta
    };
    var La = function (a, b, c, e) {
        this._from = a;
        this._to = b;
        this._duration = c;
        this.elapsed = 0;
        this._easing = null != e ? e : q.linear
    };
    f["flambe.animation.Tween"] = La;
    La.__name__ = ["flambe", "animation", "Tween"];
    La.__interfaces__ = [mb];
    La.prototype = {
        update: function (a) {
            this.elapsed += a;
            return this.elapsed >= this._duration ? this._to : this._from + (this._to - this._from) * this._easing(this.elapsed / this._duration)
        },
        isComplete: function () {
            return this.elapsed >= this._duration
        },
        __class__: La
    };
    var za = function () {};
    f["flambe.asset.Asset"] =
        za;
    za.__name__ = ["flambe", "asset", "Asset"];
    za.__interfaces__ = [ha];
    za.prototype = {
        __class__: za
    };
    var k = f["flambe.asset.AssetFormat"] = {
        __ename__: ["flambe", "asset", "AssetFormat"],
        __constructs__: "WEBP,JXR,PNG,JPG,GIF,DDS,PVR,PKM,MP3,M4A,OPUS,OGG,WAV,Data".split(",")
    };
    k.WEBP = ["WEBP", 0];
    k.WEBP.toString = s;
    k.WEBP.__enum__ = k;
    k.JXR = ["JXR", 1];
    k.JXR.toString = s;
    k.JXR.__enum__ = k;
    k.PNG = ["PNG", 2];
    k.PNG.toString = s;
    k.PNG.__enum__ = k;
    k.JPG = ["JPG", 3];
    k.JPG.toString = s;
    k.JPG.__enum__ = k;
    k.GIF = ["GIF", 4];
    k.GIF.toString = s;
    k.GIF.__enum__ =
        k;
    k.DDS = ["DDS", 5];
    k.DDS.toString = s;
    k.DDS.__enum__ = k;
    k.PVR = ["PVR", 6];
    k.PVR.toString = s;
    k.PVR.__enum__ = k;
    k.PKM = ["PKM", 7];
    k.PKM.toString = s;
    k.PKM.__enum__ = k;
    k.MP3 = ["MP3", 8];
    k.MP3.toString = s;
    k.MP3.__enum__ = k;
    k.M4A = ["M4A", 9];
    k.M4A.toString = s;
    k.M4A.__enum__ = k;
    k.OPUS = ["OPUS", 10];
    k.OPUS.toString = s;
    k.OPUS.__enum__ = k;
    k.OGG = ["OGG", 11];
    k.OGG.toString = s;
    k.OGG.__enum__ = k;
    k.WAV = ["WAV", 12];
    k.WAV.toString = s;
    k.WAV.__enum__ = k;
    k.Data = ["Data", 13];
    k.Data.toString = s;
    k.Data.__enum__ = k;
    var Ub = function (a, b, c, e) {
        this.name = a;
        this.url = b;
        this.format = c;
        this.bytes = e
    };
    f["flambe.asset.AssetEntry"] = Ub;
    Ub.__name__ = ["flambe", "asset", "AssetEntry"];
    Ub.prototype = {
        __class__: Ub
    };
    var nb = function () {};
    f["flambe.asset.AssetPack"] = nb;
    nb.__name__ = ["flambe", "asset", "AssetPack"];
    nb.__interfaces__ = [ha];
    nb.prototype = {
        __class__: nb
    };
    var ob = function () {};
    f["flambe.asset.File"] = ob;
    ob.__name__ = ["flambe", "asset", "File"];
    ob.__interfaces__ = [za];
    ob.prototype = {
        __class__: ob
    };
    var Y = function () {
        this._localBase = this._remoteBase = null;
        this._entries = []
    };
    f["flambe.asset.Manifest"] =
        Y;
    Y.__name__ = ["flambe", "asset", "Manifest"];
    Y.fromAssets = function (a, b) {
        null == b && (b = !0);
        var c = F.field(vc.getType(Y).assets[0], a);
        if (null == c) {
            if (b) throw M.withFields("Missing asset pack", ["name", a]);
            return null
        }
        var e = new Y;
        e.set_localBase("assets");
        for (var g = 0; g < c.length;) {
            var d = c[g];
            ++g;
            var f = d.name,
                j = a + "/" + f + "?v=" + x.string(d.md5),
                y = Y.inferFormat(f);
            y != k.Data && (f = M.removeFileExtension(f));
            e.add(f, j, d.bytes, y)
        }
        return e
    };
    Y.inferFormat = function (a) {
        a = M.getUrlExtension(a);
        if (null != a) switch (a.toLowerCase()) {
        case "gif":
            return k.GIF;
        case "jpg":
        case "jpeg":
            return k.JPG;
        case "jxr":
        case "wdp":
            return k.JXR;
        case "png":
            return k.PNG;
        case "webp":
            return k.WEBP;
        case "dds":
            return k.DDS;
        case "pvr":
            return k.PVR;
        case "pkm":
            return k.PKM;
        case "m4a":
            return k.M4A;
        case "mp3":
            return k.MP3;
        case "ogg":
            return k.OGG;
        case "opus":
            return k.OPUS;
        case "wav":
            return k.WAV
        } else null;
        return k.Data
    };
    Y.prototype = {
        add: function (a, b, c, e) {
            null == c && (c = 0);
            null == e && (e = Y.inferFormat(b));
            a = new Ub(a, b, e, c);
            this._entries.push(a);
            return a
        },
        iterator: function () {
            return p.iter(this._entries)
        },
        getFullURL: function (a) {
            var b;
            b = null != this.get_remoteBase() && Y._supportsCrossOrigin ? this.get_remoteBase() : this.get_localBase();
            return null != b ? M.joinPath(b, a.url) : a.url
        },
        get_localBase: function () {
            return this._localBase
        },
        set_localBase: function (a) {
            null != a && wc.that(!I.startsWith(a, "http://") && !I.startsWith(a, "https://"), "localBase must be a path on the same domain, NOT starting with http(s)://", null);
            return this._localBase = a
        },
        get_remoteBase: function () {
            return this._remoteBase
        },
        __class__: Y,
        __properties__: {
            get_remoteBase: "get_remoteBase",
            set_localBase: "set_localBase",
            get_localBase: "get_localBase"
        }
    };
    var T = f["flambe.display.BlendMode"] = {
        __ename__: ["flambe", "display", "BlendMode"],
        __constructs__: ["Normal", "Add", "Mask", "Copy"]
    };
    T.Normal = ["Normal", 0];
    T.Normal.toString = s;
    T.Normal.__enum__ = T;
    T.Add = ["Add", 1];
    T.Add.toString = s;
    T.Add.__enum__ = T;
    T.Mask = ["Mask", 2];
    T.Mask.toString = s;
    T.Mask.__enum__ = T;
    T.Copy = ["Copy", 3];
    T.Copy.toString = s;
    T.Copy.__enum__ = T;
    var ia = f["flambe.display.EmitterType"] = {
        __ename__: ["flambe", "display", "EmitterType"],
        __constructs__: ["Gravity",
            "Radial"
        ]
    };
    ia.Gravity = ["Gravity", 0];
    ia.Gravity.toString = s;
    ia.Gravity.__enum__ = ia;
    ia.Radial = ["Radial", 1];
    ia.Radial.toString = s;
    ia.Radial.__enum__ = ia;
    var w = function (a, b) {
        for (var c = 0, e = 0, g = o.parse(a.getFile(b + ".pex").toString()).firstElement().elements(); g.hasNext();) {
            var d = g.next();
            switch (d.get_nodeName().toLowerCase()) {
            case "texture":
                this.texture = a.getTexture(M.removeFileExtension(d.get("name")));
                break;
            case "angle":
                this.angle = w.getFloat(d, "value");
                break;
            case "anglevariance":
                this.angleVariance = w.getFloat(d,
                    "value");
                break;
            case "blendfuncdestination":
                e = x["int"](w.getFloat(d, "value"));
                break;
            case "blendfuncsource":
                c = x["int"](w.getFloat(d, "value"));
                break;
            case "duration":
                this.duration = w.getFloat(d, "value");
                break;
            case "emittertype":
                this.type = 0 == x["int"](w.getFloat(d, "value")) ? ia.Gravity : ia.Radial;
                break;
            case "finishcolor":
                this.alphaEnd = w.getFloat(d, "alpha");
                break;
            case "finishcolorvariance":
                this.alphaEndVariance = w.getFloat(d, "alpha");
                break;
            case "finishparticlesize":
                this.sizeEnd = w.getFloat(d, "value");
                break;
            case "finishparticlesizevariance":
                this.sizeEndVariance =
                    w.getFloat(d, "value");
                break;
            case "gravity":
                this.gravityX = w.getFloat(d, "x");
                this.gravityY = w.getFloat(d, "y");
                break;
            case "maxparticles":
                this.maxParticles = x["int"](w.getFloat(d, "value"));
                break;
            case "maxradius":
                this.maxRadius = w.getFloat(d, "value");
                break;
            case "maxradiusvariance":
                this.maxRadiusVariance = w.getFloat(d, "value");
                break;
            case "minradius":
                this.minRadius = w.getFloat(d, "value");
                break;
            case "particlelifespan":
                this.lifespan = w.getFloat(d, "value");
                break;
            case "particlelifespanvariance":
                this.lifespanVariance =
                    w.getFloat(d, "value");
                break;
            case "radialaccelvariance":
                this.radialAccelVariance = w.getFloat(d, "value");
                break;
            case "radialacceleration":
                this.radialAccel = w.getFloat(d, "value");
                break;
            case "rotatepersecond":
                this.rotatePerSecond = w.getFloat(d, "value");
                break;
            case "rotatepersecondvariance":
                this.rotatePerSecondVariance = w.getFloat(d, "value");
                break;
            case "rotationend":
                this.rotationEnd = w.getFloat(d, "value");
                break;
            case "rotationendvariance":
                this.rotationEndVariance = w.getFloat(d, "value");
                break;
            case "rotationstart":
                this.rotationStart =
                    w.getFloat(d, "value");
                break;
            case "rotationstartvariance":
                this.rotationStartVariance = w.getFloat(d, "value");
                break;
            case "sourcepositionvariance":
                this.emitXVariance = w.getFloat(d, "x");
                this.emitYVariance = w.getFloat(d, "y");
                break;
            case "speed":
                this.speed = w.getFloat(d, "value");
                break;
            case "speedvariance":
                this.speedVariance = w.getFloat(d, "value");
                break;
            case "startcolor":
                this.alphaStart = w.getFloat(d, "alpha");
                break;
            case "startcolorvariance":
                this.alphaStartVariance = w.getFloat(d, "alpha");
                break;
            case "startparticlesize":
                this.sizeStart =
                    w.getFloat(d, "value");
                break;
            case "startparticlesizevariance":
                this.sizeStartVariance = w.getFloat(d, "value");
                break;
            case "tangentialaccelvariance":
                this.tangentialAccelVariance = w.getFloat(d, "value");
                break;
            case "tangentialacceleration":
                this.tangentialAccel = w.getFloat(d, "value")
            }
        }
        0 >= this.lifespan && (this.lifespan = this.duration);
        1 == c && 1 == e ? this.blendMode = T.Add : 1 == c && 771 == e ? this.blendMode = null : (0 != c || 0 != e) && null
    };
    f["flambe.display.EmitterMold"] = w;
    w.__name__ = ["flambe", "display", "EmitterMold"];
    w.getFloat = function (a,
        b) {
        return x.parseFloat(a.get(b))
    };
    w.prototype = {
        createEmitter: function () {
            return new J(this)
        },
        __class__: w
    };
    var r = function () {
        this.blendMode = this.scissor = null;
        var a = this;
        this._flags = 139;
        this._localMatrix = new Vb;
        var b = function () {
            a._flags |= 12
        };
        this.x = new n(0, b);
        this.y = new n(0, b);
        this.rotation = new n(0, b);
        this.scaleX = new n(1, b);
        this.scaleY = new n(1, b);
        this.anchorX = new n(0, b);
        this.anchorY = new n(0, b);
        this.alpha = new n(1)
    };
    f["flambe.display.Sprite"] = r;
    r.__name__ = ["flambe", "display", "Sprite"];
    r.hitTest = function (a,
        b, c) {
        var e = a._compMap.Sprite_0;
        if (null != e) {
            if (3 != (e._flags & 3)) return null;
            e.getLocalMatrix().inverseTransform(b, c, r._scratchPoint) && (b = r._scratchPoint.x, c = r._scratchPoint.y);
            var g = e.scissor;
            if (null != g && !g.contains(b, c)) return null
        }
        a = r.hitTestBackwards(a.firstChild, b, c);
        return null != a ? a : null != e && e.containsLocal(b, c) ? e : null
    };
    r.render = function (a, b) {
        var c = a._compMap.Sprite_0;
        if (null != c) {
            var e = c.alpha._value;
            if (0 == (c._flags & 1) || 0 >= e) return;
            b.save();
            1 > e && b.multiplyAlpha(e);
            null != c.blendMode && b.setBlendMode(c.blendMode);
            var e = c.getLocalMatrix(),
                g = e.m02,
                d = e.m12;
            0 != (c._flags & 128) && (g = Math.round(g), d = Math.round(d));
            b.transform(e.m00, e.m10, e.m01, e.m11, g, d);
            e = c.scissor;
            null != e && b.applyScissor(e.x, e.y, e.width, e.height);
            c.draw(b)
        }
        e = a._compMap.Director_5;
        if (null != e) {
            e = e.occludedScenes;
            for (g = 0; g < e.length;) d = e[g], ++g, r.render(d, b)
        }
        for (e = a.firstChild; null != e;) g = e.next, r.render(e, b), e = g;
        null != c && b.restore()
    };
    r.hitTestBackwards = function (a, b, c) {
        if (null != a) {
            var e = r.hitTestBackwards(a.next, b, c);
            return null != e ? e : r.hitTest(a, b, c)
        }
        return null
    };
    r.__super__ = E;
    r.prototype = z(E.prototype, {
        get_name: function () {
            return "Sprite_0"
        },
        getNaturalWidth: function () {
            return 0
        },
        getNaturalHeight: function () {
            return 0
        },
        containsLocal: function (a, b) {
            return 0 <= a && a < this.getNaturalWidth() && 0 <= b && b < this.getNaturalHeight()
        },
        getLocalMatrix: function () {
            0 != (this._flags & 4) && (this._flags &= -5, this._localMatrix.compose(this.x._value, this.y._value, this.scaleX._value, this.scaleY._value, 3.141592653589793 * this.rotation._value / 180), this._localMatrix.translate(-this.anchorX._value, -this.anchorY._value));
            return this._localMatrix
        },
        setAnchor: function (a, b) {
            this.anchorX.set__(a);
            this.anchorY.set__(b);
            return this
        },
        centerAnchor: function () {
            this.anchorX.set__(this.getNaturalWidth() / 2);
            this.anchorY.set__(this.getNaturalHeight() / 2);
            return this
        },
        setXY: function (a, b) {
            this.x.set__(a);
            this.y.set__(b);
            return this
        },
        setAlpha: function (a) {
            this.alpha.set__(a);
            return this
        },
        setRotation: function (a) {
            this.rotation.set__(a);
            return this
        },
        setScale: function (a) {
            this.scaleX.set__(a);
            this.scaleY.set__(a);
            return this
        },
        setScaleXY: function (a, b) {
            this.scaleX.set__(a);
            this.scaleY.set__(b);
            return this
        },
        disablePointer: function () {
            this.set_pointerEnabled(!1);
            return this
        },
        onAdded: function () {
            0 != (this._flags & 256) && this.connectHover()
        },
        onRemoved: function () {
            null != this._hoverConnection && (this._hoverConnection.dispose(), this._hoverConnection = null)
        },
        onUpdate: function (a) {
            this.x.update(a);
            this.y.update(a);
            this.rotation.update(a);
            this.scaleX.update(a);
            this.scaleY.update(a);
            this.alpha.update(a);
            this.anchorX.update(a);
            this.anchorY.update(a)
        },
        draw: function () {},
        getParentSprite: function () {
            if (null == this.owner) return null;
            for (var a = this.owner.parent; null != a;) {
                var b = a._compMap.Sprite_0;
                if (null != b) return b;
                a = a.parent
            }
            return null
        },
        get_pointerDown: function () {
            null == this._pointerDown && (this._pointerDown = new G);
            return this._pointerDown
        },
        get_pointerMove: function () {
            null == this._pointerMove && (this._pointerMove = new G);
            return this._pointerMove
        },
        get_pointerUp: function () {
            null == this._pointerUp && (this._pointerUp = new G);
            return this._pointerUp
        },
        connectHover: function () {
            var a =
                this;
            null == this._hoverConnection && (this._hoverConnection = l._platform.getPointer().move.connect(function (b) {
                for (var c = b.hit; null != c;) {
                    if (c == a) return;
                    c = c.getParentSprite()
                }
                null != a._pointerOut && 0 != (a._flags & 256) && a._pointerOut.emit(b);
                a._flags &= -257;
                a._hoverConnection.dispose();
                a._hoverConnection = null
            }))
        },
        set_visible: function (a) {
            this._flags = pb.set(this._flags, 1, a);
            return a
        },
        set_pointerEnabled: function (a) {
            this._flags = pb.set(this._flags, 2, a);
            return a
        },
        onPointerDown: function (a) {
            this.onHover(a);
            null != this._pointerDown &&
                this._pointerDown.emit(a)
        },
        onPointerMove: function (a) {
            this.onHover(a);
            null != this._pointerMove && this._pointerMove.emit(a)
        },
        onHover: function (a) {
            if (0 == (this._flags & 256) && (this._flags |= 256, null != this._pointerIn || null != this._pointerOut)) null != this._pointerIn && this._pointerIn.emit(a), this.connectHover()
        },
        onPointerUp: function (a) {
            switch (a.source[1]) {
            case 1:
                null != this._pointerOut && 0 != (this._flags & 256) && this._pointerOut.emit(a), this._flags &= -257, null != this._hoverConnection && (this._hoverConnection.dispose(),
                    this._hoverConnection = null)
            }
            null != this._pointerUp && this._pointerUp.emit(a)
        },
        __class__: r,
        __properties__: z(E.prototype.__properties__, {
            set_pointerEnabled: "set_pointerEnabled",
            set_visible: "set_visible",
            get_pointerUp: "get_pointerUp",
            get_pointerMove: "get_pointerMove",
            get_pointerDown: "get_pointerDown"
        })
    });
    var J = function (a) {
        this._emitElapsed = this._totalElapsed = 0;
        this.enabled = !0;
        this.numParticles = 0;
        r.call(this);
        this.texture = a.texture;
        this.blendMode = a.blendMode;
        this.type = a.type;
        this.alphaEnd = new n(a.alphaEnd);
        this.alphaEndVariance = new n(a.alphaEndVariance);
        this.alphaStart = new n(a.alphaStart);
        this.alphaStartVariance = new n(a.alphaStartVariance);
        this.angle = new n(a.angle);
        this.angleVariance = new n(a.angleVariance);
        this.duration = a.duration;
        this.emitXVariance = new n(a.emitXVariance);
        this.emitYVariance = new n(a.emitYVariance);
        this.gravityX = new n(a.gravityX);
        this.gravityY = new n(a.gravityY);
        this.maxRadius = new n(a.maxRadius);
        this.maxRadiusVariance = new n(a.maxRadiusVariance);
        this.minRadius = new n(a.minRadius);
        this.lifespan =
            new n(a.lifespan);
        this.lifespanVariance = new n(a.lifespanVariance);
        this.radialAccel = new n(a.radialAccel);
        this.radialAccelVariance = new n(a.radialAccelVariance);
        this.rotatePerSecond = new n(a.rotatePerSecond);
        this.rotatePerSecondVariance = new n(a.rotatePerSecondVariance);
        this.rotationEnd = new n(a.rotationEnd);
        this.rotationEndVariance = new n(a.rotationEndVariance);
        this.rotationStart = new n(a.rotationStart);
        this.rotationStartVariance = new n(a.rotationStartVariance);
        this.sizeEnd = new n(a.sizeEnd);
        this.sizeEndVariance =
            new n(a.sizeEndVariance);
        this.sizeStart = new n(a.sizeStart);
        this.sizeStartVariance = new n(a.sizeStartVariance);
        this.speed = new n(a.speed);
        this.speedVariance = new n(a.speedVariance);
        this.tangentialAccel = new n(a.tangentialAccel);
        this.tangentialAccelVariance = new n(a.tangentialAccelVariance);
        this.emitX = new n(0);
        this.emitY = new n(0);
        this._particles = Array(a.maxParticles);
        for (var a = 0, b = this._particles.length; a < b;) this._particles[a] = new Wb, ++a
    };
    f["flambe.display.EmitterSprite"] = J;
    J.__name__ = ["flambe", "display",
        "EmitterSprite"
    ];
    J.random = function (a, b) {
        0 != b && (a += b * (2 * Math.random() - 1));
        return a
    };
    J.__super__ = r;
    J.prototype = z(r.prototype, {
        restart: function () {
            this.enabled = !0;
            this._totalElapsed = 0
        },
        onUpdate: function (a) {
            r.prototype.onUpdate.call(this, a);
            this.alphaEnd.update(a);
            this.alphaEndVariance.update(a);
            this.alphaStart.update(a);
            this.alphaStartVariance.update(a);
            this.angle.update(a);
            this.angleVariance.update(a);
            this.emitX.update(a);
            this.emitXVariance.update(a);
            this.emitY.update(a);
            this.emitYVariance.update(a);
            this.gravityX.update(a);
            this.gravityY.update(a);
            this.lifespan.update(a);
            this.lifespanVariance.update(a);
            this.maxRadius.update(a);
            this.maxRadiusVariance.update(a);
            this.minRadius.update(a);
            this.radialAccel.update(a);
            this.radialAccelVariance.update(a);
            this.rotatePerSecond.update(a);
            this.rotatePerSecondVariance.update(a);
            this.rotationEnd.update(a);
            this.rotationEndVariance.update(a);
            this.rotationStart.update(a);
            this.rotationStartVariance.update(a);
            this.sizeEnd.update(a);
            this.sizeEndVariance.update(a);
            this.sizeStart.update(a);
            this.sizeStartVariance.update(a);
            this.speed.update(a);
            this.speedVariance.update(a);
            this.tangentialAccel.update(a);
            this.tangentialAccelVariance.update(a);
            for (var b = this.type == ia.Gravity, c = 0; c < this.numParticles;) {
                var e = this._particles[c];
                if (e.life > a) {
                    if (b) {
                        e.x += e.velX * a;
                        e.y += e.velY * a;
                        var g = this.gravityX._value,
                            d = -this.gravityY._value;
                        if (0 != e.radialAccel || 0 != e.tangentialAccel) var f = e.x - e.emitX,
                            j = e.y - e.emitY,
                            y = Math.sqrt(f * f + j * j),
                            f = f / y,
                            j = j / y,
                            g = g + f * e.radialAccel,
                            d = d + j * e.radialAccel,
                            y = f,
                            g = g + -j * e.tangentialAccel,
                            d = d + y * e.tangentialAccel;
                        e.velX += g * a;
                        e.velY += d * a
                    } else e.radialRotation += e.velRadialRotation * a, e.radialRadius += e.velRadialRadius * a, g = e.radialRadius, e.x = this.emitX._value - Math.cos(e.radialRotation) * g, e.y = this.emitY._value - Math.sin(e.radialRotation) * g, g < this.minRadius._value && (e.life = 0);
                    e.scale += e.velScale * a;
                    e.rotation += e.velRotation * a;
                    e.alpha += e.velAlpha * a;
                    e.life -= a;
                    ++c
                } else --this.numParticles, c != this.numParticles && (this._particles[c] = this._particles[this.numParticles], this._particles[this.numParticles] =
                    e)
            }
            if (this.enabled) {
                if (0 < this.duration && (this._totalElapsed += a, this._totalElapsed >= this.duration)) {
                    this.enabled = !1;
                    return
                }
                b = this.lifespan._value / this._particles.length;
                for (this._emitElapsed += a; this._emitElapsed >= b;) this.numParticles < this._particles.length && this.initParticle(this._particles[this.numParticles]) && ++this.numParticles, this._emitElapsed -= b
            }
        },
        draw: function (a) {
            for (var b = -this.texture.get_width() / 2, c = 0, e = this.numParticles; c < e;) {
                var g = this._particles[c];
                a.save();
                a.translate(g.x, g.y);
                1 > g.alpha &&
                    a.multiplyAlpha(g.alpha);
                0 != g.rotation && a.rotate(g.rotation);
                1 != g.scale && a.scale(g.scale, g.scale);
                a.drawTexture(this.texture, b, b);
                a.restore();
                ++c
            }
        },
        initParticle: function (a) {
            a.life = J.random(this.lifespan._value, this.lifespanVariance._value);
            if (0 >= a.life) return !1;
            a.emitX = this.emitX._value;
            a.emitY = this.emitY._value;
            var b = -Aa.toRadians(J.random(this.angle._value, this.angleVariance._value)),
                c = J.random(this.speed._value, this.speedVariance._value);
            a.velX = c * Math.cos(b);
            a.velY = c * Math.sin(b);
            a.radialAccel =
                J.random(this.radialAccel._value, this.radialAccelVariance._value);
            a.tangentialAccel = J.random(this.tangentialAccel._value, this.tangentialAccelVariance._value);
            a.radialRadius = J.random(this.maxRadius._value, this.maxRadiusVariance._value);
            a.velRadialRadius = -a.radialRadius / a.life;
            a.radialRotation = b;
            a.velRadialRotation = Aa.toRadians(J.random(this.rotatePerSecond._value, this.rotatePerSecondVariance._value));
            this.type == ia.Gravity ? (a.x = J.random(this.emitX._value, this.emitXVariance._value), a.y = J.random(this.emitY._value,
                this.emitYVariance._value)) : (b = a.radialRadius, a.x = this.emitX._value - Math.cos(a.radialRotation) * b, a.y = this.emitY._value - Math.sin(a.radialRotation) * b);
            c = this.texture.get_width();
            b = J.random(this.sizeStart._value, this.sizeStartVariance._value) / c;
            c = J.random(this.sizeEnd._value, this.sizeEndVariance._value) / c;
            a.scale = b;
            a.velScale = (c - b) / a.life;
            b = J.random(this.rotationStart._value, this.rotationStartVariance._value);
            c = J.random(this.rotationEnd._value, this.rotationEndVariance._value);
            a.rotation = b;
            a.velRotation =
                (c - b) / a.life;
            b = J.random(this.alphaStart._value, this.alphaStartVariance._value);
            c = J.random(this.alphaEnd._value, this.alphaEndVariance._value);
            a.alpha = b;
            a.velAlpha = (c - b) / a.life;
            return !0
        },
        __class__: J
    });
    var Wb = function () {
        this.emitX = this.emitY = this.x = this.velX = this.y = this.velY = this.radialRadius = this.velRadialRadius = this.radialRotation = this.velRadialRotation = this.radialAccel = this.tangentialAccel = this.scale = this.velScale = this.rotation = this.velRotation = this.alpha = this.velAlpha = this.life = 0
    };
    f["flambe.display._EmitterSprite.Particle"] =
        Wb;
    Wb.__name__ = ["flambe", "display", "_EmitterSprite", "Particle"];
    Wb.prototype = {
        __class__: Wb
    };
    var qb = function (a, b, c) {
        r.call(this);
        this.color = a;
        this.width = new n(b);
        this.height = new n(c)
    };
    f["flambe.display.FillSprite"] = qb;
    qb.__name__ = ["flambe", "display", "FillSprite"];
    qb.__super__ = r;
    qb.prototype = z(r.prototype, {
        draw: function (a) {
            a.fillRect(this.color, 0, 0, this.width._value, this.height._value)
        },
        getNaturalWidth: function () {
            return this.width._value
        },
        getNaturalHeight: function () {
            return this.height._value
        },
        setSize: function (a,
            b) {
            this.width.set__(a);
            this.height.set__(b);
            return this
        },
        onUpdate: function (a) {
            r.prototype.onUpdate.call(this, a);
            this.width.update(a);
            this.height.update(a)
        },
        __class__: qb
    });
    var rb = function (a) {
        this._kernings = null;
        this.xOffset = this.yOffset = this.xAdvance = 0;
        this.page = null;
        this.x = this.y = this.width = this.height = 0;
        this.charCode = a
    };
    f["flambe.display.Glyph"] = rb;
    rb.__name__ = ["flambe", "display", "Glyph"];
    rb.prototype = {
        draw: function (a, b, c) {
            0 < this.width && a.drawSubTexture(this.page, b + this.xOffset, c + this.yOffset, this.x,
                this.y, this.width, this.height)
        },
        getKerning: function (a) {
            return null != this._kernings ? x["int"](this._kernings.get(a)) : 0
        },
        setKerning: function (a, b) {
            null == this._kernings && (this._kernings = new ba);
            this._kernings.set(a, b)
        },
        __class__: rb
    };
    var Ma = function (a, b) {
        this.name = b;
        this._pack = a;
        this.reload()
    };
    f["flambe.display.Font"] = Ma;
    Ma.__name__ = ["flambe", "display", "Font"];
    Ma.prototype = {
        layoutText: function (a, b, c, e, g) {
            null == g && (g = 0);
            null == e && (e = 0);
            null == c && (c = 0);
            null == b && (b = K.Left);
            return new Ba(this, a, b, c, e, g)
        },
        reload: function () {
            this._glyphs =
                new ba;
            this._glyphs.set(Ma.NEWLINE.charCode, Ma.NEWLINE);
            for (var a = new Na(this._pack.getFile(this.name + ".fnt").toString()), b = new ba, c = this.name.lastIndexOf("/"), c = 0 <= c ? p.substr(this.name, 0, c + 1) : "", e = a.keywords(); e.hasNext();) switch (e.next()) {
            case "info":
                for (var g = a.pairs(); g.hasNext();) {
                    var d = g.next();
                    switch (d.key) {
                    case "size":
                        this.size = d.getInt()
                    }
                }
                break;
            case "common":
                for (g = a.pairs(); g.hasNext();) switch (d = g.next(), d.key) {
                case "lineHeight":
                    this.lineHeight = d.getInt()
                }
                break;
            case "page":
                for (var g = 0, d =
                    null, f = a.pairs(); f.hasNext();) {
                    var j = f.next();
                    switch (j.key) {
                    case "id":
                        g = j.getInt();
                        break;
                    case "file":
                        d = j.getString()
                    }
                }
                d = this._pack.getTexture(c + M.removeFileExtension(d));
                b.set(g, d);
                break;
            case "char":
                g = null;
                for (d = a.pairs(); d.hasNext();) switch (f = d.next(), f.key) {
                case "id":
                    g = new rb(f.getInt());
                    break;
                case "x":
                    g.x = f.getInt();
                    break;
                case "y":
                    g.y = f.getInt();
                    break;
                case "width":
                    g.width = f.getInt();
                    break;
                case "height":
                    g.height = f.getInt();
                    break;
                case "page":
                    f = f.getInt();
                    g.page = b.get(f);
                    break;
                case "xoffset":
                    g.xOffset =
                        f.getInt();
                    break;
                case "yoffset":
                    g.yOffset = f.getInt();
                    break;
                case "xadvance":
                    g.xAdvance = f.getInt()
                }
                this._glyphs.set(g.charCode, g);
                break;
            case "kerning":
                g = null;
                f = d = 0;
                for (j = a.pairs(); j.hasNext();) {
                    var y = j.next();
                    switch (y.key) {
                    case "first":
                        g = this._glyphs.get(y.getInt());
                        break;
                    case "second":
                        d = y.getInt();
                        break;
                    case "amount":
                        f = y.getInt()
                    }
                }
                null != g && 0 != f && g.setKerning(d, f)
            }
        },
        __class__: Ma
    };
    var K = f["flambe.display.TextAlign"] = {
        __ename__: ["flambe", "display", "TextAlign"],
        __constructs__: ["Left", "Center", "Right"]
    };
    K.Left = ["Left", 0];
    K.Left.toString = s;
    K.Left.__enum__ = K;
    K.Center = ["Center", 1];
    K.Center.toString = s;
    K.Center.__enum__ = K;
    K.Right = ["Right", 2];
    K.Right.toString = s;
    K.Right.__enum__ = K;
    var Ba = function (a, b, c, e, g, d) {
        this.lines = 0;
        var f = this;
        this._font = a;
        this._glyphs = [];
        this._offsets = [];
        this._lineOffset = Math.round(a.lineHeight + d);
        this.bounds = new sb;
        for (var j = [], d = b.length, y = 0; y < d;) {
            var i = y++,
                i = b.charCodeAt(i),
                i = a._glyphs.get(i);
            null != i ? this._glyphs.push(i) : null
        }
        for (var b = -1, m = 0, k = 0, a = a._glyphs.get(10), d = function () {
            f.bounds.width =
                Aa.max(f.bounds.width, m);
            f.bounds.height += k;
            j[f.lines] = m;
            k = m = 0;
            ++f.lines
        }, y = 0; y < this._glyphs.length;) {
            i = this._glyphs[y];
            this._offsets[y] = Math.round(m);
            var l = 0 < e && m + i.width > e;
            l || i == a ? (l && (0 <= b ? (this._glyphs[b] = a, m = this._offsets[b], y = b) : this._glyphs.splice(y, 0, a)), b = -1, k = this._lineOffset, d()) : (32 == i.charCode && (b = y), m += i.xAdvance + g, k = Aa.max(k, i.height + i.yOffset), y + 1 < this._glyphs.length && (m += i.getKerning(this._glyphs[y + 1].charCode)));
            ++y
        }
        d();
        g = 0;
        a = Ba.getAlignOffset(c, j[0], e);
        b = 1.79769313486231E308;
        d = -1.79769313486231E308;
        i = y = 0;
        for (l = this._glyphs.length; i < l;) {
            var n = this._glyphs[i];
            10 == n.charCode && (g += this._lineOffset, ++y, a = Ba.getAlignOffset(c, j[y], e));
            this._offsets[i] += a;
            var o = g + n.yOffset;
            b < o || (b = o);
            d = Aa.max(d, o + n.height);
            ++i
        }
        this.bounds.x = Ba.getAlignOffset(c, this.bounds.width, e);
        this.bounds.y = b;
        this.bounds.height = d - b
    };
    f["flambe.display.TextLayout"] = Ba;
    Ba.__name__ = ["flambe", "display", "TextLayout"];
    Ba.getAlignOffset = function (a, b, c) {
        switch (a[1]) {
        case 0:
            return 0;
        case 2:
            return c - b;
        case 1:
            return Math.round((c -
                b) / 2)
        }
    };
    Ba.prototype = {
        draw: function (a) {
            for (var b = 0, c = 0, e = this._glyphs.length; c < e;) {
                var g = this._glyphs[c];
                10 == g.charCode ? b += this._lineOffset : g.draw(a, this._offsets[c], b);
                ++c
            }
        },
        __class__: Ba
    };
    var Na = function (a) {
        this._configText = a;
        this._keywordPattern = new $("([A-Za-z]+)(.*)", "");
        this._pairPattern = new $('([A-Za-z]+)=("[^"]*"|[^\\s]+)', "")
    };
    f["flambe.display._Font.ConfigParser"] = Na;
    Na.__name__ = ["flambe", "display", "_Font", "ConfigParser"];
    Na.advance = function (a, b) {
        var c = b.matchedPos();
        return p.substr(a, c.pos +
            c.len, a.length)
    };
    Na.prototype = {
        keywords: function () {
            var a = this,
                b = this._configText;
            return {
                next: function () {
                    b = Na.advance(b, a._keywordPattern);
                    a._pairText = a._keywordPattern.matched(2);
                    return a._keywordPattern.matched(1)
                },
                hasNext: function () {
                    return a._keywordPattern.match(b)
                }
            }
        },
        pairs: function () {
            var a = this,
                b = this._pairText;
            return {
                next: function () {
                    b = Na.advance(b, a._pairPattern);
                    return new Xb(a._pairPattern.matched(1), a._pairPattern.matched(2))
                },
                hasNext: function () {
                    return a._pairPattern.match(b)
                }
            }
        },
        __class__: Na
    };
    var Xb = function (a, b) {
        this.key = a;
        this._value = b
    };
    f["flambe.display._Font.ConfigPair"] = Xb;
    Xb.__name__ = ["flambe", "display", "_Font", "ConfigPair"];
    Xb.prototype = {
        getInt: function () {
            return x.parseInt(this._value)
        },
        getString: function () {
            return 34 != this._value.charCodeAt(0) ? null : p.substr(this._value, 1, this._value.length - 2)
        },
        __class__: Xb
    };
    var Yb = function () {};
    f["flambe.display.Graphics"] = Yb;
    Yb.__name__ = ["flambe", "display", "Graphics"];
    Yb.prototype = {
        __class__: Yb
    };
    var Ua = function (a) {
        r.call(this);
        this.texture = a
    };
    f["flambe.display.ImageSprite"] =
        Ua;
    Ua.__name__ = ["flambe", "display", "ImageSprite"];
    Ua.__super__ = r;
    Ua.prototype = z(r.prototype, {
        draw: function (a) {
            null != this.texture && a.drawTexture(this.texture, 0, 0)
        },
        getNaturalWidth: function () {
            return null != this.texture ? this.texture.get_width() : 0
        },
        getNaturalHeight: function () {
            return null != this.texture ? this.texture.get_height() : 0
        },
        __class__: Ua
    });
    var ja = f["flambe.display.Orientation"] = {
        __ename__: ["flambe", "display", "Orientation"],
        __constructs__: ["Portrait", "Landscape"]
    };
    ja.Portrait = ["Portrait", 0];
    ja.Portrait.toString =
        s;
    ja.Portrait.__enum__ = ja;
    ja.Landscape = ["Landscape", 1];
    ja.Landscape.toString = s;
    ja.Landscape.__enum__ = ja;
    var tb = function () {};
    f["flambe.display.Texture"] = tb;
    tb.__name__ = ["flambe", "display", "Texture"];
    tb.__interfaces__ = [za];
    tb.prototype = {
        __class__: tb
    };
    var xc = function () {};
    f["flambe.display.SubTexture"] = xc;
    xc.__name__ = ["flambe", "display", "SubTexture"];
    xc.__interfaces__ = [tb];
    var ub = function (a, b) {
        null == b && (b = "");
        this._layout = null;
        var c = this;
        r.call(this);
        this._font = a;
        this._text = b;
        this._align = K.Left;
        this._flags |=
            64;
        var e = function () {
            c._flags |= 64
        };
        this.wrapWidth = new n(0, e);
        this.letterSpacing = new n(0, e);
        this.lineSpacing = new n(0, e)
    };
    f["flambe.display.TextSprite"] = ub;
    ub.__name__ = ["flambe", "display", "TextSprite"];
    ub.__super__ = r;
    ub.prototype = z(r.prototype, {
        draw: function (a) {
            this.updateLayout();
            this._layout.draw(a)
        },
        getNaturalWidth: function () {
            this.updateLayout();
            return 0 < this.wrapWidth._value ? this.wrapWidth._value : this._layout.bounds.width
        },
        getNaturalHeight: function () {
            this.updateLayout();
            var a = this._layout.lines *
                (this._font.lineHeight + this.lineSpacing._value),
                b = this._layout.bounds.height;
            return a > b ? a : b
        },
        containsLocal: function (a, b) {
            this.updateLayout();
            return this._layout.bounds.contains(a, b)
        },
        setWrapWidth: function (a) {
            this.wrapWidth.set__(a);
            return this
        },
        setAlign: function (a) {
            this.set_align(a);
            return this
        },
        set_text: function (a) {
            a != this._text && (this._text = a, this._flags |= 64);
            return a
        },
        set_align: function (a) {
            a != this._align && (this._align = a, this._flags |= 64);
            return a
        },
        updateLayout: function () {
            0 != (this._flags & 64) && (this._flags &=
                -65, this._layout = this._font.layoutText(this._text, this._align, this.wrapWidth._value, this.letterSpacing._value, this.lineSpacing._value))
        },
        onUpdate: function (a) {
            r.prototype.onUpdate.call(this, a);
            this.wrapWidth.update(a);
            this.letterSpacing.update(a);
            this.lineSpacing.update(a)
        },
        __class__: ub,
        __properties__: z(r.prototype.__properties__, {
            set_align: "set_align",
            set_text: "set_text"
        })
    });
    var R = f["flambe.input.MouseButton"] = {
        __ename__: ["flambe", "input", "MouseButton"],
        __constructs__: ["Left", "Middle", "Right", "Unknown"]
    };
    R.Left = ["Left", 0];
    R.Left.toString = s;
    R.Left.__enum__ = R;
    R.Middle = ["Middle", 1];
    R.Middle.toString = s;
    R.Middle.__enum__ = R;
    R.Right = ["Right", 2];
    R.Right.toString = s;
    R.Right.__enum__ = R;
    R.Unknown = function (a) {
        a = ["Unknown", 3, a];
        a.__enum__ = R;
        a.toString = s;
        return a
    };
    var ca = f["flambe.input.MouseCursor"] = {
        __ename__: ["flambe", "input", "MouseCursor"],
        __constructs__: ["Default", "Button", "None"]
    };
    ca.Default = ["Default", 0];
    ca.Default.toString = s;
    ca.Default.__enum__ = ca;
    ca.Button = ["Button", 1];
    ca.Button.toString = s;
    ca.Button.__enum__ =
        ca;
    ca.None = ["None", 2];
    ca.None.toString = s;
    ca.None.__enum__ = ca;
    var Zb = function () {
        this.init(0, 0, 0, null)
    };
    f["flambe.input.MouseEvent"] = Zb;
    Zb.__name__ = ["flambe", "input", "MouseEvent"];
    Zb.prototype = {
        init: function (a, b, c, e) {
            this.id = a;
            this.viewX = b;
            this.viewY = c;
            this.button = e
        },
        __class__: Zb
    };
    var vb = f["flambe.input.EventSource"] = {
        __ename__: ["flambe", "input", "EventSource"],
        __constructs__: ["Mouse", "Touch"]
    };
    vb.Mouse = function (a) {
        a = ["Mouse", 0, a];
        a.__enum__ = vb;
        a.toString = s;
        return a
    };
    vb.Touch = function (a) {
        a = ["Touch",
            1, a
        ];
        a.__enum__ = vb;
        a.toString = s;
        return a
    };
    var $b = function () {
        this.init(0, 0, 0, null, null)
    };
    f["flambe.input.PointerEvent"] = $b;
    $b.__name__ = ["flambe", "input", "PointerEvent"];
    $b.prototype = {
        init: function (a, b, c, e, g) {
            this.id = a;
            this.viewX = b;
            this.viewY = c;
            this.hit = e;
            this.source = g;
            this._stopped = !1
        },
        __class__: $b
    };
    var ac = function (a) {
        this.id = a;
        this._source = vb.Touch(this)
    };
    f["flambe.input.TouchPoint"] = ac;
    ac.__name__ = ["flambe", "input", "TouchPoint"];
    ac.prototype = {
        init: function (a, b) {
            this.viewX = a;
            this.viewY = b
        },
        __class__: ac
    };
    var Aa = function () {};
    f["flambe.math.FMath"] = Aa;
    Aa.__name__ = ["flambe", "math", "FMath"];
    Aa.toRadians = function (a) {
        return 3.141592653589793 * a / 180
    };
    Aa.max = function (a, b) {
        return a > b ? a : b
    };
    var Vb = function () {
        this.identity()
    };
    f["flambe.math.Matrix"] = Vb;
    Vb.__name__ = ["flambe", "math", "Matrix"];
    Vb.prototype = {
        set: function (a, b, c, e, g, d) {
            this.m00 = a;
            this.m01 = c;
            this.m02 = g;
            this.m10 = b;
            this.m11 = e;
            this.m12 = d
        },
        identity: function () {
            this.set(1, 0, 0, 1, 0, 0)
        },
        compose: function (a, b, c, e, g) {
            var d = Math.sin(g),
                g = Math.cos(g);
            this.set(g * c,
                d * c, -d * e, g * e, a, b)
        },
        translate: function (a, b) {
            this.m02 += this.m00 * a + this.m01 * b;
            this.m12 += this.m11 * b + this.m10 * a
        },
        determinant: function () {
            return this.m00 * this.m11 - this.m01 * this.m10
        },
        inverseTransform: function (a, b, c) {
            var e = this.determinant();
            if (0 == e) return !1;
            a -= this.m02;
            b -= this.m12;
            c.x = (a * this.m11 - b * this.m01) / e;
            c.y = (b * this.m00 - a * this.m10) / e;
            return !0
        },
        __class__: Vb
    };
    var sb = function (a, b, c, e) {
        null == e && (e = 0);
        null == c && (c = 0);
        null == b && (b = 0);
        null == a && (a = 0);
        this.set(a, b, c, e)
    };
    f["flambe.math.Rectangle"] = sb;
    sb.__name__ = ["flambe", "math", "Rectangle"];
    sb.prototype = {
        set: function (a, b, c, e) {
            this.x = a;
            this.y = b;
            this.width = c;
            this.height = e
        },
        contains: function (a, b) {
            a -= this.x;
            if (0 <= this.width) {
                if (0 > a || a > this.width) return !1
            } else if (0 < a || a < this.width) return !1;
            b -= this.y;
            if (0 <= this.height) {
                if (0 > b || b > this.height) return !1
            } else if (0 < b || b < this.height) return !1;
            return !0
        },
        __class__: sb
    };
    var U = function () {
        this._disposed = !1
    };
    f["flambe.platform.BasicAsset"] = U;
    U.__name__ = ["flambe", "platform", "BasicAsset"];
    U.__interfaces__ = [za];
    U.prototype = {
        dispose: function () {
            this._disposed ||
                (this._disposed = !0, this.onDisposed())
        },
        onDisposed: function () {
            null
        },
        __class__: U
    };
    var Ca = function (a, b) {
        var c = this;
        this.manifest = b;
        this._platform = a;
        this.promise = new wb;
        this._bytesLoaded = new O;
        this._pack = new xb(b, this);
        var e = va.array(b);
        if (0 == e.length) this.handleSuccess();
        else {
            for (var g = new O, d = 0; d < e.length;) {
                var f = e[d];
                ++d;
                var j = g.get(f.name);
                null == j && (j = [], g.set(f.name, j));
                j.push(f)
            }
            this._assetsRemaining = va.count(g);
            for (e = g.iterator(); e.hasNext();) g = [e.next()], this.pickBestEntry(g[0], function (a) {
                return function (e) {
                    if (null !=
                        e) {
                        var g = b.getFullURL(e);
                        try {
                            c.loadEntry(g, e)
                        } catch (d) {
                            c.handleError(e, "Unexpected error: " + x.string(d))
                        }
                        g = c.promise;
                        g.set_total(g._total + e.bytes)
                    } else e = a[0][0], Ca.isAudio(e.format) ? c.handleLoad(e, aa.getInstance()) : c.handleError(e, "Could not find a supported format to load")
                }
            }(g))
        }
    };
    f["flambe.platform.BasicAssetPackLoader"] = Ca;
    Ca.__name__ = ["flambe", "platform", "BasicAssetPackLoader"];
    Ca.isAudio = function (a) {
        switch (a[1]) {
        case 8:
        case 9:
        case 10:
        case 11:
        case 12:
            return !0;
        default:
            return !1
        }
    };
    Ca.prototype = {
        onDisposed: function () {},
        pickBestEntry: function (a, b) {
            this.getAssetFormats(function (c) {
                for (var e = 0; e < c.length;) {
                    var g = c[e];
                    ++e;
                    for (var d = 0; d < a.length;) {
                        var f = a[d];
                        ++d;
                        if (f.format == g) {
                            b(f);
                            return
                        }
                    }
                }
                b(null)
            })
        },
        loadEntry: function () {
            null
        },
        getAssetFormats: function () {
            null
        },
        handleLoad: function (a, b) {
            if (!this._pack.disposed) {
                this.handleProgress(a, a.bytes);
                var c;
                switch (a.format[1]) {
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                    c = this._pack.textures;
                    break;
                case 8:
                case 9:
                case 10:
                case 11:
                case 12:
                    c = this._pack.sounds;
                    break;
                case 13:
                    c = this._pack.files
                }
                c.set(a.name, b);
                this._assetsRemaining -= 1;
                0 == this._assetsRemaining && this.handleSuccess()
            }
        },
        handleProgress: function (a, b) {
            this._bytesLoaded.set(a.name, b);
            for (var c = 0, e = this._bytesLoaded.iterator(); e.hasNext();) var g = e.next(),
                c = c + g;
            this.promise.set_progress(c)
        },
        handleSuccess: function () {
            this.promise.set_result(this._pack)
        },
        handleError: function (a, b) {
            this.promise.error.emit(M.withFields(b, ["url", a.url]))
        },
        handleTextureError: function (a) {
            this.handleError(a, "Failed to create texture. Is the GPU context unavailable?")
        },
        __class__: Ca
    };
    var xb = function (a, b) {
        this.disposed = !1;
        this._manifest = a;
        this.loader = b;
        this.textures = new O;
        this.sounds = new O;
        this.files = new O
    };
    f["flambe.platform._BasicAssetPackLoader.BasicAssetPack"] = xb;
    xb.__name__ = ["flambe", "platform", "_BasicAssetPackLoader", "BasicAssetPack"];
    xb.__interfaces__ = [nb];
    xb.prototype = {
        getTexture: function (a, b) {
            null == b && (b = !0);
            var c = this.textures.get(a);
            if (null == c && b) throw M.withFields("Missing texture", ["name", a]);
            return c
        },
        getSound: function (a, b) {
            null == b && (b = !0);
            var c = this.sounds.get(a);
            if (null == c && b) throw M.withFields("Missing sound", ["name", a]);
            return c
        },
        getFile: function (a, b) {
            null == b && (b = !0);
            var c = this.files.get(a);
            if (null == c && b) throw M.withFields("Missing file", ["name", a]);
            return c
        },
        dispose: function () {
            if (!this.disposed) {
                this.disposed = !0;
                for (var a = this.textures.iterator(); a.hasNext();) a.next().dispose();
                this.textures = null;
                for (a = this.sounds.iterator(); a.hasNext();) a.next().dispose();
                this.sounds = null;
                for (a = this.files.iterator(); a.hasNext();) a.next().dispose();
                this.files = null;
                this.loader.onDisposed()
            }
        },
        __class__: xb
    };
    var Va = function (a) {
        this._disposed = !1;
        this._content = a
    };
    f["flambe.platform.BasicFile"] = Va;
    Va.__name__ = ["flambe", "platform", "BasicFile"];
    Va.__interfaces__ = [ob];
    Va.__super__ = U;
    Va.prototype = z(U.prototype, {
        toString: function () {
            return this._content
        },
        onDisposed: function () {
            this._content = null
        },
        __class__: Va
    });
    var Ac = function () {};
    f["flambe.subsystem.MouseSystem"] = Ac;
    Ac.__name__ = ["flambe", "subsystem", "MouseSystem"];
    var Z = function (a) {
        this._pointer = a;
        this._source = vb.Mouse(Z._sharedEvent);
        this.down =
            new G;
        this.move = new G;
        this.up = new G;
        this.scroll = new G;
        this._y = this._x = 0;
        this._cursor = ca.Default;
        this._buttonStates = new ba
    };
    f["flambe.platform.BasicMouse"] = Z;
    Z.__name__ = ["flambe", "platform", "BasicMouse"];
    Z.__interfaces__ = [Ac];
    Z.prototype = {
        submitDown: function (a, b, c) {
            this._buttonStates.exists(c) || (this._buttonStates.set(c, !0), this.prepare(a, b, bc.toButton(c)), this._pointer.submitDown(a, b, this._source), this.down.emit(Z._sharedEvent))
        },
        submitMove: function (a, b) {
            this.prepare(a, b, null);
            this._pointer.submitMove(a,
                b, this._source);
            this.move.emit(Z._sharedEvent)
        },
        submitUp: function (a, b, c) {
            this._buttonStates.exists(c) && (this._buttonStates.remove(c), this.prepare(a, b, bc.toButton(c)), this._pointer.submitUp(a, b, this._source), this.up.emit(Z._sharedEvent))
        },
        submitScroll: function (a, b, c) {
            this._x = a;
            this._y = b;
            if (null == this.scroll._head) return !1;
            this.scroll.emit(c);
            return !0
        },
        prepare: function (a, b, c) {
            this._x = a;
            this._y = b;
            Z._sharedEvent.init(Z._sharedEvent.id + 1, a, b, c)
        },
        __class__: Z
    };
    var cc = function () {};
    f["flambe.subsystem.PointerSystem"] =
        cc;
    cc.__name__ = ["flambe", "subsystem", "PointerSystem"];
    cc.prototype = {
        __class__: cc
    };
    var Q = function (a, b, c) {
        null == c && (c = !1);
        null == b && (b = 0);
        null == a && (a = 0);
        this.down = new G;
        this.move = new G;
        this.up = new G;
        this._x = a;
        this._y = b;
        this._isDown = c
    };
    f["flambe.platform.BasicPointer"] = Q;
    Q.__name__ = ["flambe", "platform", "BasicPointer"];
    Q.__interfaces__ = [cc];
    Q.prototype = {
        get_x: function () {
            return this._x
        },
        get_y: function () {
            return this._y
        },
        isDown: function () {
            return this._isDown
        },
        submitDown: function (a, b, c) {
            if (!this._isDown) {
                this.submitMove(a,
                    b, c);
                this._isDown = !0;
                var e = [],
                    g = r.hitTest(l.root, a, b);
                if (null != g) {
                    var d = g.owner;
                    do {
                        var f = d._compMap.Sprite_0;
                        null != f && e.push(f);
                        d = d.parent
                    } while (null != d)
                }
                this.prepare(a, b, g, c);
                for (a = 0; a < e.length;)
                    if (b = e[a], ++a, b.onPointerDown(Q._sharedEvent), Q._sharedEvent._stopped) return;
                this.down.emit(Q._sharedEvent)
            }
        },
        submitMove: function (a, b, c) {
            if (!(a == this._x && b == this._y)) {
                var e = [],
                    g = r.hitTest(l.root, a, b);
                if (null != g) {
                    var d = g.owner;
                    do {
                        var f = d._compMap.Sprite_0;
                        null != f && e.push(f);
                        d = d.parent
                    } while (null != d)
                }
                this.prepare(a,
                    b, g, c);
                for (a = 0; a < e.length;)
                    if (b = e[a], ++a, b.onPointerMove(Q._sharedEvent), Q._sharedEvent._stopped) return;
                this.move.emit(Q._sharedEvent)
            }
        },
        submitUp: function (a, b, c) {
            if (this._isDown) {
                this.submitMove(a, b, c);
                this._isDown = !1;
                var e = [],
                    d = r.hitTest(l.root, a, b);
                if (null != d) {
                    var h = d.owner;
                    do {
                        var f = h._compMap.Sprite_0;
                        null != f && e.push(f);
                        h = h.parent
                    } while (null != h)
                }
                this.prepare(a, b, d, c);
                for (a = 0; a < e.length;)
                    if (b = e[a], ++a, b.onPointerUp(Q._sharedEvent), Q._sharedEvent._stopped) return;
                this.up.emit(Q._sharedEvent)
            }
        },
        prepare: function (a,
            b, c, e) {
            this._x = a;
            this._y = b;
            Q._sharedEvent.init(Q._sharedEvent.id + 1, a, b, c, e)
        },
        __class__: Q,
        __properties__: {
            get_y: "get_y",
            get_x: "get_x"
        }
    };
    var Da = function (a, b, c) {
        this._x = this._y = 0;
        this._parent = null;
        this.rootX = this.rootY = 0;
        this._disposed = !1;
        this.root = a;
        this._width = b;
        this._height = c
    };
    f["flambe.platform.BasicTexture"] = Da;
    Da.__name__ = ["flambe", "platform", "BasicTexture"];
    Da.__interfaces__ = [xc];
    Da.__super__ = U;
    Da.prototype = z(U.prototype, {
        subTexture: function (a, b, c, e) {
            c = this.root.createTexture(c, e);
            c._parent = this;
            c._x = a;
            c._y = b;
            c.rootX = this.rootX + a;
            c.rootY = this.rootY + b;
            return c
        },
        split: function (a, b) {
            null == b && (b = 1);
            for (var c = [], e = this._width / a | 0, d = this._height / b | 0, h = 0; h < b;)
                for (var f = h++, j = 0; j < a;) {
                    var i = j++;
                    c.push(this.subTexture(i * e, f * d, e, d))
                }
            return c
        },
        onDisposed: function () {
            null == this._parent && this.root.dispose()
        },
        get_width: function () {
            return this._width
        },
        get_height: function () {
            return this._height
        },
        __class__: Da,
        __properties__: {
            get_height: "get_height",
            get_width: "get_width"
        }
    });
    var yc = function () {};
    f["flambe.subsystem.TouchSystem"] =
        yc;
    yc.__name__ = ["flambe", "subsystem", "TouchSystem"];
    var hb = function (a, b) {
        null == b && (b = 4);
        this._pointer = a;
        this._maxPoints = b;
        this._pointMap = new ba;
        this._points = [];
        this.down = new G;
        this.move = new G;
        this.up = new G
    };
    f["flambe.platform.BasicTouch"] = hb;
    hb.__name__ = ["flambe", "platform", "BasicTouch"];
    hb.__interfaces__ = [yc];
    hb.prototype = {
        submitDown: function (a, b, c) {
            if (!this._pointMap.exists(a)) {
                var e = new ac(a);
                e.init(b, c);
                this._pointMap.set(a, e);
                this._points.push(e);
                null == this._pointerTouch && (this._pointerTouch =
                    e, this._pointer.submitDown(b, c, e._source));
                this.down.emit(e)
            }
        },
        submitMove: function (a, b, c) {
            a = this._pointMap.get(a);
            null != a && (a.init(b, c), this._pointerTouch == a && this._pointer.submitMove(b, c, a._source), this.move.emit(a))
        },
        submitUp: function (a, b, c) {
            var e = this._pointMap.get(a);
            null != e && (e.init(b, c), this._pointMap.remove(a), p.remove(this._points, e), this._pointerTouch == e && (this._pointerTouch = null, this._pointer.submitUp(b, c, e._source)), this.up.emit(e))
        },
        __class__: hb
    };
    var Oa = function () {};
    f["flambe.sound.Sound"] =
        Oa;
    Oa.__name__ = ["flambe", "sound", "Sound"];
    Oa.__interfaces__ = [za];
    Oa.prototype = {
        __class__: Oa
    };
    var aa = function () {
        this._disposed = !1;
        this._playback = new yb(this)
    };
    f["flambe.platform.DummySound"] = aa;
    aa.__name__ = ["flambe", "platform", "DummySound"];
    aa.__interfaces__ = [Oa];
    aa.getInstance = function () {
        null == aa._instance && (aa._instance = new aa);
        return aa._instance
    };
    aa.__super__ = U;
    aa.prototype = z(U.prototype, {
        play: function () {
            return this._playback
        },
        loop: function () {
            return this._playback
        },
        onDisposed: function () {},
        __class__: aa
    });
    var Pa = function () {};
    f["flambe.sound.Playback"] = Pa;
    Pa.__name__ = ["flambe", "sound", "Playback"];
    Pa.__interfaces__ = [ha];
    Pa.prototype = {
        __class__: Pa
    };
    var yb = function (a) {
        this._sound = a;
        this.volume = new n(0);
        this._complete = new S(!0)
    };
    f["flambe.platform.DummyPlayback"] = yb;
    yb.__name__ = ["flambe", "platform", "DummyPlayback"];
    yb.__interfaces__ = [Pa];
    yb.prototype = {
        get_sound: function () {
            return this._sound
        },
        set_paused: function () {
            return !0
        },
        dispose: function () {},
        __class__: yb,
        __properties__: {
            get_sound: "get_sound",
            set_paused: "set_paused"
        }
    };
    var zb = function () {};
    f["flambe.subsystem.StorageSystem"] = zb;
    zb.__name__ = ["flambe", "subsystem", "StorageSystem"];
    zb.prototype = {
        __class__: zb
    };
    var kb = function () {
        this.clear()
    };
    f["flambe.platform.DummyStorage"] = kb;
    kb.__name__ = ["flambe", "platform", "DummyStorage"];
    kb.__interfaces__ = [zb];
    kb.prototype = {
        set: function (a, b) {
            this._hash.set(a, b);
            return !0
        },
        get: function (a, b) {
            return this._hash.exists(a) ? this._hash.get(a) : b
        },
        clear: function () {
            this._hash = new O
        },
        __class__: kb
    };
    var ib = function () {
        this.down = new G;
        this.move =
            new G;
        this.up = new G
    };
    f["flambe.platform.DummyTouch"] = ib;
    ib.__name__ = ["flambe", "platform", "DummyTouch"];
    ib.__interfaces__ = [yc];
    ib.prototype = {
        __class__: ib
    };
    var Wa = function () {
        this._entries = []
    };
    f["flambe.platform.EventGroup"] = Wa;
    Wa.__name__ = ["flambe", "platform", "EventGroup"];
    Wa.__interfaces__ = [ha];
    Wa.prototype = {
        addListener: function (a, b, c) {
            a.addEventListener(b, c, !1);
            this._entries.push(new dc(a, b, c))
        },
        addDisposingListener: function (a, b, c) {
            var e = this;
            this.addListener(a, b, function (a) {
                e.dispose();
                c(a)
            })
        },
        dispose: function () {
            for (var a =
                0, b = this._entries; a < b.length;) {
                var c = b[a];
                ++a;
                c.dispatcher.removeEventListener(c.type, c.listener, !1)
            }
            this._entries = []
        },
        __class__: Wa
    };
    var dc = function (a, b, c) {
        this.dispatcher = a;
        this.type = b;
        this.listener = c
    };
    f["flambe.platform._EventGroup.Entry"] = dc;
    dc.__name__ = ["flambe", "platform", "_EventGroup", "Entry"];
    dc.prototype = {
        __class__: dc
    };
    var Ab = function () {};
    f["flambe.platform.InternalGraphics"] = Ab;
    Ab.__name__ = ["flambe", "platform", "InternalGraphics"];
    Ab.__interfaces__ = [Yb];
    Ab.prototype = {
        __class__: Ab
    };
    var ec =
        function () {};
    f["flambe.subsystem.RendererSystem"] = ec;
    ec.__name__ = ["flambe", "subsystem", "RendererSystem"];
    ec.prototype = {
        __class__: ec
    };
    var Bb = function () {};
    f["flambe.platform.InternalRenderer"] = Bb;
    Bb.__name__ = ["flambe", "platform", "InternalRenderer"];
    Bb.__interfaces__ = [ec];
    Bb.prototype = {
        __class__: Bb
    };
    var Ia = function () {
        this._tickables = []
    };
    f["flambe.platform.MainLoop"] = Ia;
    Ia.__name__ = ["flambe", "platform", "MainLoop"];
    Ia.updateEntity = function (a, b) {
        var c = a._compMap.SpeedAdjuster_6;
        if (null != c && (c._realDt = b,
            b *= c.scale._value, 0 >= b)) {
            c.onUpdate(b);
            return
        }
        for (c = a.firstComponent; null != c;) {
            var e = c.next;
            c.onUpdate(b);
            c = e
        }
        for (c = a.firstChild; null != c;) e = c.next, Ia.updateEntity(c, b), c = e
    };
    Ia.prototype = {
        update: function (a) {
            if (!(0 >= a)) {
                1 < a && (a = 1);
                for (var b = 0; b < this._tickables.length;) {
                    var c = this._tickables[b];
                    null == c || c.update(a) ? this._tickables.splice(b, 1) : ++b
                }
                l.volume.update(a);
                Ia.updateEntity(l.root, a)
            }
        },
        render: function (a) {
            var b = a.graphics;
            null != b && (a.willRender(), r.render(l.root, b), a.didRender())
        },
        addTickable: function (a) {
            this._tickables.push(a)
        },
        __class__: Ia
    };
    var bc = function () {};
    f["flambe.platform.MouseCodes"] = bc;
    bc.__name__ = ["flambe", "platform", "MouseCodes"];
    bc.toButton = function (a) {
        switch (a) {
        case 0:
            return R.Left;
        case 1:
            return R.Middle;
        case 2:
            return R.Right
        }
        return R.Unknown(a)
    };
    var fc = function () {};
    f["flambe.platform.TextureRoot"] = fc;
    fc.__name__ = ["flambe", "platform", "TextureRoot"];
    fc.prototype = {
        __class__: fc
    };
    var Cb = function () {};
    f["flambe.platform.Tickable"] = Cb;
    Cb.__name__ = ["flambe", "platform", "Tickable"];
    Cb.prototype = {
        __class__: Cb
    };
    var Db =
        function (a) {
            this._firstDraw = !1;
            this._canvasCtx = a.getContext("2d")
        };
    f["flambe.platform.html.CanvasGraphics"] = Db;
    Db.__name__ = ["flambe", "platform", "html", "CanvasGraphics"];
    Db.__interfaces__ = [Ab];
    Db.prototype = {
        save: function () {
            this._canvasCtx.save()
        },
        translate: function (a, b) {
            this._canvasCtx.translate(a | 0, b | 0)
        },
        scale: function (a, b) {
            this._canvasCtx.scale(a, b)
        },
        rotate: function (a) {
            this._canvasCtx.rotate(3.141592653589793 * a / 180)
        },
        transform: function (a, b, c, e, d, h) {
            this._canvasCtx.transform(a, b, c, e, d, h)
        },
        restore: function () {
            this._canvasCtx.restore()
        },
        drawTexture: function (a, b, c) {
            this.drawSubTexture(a, b, c, 0, 0, a.get_width(), a.get_height())
        },
        drawSubTexture: function (a, b, c, e, d, h, f) {
            this._firstDraw ? (this._firstDraw = !1, this._canvasCtx.globalCompositeOperation = "copy", this.drawSubTexture(a, b, c, e, d, h, f), this._canvasCtx.globalCompositeOperation = "source-over") : this._canvasCtx.drawImage(a.root.image, a.rootX + e | 0, a.rootY + d | 0, h | 0, f | 0, b | 0, c | 0, h | 0, f | 0)
        },
        fillRect: function (a, b, c, e, d) {
            if (this._firstDraw) this._firstDraw = !1, this._canvasCtx.globalCompositeOperation = "copy",
                this.fillRect(a, b, c, e, d), this._canvasCtx.globalCompositeOperation = "source-over";
            else {
                for (a = (16777215 & a).toString(16); 6 > a.length;) a = "0" + x.string(a);
                this._canvasCtx.fillStyle = "#" + x.string(a);
                this._canvasCtx.fillRect(b | 0, c | 0, e | 0, d | 0)
            }
        },
        multiplyAlpha: function (a) {
            this._canvasCtx.globalAlpha *= a
        },
        setBlendMode: function (a) {
            var b;
            switch (a[1]) {
            case 0:
                b = "source-over";
                break;
            case 1:
                b = "lighter";
                break;
            case 2:
                b = "destination-in";
                break;
            case 3:
                b = "copy"
            }
            this._canvasCtx.globalCompositeOperation = b
        },
        applyScissor: function (a,
            b, c, e) {
            this._canvasCtx.beginPath();
            this._canvasCtx.rect(a | 0, b | 0, c | 0, e | 0);
            this._canvasCtx.clip()
        },
        willRender: function () {
            this._firstDraw = !0
        },
        didRender: function () {},
        __class__: Db
    };
    var Ja = function (a) {
        this.graphics = new Db(a);
        this._hasGPU = new S(!0)
    };
    f["flambe.platform.html.CanvasRenderer"] = Ja;
    Ja.__name__ = ["flambe", "platform", "html", "CanvasRenderer"];
    Ja.__interfaces__ = [Bb];
    Ja.prototype = {
        get_type: function () {
            return da.Canvas
        },
        createTextureFromImage: function (a) {
            a = new Xa(Ja.CANVAS_TEXTURES ? u.createCanvas(a) :
                a);
            return a.createTexture(a.width, a.height)
        },
        getCompressedTextureFormats: function () {
            return []
        },
        createCompressedTexture: function () {
            return null
        },
        willRender: function () {
            this.graphics.willRender()
        },
        didRender: function () {
            this.graphics.didRender()
        },
        __class__: Ja,
        __properties__: {
            get_type: "get_type"
        }
    };
    var Eb = function (a, b, c) {
        Da.call(this, a, b, c)
    };
    f["flambe.platform.html.CanvasTexture"] = Eb;
    Eb.__name__ = ["flambe", "platform", "html", "CanvasTexture"];
    Eb.__super__ = Da;
    Eb.prototype = z(Da.prototype, {
        __class__: Eb
    });
    var Xa =
        function (a) {
            this._graphics = null;
            this._disposed = !1;
            this.image = a;
            this.width = a.width;
            this.height = a.height
        };
    f["flambe.platform.html.CanvasTextureRoot"] = Xa;
    Xa.__name__ = ["flambe", "platform", "html", "CanvasTextureRoot"];
    Xa.__interfaces__ = [fc];
    Xa.__super__ = U;
    Xa.prototype = z(U.prototype, {
        createTexture: function (a, b) {
            return new Eb(this, a, b)
        },
        onDisposed: function () {
            this._graphics = this.image = null
        },
        __class__: Xa
    });
    var B = function (a, b) {
        Ca.call(this, a, b)
    };
    f["flambe.platform.html.HtmlAssetPackLoader"] = B;
    B.__name__ = ["flambe",
        "platform", "html", "HtmlAssetPackLoader"
    ];
    B.detectImageFormats = function (a) {
        var b = [k.PNG, k.JPG, k.GIF],
            c = 2,
            e;
        e = window.document.createElement("img");
        e.onload = e.onerror = function () {
            1 == e.width && b.unshift(k.WEBP);
            --c;
            0 == c && a(b)
        };
        e.src = "data:image/webp;base64,UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==";
        var d;
        d = window.document.createElement("img");
        d.onload = d.onerror = function () {
            1 == d.width && b.unshift(k.JXR);
            --c;
            0 == c && a(b)
        };
        d.src = "data:image/vnd.ms-photo;base64,SUm8AQgAAAAFAAG8AQAQAAAASgAAAIC8BAABAAAAAQAAAIG8BAABAAAAAQAAAMC8BAABAAAAWgAAAMG8BAABAAAAHwAAAAAAAAAkw91vA07+S7GFPXd2jckNV01QSE9UTwAZAYBxAAAAABP/gAAEb/8AAQAAAQAAAA=="
    };
    B.detectAudioFormats = function () {
        var a;
        a = window.document.createElement("audio");
        if (null == a || null == ea(a, a.canPlayType)) return [];
        var b = new $("\\b(iPhone|iPod|iPad|Android|Windows Phone)\\b", ""),
            c = window.navigator.userAgent;
        if (!A.get_supported() && b.match(c)) return [];
        for (var b = [{
                format: k.M4A,
                mimeType: "audio/mp4; codecs=mp4a"
            }, {
                format: k.MP3,
                mimeType: "audio/mpeg"
            }, {
                format: k.OPUS,
                mimeType: "audio/ogg; codecs=opus"
            }, {
                format: k.OGG,
                mimeType: "audio/ogg; codecs=vorbis"
            }, {
                format: k.WAV,
                mimeType: "audio/wav"
            }], c = [],
            e = 0; e < b.length;) {
            var d = b[e];
            ++e;
            var h = "";
            try {
                h = a.canPlayType(d.mimeType)
            } catch (f) {}
            "" != h && c.push(d.format)
        }
        return c
    };
    B.supportsBlob = function () {
        if (B._detectBlobSupport) {
            B._detectBlobSupport = !1;
            if ((new $("\\bSilk\\b", "")).match(window.navigator.userAgent) || null == window.Blob) return !1;
            var a = new XMLHttpRequest;
            a.open("GET", ".", !0);
            if ("" != a.responseType) return !1;
            a.responseType = "blob";
            if ("blob" != a.responseType) return !1;
            B._URL = u.loadExtension("URL").value
        }
        return null != B._URL && null != B._URL.createObjectURL
    };
    B.__super__ = Ca;
    B.prototype = z(Ca.prototype, {
        loadEntry: function (a, b) {
            var c = this;
            switch (b.format[1]) {
            case 0:
            case 1:
            case 2:
            case 3:
            case 4:
                var e;
                e = window.document.createElement("img");
                var d = new Wa;
                d.addDisposingListener(e, "load", function () {
                    B.supportsBlob() && B._URL.revokeObjectURL(e.src);
                    var a = c._platform.getRenderer().createTextureFromImage(e);
                    null != a ? c.handleLoad(b, a) : c.handleTextureError(b)
                });
                d.addDisposingListener(e, "error", function () {
                    c.handleError(b, "Failed to load image")
                });
                B.supportsBlob() ? this.download(a,
                    b, "blob", function (a) {
                        e.src = B._URL.createObjectURL(a)
                    }) : e.src = a;
                break;
            case 5:
            case 6:
            case 7:
                this.download(a, b, "arraybuffer", function () {
                    var a = c._platform.getRenderer().createCompressedTexture(b.format, null);
                    null != a ? c.handleLoad(b, a) : c.handleTextureError(b)
                });
                break;
            case 8:
            case 9:
            case 10:
            case 11:
            case 12:
                if (A.get_supported()) this.download(a, b, "arraybuffer", function (a) {
                    A.ctx.decodeAudioData(a, function (a) {
                        c.handleLoad(b, new A(a))
                    }, function () {
                        c.handleLoad(b, aa.getInstance())
                    })
                });
                else {
                    var h;
                    h = window.document.createElement("audio");
                    h.preload = "auto";
                    var f = ++B._mediaRefCount;
                    null == B._mediaElements && (B._mediaElements = new ba);
                    B._mediaElements.set(f, h);
                    d = new Wa;
                    d.addDisposingListener(h, "canplaythrough", function () {
                        B._mediaElements.remove(f);
                        c.handleLoad(b, new Ya(h))
                    });
                    d.addDisposingListener(h, "error", function () {
                        B._mediaElements.remove(f);
                        var a = h.error.code;
                        3 == a || 4 == a ? c.handleLoad(b, aa.getInstance()) : c.handleError(b, "Failed to load audio: " + h.error.code)
                    });
                    d.addListener(h, "progress", function () {
                        if (0 < h.buffered.length && 0 < h.duration) {
                            var a =
                                h.buffered.end(0) / h.duration;
                            c.handleProgress(b, a * b.bytes | 0)
                        }
                    });
                    h.src = a;
                    h.load()
                }
                break;
            case 13:
                this.download(a, b, "text", function (a) {
                    c.handleLoad(b, new Va(a))
                })
            }
        },
        getAssetFormats: function (a) {
            var b = this;
            null == B._supportedFormats && (B._supportedFormats = new wb, B.detectImageFormats(function (a) {
                B._supportedFormats.set_result(b._platform.getRenderer().getCompressedTextureFormats().concat(a).concat(B.detectAudioFormats()).concat([k.Data]))
            }));
            B._supportedFormats.get(a)
        },
        download: function (a, b, c, e) {
            var d = this,
                h = null,
                f = null,
                j = 0,
                i = !1,
                k = function () {
                    i && (i = !1, window.clearInterval(j))
                },
                m = 3,
                l = function () {
                    --m;
                    return 0 <= m ? (f(), !0) : !1
                },
                f = function () {
                    k();
                    null != h && h.abort();
                    h = new XMLHttpRequest;
                    h.open("GET", a, !0);
                    h.responseType = c;
                    var f = 0;
                    h.onprogress = function (a) {
                        i || (i = !0, j = window.setInterval(function () {
                            4 != h.readyState && 5E3 < Date.now() - f && !l() && (k(), d.handleError(b, "Download stalled"))
                        }, 1E3));
                        f = Date.now();
                        d.handleProgress(b, a.loaded)
                    };
                    h.onerror = function () {
                        if (0 != h.status || !l()) k(), d.handleError(b, "HTTP error " + h.status)
                    };
                    h.onload = function () {
                        var a = h.response;
                        null == a && (a = h.responseText);
                        k();
                        e(a)
                    };
                    h.send()
                };
            f()
        },
        __class__: B
    });
    var gb = function (a, b) {
        Z.call(this, a);
        this._canvas = b
    };
    f["flambe.platform.html.HtmlMouse"] = gb;
    gb.__name__ = ["flambe", "platform", "html", "HtmlMouse"];
    gb.__super__ = Z;
    gb.prototype = z(Z.prototype, {
        __class__: gb
    });
    var Ya = function (a) {
        this._disposed = !1;
        this.audioElement = a
    };
    f["flambe.platform.html.HtmlSound"] = Ya;
    Ya.__name__ = ["flambe", "platform", "html", "HtmlSound"];
    Ya.__interfaces__ = [Oa];
    Ya.__super__ = U;
    Ya.prototype =
        z(U.prototype, {
            play: function (a) {
                null == a && (a = 1);
                return new Za(this, a, !1)
            },
            loop: function (a) {
                null == a && (a = 1);
                return new Za(this, a, !0)
            },
            onDisposed: function () {
                this.audioElement = null
            },
            __class__: Ya
        });
    var Za = function (a, b, c) {
        var e = this;
        this._sound = a;
        this._tickableAdded = !1;
        this._clonedElement = window.document.createElement("audio");
        this._clonedElement.loop = c;
        this._clonedElement.src = a.audioElement.src;
        this.volume = new n(b, function () {
            e.updateVolume()
        });
        this.updateVolume();
        this._complete = new S(!1);
        this.playAudio();
        l.hidden._value && this.set_paused(!0)
    };
    f["flambe.platform.html._HtmlSound.HtmlPlayback"] = Za;
    Za.__name__ = ["flambe", "platform", "html", "_HtmlSound", "HtmlPlayback"];
    Za.__interfaces__ = [Cb, Pa];
    Za.prototype = {
        get_sound: function () {
            return this._sound
        },
        set_paused: function (a) {
            this._clonedElement.paused != a && (a ? this._clonedElement.pause() : this.playAudio());
            return a
        },
        update: function (a) {
            this.volume.update(a);
            this._complete.set__(this._clonedElement.ended);
            return this._complete._value || this._clonedElement.paused ? (this._tickableAdded = !1, this._volumeBinding.dispose(), this._hideBinding.dispose(), !0) : !1
        },
        dispose: function () {
            this.set_paused(!0);
            this._complete.set__(!0)
        },
        playAudio: function () {
            var a = this;
            this._clonedElement.play();
            this._tickableAdded || (ta.instance.mainLoop.addTickable(this), this._tickableAdded = !0, this._volumeBinding = l.volume.get_changed().connect(function () {
                a.updateVolume()
            }), this._hideBinding = l.hidden.get_changed().connect(function (b) {
                b ? (a._wasPaused = a._clonedElement.paused, a.set_paused(!0)) : a.set_paused(a._wasPaused)
            }))
        },
        updateVolume: function () {
            this._clonedElement.volume = l.volume._value * this.volume._value
        },
        __class__: Za,
        __properties__: {
            get_sound: "get_sound",
            set_paused: "set_paused"
        }
    };
    var gc = function () {};
    f["flambe.subsystem.StageSystem"] = gc;
    gc.__name__ = ["flambe", "subsystem", "StageSystem"];
    gc.prototype = {
        __class__: gc
    };
    var Ha = function (a) {
        var b = this;
        this._canvas = a;
        this.resize = new oa;
        this.scaleFactor = Ha.computeScaleFactor();
        1 != this.scaleFactor && (u.setVendorStyle(this._canvas, "transform-origin", "top left"), u.setVendorStyle(this._canvas,
            "transform", "scale(" + 1 / this.scaleFactor + ")"));
        u.SHOULD_HIDE_MOBILE_BROWSER && (window.addEventListener("orientationchange", function () {
            u.callLater(ea(b, b.hideMobileBrowser), 200)
        }, !1), this.hideMobileBrowser());
        window.addEventListener("resize", ea(this, this.onWindowResize), !1);
        this.onWindowResize(null);
        this.orientation = new S(null);
        null != window.orientation && (window.addEventListener("orientationchange", ea(this, this.onOrientationChange), !1), this.onOrientationChange(null));
        this.fullscreen = new S(!1);
        u.addVendorListener(window.document,
            "fullscreenchange", function () {
                b.updateFullscreen()
            }, !1);
        this.updateFullscreen()
    };
    f["flambe.platform.html.HtmlStage"] = Ha;
    Ha.__name__ = ["flambe", "platform", "html", "HtmlStage"];
    Ha.__interfaces__ = [gc];
    Ha.computeScaleFactor = function () {
        var a = window.devicePixelRatio;
        null == a && (a = 1);
        var b = window.document.createElement("canvas").getContext("2d"),
            b = u.loadExtension("backingStorePixelRatio", b).value;
        null == b && (b = 1);
        a /= b;
        b = window.screen.height;
        return 1536 < a * window.screen.width || 1536 < a * b ? 1 : a
    };
    Ha.prototype = {
        get_width: function () {
            return this._canvas.width
        },
        get_height: function () {
            return this._canvas.height
        },
        lockOrientation: function (a) {
            var b = u.loadExtension("lockOrientation", window.screen).value;
            if (null != b) {
                var c;
                switch (a[1]) {
                case 0:
                    c = "portrait";
                    break;
                case 1:
                    c = "landscape"
                }
                b.apply(window.screen, [c]) || null
            }
        },
        requestFullscreen: function (a) {
            null == a && (a = !0);
            if (a) {
                var a = window.document.documentElement,
                    b = u.loadFirstExtension(["requestFullscreen", "requestFullScreen"], a).value;
                null != b && b.apply(a, [])
            } else a = u.loadFirstExtension(["cancelFullscreen", "cancelFullScreen"],
                window.document).value, null != a && F.callMethod(window.document, a, [])
        },
        onWindowResize: function () {
            var a = this._canvas.parentElement.getBoundingClientRect();
            this.resizeCanvas(a.width, a.height)
        },
        resizeCanvas: function (a, b) {
            var c = this.scaleFactor * a,
                e = this.scaleFactor * b;
            if (this._canvas.width == c && this._canvas.height == e) return !1;
            this._canvas.width = c | 0;
            this._canvas.height = e | 0;
            this.resize.emit();
            return !0
        },
        hideMobileBrowser: function () {
            var a = this,
                b = window.document.documentElement.style;
            b.height = window.innerHeight +
                100 + "px";
            b.width = window.innerWidth + "px";
            b.overflow = "visible";
            u.callLater(function () {
                u.hideMobileBrowser();
                u.callLater(function () {
                    b.height = window.innerHeight + "px";
                    a.onWindowResize(null)
                }, 100)
            })
        },
        onOrientationChange: function () {
            this.orientation.set__(u.orientation(window.orientation))
        },
        updateFullscreen: function () {
            this.fullscreen.set__(!0 == u.loadFirstExtension(["fullscreen", "fullScreen", "isFullScreen"], window.document).value)
        },
        __class__: Ha,
        __properties__: {
            get_height: "get_height",
            get_width: "get_width"
        }
    };
    var jb = function (a) {
        this._storage = a
    };
    f["flambe.platform.html.HtmlStorage"] = jb;
    jb.__name__ = ["flambe", "platform", "html", "HtmlStorage"];
    jb.__interfaces__ = [zb];
    jb.prototype = {
        set: function (a, b) {
            var c;
            try {
                var e = new pa;
                e.useCache = !0;
                e.useEnumIndex = !1;
                e.serialize(b);
                c = e.toString()
            } catch (d) {
                return !1
            }
            try {
                this._storage.setItem("flambe:" + a, c)
            } catch (h) {
                return !1
            }
            return !0
        },
        get: function (a, b) {
            var c = null;
            try {
                c = this._storage.getItem("flambe:" + a)
            } catch (e) {
                null
            }
            if (null != c) try {
                return V.run(c)
            } catch (d) {
                null
            }
            return b
        },
        __class__: jb
    };
    var u = function () {};
    f["flambe.platform.html.HtmlUtil"] = u;
    u.__name__ = ["flambe", "platform", "html", "HtmlUtil"];
    u.callLater = function (a, b) {
        null == b && (b = 0);
        window.setTimeout(a, b)
    };
    u.hideMobileBrowser = function () {
        window.scrollTo(1, 0)
    };
    u.loadExtension = function (a, b) {
        null == b && (b = window);
        var c = F.field(b, a);
        if (null != c) return {
            prefix: "",
            field: a,
            value: c
        };
        for (var c = a.charAt(0).toUpperCase() + p.substr(a, 1, null), e = 0, d = u.VENDOR_PREFIXES; e < d.length;) {
            var h = d[e];
            ++e;
            var f = h + c,
                j = F.field(b, f);
            if (null != j) return {
                prefix: h,
                field: f,
                value: j
            }
        }
        return {
            prefix: null,
            field: null,
            value: null
        }
    };
    u.loadFirstExtension = function (a, b) {
        for (var c = 0; c < a.length;) {
            var e = a[c];
            ++c;
            e = u.loadExtension(e, b);
            if (null != e.field) return e
        }
        return {
            prefix: null,
            field: null,
            value: null
        }
    };
    u.polyfill = function (a, b) {
        null == b && (b = window);
        var c = u.loadExtension(a, b).value;
        if (null == c) return !1;
        b[a] = c;
        return !0
    };
    u.setVendorStyle = function (a, b, c) {
        for (var a = a.style, e = 0, d = u.VENDOR_PREFIXES; e < d.length;) {
            var h = d[e];
            ++e;
            a.setProperty("-" + h + "-" + b, c)
        }
        a.setProperty(b, c)
    };
    u.addVendorListener =
        function (a, b, c, e) {
            for (var d = 0, h = u.VENDOR_PREFIXES; d < h.length;) {
                var f = h[d];
                ++d;
                a.addEventListener(f + b, c, e)
            }
            a.addEventListener(b, c, e)
        };
    u.orientation = function (a) {
        switch (a) {
        case -90:
        case 90:
            return ja.Landscape;
        default:
            return ja.Portrait
        }
    };
    u.createEmptyCanvas = function (a, b) {
        var c;
        c = window.document.createElement("canvas");
        c.width = a;
        c.height = b;
        return c
    };
    u.createCanvas = function (a) {
        var b = u.createEmptyCanvas(a.width, a.height),
            c = b.getContext("2d");
        c.save();
        c.globalCompositeOperation = "copy";
        c.drawImage(a, 0, 0);
        c.restore();
        return b
    };
    u.fixAndroidMath = function () {
        if (0 <= window.navigator.userAgent.indexOf("Linux; U; Android 4")) {
            var a = Math.sin,
                b = Math.cos;
            Math.sin = function (b) {
                return 0 == b ? 0 : a(b)
            };
            Math.cos = function (a) {
                return 0 == a ? 1 : b(a)
            }
        }
    };
    var hc = function () {};
    f["flambe.subsystem.WebSystem"] = hc;
    hc.__name__ = ["flambe", "subsystem", "WebSystem"];
    hc.prototype = {
        __class__: hc
    };
    var lb = function (a) {
        this._container = a
    };
    f["flambe.platform.html.HtmlWeb"] = lb;
    lb.__name__ = ["flambe", "platform", "html", "HtmlWeb"];
    lb.__interfaces__ = [hc];
    lb.prototype = {
        openBrowser: function (a) {
            window.open(a, "_blank")
        },
        __class__: lb
    };
    var A = function (a) {
        this._disposed = !1;
        this.buffer = a
    };
    f["flambe.platform.html.WebAudioSound"] = A;
    A.__name__ = ["flambe", "platform", "html", "WebAudioSound"];
    A.__interfaces__ = [Oa];
    A.__properties__ = {
        get_supported: "get_supported"
    };
    A.get_supported = function () {
        if (A._detectSupport) {
            A._detectSupport = !1;
            var a = u.loadExtension("AudioContext").value;
            null != a && (A.ctx = new a, A.gain = A.createGain(), A.gain.connect(A.ctx.destination), l.volume.watch(function (a) {
                A.gain.gain.value =
                    a
            }))
        }
        return null != A.ctx
    };
    A.createGain = function () {
        return null != A.ctx.createGain ? A.ctx.createGain() : A.ctx.createGainNode()
    };
    A.start = function (a, b) {
        null != a.start ? a.start(b) : a.noteOn(b)
    };
    A.__super__ = U;
    A.prototype = z(U.prototype, {
        play: function (a) {
            null == a && (a = 1);
            return new $a(this, a, !1)
        },
        loop: function (a) {
            null == a && (a = 1);
            return new $a(this, a, !0)
        },
        get_duration: function () {
            return this.buffer.duration
        },
        onDisposed: function () {
            this.buffer = null
        },
        __class__: A,
        __properties__: {
            get_duration: "get_duration"
        }
    });
    var $a = function (a,
        b, c) {
        var e = this;
        this._sound = a;
        this._head = A.gain;
        this._complete = new S(!1);
        this._sourceNode = A.ctx.createBufferSource();
        this._sourceNode.buffer = a.buffer;
        this._sourceNode.loop = c;
        this._sourceNode.onended = function () {
            e._complete.set__(!0)
        };
        A.start(this._sourceNode, 0);
        this.playAudio();
        this.volume = new n(b, function (a) {
            e.setVolume(a)
        });
        1 != b && this.setVolume(b);
        l.hidden._value && this.set_paused(!0)
    };
    f["flambe.platform.html._WebAudioSound.WebAudioPlayback"] = $a;
    $a.__name__ = ["flambe", "platform", "html", "_WebAudioSound",
        "WebAudioPlayback"
    ];
    $a.__interfaces__ = [Cb, Pa];
    $a.prototype = {
        get_sound: function () {
            return this._sound
        },
        set_paused: function (a) {
            a != 0 <= this._pausedAt && (a ? (this._sourceNode.disconnect(), this._pausedAt = this.get_position()) : this.playAudio());
            return a
        },
        get_position: function () {
            return this._complete._value ? this._sound.get_duration() : 0 <= this._pausedAt ? this._pausedAt : (A.ctx.currentTime - this._startedAt) % this._sound.get_duration()
        },
        update: function (a) {
            this.volume.update(a);
            3 == this._sourceNode.playbackState && this._complete.set__(!0);
            return this._complete._value || 0 <= this._pausedAt ? (this._tickableAdded = !1, this._hideBinding.dispose(), !0) : !1
        },
        dispose: function () {
            this.set_paused(!0);
            this._complete.set__(!0)
        },
        setVolume: function (a) {
            null == this._gainNode && (this._gainNode = A.createGain(), this.insertNode(this._gainNode));
            this._gainNode.gain.value = a
        },
        insertNode: function (a) {
            0 <= this._pausedAt || (this._sourceNode.disconnect(), this._sourceNode.connect(a));
            a.connect(this._head);
            this._head = a
        },
        playAudio: function () {
            var a = this;
            this._sourceNode.connect(this._head);
            this._startedAt = A.ctx.currentTime;
            this._pausedAt = -1;
            this._tickableAdded || (ta.instance.mainLoop.addTickable(this), this._tickableAdded = !0, this._hideBinding = l.hidden.get_changed().connect(function (b) {
                b ? (a._wasPaused = 0 <= a._pausedAt, a.set_paused(!0)) : a.set_paused(a._wasPaused)
            }))
        },
        __class__: $a,
        __properties__: {
            get_position: "get_position",
            get_sound: "get_sound",
            set_paused: "set_paused"
        }
    };
    var Fb = function () {
        this._width = this._height = -1;
        this._transitor = null;
        this.scenes = [];
        this.occludedScenes = [];
        this._root = new D
    };
    f["flambe.scene.Director"] = Fb;
    Fb.__name__ = ["flambe", "scene", "Director"];
    Fb.__super__ = E;
    Fb.prototype = z(E.prototype, {
        get_name: function () {
            return "Director_5"
        },
        setSize: function (a, b) {
            this._width = a;
            this._height = b;
            return this
        },
        pushScene: function (a, b) {
            var c = this;
            this.completeTransition();
            var e = this.get_topScene();
            null != e ? this.playTransition(e, a, b, function () {
                c.hide(e)
            }) : (this.add(a), this.invalidateVisibility())
        },
        popScene: function (a) {
            var b = this;
            this.completeTransition();
            var c = this.get_topScene();
            if (null != c) {
                this.scenes.pop();
                var e = this.get_topScene();
                null != e ? this.playTransition(c, e, a, function () {
                    b.hideAndDispose(c)
                }) : (this.hideAndDispose(c), this.invalidateVisibility())
            }
        },
        unwindToScene: function (a, b) {
            var c = this;
            this.completeTransition();
            var e = this.get_topScene();
            if (null != e) {
                if (e != a) {
                    for (this.scenes.pop(); 0 < this.scenes.length && this.scenes[this.scenes.length - 1] != a;) this.scenes.pop().dispose();
                    this.playTransition(e, a, b, function () {
                        c.hideAndDispose(e)
                    })
                }
            } else this.pushScene(a, b)
        },
        onAdded: function () {
            this.owner.addChild(this._root)
        },
        onRemoved: function () {
            this.completeTransition();
            for (var a = 0, b = this.scenes; a < b.length;) {
                var c = b[a];
                ++a;
                c.dispose()
            }
            this.scenes = [];
            this.occludedScenes = [];
            this._root.dispose()
        },
        onUpdate: function (a) {
            null != this._transitor && this._transitor.update(a) && this.completeTransition()
        },
        get_topScene: function () {
            var a = this.scenes.length;
            return 0 < a ? this.scenes[a - 1] : null
        },
        add: function (a) {
            var b = this.get_topScene();
            null != b && this._root.removeChild(b);
            p.remove(this.scenes, a);
            this.scenes.push(a);
            this._root.addChild(a)
        },
        hide: function (a) {
            a =
                a._compMap.Scene_4;
            null != a && a.hidden.emit()
        },
        hideAndDispose: function (a) {
            this.hide(a);
            a.dispose()
        },
        show: function (a) {
            a = a._compMap.Scene_4;
            null != a && a.shown.emit()
        },
        invalidateVisibility: function () {
            for (var a = this.scenes.length; 0 < a;) {
                var b = this.scenes[--a]._compMap.Scene_4;
                if (null == b || b.opaque) break
            }
            this.occludedScenes = 0 < this.scenes.length ? this.scenes.slice(a, this.scenes.length - 1) : [];
            a = this.get_topScene();
            null != a && this.show(a)
        },
        completeTransition: function () {
            null != this._transitor && (this._transitor.complete(),
                this._transitor = null, this.invalidateVisibility())
        },
        playTransition: function (a, b, c, e) {
            this.completeTransition();
            this.add(b);
            null != c ? (this.occludedScenes.push(a), this._transitor = new ic(a, b, c, e), this._transitor.init(this)) : (e(), this.invalidateVisibility())
        },
        __class__: Fb,
        __properties__: z(E.prototype.__properties__, {
            get_topScene: "get_topScene"
        })
    });
    var ic = function (a, b, c, e) {
        this._from = a;
        this._to = b;
        this._transition = c;
        this._onComplete = e
    };
    f["flambe.scene._Director.Transitor"] = ic;
    ic.__name__ = ["flambe", "scene",
        "_Director", "Transitor"
    ];
    ic.prototype = {
        init: function (a) {
            this._transition.init(a, this._from, this._to)
        },
        update: function (a) {
            return this._transition.update(a)
        },
        complete: function () {
            this._transition.complete();
            this._onComplete()
        },
        __class__: ic
    };
    var ab = function () {};
    f["flambe.scene.Transition"] = ab;
    ab.__name__ = ["flambe", "scene", "Transition"];
    ab.prototype = {
        init: function (a, b, c) {
            this._director = a;
            this._from = b;
            this._to = c
        },
        update: function () {
            return !0
        },
        complete: function () {},
        __class__: ab
    };
    var ua = function (a, b) {
        this._duration =
            a;
        this._ease = null != b ? b : q.linear
    };
    f["flambe.scene.TweenTransition"] = ua;
    ua.__name__ = ["flambe", "scene", "TweenTransition"];
    ua.__super__ = ab;
    ua.prototype = z(ab.prototype, {
        init: function (a, b, c) {
            ab.prototype.init.call(this, a, b, c);
            this._elapsed = 0
        },
        update: function (a) {
            this._elapsed += a;
            return this._elapsed >= this._duration
        },
        interp: function (a, b) {
            return a + (b - a) * this._ease(this._elapsed / this._duration)
        },
        __class__: ua
    });
    var Ea = function (a, b) {
        ua.call(this, a, b)
    };
    f["flambe.scene.FadeTransition"] = Ea;
    Ea.__name__ = ["flambe",
        "scene", "FadeTransition"
    ];
    Ea.__super__ = ua;
    Ea.prototype = z(ua.prototype, {
        init: function (a, b, c) {
            ua.prototype.init.call(this, a, b, c);
            a = this._to._compMap.Sprite_0;
            null == a && this._to.add(a = new r);
            a.alpha.set__(0)
        },
        update: function (a) {
            a = ua.prototype.update.call(this, a);
            this._to._compMap.Sprite_0.alpha.set__(this.interp(0, 1));
            return a
        },
        complete: function () {
            this._to._compMap.Sprite_0.alpha.set__(1)
        },
        __class__: Ea
    });
    var ka = function (a) {
        null == a && (a = !0);
        this.opaque = a;
        this.shown = new oa;
        this.hidden = new oa
    };
    f["flambe.scene.Scene"] =
        ka;
    ka.__name__ = ["flambe", "scene", "Scene"];
    ka.__super__ = E;
    ka.prototype = z(E.prototype, {
        get_name: function () {
            return "Scene_4"
        },
        __class__: ka
    });
    var qa = function () {};
    f["flambe.script.Action"] = qa;
    qa.__name__ = ["flambe", "script", "Action"];
    qa.prototype = {
        __class__: qa
    };
    var Gb = function (a, b, c, e) {
        this._value = a;
        this._to = b;
        this._seconds = c;
        this._easing = e
    };
    f["flambe.script.AnimateTo"] = Gb;
    Gb.__name__ = ["flambe", "script", "AnimateTo"];
    Gb.__interfaces__ = [qa];
    Gb.prototype = {
        update: function (a) {
            null == this._tween && (this._tween =
                new La(this._value._value, this._to, this._seconds, this._easing), this._value.set_behavior(this._tween), this._value.update(a));
            if (this._value._behavior != this._tween) {
                var b = this._tween.elapsed - this._seconds;
                this._tween = null;
                return 0 < b ? a - b : 0
            }
            return -1
        },
        __class__: Gb
    };
    var ga = function (a) {
        this._fn = a
    };
    f["flambe.script.CallFunction"] = ga;
    ga.__name__ = ["flambe", "script", "CallFunction"];
    ga.__interfaces__ = [qa];
    ga.prototype = {
        update: function () {
            this._fn();
            return 0
        },
        __class__: ga
    };
    var na = function (a) {
        this._duration = a;
        this._elapsed =
            0
    };
    f["flambe.script.Delay"] = na;
    na.__name__ = ["flambe", "script", "Delay"];
    na.__interfaces__ = [qa];
    na.prototype = {
        update: function (a) {
            this._elapsed += a;
            if (this._elapsed >= this._duration) {
                var b = this._elapsed - this._duration;
                this._elapsed = 0;
                return a - b
            }
            return -1
        },
        __class__: na
    };
    var Hb = function (a) {
        this._completedActions = [];
        this._runningActions = null != a ? a.slice() : []
    };
    f["flambe.script.Parallel"] = Hb;
    Hb.__name__ = ["flambe", "script", "Parallel"];
    Hb.__interfaces__ = [qa];
    Hb.prototype = {
        update: function (a, b) {
            for (var c = !0, e = 0,
                d = 0, h = this._runningActions.length; d < h;) {
                var f = d++,
                    j = this._runningActions[f];
                if (null != j) {
                    var i = j.update(a, b);
                    0 <= i ? (this._runningActions[f] = null, this._completedActions.push(j), i > e && (e = i)) : c = !1
                }
            }
            return c ? (this._runningActions = this._completedActions, this._completedActions = [], e) : -1
        },
        __class__: Hb
    };
    var Ib = function (a, b) {
        null == b && (b = -1);
        this._action = a;
        this._remaining = this._count = b
    };
    f["flambe.script.Repeat"] = Ib;
    Ib.__name__ = ["flambe", "script", "Repeat"];
    Ib.__interfaces__ = [qa];
    Ib.prototype = {
        update: function (a,
            b) {
            if (0 == this._count) return 0;
            var c = this._action.update(a, b);
            return 0 < this._count && 0 <= c && 0 == --this._remaining ? (this._remaining = this._count, c) : -1
        },
        __class__: Ib
    };
    var ma = function () {
        this.stopAll()
    };
    f["flambe.script.Script"] = ma;
    ma.__name__ = ["flambe", "script", "Script"];
    ma.__super__ = E;
    ma.prototype = z(E.prototype, {
        get_name: function () {
            return "Script_3"
        },
        run: function (a) {
            a = new Jb(a);
            this._handles.push(a);
            return a
        },
        stopAll: function () {
            this._handles = []
        },
        onUpdate: function (a) {
            for (var b = 0; b < this._handles.length;) {
                var c =
                    this._handles[b];
                c.removed || 0 <= c.action.update(a, this.owner) ? this._handles.splice(b, 1) : ++b
            }
        },
        __class__: ma
    });
    var Jb = function (a) {
        this.removed = !1;
        this.action = a
    };
    f["flambe.script._Script.Handle"] = Jb;
    Jb.__name__ = ["flambe", "script", "_Script", "Handle"];
    Jb.__interfaces__ = [ha];
    Jb.prototype = {
        dispose: function () {
            this.removed = !0;
            this.action = null
        },
        __class__: Jb
    };
    var xa = function (a) {
        this._idx = 0;
        this._runningActions = null != a ? a.slice() : []
    };
    f["flambe.script.Sequence"] = xa;
    xa.__name__ = ["flambe", "script", "Sequence"];
    xa.__interfaces__ = [qa];
    xa.prototype = {
        add: function (a) {
            this._runningActions.push(a)
        },
        update: function (a, b) {
            for (var c = 0;;) {
                var e = this._runningActions[this._idx];
                if (null != e)
                    if (e = e.update(a - c, b), 0 <= e) c += e;
                    else return -1;
                    ++this._idx;
                if (this._idx >= this._runningActions.length) {
                    this._idx = 0;
                    break
                } else if (c > a) return -1
            }
            return c
        },
        __class__: xa
    };
    var ya = function (a, b, c) {
        this._strengthX = a;
        this._strengthY = b;
        this._duration = c;
        this._elapsed = 0
    };
    f["flambe.script.Shake"] = ya;
    ya.__name__ = ["flambe", "script", "Shake"];
    ya.__interfaces__ = [qa];
    ya.prototype = {
        update: function (a, b) {
            var c = b._compMap.Sprite_0;
            null == this._jitterX && (this._jitterX = new Ta(c.x._value, this._strengthX), this._jitterY = new Ta(c.y._value, this._strengthY), c.x.set_behavior(this._jitterX), c.y.set_behavior(this._jitterY));
            this._elapsed += a;
            if (this._elapsed >= this._duration) {
                var e = this._elapsed - this._duration;
                c.x._behavior == this._jitterX && c.x.set__(this._jitterX.base);
                c.y._behavior == this._jitterY && c.y.set__(this._jitterY.base);
                this._jitterY = this._jitterX = null;
                this._elapsed = 0;
                return a - e
            }
            return -1
        },
        __class__: ya
    };
    var da = f["flambe.subsystem.RendererType"] = {
        __ename__: ["flambe", "subsystem", "RendererType"],
        __constructs__: ["Stage3D", "WebGL", "Canvas"]
    };
    da.Stage3D = ["Stage3D", 0];
    da.Stage3D.toString = s;
    da.Stage3D.__enum__ = da;
    da.WebGL = ["WebGL", 1];
    da.WebGL.toString = s;
    da.WebGL.__enum__ = da;
    da.Canvas = ["Canvas", 2];
    da.Canvas.toString = s;
    da.Canvas.__enum__ = da;
    var Kb = function () {};
    f["flambe.swf.Symbol"] = Kb;
    Kb.__name__ = ["flambe", "swf", "Symbol"];
    Kb.prototype = {
        __class__: Kb
    };
    var kc = function (a, b) {
        this.name = a;
        var c = 1 /
            b.length;
        this.frames = [];
        for (var e = 0; e < b.length;) {
            var d = b[e];
            ++e;
            this.frames.push(new jc(d, c))
        }
    };
    f["flambe.swf.Flipbook"] = kc;
    kc.__name__ = ["flambe", "swf", "Flipbook"];
    kc.prototype = {
        setDuration: function (a) {
            for (var a = a / this.frames.length, b = 0, c = this.frames; b < c.length;) {
                var e = c[b];
                ++b;
                e.duration = a
            }
            return this
        },
        setAnchor: function (a, b) {
            for (var c = 0, e = this.frames; c < e.length;) {
                var d = e[c];
                ++c;
                d.anchorX = a;
                d.anchorY = b
            }
            return this
        },
        __class__: kc
    };
    var jc = function (a, b) {
        this.label = null;
        this.anchorX = this.anchorY = 0;
        this.texture =
            a;
        this.duration = b
    };
    f["flambe.swf.FlipbookFrame"] = jc;
    jc.__name__ = ["flambe", "swf", "FlipbookFrame"];
    jc.prototype = {
        toSymbol: function () {
            return new Lb(this)
        },
        __class__: jc
    };
    var Lb = function (a) {
        this._texture = a.texture;
        this._anchorX = a.anchorX;
        this._anchorY = a.anchorY
    };
    f["flambe.swf._Flipbook.FrameSymbol"] = Lb;
    Lb.__name__ = ["flambe", "swf", "_Flipbook", "FrameSymbol"];
    Lb.__interfaces__ = [Kb];
    Lb.prototype = {
        createSprite: function () {
            var a = new Ua(this._texture);
            a.setAnchor(this._anchorX, this._anchorY);
            return a
        },
        __class__: Lb
    };
    var bb = function () {};
    f["flambe.swf.Library"] = bb;
    bb.__name__ = ["flambe", "swf", "Library"];
    bb.fromFlipbooks = function (a) {
        var b = H.createEmptyInstance(bb);
        b._symbols = new O;
        b.frameRate = 60;
        for (var c = 0; c < a.length;) {
            var e = a[c];
            ++c;
            for (var d = [], h = 0, f = e.frames; h < f.length;) {
                var j = f[h];
                ++h;
                d.push({
                    duration: j.duration * b.frameRate,
                    label: j.label,
                    pivot: [j.anchorX, j.anchorY],
                    ref: ""
                })
            }
            d = new Mb(b, {
                id: e.name,
                layers: [{
                    name: "flipbook",
                    flipbook: !0,
                    keyframes: d
                }]
            });
            b._symbols.set(e.name, d);
            d = d.layers[0].keyframes;
            h = 0;
            for (f = e.frames.length; h <
                f;) j = h++, d[j].setSymbol(e.frames[j].toSymbol())
        }
        return b
    };
    bb.prototype = {
        createSprite: function (a, b) {
            null == b && (b = !0);
            var c = this._symbols.get(a);
            if (null == c) {
                if (b) throw M.withFields("Missing symbol", ["name", a]);
                return null
            }
            return c.createSprite()
        },
        __class__: bb
    };
    var cb = function (a) {
        this._looped = null;
        r.call(this);
        this.symbol = a;
        this.speed = new n(1);
        this._animators = Array(a.layers.length);
        for (var b = 0, c = this._animators.length; b < c;) {
            var e = b++;
            this._animators[e] = new lc(a.layers[e])
        }
        this._position = this._frame = 0;
        this["goto"](1)
    };
    f["flambe.swf.MovieSprite"] = cb;
    cb.__name__ = ["flambe", "swf", "MovieSprite"];
    cb.__super__ = r;
    cb.prototype = z(r.prototype, {
        onAdded: function () {
            r.prototype.onAdded.call(this);
            for (var a = 0, b = this._animators; a < b.length;) {
                var c = b[a];
                ++a;
                this.owner.addChild(c.content)
            }
        },
        onRemoved: function () {
            r.prototype.onRemoved.call(this);
            for (var a = 0, b = this._animators; a < b.length;) {
                var c = b[a];
                ++a;
                this.owner.removeChild(c.content)
            }
        },
        onUpdate: function (a) {
            r.prototype.onUpdate.call(this, a);
            this.speed.update(a);
            switch (this._flags &
                48) {
            case 0:
                this._position += this.speed._value * a;
                this._position > this.symbol.duration && (this._position %= this.symbol.duration, null != this._looped && this._looped.emit());
                break;
            case 32:
                this._flags &= -33
            }
            this["goto"](this._position * this.symbol.frameRate)
        },
        "goto": function (a) {
            if (this._frame != a) {
                if (a < this._frame)
                    for (var b = 0, c = this._animators; b < c.length;) {
                        var e = c[b];
                        ++b;
                        e.needsKeyframeUpdate = !0;
                        e.keyframeIdx = 0
                    }
                b = 0;
                for (c = this._animators; b < c.length;) e = c[b], ++b, e.composeFrame(a);
                this._frame = a
            }
        },
        set_paused: function (a) {
            this._flags =
                pb.set(this._flags, 16, a);
            return a
        },
        get_looped: function () {
            null == this._looped && (this._looped = new oa);
            return this._looped
        },
        rewind: function () {
            this._position = 0;
            this._flags |= 32
        },
        __class__: cb,
        __properties__: z(r.prototype.__properties__, {
            get_looped: "get_looped",
            set_paused: "set_paused"
        })
    });
    var lc = function (a) {
        this.keyframeIdx = 0;
        this.needsKeyframeUpdate = !1;
        this.layer = a;
        this.content = new D;
        if (a.empty) this._sprites = null;
        else {
            this._sprites = Array(a.keyframes.length);
            for (var b = 0, c = this._sprites.length; b < c;) {
                var e =
                    b++,
                    d = a.keyframes[e];
                this._sprites[e] = 0 < e && a.keyframes[e - 1].symbol == d.symbol ? this._sprites[e - 1] : null == d.symbol ? new r : d.symbol.createSprite()
            }
            this.content.add(this._sprites[0])
        }
    };
    f["flambe.swf._MovieSprite.LayerAnimator"] = lc;
    lc.__name__ = ["flambe", "swf", "_MovieSprite", "LayerAnimator"];
    lc.prototype = {
        composeFrame: function (a) {
            if (null != this._sprites) {
                var b = this.layer.keyframes,
                    c = b.length - 1;
                if (a > this.layer.frames) this.content._compMap.Sprite_0.set_visible(!1), this.keyframeIdx = c, this.needsKeyframeUpdate = !0;
                else {
                    for (; this.keyframeIdx < c && b[this.keyframeIdx + 1].index <= a;)++this.keyframeIdx, this.needsKeyframeUpdate = !0;
                    var e;
                    this.needsKeyframeUpdate ? (this.needsKeyframeUpdate = !1, e = this._sprites[this.keyframeIdx], e != this.content._compMap.Sprite_0 && (H.getClass(e) == cb && e.rewind(), this.content.add(e))) : e = this.content._compMap.Sprite_0;
                    var d = b[this.keyframeIdx],
                        h = d.visible && null != d.symbol;
                    e.set_visible(h);
                    if (h) {
                        var h = d.x,
                            f = d.y,
                            j = d.scaleX,
                            i = d.scaleY,
                            k = d.skewX,
                            m = d.skewY,
                            l = d.alpha;
                        if (d.tweened && this.keyframeIdx <
                            c) {
                            a = (a - d.index) / d.duration;
                            c = d.ease;
                            if (0 != c) {
                                var n;
                                0 > c ? (n = 1 - a, n = 1 - n * n, c = -c) : n = a * a;
                                a = c * n + (1 - c) * a
                            }
                            b = b[this.keyframeIdx + 1];
                            h += (b.x - h) * a;
                            f += (b.y - f) * a;
                            j += (b.scaleX - j) * a;
                            i += (b.scaleY - i) * a;
                            k += (b.skewX - k) * a;
                            m += (b.skewY - m) * a;
                            l += (b.alpha - l) * a
                        }
                        b = e.getLocalMatrix();
                        a = Math.sin(k);
                        k = Math.cos(k);
                        c = Math.sin(m);
                        m = Math.cos(m);
                        b.set(m * j, c * j, -a * i, k * i, h, f);
                        b.translate(-d.pivotX, -d.pivotY);
                        e.alpha.set__(l)
                    }
                }
            }
        },
        __class__: lc
    };
    var Mb = function (a, b) {
        this._name = b.id;
        this.frameRate = a.frameRate;
        this.frames = 0;
        this.layers = Array(b.layers.length);
        for (var c = 0, e = this.layers.length; c < e;) {
            var d = c++,
                h = new mc(b.layers[d]);
            this.frames = Math.max(h.frames, this.frames);
            this.layers[d] = h
        }
        this.duration = this.frames / this.frameRate
    };
    f["flambe.swf.MovieSymbol"] = Mb;
    Mb.__name__ = ["flambe", "swf", "MovieSymbol"];
    Mb.__interfaces__ = [Kb];
    Mb.prototype = {
        createSprite: function () {
            return new cb(this)
        },
        __class__: Mb
    };
    var mc = function (a) {
        this.empty = !0;
        this.name = a.name;
        var b = null;
        this.keyframes = Array(a.keyframes.length);
        for (var c = 0, e = this.keyframes.length; c < e;) {
            var d = c++,
                b = new nc(a.keyframes[d],
                    b);
            this.keyframes[d] = b;
            this.empty = this.empty && null == b.symbolName
        }
        this.frames = null != b ? b.index + b.duration : 0
    };
    f["flambe.swf.MovieLayer"] = mc;
    mc.__name__ = ["flambe", "swf", "MovieLayer"];
    mc.prototype = {
        __class__: mc
    };
    var nc = function (a, b) {
        this.ease = 0;
        this.visible = this.tweened = !0;
        this.alpha = 1;
        this.skewX = this.skewY = this.pivotX = this.pivotY = 0;
        this.scaleX = this.scaleY = 1;
        this.x = this.y = 0;
        this.symbol = null;
        this.index = null != b ? b.index + b.duration : 0;
        this.duration = a.duration;
        this.label = a.label;
        this.symbolName = a.ref;
        var c =
            a.loc;
        null != c && (this.x = c[0], this.y = c[1]);
        c = a.scale;
        null != c && (this.scaleX = c[0], this.scaleY = c[1]);
        c = a.skew;
        null != c && (this.skewX = c[0], this.skewY = c[1]);
        c = a.pivot;
        null != c && (this.pivotX = c[0], this.pivotY = c[1]);
        null != a.alpha && (this.alpha = a.alpha);
        null != a.visible && (this.visible = a.visible);
        null != a.tweened && (this.tweened = a.tweened);
        null != a.ease && (this.ease = a.ease)
    };
    f["flambe.swf.MovieKeyframe"] = nc;
    nc.__name__ = ["flambe", "swf", "MovieKeyframe"];
    nc.prototype = {
        setSymbol: function (a) {
            this.symbol = a
        },
        __class__: nc
    };
    var wc =
        function () {};
    f["flambe.util.Assert"] = wc;
    wc.__name__ = ["flambe", "util", "Assert"];
    wc.that = function () {};
    var pb = function () {};
    f["flambe.util.BitSets"] = pb;
    pb.__name__ = ["flambe", "util", "BitSets"];
    pb.set = function (a, b, c) {
        return c ? a | b : a & ~b
    };
    var db = function () {
        this.mainSection = new O;
        this.sections = new O
    };
    f["flambe.util.Config"] = db;
    db.__name__ = ["flambe", "util", "Config"];
    db.parse = function (a) {
        for (var b = new db, c = new $("^\\s*;", ""), e = new $("^\\s*\\[\\s*([^\\]]*)\\s*\\]", ""), d = new $("^\\s*([\\w\\.\\-_]+)\\s*=\\s*(.*)",
            ""), h = b.mainSection, f = 0, a = (new $("\r\n|\r|\n", "g")).split(a); f < a.length;) {
            var j = a[f];
            ++f;
            if (!c.match(j))
                if (e.match(j)) j = e.matched(1), b.sections.exists(j) ? h = b.sections.get(j) : (h = new O, b.sections.set(j, h));
                else if (d.match(j)) {
                var j = d.matched(1),
                    i = d.matched(2),
                    k = i.charCodeAt(0);
                if ((34 == k || 39 == k) && i.charCodeAt(i.length - 1) == k) i = p.substr(i, 1, i.length - 2);
                i = I.replace(I.replace(I.replace(I.replace(I.replace(I.replace(i, "\\n", "\n"), "\\r", "\r"), "\\t", "\t"), "\\'", "'"), '\\"', '"'), "\\\\", "\\");
                h.set(j, i)
            }
        }
        return b
    };
    db.prototype = {
        get: function (a) {
            var b = a.indexOf(".");
            if (0 > b) return this.mainSection.get(a);
            var c;
            c = this.sections.get(p.substr(a, 0, b));
            return null != c ? (a = p.substr(a, b + 1, null), c.get(a)) : null
        },
        __class__: db
    };
    var eb = function (a) {
        this.config = a;
        this.missingTranslation = new G
    };
    f["flambe.util.MessageBundle"] = eb;
    eb.__name__ = ["flambe", "util", "MessageBundle"];
    eb.parse = function (a) {
        return new eb(db.parse(a))
    };
    eb.prototype = {
        get: function (a, b) {
            var c = this.config.get(a);
            return null == c ? (this.missingTranslation.emit(a), a) :
                null != b ? M.substitute(c, b) : c
        },
        __class__: eb
    };
    var wb = function () {
        this.success = new G;
        this.error = new G;
        this.progressChanged = new oa;
        this.hasResult = !1;
        this._total = this._progress = 0
    };
    f["flambe.util.Promise"] = wb;
    wb.__name__ = ["flambe", "util", "Promise"];
    wb.prototype = {
        set_result: function (a) {
            if (this.hasResult) throw "Promise result already assigned";
            this._result = a;
            this.hasResult = !0;
            this.success.emit(a);
            return a
        },
        get: function (a) {
            return this.hasResult ? (a(this._result), null) : this.success.connect(a).once()
        },
        set_progress: function (a) {
            this._progress !=
                a && (this._progress = a, this.progressChanged.emit());
            return a
        },
        set_total: function (a) {
            this._total != a && (this._total = a, this.progressChanged.emit());
            return a
        },
        __class__: wb,
        __properties__: {
            set_total: "set_total",
            set_progress: "set_progress",
            set_result: "set_result"
        }
    };
    var oa = function (a) {
        P.call(this, a)
    };
    f["flambe.util.Signal0"] = oa;
    oa.__name__ = ["flambe", "util", "Signal0"];
    oa.__super__ = P;
    oa.prototype = z(P.prototype, {
        connect: function (a, b) {
            null == b && (b = !1);
            return this.connectImpl(a, b)
        },
        emit: function () {
            var a = this;
            this._head ==
                P.DISPATCHING_SENTINEL ? this.defer(function () {
                    a.emitImpl()
                }) : this.emitImpl()
        },
        emitImpl: function () {
            for (var a = this.willEmit(), b = a; null != b;) b._listener(), b.stayInList || b.dispose(), b = b._next;
            this.didEmit(a)
        },
        __class__: oa
    });
    var Sb = function (a) {
        this.next = null;
        this.fn = a
    };
    f["flambe.util._SignalBase.Task"] = Sb;
    Sb.__name__ = ["flambe", "util", "_SignalBase", "Task"];
    Sb.prototype = {
        __class__: Sb
    };
    var M = function () {};
    f["flambe.util.Strings"] = M;
    M.__name__ = ["flambe", "util", "Strings"];
    M.getFileExtension = function (a) {
        var b =
            a.lastIndexOf(".");
        return 0 < b ? p.substr(a, b + 1, null) : null
    };
    M.removeFileExtension = function (a) {
        var b = a.lastIndexOf(".");
        return 0 < b ? p.substr(a, 0, b) : a
    };
    M.getUrlExtension = function (a) {
        var b = a.lastIndexOf("?");
        0 <= b && (a = p.substr(a, 0, b));
        b = a.lastIndexOf("/");
        0 <= b && (a = p.substr(a, b + 1, null));
        return M.getFileExtension(a)
    };
    M.joinPath = function (a, b) {
        0 < a.length && 47 != a.charCodeAt(a.length - 1) && (a += "/");
        return a + b
    };
    M.substitute = function (a, b) {
        for (var c = 0, e = b.length; c < e;) var d = c++,
            a = I.replace(a, "{" + d + "}", b[d]);
        return a
    };
    M.withFields = function (a, b) {
        var c = b.length;
        if (0 < c) {
            for (var a = 0 < a.length ? a + " [" : a + "[", e = 0; e < c;) {
                0 < e && (a += ", ");
                var d = b[e],
                    h = b[e + 1];
                if (x.is(h, Error)) {
                    var f = h.stack;
                    null != f && (h = f)
                }
                a += d + "=" + x.string(h);
                e += 2
            }
            a += "]"
        }
        return a
    };
    var pa = function () {
        this.buf = new Ga;
        this.cache = [];
        this.useCache = pa.USE_CACHE;
        this.useEnumIndex = pa.USE_ENUM_INDEX;
        this.shash = new O;
        this.scount = 0
    };
    f["haxe.Serializer"] = pa;
    pa.__name__ = ["haxe", "Serializer"];
    pa.prototype = {
        toString: function () {
            return this.buf.b
        },
        serializeString: function (a) {
            var b =
                this.shash.get(a);
            null != b ? (this.buf.b += "R", this.buf.b = null == b ? this.buf.b + "null" : this.buf.b + ("" + b)) : (this.shash.set(a, this.scount++), this.buf.b += "y", a = encodeURIComponent(a), this.buf.b = null == a.length ? this.buf.b + "null" : this.buf.b + ("" + a.length), this.buf.b += ":", this.buf.b = null == a ? this.buf.b + "null" : this.buf.b + ("" + a))
        },
        serializeRef: function (a) {
            for (var b = typeof a, c = 0, e = this.cache.length; c < e;) {
                var d = c++,
                    h = this.cache[d];
                if (typeof h == b && h == a) return this.buf.b += "r", this.buf.b = null == d ? this.buf.b + "null" : this.buf.b +
                    ("" + d), !0
            }
            this.cache.push(a);
            return !1
        },
        serializeFields: function (a) {
            for (var b = 0, c = F.fields(a); b < c.length;) {
                var e = c[b];
                ++b;
                this.serializeString(e);
                this.serialize(F.field(a, e))
            }
            this.buf.b += "g"
        },
        serialize: function (a) {
            var b = H["typeof"](a);
            switch (b[1]) {
            case 0:
                this.buf.b += "n";
                break;
            case 1:
                if (0 == a) {
                    this.buf.b += "z";
                    break
                }
                this.buf.b += "i";
                this.buf.b = null == a ? this.buf.b + "null" : this.buf.b + ("" + a);
                break;
            case 2:
                Math.isNaN(a) ? this.buf.b += "k" : Math.isFinite(a) ? (this.buf.b += "d", this.buf.b = null == a ? this.buf.b + "null" : this.buf.b +
                    ("" + a)) : this.buf.b = 0 > a ? this.buf.b + "m" : this.buf.b + "p";
                break;
            case 3:
                this.buf.b = a ? this.buf.b + "t" : this.buf.b + "f";
                break;
            case 6:
                b = b[2];
                if (b == String) {
                    this.serializeString(a);
                    break
                }
                if (this.useCache && this.serializeRef(a)) break;
                switch (b) {
                case Array:
                    b = 0;
                    this.buf.b += "a";
                    for (var c = a.length, e = 0; e < c;) {
                        var d = e++;
                        null == a[d] ? b++ : (0 < b && (1 == b ? this.buf.b += "n" : (this.buf.b += "u", this.buf.b = null == b ? this.buf.b + "null" : this.buf.b + ("" + b)), b = 0), this.serialize(a[d]))
                    }
                    0 < b && (1 == b ? this.buf.b += "n" : (this.buf.b += "u", this.buf.b = null ==
                        b ? this.buf.b + "null" : this.buf.b + ("" + b)));
                    this.buf.b += "h";
                    break;
                case fb:
                    this.buf.b += "l";
                    for (a = a.iterator(); a.hasNext();) this.serialize(a.next());
                    this.buf.b += "h";
                    break;
                case Date:
                    this.buf.b += "v";
                    this.buf.add(p.dateStr(a));
                    break;
                case O:
                    this.buf.b += "b";
                    for (b = a.keys(); b.hasNext();) c = b.next(), this.serializeString(c), this.serialize(a.get(c));
                    this.buf.b += "h";
                    break;
                case ba:
                    this.buf.b += "q";
                    for (b = a.keys(); b.hasNext();) c = b.next(), this.buf.b += ":", this.buf.b = null == c ? this.buf.b + "null" : this.buf.b + ("" + c), this.serialize(a.get(c));
                    this.buf.b += "h";
                    break;
                case Fa:
                    this.buf.b += "M";
                    for (b = a.keys(); b.hasNext();) c = b.next(), e = F.field(c, "__id__"), F.deleteField(c, "__id__"), this.serialize(c), c.__id__ = e, this.serialize(a.h[c.__id__]);
                    this.buf.b += "h";
                    break;
                case Qa:
                    e = 0;
                    d = a.length - 2;
                    b = new Ga;
                    for (c = pa.BASE64; e < d;) {
                        var h = a.get(e++),
                            f = a.get(e++),
                            j = a.get(e++);
                        b.add(c.charAt(h >> 2));
                        b.add(c.charAt((h << 4 | f >> 4) & 63));
                        b.add(c.charAt((f << 2 | j >> 6) & 63));
                        b.add(c.charAt(j & 63))
                    }
                    e == d ? (d = a.get(e++), a = a.get(e++), b.add(c.charAt(d >> 2)), b.add(c.charAt((d << 4 | a >> 4) &
                        63)), b.add(c.charAt(a << 2 & 63))) : e == d + 1 && (a = a.get(e++), b.add(c.charAt(a >> 2)), b.add(c.charAt(a << 4 & 63)));
                    a = b.b;
                    this.buf.b += "s";
                    this.buf.b = null == a.length ? this.buf.b + "null" : this.buf.b + ("" + a.length);
                    this.buf.b += ":";
                    this.buf.b = null == a ? this.buf.b + "null" : this.buf.b + ("" + a);
                    break;
                default:
                    this.useCache && this.cache.pop(), null != a.hxSerialize ? (this.buf.b += "C", this.serializeString(H.getClassName(b)), this.useCache && this.cache.push(a), a.hxSerialize(this), this.buf.b += "g") : (this.buf.b += "c", this.serializeString(H.getClassName(b)),
                        this.useCache && this.cache.push(a), this.serializeFields(a))
                }
                break;
            case 4:
                if (this.useCache && this.serializeRef(a)) break;
                this.buf.b += "o";
                this.serializeFields(a);
                break;
            case 7:
                b = b[2];
                if (this.useCache) {
                    if (this.serializeRef(a)) break;
                    this.cache.pop()
                }
                this.buf.b = this.useEnumIndex ? this.buf.b + "j" : this.buf.b + "w";
                this.serializeString(H.getEnumName(b));
                this.useEnumIndex ? (this.buf.b += ":", this.buf.b += x.string(a[1])) : this.serializeString(a[0]);
                this.buf.b += ":";
                b = a.length;
                this.buf.b += x.string(b - 2);
                for (c = 2; c < b;) e = c++,
                    this.serialize(a[e]);
                this.useCache && this.cache.push(a);
                break;
            case 5:
                throw "Cannot serialize function";
            default:
                throw "Cannot serialize " + x.string(a);
            }
        },
        __class__: pa
    };
    var V = function (a) {
        this.buf = a;
        this.length = a.length;
        this.pos = 0;
        this.scache = [];
        this.cache = [];
        a = V.DEFAULT_RESOLVER;
        null == a && (a = H, V.DEFAULT_RESOLVER = a);
        this.setResolver(a)
    };
    f["haxe.Unserializer"] = V;
    V.__name__ = ["haxe", "Unserializer"];
    V.initCodes = function () {
        for (var a = [], b = 0, c = V.BASE64.length; b < c;) {
            var e = b++;
            a[V.BASE64.charCodeAt(e)] = e
        }
        return a
    };
    V.run = function (a) {
        return (new V(a)).unserialize()
    };
    V.prototype = {
        setResolver: function (a) {
            this.resolver = null == a ? {
                resolveClass: function () {
                    return null
                },
                resolveEnum: function () {
                    return null
                }
            } : a
        },
        get: function (a) {
            return this.buf.charCodeAt(a)
        },
        readDigits: function () {
            for (var a = 0, b = !1, c = this.pos;;) {
                var e = this.buf.charCodeAt(this.pos);
                if (e != e) break;
                if (45 == e) {
                    if (this.pos != c) break;
                    b = !0
                } else {
                    if (48 > e || 57 < e) break;
                    a = 10 * a + (e - 48)
                }
                this.pos++
            }
            b && (a *= -1);
            return a
        },
        unserializeObject: function (a) {
            for (;;) {
                if (this.pos >= this.length) throw "Invalid object";
                if (103 == this.buf.charCodeAt(this.pos)) break;
                var b = this.unserialize();
                if ("string" != typeof b) throw "Invalid object key";
                var c = this.unserialize();
                a[b] = c
            }
            this.pos++
        },
        unserializeEnum: function (a, b) {
            if (58 != this.get(this.pos++)) throw "Invalid enum format";
            var c = this.readDigits();
            if (0 == c) return H.createEnum(a, b);
            for (var e = []; 0 < c--;) e.push(this.unserialize());
            return H.createEnum(a, b, e)
        },
        unserialize: function () {
            switch (this.get(this.pos++)) {
            case 110:
                return null;
            case 116:
                return !0;
            case 102:
                return !1;
            case 122:
                return 0;
            case 105:
                return this.readDigits();
            case 100:
                for (var a = this.pos;;) {
                    var b = this.buf.charCodeAt(this.pos);
                    if (43 <= b && 58 > b || 101 == b || 69 == b) this.pos++;
                    else break
                }
                return x.parseFloat(p.substr(this.buf, a, this.pos - a));
            case 121:
                a = this.readDigits();
                if (58 != this.get(this.pos++) || this.length - this.pos < a) throw "Invalid string length";
                b = p.substr(this.buf, this.pos, a);
                this.pos += a;
                b = decodeURIComponent(b.split("+").join(" "));
                this.scache.push(b);
                return b;
            case 107:
                return Math.NaN;
            case 109:
                return Math.NEGATIVE_INFINITY;
            case 112:
                return Math.POSITIVE_INFINITY;
            case 97:
                a = [];
                for (this.cache.push(a);;) {
                    b = this.buf.charCodeAt(this.pos);
                    if (104 == b) {
                        this.pos++;
                        break
                    }
                    117 == b ? (this.pos++, b = this.readDigits(), a[a.length + b - 1] = null) : a.push(this.unserialize())
                }
                return a;
            case 111:
                return a = {}, this.cache.push(a), this.unserializeObject(a), a;
            case 114:
                a = this.readDigits();
                if (0 > a || a >= this.cache.length) throw "Invalid reference";
                return this.cache[a];
            case 82:
                a = this.readDigits();
                if (0 > a || a >= this.scache.length) throw "Invalid string reference";
                return this.scache[a];
            case 120:
                throw this.unserialize();
            case 99:
                a = this.unserialize();
                b = this.resolver.resolveClass(a);
                if (null == b) throw "Class not found " + a;
                a = H.createEmptyInstance(b);
                this.cache.push(a);
                this.unserializeObject(a);
                return a;
            case 119:
                a = this.unserialize();
                b = this.resolver.resolveEnum(a);
                if (null == b) throw "Enum not found " + a;
                a = this.unserializeEnum(b, this.unserialize());
                this.cache.push(a);
                return a;
            case 106:
                a = this.unserialize();
                b = this.resolver.resolveEnum(a);
                if (null == b) throw "Enum not found " + a;
                this.pos++;
                var c = this.readDigits(),
                    e = H.getEnumConstructs(b)[c];
                if (null == e) throw "Unknown enum index " + a + "@" + c;
                a = this.unserializeEnum(b, e);
                this.cache.push(a);
                return a;
            case 108:
                a = new fb;
                for (this.cache.push(a); 104 != this.buf.charCodeAt(this.pos);) a.add(this.unserialize());
                this.pos++;
                return a;
            case 98:
                a = new O;
                for (this.cache.push(a); 104 != this.buf.charCodeAt(this.pos);) b = this.unserialize(), a.set(b, this.unserialize());
                this.pos++;
                return a;
            case 113:
                a = new ba;
                this.cache.push(a);
                for (b = this.get(this.pos++); 58 == b;) b = this.readDigits(), a.set(b, this.unserialize()), b = this.get(this.pos++);
                if (104 != b) throw "Invalid IntMap format";
                return a;
            case 77:
                a = new Fa;
                for (this.cache.push(a); 104 != this.buf.charCodeAt(this.pos);) b = this.unserialize(), a.set(b, this.unserialize());
                this.pos++;
                return a;
            case 118:
                return a = p.substr(this.buf, this.pos, 19), a = p.strDate(a), this.cache.push(a), this.pos += 19, a;
            case 115:
                a = this.readDigits();
                e = this.buf;
                if (58 != this.get(this.pos++) || this.length - this.pos < a) throw "Invalid bytes length";
                var d = V.CODES;
                null == d && (d = V.initCodes(), V.CODES = d);
                for (var h = this.pos, f = a & 3, j = h + (a - f), b = Qa.alloc(3 *
                    (a >> 2) + (2 <= f ? f - 1 : 0)), c = 0; h < j;) {
                    var i = d[I.fastCodeAt(e, h++)],
                        k = d[I.fastCodeAt(e, h++)];
                    b.set(c++, i << 2 | k >> 4);
                    i = d[I.fastCodeAt(e, h++)];
                    b.set(c++, k << 4 | i >> 2);
                    k = d[I.fastCodeAt(e, h++)];
                    b.set(c++, i << 6 | k)
                }
                2 <= f && (k = d[I.fastCodeAt(e, h++)], j = d[I.fastCodeAt(e, h++)], b.set(c++, k << 2 | j >> 4), 3 == f && (e = d[I.fastCodeAt(e, h++)], b.set(c++, j << 4 | e >> 2)));
                this.pos += a;
                this.cache.push(b);
                return b;
            case 67:
                a = this.unserialize();
                b = this.resolver.resolveClass(a);
                if (null == b) throw "Class not found " + a;
                a = H.createEmptyInstance(b);
                this.cache.push(a);
                a.hxUnserialize(this);
                if (103 != this.get(this.pos++)) throw "Invalid custom data";
                return a
            }
            this.pos--;
            throw "Invalid char " + this.buf.charAt(this.pos) + " at position " + this.pos;
        },
        __class__: V
    };
    var ba = function () {
        this.h = {}
    };
    f["haxe.ds.IntMap"] = ba;
    ba.__name__ = ["haxe", "ds", "IntMap"];
    ba.__interfaces__ = [Qb];
    ba.prototype = {
        set: function (a, b) {
            this.h[a] = b
        },
        get: function (a) {
            return this.h[a]
        },
        exists: function (a) {
            return this.h.hasOwnProperty(a)
        },
        remove: function (a) {
            if (!this.h.hasOwnProperty(a)) return !1;
            delete this.h[a];
            return !0
        },
        keys: function () {
            var a = [],
                b;
            for (b in this.h) this.h.hasOwnProperty(b) && a.push(b | 0);
            return p.iter(a)
        },
        __class__: ba
    };
    var Fa = function () {
        this.h = {};
        this.h.__keys__ = {}
    };
    f["haxe.ds.ObjectMap"] = Fa;
    Fa.__name__ = ["haxe", "ds", "ObjectMap"];
    Fa.__interfaces__ = [Qb];
    Fa.prototype = {
        set: function (a, b) {
            var c = a.__id__ || (a.__id__ = ++Fa.count);
            this.h[c] = b;
            this.h.__keys__[c] = a
        },
        keys: function () {
            var a = [],
                b;
            for (b in this.h.__keys__) this.h.hasOwnProperty(b) && a.push(this.h.__keys__[b]);
            return p.iter(a)
        },
        __class__: Fa
    };
    var O = function () {
        this.h = {}
    };
    f["haxe.ds.StringMap"] = O;
    O.__name__ = ["haxe", "ds", "StringMap"];
    O.__interfaces__ = [Qb];
    O.prototype = {
        set: function (a, b) {
            this.h["$" + a] = b
        },
        get: function (a) {
            return this.h["$" + a]
        },
        exists: function (a) {
            return this.h.hasOwnProperty("$" + a)
        },
        keys: function () {
            var a = [],
                b;
            for (b in this.h) this.h.hasOwnProperty(b) && a.push(b.substr(1));
            return p.iter(a)
        },
        iterator: function () {
            return {
                ref: this.h,
                it: this.keys(),
                hasNext: function () {
                    return this.it.hasNext()
                },
                next: function () {
                    return this.ref["$" + this.it.next()]
                }
            }
        },
        __class__: O
    };
    var Qa = function (a, b) {
        this.length = a;
        this.b = b
    };
    f["haxe.io.Bytes"] = Qa;
    Qa.__name__ = ["haxe", "io", "Bytes"];
    Qa.alloc = function (a) {
        for (var b = [], c = 0; c < a;) c++, b.push(0);
        return new Qa(a, b)
    };
    Qa.prototype = {
        get: function (a) {
            return this.b[a]
        },
        set: function (a, b) {
            this.b[a] = b & 255
        },
        __class__: Qa
    };
    var zc = function () {};
    f["haxe.io.Eof"] = zc;
    zc.__name__ = ["haxe", "io", "Eof"];
    zc.prototype = {
        toString: function () {
            return "Eof"
        },
        __class__: zc
    };
    var vc = function () {};
    f["haxe.rtti.Meta"] = vc;
    vc.__name__ = ["haxe", "rtti", "Meta"];
    vc.getType = function (a) {
        a =
            a.__meta__;
        return null == a || null == a.obj ? {} : a.obj
    };
    var ra = function () {};
    f["haxe.xml.Parser"] = ra;
    ra.__name__ = ["haxe", "xml", "Parser"];
    ra.parse = function (a) {
        var b = o.createDocument();
        ra.doParse(a, 0, b);
        return b
    };
    ra.doParse = function (a, b, c) {
        null == b && (b = 0);
        for (var e = null, d = 1, h = 1, f = null, j = 0, i = 0, k = 0, m = a.charCodeAt(b), l = new Ga; m == m;) {
            switch (d) {
            case 0:
                switch (m) {
                case 10:
                case 13:
                case 9:
                case 32:
                    break;
                default:
                    d = h;
                    continue
                }
                break;
            case 1:
                switch (m) {
                case 60:
                    d = 0;
                    h = 2;
                    break;
                default:
                    j = b;
                    d = 13;
                    continue
                }
                break;
            case 13:
                60 == m ? (h = o.createPCData(l.b +
                    p.substr(a, j, b - j)), l = new Ga, c.addChild(h), i++, d = 0, h = 2) : 38 == m && (l.addSub(a, j, b - j), d = 18, h = 13, j = b + 1);
                break;
            case 17:
                93 == m && 93 == a.charCodeAt(b + 1) && 62 == a.charCodeAt(b + 2) && (d = o.createCData(p.substr(a, j, b - j)), c.addChild(d), i++, b += 2, d = 1);
                break;
            case 2:
                switch (m) {
                case 33:
                    if (91 == a.charCodeAt(b + 1)) {
                        b += 2;
                        if ("CDATA[" != p.substr(a, b, 6).toUpperCase()) throw "Expected <![CDATA[";
                        b += 5;
                        d = 17
                    } else if (68 == a.charCodeAt(b + 1) || 100 == a.charCodeAt(b + 1)) {
                        if ("OCTYPE" != p.substr(a, b + 2, 6).toUpperCase()) throw "Expected <!DOCTYPE";
                        b += 8;
                        d = 16
                    } else {
                        if (45 != a.charCodeAt(b + 1) || 45 != a.charCodeAt(b + 2)) throw "Expected <\!--";
                        b += 2;
                        d = 15
                    }
                    j = b + 1;
                    break;
                case 63:
                    d = 14;
                    j = b;
                    break;
                case 47:
                    if (null == c) throw "Expected node name";
                    j = b + 1;
                    d = 0;
                    h = 10;
                    break;
                default:
                    d = 3;
                    j = b;
                    continue
                }
                break;
            case 3:
                if (!(97 <= m && 122 >= m || 65 <= m && 90 >= m || 48 <= m && 57 >= m || 58 == m || 46 == m || 95 == m || 45 == m)) {
                    if (b == j) throw "Expected node name";
                    e = o.createElement(p.substr(a, j, b - j));
                    c.addChild(e);
                    d = 0;
                    h = 4;
                    continue
                }
                break;
            case 4:
                switch (m) {
                case 47:
                    d = 11;
                    i++;
                    break;
                case 62:
                    d = 9;
                    i++;
                    break;
                default:
                    d = 5;
                    j = b;
                    continue
                }
                break;
            case 5:
                if (!(97 <= m && 122 >= m || 65 <= m && 90 >= m || 48 <= m && 57 >= m || 58 == m || 46 == m || 95 == m || 45 == m)) {
                    if (j == b) throw "Expected attribute name";
                    f = p.substr(a, j, b - j);
                    if (e.exists(f)) throw "Duplicate attribute";
                    d = 0;
                    h = 6;
                    continue
                }
                break;
            case 6:
                switch (m) {
                case 61:
                    d = 0;
                    h = 7;
                    break;
                default:
                    throw "Expected =";
                }
                break;
            case 7:
                switch (m) {
                case 34:
                case 39:
                    d = 8;
                    j = b;
                    break;
                default:
                    throw 'Expected "';
                }
                break;
            case 8:
                m == a.charCodeAt(j) && (h = p.substr(a, j + 1, b - j - 1), e.set(f, h), d = 0, h = 4);
                break;
            case 9:
                j = b = ra.doParse(a, b, e);
                d = 1;
                break;
            case 11:
                switch (m) {
                case 62:
                    d =
                        1;
                    break;
                default:
                    throw "Expected >";
                }
                break;
            case 12:
                switch (m) {
                case 62:
                    return 0 == i && c.addChild(o.createPCData("")), b;
                default:
                    throw "Expected >";
                }
            case 10:
                if (!(97 <= m && 122 >= m || 65 <= m && 90 >= m || 48 <= m && 57 >= m || 58 == m || 46 == m || 95 == m || 45 == m)) {
                    if (j == b) throw "Expected node name";
                    if (p.substr(a, j, b - j) != c.get_nodeName()) throw "Expected </" + c.get_nodeName() + ">";
                    d = 0;
                    h = 12;
                    continue
                }
                break;
            case 15:
                45 == m && 45 == a.charCodeAt(b + 1) && 62 == a.charCodeAt(b + 2) && (c.addChild(o.createComment(p.substr(a, j, b - j))), b += 2, d = 1);
                break;
            case 16:
                91 == m ?
                    k++ : 93 == m ? k-- : 62 == m && 0 == k && (c.addChild(o.createDocType(p.substr(a, j, b - j))), d = 1);
                break;
            case 14:
                63 == m && 62 == a.charCodeAt(b + 1) && (b++, d = p.substr(a, j + 1, b - j - 2), c.addChild(o.createProcessingInstruction(d)), d = 1);
                break;
            case 18:
                59 == m && (j = p.substr(a, j, b - j), 35 == j.charCodeAt(0) ? (j = 120 == j.charCodeAt(1) ? x.parseInt("0" + p.substr(j, 1, j.length - 1)) : x.parseInt(p.substr(j, 1, j.length - 1)), l.add(String.fromCharCode(j))) : ra.escapes.exists(j) ? l.add(ra.escapes.get(j)) : l.b += x.string("&" + j + ";"), j = b + 1, d = h)
            }
            m = I.fastCodeAt(a, ++b)
        }
        1 ==
            d && (j = b, d = 13);
        if (13 == d) return (b != j || 0 == i) && c.addChild(o.createPCData(l.b + p.substr(a, j, b - j))), b;
        throw "Unexpected end";
    };
    var N = function () {};
    f["js.Boot"] = N;
    N.__name__ = ["js", "Boot"];
    N.getClass = function (a) {
        return a instanceof Array && null == a.__enum__ ? Array : a.__class__
    };
    N.__string_rec = function (a, b) {
        if (null == a) return "null";
        if (5 <= b.length) return "<...>";
        var c = typeof a;
        if ("function" == c && (a.__name__ || a.__ename__)) c = "object";
        switch (c) {
        case "object":
            if (a instanceof Array) {
                if (a.__enum__) {
                    if (2 == a.length) return a[0];
                    for (var c = a[0] + "(", b = b + "\t", e = 2, d = a.length; e < d;) var f = e++,
                        c = 2 != f ? c + ("," + N.__string_rec(a[f], b)) : c + N.__string_rec(a[f], b);
                    return c + ")"
                }
                c = a.length;
                e = "[";
                b += "\t";
                for (d = 0; d < c;) f = d++, e += (0 < f ? "," : "") + N.__string_rec(a[f], b);
                return e + "]"
            }
            try {
                e = a.toString
            } catch (i) {
                return "???"
            }
            if (null != e && e != Object.toString && (c = a.toString(), "[object Object]" != c)) return c;
            c = null;
            e = "{\n";
            b += "\t";
            d = null != a.hasOwnProperty;
            for (c in a)
                if (!d || a.hasOwnProperty(c)) "prototype" == c || "__class__" == c || "__super__" == c || "__interfaces__" == c ||
                    "__properties__" == c || (2 != e.length && (e += ", \n"), e += b + c + " : " + N.__string_rec(a[c], b));
            b = b.substring(1);
            return e + ("\n" + b + "}");
        case "function":
            return "<function>";
        case "string":
            return a;
        default:
            return "" + a
        }
    };
    N.__interfLoop = function (a, b) {
        if (null == a) return !1;
        if (a == b) return !0;
        var c = a.__interfaces__;
        if (null != c)
            for (var e = 0, d = c.length; e < d;) {
                var f = e++,
                    f = c[f];
                if (f == b || N.__interfLoop(f, b)) return !0
            }
        return N.__interfLoop(a.__super__, b)
    };
    N.__instanceof = function (a, b) {
        if (null == b) return !1;
        switch (b) {
        case Ec:
            return (a | 0) ===
                a;
        case Bc:
            return "number" == typeof a;
        case Cc:
            return "boolean" == typeof a;
        case String:
            return "string" == typeof a;
        case Array:
            return a instanceof Array && null == a.__enum__;
        case Fc:
            return !0;
        default:
            if (null != a) {
                if ("function" == typeof b && (a instanceof b || N.__interfLoop(N.getClass(a), b))) return !0
            } else return !1;
            return b == Gc && null != a.__name__ || b == Hc && null != a.__ename__ ? !0 : a.__enum__ == b
        }
    };
    N.__cast = function (a, b) {
        if (N.__instanceof(a, b)) return a;
        throw "Cannot cast " + x.string(a) + " to " + x.string(b);
    };
    var uc = function () {};
    f["js.Browser"] =
        uc;
    uc.__name__ = ["js", "Browser"];
    uc.getLocalStorage = function () {
        try {
            var a = window.localStorage;
            a.getItem("");
            return a
        } catch (b) {
            return null
        }
    };
    var Nb = function (a, b) {
        this.prevMarker1 = this.prevMarker2 = 0;
        this.boosterBarCMax = 7E3;
        this.gridLayer = a;
        this.grid = b
    };
    f["objects.BoosterComp"] = Nb;
    Nb.__name__ = ["objects", "BoosterComp"];
    Nb.__super__ = E;
    Nb.prototype = z(E.prototype, {
        get_name: function () {
            return "BoosterComp_9"
        },
        onAdded: function () {
            var a = d.addImageSprite(this.owner, 92, d.height - 102, "booster_bar", 1, 1, !1);
            this.boosterBarFillSprite =
                d.addImageSprite(a, 0, 0, "booster_bar_fill", 1, 1, !1)._compMap.Sprite_0;
            this.boosterBarC = 0;
            this.boosterBarFillSpriteRect = new sb(0, 0, 0, this.boosterBarFillSprite.getNaturalHeight());
            this.booster1Ent = d.addImageSprite(this.owner, 340, d.height - 60, "booster1_mrk");
            d.addImageSprite(this.booster1Ent, this.booster1Ent._compMap.Sprite_0.anchorX._value, this.booster1Ent._compMap.Sprite_0.anchorY._value, "booster1_mrk2")._compMap.Sprite_0.set_visible(!1);
            this.booster1Ent._compMap.Disposer_2.connect1(this.booster1Ent._compMap.Sprite_0.get_pointerDown(),
                ea(this, this.onPointerDown));
            this.marker1Ent = d.addImageSprite(this.owner, 0, 0, "booster1_mrk2");
            this.marker1Sprite = this.marker1Ent._compMap.Sprite_0;
            this.marker1Sprite.set_visible(!1);
            this.booster2Ent = d.addImageSprite(this.owner, 500, d.height - 60, "booster2_mrk");
            d.addImageSprite(this.booster2Ent, this.booster2Ent._compMap.Sprite_0.anchorX._value, this.booster2Ent._compMap.Sprite_0.anchorY._value, "booster2_mrk2")._compMap.Sprite_0.set_visible(!1);
            this.booster2Ent._compMap.Disposer_2.connect1(this.booster2Ent._compMap.Sprite_0.get_pointerDown(),
                ea(this, this.onPointerDown2));
            this.marker2Ent = d.addImageSprite(this.owner, 0, 0, "booster2_mrk2");
            this.marker2Sprite = this.marker2Ent._compMap.Sprite_0;
            this.marker2Sprite.set_visible(!1);
            this.offsetY = 80;
            this.snapX = i.pieceWidth;
            this.snapY = i.pieceHeight;
            this.snapOffsetX = 40;
            this.snapOffsetY = i.offsetY - 70;
            this.updateBar(0)
        },
        onUpdate: function () {
            if (this.dragging)
                if (l._platform.getPointer().isDown()) C.gridIsActive = !1, 0 != (this.marker1Sprite._flags & 1) ? (this.marker1Sprite.setXY(d.localPointerX(), d.localPointerY() -
                    this.offsetY), this.snapMarker1()) : 0 != (this.marker2Sprite._flags & 1) && (this.marker2Sprite.setXY(d.localPointerX(), d.localPointerY() - this.offsetY), this.snapMarker2());
                else if (this.dragging = !1, C.gridIsActive = !0, 0 != (this.marker1Sprite._flags & 1)) {
                if (this.marker1Sprite.set_visible(!1), -1E3 != this.marker1)
                    for (var a = this.grid.getRow(this.marker1), b = 0, c = a.length; b < c;) {
                        var e = b++;
                        if (null != a[e] && 111 != a[e].type && 222 != a[e].type) {
                            a[e].activateBooster(this.marker1, "row", this.marker1Sprite.x._value, this.marker1Sprite.y._value);
                            this.markPieces(this.marker1, !1, "row");
                            this.boosterBarC = 0;
                            this.updateBar(0);
                            break
                        }
                    }
            } else if (0 != (this.marker2Sprite._flags & 1) && (this.marker2Sprite.set_visible(!1), -1E3 != this.marker2)) {
                a = this.grid.getColumn(this.marker2);
                b = 0;
                for (c = a.length; b < c;)
                    if (e = b++, null != a[e] && 111 != a[e].type && 222 != a[e].type) {
                        a[e].activateBooster(this.marker2, "column", this.marker2Sprite.x._value, this.marker2Sprite.y._value);
                        this.markPieces(this.marker2, !1, "column");
                        this.boosterBarC = 0;
                        this.updateBar(0);
                        break
                    }
            }
        },
        updateBar: function (a) {
            this.boosterBarC +=
                a / 1 | 0;
            this.boosterBarC > this.boosterBarCMax && (this.boosterBarC = this.boosterBarCMax);
            this.boosterBarFillSpriteRect.width = this.boosterBarC / this.boosterBarCMax * this.boosterBarFillSprite.getNaturalWidth();
            this.boosterBarFillSprite.scissor = this.boosterBarFillSpriteRect;
            a = 100 * (this.boosterBarC / this.boosterBarCMax) | 0;
            60 < a ? (this.booster1Active = !0, this.booster1Ent._compMap.Sprite_0.setAlpha(1), this.booster1Ent.firstChild._compMap.Sprite_0.set_visible(!0)) : (this.booster1Active = !1, this.booster1Ent._compMap.Sprite_0.setAlpha(0.6),
                this.booster1Ent.firstChild._compMap.Sprite_0.set_visible(!1));
            100 <= a ? (this.booster2Active = !0, this.booster2Ent._compMap.Sprite_0.setAlpha(1), this.booster2Ent.firstChild._compMap.Sprite_0.set_visible(!0)) : (this.booster2Active = !1, this.booster2Ent._compMap.Sprite_0.setAlpha(0.6), this.booster2Ent.firstChild._compMap.Sprite_0.set_visible(!1))
        },
        snapMarker1: function () {
            120 < this.marker1Sprite.y._value && 810 > this.marker1Sprite.y._value ? (this.marker1Sprite.y.set__(Math.round((this.marker1Sprite.y._value - this.snapOffsetY %
                this.snapY) / this.snapY) * this.snapY + this.snapOffsetY % this.snapY), this.marker1 = Math.round(10 * (this.marker1Sprite.y._value / (i.initPlayingGridHeight * i.pieceWidth))) - 2 + (i.playingGridHeight - i.initPlayingGridHeight), this.prevMarker1 != this.marker1 && (this.markPieces(this.prevMarker1, !1, "row"), this.markPieces(this.marker1, !0, "row"))) : (this.markPieces(this.prevMarker1, !1, "row"), this.marker1 = -1E3);
            this.prevMarker1 = this.marker1
        },
        snapMarker2: function () {
            32 < this.marker2Sprite.x._value && 630 > this.marker2Sprite.x._value &&
                120 < this.marker2Sprite.y._value && 810 > this.marker2Sprite.y._value ? (this.marker2Sprite.x.set__(Math.round((this.marker2Sprite.x._value - this.snapOffsetX % this.snapX) / this.snapX) * this.snapX + this.snapOffsetX % this.snapX), this.marker2 = Math.round(10 * (this.marker2Sprite.x._value / d.width)) - 1, this.prevMarker2 != this.marker2 && (this.markPieces(this.prevMarker2, !1, "column"), this.markPieces(this.marker2, !0, "column"))) : (this.markPieces(this.prevMarker2, !1, "column"), this.marker2 = -1E3);
            this.prevMarker2 = this.marker2
        },
        markPieces: function (a, b, c) {
            if (!(0 > a)) {
                var e = [];
                "row" == c ? e = i.ref.getRow(a) : "column" == c && (e = i.ref.getColumn(a));
                a = 0;
                for (c = e.length; a < c;) {
                    var d = a++;
                    null != e[d] && 111 != e[d].type && 222 != e[d].type && (b ? e[d].pieceEnt._compMap.Sprite_0.setAlpha(0.5) : b || e[d].pieceEnt._compMap.Sprite_0.setAlpha(1))
                }
            }
        },
        onPointerDown: function () {
            this.booster1Active && (this.dragging = !0, C.gridIsActive = !1, this.marker1Sprite.set_visible(!0))
        },
        onPointerDown2: function () {
            this.booster2Active && (this.dragging = !0, C.gridIsActive = !1, this.marker2Sprite.set_visible(!0))
        },
        __class__: Nb
    });
    var oc = function () {
        this.root = (new D).add(new ka(!1));
        d.addFillSprite(this.root, d.halfWidth, d.halfHeight, 0, d.width, d.height, 0.5);
        d.addFillSprite(this.root, d.halfWidth, d.halfHeight, 0, d.width, 200, 0.4);
        var a;
        a = d.addLabel(this.root, d.halfWidth, d.halfHeight, d.settings.get(W.lang + ".gameend"), 1.2, 1)._compMap.Sprite_0;
        a.setAlign(K.Center);
        a.setWrapWidth(d.width - 40);
        a.centerAnchor();
        a.setAlign(K.Center);
        d.addButton(this.root, d.halfWidth, d.height - 180, "home_btn", function () {
            d.goToScene((new wa).root)
        })
    };
    f["scenes.GameEndScene"] = oc;
    oc.__name__ = ["scenes", "GameEndScene"];
    oc.prototype = {
        __class__: oc
    };
    var X = function () {
        this.root = (new D).add(new ka);
        this.gridLayer = (new D).add(new r).add(new ma);
        X.sceneBg = d.addImageSprite(this.root, 0, 0, "game_scene_bg", 1, 1, !1);
        this.root.addChild(this.gridLayer);
        this.root.add(new Ob(this.gridLayer, X.cLevel));
        d.addButton(this.root, 585, 60, "pause_btn", function () {
            d.pushScene((new pc).root)
        });
        //SG_Hooks.start()
    };
    f["scenes.GameScene"] = X;
    X.__name__ = ["scenes", "GameScene"];
    X.prototype = {
        __class__: X
    };
    var Ob = function (a, b) {
        this.l27 = {
            moves: 50,
            petsToRescue: 3,
            drop: [0, 0, 5, 0, 0],
            grid: [
                [-1, -1, -1, -1, 222, 222, 222, 222, 222],
                [-1, -1, -1, 31, 32, 31, 30, 32, 111],
                [-1, -1, -1, 34, 32, 31, 31, 33, 111],
                [-1, -1, -1, 31, 30, 30, 33, 32, 111],
                [-1, -1, -1, 32, 33, 33, 30, 31, 222],
                [-1, -1, -1, 33, 31, 34, 34, 31, 222],
                [-1, -1, -1, 34, 33, 34, 30, 34, 222],
                [0, 0, -1, 33, 31, 30, 30, 34, 222],
                [0, 0, -1, 34, 32, 30, 31, 31, 222],
                [222, 222, 222, 33, 222, 222, 222, 222, 222]
            ]
        };
        this.l26 = {
            moves: 20,
            petsToRescue: 1,
            drop: [0, 1, 0, 0, 0],
            grid: [
                [-1, -1, -1, 222, 222, 222, -1, -1, -1],
                [-1, -1, -1, 222,
                    111, 222, -1, -1, -1
                ],
                [-1, -1, -1, 222, 32, 222, -1, -1, -1],
                [-1, -1, -1, 222, 31, 222, -1, -1, -1],
                [-1, -1, -1, 222, 34, 222, -1, -1, -1],
                [-1, -1, -1, 222, 33, 222, -1, -1, -1],
                [-1, -1, -1, 222, 32, 222, -1, -1, -1],
                [-1, -1, -1, 222, 31, 222, -1, -1, -1],
                [0, 0, -1, 32, 30, 34, -1, -1, -1],
                [222, 222, 20, 31, 33, 31, 20, 222, 222]
            ]
        };
        this.l25 = {
            moves: 25,
            petsToRescue: 5,
            drop: [0, 0, 0, 0, 0],
            grid: [
                [222, 222, 222, 222, 222, 222, 222, 222, 222],
                [0, 1, 4, 4, 3, 3, 3, 0, 0],
                [0, 1, 1, 4, 0, 3, 2, 3, 0],
                [2, 111, 4, 111, 0, 111, 2, 111, 2],
                [0, 222, 3, 222, 4, 222, 1, 222, 2],
                [2, 3, 2, 0, 111, 1, 2, 2, 3],
                [1, 2, 31, 34, 222, 32, 31, 3,
                    0
                ],
                [1, 1, 34, 33, 222, 31, 32, 0, 1],
                [0, 0, 33, 32, 222, 30, 34, 0, 1],
                [0, 20, 31, 31, 222, 33, 33, 20, 0]
            ]
        };
        this.l24 = {
            moves: 50,
            petsToRescue: 3,
            drop: [0, 0, 2, 0, 0],
            grid: [
                [3, -1, -1, 222, 222, 222, -1, -1, 0],
                [4, -1, -1, 111, 111, 111, -1, -1, 4],
                [4, -1, -1, 31, 32, 33, -1, -1, 4],
                [2, -1, -1, 32, 30, 34, -1, -1, 3],
                [2, -1, -1, 30, 31, 32, -1, -1, 3],
                [0, -1, -1, 30, 32, 34, -1, -1, 1],
                [0, -1, -1, 33, 30, 33, -1, -1, 1],
                [222, -1, -1, 34, 32, 34, -1, -1, 222],
                [222, 222, -1, 30, 31, 32, -1, 222, 222],
                [222, 222, 222, 40, 40, 40, 222, 222, 222]
            ]
        };
        this.l23 = {
            moves: 90,
            petsToRescue: 10,
            drop: [3, 0, 3, 0, 3],
            grid: [
                [0, 0,
                    0, 3, 111, 3, 1, 0, 0
                ],
                [1, 2, 2, 3, 4, 3, 1, 1, 0],
                [1, 0, 0, 4, 2, 4, 4, 1, 0],
                [31, 31, 32, 30, 31, 33, 33, 30, 30],
                [30, 34, 32, 33, 30, 32, 32, 34, 34],
                [33, 33, 32, 33, 30, 31, 33, 33, 30],
                [34, 34, 33, 34, 33, 30, 34, 34, 31],
                [31, 30, 31, 31, 30, 30, 32, 32, 31],
                [30, 31, 34, 30, 31, 34, 34, 33, 30],
                [34, 30, 32, 30, 34, 33, 33, 30, 33]
            ]
        };
        this.l22 = {
            moves: -1,
            petsToRescue: 4,
            grid: [
                [0, 4, 1, 0, 4, 0, 1, 0, 111],
                [4, 4, 4, 1, 1, 1, 1, 1, 222],
                [1, 4, 0, 1, 4, 4, 0, 0, 0],
                [0, 1, 222, 222, 40, 222, 222, 1, 222],
                [4, 0, 1, 0, 20, 1, 0, 0, 111],
                [4, 40, 4, 222, 222, 222, 4, 222, 222],
                [4, 0, 0, 4, 0, 1, 1, 4, 0],
                [1, 0, 222, 222, 40, 222, 222, 4, 222],
                [1, 4, 0, 1, 20, 0, 0, 4, 111],
                [0, 40, 0, 222, 222, 222, 0, 222, 222],
                [0, 4, 0, 0, 1, 4, 4, 0, 5],
                [1, 0, 222, 222, 40, 222, 222, 1, 222],
                [1, 4, 1, 0, 4, 0, 0, 1, 111],
                [0, 4, 0, 4, 0, 1, 1, 222, 222],
                [1, 0, 4, 0, 4, 0, 1, 222, 222],
                [1, 1, 0, 1, 4, 222, 222, 222, 222],
                [1, 0, 1, 0, 4, 222, 222, 222, 222],
                [0, 1, 0, 1, 0, 222, 222, 222, 222]
            ]
        };
        this.l21 = {
            moves: -1,
            petsToRescue: 4,
            grid: [
                [-1, 111, -1, 111, -1, 111, -1, 111, -1],
                [1, 0, 1, 0, 4, 4, 4, 1, 4],
                [40, 4, 1, 1, 4, 0, 0, 4, 40],
                [1, 0, 0, 4, 0, 1, 0, 1, 1],
                [40, 1, 0, 222, 30, 222, 1, 4, 40],
                [20, 4, 0, 31, 30, 31, 4, 0, 20],
                [40, 0, 222, 31, 30, 31, 222, 4, 40],
                [6, 1, 4, 34, 34, 31, 0, 4, 9],
                [40,
                    0, 1, 222, 1, 222, 0, 1, 40
                ],
                [1, 1, 1, 4, 1, 0, 0, 4, 4],
                [1, 1, 4, 4, 1, 0, 1, 222, 222],
                [4, 4, 0, 1, 4, 0, 0, 1, 1],
                [0, 4, 4, 0, 1, 1, 222, 222, 222],
                [0, 0, 0, 1, 0, 4, 1, 4, 4],
                [4, 1, 0, 0, 4, 222, 222, 222, 222],
                [4, 0, 4, 4, 0, 1, 1, 3, 3],
                [3, 3, 3, 3, 222, 222, 222, 222, 222],
                [3, 3, 3, 3, 222, 222, 222, 222, 222]
            ]
        };
        this.l20 = {
            moves: -1,
            petsToRescue: 5,
            grid: [
                [111, -1, 111, -1, 111, -1, 111, -1, 111],
                [0, 4, 4, 0, 1, 0, 4, 4, 0],
                [0, 4, 4, 0, 1, 0, 4, 4, 0],
                [0, 0, 0, 0, 1, 0, 0, 0, 0],
                [3, 3, 3, 3, 1, 2, 2, 2, 2],
                [40, 40, 40, 40, 40, 40, 40, 40, 40],
                [4, 2, 2, 2, 2, 2, 2, 2, 4],
                [4, 4, 1, 0, 2, 0, 1, 4, 4],
                [4, 4, 1, 0, 2, 0, 1, 4, 4],
                [4, 1, 1, 0, 2, 0, 1, 1,
                    4
                ],
                [2, 2, 2, 0, 2, 0, 2, 2, 2],
                [40, 40, 40, 40, 40, 40, 40, 40, 40],
                [0, 0, 0, 0, 0, 2, 1, 1, 1],
                [1, 1, 1, 1, 1, 2, 1, 1, 1],
                [2, 2, 2, 2, 2, 2, 2, 2, 2],
                [1, 1, 1, 1, 2, 1, 1, 1, 1],
                [0, 0, 0, 0, 0, 3, 3, 3, 3],
                [1, 1, 1, 1, 1, 1, 1, 1, 1]
            ]
        };
        this.l19 = {
            moves: 35,
            petsToRescue: 7,
            drop: [0, 2, 0, 0, 0],
            grid: [
                [4, 0, 2, 2, 4, 2, 2, 2, 111],
                [4, 4, 2, 4, 4, 0, 111, 1, 1],
                [0, 0, 3, 3, 111, 0, 222, 3, 3],
                [0, 4, 111, 4, 222, 1, 3, 111, 4],
                [4, 4, 222, 3, 0, 111, 20, 222, 4],
                [2, 2, 2, 111, 20, 222, 3, 4, 4],
                [3, 2, 20, 222, 2, 3, 4, 1, 0],
                [0, 2, 1, 1, 3, 0, 0, 1, 0],
                [32, 33, 32, 30, 32, 32, 34, 30, 34],
                [31, 31, 32, 30, 32, 34, 34, 30, 30]
            ]
        };
        this.l18 = {
            moves: -1,
            petsToRescue: 11,
            grid: [
                [31, 32, 0, 0, 111, 4, 2, 33, 30],
                [31, 32, 0, 2, 222, 2, 2, 33, 30],
                [32, 111, 1, 1, 1, 4, 4, 4, 111],
                [3, 222, 2, 2, 0, 1, 1, 222, 222],
                [30, 31, 3, 2, 111, 2, 0, 0, 0],
                [30, 31, 3, 3, 222, 2, 3, 2, 2],
                [3, 111, 1, 4, 1, 2, 3, 2, 111],
                [3, 222, 4, 4, 31, 31, 31, 222, 222],
                [32, 31, 1, 4, 111, 2, 2, 2, 1],
                [32, 31, 1, 1, 222, 3, 20, 1, 1],
                [0, 0, 0, 0, 3, 3, 3, 4, 4],
                [0, 0, 0, 0, 0, 3, 2, 4, 4],
                [20, 2, 31, 32, 33, 2, 2, 111, 111],
                [0, 0, 31, 32, 33, 2, 111, 222, 222],
                [0, 0, 33, 33, 20, 111, 222, 222, 222],
                [2, 2, 30, 34, 34, 222, 222, 222, 222],
                [2, 2, 30, 30, 30, 222, 222, 222, 222],
                [2, 1, 2, 2, 2, 222, 222, 222, 222]
            ]
        };
        this.l17 = {
            moves: 70,
            petsToRescue: 14,
            drop: [0, 3, 2, 0, 5],
            grid: [
                [3, 3, 4, 2, 4, 0, 0, 0, 3],
                [4, 1, 1, 2, 2, 4, 3, 4, 0],
                [4, 2, 1, 1, 3, 3, 4, 4, 3],
                [111, 2, 4, 111, 111, 111, 0, 0, 111],
                [40, 0, 0, 222, 222, 222, 4, 2, 40],
                [40, 2, 1, 222, 5, 222, 4, 2, 40],
                [40, 2, 1, 222, 222, 222, 3, 3, 40],
                [31, 34, 32, 30, 32, 34, 32, 30, 33],
                [31, 32, 32, 30, 32, 34, 32, 33, 33],
                [34, 34, 31, 33, 34, 33, 30, 30, 30]
            ]
        };
        this.l16 = {
            moves: 40,
            petsToRescue: 10,
            drop: [0, 3, 2, 0, 0],
            grid: [
                [3, 3, 0, 2, 222, 0, 0, 2, 1],
                [4, 111, 111, 1, 222, 0, 111, 111, 1],
                [4, 222, 222, 2, 222, 1, 222, 222, 2],
                [3, 1, 111, 111, 222, 2, 1, 111, 111],
                [4, 1, 222, 222, 222, 3, 2, 222, 222],
                [4, 1, 111, 4, 222, 0,
                    2, 111, 1
                ],
                [3, 3, 2, 2, 222, 1, 1, 2, 2],
                [32, 31, 33, 34, 222, 32, 31, 30, 30],
                [31, 32, 34, 33, 222, 34, 32, 31, 31],
                [31, 32, 33, 34, 222, 32, 34, 30, 30]
            ]
        };
        this.l15 = {
            moves: -1,
            petsToRescue: 5,
            grid: [
                [111, -1, 111, -1, 111, -1, 111, -1, 111],
                [4, 1, 1, 3, 4, 3, 4, 3, 20],
                [3, 1, 4, 4, 3, 1, 3, 3, 3],
                [3, 1, 1, 1, 1, 0, 4, 4, 3],
                [3, 1, 4, 1, 3, 0, 1, 0, 3],
                [34, 33, 30, 31, 34, 31, 31, 30, 34],
                [31, 30, 33, 30, 33, 34, 34, 33, 33],
                [0, 1, 0, 3, 4, 0, 4, 4, 0],
                [0, 3, 1, 1, 1, 3, 3, 3, 4],
                [3, 4, 4, 3, 3, 0, 3, 0, 1]
            ]
        };
        this.l14 = {
            moves: -1,
            petsToRescue: 5,
            grid: [
                [111, 111, -1, -1, 111, -1, -1, 111, 111],
                [31, 31, 0, 2, 2, 4, 4, 34, 32],
                [30, 31,
                    0, 1, 1, 1, 3, 34, 32
                ],
                [30, 31, 2, 2, 1, 3, 3, 33, 33],
                [30, 30, 0, 2, 20, 2, 2, 30, 30],
                [33, 34, 0, 0, 3, 3, 4, 32, 30],
                [33, 34, 3, 2, 1, 1, 4, 31, 31],
                [32, 31, 3, 2, 1, 1, 0, 33, 33],
                [32, 31, 32, 31, 33, 33, 34, 31, 31],
                [32, 31, 32, 31, 31, 30, 30, 34, 34],
                [20, 1, 20, 0, 20, 2, 20, 3, 20],
                [1, 1, 0, 0, 2, 2, 3, 3, 2],
                [3, 3, 3, 1, 1, 1, 2, 2, 2]
            ]
        };
        this.l13 = {
            moves: 40,
            petsToRescue: 7,
            drop: [0, 3, 0, 0, 0],
            grid: [
                [4, 1, 4, 1, 4, 2, 4, 222, 222],
                [4, 4, 2, 0, 4, 2, 4, 222, 30],
                [0, 1, 2, 4, 2, 1, 0, 222, 111],
                [0, 0, 2, 1, 0, 4, 4, 222, 30],
                [3, 3, 1, 2, 0, 0, 1, 222, 111],
                [1, 3, 3, 2, 2, 2, 3, 222, 31],
                [1, 0, 0, 2, 1, 3, 3, 222, 111],
                [222, 222, 222, 222,
                    222, 222, 222, 222, 31
                ],
                [-1, 32, 111, 32, 111, 33, 111, 33, 111],
                [32, 222, 222, 222, 222, 222, 222, 222, 222]
            ]
        };
        this.l12 = {
            moves: -1,
            petsToRescue: 3,
            grid: [
                [0, 0, 4, 111, 111, 111, 4, 2, 4],
                [222, 0, 1, 32, 31, 30, 2, 2, 222],
                [222, 1, 1, 32, 31, 30, 3, 3, 222],
                [222, 222, 3, 3, 4, 4, 3, 222, 222],
                [222, 222, 20, 0, 1, 4, 20, 222, 222],
                [222, 222, 222, 1, 1, 2, 222, 222, 222],
                [222, 222, 222, 4, 4, 0, 222, 222, 222],
                [222, 222, 1, 4, 0, 0, 1, 222, 222],
                [222, 222, 1, 30, 32, 32, 1, 222, 222],
                [222, 1, 3, 30, 31, 31, 1, 1, 222],
                [222, 1, 3, 2, 4, 4, 3, 3, 222],
                [2, 2, 2, 0, 4, 0, 3, 0, 0],
                [1, 0, 0, 1, 0, 1, 3, 1, 0],
                [0, 3, 3, 3, 1, 4, 4, 4,
                    3
                ],
                [0, 0, 2, 1, 1, 4, 2, 3, 3],
                [0, 2, 2, 2, 1, 2, 2, 2, 3]
            ]
        };
        this.l11 = {
            moves: 50,
            petsToRescue: 8,
            drop: [0, 2, 2, 0, 3],
            grid: [
                [-1, -1, -1, 111, -1, -1, -1, 111, -1],
                [0, 1, 222, 222, 3, 2, 222, 222, 3],
                [0, 1, 1, 1, 3, 2, 0, 0, 3],
                [0, 0, 3, 3, 3, 20, 2, 2, 3],
                [31, 32, 32, 33, 34, 30, 34, 31, 31],
                [31, 31, 33, 31, 30, 34, 30, 33, 33],
                [1, 2, 20, 1, 0, 0, 0, 1, 1],
                [1, 2, 3, 3, 1, 2, 2, 2, 20],
                [33, 33, 31, 30, 32, 32, 33, 32, 31],
                [30, 33, 30, 30, 31, 31, 32, 33, 32]
            ]
        };
        this.l10 = {
            moves: -1,
            petsToRescue: 5,
            grid: [
                [0, 0, 111, 111, 111, 111, 111, 1, 4],
                [31, 30, 30, 34, 30, 34, 30, 31, 34],
                [0, 4, 1, 4, 0, 4, 0, 4, 4],
                [34, 31, 30, 34, 34, 34, 31,
                    34, 34
                ],
                [0, 4, 1, 4, 4, 4, 1, 1, 4],
                [0, 1, 1, 0, 4, 4, 1, 0, 1],
                [30, 34, 30, 0, 1, 30, 30, 34, 222],
                [30, 30, 31, 0, 0, 34, 30, 30, 222],
                [31, 222, 34, 4, 1, 222, 31, 222, 222],
                [0, 0, 4, 1, 4, 0, 1, 0, 222],
                [0, 1, 4, 4, 0, 0, 0, 4, 222],
                [4, 1, 0, 0, 4, 0, 4, 4, 222],
                [4, 1, 0, 4, 0, 4, 4, 0, 222]
            ]
        };
        this.l9 = {
            moves: 45,
            petsToRescue: 2,
            drop: [0, 0, 5, 0, 0],
            grid: [
                [222, 222, -1, -1, -1, -1, -1, 222, 222],
                [111, 222, -1, -1, -1, -1, -1, 222, 111],
                [3, 222, -1, -1, -1, -1, -1, 222, 0],
                [1, 222, -1, -1, -1, -1, -1, 222, 2],
                [3, 222, -1, -1, -1, -1, -1, 222, 0],
                [1, 222, -1, -1, -1, -1, -1, 222, 2],
                [33, 222, -1, -1, -1, -1, -1, 222, 30],
                [1, 222, 0,
                    0, 0, 0, 0, 222, 2
                ],
                [33, 222, 222, 1, 1, 1, 222, 222, 30],
                [1, 222, 222, 222, 1, 222, 222, 222, 2]
            ]
        };
        this.l8 = {
            moves: -1,
            petsToRescue: 4,
            grid: [
                [111, -1, -1, 111, -1, 111, -1, -1, 111],
                [1, 30, 2, 2, 2, 30, 1, 222, 222],
                [0, 1, 30, 2, 30, 1, 0, 222, 222],
                [1, 0, 1, 30, 1, 0, 1, 222, 222],
                [1, 1, 0, 0, 0, 1, 1, 1, 0],
                [2, 2, 2, 222, 222, 2, 1, 0, 0],
                [3, 3, 3, 222, 222, 0, 2, 3, 2],
                [3, 2, 3, 222, 222, 2, 2, 2, 3],
                [2, 2, 2, 33, 2, 33, 2, 33, 2],
                [3, 2, 33, 2, 33, 2, 33, 222, 222],
                [0, 0, 0, 1, 0, 1, 0, 222, 222],
                [1, 1, 4, 1, 1, 1, 1, 222, 222],
                [1, 4, 1, 4, 4, 2, 0, 2, 4],
                [0, 2, 2, 2, 0, 2, 4, 2, 0],
                [1, 1, 2, 1, 4, 2, 0, 2, 4],
                [0, 4, 1, 4, 0, 2, 4, 2, 0],
                [1,
                    1, 4, 1, 4, 2, 0, 2, 4
                ]
            ]
        };
        this.l7 = {
            moves: -1,
            petsToRescue: 3,
            grid: [
                [4, 0, 4, 3, 0, 3, -1, 0, 1],
                [4, 0, 4, 0, 3, 0, -1, 0, 1],
                [4, 0, 4, 1, 1, 1, -1, 0, 3],
                [0, 3, 0, 1, 1, 1, 111, 0, 2],
                [3, 0, 3, 0, 3, 0, 222, 222, 4],
                [0, 3, 0, 3, 0, 3, 222, 222, 4],
                [4, 4, 4, 2, 2, 111, 2, 2, 2],
                [0, 4, 0, 2, 2, 222, 222, 4, 2],
                [0, 4, 0, 1, 0, 222, 222, 4, 3],
                [0, 4, 0, 1, 1, 1, 1, 1, 1],
                [3, 3, 3, 2, 111, 2, 2, 2, 0],
                [1, 1, 1, 2, 222, 222, 2, 4, 0],
                [2, 1, 2, 2, 222, 222, 4, 4, 0],
                [2, 1, 2, 2, 4, 4, 4, 0, 0],
                [3, 4, 3, 1, 3, 2, 0, 1, 2],
                [0, 4, 0, 1, 0, 2, 0, 2, 3],
                [3, 4, 3, 1, 3, 2, 0, 1, 2]
            ]
        };
        this.l6 = {
            moves: -1,
            petsToRescue: 3,
            grid: [
                [0, 2, 0, 2, 0, 2, 0, 2, 0],
                [2, 1, 1, 1,
                    2, 2, 0, 0, 2
                ],
                [2, 2, 2, 0, 0, 2, 0, 0, 2],
                [1, 1, 1, 1, 1, 0, 2, 2, 2],
                [0, 2, 2, 2, 0, 1, 0, 0, 0],
                [0, 0, 2, 0, 0, 1, 1, 1, 0],
                [222, 222, 222, 222, 222, 222, 222, 222, 222],
                [-1, 111, -1, -1, 111, -1, -1, 111, -1],
                [-1, 0, -1, -1, 0, -1, -1, 0, -1],
                [2, 1, 2, 1, 2, 1, 2, 1, 2]
            ]
        };
        this.l5 = {
            moves: -1,
            petsToRescue: 3,
            grid: [
                [-1, -1, -1, 2, 111, 0, -1, -1, -1],
                [-1, -1, 0, 2, 222, 0, 1, -1, -1],
                [-1, 0, 0, 2, 222, 0, 1, 3, -1],
                [2, 1, 3, 1, 222, 2, 2, 2, -1],
                [2, 1, 1, 1, -1, 1, 1, 0, 111],
                [3, 222, 222, 222, 111, 0, 222, 222, 222],
                [2, -1, -1, -1, 20, 0, -1, -1, 3],
                [2, -1, -1, 3, 222, 1, -1, -1, 0],
                [2, -1, 0, 1, 222, 1, 3, -1, 1],
                [1, 1, 3, 0, 222, 1, 1, 2,
                    2
                ],
                [0, 1, 2, 2, 0, 0, 0, 1, 0],
                [1, 1, 3, 2, 0, 2, 1, 2, 1],
                [1, 2, 2, 0, 1, 1, 1, 2, 2]
            ]
        };
        this.l4 = {
            moves: 50,
            petsToRescue: 5,
            drop: [0, 0, 2, 0, 3],
            grid: [
                [-1, -1, 111, -1, -1, -1, 111, -1, -1],
                [2, 3, 0, 1, 2, 2, 2, 3, 2],
                [1, 0, 3, 1, 2, 3, 2, 0, 2],
                [1, 4, 3, 3, 2, 1, 2, 0, 2],
                [0, 4, 4, 3, 1, 2, 2, 3, 2],
                [2, 0, 2, 1, 1, 3, 4, 2, 3],
                [2, 1, 3, 4, 2, 1, 3, 3, 2]
            ]
        };
        this.l3 = {
            moves: -1,
            petsToRescue: 2,
            grid: [
                [-1, -1, 111, -1, -1, -1, 111, -1, -1],
                [1, 1, 1, 0, 0, 2, 2, 2, 0],
                [2, 1, 2, 0, 1, 1, 2, 0, 0],
                [1, 2, 1, 1, 0, 0, 0, 2, 2],
                [0, 2, 2, 0, 1, 2, 2, 1, 2],
                [2, 2, 2, 1, 1, 1, 2, 1, 1],
                [1, 0, 1, 2, 0, 0, 222, 2, 2],
                [1, 2, 0, 2, 0, 222, 0, 0, 0],
                [1, 0, 1, 0, 222,
                    0, 2, 2, 2
                ],
                [2, 2, 2, 1, 2, 2, 1, 1, 0],
                [0, 0, 2, 1, 2, 2, 0, 1, 0],
                [1, 0, 2, 1, 1, 1, 0, 1, 0],
                [1, 0, 0, 1, 0, 0, 0, 1, 0]
            ]
        };
        this.l2 = {
            moves: -1,
            petsToRescue: 2,
            grid: [
                [-1, -1, -1, 111, -1, 111, -1, -1, -1],
                [1, 1, 1, 1, 2, 2, 2, 2, 0],
                [2, 2, 0, 0, 2, 0, 1, 1, 0],
                [2, 0, 1, 2, 0, 1, 1, 0, 0],
                [0, 2, 0, 0, 1, 1, 2, 0, 1],
                [0, 1, 0, 1, 2, 1, 1, 2, 1],
                [2, 2, 1, 0, 0, 2, 2, 1, 1],
                [0, 1, 1, 2, 0, 1, 2, 2, 0],
                [2, 2, 1, 0, 0, 2, 2, 1, 1]
            ]
        };
        this.l1 = {
            moves: -1,
            petsToRescue: 3,
            grid: [
                [-1, -1, 111, -1, -1, -1, 111, -1, -1],
                [-1, -1, 0, -1, 111, -1, 0, -1, -1],
                [2, 2, 2, 2, 0, 1, 1, 1, 1],
                [2, 2, 2, 2, 0, 1, 1, 1, 1],
                [3, 3, 3, 3, 0, 3, 3, 3, 3],
                [3, 3, 3, 3, 0, 3, 3, 3, 3],
                [4, 4, 4, 4, 0, 4, 4, 4, 4],
                [4, 4, 4, 4, 0, 4, 4, 4, 4]
            ]
        };
        this.helpStep = 0;
        this.isLevelEnd = !1;
        this.cLevelScore = 0;
        this.gridLayer = a;
        this.cLevel = b;
        this.cRescuedPets = 0;
        this.levels = [this.l1, this.l2, this.l3, this.l4, this.l5, this.l6, this.l7, this.l8, this.l9, this.l10, this.l11, this.l12, this.l13, this.l14, this.l15, this.l16, this.l17, this.l18, this.l19, this.l20, this.l21, this.l22, this.l23, this.l24, this.l25, this.l26, this.l27]
    };
    f["scenes.GameSceneComp"] = Ob;
    Ob.__name__ = ["scenes", "GameSceneComp"];
    Ob.__super__ = E;
    Ob.prototype = z(E.prototype, {
        get_name: function () {
            return "GameSceneComp_8"
        },
        onAdded: function () {
            this.lvData = this.levels[this.cLevel];
            this.grid = new i(this.gridLayer, 9, this.lvData.grid.length);
            this.grid.genGridFromArray(this.lvData.grid);
            this.movesLeft = this.lvData.moves;
            this.updateHelp();
            this.showHUD();
            this.showLevelObjective()
        },
        updateHelp: function () {
            0 == X.cLevel && (0 == this.helpStep && (this.help1 = d.addFillSprite(this.owner, 0, 0, 0, 285, d.height, 0.6, !1), d.addFillSprite(this.help1, 355, 0, 0, 285, d.height, 1, !1), this.help1Label = d.addLabel(this.owner,
                d.halfWidth, 325, d.settings.get(W.lang + ".help1"), 1, 1, !1)._compMap.Sprite_0, this.help1Label.disablePointer(), this.help1Label.setWrapWidth(d.width - 40), this.help1Label.centerAnchor(), this.help1Label.setAlign(K.Center)), 1 == this.helpStep && (this.help1.dispose(), this.help1Label.dispose()), this.helpStep++)
        },
        showLevelObjective: function () {
            var a;
            a = d.addFillSprite(this.owner, d.halfWidth, d.halfHeight, 0, d.width, 100, 0)._compMap.Sprite_0;
            var b = d.settings.get(W.lang + ".save") + " " + x.string(this.lvData.petsToRescue) +
                " " + d.settings.get(W.lang + ".pets"),
                c;
            c = d.addLabel(this.owner, d.halfWidth, d.halfHeight, b, 1.1, 0, !0)._compMap.Sprite_0;
            a.alpha.animateTo(0.8, 0.4, q.quadIn);
            c.alpha.animateTo(1, 0.4, q.quadIn);
            L.tween(a, 0.4, {
                alpha: 0
            }, 2, null, q.quadIn);
            L.tween(c, 0.4, {
                alpha: 0
            }, 2, function () {
                a.owner.dispose();
                c.owner.dispose()
            }, q.quadIn)
        },
        showHUD: function () {
            this.hudLayer = (new D).add(new r);
            this.owner.addChild(this.hudLayer);
            var a;
            a = d.addImageSprite(X.sceneBg, 180, -10, "blade")._compMap.Sprite_0;
            d.addDelay(this.owner, 0.05, function () {
                var b =
                    a.rotation;
                b.set__(b._value + 1)
            }, !0);
            d.addImageSprite(this.hudLayer, 0, 10, "hud_top_bg", 1, 1, !1);
            d.addImageSprite(this.hudLayer, 0, 830, "hud_bottom_bg", 1, 1, !1);
            d.addMovieSprite(this.grid.gridLayer, 40, d.height - this.grid.gridLayer._compMap.Sprite_0.y._value - 110, "bottom_wheels", null);
            d.addMovieSprite(this.grid.gridLayer, 110, d.height - this.grid.gridLayer._compMap.Sprite_0.y._value - 110, "bottom_wheels", null);
            d.addMovieSprite(this.grid.gridLayer, 180, d.height - this.grid.gridLayer._compMap.Sprite_0.y._value - 110, "bottom_wheels",
                null);
            d.addMovieSprite(this.grid.gridLayer, 250, d.height - this.grid.gridLayer._compMap.Sprite_0.y._value - 110, "bottom_wheels", null);
            d.addMovieSprite(this.grid.gridLayer, 320, d.height - this.grid.gridLayer._compMap.Sprite_0.y._value - 110, "bottom_wheels", null);
            d.addMovieSprite(this.grid.gridLayer, 390, d.height - this.grid.gridLayer._compMap.Sprite_0.y._value - 110, "bottom_wheels", null);
            d.addMovieSprite(this.grid.gridLayer, 460, d.height - this.grid.gridLayer._compMap.Sprite_0.y._value - 110, "bottom_wheels", null);
            d.addMovieSprite(this.grid.gridLayer,
                530, d.height - this.grid.gridLayer._compMap.Sprite_0.y._value - 110, "bottom_wheels", null);
            d.addMovieSprite(this.grid.gridLayer, 600, d.height - this.grid.gridLayer._compMap.Sprite_0.y._value - 110, "bottom_wheels", null);
            this.petsLabel = d.addLabel(this.hudLayer, 95, 47, "0/" + x.string(this.lvData.petsToRescue), 1, 1, !1, "score_font")._compMap.Sprite_0;
            this.petsLabel.setAlign(K.Center);
            this.scoreLabel = d.addLabel(this.hudLayer, 245, 47, "000000", 1, 1, !1, "score_font")._compMap.Sprite_0;
            this.scoreLabel.setAlign(K.Center);
            this.movesLabel =
                d.addLabel(this.hudLayer, 397, 47, "" + x.string(this.lvData.moves), 1, 1, !1, "score_font")._compMap.Sprite_0;
            this.movesLabel.setAlign(K.Center); - 1 == this.lvData.moves && this.movesLabel.set_text("---");
            this.rowsLabel = d.addLabel(this.hudLayer, 35, d.height - 122, "" + this.grid.getGridRowsBelow(), 1, 1, !1, "score_font")._compMap.Sprite_0;
            this.rowsLabel.setAlign(K.Center);
            this.boosterComp = new Nb(this.gridLayer, this.grid);
            this.hudLayer.add(this.boosterComp)
        },
        updateGame: function () {
            if (!this.isLevelEnd) {
                this.updateHelp();
                this.petsLabel.set_text(this.cRescuedPets + "/" + x.string(this.lvData.petsToRescue));
                this.rowsLabel.set_text(x.string(this.grid.getGridRowsBelow()));
                if (-1 != this.lvData.moves) {
                    this.movesLeft--;
                    this.movesLabel.set_text("" + this.movesLeft);
                    if (0 >= this.movesLeft && this.cRescuedPets < this.lvData.petsToRescue) {
                        this.makeLevelEnd(!0);
                        return
                    }
                    this.dropPieces()
                }
                this.cRescuedPets >= this.lvData.petsToRescue ? this.makeLevelEnd(!1) : 0 == this.grid.getDeepMatches().length && !this.boosterComp.booster1Active && 0 == this.grid.getAllBonuses().length &&
                    this.makeLevelEnd(!0)
            }
        },
        dropPieces: function () {
            for (var a = this.grid.getEmptySpaceAbove(), b = [], c = 0, e = a.length; c < e;) c++, b.push(d.rand(5));
            if (2 < b.length) {
                c = 0;
                for (e = this.getNMaxPieceOfTypeOnGrid(0); c < e;) c++, b[d.rand(b.length)] = 30 + d.rand(5);
                c = 0;
                for (e = this.getNMaxPieceOfTypeOnGrid(1); c < e;) c++, b[d.rand(b.length)] = 5 + d.rand(5);
                c = 0;
                for (e = this.getNMaxPieceOfTypeOnGrid(2); c < e;) c++, b[d.rand(b.length)] = 20;
                c = 0;
                for (e = this.getNMaxPieceOfTypeOnGrid(3); c < e;) c++, b[d.rand(b.length)] = 40
            }
            c = 0;
            for (e = this.getNMaxPieceOfTypeOnGrid(4); c <
                e;) c++, b[d.rand(b.length)] = 111;
            c = 0;
            for (e = a.length; c < e;) {
                var g = c++;
                this.grid.grid[a[g][0]][a[g][1]] = new C(a[g][1], a[g][0], b[g], !0)
            }
        },
        getNMaxPieceOfTypeOnGrid: function (a) {
            var b = 0;
            0 == a && (b = (this.lvData.drop[a] | 0) - this.grid.getNOfTypes([30, 31, 32, 33, 34]), 0 > b && (b = 0));
            1 == a && (b = (this.lvData.drop[a] | 0) - this.grid.getNOfTypes([5, 6, 7, 8, 9]), 0 > b && (b = 0));
            2 == a && (b = (this.lvData.drop[a] | 0) - this.grid.getNOfTypes([20]), 0 > b && (b = 0));
            3 == a && (b = (this.lvData.drop[a] | 0) - this.grid.getNOfTypes([40]), 0 > b && (b = 0));
            4 == a && (b = (this.lvData.drop[a] |
                0) - this.grid.getNOfTypes([111]), 0 > b && (b = 0));
            return b
        },
        makeLevelEnd: function (a) {
            null == a && (a = !1);
            var b = this;
            this.isLevelEnd = !0;
            d.addFillSprite(this.owner, 0, 0, 0, d.width, d.height, 0, !1);
            this.cLevel == this.levels.length - 1 && !a ? d.addDelay(this.owner, 1, function () {
                d.pushScene((new oc).root)
            }, !1) : (a ? (t.muteSoundtrack(), t.playSfx("game_over_sfx", 0.5), console.log('')/*SG_Hooks.gameOver(this.cLevel, this.cLevelScore)*/) : t.playSfx("level_end_sfx"), a || (fa.unlockedLevels < this.cLevel + 1 && (fa.unlockedLevels = this.cLevel + 1, fa.saveData()),
                /*SG_Hooks.levelUp(this.cLevel + 1, this.cLevelScore)*/console.log('api turned off')), d.addDelay(this.owner, 1, function () {
                d.pushScene((new qc(b.cLevelScore, a,b.cLevel + 1)).root)
            }, !1));
            if(!a) dp_submitScore(this.cLevelScore,this.cLevel + 1);
        },
        updateScore: function (a) {
            this.cLevelScore += a;
            for (var b = x.string(this.cLevelScore), c = b.length, e = ""; 6 > c;) e += "0", c++;
            this.scoreLabel.set_text(e + b);
            this.boosterComp.updateBar(a)
        },
        __class__: Ob
    });
    var qc = function (a, b,c) {
        this.root = (new D).add(new ka(!1));
        d.addFillSprite(this.root, d.halfWidth, d.halfHeight, 0, d.width, d.height, 0.5);
        if (b) {
            d.addImageSprite(this.root, d.halfWidth, d.halfHeight -
                200, "game_over_icon");
            d.addFillSprite(this.root, d.halfWidth, d.halfHeight, 0, d.width, 150, 0.4);
            var c;
            c = d.addLabel(this.root, d.halfWidth, d.halfHeight, d.settings.get(W.lang + ".gameover"), 1.2, 1, !1)._compMap.Sprite_0;
            c.setWrapWidth(d.width - 40);
            c.centerAnchor();
            c.setAlign(K.Center);
			setTimeout(dp_share,2000);
        } else d.addImageSprite(this.root, d.halfWidth, 200, "level_end_flag"), d.addLabel(this.root, d.halfWidth, d.halfHeight + 120, "" + a, 1.2, 1, !0, "score_font"),d.addLabel(this.root, d.halfWidth, d.halfHeight + 170, ""+c, 1.2, 1, !0, "score_font"), d.addImageSprite(this.root, d.halfWidth, d.halfHeight - 30, "score_icon"), d.addButton(this.root,
            d.halfWidth + 150, d.halfHeight + 280, "play_small_btn", function () {
                X.cLevel += 1;
                d.goToScene((new X).root)
            }, "");
        c = 0;
        b && (c = 75);
        d.addButton(this.root, d.halfWidth - 150 + c, d.halfHeight + 280, "home_btn", function () {
            t.unmuteSoundtrack();
            d.goToScene((new wa).root)
        });
        d.addButton(this.root, d.halfWidth + c, d.halfHeight + 280, "replay_btn", function () {
            t.unmuteSoundtrack();
            d.goToScene((new X).root)
        })
		/* d.addButton(this.root, d.halfWidth + c, d.halfHeight + 380, "sharebtn", function () {
           dp_share();
        })*/
    };
    f["scenes.LevelEndScene"] = qc;
    qc.__name__ = ["scenes", "LevelEndScene"];
    qc.prototype = {
        __class__: qc
    };
    var rc = function () {
        this.root = (new D).add(new ka);
        this.levelSelectLayer = d.addFillSprite(this.root, 0, 0, 0, d.width, 1920, 1, !1);
        this.levelSelectLayer._compMap.Sprite_0.y.set__(-960);
        this.levelSelectLayer.add(new Pb(!0));
        var a;
        a = d.addImageSprite(this.levelSelectLayer, 0, 960, "game_scene_bg", 1, 1, !1)._compMap.Sprite_0;
        a.setRotation(180);
        a.setScaleXY(-1, 1);
        d.addImageSprite(this.levelSelectLayer, 0, 960, "game_scene_bg", 1, 1, !1);
        var b;
        b = d.addImageSprite(this.levelSelectLayer, 650, 1900, "blade")._compMap.Sprite_0;
        var c;
        c = d.addImageSprite(this.levelSelectLayer, -48,
            1550, "blade")._compMap.Sprite_0;
        var e;
        e = d.addImageSprite(this.levelSelectLayer, 653, 1322, "blade")._compMap.Sprite_0;
        var g;
        g = d.addImageSprite(this.levelSelectLayer, 708, 885, "blade")._compMap.Sprite_0;
        var f;
        f = d.addImageSprite(this.levelSelectLayer, -63, 724, "blade")._compMap.Sprite_0;
        var i;
        i = d.addImageSprite(this.levelSelectLayer, 696, 328, "blade")._compMap.Sprite_0;
        var j;
        j = d.addImageSprite(this.levelSelectLayer, 77, 88, "blade")._compMap.Sprite_0;
        d.addDelay(this.root, 0.05, function () {
            var a = b.rotation;
            a.set__(a._value +
                1);
            a = c.rotation;
            a.set__(a._value + 1.2);
            a = e.rotation;
            a.set__(a._value + 1.1);
            a = g.rotation;
            a.set__(a._value + 0.9);
            a = f.rotation;
            a.set__(a._value + 1.1);
            a = i.rotation;
            a.set__(a._value + 1.2);
            a = j.rotation;
            a.set__(a._value + 1)
        }, !0);
        this.initLevelSelectButton(136, 1820, "1");
        this.initLevelSelectButton(290, 1771, "2");
        this.initLevelSelectButton(427, 1705, "3");
        this.initLevelSelectButton(518, 1579, "4");
        this.initLevelSelectButton(410, 1479, "5");
        this.initLevelSelectButton(272, 1427, "6");
        this.initLevelSelectButton(190, 1301, "7");
        this.initLevelSelectButton(286, 1191, "8");
        this.initLevelSelectButton(436, 1167, "9");
        this.initLevelSelectButton(545, 1071, "10");
        this.initLevelSelectButton(441, 982, "11");
        this.initLevelSelectButton(299, 994, "12");
        this.initLevelSelectButton(175, 970, "13");
        this.initLevelSelectButton(151, 836, "14");
        this.initLevelSelectButton(275, 771, "15");
        this.initLevelSelectButton(410, 772, "16");
        this.initLevelSelectButton(523, 727, "17");
        this.initLevelSelectButton(560, 607, "18");
        this.initLevelSelectButton(495, 502, "19");
        this.initLevelSelectButton(366,
            521, "20");
        this.initLevelSelectButton(248, 600, "21");
        this.initLevelSelectButton(124, 565, "22");
        this.initLevelSelectButton(162, 445, "23");
        this.initLevelSelectButton(286, 367, "24");
        this.initLevelSelectButton(410, 315, "25");
        this.initLevelSelectButton(466, 195, "26");
        this.initLevelSelectButton(360, 109, "27");
        d.addButton(this.root, 80, 80, "home_btn", function () {
            d.goToScene((new wa).root)
        })
    };
    f["scenes.LevelSelectScene"] = rc;
    rc.__name__ = ["scenes", "LevelSelectScene"];
    rc.prototype = {
        initLevelSelectButton: function (a, b, c) {
            var e =
                x.parseInt(c) - 1,
                a = d.addButton(this.levelSelectLayer, a, b, "btn_level_select", function () {
                    X.cLevel = e;
                    d.goToScene((new X).root)
                });
            e <= fa.unlockedLevels ? d.addLabel(a, 58, 50, c, 1, 1, !0, "score_font") : (a._compMap.Sprite_0.disablePointer(), d.addImageSprite(a, 62, 48, "lock_icon"))
        },
        __class__: rc
    };
    var wa = function () {
        this.root = (new D).add(new ka);
        t.playSoundtrack("soundtrack1", 0.4);
        var a;
        a = d.addImageSprite(this.root, d.halfWidth, d.halfHeight, "game_scene_bg")._compMap.Sprite_0;
        this.gameTitleSprite = d.addImageSprite(this.root,
            d.halfWidth, d.halfHeight - 150, "game_title", 1, 1)._compMap.Sprite_0;
        d.addDelay(this.root, 1.2, function () {
            var b;
            b = d.addImageSprite(a.owner, d.rand(d.width), -100, "bl" + d.rand(5))._compMap.Sprite_0;
            b.rotation.animateBy(100, 1, q.circInOut);
            L.tween(b, 1, {
                y: d.height + 100
            }, 0, function () {
                null != b.owner && b.owner.dispose()
            }, q.quadIn)
        }, !0);
        var b;
        b = d.addImageSprite(a.owner, 520, 1020, "blade")._compMap.Sprite_0;
        var c;
        c = d.addImageSprite(a.owner, -70, 600, "blade")._compMap.Sprite_0;
        var e;
        e = d.addImageSprite(a.owner, 650, -50, "blade")._compMap.Sprite_0;
        d.addDelay(this.root, 0.05, function () {
            var a = b.rotation;
            a.set__(a._value + 1);
            a = c.rotation;
            a.set__(a._value + 1.2);
            a = e.rotation;
            a.set__(a._value + 1.1)
        }, !0);
        var g;
        g = d.addButton(this.root, d.halfWidth, d.height - 200, "play_btn2", function () {
            d.goToScene((new rc).root)
        }, "", 1, 0)._compMap.Sprite_0;
        g.alpha.animateTo(1, 1, q.quadOut);
        g.y.animateTo(d.height - 230, 1, q.bounceOut);
        g = d.addMuteButton(this.root, d.halfWidth + 220, d.height - 140, "sound_on_btn", "sound_off_btn", t.isMuted, 1, 0)._compMap.Sprite_0;
        g.alpha.animateTo(1, 1, q.quadOut);
        g.y.animateTo(d.height - 190, 1, q.bounceOut);
        g = d.addButton(this.root, d.halfWidth - 220, d.height - 140, "more_games_btn", function () {
            clickMore();
        }, "", 1, 0)._compMap.Sprite_0;
        g.alpha.animateTo(1, 1, q.quadOut);
        g.y.animateTo(d.height - 190, 1, q.bounceOut)
        
    };
    f["scenes.MainScene"] = wa;
    wa.__name__ = ["scenes", "MainScene"];
    wa.prototype = {
        __class__: wa
    };
    var pc = function () {
        this.root = (new D).add(new ka(!1));
        d.addFillSprite(this.root, d.halfWidth, d.halfHeight, 0, d.width, d.height, 0.5);
        d.addButton(this.root, d.halfWidth,
            d.halfHeight + 5, "play_btn2", function () {
                d.popScene(new Ea(0))
            });
        d.addButton(this.root, d.halfWidth - 150, d.halfHeight + 200, "home_btn", function () {
            d.goToScene((new wa).root)
        });
        d.addButton(this.root, d.halfWidth, d.halfHeight + 200, "replay_btn", function () {
            d.goToScene((new X).root)
        });
        d.addMuteButton(this.root, d.halfWidth + 150, d.halfHeight + 200, "sound_on_btn", "sound_off_btn", t.isMuted)
    };
    f["scenes.PauseScene"] = pc;
    pc.__name__ = ["scenes", "PauseScene"];
    pc.prototype = {
        __class__: pc
    };
    var t = function () {};
    f["yzi.Sfx"] = t;
    t.__name__ = ["yzi", "Sfx"];
    t.playSfx = function (a, b) {
        null == b && (b = 1);
        return t.isMuted ? null : d.assets.getSound(t.soundsFolder + "/" + a).play(b)
    };
    t.playSoundtrack = function (a, b) {
        null == b && (b = 1);
        var c = d.assets.getSound(t.soundsFolder + "/" + a);
        null != t.cSoundtrackPlayback ? t.cSoundtrackPlayback.get_sound() != c && (t.cSoundtrackVolume = b, t.cSoundtrackPlayback = c.loop(b)) : (t.cSoundtrackVolume = b, t.cSoundtrackPlayback = c.loop(b));
        return t.cSoundtrackPlayback
    };
    t.muteSoundtrack = function () {
        null != t.cSoundtrackPlayback && (t.cSoundtrackPlayback.volume.animateTo(0,
            1), d.addDelay(null, 0.8, function () {
            t.cSoundtrackPlayback.set_paused(!0)
        }, !1))
    };
    t.unmuteSoundtrack = function () {
        null != t.cSoundtrackPlayback && !t.isMuted && (t.cSoundtrackPlayback.set_paused(!1), t.cSoundtrackPlayback.volume.animateTo(t.cSoundtrackVolume, 1))
    };
    t.muteAll = function () {
        t.isMuted ? (t.isMuted = !1, t.unmuteSoundtrack(), l.volume.animateTo(1, 0)) : (t.isMuted = !0, t.muteSoundtrack(), l.volume.animateTo(0, 1))
    };
    var L = function () {};
    f["yzi.Tweener"] = L;
    L.__name__ = ["yzi", "Tweener"];
    L.tween = function (a, b, c, e, d, f) {
        null ==
            e && (e = 0);
        q;
        var i = new xa;
        0 > e && (e = 0);
        if (0 == b && 0 == e) L.apply(a, c, d);
        else {
            if (0 == b && 0 < e) {
                var j = new D;
                0 != e && i.add(new na(e));
                i.add(new ga(function () {
                    L.apply(a, c, d);
                    j.dispose()
                }));
                b = new ma;
                l.root.addChild(j.add(b))
            } else {
                0 < e && i.add(new na(e));
                for (var e = [], k = 0, n = F.fields(c); k < n.length;) {
                    var m = n[k];
                    ++k;
                    var o = F.getProperty(a, m);
                    e.push(new Gb(o, F.field(c, m), b, f))
                }
                f = new Hb(e);
                i.add(f);
                var p = new D;
                i.add(new na(b));
                i.add(new ga(function () {
                    null != d && d();
                    p.dispose()
                }));
                b = new ma;
                l.root.addChild(p.add(b))
            }
            b.run(i)
        }
    };
    L.apply = function (a, b, c) {
        for (var e = 0, d = F.fields(b); e < d.length;) {
            var f = d[e];
            ++e;
            var i = F.getProperty(a, f);
            N.__cast(i, n).set__(F.field(b, f))
        }
        null != c && c()
    };
    var d = function (a, b) {
        this.init = new oa;
        var c = this;
        d.width = a;
        d.height = b;
        d.halfWidth = a / 2 | 0;
        d.halfHeight = b / 2 | 0;
        d.director = (new D).add(new r).add((new Fb).setSize(d.width, d.height));
        l.root.addChild(d.director);
        this.systemBg = d.initFillSpriteComp(0, 0, d.systemBgColor, 0, 0, 1, !1);
        l.root.add(this.systemBg);
        this.leftBorder = d.addFillSprite(l.root, 0, 0, d.systemBgColor,
            0, 0, 1, !1)._compMap.Sprite_0;
        this.rightBorder = d.addFillSprite(l.root, 0, 0, d.systemBgColor, 0, 0, 1, !1)._compMap.Sprite_0;
        this.topBorder = d.addFillSprite(l.root, 0, 0, d.systemBgColor, 0, 0, 1, !1)._compMap.Sprite_0;
        this.bottomBorder = d.addFillSprite(l.root, 0, 0, d.systemBgColor, 0, 0, 1, !1)._compMap.Sprite_0;
        l.loadAssetPack(Y.fromAssets("boot")).get(function (a) {
            d.assets = a;
            a = d.addFillSprite(l.root, 0, 0, 1118481, l._platform.getStage().get_width(), l._platform.getStage().get_height(), 1, !1);
            c.rotPhonePrompt = a._compMap.Sprite_0;
            a = d.addImageSprite(c.rotPhonePrompt.owner, 0, 0, "rot_phone")._compMap.Sprite_0;
            d.defaultOrientation == ja.Landscape && a.setRotation(90);
            (d.defaultOrientation == l._platform.getStage().orientation._value || null == l._platform.getStage().orientation._value) && c.rotPhonePrompt.set_visible(!1);
            l._platform.getStage().lockOrientation(d.defaultOrientation);
            l._platform.getStage().requestFullscreen(!0);
            l._platform.getStage().orientation.get_changed().connect(ea(c, c.onOrientationChange));
            l._platform.getStage().resize.connect(ea(c,
                c.onResize));
            c.onResize();
            c.initPreloaderScene()
        })
    };
    f["yzi.YZI"] = d;
    d.__name__ = ["yzi", "YZI"];
    d.onResizeCallback = function () {};
    d.onOrientationChangeCallback = function () {};
    d.goToScene = function (a, b) {
        null == b && (b = new Ea(0.5, q.quadOut));
        d.director._compMap.Director_5.unwindToScene(a, b)
    };
    d.pushScene = function (a, b) {
        null == b && (b = new Ea(0.5, q.quadOut));
        d.director._compMap.Director_5.pushScene(a, b)
    };
    d.popScene = function (a) {
        null == a && (a = new Ea(0.5, q.quadOut));
        d.director._compMap.Director_5.popScene(a)
    };
    d.saveData = function (a,
        b) {
        return l._platform.getStorage().set(a, b)
    };
    d.loadData = function (a) {
        return l._platform.getStorage().get(a)
    };
    d.initFlipbooks = function (a) {
        for (var b = [], c = 0, e = a.length; c < e;) {
            var g = c++;
            b.push((new kc(a[g][0], d.assets.getTexture(a[g][0]).split(a[g][1], a[g][2]))).setDuration(a[g][3]).setAnchor(a[g][4], a[g][5]))
        }
        d.lib = bb.fromFlipbooks(b)
    };
    d.initFillSpriteComp = function (a, b, c, e, d, f, i) {
        null == i && (i = !0);
        null == f && (f = 1);
        c = new qb(c, e, d);
        c.setXY(a, b);
        c.setAlpha(f);
        i && c.centerAnchor();
        return c
    };
    d.initImageSpriteComp =
        function (a, b, c, e, g, f) {
            null == f && (f = !0);
            null == g && (g = 1);
            null == e && (e = 1);
            c = new Ua(d.assets.getTexture(c));
            c.setXY(a, b);
            c.setScale(e);
            c.setAlpha(g);
            f && c.centerAnchor();
            return c
        };
    d.initTextSpriteComp = function (a, b, c, e, g, f, i) {
        null == i && (i = "");
        null == f && (f = !1);
        null == g && (g = 1);
        null == e && (e = 1);
        null == c && (c = "Label");
        "" == i && (i = d.defaultFont);
        c = new ub(new Ma(d.assets, i), c);
        c.disablePointer();
        c.setXY(a, b);
        c.setScale(e);
        c.setAlpha(g);
        f && c.centerAnchor();
        return c
    };
    d.initMovieSpriteComp = function (a, b, c, e, f, h) {
        null == h && (h = !0);
        null == f && (f = 1);
        null == e && (e = 1);
        c = d.lib.createSprite(c, !0);
        c.setXY(a, b);
        c.setScale(e);
        c.setAlpha(f);
        h && c.centerAnchor();
        return c
    };
    d.addFillSprite = function (a, b, c, e, f, h, i, j) {
        null == j && (j = !0);
        null == i && (i = 1);
        var k = new D;
        k.add(new sa);
        k.add(d.initFillSpriteComp(b, c, e, f, h, i, j));
        null != a && a.addChild(k);
        return k
    };
    d.addImageSprite = function (a, b, c, e, f, h, i) {
        null == i && (i = !0);
        null == h && (h = 1);
        null == f && (f = 1);
        var j = new D;
        j.add(new sa);
        j.add(d.initImageSpriteComp(b, c, e, f, h, i));
        null != a && a.addChild(j);
        return j
    };
    d.addLabel =
        function (a, b, c, e, f, h, i, j) {
            null == j && (j = "");
            null == i && (i = !1);
            null == h && (h = 1);
            null == f && (f = 1);
            null == e && (e = "Label");
            var k = new D;
            k.add(new sa);
            k.add(d.initTextSpriteComp(b, c, e, f, h, i, j));
            null != a && a.addChild(k);
            return k
        };
    d.addButton = function (a, b, c, e, f, h, i, j) {
        null == j && (j = 1);
        null == i && (i = 1);
        null == h && (h = "");
        var k = d.addImageSprite(a, b, c, e, i, j, !0);
        k.add(new ma);
        "" != h && (d.addImageSprite(k, 0, 0, h, 1, 1, !1), k.firstChild._compMap.Sprite_0.set_visible(!1));
        var l = i + 0.15,
            m = new xa;
        m.add(new ga(function () {
            k._compMap.Sprite_0.scaleX.animateTo(l,
                0.2, q.backOut);
            k._compMap.Sprite_0.scaleY.animateTo(l, 0.2, q.backOut)
        }));
        m.add(new na(0.2));
        m.add(new ga(function () {
            k._compMap.Sprite_0.scaleX.animateTo(i, 0.1, q.quadIn);
            k._compMap.Sprite_0.scaleY.animateTo(i, 0.1, q.quadIn)
        }));
        k._compMap.Disposer_2.connect1(k._compMap.Sprite_0.get_pointerDown(), function () {
            k._compMap.Script_3.run(m)
        });
        k._compMap.Disposer_2.connect1(k._compMap.Sprite_0.get_pointerUp(), function () {
            "" != h && (0 == (k.firstChild._compMap.Sprite_0._flags & 1) ? k.firstChild._compMap.Sprite_0.set_visible(!0) :
                k.firstChild._compMap.Sprite_0.set_visible(!1));
            "" != d.buttonClickSfx && t.playSfx(d.buttonClickSfx);
            null != f && f()
        });
        return k
    };
    d.addMovieSprite = function (a, b, c, e, f, h, i, j) {
        null == j && (j = !0);
        null == i && (i = 1);
        null == h && (h = 1);
        var k = new D;
        k.add(new sa);
        k.add(d.initMovieSpriteComp(b, c, e, h, i, j));
        null != f && k._compMap.Disposer_2.connect0(k._compMap.Sprite_0.get_looped(), f);
        null != a && a.addChild(k);
        return k
    };
    d.addMuteButton = function (a, b, c, e, f, h, i, j) {
        null == j && (j = 1);
        null == i && (i = 1);
        a = d.addButton(a, b, c, e, function () {
                t.muteAll()
            },
            f, i, j);
        a.firstChild._compMap.Sprite_0.set_visible(h);
        return a
    };
    d.addDelay = function (a, b, c, e, d) {
        null == d && (d = -1);
        null == e && (e = !1);
        var f = new D,
            i = new xa;
        i.add(new na(b));
        i.add(new ga(function () {
            null != c && c();
            e || f.dispose()
        }));
        b = new ma;
        f.add(new sa);
        f.add(b);
        null != a && a.addChild(f);
        e ? b.run(new Ib(i, d)) : b.run(i);
        return f
    };
    d.openUrl = function (a) {
        //l._platform.getWeb().openBrowser("http://" + a)
    };
    d.rand = function (a) {
        return x.random(a)
    };
    d.localPointerX = function () {
        return (l._platform.getPointer().get_x() - (l._platform.getStage().get_width() -
            d.width * d.scale) / 2) / d.scale
    };
    d.localPointerY = function () {
        return (l._platform.getPointer().get_y() - (l._platform.getStage().get_height() - d.height * d.scale) / 2) / d.scale
    };
    d.prototype = {
        onResize: function () {
            var a = l._platform.getStage().get_width(),
                b = l._platform.getStage().get_height();
            d.scale = Math.min(a / d.width, b / d.height);
            d.director._compMap.Sprite_0.setXY(0.5 * a - 0.5 * d.scale * d.width, 0.5 * b - 0.5 * d.scale * d.height);
            d.director._compMap.Sprite_0.setScale(d.scale);
            var c = d.director._compMap.Sprite_0.x._value,
                e = d.director._compMap.Sprite_0.y._value;
            this.systemBg.setXY(0, 0);
            this.systemBg.setSize(a, b);
            this.leftBorder.setXY(0, e);
            this.leftBorder.setSize(c, b - 2 * e);
            this.rightBorder.setXY(a - c, e);
            this.rightBorder.setSize(c, b - 2 * e);
            this.topBorder.setXY(0, 0);
            this.topBorder.setSize(a, e);
            this.bottomBorder.setXY(0, b - e);
            this.bottomBorder.setSize(a, e);
            d.onResizeCallback();
            this.rotPhonePrompt.setXY(0, 0);
            this.rotPhonePrompt.setSize(l._platform.getStage().get_width(), l._platform.getStage().get_height());
            this.rotPhonePrompt.owner.firstChild._compMap.Sprite_0.setXY(this.rotPhonePrompt.width._value /
                2, this.rotPhonePrompt.height._value / 2);
            this.rotPhonePrompt.owner.firstChild._compMap.Sprite_0.setScale(d.scale)
        },
        onOrientationChange: function (a) {
            d.onOrientationChangeCallback();
            d.defaultOrientation != a ? this.rotPhonePrompt.set_visible(!0) : this.rotPhonePrompt.set_visible(!1)
        },
        initPreloaderScene: function () {
            var a = this,
                b = d.width - 150,
                c = (new D).add(new ka),
                e = d.addFillSprite(c, 0, 0, 1118481, d.width, d.height, 1, !1),
                f = d.addFillSprite(e, d.halfWidth, d.halfHeight, 16777215, b, 50),
                h = d.addFillSprite(f, 4, 4, 1118481, 0, 42,
                    1, !1),
                i = l.loadAssetPack(Y.fromAssets("main"));
            i.get(function (b) {
                d.assets = b;
                d.settings = eb.parse(b.getFile("settings.ini").toString());
                c.removeChild(f);
                a.init.emit()
            });
            i.progressChanged.connect(function () {
                var a = i._progress / i._total;
                1 < a && (a = 1);
                h._compMap.Sprite_0.width.set__(a * (b - 8))
            });
            d.goToScene(c)
        },
        __class__: d
    };
    var Pb = function (a, b, c) {
        null == c && (c = 0.15);
        null == b && (b = !1);
        null == a && (a = !1);
        this.ox = this.oy = 0;
        this.swipeStart = new la(0, 0);
        this.lockX = a;
        this.lockY = b;
        this.scrollSmooth = c
    };
    f["yzi.components.ScrollComp"] =
        Pb;
    Pb.__name__ = ["yzi", "components", "ScrollComp"];
    Pb.__super__ = E;
    Pb.prototype = z(E.prototype, {
        get_name: function () {
            return "ScrollComp_7"
        },
        onAdded: function () {
            this.owner._compMap.Disposer_2.connect1(this.owner._compMap.Sprite_0.get_pointerDown(), ea(this, this.onPointerDown));
            this.owner._compMap.Disposer_2.connect1(this.owner._compMap.Sprite_0.get_pointerMove(), ea(this, this.onPointerMove));
            this.ownerSprite = this.owner._compMap.Sprite_0;
            this.endX = this.ownerSprite.x._value;
            this.endY = this.ownerSprite.y._value
        },
        onUpdate: function (a) {
            if (this.dragging)
                if (l._platform.getPointer().isDown()) {
                    if (!this.lockX) {
                        var b = this.ownerSprite.x;
                        b.set__(b._value + (d.localPointerX() - this.ownerSprite.x._value - this.ox) / this.scrollSmooth * a);
                        this.endX = d.localPointerX()
                    }
                    this.lockY || (b = this.ownerSprite.y, b.set__(b._value + (d.localPointerY() - this.ownerSprite.y._value - this.oy) / this.scrollSmooth * a), this.endY = d.localPointerY())
                } else null != this.swipeHckEnt && (this.swipeHckEnt.dispose(), this.swipeHckEnt = null), this.dragging = !1;
            else this.lockX ||
                (b = this.ownerSprite.x, b.set__(b._value + (this.endX - this.ownerSprite.x._value - this.ox) / this.scrollSmooth * a)), this.lockY || (b = this.ownerSprite.y, b.set__(b._value + (this.endY - this.ownerSprite.y._value - this.oy) / this.scrollSmooth * a));
            this.lockX || (0 < this.ownerSprite.x._value - this.ownerSprite.anchorX._value && this.ownerSprite.x.set__(this.ownerSprite.anchorX._value), this.ownerSprite.x._value - this.ownerSprite.anchorX._value < d.width - this.ownerSprite.getNaturalWidth() && this.ownerSprite.x.set__(d.width - this.ownerSprite.getNaturalWidth() +
                this.ownerSprite.anchorX._value));
            this.lockY || (0 < this.ownerSprite.y._value - this.ownerSprite.anchorY._value && this.ownerSprite.y.set__(this.ownerSprite.anchorY._value), this.ownerSprite.y._value - this.ownerSprite.anchorY._value < d.height - this.ownerSprite.getNaturalHeight() && this.ownerSprite.y.set__(d.height - this.ownerSprite.getNaturalHeight() + this.ownerSprite.anchorY._value))
        },
        onPointerDown: function (a) {
            this.dragging = !0;
            this.ox = d.localPointerX() - this.ownerSprite.x._value;
            this.oy = d.localPointerY() - this.ownerSprite.y._value;
            this.swipeStart.set(a.viewX, a.viewY)
        },
        onPointerMove: function (a) {
            this.dragging && null == this.swipeHckEnt && 50 < this.swipeStart.distanceTo(a.viewX, a.viewY) && (this.swipeHckEnt = d.addFillSprite(this.owner, 0, 0, 0, this.ownerSprite.getNaturalWidth(), this.ownerSprite.getNaturalHeight(), 0, !1))
        },
        __class__: Pb
    });
    var Dc = 0;
    Math.NaN = Number.NaN;
    Math.NEGATIVE_INFINITY = Number.NEGATIVE_INFINITY;
    Math.POSITIVE_INFINITY = Number.POSITIVE_INFINITY;
    f.Math = Math;
    Math.isFinite = function (a) {
        return isFinite(a)
    };
    Math.isNaN = function (a) {
        return isNaN(a)
    };
    String.prototype.__class__ = f.String = String;
    String.__name__ = ["String"];
    f.Array = Array;
    Array.__name__ = ["Array"];
    Date.prototype.__class__ = f.Date = Date;
    Date.__name__ = ["Date"];
    var Ec = f.Int = {
            __name__: ["Int"]
        },
        Fc = f.Dynamic = {
            __name__: ["Dynamic"]
        },
        Bc = f.Float = Number;
    Bc.__name__ = ["Float"];
    var Cc = f.Bool = Boolean;
    Cc.__ename__ = ["Bool"];
    var Gc = f.Class = {
            __name__: ["Class"]
        },
        Hc = {};
    o.Element = "element";
    o.PCData = "pcdata";
    o.CData = "cdata";
    o.Comment = "comment";
    o.DocType = "doctype";
    o.ProcessingInstruction = "processingInstruction";
    o.Document = "document";
    fa.unlockedLevels = 0;
    i.dirs = [new la(0, -1), new la(0, 1), new la(1, 0), new la(-1, 0)];
    i.pieceWidth = 70;
    i.pieceHeight = 70;
    i.gap = 0;
    i.initPlayingGridHeight = 10;
    C.gridIsActive = !0;
    ta.instance = new ta;
    P.DISPATCHING_SENTINEL = new Ka(null, null);
    l.root = new D;
    l.uncaughtError = new G;
    l.hidden = new S(!1);
    l.volume = new n(1);
    l._platform = ta.instance;
    l._calledInit = !1;
    Y.__meta__ = {
        obj: {
            assets: [{
                main: [{
                    bytes: 6989,
                    md5: "07581d6dd6561438a77469c018022c8c",
                    name: "bl0.png"
                }, {
                    bytes: 7698,
                    md5: "5c9f32ab78682d5c70e1d872752bbf18",
                    name: "bl1.png"
                }, {
                    bytes: 13554,
                    md5: "90dab077d38a874ec231ecb9bf12d95d",
                    name: "bl111.png"
                }, {
                    bytes: 16754,
                    md5: "48d314a4cb7d2c75f94f4ef6d31b12b3",
                    name: "bl112.png"
                }, {
                    bytes: 9354,
                    md5: "a13c76b799c0a91a1c6567632a9904f2",
                    name: "bl113.png"
                }, {
                    bytes: 7412,
                    md5: "11d01efbe515a5b571573940e3f3ec67",
                    name: "bl2.png"
                }, {
                    bytes: 8977,
                    md5: "439f547b7689d25042b7f7567b35c398",
                    name: "bl20.png"
                }, {
                    bytes: 8414,
                    md5: "7d2d960a50fcb9fc7ea0e180d6ada829",
                    name: "bl222.png"
                }, {
                    bytes: 7969,
                    md5: "6390ba436b77d612ef4abe140dc64b62",
                    name: "bl3.png"
                }, {
                    bytes: 8727,
                    md5: "ea6704f9be4ee112bb1ef4c854c85ad3",
                    name: "bl4.png"
                }, {
                    bytes: 7615,
                    md5: "225ef170e8897a2401c122d8e8490971",
                    name: "bl40.png"
                }, {
                    bytes: 8283,
                    md5: "2ed273e7d84c647191712b8ab5a42b80",
                    name: "bl5.png"
                }, {
                    bytes: 9070,
                    md5: "da9ccc86422bbb118afc064d70c9bbb5",
                    name: "bl6.png"
                }, {
                    bytes: 8559,
                    md5: "0f0425bac9b4bde63c9da509bdf01284",
                    name: "bl7.png"
                }, {
                    bytes: 9493,
                    md5: "92ca183bfdae3892ed056b1112adf564",
                    name: "bl8.png"
                }, {
                    bytes: 9239,
                    md5: "c63468f89380053e964a2c49a13414b9",
                    name: "bl9.png"
                }, {
                    bytes: 73986,
                    md5: "31a26964765f77ca6f33358f3211a438",
                    name: "blade.png"
                }, {
                    bytes: 9228,
                    md5: "d4175a33d89c737f08071cc234e1a54b",
                    name: "booster1_mrk.png"
                }, {
                    bytes: 9297,
                    md5: "57d9a56686d7b82e608ac7f2786fd5ef",
                    name: "booster1_mrk2.png"
                }, {
                    bytes: 9229,
                    md5: "52f3cf2c2a45eced4b003c3edaa0e8a0",
                    name: "booster2_mrk.png"
                }, {
                    bytes: 9286,
                    md5: "54aa351f6f653f8c4112624bfdc4f46f",
                    name: "booster2_mrk2.png"
                }, {
                    bytes: 5763,
                    md5: "499f4e5cbdcfcfbc2e22ba548d78651a",
                    name: "booster_bar.png"
                }, {
                    bytes: 14772,
                    md5: "04089e1482bdf1c45b76649b1a8f189c",
                    name: "booster_bar_fill.png"
                }, {
                    bytes: 29493,
                    md5: "d87fe051241a00e706b7e4a948314182",
                    name: "bottom_wheels.png"
                }, {
                    bytes: 14622,
                    md5: "0007ec85a82401040a8e47dce9f7f899",
                    name: "btn_level_select.png"
                }, {
                    bytes: 7982,
                    md5: "b4232721cac5cf91c47ea93a61f7a5b5",
                    name: "cage.png"
                }, {
                    bytes: 51233,
                    md5: "11640eebd32de45cf6e12b704b01e295",
                    name: "default_font1.fnt"
                }, {
                    bytes: 372109,
                    md5: "0a010d9c624b845409d5c1c404407680",
                    name: "default_font1.png"
                },{
                    bytes: 11456,
                    md5: "11640eebd32de45cf6e12b704b01e29590",
                    name: "default_font2.fnt"
                }, {
                    bytes: 69226,
                    md5: "0a010d9c624b845409d5c1c40440768034",
                    name: "default_font2.png"
                }, {
                    bytes: 43399,
                    md5: "d79756db6a9431852f94bffff23d80a6",
                    name: "fx/block_explosion.png"
                }, {
                    bytes: 36222,
                    md5: "0e99aa76603201928b44c8efe29cbd3e",
                    name: "fx/block_explosion1.png"
                }, {
                    bytes: 36633,
                    md5: "3f7fe8a95c67fba5502589eee4f2ceef",
                    name: "fx/booster_fx.png"
                }, {
                    bytes: 1983,
                    md5: "677457a87b8d663eaba5b25411219b1f",
                    name: "fx/explode.pex"
                }, {
                    bytes: 6987,
                    md5: "7f9e5fc0c1b333dfa95fa6cf177e2ba2",
                    name: "fx/explosion_0.png"
                }, {
                    bytes: 17398,
                    md5: "87a4289f27903aa62eec1b1cc9d3d4d1",
                    name: "fx/explosion_1.png"
                }, {
                    bytes: 23347,
                    md5: "7b8077233a5d9073938eecb0e99022ee",
                    name: "fx/explosion_2.png"
                }, {
                    bytes: 23120,
                    md5: "2114df557b05d5965ce6b2335a143a51",
                    name: "fx/explosion_3.png"
                }, {
                    bytes: 41186,
                    md5: "9d3c7302453d56c90d6625d3ff5cabdd",
                    name: "fx/explosion_4.png"
                }, {
                    bytes: 20889,
                    md5: "55ea27871498de7d6c43f298db2c4ab9",
                    name: "fx/flash_fx.png"
                }, {
                    bytes: 1216,
                    md5: "2283aa09c0d961595ef2cd2db75b9368",
                    name: "fx/spark.png"
                }, {
                    bytes: 58055,
                    md5: "c43bb2d3b5b66dd8ec1dc944440bfd98",
                    name: "game_over_icon.png"
                }, {
                    bytes: 197192,
                    md5: "5c32d5125b0753778401b4ad4353b4a4",
                    name: "game_scene_bg.png"
                }, {
                    bytes: 246650,
                    md5: "489aa9c1fba064fc54285786b6f7a23a",
                    name: "game_title.png"
                }, {
                    bytes: 11065,
                    md5: "c5abf54c5fe11c484f473df9074ee8ac",
                    name: "home_btn.png"
                }, {
                    bytes: 15004,
                    md5: "36596867419c8ad039a90addd613bf99",
                    name: "hud_bottom_bg.png"
                }, {
                    bytes: 27551,
                    md5: "5f5c2f78caf39398d5179db3ee8d11db",
                    name: "hud_top_bg.png"
                }, {
                    bytes: 61062,
                    md5: "e980e348bb5dada5769985752058b16b",
                    name: "level_end_flag.png"
                }, {
                    bytes: 6388,
                    md5: "87693264d7ad57984fc326d14066d2fb",
                    name: "lock_icon.png"
                }, {
                    bytes: 12666,
                    md5: "9d5c276fa1d31c5ece4d14947f95d999",
                    name: "more_games_btn.png"
                }, {
                    bytes: 9361,
                    md5: "f4317a026c970596afd43d77edb441c8",
                    name: "pause_btn.png"
                }, {
                    bytes: 27022,
                    md5: "6077cfdd725bbe59431f07ac6f6393b7",
                    name: "play_btn2.png"
                }, {
                    bytes: 12745,
                    md5: "34d22fce8212c8e392955291259bd9b1",
                    name: "play_small_btn.png"
                }, {
                    bytes: 13010,
                    md5: "420e35f7a4613f0e0dd39769d3e2fe00",
                    name: "replay_btn.png"
                },{
                    bytes: 5034,
                    md5: "a8e3774b162ffd6c5afa9ff59ff9ed8c",
                    name: "sharebtn.png"
                }, {
                    bytes: 1785,
                    md5: "88737de50a6f56a9c73f39df040b7186",
                    name: "score_font.fnt"
                }, {
                    bytes: 14651,
                    md5: "7a0ab850bade79468e93b4324e63ad9f",
                    name: "score_font.png"
                }, {
                    bytes: 1348,
                    md5: "dcfd19599892609f43b01e60e097fd14",
                    name: "score_font2.fnt"
                }, {
                    bytes: 10537,
                    md5: "a73c5aa23eb7aa495f33a2dd9b2592c1",
                    name: "score_font2.png"
                }, {
                    bytes: 41816,
                    md5: "6bbb62c39c2b1116372068d0857fbe06",
                    name: "score_icon.png"
                }, {
                    bytes: 2916,
                    md5: "8412ad845a54240fa63710048d43057a",
                    name: "settings.ini"
                }, {
                    bytes: 12660,
                    md5: "ba05f1375e24c1c17f5178d9f14f8ce7",
                    name: "sound_off_btn.png"
                }, {
                    bytes: 12759,
                    md5: "e3134f7b8948c1f2f8fcecec5deb171a",
                    name: "sound_on_btn.png"
                }, {
                    bytes: 42607,
                    md5: "6d9943b488cfdcd9b0777b3207078e8b",
                    name: "sounds/bonus_sfx.mp3"
                }, {
                    bytes: 10424,
                    md5: "516c4f0e0fa353ae20c8e158a95f169e",
                    name: "sounds/button_click_sfx.mp3"
                }, {
                    bytes: 93313,
                    md5: "f4dbd00eb4d6424829c938d9def1d118",
                    name: "sounds/game_over_sfx.mp3"
                }, {
                    bytes: 29315,
                    md5: "8abc0777a741956cce2a4f880f41b2ed",
                    name: "sounds/level_end_sfx.mp3"
                }, {
                    bytes: 19634,
                    md5: "98877fac3c3a69a9b3e872e70f0bb438",
                    name: "sounds/no_match_sfx.mp3"
                }, {
                    bytes: 9429,
                    md5: "bdef4466755b50f32182d22bbc0b1b2d",
                    name: "sounds/pop_sfx.mp3"
                }, {
                    bytes: 248410,
                    md5: "12257e52dba56061f956eeaf9ce3a521",
                    name: "sounds/soundtrack1.mp3"
                }],
                boot: [{
                    bytes: 12539,
                    md5: "8ff68b1f9e1dc38d7cb46c0defb7539e",
                    name: "rot_phone.png"
                }]
            }]
        }
    };
    Y._supportsCrossOrigin =
        function () {
            var a;
            a = 0 <= window.navigator.userAgent.indexOf("Linux; U; Android") ? !1 : null != (new XMLHttpRequest).withCredentials;
            a || null;
            //todo, close the .orig support
            return false;
            return a
        }();
    r._scratchPoint = new la;
    Ma.NEWLINE = new rb(10);
    Z._sharedEvent = new Zb;
    Q._sharedEvent = new $b;
    Ja.CANVAS_TEXTURES = (new $("(iPhone|iPod|iPad)", "")).match(window.navigator.userAgent);
    B._mediaRefCount = 0;
    B._detectBlobSupport = !1;
    u.VENDOR_PREFIXES = ["webkit", "moz", "ms", "o", "khtml"];
    u.SHOULD_HIDE_MOBILE_BROWSER = window.top == window && (new $("Mobile(/.*)? Safari", "")).match(window.navigator.userAgent);
    A._detectSupport = !0;
    pa.USE_CACHE = !1;
    pa.USE_ENUM_INDEX = !1;
    pa.BASE64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789%:";
    V.DEFAULT_RESOLVER = H;
    V.BASE64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789%:";
    Fa.count = 0;
    ra.escapes = function () {
        var a = new O;
        a.set("lt", "<");
        a.set("gt", ">");
        a.set("amp", "&");
        a.set("quot", '"');
        a.set("apos", "'");
        a.set("nbsp", String.fromCharCode(160));
        return a
    }(this);
    X.cLevel = 0;
    t.soundsFolder = "sounds";
    t.isMuted = !1;
    d.defaultOrientation = ja.Portrait;
    d.defaultFont =
        "default_font1";
    d.systemBgColor = 0;
    d.buttonClickSfx = "";
    W.main()
})();
