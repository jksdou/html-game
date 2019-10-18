var Jok = Jok || {};
Jok.JokState = function () {
    createjs.Container.call(this);
    this.name = "";
};
function btMoreGame() {
    Play68.goHome();
    //window.location.href = btGame.URL.getMoreGame();
}
/*ih5game.setShare({
    desc: "可耐的小黄人又来了，别以为你脱了吊带裤我就不认识你了。小伙伴们快来跟小黄人愉快的玩耍吧。"
});*/
var showSGLinks = true;
var loc = window.location.href;
var specificPartnersStr = "iwin.com,p=www.mobileforce.pl";
var specificPartnersArr = specificPartnersStr.split(",");
for (i = 0; i < specificPartnersArr.length; i++) {
    if (loc.indexOf(specificPartnersArr[i]) != -1) {
        showSGLinks = false;
    }
}
Jok.JokState.prototype = Object.create(createjs.Container.prototype);
Jok.JokState.prototype.constructor = Jok.JokState;
Jok.JokState.prototype.dispose = function () {
};
Jok.JokState.prototype.create = function () {
};
Jok.JokState.prototype.update = function () {
};
MyButtonBase = function (actionFunc, pos, scaleBegin, nameAnimDown) {
    createjs.Container.call(this);
    this.actionFunc = actionFunc;
    this._actionDefault = null;
    this.x = pos.x;
    this.y = pos.y;
    this._scaleBegin = scaleBegin;
    this.scaleX = this._scaleBegin.x;
    this.scaleY = this._scaleBegin.y;
    if (nameAnimDown) {
        if (nameAnimDown.length > 0) {
            this.sprDown = new createjs.Sprite(Jok.JokG().animLoader.spriteSheet, nameAnimDown);
            this.sprDown.stop();
            this.addChild(this.sprDown);
        }
    }
    this.onWork();
    this.TIME_ANIM = 300;
    this.SCALE_ANIM = 1.11;
    this.tweenSize = null;
    this.eventScaleBegin = createjs.proxy(this.scaleBegin, this);
    this.eventScaleEnd = createjs.proxy(this.scaleEnd, this);
};
MyButtonBase.prototype = Object.create(createjs.Container.prototype);
MyButtonBase.prototype.constructor = MyButtonBase;
MyButtonBase.prototype.addBmpTTT = function (bmp, center, width, height) {
    console.log("bmp = " + bmp);
    console.log("MyButtonBase.prototype.addBmpTTT  width = " + width);
    if (width) {
    } else {
        if (bmp.getBounds()) {
            width = bmp.getBounds().width;
            height = bmp.getBounds().height;
        } else {
            width = 202;
            height = 50;
        }
    }
    if (center) {
        bmp.x = -width / 2;
        bmp.y = -height / 2;
    }
    var hitArea = new createjs.Shape((new createjs.Graphics).beginFill("#000000").drawRect(bmp.x, bmp.y, width, height));
    this.hitArea = hitArea;
    this.addChild(bmp);
    console.log("this.addChild(bmp);");
};
MyButtonBase.prototype.initUp = function (nameAnimUp) {
    this.sprUp = new createjs.Sprite(Jok.JokG().animLoader.spriteSheet, nameAnimUp);
    this.sprUp.stop();
    this.addChild(this.sprUp);
};
MyButtonBase.prototype.action = function (evt) {
    if (this.tweenSize == null) {
        (new MusicManager).playMouse();
        if (this.actionFunc != null) {
            this.actionFunc();
        }
        this.tweenSize = createjs.Tween.get(this).to({
            scaleX: this._scaleBegin.x * this.SCALE_ANIM,
            scaleY: this._scaleBegin.y * this.SCALE_ANIM
        }, this.TIME_ANIM, createjs.Ease.quartInOut).call(this.eventScaleBegin);
    }
};
MyButtonBase.prototype.scaleBegin = function (evt) {
    this.tweenSize = createjs.Tween.get(this).to({
        scaleX: this._scaleBegin.x,
        scaleY: this._scaleBegin.y
    }, this.TIME_ANIM, createjs.Ease.quartInOut).call(this.eventScaleEnd);
};
MyButtonBase.prototype.scaleEnd = function (evt) {
    this.tweenSize = null;
};
MyButtonBase.prototype.onSetAction = function (actionDefault) {
    this.offWork();
    this._actionDefault = actionDefault;
    this.onWork();
};
MyButtonBase.prototype.onWork = function () {
    if (!this.hasEventListener("click")) {
        if (this._actionDefault != null) {
            this.on("click", this._actionDefault);
        } else {
            this.eventAction = this.on("click", createjs.proxy(this.action, this));
        }
    }
    this.cursor = "pointer";
};
MyButtonBase.prototype.offWork = function () {
    console.log("MyButtonBase.prototype.offWork");
    if (this.hasEventListener("click")) {
        this.off("click", this.eventAction);
    }
    this.cursor = "arrow";
};
GameManager = function () {
    Jok.JokState.call(this);
    this.levelId = 0;
    this.stage = (new Jok.JokG).stage;
    this.work = false;
    this.engine = (new Jok.JokG).jokEngine;
    this.stage = (new Jok.JokG).stage;
    this.CELL_WIDTH = 60;
    this.CELL_HEIGHT = 60;
    this.CELL_Y_BEGIN = -200;
    this.CELL_W = 10;
    this.CELL_H = 10;
    this.AEOBJECT_ALIEN_ID = 101;
    this.AEOBJECT_EXIT_ID = 102;
    this.AEOBJECT_ARROW_ID = 103;
    this.AEOBJECT_SPRING_ID = 104;
    this.AEOBJECT_ICE_ID = 105;
    this.AEOBJECT_TELEPORT_ID = 106;
    this.initAnimData();
    this.MOUSE_X_Y_DIFF_MIN = 5;
    this.MOUSE_PATH_MIN = 3;
    this.SPEED_ALIEN = 400;
};
GameManager.prototype = Object.create(Jok.JokState.prototype);
GameManager.prototype.constructor = GameManager;
GameManager.prototype.initAnimData = function () {
    this.ANIM_ALIEN_IDLE_DATA = [];
    for (var i = 0; i <= 4; i++) {
        this.ANIM_ALIEN_IDLE_DATA.push([]);
    }
    for (var i = 1; i <= 2; i++) {
        var dataOne = {};
        dataOne.name = "alien_" + i + "_idle_1_mc";
        dataOne.numMin = 2;
        dataOne.numMax = 3;
        this.ANIM_ALIEN_IDLE_DATA[i].push(dataOne);
        var dataOne = {};
        dataOne.name = "alien_" + i + "_idle_2_mc";
        dataOne.numMin = 1;
        dataOne.numMax = 2;
        this.ANIM_ALIEN_IDLE_DATA[i].push(dataOne);
        var dataOne = {};
        dataOne.name = "alien_" + i + "_idle_3_mc";
        dataOne.numMin = 1;
        dataOne.numMax = 1;
        this.ANIM_ALIEN_IDLE_DATA[i].push(dataOne);
        var dataOne = {};
        dataOne.name = "alien_" + i + "_idle_4_mc";
        dataOne.numMin = 1;
        dataOne.numMax = 1;
        this.ANIM_ALIEN_IDLE_DATA[i].push(dataOne);
    }
    var dataOne = {};
    dataOne.name = "alien_3_idle_1_mc";
    dataOne.numMin = 2;
    dataOne.numMax = 3;
    this.ANIM_ALIEN_IDLE_DATA[3].push(dataOne);
    var dataOne = {};
    dataOne.name = "alien_3_idle_2_mc";
    dataOne.numMin = 1;
    dataOne.numMax = 2;
    this.ANIM_ALIEN_IDLE_DATA[3].push(dataOne);
    var dataOne = {};
    dataOne.name = "alien_3_idle_3_mc";
    dataOne.numMin = 1;
    dataOne.numMax = 1;
    this.ANIM_ALIEN_IDLE_DATA[3].push(dataOne);
    var dataOne = {};
    dataOne.name = "alien_4_idle_1_mc";
    dataOne.numMin = 3;
    dataOne.numMax = 5;
    this.ANIM_ALIEN_IDLE_DATA[4].push(dataOne);
    var dataOne = {};
    dataOne.name = "alien_4_idle_2_mc";
    dataOne.numMin = 1;
    dataOne.numMax = 1;
    this.ANIM_ALIEN_IDLE_DATA[4].push(dataOne);
};
GameManager.prototype.create = function () {
    this.work = true;
    this.field = new Array;
    for (var i = 0; i < this.CELL_W; i++) {
        this.field.push(new Array);
        for (var j = 0; j < this.CELL_H; j++) {
            this.field[i].push(0);
        }
    }
    this.backround = new BackgroundManager(this, this.field);
    this.addChild(this.backround);
    this.loadLevel();
    this.gui = new GuiBlock(this);
    this.addChild(this.gui);
    this.onWork();
    if (this.levelId == 0) {
        this.addChild(new HelpDialog(this));
    }
};
GameManager.prototype.dispose = function () {
    this.offWork();
};
GameManager.prototype.offWork = function () {
    this._step = this.mouseDown = false;
    this.stage.off("stagemousemove", this.eventMove);
    this.stage.off("stagemousedown", this.eventMouseDown);
    this.stage.off("stagemouseup", this.eventMouseUp);
    this._oldPosX = this._oldPosY = this._oldCellX = this._oldCellY = -999;
    this.gui.offButton();
};
GameManager.prototype.onWork = function () {
    this._step = this.mouseDown = false;
    this.eventMove = this.stage.on("stagemousemove", createjs.proxy(this.cccMouseMove, this));
    this.eventMouseDown = this.stage.on("stagemousedown", createjs.proxy(this.cccMouseDown, this));
    this.eventMouseUp = this.stage.on("stagemouseup", createjs.proxy(this.cccMouseUp, this));
    this._oldPosX = this._oldPosY = this._oldCellX = this._oldCellY = -999;
    this.gui.onButton();
};
GameManager.prototype.cccMouseDown = function (evt) {
    this._step = this.mouseDown = true;
    this._oldPosX = this.stage.mouseX;
    this._oldPosY = this.stage.mouseY;
    this._oldCellX = this.globalPosXtoCellX(this._oldPosX);
    this._oldCellY = this.globalPosYtoCellY(this._oldPosY);
    this.aeObjectManager.tapToMap(this._oldCellX, this._oldCellY);
};
GameManager.prototype.cccMouseMove = function (evt) {
    if (this.mouseDown && this._step) {
        var nowMouseX = this.stage.mouseX;
        var nowMouseY = this.stage.mouseY;
        var pathX = Math.abs(nowMouseX - this._oldPosX);
        var pathY = Math.abs(nowMouseY - this._oldPosY);
        var newCellX = this.globalPosXtoCellX(nowMouseX);
        var newCellY = this.globalPosYtoCellY(nowMouseY);
        if (this._oldCellX != newCellX || this._oldCellY != newCellY) {
            this._oldCellX = newCellX;
            this._oldCellY = newCellY;
            this.aeObjectManager.tapMove(this._oldCellX, this._oldCellY);
        }
        if (Math.abs(pathX - pathY) < this.MOUSE_X_Y_DIFF_MIN || pathX < this.MOUSE_PATH_MIN && pathY < this.MOUSE_PATH_MIN) {
            this._oldPosX = nowMouseX;
            this._oldPosY = nowMouseY;
            return;
        }
        if (this.aeObjectManager.activeObject != null) {
            this._step = false;
            if (pathX > pathY) {
                if (nowMouseX > this._oldPosX) {
                    this.aeObjectManager.stepActiveObject(1, 0);
                } else {
                    this.aeObjectManager.stepActiveObject(-1, 0);
                }
            } else {
                if (nowMouseY > this._oldPosY) {
                    this.aeObjectManager.stepActiveObject(0, 1);
                } else {
                    this.aeObjectManager.stepActiveObject(0, -1);
                }
            }
        }
        this._oldPosX = nowMouseX;
        this._oldPosY = nowMouseY;
    }
};
GameManager.prototype.cccMouseUp = function (evt) {
    this._oldCellX = this._oldCellY = -999;
    this.mouseDown = false;
    this.aeObjectManager.activeObject = null;
};
GameManager.prototype.restart = function () {
    this.backround.unccccccache();
    var gameManager = new GameManager;
    gameManager.levelId = this.levelId;
    (new Jok.JokG).jokEngine.transitionScreen(gameManager, null, null);
};
GameManager.prototype.setPause = function () {
    this.addChild(new PauseDialog(this));
};
GameManager.prototype.toLevelSelect = function () {
    this.backround.unccccccache();
    (new Jok.JokG).jokEngine.transitionScreen(new LevelSelectMenu, null, null);
};
GameManager.prototype.setGameOver = function () {
    this.addChild(new GameOverDialog(this));
};
GameManager.prototype.update = function () {
    if (this.work) {
        this.aeObjectManager.update();
    }
};
GameManager.prototype.loadLevel = function () {
    console.log("loadLevel");
    var idLevelsTT = [];
    idLevelsTT.push(1);
    idLevelsTT.push(2);
    idLevelsTT.push(4);
    idLevelsTT.push(5);
    idLevelsTT.push(8);
    idLevelsTT.push(28);
    idLevelsTT.push(6);
    idLevelsTT.push(23);
    idLevelsTT.push(7);
    idLevelsTT.push(3);
    idLevelsTT.push(18);
    idLevelsTT.push(16);
    idLevelsTT.push(20);
    idLevelsTT.push(30);
    idLevelsTT.push(14);
    idLevelsTT.push(22);
    idLevelsTT.push(31);
    idLevelsTT.push(21);
    idLevelsTT.push(13);
    idLevelsTT.push(15);
    idLevelsTT.push(17);
    idLevelsTT.push(35);
    idLevelsTT.push(19);
    idLevelsTT.push(26);
    idLevelsTT.push(25);
    idLevelsTT.push(24);
    idLevelsTT.push(36);
    idLevelsTT.push(34);
    idLevelsTT.push(40);
    idLevelsTT.push(27);
    idLevelsTT.push(9);
    idLevelsTT.push(29);
    idLevelsTT.push(37);
    idLevelsTT.push(39);
    idLevelsTT.push(32);
    idLevelsTT.push(38);
    idLevelsTT.push(33);
    idLevelsTT.push(32);
    idLevelsTT.push(31);
    idLevelsTT.push(26);
    idLevelsTT.push(37);
    idLevelsTT.push(33);
    idLevelsTT.push(29);
    idLevelsTT.push(45);
    idLevelsTT.push(28);
    idLevelsTT.push(44);
    idLevelsTT.push(18);
    idLevelsTT.push(42);
    idLevelsTT.push(9);
    idLevelsTT.push(24);
    idLevelsTT.push(46);
    idLevelsTT.push(41);
    var levelId = idLevelsTT[this.levelId] - 1;
    var xmlLevels = (new Jok.JokG).queue.getResult("gameLevels_1");
    var level = xmlLevels.getElementsByTagName("Level")[levelId].getElementsByTagName("tiles")[0].getAttribute("id");
    this.numStar = parseInt(xmlLevels.getElementsByTagName("Level")[levelId].getAttribute("numStar"));
    var idNow = 0;
    for (var i = 0; i < this.CELL_W; i++) {
        for (var j = 0; j < this.CELL_H; j++) {
            this.field[i][j] = parseInt(level[idNow]);
            idNow++;
        }
    }
    this.backround.init();
    var objectI = 0;
    var backContainer = new createjs.Container;
    this.addChild(backContainer);
    this.aeObjectManager = new AEObjectManager(this, this.field, backContainer);
    this.addChild(this.aeObjectManager);
    while (true) {
        var objectData = xmlLevels.getElementsByTagName("Level")[levelId].getElementsByTagName("baseObject")[objectI];
        if (objectData) {
            var xTT = parseInt(objectData.getAttribute("x"));
            var yTT = parseInt(objectData.getAttribute("y"));
            var strMc = objectData.getAttribute("str");
            if (strMc == "alien_1_mc") {
                this.aeObjectManager.addAlien(xTT, yTT, 1);
            } else {
                if (strMc == "alien_2_mc") {
                    this.aeObjectManager.addAlien(xTT, yTT, 2);
                } else {
                    if (strMc == "alien_3_mc") {
                        this.aeObjectManager.addAlien(xTT, yTT, 3);
                    } else {
                        if (strMc == "alien_4_mc") {
                            this.aeObjectManager.addAlien(xTT, yTT, 4);
                        } else {
                            if (strMc == "Exit_1_mc") {
                                this.aeObjectManager.addExit(xTT, yTT, 1);
                            } else {
                                if (strMc == "Exit_2_mc") {
                                    this.aeObjectManager.addExit(xTT, yTT, 2);
                                } else {
                                    if (strMc == "Exit_3_mc") {
                                        this.aeObjectManager.addExit(xTT, yTT, 3);
                                    } else {
                                        if (strMc == "Exit_4_mc") {
                                            this.aeObjectManager.addExit(xTT, yTT, 4);
                                        } else {
                                            if (strMc == "arrow_1_mc") {
                                                this.aeObjectManager.addArrow(xTT, yTT, 1);
                                            } else {
                                                if (strMc == "arrow_2_mc") {
                                                    this.aeObjectManager.addArrow(xTT, yTT, 2);
                                                } else {
                                                    if (strMc == "arrow_3_mc") {
                                                        this.aeObjectManager.addArrow(xTT, yTT, 3);
                                                    } else {
                                                        if (strMc == "arrow_4_mc") {
                                                            this.aeObjectManager.addArrow(xTT, yTT, 4);
                                                        } else {
                                                            if (strMc == "spring_1_mc") {
                                                                this.aeObjectManager.addSpring(xTT, yTT);
                                                            } else {
                                                                if (strMc == "ice_1_mc") {
                                                                    this.aeObjectManager.addIce(xTT, yTT);
                                                                } else {
                                                                    if (strMc == "Teleport_1_mc") {
                                                                        this.aeObjectManager.addTeleport(xTT, yTT, 1);
                                                                    } else {
                                                                        if (strMc == "Teleport_2_mc") {
                                                                            this.aeObjectManager.addTeleport(xTT, yTT, 2);
                                                                        } else {
                                                                            if (strMc == "Teleport_3_mc") {
                                                                                this.aeObjectManager.addTeleport(xTT, yTT, 3);
                                                                            } else {
                                                                                if (strMc == "Teleport_4_mc") {
                                                                                    this.aeObjectManager.addTeleport(xTT, yTT, 4);
                                                                                } else {
                                                                                    if (strMc == "decor_8_mc") {
                                                                                        var decorSpr = new createjs.Sprite(Jok.JokG().animLoader.spriteSheet, "decor_8_mc");
                                                                                        backContainer.addChild(decorSpr);
                                                                                        decorSpr.x = xTT;
                                                                                        decorSpr.y = yTT;
                                                                                    } else {
                                                                                        this.backround.addDecor(xTT, yTT, strMc);
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        } else {
            break;
        }
        objectI++;
    }
    this.aeObjectManager.postInit();
    this.backround.ccccccache();
};
GameManager.prototype.cellYtoPosY = function (cellY) {
    return this.CELL_Y_BEGIN + this.CELL_WIDTH * cellY - this.CELL_WIDTH / 2;
};
GameManager.prototype.cellXtoPosX = function (cellX) {
    return -(this.CELL_W / 2) * this.CELL_WIDTH + this.CELL_WIDTH * cellX + this.CELL_WIDTH / 2;
};
GameManager.prototype.globalPosXtoCellX = function (posX) {
    posX = posX - ((new Jok.JokG).GAME_WIDTH - this.CELL_WIDTH * this.CELL_W) / 2;
    var cellX = Math.floor(posX / this.CELL_WIDTH);
    if (cellX < 0) {
        cellX = 0;
    }
    if (cellX >= this.CELL_W) {
        cellX = this.CELL_W - 1;
    }
    return cellX;
};
GameManager.prototype.globalPosYtoCellY = function (posY) {
    posY += -(new Jok.JokG).height / 2 - this.CELL_Y_BEGIN + this.CELL_HEIGHT;
    var cellY = Math.floor(posY / this.CELL_WIDTH);
    if (cellY < 0) {
        cellY = 0;
    }
    return cellY;
};
MusicManager = function () {
    var callee = arguments.callee;
    if (callee.instance) {
        return callee.instance;
    }
    this._mute = false;
    this._globalMute = false;
    this._paused = false;
    var isWebAudio = createjs.Sound.activePlugin instanceof createjs.WebAudioPlugin;
    console.log("this.isWebAudio = " + createjs.Sound.activePlugin);
    this._soundSupport = isWebAudio || !isWebAudio && (!createjs.Sound.BrowserDetect.isIOS && !createjs.Sound.BrowserDetect.isAndroid);
    console.log("this._soundSupport = " + this._soundSupport);
    this.musicInstance = createjs.Sound.createInstance("mus_1");
    this.musicInstance.setVolume(1);
    this.enableSound = false;
    this.eventMouseDown = (new Jok.JokG).stage.on("stagemousedown", createjs.proxy(this.cccMouseDown, this));
    var hidden = "hidden";
    var eventVisable = createjs.proxy(this.onchangeVisable, this);
    if (hidden in document) {
        console.log("mus_1 = " + document.hidden);
        if (document.hidden == true) {
            this._globalMute = true;
        }
        document.addEventListener("visibilitychange", eventVisable);
    } else {
        if ((hidden = "mozHidden") in document) {
            console.log("mus_2 = " + document.mozHidden);
            if (document.mozHidden == true) {
                this._globalMute = true;
            }
            document.addEventListener("mozvisibilitychange", eventVisable);
        } else {
            if ((hidden = "webkitHidden") in document) {
                console.log("mus_3 = " + document.webkitHidden);
                if (document.webkitHidden == true) {
                    this._globalMute = true;
                }
                document.addEventListener("webkitvisibilitychange", eventVisable);
            } else {
                if ((hidden = "msHidden") in document) {
                    console.log("mus_4 = " + document.msHidden);
                    if (document.hidden == true) {
                        this._globalMute = true;
                    }
                    document.addEventListener("msvisibilitychange", eventVisable);
                } else {
                    if ("onfocusin" in document) {
                        console.log("mus_5 = " + document.onfocusin);
                        document.onfocusin = document.onfocusout = eventVisable;
                    } else {
                        console.log("mus_6");
                        window.onpageshow = window.onpagehide = window.onfocus = window.onblur = eventVisable;
                    }
                }
            }
        }
    }
    callee.instance = this;
};
MusicManager.prototype.constructor = MusicManager;
MusicManager.prototype.onchangeVisable = function (evt) {
    this._globalMute = !this._globalMute;
    console.log("onchangeVisable this._globalMute = " + this._globalMute);
    if (this._globalMute) {
        if (!this._mute && this.enableSound) {
            this._paused = true;
            this.musicInstance.pause();
        }
    } else {
        if (!this._mute && this.enableSound) {
            this.playMusic();
        }
    }
};
MusicManager.prototype.cccMouseDown = function (evt) {
    console.log("this.enableSound  = " + this._globalMute);
    this.enableSound = true;
    (new Jok.JokG).stage.off("stagemousedown", this.eventMouseDown);
    this.playMusic();
};
MusicManager.prototype.playMusic = function () {
    if (!this._mute && (this.enableSound && !this._globalMute)) {
        if (this._paused) {
            this.musicInstance.resume();
        } else {
            this.musicInstance.play({ loop: -1, interrupt: createjs.Sound.INTERRUPT_ANY });
        }
    }
};
MusicManager.prototype.playSound = function (name, volume) {
    if (!this._mute && (this.enableSound && (this._soundSupport && !this._globalMute))) {
        createjs.Sound.play(name, { volume: volume });
    }
};
MusicManager.prototype.getMute = function () {
    return this._mute;
};
MusicManager.prototype.setMute = function (value) {
    this._mute = value;
    if (this._mute) {
        this._paused = true;
        this.musicInstance.pause();
    } else {
        this.playMusic();
    }
};
MusicManager.prototype.playMouse = function () {
    this.playSound("mouseClick", 1);
};
MusicManager.prototype.playGameOver = function () {
    this.playSound("gameOver", 0.6);
};
MusicManager.prototype.playAlienGo = function () {
    this.playSound("alienGo_" + +Jok.JokMath.getRandomInt(1, 2), 0.25);
};
MusicManager.prototype.playAlienTap = function () {
    this.playSound("alienTap_" + Jok.JokMath.getRandomInt(1, 3), 0.4);
};
MusicManager.prototype.playIce = function () {
    this.playSound("ice", 0.4);
};
MusicManager.prototype.playSpring = function () {
    this.playSound("spring", 0.21);
};
MusicManager.prototype.playStarGameOver = function () {
    this.playSound("star", 1);
};
MusicManager.prototype.playTeleportBegin = function () {
    this.playSound("teleportBegin", 0.4);
};
MusicManager.prototype.playTeleportEnd = function () {
    this.playSound("teleportEnd", 0.4);
};
PreloadState = function () {
    Jok.JokState.call(this);
};
PreloadState.prototype = Object.create(Jok.JokState.prototype);
PreloadState.prototype.constructor = PreloadState;
PreloadState.prototype.create = function () {
    console.log("PreloadState.create");
    this.queue = (new Jok.JokG).queue;
    var manifest = [{ src: "soft/logo_ingame.png", id: "logo_ingame" }];
    this.initAllEvent = this.queue.on("complete", createjs.proxy(this.initAll, this));
    this.queue.setMaxConnections(5);
    this.queue.loadManifest(manifest);
};
PreloadState.prototype.initAll = function () {
    console.log("PreloadState.initAll");
    this.queue.off("complete", this.initAllEvent);
    this.initCookie();
    (new Jok.JokG).MAX_LEVEL = 37;
    (new Jok.JokG).text.setLang(SG.lang);
    (new Jok.JokG).text.fontName["default"] = "Seymour One";
    this.addPreloadText();
    var registeTT = [createjs.WebAudioPlugin, createjs.HTMLAudioPlugin];
    if (createjs.Sound.BrowserDetect.isFirefox) {
        registeTT = [createjs.HTMLAudioPlugin];
    }
    createjs.Sound.registerPlugins(registeTT);
    console.log("createjs.Sound.isReady() = " + createjs.Sound.isReady());
    this.queue = (new Jok.JokG).queue;
    createjs.Sound.alternateExtensions = ["m4a"];
    this.queue.installPlugin(createjs.Sound);
    var manifest = [{
        src: "imagesPack/AlienEscapeGame_1.png",
        id: "gameImg_1"
    }, {
        src: "imagesPack/AlienEscapeGame_1.json",
        id: "gameImgJson_1",
        type: createjs.LoadQueue.JSON
    }, { src: "imagesPack/AlienEscapeGame_2.png", id: "gameImg_2" }, {
        src: "imagesPack/AlienEscapeGame_2.json",
        id: "gameImgJson_2",
        type: createjs.LoadQueue.JSON
    }, { src: "imagesPack/AlienEscapeGame_3.png", id: "gameImg_3" }, {
        src: "imagesPack/AlienEscapeGame_3.json",
        id: "gameImgJson_3",
        type: createjs.LoadQueue.JSON
    }, { src: "font/Animated/font.png", id: "fontImg_1" }, {
        src: "font/Animated/font.fnt",
        id: "fontDataXml_1",
        type: createjs.LoadQueue.XML
    }, { src: "text.json", id: "text_1", type: createjs.LoadQueue.JSON }, {
        src: "HelpAnim/allAnim.xml",
        id: "gameImgXml_1",
        type: createjs.LoadQueue.XML
    }, {
        src: "levels/xml/levels.xml",
        id: "gameLevels_1",
        type: createjs.LoadQueue.XML
    }, {
        src: "audio/music/gameMus_1.ogg",
        id: "mus_1",
        type: createjs.LoadQueue.SOUND
    }, {
        src: "audio/sound/mouseClick.ogg",
        id: "mouseClick",
        type: createjs.LoadQueue.SOUND
    }, {
        src: "audio/sound/alienGo_1.ogg",
        id: "alienGo_1",
        type: createjs.LoadQueue.SOUND
    }, {
        src: "audio/sound/alienGo_2.ogg",
        id: "alienGo_2",
        type: createjs.LoadQueue.SOUND
    }, {
        src: "audio/sound/alienTap_1.ogg",
        id: "alienTap_1",
        type: createjs.LoadQueue.SOUND
    }, {
        src: "audio/sound/alienTap_2.ogg",
        id: "alienTap_2",
        type: createjs.LoadQueue.SOUND
    }, {
        src: "audio/sound/alienTap_3.ogg",
        id: "alienTap_3",
        type: createjs.LoadQueue.SOUND
    }, { src: "audio/sound/ice.ogg", id: "ice", type: createjs.LoadQueue.SOUND }, {
        src: "audio/sound/spring.ogg",
        id: "spring",
        type: createjs.LoadQueue.SOUND
    }, { src: "audio/sound/star.ogg", id: "star", type: createjs.LoadQueue.SOUND }, {
        src: "audio/sound/teleportBegin.ogg",
        id: "teleportBegin",
        type: createjs.LoadQueue.SOUND
    }, {
        src: "audio/sound/teleportEnd.ogg",
        id: "teleportEnd",
        type: createjs.LoadQueue.SOUND
    }, { src: "audio/sound/gameOver.ogg", id: "gameOver", type: createjs.LoadQueue.SOUND }];
    this.queue.on("progress", createjs.proxy(this.handleProgress, this));
    this.queue.on("complete", createjs.proxy(this.handleComplete, this));
    this.queue.on("fileload", createjs.proxy(this.handleFileLoad, this));
    this.queue.setMaxConnections(5);
    this.queue.loadManifest(manifest);
};
PreloadState.prototype.addPreloadText = function () {
    var txt = new createjs.Text("logo", "26px " + (new Jok.JokG).text.fontName["default"], "#FFE054");
    txt.x = -txt.getBounds().width * txt.scaleX;
    txt.y = -txt.getBounds().height / 2 * txt.scaleX;
    this.addChild(txt);
    var shape = new createjs.Shape;
    var shapeWidth = 960;
    shape.x = -shapeWidth / 2;
    shape.y = -shapeWidth / 2;
    shape.graphics.beginFill("rgba(75,164,194,1)").rect(0, 0, shapeWidth, shapeWidth);
    this.addChild(shape);
    this.progressTxt = new createjs.Text("0%", "30px Arial", "#fff");
    this.progressTxt.y = -this.progressTxt.getBounds().height / 2 + 120;
    this.addChild(this.progressTxt);
    var bmp = new createjs.Bitmap((new Jok.JokG).queue.getResult("logo_ingame"));
    bmp.scaleX = bmp.scaleY = 0.65;
    bmp.x = -bmp.getBounds().width / 2 * bmp.scaleX;
    bmp.y = -bmp.getBounds().height / 2 * bmp.scaleX;
    bmp.cursor = "pointer";
    if (showSGLinks) {
        this.addChild(bmp);
        bmp.on("click", createjs.proxy(this.openUrl, this));
    }
};
PreloadState.prototype.openUrl = function () {
    (new Jok.JokG).openUrl("http://m.softgames.de/");
};
PreloadState.prototype.initCookie = function () {
    if (typeof window.localStorage != "undefined") {
        if (window.localStorage.getItem("levelComplete") == null) {
            window.localStorage.setItem("levelComplete", 1);
        }
    }
};
PreloadState.prototype.handleProgress = function (event) {
    console.log("handleProgress = " + event.progress);
    this.progressTxt.text = "" + Math.ceil(event.progress * 100) + "%";
    this.progressTxt.x = -this.progressTxt.getBounds().width / 2;
};
PreloadState.prototype.handleFileLoad = function (event) {
};
PreloadState.prototype.handleComplete = function (event) {
    this._loadGame = true;
    if (this._loadGame) {
        this.allLoadComplete();
    }
};
PreloadState.prototype.initAnim = function () {
    (new Jok.JokG).animLoader.loadAnimStep_1_images([this.queue.getResult("gameImgJson_1"), this.queue.getResult("gameImgJson_2"), this.queue.getResult("gameImgJson_3")], [this.queue.getResult("gameImg_1"), this.queue.getResult("gameImg_2"), this.queue.getResult("gameImg_3")]);
    (new Jok.JokG).animLoader.setFramePivotXY("helpHand_mc_000", -32, -71);
    (new Jok.JokG).animLoader.setFramePivotXY("helpHand_mc_001", -57, -71);
    for (var i = 1; i <= 4; i++) {
        (new Jok.JokG).animLoader.addAnimation_step_1("alien_" + i + "_mc");
        (new Jok.JokG).animLoader.addAnimation_step_1("alien_" + i + "_idle_1_mc");
        (new Jok.JokG).animLoader.addAnimation_step_1("alien_" + i + "_idle_2_mc");
        (new Jok.JokG).animLoader.addAnimation_step_1("alien_" + i + "_idle_3_mc");
        (new Jok.JokG).animLoader.addAnimation_step_1("alien_" + i + "_idle_4_mc");
    }
    (new Jok.JokG).animLoader.endLoadAnim();
    (new Jok.JokG).animLoader.loadAnimStep_2_images();
    for (var i = 1; i <= 4; i++) {
        (new Jok.JokG).animLoader.addAnimation_step_2("alien_" + i + "_mc", ["mini_0" + i + "_02"]);
        (new Jok.JokG).animLoader.addAnimation_step_2("alien_" + i + "_idle_1_mc", ["mini_0" + i + "_01", "mini_0" + i + "_01", "mini_0" + i + "_02", "mini_0" + i + "_03", "mini_0" + i + "_03", "mini_0" + i + "_02"]);
        (new Jok.JokG).animLoader.addAnimation_step_2("alien_" + i + "_idle_2_mc", ["mini_0" + i + "_04", "mini_0" + i + "_05", "mini_0" + i + "_06", "mini_0" + i + "_07", "mini_0" + i + "_07", "mini_0" + i + "_06", "mini_0" + i + "_05", "mini_0" + i + "_04", "mini_0" + i + "_02"]);
        (new Jok.JokG).animLoader.addAnimation_step_2("alien_" + i + "_idle_3_mc", ["mini_0" + i + "_08", "mini_0" + i + "_08", "mini_0" + i + "_08", "mini_0" + i + "_02"]);
        (new Jok.JokG).animLoader.addAnimation_step_2("alien_" + i + "_idle_4_mc", ["mini_0" + i + "_09", "mini_0" + i + "_09", "mini_0" + i + "_09", "mini_0" + i + "_02"]);
    }
    (new Jok.JokG).animLoader.addAnimation_step_2("alien_3_idle_3_mc", ["mini_03_08", "mini_03_09", "mini_03_08", "mini_03_09", "mini_03_08", "mini_03_09", "mini_03_08", "mini_03_09", "mini_03_02"]);
    (new Jok.JokG).animLoader.addAnimation_step_2("alien_4_mc", ["mini_04_01"]);
    (new Jok.JokG).animLoader.addAnimation_step_2("alien_4_idle_1_mc", ["mini_04_01", "mini_04_02", "mini_04_03", "mini_04_04", "mini_04_03", "mini_04_02", "mini_04_01"]);
    (new Jok.JokG).animLoader.addAnimation_step_2("alien_4_idle_2_mc", ["mini_04_05", "mini_04_06", "mini_04_07", "mini_04_08", "mini_04_05", "mini_04_06", "mini_04_07", "mini_04_08", "mini_04_05", "mini_04_06", "mini_04_07", "mini_04_08", "mini_04_01"]);
    for (var i = 1; i <= 4; i++) {
        (new Jok.JokG).animLoader.spriteSheet.getAnimation("alien_" + i + "_idle_1_mc").speed = 0.55;
        (new Jok.JokG).animLoader.spriteSheet.getAnimation("alien_" + i + "_idle_2_mc").speed = 0.75;
        (new Jok.JokG).animLoader.spriteSheet.getAnimation("alien_" + i + "_idle_3_mc").speed = 0.1;
        (new Jok.JokG).animLoader.spriteSheet.getAnimation("alien_" + i + "_idle_4_mc").speed = 0.1;
        (new Jok.JokG).animLoader.spriteSheet.getAnimation("Teleport_" + i + "_mc").speed = 0.5;
    }
    (new Jok.JokG).animLoader.spriteSheet.getAnimation("ice_1_mc").speed = 0.2;
    (new Jok.JokG).animLoader.spriteSheet.getAnimation("iceDetaills_1_mc").speed = 0.8;
    (new Jok.JokG).animLoader.spriteSheet.getAnimation("alien_3_idle_3_mc").speed = 0.75;
    (new Jok.JokG).animLoader.spriteSheet.getAnimation("alien_4_idle_1_mc").speed = 0.45;
    (new Jok.JokG).animLoader.spriteSheet.getAnimation("alien_4_idle_2_mc").speed = 0.4;
    (new Jok.JokG).animLoader.spriteSheet.getAnimation("arrow_1_mc").speed = 0.4;
    (new Jok.JokG).animLoader.spriteSheet.getAnimation("spring_1_mc").speed = 1;
    (new Jok.JokG).animLoader.spriteSheet.getAnimation("decor_8_mc").speed = 0.75;
};
PreloadState.prototype.allLoadComplete = function () {
    if (typeof window.localStorage != "undefined") {
        if (window.localStorage.getItem("bestScore") == null) {
            window.localStorage.setItem("bestScore", 0);
        }
    }
    (new Jok.JokG).totalScore = 0;
    new MusicManager;
    (new Jok.JokG).text.init(this.queue.getResult("text_1"));
    this.initAnim();
    (new Jok.JokG).animLoader.loadBitmapFont(this.queue.getResult("fontDataXml_1"), this.queue.getResult("fontImg_1"), "default");
    (new Jok.JokG).jokEngine.switchState(new MainMenu);
};
BackgroundManager = function (gameManager, field) {
    createjs.Container.call(this);
    this.field = field;
    this.gameManager = gameManager;
    this.CELL_W_MAX = 14;
    this.CELL_H_MAX = 20;
    this.DELTA_X_TT = -2;
    this.DELTA_Y_TT = -5;
    this.tilesData = {};
    this.tilesData["0000"] = {};
    this.tilesData["0001"] = {};
    this.tilesData["0010"] = {};
    this.tilesData["0100"] = {};
    this.tilesData["1000"] = {};
    this.tilesData["0011"] = {};
    this.tilesData["0101"] = {};
    this.tilesData["1001"] = {};
    this.tilesData["0110"] = {};
    this.tilesData["1010"] = {};
    this.tilesData["1100"] = {};
    this.tilesData["1110"] = {};
    this.tilesData["1101"] = {};
    this.tilesData["1011"] = {};
    this.tilesData["0111"] = {};
    this.tilesData["1111"] = {};
    this.tilesData["0000"].name = "";
    this.tilesData["0001"].name = "tileTT_1";
    this.tilesData["0010"].name = "tileTT_1";
    this.tilesData["0100"].name = "tileTT_1";
    this.tilesData["1000"].name = "tileTT_1";
    this.tilesData["0011"].name = "tileTT_5";
    this.tilesData["0101"].name = "tileTT_3";
    this.tilesData["1001"].name = "tileTT_5";
    this.tilesData["0110"].name = "tileTT_5";
    this.tilesData["1010"].name = "tileTT_3";
    this.tilesData["1100"].name = "tileTT_5";
    this.tilesData["1110"].name = "tileTT_2";
    this.tilesData["1101"].name = "tileTT_2";
    this.tilesData["1011"].name = "tileTT_2";
    this.tilesData["0111"].name = "tileTT_2";
    this.tilesData["1111"].name = "";
    this.tilesData["0000"].rot = 0;
    this.tilesData["0001"].rot = 180;
    this.tilesData["0010"].rot = 90;
    this.tilesData["0100"].rot = 0;
    this.tilesData["1000"].rot = -90;
    this.tilesData["0011"].rot = 90;
    this.tilesData["0101"].rot = 0;
    this.tilesData["1001"].rot = 180;
    this.tilesData["0110"].rot = 0;
    this.tilesData["1010"].rot = 90;
    this.tilesData["1100"].rot = -90;
    this.tilesData["1110"].rot = 0;
    this.tilesData["1101"].rot = -90;
    this.tilesData["1011"].rot = 180;
    this.tilesData["0111"].rot = 90;
    this.tilesData["1111"].rot = 0;
};
BackgroundManager.prototype = Object.create(createjs.Container.prototype);
BackgroundManager.prototype.constructor = BackgroundManager;
BackgroundManager.prototype.init = function () {
    for (var x = -1; x < this.gameManager.CELL_W + 1; x++) {
        for (var y = -5; y < this.gameManager.CELL_H + 3; y++) {
            var spr = this.getSprTile(x, y);
            if (spr != null) {
                spr.x = this.gameManager.cellXtoPosX(x);
                spr.y = this.gameManager.cellYtoPosY(y);
                spr.rotation = 90 * Jok.JokMath.getRandomInt(0, 3);
                this.addChild(spr);
            }
        }
    }
    var tt = 1;
    for (var x = -1; x < this.gameManager.CELL_W + 1; x++) {
        tt = x;
        for (var y = -1; y < this.gameManager.CELL_H + 1; y++) {
            var XY = this.getTileId(x, y);
            if (XY == 0) {
                var tileBack = null;
                if (tt % 2 == 0) {
                    tileBack = new createjs.Sprite(Jok.JokG().animLoader.spriteSheet, "Cell_1_mc");
                } else {
                    tileBack = new createjs.Sprite(Jok.JokG().animLoader.spriteSheet, "Cell_2_mc");
                }
                tileBack.x = this.gameManager.cellXtoPosX(x);
                tileBack.y = this.gameManager.cellYtoPosY(y);
                tileBack.rotation = 90 * Jok.JokMath.getRandomInt(0, 3);
                this.addChild(tileBack);
                tileBack.stop();
            }
            tt++;
        }
    }
    for (var x = -1; x < this.gameManager.CELL_W + 1; x++) {
        tt = x;
        for (var y = -1; y < this.gameManager.CELL_H + 1; y++) {
            this.addCorner_0(x, y, tt % 2);
            tt++;
        }
    }
    for (var x = -1; x < this.gameManager.CELL_W + 1; x++) {
        for (var y = -5; y < this.gameManager.CELL_H + 3; y++) {
            var spr = this.addCorner_2(x, y);
            if (spr != null) {
                spr.x = this.gameManager.cellXtoPosX(x) + this.gameManager.CELL_WIDTH / 2;
                spr.y = this.gameManager.cellYtoPosY(y) + this.gameManager.CELL_WIDTH / 2;
                this.addChild(spr);
            }
        }
    }
    tileBack = new createjs.Sprite(Jok.JokG().animLoader.spriteSheet, "shadowMenu");
    this.addChild(tileBack);
};
BackgroundManager.prototype.addCorner_0 = function (x, y, numTT) {
    var XY = this.getTileId(x, y);
    if (XY == 1) {
        var X1Y = this.getTileId(x + 1, y);
        var X_1Y = this.getTileId(x - 1, y);
        var XY1 = this.getTileId(x, y + 1);
        var XY_1 = this.getTileId(x, y - 1);
        var X1Y1 = this.getTileId(x + 1, y + 1);
        var X1Y_1 = this.getTileId(x + 1, y - 1);
        var X_1Y1 = this.getTileId(x - 1, y + 1);
        var X_1Y_1 = this.getTileId(x - 1, y - 1);
        if (X1Y == 0) {
            this.addTileBack("CellDelta_mc", x, y, 180, numTT);
        }
        if (X_1Y == 0) {
            this.addTileBack("CellDelta_mc", x, y, 0, numTT);
        }
        if (XY1 == 0) {
            this.addTileBack("CellDelta_mc", x, y, 270, numTT);
        }
        if (XY_1 == 0) {
            this.addTileBack("CellDelta_mc", x, y, 90, numTT);
        }
        if (X1Y1 == 0 && (XY1 == 1 && X1Y == 1)) {
            this.addTileBack("CellDelta1_mc", x, y, 270);
        }
        if (X1Y_1 == 0 && (X1Y == 1 && XY_1 == 1)) {
            this.addTileBack("CellDelta1_mc", x, y, 180);
        }
        if (X_1Y1 == 0 && (X_1Y == 1 && XY1 == 1)) {
            this.addTileBack("CellDelta1_mc", x, y, 0);
        }
        if (X_1Y_1 == 0 && (X_1Y == 1 && XY_1 == 1)) {
            this.addTileBack("CellDelta1_mc", x, y, 90);
        }
    }
};
BackgroundManager.prototype.addCorner_1 = function (x, y) {
    var XY = this.getTileId(x, y);
    if (XY == 1) {
        var X1Y = this.getTileId(x + 1, y);
        var X_1Y = this.getTileId(x - 1, y);
        var XY1 = this.getTileId(x, y + 1);
        var XY_1 = this.getTileId(x, y - 1);
        var X1Y1 = this.getTileId(x + 1, y + 1);
        var X1Y_1 = this.getTileId(x + 1, y - 1);
        var X_1Y1 = this.getTileId(x - 1, y + 1);
        var X_1Y_1 = this.getTileId(x - 1, y - 1);
        if (X1Y == 0 && (XY1 == 1 && XY_1 == 1)) {
            this.addTileBack("tile_01_site", x, y, 180);
        }
        if (X_1Y == 0 && (XY1 == 1 && XY_1 == 1)) {
            this.addTileBack("tile_01_site", x, y, 0);
        }
        if (XY1 == 0 && (X1Y == 1 && X_1Y == 1)) {
            this.addTileBack("tile_01_site", x, y, 270);
        }
        if (XY_1 == 0 && (X1Y == 1 && X_1Y == 1)) {
            this.addTileBack("tile_01_site", x, y, 90);
        }
        if (X1Y1 == 0 && (XY1 == 1 && X1Y == 1)) {
            this.addTileBack("tile_01_corner", x, y, 270);
        }
        if (X1Y_1 == 0 && (X1Y == 1 && XY_1 == 1)) {
            this.addTileBack("tile_01_corner", x, y, 180);
        }
        if (X_1Y1 == 0 && (X_1Y == 1 && XY1 == 1)) {
            this.addTileBack("tile_01_corner", x, y, 0);
        }
        if (X_1Y_1 == 0 && (X_1Y == 1 && XY_1 == 1)) {
            this.addTileBack("tile_01_corner", x, y, 90);
        }
        if (X1Y1 == 0 && (XY1 == 0 && X1Y == 0)) {
            this.addTileBack("tile_01_corner_1", x, y, 270);
        }
        if (X1Y_1 == 0 && (X1Y == 0 && XY_1 == 0)) {
            this.addTileBack("tile_01_corner_1", x, y, 180);
        }
        if (X_1Y1 == 0 && (X_1Y == 0 && XY1 == 0)) {
            this.addTileBack("tile_01_corner_1", x, y, 0);
        }
        if (X_1Y_1 == 0 && (X_1Y == 0 && XY_1 == 0)) {
            this.addTileBack("tile_01_corner_1", x, y, 90);
        }
    }
};
BackgroundManager.prototype.addCorner_2 = function (x, y) {
    var XY = this.getTileId(x, y);
    var X1Y = this.getTileId(x + 1, y);
    var X1Y1 = this.getTileId(x + 1, y + 1);
    var XY1 = this.getTileId(x, y + 1);
    var name = this.tilesData["" + XY + "" + X1Y + "" + X1Y1 + "" + XY1].name;
    if (name.length == 0) {
        return null;
    }
    var spr = new createjs.Sprite(Jok.JokG().animLoader.spriteSheet, name);
    spr.rotation = this.tilesData["" + XY + "" + X1Y + "" + X1Y1 + "" + XY1].rot;
    spr.stop();
    return spr;
};
BackgroundManager.prototype.addTileBack = function (nameAnim, x, y, rot, frameNum) {
    frameNum = frameNum || 0;
    var tileBack = new createjs.Sprite(Jok.JokG().animLoader.spriteSheet, nameAnim);
    tileBack.x = this.gameManager.cellXtoPosX(x);
    tileBack.y = this.gameManager.cellYtoPosY(y);
    tileBack.rotation = rot;
    tileBack.currentAnimationFrame = frameNum;
    this.addChild(tileBack);
    tileBack.stop();
};
BackgroundManager.prototype.unccccccache = function () {
    this.uncache();
};
BackgroundManager.prototype.ccccccache = function () {
    this.cache(-640 / 2, -960 / 2, 640, 960);
    this.removeAllChildren();
};
BackgroundManager.prototype.addUp = function (fieldUP, deltaX, deltaY) {
    for (var x = -1; x < this.CELL_W_MAX; x++) {
        for (var y = -5; y < this.CELL_H_MAX + 2; y++) {
            var spr = this.getSprTileUp(x, y, fieldUP);
            if (spr != null) {
                spr.x = this.gameManager.cellXtoPosX(x + this.DELTA_X_TT) + this.gameManager.CELL_WIDTH / 2 + deltaX;
                spr.y = this.gameManager.cellYtoPosY(y + this.DELTA_Y_TT) + this.gameManager.CELL_WIDTH / 2 + deltaY;
                this.addChild(spr);
            }
        }
    }
};
BackgroundManager.prototype.getSprTile = function (x, y) {
    var XY = this.getTileId(x, y);
    var X1Y = this.getTileId(x + 1, y);
    var X1Y1 = this.getTileId(x + 1, y + 1);
    var XY1 = this.getTileId(x, y + 1);
    if (XY == 0) {
        return null;
    }
    var spr = new createjs.Sprite(Jok.JokG().animLoader.spriteSheet, "tile_black_1_1_1_1");
    spr.stop();
    return spr;
};
BackgroundManager.prototype.getTileId = function (x, y) {
    if (x <= -1 || (y <= -1 || (x >= this.gameManager.CELL_W || y >= this.gameManager.CELL_H))) {
        return 1;
    }
    return this.field[x][y];
};
BackgroundManager.prototype.addDecor = function (x, y, nameDecor) {
    var decorSpr = new createjs.Sprite(Jok.JokG().animLoader.spriteSheet, nameDecor);
    this.addChild(decorSpr);
    decorSpr.x = x;
    decorSpr.y = y;
    decorSpr.stop();
};
GuiBlock = function (gameManager) {
    createjs.Container.call(this);
    this.y = -316;
    this.gameManager = gameManager;
    var back = new createjs.Sprite(Jok.JokG().animLoader.spriteSheet, "guiFrameDown_mc");
    this.addChild(back);
    back.y = -20;
    back.scaleY = 1.5;
    back.y += back.scaleY * 286 / 2 - 286 / 2;
    back.stop();
    this.buttonPause = new MyButtonBase(createjs.proxy(this.pauseAction, this), new createjs.Point(-277, 2), new createjs.Point(1, 1), "buttonBase_mc");
    this.buttonPause.initUp("buttonStop_mc");
    this.addChild(this.buttonPause);
    this.buttonRestart = new MyButtonBase(createjs.proxy(this.restartAction, this), new createjs.Point(-192, this.buttonPause.y), new createjs.Point(this.buttonPause.scaleX, this.buttonPause.scaleY), "buttonBase_mc");
    this.buttonRestart.initUp("buttonRestart_mc");
    this.addChild(this.buttonRestart);
    this.starBar = new StarBar(this.gameManager.numStar);
    this.addChild(this.starBar);
    var txt = new createjs.Text((new Jok.JokG).text.getText("level") + " " + (gameManager.levelId + 1), "26px " + (new Jok.JokG).text.fontName["default"], "#FFE054");
    txt.x = (new Jok.JokG).width / 2 - txt.getBounds().width * txt.scaleX - 5;
    txt.y = -txt.getBounds().height / 2 * txt.scaleX;
    this.addChild(txt);
};
GuiBlock.prototype = Object.create(createjs.Container.prototype);
GuiBlock.prototype.constructor = GuiBlock;
GuiBlock.prototype.offButton = function () {
    this.buttonPause.offWork();
    this.buttonRestart.offWork();
};
GuiBlock.prototype.onButton = function () {
    this.buttonPause.onWork();
    this.buttonRestart.onWork();
};
GuiBlock.prototype.pauseAction = function () {
    this.gameManager.setPause();
};
GuiBlock.prototype.restartAction = function () {
    this.gameManager.restart();
};
LevelButton = function (pos, scaleBegin, idLevel, open) {
    MyButtonBase.call(this, null, pos, scaleBegin, "LevelSelectButton_mc");
    this.idLevel = idLevel;
    this._open = open;
    if (!open) {
        this.sprDown.currentAnimationFrame = 1;
    }
    this.initStar();
    var levelText = new createjs.BitmapText("" + this.idLevel, (new Jok.JokG).animLoader.fontSheet["default"]);
    levelText.scaleX = levelText.scaleY = 0.8;
    levelText.y = -levelText.getBounds().height / 2 * levelText.scaleX - 15;
    levelText.x = -levelText.getBounds().width / 2 * levelText.scaleX;
    this.addChild(levelText);
    this.actionFunc = createjs.proxy(this.levelAction, this);
};
LevelButton.prototype = Object.create(MyButtonBase.prototype);
LevelButton.prototype.constructor = LevelButton;
LevelButton.prototype.initStar = function () {
    this.sprDown.stop();
    var numStar = 0;
    if (typeof window.localStorage != "undefined") {
        if (window.localStorage.getItem("levelStar" + this.idLevel) == null) {
            window.localStorage.setItem("levelStar" + this.idLevel, 0);
        }
        numStar = window.localStorage.getItem("levelStar" + this.idLevel);
    }
    var ttPos = 30;
    for (var i = 0; i < 3; i++) {
        var spr = new createjs.Sprite(Jok.JokG().animLoader.spriteSheet, "LevelMenuStar_mc");
        spr.x = -ttPos + ttPos * i;
        spr.y = 30;
        spr.stop();
        if (i < numStar) {
            spr.currentAnimationFrame = 1;
        } else {
            spr.currentAnimationFrame = 0;
        }
        this.addChild(spr);
    }
};
LevelButton.prototype.levelAction = function () {
    if (this._open) {
        SG_Hooks.start();
        var gameManager = new GameManager;
        gameManager.levelId = this.idLevel - 1;
        (new Jok.JokG).jokEngine.transitionScreen(gameManager, null, null);
    }
};
SoundButton = function (pos, scaleBegin) {
    MyButtonBase.call(this, null, pos, scaleBegin, "buttonBase_mc");
    this.initUp("ButtonMusic_mc");
    if ((new MusicManager).getMute()) {
        this.sprUp.currentAnimationFrame = 1;
    }
    this.actionFunc = createjs.proxy(this.soundAction, this);
};
SoundButton.prototype = Object.create(MyButtonBase.prototype);
SoundButton.prototype.constructor = SoundButton;
SoundButton.prototype.soundAction = function () {
    (new MusicManager).setMute(!(new MusicManager).getMute());
    if ((new MusicManager).getMute()) {
        this.sprUp.currentAnimationFrame = 1;
    } else {
        this.sprUp.currentAnimationFrame = 0;
    }
};
StarBar = function (numStar) {
    createjs.Container.call(this);
    this.x = -12;
    this.y = 5;
    this.MASK_SIZE = 237.15;
    this.barMask = new createjs.Shape;
    this.barMask.x = -this.MASK_SIZE / 2;
    this.barMask.y = -25 / 2;
    this.barMask.graphics.beginFill("rgba(255,255,255,1)").rect(0, 0, this.MASK_SIZE, 25);
    this.starNum = 3;
    this.stepNow = 0;
    this.numStarThree = numStar;
    this.numStarTwo = Math.ceil(this.numStarThree * 0.4) + numStar;
    this.numStarOne = Math.ceil(this.numStarTwo * 0.5) + this.numStarTwo;
    this.numStarAll = this.numStarOne + 1;
    this.initStars();
    var sprDown = new createjs.Sprite(Jok.JokG().animLoader.spriteSheet, "scoreBar_1_mc");
    this.addChild(sprDown);
    this.barSpr = new createjs.Sprite(Jok.JokG().animLoader.spriteSheet, "scoreBar_2_mc");
    this.barSpr.mask = this.barMask;
    this.addChild(this.barSpr);
    var sprUp = new createjs.Sprite(Jok.JokG().animLoader.spriteSheet, "scoreBar_3_mc");
    this.addChild(sprUp);
    this.stepTxt = new createjs.BitmapText("0", (new Jok.JokG).animLoader.fontSheet["default"]);
    this.stepTxt.scaleX = this.stepTxt.scaleY = 0.3;
    this.stepTxt.x = -this.stepTxt.getBounds().width / 2 * this.stepTxt.scaleX;
    this.stepTxt.y = -this.stepTxt.getBounds().height / 2 * this.stepTxt.scaleX + 0;
    this.addChild(this.stepTxt);
};
StarBar.prototype = Object.create(createjs.Container.prototype);
StarBar.prototype.constructor = StarBar;
StarBar.prototype.initStars = function () {
    var addX = 0;
    this.starTree = new createjs.Sprite(Jok.JokG().animLoader.spriteSheet, "star_3_mc");
    this.starTree.stop();
    this.starTree.y = -27;
    this.starTree.x = -this.MASK_SIZE / 2 + this.MASK_SIZE * (this.numStarThree / this.numStarAll) + addX;
    this.addChild(this.starTree);
    this.starTwoo = new createjs.Sprite(Jok.JokG().animLoader.spriteSheet, "star_2_mc");
    this.starTwoo.y = this.starTree.y;
    this.starTwoo.stop();
    this.starTwoo.x = -this.MASK_SIZE / 2 + this.MASK_SIZE * (this.numStarTwo / this.numStarAll) + addX;
    this.addChild(this.starTwoo);
    this.starOne = new createjs.Sprite(Jok.JokG().animLoader.spriteSheet, "star_1_mc");
    this.starOne.y = this.starTree.y;
    this.starOne.stop();
    this.starOne.x = -this.MASK_SIZE / 2 + this.MASK_SIZE * (this.numStarOne / this.numStarAll) + addX;
    this.addChild(this.starOne);
    this.initStarsText(this.numStarThree);
    this.initStarsText(this.numStarTwo);
    this.initStarsText(this.numStarOne);
};
StarBar.prototype.initStarsText = function (numb) {
    var addX = 0;
    var posY = 28;
    var starTreeText = new createjs.BitmapText("" + numb, (new Jok.JokG).animLoader.fontSheet["default"]);
    starTreeText.scaleX = starTreeText.scaleY = 0.4;
    starTreeText.y = posY - starTreeText.getBounds().height / 2 * starTreeText.scaleX;
    starTreeText.x = -this.MASK_SIZE / 2 + this.MASK_SIZE * (numb / this.numStarAll) - starTreeText.getBounds().width / 2 * starTreeText.scaleX + addX;
    this.addChild(starTreeText);
};
StarBar.prototype.addStep = function () {
    if (this.stepNow == this.numStarThree) {
        this.starTree.currentAnimationFrame = 1;
        this.starNum--;
    } else {
        if (this.stepNow == this.numStarTwo) {
            this.starTwoo.currentAnimationFrame = 1;
            this.starNum--;
        } else {
            if (this.stepNow == this.numStarOne) {
                this.starOne.currentAnimationFrame = 1;
                this.starNum--;
            }
        }
    }
    this.stepNow++;
    this.stepTxt.text = "" + this.stepNow;
    this.stepTxt.x = -this.stepTxt.getBounds().width / 2 * this.stepTxt.scaleX;
    if (this.stepNow >= this.numStarAll) {
        this.barMask.x = 9999;
    } else {
        this.barMask.x = -this.MASK_SIZE / 2 + this.MASK_SIZE * (this.stepNow / this.numStarAll);
    }
};
CreditsDialog = function (mainMenu) {
    createjs.Container.call(this);
    this.mainMenu = mainMenu;
    this.mainMenu.offButton();
    var color = "#000";
    var font = " Verdana";
    var shapeRect = new createjs.Shape;
    shapeRect.x = -(new Jok.JokG).width / 2;
    shapeRect.y = -(new Jok.JokG).height / 2;
    shapeRect.graphics.beginFill("rgba(255,255,255,0.5)").rect(0, 0, (new Jok.JokG).width, (new Jok.JokG).height);
    this.addChild(shapeRect);
    var txt = new createjs.Text((new Jok.JokG).text.getText("developed"), "36px" + font, color);
    txt.x = -txt.getBounds().width / 2;
    txt.y = -260;
    this.addChild(txt);
    var txt_1 = new createjs.Text((new Jok.JokG).text.getText("aizat"), "36px" + font, color);
    txt_1.x = -txt_1.getBounds().width / 2;
    txt_1.y = txt.y + 55;
    this.addChild(txt_1);
    var txt_2 = new createjs.Text((new Jok.JokG).text.getText("email"), "36px" + font, color);
    txt_2.x = -txt_2.getBounds().width / 2;
    txt_2.y = txt_1.y + 80;
    this.addChild(txt_2);
    this.alpha = 0;
    createjs.Tween.get(this).to({ alpha: 1 }, 400, createjs.Ease.quadOut);
    this.eventMouseDown = (new Jok.JokG).stage.on("stagemousedown", createjs.proxy(this.cccMouseDown, this));
};
CreditsDialog.prototype = Object.create(createjs.Container.prototype);
CreditsDialog.prototype.constructor = CreditsDialog;
CreditsDialog.prototype.cccMouseDown = function (evt) {
    (new Jok.JokG).stage.off("stagemousedown", this.eventMouseDown);
    this.mainMenu.onButton();
    if (this.parent) {
        this.parent.removeChild(this);
    }
};
AEObjectBase = function (gameManger, aeObjectManager, cellX, cellY, idObject, animName) {
    createjs.Container.call(this);
    this.gameManager = gameManger;
    this.fgid = (new Jok.JokG).getNewid();
    this.aeObjectManager = aeObjectManager;
    this.cellX = cellX;
    this.cellY = cellY;
    this.idObject = idObject;
    this.tag = 0;
    this.selectable = false;
    console.log("animName = " + animName);
    this.baseSpr = new createjs.Sprite(Jok.JokG().animLoader.spriteSheet, animName);
    this.baseSpr.stop();
    this.addChild(this.baseSpr);
    this.x = this.gameManager.cellXtoPosX(this.cellX);
    this.y = this.gameManager.cellYtoPosY(this.cellY);
};
AEObjectBase.prototype = Object.create(createjs.Container.prototype);
AEObjectBase.prototype.constructor = AEObjectBase;
AEObjectBase.prototype.postInit = function () {
};
AEObjectBase.prototype.tapToObject = function () {
};
AEObjectBase.prototype.step = function (dirX, dirY) {
    return false;
};
AEObjectBase.prototype.alienPreActivateCell = function (alien) {
};
AEObjectBase.prototype.alienActivateCell = function (alien) {
};
AEObjectBase.prototype.alienActivateNextCell = function (alien) {
    return false;
};
AEObjectBase.prototype.alienGoBegin = function (alien) {
};
AEObjectAlien = function (gameManger, aeObjectManager, cellX, cellY, idAlien) {
    AEObjectBase.call(this, gameManger, aeObjectManager, cellX, cellY, gameManger.AEOBJECT_ALIEN_ID, "alien_" + idAlien + "_mc");
    this.selectable = true;
    this.numAnim = 0;
    this.idAlien = idAlien;
    this.funcEndAnim = createjs.proxy(this.endAnim, this);
    this.onFuncEndAnim = this.baseSpr.on("animationend", this.funcEndAnim);
    this.setIdleAnim();
    this.setBeginAnimTime();
    this.isCellHappy = false;
    this.dirX = 0;
    this.dirY = 0;
    this.shadowSpr = new createjs.Sprite(Jok.JokG().animLoader.spriteSheet, "shadow");
    this.addChildAt(this.shadowSpr, 0);
    this.baseSprYBegin = -10;
    this.baseSpr.y = this.baseSprYBegin;
    this.shadowSpr.y = 18;
};
AEObjectAlien.prototype = Object.create(AEObjectBase.prototype);
AEObjectAlien.prototype.constructor = AEObjectAlien;
AEObjectAlien.prototype.setIdleAnim = function () {
    this.idleData = this.gameManager.ANIM_ALIEN_IDLE_DATA[this.idAlien][Jok.JokMath.getRandomInt(0, this.gameManager.ANIM_ALIEN_IDLE_DATA[this.idAlien].length - 1)];
    this.baseSpr.gotoAndStop(this.idleData.name);
    this.baseSpr.currentAnimationFrame = this.baseSpr.spriteSheet.getAnimation(this.baseSpr.currentAnimation).frames.length - 1;
};
AEObjectAlien.prototype.setHappy = function (happy) {
    if (happy == this.isCellHappy) {
        return;
    }
    this.isCellHappy = happy;
    if (this.isCellHappy) {
        this.aeObjectManager.checkWin();
        this.setHappyAnim();
        (new MusicManager).playAlienTap();
    } else {
        createjs.Tween.removeTweens(this.baseSpr);
        createjs.Tween.removeTweens(this.shadowSpr);
        this.baseSpr.y = this.baseSprYBegin;
        this.shadowSpr.scaleX = this.shadowSpr.scaleY = 1;
        this.setTimeWait();
    }
};
AEObjectAlien.prototype.setHappyAnim = function () {
    createjs.Tween.removeTweens(this);
    this.numAnim = 9999;
    this.baseSpr.stop();
    this.baseSpr.currentAnimationFrame = this.baseSpr.spriteSheet.getAnimation(this.baseSpr.currentAnimation).frames.length - 1;
    var time = 200;
    createjs.Tween.get(this.baseSpr, { loop: true }).to({ y: this.baseSprYBegin - 20 }, time, createjs.Ease.linear).to({ y: this.baseSprYBegin }, time, createjs.Ease.linear);
    var scaleEnd = 0.8;
    createjs.Tween.get(this.shadowSpr, { loop: true }).to({
        scaleX: scaleEnd,
        scaleY: scaleEnd
    }, time, createjs.Ease.linear).to({ scaleX: 1, scaleY: 1 }, time, createjs.Ease.linear);
};
AEObjectAlien.prototype.setBeginAnimTime = function () {
    this.baseSpr.off("animationend", this.onFuncEndAnim);
    this.onFuncEndAnim = this.baseSpr.on("animationend", this.funcEndAnim);
    this.baseSpr.stop();
    this.setTimeWait();
};
AEObjectAlien.prototype.setTimeWait = function () {
    if (!this.isCellHappy) {
        createjs.Tween.get(this).wait(Jok.JokMath.getRandomNumber(2000, 4000)).call(createjs.proxy(this.endWait, this));
    } else {
        this.setHappyAnim();
    }
};
AEObjectAlien.prototype.endWait = function () {
    if (!this.isCellHappy) {
        this.setIdleAnim();
        this.numAnim = Jok.JokMath.getRandomInt(this.idleData.numMin, this.idleData.numMax) + 1;
        this.baseSpr.play();
    }
};
AEObjectAlien.prototype.endAnim = function () {
    this.numAnim--;
    if (this.numAnim <= 0) {
        this.baseSpr.stop();
        this.setTimeWait();
    }
};
AEObjectAlien.prototype.setWIn = function () {
    this.setHappyAnim();
    this.numAnim = 999;
    createjs.Tween.removeTweens(this);
};
AEObjectAlien.prototype.tapToObject = function () {
};
AEObjectBase.prototype.step = function (dirX, dirY) {
    this.stepAnimNow = 0;
    var toCell = this.aeObjectManager.getCellStopByDir(this.cellX + dirX, this.cellY + dirY, dirX, dirY, this);
    if (this.cellX == toCell.cellX && this.cellY == toCell.cellY) {
        return false;
    }
    this.aeObjectManager.alienGoBegin(this.cellX, this.cellY, this);
    this.setHappy(false);
    (new MusicManager).playAlienGo();
    this.dirX = dirX;
    this.dirY = dirY;
    this.cellX = toCell.cellX;
    this.cellY = toCell.cellY;
    this.aeObjectManager.setAlienSelectable(false);
    var lenght = Math.abs(this.gameManager.cellXtoPosX(this.cellX) - this.x) + Math.abs(this.gameManager.cellYtoPosY(this.cellY) - this.y);
    var time = lenght / this.gameManager.SPEED_ALIEN * 1000;
    createjs.Tween.get(this).to({
        x: this.gameManager.cellXtoPosX(this.cellX),
        y: this.gameManager.cellYtoPosY(this.cellY)
    }, time, createjs.Ease.quadInOut).call(createjs.proxy(this.goAnimStep_2, this));
    if (dirY == 0) {
        var timeTo = 100;
        this.timeEndRot = 100;
        if (time > timeTo + this.timeEndRot) {
            createjs.Tween.get(this.baseSpr).to({ rotation: -15 * dirX }, timeTo, createjs.Ease.linear).wait(time - this.timeEndRot - timeTo).call(createjs.proxy(this.endRot, this));
        }
    }
    return true;
};
AEObjectAlien.prototype.endRot = function () {
    createjs.Tween.get(this.baseSpr).to({ rotation: 0 }, this.timeEndRot, createjs.Ease.linear);
};
AEObjectAlien.prototype.goAnimStep_2 = function () {
    this.goAnimStep_3();
};
AEObjectAlien.prototype.goAnimStep_3 = function () {
    this.stepAnimNow = 3;
    this.aeObjectManager.setAlienSelectable(true);
    if (!this.aeObjectManager.alienActivateNextCell(this.cellX + this.dirX, this.cellY + this.dirY, this)) {
        this.aeObjectManager.alienActivateCell(this.cellX, this.cellY, this);
    }
};
AEObjectAlien.prototype.teleportActivate = function (newCellX, newCellY) {
    (new MusicManager).playTeleportBegin();
    this.aeObjectManager.setAlienSelectable(false);
    this.cellX = newCellX;
    this.cellY = newCellY;
    this.stepAnimNow = 0;
    var scaleX_1 = 0.5;
    var scaleY_1 = 1.5;
    var time_1 = 200;
    var scaleX_2 = 0.2;
    var scaleY_2 = 0.3;
    var time_2 = 100;
    createjs.Tween.get(this).to({
        scaleX: scaleX_1,
        scaleY: scaleY_1,
        y: this.y - 30
    }, time_1, createjs.Ease.linear).to({
        scaleX: scaleX_2,
        scaleY: scaleY_2,
        y: this.y + 10
    }, time_2, createjs.Ease.linear).call(createjs.proxy(this.teleportActivateBegin, this));
};
AEObjectAlien.prototype.teleportActivateBegin = function () {
    this.x = this.gameManager.cellXtoPosX(this.cellX);
    this.y = this.gameManager.cellYtoPosY(this.cellY);
    this.y += 10;
    var scaleX_1 = 0.5;
    var scaleY_1 = 1.5;
    var time_1 = 100;
    createjs.Tween.get(this).to({
        scaleX: scaleX_1,
        scaleY: scaleY_1,
        y: this.y - 40
    }, time_1, createjs.Ease.linear).to({
        scaleX: 1,
        scaleY: 1,
        y: this.y - 10
    }, 200, createjs.Ease.linear).call(createjs.proxy(this.teleportActivateEnd, this));
};
AEObjectAlien.prototype.teleportActivateEnd = function () {
    this.aeObjectManager.setAlienSelectable(true);
    this.step(this.dirX, this.dirY);
};
AEObjectArrow = function (gameManger, aeObjectManager, cellX, cellY, idArrow) {
    AEObjectBase.call(this, gameManger, aeObjectManager, cellX, cellY, gameManger.AEOBJECT_ARROW_ID, "arrow_1_mc");
    this.idArrow = idArrow;
    this.rotation = (idArrow + 1) * 90;
    this.baseSpr.play();
    this.stepX = 0;
    this.stepY = 0;
    if (this.idArrow == 1) {
        this.stepY = -1;
    } else {
        if (this.idArrow == 2) {
            this.stepX = 1;
        } else {
            if (this.idArrow == 3) {
                this.stepY = 1;
            } else {
                if (this.idArrow == 4) {
                    this.stepX = -1;
                }
            }
        }
    }
};
AEObjectArrow.prototype = Object.create(AEObjectBase.prototype);
AEObjectArrow.prototype.constructor = AEObjectArrow;
AEObjectArrow.prototype.alienActivateCell = function (alien) {
    alien.step(this.stepX, this.stepY);
};
AEObjectExit = function (gameManger, aeObjectManager, cellX, cellY, idExit) {
    AEObjectBase.call(this, gameManger, aeObjectManager, cellX, cellY, gameManger.AEOBJECT_EXIT_ID, "Exit_" + idExit + "_mc");
    this.baseSpr.y = 3;
    this.baseSpr.currentAnimationFrame = 0;
    this.idExit = idExit;
};
AEObjectExit.prototype = Object.create(AEObjectBase.prototype);
AEObjectExit.prototype.constructor = AEObjectExit;
AEObjectExit.prototype.alienActivateCell = function (alien) {
    if (this.idExit == alien.idAlien) {
        alien.setHappy(true);
        this.baseSpr.currentAnimationFrame = 1;
    }
};
AEObjectExit.prototype.alienGoBegin = function (alien) {
    this.baseSpr.currentAnimationFrame = 0;
};
AEObjectIce = function (gameManger, aeObjectManager, cellX, cellY) {
    AEObjectBase.call(this, gameManger, aeObjectManager, cellX, cellY, gameManger.AEOBJECT_ICE_ID, "ice_1_mc");
    this.baseSpr.currentAnimationFrame = 1;
};
AEObjectIce.prototype = Object.create(AEObjectBase.prototype);
AEObjectIce.prototype.constructor = AEObjectIce;
AEObjectIce.prototype.stopAnim = function () {
    this.baseSpr.stop();
    if (this.parent) {
        this.parent.removeChild(this);
    }
};
AEObjectIce.prototype.alienActivateNextCell = function (alien) {
    console.log("alienActivateNextCell");
    this.aeObjectManager.deleteAEObject(this.fgid);
    this.baseSpr.gotoAndPlay("iceDetaills_1_mc");
    this.onFuncStopAnim = this.baseSpr.on("animationend", createjs.proxy(this.stopAnim, this));
    (new MusicManager).playIce();
    return false;
};
AEObjectSpring = function (gameManger, aeObjectManager, cellX, cellY) {
    AEObjectBase.call(this, gameManger, aeObjectManager, cellX, cellY, gameManger.AEOBJECT_SPRING_ID, "spring_1_mc");
    this.baseSpr.play();
};
AEObjectSpring.prototype = Object.create(AEObjectBase.prototype);
AEObjectSpring.prototype.constructor = AEObjectSpring;
AEObjectSpring.prototype.stopAnim = function () {
    this.baseSpr.stop();
};
AEObjectSpring.prototype.alienActivateNextCell = function (alien) {
    console.log("alienActivateNextCell");
    alien.step(-alien.dirX, -alien.dirY);
    (new MusicManager).playSpring();
    return true;
};
AEObjectTeleport = function (gameManger, aeObjectManager, cellX, cellY, idTeleport) {
    AEObjectBase.call(this, gameManger, aeObjectManager, cellX, cellY, gameManger.AEOBJECT_TELEPORT_ID, "Teleport_" + idTeleport + "_mc");
    this.baseSpr.play();
    this.idTeleport = idTeleport;
    this.teleportEnd = null;
};
AEObjectTeleport.prototype = Object.create(AEObjectBase.prototype);
AEObjectTeleport.prototype.constructor = AEObjectTeleport;
AEObjectTeleport.prototype.postInit = function () {
    var aeObj = this.aeObjectManager.aeObjects;
    for (var i = 0; i < aeObj.length; i++) {
        if (aeObj[i].idObject == this.gameManager.AEOBJECT_TELEPORT_ID) {
            if (aeObj[i].idTeleport == this.idTeleport) {
                if (aeObj[i].fgid != this.fgid) {
                    this.teleportEnd = aeObj[i];
                    return;
                }
            }
        }
    }
};
AEObjectTeleport.prototype.alienActivateCell = function (alien) {
    if (this.idTeleport == alien.idAlien) {
        var obj = this.aeObjectManager.getObjectsByCell(this.teleportEnd.cellX, this.teleportEnd.cellY);
        var toEnd = true;
        for (var i = 0; i < obj.length; i++) {
            if (obj[i].idObject == this.gameManager.AEOBJECT_ALIEN_ID) {
                toEnd = false;
            }
        }
        if (toEnd) {
            alien.teleportActivate(this.teleportEnd.cellX, this.teleportEnd.cellY);
        } else {
            alien.teleportActivate(this.cellX, this.cellY);
        }
    }
};
AEObjectManager = function (gameManager, field, backgroundManager) {
    createjs.Container.call(this);
    this.field = field;
    this.gameManager = gameManager;
    this.aeObjects = [];
    this.backgroundManager = backgroundManager;
    this.activeObject = null;
    this.sortFun = createjs.proxy(this.sortFunction, this);
    this.sort = false;
    this.ALIEN_STEP_CELL_TRUE = 0;
    this.ALIEN_STEP_CELL_NOW_FALSE = 1;
    this.ALIEN_STEP_CELL_NEXT_FALSE = 2;
};
AEObjectManager.prototype = Object.create(createjs.Container.prototype);
AEObjectManager.prototype.constructor = AEObjectManager;
AEObjectManager.prototype.postInit = function () {
    for (var i = 0; i < this.aeObjects.length; i++) {
        this.aeObjects[i].postInit();
    }
};
AEObjectManager.prototype.sortFunction = function (obj1, obj2, options) {
    if (obj1.y > obj2.y) {
        return 1;
    }
    if (obj1.y < obj2.y) {
        return -1;
    }
    return 0;
};
AEObjectManager.prototype.update = function () {
    if (this.sort) {
        this.sortChildren(this.sortFun);
    }
};
AEObjectManager.prototype.addAlien = function (cellX, cellY, idAlien) {
    var alien = new AEObjectAlien(this.gameManager, this, cellX, cellY, idAlien);
    this._addAEObject(alien, false);
};
AEObjectManager.prototype.addIce = function (cellX, cellY) {
    var obj = new AEObjectIce(this.gameManager, this, cellX, cellY);
    this._addAEObject(obj, false);
};
AEObjectManager.prototype.addSpring = function (cellX, cellY) {
    var obj = new AEObjectSpring(this.gameManager, this, cellX, cellY);
    this._addAEObject(obj, true);
};
AEObjectManager.prototype.addExit = function (cellX, cellY, idExit) {
    var obj = new AEObjectExit(this.gameManager, this, cellX, cellY, idExit);
    this._addAEObject(obj, true);
};
AEObjectManager.prototype.addTeleport = function (cellX, cellY, idTeleport) {
    var obj = new AEObjectTeleport(this.gameManager, this, cellX, cellY, idTeleport);
    this._addAEObject(obj, true);
};
AEObjectManager.prototype.addArrow = function (cellX, cellY, idArrow) {
    var obj = new AEObjectArrow(this.gameManager, this, cellX, cellY, idArrow);
    this._addAEObject(obj, true);
};
AEObjectManager.prototype._addAEObject = function (aeObject, back) {
    if (back) {
        this.backgroundManager.addChild(aeObject);
    } else {
        this.addChild(aeObject);
    }
    this.aeObjects.push(aeObject);
};
AEObjectManager.prototype.deleteAEObject = function (id) {
    for (var i = 0; i < this.aeObjects.length; i++) {
        if (this.aeObjects[i].fgid == id) {
            console.log("deleteAEObject");
            this.aeObjects.splice(i, 1);
            return;
        }
    }
};
AEObjectManager.prototype.tapToMap = function (cellX, cellY) {
    this.activeObject = this.getSelectableObjectbyCell(cellX, cellY);
    if (this.activeObject != null) {
        this.activeObject.tapToObject();
    }
};
AEObjectManager.prototype.tapMove = function (cellX, cellY) {
    if (this.activeObject == null) {
        this.activeObject = this.getSelectableObjectbyCell(cellX, cellY);
        if (this.activeObject != null) {
            this.activeObject.tapToObject();
        }
    }
};
AEObjectManager.prototype.stepActiveObject = function (dirX, dirY) {
    if (this.activeObject != null) {
        if (this.activeObject.step(dirX, dirY)) {
            this.gameManager.gui.starBar.addStep();
        }
    }
};
AEObjectManager.prototype.alienPreActivateCell = function (cellX, cellY, alien) {
    var objects = this.getObjectsByCell(cellX, cellY);
    alien.setHappy(false);
    for (var i = 0; i < objects.length; i++) {
        objects[i].alienPreActivateCell(alien);
    }
};
AEObjectManager.prototype.alienActivateCell = function (cellX, cellY, alien) {
    var objects = this.getObjectsByCell(cellX, cellY);
    alien.setHappy(false);
    for (var i = 0; i < objects.length; i++) {
        objects[i].alienActivateCell(alien);
    }
};
AEObjectManager.prototype.alienGoBegin = function (cellX, cellY, alien) {
    var objects = this.getObjectsByCell(cellX, cellY);
    for (var i = 0; i < objects.length; i++) {
        objects[i].alienGoBegin(alien);
    }
};
AEObjectManager.prototype.alienActivateNextCell = function (cellX, cellY, alien) {
    var objects = this.getObjectsByCell(cellX, cellY);
    for (var i = 0; i < objects.length; i++) {
        if (objects[i].alienActivateNextCell(alien)) {
            return true;
        }
    }
    return false;
};
AEObjectManager.prototype.getCellStopByDir = function (cellX, cellY, dirX, dirY, alien) {
    while (true) {
        if (cellX < 0 || (cellY < 0 || (cellX >= this.gameManager.CELL_W || cellY >= this.gameManager.CELL_H))) {
            break;
        }
        if (this.field[cellX][cellY] == 1) {
            break;
        }
        var objects = this.getObjectsByCell(cellX, cellY);
        var stepCEll = this.isObjectsStop(objects, alien);
        if (stepCEll == this.ALIEN_STEP_CELL_NEXT_FALSE) {
            break;
        }
        if (stepCEll == this.ALIEN_STEP_CELL_NOW_FALSE) {
            cellX += dirX;
            cellY += dirY;
            break;
        }
        cellX += dirX;
        cellY += dirY;
    }
    return { cellX: cellX - dirX, cellY: cellY - dirY };
};
AEObjectManager.prototype.getObjectsByCell = function (cellX, cellY) {
    var objects = [];
    if (cellX < 0 || (cellY < 0 || (cellX >= this.gameManager.CELL_W || cellY >= this.gameManager.CELL_H))) {
        return objects;
    }
    for (var i = 0; i < this.aeObjects.length; i++) {
        if (this.aeObjects[i].cellX == cellX && this.aeObjects[i].cellY == cellY) {
            objects.push(this.aeObjects[i]);
        }
    }
    return objects;
};
AEObjectManager.prototype.isObjectsStop = function (objects, alien) {
    for (var i = 0; i < objects.length; i++) {
        if (objects[i].idObject == this.gameManager.AEOBJECT_ALIEN_ID) {
            return this.ALIEN_STEP_CELL_NEXT_FALSE;
        }
        if (objects[i].idObject == this.gameManager.AEOBJECT_SPRING_ID) {
            return this.ALIEN_STEP_CELL_NEXT_FALSE;
        }
        if (objects[i].idObject == this.gameManager.AEOBJECT_ICE_ID) {
            return this.ALIEN_STEP_CELL_NEXT_FALSE;
        }
    }
    for (i = 0; i < objects.length; i++) {
        if (objects[i].idObject == this.gameManager.AEOBJECT_ARROW_ID) {
            return this.ALIEN_STEP_CELL_NOW_FALSE;
        }
        if (objects[i].idObject == this.gameManager.AEOBJECT_TELEPORT_ID) {
            if (alien.idAlien == objects[i].idTeleport) {
                return this.ALIEN_STEP_CELL_NOW_FALSE;
            }
        }
    }
    return this.ALIEN_STEP_CELL_TRUE;
};
AEObjectManager.prototype.getSelectableObjectbyCell = function (cellX, cellY) {
    if (cellX < 0 || (cellY < 0 || (cellX >= this.gameManager.CELL_W || cellY >= this.gameManager.CELL_H))) {
        return null;
    }
    for (var i = 0; i < this.aeObjects.length; i++) {
        if (this.aeObjects[i].selectable && (this.aeObjects[i].cellX == cellX && this.aeObjects[i].cellY == cellY)) {
            return this.aeObjects[i];
        }
    }
    return null;
};
AEObjectManager.prototype.setAlienSelectable = function (selectable) {
    this.sort = !selectable;
    for (var i = 0; i < this.aeObjects.length; i++) {
        if (this.aeObjects[i].idObject == this.gameManager.AEOBJECT_ALIEN_ID) {
            this.aeObjects[i].selectable = selectable;
        }
    }
};
AEObjectManager.prototype.checkWin = function () {
    for (var i = 0; i < this.aeObjects.length; i++) {
        if (this.aeObjects[i].idObject == this.gameManager.AEOBJECT_ALIEN_ID) {
            if (!this.aeObjects[i].isCellHappy) {
                return;
            }
        }
    }
    this.gameManager.setGameOver();
};
GameDialogBase = function (gameManager) {
    createjs.Container.call(this);
    console.log("GameDialogBase");
    this.gameManager = gameManager;
    gameManager.offWork();
    gameManager.work = false;
    var shapeRect = new createjs.Shape;
    shapeRect.x = -(new Jok.JokG).width / 2;
    shapeRect.y = -(new Jok.JokG).height / 2;
    shapeRect.graphics.beginFill("rgba(0,0,0,0.65)").rect(0, 0, (new Jok.JokG).width, (new Jok.JokG).height);
    this.addChild(shapeRect);
    this.alpha = 0;
    createjs.Tween.get(this).to({ alpha: 1 }, 400, createjs.Ease.quadOut).call(createjs.proxy(this.alphaEnd, this));
};
GameDialogBase.prototype = Object.create(createjs.Container.prototype);
GameDialogBase.prototype.constructor = GameDialogBase;
GameDialogBase.prototype.restartAction = function () {
    this.gameManager.restart();
};
GameDialogBase.prototype.backAction = function () {
    this.gameManager.toLevelSelect();
};
GameDialogBase.prototype.onAll = function () {
    this.gameManager.onWork();
};
GameDialogBase.prototype.alphaEnd = function () {
};
GameOverDialog = function (gameManager) {
    GameDialogBase.call(this, gameManager);
    this.idAdd = 0;
    (new MusicManager).playGameOver();
    var txt = new createjs.Text((new Jok.JokG).text.getText("levelComplete"), "45px " + (new Jok.JokG).text.fontName["default"], "#FFE054");
    txt.scaleX = txt.scaleY = 1;
    txt.x = -txt.getBounds().width / 2 * txt.scaleX;
    txt.y = -250 - txt.getBounds().height / 2 * txt.scaleX;
    this.addChild(txt);
    var button = new MyButtonBase(createjs.proxy(this.playAction, this), new createjs.Point(0, 70), new createjs.Point(0.8, 0.8), "MainMenuButton_1_mc");
    button.initUp("ButtonPlay_mc");
    this.addChild(button);
    var scaleTT = 1.2;
    var posY = 190;
    var posX = 100;
    button = new MyButtonBase(createjs.proxy(this.backAction, this), new createjs.Point(-posX * 2, posY), new createjs.Point(scaleTT, scaleTT), "buttonBase_mc");
    button.initUp("ButtonBack_mc");
    this.addChild(button);
    var tttttttt = 0.85;
    button = new MyButtonBase(createjs.proxy(this.restartAction, this), new createjs.Point(-posX * tttttttt, posY + 90), new createjs.Point(scaleTT, scaleTT), "buttonBase_mc");
    button.initUp("buttonRestart_mc");
    this.addChild(button);
    button = new MyButtonBase(btMoreGame, new createjs.Point(posX * tttttttt, posY + 90), new createjs.Point(scaleTT, scaleTT), "buttonBase_mc");
    button.initUp("ButtonMoreGames_mc");
    if (showSGLinks) {
        this.addChild(button);
    }
    button = new SoundButton(new createjs.Point(2 * posX, posY), new createjs.Point(scaleTT, scaleTT));
    this.addChild(button);
    (new MusicManager).musicInstance.setVolume(0);
    SG_Hooks.levelUp(this.gameManager.levelId + 1, this.gameManager.gui.starBar.starNum, function () {
        (new MusicManager).musicInstance.setVolume(1);
    });
    this.saveProgress();
    // Play68.setRankingLevelScoreDesc(this.gameManager.levelId+1,this.gameManager.gui.starBar.starNum);
	// updateShare(this.gameManager.levelId+1,this.gameManager.gui.starBar.starNum);
};
GameOverDialog.prototype = Object.create(GameDialogBase.prototype);
GameOverDialog.prototype.constructor = GameOverDialog;
GameOverDialog.prototype.saveProgress = function () {
    var thisLevel = this.gameManager.levelId + 1;
    if (typeof window.localStorage != "undefined") {
        var numLevelComplete = window.localStorage.getItem("levelComplete");
        if (this.gameManager.levelId + 1 >= numLevelComplete) {
            window.localStorage.setItem("levelComplete", this.gameManager.levelId + 2);
        }
        numLevelComplete = window.localStorage.getItem("levelStar" + (this.gameManager.levelId + 1));
        if (this.gameManager.gui.starBar.starNum > numLevelComplete) {
            window.localStorage.setItem("levelStar" + (this.gameManager.levelId + 1), this.gameManager.gui.starBar.starNum);
        }
    }
};
GameOverDialog.prototype.playAction = function (evt) {
    this.gameManager.backround.unccccccache();
    if (this.gameManager.levelId + 1 < (new Jok.JokG).MAX_LEVEL) {
        var gameManager = new GameManager;
        gameManager.levelId = this.gameManager.levelId + 1;
        (new Jok.JokG).jokEngine.transitionScreen(gameManager, null, null);
    } else {
        this.gameManager.toLevelSelect();
    }
};
GameOverDialog.prototype.alphaEnd = function () {
    var starX = 200;
    var starY = -110;
    var delltaY = 40;
    var numStar = this.gameManager.gui.starBar.starNum;
    for (var i = 0; i < 3; i++) {
        if (this.idAdd == i) {
            var spr = new createjs.Sprite(Jok.JokG().animLoader.spriteSheet, "StarLevelComplete_mc");
            spr.x = -starX + starX * i;
            spr.y = starY;
            if (i == 0 || i == 2) {
                spr.y += delltaY;
            }
            spr.stop();
            if (i < numStar) {
                spr.currentAnimationFrame = 0;
                spr.scaleX = spr.scaleY = 0;
                createjs.Tween.get(spr).to({ scaleX: 1, scaleY: 1 }, 1500, createjs.Ease.elasticOut);
                console.log("new MusicManager().playStarGameOver();");
            } else {
                spr.currentAnimationFrame = 1;
                spr.alpha = 0;
                createjs.Tween.get(spr).to({ alpha: 1 }, 800, createjs.Ease.quadOut);
            }
            this.addChild(spr);
        }
    }
    this.idAdd++;
    if (this.idAdd < 3) {
        createjs.Tween.get(this).to({ x: this.x }, 500, createjs.Ease.linear).call(createjs.proxy(this.alphaEnd, this));
    }
};
HelpDialog = function (gameManager) {
    createjs.Container.call(this);
    this.gameManager = gameManager;
    this.finger = new createjs.Sprite(Jok.JokG().animLoader.spriteSheet, "helpHand_mc");
    this.addChild(this.finger);
    this.SCALE_BEGIN = 1.5;
    this.Y_BEGIN = 200;
    this.Y_END = 75;
    this.X_END = 200;
    this.finger.y = this.Y_BEGIN;
    this.finger.stop();
    this.finger.scaleX = this.finger.scaleY = this.SCALE_BEGIN;
    this.ALIEN_X_BEGIN = 1;
    this.ALIEN_Y_BEGIN = 4;
    this.alienHelp = this.gameManager.aeObjectManager.getObjectsByCell(this.ALIEN_X_BEGIN, this.ALIEN_Y_BEGIN)[0];
    this.finger.alpha = 0;
    this.tween = createjs.Tween.get(this.finger, { loop: true }).to({
        x: -this.X_END,
        y: this.Y_END,
        alpha: 1,
        scaleX: 1,
        scaleY: 1
    }, 500, createjs.Ease.quadOut).call(createjs.proxy(this.stepHelp_1, this)).wait(750).to({ x: this.X_END }, 900, createjs.Ease.quadInOut).wait(750).call(createjs.proxy(this.stepHelp_2, this)).to({
        scaleX: this.SCALE_BEGIN,
        scaleY: this.SCALE_BEGIN,
        y: this.Y_END + 50,
        alpha: 0
    }, 500, createjs.Ease.quadInOut).to({ x: 0, y: this.Y_BEGIN }, 1500, createjs.Ease.quadInOut);
};
HelpDialog.prototype = Object.create(createjs.Container.prototype);
HelpDialog.prototype.constructor = HelpDialog;
HelpDialog.prototype.stepHelp_1 = function () {
    this.finger.currentAnimationFrame = 1;
    this.checkDelete();
};
HelpDialog.prototype.stepHelp_2 = function () {
    this.finger.currentAnimationFrame = 0;
    this.checkDelete();
};
HelpDialog.prototype.checkDelete = function () {
    var ttttttt = false;
    if (this.alienHelp.cellX != this.ALIEN_X_BEGIN) {
        ttttttt = true;
    }
    if (this.gameManager.parent == null) {
        ttttttt = true;
    }
    if (ttttttt) {
        if (this.parent) {
            this.parent.removeChild(this);
        }
        createjs.Tween.removeTweens(this.finger);
    }
};
LevelSelectMenu = function () {
    Jok.JokState.call(this);
};
LevelSelectMenu.prototype = Object.create(Jok.JokState.prototype);
LevelSelectMenu.prototype.constructor = LevelSelectMenu;
LevelSelectMenu.prototype.create = function () {
    this.MAX_LEVEL_ID = Math.floor(((new Jok.JokG).MAX_LEVEL - 1) / 20);
    this._nowLevelId = 0;
    var background = new createjs.Sprite(Jok.JokG().animLoader.spriteSheet, "MenuBack_1_mc");
    this.addChild(background);
    this.buttonBack = new MyButtonBase(createjs.proxy(this.backsAction, this), new createjs.Point(-(new Jok.JokG).width / 2 + 64, 290), new createjs.Point(1, 1), "buttonBase_mc");
    this.buttonBack.initUp("ButtonBack_mc");
    this.addChild(this.buttonBack);
    this.buttonLevelBack = new MyButtonBase(createjs.proxy(this.buttonLevelBackAction, this), new createjs.Point(-(new Jok.JokG).width / 2 + 40, 0), new createjs.Point(1, 1), "ButtonLevel_mc");
    this.buttonLevelBack.sprDown.stop();
    this.buttonLevelBack.sprDown.currentAnimationFrame = 1;
    this.addChild(this.buttonLevelBack);
    this.buttonLevelNext = new MyButtonBase(createjs.proxy(this.buttonLevelNextAction, this), new createjs.Point(-this.buttonLevelBack.x, 0), new createjs.Point(-1, 1), "ButtonLevel_mc");
    this.buttonLevelNext.sprDown.stop();
    this.addChild(this.buttonLevelNext);
    this.drawLevelButtons();
};
LevelSelectMenu.prototype.buttonLevelBackAction = function (evt) {
    if (this._nowLevelId <= 0) {
        return;
    }
    this.buttonLevelNext.sprDown.currentAnimationFrame = 0;
    this._nowLevelId--;
    if (this._nowLevelId == 0) {
        this.buttonLevelBack.sprDown.currentAnimationFrame = 1;
    }
    this.drawLevelButtons();
};
LevelSelectMenu.prototype.buttonLevelNextAction = function (evt) {
    if (this._nowLevelId >= this.MAX_LEVEL_ID) {
        return;
    }
    this.buttonLevelBack.sprDown.currentAnimationFrame = 0;
    this._nowLevelId++;
    if (this._nowLevelId == this.MAX_LEVEL_ID) {
        this.buttonLevelNext.sprDown.currentAnimationFrame = 1;
    }
    this.drawLevelButtons();
};
LevelSelectMenu.prototype.backsAction = function (evt) {
    (new Jok.JokG).jokEngine.transitionScreen(new MainMenu, null, null);
};
LevelSelectMenu.prototype.drawLevelButtons = function () {
    if (this._levelButtonsContainer) {
        this._levelButtonsContainer.removeAllChildren();
    } else {
        this._levelButtonsContainer = new createjs.Container;
        this.addChild(this._levelButtonsContainer);
    }
    var yBegin = 80;
    var yTo = 712 - yBegin - 170;
    yTo = yTo / 4;
    var xBegin = 140;
    var xTo = ((new Jok.JokG).width - xBegin - xBegin) / 3;
    xBegin -= (new Jok.JokG).width / 2;
    yBegin -= 712 / 2;
    var levelAdd = this._nowLevelId * 20 + 1;
    var numLevelComplete = 1;
    if (typeof window.localStorage != "undefined") {
        numLevelComplete = window.localStorage.getItem("levelComplete");
    }
    for (var i = 0; i < 5; i++) {
        for (var j = 0; j < 4; j++) {
            if ((new Jok.JokG).MAX_LEVEL >= levelAdd) {
                var levelButton = new LevelButton(new createjs.Point(xBegin + xTo * j, yBegin + yTo * i), new createjs.Point(1, 1), levelAdd, numLevelComplete >= levelAdd);
                this._levelButtonsContainer.addChild(levelButton);
            }
            levelAdd++;
        }
    }
};
LevelSelectMenu.prototype.drawTotalScore = function () {
    if (typeof window.localStorage != "undefined") {
    } else {
        return;
    }
    var allScore = 0;
    for (var i = 0; i < (new Jok.JokG).MAX_LEVEL; i++) {
        allScore += parseInt(window.localStorage.getItem("levelScore" + i));
    }
    if (allScore > 0) {
        var levelText = new createjs.BitmapText((new Jok.JokG).text.getText("totalScore") + " " + allScore, (new Jok.JokG).animLoader.fontSheet);
        levelText.scaleX = levelText.scaleY = 0.5;
        levelText.y = -340;
        levelText.x = -levelText.getBounds().width / 2 * levelText.scaleX;
        this.addChild(levelText);
    }
};
MainMenu = function () {
    Jok.JokState.call(this);
};
MainMenu.prototype = Object.create(Jok.JokState.prototype);
MainMenu.prototype.constructor = MainMenu;
MainMenu.prototype.create = function () {
    var background = new createjs.Sprite(Jok.JokG().animLoader.spriteSheet, "MenuBack_1_mc");
    this.addChild(background);
    this.buttonMusic = new SoundButton(new createjs.Point(245, 288), new createjs.Point(1, 1));
    this.addChild(this.buttonMusic);
    this.buttonMore = new MyButtonBase(btMoreGame, new createjs.Point(-this.buttonMusic.x, this.buttonMusic.y), new createjs.Point(1, 1), "buttonBase_mc");
    this.buttonMore.initUp("ButtonMoreGames_mc");
    if (showSGLinks) {
        this.addChild(this.buttonMore);
    }
    var titleSpr = new createjs.Sprite(Jok.JokG().animLoader.spriteSheet, "MenuTitle_1_mc");
    titleSpr.y = -208;
    this.addChild(titleSpr);
    titleSpr.scaleX = titleSpr.scaleY = 0;
    createjs.Tween.get(titleSpr).to({ scaleX: 1, scaleY: 1 }, 2500, createjs.Ease.elasticOut);
    this.eventPlay = createjs.proxy(this.playAction, this);
    this.buttonPlay = new MyButtonBase(this.eventPlay, new createjs.Point(0, 27), new createjs.Point(1, 1), "MainMenuButton_1_mc");
    this.buttonPlay.initUp("ButtonPlay_mc");
    this.addChild(this.buttonPlay);
    this.buttonPlay.scaleX = this.buttonPlay.scaleY = 0;
    createjs.Tween.get(this.buttonPlay).to({ scaleX: 1, scaleY: 1 }, 1800, createjs.Ease.elasticOut);
};
MainMenu.prototype.onButton = function () {
    this.buttonCredits.onWork();
    this.buttonPlay.onWork();
    this.buttonMusic.onWork();
    this.buttonMore.onWork();
};
MainMenu.prototype.offButton = function () {
    this.buttonCredits.offWork();
    this.buttonPlay.offWork();
    this.buttonMusic.offWork();
    this.buttonMore.offWork();
};
MainMenu.prototype.moreAction = function (evt) {
    (new Jok.JokG).openUrl();
};
MainMenu.prototype.creditsAction = function (evt) {
    this.addChild(new CreditsDialog(this));
};
MainMenu.prototype.playAction = function (evt) {
    (new Jok.JokG).jokEngine.transitionScreen(new LevelSelectMenu, null, null);
};
PauseDialog = function (gameManager) {
    GameDialogBase.call(this, gameManager);
    var button = new MyButtonBase(createjs.proxy(this.playAction, this), new createjs.Point(0, -81), new createjs.Point(0.8, 0.8), "MainMenuButton_1_mc");
    button.initUp("ButtonPlay_mc");
    this.addChild(button);
    var scaleTT = 1.2;
    var posY = 100;
    var posX = 100;
    button = new MyButtonBase(createjs.proxy(this.backAction, this), new createjs.Point(-posX * 2, posY), new createjs.Point(scaleTT, scaleTT), "buttonBase_mc");
    button.initUp("ButtonBack_mc");
    this.addChild(button);
    var tttttttt = 0.85;
    button = new MyButtonBase(createjs.proxy(this.restartAction, this), new createjs.Point(-posX * tttttttt, posY + 90), new createjs.Point(scaleTT, scaleTT), "buttonBase_mc");
    button.initUp("buttonRestart_mc");
    this.addChild(button);
    button = new MyButtonBase(btMoreGame, new createjs.Point(posX * tttttttt, posY + 90), new createjs.Point(scaleTT, scaleTT), "buttonBase_mc");
    button.initUp("ButtonMoreGames_mc");
    if (showSGLinks) {
        this.addChild(button);
    }
    button = new SoundButton(new createjs.Point(2 * posX, posY), new createjs.Point(scaleTT, scaleTT));
    this.addChild(button);
};
PauseDialog.prototype = Object.create(GameDialogBase.prototype);
PauseDialog.prototype.constructor = PauseDialog;
PauseDialog.prototype.playAction = function (evt) {
    createjs.Tween.get(this).to({ alpha: 0 }, 400, createjs.Ease.quadOut).call(createjs.proxy(this.playActionEnd, this));
};
PauseDialog.prototype.playActionEnd = function (evt) {
    if (this.parent) {
        this.parent.removeChild(this);
    }
    this.onAll();
    this.gameManager.work = true;
};
Jok.JokAnimLoader = function () {
    this.data = null;
    this.fontSheet = {};
};
Jok.JokAnimLoader.prototype.constructor = Jok.JokAnimLoader;
Jok.JokAnimLoader.prototype.loadAnimStep_1_images = function (jsonFrameDatas, images) {
    this.spriteSheetData = { framerate: 24, images: [], frames: [], animations: {} };
    for (var i = 0; i < images.length; i++) {
        this.spriteSheetData.images.push(images[i]);
    }
    this.namesFrames = {};
    for (i = 0; i < jsonFrameDatas.length; i++) {
        var id = 0;
        while (true) {
            var rect = this.getFrameDataJson(jsonFrameDatas[i], id);
            if (rect != null) {
                this.spriteSheetData.frames.push([rect.x, rect.y, rect.w, rect.h, i, rect.w * 0.5, rect.h * 0.5]);
                rect.name = rect.name.substr(0, rect.name.length - 4);
                this.namesFrames[rect.name] = this.spriteSheetData.frames.length - 1;
            } else {
                break;
            }
            id++;
        }
    }
    for (var nameFrame in this.namesFrames) {
        var nameAnim = this.getNameAnim(nameFrame);
        if (!this.spriteSheetData.animations[nameAnim]) {
            var numAdd = nameFrame.lastIndexOf("_");
            this.spriteSheetData.animations[nameAnim] = [this.namesFrames[nameFrame]];
        }
    }
};
Jok.JokAnimLoader.prototype.loadAnimStep_2_images = function () {
    var xynta = {};
    for (var nameFrame in this.namesFrames) {
        var nameAnim = this.getNameAnim(nameFrame);
        if (!xynta[nameAnim]) {
            var numAdd = nameFrame.lastIndexOf("_");
            xynta[nameAnim] = 0;
            if (numAdd < 0) {
            } else {
                this.addAnimFromName(nameAnim, nameFrame.length - numAdd - 1);
            }
        }
    }
};
Jok.JokAnimLoader.prototype.addAnimation_step_1 = function (animName) {
    this.spriteSheetData.animations[animName] = [3];
};
Jok.JokAnimLoader.prototype.addAnimation_step_2 = function (animName, frames) {
    var framesTT = [];
    for (var i = 0; i < frames.length; i++) {
        framesTT.push(this.namesFrames[frames[i]]);
    }
    this.spriteSheet.getAnimation(animName).frames = framesTT;
};
Jok.JokAnimLoader.prototype.setFramePivotXY = function (nameFrame, x, y) {
    x = -x;
    y = -y;
    this.spriteSheetData.frames[this.namesFrames[nameFrame]][5] = x;
    this.spriteSheetData.frames[this.namesFrames[nameFrame]][6] = this.spriteSheetData.frames[this.namesFrames[nameFrame]][3] - y;
};
Jok.JokAnimLoader.prototype.endLoadAnim = function () {
    this.spriteSheet = new createjs.SpriteSheet(this.spriteSheetData);
};
Jok.JokAnimLoader.prototype.getNameAnim = function (nameFrame) {
    var nameTT = nameFrame.lastIndexOf("_");
    if (nameTT < 0) {
        return nameFrame;
    }
    return nameFrame.substr(0, nameTT);
};
Jok.JokAnimLoader.prototype.addAnimFromName = function (nameAnim, numAdd) {
    var framesTT = [];
    var idFrame = 0;
    while (true) {
        var nameFrame = this.getFrameName_1(nameAnim, idFrame, numAdd);
        if (this.namesFrames[nameFrame] != null) {
            framesTT.push(this.namesFrames[nameFrame]);
        } else {
            if (idFrame > 3) {
                break;
            }
        }
        idFrame++;
    }
    if (framesTT.length == 0) {
        console.log("error name anim 0 frame = " + nameAnim);
    }
    this.spriteSheet.getAnimation(nameAnim).frames = framesTT;
};
Jok.JokAnimLoader.prototype.getFrameName_1 = function (nameFrame, numFrame, len) {
    var name = "000" + numFrame;
    name = name.substr(name.length - len, len);
    return nameFrame + "_" + name + "";
};
Jok.JokAnimLoader.prototype.getFrameDataJson = function (jsonFrameData, idFrame) {
    if (jsonFrameData.frames[idFrame]) {
        return {
            x: parseInt(jsonFrameData.frames[idFrame].frame.x),
            y: parseInt(jsonFrameData.frames[idFrame].frame.y),
            w: parseInt(jsonFrameData.frames[idFrame].frame.w),
            h: parseInt(jsonFrameData.frames[idFrame].frame.h),
            name: jsonFrameData.frames[idFrame].filename
        };
    }
    return null;
};
Jok.JokAnimLoader.prototype.loadAnim = function (xmlArchorData, jsonFrameDatas, images) {
    console.log("xmlArchorData = " + xmlArchorData);
    console.log("jsonFrameData = " + jsonFrameDatas);
    console.log("image = " + images);
    var allNode = 0;
    var lastName;
    console.log("Jok.JokAnimLoader.prototype.loadAnim  1");
    this.spriteSheetData = { framerate: 24, images: [], frames: [], animations: {} };
    for (var i = 0; i < images.length; i++) {
        this.spriteSheetData.images.push(images[i]);
    }
    var idFrame = 0;
    console.log("Jok.JokAnimLoader.prototype.loadAnim  2");
    while (true) {
        var parametr = xmlArchorData.getElementsByTagName("Parametr")[allNode];
        if (parametr) {
            lastName = parametr.getAttribute("n");
            var oneFrameNum = 0;
            while (true) {
                var oneFrame = parametr.getElementsByTagName("info")[oneFrameNum];
                if (oneFrame) {
                    var xStr = -parseInt(oneFrame.getAttribute("x"));
                    var yStr = -parseInt(oneFrame.getAttribute("y"));
                    for (var i = 0; i < jsonFrameDatas.length; i++) {
                        var rect = this.getFrameData(jsonFrameDatas[i], this.getFrameName(lastName, oneFrameNum));
                        if (rect != null) {
                            this.spriteSheetData.frames.push([rect.x, rect.y, rect.w, rect.h, i, xStr, rect.h - yStr]);
                        }
                    }
                    oneFrameNum++;
                    idFrame++;
                } else {
                    break;
                }
            }
            this.spriteSheetData.animations[lastName] = [idFrame - oneFrameNum, idFrame - 1];
            allNode++;
        } else {
            break;
        }
    }
    console.log("Jok.JokAnimLoader.prototype.loadAnim  3");
    this.spriteSheet = new createjs.SpriteSheet(this.spriteSheetData);
    console.log("Jok.JokAnimLoader.prototype.loadAnim  4");
};
Jok.JokAnimLoader.prototype.getFrameName = function (nameFrame, numFrame) {
    var name = "000" + numFrame;
    name = name.substr(name.length - 3, 3);
    return nameFrame + "_" + name + ".png";
};
Jok.JokAnimLoader.prototype.getFrameData = function (jsonFrameData, nameFrame) {
    var i = 0;
    while (jsonFrameData.frames[i]) {
        if (jsonFrameData.frames[i].filename == nameFrame) {
            return {
                x: parseInt(jsonFrameData.frames[i].frame.x),
                y: parseInt(jsonFrameData.frames[i].frame.y),
                w: parseInt(jsonFrameData.frames[i].frame.w),
                h: parseInt(jsonFrameData.frames[i].frame.h)
            };
        }
        i++;
    }
    return null;
};
Jok.JokAnimLoader.prototype.loadBitmapFont = function (xmlFontData, image, nameFont) {
    var dataCharId = {};
    dataCharId[65] = "A";
    dataCharId[66] = "B";
    dataCharId[67] = "C";
    dataCharId[68] = "D";
    dataCharId[69] = "E";
    dataCharId[70] = "F";
    dataCharId[71] = "G";
    dataCharId[72] = "H";
    dataCharId[73] = "I";
    dataCharId[74] = "J";
    dataCharId[75] = "K";
    dataCharId[76] = "L";
    dataCharId[77] = "M";
    dataCharId[78] = "N";
    dataCharId[79] = "O";
    dataCharId[80] = "P";
    dataCharId[81] = "Q";
    dataCharId[82] = "R";
    dataCharId[83] = "S";
    dataCharId[84] = "T";
    dataCharId[85] = "U";
    dataCharId[86] = "V";
    dataCharId[87] = "W";
    dataCharId[88] = "X";
    dataCharId[89] = "Y";
    dataCharId[90] = "Z";
    dataCharId[47] = "/";
    dataCharId[48] = "0";
    dataCharId[49] = "1";
    dataCharId[50] = "2";
    dataCharId[51] = "3";
    dataCharId[52] = "4";
    dataCharId[53] = "5";
    dataCharId[54] = "6";
    dataCharId[55] = "7";
    dataCharId[56] = "8";
    dataCharId[57] = "9";
    var allNode = 0;
    this.fontData = { images: [image], frames: [], animations: {} };
    var idFrame = 0;
    while (true) {
        var parametr = xmlFontData.getElementsByTagName("chars")[0];
        parametr = parametr.getElementsByTagName("char")[allNode];
        if (parametr) {
            var id = parseInt(parametr.getAttribute("id"));
            var x = parseInt(parametr.getAttribute("x"));
            var y = parseInt(parametr.getAttribute("y"));
            var width = parseInt(parametr.getAttribute("width"));
            var height = parseInt(parametr.getAttribute("height"));
            var xoffset = parseInt(parametr.getAttribute("xoffset"));
            var yoffset = parseInt(parametr.getAttribute("yoffset"));
            if (width > 0 && height > 0) {
                xoffset = yoffset = 0;
                this.fontData.frames.push([x, y, width, height, 0, xoffset, yoffset]);
                this.fontData.animations[dataCharId[id]] = { "frames": [idFrame] };
                idFrame++;
            }
            allNode++;
        } else {
            break;
        }
    }
    console.log("allNode = " + allNode);
    this.fontSheet[nameFont] = new createjs.SpriteSheet(this.fontData);
};
Jok.JokEngine = function (nameCanvas) {
    this.state = null;
    (new Jok.JokG).init(nameCanvas, this);
    this.stage = (new Jok.JokG).stage;
    this.fpsLabel = new createjs.Text("-- fps", "bold 14px Arial", "#000");
    this.fpsLabel.x = 10 - (new Jok.JokG).width / 2;
    this.fpsLabel.y = 20 - 712 / 2;
    this.delta = 0;
};
Jok.JokEngine.prototype.constructor = Jok.JokEngine;
Jok.JokEngine.prototype.initState = function (aState) {
    this.switchState(aState);
    if (!createjs.Ticker.hasEventListener("tick")) {
        this.tickEvent = createjs.proxy(this.tick, this);
        createjs.Ticker.on("tick", this.tickEvent);
    }
};
Jok.JokEngine.prototype.transitionScreen = function (aState, funcBegin, funcEnd) {
    (new Jok.JokTransitionScreenBase).init(funcBegin, funcEnd, aState, 1000);
};
Jok.JokEngine.prototype.switchState = function (aState) {
    if (this.state) {
        this.stage.removeChild(this.state);
        this.state.dispose();
    }
    this.state = aState;
    this.state.create();
    this.stage.addChildAt(this.state, 0);
};
Jok.JokEngine.prototype.tick = function (event) {
    this.delta = event.delta / 1000;
    this.state.update();
    this.fpsLabel.text = Math.round(createjs.Ticker.getMeasuredFPS()) + " fps";
    this.stage.update(event);
};
Jok.JokG = function () {
    var callee = arguments.callee;
    if (callee.instance) {
        return callee.instance;
    }
    this.queue = new createjs.LoadQueue(true, "assets/");
    this.animLoader = new Jok.JokAnimLoader;
    this._idNow = 0;
    this.text = new Jok.JokTextData;
    callee.instance = this;
};
Jok.JokG.prototype.constructor = Jok.JokG;
Jok.JokG.prototype.getNewid = function () {
    return this._idNow++;
};
Jok.JokG.prototype.init = function (nameCanvas, jokEngine) {
    this.canvas = this.createGameCanvas(nameCanvas);
    this.stage = new createjs.Stage(this.canvas);
    this.stage.autoClear = false;
    this.stage.enableMouseOver(10);
    this.jokEngine = jokEngine;
    this.resize();
    var resizeFunc = createjs.proxy(this.resize, this);
    window.addEventListener("resize", resizeFunc, false);
    window.addEventListener("viewportchange", resizeFunc, false);
    window.addEventListener("viewportready", resizeFunc, false);
    SG_Hooks.setOrientationHandler(resizeFunc);
    SG_Hooks.setResizeHandler(resizeFunc);
    createjs.Touch.enable(this.stage);
    createjs.Ticker.setFPS(30);
    this.fonts = {};
    console.log("this.jokEngine = " + this.jokEngine);
    this.GAME_WIDTH = 640;
    this.GAME_HEIGHT = 712;
};
Jok.JokG.prototype.createGameCanvas = function (nameCanvas) {
    var container = document.getElementById(nameCanvas);
    return container;
};
Jok.JokG.prototype.addFont = function (nameIdFont, nameFont) {
    this.fonts[nameIdFont] = nameFont;
};
Jok.JokG.prototype.resize = function () {
    var GAME_WIDTH = 640;
    var GAME_MIN_HEIGHT = 712;
    var GAME_MAX_HEIGHT = 960;
    if (this.isPC()) {
        GAME_MIN_HEIGHT = 960;
    }
    var widthWindow = window.innerWidth;
    var heightWindow = window.innerHeight;
    var portainLockCanvas = document.getElementById("portraitLock");
    if (!this.isLandscape()) {
        portainLockCanvas.style.display = "none";
        (new Jok.JokG).canvas.style.display = "block";
    } else {
        portainLockCanvas.style.display = "block";
        (new Jok.JokG).canvas.style.display = "none";
    }
    var scale = Math.min(widthWindow / GAME_WIDTH, heightWindow / GAME_MIN_HEIGHT);
    var canvas = (new Jok.JokG).canvas;
    canvas.width = GAME_WIDTH;
    canvas.height = Math.min(Math.floor(heightWindow / scale), GAME_MAX_HEIGHT);
    var scaleWidth = Math.floor(canvas.width * scale);
    var scaleHeight = Math.floor(canvas.height * scale);
    canvas.style.width = scaleWidth + "px";
    canvas.style.height = scaleHeight + "px";
    this.width = this.canvas.width;
    this.height = this.canvas.height;
    this.stage.x = this.width / 2;
    this.stage.y = this.height / 2;
    var parent = canvas.parentElement;
    parent.style.width = scaleWidth + "px";
    parent.style.height = scaleHeight + "px";
    var v = (widthWindow - scaleWidth) / 2;
    parent.style.left = v + "px";
    var w = (heightWindow - scaleHeight) / 2;
    parent.style.top = w + "px";
};
Jok.JokG.prototype.isPC = function () {
    return !(createjs.Sound.BrowserDetect.isIOS || (createjs.Sound.BrowserDetect.isAndroid || createjs.Sound.BrowserDetect.isBlackberry));
};
Jok.JokG.prototype.isLandscape = function () {
    if (createjs.Sound.BrowserDetect.isIOS || (createjs.Sound.BrowserDetect.isAndroid || createjs.Sound.BrowserDetect.isBlackberry)) {
        return window.innerWidth > window.innerHeight && window.innerWidth <= 640;
    }
    return false;
};
Jok.JokG.prototype.openUrl = function (url) {
    SG.redirectToPortal();
};
Jok.JokTextData = function () {
    this.text = null;
    this._noText = "textNotFound";
    this.setLang("fr");
    this.fontName = {};
};
Jok.JokTextData.prototype.constructor = Jok.JokTextData;
Jok.JokTextData.prototype.init = function (jsonText) {
    this.text = jsonText;
    console.log(this.text);
};
Jok.JokTextData.prototype.setLang = function (lang) {
    console.log("ok.JokTextData.prototype.setLang = " + lang);
    this._lang = lang;
    this.textsJson = "texts_" + this._lang;
};
Jok.JokTextData.prototype.getText = function (idText) {
    if (this.text != null) {
        var i = 0;
        while (true) {
            var textTT = this.text[this.textsJson][i];
            if (textTT) {
                if (textTT.id == idText) {
                    return textTT.text;
                }
            } else {
                break;
            }
            i++;
        }
        return this._noText;
    }
    return "this.text=null";
};
Jok.JokMath = function () {
};
Jok.JokMath.prototype.constructor = Jok.JokMath;
Jok.JokMath.getRandomNumber = function (min, max) {
    return Math.random() * (max - min) + min;
};
Jok.JokMath.getRandomInt = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
Jok.JokMath.getRandomInt = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
Jok.JokMath.linesCross = function (aLineX1, aLineY1, aLineX2, aLineY2, bLineX1, bLineY1, bLineX2, bLineY2) {
    var d = (aLineX2 - aLineX1) * (bLineY1 - bLineY2) - (bLineX1 - bLineX2) * (aLineY2 - aLineY1);
    if (d == 0) {
        return false;
    }
    var d1 = (bLineX1 - aLineX1) * (bLineY1 - bLineY2) - (bLineX1 - bLineX2) * (bLineY1 - aLineY1);
    var d2 = (aLineX2 - aLineX1) * (bLineY1 - aLineY1) - (bLineX1 - aLineX1) * (aLineY2 - aLineY1);
    var t1 = d1 / d;
    var t2 = d2 / d;
    return t1 >= 0 && (t1 <= 1 && (t2 >= 0 && t2 <= 1)) ? true : false;
};
Jok.JokMath.distanceSQR = function (x1, y1, x2, y2) {
    var dx = x2 - x1;
    var dy = y2 - y1;
    return dx * dx + dy * dy;
};
Jok.JokMath.distance = function (x1, y1, x2, y2) {
    var dx = x2 - x1;
    var dy = y2 - y1;
    return Math.sqrt(dx * dx + dy * dy);
};
Jok.JokTransitionScreenBase = function () {
    createjs.Container.call(this);
    this.shape = new createjs.Shape;
    this.shape.x = -(new Jok.JokG).width / 2;
    this.shape.y = -(new Jok.JokG).height / 2;
    this.shape.graphics.beginFill("rgba(255,255,255,1)").rect(0, 0, (new Jok.JokG).width, (new Jok.JokG).height);
    this.addChild(this.shape);
    this.eventTween = createjs.proxy(this.endTeen, this);
};
Jok.JokTransitionScreenBase.prototype = Object.create(createjs.Container.prototype);
Jok.JokTransitionScreenBase.prototype.constructor = Jok.JokTransitionScreenBase;
Jok.JokTransitionScreenBase.prototype.init = function (FBegin, FEnd, state, time) {
    this._state = state;
    this._funcBegin = FBegin;
    this._funcEnd = FEnd;
    (new Jok.JokG).stage.addChild(this);
    this.alpha = 0;
    this._time = time / 2;
    createjs.Tween.get(this).to({ alpha: 1 }, this._time, createjs.Ease.quadOut).call(this.eventTween);
};
Jok.JokTransitionScreenBase.prototype.endTeen = function (evt) {
    if (this.alpha > 0.9) {
        createjs.Tween.get(this).to({ alpha: 0 }, this._time, createjs.Ease.quadOut).call(this.eventTween);
        if (this._funcBegin != null) {
            this._funcBegin();
        }
        (new Jok.JokG).jokEngine.switchState(this._state);
    } else {
        (new Jok.JokG).stage.removeChild(this);
        if (this._funcEnd != null) {
            this._funcEnd();
        }
    }
};