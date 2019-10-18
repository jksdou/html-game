function bacplay() {}

function saveData() {
    if ("undefined" != typeof Storage) {
        for (var e = "", t = 0; t < aLevelStore.length; t++) e += aLevelStore[t], t < aLevelStore.length - 1 && (e += ",");
        localStorage.setItem("bubblefishBuddiesData", e)
    }
}

function ananss() {
    if (GameAPI.Branding.getLogo().image) {
        gameState = "splash", resizeCanvas(), splash = new Elements.Splash(assetLib.getData("splash"), canvas.width, canvas.height), userInput.addHitArea("logoClick", bacplay, null, "rect", {
            aRect: [0, 0, canvas.width, canvas.height]
        }, !0), previousTime = (new Date).getTime(), updateSplashScreenEvent()
    } else {
        initStartScreen()
    }
}

function initStartScreen() {
    gameState = "start", 1 == audioType && music.volume(.25), userInput.removeHitArea("logoClick"), levelScore = 0, background = new Elements.Background(assetLib.getData("background"), canvas.width, canvas.height), userInput.addHitArea("mute", butEventHandler, null, "rect", {
        aRect: [337, 0, canvas.width, 46]
    }, !0);
    var e = {
            oImgData: assetLib.getData("uiButs"),
            aPos: [canvas.width / 2, 360],
            scale: 1,
            type: 1,
            frame: 0
        },
        t = {
            oImgData: assetLib.getData("uiButs"),
            aPos: [canvas.width / 2 + 60, 480],
            scale: 1,
            type: 1,
            frame: 1
        },
        n = {
            oImgData: assetLib.getData("uiButs"),
            aPos: [canvas.width / 2 - 60, 480],
            scale: 1,
            type: 1,
            frame: 7
        };
    oLogoBut = {
        oImgData: assetLib.getData("logo"),
        aPos: [canvas.width / 2, 42],
        scale: getScaleImageToMax(assetLib.getData("logo"), [0, 0]),
        type: 0
    }, userInput.addHitArea("levelSelect", butEventHandler, null, "image", e), userInput.addHitArea("moreGames", butEventHandler, null, "image", t), userInput.addHitArea("logoClick", butEventHandler, null, "image", oLogoBut), userInput.addHitArea("credits", butEventHandler, null, "image", n);
    var r = new Array(e, t, oLogoBut, n);
    panel = new Elements.Panel(assetLib.getData("panels"), assetLib.getData("tutorials"), assetLib.getData("numbers"), assetLib.getData("goldFish"), gameState, r, canvas.width, canvas.height), panel.startTween1(), aBubbles = new Array;
    for (var i = 0; 6 > i; i++) {
        var s = new Elements.Bubble(assetLib.getData("bubble"), 0, aLevelData[0][0], canvas.width, canvas.height);
        s.x = Math.random() * canvas.width, s.y = Math.random() * canvas.height, aBubbles.push(s)
    }
    previousTime = (new Date).getTime(), updateStartScreenEvent()
}

function initLevelSelect() {
    gameState = "levelSelect";
    for (var e = new Array, t = 0; 12 > t; t++) {
        var n = 123 * (t % 3) + 68,
            r = 100 * Math.floor(t / 3) + 93,
            i = {
                oImgData: assetLib.getData("levelButs"),
                aPos: [n, r],
                scale: 1,
                type: 1,
                frame: aLevelStore[2 * (t + 12 * levelButsPage)]
            };
        1 != aLevelStore[2 * (t + 12 * levelButsPage)] && userInput.addHitArea("startLevel", butEventHandler, {
            id: t + 12 * levelButsPage
        }, "image", i), e.push(i)
    }
    var s = getScaleImageToMax(assetLib.getData("logo"), [0, 0]);
    oLogoBut = {
        oImgData: assetLib.getData("logo"),
        aPos: getCentreFromTopLeft([0, 0], assetLib.getData("logo"), s),
        scale: s,
        type: 0
    };
    var o = {
            oImgData: assetLib.getData("uiButs"),
            aPos: [73, 500],
            scale: 1,
            type: 1,
            frame: 5
        },
        u = {
            oImgData: assetLib.getData("uiButs"),
            aPos: [canvas.width / 2, 500],
            scale: 1,
            type: 1,
            frame: 6
        };
    if (userInput.addHitArea("logoClick", butEventHandler, null, "image", oLogoBut), userInput.addHitArea("prevScreen", butEventHandler, null, "image", o), userInput.addHitArea("clearData", butEventHandler, null, "image", u), e.push(oLogoBut, o, u), 2 > levelButsPage) {
        var a = {
            oImgData: assetLib.getData("uiButs"),
            aPos: [310, 500],
            scale: 1,
            type: 1,
            frame: 4
        };
        userInput.addHitArea("nextScreen", butEventHandler, null, "image", a), e.push(a)
    }
    panel = new Elements.Panel(assetLib.getData("panels"), assetLib.getData("tutorials"), assetLib.getData("numbers"), assetLib.getData("goldFish"), gameState, e, canvas.width, canvas.height), panel.oScoreData = {
        levelButsPage: levelButsPage
    }, panel.startTween2(), previousTime = (new Date).getTime(), updateLevelSelectEvent()
}

function initCreditsScreen() {
    gameState = "credits";
    var e = {
        oImgData: assetLib.getData("uiButs"),
        aPos: [73, 500],
        scale: 1,
        type: 1,
        frame: 5
    };
    userInput.addHitArea("backFromCredits", butEventHandler, null, "image", e);
    var t = new Array(e);
    panel = new Elements.Panel(assetLib.getData("panels"), assetLib.getData("tutorials"), assetLib.getData("numbers"), assetLib.getData("goldFish"), gameState, t, canvas.width, canvas.height), panel.startTween3(), aBubbles = new Array, previousTime = (new Date).getTime(), updateCreditsScreenEvent()
}

function initGame() {
    gameState = "game", 1 == audioType && music.volume(.5), userInput.addHitArea("replayFromInGame", butEventHandler, null, "rect", {
        aRect: [249, 0, 292, 46]
    }, !0), userInput.addHitArea("pause", butEventHandler, null, "rect", {
        aRect: [292, 0, 337, 46]
    }, !0), userInput.addHitArea("shoot", butEventHandler, null, "rect", {
        aRect: [0, 50, canvas.width, 460]
    }, !0), userInput.addHitArea("moveBase", butEventHandler, {
        multiTouch: !0,
        isDraggable: !0
    }, "rect", {
        aRect: [0, 460, canvas.width, 550]
    }, !0), userInput.addKey("moveRightEvent", butEventHandler, null, 39), userInput.addKey("moveLeftEvent", butEventHandler, null, 37);
    var e = getScaleImageToMax(assetLib.getData("logo"), [0, 0]);
    oLogoBut = {
        oImgData: assetLib.getData("logo"),
        aPos: getCentreFromTopLeft([0, 0], assetLib.getData("logo"), e),
        scale: e,
        type: 0
    }, userInput.addHitArea("logoClick", butEventHandler, null, "image", oLogoBut), aBubbles = new Array, aFishes = new Array, aLogs = new Array, fishCaught = 0, levelThrows = 0, levelScore = bonusScore = 0, bubbleTarg = 0;
    for (var t = new Array({
        type: "line",
        p0: {
            x: -25,
            y: -300
        },
        p1: {
            x: -25,
            y: 550
        },
        subType: "normal"
    }, {
        type: "line",
        p0: {
            x: 408,
            y: -300
        },
        p1: {
            x: 408,
            y: 550
        },
        subType: "normal"
    }), n = 0; n < aLevelData[levelNum].length; n++)
        if ("bubble" == aLevelData[levelNum][n].type) {
            var r = new Elements.Bubble(assetLib.getData("bubble"), n, aLevelData[levelNum][n], canvas.width, canvas.height);
            aBubbles.push(r), "ice" == aLevelData[levelNum][n].subType && t.push({
                p0: aLevelData[levelNum][n].p0,
                p1: {
                    x: aLevelData[levelNum][n].p0.x + 1,
                    y: aLevelData[levelNum][n].p0.y
                },
                b: 1,
                f: 1,
                id: n,
                subType: aLevelData[levelNum][n].subType
            }), "jellyfish" != aLevelData[levelNum][n].subType && bubbleTarg++
        } else if ("line" == aLevelData[levelNum][n].type && (t.push({
        p0: aLevelData[levelNum][n].p0,
        p1: aLevelData[levelNum][n].p1,
        b: 1,
        f: 1,
        id: -1,
        subType: aLevelData[levelNum][n].subType
    }), "log" == aLevelData[levelNum][n].subType)) {
        var i = new Elements.Log(assetLib.getData("log"), aLevelData[levelNum][n], canvas.width, canvas.height);
        aLogs.push(i)
    }
    physics2D = new Utils.Physics2D(t, defrostBubble), hud = new Elements.Hud(assetLib.getData("hud"), assetLib.getData("numbers"), canvas.width, canvas.height, getTotalScore(), levelNum + 1), base = new Elements.Base(assetLib.getData("base"), {
        x: canvas.width / 2,
        y: 490
    }, canvas.width, canvas.height), addFish(), tutorialIsOn = !1;
    for (var n = 0; n < aTutorials.length; n++) aTutorials[n].levelNum == levelNum && (panel = new Elements.Panel(assetLib.getData("panels"), assetLib.getData("tutorials"), assetLib.getData("numbers"), assetLib.getData("goldFish"), aTutorials[n].panelType, null, canvas.width, canvas.height), panel.startTween2(), tutorialIsOn = !0);
    previousTime = (new Date).getTime(), updateGameEvent()
}

function butEventHandler(e, t) {
    switch (e) {
        case "langSelect":
            console.log(t.lang), curLang = t.lang, ctx.clearRect(0, 0, canvas.width, canvas.height), userInput.removeHitArea("langSelect"), initLoadAssets();
            break;
        case "levelSelect":
            playSound("click"), userInput.removeHitArea("levelSelect"), userInput.removeHitArea("moreGames"), userInput.removeHitArea("logoClick"), userInput.removeHitArea("credits"), initLevelSelect();
            break;
        case "credits":
            playSound("click"), userInput.removeHitArea("levelSelect"), userInput.removeHitArea("moreGames"), userInput.removeHitArea("logoClick"), userInput.removeHitArea("credits"), initCreditsScreen();
            break;
        case "backFromCredits":
            playSound("click"), userInput.removeHitArea("backFromCredits"), initStartScreen();
            break;
        case "clearData":
            playSound("click"), userInput.removeHitArea("startLevel"), userInput.removeHitArea("prevScreen"), userInput.removeHitArea("clearData"), userInput.removeHitArea("nextScreen"), levelButsPage = 0, aLevelStore = new Array, aLevelStore.push(0), aLevelStore.push(0);
            for (var n = 0; 35 > n; n++) aLevelStore.push(1), aLevelStore.push(0);
            saveData(), initLevelSelect();
            break;
        case "prevScreen":
            playSound("click"), userInput.removeHitArea("startLevel"), userInput.removeHitArea("prevScreen"), userInput.removeHitArea("clearData"), userInput.removeHitArea("nextScreen"), 0 == levelButsPage ? initStartScreen() : (levelButsPage = 0, initLevelSelect());
            break;
        case "nextScreen":
            playSound("click"), userInput.removeHitArea("startLevel"), userInput.removeHitArea("prevScreen"), userInput.removeHitArea("clearData"), userInput.removeHitArea("nextScreen"), levelButsPage++, initLevelSelect();
            break;
        case "startLevel":
            playSound("click"), userInput.removeHitArea("startLevel"), userInput.removeHitArea("prevScreen"), userInput.removeHitArea("clearData"), userInput.removeHitArea("nextScreen"), levelNum = t.id, initGame();
            break;
        case "moreGames":
        case "moreGamesPause":
            Play68.goHome();
            break;
        case "logoClick":
            Play68.goHome();
            break;
        case "nextLevel":
            playSound("click"), userInput.removeHitArea("nextLevel"), userInput.removeHitArea("quitFromEndLevel"), userInput.removeHitArea("replayFromEndLevel"), userInput.removeHitArea("moreGames"), userInput.removeHitArea("logoClick"), ++levelNum < 36 ? (initGame(), 0 == levelNum % 3 && spilAPI.GameBreak.request(adPauseOn, adPauseOff)) : (levelNum = 35, initStartScreen());
            break;
        case "quitFromEndLevel":
            playSound("click"), userInput.removeHitArea("nextLevel"), userInput.removeHitArea("quitFromEndLevel"), userInput.removeHitArea("replayFromEndLevel"), userInput.removeHitArea("moreGames"), userInput.removeHitArea("logoClick"), initStartScreen();
            break;
        case "replayFromEndLevel":
            playSound("click"), userInput.removeHitArea("nextLevel"), userInput.removeHitArea("quitFromEndLevel"), userInput.removeHitArea("replayFromEndLevel"), userInput.removeHitArea("moreGames"), userInput.removeHitArea("logoClick"), initGame();
            break;
        case "shoot":
            t.isDown && "held" == aFishes[aFishes.length - 1].state && (playSound("crabThrow"), aFishes[aFishes.length - 1].thrown(t.x, t.y), base.throwFish(), aFishes.length < bubbleTarg && addFish(), levelThrows++);
            break;
        case "moveBase":
            t.isDown || t.isBeingDragged ? base.startMoving(t.x) : base.stopMoving();
            break;
        case "moveLeftEvent":
            base.leftPull = t.isDown ? -200 : 0;
            break;
        case "moveRightEvent":
            base.rightPull = t.isDown ? 200 : 0;
            break;
        case "retryLevel":
            playSound("click"), userInput.removeHitArea("retryLevel"), userInput.removeHitArea("quitFromEnd"), levelScore = 0, bonusScore = 0, initGame();
            break;
        case "replayFromInGame":
            playSound("click"), userInput.removeHitArea("pause"), userInput.removeHitArea("replayFromInGame"), userInput.removeHitArea("shoot"), userInput.removeHitArea("moveBase"), userInput.removeKey("moveRightEvent"), userInput.removeKey("moveLeftEvent"), userInput.removeHitArea("moreGames"), userInput.removeHitArea("logoClick"), initGame();
            break;
        case "mute":
            playSound("click"), toggleMute();
            break;
        case "pause":
        case "resumeFromPause":
            playSound("click"), toggleManualPause();
            break;
        case "quitFromPause":
            playSound("click"), toggleManualPause(), userInput.removeHitArea("pause"), userInput.removeHitArea("replayFromInGame"), userInput.removeHitArea("shoot"), userInput.removeHitArea("moveBase"), userInput.removeKey("moveRightEvent"), userInput.removeKey("moveLeftEvent"), userInput.removeHitArea("moreGamesPause"), userInput.removeHitArea("logoClick"), userInput.removeHitArea("quitFromPause"), userInput.removeHitArea("resumeFromPause"), levelScore = 0, initStartScreen()
    }
}

function initLevelComplete() {
    gameState = "levelComplete", 1 == audioType && music.volume(.25), playSound("levelComplete"), userInput.removeHitArea("pause"), userInput.removeHitArea("replayFromInGame"), userInput.removeHitArea("shoot"), userInput.removeHitArea("moveBase"), userInput.removeKey("moveRightEvent"), userInput.removeKey("moveLeftEvent"), userInput.removeHitArea("logoClick");
    var e = getScaleImageToMax(assetLib.getData("logo"), [0, 0]);
    oLogoBut = {
        oImgData: assetLib.getData("logo"),
        aPos: getCentreFromTopLeft([0, 0], assetLib.getData("logo"), e),
        scale: e,
        type: 0
    };
    var t = {
            oImgData: assetLib.getData("uiButs"),
            aPos: [73, 420],
            scale: 1,
            type: 1,
            frame: 2
        },
        n = {
            oImgData: assetLib.getData("uiButs"),
            aPos: [canvas.width / 2, 420],
            scale: 1,
            type: 1,
            frame: 3
        },
        r = {
            oImgData: assetLib.getData("uiButs"),
            aPos: [310, 420],
            scale: 1,
            type: 1,
            frame: 0
        },
        i = {
            oImgData: assetLib.getData("uiButs"),
            aPos: [canvas.width / 2, 500],
            scale: 1,
            type: 1,
            frame: 1
        };
    userInput.addHitArea("replayFromEndLevel", butEventHandler, null, "image", t), userInput.addHitArea("quitFromEndLevel", butEventHandler, null, "image", n), userInput.addHitArea("nextLevel", butEventHandler, null, "image", r), userInput.addHitArea("logoClick", butEventHandler, null, "image", oLogoBut), userInput.addHitArea("moreGames", butEventHandler, null, "image", i);
    var s = new Array(t, n, r, oLogoBut, i);
    panel = new Elements.Panel(assetLib.getData("panels"), assetLib.getData("tutorials"), assetLib.getData("numbers"), assetLib.getData("goldFish"), gameState, s, canvas.width, canvas.height);
    var o = getLevelResult();
    levelScore = o.levelScore, aLevelStore[2 * levelNum] < o.stars + 1 && (aLevelStore[2 * levelNum] = o.stars + 1), aLevelStore[2 * levelNum + 1] < levelScore && (aLevelStore[2 * levelNum + 1] = levelScore), levelNum < aLevelData.length - 1 && 1 == aLevelStore[2 * (levelNum + 1)] && (aLevelStore[2 * (levelNum + 1)] = 0), saveData(), panel.oScoreData = {
        stars: o.stars,
        levelScore: levelScore,
        totalScore: getTotalScore()
    }, panel.startTweenEndLevel(), previousTime = (new Date).getTime(), updateLevelComplete();
}

function getTotalScore() {
    for (var e = 0, t = 0; t < aLevelData.length; t++) e += aLevelStore[2 * t + 1];
    return e
}

