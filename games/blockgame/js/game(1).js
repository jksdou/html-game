function att(e) {
    new Jok.JokEngine("gameCanvas");
    (new Jok.JokG).jokEngine.initState(new PreloadState)
}

function init() {
   att(0);
}
var Jok = Jok || {};
Jok.JokState = function() {
    createjs.Container.call(this);
    this.name = ""
};
Jok.JokState.prototype = Object.create(createjs.Container.prototype);
Jok.JokState.prototype.constructor = Jok.JokState;
Jok.JokState.prototype.dispose = function() {};
Jok.JokState.prototype.create = function() {};
Jok.JokState.prototype.update = function() {};
SplashScreenZibbo = function() {
    Jok.JokState.call(this)
};
SplashScreenZibbo.prototype = Object.create(Jok.JokState.prototype);
SplashScreenZibbo.prototype.constructor = SplashScreenZibbo;
SplashScreenZibbo.prototype.create = function() {
    console.log("SplashScreenZibbo.create");
    var e = new createjs.Container;
    this.addChild(e);
    this.shape = new createjs.Shape;
    this.shape.x = -(new Jok.JokG).width / 2;
    this.shape.y = -(new Jok.JokG).height / 2;
    this.shape.graphics.beginFill("rgba(255,255,255,1)").rect(0, 0, (new Jok.JokG).width, (new Jok.JokG).height);
    e.addChild(this.shape);
    var t = new createjs.Bitmap((new Jok.JokG).queue.getResult("zibboLogoBig"));
    t.x = -t.getBounds().width / 2;
    t.y = -t.getBounds().height / 2;
    e.addChild(t);
    console.log("bmp.x = " + t.x);
    this.timeBegin = createjs.Ticker.getTime();
    this.transScreen = true;
    e.on("click", createjs.proxy(ZibboUtils.logoAction, this));
    e.cursor = "pointer";
    if ((new Jok.JokG).showZibbo) {
        console.log("new Jok.JokG().showZibbo = " + (new Jok.JokG).showZibbo)
    }
};
SplashScreenZibbo.prototype.openUrl = function() {
    ZibboUtils.logoAction()
};
SplashScreenZibbo.prototype.update = function() {
    if (createjs.Ticker.getTime() - this.timeBegin > 500 && this.transScreen) {
        this.transScreen = false;
        (new Jok.JokG).jokEngine.transitionScreen(new MainMenu, null, null)
    }
};
ZibboUtils = function() {};
ZibboUtils.prototype.constructor = ZibboUtils;
ZibboUtils.walkAction = function() {
    ZibboUtils.buttonAction("walkthrough")
};
ZibboUtils.moreAction = function() {
    ZibboUtils.buttonAction("more_games")
};
ZibboUtils.logoAction = function() {
    ZibboUtils.buttonAction("logo")
};
ZibboUtils.buttonAction = function(e) {};
ZibboUtils.openUrl = function(e) {
    e = e || "http://play68.com";
    var t = window.open(e, "_blank");
    t.focus()
};
MyButtonBase = function(e, t, n, r) {
    createjs.Container.call(this);
    this.actionFunc = e;
    this._actionDefault = null;
    this.x = t.x;
    this.y = t.y;
    this._scaleBegin = n;
    this.scaleX = this._scaleBegin.x;
    this.scaleY = this._scaleBegin.y;
    if (r)
        if (r.length > 0) {
            this.sprDown = new createjs.Sprite(Jok.JokG().animLoader.spriteSheet, r);
            this.sprDown.stop();
            this.addChild(this.sprDown)
        }
    this.onWork();
    this.TIME_ANIM = 300;
    this.SCALE_ANIM = 1.11;
    this.tweenSize = null;
    this.eventScaleBegin = createjs.proxy(this.scaleBegin, this);
    this.eventScaleEnd = createjs.proxy(this.scaleEnd, this)
};
MyButtonBase.prototype = Object.create(createjs.Container.prototype);
MyButtonBase.prototype.constructor = MyButtonBase;
MyButtonBase.prototype.addBmpTTT = function(e, t, n, r) {
    console.log("bmp = " + e);
    console.log("MyButtonBase.prototype.addBmpTTT  width = " + n);
    if (n);
    else if (e.getBounds()) {
        n = e.getBounds().width;
        r = e.getBounds().height
    } else {
        n = 202;
        r = 50
    } if (t) {
        e.x = -n / 2;
        e.y = -r / 2
    }
    var i = new createjs.Shape((new createjs.Graphics).beginFill("#000000").drawRect(e.x, e.y, n, r));
    this.hitArea = i;
    this.addChild(e);
    console.log("this.addChild(bmp);")
};
MyButtonBase.prototype.initUp = function(e) {
    this.sprUp = new createjs.Sprite(Jok.JokG().animLoader.spriteSheet, e);
    this.sprUp.stop();
    this.addChild(this.sprUp)
};
MyButtonBase.prototype.action = function(e) {
    if (this.tweenSize == null) {
        (new MusicManager).playMouse();
        if (this.actionFunc != null) this.actionFunc();
        this.tweenSize = createjs.Tween.get(this).to({
            scaleX: this._scaleBegin.x * this.SCALE_ANIM,
            scaleY: this._scaleBegin.y * this.SCALE_ANIM
        }, this.TIME_ANIM, createjs.Ease.quartInOut).call(this.eventScaleBegin)
    }
};
MyButtonBase.prototype.scaleBegin = function(e) {
    this.tweenSize = createjs.Tween.get(this).to({
        scaleX: this._scaleBegin.x,
        scaleY: this._scaleBegin.y
    }, this.TIME_ANIM, createjs.Ease.quartInOut).call(this.eventScaleEnd)
};
MyButtonBase.prototype.scaleEnd = function(e) {
    this.tweenSize = null
};
MyButtonBase.prototype.onSetAction = function(e) {
    this.offWork();
    this._actionDefault = e;
    this.onWork()
};
MyButtonBase.prototype.onWork = function() {
    if (!this.hasEventListener("click"))
        if (this._actionDefault != null) this.on("click", this._actionDefault);
        else this.eventAction = this.on("click", createjs.proxy(this.action, this));
    this.cursor = "pointer"
};
MyButtonBase.prototype.offWork = function() {
    console.log("MyButtonBase.prototype.offWork");
    if (this.hasEventListener("click")) this.off("click", this.eventAction);
    this.cursor = "arrow"
};
FieldContainer = function(e, t) {
    createjs.Container.call(this);
    this.gameManager = t;
    this.field = e;
    this.fieldsSteps = [];
    this.addSaveStep();
    this.x = -this.gameManager.FIELD_WIDTH / 2 * this.gameManager.CELL_SIZE + this.gameManager.CELL_SIZE;
    this.y = -207;
    this.BLUE_ID = 1;
    this.ORANGE_ID = 2;
    this.BLACK_ID = 3;
    this.PURPLE_ID = 4;
    this._moveClipsNames = {};
    this._moveClipsNames["" + this.BLUE_ID] = "tile_a_";
    this._moveClipsNames["" + this.ORANGE_ID] = "tile_c_";
    this._moveClipsNames["" + this.BLACK_ID] = "tile_black_";
    this._moveClipsNames["" + this.PURPLE_ID] = "tile_b_";
    this.figures = [];
    this._moveComplete = true;
    this._numMove = 0;
    this.findFigures();
    this.drawBlackCells();
    this.initMouse()
};
FieldContainer.prototype = Object.create(createjs.Container.prototype);
FieldContainer.prototype.constructor = FieldContainer;
FieldContainer.prototype.initMouse = function() {
    this.stage = (new Jok.JokG).stage;
    this._mouseDown = false;
    this._step = false;
    this._oldPos = new createjs.Point(this.stage.mouseX, this.stage.mouseY);
    this.onMouse();
    this.MOUSE_X_Y_DIFF_MIN = 5;
    this.MOUSE_PATH_MIN = 3
};
FieldContainer.prototype.offMouse = function() {
    this.stage.off("stagemousemove", this.eventMove);
    this.stage.off("stagemousedown", this.eventMouseDown);
    this.stage.off("stagemouseup", this.eventMouseUp)
};
FieldContainer.prototype.onMouse = function() {
    this.eventMove = this.stage.on("stagemousemove", createjs.proxy(this.cccMouseMove, this));
    this.eventMouseDown = this.stage.on("stagemousedown", createjs.proxy(this.cccMouseDown, this));
    this.eventMouseUp = this.stage.on("stagemouseup", createjs.proxy(this.cccMouseUp, this))
};
FieldContainer.prototype.cccMouseMove = function(e) {
    if (this._mouseDown && this._step && this._moveComplete) {
        var t = this.stage.mouseX;
        var n = this.stage.mouseY;
        var r = Math.abs(t - this._oldPos.x);
        var i = Math.abs(n - this._oldPos.y);
        if (Math.abs(r - i) < this.MOUSE_X_Y_DIFF_MIN || r < this.MOUSE_PATH_MIN && i < this.MOUSE_PATH_MIN) {
            this._oldPos.x = t;
            this._oldPos.y = n;
            return
        }
        this._step = false;
        this._numMove = 0;
        this._moveComplete = false;
        if (r > i)
            if (t > this._oldPos.x) this.step(1, 0);
            else this.step(-1, 0);
        else if (n > this._oldPos.y) this.step(0, 1);
        else this.step(0, -1);
        this._oldPos.x = t;
        this._oldPos.y = n
    }
};
FieldContainer.prototype.cccMouseDown = function(e) {
    this._mouseDown = true;
    this._step = true;
    this._oldPos.x = this.stage.mouseX;
    this._oldPos.y = this.stage.mouseY
};
FieldContainer.prototype.cccMouseUp = function(e) {
    this._mouseDown = false
};
FieldContainer.prototype.findFigures = function() {
    var e = new FigureBlocks(this.field, this.gameManager, this);
    var t = 0;
    var n = 0;
    for (t = 0; t < this.gameManager.FIELD_WIDTH; t++)
        for (n = 0; n < this.gameManager.FIELD_HEIGHT; n++)
            if (!this.cellOnFigere(t, n))
                if (e.findAllCells(t, n)) {
                    this.figures.push(e);
                    this.addChild(e);
                    var e = new FigureBlocks(this.field, this.gameManager, this)
                }
};
FieldContainer.prototype.cellOnFigere = function(e, t) {
    for (var n = 0; n < this.figures.length; n++)
        if (this.figures[n].isCellFigure(e, t)) return true;
    return false
};
FieldContainer.prototype.drawBlackCells = function() {
    this.drawOne(this.BLACK_ID)
};
FieldContainer.prototype.testDrawFiled = function() {
    this.removeAllChildren();
    this.drawOne(this.BLACK_ID);
    this.drawOne(this.BLUE_ID);
    this.drawOne(this.ORANGE_ID);
    this.drawOne(this.PURPLE_ID)
};
FieldContainer.prototype.drawOne = function(e) {
    var t = -1;
    var n = -1;
    var r = new createjs.Container;
    this.addChild(r);
    for (t = -1; t < this.gameManager.FIELD_WIDTH; t++)
        for (n = -1; n < this.gameManager.FIELD_HEIGHT; n++) {
            var i = this.getSprTile(t, n, e);
            if (i != null) {
                i.x = this.gameManager.CELL_SIZE * t;
                i.y = this.gameManager.CELL_SIZE * n;
                r.addChild(i)
            }
        }
};
FieldContainer.prototype.getSprTile = function(e, t, n) {
    var r = this.getTileId(e, t);
    var i = this.getTileId(e + 1, t);
    var s = this.getTileId(e + 1, t + 1);
    var o = this.getTileId(e, t + 1);
    if (r != n) r = 0;
    else r = 1; if (i != n) i = 0;
    else i = 1; if (s != n) s = 0;
    else s = 1; if (o != n) o = 0;
    else o = 1; if (r == 0 && i == 0 && s == 0 && o == 0) return null;
    var u = new createjs.Sprite(Jok.JokG().animLoader.spriteSheet, this._moveClipsNames["" + n] + r + "_" + i + "_" + s + "_" + o);
    u.stop();
    return u
};
FieldContainer.prototype.getTileId = function(e, t) {
    if (e <= -1 || t <= -1 || e >= this.gameManager.FIELD_WIDTH || t >= this.gameManager.FIELD_HEIGHT) return 0;
    return this.field[e][t]
};
FieldContainer.prototype.getFigureByCell = function(e, t) {
    for (var n = 0; n < this.figures.length; n++)
        if (this.figures[n].isCellFigure(e, t)) return this.figures[n];
    console.log("OMFG figures = NULL )) cellX = " + e + " cellY = " + t);
    return null
};
FieldContainer.prototype.step = function(e, t) {
    for (var n = 0; n < this.figures.length; n++) this.figures[n].step(e, t);
    var r = false;
    while (true) {
        r = false;
        for (var n = 0; n < this.figures.length; n++)
            if (this.figures[n].postStep()) r = true;
        if (!r) break
    }
    for (var n = 0; n < this.figures.length; n++) this.figures[n].preGo();
    var i = false;
    for (n = 0; n < this.figures.length; n++)
        if (this.figures[n].go(e, t)) i = true;
    if (i) {
        (new MusicManager).playStep();
        this.gameManager.gui.starBar.addStep();
        this.addSaveStep()
    }
};
FieldContainer.prototype.checkFigureConnection = function() {
    var e = false;
    for (var t = 0; t < this.figures.length; t++)
        for (var n = t + 1; n < this.figures.length; n++)
            if (this.figures[t].connectToFigure(this.figures[n])) e = true;
    if (e) {
        for (var t = 0; t < this.figures.length; t++)
            if (this.figures[t].connecting) {
                this.removeChild(this.figures[t]);
                this.figures.splice(t, 1);
                t--
            }
        this.findFigures();
        if (!this.checkWin())(new MusicManager).playConnect()
    }
};
FieldContainer.prototype.checkWin = function() {
    var e = {};
    e["" + this.BLUE_ID] = 0;
    e["" + this.ORANGE_ID] = 0;
    e["" + this.BLACK_ID] = 0;
    e["" + this.PURPLE_ID] = 0;
    for (var t = 0; t < this.figures.length; t++) e["" + this.figures[t].cellId]++;
    for (var t in e)
        if (e[t] > 1) return false;
    this.gameManager.setGameOver();
    console.log("WIN!!!");
    // updateShare(this.gameManager.levelId + 1);
    // Play68.setRankingScoreDesc(this.gameManager.levelId + 1, Play68.rankingShowType.RANKING_SHOW_NO);
    return true
};
FieldContainer.prototype.moveComplete = function() {
    this._numMove++;
    if (this._numMove == this.figures.length) {
        this._moveComplete = true;
        this.checkFigureConnection()
    }
};
FieldContainer.prototype.addSaveStep = function() {
    var e = [];
    for (var t = 0; t < this.field.length; t++) e.push(this.field[t].slice(0));
    this.fieldsSteps.push(e);
    this.traceSteps()
};
FieldContainer.prototype.deleteStep = function() {
    if (this.gameManager.gui.starBar.stepNow > 0) {
        var e = this.fieldsSteps[this.gameManager.gui.starBar.stepNow - 1];
        for (var t = 0; t < e.length; t++)
            for (var n = 0; n < e[t].length; n++) this.field[t][n] = e[t][n];
        this.fieldsSteps.pop();
        console.log(this.fieldsSteps.length);
        this.gameManager.gui.starBar.stepNow = this.gameManager.gui.starBar.stepNow - 2;
        this.gameManager.gui.starBar.addStep();
        for (var t = 0; t < this.figures.length; t++) this.removeChild(this.figures[t]);
        this.figures.length = 0;
        this.findFigures()
    }
    this.traceSteps()
};
FieldContainer.prototype.traceSteps = function() {};
FigureBlocks = function(e, t, n) {
    createjs.Container.call(this);
    this.gameManager = t;
    this.field = e;
    this.fieldContainer = n;
    this._moveClipsNames = this.fieldContainer._moveClipsNames;
    this.cells = [];
    this.id = (new Jok.JokG).getNewid();
    this.figuresStep = [];
    this.connecting = false;
    this.tweenMove = null;
    this.eventMoveComplete = createjs.proxy(this.moveComplete, this);
    this.MOVE_TIME = 320;
    this.MOVE_CLOSE_PATH = this.gameManager.CELL_SIZE / 10
};
FigureBlocks.prototype = Object.create(createjs.Container.prototype);
FigureBlocks.prototype.constructor = FigureBlocks;
FigureBlocks.prototype.setCells = function(e) {
    this.cells = e
};
FigureBlocks.prototype.findAllCells = function(e, t) {
    this.cells.length = 0;
    if (this.field[e][t] == 0 || this.field[e][t] == this.fieldContainer.BLACK_ID) return false;
    this.cellId = this.field[e][t];
    this.addCell(e, t);
    this.drawOne(this.cellId);
    return true
};
FigureBlocks.prototype.testFigure = function() {
    var e = "" + this.cellId + "    ";
    for (var t = 0; t < this.cells.length; t++) e += "" + this.cells[t].x + " " + this.cells[t].y + "     ";
    console.log(e)
};
FigureBlocks.prototype.addCell = function(e, t) {
    if (e <= -1 || t <= -1 || e >= this.gameManager.FIELD_WIDTH || t >= this.gameManager.FIELD_HEIGHT) return;
    if (this.field[e][t] != this.cellId) return;
    if (!this.isCellFigure(e, t)) {
        this.cells.push(new createjs.Point(e, t));
        this.addCell(e - 1, t);
        this.addCell(e + 1, t);
        this.addCell(e, t - 1);
        this.addCell(e, t + 1)
    }
};
FigureBlocks.prototype.isCellFigure = function(e, t) {
    var n = 0;
    for (n = 0; n < this.cells.length; n++)
        if (this.cells[n].x == e && t == this.cells[n].y) return true;
    return false
};
FigureBlocks.prototype.drawOne = function(e) {
    var t = -1;
    var n = -1;
    for (t = -1; t < this.gameManager.FIELD_WIDTH; t++)
        for (n = -1; n < this.gameManager.FIELD_HEIGHT; n++) {
            var r = this.getSprTile(t, n, e);
            if (r != null) {
                r.x = this.gameManager.CELL_SIZE * t;
                r.y = this.gameManager.CELL_SIZE * n;
                this.addChild(r)
            }
        }
    this.casheAllTTTT()
};
FigureBlocks.prototype.casheAllTTTT = function() {};
FigureBlocks.prototype.getSprTile = function(e, t, n) {
    var r = this.getTileId(e, t);
    var i = this.getTileId(e + 1, t);
    var s = this.getTileId(e + 1, t + 1);
    var o = this.getTileId(e, t + 1);
    if (r != n) r = 0;
    else r = 1; if (i != n) i = 0;
    else i = 1; if (s != n) s = 0;
    else s = 1; if (o != n) o = 0;
    else o = 1; if (r == 0 && i == 0 && s == 0 && o == 0) return null;
    var u = new createjs.Sprite(Jok.JokG().animLoader.spriteSheet, this._moveClipsNames["" + n] + r + "_" + i + "_" + s + "_" + o);
    u.stop();
    return u
};
FigureBlocks.prototype.getTileId = function(e, t) {
    if (e <= -1 || t <= -1 || e >= this.gameManager.FIELD_WIDTH || t >= this.gameManager.FIELD_HEIGHT) return 0;
    if (this.isCellFigure(e, t)) return this.field[e][t];
    return 0
};
FigureBlocks.prototype.step = function(e, t) {
    this.step_id = this.gameManager.STEP_CLOSE;
    this.figuresStep.length = 0;
    var n = [];
    for (var r = 0; r < this.cells.length; r++) {
        var i = this.stepCell(r, e, t);
        if (i == this.gameManager.STEP_CLOSE) return this.gameManager.STEP_CLOSE;
        if (i == this.gameManager.STEP_CLOSE_FIGURE) n.push(new createjs.Point(this.cells[r].x + e, this.cells[r].y + t))
    }
    if (n.length == 0) {
        this.step_id = this.gameManager.STEP_OPEN;
        return this.gameManager.STEP_OPEN
    }
    for (var r = 0; r < n.length; r++) this.addFigureStep(this.fieldContainer.getFigureByCell(n[r].x, n[r].y));
    this.step_id = this.gameManager.STEP_CLOSE_FIGURE;
    return this.gameManager.STEP_CLOSE_FIGURE
};
FigureBlocks.prototype.addFigureStep = function(e) {
    if (e == null) return;
    for (var t = 0; t < this.figuresStep.length; t++)
        if (this.figuresStep[t].id == e.id) return;
    this.figuresStep.push(e)
};
FigureBlocks.prototype.stepCell = function(e, t, n) {
    var r = this.cells[e].x + t;
    var i = this.cells[e].y + n;
    if (r <= -1 || i <= -1 || r >= this.gameManager.FIELD_WIDTH || i >= this.gameManager.FIELD_HEIGHT) return this.gameManager.STEP_CLOSE;
    var s = this.field[r][i];
    if (s == 0 || s == this.cellId) return this.gameManager.STEP_OPEN;
    if (s == this.fieldContainer.BLACK_ID) return this.gameManager.STEP_CLOSE;
    return this.gameManager.STEP_CLOSE_FIGURE
};
FigureBlocks.prototype.postStep = function() {
    if (this.step_id == this.gameManager.STEP_CLOSE_FIGURE)
        for (var e = 0; e < this.figuresStep.length; e++)
            if (this.figuresStep[e].step_id == this.gameManager.STEP_CLOSE) {
                this.step_id = this.gameManager.STEP_CLOSE;
                return true
            }
    return false
};
FigureBlocks.prototype.preGo = function() {
    if (this.step_id == this.gameManager.STEP_CLOSE) return;
    for (var e = 0; e < this.cells.length; e++) this.field[this.cells[e].x][this.cells[e].y] = 0
};
FigureBlocks.prototype.go = function(e, t) {
    if (this.step_id == this.gameManager.STEP_CLOSE) {
        this.tweenMove = createjs.Tween.get(this).to({
            x: this.x + e * this.MOVE_CLOSE_PATH,
            y: this.y + t * this.MOVE_CLOSE_PATH
        }, this.MOVE_TIME / 2, createjs.Ease.quartInOut).to({
            x: this.x,
            y: this.y
        }, this.MOVE_TIME / 2, createjs.Ease.quartInOut).call(this.eventMoveComplete);
        return false
    }
    for (var n = 0; n < this.cells.length; n++) {
        this.cells[n].x += e;
        this.cells[n].y += t;
        this.field[this.cells[n].x][this.cells[n].y] = this.cellId
    }
    this.tweenMove = createjs.Tween.get(this).to({
        x: this.x + e * this.gameManager.CELL_SIZE,
        y: this.y + t * this.gameManager.CELL_SIZE
    }, this.MOVE_TIME, createjs.Ease.quartInOut).call(this.eventMoveComplete);
    return true
};
FigureBlocks.prototype.moveComplete = function(e) {
    this.fieldContainer.moveComplete()
};
FigureBlocks.prototype.connectToFigure = function(e) {
    if (e.cellId == this.cellId)
        for (var t = 0; t < this.cells.length; t++) {
            if (e.isCellFigure(this.cells[t].x + 1, this.cells[t].y)) {
                this.connecting = true;
                e.connecting = true;
                return true
            }
            if (e.isCellFigure(this.cells[t].x - 1, this.cells[t].y)) {
                this.connecting = true;
                e.connecting = true;
                return true
            }
            if (e.isCellFigure(this.cells[t].x, this.cells[t].y + 1)) {
                this.connecting = true;
                e.connecting = true;
                return true
            }
            if (e.isCellFigure(this.cells[t].x, this.cells[t].y - 1)) {
                this.connecting = true;
                e.connecting = true;
                return true
            }
        }
    return false
};
GameManager = function() {
    Jok.JokState.call(this);
    this.FIELD_WIDTH = 10;
    this.FIELD_HEIGHT = 10;
    this.CELL_SIZE = 60.9;
    this.levelId = 51;
    this.STEP_OPEN = 0;
    this.STEP_CLOSE = 1;
    this.STEP_CLOSE_FIGURE = 2
};
GameManager.prototype = Object.create(Jok.JokState.prototype);
GameManager.prototype.constructor = GameManager;
GameManager.prototype.create = function() {
    this.loadLevel();
    console.log("GameManager.create");
    var e = new createjs.Sprite(Jok.JokG().animLoader.spriteSheet, "allField_1_mc");
    this.addChild(e);
    this.gui = new GuiBlock(this);
    this.fieldContainer = new FieldContainer(this.field, this);
    this.addChild(this.fieldContainer);
    this.addChild(this.gui);
    if (this.levelId == 0) this.addChild(new HelpDialog(this))
};
GameManager.prototype.dispose = function() {
    this.fieldContainer.offMouse();
    this.gui.offButton()
};
GameManager.prototype.loadLevel = function() {
    this.field = [];
    for (var e = 0; e < this.FIELD_WIDTH; e++) {
        this.field[e] = [];
        for (var t = 0; t < this.FIELD_HEIGHT; t++) this.field[e][t] = 0
    }
    var n = [];
    n.push(1);
    n.push(2);
    n.push(4);
    n.push(12);
    n.push(48);
    n.push(8);
    n.push(10);
    n.push(14);
    n.push(3);
    n.push(11);
    n.push(5);
    n.push(25);
    n.push(15);
    n.push(30);
    n.push(6);
    n.push(34);
    n.push(16);
    n.push(47);
    n.push(7);
    n.push(27);
    n.push(40);
    n.push(19);
    n.push(51);
    n.push(35);
    n.push(13);
    n.push(43);
    n.push(38);
    n.push(22);
    n.push(23);
    n.push(39);
    n.push(49);
    n.push(36);
    n.push(20);
    n.push(52);
    n.push(17);
    n.push(50);
    n.push(21);
    n.push(32);
    n.push(31);
    n.push(26);
    n.push(37);
    n.push(33);
    n.push(29);
    n.push(45);
    n.push(28);
    n.push(44);
    n.push(18);
    n.push(42);
    n.push(9);
    n.push(24);
    n.push(46);
    n.push(41);
    var r = (new Jok.JokG).queue.getResult("gameLevels_1");
    var i = r.getElementsByTagName("Level")[n[this.levelId] - 1].getElementsByTagName("tiles")[0].getAttribute("id");
    this.numStar = parseInt(r.getElementsByTagName("Level")[n[this.levelId] - 1].getAttribute("numStar"));
    var s = 0;
    for (var e = 0; e < this.FIELD_WIDTH; e++)
        for (var t = 0; t < this.FIELD_HEIGHT; t++) {
            this.field[e][t] = parseInt(i[s]);
            s++
        }
};
GameManager.prototype.restart = function() {
    var e = new GameManager;
    e.levelId = this.levelId;
    (new Jok.JokG).jokEngine.transitionScreen(e, null, null)
};
GameManager.prototype.setPause = function() {
    this.addChild(new PauseDialog(this))
};
GameManager.prototype.toLevelSelect = function() {
    (new Jok.JokG).jokEngine.transitionScreen(new LevelSelectMenu, null, null)
};
GameManager.prototype.setGameOver = function() {
    this.addChild(new GameOverDialog(this))
};
MusicManager = function() {
    var e = arguments.callee;
    if (e.instance) return e.instance;
    this._mute = false;
    this._globalMute = false;
    this._paused = false;
    var t = createjs.Sound.activePlugin instanceof createjs.WebAudioPlugin;
    console.log("this.isWebAudio = " + createjs.Sound.activePlugin);
    this._soundSupport = t || !t && !createjs.Sound.BrowserDetect.isIOS && !createjs.Sound.BrowserDetect.isAndroid;
    console.log("this._soundSupport = " + this._soundSupport);
    this.musicInstance = createjs.Sound.createInstance("mus_1");
    this.enableSound = false;
    this.eventMouseDown = (new Jok.JokG).stage.on("stagemousedown", createjs.proxy(this.cccMouseDown, this));
    var n = "hidden";
    var r = createjs.proxy(this.onchangeVisable, this);
    if (n in document) {
        console.log("mus_1 = " + document.hidden);
        if (document.hidden == true) this._globalMute = true;
        document.addEventListener("visibilitychange", r)
    } else if ((n = "mozHidden") in document) {
        console.log("mus_2 = " + document.mozHidden);
        if (document.mozHidden == true) this._globalMute = true;
        document.addEventListener("mozvisibilitychange", r)
    } else if ((n = "webkitHidden") in document) {
        console.log("mus_3 = " + document.webkitHidden);
        if (document.webkitHidden == true) this._globalMute = true;
        document.addEventListener("webkitvisibilitychange", r)
    } else if ((n = "msHidden") in document) {
        console.log("mus_4 = " + document.msHidden);
        if (document.hidden == true) this._globalMute = true;
        document.addEventListener("msvisibilitychange", r)
    } else if ("onfocusin" in document) {
        console.log("mus_5 = " + document.onfocusin);
        document.onfocusin = document.onfocusout = r
    } else {
        console.log("mus_6");
        window.onpageshow = window.onpagehide = window.onfocus = window.onblur = r
    }
    e.instance = this
};
MusicManager.prototype.constructor = MusicManager;
MusicManager.prototype.onchangeVisable = function(e) {
    this._globalMute = !this._globalMute;
    console.log("onchangeVisable this._globalMute = " + this._globalMute);
    if (this._globalMute) {
        if (!this._mute && this.enableSound) {
            this._paused = true;
            this.musicInstance.pause()
        }
    } else if (!this._mute && this.enableSound) this.playMusic()
};
MusicManager.prototype.cccMouseDown = function(e) {
    console.log("this.enableSound  = " + this._globalMute);
    this.enableSound = true;
    (new Jok.JokG).stage.off("stagemousedown", this.eventMouseDown);
    this.playMusic()
};
MusicManager.prototype.playMusic = function() {
    if (!this._mute && this.enableSound && !this._globalMute)
        if (this._paused) this.musicInstance.resume();
        else this.musicInstance.play({
            loop: -1,
            interrupt: createjs.Sound.INTERRUPT_ANY
        })
};
MusicManager.prototype.playSound = function(e, t) {
    if (!this._mute && this.enableSound && this._soundSupport && !this._globalMute) createjs.Sound.play(e, {
        volume: t
    })
};
MusicManager.prototype.getMute = function() {
    return this._mute
};
MusicManager.prototype.setMute = function(e) {
    this._mute = e;
    if (this._mute) {
        this._paused = true;
        this.musicInstance.pause()
    } else this.playMusic()
};
MusicManager.prototype.playStar = function() {
    this.playSound("starSound", 1)
};
MusicManager.prototype.playMouse = function() {
    this.playSound("mouseClick", 1)
};
MusicManager.prototype.playWin = function() {
    this.playSound("winSound", .5)
};
MusicManager.prototype.playStep = function() {
    this.playSound("stepSound_1", .25)
};
MusicManager.prototype.playConnect = function() {
    this.playSound("connectSound", .4)
};
PreloadState = function() {
    Jok.JokState.call(this)
};
PreloadState.prototype = Object.create(Jok.JokState.prototype);
PreloadState.prototype.constructor = PreloadState;
PreloadState.prototype.create = function() {
    console.log("PreloadState.prototype.create");
    (new Jok.JokG).showZibbo = true;
    this.queue = (new Jok.JokG).queue;
    var e = [{
        src: "zibbo/Zibbo_logo_rgb-01.png",
        id: "zibboLogoBig"
    }];
    this.initAllEvent = this.queue.on("complete", createjs.proxy(this.initAll, this));
    this.queue.setMaxConnections(5);
    this.queue.loadManifest(e)
};
PreloadState.prototype.initAll = function(e) {
    console.log("PreloadState.initAll");
    this.queue.off("complete", this.initAllEvent);
    this._apiLoad = false;
    this._gameLoad = false;
    this.initFont();
    this.initBackground();
    this.initCookie();
    (new Jok.JokG).MAX_LEVEL = 52;
    var t = [createjs.WebAudioPlugin, createjs.HTMLAudioPlugin];
    if (createjs.Sound.BrowserDetect.isFirefox) t = [createjs.HTMLAudioPlugin];
    createjs.Sound.registerPlugins(t);
    console.log("createjs.Sound.isReady() = " + createjs.Sound.isReady());
    this.queue = (new Jok.JokG).queue;
    createjs.Sound.alternateExtensions = ["m4a"];
    this.queue.installPlugin(createjs.Sound);
    var n = [{
        src: "imagesPack/BlockGame.png",
        id: "gameImg_1"
    }, {
        src: "imagesPack/BlockGame.json",
        id: "gameImgJson_1",
        type: createjs.LoadQueue.JSON
    }, {
        src: "text.json",
        id: "text_1",
        type: createjs.LoadQueue.JSON
    }, {
        src: "HelpAnim/allAnim.xml",
        id: "gameImgXml_1",
        type: createjs.LoadQueue.XML
    }, {
        src: "levels/bin/Levels.xml",
        id: "gameLevels_1",
        type: createjs.LoadQueue.XML
    }, {
        src: "audio/music/mus_1.ogg",
        id: "mus_1",
        type: createjs.LoadQueue.SOUND
    }, {
        src: "font/font.png",
        id: "fontImg_1"
    }, {
        src: "font/font.fnt",
        id: "fontDataXml_1",
        type: createjs.LoadQueue.XML
    }, {
        src: "audio/sound/mouse_1.ogg",
        id: "mouseClick",
        type: createjs.LoadQueue.SOUND
    }, {
        src: "audio/sound/StarUp_2.ogg",
        id: "starSound",
        type: createjs.LoadQueue.SOUND
    }, {
        src: "audio/sound/StarMenu.ogg",
        id: "winSound",
        type: createjs.LoadQueue.SOUND
    }, {
        src: "audio/sound/rotate_1.ogg",
        id: "stepSound_1",
        type: createjs.LoadQueue.SOUND
    }, {
        src: "audio/sound/connect.ogg",
        id: "connectSound",
        type: createjs.LoadQueue.SOUND
    }];
    this.queue.on("progress", createjs.proxy(this.handleProgress, this));
    this.queue.on("complete", createjs.proxy(this.handleComplete, this));
    this.queue.on("fileload", createjs.proxy(this.handleFileLoad, this));
    this.queue.setMaxConnections(5);
    this.queue.loadManifest(n);
    createjs.proxy(this.apiLoad, this)
};
PreloadState.prototype.initFont = function() {};
PreloadState.prototype.initCookie = function() {
    if (typeof window.localStorage != "undefined")
        if (window.localStorage.getItem("levelComplete") == null) window.localStorage.setItem("levelComplete", 1)
};
PreloadState.prototype.initBackground = function() {
    var e = new createjs.Shape;
    e.x = -(new Jok.JokG).width / 2;
    e.y = -(new Jok.JokG).height / 2;
    e.graphics.beginFill("rgba(255,255,255,1)").rect(0, 0, (new Jok.JokG).width, (new Jok.JokG).height);
    this.addChild(e);
    this.PROGRESS_BAR_WIDTH = 580;
    this.PROGRESS_BAR_HEIGHT = 36;
    this.Y_BAR = 200;
    this.barShape = new createjs.Shape;
    this.barShape.x = -this.PROGRESS_BAR_WIDTH / 2;
    this.barShape.y = -this.PROGRESS_BAR_HEIGHT / 2 + this.Y_BAR;
    this.addChild(this.barShape);
    e = new createjs.Shape;
    e.x = -this.PROGRESS_BAR_WIDTH / 2;
    e.y = -this.PROGRESS_BAR_HEIGHT / 2 + this.Y_BAR;
    e.graphics.beginStroke("rgba(221,33,113,1)").setStrokeStyle(3).drawRoundRect(0, 0, this.PROGRESS_BAR_WIDTH, this.PROGRESS_BAR_HEIGHT, 5);
    this.addChild(e);
    var t = new createjs.Bitmap((new Jok.JokG).queue.getResult("zibboLogoBig"));
    t.x = -t.getBounds().width / 2;
    t.y = -t.getBounds().height / 2;
    this.addChild(t);
    t.on("click", createjs.proxy(this.openUrl, this))
};
PreloadState.prototype.handleProgress = function(e) {
    this.barShape.graphics.beginFill("rgba(219,71,132,1)").drawRoundRect(0, 0, this.PROGRESS_BAR_WIDTH * e.progress, this.PROGRESS_BAR_HEIGHT, 5)
};
PreloadState.prototype.handleFileLoad = function(e) {};
PreloadState.prototype.handleComplete = function(e) {
    console.log("handleComplete");
    this._gameLoad = true;
    if (this._gameLoad) this.allLoadComplete()
};
PreloadState.prototype.apiLoad = function(e) {
    this._apiLoad = true;
    if (this._gameLoad) this.allLoadComplete()
};
PreloadState.prototype.openUrl = function() {
    ZibboUtils.logoAction()
};
PreloadState.prototype.allLoadComplete = function() {
    console.log("PreloadState.prototype.allLoadComplete");
    new MusicManager;
    console.log("new MusicManager();");
    (new Jok.JokG).text.init(this.queue.getResult("text_1"));
    console.log('new Jok.JokG().text.init(this.queue.getResult("text_1"));');
    (new Jok.JokG).animLoader.loadAnim(this.queue.getResult("gameImgXml_1"), this.queue.getResult("gameImgJson_1"), this.queue.getResult("gameImg_1"));
    console.log('new Jok.JokG().animLoader.loadAnim(this.queue.getResult("gameImgXml_1"), this.queue.getResult("gameImgJson_1"), this.queue.getResult("gameImg_1"));');
    (new Jok.JokG).animLoader.loadBitmapFont(this.queue.getResult("fontDataXml_1"), this.queue.getResult("fontImg_1"));
    console.log('ew Jok.JokG().animLoader.loadBitmapFont(this.queue.getResult("fontDataXml_1"), this.queue.getResult("fontImg_1"));');
    (new Jok.JokG).jokEngine.switchState(new SplashScreenZibbo)
};
GuiBlock = function(e) {
    createjs.Container.call(this);
    this.y = -315;
    this.gameManager = e;
    var t = 85;
    this.buttonPause = new MyButtonBase(createjs.proxy(this.pauseAction, this), new createjs.Point(-270, 0), new createjs.Point(1, 1), "buttonBase_mc");
    this.buttonPause.initUp("buttonStop_mc");
    this.addChild(this.buttonPause);
    this.buttonRestart = new MyButtonBase(createjs.proxy(this.restartAction, this), new createjs.Point(this.buttonPause.x + t, 0), new createjs.Point(1, 1), "buttonBase_mc");
    this.buttonRestart.initUp("buttonRestart_mc");
    this.addChild(this.buttonRestart);
    this.buttonUndo = new MyButtonBase(createjs.proxy(this.removeStepAction, this), new createjs.Point(this.buttonRestart.x + t, 0), new createjs.Point(1, 1), "buttonBase_mc");
    this.buttonUndo.initUp("buttonUndo_mc");
    this.addChild(this.buttonUndo);
    this.initStarBar(e.numStar);
    var n = new createjs.Text("关卡 " + (e.levelId + 1), "bold 30px Arial, Microsoft Yahei, 微软雅黑, STXihei, 华文细黑, sans-serif", "#fff");
    n.x = (new Jok.JokG).width / 2 - n.getBounds().width * n.scaleX - 5;
    n.y = -24 / 2 - 20;
    this.addChild(n);
    if ((new Jok.JokG).showZibbo) {
        var r = {};
        r["type"] = ".png";
        r["width"] = 202;
        r["height"] = 50
    }
};
GuiBlock.prototype = Object.create(createjs.Container.prototype);
GuiBlock.prototype.constructor = GuiBlock;
GuiBlock.prototype.moreAction = function(e) {
    ZibboUtils.buttonAction("more_games")
};
GuiBlock.prototype.offButton = function() {
    this.buttonPause.offWork();
    this.buttonRestart.offWork();
    if (this.buttonLogo) this.buttonLogo.offWork()
};
GuiBlock.prototype.onButton = function() {
    this.buttonPause.onWork();
    this.buttonRestart.onWork();
    if (this.buttonLogo) this.buttonLogo.onWork()
};
GuiBlock.prototype.pauseAction = function() {
    this.gameManager.setPause()
};
GuiBlock.prototype.restartAction = function() {
    this.gameManager.restart()
};
GuiBlock.prototype.removeStepAction = function() {
    this.gameManager.fieldContainer.deleteStep()
};
GuiBlock.prototype.initStarBar = function(e) {
    this.starBar = new StarBar(e);
    this.addChild(this.starBar)
};
LevelButton = function(e, t, n, r) {
    MyButtonBase.call(this, null, e, t, "LevelSelectButton_mc");
    this.idLevel = n;
    this.initStar();
    this._open = r;
    if (!r) this.sprDown.currentAnimationFrame = 1;
    var i = new createjs.BitmapText("" + this.idLevel, (new Jok.JokG).animLoader.fontSheet);
    i.scaleX = i.scaleY = .6;
    i.y = -i.getBounds().height / 2 * i.scaleX - 17;
    i.x = -i.getBounds().width / 2 * i.scaleX;
    this.addChild(i);
    this.actionFunc = createjs.proxy(this.levelAction, this)
};
LevelButton.prototype = Object.create(MyButtonBase.prototype);
LevelButton.prototype.constructor = LevelButton;
LevelButton.prototype.initStar = function() {
    this.sprDown.stop();
    var e = 0;
    if (typeof window.localStorage != "undefined") {
        if (window.localStorage.getItem("levelStar" + this.idLevel) == null) window.localStorage.setItem("levelStar" + this.idLevel, 0);
        e = window.localStorage.getItem("levelStar" + this.idLevel)
    }
    var t = 30;
    for (var n = 0; n < 3; n++) {
        var r = new createjs.Sprite(Jok.JokG().animLoader.spriteSheet, "LevelMenuStar_mc");
        r.x = -t + t * n;
        r.y = 30;
        r.stop();
        if (n < e) r.currentAnimationFrame = 1;
        else r.currentAnimationFrame = 0;
        this.addChild(r)
    }
};
LevelButton.prototype.levelAction = function() {
    if (this._open) {
        var e = new GameManager;
        e.levelId = this.idLevel - 1;
        (new Jok.JokG).jokEngine.transitionScreen(e, null, null)
    }
};
SoundButton = function(e, t) {
    MyButtonBase.call(this, null, e, t, "MainMenuButton_1_mc");
    this.initUp("ButtonMusic_mc");
    if ((new MusicManager).getMute()) this.sprUp.currentAnimationFrame = 1;
    this.actionFunc = createjs.proxy(this.soundAction, this)
};
SoundButton.prototype = Object.create(MyButtonBase.prototype);
SoundButton.prototype.constructor = SoundButton;
SoundButton.prototype.soundAction = function() {
    (new MusicManager).setMute(!(new MusicManager).getMute());
    if ((new MusicManager).getMute()) this.sprUp.currentAnimationFrame = 1;
    else this.sprUp.currentAnimationFrame = 0
};
StarBar = function(e) {
    createjs.Container.call(this);
    this.x = 60;
    this.y = 0;
    this.txtColor = "#FFF";
    this.MASK_SIZE = 237.15;
    this.barMask = new createjs.Shape;
    this.barMask.x = -this.MASK_SIZE / 2;
    this.barMask.y = -25 / 2;
    this.barMask.graphics.beginFill("rgba(255,255,255,1)").rect(0, 0, this.MASK_SIZE, 25);
    this.starNum = 3;
    this.stepNow = 0;
    this.numStarThree = e;
    this.numStarTwo = Math.ceil(this.numStarThree * .4) + e;
    this.numStarOne = Math.ceil(this.numStarTwo * .5) + this.numStarTwo;
    this.numStarAll = this.numStarOne + 1;
    console.log("this.numStarThree = " + this.numStarThree);
    console.log("this.numStarTwo = " + this.numStarTwo);
    console.log("this.numStarOne = " + this.numStarOne);
    console.log("this.numStarAll = " + this.numStarAll);
    this.initStars();
    var t = new createjs.Sprite(Jok.JokG().animLoader.spriteSheet, "scoreBar_1_mc");
    this.addChild(t);
    this.barSpr = new createjs.Sprite(Jok.JokG().animLoader.spriteSheet, "scoreBar_2_mc");
    this.barSpr.mask = this.barMask;
    this.addChild(this.barSpr);
    var n = new createjs.Sprite(Jok.JokG().animLoader.spriteSheet, "scoreBar_3_mc");
    this.addChild(n);
    this.stepTxt = new createjs.BitmapText("0", (new Jok.JokG).animLoader.fontSheet);
    this.stepTxt.scaleX = this.stepTxt.scaleY = .35;
    this.stepTxt.x = 0;
    this.stepTxt.y = -this.stepTxt.getBounds().height / 2 + 20;
    this.addChild(this.stepTxt)
};
StarBar.prototype = Object.create(createjs.Container.prototype);
StarBar.prototype.constructor = StarBar;
StarBar.prototype.initStars = function() {
    var e = 0;
    this.starTree = new createjs.Sprite(Jok.JokG().animLoader.spriteSheet, "star_3_mc");
    this.starTree.stop();
    this.starTree.y = -25;
    this.starTree.x = -this.MASK_SIZE / 2 + this.MASK_SIZE * (this.numStarThree / this.numStarAll) + e;
    this.addChild(this.starTree);
    this.starTwoo = new createjs.Sprite(Jok.JokG().animLoader.spriteSheet, "star_2_mc");
    this.starTwoo.y = this.starTree.y;
    this.starTwoo.stop();
    this.starTwoo.x = -this.MASK_SIZE / 2 + this.MASK_SIZE * (this.numStarTwo / this.numStarAll) + e;
    this.addChild(this.starTwoo);
    this.starOne = new createjs.Sprite(Jok.JokG().animLoader.spriteSheet, "star_1_mc");
    this.starOne.y = this.starTree.y;
    this.starOne.stop();
    this.starOne.x = -this.MASK_SIZE / 2 + this.MASK_SIZE * (this.numStarOne / this.numStarAll) + e;
    this.addChild(this.starOne);
    this.initStarsText(this.numStarThree);
    this.initStarsText(this.numStarTwo);
    this.initStarsText(this.numStarOne)
};
StarBar.prototype.initStarsText = function(e) {
    var t = 0;
    var n = 20;
    var r = 25;
    var i = new createjs.BitmapText("" + e, (new Jok.JokG).animLoader.fontSheet);
    i.scaleX = i.scaleY = .3;
    i.y = r - i.getBounds().height / 2 * i.scaleX;
    i.x = -this.MASK_SIZE / 2 + this.MASK_SIZE * (e / this.numStarAll) - i.getBounds().width / 2 * i.scaleX + t;
    this.addChild(i)
};
StarBar.prototype.addStep = function() {
    if (this.stepNow == this.numStarThree) {
        this.starTree.currentAnimationFrame = 1;
        this.starNum--
    } else if (this.stepNow == this.numStarTwo) {
        this.starTwoo.currentAnimationFrame = 1;
        this.starNum--
    } else if (this.stepNow == this.numStarOne) {
        this.starOne.currentAnimationFrame = 1;
        this.starNum--
    }
    this.stepNow++;
    this.stepTxt.text = "" + this.stepNow;
    if (this.stepNow >= this.numStarAll) this.barMask.x = 9999;
    else this.barMask.x = -this.MASK_SIZE / 2 + this.MASK_SIZE * (this.stepNow / this.numStarAll)
};
CreditsDialog = function(e) {
    createjs.Container.call(this);
    this.mainMenu = e;
    this.mainMenu.offButton();
    var t = "#000";
    var n = " Verdana";
    var r = new createjs.Shape;
    r.x = -(new Jok.JokG).width / 2;
    r.y = -(new Jok.JokG).height / 2;
    r.graphics.beginFill("rgba(255,255,255,0.5)").rect(0, 0, (new Jok.JokG).width, (new Jok.JokG).height);
    this.addChild(r);
    var i = new createjs.Text((new Jok.JokG).text.getText("developed"), "36px" + n, t);
    i.x = -i.getBounds().width / 2;
    i.y = -260;
    this.addChild(i);
    var s = new createjs.Text((new Jok.JokG).text.getText("author"), "36px" + n, t);
    s.x = -s.getBounds().width / 2;
    s.y = i.y + 55;
    this.addChild(s);
    var o = new createjs.Text((new Jok.JokG).text.getText("email"), "36px" + n, t);
    o.x = -o.getBounds().width / 2;
    o.y = s.y + 80;
    this.addChild(o);
    this.alpha = 0;
    createjs.Tween.get(this).to({
        alpha: 1
    }, 400, createjs.Ease.quadOut);
    this.eventMouseDown = (new Jok.JokG).stage.on("stagemousedown", createjs.proxy(this.cccMouseDown, this))
};
CreditsDialog.prototype = Object.create(createjs.Container.prototype);
CreditsDialog.prototype.constructor = CreditsDialog;
CreditsDialog.prototype.cccMouseDown = function(e) {
    (new Jok.JokG).stage.off("stagemousedown", this.eventMouseDown);
    this.mainMenu.onButton();
    if (this.parent) this.parent.removeChild(this)
};
GameDialogBase = function(e) {
    createjs.Container.call(this);
    this.gameManager = e;
    e.gui.offButton();
    e.fieldContainer.offMouse();
    var t = new createjs.Shape;
    t.x = -(new Jok.JokG).width / 2;
    t.y = -(new Jok.JokG).height / 2;
    t.graphics.beginFill("rgba(0,0,0,0.45)").rect(0, 0, (new Jok.JokG).width, (new Jok.JokG).height);
    this.addChild(t);
    this.addChild(new createjs.Sprite(Jok.JokG().animLoader.spriteSheet, "FrameDialogBase_mc"));
    this.alpha = 0;
    createjs.Tween.get(this).to({
        alpha: 1
    }, 400, createjs.Ease.quadOut).call(createjs.proxy(this.alphaEnd, this))
};
GameDialogBase.prototype = Object.create(createjs.Container.prototype);
GameDialogBase.prototype.constructor = GameDialogBase;
GameDialogBase.prototype.restartAction = function() {
    this.gameManager.restart()
};
GameDialogBase.prototype.backAction = function() {
    this.gameManager.toLevelSelect()
};
GameDialogBase.prototype.onAll = function() {
    this.gameManager.gui.onButton();
    this.gameManager.fieldContainer.onMouse()
};
GameDialogBase.prototype.alphaEnd = function() {};
GameDialogBase.prototype.moreAction = function(e) {
    if ((new Jok.JokG).showZibbo) ZibboUtils.buttonAction("more_games")
};
GameOverDialog = function(e) {
    GameDialogBase.call(this, e);
    (new MusicManager).playWin();
    var t = new MyButtonBase(createjs.proxy(this.playAction, this), new createjs.Point(157, 69), new createjs.Point(.9, .9), "MainMenuButton_1_mc");
    t.initUp("ButtonPlay_mc");
    this.addChild(t);
    var n = .6;
    t = new MyButtonBase(createjs.proxy(this.backAction, this), new createjs.Point(-19, 90), new createjs.Point(n, n), "MainMenuButton_1_mc");
    t.initUp("ButtonBack_mc");
    this.addChild(t);
    t = new MyButtonBase(createjs.proxy(this.restartAction, this), new createjs.Point(-180, 90), new createjs.Point(n, n), "MainMenuButton_1_mc");
    t.initUp("buttonRestart_2_mc");
    this.addChild(t);
    this.idAdd = 0;
    if (typeof window.localStorage != "undefined") {
        var r = window.localStorage.getItem("levelComplete");
        if (this.gameManager.levelId + 1 >= r) window.localStorage.setItem("levelComplete", this.gameManager.levelId + 2);
        r = window.localStorage.getItem("levelStar" + (this.gameManager.levelId + 1));
        console.log("numLevelComplete =" + r);
        if (this.gameManager.gui.starBar.starNum > r) window.localStorage.setItem("levelStar" + (this.gameManager.levelId + 1), this.gameManager.gui.starBar.starNum)
    }
    if ((new Jok.JokG).showZibbo) {
        var i = {};
        i["type"] = ".png";
        i["width"] = 202;
        i["height"] = 50
    }
    this._oldMute = (new MusicManager).getMute();
    if ((new Jok.JokG).showZibbo) {}
};
GameOverDialog.prototype = Object.create(GameDialogBase.prototype);
GameOverDialog.prototype.constructor = GameOverDialog;
GameOverDialog.prototype.playAction = function(e) {
    if (this.gameManager.levelId + 1 < (new Jok.JokG).MAX_LEVEL) {
        var t = new GameManager;
        t.levelId = this.gameManager.levelId + 1;
        (new Jok.JokG).jokEngine.transitionScreen(t, null, null)
    } else this.gameManager.toLevelSelect()
};
GameOverDialog.prototype.adsBegin = function() {
    console.log("showAds");
    if (!this._oldMute)(new MusicManager).setMute(true)
};
GameOverDialog.prototype.adsEnd = function() {
    console.log("adsEnd");
    if ((new MusicManager).getMute() != this._oldMute)(new MusicManager).setMute(this._oldMute)
};
GameOverDialog.prototype.alphaEnd = function() {
    if (this.buttonLogo) createjs.Tween.get(this.buttonLogo).to({
        y: 300
    }, 2500, createjs.Ease.elasticOut);
    var e = 157;
    var t = -65;
    var n = this.gameManager.gui.starBar.starNum;
    for (var r = 0; r < 3; r++)
        if (this.idAdd == r) {
            var i = new createjs.Sprite(Jok.JokG().animLoader.spriteSheet, "starGameOver_mc");
            i.x = -e + e * r;
            i.y = t;
            i.stop();
            if (r < n) {
                i.currentAnimationFrame = 0;
                i.scaleX = i.scaleY = 0;
                createjs.Tween.get(i).to({
                    scaleX: 1,
                    scaleY: 1
                }, 1500, createjs.Ease.elasticOut);
                (new MusicManager).playStar()
            } else {
                i.currentAnimationFrame = 1;
                i.alpha = 0;
                createjs.Tween.get(i).to({
                    alpha: 1
                }, 800, createjs.Ease.quadOut)
            }
            this.addChild(i)
        }
    this.idAdd++;
    if (this.idAdd < 3) createjs.Tween.get(this).to({
        x: this.x
    }, 500, createjs.Ease.linear).call(createjs.proxy(this.alphaEnd, this))
};
HelpDialog = function(e) {
    createjs.Container.call(this);
    this.gameManager = e;
    this.field = this.gameManager.field;
    this.finger = new createjs.Sprite(Jok.JokG().animLoader.spriteSheet, "Finger_mc");
    this.addChild(this.finger);
    this.SCALE_BEGIN = 1.5;
    this.Y_BEGIN = 200;
    this.Y_END = 100;
    this.X_END = 200;
    this.finger.y = this.Y_BEGIN;
    this.finger.stop();
    this.finger.scaleX = this.finger.scaleY = this.SCALE_BEGIN;
    this.finger.alpha = 0;
    this.tween = createjs.Tween.get(this.finger, {
        loop: true
    }).to({
        x: -this.X_END,
        y: this.Y_END,
        alpha: 1,
        scaleX: 1,
        scaleY: 1
    }, 500, createjs.Ease.quadOut).call(createjs.proxy(this.stepHelp_1, this)).wait(750).to({
        x: this.X_END
    }, 900, createjs.Ease.quadInOut).wait(750).call(createjs.proxy(this.stepHelp_2, this)).to({
        scaleX: this.SCALE_BEGIN,
        scaleY: this.SCALE_BEGIN,
        y: this.Y_END + 50,
        alpha: 0
    }, 500, createjs.Ease.quadInOut).to({
        x: 0,
        y: this.Y_BEGIN
    }, 1500, createjs.Ease.quadInOut)
};
HelpDialog.prototype = Object.create(createjs.Container.prototype);
HelpDialog.prototype.constructor = GameDialogBase;
HelpDialog.prototype.stepHelp_1 = function() {
    this.finger.currentAnimationFrame = 1;
    this.checkDelete()
};
HelpDialog.prototype.stepHelp_2 = function() {
    this.finger.currentAnimationFrame = 0;
    this.checkDelete()
};
HelpDialog.prototype.checkDelete = function() {
    if (this.field[3][3] == 0) {
        if (this.parent) this.parent.removeChild(this);
        createjs.Tween.removeTweens(this.finger)
    }
};
LevelSelectMenu = function() {
    Jok.JokState.call(this)
};
LevelSelectMenu.prototype = Object.create(Jok.JokState.prototype);
LevelSelectMenu.prototype.constructor = LevelSelectMenu;
LevelSelectMenu.prototype.create = function() {
    this.MAX_LEVEL_ID = Math.floor((new Jok.JokG).MAX_LEVEL / 20);
    this._nowLevelId = 0;
    var e = new createjs.Sprite(Jok.JokG().animLoader.spriteSheet, "MainMenuBack_mc");
    this.addChild(e);
    this.buttonBack = new MyButtonBase(createjs.proxy(this.backsAction, this), new createjs.Point(-(new Jok.JokG).width / 2 + 64, 300), new createjs.Point(.67, .67), "MainMenuButton_1_mc");
    this.buttonBack.initUp("ButtonBack_mc");
    this.addChild(this.buttonBack);
    this.buttonLevelBack = new MyButtonBase(createjs.proxy(this.buttonLevelBackAction, this), new createjs.Point(-(new Jok.JokG).width / 2 + 40, 0), new createjs.Point(1, 1), "ButtonLevel_mc");
    this.buttonLevelBack.sprDown.stop();
    this.buttonLevelBack.sprDown.currentAnimationFrame = 1;
    this.addChild(this.buttonLevelBack);
    this.buttonLevelNext = new MyButtonBase(createjs.proxy(this.buttonLevelNextAction, this), new createjs.Point(-this.buttonLevelBack.x, 0), new createjs.Point(-1, 1), "ButtonLevel_mc");
    this.buttonLevelNext.sprDown.stop();
    this.addChild(this.buttonLevelNext);
    if ((new Jok.JokG).showZibbo) {
        var t = {};
        t["type"] = ".png";
        t["width"] = 202;
        t["height"] = 50;
        console.log("new Jok.JokG().showZibbo = " + (new Jok.JokG).showZibbo)
    }
    this.drawLevelButtons()
};
LevelSelectMenu.prototype.backsAction = function(e) {
    (new Jok.JokG).jokEngine.transitionScreen(new MainMenu, null, null)
};
LevelSelectMenu.prototype.moreAction = function(e) {
    ZibboUtils.buttonAction("more_games")
};
LevelSelectMenu.prototype.buttonLevelBackAction = function(e) {
    if (this._nowLevelId <= 0) return;
    this.buttonLevelNext.sprDown.currentAnimationFrame = 0;
    this._nowLevelId--;
    if (this._nowLevelId == 0) this.buttonLevelBack.sprDown.currentAnimationFrame = 1;
    this.drawLevelButtons()
};
LevelSelectMenu.prototype.buttonLevelNextAction = function(e) {
    if (this._nowLevelId >= this.MAX_LEVEL_ID) return;
    this.buttonLevelBack.sprDown.currentAnimationFrame = 0;
    this._nowLevelId++;
    if (this._nowLevelId == this.MAX_LEVEL_ID) this.buttonLevelNext.sprDown.currentAnimationFrame = 1;
    this.drawLevelButtons()
};
LevelSelectMenu.prototype.drawLevelButtons = function() {
    if (this._levelButtonsContainer) this._levelButtonsContainer.removeAllChildren();
    else {
        this._levelButtonsContainer = new createjs.Container;
        this.addChild(this._levelButtonsContainer)
    }
    var e = 100;
    var t = 712 - e - 140;
    t = t / 4;
    var n = 140;
    var r = ((new Jok.JokG).width - n - n) / 3;
    n -= (new Jok.JokG).width / 2;
    e -= 712 / 2;
    var i = this._nowLevelId * 20 + 1;
    var s = 1;
    if (typeof window.localStorage != "undefined") s = window.localStorage.getItem("levelComplete");
    for (var o = 0; o < 5; o++)
        for (var u = 0; u < 4; u++) {
            if ((new Jok.JokG).MAX_LEVEL >= i) {
                var a = new LevelButton(new createjs.Point(n + r * u, e + t * o), new createjs.Point(1, 1), i, s >= i);
                this._levelButtonsContainer.addChild(a)
            }
            i++
        }
};
MainMenu = function() {
    Jok.JokState.call(this)
};
MainMenu.prototype = Object.create(Jok.JokState.prototype);
MainMenu.prototype.constructor = MainMenu;
MainMenu.prototype.create = function() {
    var e = new createjs.Sprite(Jok.JokG().animLoader.spriteSheet, "MainMenuBack_mc");
    this.addChild(e);
    this.buttonMusic = new SoundButton(new createjs.Point((new Jok.JokG).width / 2 - 100, 280), new createjs.Point(.67, .67));
    this.addChild(this.buttonMusic);
    this.eventPlay = createjs.proxy(this.playAction, this);
    this.buttonPlay = new MyButtonBase(this.eventPlay, new createjs.Point(0, 10), new createjs.Point(1, 1), "MainMenuButton_1_mc");
    this.buttonPlay.initUp("ButtonPlay_mc");
    this.addChild(this.buttonPlay);
    this.buttonMore = new MyButtonBase(createjs.proxy(ZibboUtils.moreAction, this), new createjs.Point(0, 170), new createjs.Point(.67, .67), "MainMenuButton_1_mc");
    this.buttonMore.initUp("ButtonMoreGames_mc");
    this.addChild(this.buttonMore);
    if ((new Jok.JokG).showZibbo) {
        var t = {};
        t["type"] = ".png";
        t["width"] = 202;
        t["height"] = 50
    }
    this.buttonPlay.scaleX = this.buttonPlay.scaleY = 0;
    createjs.Tween.get(this.buttonPlay).to({
        scaleX: 1,
        scaleY: 1
    }, 1800, createjs.Ease.elasticOut);
    var n = 390;
    var r = new createjs.Sprite(Jok.JokG().animLoader.spriteSheet, "MainMenuTitle_mc");
    r.y = -((new Jok.JokG).height - n) / 2 + (new Jok.JokG).height / 2 - n;
    this.addChild(r);
    r.scaleX = r.scaleY = 0;
    createjs.Tween.get(r).to({
        scaleX: 1,
        scaleY: 1
    }, 2500, createjs.Ease.elasticOut)
};
MainMenu.prototype.onButton = function() {
    this.buttonCredits.onWork();
    this.buttonPlay.onWork();
    this.buttonMusic.onWork();
    this.buttonMore.onWork();
    if (this.buttonLogo) this.buttonLogo.onWork()
};
MainMenu.prototype.offButton = function() {
    this.buttonCredits.offWork();
    this.buttonPlay.offWork();
    this.buttonMusic.offWork();
    this.buttonMore.offWork();
    if (this.buttonLogo) this.buttonLogo.offWork()
};
MainMenu.prototype.logoAction = function(e) {
    if ((new Jok.JokG).showZibbo) ZibboUtils.buttonAction("logo")
};
MainMenu.prototype.moreAction = function(e) {
    if ((new Jok.JokG).showZibbo) ZibboUtils.buttonAction("more_games")
};
MainMenu.prototype.creditsAction = function(e) {};
MainMenu.prototype.playAction = function(e) {
    (new Jok.JokG).jokEngine.transitionScreen(new LevelSelectMenu, null, null)
};
PauseDialog = function(e) {
    GameDialogBase.call(this, e);
    var t = new MyButtonBase(createjs.proxy(this.playAction, this), new createjs.Point(0, -51), new createjs.Point(.9, .9), "MainMenuButton_1_mc");
    t.initUp("ButtonPlay_mc");
    this.addChild(t);
    var n = .6;
    var r = 90;
    var i = 170;
    t = new MyButtonBase(createjs.proxy(this.backAction, this), new createjs.Point(0, r), new createjs.Point(n, n), "MainMenuButton_1_mc");
    t.initUp("ButtonBack_mc");
    this.addChild(t);
    t = new MyButtonBase(createjs.proxy(this.restartAction, this), new createjs.Point(-i, r), new createjs.Point(n, n), "MainMenuButton_1_mc");
    t.initUp("buttonRestart_2_mc");
    this.addChild(t);
    t = new SoundButton(new createjs.Point(i, r), new createjs.Point(n, n));
    this.addChild(t);
    t = new MyButtonBase(createjs.proxy(ZibboUtils.moreAction, this), new createjs.Point(-180, -67), new createjs.Point(n, n), "MainMenuButton_1_mc");
    t.initUp("ButtonMoreGames_mc");
    this.addChild(t);
    t = new MyButtonBase(createjs.proxy(ZibboUtils.walkAction, this), new createjs.Point(180, -67), new createjs.Point(n, n), "MainMenuButton_1_mc");
    t.initUp("ButtonWalk_mc");
    this.addChild(t)
};
PauseDialog.prototype = Object.create(GameDialogBase.prototype);
PauseDialog.prototype.constructor = PauseDialog;
PauseDialog.prototype.walkAction = function(e) {
    if ((new Jok.JokG).showZibbo) ZibboUtils.buttonAction("walkthrough")
};
PauseDialog.prototype.playAction = function(e) {
    createjs.Tween.get(this).to({
        alpha: 0
    }, 400, createjs.Ease.quadOut).call(createjs.proxy(this.playActionEnd, this))
};
PauseDialog.prototype.playActionEnd = function(e) {
    if (this.parent) this.parent.removeChild(this);
    this.onAll()
};
Jok.JokAnimLoader = function() {
    this.data = null
};
Jok.JokAnimLoader.prototype.constructor = Jok.JokAnimLoader;
Jok.JokAnimLoader.prototype.loadAnim = function(e, t, n) {
    console.log("xmlArchorData = " + e);
    console.log("jsonFrameData = " + t);
    console.log("image = " + n);
    // console.log("image.srs = " + n.src);
    console.log("image.getContext = " + n.getContext);
    console.log("image.data = " + n.data);
    console.log("jsonFrameData.frames[0].filename = " + t.frames[0].frame.x);
    var r = 0;
    var i;
    console.log("Jok.JokAnimLoader.prototype.loadAnim  1");
    this.spriteSheetData = {
        framerate: 24,
        images: [n],
        frames: [],
        animations: {}
    };
    var s = 0;
    console.log("Jok.JokAnimLoader.prototype.loadAnim  2");
    while (true) {
        var o = e.getElementsByTagName("Parametr")[r];
        if (o) {
            i = o.getAttribute("n");
            var u = 0;
            while (true) {
                var a = o.getElementsByTagName("info")[u];
                if (a) {
                    var f = -parseInt(a.getAttribute("x"));
                    var l = -parseInt(a.getAttribute("y"));
                    var c = this.getFrameData(t, this.getFrameName(i, u));
                    this.spriteSheetData.frames.push([c.x, c.y, c.w, c.h, 0, f, c.h - l]);
                    u++;
                    s++
                } else break
            }
            this.spriteSheetData.animations[i] = [s - u, s - 1];
            r++
        } else break
    }
    console.log("Jok.JokAnimLoader.prototype.loadAnim  3");
    this.spriteSheet = new createjs.SpriteSheet(this.spriteSheetData);
    console.log("Jok.JokAnimLoader.prototype.loadAnim  4")
};
Jok.JokAnimLoader.prototype.getFrameName = function(e, t) {
    var n = "000" + t;
    n = n.substr(n.length - 3, 3);
    return e + "_" + n + ".png"
};
Jok.JokAnimLoader.prototype.getFrameData = function(e, t) {
    var n = 0;
    while (e.frames[n]) {
        if (e.frames[n].filename == t) return {
            x: parseInt(e.frames[n].frame.x),
            y: parseInt(e.frames[n].frame.y),
            w: parseInt(e.frames[n].frame.w),
            h: parseInt(e.frames[n].frame.h)
        };
        n++
    }
    return null
};
Jok.JokAnimLoader.prototype.loadBitmapFont = function(e, t) {
    var n = {};
    n[65] = "A";
    n[66] = "B";
    n[67] = "C";
    n[68] = "D";
    n[69] = "E";
    n[70] = "F";
    n[71] = "G";
    n[72] = "H";
    n[73] = "I";
    n[74] = "J";
    n[75] = "K";
    n[76] = "L";
    n[77] = "M";
    n[78] = "N";
    n[79] = "O";
    n[80] = "P";
    n[81] = "Q";
    n[82] = "R";
    n[83] = "S";
    n[84] = "T";
    n[85] = "U";
    n[86] = "V";
    n[87] = "W";
    n[88] = "X";
    n[89] = "Y";
    n[90] = "Z";
    n[47] = "/";
    n[48] = "0";
    n[49] = "1";
    n[50] = "2";
    n[51] = "3";
    n[52] = "4";
    n[53] = "5";
    n[54] = "6";
    n[55] = "7";
    n[56] = "8";
    n[57] = "9";
    var r = 0;
    this.fontData = {
        images: [t],
        frames: [],
        animations: {}
    };
    var i = 0;
    while (true) {
        var s = e.getElementsByTagName("chars")[0];
        s = s.getElementsByTagName("char")[r];
        if (s) {
            var o = parseInt(s.getAttribute("id"));
            var u = parseInt(s.getAttribute("x"));
            var a = parseInt(s.getAttribute("y"));
            var f = parseInt(s.getAttribute("width"));
            var l = parseInt(s.getAttribute("height"));
            var c = parseInt(s.getAttribute("xoffset"));
            var h = parseInt(s.getAttribute("yoffset"));
            if (f > 0 && l > 0) {
                c = h = 0;
                this.fontData.frames.push([u, a, f, l, 0, c, h]);
                this.fontData.animations[n[o]] = {
                    frames: [i]
                };
                i++
            }
            r++
        } else break
    }
    console.log("allNode = " + r);
    this.fontSheet = new createjs.SpriteSheet(this.fontData)
};
Jok.JokEngine = function(e) {
    console.log("Jok.JokEngine");
    this.state = null;
    (new Jok.JokG).init(e, this);
    this.stage = (new Jok.JokG).stage;
    this.asd = 55;
    this.fpsLabel = new createjs.Text("-- fps", "bold 14px Arial", "#000");
    this.fpsLabel.x = 10 - (new Jok.JokG).width / 2;
    this.fpsLabel.y = 20 - 712 / 2
};
Jok.JokEngine.prototype.constructor = Jok.JokEngine;
Jok.JokEngine.prototype.initState = function(e) {
    console.log("Jok.JokEngine.prototype.initState");
    this.switchState(e);
    if (!createjs.Ticker.hasEventListener("tick")) {
        this.tickEvent = createjs.proxy(this.tick, this);
        createjs.Ticker.on("tick", this.tickEvent)
    }
};
Jok.JokEngine.prototype.transitionScreen = function(e, t, n) {
    (new Jok.JokTransitionScreenBase).init(t, n, e, 1e3)
};
Jok.JokEngine.prototype.switchState = function(e) {
    if (this.state) {
        this.stage.removeChild(this.state);
        this.state.dispose()
    }
    this.state = e;
    this.state.create();
    this.stage.addChildAt(this.state, 0)
};
Jok.JokEngine.prototype.tick = function(e) {
    this.state.update();
    this.fpsLabel.text = Math.round(createjs.Ticker.getMeasuredFPS()) + " fps";
    this.stage.update(e)
};
Jok.JokG = function() {
    var e = arguments.callee;
    if (e.instance) return e.instance;
    this.queue = new createjs.LoadQueue(true, "assets/");
    this.animLoader = new Jok.JokAnimLoader;
    this._idNow = 0;
    this.text = new Jok.JokTextData;
    e.instance = this
};
Jok.JokG.prototype.constructor = Jok.JokG;
Jok.JokG.prototype.getNewid = function() {
    return this._idNow++
};
Jok.JokG.prototype.init = function(e, t) {
    console.log("Jok.JokG.prototype.init");
    this.canvas = this.createGameCanvas(e);
    this.stage = new createjs.Stage(this.canvas);
    this.stage.autoClear = false;
    this.stage.enableMouseOver(15);
    this.jokEngine = t;
    this.resize();
    var n = createjs.proxy(this.resize, this);
    window.addEventListener("resize", n, false);
    window.addEventListener("viewportchange", n, false);
    window.addEventListener("viewportready", n, false);
    createjs.Touch.enable(this.stage);
    createjs.Ticker.setFPS(30);
    this.fonts = {};
    console.log("this.jokEngine = " + this.jokEngine)
};
Jok.JokG.prototype.createGameCanvas = function(e) {
    console.log("Jok.JokG.prototype.createGameCanvas");
    var t = document.getElementById(e);
    return t
};
Jok.JokG.prototype.addFont = function(e, t) {
    this.fonts[e] = t
};
Jok.JokG.prototype.resize = function() {
    console.log("Jok.JokG.prototype.resize");
    var e = 640;
    var t = 712;
    var n = 960;
    var r = window.innerWidth;
    var i = window.innerHeight;
    var s = document.getElementById("portraitLock");
    if (!this.isLandscape()) {
        s.style.display = "none";
        (new Jok.JokG).canvas.style.display = "block"
    } else {
        s.style.display = "block";
        (new Jok.JokG).canvas.style.display = "none"
    }
    var o = Math.min(r / e, i / t);
    var u = (new Jok.JokG).canvas;
    u.width = e;
    u.height = Math.min(Math.floor(i / o), n);
    var a = Math.floor(u.width * o);
    var f = Math.floor(u.height * o);
    u.style.width = a + "px";
    u.style.height = f + "px";
    this.width = this.canvas.width;
    this.height = this.canvas.height;
    this.stage.x = this.width / 2;
    this.stage.y = this.height / 2;
    var l = u.parentElement;
    l.style.width = a + "px";
    l.style.height = f + "px";
    var c = (r - a) / 2;
    l.style.left = c + "px";
    var h = (i - f) / 2;
    l.style.top = h + "px"
};
Jok.JokG.prototype.isLandscape = function() {
    console.log("Jok.JokG.prototype.isLandscape");
    if (createjs.Sound.BrowserDetect.isIOS || createjs.Sound.BrowserDetect.isAndroid || createjs.Sound.BrowserDetect.isBlackberry) return window.innerWidth > window.innerHeight && window.innerWidth <= 640;
    return false
};
Jok.JokTextData = function() {
    this.text = null;
    this._noText = "textNotFound"
};
Jok.JokTextData.prototype.constructor = Jok.JokTextData;
Jok.JokTextData.prototype.init = function(e) {
    this.text = e;
    console.log(this.text)
};
Jok.JokTextData.prototype.getText = function(e) {
    if (this.text != null) {
        var t = 0;
        while (true) {
            var n = this.text.texts[t];
            if (n) {
                if (n.id == e) return n.text
            } else break;
            t++
        }
        return this._noText
    }
    return "this.text=null"
};
Jok.JokTransitionScreenBase = function() {
    createjs.Container.call(this);
    this.shape = new createjs.Shape;
    this.shape.x = -(new Jok.JokG).width / 2;
    this.shape.y = -(new Jok.JokG).height / 2;
    this.shape.graphics.beginFill("rgba(255,255,255,1)").rect(0, 0, (new Jok.JokG).width, (new Jok.JokG).height);
    this.addChild(this.shape);
    this.eventTween = createjs.proxy(this.endTeen, this)
};
Jok.JokTransitionScreenBase.prototype = Object.create(createjs.Container.prototype);
Jok.JokTransitionScreenBase.prototype.constructor = Jok.JokTransitionScreenBase;
Jok.JokTransitionScreenBase.prototype.init = function(e, t, n, r) {
    this._state = n;
    this._funcBegin = e;
    this._funcEnd = t;
    (new Jok.JokG).stage.addChild(this);
    this.alpha = 0;
    this._time = r / 2;
    createjs.Tween.get(this).to({
        alpha: 1
    }, this._time, createjs.Ease.quadOut).call(this.eventTween)
};
Jok.JokTransitionScreenBase.prototype.endTeen = function(e) {
    if (this.alpha > .9) {
        createjs.Tween.get(this).to({
            alpha: 0
        }, this._time, createjs.Ease.quadOut).call(this.eventTween);
        if (this._funcBegin != null) this._funcBegin();
        (new Jok.JokG).jokEngine.switchState(this._state)
    } else {
        (new Jok.JokG).stage.removeChild(this);
        if (this._funcEnd != null) this._funcEnd()
    }
}