function bubbleHit(e, t) {
    if ("jellyfish" == e.subType) t.stung(), playSound("hitJellyfish");
    else {
        t.caught(e);
        var n = !1;
        e.caughtFish ? (e.caughtFish.release(e), "fire" == e.oData.subType && (playSound("launchFire"), n = !0)) : ++fishCaught == bubbleTarg && (levelCompleteTimer = 0), n || playSound("bubbleLand" + Math.ceil(4 * Math.random())), e.changeState("caught", {
            caughtFish: t
        })
    }
}

function addFish() {
    var e = new Elements.Fish(assetLib.getData("fish"), {
        x: base.x,
        y: base.y,
        type: 0,
        id: aFishes.length,
        colourId: fishColourInc
    }, canvas.width, canvas.height);
    fishColourInc = ++fishColourInc % 9, aFishes.push(e), physics2D.aFishes = aFishes, playSound("newFish")
}

function defrostBubble(e) {
    for (var t = 0; t < aBubbles.length; t++) aBubbles[t].id == e && aBubbles[t].changeState("normal");
    playSound("breakIce");
    for (var t = 0; t < physics2D.aLines.length; t++) physics2D.aLines[t].id == e && (physics2D.aLines.splice(t, 1), t -= 1)
}

function getLevelResult() {
    for (var e = 0, t = 0; t < aLevelData[levelNum].length; t++) "bubble" == aLevelData[levelNum][t].type && ("jellyfish" != aLevelData[levelNum][t].subType && e++, "ice" == aLevelData[levelNum][t].subType && e++);
    e += Math.ceil(e / 6);
    var n = 1,
        r = 2e3;
    return e >= levelThrows ? n = 3 : levelThrows <= e + Math.ceil(e / 6) && (n = 2), r = Math.max(r - 50 * (levelThrows - e), 500), {
        stars: n,
        levelScore: r
    }
}

function updateGameEvent() {
    if (!manualPause && !rotatePause && "game" == gameState) {
        var e = getDelta();
        levelCompleteTimer >= 0 && (levelCompleteTimer += e, levelCompleteTimer > 1 && (initLevelComplete(), levelCompleteTimer = -1)), background.updateScroll(e), background.render(ctx);
        for (var t = 0; t < aFishes.length; t++) aFishes[t].update(base.x, base.y, e), renderSprite(aFishes[t]), aFishes[t].removeMe && (aFishes.splice(t, 1), t -= 1, (0 == aFishes.length || "held" != aFishes[aFishes.length - 1].state) && addFish());
        for (var t = 0; t < aBubbles.length; t++)
            if (aBubbles[t].update(e), renderSprite(aBubbles[t]), 1 != aBubbles[t].type)
                for (var n = 0; n < aFishes.length; n++) "flying" == aFishes[n].state && aFishes[n].skipBubble != aBubbles[t] && checkSpriteCollision(aBubbles[t], aFishes[n]) && bubbleHit(aBubbles[t], aFishes[n]);
        for (var t = 0; t < aLogs.length; t++) renderSprite(aLogs[t]);
        base.update(e), renderSprite(base), physics2D.update(e), hud.render(ctx), tutorialIsOn && panel.render(ctx), renderMuteBut(), renderLogoBut(), requestAnimFrame(updateGameEvent)
    }
}

function updateLevelSelectEvent() {
    if (!rotatePause && "levelSelect" == gameState) {
        var e = getDelta();
        background.updateScroll(e), background.render(ctx), panel.renderButs(ctx), panel.render(ctx), renderMuteBut(), requestAnimFrame(updateLevelSelectEvent)
    }
}

function updateCreditsScreenEvent() {
    if (!rotatePause && "credits" == gameState) {
        var e = getDelta();
        panel.update(e), panel.render(ctx), panel.renderButs(ctx), renderMuteBut(), requestAnimFrame(updateCreditsScreenEvent)
    }
}

function updateLevelComplete() {
    if (!rotatePause && "levelComplete" == gameState) {
        var e = getDelta();
        background.updateScroll(e), background.render(ctx), panel.update(e), panel.render(ctx), panel.renderButs(ctx), renderMuteBut(), requestAnimFrame(updateLevelComplete)
    }
}

function updateSplashScreenEvent() {
    if (!rotatePause && "splash" == gameState) {
        var e = getDelta();
        if (splashTimer += e, splashTimer > 2.5) return 1 != audioType || muted || music.play(), initStartScreen(), void 0;
        splash.render(ctx, e), requestAnimFrame(updateSplashScreenEvent)
    }
}

function updateStartScreenEvent() {
    if (!rotatePause && "start" == gameState) {
        var e = getDelta();
        background.updateScroll(e), background.render(ctx);
        for (var t = 0; t < aBubbles.length; t++) aBubbles[t].y -= (30 + 2 * t) * e, aBubbles[t].x = aBubbles[t].x - 50 * Math.sin(aBubbles[t].y / 50) * e, aBubbles[t].y < -100 && (aBubbles[t].x = Math.random() * canvas.width, aBubbles[t].y = canvas.height + 200 * Math.random() + 100), aBubbles[t].update(e), renderSprite(aBubbles[t]);
        panel.update(e), panel.render(ctx), panel.renderButs(ctx), renderMuteBut(), requestAnimFrame(updateStartScreenEvent)
    }
}

function getDelta() {
    var e = (new Date).getTime(),
        t = (e - previousTime) / 1e3;
    return previousTime = e, t > .5 && (t = 0), t
}

function renderSprite(e) {
    ctx.save(), ctx.translate(e.x, e.y), ctx.scale(e.scaleX, e.scaleY), ctx.rotate(e.rotation), e.render(ctx), ctx.restore()
}

function checkSpriteCollision(e, t, n) {
    "undefined" == typeof n && (n = 0);
    var r = e.x,
        i = e.y,
        s = t.x,
        o = t.y,
        u = (r - s) * (r - s) + (i - o) * (i - o),
        a = (e.radius + n) * (t.radius + n);
    return a > u ? !0 : !1
}

function getScaleImageToMax(e, t) {
    var n;
    return n = e.isSpriteSheet ? t[0] / e.oData.spriteWidth < t[1] / e.oData.spriteHeight ? Math.min(t[0] / e.oData.spriteWidth, 1) : Math.min(t[1] / e.oData.spriteHeight, 1) : t[0] / e.img.width < t[1] / e.img.height ? Math.min(t[0] / e.img.width, 1) : Math.min(t[1] / e.img.height, 1)
}

function getCentreFromTopLeft(e, t, n) {
    var r = new Array;
    return r.push(e[0] + t.oData.spriteWidth / 2 * n), r.push(e[1] + t.oData.spriteHeight / 2 * n), r
}

function loadPreAssets() {
    aLangs.length > 1 ? (preAssetLib = new Utils.AssetLoader(curLang, [{
        id: "langSelect",
        file: "images/langSelect.jpg"
    }, {
        id: "preloadImage",
        file: "images/preloadImage.jpg"
    }], ctx, canvas.width, canvas.height, !1), preAssetLib.onReady(initLangSelect)) : (curLang = aLangs[0], preAssetLib = new Utils.AssetLoader(curLang, [{
        id: "preloadImage",
        file: "images/preloadImage.jpg"
    }], ctx, canvas.width, canvas.height, !1), preAssetLib.onReady(initLoadAssets))
}

function initLangSelect() {
    var e = preAssetLib.getData("langSelect");
    ctx.drawImage(e.img, canvas.width / 2 - e.img.width / 2, canvas.height / 2 - e.img.height / 2);
    for (var t = 140, n = 0; n < aLangs.length; n++) {
        var r = canvas.width / 2 - t * aLangs.length / 2 + n * t,
            i = canvas.height / 2 - t / 2;
        userInput.addHitArea("langSelect", butEventHandler, {
            lang: aLangs[n]
        }, "rect", {
            aRect: [r, i, r + t, i + 140]
        })
    }
}

function initLoadAssets() {
    var e = preAssetLib.getData("preloadImage");
    ctx.drawImage(e.img, canvas.width / 2 - e.img.width / 2, canvas.height / 2 - e.img.height - 10), loadAssets()
}

function loadAssets() {
    assetLib = new Utils.AssetLoader(curLang, [{
        id: "background",
        file: "images/background.jpg"
    }, {
        id: "rotateDeviceMessage",
        file: "images/rotateDeviceMessage.jpg"
    }, {
        id: "splash",
        file: "images/splashScreen.jpg"
    }, {
        id: "credits",
        file: "images/creditsScreen.jpg"
    }, {
        id: "hud",
        file: "images/" + curLang + "/hud.png"
    }, {
        id: "goldFish",
        file: "images/goldFish.png"
    }, {
        id: "uiButs",
        file: "images/" + curLang + "/uiButs_112x76.png",
        oData: {
            columns: 6,
            spriteWidth: 112,
            spriteHeight: 76
        }
    }, {
        id: "levelButs",
        file: "images/levelButs_119x96.png",
        oData: {
            columns: 5,
            spriteWidth: 119,
            spriteHeight: 96
        }
    }, {
        id: "panels",
        file: "images/" + curLang + "/panels_383x550.png",
        oData: {
            columns: 2,
            spriteWidth: 383,
            spriteHeight: 550
        }
    }, {
        id: "tutorials",
        file: "images/" + curLang + "/tutorials_383x550.png",
        oData: {
            columns: 2,
            spriteWidth: 383,
            spriteHeight: 550
        }
    }, {
        id: "numbers",
        file: "images/numbers_25x35.png",
        oData: {
            columns: 10,
            spriteWidth: 25,
            spriteHeight: 35
        }
    }, {
        id: "muteBut",
        file: "images/mute_35x35.png",
        oData: {
            columns: 2,
            spriteWidth: 35,
            spriteHeight: 35
        }
    }, {
        id: "log",
        file: "images/log_256x59.png",
        oData: {
            columns: 1,
            spriteWidth: 256,
            spriteHeight: 59
        }
    }, {
        id: "bubble",
        file: "images/bubble_77x128.png",
        oData: {
            oAnims: {
                normal: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
                caught: [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33],
                holding: [33],
                ice: [34],
                fire: [35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46],
                jellyfish: [47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61]
            },
            columns: 13,
            spriteWidth: 77,
            spriteHeight: 128
        }
    }, {
        id: "fish",
        file: "images/fish_47x90.png",
        oData: {
            oAnims: {
                normal0: [0, 1, 2, 3, 4],
                normal1: [5, 6, 7, 8, 9],
                normal2: [10, 11, 12, 13, 14],
                normal3: [15, 16, 17, 18, 19],
                normal4: [20, 21, 22, 23, 24],
                normal5: [25, 26, 27, 28, 29],
                normal6: [30, 31, 32, 33, 34],
                normal7: [35, 36, 37, 38, 39],
                normal8: [40, 41, 42, 43, 44],
                onFire: [45, 46, 47, 48, 49, 50],
                stung: [51]
            },
            columns: 21,
            spriteWidth: 47,
            spriteHeight: 90
        }
    }, {
        id: "base",
        file: "images/base_139x140.png",
        oData: {
            oAnims: {
                ambient: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
                walkRight: [17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28],
                walkLeft: [28, 27, 26, 25, 24, 23, 22, 21, 20, 19, 18, 17],
                throwFish: [29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47]
            },
            columns: 7,
            spriteWidth: 139,
            spriteHeight: 140
        }
    }, {
        id: "logo",
        file: oLogoData.image
    }], ctx, canvas.width, canvas.height), dcdcdc()
}

function dcdcdc() {
    assetLib.onReady(ananss);
}

function resizeCanvas() {
    var e = window.innerWidth,
        t = window.innerHeight;
    e > 480 && (e -= 1, t -= 1), window.innerWidth > window.innerHeight && isMobile ? ("loading" != gameState && rotatePauseOn(), e / canvas.width < t / canvas.height ? (canvas.style.width = e + "px", canvas.style.height = e / canvas.width * canvas.height + "px", canvasX = 0, canvasY = (t - e / canvas.width * canvas.height) / 2, canvasScaleX = canvasScaleY = canvas.width / e, div.style.marginTop = canvasY + "px", div.style.marginLeft = canvasX + "px") : (canvas.style.width = t / canvas.height * canvas.width + "px", canvas.style.height = t + "px", canvasX = (e - t / canvas.height * canvas.width) / 2, canvasY = 0, canvasScaleX = canvasScaleY = canvas.height / t, div.style.marginTop = canvasY + "px", div.style.marginLeft = canvasX + "px")) : isMobile ? (rotatePause && rotatePauseOff(), canvasX = canvasY = 0, canvasScaleX = canvas.width / e, canvasScaleY = canvas.height / t, canvas.style.width = e + "px", canvas.style.height = t + "px", div.style.marginTop = "0px", div.style.marginLeft = "0px") : (rotatePause && rotatePauseOff(), e / canvas.width < t / canvas.height ? (canvas.style.width = e + "px", canvas.style.height = e / canvas.width * canvas.height + "px", canvasX = 0, canvasY = (t - e / canvas.width * canvas.height) / 2, canvasScaleX = canvasScaleY = canvas.width / e, div.style.marginTop = canvasY + "px", div.style.marginLeft = canvasX + "px") : (canvas.style.width = t / canvas.height * canvas.width + "px", canvas.style.height = t + "px", canvasX = (e - t / canvas.height * canvas.width) / 2, canvasY = 0, canvasScaleX = canvasScaleY = canvas.height / t, div.style.marginTop = canvasY + "px", div.style.marginLeft = canvasX + "px")), userInput.setCanvas(canvasX, canvasY, canvasScaleX, canvasScaleY)
}

function playSound(e) {
    1 == audioType && sound.play(e)
}

function toggleMute() {
    muted = !muted, 1 == audioType ? muted ? Howler.mute() : Howler.unmute() : 2 == audioType && (muted ? music.pause() : music.play()), renderMuteBut()
}

function renderLogoBut() {
    ctx.drawImage(oLogoBut.oImgData.img, 0, 0, oLogoBut.oImgData.img.width, oLogoBut.oImgData.img.height, oLogoBut.aPos[0] - oLogoBut.oImgData.img.width / 2 * oLogoBut.scale, oLogoBut.aPos[1] - oLogoBut.oImgData.img.height / 2 * oLogoBut.scale, oLogoBut.oImgData.img.width * oLogoBut.scale, oLogoBut.oImgData.img.height * oLogoBut.scale)
}

function renderMuteBut() {
    if (0 != audioType) {
        var e = assetLib.getData("muteBut"),
            t = 0;
        muted && (t = 1);
        var n = t * e.oData.spriteWidth % e.img.width,
            r = Math.floor(t / (e.img.width / e.oData.spriteWidth)) * e.oData.spriteHeight;
        ctx.drawImage(e.img, n, r, e.oData.spriteWidth, e.oData.spriteHeight, 340, 10, e.oData.spriteWidth, e.oData.spriteHeight)
    }
}

function adPauseOn() {
    toggleManualPause()
}

function adPauseOff() {
    manualPause && toggleManualPause()
}

function toggleManualPause() {
    if (manualPause) manualPause = !1, userInput.removeHitArea("quitFromPause"), userInput.removeHitArea("resumeFromPause"), userInput.removeHitArea("moreGamesPause"), pauseCoreOff();
    else {
        manualPause = !0, pauseCoreOn();
        var e = {
                oImgData: assetLib.getData("uiButs"),
                aPos: [120, 380],
                scale: 1,
                type: 1,
                frame: 3
            },
            t = {
                oImgData: assetLib.getData("uiButs"),
                aPos: [263, 380],
                scale: 1,
                type: 1,
                frame: 0
            },
            n = {
                oImgData: assetLib.getData("uiButs"),
                aPos: [canvas.width / 2, 460],
                scale: 1,
                type: 1,
                frame: 1
            },
            r = new Array(e, t, n);
        userInput.addHitArea("quitFromPause", butEventHandler, null, "image", e), userInput.addHitArea("resumeFromPause", butEventHandler, null, "image", t), userInput.addHitArea("moreGamesPause", butEventHandler, null, "image", n);
        var i = new Elements.Panel(assetLib.getData("panels"), assetLib.getData("tutorials"), assetLib.getData("numbers"), assetLib.getData("goldFish"), "pause", r, canvas.width, canvas.height);
        i.render(ctx), i.renderButs(ctx)
    }
}

function rotatePauseOn() {
    rotatePause = !0, ctx.drawImage(assetLib.getImg("rotateDeviceMessage"), 0, 0), userInput.pauseIsOn = !0, pauseCoreOn()
}

function rotatePauseOff() {
    rotatePause = !1, userInput.removeHitArea("quitFromPause"), userInput.removeHitArea("resumeFromPause"), pauseCoreOff()
}

function pauseCoreOn() {
    switch (1 == audioType ? Howler.mute() : 2 == audioType && music.pause(), gameState) {
        case "start":
            break;
        case "levelSelect":
            break;
        case "game":
            userInput.removeHitArea("shoot"), userInput.removeHitArea("moveBase"), userInput.removeKey("moveRightEvent"), userInput.removeKey("moveLeftEvent");
            break;
        case "levelComplete":
    }
}

function pauseCoreOff() {
    switch (1 == audioType ? muted || Howler.unmute() : 2 == audioType && (muted || music.play()), previousTime = (new Date).getTime(), userInput.pauseIsOn = !1, gameState) {
        case "splash":
            updateSplashScreenEvent();
            break;
        case "start":
            initStartScreen();
            break;
        case "credits":
            initCreditsScreen();
            break;
        case "levelSelect":
            initLevelSelect();
            break;
        case "game":
            manualPause = !1, userInput.addHitArea("shoot", butEventHandler, null, "rect", {
                aRect: [0, 50, canvas.width, 460]
            }, !0), userInput.addHitArea("moveBase", butEventHandler, {
                multiTouch: !0,
                isDraggable: !0
            }, "rect", {
                aRect: [0, 460, canvas.width, 550]
            }, !0), userInput.addKey("moveRightEvent", butEventHandler, null, 39), userInput.addKey("moveLeftEvent", butEventHandler, null, 37), updateGameEvent();
            break;
        case "levelComplete":
            initLevelComplete();
            break;
        case "end":
    }
}
var Utils;
! function(e) {
    var t = function() {
        function e(e, t, n, r, i, s) {
            "undefined" == typeof s && (s = !0), this.oAssetData = {}, this.assetsLoaded = 0, this.totalAssets = t.length, this.ctx = n, this.canvasWidth = r, this.canvasHeight = i, this.showBar = s, this.topLeftX = this.canvasWidth / 2 - r / 4, this.topLeftY = this.canvasHeight / 2, this.showBar && (ctx.strokeStyle = "#aaaaaa", ctx.lineWidth = 2, ctx.fillStyle = "#ffffff", ctx.moveTo(this.topLeftX, this.topLeftY), ctx.lineTo(this.topLeftX + r / 2, this.topLeftY + 0), ctx.lineTo(this.topLeftX + r / 2, this.topLeftY + 20), ctx.lineTo(this.topLeftX + 0, this.topLeftY + 20), ctx.lineTo(this.topLeftX + 0, this.topLeftY + 0), ctx.stroke());
            for (var o = 0; o < t.length; o++) this.loadImage(t[o])
        }
        return e.prototype.loadImage = function(e) {
            var t = this,
                n = new Image;
            n.onload = function() {
                t.oAssetData[e.id] = {}, t.oAssetData[e.id].img = n, void 0 != e.oData ? (t.oAssetData[e.id].oData = e.oData, t.oAssetData[e.id].isSpriteSheet = !0) : (t.oAssetData[e.id].isSpriteSheet = !1, t.oAssetData[e.id].oData = {}, t.oAssetData[e.id].oData.spriteWidth = t.oAssetData[e.id].img.width, t.oAssetData[e.id].oData.spriteHeight = t.oAssetData[e.id].img.height), ++t.assetsLoaded, t.showBar && ctx.fillRect(t.topLeftX + 2, t.topLeftY + 2, (t.canvasWidth / 2 - 4) / t.totalAssets * t.assetsLoaded, 16), t.checkLoadComplete()
            }, n.src = e.file
        }, e.prototype.checkLoadComplete = function() {
            this.assetsLoaded == this.totalAssets && this.loadedCallback()
        }, e.prototype.onReady = function(e) {
            this.loadedCallback = e
        }, e.prototype.getImg = function(e) {
            return this.oAssetData[e].img
        }, e.prototype.getData = function(e) {
            return this.oAssetData[e]
        }, e
    }();
    e.AssetLoader = t
}(Utils || (Utils = {}));
var Utils;
! function(e) {
    var t = function() {
        function e(e, t, n, r) {
            this.x = 0, this.y = 0, this.rotation = 0, this.radius = 10, this.removeMe = !1, this.frameInc = 0, this.animType = "loop", this.offsetX = 0, this.offsetY = 0, this.scaleX = 1, this.scaleY = 1, this.oImgData = e, this.oAnims = this.oImgData.oData.oAnims, this.fps = t, this.radius = n, this.animId = r
        }
        return e.prototype.updateAnimation = function(e) {
            this.frameInc += this.fps * e
        }, e.prototype.resetAnim = function() {
            this.frameInc = 0
        }, e.prototype.setFrame = function(e) {
            this.fixedFrame = e
        }, e.prototype.setAnimType = function(e, t, n) {
            switch ("undefined" == typeof n && (n = !0), this.animId = t, this.animType = e, n && this.resetAnim(), e) {
                case "loop":
                    break;
                case "once":
                    this.maxIdx = this.oAnims[this.animId].length - 1
            }
        }, e.prototype.render = function(e) {
            if (null != this.animId) {
                var t = this.oAnims[this.animId].length,
                    n = Math.floor(this.frameInc),
                    r = this.oAnims[this.animId][n % t],
                    i = r * this.oImgData.oData.spriteWidth % this.oImgData.img.width,
                    s = Math.floor(r / (this.oImgData.img.width / this.oImgData.oData.spriteWidth)) * this.oImgData.oData.spriteHeight;
                if ("once" == this.animType && n > this.maxIdx) {
                    this.fixedFrame = this.oAnims[this.animId][t - 1], this.animId = null, this.animEndedFunc();
                    var i = this.fixedFrame * this.oImgData.oData.spriteWidth % this.oImgData.img.width,
                        s = Math.floor(this.fixedFrame / (this.oImgData.img.width / this.oImgData.oData.spriteWidth)) * this.oImgData.oData.spriteHeight
                }
            } else var i = this.fixedFrame * this.oImgData.oData.spriteWidth % this.oImgData.img.width,
                s = Math.floor(this.fixedFrame / (this.oImgData.img.width / this.oImgData.oData.spriteWidth)) * this.oImgData.oData.spriteHeight;
            e.drawImage(this.oImgData.img, i, s, this.oImgData.oData.spriteWidth, this.oImgData.oData.spriteHeight, -this.oImgData.oData.spriteWidth / 2 + this.offsetX, -this.oImgData.oData.spriteHeight / 2 + this.offsetY, this.oImgData.oData.spriteWidth, this.oImgData.oData.spriteHeight)
        }, e
    }();
    e.AnimSprite = t
}(Utils || (Utils = {}));
var Utils;
! function(e) {
    var t = function() {
        function e(e, t, n) {
            "undefined" == typeof n && (n = 0), this.x = 0, this.y = 0, this.rotation = 0, this.radius = 10, this.removeMe = !1, this.offsetX = 0, this.offsetY = 0, this.scaleX = 1, this.scaleY = 1, this.oImgData = e, this.radius = t, this.setFrame(n)
        }
        return e.prototype.setFrame = function(e) {
            this.frameNum = e
        }, e.prototype.render = function(e) {
            var t = this.frameNum * this.oImgData.oData.spriteWidth % this.oImgData.img.width,
                n = Math.floor(this.frameNum / (this.oImgData.img.width / this.oImgData.oData.spriteWidth)) * this.oImgData.oData.spriteHeight;
            e.drawImage(this.oImgData.img, t, n, this.oImgData.oData.spriteWidth, this.oImgData.oData.spriteHeight, -this.oImgData.oData.spriteWidth / 2 + this.offsetX, -this.oImgData.oData.spriteHeight / 2 + this.offsetY, this.oImgData.oData.spriteWidth, this.oImgData.oData.spriteHeight)
        }, e
    }();
    e.BasicSprite = t
}(Utils || (Utils = {}));
var Utils;
! function(e) {
    var t = function() {
        function e(e, t) {
            var n = this;
            this.canvasX = 0, this.canvasY = 0, this.canvasScaleX = 1, this.canvasScaleY = 1, this.prevHitTime = 0, this.pauseIsOn = !1, this.isDown = !1, this.isDetectingKeys = !1, this.isBugBrowser = t, e.addEventListener("touchstart", function(e) {
                for (var t = 0; t < e.changedTouches.length; t++) n.hitDown(e, e.changedTouches[t].pageX, e.changedTouches[t].pageY, e.changedTouches[t].identifier)
            }, !1), e.addEventListener("touchend", function(e) {
                for (var t = 0; t < e.changedTouches.length; t++) n.hitUp(e, e.changedTouches[t].pageX, e.changedTouches[t].pageY, e.changedTouches[t].identifier)
            }, !1), e.addEventListener("touchmove", function(e) {
                for (var t = 0; t < n.aHitAreas.length; t++) n.move(e, e.changedTouches[t].pageX, e.changedTouches[t].pageY, e.changedTouches[t].identifier, !0)
            }, !1), e.addEventListener("mousedown", function(e) {
                n.isDown = !0, n.hitDown(e, e.pageX, e.pageY, 1)
            }, !1), e.addEventListener("mouseup", function(e) {
                n.isDown = !1, n.hitUp(e, e.pageX, e.pageY, 1)
            }, !1), e.addEventListener("mousemove", function(e) {
                n.move(e, e.pageX, e.pageY, 1, n.isDown)
            }, !1), this.aHitAreas = new Array, this.aKeys = new Array
        }
        return e.prototype.setCanvas = function(e, t, n, r) {
            this.canvasX = e, this.canvasY = t, this.canvasScaleX = n, this.canvasScaleY = r
        }, e.prototype.hitDown = function(e, t, n, r) {
            if (!this.pauseIsOn) {
                var i = (new Date).getTime();
                if (!(i - this.prevHitTime < 500 && isBugBrowser)) {
                    this.prevHitTime = i, e.preventDefault(), e.stopPropagation(), t = (t - this.canvasX) * this.canvasScaleX, n = (n - this.canvasY) * this.canvasScaleY;
                    for (var s = 0; s < this.aHitAreas.length; s++)
                        if (this.aHitAreas[s].rect && t > this.aHitAreas[s].area[0] && n > this.aHitAreas[s].area[1] && t < this.aHitAreas[s].area[2] && n < this.aHitAreas[s].area[3]) {
                            this.aHitAreas[s].aTouchIdentifiers.push(r), this.aHitAreas[s].oData.isDown || (this.aHitAreas[s].oData.isDown = !0, this.aHitAreas[s].oData.x = t, this.aHitAreas[s].oData.y = n, this.aHitAreas[s].callback(this.aHitAreas[s].id, this.aHitAreas[s].oData));
                            break
                        }
                }
            }
        }, e.prototype.hitUp = function(e, t, n, r) {
            if (!this.pauseIsOn) {
                e.preventDefault(), e.stopPropagation(), t = (t - this.canvasX) * this.canvasScaleX, n = (n - this.canvasY) * this.canvasScaleY;
                for (var i = 0; i < this.aHitAreas.length; i++)
                    if (this.aHitAreas[i].rect && t > this.aHitAreas[i].area[0] && n > this.aHitAreas[i].area[1] && t < this.aHitAreas[i].area[2] && n < this.aHitAreas[i].area[3]) {
                        for (var s = 0; s < this.aHitAreas[i].aTouchIdentifiers.length; s++) this.aHitAreas[i].aTouchIdentifiers[s] == r && (this.aHitAreas[i].aTouchIdentifiers.splice(s, 1), s -= 1);
                        0 == this.aHitAreas[i].aTouchIdentifiers.length && (this.aHitAreas[i].oData.isDown = !1, this.aHitAreas[i].oData.multiTouch && this.aHitAreas[i].callback(this.aHitAreas[i].id, this.aHitAreas[i].oData));
                        break
                    }
            }
        }, e.prototype.move = function(e, t, n, r, i) {
            if (!this.pauseIsOn && i) {
                t = (t - this.canvasX) * this.canvasScaleX, n = (n - this.canvasY) * this.canvasScaleY;
                for (var s = 0; s < this.aHitAreas.length; s++)
                    if (this.aHitAreas[s].rect)
                        if (t > this.aHitAreas[s].area[0] && n > this.aHitAreas[s].area[1] && t < this.aHitAreas[s].area[2] && n < this.aHitAreas[s].area[3]) this.aHitAreas[s].oData.isDown || (this.aHitAreas[s].oData.isDown = !0, this.aHitAreas[s].oData.x = t, this.aHitAreas[s].oData.y = n, this.aHitAreas[s].aTouchIdentifiers.push(r), this.aHitAreas[s].oData.multiTouch && this.aHitAreas[s].callback(this.aHitAreas[s].id, this.aHitAreas[s].oData)), this.aHitAreas[s].oData.isDraggable && (this.aHitAreas[s].oData.isBeingDragged = !0, this.aHitAreas[s].oData.x = t, this.aHitAreas[s].oData.y = n, this.aHitAreas[s].callback(this.aHitAreas[s].id, this.aHitAreas[s].oData), this.aHitAreas[s].oData.isBeingDragged = !1);
                        else if (this.aHitAreas[s].oData.isDown) {
                    for (var o = 0; o < this.aHitAreas[s].aTouchIdentifiers.length; o++) this.aHitAreas[s].aTouchIdentifiers[o] == r && (this.aHitAreas[s].aTouchIdentifiers.splice(o, 1), o -= 1);
                    0 == this.aHitAreas[s].aTouchIdentifiers.length && (this.aHitAreas[s].oData.isDown = !1, this.aHitAreas[s].oData.multiTouch && this.aHitAreas[s].callback(this.aHitAreas[s].id, this.aHitAreas[s].oData))
                }
            }
        }, e.prototype.keyDown = function(e) {
            for (var t = 0; t < this.aKeys.length; t++) e.keyCode == this.aKeys[t].keyCode && (this.aKeys[t].oData.isDown = !0, this.aKeys[t].callback(this.aKeys[t].id, this.aKeys[t].oData))
        }, e.prototype.keyUp = function(e) {
            for (var t = 0; t < this.aKeys.length; t++) e.keyCode == this.aKeys[t].keyCode && (this.aKeys[t].oData.isDown = !1, this.aKeys[t].callback(this.aKeys[t].id, this.aKeys[t].oData))
        }, e.prototype.addKey = function(e, t, n, r) {
            var i = this;
            this.isDetectingKeys || (window.addEventListener("keydown", function(e) {
                i.keyDown(e)
            }, !1), window.addEventListener("keyup", function(e) {
                i.keyUp(e)
            }, !1), this.isDetectingKeys = !0), null == n && (n = new Object), this.aKeys.push({
                id: e,
                callback: t,
                oData: n,
                keyCode: r
            })
        }, e.prototype.removeKey = function(e) {
            for (var t = 0; t < this.aKeys.length; t++) this.aKeys[t].id == e && (this.aKeys.splice(t, 1), t -= 1)
        }, e.prototype.addHitArea = function(e, t, n, r, i, s) {
            "undefined" == typeof s && (s = !1), null == n && (n = new Object), s && this.removeHitArea(e);
            var o = new Array;
            switch (r) {
                case "image":
                    void 0 == i.scale && (i.scale = 1);
                    var u;
                    i.oImgData.isSpriteSheet ? (u = new Array(i.aPos[0] - i.oImgData.oData.spriteWidth / 2 * i.scale, i.aPos[1] - i.oImgData.oData.spriteHeight / 2 * i.scale, i.aPos[0] + i.oImgData.oData.spriteWidth / 2 * i.scale, i.aPos[1] + i.oImgData.oData.spriteHeight / 2 * i.scale), this.aHitAreas.push({
                        id: e,
                        aTouchIdentifiers: o,
                        callback: t,
                        oData: n,
                        rect: !0,
                        area: u
                    })) : (u = new Array(i.aPos[0] - i.oImgData.img.width / 2 * i.scale, i.aPos[1] - i.oImgData.img.height / 2 * i.scale, i.aPos[0] + i.oImgData.img.width / 2 * i.scale, i.aPos[1] + i.oImgData.img.height / 2 * i.scale), this.aHitAreas.push({
                        id: e,
                        aTouchIdentifiers: o,
                        callback: t,
                        oData: n,
                        rect: !0,
                        area: u
                    }));
                    break;
                case "rect":
                    this.aHitAreas.push({
                        id: e,
                        aTouchIdentifiers: o,
                        callback: t,
                        oData: n,
                        rect: !0,
                        area: i.aRect
                    })
            }
        }, e.prototype.removeHitArea = function(e) {
            for (var t = 0; t < this.aHitAreas.length; t++) this.aHitAreas[t].id == e && (this.aHitAreas.splice(t, 1), t -= 1)
        }, e
    }();
    e.UserInput = t
}(Utils || (Utils = {}));
var Utils;
! function(e) {
    var t = function() {
        function e(e) {
            this.updateFreq = 10, this.updateInc = 0, this.frameAverage = 0, this.display = 1, this.log = "", this.render = function(e) {
                this.frameAverage += this.delta / this.updateFreq, ++this.updateInc >= this.updateFreq && (this.updateInc = 0, this.display = this.frameAverage, this.frameAverage = 0), e.textAlign = "left", ctx.font = "10px Helvetica", e.fillStyle = "#333333", e.beginPath(), e.rect(0, this.canvasHeight - 15, 40, 15), e.closePath(), e.fill(), e.fillStyle = "#ffffff", e.fillText(Math.round(1e3 / (1e3 * this.display)) + " fps " + this.log, 5, this.canvasHeight - 5)
            }, this.canvasHeight = e
        }
        return e.prototype.update = function(e) {
            this.delta = e
        }, e
    }();
    e.FpsMeter = t
}(Utils || (Utils = {}));
var Elements;
! function(e) {
    var t = function() {
        function e(e, t, n) {
            this.x = 0, this.y = 0, this.targY = 0, this.incY = 0, this.posY = 0, this.oImgData = e, this.canvasWidth = t, this.canvasHeight = n
        }
        return e.prototype.updateScroll = function(e) {
            this.incY += 3 * e, this.posY -= 8 * this.posY * e
        }, e.prototype.render = function(e) {
            var t = 40;
            e.drawImage(this.oImgData.img, 0, 0);
            for (var n = 0; t > n; n++) e.drawImage(this.oImgData.img, 0, n * (this.canvasHeight / t), this.canvasWidth, this.canvasHeight / t, 4 * Math.sin(this.incY + n / 3) - this.posY, n * (this.canvasHeight / t), this.canvasWidth, this.canvasHeight / t)
        }, e
    }();
    e.Background = t
}(Elements || (Elements = {}));
var Elements;
! function(e) {
    var t = function() {
        function e(e, t, n, r, i) {
            this.incY = 0, this.score = 0, this.highestScore = 0, this.posY = 0, this.bgX = 0, this.bgY = 0, this.atmosX = 0, this.atmosY = 0, this.oButs = e, this.oBgImgData = t, this.oTitleImgData = n, this.canvasWidth = r, this.canvasHeight = i, this.posY = -this.canvasHeight
        }
        return e.prototype.setRenderFunc = function(e) {
            switch (this.posY = -this.canvasHeight, e) {
                case "start":
                    this.renderFunc = this.renderStartScreen, TweenLite.to(this, .5, {
                        posY: 0
                    });
                    break;
                case "help":
                    break;
                case "end":
            }
        }, e.prototype.render = function(e, t) {
            this.renderFunc(e, t)
        }, e.prototype.renderStartScreen = function(e, t) {
            this.incY += 5 * t, this.bgY -= 50 * t, this.bgX -= 50 * Math.sin(this.incY / 10) * t;
            var n = this.bgX % this.canvasWidth,
                r = this.bgY % this.canvasHeight;
            0 > n && (n += this.canvasWidth), 0 > r && (r += this.canvasHeight), e.drawImage(this.oBgImgData.img, n, r, this.canvasWidth, this.canvasHeight, 0, 0, this.canvasWidth, this.canvasHeight), e.drawImage(this.oTitleImgData.img, 15 + this.posY, 60), e.drawImage(this.oButs.play.imageData.img, this.oButs.play.pos[0] - this.oButs.play.imageData.img.width / 2, this.oButs.play.pos[1] - this.oButs.play.imageData.img.height / 2 - 5 * Math.sin(this.incY) - this.posY), e.drawImage(this.oButs.moreGames.imageData.img, this.oButs.moreGames.pos[0] - this.oButs.moreGames.imageData.img.width / 2, this.oButs.moreGames.pos[1] - this.oButs.moreGames.imageData.img.height / 2 - 5 * Math.sin(this.incY) - this.posY)
        }, e
    }();
    e.Screens = t
}(Elements || (Elements = {}));
var Elements;
! function(e) {
    var t = function() {
        function e(e, t, n) {
            this.inc = 0, this.oSplashScreenImgData = e, this.canvasWidth = t, this.canvasHeight = n, this.posY = -this.canvasHeight, TweenLite.to(this, .5, {
                posY: 0
            })
        }
        return e.prototype.render = function(e, t) {
            this.inc += 5 * t, e.drawImage(this.oSplashScreenImgData.img, 0, 0 - this.posY)
        }, e
    }();
    e.Splash = t
}(Elements || (Elements = {}));
var Elements;
! function(e) {
    var t = function() {
        function e(e, t, n, r, i, s, o, u) {
            this.timer = .3, this.endTime = 0, this.posY = 0, this.numberSpace = 18, this.incY = 0, this.oPanelsImgData = e, this.oTutorialsImgData = t, this.oNumbersImgData = n, this.oGoldFishImgData = r, this.panelType = i, this.aButs = s, this.canvasWidth = o, this.canvasHeight = u
        }
        return e.prototype.update = function(e) {
            this.incY += 5 * e
        }, e.prototype.startTween1 = function() {
            this.posY = 550, TweenLite.to(this, .8, {
                posY: 0,
                ease: "Back.easeOut"
            })
        }, e.prototype.startTween2 = function() {
            this.posY = 50, TweenLite.to(this, .5, {
                posY: 0,
                ease: "Back.easeOut"
            })
        }, e.prototype.startTween3 = function() {
            this.posY = 550, TweenLite.to(this, .5, {
                posY: 0,
                ease: "Quad.easeOut"
            })
        }, e.prototype.startTweenEndLevel = function() {
            this.aStarPos = new Array;
            for (var e = 0; e < this.oScoreData.stars; e++) this.aStarPos.push({
                posY: -300
            }), TweenLite.to(this.aStarPos[e], 1.5, {
                posY: 0,
                ease: "Bounce.easeOut",
                delay: .3 * e
            });
            this.posY = 550, TweenLite.to(this, .8, {
                posY: 0,
                ease: "Back.easeOut"
            })
        }, e.prototype.renderButs = function(e) {
            if (null != this.aButs)
                for (var t = 0; t < this.aButs.length; t++) {
                    var n = this.posY,
                        r = 0;
                    if (0 != this.incY && (r = 3 * Math.sin(this.incY + 45 * t)), 0 == t % 2 && (n = -this.posY), 0 == this.aButs[t].type) e.drawImage(this.aButs[t].oImgData.img, 0, 0, this.aButs[t].oImgData.img.width, this.aButs[t].oImgData.img.height, this.aButs[t].aPos[0] - this.aButs[t].oImgData.img.width / 2 * this.aButs[t].scale + n, this.aButs[t].aPos[1] - this.aButs[t].oImgData.img.height / 2 * this.aButs[t].scale - r, this.aButs[t].oImgData.img.width * this.aButs[t].scale, this.aButs[t].oImgData.img.height * this.aButs[t].scale);
                    else {
                        var i = this.aButs[t].frame,
                            s = i * this.aButs[t].oImgData.oData.spriteWidth % this.aButs[t].oImgData.img.width,
                            o = Math.floor(i / (this.aButs[t].oImgData.img.width / this.aButs[t].oImgData.oData.spriteWidth)) * this.aButs[t].oImgData.oData.spriteHeight;
                        e.drawImage(this.aButs[t].oImgData.img, s, o, this.aButs[t].oImgData.oData.spriteWidth, this.aButs[t].oImgData.oData.spriteHeight, this.aButs[t].aPos[0] - this.aButs[t].oImgData.oData.spriteWidth / 2 + n, this.aButs[t].aPos[1] - this.aButs[t].oImgData.oData.spriteHeight / 2 - r, this.aButs[t].oImgData.oData.spriteWidth * this.aButs[t].scale, this.aButs[t].oImgData.oData.spriteHeight * this.aButs[t].scale)
                    }
                }
        }, e.prototype.render = function(e) {
            switch (this.panelType) {
                case "start":
                    var t = 0,
                        n = t * this.oPanelsImgData.oData.spriteWidth % this.oPanelsImgData.img.width,
                        r = Math.floor(t / (this.oPanelsImgData.img.width / this.oPanelsImgData.oData.spriteWidth)) * this.oPanelsImgData.oData.spriteHeight;
                    e.drawImage(this.oPanelsImgData.img, n, r, this.oPanelsImgData.oData.spriteWidth, this.oPanelsImgData.oData.spriteHeight, 0, 0 + this.posY, this.oPanelsImgData.oData.spriteWidth, this.oPanelsImgData.oData.spriteHeight);
                    break;
                case "credits":
                    var t = 3,
                        n = t * this.oPanelsImgData.oData.spriteWidth % this.oPanelsImgData.img.width,
                        r = Math.floor(t / (this.oPanelsImgData.img.width / this.oPanelsImgData.oData.spriteWidth)) * this.oPanelsImgData.oData.spriteHeight;
                    e.drawImage(this.oPanelsImgData.img, n, r, this.oPanelsImgData.oData.spriteWidth, this.oPanelsImgData.oData.spriteHeight, 0, 0 + this.posY, this.oPanelsImgData.oData.spriteWidth, this.oPanelsImgData.oData.spriteHeight);
                    break;
                case "levelSelect":
                    for (var i = 0; 12 > i; i++)
                        for (var s = i + 12 * this.oScoreData.levelButsPage + 1, o = 0; o < s.toString().length; o++) {
                            t = parseFloat(s.toString().charAt(o));
                            var n = t * this.oNumbersImgData.oData.spriteWidth % this.oNumbersImgData.img.width,
                                r = Math.floor(t / (this.oNumbersImgData.img.width / this.oNumbersImgData.oData.spriteWidth)) * this.oNumbersImgData.oData.spriteHeight,
                                u = this.posY;
                            0 == i % 2 && (u = -this.posY), e.drawImage(this.oNumbersImgData.img, n, r, this.oNumbersImgData.oData.spriteWidth, this.oNumbersImgData.oData.spriteHeight, this.aButs[i].aPos[0] + o * this.numberSpace - this.numberSpace * s.toString().length / 2 + u, this.aButs[i].aPos[1] + 2, this.oNumbersImgData.oData.spriteWidth, this.oNumbersImgData.oData.spriteHeight)
                        }
                    break;
                case "levelComplete":
                    var t = 1,
                        n = t * this.oPanelsImgData.oData.spriteWidth % this.oPanelsImgData.img.width,
                        r = Math.floor(t / (this.oPanelsImgData.img.width / this.oPanelsImgData.oData.spriteWidth)) * this.oPanelsImgData.oData.spriteHeight;
                    e.drawImage(this.oPanelsImgData.img, n, r, this.oPanelsImgData.oData.spriteWidth, this.oPanelsImgData.oData.spriteHeight, 0, 0 + this.posY, this.oPanelsImgData.oData.spriteWidth, this.oPanelsImgData.oData.spriteHeight);
                    for (var s = this.oScoreData.levelScore, o = 0; o < s.toString().length; o++) {
                        t = parseFloat(s.toString().charAt(o));
                        var n = t * this.oNumbersImgData.oData.spriteWidth % this.oNumbersImgData.img.width,
                            r = Math.floor(t / (this.oNumbersImgData.img.width / this.oNumbersImgData.oData.spriteWidth)) * this.oNumbersImgData.oData.spriteHeight;
                        e.drawImage(this.oNumbersImgData.img, n, r, this.oNumbersImgData.oData.spriteWidth, this.oNumbersImgData.oData.spriteHeight, 115 + o * this.numberSpace - this.numberSpace * s.toString().length / 2, 320 + this.posY, this.oNumbersImgData.oData.spriteWidth, this.oNumbersImgData.oData.spriteHeight)
                    }
                    for (var s = this.oScoreData.totalScore, o = 0; o < s.toString().length; o++) {
                        t = parseFloat(s.toString().charAt(o));
                        var n = t * this.oNumbersImgData.oData.spriteWidth % this.oNumbersImgData.img.width,
                            r = Math.floor(t / (this.oNumbersImgData.img.width / this.oNumbersImgData.oData.spriteWidth)) * this.oNumbersImgData.oData.spriteHeight;
                        e.drawImage(this.oNumbersImgData.img, n, r, this.oNumbersImgData.oData.spriteWidth, this.oNumbersImgData.oData.spriteHeight, 268 + o * this.numberSpace - this.numberSpace * s.toString().length / 2, 320 + this.posY, this.oNumbersImgData.oData.spriteWidth, this.oNumbersImgData.oData.spriteHeight)
                    }
                    for (var o = 0; o < this.oScoreData.stars; o++) e.drawImage(this.oGoldFishImgData.img, 52 + 82 * o, 155 + this.aStarPos[o].posY);
                    break;
                case "tutorial0":
                case "tutorial1":
                case "tutorial2":
                case "tutorial3":
                    var t = parseFloat(this.panelType.charAt(this.panelType.length - 1)),
                        n = t * this.oTutorialsImgData.oData.spriteWidth % this.oTutorialsImgData.img.width,
                        r = Math.floor(t / (this.oTutorialsImgData.img.width / this.oTutorialsImgData.oData.spriteWidth)) * this.oTutorialsImgData.oData.spriteHeight;
                    e.drawImage(this.oTutorialsImgData.img, n, r, this.oTutorialsImgData.oData.spriteWidth, this.oTutorialsImgData.oData.spriteHeight, 0, 0 + this.posY, this.oTutorialsImgData.oData.spriteWidth, this.oTutorialsImgData.oData.spriteHeight);
                    break;
                case "pause":
                    var t = 2,
                        n = t * this.oPanelsImgData.oData.spriteWidth % this.oPanelsImgData.img.width,
                        r = Math.floor(t / (this.oPanelsImgData.img.width / this.oPanelsImgData.oData.spriteWidth)) * this.oPanelsImgData.oData.spriteHeight;
                    e.drawImage(this.oPanelsImgData.img, n, r, this.oPanelsImgData.oData.spriteWidth, this.oPanelsImgData.oData.spriteHeight, 0, 0, this.oPanelsImgData.oData.spriteWidth, this.oPanelsImgData.oData.spriteHeight)
            }
        }, e
    }();
    e.Panel = t
}(Elements || (Elements = {}));
var Elements;
! function(e) {
    var t = function() {
        function e(e, t, n, r, i, s) {
            this.score = 0, this.letterSpace = 18, this.oHudImgData = e, this.oNumbersImgData = t, this.canvasWidth = n, this.canvasHeight = r, this.score = i, this.levelNum = s
        }
        return e.prototype.render = function(e) {
            e.drawImage(this.oHudImgData.img, 0, 0);
            for (var t = 0; t < this.levelNum.toString().length; t++) {
                var n = parseFloat(this.levelNum.toString().charAt(t)),
                    r = n * this.oNumbersImgData.oData.spriteWidth % this.oNumbersImgData.img.width,
                    i = Math.floor(n / (this.oNumbersImgData.img.width / this.oNumbersImgData.oData.spriteWidth)) * this.oNumbersImgData.oData.spriteHeight;
                e.drawImage(this.oNumbersImgData.img, r, i, this.oNumbersImgData.oData.spriteWidth, this.oNumbersImgData.oData.spriteHeight, 65 + t * this.letterSpace, 40, this.oNumbersImgData.oData.spriteWidth, this.oNumbersImgData.oData.spriteHeight)
            }
            if (this.score > 0)
                for (var t = 0; t < this.score.toString().length; t++) {
                    var n = parseFloat(this.score.toString().charAt(t)),
                        r = n * this.oNumbersImgData.oData.spriteWidth % this.oNumbersImgData.img.width,
                        i = Math.floor(n / (this.oNumbersImgData.img.width / this.oNumbersImgData.oData.spriteWidth)) * this.oNumbersImgData.oData.spriteHeight;
                    e.drawImage(this.oNumbersImgData.img, r, i, this.oNumbersImgData.oData.spriteWidth, this.oNumbersImgData.oData.spriteHeight, 170 + t * this.letterSpace - this.letterSpace * this.score.toString().length / 2, 10, this.oNumbersImgData.oData.spriteWidth, this.oNumbersImgData.oData.spriteHeight)
                }
        }, e.prototype.updateScore = function(e) {
            this.score = e
        }, e
    }();
    e.Hud = t
}(Elements || (Elements = {}));
var __extends = this.__extends || function(e, t) {
        function n() {
            this.constructor = e
        }
        n.prototype = t.prototype, e.prototype = new n
    },
    Elements;
! function(e) {
    var t = function(e) {
        function t(t, n, r, i) {
            e.call(this, t, 2, 43, "normal" + n.colourId), this.radian = Math.PI / 180, this.angle = 0, this.state = "held", this.skipBubble = null, this.isOnFire = !1, this.inc = 0, this.vx = 0, this.vy = 0, this.m = 1, this.f = 1, this.b = 1, this.oData = n, this.x = this.oData.x, this.y = this.oData.y + 10, this.p0 = {
                x: this.x,
                y: this.y
            }, this.p1 = {
                x: this.x,
                y: this.y
            }, this.offsetY = 10, this.canvasWidth = r, this.canvasHeight = i, this.updateFunc = this.updateHeld
        }
        return __extends(t, e), t.prototype.caught = function(e) {
            this.state = "caught", this.isOnFire = !1, this.caughtBubble = e, this.updateFunc = this.updateCaught, this.setAnimType("loop", "normal" + this.oData.colourId), -1 == this.caughtBubble.movingDir && TweenLite.to(this, .7, {
                x: this.caughtBubble.x,
                y: this.caughtBubble.y,
                ease: "Elastic.easeOut"
            }), this.fps = 2
        }, t.prototype.stung = function() {
            this.state = "stung", this.isOnFire = !1, this.updateFunc = this.updateStung, this.setAnimType("loop", "stung")
        }, t.prototype.thrown = function(e, t) {
            this.rotation = Math.atan2(e - this.x, -(t - this.y)), this.state = "flying", this.p0 = {
                x: this.x,
                y: this.y
            }, this.p1 = {
                x: this.x,
                y: this.y
            }, this.vx = 4 * Math.cos(this.rotation - 90 * this.radian), this.vy = 4 * Math.sin(this.rotation - 90 * this.radian), this.updateFunc = this.updateFlying
        }, t.prototype.release = function(e) {
            TweenLite.killTweensOf(this), this.state = "flying", this.updateFunc = this.updateFlying, this.skipBubble = e, this.vx = 4 * Math.cos(this.rotation - 90 * this.radian), this.vy = 4 * Math.sin(this.rotation - 90 * this.radian), this.p0 = {
                x: this.x,
                y: this.y
            }, this.p1 = {
                x: this.x,
                y: this.y
            }, "fire" == e.oData.subType && (this.setAnimType("loop", "onFire"), this.fps = 10, this.isOnFire = !0)
        }, t.prototype.update = function(e, t, n) {
            this.updateFunc(e, t, n)
        }, t.prototype.updateFlying = function(t, n, r) {
            e.prototype.updateAnimation.call(this, r), this.vy = this.vy + 5 * r, this.angle = Math.atan2(this.vy, this.vx) + 90 * this.radian, this.angle - this.rotation > 180 * this.radian ? this.angle -= 360 * this.radian : this.angle - this.rotation < -180 * this.radian && (this.angle += 360 * this.radian), this.rotation -= 60 * ((this.rotation - this.angle) / 5) * r, this.y > this.canvasHeight + 100 && (this.removeMe = !0)
        }, t.prototype.updateStung = function(t, n, r) {
            e.prototype.updateAnimation.call(this, r), this.vy = this.vy + 5 * r, this.y += this.vy, this.rotation += this.vy / 100, this.y > this.canvasHeight + 100 && (this.removeMe = !0)
        }, t.prototype.updateCaught = function(t, n, r) {
            e.prototype.updateAnimation.call(this, r), -1 != this.caughtBubble.movingDir && (this.x = this.caughtBubble.x, this.y = this.caughtBubble.y)
        }, t.prototype.updateHeld = function(t, n, r) {
            e.prototype.updateAnimation.call(this, r), this.x = t, this.y -= (this.y - n + 20) / 5, this.inc += r, this.rotation = Math.sin(20 * this.inc) / 5
        }, t
    }(Utils.AnimSprite);
    e.Fish = t
}(Elements || (Elements = {}));
var Elements;
! function(e) {
    var t = function(e) {
        function t(t, n, r, i, s) {
            e.call(this, t, 20, 20, r.subType), this.state = "normal", this.movingDir = -1, this.isBiggerX = !0, this.vx = 0, this.vy = 0, this.m = 1, this.f = 1, this.b = 1, this.oData = r, this.subType = r.subType, this.offsetY = -24, this.offsetX = 2, this.frameInc = Math.ceil(10 * Math.random()), this.x = this.oData.p0.x, this.y = this.oData.p0.y, this.p0 = this.oData.p0, this.p1 = this.oData.p1, (this.p0.x != this.p1.x || this.p0.y != this.p1.y) && (this.movingDir = 0), Math.abs(this.p0.x - this.p1.x) < Math.abs(this.p0.y - this.p1.y) && (this.isBiggerX = !1), this.id = n, this.canvasWidth = i, this.canvasHeight = s
        }
        return __extends(t, e), t.prototype.changeState = function(e, t) {
            switch (this.state = e, this.state) {
                case "holding":
                    this.setAnimType("loop", this.state);
                    break;
                case "caught":
                    this.caughtFish = t.caughtFish, "normal" == this.subType ? (this.animEndedFunc = function() {
                        this.changeState("holding")
                    }, this.setAnimType("once", this.state)) : "fire" == this.subType;
                    break;
                case "normal":
                    this.setAnimType("loop", this.state), this.subType = "normal"
            }
        }, t.prototype.update = function(t) {
            e.prototype.updateAnimation.call(this, t), 0 == this.movingDir ? (this.x -= (this.p0.x - this.p1.x) / 3 * t, this.y -= (this.p0.y - this.p1.y) / 3 * t, this.isBiggerX ? (this.p0.x < this.p1.x && this.x > this.p1.x || this.p1.x < this.p0.x && this.x < this.p1.x) && (this.movingDir = 1) : (this.p0.y < this.p1.y && this.y > this.p1.y || this.p1.y < this.p0.y && this.y < this.p1.y) && (this.movingDir = 1)) : 1 == this.movingDir && (this.x += (this.p0.x - this.p1.x) / 3 * t, this.y += (this.p0.y - this.p1.y) / 3 * t, this.isBiggerX ? (this.p0.x < this.p1.x && this.x < this.p0.x || this.p1.x < this.p0.x && this.x > this.p0.x) && (this.movingDir = 0) : (this.p0.y < this.p1.y && this.y < this.p0.y || this.p1.y < this.p0.y && this.y > this.p0.y) && (this.movingDir = 0))
        }, t
    }(Utils.AnimSprite);
    e.Bubble = t
}(Elements || (Elements = {}));
var Elements;
! function(e) {
    var t = function(e) {
        function t(t, n, r, i) {
            e.call(this, t, 24, 15, "ambient"), this.acc = 0, this.targX = 0, this.isMoving = !1, this.rightPull = 0, this.leftPull = 0, this.oBaseImgData = t, this.oData = n, this.offsetY = -20, this.x = this.oData.x, this.y = this.oData.y, this.canvasWidth = r, this.canvasHeight = i
        }
        return __extends(t, e), t.prototype.update = function(t) {
            e.prototype.updateAnimation.call(this, t), this.isMoving ? this.acc = Math.max(Math.min((this.targX - this.x) / 10, 4), -4) : this.acc *= .5, this.x += 60 * this.acc * t
        }, t.prototype.startMoving = function(e) {
            this.targX = Math.max(Math.min(e, 308), 75), this.isMoving = !0, e > this.x && "walkRight" != this.animId ? this.setAnimType("loop", "walkRight") : e < this.x && "walkLeft" != this.animId && this.setAnimType("loop", "walkLeft")
        }, t.prototype.throwFish = function() {
            this.animEndedFunc = function() {
                this.stopMoving()
            }, this.setAnimType("once", "throwFish")
        }, t.prototype.stopMoving = function() {
            this.isMoving = !1, this.setAnimType("loop", "ambient")
        }, t
    }(Utils.AnimSprite);
    e.Base = t
}(Elements || (Elements = {}));
var Elements;
! function(e) {
    var t = function(e) {
        function t(t, n, r, i) {
            e.call(this, t, 0, 0), this.radian = Math.PI / 180, this.oData = n, this.x = (this.oData.p1.x - this.oData.p0.x) / 2 + this.oData.p0.x, this.y = (this.oData.p1.y - this.oData.p0.y) / 2 + this.oData.p0.y, this.rotation = Math.atan2(this.oData.p1.x - this.oData.p0.x, -(this.oData.p1.y - this.oData.p0.y)) - 90 * this.radian, this.canvasWidth = r, this.canvasHeight = i
        }
        return __extends(t, e), t
    }(Utils.BasicSprite);
    e.Log = t
}(Elements || (Elements = {}));
var Utils;
! function(e) {
    var t = function() {
        function e(e, t) {
            this.aLines = new Array, this.aFishes = new Array, this.aBalls = new Array, this.aLines = e, this.defrostBubble = t, this.inc = 1;
            for (var n = 0; n < this.aLines.length; n++) this.updateVector(this.aLines[n], null, !0)
        }
        return e.prototype.drawAll = function(e) {
            for (var t = 0; t < this.aFishes.length; t++)
                if ("flying" == this.aFishes[t].state) {
                    var n = this.aFishes[t];
                    n.x = n.p1.x, n.y = n.p1.y, n.p0 = n.p1, this.updateVector(n, e)
                }
        }, e.prototype.update = function(e) {
            var t;
            for (t = 0; t < this.aFishes.length; t++)
                if ("flying" == this.aFishes[t].state) {
                    var n = this.aFishes[t];
                    this.updateVector(n, e);
                    for (var r = 0; r < this.aLines.length; r++) {
                        this.fi = this.findIntersection(n, this.aLines[r]), this.updateVector(this.fi, e, !1);
                        var i = n.radius - this.fi.len;
                        if (i >= 0) {
                            "ice" == this.aLines[r].subType ? this.aFishes[t].isOnFire ? this.defrostBubble(this.aLines[r].id) : playSound("hitIce") : playSound("hitSide"), n.p1.x += this.fi.dx * i, n.p1.y += this.fi.dy * i;
                            var s = {
                                    dx: this.fi.lx,
                                    dy: this.fi.ly,
                                    lx: this.fi.dx,
                                    ly: this.fi.dy,
                                    b: 1,
                                    f: 1
                                },
                                o = this.bounce(n, s);
                            n.vx = o.vx, n.vy = o.vy
                        }
                    }
                }
            this.drawAll(e)
        }, e.prototype.updateVector = function(e, t, n) {
            "undefined" == typeof n && (n = !1), null == t && (t = .016), 1 == n ? (e.vx = e.p1.x - e.p0.x, e.vy = e.p1.y - e.p0.y) : (e.p1.x = e.p0.x + 60 * e.vx * t, e.p1.y = e.p0.y + 60 * e.vy * t), this.makeVector(e)
        }, e.prototype.makeVector = function(e) {
            e.len = Math.sqrt(e.vx * e.vx + e.vy * e.vy), e.len > 0 ? (e.dx = e.vx / e.len, e.dy = e.vy / e.len) : (e.dx = 0, e.dy = 0), e.rx = -e.dy, e.ry = e.dx, e.lx = e.dy, e.ly = -e.dx
        }, e.prototype.dotP = function(e, t) {
            var n = e.vx * t.vx + e.vy * t.vy;
            return n
        }, e.prototype.projectVector = function(e, t, n) {
            var r = e.vx * t + e.vy * n,
                i = {};
            return i.vx = r * t, i.vy = r * n, i
        }, e.prototype.bounceBalls = function(e, t, n) {
            var r = this.projectVector(e, n.dx, n.dy),
                i = this.projectVector(e, n.lx, n.ly),
                s = this.projectVector(t, n.dx, n.dy),
                o = this.projectVector(t, n.lx, n.ly),
                u = e.m * r.vx + t.m * s.vx,
                a = r.vx - s.vx,
                f = (u + a * e.m) / (e.m + t.m),
                l = f - a;
            u = e.m * r.vy + t.m * s.vy, a = r.vy - s.vy;
            var c = (u + a * e.m) / (e.m + t.m),
                h = c - a,
                p = {};
            return p.vx1 = i.vx + l, p.vy1 = i.vy + h, p.vx2 = o.vx + f, p.vy2 = o.vy + c, p
        }, e.prototype.bounce = function(e, t) {
            var n = this.projectVector(e, t.dx, t.dy),
                r = this.projectVector(e, t.lx, t.ly),
                i = {};
            return r.len = Math.sqrt(r.vx * r.vx + r.vy * r.vy), r.vx = t.lx * r.len, r.vy = t.ly * r.len, i.vx = e.f * t.f * n.vx + e.b * t.b * r.vx, i.vy = e.f * t.f * n.vy + e.b * t.b * r.vy, i
        }, e.prototype.findIntersection = function(e, t) {
            var n = {},
                r = {};
            r.vx = e.p1.x - t.p0.x, r.vy = e.p1.y - t.p0.y;
            var i = r.vx * t.dx + r.vy * t.dy;
            if (0 > i) n = r;
            else {
                var s = {};
                s.vx = e.p1.x - t.p1.x, s.vy = e.p1.y - t.p1.y, i = s.vx * t.dx + s.vy * t.dy, n = i > 0 ? s : this.projectVector(r, t.lx, t.ly)
            }
            return n.p0 = {
                x: 0,
                y: 0
            }, n.p1 = {
                x: 0,
                y: 0
            }, n
        }, e
    }();
    e.Physics2D = t
}(Utils || (Utils = {}));
var requestAnimFrame = function() {
        return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(e) {
            window.setTimeout(e, 1e3 / 60, (new Date).getTime())
        }
    }(),
    previousTime, canvas = document.getElementById("canvas"),
    ctx = canvas.getContext("2d");
canvas.width = 383, canvas.height = 550;
var canvasX, canvasY, canvasScaleX, canvasScaleY, div = document.getElementById("viewporter"),
    sound, music, audioType = 0,
    muted = !1,
    splash, splashTimer = 0,
    assetLib, preAssetLib, rotatePause = !1,
    manualPause = !1,
    isMobile = !1,
    gameState = "loading",
    aLangs = new Array("EN"),
    curLang = "",
    isBugBrowser = !1,
    spilAPI, oLogoData = {},
    oMoreGamesData = {},
    isIE10 = !1;
navigator.userAgent.match(/MSIE\s([\d]+)/) && (isIE10 = !0);
var deviceAgent = navigator.userAgent.toLowerCase();
(deviceAgent.match(/(iphone|ipod|ipad)/) || deviceAgent.match(/(android)/) || deviceAgent.match(/(iemobile)/) || deviceAgent.match(/iphone/i) || deviceAgent.match(/ipad/i) || deviceAgent.match(/ipod/i) || deviceAgent.match(/blackberry/i) || deviceAgent.match(/bada/i)) && (isMobile = !0, deviceAgent.match(/(android)/) && !/Chrome/.test(navigator.userAgent) && (isBugBrowser = !0));
var userInput = new Utils.UserInput(canvas, isBugBrowser);
resizeCanvas(), window.onresize = function() {
    setTimeout(function() {
        resizeCanvas()
    }, 1)
}, document.addEventListener("visibilitychange", function() {
    document.hidden ? Howler.mute() : muted || Howler.unmute()
}, !1), window.addEventListener("load", function() {
    setTimeout(function() {
        resizeCanvas()
    }, 0), window.addEventListener("orientationchange", function() {
        resizeCanvas()
    }, !1), GameAPI.loadAPI(function(e) {
        spilAPI = e;
        if (spilAPI.Branding.getLogo().image) {
            oLogoData = spilAPI.Branding.getLogo()
        } else {
            oLogoData = spilAPI.Branding.getLogo();
            oLogoData.image = "images/blank.png"
        }
        oMoreGamesData = spilAPI.Branding.getLink("more_games");
        curLang = aLangs[0], loadAssets()
    }, {
        id: "576742227280291504"
    })
}), isIE10 || "undefined" == typeof window.AudioContext && "undefined" == typeof window.webkitAudioContext && -1 != navigator.userAgent.indexOf("Android") ? audioType = 0 : (audioType = 1, sound = new Howl({
    urls: ["audio/sound.ogg", "audio/sound.m4a"],
    sprite: {
        bubbleLand1: [0, 350],
        bubbleLand2: [500, 350],
        bubbleLand3: [1e3, 350],
        bubbleLand4: [1500, 350],
        crabThrow: [2e3, 750],
        hitJellyfish: [3e3, 850],
        hitIce: [4e3, 350],
        breakIce: [4500, 800],
        launchFire: [5500, 800],
        hitSide: [6500, 500],
        newFish: [7500, 1750],
        levelComplete: [9500, 2e3],
        click: [12e3, 350]
    }
}), music = new Howl({
    urls: ["audio/music.ogg", "audio/music.m4a"],
    volume: .25,
    loop: !0
}));
var panel, hud, background, levelScore = 0,
    levelNum = 0,
    aLevelUps, bonusScore, aTutorials = new Array({
        levelNum: 0,
        shown: !1,
        panelType: "tutorial0"
    }, {
        levelNum: 2,
        shown: !1,
        panelType: "tutorial1"
    }, {
        levelNum: 4,
        shown: !1,
        panelType: "tutorial2"
    }, {
        levelNum: 11,
        shown: !1,
        panelType: "tutorial3"
    }),
    panelFrame, aBubbles, aFishes, aLogs, physics2D, base, fishCaught, fishColourInc = 0,
    levelCompleteTimer = -1,
    tutorialIsOn, levelButsPage = 0,
    levelThrows, bubbleTarg, oLogoBut, aLevelData = new Array([{
        type: "bubble",
        p0: {
            x: 192,
            y: 318
        },
        p1: {
            x: 192,
            y: 318
        },
        subType: "normal"
    }], [{
        type: "line",
        p0: {
            x: 0,
            y: 0
        },
        p1: {
            x: 275,
            y: 145
        },
        subType: "log"
    }, {
        type: "bubble",
        p0: {
            x: 292,
            y: 338
        },
        p1: {
            x: 292,
            y: 338
        },
        subType: "normal"
    }, {
        type: "bubble",
        p0: {
            x: 92,
            y: 338
        },
        p1: {
            x: 92,
            y: 338
        },
        subType: "normal"
    }, {
        type: "bubble",
        p0: {
            x: 192,
            y: 308
        },
        p1: {
            x: 192,
            y: 308
        },
        subType: "normal"
    }], [{
        type: "bubble",
        p0: {
            x: 192,
            y: 223
        },
        p1: {
            x: 192,
            y: 223
        },
        subType: "normal"
    }, {
        type: "bubble",
        p0: {
            x: 192,
            y: 336
        },
        p1: {
            x: 192,
            y: 336
        },
        subType: "normal"
    }], [{
        type: "bubble",
        p0: {
            x: 192,
            y: 112
        },
        p1: {
            x: 192,
            y: 112
        },
        subType: "normal"
    }, {
        type: "bubble",
        p0: {
            x: 192,
            y: 223
        },
        p1: {
            x: 192,
            y: 223
        },
        subType: "normal"
    }, {
        type: "bubble",
        p0: {
            x: 192,
            y: 336
        },
        p1: {
            x: 192,
            y: 336
        },
        subType: "normal"
    }], [{
        type: "bubble",
        p0: {
            x: 293,
            y: 239
        },
        p1: {
            x: 293,
            y: 239
        },
        subType: "normal"
    }, {
        type: "bubble",
        p0: {
            x: 197,
            y: 344
        },
        p1: {
            x: 197,
            y: 344
        },
        subType: "normal"
    }], [{
        type: "bubble",
        p0: {
            x: 126,
            y: 249
        },
        p1: {
            x: 218,
            y: 277
        },
        subType: "normal"
    }, {
        type: "line",
        p0: {
            x: 514,
            y: 130
        },
        p1: {
            x: 323,
            y: 192
        },
        subType: "log"
    }, {
        type: "line",
        p0: {
            x: -166,
            y: 211
        },
        p1: {
            x: 28,
            y: 261
        },
        subType: "log"
    }, {
        type: "bubble",
        p0: {
            x: 64,
            y: 199
        },
        p1: {
            x: 64,
            y: 199
        },
        subType: "normal"
    }, {
        type: "bubble",
        p0: {
            x: 259,
            y: 174
        },
        p1: {
            x: 259,
            y: 174
        },
        subType: "normal"
    }, {
        type: "bubble",
        p0: {
            x: 298,
            y: 263
        },
        p1: {
            x: 298,
            y: 263
        },
        subType: "normal"
    }, {
        type: "bubble",
        p0: {
            x: 166,
            y: 160
        },
        p1: {
            x: 166,
            y: 160
        },
        subType: "normal"
    }, {
        type: "bubble",
        p0: {
            x: 67,
            y: 325
        },
        p1: {
            x: 67,
            y: 325
        },
        subType: "normal"
    }, {
        type: "bubble",
        p0: {
            x: 280,
            y: 350
        },
        p1: {
            x: 280,
            y: 350
        },
        subType: "normal"
    }, {
        type: "bubble",
        p0: {
            x: 163,
            y: 356
        },
        p1: {
            x: 163,
            y: 356
        },
        subType: "normal"
    }], [{
        type: "bubble",
        p0: {
            x: 331,
            y: 250
        },
        p1: {
            x: 331,
            y: 250
        },
        subType: "normal"
    }, {
        type: "bubble",
        p0: {
            x: 289,
            y: 345
        },
        p1: {
            x: 289,
            y: 345
        },
        subType: "normal"
    }, {
        type: "line",
        p0: {
            x: -63,
            y: 174
        },
        p1: {
            x: 88,
            y: 304
        },
        subType: "log"
    }, {
        type: "bubble",
        p0: {
            x: 152,
            y: 230
        },
        p1: {
            x: 152,
            y: 230
        },
        subType: "normal"
    }, {
        type: "bubble",
        p0: {
            x: 40,
            y: 143
        },
        p1: {
            x: 343,
            y: 143
        },
        subType: "normal"
    }, {
        type: "bubble",
        p0: {
            x: 192,
            y: 328
        },
        p1: {
            x: 192,
            y: 328
        },
        subType: "normal"
    }], [{
        type: "line",
        p0: {
            x: 168,
            y: 43
        },
        p1: {
            x: 364,
            y: 1
        },
        subType: "log"
    }, {
        type: "bubble",
        p0: {
            x: 192,
            y: 173
        },
        p1: {
            x: 192,
            y: 173
        },
        subType: "normal"
    }, {
        type: "bubble",
        p0: {
            x: 192,
            y: 293
        },
        p1: {
            x: 192,
            y: 293
        },
        subType: "normal"
    }, {
        type: "bubble",
        p0: {
            x: 40,
            y: 113
        },
        p1: {
            x: 343,
            y: 113
        },
        subType: "normal"
    }, {
        type: "bubble",
        p0: {
            x: 343,
            y: 233
        },
        p1: {
            x: 40,
            y: 233
        },
        subType: "normal"
    }, {
        type: "bubble",
        p0: {
            x: 40,
            y: 353
        },
        p1: {
            x: 343,
            y: 353
        },
        subType: "normal"
    }], [{
        type: "bubble",
        p0: {
            x: 186,
            y: 250
        },
        p1: {
            x: 186,
            y: 250
        },
        subType: "normal"
    }, {
        type: "bubble",
        p0: {
            x: 237,
            y: 304
        },
        p1: {
            x: 237,
            y: 304
        },
        subType: "normal"
    }, {
        type: "bubble",
        p0: {
            x: 131,
            y: 304
        },
        p1: {
            x: 131,
            y: 304
        },
        subType: "normal"
    }, {
        type: "bubble",
        p0: {
            x: 85,
            y: 367
        },
        p1: {
            x: 285,
            y: 367
        },
        subType: "jellyfish"
    }], [{
        type: "bubble",
        p0: {
            x: 87,
            y: 104
        },
        p1: {
            x: 87,
            y: 104
        },
        subType: "normal"
    }, {
        type: "bubble",
        p0: {
            x: 86,
            y: 235
        },
        p1: {
            x: 86,
            y: 235
        },
        subType: "normal"
    }, {
        type: "bubble",
        p0: {
            x: 83,
            y: 363
        },
        p1: {
            x: 83,
            y: 363
        },
        subType: "normal"
    }, {
        type: "bubble",
        p0: {
            x: 297,
            y: 104
        },
        p1: {
            x: 297,
            y: 104
        },
        subType: "normal"
    }, {
        type: "bubble",
        p0: {
            x: 296,
            y: 235
        },
        p1: {
            x: 296,
            y: 235
        },
        subType: "normal"
    }, {
        type: "bubble",
        p0: {
            x: 293,
            y: 363
        },
        p1: {
            x: 293,
            y: 363
        },
        subType: "normal"
    }, {
        type: "bubble",
        p0: {
            x: 300,
            y: 169
        },
        p1: {
            x: 80,
            y: 171
        },
        subType: "jellyfish"
    }, {
        type: "bubble",
        p0: {
            x: 187,
            y: 104
        },
        p1: {
            x: 187,
            y: 104
        },
        subType: "normal"
    }, {
        type: "bubble",
        p0: {
            x: 186,
            y: 235
        },
        p1: {
            x: 186,
            y: 235
        },
        subType: "normal"
    }, {
        type: "bubble",
        p0: {
            x: 183,
            y: 363
        },
        p1: {
            x: 183,
            y: 363
        },
        subType: "normal"
    }, {
        type: "bubble",
        p0: {
            x: 73,
            y: 301
        },
        p1: {
            x: 293,
            y: 299
        },
        subType: "jellyfish"
    }], [{
        type: "bubble",
        p0: {
            x: 118,
            y: 236
        },
        p1: {
            x: 204,
            y: 236
        },
        subType: "jellyfish"
    }, {
        type: "bubble",
        p0: {
            x: 52,
            y: 195
        },
        p1: {
            x: 52,
            y: 195
        },
        subType: "normal"
    }, {
        type: "bubble",
        p0: {
            x: 52,
            y: 284
        },
        p1: {
            x: 52,
            y: 284
        },
        subType: "normal"
    }, {
        type: "bubble",
        p0: {
            x: 49,
            y: 103
        },
        p1: {
            x: 334,
            y: 207
        },
        subType: "normal"
    }, {
        type: "bubble",
        p0: {
            x: 49,
            y: 367
        },
        p1: {
            x: 334,
            y: 263
        },
        subType: "normal"
    }], [{
        type: "bubble",
        p0: {
            x: 201,
            y: 246
        },
        p1: {
            x: 201,
            y: 246
        },
        subType: "ice"
    }, {
        type: "bubble",
        p0: {
            x: 121,
            y: 298
        },
        p1: {
            x: 121,
            y: 298
        },
        subType: "ice"
    }, {
        type: "bubble",
        p0: {
            x: 260,
            y: 324
        },
        p1: {
            x: 260,
            y: 324
        },
        subType: "ice"
    }, {
        type: "bubble",
        p0: {
            x: 182,
            y: 372
        },
        p1: {
            x: 182,
            y: 372
        },
        subType: "fire"
    }], [{
        type: "bubble",
        p0: {
            x: 195,
            y: 98
        },
        p1: {
            x: 195,
            y: 98
        },
        subType: "normal"
    }, {
        type: "bubble",
        p0: {
            x: 194,
            y: 215
        },
        p1: {
            x: 194,
            y: 215
        },
        subType: "normal"
    }, {
        type: "bubble",
        p0: {
            x: 332,
            y: 115
        },
        p1: {
            x: 332,
            y: 115
        },
        subType: "normal"
    }, {
        type: "bubble",
        p0: {
            x: 62,
            y: 115
        },
        p1: {
            x: 62,
            y: 115
        },
        subType: "normal"
    }, {
        type: "bubble",
        p0: {
            x: 272,
            y: 218
        },
        p1: {
            x: 272,
            y: 218
        },
        subType: "ice"
    }, {
        type: "bubble",
        p0: {
            x: 122,
            y: 218
        },
        p1: {
            x: 122,
            y: 218
        },
        subType: "ice"
    }, {
        type: "bubble",
        p0: {
            x: 192,
            y: 339
        },
        p1: {
            x: 192,
            y: 339
        },
        subType: "fire"
    }], [{
        type: "bubble",
        p0: {
            x: 191,
            y: 362
        },
        p1: {
            x: 191,
            y: 362
        },
        subType: "normal"
    }, {
        type: "bubble",
        p0: {
            x: 85,
            y: 365
        },
        p1: {
            x: 85,
            y: 365
        },
        subType: "normal"
    }, {
        type: "bubble",
        p0: {
            x: 298,
            y: 220
        },
        p1: {
            x: 298,
            y: 220
        },
        subType: "normal"
    }, {
        type: "bubble",
        p0: {
            x: 344,
            y: 283
        },
        p1: {
            x: 344,
            y: 283
        },
        subType: "normal"
    }, {
        type: "bubble",
        p0: {
            x: 241,
            y: 287
        },
        p1: {
            x: 241,
            y: 287
        },
        subType: "normal"
    }, {
        type: "bubble",
        p0: {
            x: 341,
            y: 139
        },
        p1: {
            x: 341,
            y: 139
        },
        subType: "fire"
    }, {
        type: "bubble",
        p0: {
            x: 34,
            y: 250
        },
        p1: {
            x: 34,
            y: 250
        },
        subType: "ice"
    }, {
        type: "bubble",
        p0: {
            x: 289,
            y: 348
        },
        p1: {
            x: 289,
            y: 348
        },
        subType: "normal"
    }, {
        type: "line",
        p0: {
            x: 129,
            y: 320
        },
        p1: {
            x: 254,
            y: 164
        },
        subType: "log"
    }], [{
        type: "bubble",
        p0: {
            x: 83,
            y: 359
        },
        p1: {
            x: 83,
            y: 359
        },
        subType: "normal"
    }, {
        type: "bubble",
        p0: {
            x: 52,
            y: 224
        },
        p1: {
            x: 52,
            y: 224
        },
        subType: "normal"
    }, {
        type: "bubble",
        p0: {
            x: 315,
            y: 355
        },
        p1: {
            x: 315,
            y: 355
        },
        subType: "normal"
    }, {
        type: "bubble",
        p0: {
            x: 188,
            y: 383
        },
        p1: {
            x: 122,
            y: 195
        },
        subType: "normal"
    }, {
        type: "bubble",
        p0: {
            x: 157,
            y: 118
        },
        p1: {
            x: 227,
            y: 306
        },
        subType: "normal"
    }, {
        type: "bubble",
        p0: {
            x: 342,
            y: 111
        },
        p1: {
            x: 342,
            y: 111
        },
        subType: "normal"
    }, {
        type: "bubble",
        p0: {
            x: 281,
            y: 125
        },
        p1: {
            x: 281,
            y: 125
        },
        subType: "normal"
    }, {
        type: "bubble",
        p0: {
            x: 219,
            y: 116
        },
        p1: {
            x: 219,
            y: 116
        },
        subType: "normal"
    }, {
        type: "bubble",
        p0: {
            x: 306,
            y: 218
        },
        p1: {
            x: 306,
            y: 218
        },
        subType: "normal"
    }, {
        type: "bubble",
        p0: {
            x: 96,
            y: 113
        },
        p1: {
            x: 96,
            y: 113
        },
        subType: "normal"
    }, {
        type: "bubble",
        p0: {
            x: 39,
            y: 109
        },
        p1: {
            x: 39,
            y: 109
        },
        subType: "normal"
    }], [{
        type: "line",
        p0: {
            x: 183,
            y: 16
        },
        p1: {
            x: 366,
            y: 96
        },
        subType: "log"
    }, {
        type: "line",
        p0: {
            x: -1,
            y: 69
        },
        p1: {
            x: 197,
            y: 43
        },
        subType: "log"
    }, {
        type: "bubble",
        p0: {
            x: 272,
            y: 129
        },
        p1: {
            x: 272,
            y: 129
        },
        subType: "ice"
    }, {
        type: "bubble",
        p0: {
            x: 100,
            y: 132
        },
        p1: {
            x: 100,
            y: 132
        },
        subType: "ice"
    }, {
        type: "bubble",
        p0: {
            x: 189,
            y: 222
        },
        p1: {
            x: 189,
            y: 222
        },
        subType: "fire"
    }, {
        type: "bubble",
        p0: {
            x: 324,
            y: 273
        },
        p1: {
            x: 324,
            y: 273
        },
        subType: "normal"
    }, {
        type: "bubble",
        p0: {
            x: 280,
            y: 322
        },
        p1: {
            x: 280,
            y: 322
        },
        subType: "normal"
    }, {
        type: "bubble",
        p0: {
            x: 217,
            y: 346
        },
        p1: {
            x: 217,
            y: 346
        },
        subType: "normal"
    }, {
        type: "bubble",
        p0: {
            x: 156,
            y: 344
        },
        p1: {
            x: 156,
            y: 344
        },
        subType: "normal"
    }, {
        type: "bubble",
        p0: {
            x: 104,
            y: 320
        },
        p1: {
            x: 104,
            y: 320
        },
        subType: "normal"
    }, {
        type: "bubble",
        p0: {
            x: 60,
            y: 280
        },
        p1: {
            x: 60,
            y: 280
        },
        subType: "normal"
    }], [{
        type: "bubble",
        p0: {
            x: 219,
            y: 314
        },
        p1: {
            x: 219,
            y: 314
        },
        subType: "fire"
    }, {
        type: "bubble",
        p0: {
            x: 172,
            y: 64
        },
        p1: {
            x: 172,
            y: 64
        },
        subType: "fire"
    }, {
        type: "bubble",
        p0: {
            x: 47,
            y: 134
        },
        p1: {
            x: 47,
            y: 134
        },
        subType: "fire"
    }, {
        type: "bubble",
        p0: {
            x: 186,
            y: 133
        },
        p1: {
            x: 186,
            y: 133
        },
        subType: "fire"
    }, {
        type: "bubble",
        p0: {
            x: 190,
            y: 231
        },
        p1: {
            x: 190,
            y: 231
        },
        subType: "fire"
    }, {
        type: "bubble",
        p0: {
            x: 161,
            y: 290
        },
        p1: {
            x: 161,
            y: 290
        },
        subType: "fire"
    }, {
        type: "bubble",
        p0: {
            x: 324,
            y: 134
        },
        p1: {
            x: 324,
            y: 134
        },
        subType: "fire"
    }, {
        type: "bubble",
        p0: {
            x: 250,
            y: 85
        },
        p1: {
            x: 250,
            y: 85
        },
        subType: "fire"
    }, {
        type: "bubble",
        p0: {
            x: 124,
            y: 109
        },
        p1: {
            x: 124,
            y: 109
        },
        subType: "fire"
    }, {
        type: "bubble",
        p0: {
            x: 48,
            y: 209
        },
        p1: {
            x: 48,
            y: 209
        },
        subType: "ice"
    }, {
        type: "bubble",
        p0: {
            x: 332,
            y: 214
        },
        p1: {
            x: 332,
            y: 214
        },
        subType: "ice"
    }, {
        type: "line",
        p0: {
            x: 305,
            y: 359
        },
        p1: {
            x: 248,
            y: 168
        },
        subType: "log"
    }, {
        type: "line",
        p0: {
            x: 71,
            y: 358
        },
        p1: {
            x: 135,
            y: 169
        },
        subType: "log"
    }], [{
        type: "bubble",
        p0: {
            x: 50,
            y: 260
        },
        p1: {
            x: 50,
            y: 260
        },
        subType: "fire"
    }, {
        type: "bubble",
        p0: {
            x: 337,
            y: 137
        },
        p1: {
            x: 236,
            y: 78
        },
        subType: "normal"
    }, {
        type: "bubble",
        p0: {
            x: 236,
            y: 153
        },
        p1: {
            x: 337,
            y: 211
        },
        subType: "normal"
    }, {
        type: "bubble",
        p0: {
            x: 180,
            y: 286
        },
        p1: {
            x: 180,
            y: 286
        },
        subType: "fire"
    }, {
        type: "bubble",
        p0: {
            x: 106,
            y: 326
        },
        p1: {
            x: 106,
            y: 326
        },
        subType: "fire"
    }, {
        type: "bubble",
        p0: {
            x: 264,
            y: 247
        },
        p1: {
            x: 264,
            y: 247
        },
        subType: "ice"
    }, {
        type: "bubble",
        p0: {
            x: 108,
            y: 183
        },
        p1: {
            x: 108,
            y: 183
        },
        subType: "ice"
    }, {
        type: "bubble",
        p0: {
            x: 33,
            y: 164
        },
        p1: {
            x: 33,
            y: 164
        },
        subType: "ice"
    }, {
        type: "bubble",
        p0: {
            x: 192,
            y: 209
        },
        p1: {
            x: 192,
            y: 209
        },
        subType: "ice"
    }, {
        type: "line",
        p0: {
            x: 215,
            y: 350
        },
        p1: {
            x: 404,
            y: 287
        },
        subType: "log"
    }, {
        type: "line",
        p0: {
            x: -56,
            y: 84
        },
        p1: {
            x: 139,
            y: 130
        },
        subType: "log"
    }], [{
        type: "bubble",
        p0: {
            x: 38,
            y: 96
        },
        p1: {
            x: 94,
            y: 96
        },
        subType: "jellyfish"
    }, {
        type: "bubble",
        p0: {
            x: 213,
            y: 100
        },
        p1: {
            x: 353,
            y: 100
        },
        subType: "jellyfish"
    }, {
        type: "bubble",
        p0: {
            x: 154,
            y: 98
        },
        p1: {
            x: 154,
            y: 98
        },
        subType: "normal"
    }, {
        type: "bubble",
        p0: {
            x: 33,
            y: 159
        },
        p1: {
            x: 351,
            y: 159
        },
        subType: "jellyfish"
    }, {
        type: "bubble",
        p0: {
            x: 247,
            y: 224
        },
        p1: {
            x: 350,
            y: 224
        },
        subType: "jellyfish"
    }, {
        type: "bubble",
        p0: {
            x: 38,
            y: 224
        },
        p1: {
            x: 126,
            y: 224
        },
        subType: "jellyfish"
    }, {
        type: "bubble",
        p0: {
            x: 185,
            y: 224
        },
        p1: {
            x: 185,
            y: 224
        },
        subType: "normal"
    }, {
        type: "bubble",
        p0: {
            x: 33,
            y: 290
        },
        p1: {
            x: 351,
            y: 290
        },
        subType: "jellyfish"
    }, {
        type: "bubble",
        p0: {
            x: 231,
            y: 359
        },
        p1: {
            x: 231,
            y: 359
        },
        subType: "normal"
    }, {
        type: "bubble",
        p0: {
            x: 291,
            y: 358
        },
        p1: {
            x: 347,
            y: 358
        },
        subType: "jellyfish"
    }, {
        type: "bubble",
        p0: {
            x: 32,
            y: 357
        },
        p1: {
            x: 172,
            y: 357
        },
        subType: "jellyfish"
    }], [{
        type: "bubble",
        p0: {
            x: 301,
            y: 252
        },
        p1: {
            x: 301,
            y: 252
        },
        subType: "ice"
    }, {
        type: "bubble",
        p0: {
            x: 58,
            y: 324
        },
        p1: {
            x: 58,
            y: 324
        },
        subType: "fire"
    }, {
        type: "bubble",
        p0: {
            x: 55,
            y: 219
        },
        p1: {
            x: 200,
            y: 355
        },
        subType: "jellyfish"
    }, {
        type: "bubble",
        p0: {
            x: 90,
            y: 72
        },
        p1: {
            x: 290,
            y: 72
        },
        subType: "normal"
    }, {
        type: "bubble",
        p0: {
            x: 244,
            y: 208
        },
        p1: {
            x: 244,
            y: 208
        },
        subType: "fire"
    }, {
        type: "line",
        p0: {
            x: 290,
            y: 167
        },
        p1: {
            x: 433,
            y: 26
        },
        subType: "log"
    }, {
        type: "line",
        p0: {
            x: 146,
            y: 206
        },
        p1: {
            x: 293,
            y: 342
        },
        subType: "log"
    }, {
        type: "line",
        p0: {
            x: -92,
            y: -12
        },
        p1: {
            x: 54,
            y: 124
        },
        subType: "log"
    }, {
        type: "bubble",
        p0: {
            x: 98,
            y: 166
        },
        p1: {
            x: 98,
            y: 166
        },
        subType: "ice"
    }], [{
        type: "bubble",
        p0: {
            x: 187,
            y: 312
        },
        p1: {
            x: 187,
            y: 312
        },
        subType: "normal"
    }, {
        type: "bubble",
        p0: {
            x: 185,
            y: 381
        },
        p1: {
            x: 185,
            y: 381
        },
        subType: "normal"
    }, {
        type: "bubble",
        p0: {
            x: 252,
            y: 376
        },
        p1: {
            x: 252,
            y: 376
        },
        subType: "normal"
    }, {
        type: "bubble",
        p0: {
            x: 123,
            y: 374
        },
        p1: {
            x: 123,
            y: 374
        },
        subType: "normal"
    }, {
        type: "bubble",
        p0: {
            x: 31,
            y: 297
        },
        p1: {
            x: 31,
            y: 297
        },
        subType: "normal"
    }, {
        type: "bubble",
        p0: {
            x: 34,
            y: 179
        },
        p1: {
            x: 34,
            y: 179
        },
        subType: "normal"
    }, {
        type: "bubble",
        p0: {
            x: 343,
            y: 177
        },
        p1: {
            x: 343,
            y: 177
        },
        subType: "normal"
    }, {
        type: "bubble",
        p0: {
            x: 346,
            y: 299
        },
        p1: {
            x: 346,
            y: 299
        },
        subType: "normal"
    }, {
        type: "bubble",
        p0: {
            x: 189,
            y: 160
        },
        p1: {
            x: 189,
            y: 160
        },
        subType: "normal"
    }, {
        type: "bubble",
        p0: {
            x: 254,
            y: 95
        },
        p1: {
            x: 254,
            y: 95
        },
        subType: "normal"
    }, {
        type: "bubble",
        p0: {
            x: 189,
            y: 97
        },
        p1: {
            x: 189,
            y: 97
        },
        subType: "normal"
    }, {
        type: "bubble",
        p0: {
            x: 124,
            y: 96
        },
        p1: {
            x: 124,
            y: 96
        },
        subType: "normal"
    }, {
        type: "bubble",
        p0: {
            x: 30,
            y: 238
        },
        p1: {
            x: 348,
            y: 238
        },
        subType: "jellyfish"
    }, {
        type: "bubble",
        p0: {
            x: 326,
            y: 359
        },
        p1: {
            x: 50,
            y: 117
        },
        subType: "jellyfish"
    }, {
        type: "bubble",
        p0: {
            x: 51,
            y: 359
        },
        p1: {
            x: 326,
            y: 117
        },
        subType: "jellyfish"
    }], [{
        type: "bubble",
        p0: {
            x: 283,
            y: 352
        },
        p1: {
            x: 283,
            y: 352
        },
        subType: "fire"
    }, {
        type: "bubble",
        p0: {
            x: 159,
            y: 349
        },
        p1: {
            x: 159,
            y: 349
        },
        subType: "fire"
    }, {
        type: "bubble",
        p0: {
            x: 34,
            y: 346
        },
        p1: {
            x: 34,
            y: 346
        },
        subType: "fire"
    }, {
        type: "bubble",
        p0: {
            x: 347,
            y: 277
        },
        p1: {
            x: 347,
            y: 277
        },
        subType: "fire"
    }, {
        type: "bubble",
        p0: {
            x: 224,
            y: 282
        },
        p1: {
            x: 224,
            y: 282
        },
        subType: "fire"
    }, {
        type: "bubble",
        p0: {
            x: 348,
            y: 352
        },
        p1: {
            x: 348,
            y: 352
        },
        subType: "ice"
    }, {
        type: "bubble",
        p0: {
            x: 281,
            y: 276
        },
        p1: {
            x: 281,
            y: 276
        },
        subType: "ice"
    }, {
        type: "bubble",
        p0: {
            x: 216,
            y: 352
        },
        p1: {
            x: 216,
            y: 352
        },
        subType: "ice"
    }, {
        type: "bubble",
        p0: {
            x: 163,
            y: 280
        },
        p1: {
            x: 163,
            y: 280
        },
        subType: "ice"
    }, {
        type: "bubble",
        p0: {
            x: 95,
            y: 346
        },
        p1: {
            x: 95,
            y: 346
        },
        subType: "ice"
    }, {
        type: "bubble",
        p0: {
            x: 101,
            y: 277
        },
        p1: {
            x: 101,
            y: 277
        },
        subType: "fire"
    }, {
        type: "bubble",
        p0: {
            x: 39,
            y: 275
        },
        p1: {
            x: 39,
            y: 275
        },
        subType: "ice"
    }, {
        type: "bubble",
        p0: {
            x: 283,
            y: 215
        },
        p1: {
            x: 283,
            y: 215
        },
        subType: "fire"
    }, {
        type: "bubble",
        p0: {
            x: 159,
            y: 212
        },
        p1: {
            x: 159,
            y: 212
        },
        subType: "fire"
    }, {
        type: "bubble",
        p0: {
            x: 34,
            y: 209
        },
        p1: {
            x: 34,
            y: 209
        },
        subType: "fire"
    }, {
        type: "bubble",
        p0: {
            x: 347,
            y: 140
        },
        p1: {
            x: 347,
            y: 140
        },
        subType: "fire"
    }, {
        type: "bubble",
        p0: {
            x: 224,
            y: 145
        },
        p1: {
            x: 224,
            y: 145
        },
        subType: "fire"
    }, {
        type: "bubble",
        p0: {
            x: 348,
            y: 215
        },
        p1: {
            x: 348,
            y: 215
        },
        subType: "ice"
    }, {
        type: "bubble",
        p0: {
            x: 281,
            y: 139
        },
        p1: {
            x: 281,
            y: 139
        },
        subType: "ice"
    }, {
        type: "bubble",
        p0: {
            x: 216,
            y: 215
        },
        p1: {
            x: 216,
            y: 215
        },
        subType: "ice"
    }, {
        type: "bubble",
        p0: {
            x: 163,
            y: 143
        },
        p1: {
            x: 163,
            y: 143
        },
        subType: "ice"
    }, {
        type: "bubble",
        p0: {
            x: 95,
            y: 209
        },
        p1: {
            x: 95,
            y: 209
        },
        subType: "ice"
    }, {
        type: "bubble",
        p0: {
            x: 101,
            y: 140
        },
        p1: {
            x: 101,
            y: 140
        },
        subType: "fire"
    }, {
        type: "bubble",
        p0: {
            x: 39,
            y: 138
        },
        p1: {
            x: 39,
            y: 138
        },
        subType: "ice"
    }], [{
        type: "bubble",
        p0: {
            x: 184,
            y: 242
        },
        p1: {
            x: 184,
            y: 242
        },
        subType: "normal"
    }, {
        type: "bubble",
        p0: {
            x: 166,
            y: 309
        },
        p1: {
            x: 198,
            y: 309
        },
        subType: "jellyfish"
    }, {
        type: "bubble",
        p0: {
            x: 169,
            y: 180
        },
        p1: {
            x: 201,
            y: 180
        },
        subType: "jellyfish"
    }, {
        type: "bubble",
        p0: {
            x: 113,
            y: 358
        },
        p1: {
            x: 113,
            y: 358
        },
        subType: "normal"
    }, {
        type: "bubble",
        p0: {
            x: 61,
            y: 306
        },
        p1: {
            x: 61,
            y: 306
        },
        subType: "normal"
    }, {
        type: "bubble",
        p0: {
            x: 257,
            y: 360
        },
        p1: {
            x: 257,
            y: 360
        },
        subType: "normal"
    }, {
        type: "bubble",
        p0: {
            x: 320,
            y: 311
        },
        p1: {
            x: 320,
            y: 311
        },
        subType: "normal"
    }, {
        type: "bubble",
        p0: {
            x: 311,
            y: 175
        },
        p1: {
            x: 311,
            y: 175
        },
        subType: "normal"
    }, {
        type: "bubble",
        p0: {
            x: 252,
            y: 128
        },
        p1: {
            x: 252,
            y: 128
        },
        subType: "normal"
    }, {
        type: "bubble",
        p0: {
            x: 122,
            y: 127
        },
        p1: {
            x: 122,
            y: 127
        },
        subType: "normal"
    }, {
        type: "bubble",
        p0: {
            x: 69,
            y: 169
        },
        p1: {
            x: 69,
            y: 169
        },
        subType: "normal"
    }, {
        type: "bubble",
        p0: {
            x: 41,
            y: 234
        },
        p1: {
            x: 41,
            y: 234
        },
        subType: "normal"
    }, {
        type: "bubble",
        p0: {
            x: 183,
            y: 379
        },
        p1: {
            x: 183,
            y: 379
        },
        subType: "normal"
    }, {
        type: "bubble",
        p0: {
            x: 344,
            y: 240
        },
        p1: {
            x: 344,
            y: 240
        },
        subType: "normal"
    }, {
        type: "bubble",
        p0: {
            x: 188,
            y: 111
        },
        p1: {
            x: 188,
            y: 111
        },
        subType: "normal"
    }], [{
        type: "bubble",
        p0: {
            x: 131,
            y: 381
        },
        p1: {
            x: 131,
            y: 381
        },
        subType: "normal"
    }, {
        type: "bubble",
        p0: {
            x: 38,
            y: 289
        },
        p1: {
            x: 38,
            y: 289
        },
        subType: "normal"
    }, {
        type: "bubble",
        p0: {
            x: 37,
            y: 161
        },
        p1: {
            x: 37,
            y: 161
        },
        subType: "normal"
    }, {
        type: "bubble",
        p0: {
            x: 132,
            y: 76
        },
        p1: {
            x: 132,
            y: 76
        },
        subType: "normal"
    }, {
        type: "bubble",
        p0: {
            x: 256,
            y: 381
        },
        p1: {
            x: 256,
            y: 381
        },
        subType: "normal"
    }, {
        type: "bubble",
        p0: {
            x: 349,
            y: 289
        },
        p1: {
            x: 349,
            y: 289
        },
        subType: "normal"
    }, {
        type: "bubble",
        p0: {
            x: 350,
            y: 161
        },
        p1: {
            x: 350,
            y: 161
        },
        subType: "normal"
    }, {
        type: "bubble",
        p0: {
            x: 255,
            y: 76
        },
        p1: {
            x: 255,
            y: 76
        },
        subType: "normal"
    }, {
        type: "bubble",
        p0: {
            x: 130,
            y: 277
        },
        p1: {
            x: 53,
            y: 381
        },
        subType: "normal"
    }, {
        type: "bubble",
        p0: {
            x: 131,
            y: 220
        },
        p1: {
            x: 36,
            y: 222
        },
        subType: "normal"
    }, {
        type: "bubble",
        p0: {
            x: 131,
            y: 164
        },
        p1: {
            x: 47,
            y: 82
        },
        subType: "normal"
    }, {
        type: "bubble",
        p0: {
            x: 257,
            y: 277
        },
        p1: {
            x: 335,
            y: 381
        },
        subType: "normal"
    }, {
        type: "bubble",
        p0: {
            x: 257,
            y: 220
        },
        p1: {
            x: 351,
            y: 222
        },
        subType: "normal"
    }, {
        type: "bubble",
        p0: {
            x: 256,
            y: 164
        },
        p1: {
            x: 341,
            y: 82
        },
        subType: "normal"
    }, {
        type: "line",
        p0: {
            x: 195,
            y: 179
        },
        p1: {
            x: 195,
            y: 379
        },
        subType: "log"
    }, {
        type: "line",
        p0: {
            x: 195,
            y: -75
        },
        p1: {
            x: 195,
            y: 125
        },
        subType: "log"
    }], [{
        type: "bubble",
        p0: {
            x: 158,
            y: 107
        },
        p1: {
            x: 346,
            y: 107
        },
        subType: "jellyfish"
    }, {
        type: "bubble",
        p0: {
            x: 32,
            y: 275
        },
        p1: {
            x: 220,
            y: 275
        },
        subType: "jellyfish"
    }, {
        type: "bubble",
        p0: {
            x: 171,
            y: 367
        },
        p1: {
            x: 171,
            y: 367
        },
        subType: "normal"
    }, {
        type: "bubble",
        p0: {
            x: 74,
            y: 86
        },
        p1: {
            x: 74,
            y: 86
        },
        subType: "normal"
    }, {
        type: "bubble",
        p0: {
            x: 231,
            y: 356
        },
        p1: {
            x: 231,
            y: 356
        },
        subType: "normal"
    }, {
        type: "bubble",
        p0: {
            x: 276,
            y: 312
        },
        p1: {
            x: 276,
            y: 312
        },
        subType: "normal"
    }, {
        type: "bubble",
        p0: {
            x: 287,
            y: 253
        },
        p1: {
            x: 287,
            y: 253
        },
        subType: "normal"
    }, {
        type: "bubble",
        p0: {
            x: 253,
            y: 203
        },
        p1: {
            x: 253,
            y: 203
        },
        subType: "normal"
    }, {
        type: "bubble",
        p0: {
            x: 199,
            y: 179
        },
        p1: {
            x: 199,
            y: 179
        },
        subType: "normal"
    }, {
        type: "bubble",
        p0: {
            x: 138,
            y: 174
        },
        p1: {
            x: 138,
            y: 174
        },
        subType: "normal"
    }, {
        type: "bubble",
        p0: {
            x: 87,
            y: 142
        },
        p1: {
            x: 87,
            y: 142
        },
        subType: "normal"
    }], [{
        type: "bubble",
        p0: {
            x: 293,
            y: 89
        },
        p1: {
            x: 293,
            y: 89
        },
        subType: "ice"
    }, {
        type: "bubble",
        p0: {
            x: 169,
            y: 272
        },
        p1: {
            x: 169,
            y: 272
        },
        subType: "normal"
    }, {
        type: "bubble",
        p0: {
            x: 198,
            y: 94
        },
        p1: {
            x: 198,
            y: 94
        },
        subType: "fire"
    }, {
        type: "bubble",
        p0: {
            x: 97,
            y: 299
        },
        p1: {
            x: 97,
            y: 299
        },
        subType: "normal"
    }, {
        type: "bubble",
        p0: {
            x: 296,
            y: 202
        },
        p1: {
            x: 296,
            y: 202
        },
        subType: "normal"
    }, {
        type: "bubble",
        p0: {
            x: 264,
            y: 350
        },
        p1: {
            x: 264,
            y: 350
        },
        subType: "normal"
    }, {
        type: "bubble",
        p0: {
            x: 188,
            y: 183
        },
        p1: {
            x: 188,
            y: 183
        },
        subType: "normal"
    }, {
        type: "bubble",
        p0: {
            x: 158,
            y: 356
        },
        p1: {
            x: 158,
            y: 356
        },
        subType: "fire"
    }, {
        type: "bubble",
        p0: {
            x: 255,
            y: 140
        },
        p1: {
            x: 255,
            y: 140
        },
        subType: "fire"
    }, {
        type: "bubble",
        p0: {
            x: 116,
            y: 217
        },
        p1: {
            x: 116,
            y: 217
        },
        subType: "fire"
    }, {
        type: "bubble",
        p0: {
            x: 243,
            y: 263
        },
        p1: {
            x: 243,
            y: 263
        },
        subType: "ice"
    }, {
        type: "bubble",
        p0: {
            x: 118,
            y: 120
        },
        p1: {
            x: 118,
            y: 120
        },
        subType: "ice"
    }, {
        type: "bubble",
        p0: {
            x: 28,
            y: 301
        },
        p1: {
            x: -70,
            y: 301
        },
        subType: "jellyfish"
    }, {
        type: "bubble",
        p0: {
            x: 26,
            y: 179
        },
        p1: {
            x: -72,
            y: 179
        },
        subType: "jellyfish"
    }, {
        type: "bubble",
        p0: {
            x: -74,
            y: 362
        },
        p1: {
            x: 24,
            y: 362
        },
        subType: "jellyfish"
    }, {
        type: "bubble",
        p0: {
            x: -73,
            y: 241
        },
        p1: {
            x: 25,
            y: 241
        },
        subType: "jellyfish"
    }, {
        type: "bubble",
        p0: {
            x: -72,
            y: 116
        },
        p1: {
            x: 26,
            y: 116
        },
        subType: "jellyfish"
    }, {
        type: "bubble",
        p0: {
            x: 460,
            y: 301
        },
        p1: {
            x: 362,
            y: 301
        },
        subType: "jellyfish"
    }, {
        type: "bubble",
        p0: {
            x: 458,
            y: 179
        },
        p1: {
            x: 360,
            y: 179
        },
        subType: "jellyfish"
    }, {
        type: "bubble",
        p0: {
            x: 358,
            y: 362
        },
        p1: {
            x: 456,
            y: 362
        },
        subType: "jellyfish"
    }, {
        type: "bubble",
        p0: {
            x: 359,
            y: 241
        },
        p1: {
            x: 457,
            y: 241
        },
        subType: "jellyfish"
    }, {
        type: "bubble",
        p0: {
            x: 360,
            y: 116
        },
        p1: {
            x: 458,
            y: 116
        },
        subType: "jellyfish"
    }], [{
        type: "line",
        p0: {
            x: 297,
            y: 326
        },
        p1: {
            x: 355,
            y: 134
        },
        subType: "log"
    }, {
        type: "bubble",
        p0: {
            x: 55,
            y: 244
        },
        p1: {
            x: 220,
            y: 178
        },
        subType: "normal"
    }, {
        type: "bubble",
        p0: {
            x: 220,
            y: 104
        },
        p1: {
            x: 220,
            y: 104
        },
        subType: "normal"
    }, {
        type: "bubble",
        p0: {
            x: 140,
            y: 134
        },
        p1: {
            x: 140,
            y: 134
        },
        subType: "normal"
    }, {
        type: "bubble",
        p0: {
            x: 221,
            y: 254
        },
        p1: {
            x: 221,
            y: 254
        },
        subType: "ice"
    }, {
        type: "bubble",
        p0: {
            x: 141,
            y: 281
        },
        p1: {
            x: 141,
            y: 281
        },
        subType: "ice"
    }, {
        type: "bubble",
        p0: {
            x: 61,
            y: 314
        },
        p1: {
            x: 61,
            y: 314
        },
        subType: "ice"
    }, {
        type: "bubble",
        p0: {
            x: 60,
            y: 164
        },
        p1: {
            x: 60,
            y: 164
        },
        subType: "normal"
    }, {
        type: "bubble",
        p0: {
            x: 163,
            y: 369
        },
        p1: {
            x: 163,
            y: 369
        },
        subType: "fire"
    }], [{
        type: "bubble",
        p0: {
            x: 349,
            y: 351
        },
        p1: {
            x: 345,
            y: 201
        },
        subType: "normal"
    }, {
        type: "bubble",
        p0: {
            x: 188,
            y: 216
        },
        p1: {
            x: 188,
            y: 216
        },
        subType: "normal"
    }, {
        type: "bubble",
        p0: {
            x: 326,
            y: 117
        },
        p1: {
            x: 326,
            y: 117
        },
        subType: "fire"
    }, {
        type: "bubble",
        p0: {
            x: 43,
            y: 355
        },
        p1: {
            x: 43,
            y: 355
        },
        subType: "normal"
    }, {
        type: "bubble",
        p0: {
            x: 225,
            y: 323
        },
        p1: {
            x: 225,
            y: 323
        },
        subType: "ice"
    }, {
        type: "line",
        p0: {
            x: 290,
            y: 338
        },
        p1: {
            x: 259,
            y: 140
        },
        subType: "log"
    }, {
        type: "line",
        p0: {
            x: -61,
            y: 139
        },
        p1: {
            x: 66,
            y: 293
        },
        subType: "log"
    }], [{
        type: "bubble",
        p0: {
            x: 308,
            y: 150
        },
        p1: {
            x: 354,
            y: 130
        },
        subType: "normal"
    }, {
        type: "line",
        p0: {
            x: 256,
            y: 229
        },
        p1: {
            x: 440,
            y: 151
        },
        subType: "log"
    }, {
        type: "bubble",
        p0: {
            x: 278,
            y: 380
        },
        p1: {
            x: 278,
            y: 380
        },
        subType: "normal"
    }, {
        type: "bubble",
        p0: {
            x: 211,
            y: 279
        },
        p1: {
            x: 211,
            y: 279
        },
        subType: "normal"
    }, {
        type: "bubble",
        p0: {
            x: 152,
            y: 192
        },
        p1: {
            x: 152,
            y: 192
        },
        subType: "normal"
    }, {
        type: "bubble",
        p0: {
            x: 78,
            y: 107
        },
        p1: {
            x: 78,
            y: 408
        },
        subType: "normal"
    }], [{
        type: "line",
        p0: {
            x: -156,
            y: 121
        },
        p1: {
            x: 35,
            y: 179
        },
        subType: "log"
    }, {
        type: "bubble",
        p0: {
            x: 102,
            y: 173
        },
        p1: {
            x: 302,
            y: 179
        },
        subType: "normal"
    }, {
        type: "bubble",
        p0: {
            x: 315,
            y: 335
        },
        p1: {
            x: 315,
            y: 335
        },
        subType: "ice"
    }, {
        type: "bubble",
        p0: {
            x: 51,
            y: 352
        },
        p1: {
            x: 51,
            y: 352
        },
        subType: "ice"
    }, {
        type: "bubble",
        p0: {
            x: 347,
            y: 99
        },
        p1: {
            x: 347,
            y: 99
        },
        subType: "ice"
    }, {
        type: "bubble",
        p0: {
            x: 189,
            y: 394
        },
        p1: {
            x: 189,
            y: 394
        },
        subType: "fire"
    }, {
        type: "bubble",
        p0: {
            x: 344,
            y: 228
        },
        p1: {
            x: 344,
            y: 228
        },
        subType: "fire"
    }, {
        type: "bubble",
        p0: {
            x: 142,
            y: 115
        },
        p1: {
            x: 142,
            y: 115
        },
        subType: "fire"
    }, {
        type: "bubble",
        p0: {
            x: 58,
            y: 245
        },
        p1: {
            x: 58,
            y: 245
        },
        subType: "fire"
    }, {
        type: "bubble",
        p0: {
            x: 127,
            y: 276
        },
        p1: {
            x: 127,
            y: 276
        },
        subType: "ice"
    }, {
        type: "bubble",
        p0: {
            x: 227,
            y: 305
        },
        p1: {
            x: 227,
            y: 305
        },
        subType: "ice"
    }, {
        type: "bubble",
        p0: {
            x: 197,
            y: 235
        },
        p1: {
            x: 197,
            y: 235
        },
        subType: "ice"
    }, {
        type: "bubble",
        p0: {
            x: 85,
            y: 85
        },
        p1: {
            x: 85,
            y: 85
        },
        subType: "ice"
    }], [{
        type: "bubble",
        p0: {
            x: 39,
            y: 182
        },
        p1: {
            x: 144,
            y: 234
        },
        subType: "normal"
    }, {
        type: "bubble",
        p0: {
            x: 276,
            y: 154
        },
        p1: {
            x: 276,
            y: 154
        },
        subType: "normal"
    }, {
        type: "bubble",
        p0: {
            x: 146,
            y: 379
        },
        p1: {
            x: 146,
            y: 379
        },
        subType: "normal"
    }, {
        type: "bubble",
        p0: {
            x: 137,
            y: 91
        },
        p1: {
            x: 137,
            y: 91
        },
        subType: "normal"
    }, {
        type: "bubble",
        p0: {
            x: 338,
            y: 326
        },
        p1: {
            x: 338,
            y: 326
        },
        subType: "normal"
    }, {
        type: "bubble",
        p0: {
            x: 338,
            y: 91
        },
        p1: {
            x: 210,
            y: 94
        },
        subType: "jellyfish"
    }, {
        type: "bubble",
        p0: {
            x: 352,
            y: 263
        },
        p1: {
            x: 49,
            y: 122
        },
        subType: "jellyfish"
    }, {
        type: "bubble",
        p0: {
            x: 337,
            y: 197
        },
        p1: {
            x: 43,
            y: 358
        },
        subType: "jellyfish"
    }, {
        type: "bubble",
        p0: {
            x: 269,
            y: 359
        },
        p1: {
            x: 41,
            y: 254
        },
        subType: "jellyfish"
    }], [{
        type: "line",
        p0: {
            x: 384,
            y: -151
        },
        p1: {
            x: 217,
            y: -42
        },
        subType: "log"
    }, {
        type: "line",
        p0: {
            x: 403,
            y: 30
        },
        p1: {
            x: 216,
            y: -43
        },
        subType: "log"
    }, {
        type: "bubble",
        p0: {
            x: 33,
            y: 315
        },
        p1: {
            x: 35,
            y: -44
        },
        subType: "jellyfish"
    }, {
        type: "bubble",
        p0: {
            x: 150,
            y: 276
        },
        p1: {
            x: 151,
            y: 372
        },
        subType: "normal"
    }, {
        type: "bubble",
        p0: {
            x: 221,
            y: 205
        },
        p1: {
            x: 221,
            y: 205
        },
        subType: "fire"
    }, {
        type: "bubble",
        p0: {
            x: 227,
            y: 337
        },
        p1: {
            x: 227,
            y: 337
        },
        subType: "ice"
    }, {
        type: "bubble",
        p0: {
            x: 32,
            y: 375
        },
        p1: {
            x: 32,
            y: 375
        },
        subType: "ice"
    }, {
        type: "bubble",
        p0: {
            x: 326,
            y: 81
        },
        p1: {
            x: 326,
            y: 81
        },
        subType: "fire"
    }, {
        type: "bubble",
        p0: {
            x: 356,
            y: 148
        },
        p1: {
            x: 356,
            y: 148
        },
        subType: "fire"
    }, {
        type: "bubble",
        p0: {
            x: 344,
            y: 229
        },
        p1: {
            x: 344,
            y: 229
        },
        subType: "fire"
    }, {
        type: "bubble",
        p0: {
            x: 353,
            y: 305
        },
        p1: {
            x: 353,
            y: 305
        },
        subType: "fire"
    }, {
        type: "bubble",
        p0: {
            x: 327,
            y: 374
        },
        p1: {
            x: 327,
            y: 374
        },
        subType: "fire"
    }, {
        type: "line",
        p0: {
            x: 286,
            y: 127
        },
        p1: {
            x: 91,
            y: 172
        },
        subType: "log"
    }, {
        type: "line",
        p0: {
            x: 287,
            y: 133
        },
        p1: {
            x: 287,
            y: 333
        },
        subType: "log"
    }, {
        type: "line",
        p0: {
            x: 89,
            y: 173
        },
        p1: {
            x: 89,
            y: 373
        },
        subType: "log"
    }], [{
        type: "bubble",
        p0: {
            x: 183,
            y: 108
        },
        p1: {
            x: 183,
            y: 108
        },
        subType: "normal"
    }, {
        type: "bubble",
        p0: {
            x: 37,
            y: 205
        },
        p1: {
            x: 37,
            y: 205
        },
        subType: "fire"
    }, {
        type: "bubble",
        p0: {
            x: 346,
            y: 221
        },
        p1: {
            x: 346,
            y: 221
        },
        subType: "fire"
    }, {
        type: "bubble",
        p0: {
            x: 238,
            y: 140
        },
        p1: {
            x: 238,
            y: 140
        },
        subType: "ice"
    }, {
        type: "bubble",
        p0: {
            x: 128,
            y: 136
        },
        p1: {
            x: 128,
            y: 136
        },
        subType: "ice"
    }, {
        type: "bubble",
        p0: {
            x: 61,
            y: 372
        },
        p1: {
            x: 61,
            y: 372
        },
        subType: "fire"
    }, {
        type: "bubble",
        p0: {
            x: 323,
            y: 374
        },
        p1: {
            x: 323,
            y: 374
        },
        subType: "fire"
    }, {
        type: "bubble",
        p0: {
            x: 143,
            y: 197
        },
        p1: {
            x: 219,
            y: 369
        },
        subType: "jellyfish"
    }, {
        type: "bubble",
        p0: {
            x: 338,
            y: 294
        },
        p1: {
            x: 35,
            y: 273
        },
        subType: "jellyfish"
    }, {
        type: "bubble",
        p0: {
            x: 159,
            y: 351
        },
        p1: {
            x: 197,
            y: 228
        },
        subType: "jellyfish"
    }, {
        type: "bubble",
        p0: {
            x: 285,
            y: 237
        },
        p1: {
            x: 106,
            y: 326
        },
        subType: "jellyfish"
    }, {
        type: "bubble",
        p0: {
            x: 93,
            y: 239
        },
        p1: {
            x: 271,
            y: 329
        },
        subType: "jellyfish"
    }], [{
        type: "bubble",
        p0: {
            x: 191,
            y: 359
        },
        p1: {
            x: 191,
            y: 359
        },
        subType: "normal"
    }, {
        type: "bubble",
        p0: {
            x: 130,
            y: 310
        },
        p1: {
            x: 130,
            y: 310
        },
        subType: "normal"
    }, {
        type: "bubble",
        p0: {
            x: 311,
            y: 79
        },
        p1: {
            x: 281,
            y: 132
        },
        subType: "normal"
    }, {
        type: "bubble",
        p0: {
            x: 60,
            y: 119
        },
        p1: {
            x: 38,
            y: 317
        },
        subType: "normal"
    }, {
        type: "bubble",
        p0: {
            x: 207,
            y: 97
        },
        p1: {
            x: 207,
            y: 97
        },
        subType: "fire"
    }, {
        type: "bubble",
        p0: {
            x: 335,
            y: 340
        },
        p1: {
            x: 335,
            y: 340
        },
        subType: "normal"
    }, {
        type: "bubble",
        p0: {
            x: 178,
            y: 160
        },
        p1: {
            x: 349,
            y: 264
        },
        subType: "jellyfish"
    }, {
        type: "bubble",
        p0: {
            x: 119,
            y: 120
        },
        p1: {
            x: 119,
            y: 120
        },
        subType: "ice"
    }, {
        type: "bubble",
        p0: {
            x: 336,
            y: 187
        },
        p1: {
            x: 336,
            y: 187
        },
        subType: "fire"
    }, {
        type: "line",
        p0: {
            x: 115,
            y: 192
        },
        p1: {
            x: 281,
            y: 304
        },
        subType: "log"
    }], [{
        type: "bubble",
        p0: {
            x: 214,
            y: 141
        },
        p1: {
            x: 214,
            y: 141
        },
        subType: "normal"
    }, {
        type: "bubble",
        p0: {
            x: 131,
            y: 157
        },
        p1: {
            x: 131,
            y: 157
        },
        subType: "fire"
    }, {
        type: "line",
        p0: {
            x: -87,
            y: 185
        },
        p1: {
            x: 72,
            y: 307
        },
        subType: "log"
    }, {
        type: "bubble",
        p0: {
            x: 264,
            y: 307
        },
        p1: {
            x: 264,
            y: 307
        },
        subType: "normal"
    }, {
        type: "bubble",
        p0: {
            x: 183,
            y: 225
        },
        p1: {
            x: 183,
            y: 225
        },
        subType: "fire"
    }, {
        type: "bubble",
        p0: {
            x: 60,
            y: 109
        },
        p1: {
            x: 60,
            y: 109
        },
        subType: "fire"
    }, {
        type: "bubble",
        p0: {
            x: 346,
            y: 115
        },
        p1: {
            x: 346,
            y: 397
        },
        subType: "normal"
    }, {
        type: "bubble",
        p0: {
            x: 145,
            y: 288
        },
        p1: {
            x: 145,
            y: 288
        },
        subType: "ice"
    }, {
        type: "bubble",
        p0: {
            x: 35,
            y: 166
        },
        p1: {
            x: 35,
            y: 166
        },
        subType: "ice"
    }, {
        type: "bubble",
        p0: {
            x: 97,
            y: 215
        },
        p1: {
            x: 97,
            y: 215
        },
        subType: "ice"
    }], [{
        type: "bubble",
        p0: {
            x: 325,
            y: 194
        },
        p1: {
            x: 336,
            y: -2
        },
        subType: "jellyfish"
    }, {
        type: "bubble",
        p0: {
            x: 125,
            y: 244
        },
        p1: {
            x: 125,
            y: 244
        },
        subType: "normal"
    }, {
        type: "bubble",
        p0: {
            x: 139,
            y: 88
        },
        p1: {
            x: 139,
            y: 88
        },
        subType: "normal"
    }, {
        type: "bubble",
        p0: {
            x: 51,
            y: 136
        },
        p1: {
            x: 51,
            y: 136
        },
        subType: "normal"
    }, {
        type: "line",
        p0: {
            x: 227,
            y: 90
        },
        p1: {
            x: 266,
            y: -106
        },
        subType: "log"
    }, {
        type: "bubble",
        p0: {
            x: 346,
            y: 350
        },
        p1: {
            x: 346,
            y: 350
        },
        subType: "normal"
    }, {
        type: "bubble",
        p0: {
            x: 229,
            y: 352
        },
        p1: {
            x: 229,
            y: 352
        },
        subType: "normal"
    }, {
        type: "bubble",
        p0: {
            x: 50,
            y: 304
        },
        p1: {
            x: 50,
            y: 304
        },
        subType: "normal"
    }, {
        type: "line",
        p0: {
            x: 158,
            y: 418
        },
        p1: {
            x: 197,
            y: 222
        },
        subType: "log"
    }, {
        type: "bubble",
        p0: {
            x: 288,
            y: 324
        },
        p1: {
            x: 288,
            y: 324
        },
        subType: "ice"
    }, {
        type: "bubble",
        p0: {
            x: 201,
            y: 152
        },
        p1: {
            x: 201,
            y: 152
        },
        subType: "fire"
    }]),
    aLevelStore = new Array;
aLevelStore.push(0), aLevelStore.push(0);
for (var i = 0; 35 > i; i++) aLevelStore.push(1), aLevelStore.push(0);
if ("undefined" != typeof Storage)
    if (null != localStorage.getItem("bubblefishBuddiesData")) {
        aLevelStore = localStorage.getItem("bubblefishBuddiesData").split(",");
        for (var a in aLevelStore) aLevelStore[a] = parseInt(aLevelStore[a])
    } else saveData()