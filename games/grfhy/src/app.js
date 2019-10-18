function initSplash() {
    gameState = "splash", resizeCanvas(), 1 != audioType || muted || music.play(), initStartScreen()
}
function initStartScreen() {
    gameState = "start", userInput.removeHitArea("moreGames"), 1 == audioType && (musicTween && musicTween.kill(), musicTween = TweenLite.to(music, 1, {volume: .5, ease: "Linear.easeNone"})), background = new Elements.Background(assetLib.getData("background"), canvas.width, canvas.height), userInput.addHitArea("mute", butEventHandler, null, "rect", {aRect: [538, 0, canvas.width, 60]}, !0);
    var a = {oImgData: assetLib.getData("uiButs"), aPos: [canvas.width / 2 + 4, 610], scale: 1, frame: 0},
        b = {oImgData: assetLib.getData("uiButs"), aPos: [canvas.width / 2 + 4, 735], scale: 1, frame: 2};
//        c = {oImgData: assetLib.getData("uiButs"), aPos: [104, 735], scale: 1, frame: 3};
    userInput.addHitArea("selectCourse", butEventHandler, null, "image", a),
        userInput.addHitArea("moreGames", butEventHandler, null, "image", b)
        /*, userInput.addHitArea("credits", butEventHandler, null, "image", c)*/;
    var d = new Array(a, b);
    panel = new Elements.Panel(assetLib.getData("panels1"), assetLib.getData("panels2"), assetLib.getData("bigNumbersDark"), assetLib.getData("smallNumbers"), gameState, d, canvas.width, canvas.height), panel.startTween1(), previousTime = (new Date).getTime(), aPickUps = new Array;
    for (var e = 0, f = 0; 10 > f; f++) {
        var g = new Elements.FallingGem(assetLib.getData("pickUps"), {x: Math.random() * canvas.width, y: Math.random() * canvas.height, id: ++e % 5}, canvas.width, canvas.height);
        aPickUps.push(g)
    }
    updateStartScreenEvent()
}
function initCreditsScreen() {
    gameState = "credits";
    var a = {oImgData: assetLib.getData("uiButs"), aPos: [104, 735], scale: 1, frame: 4};
    userInput.addHitArea("backFromCredits", butEventHandler, null, "image", a);
    var b = new Array(a);
    panel = new Elements.Panel(assetLib.getData("panels1"), assetLib.getData("panels2"), assetLib.getData("bigNumbersDark"), assetLib.getData("smallNumbers"), gameState, b, canvas.width, canvas.height), panel.startTween2(), previousTime = (new Date).getTime(), updateCreditsScreenEvent()
}
function initCourseSelectScreen() {
    gameState = "courseSelect", levelScore = 0, totalScore = 0, levelNum = 0;
    var a = {oImgData: assetLib.getData("uiButs"), aPos: [104, 735], scale: 1, frame: 4}, b = {oImgData: assetLib.getData("uiButs"), aPos: [460, 300], scale: 1, frame: 0}, c = {oImgData: assetLib.getData("uiButs"), aPos: [460, 553], scale: 1, frame: 0};
    userInput.addHitArea("backFromCourseSelect", butEventHandler, null, "image", a), userInput.addHitArea("startGame", butEventHandler, {courseNum: 0}, "image", b), userInput.addHitArea("startGame", butEventHandler, {courseNum: 1}, "image", c);
    var d = new Array(a, b, c);
    panel = new Elements.Panel(assetLib.getData("panels1"), assetLib.getData("panels2"), assetLib.getData("bigNumbersDark"), assetLib.getData("smallNumbers"), gameState, d, canvas.width, canvas.height), panel.aLevelStore = saveDataHandler.aLevelStore, panel.startTween1(), aPickUps = new Array;
    for (var e = 0, f = 0; 10 > f; f++) {
        var g = new Elements.FallingGem(assetLib.getData("pickUps"), {x: Math.random() * canvas.width, y: Math.random() * canvas.height, id: ++e % 5}, canvas.width, canvas.height);
        aPickUps.push(g)
    }
    previousTime = (new Date).getTime(), updateCourseSelectScreenEvent()
}
function initGame() {
    gameState = "game", 1 == audioType && (musicTween.kill(), musicTween = TweenLite.to(music, 2, {volume: 0, ease: "Linear.easeNone"})), userInput.addHitArea("pause", butEventHandler, null, "rect", {aRect: [480, 0, 538, 60]}, !0), userInput.addHitArea("gameTouch", butEventHandler, {isDraggable: !0, multiTouch: !0}, "rect", {aRect: [0, 0, canvas.width, canvas.height]}, !0), hud = new Elements.Hud(assetLib.getData("hud"), assetLib.getData("bigNumbersLight"), assetLib.getData("bigNumbersDark"), assetLib.getData("smallNumbers"), {hole: levelNum + 1, par: aLevelData[courseNum][levelNum].par, shotNum: 1, pickUps: 0}, canvas.width, canvas.height);
    var a = new Array, b = new Array;
    aPickUps = new Array, aBounces = new Array;
    for (var c = 0, d = 0; d < aLevelData[courseNum][levelNum].aData.length; d++)
        if ("tee" == aLevelData[courseNum][levelNum].aData[d].type)
            ball = new Elements.Ball(assetLib.getData("ball"), assetLib.getData("remarks"), {x: aLevelData[courseNum][levelNum].aData[d].p0.x, y: aLevelData[courseNum][levelNum].aData[d].p0.y}, ballCallback, canvas.width, canvas.height);
        else if ("hole" == aLevelData[courseNum][levelNum].aData[d].type)
            oHolePos = {x: aLevelData[courseNum][levelNum].aData[d].p0.x, y: aLevelData[courseNum][levelNum].aData[d].p0.y};
        else if ("pickUp" == aLevelData[courseNum][levelNum].aData[d].type) {
            var e = new Elements.PickUp(assetLib.getData("pickUps"), {x: aLevelData[courseNum][levelNum].aData[d].p0.x, y: aLevelData[courseNum][levelNum].aData[d].p0.y, id: ++c % 5}, canvas.width, canvas.height);
            aPickUps.push(e)
        } else
            "wall" == aLevelData[courseNum][levelNum].aData[d].type ? a.push({p0: aLevelData[courseNum][levelNum].aData[d].p0, p1: aLevelData[courseNum][levelNum].aData[d].p1, b: 1, f: 1}) : "slope" == aLevelData[courseNum][levelNum].aData[d].type.slice(0, 5) ? b.push({type: "slope", dir: parseInt(aLevelData[courseNum][levelNum].aData[d].type.slice(-1)), p0: aLevelData[courseNum][levelNum].aData[d].p0, p1: aLevelData[courseNum][levelNum].aData[d].p1}) : "mud" == aLevelData[courseNum][levelNum].aData[d].type ? b.push({type: "mud", p0: aLevelData[courseNum][levelNum].aData[d].p0, p1: aLevelData[courseNum][levelNum].aData[d].p1}) : "water" == aLevelData[courseNum][levelNum].aData[d].type ? b.push({type: "water", p0: aLevelData[courseNum][levelNum].aData[d].p0, p1: aLevelData[courseNum][levelNum].aData[d].p1}) : "teleport" == aLevelData[courseNum][levelNum].aData[d].type && b.push({type: "teleport", p0: aLevelData[courseNum][levelNum].aData[d].p0, p1: aLevelData[courseNum][levelNum].aData[d].p1});
    ball.aSurfaces = b, oPosData = {prevBallX: ball.oData.x, prevBallY: ball.oData.y, stageX: -(levelWidth - canvas.width) / 2, stageY: -(levelHeight - canvas.height) / 2, targStageX: -(levelWidth - canvas.width) / 2, targStageY: -(levelHeight - canvas.height) / 2, startDragX: 0, startDragY: 0, startStageX: 0, startStageY: 0}, gameTouchState = 0, level = new Elements.Level(assetLib.getData("level" + courseNum + levelNum), canvas.width, canvas.height), arrow = new Elements.Arrow(assetLib.getData("arrow"), canvas.width, canvas.height), physics2D = new Utils.Physics2D(a, ball), playSound("start"), previousTime = (new Date).getTime(), updateGameEvent()
}
function butEventHandler(a, b) {
    switch (a) {
        case "langSelect":
            console.log(b.lang), curLang = b.lang, ctx.clearRect(0, 0, canvas.width, canvas.height), userInput.removeHitArea("langSelect"), initLoadAssets();
            break;
        case "selectCourse":
            playSound("click"), userInput.removeHitArea("selectCourse"), userInput.removeHitArea("moreGames"), userInput.removeHitArea("credits"), initCourseSelectScreen();
            break;
        case "backFromCourseSelect":
            playSound("click"), userInput.removeHitArea("backFromCourseSelect"), userInput.removeHitArea("startGame"), initStartScreen();
            break;
        case "startGame":
            playSound("click"), userInput.removeHitArea("backFromCourseSelect"), userInput.removeHitArea("startGame"), courseNum = b.courseNum, aScores = new Array;
            for (var c = 0; c < aLevelData[courseNum].length; c++)
                aScores[c] = {}, aScores[c].par = aLevelData[courseNum][c].par, aScores[c].shotNum = 0, aScores[c].pickUps = 0;
            initGame();
            break;
        case "credits":
            playSound("click"), userInput.removeHitArea("selectCourse"), userInput.removeHitArea("moreGames"), userInput.removeHitArea("credits"), initCreditsScreen();
            break;
        case "backFromCredits":
            playSound("click"), userInput.removeHitArea("backFromCredits"), initStartScreen();
            break;
        case "moreGames":
        case "moreGamesPause":
         
         window.top.location.href =Play68.goHome();// btGame.URL.getMoreGame();
			
            break;
        case "gameTouch":
            if (gameTouchState >= 3)
                return;
            if (b.isBeingDragged)
                2 == gameTouchState && (targAimX = b.x, targAimY = b.y);
            else if (b.isDown)
                TweenLite.killTweensOf(oPosData), toggleHudButs(!1), b.x < ball.x + 40 && b.x > ball.x - 40 && b.y < ball.y + 40 && b.y > ball.y - 40 && (gameTouchState = 2, aimX = targAimX = b.x, aimY = targAimY = b.y, ball.changeState("aiming"));
            else {
                if (toggleHudButs(!0), 2 == gameTouchState && arrow.scaleX > .05)
                    return gameTouchState = 3, ball.changeState("moving", {power: arrow.hyp, angle: arrow.rotation}), aimX = targAimX = null, aimY = targAimY = null, playSound("hit"), void 0;
                gameTouchState = 0, "waiting" != ball.state && ball.changeState("waiting")
            }
            break;
        case "nextLevel":
		
            window.shareFlag = false;
            playSound("click"), userInput.removeHitArea("nextLevel"), userInput.removeHitArea("moreGames"), userInput.removeHitArea("exitFromEnd"), levelScore = 0, ++levelNum < 9 ? initGame() : (totalScore = 0, levelNum = 0, initCourseSelectScreen());
            break;
        case "exitFromEnd":
            playSound("click"), userInput.removeHitArea("nextLevel"), userInput.removeHitArea("moreGames"), userInput.removeHitArea("exitFromEnd"), initCourseSelectScreen();
            break;
        case "mute":
            playSound("click"), toggleMute();
            break;
        case "pause":
        case "resumeFromPause":
            playSound("click"), toggleManualPause();
            break;
        case "quitFromPause":
            playSound("click"), toggleManualPause(),
                userInput.removeHitArea("pause"),
                userInput.removeHitArea("quitFromPause"),
                userInput.removeHitArea("resumeFromPause"),
                userInput.removeHitArea("moreGamesPause"),
                levelScore = 0, totalScore = 0, initStartScreen()
    }
}
function initLevelComplete() {
    gameState = "levelComplete", 1 == audioType && (musicTween.kill(), musicTween = TweenLite.to(music, .5, {volume: .5, ease: "Linear.easeNone"})), userInput.removeHitArea("gameTouch"), userInput.removeHitArea("pause");
    var a = {oImgData: assetLib.getData("uiButs"), aPos: [504, 735], scale: 1, frame: 2}, b = {oImgData: assetLib.getData("uiButs"), aPos: [canvas.width / 2 + 4, 610], scale: 1, frame: 0}, c = {oImgData: assetLib.getData("uiButs"), aPos: [104, 735], scale: 1, frame: 4};
    userInput.addHitArea("moreGames", butEventHandler, null, "image", a), userInput.addHitArea("nextLevel", butEventHandler, null, "image", b), userInput.addHitArea("exitFromEnd", butEventHandler, null, "image", c);
    var d = new Array(a, b, c);
    panel = new Elements.Panel(assetLib.getData("panels1"), assetLib.getData("panels2"), assetLib.getData("bigNumbersDark"), assetLib.getData("smallNumbers"), gameState, d, canvas.width, canvas.height), panel.startTween1(), aPickUps = new Array;
    for (var e = 0, f = 0; 10 > f; f++) {
        var g = new Elements.FallingGem(assetLib.getData("pickUps"), {x: Math.random() * canvas.width, y: Math.random() * canvas.height, id: ++e % 5}, canvas.width, canvas.height);
        aPickUps.push(g)
    }
    aScores[levelNum].shotNum = hud.oLevelData.shotNum, aScores[levelNum].pickUps = hud.oLevelData.pickUps, panel.aScores = aScores;
    try {
	
       window.kaisergames.submitHighscore(levelNum, saveDataHandler.aLevelStore[0] + saveDataHandler.aLevelStore[1])
    } catch (h) {
    }
    previousTime = (new Date).getTime(), updateLevelComplete()
}
function ballCallback(a) {
    switch (a) {
        case "moveEnded":
            gameTouchState = 0, oPosData.prevBallX = ball.trackX, oPosData.prevBallY = ball.trackY, hud.oLevelData.shotNum++, playSound("bounce1");
            break;
        case "holeEnded":
            initLevelComplete();
            break;
        case "bounce":
            addBounce(ball.trackX, ball.trackY), playSound("bounce" + Math.ceil(2 * Math.random()));
            break;
        case "reset":
            gameTouchState = 0, ball.trackX = oPosData.prevBallX, ball.trackY = oPosData.prevBallY, hud.oLevelData.shotNum++, playSound("reset");
            break;
        case "teleport":
            playSound("teleport");
            for (var b = 0; 5 > b; b++)
                addBounce(ball.trackX + 40 * Math.random() - 20, ball.trackY + 40 * Math.random() - 20)
    }
}
function isNearHole() {
    var a = ball.trackX - oHolePos.x, b = ball.trackY - oHolePos.y, c = a * a + b * b;
    return 500 > c ? !0 : !1
}
function toggleHudButs(a) {
    a ? (userInput.addHitArea("mute", butEventHandler, null, "rect", {aRect: [538, 0, canvas.width, 60]}, !0), userInput.addHitArea("pause", butEventHandler, null, "rect", {aRect: [480, 0, 538, 60]}, !0), userInput.addHitArea("gameTouch", butEventHandler, {isDraggable: !0, multiTouch: !0}, "rect", {aRect: [0, 0, canvas.width, canvas.height]}, !0)) : (userInput.removeHitArea("mute"), userInput.removeHitArea("pause"))
}
function addBounce(a, b) {
    var c = new Elements.Bounce(assetLib.getData("bounce"), {x: a, y: b});
    aBounces.push(c)
}
function updateGameEvent() {
    if (!manualPause && !rotatePause && "game" == gameState) {
        var a = getDelta();
        2 == gameTouchState ? (aimX += (targAimX - aimX) / .1 * a, aimY += (targAimY - aimY) / .1 * a, oPosData.targStageX = buffer > targAimX && ball.trackX < 200 ? -buffer / buffer * targAimX : targAimX > canvas.width - buffer && ball.trackX > levelWidth - 200 ? -buffer - buffer / buffer * (buffer - (canvas.width - targAimX)) : -buffer, oPosData.targStageY = buffer > targAimY && ball.trackY < 200 ? -buffer / buffer * targAimY : targAimY > canvas.height - buffer && ball.trackY > levelHeight - 200 ? -buffer - buffer / buffer * (buffer - (canvas.height - targAimY)) : -buffer, oPosData.targStageX > 0 ? oPosData.targStageX = 0 : oPosData.targStageX < -200 && (oPosData.targStageX = -200), oPosData.targStageY > 0 ? oPosData.targStageY = 0 : oPosData.targStageY < -200 && (oPosData.targStageY = -200)) : (oPosData.targStageX = -buffer, oPosData.targStageY = -buffer), oPosData.stageX += (oPosData.targStageX - oPosData.stageX) / .3 * a, oPosData.stageY += (oPosData.targStageY - oPosData.stageY) / .3 * a, level.update(oPosData.stageX, oPosData.stageY, a), level.render(ctx);
        for (var b = 0; b < aPickUps.length; b++)
            aPickUps[b].update(oPosData.stageX, oPosData.stageY, a), renderSprite(aPickUps[b]), aPickUps[b].canHit && checkSpriteCollision(ball, aPickUps[b]) && (aPickUps[b].hit(), hud.oLevelData.pickUps++, playSound("gem" + Math.ceil(4 * Math.random()))), aPickUps[b].removeMe && (aPickUps.splice(b, 1), b -= 1);
        ball.update(oPosData.stageX, oPosData.stageY, a), renderSprite(ball);
        for (var b = 0; b < aBounces.length; b++)
            aBounces[b].update(oPosData.stageX, oPosData.stageY, a), renderSprite(aBounces[b]), aBounces[b].removeMe && (aBounces.splice(b, 1), b -= 1);
        if (2 == gameTouchState)
            arrow.update(ball.x, ball.y, aimX, aimY, a), arrow.render(ctx);
        else if (3 == gameTouchState && isNearHole()) {
            var c = 0;
            hud.oLevelData.shotNum > 1 && (c = Math.min(Math.max(hud.oLevelData.shotNum - hud.oLevelData.par + 5, 1), 7)), userInput.removeHitArea("pause"), playSound("holed"), ball.changeState("holed", {x: oHolePos.x, y: oHolePos.y, remarkId: c}), gameTouchState = 4
        }
        hud.render(ctx), "moving" == ball.state && physics2D.update(a), renderMuteBut(), requestAnimFrame(updateGameEvent)
    }
}
function updateCreditsScreenEvent() {
    if (!rotatePause && "credits" == gameState) {
        var a = getDelta();
        panel.update(a), panel.render(ctx), renderMuteBut(), requestAnimFrame(updateCreditsScreenEvent)
    }
}
function updateCourseSelectScreenEvent() {
    if (!rotatePause && "courseSelect" == gameState) {
        var a = getDelta();
        background.updateScroll(a), background.renderScroll(ctx);
        for (var b = 0; b < aPickUps.length; b++)
            aPickUps[b].y += (150 + 20 * b) * a, aPickUps[b].rotation = aPickUps[b].y / 50, aPickUps[b].x = aPickUps[b].x - 100 * Math.sin(aPickUps[b].y / 100) * a, aPickUps[b].y > canvas.height + 100 && (aPickUps[b].x = Math.random() * canvas.width, aPickUps[b].y = -200), aPickUps[b].update(a), renderSprite(aPickUps[b]);
        panel.update(a), panel.render(ctx), renderMuteBut(), requestAnimFrame(updateCourseSelectScreenEvent)
    }
}
function updateLevelComplete() {
    if (!rotatePause && "levelComplete" == gameState) {
        var a = getDelta();
        background.updateScroll(a), background.renderScroll(ctx);
        for (var b = 0; b < aPickUps.length; b++)
            aPickUps[b].y += (150 + 20 * b) * a, aPickUps[b].rotation = aPickUps[b].y / 50, aPickUps[b].x = aPickUps[b].x - 100 * Math.sin(aPickUps[b].y / 100) * a, aPickUps[b].y > canvas.height + 100 && (aPickUps[b].x = Math.random() * canvas.width, aPickUps[b].y = -200), aPickUps[b].update(a), renderSprite(aPickUps[b]);
        panel.update(a), panel.render(ctx), renderMuteBut(), requestAnimFrame(updateLevelComplete)
    }
}
function updateSplashScreenEvent() {
    if (!rotatePause && "splash" == gameState) {
        var a = getDelta();
        if (splashTimer += a, splashTimer > 2.5)
            return 1 != audioType || muted || music.play(), initStartScreen(), void 0;
        splash.render(ctx, a), requestAnimFrame(updateSplashScreenEvent)
    }
}
function updateStartScreenEvent() {
    if (!rotatePause && "start" == gameState) {
        var a = getDelta();
        background.updateScroll(a), background.renderScroll(ctx);
        for (var b = 0; b < aPickUps.length; b++)
            aPickUps[b].y += (150 + 20 * b) * a, aPickUps[b].rotation = aPickUps[b].y / 50, aPickUps[b].x = aPickUps[b].x - 100 * Math.sin(aPickUps[b].y / 100) * a, aPickUps[b].y > canvas.height + 100 && (aPickUps[b].x = Math.random() * canvas.width, aPickUps[b].y = -200), aPickUps[b].update(a), renderSprite(aPickUps[b]);
        panel.update(a), panel.render(ctx), renderMuteBut(), requestAnimFrame(updateStartScreenEvent)
    }
}
function getDelta() {
    var a = (new Date).getTime(), b = (a - previousTime) / 1e3;
    return previousTime = a, b > .5 && (b = 0), b
}
function renderSprite(a) {
    ctx.save(), ctx.translate(a.x, a.y), ctx.scale(a.scaleX, a.scaleY), ctx.rotate(a.rotation), a.render(ctx), ctx.restore()
}
function checkSpriteCollision(a, b) {
    var c = a.x - b.x, d = a.y - b.y, e = c * c + d * d, f = a.radius * b.radius;
    return f > e ? !0 : !1
}
function getScaleImageToMax(a, b) {
    var c;
    return c = a.isSpriteSheet ? b[0] / a.oData.spriteWidth < b[1] / a.oData.spriteHeight ? Math.min(b[0] / a.oData.spriteWidth, 1) : Math.min(b[1] / a.oData.spriteHeight, 1) : b[0] / a.img.width < b[1] / a.img.height ? Math.min(b[0] / a.img.width, 1) : Math.min(b[1] / a.img.height, 1)
}
function getCentreFromTopLeft(a, b, c) {
    var d = new Array;
    return d.push(a[0] + b.oData.spriteWidth / 2 * c), d.push(a[1] + b.oData.spriteHeight / 2 * c), d
}
function loadPreAssets() {
    aLangs.length > 1 ? (preAssetLib = new Utils.AssetLoader(curLang, [
        {id: "langSelect", file: "images/langSelect.jpg"},
        {id: "preloadImage", file: "images/preloadImage.jpg"}
    ], ctx, canvas.width, canvas.height, !1), preAssetLib.onReady(initLangSelect)) : (curLang = aLangs[0], preAssetLib = new Utils.AssetLoader(curLang, [
        {id: "preloadImage", file: "images/preloadImage.jpg"}
    ], ctx, canvas.width, canvas.height, !1), preAssetLib.onReady(initLoadAssets))
}
function initLangSelect() {
    curLang = "EN", ctx.clearRect(0, 0, canvas.width, canvas.height), userInput.removeHitArea("langSelect"), initLoadAssets();
}
function initLoadAssets() {
    var a = preAssetLib.getData("preloadImage");
//    ctx.drawImage(a.img, 0, 0),
        loadAssets();
}
function loadAssets() {
    assetLib = new Utils.AssetLoader(curLang, [
        {id: "background", file: "images/background.jpg"},
      //  {id: "rotateDeviceMessage", file: "images/rotateDeviceMessage.jpg"},
        {id: "hud", file: "images/" + curLang + "/hud.png"},
        {id: "uiButs", file: "images/" + curLang + "/uiButs_191x109.png"},
        {id: "panels1", file: "images/" + curLang + "/panels1_600x800.png"},
        {id: "panels2", file: "images/" + curLang + "/panels2_600x800.png"},
        {id: "bigNumbersLight", file: "images/bigNumbersLight_24x45.png"},
        {id: "bigNumbersDark", file: "images/bigNumbersDark_24x45.png"},
        {id: "smallNumbers", file: "images/smallNumbers_17x32.png"},
        {id: "ball", file: "images/ball_118x169.png", oAnims: {waiting: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19], moving: [19], inWater: [21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34]}},
        {id: "bounce", file: "images/bounce_46x44.png", oAnims: {explode: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}},
        {id: "arrow", file: "images/arrow_101x60.png"},
        {id: "remarks", file: "images/" + curLang + "/remarks_560x255.png"},
        {id: "level00", file: "images/" + curLang + "/levelA0.jpg"},
        {id: "level01", file: "images/" + curLang + "/levelA1.jpg"},
        {id: "level02", file: "images/levelA2.jpg"},
        {id: "level03", file: "images/levelA3.jpg"},
        {id: "level04", file: "images/levelA4.jpg"},
        {id: "level05", file: "images/levelA5.jpg"},
        {id: "level06", file: "images/levelA6.jpg"},
        {id: "level07", file: "images/levelA7.jpg"},
        {id: "level08", file: "images/levelA8.jpg"},
        {id: "level10", file: "images/levelB0.jpg"},
        {id: "level11", file: "images/levelB1.jpg"},
        {id: "level12", file: "images/levelB2.jpg"},
        {id: "level13", file: "images/levelB3.jpg"},
        {id: "level14", file: "images/levelB4.jpg"},
        {id: "level15", file: "images/levelB5.jpg"},
        {id: "level16", file: "images/levelB6.jpg"},
        {id: "level17", file: "images/levelB7.jpg"},
        {id: "level18", file: "images/levelB8.jpg"},
        {id: "muteBut", file: "images/mute_53x53.png"},
        {id: "pickUps", file: "images/pickUps_108x99.png",
            oAnims: {waiting0: [0, 1, 2, 3, 4, 3, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                waiting1: [5, 6, 7, 8, 9, 8, 7, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
                waiting2: [10, 11, 12, 13, 14, 13, 12, 11, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
                waiting3: [15, 16, 17, 18, 19, 18, 17, 16, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15],
                waiting4: [20, 21, 22, 23, 24, 23, 22, 21, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20],
                explode: [25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35],
                falling0: [36], falling1: [37],
                falling2: [38], falling3: [39],
                falling4: [40]}}
    ], ctx, canvas.width, canvas.height, !1), assetLib.onReady(initSplash)
}
function resizeCanvas() {
    var a = window.innerWidth, b = window.innerHeight;
    a > 480 && (a -= 1, b -= 1), window.innerWidth > window.innerHeight && isMobile ? ("loading" != gameState && rotatePauseOn(), a / canvas.width < b / canvas.height ? (canvas.style.width = a + "px", canvas.style.height = a / canvas.width * canvas.height + "px", canvasX = 0, canvasY = (b - a / canvas.width * canvas.height) / 2, canvasScaleX = canvasScaleY = canvas.width / a, div.style.marginTop = canvasY + "px", div.style.marginLeft = canvasX + "px") : (canvas.style.width = b / canvas.height * canvas.width + "px", canvas.style.height = b + "px", canvasX = (a - b / canvas.height * canvas.width) / 2, canvasY = 0, canvasScaleX = canvasScaleY = canvas.height / b, div.style.marginTop = canvasY + "px", div.style.marginLeft = canvasX + "px")) : isMobile ? (rotatePause && rotatePauseOff(), canvasX = canvasY = 0, canvasScaleX = canvas.width / a, canvasScaleY = canvas.height / b, canvas.style.width = a + "px", canvas.style.height = b + "px", div.style.marginTop = "0px", div.style.marginLeft = "0px") : (rotatePause && rotatePauseOff(), a / canvas.width < b / canvas.height ? (canvas.style.width = a + "px", canvas.style.height = a / canvas.width * canvas.height + "px", canvasX = 0, canvasY = (b - a / canvas.width * canvas.height) / 2, canvasScaleX = canvasScaleY = canvas.width / a, div.style.marginTop = canvasY + "px", div.style.marginLeft = canvasX + "px") : (canvas.style.width = b / canvas.height * canvas.width + "px", canvas.style.height = b + "px", canvasX = (a - b / canvas.height * canvas.width) / 2, canvasY = 0, canvasScaleX = canvasScaleY = canvas.height / b, div.style.marginTop = canvasY + "px", div.style.marginLeft = canvasX + "px")), userInput.setCanvas(canvasX, canvasY, canvasScaleX, canvasScaleY)
}
function playSound(a) {
    1 == audioType && sound.play(a)
}
function toggleMute() {
    muted = !muted, 1 == audioType ? muted ? Howler.mute() : Howler.unmute() : 2 == audioType && (muted ? music.pause() : music.play()), renderMuteBut()
}
function renderLogoBut() {
    ctx.drawImage(oLogoBut.oImgData.img, 0, 0, oLogoBut.oImgData.img.width, oLogoBut.oImgData.img.height, oLogoBut.aPos[0] - oLogoBut.oImgData.img.width / 2 * oLogoBut.scale, oLogoBut.aPos[1] - oLogoBut.oImgData.img.height / 2 * oLogoBut.scale, oLogoBut.oImgData.img.width * oLogoBut.scale, oLogoBut.oImgData.img.height * oLogoBut.scale)
}
function renderMuteBut() {
    if (0 != audioType) {
        var a = assetLib.getData("muteBut"), b = 0;
        muted && (b = 1);
        var c = b * a.oData.spriteWidth % a.img.width, d = Math.floor(b / (a.img.width / a.oData.spriteWidth)) * a.oData.spriteHeight;
        ctx.drawImage(a.img, c, d, a.oData.spriteWidth, a.oData.spriteHeight, 538, 7, a.oData.spriteWidth, a.oData.spriteHeight)
    }
}
function toggleManualPause() {
    if (manualPause)
        manualPause = !1,
            userInput.removeHitArea("quitFromPause"),
            userInput.removeHitArea("resumeFromPause"),
            userInput.removeHitArea("moreGamesPause"), pauseCoreOff();
    else {
        manualPause = !0, pauseCoreOn();
        var a = {oImgData: assetLib.getData("uiButs"),
            aPos: [104, 535], scale: 1, frame: 1}, b = {oImgData: assetLib.getData("uiButs"),
            aPos: [504, 535], scale: 1, frame: 0}, c = {oImgData: assetLib.getData("uiButs"),
            aPos: [canvas.width / 2 + 4, 535], scale: 1, frame: 2}, d = new Array(a, b, c);
        userInput.addHitArea("quitFromPause", butEventHandler, null, "image", a),
            userInput.addHitArea("resumeFromPause", butEventHandler, null, "image", b),
            userInput.addHitArea("moreGamesPause", butEventHandler, null, "image", c),
            panel = new Elements.Panel(assetLib.getData("panels1"),
                assetLib.getData("panels2"), assetLib.getData("bigNumbersDark"),
                assetLib.getData("smallNumbers"), "pause", d, canvas.width, canvas.height),
            panel.render(ctx), userInput.addHitArea("pause", butEventHandler, null, "rect", {aRect: [480, 0, 538, 60]}, !0)
    }
}
function rotatePauseOn() {
 
}
function rotatePauseOff() {
    rotatePause = !1, userInput.removeHitArea("quitFromPause"),
        userInput.removeHitArea("resumeFromPause"),
        userInput.removeHitArea("moreGamesPause"), pauseCoreOff()
}
function pauseCoreOn() {
    switch (1 == audioType ? Howler.mute() : 2 == audioType && music.pause(), gameState) {
        case "start":
            break;
        case "help":
            break;
        case "game":
            userInput.removeHitArea("gameTouch");
            break;
        case "end":
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
        case "courseSelect":
            initCourseSelectScreen();
            break;
        case "credits":
            initCreditsScreen();
            break;
        case "game":
            manualPause = !1, userInput.addHitArea("gameTouch", butEventHandler,
                {isDraggable: !0, multiTouch: !0}, "rect",
                {aRect: [0, 0, canvas.width, canvas.height]}, !0), updateGameEvent();
            break;
        case "levelComplete":
            initLevelComplete()
    }
}
var Utils;
!function (a) {
    var b = function () {
        function a(a, b, c, d, e, f) {
            "undefined" == typeof f && (f = !0), this.oAssetData = {}, this.assetsLoaded = 0, this.totalAssets = b.length, this.ctx = c, this.canvasWidth = d, this.canvasHeight = e, this.showBar = f, this.topLeftX = this.canvasWidth / 2 - d / 4, this.topLeftY = 440, this.showBar && (ctx.strokeStyle = "#5B6394", ctx.lineWidth = 2, ctx.fillStyle = "#95A8E9", ctx.moveTo(this.topLeftX, this.topLeftY), ctx.lineTo(this.topLeftX + d / 2, this.topLeftY + 0), ctx.lineTo(this.topLeftX + d / 2, this.topLeftY + 40), ctx.lineTo(this.topLeftX + 0, this.topLeftY + 40), ctx.lineTo(this.topLeftX + 0, this.topLeftY + 0), ctx.stroke());
            for (var g = 0; g < b.length; g++)
                this.loadImage(b[g])
        }

        return a.prototype.loadImage = function (a) {
            var b = this, c = new Image;
            c.onload = function () {
                b.oAssetData[a.id] = {}, b.oAssetData[a.id].img = c, b.oAssetData[a.id].oData = {};
                var d = b.getSpriteSize(a.file);
                0 != d[0] ? (b.oAssetData[a.id].oData.spriteWidth = d[0],
                    b.oAssetData[a.id].oData.spriteHeight = d[1]) : (b.oAssetData[a.id].oData.spriteWidth = b.oAssetData[a.id].img.width,
                    b.oAssetData[a.id].oData.spriteHeight = b.oAssetData[a.id].img.height),
                    a.oAnims && (b.oAssetData[a.id].oData.oAnims = a.oAnims), ++b.assetsLoaded,
                    b.showBar && ctx.fillRect(b.topLeftX + 2, b.topLeftY + 2,
                        (b.canvasWidth / 2 - 4) / b.totalAssets * b.assetsLoaded, 36),
                    b.checkLoadComplete()
            }, c.src = a.file
        }, a.prototype.getSpriteSize = function (a) {
            for (var b = new Array, c = "", d = "", e = 0, f = a.lastIndexOf("."), g = !0; g;)
                f--, 0 == e && this.isNumber(a.charAt(f)) ? c = a.charAt(f) + c : 0 == e && c.length > 0 && "x" == a.charAt(f) ? (f--, e = 1, d = a.charAt(f) + d) : 1 == e && this.isNumber(a.charAt(f)) ? d = a.charAt(f) + d : 1 == e && d.length > 0 && "_" == a.charAt(f) ? (g = !1, b = [parseInt(d), parseInt(c)]) : (g = !1, b = [0, 0]);
            return b
        }, a.prototype.isNumber = function (a) {
            return !isNaN(parseFloat(a)) && isFinite(a)
        }, a.prototype.checkLoadComplete = function () {
            this.assetsLoaded == this.totalAssets && this.loadedCallback()
        }, a.prototype.onReady = function (a) {
            this.loadedCallback = a
        }, a.prototype.getImg = function (a) {
            return this.oAssetData[a].img
        }, a.prototype.getData = function (a) {
            return this.oAssetData[a]
        }, a
    }();
    a.AssetLoader = b
}(Utils || (Utils = {}));
var Utils;
!function (a) {
    var b = function () {
        function a(a, b, c, d) {
            this.x = 0, this.y = 0, this.rotation = 0, this.radius = 10, this.removeMe = !1, this.frameInc = 0, this.animType = "loop", this.offsetX = 0, this.offsetY = 0, this.scaleX = 1, this.scaleY = 1, this.oImgData = a, this.oAnims = this.oImgData.oData.oAnims, this.fps = b, this.radius = c, this.animId = d
        }

        return a.prototype.updateAnimation = function (a) {
            this.frameInc += this.fps * a
        }, a.prototype.resetAnim = function () {
            this.frameInc = 0
        }, a.prototype.setFrame = function (a) {
            this.fixedFrame = a
        }, a.prototype.setAnimType = function (a, b, c) {
            switch ("undefined" == typeof c && (c = !0), this.animId = b, this.animType = a, c && this.resetAnim(), a) {
                case "loop":
                    break;
                case "once":
                    this.maxIdx = this.oAnims[this.animId].length - 1
            }
        }, a.prototype.render = function (a) {
            if (null != this.animId) {
                var b = this.oAnims[this.animId].length, c = Math.floor(this.frameInc), d = this.oAnims[this.animId][c % b], e = d * this.oImgData.oData.spriteWidth % this.oImgData.img.width, f = Math.floor(d / (this.oImgData.img.width / this.oImgData.oData.spriteWidth)) * this.oImgData.oData.spriteHeight;
                if ("once" == this.animType && c > this.maxIdx) {
                    this.fixedFrame = this.oAnims[this.animId][b - 1], this.animId = null, this.animEndedFunc();
                    var e = this.fixedFrame * this.oImgData.oData.spriteWidth % this.oImgData.img.width, f = Math.floor(this.fixedFrame / (this.oImgData.img.width / this.oImgData.oData.spriteWidth)) * this.oImgData.oData.spriteHeight
                }
            } else
                var e = this.fixedFrame * this.oImgData.oData.spriteWidth % this.oImgData.img.width, f = Math.floor(this.fixedFrame / (this.oImgData.img.width / this.oImgData.oData.spriteWidth)) * this.oImgData.oData.spriteHeight;
            a.drawImage(this.oImgData.img, e, f, this.oImgData.oData.spriteWidth, this.oImgData.oData.spriteHeight, -this.oImgData.oData.spriteWidth / 2 + this.offsetX, -this.oImgData.oData.spriteHeight / 2 + this.offsetY, this.oImgData.oData.spriteWidth, this.oImgData.oData.spriteHeight)
        }, a
    }();
    a.AnimSprite = b
}(Utils || (Utils = {}));
var Utils;
!function (a) {
    var b = function () {
        function a(a, b, c) {
            "undefined" == typeof c && (c = 0), this.x = 0, this.y = 0, this.rotation = 0, this.radius = 10, this.removeMe = !1, this.offsetX = 0, this.offsetY = 0, this.scaleX = 1, this.scaleY = 1, this.oImgData = a, this.radius = b, this.setFrame(c)
        }

        return a.prototype.setFrame = function (a) {
            this.frameNum = a
        }, a.prototype.render = function (a) {
            var b = this.frameNum * this.oImgData.oData.spriteWidth % this.oImgData.img.width, c = Math.floor(this.frameNum / (this.oImgData.img.width / this.oImgData.oData.spriteWidth)) * this.oImgData.oData.spriteHeight;
            a.drawImage(this.oImgData.img, b, c, this.oImgData.oData.spriteWidth, this.oImgData.oData.spriteHeight, -this.oImgData.oData.spriteWidth / 2 + this.offsetX, -this.oImgData.oData.spriteHeight / 2 + this.offsetY, this.oImgData.oData.spriteWidth, this.oImgData.oData.spriteHeight)
        }, a
    }();
    a.BasicSprite = b
}(Utils || (Utils = {}));
var Utils;
!function (a) {
    var b = function () {
        function a(a, b) {
            var c = this;
			
            this.canvasX = 0, this.canvasY = 0, this.canvasScaleX = 1, this.canvasScaleY = 1, this.prevHitTime = 0, this.pauseIsOn = !1, this.isDown = !1, this.isDetectingKeys = !1, this.isBugBrowser = b, a.addEventListener("touchstart", function (a) {
                for (var b = 0; b < a.changedTouches.length; b++)
                    c.hitDown(a, a.changedTouches[b].pageX, a.changedTouches[b].pageY, a.changedTouches[b].identifier)
            }, !1), a.addEventListener("touchend", function (a) {
                for (var b = 0; b < a.changedTouches.length; b++)
                    c.hitUp(a, a.changedTouches[b].pageX, a.changedTouches[b].pageY, a.changedTouches[b].identifier)
            }, !1), a.addEventListener("touchmove", function (a) {
                for (var b = 0; b < c.aHitAreas.length; b++)
          c.move(a, a.changedTouches[b].pageX, a.changedTouches[b].pageY, a.changedTouches[b].identifier, !0)
            }, !1), a.addEventListener("mousedown", function (a) {
                c.isDown = !0, c.hitDown(a, a.pageX, a.pageY, 1)
            }, !1), a.addEventListener("mouseup", function (a) {
                c.isDown = !1, c.hitUp(a, a.pageX, a.pageY, 1)
            }, !1), a.addEventListener("mousemove", function (a) {
                c.move(a, a.pageX, a.pageY, 1, c.isDown)
            }, !1), this.aHitAreas = new Array, this.aKeys = new Array
        }

        return a.prototype.setCanvas = function (a, b, c, d) {
            this.canvasX = a, this.canvasY = b, this.canvasScaleX = c, this.canvasScaleY = d
        }, a.prototype.hitDown = function (a, b, c, d) {
            if (!this.pauseIsOn) {
                var e = (new Date).getTime();
                if (!(e - this.prevHitTime < 500 && isBugBrowser)) {
                    this.prevHitTime = e, a.preventDefault(), a.stopPropagation(), b = (b - this.canvasX) * this.canvasScaleX, c = (c - this.canvasY) * this.canvasScaleY;
                    for (var f = 0; f < this.aHitAreas.length; f++)
                        if (this.aHitAreas[f].rect && b > this.aHitAreas[f].area[0] && c > this.aHitAreas[f].area[1] && b < this.aHitAreas[f].area[2] && c < this.aHitAreas[f].area[3]) {
                            this.aHitAreas[f].aTouchIdentifiers.push(d), this.aHitAreas[f].oData.isDown || (this.aHitAreas[f].oData.isDown = !0, this.aHitAreas[f].oData.x = b, this.aHitAreas[f].oData.y = c, this.aHitAreas[f].callback(this.aHitAreas[f].id, this.aHitAreas[f].oData));
                            break
                        }
                }
            }
        }, a.prototype.hitUp = function (a, b, c, d) {
            if (!this.pauseIsOn) {
                a.preventDefault(), a.stopPropagation(), b = (b - this.canvasX) * this.canvasScaleX, c = (c - this.canvasY) * this.canvasScaleY;
                for (var e = 0; e < this.aHitAreas.length; e++)
                    if (this.aHitAreas[e].rect && b > this.aHitAreas[e].area[0] && c > this.aHitAreas[e].area[1] && b < this.aHitAreas[e].area[2] && c < this.aHitAreas[e].area[3]) {
                        for (var f = 0; f < this.aHitAreas[e].aTouchIdentifiers.length; f++)
                            this.aHitAreas[e].aTouchIdentifiers[f] == d && (this.aHitAreas[e].aTouchIdentifiers.splice(f, 1), f -= 1);
                        0 == this.aHitAreas[e].aTouchIdentifiers.length && (this.aHitAreas[e].oData.isDown = !1, this.aHitAreas[e].oData.multiTouch && this.aHitAreas[e].callback(this.aHitAreas[e].id, this.aHitAreas[e].oData));
                        break
                    }
            }
        }, a.prototype.move = function (a, b, c, d, e) {
            if (!this.pauseIsOn && e) {
                b = (b - this.canvasX) * this.canvasScaleX, c = (c - this.canvasY) * this.canvasScaleY;
                for (var f = 0; f < this.aHitAreas.length; f++)
                    if (this.aHitAreas[f].rect)
                        if (b > this.aHitAreas[f].area[0] && c > this.aHitAreas[f].area[1] && b < this.aHitAreas[f].area[2] && c < this.aHitAreas[f].area[3]) {
                            try {
                                (this.aHitAreas[f] != undefined) && (this.aHitAreas[f].oData && (this.aHitAreas[f].oData.isDown || (this.aHitAreas[f].oData.isDown = !0, this.aHitAreas[f].oData.x = b, this.aHitAreas[f].oData.y = c, this.aHitAreas[f].aTouchIdentifiers.push(d), (this.aHitAreas[f] != undefined) && this.aHitAreas[f].oData.multiTouch && this.aHitAreas[f].callback(this.aHitAreas[f].id, this.aHitAreas[f].oData)), this.aHitAreas[f].oData.isDraggable && (this.aHitAreas[f].oData.isBeingDragged = !0, this.aHitAreas[f].oData.x = b, this.aHitAreas[f].oData.y = c, this.aHitAreas[f].callback(this.aHitAreas[f].id, this.aHitAreas[f].oData), this.aHitAreas[f].oData.isBeingDragged = !1)));

                            } catch (eee) {
                            }
                        }
                        else if (this.aHitAreas[f].oData.isDown) {
                            for (var g = 0; g < this.aHitAreas[f].aTouchIdentifiers.length; g++)
                                this.aHitAreas[f].aTouchIdentifiers[g] == d && (this.aHitAreas[f].aTouchIdentifiers.splice(g, 1), g -= 1);
                            0 == this.aHitAreas[f].aTouchIdentifiers.length && (this.aHitAreas[f].oData.isDown = !1, this.aHitAreas[f].oData.multiTouch && this.aHitAreas[f].callback(this.aHitAreas[f].id, this.aHitAreas[f].oData))
                        }
            }
        }, a.prototype.keyDown = function (a) {
            for (var b = 0; b < this.aKeys.length; b++)
                a.keyCode == this.aKeys[b].keyCode && (this.aKeys[b].oData.isDown = !0, this.aKeys[b].callback(this.aKeys[b].id, this.aKeys[b].oData))
        }, a.prototype.keyUp = function (a) {
            for (var b = 0; b < this.aKeys.length; b++)
                a.keyCode == this.aKeys[b].keyCode && (this.aKeys[b].oData.isDown = !1, this.aKeys[b].callback(this.aKeys[b].id, this.aKeys[b].oData))
        }, a.prototype.addKey = function (a, b, c, d) {
            var e = this;
            this.isDetectingKeys || (window.addEventListener("keydown", function (a) {
                e.keyDown(a)
            }, !1), window.addEventListener("keyup", function (a) {
                e.keyUp(a)
            }, !1), this.isDetectingKeys = !0), null == c && (c = new Object), this.aKeys.push({id: a, callback: b, oData: c, keyCode: d})
        }, a.prototype.removeKey = function (a) {
            for (var b = 0; b < this.aKeys.length; b++)
                this.aKeys[b].id == a && (this.aKeys.splice(b, 1), b -= 1)
        }, a.prototype.addHitArea = function (a, b, c, d, e, f) {
            "undefined" == typeof f && (f = !1), null == c && (c = new Object), f && this.removeHitArea(a);
            var g = new Array;
            switch (d) {
                case "image":
                    var h;
                    h = new Array(e.aPos[0] - e.oImgData.oData.spriteWidth / 2 * e.scale, e.aPos[1] - e.oImgData.oData.spriteHeight / 2 * e.scale, e.aPos[0] + e.oImgData.oData.spriteWidth / 2 * e.scale, e.aPos[1] + e.oImgData.oData.spriteHeight / 2 * e.scale), this.aHitAreas.push({id: a, aTouchIdentifiers: g, callback: b, oData: c, rect: !0, area: h});
                    break;
                case "rect":
                    this.aHitAreas.push({id: a, aTouchIdentifiers: g, callback: b, oData: c, rect: !0, area: e.aRect})
            }
        }, a.prototype.removeHitArea = function (a) {
            for (var b = 0; b < this.aHitAreas.length; b++)
                this.aHitAreas[b].id == a && (this.aHitAreas.splice(b, 1), b -= 1)
        }, a
    }();
    a.UserInput = b
}(Utils || (Utils = {}));
var Utils;
!function (a) {
    var b = function () {
        function a(a) {
            this.updateFreq = 10, this.updateInc = 0, this.frameAverage = 0, this.display = 1, this.log = "", this.render = function (a) {
                this.frameAverage += this.delta / this.updateFreq, ++this.updateInc >= this.updateFreq && (this.updateInc = 0, this.display = this.frameAverage, this.frameAverage = 0), a.textAlign = "left", ctx.font = "10px Helvetica", a.fillStyle = "#333333", a.beginPath(), a.rect(0, this.canvasHeight - 15, 40, 15), a.closePath(), a.fill(), a.fillStyle = "#ffffff", a.fillText(Math.round(1e3 / (1e3 * this.display)) + " fps " + this.log, 5, this.canvasHeight - 5)
            }, this.canvasHeight = a
        }

        return a.prototype.update = function (a) {
            this.delta = a
        }, a
    }();
    a.FpsMeter = b
}(Utils || (Utils = {}));
var Elements;
!function (a) {
    var b = function () {
        function a(a, b, c) {
            this.x = 0, this.y = 0, this.targY = 0, this.incY = 0, this.aScrollPos = new Array({offsetX: 0, offsetY: 0}, {offsetX: 1, offsetY: 0}, {offsetX: 1, offsetY: 1}, {offsetX: 0, offsetY: 1}), this.oImgData = a, this.canvasWidth = b, this.canvasHeight = c
        }

        return a.prototype.updateScroll = function (a) {
            this.incY += 5 * a, this.x = this.x - 50 * Math.sin(this.incY / 10) * a, this.y = this.y - 50 * a
        }, a.prototype.renderScroll = function (a) {
            this.x = this.x % this.canvasWidth, this.y = this.y % this.canvasHeight;
            for (var b = 0; 4 > b; b++)
                a.drawImage(this.oImgData.img, 0, 0, this.oImgData.img.width, this.oImgData.img.height, this.x + this.aScrollPos[b].offsetX * this.canvasWidth, this.y + this.aScrollPos[b].offsetY * this.canvasHeight, this.canvasWidth, this.canvasHeight)
        }, a
    }();
    a.Background = b
}(Elements || (Elements = {}));
var Elements;
!function (a) {
    var b = function () {
        function a(a, b, c) {
            this.inc = 0, this.oSplashScreenImgData = a, this.canvasWidth = b, this.canvasHeight = c, this.posY = -this.canvasHeight, TweenLite.to(this, .5, {posY: 0})
        }

        return a.prototype.render = function (a, b) {
            this.inc += 5 * b, a.drawImage(this.oSplashScreenImgData.img, 0, 0 - this.posY)
        }, a
    }();
    a.Splash = b
}(Elements || (Elements = {}));
var Elements;
!function (a) {
    var b = function () {
        function a(a, b, c, d, e, f, g, h) {
            this.timer = .3, this.endTime = 0, this.aScores = new Array, this.posY = 0, this.bigCharSpace = 24, this.smallCharSpace = 16, this.incY = 0, this.aLevelStore = new Array, this.oPanels1ImgData = a, this.oPanels2ImgData = b, this.oBigNumbersImgData = c, this.oSmallNumbersImgData = d, this.panelType = e, this.aButs = f, this.canvasWidth = g, this.canvasHeight = h
        }

        return a.prototype.update = function (a) {
            this.incY += 5 * a
        }, a.prototype.startTween1 = function () {
            this.posY = 800, TweenLite.to(this, .8, {posY: 0, ease: "Back.easeOut"})
        }, a.prototype.startTween2 = function () {
            this.posY = 800, TweenLite.to(this, .5, {posY: 0, ease: "Quad.easeOut"})
        }, a.prototype.render = function (a) {
            switch (this.panelType) {
                case "start":
                    var b = 0, c = b * this.oPanels1ImgData.oData.spriteWidth % this.oPanels1ImgData.img.width, d = Math.floor(b / (this.oPanels1ImgData.img.width / this.oPanels1ImgData.oData.spriteWidth)) * this.oPanels1ImgData.oData.spriteHeight;
                    a.drawImage(this.oPanels1ImgData.img, c, d, this.oPanels1ImgData.oData.spriteWidth, this.oPanels1ImgData.oData.spriteHeight, 0, 0 + this.posY, this.oPanels1ImgData.oData.spriteWidth, this.oPanels1ImgData.oData.spriteHeight);
                    break;
                case "credits":
                    var b = 1, c = b * this.oPanels1ImgData.oData.spriteWidth % this.oPanels1ImgData.img.width, d = Math.floor(b / (this.oPanels1ImgData.img.width / this.oPanels1ImgData.oData.spriteWidth)) * this.oPanels1ImgData.oData.spriteHeight;
                    a.drawImage(this.oPanels1ImgData.img, c, d, this.oPanels1ImgData.oData.spriteWidth, this.oPanels1ImgData.oData.spriteHeight, 0, 0 + this.posY, this.oPanels1ImgData.oData.spriteWidth, this.oPanels1ImgData.oData.spriteHeight);
                    break;
                case "courseSelect":
                    var b = 2, c = b * this.oPanels1ImgData.oData.spriteWidth % this.oPanels1ImgData.img.width, d = Math.floor(b / (this.oPanels1ImgData.img.width / this.oPanels1ImgData.oData.spriteWidth)) * this.oPanels1ImgData.oData.spriteHeight;
                    a.drawImage(this.oPanels1ImgData.img, c, d, this.oPanels1ImgData.oData.spriteWidth, this.oPanels1ImgData.oData.spriteHeight, 0, 0 + this.posY, this.oPanels1ImgData.oData.spriteWidth, this.oPanels1ImgData.oData.spriteHeight);
                    for (var e = 0; e < this.aLevelStore.length; e++) {
                        g = this.aLevelStore[e];
                        for (var f = 0; f < g.toString().length; f++) {
                            b = parseFloat(g.toString().charAt(f));
                            var c = b * this.oSmallNumbersImgData.oData.spriteWidth % this.oSmallNumbersImgData.img.width, d = Math.floor(b / (this.oSmallNumbersImgData.img.width / this.oSmallNumbersImgData.oData.spriteWidth)) * this.oSmallNumbersImgData.oData.spriteHeight;
                            a.drawImage(this.oSmallNumbersImgData.img, c, d, this.oSmallNumbersImgData.oData.spriteWidth, this.oSmallNumbersImgData.oData.spriteHeight, 255 + f * this.smallCharSpace - this.smallCharSpace * g.toString().length / 2, 308 + 256 * e + this.posY, this.oSmallNumbersImgData.oData.spriteWidth, this.oSmallNumbersImgData.oData.spriteHeight)
                        }
                    }
                    window.shareFlag = false;
                    break;
                case "levelComplete":
                    var b = 1, c = b * this.oPanels2ImgData.oData.spriteWidth % this.oPanels2ImgData.img.width, d = Math.floor(b / (this.oPanels2ImgData.img.width / this.oPanels2ImgData.oData.spriteWidth)) * this.oPanels2ImgData.oData.spriteHeight;
                    a.drawImage(this.oPanels2ImgData.img, c, d, this.oPanels2ImgData.oData.spriteWidth, this.oPanels2ImgData.oData.spriteHeight, 0, 0 + this.posY, this.oPanels2ImgData.oData.spriteWidth, this.oPanels2ImgData.oData.spriteHeight);
                    for (var g, h = 0, i = 0, j = 0, k = 0, e = 0; e < this.aScores.length && 0 != this.aScores[e].shotNum; e++) {
                        k++, h += this.aScores[e].par, i += this.aScores[e].shotNum, j += this.aScores[e].pickUps, g = this.aScores[e].par;
                        for (var f = 0; f < g.toString().length; f++) {
                            b = parseFloat(g.toString().charAt(f));
                            var c = b * this.oSmallNumbersImgData.oData.spriteWidth % this.oSmallNumbersImgData.img.width, d = Math.floor(b / (this.oSmallNumbersImgData.img.width / this.oSmallNumbersImgData.oData.spriteWidth)) * this.oSmallNumbersImgData.oData.spriteHeight;
                            a.drawImage(this.oSmallNumbersImgData.img, c, d, this.oSmallNumbersImgData.oData.spriteWidth, this.oSmallNumbersImgData.oData.spriteHeight, 143 + 50 * e + f * this.smallCharSpace - this.smallCharSpace * g.toString().length / 2, 270 + this.posY, this.oSmallNumbersImgData.oData.spriteWidth, this.oSmallNumbersImgData.oData.spriteHeight)
                        }
                        g = this.aScores[e].shotNum;
                        for (var f = 0; f < g.toString().length; f++) {
                            b = parseFloat(g.toString().charAt(f));
                            var c = b * this.oSmallNumbersImgData.oData.spriteWidth % this.oSmallNumbersImgData.img.width, d = Math.floor(b / (this.oSmallNumbersImgData.img.width / this.oSmallNumbersImgData.oData.spriteWidth)) * this.oSmallNumbersImgData.oData.spriteHeight;
                            a.drawImage(this.oSmallNumbersImgData.img, c, d, this.oSmallNumbersImgData.oData.spriteWidth, this.oSmallNumbersImgData.oData.spriteHeight, 143 + 50 * e + f * this.smallCharSpace - this.smallCharSpace * g.toString().length / 2, 320 + this.posY, this.oSmallNumbersImgData.oData.spriteWidth, this.oSmallNumbersImgData.oData.spriteHeight)
                        }
                    }
                    for (var e = 0; e < h.toString().length; e++) {
                        b = parseFloat(h.toString().charAt(e));
                        var c = b * this.oSmallNumbersImgData.oData.spriteWidth % this.oSmallNumbersImgData.img.width, d = Math.floor(b / (this.oSmallNumbersImgData.img.width / this.oSmallNumbersImgData.oData.spriteWidth)) * this.oSmallNumbersImgData.oData.spriteHeight;
                        a.drawImage(this.oSmallNumbersImgData.img, c, d, this.oSmallNumbersImgData.oData.spriteWidth, this.oSmallNumbersImgData.oData.spriteHeight, 262 + e * this.smallCharSpace - this.smallCharSpace * h.toString().length / 2, 404 + this.posY, this.oSmallNumbersImgData.oData.spriteWidth, this.oSmallNumbersImgData.oData.spriteHeight)
                    }
                    for (var e = 0; e < i.toString().length; e++) {
                        b = parseFloat(i.toString().charAt(e));
                        var c = b * this.oSmallNumbersImgData.oData.spriteWidth % this.oSmallNumbersImgData.img.width, d = Math.floor(b / (this.oSmallNumbersImgData.img.width / this.oSmallNumbersImgData.oData.spriteWidth)) * this.oSmallNumbersImgData.oData.spriteHeight;
                        a.drawImage(this.oSmallNumbersImgData.img, c, d, this.oSmallNumbersImgData.oData.spriteWidth, this.oSmallNumbersImgData.oData.spriteHeight, 262 + e * this.smallCharSpace - this.smallCharSpace * i.toString().length / 2, 454 + this.posY, this.oSmallNumbersImgData.oData.spriteWidth, this.oSmallNumbersImgData.oData.spriteHeight)
                    }
                    for (var e = 0; e < j.toString().length; e++) {
                        b = parseFloat(j.toString().charAt(e));
                        var c = b * this.oSmallNumbersImgData.oData.spriteWidth % this.oSmallNumbersImgData.img.width, d = Math.floor(b / (this.oSmallNumbersImgData.img.width / this.oSmallNumbersImgData.oData.spriteWidth)) * this.oSmallNumbersImgData.oData.spriteHeight;
                        a.drawImage(this.oSmallNumbersImgData.img, c, d, this.oSmallNumbersImgData.oData.spriteWidth, this.oSmallNumbersImgData.oData.spriteHeight, 375 + e * this.smallCharSpace - this.smallCharSpace * j.toString().length / 2, 429 + this.posY, this.oSmallNumbersImgData.oData.spriteWidth, this.oSmallNumbersImgData.oData.spriteHeight)
                    }
                    for (var l = 10 * j + 100 * Math.max(h - i, 0) + 50 * k, e = 0; e < l.toString().length; e++) {
                        b = parseFloat(l.toString().charAt(e));
                        var c = b * this.oBigNumbersImgData.oData.spriteWidth % this.oBigNumbersImgData.img.width, d = Math.floor(b / (this.oBigNumbersImgData.img.width / this.oBigNumbersImgData.oData.spriteWidth)) * this.oBigNumbersImgData.oData.spriteHeight;
                        a.drawImage(this.oBigNumbersImgData.img, c, d, this.oBigNumbersImgData.oData.spriteWidth, this.oBigNumbersImgData.oData.spriteHeight, 495 + e * this.bigCharSpace - this.bigCharSpace * l.toString().length / 2, 438 + this.posY, this.oBigNumbersImgData.oData.spriteWidth, this.oBigNumbersImgData.oData.spriteHeight)
                    }
                    if (!window.shareFlag) {
                        window.shareFlag = true;
                        var shareLevel = this.aScores.length;
                        for (var i = 0; i < this.aScores.length; i++) {
                            if (this.aScores[i].pickUps == 0) {
                                shareLevel = i;
                                break;
                            }
                        }
					     var shareScore = l;
						// updateShare(shareLevel,l);
                        // Play68.setRankingLevelScoreDesc(shareLevel,l);
							
						
                        if (shareLevel == 9) {
                            var shareScore = l;
							
                           // play68_submitScore(shareLevel,shareScore);
                             

                       
                        }
                    }
                    saveDataHandler.aLevelStore[courseNum] < l && (saveDataHandler.aLevelStore[courseNum] = l, saveDataHandler.saveData());
                    break;
                case "pause":
                    var b = 0, c = b * this.oPanels2ImgData.oData.spriteWidth % this.oPanels2ImgData.img.width, d = Math.floor(b / (this.oPanels2ImgData.img.width / this.oPanels2ImgData.oData.spriteWidth)) * this.oPanels2ImgData.oData.spriteHeight;
                    a.drawImage(this.oPanels2ImgData.img, c, d, this.oPanels2ImgData.oData.spriteWidth, this.oPanels2ImgData.oData.spriteHeight, 0, 0, this.oPanels2ImgData.oData.spriteWidth, this.oPanels2ImgData.oData.spriteHeight)
            }
            for (var e = 0; e < this.aButs.length; e++) {
                var m = this.posY, n = 0;
                0 != this.incY && (n = 3 * Math.sin(this.incY + 45 * e));
                var b = this.aButs[e].frame, c = b * this.aButs[e].oImgData.oData.spriteWidth % this.aButs[e].oImgData.img.width, d = Math.floor(b / (this.aButs[e].oImgData.img.width / this.aButs[e].oImgData.oData.spriteWidth)) * this.aButs[e].oImgData.oData.spriteHeight;
                a.drawImage(this.aButs[e].oImgData.img, c, d, this.aButs[e].oImgData.oData.spriteWidth, this.aButs[e].oImgData.oData.spriteHeight, this.aButs[e].aPos[0] - this.aButs[e].oImgData.oData.spriteWidth / 2 + m, this.aButs[e].aPos[1] - this.aButs[e].oImgData.oData.spriteHeight / 2 - n, this.aButs[e].oImgData.oData.spriteWidth * this.aButs[e].scale, this.aButs[e].oImgData.oData.spriteHeight * this.aButs[e].scale)
            }
        }, a
    }();
    a.Panel = b
}(Elements || (Elements = {}));
var Elements;
!function (a) {
    var b = function () {
        function a(a, b, c, d, e, f, g) {
            this.bigCharSpace = 20, this.smallCharSpace = 10, this.oHudImgData = a, this.oBigNumbersLightImgData = b, this.oBigNumbersDarkImgData = c, this.oSmallNumbersImgData = d, this.oLevelData = e, this.canvasWidth = f, this.canvasHeight = g
        }

        return a.prototype.render = function (a) {
            a.drawImage(this.oHudImgData.img, 0, 0);
            for (var b = 0; b < this.oLevelData.hole.toString().length; b++) {
                var c = parseFloat(this.oLevelData.hole.toString().charAt(b)), d = c * this.oBigNumbersLightImgData.oData.spriteWidth % this.oBigNumbersLightImgData.img.width, e = Math.floor(c / (this.oBigNumbersLightImgData.img.width / this.oBigNumbersLightImgData.oData.spriteWidth)) * this.oBigNumbersLightImgData.oData.spriteHeight;
                a.drawImage(this.oBigNumbersLightImgData.img, d, e, this.oBigNumbersLightImgData.oData.spriteWidth, this.oBigNumbersLightImgData.oData.spriteHeight, 150 + b * this.bigCharSpace, 10, this.oBigNumbersLightImgData.oData.spriteWidth, this.oBigNumbersLightImgData.oData.spriteHeight)
            }
            for (var b = 0; b < this.oLevelData.par.toString().length; b++) {
                var c = parseFloat(this.oLevelData.par.toString().charAt(b)), d = c * this.oSmallNumbersImgData.oData.spriteWidth % this.oSmallNumbersImgData.img.width, e = Math.floor(c / (this.oSmallNumbersImgData.img.width / this.oSmallNumbersImgData.oData.spriteWidth)) * this.oSmallNumbersImgData.oData.spriteHeight;
                a.drawImage(this.oSmallNumbersImgData.img, d, e, this.oSmallNumbersImgData.oData.spriteWidth, this.oSmallNumbersImgData.oData.spriteHeight, 293 + b * this.smallCharSpace, 16, this.oSmallNumbersImgData.oData.spriteWidth, this.oSmallNumbersImgData.oData.spriteHeight)
            }
            for (var b = 0; b < this.oLevelData.shotNum.toString().length; b++) {
                var c = parseFloat(this.oLevelData.shotNum.toString().charAt(b)), d = c * this.oBigNumbersDarkImgData.oData.spriteWidth % this.oBigNumbersDarkImgData.img.width, e = Math.floor(c / (this.oBigNumbersDarkImgData.img.width / this.oBigNumbersDarkImgData.oData.spriteWidth)) * this.oBigNumbersDarkImgData.oData.spriteHeight;
                a.drawImage(this.oBigNumbersDarkImgData.img, d, e, this.oBigNumbersDarkImgData.oData.spriteWidth, this.oBigNumbersDarkImgData.oData.spriteHeight, 432 + b * this.bigCharSpace, 10, this.oBigNumbersDarkImgData.oData.spriteWidth, this.oBigNumbersDarkImgData.oData.spriteHeight)
            }
        }, a
    }();
    a.Hud = b
}(Elements || (Elements = {}));
var __extends = this.__extends || function (a, b) {
    function c() {
        this.constructor = a
    }

    c.prototype = b.prototype, a.prototype = new c
}, Elements;
!function (a) {
    var b = function (a) {
        function b(b, c, d, e, f, g) {
            a.call(this, b, 24, 36, "waiting"), this.radian = Math.PI / 180, this.angle = 0, this.inc = 0, this.aTilt = new Array({vx: 0, vy: -3}, {vx: 3, vy: 0}, {vx: 0, vy: 3}, {vx: -3, vy: 0}), this.surfaceOn = null, this.vx = 0, this.vy = 0, this.m = 1, this.f = 1, this.b = 1, this.oRemarkImgData = c, this.oData = d, this.ballCallback = e, this.trackX = this.oData.x, this.trackY = this.oData.y, this.p0 = {x: this.x, y: this.y}, this.p1 = {x: this.x, y: this.y}, this.bounceY = -50, this.bounceInc = 0, this.offsetY = -26, this.canvasWidth = f, this.canvasHeight = g, this.animEndedFunc = this.inWaterEnded, this.renderFunc = this.renderBall, this.changeState("waiting")
        }

        return __extends(b, a), b.prototype.changeState = function (a, b) {
            switch ("undefined" == typeof b && (b = null), this.state = a, a) {
                case "reset":
                    this.fps = 24, this.updateFunc = this.updateWaiting, this.renderFunc = this.renderBall, this.bounceY = -50, this.bounceInc = 0, this.setAnimType("loop", "waiting");
                    break;
                case "waiting":
                    this.updateFunc = this.updateWaiting, this.setAnimType("loop", "waiting");
                    break;
                case "aiming":
                    this.updateFunc = this.updateWaiting, this.setAnimType("loop", "moving");
                    break;
                case "moving":
                    this.vx = b.power / 15 * Math.cos(b.angle), this.vy = b.power / 15 * Math.sin(b.angle), this.vz = 1, this.dec = 1, this.surfaceOn = null;
                    for (var c = 0; c < this.aSurfaces.length; c++)
                        this.trackX > this.aSurfaces[c].p0.x && this.trackX < this.aSurfaces[c].p1.x && this.trackY > this.aSurfaces[c].p0.y && this.trackY < this.aSurfaces[c].p1.y && "teleport" == this.aSurfaces[c].type && (this.surfaceOn = "teleport");
                    this.setAnimType("loop", "moving"), this.tween = TweenLite.to(this, 4 * (Math.max(Math.abs(this.vx), Math.abs(this.vy)) / 6.67), {dec: 0, ease: "Quad.easeOut", onComplete: this.moveEnded, onCompleteParams: [this]}), this.bounceY = 0, this.bounceInc = 1.5 * -b.power, this.p0 = {x: this.trackX, y: this.trackY}, this.p1 = {x: this.trackX, y: this.trackY}, this.updateFunc = this.updateMoving;
                    break;
                case "holed":
                    this.tween.kill(), this.remarkId = b.remarkId, this.tween = TweenLite.to(this, .5, {trackX: b.x, trackY: b.y, scaleX: 0, scaleY: 0, ease: "Quad.easeOut", onComplete: this.ballHoled, onCompleteParams: [this]}), this.updateFunc = this.updateWaiting;
                    break;
                case "remarking":
                    this.scaleX = this.scaleY = 1, this.remarkX = this.x, this.remarkY = this.y, this.x = this.y = 0, this.remarkScale = 0, this.tween = TweenLite.to(this, 2, {remarkX: this.canvasWidth / 2, remarkY: this.canvasHeight / 2, remarkScale: 1, ease: "Back.easeOut", onComplete: this.remarkEnded, onCompleteParams: [this]}), this.updateFunc = this.updateRemarking, this.renderFunc = this.renderRemarking;
                    break;
                case "inWater":
                    this.tween.kill(), this.fps = 15, this.setAnimType("once", "inWater"), this.updateFunc = this.updateInWater, this.renderFunc = this.renderInWater
            }
        }, b.prototype.moveEnded = function (a) {
            a.changeState("waiting"), a.ballCallback("moveEnded")
        }, b.prototype.ballHoled = function (a) {
            a.changeState("remarking")
        }, b.prototype.remarkEnded = function (a) {
            a.ballCallback("holeEnded")
        }, b.prototype.inWaterEnded = function () {
            this.ballCallback("reset"), this.changeState("reset")
        }, b.prototype.update = function (a, b, c) {
            this.updateFunc(a, b, c)
        }, b.prototype.updateInWater = function (b, c, d) {
            a.prototype.updateAnimation.call(this, d)
        }, b.prototype.render = function (a) {
            this.renderFunc(a)
        }, b.prototype.updateMoving = function (b, c, d) {
            a.prototype.updateAnimation.call(this, d);
            var e = this.dec / this.vz;
            this.vz *= e, this.vx *= e, this.vy *= e, this.x = this.trackX + b, this.y = this.trackY + c;
            for (var f = !1, g = 0; g < this.aSurfaces.length; g++)
                if (this.trackX > this.aSurfaces[g].p0.x && this.trackX < this.aSurfaces[g].p1.x && this.trackY > this.aSurfaces[g].p0.y && this.trackY < this.aSurfaces[g].p1.y)
                    if ("slope" == this.aSurfaces[g].type) {
                        this.tween.kill(), this.surfaceOn = "slope", f = !0, this.vx = this.vx + this.aTilt[this.aSurfaces[g].dir].vx * d, this.vy = this.vy + this.aTilt[this.aSurfaces[g].dir].vy * d;
                        var h = Math.abs(this.vx), i = Math.abs(this.vy);
                        h > 6.67 ? (this.vx = Math.max(Math.min(this.vx, 6.67), -6.67), this.vy = this.vy * (6.67 / h)) : i > 6.67 && (this.vy = Math.max(Math.min(this.vy, 6.67), -6.67), this.vx = this.vx * (6.67 / i))
                    } else
                        "mud" == this.aSurfaces[g].type ? ("mud" != this.surfaceOn && (this.tween.timeScale(4), playSound("mud"), this.surfaceOn = "mud"), f = !0) : "water" == this.aSurfaces[g].type && (this.bounceY > -15 && this.bounceInc >= 0 || this.bounceY > -1) ? (playSound("splash"), this.changeState("inWater")) : "teleport" == this.aSurfaces[g].type && ("teleport" != this.surfaceOn && this.teleportMe(g), f = !0);
            f || ("slope" == this.surfaceOn ? (this.tween = TweenLite.to(this, 4 * (Math.max(Math.abs(this.vx), Math.abs(this.vy)) / 6.67), {dec: 0, ease: "Quad.easeOut", onComplete: this.moveEnded, onCompleteParams: [this]}), this.surfaceOn = null) : "mud" == this.surfaceOn ? (this.tween.kill(), this.tween = TweenLite.to(this, 4 * (Math.max(Math.abs(this.vx), Math.abs(this.vy)) / 6.67), {dec: 0, ease: "Quad.easeOut", onComplete: this.moveEnded, onCompleteParams: [this]}), this.surfaceOn = null) : "teleport" == this.surfaceOn && (this.surfaceOn = null)), this.bounceInc += 650 * d, this.bounceY += this.bounceInc * d, this.bounceY > 0 && (this.bounceY = 0, this.bounceInc > 75 && this.ballCallback("bounce"), this.bounceInc *= -.8)
        }, b.prototype.teleportMe = function (a) {
            for (var b = new Array, c = 0; c < this.aSurfaces.length; c++)
                "teleport" == this.aSurfaces[c].type && c != a && b.push(this.aSurfaces[c]);
            var d = b[Math.floor(Math.random() * b.length)];
            this.ballCallback("teleport"), this.trackX = d.p0.x + (d.p1.x - d.p0.x) / 2, this.trackY = d.p0.y + (d.p1.y - d.p0.y) / 2, this.p0 = {x: this.trackX, y: this.trackY}, this.p1 = {x: this.trackX, y: this.trackY}, this.surfaceOn = "teleport"
        }, b.prototype.updateWaiting = function (b, c, d) {
            a.prototype.updateAnimation.call(this, d), this.x = this.trackX + b, this.y = this.trackY + c, this.bounceInc += 800 * d, this.bounceY += this.bounceInc * d, this.bounceY > 0 && (this.bounceY = 0, this.bounceInc *= -.5)
        }, b.prototype.updateRemarking = function () {
        }, b.prototype.renderInWater = function (b) {
            a.prototype.render.call(this, b)
        }, b.prototype.renderBall = function (b) {
            a.prototype.render.call(this, b);
            var c = 20 * this.oImgData.oData.spriteWidth % this.oImgData.img.width, d = Math.floor(20 / (this.oImgData.img.width / this.oImgData.oData.spriteWidth)) * this.oImgData.oData.spriteHeight;
            b.drawImage(this.oImgData.img, c, d, this.oImgData.oData.spriteWidth, this.oImgData.oData.spriteHeight, -this.oImgData.oData.spriteWidth / 2, -this.oImgData.oData.spriteHeight / 2 + this.bounceY - 26, this.oImgData.oData.spriteWidth, this.oImgData.oData.spriteHeight)
        }, b.prototype.renderRemarking = function (a) {
            var b = this.remarkId * this.oRemarkImgData.oData.spriteWidth % this.oRemarkImgData.img.width, c = Math.floor(this.remarkId / (this.oRemarkImgData.img.width / this.oRemarkImgData.oData.spriteWidth)) * this.oRemarkImgData.oData.spriteHeight;
            a.drawImage(this.oRemarkImgData.img, b, c, this.oRemarkImgData.oData.spriteWidth, this.oRemarkImgData.oData.spriteHeight, this.remarkX - this.oRemarkImgData.oData.spriteWidth / 2 * this.remarkScale, this.remarkY - this.oRemarkImgData.oData.spriteHeight / 2 * this.remarkScale, this.oRemarkImgData.oData.spriteWidth * this.remarkScale, this.oRemarkImgData.oData.spriteHeight * this.remarkScale)
        }, b
    }(Utils.AnimSprite);
    a.Ball = b
}(Elements || (Elements = {}));
var Elements;
!function (a) {
    var b = function () {
        function a(a, b, c) {
            this.radian = Math.PI / 180, this.oLevelImgData = a, this.canvasWidth = b, this.canvasHeight = c
        }

        return a.prototype.update = function (a, b) {
            this.x = a, this.y = b
        }, a.prototype.render = function (a) {
            a.drawImage(this.oLevelImgData.img, -this.x, -this.y, this.canvasWidth, this.canvasHeight, 0, 0, this.canvasWidth, this.canvasHeight)
        }, a
    }();
    a.Level = b
}(Elements || (Elements = {}));
var Elements;
!function (a) {
    var b = function () {
        function a(a, b, c) {
            this.x = 0, this.y = 0, this.scaleX = 0, this.scaleY = 1, this.maxLength = 100, this.oArrowImgData = a, this.canvasWidth = b, this.canvasHeight = c
        }

        return a.prototype.update = function (a, b, c, d) {
            this.x = a, this.y = b, this.lengthX = this.x - c, this.lengthY = this.y - d, this.hyp = Math.min(Math.sqrt(this.lengthX * this.lengthX + this.lengthY * this.lengthY), this.maxLength), this.scaleX = Math.min(this.hyp / this.maxLength, 1), this.rotation = Math.atan2(this.lengthY, this.lengthX)
        }, a.prototype.render = function (a) {
            a.save(), a.translate(this.x, this.y), a.rotate(this.rotation), a.scale(this.scaleX, this.scaleY);
            var b = 0 * this.oArrowImgData.oData.spriteWidth % this.oArrowImgData.img.width, c = Math.floor(0 / (this.oArrowImgData.img.width / this.oArrowImgData.oData.spriteWidth)) * this.oArrowImgData.oData.spriteHeight;
            a.drawImage(this.oArrowImgData.img, b, c, this.oArrowImgData.oData.spriteWidth, this.oArrowImgData.oData.spriteHeight, 0, -this.oArrowImgData.oData.spriteHeight / 2, this.oArrowImgData.oData.spriteWidth, this.oArrowImgData.oData.spriteHeight), a.restore(), a.save(), a.translate(this.x, this.y), a.rotate(this.rotation);
            var b = 1 * this.oArrowImgData.oData.spriteWidth % this.oArrowImgData.img.width, c = Math.floor(1 / (this.oArrowImgData.img.width / this.oArrowImgData.oData.spriteWidth)) * this.oArrowImgData.oData.spriteHeight;
            a.drawImage(this.oArrowImgData.img, b, c, this.oArrowImgData.oData.spriteWidth, this.oArrowImgData.oData.spriteHeight, this.hyp - 1, -this.oArrowImgData.oData.spriteHeight / 2, this.oArrowImgData.oData.spriteWidth, this.oArrowImgData.oData.spriteHeight), a.restore()
        }, a
    }();
    a.Arrow = b
}(Elements || (Elements = {}));
var Elements;
!function (a) {
    var b = function (a) {
        function b(b, c, d, e) {
            a.call(this, b, 22, 45, "waiting" + c.id), this.canHit = !0, this.oData = c, this.canvasWidth = d, this.canvasHeight = e, this.trackX = this.oData.x, this.trackY = this.oData.y, this.offsetY = -4, this.offsetX = -3, this.frameInc = Math.ceil(100 * Math.random()), this.animEndedFunc = function () {
                this.removeMe = !0
            }
        }

        return __extends(b, a), b.prototype.hit = function () {
            this.canHit = !1, this.setAnimType("once", "explode")
        }, b.prototype.update = function (b, c, d) {
            a.prototype.updateAnimation.call(this, d), this.x = this.trackX + b, this.y = this.trackY + c
        }, b
    }(Utils.AnimSprite);
    a.PickUp = b
}(Elements || (Elements = {}));
var Elements;
!function (a) {
    var b = function (a) {
        function b(b, c) {
            a.call(this, b, 20, 30, "explode"), this.oData = c, this.trackX = this.oData.x, this.trackY = this.oData.y, this.setAnimType("once", "explode"), this.animEndedFunc = function () {
                this.removeMe = !0
            }
        }

        return __extends(b, a), b.prototype.update = function (b, c, d) {
            a.prototype.updateAnimation.call(this, d), this.x = this.trackX + b, this.y = this.trackY + c
        }, b
    }(Utils.AnimSprite);
    a.Bounce = b
}(Elements || (Elements = {}));
var Elements;
!function (a) {
    var b = function (a) {
        function b(b, c, d, e) {
            a.call(this, b, 22, 45, "falling" + c.id), this.oData = c, this.x = this.oData.x, this.y = this.oData.y, this.canvasWidth = d, this.canvasHeight = e
        }

        return __extends(b, a), b.prototype.update = function (b) {
            a.prototype.updateAnimation.call(this, b)
        }, b
    }(Utils.AnimSprite);
    a.FallingGem = b
}(Elements || (Elements = {}));
var Utils;
!function (a) {
    var b = function () {
        function a(a, b) {
            this.aLines = new Array, this.aBalls = new Array, this.aLines = a, this.aBalls.push(b);
            for (var c = 0; c < this.aLines.length; c++)
                this.updateVector(this.aLines[c], null, !0)
        }

        return a.prototype.drawAll = function (a) {
            for (var b = 0; b < this.aBalls.length; b++)
                if ("moving" == this.aBalls[b].state) {
                    var c = this.aBalls[b];
                    c.trackX = c.p1.x, c.trackY = c.p1.y, c.p0 = c.p1, this.updateVector(c, a)
                }
        }, a.prototype.update = function (a) {
            var b;
            for (b = 0; b < this.aBalls.length; b++) {
                var c = this.aBalls[b];
                this.updateVector(c, a);
                for (var d = 0; d < this.aLines.length; d++) {
                    this.fi = this.findIntersection(c, this.aLines[d]), this.updateVector(this.fi, a, !1);
                    var e = c.radius - this.fi.len;
                    if (e >= 0) {
                        addBounce(c.p1.x, c.p1.y), playSound("wall" + Math.ceil(2 * Math.random())), c.p1.x += this.fi.dx * e, c.p1.y += this.fi.dy * e;
                        var f = {dx: this.fi.lx, dy: this.fi.ly, lx: this.fi.dx, ly: this.fi.dy, b: 1, f: 1}, g = this.bounce(c, f);
                        c.vx = g.vx, c.vy = g.vy
                    }
                }
            }
            this.drawAll(a)
        }, a.prototype.updateVector = function (a, b, c) {
            "undefined" == typeof c && (c = !1), null == b && (b = .016), 1 == c ? (a.vx = a.p1.x - a.p0.x, a.vy = a.p1.y - a.p0.y) : (a.p1.x = a.p0.x + 60 * a.vx * b, a.p1.y = a.p0.y + 60 * a.vy * b), this.makeVector(a)
        }, a.prototype.makeVector = function (a) {
            a.len = Math.sqrt(a.vx * a.vx + a.vy * a.vy), a.len > 0 ? (a.dx = a.vx / a.len, a.dy = a.vy / a.len) : (a.dx = 0, a.dy = 0), a.rx = -a.dy, a.ry = a.dx, a.lx = a.dy, a.ly = -a.dx
        }, a.prototype.dotP = function (a, b) {
            var c = a.vx * b.vx + a.vy * b.vy;
            return c
        }, a.prototype.projectVector = function (a, b, c) {
            var d = a.vx * b + a.vy * c, e = {};
            return e.vx = d * b, e.vy = d * c, e
        }, a.prototype.bounceBalls = function (a, b, c) {
            var d = this.projectVector(a, c.dx, c.dy), e = this.projectVector(a, c.lx, c.ly), f = this.projectVector(b, c.dx, c.dy), g = this.projectVector(b, c.lx, c.ly), h = a.m * d.vx + b.m * f.vx, i = d.vx - f.vx, j = (h + i * a.m) / (a.m + b.m), k = j - i;
            h = a.m * d.vy + b.m * f.vy, i = d.vy - f.vy;
            var l = (h + i * a.m) / (a.m + b.m), m = l - i, n = {};
            return n.vx1 = e.vx + k, n.vy1 = e.vy + m, n.vx2 = g.vx + j, n.vy2 = g.vy + l, n
        }, a.prototype.bounce = function (a, b) {
            var c = this.projectVector(a, b.dx, b.dy), d = this.projectVector(a, b.lx, b.ly), e = {};
            return d.len = Math.sqrt(d.vx * d.vx + d.vy * d.vy), d.vx = b.lx * d.len, d.vy = b.ly * d.len, e.vx = a.f * b.f * c.vx + a.b * b.b * d.vx, e.vy = a.f * b.f * c.vy + a.b * b.b * d.vy, e
        }, a.prototype.findIntersection = function (a, b) {
            var c = {}, d = {};
            d.vx = a.p1.x - b.p0.x, d.vy = a.p1.y - b.p0.y;
            var e = d.vx * b.dx + d.vy * b.dy;
            if (0 > e)
                c = d;
            else {
                var f = {};
                f.vx = a.p1.x - b.p1.x, f.vy = a.p1.y - b.p1.y, e = f.vx * b.dx + f.vy * b.dy, c = e > 0 ? f : this.projectVector(d, b.lx, b.ly)
            }
            return c.p0 = {x: 0, y: 0}, c.p1 = {x: 0, y: 0}, c
        }, a
    }();
    a.Physics2D = b
}(Utils || (Utils = {}));
var Utils;
!function (a) {
    var b = function () {
        function a(a, b) {
            this.saveDataId = a, this.totalLevels = b, this.aLevelStore = new Array;
            for (var c = 0; c < this.totalLevels; c++)
                this.aLevelStore.push(0);
            this.setInitialData()
        }

        return a.prototype.setInitialData = function () {
            if ("undefined" != typeof Storage)
                if (null != localStorage.getItem(this.saveDataId)) {
                    this.aLevelStore = localStorage.getItem(this.saveDataId).split(",");
                    for (var a in this.aLevelStore)
                        this.aLevelStore[a] = parseInt(this.aLevelStore[a])
                } else
                    this.saveData()
        }, a.prototype.saveData = function () {
            if ("undefined" != typeof Storage) {
                for (var a = "", b = 0; b < this.aLevelStore.length; b++)
                    a += this.aLevelStore[b], b < this.aLevelStore.length - 1 && (a += ",");
                localStorage.setItem(this.saveDataId, a)
            }
        }, a
    }();
    a.SaveDataHandler = b
}(Utils || (Utils = {}));
var requestAnimFrame = function () {
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (a) {
        window.setTimeout(a, 1e3 / 60, (new Date).getTime())
    }
}(), previousTime, canvas = document.getElementById("canvas"), ctx = canvas.getContext("2d");
canvas.width = 600, canvas.height = 800;
var canvasX, canvasY, canvasScaleX, canvasScaleY, div = document.getElementById("viewporter"), sound, music, audioType = 0, muted = !1, splash, splashTimer = 0, assetLib, preAssetLib, rotatePause = !1, manualPause = !1, isMobile = !1, gameState = "loading", aLangs = new Array("EN", "DE", "TR"), curLang = "", isBugBrowser = !1, isIE10 = !1;
navigator.userAgent.match(/MSIE\s([\d]+)/) && (isIE10 = !0);
var deviceAgent = navigator.userAgent.toLowerCase();
(deviceAgent.match(/(iphone|ipod|ipad)/) || deviceAgent.match(/(android)/) || deviceAgent.match(/(iemobile)/) || deviceAgent.match(/iphone/i) || deviceAgent.match(/ipad/i) || deviceAgent.match(/ipod/i) || deviceAgent.match(/blackberry/i) || deviceAgent.match(/bada/i)) && (isMobile = !0, deviceAgent.match(/(android)/) && !/Chrome/.test(navigator.userAgent) && (isBugBrowser = !0));
var userInput = new Utils.UserInput(canvas, isBugBrowser);
resizeCanvas(), window.onresize = function () {
    setTimeout(function () {
        resizeCanvas()
    }, 1)
}, window.addEventListener("load", function () {
    setTimeout(function () {
        resizeCanvas()
    }, 0), window.addEventListener("orientationchange", function () {
        resizeCanvas()
    }, !1)
}), isIE10 || "undefined" == typeof window.AudioContext && "undefined" == typeof window.webkitAudioContext && -1 != navigator.userAgent.indexOf("Android") ? (audioType = 0, music = new Audio("audio/music.ogg"), music.addEventListener("ended", function () {
    this.currentTime = 0, this.play()
}, !1), music.play()) : (audioType = 1,
    sound = new Howl({urls: ["audio/sound.ogg", "audio/sound.m4a"],
        sprite: {splash: [0, 1500], bounce1: [2e3, 300],
        wall1: [2500, 300], bounce2: [3e3, 300], wall2: [3500, 500],
            teleport: [4500, 750], start: [5500, 1500], reset: [7500, 1200],
            gem1: [9e3, 750], gem2: [10500, 750], gem3: [12e3, 750], gem4: [13500, 750],
            holed: [15e3, 2500], hit: [18e3, 500], mud: [19e3, 500], click: [2e4, 500]}}),
    music = new Howl({urls: ["audio/music.ogg", "audio/music.m4a"], volume: .5, loop: !0}));
var panel, hud, background, totalScore = 0, levelScore = 0, levelNum, aScores, aTutorials = new Array, panelFrame, oLogoData = {}, oLogoBut, ball, oHolePos, physics2D, level, gameTouchState, oPosData = {prevBallX: 0, prevBallY: 0, stageX: 0, stageY: 0, targStageX: 0, targStageY: 0, startDragX: 0, startDragY: 0, startStageX: 0, startStageY: 0}, aimX, aimY, targAimX, targAimY, vx, vy, arrow, scollBackInc, levelWidth = 800, levelHeight = 1e3, buffer = 100, aPickUps, aBounces, courseNum, musicTween, saveDataHandler = new Utils.SaveDataHandler("miniPutt1", 2), aLevelData = new Array([
    {par: 2, aData: [
        {type: "tee", p0: {x: 469, y: 732}, p1: {x: 469, y: 732}},
        {type: "hole", p0: {x: 322, y: 317}, p1: {x: 322, y: 317}},
        {type: "pickUp", p0: {x: 455, y: 611}, p1: {x: 455, y: 611}},
        {type: "pickUp", p0: {x: 428, y: 531}, p1: {x: 428, y: 531}},
        {type: "pickUp", p0: {x: 400, y: 450}, p1: {x: 400, y: 450}},
        {type: "pickUp", p0: {x: 373, y: 370}, p1: {x: 373, y: 370}},
        {type: "pickUp", p0: {x: 396, y: 631}, p1: {x: 396, y: 631}},
        {type: "pickUp", p0: {x: 369, y: 551}, p1: {x: 369, y: 551}},
        {type: "pickUp", p0: {x: 341, y: 470}, p1: {x: 341, y: 470}},
        {type: "pickUp", p0: {x: 314, y: 390}, p1: {x: 314, y: 390}},
        {type: "wall", p0: {x: 267, y: 196}, p1: {x: 177, y: 387}},
        {type: "wall", p0: {x: 286, y: 189}, p1: {x: 477, y: 280}},
        {type: "wall", p0: {x: 184, y: 274}, p1: {x: 401, y: 196}},
        {type: "wall", p0: {x: 607, y: 770}, p1: {x: 401, y: 196}},
        {type: "wall", p0: {x: 390, y: 848}, p1: {x: 607, y: 770}},
        {type: "wall", p0: {x: 184, y: 274}, p1: {x: 390, y: 848}}
    ]},
    {par: 2, aData: [
        {type: "tee", p0: {x: 236, y: 771}, p1: {x: 236, y: 771}},
        {type: "hole", p0: {x: 589, y: 409}, p1: {x: 589, y: 409}},
        {type: "pickUp", p0: {x: 478, y: 318}, p1: {x: 478, y: 318}},
        {type: "pickUp", p0: {x: 432, y: 362}, p1: {x: 432, y: 362}},
        {type: "pickUp", p0: {x: 525, y: 367}, p1: {x: 525, y: 367}},
        {type: "pickUp", p0: {x: 479, y: 411}, p1: {x: 479, y: 411}},
        {type: "pickUp", p0: {x: 225, y: 489}, p1: {x: 225, y: 489}},
        {type: "pickUp", p0: {x: 225, y: 553}, p1: {x: 225, y: 553}},
        {type: "pickUp", p0: {x: 293, y: 489}, p1: {x: 293, y: 489}},
        {type: "pickUp", p0: {x: 304, y: 379}, p1: {x: 304, y: 379}},
        {type: "pickUp", p0: {x: 293, y: 553}, p1: {x: 293, y: 553}},
        {type: "wall", p0: {x: 89, y: 449}, p1: {x: 511, y: 28}},
        {type: "wall", p0: {x: 444, y: 136}, p1: {x: 865, y: 557}},
        {type: "wall", p0: {x: 667, y: 224}, p1: {x: 667, y: 820}},
        {type: "wall", p0: {x: 747, y: 831}, p1: {x: 151, y: 831}},
        {type: "wall", p0: {x: 947, y: 537}, p1: {x: 359, y: 442}},
        {type: "wall", p0: {x: 355, y: 441}, p1: {x: 259, y: 1029}},
        {type: "wall", p0: {x: 757, y: 245}, p1: {x: 161, y: 245}},
        {type: "wall", p0: {x: 177, y: 245}, p1: {x: 177, y: 841}}
    ]},
    {par: 4, aData: [
        {type: "tee", p0: {x: 624, y: 801}, p1: {x: 624, y: 801}},
        {type: "hole", p0: {x: 175, y: 801}, p1: {x: 175, y: 801}},
        {type: "pickUp", p0: {x: 622, y: 409}, p1: {x: 622, y: 409}},
        {type: "pickUp", p0: {x: 622, y: 510}, p1: {x: 622, y: 510}},
        {type: "pickUp", p0: {x: 621, y: 611}, p1: {x: 621, y: 611}},
        {type: "pickUp", p0: {x: 354, y: 708}, p1: {x: 354, y: 708}},
        {type: "pickUp", p0: {x: 452, y: 711}, p1: {x: 452, y: 711}},
        {type: "pickUp", p0: {x: 354, y: 608}, p1: {x: 354, y: 608}},
        {type: "pickUp", p0: {x: 452, y: 611}, p1: {x: 452, y: 611}},
        {type: "pickUp", p0: {x: 175, y: 409}, p1: {x: 175, y: 409}},
        {type: "pickUp", p0: {x: 175, y: 510}, p1: {x: 175, y: 510}},
        {type: "pickUp", p0: {x: 174, y: 611}, p1: {x: 174, y: 611}},
        {type: "pickUp", p0: {x: 177, y: 710}, p1: {x: 177, y: 710}},
        {type: "pickUp", p0: {x: 263, y: 357}, p1: {x: 263, y: 357}},
        {type: "pickUp", p0: {x: 354, y: 354}, p1: {x: 354, y: 354}},
        {type: "pickUp", p0: {x: 452, y: 357}, p1: {x: 452, y: 357}},
        {type: "pickUp", p0: {x: 543, y: 360}, p1: {x: 543, y: 360}},
        {type: "wall", p0: {x: 94, y: 301}, p1: {x: 250, y: 145}},
        {type: "wall", p0: {x: 712, y: 301}, p1: {x: 556, y: 145}},
        {type: "wall", p0: {x: 403, y: 301}, p1: {x: 247, y: 145}},
        {type: "wall", p0: {x: 403, y: 301}, p1: {x: 559, y: 145}},
        {type: "wall", p0: {x: 540, y: 1100}, p1: {x: 540, y: 410}},
        {type: "wall", p0: {x: 260, y: 410}, p1: {x: 260, y: 1100}},
        {type: "wall", p0: {x: 100, y: 190}, p1: {x: 700, y: 190}},
        {type: "wall", p0: {x: 700, y: 880}, p1: {x: 700, y: 190}},
        {type: "wall", p0: {x: 100, y: 880}, p1: {x: 700, y: 880}},
        {type: "wall", p0: {x: 100, y: 190}, p1: {x: 100, y: 880}},
        {type: "slope0", p0: {x: 256, y: 414}, p1: {x: 540, y: 874}}
    ]},
    {par: 4, aData: [
        {type: "tee", p0: {x: 543, y: 769}, p1: {x: 543, y: 769}},
        {type: "hole", p0: {x: 168, y: 310}, p1: {x: 168, y: 310}},
        {type: "pickUp", p0: {x: 242, y: 532}, p1: {x: 242, y: 532}},
        {type: "pickUp", p0: {x: 391, y: 371}, p1: {x: 391, y: 371}},
        {type: "pickUp", p0: {x: 633, y: 329}, p1: {x: 633, y: 329}},
        {type: "pickUp", p0: {x: 636, y: 510}, p1: {x: 636, y: 510}},
        {type: "pickUp", p0: {x: 500, y: 447}, p1: {x: 500, y: 447}},
        {type: "pickUp", p0: {x: 188, y: 760}, p1: {x: 188, y: 760}},
        {type: "pickUp", p0: {x: 281, y: 299}, p1: {x: 281, y: 299}},
        {type: "pickUp", p0: {x: 147, y: 436}, p1: {x: 147, y: 436}},
        {type: "pickUp", p0: {x: 645, y: 678}, p1: {x: 645, y: 678}},
        {type: "pickUp", p0: {x: 448, y: 680}, p1: {x: 448, y: 680}},
        {type: "wall", p0: {x: 592, y: 441}, p1: {x: 506, y: 526}},
        {type: "wall", p0: {x: 734, y: 338}, p1: {x: 592, y: 196}},
        {type: "wall", p0: {x: 588, y: 701}, p1: {x: 504, y: 701}},
        {type: "wall", p0: {x: 588, y: 628}, p1: {x: 588, y: 697}},
        {type: "wall", p0: {x: 277, y: 625}, p1: {x: 277, y: 826}},
        {type: "wall", p0: {x: 281, y: 425}, p1: {x: 281, y: 343}},
        {type: "wall", p0: {x: 734, y: 718}, p1: {x: 592, y: 860}},
        {type: "wall", p0: {x: 355, y: 718}, p1: {x: 497, y: 860}},
        {type: "wall", p0: {x: 100, y: 826}, p1: {x: 700, y: 826}},
        {type: "wall", p0: {x: 504, y: 628}, p1: {x: 588, y: 628}},
        {type: "wall", p0: {x: 277, y: 625}, p1: {x: 390, y: 625}},
        {type: "wall", p0: {x: 280, y: 425}, p1: {x: 198, y: 425}},
        {type: "wall", p0: {x: 504, y: 701}, p1: {x: 504, y: 632}},
        {type: "wall", p0: {x: 391, y: 625}, p1: {x: 391, y: 826}},
        {type: "wall", p0: {x: 100, y: 236}, p1: {x: 700, y: 236}},
        {type: "wall", p0: {x: 700, y: 880}, p1: {x: 700, y: 190}},
        {type: "wall", p0: {x: 100, y: 190}, p1: {x: 100, y: 880}},
        {type: "slope1", p0: {x: 188, y: 420}, p1: {x: 290, y: 614}},
        {type: "slope2", p0: {x: 291, y: 245}, p1: {x: 475, y: 427}}
    ]},
    {par: 4, aData: [
        {type: "tee", p0: {x: 395, y: 454}, p1: {x: 395, y: 454}},
        {type: "hole", p0: {x: 394, y: 575}, p1: {x: 394, y: 575}},
        {type: "pickUp", p0: {x: 215, y: 264}, p1: {x: 215, y: 264}},
        {type: "pickUp", p0: {x: 587, y: 264}, p1: {x: 587, y: 264}},
        {type: "pickUp", p0: {x: 215, y: 814}, p1: {x: 215, y: 814}},
        {type: "pickUp", p0: {x: 587, y: 814}, p1: {x: 587, y: 814}},
        {type: "pickUp", p0: {x: 557, y: 522}, p1: {x: 557, y: 522}},
        {type: "pickUp", p0: {x: 243, y: 522}, p1: {x: 243, y: 522}},
        {type: "pickUp", p0: {x: 504, y: 586}, p1: {x: 504, y: 586}},
        {type: "pickUp", p0: {x: 288, y: 586}, p1: {x: 288, y: 586}},
        {type: "pickUp", p0: {x: 504, y: 457}, p1: {x: 504, y: 457}},
        {type: "pickUp", p0: {x: 288, y: 457}, p1: {x: 288, y: 457}},
        {type: "wall", p0: {x: 400, y: 258}, p1: {x: 192, y: 173}},
        {type: "wall", p0: {x: 399, y: 258}, p1: {x: 608, y: 173}},
        {type: "wall", p0: {x: 399, y: 801}, p1: {x: 191, y: 886}},
        {type: "wall", p0: {x: 398, y: 801}, p1: {x: 607, y: 886}},
        {type: "wall", p0: {x: -28, y: 512}, p1: {x: 197, y: 512}},
        {type: "wall", p0: {x: 611, y: 512}, p1: {x: 836, y: 512}},
        {type: "wall", p0: {x: 100, y: 866}, p1: {x: 700, y: 866}},
        {type: "wall", p0: {x: 286, y: 512}, p1: {x: 511, y: 512}},
        {type: "wall", p0: {x: 100, y: 197}, p1: {x: 700, y: 197}},
        {type: "wall", p0: {x: 640, y: 880}, p1: {x: 640, y: 190}},
        {type: "wall", p0: {x: 160, y: 190}, p1: {x: 160, y: 880}},
        {type: "slope0", p0: {x: 254, y: 303}, p1: {x: 540, y: 403}},
        {type: "slope2", p0: {x: 250, y: 631}, p1: {x: 536, y: 733}}
    ]},
    {par: 5, aData: [
        {type: "tee", p0: {x: 190, y: 244}, p1: {x: 190, y: 244}},
        {type: "hole", p0: {x: 343, y: 498}, p1: {x: 343, y: 498}},
        {type: "pickUp", p0: {x: 486, y: 700}, p1: {x: 486, y: 700}},
        {type: "pickUp", p0: {x: 493, y: 378}, p1: {x: 493, y: 378}},
        {type: "pickUp", p0: {x: 340, y: 572}, p1: {x: 340, y: 572}},
        {type: "pickUp", p0: {x: 486, y: 542}, p1: {x: 486, y: 542}},
        {type: "pickUp", p0: {x: 214, y: 392}, p1: {x: 214, y: 392}},
        {type: "pickUp", p0: {x: 199, y: 819}, p1: {x: 199, y: 819}},
        {type: "pickUp", p0: {x: 595, y: 805}, p1: {x: 595, y: 805}},
        {type: "pickUp", p0: {x: 610, y: 543}, p1: {x: 610, y: 543}},
        {type: "pickUp", p0: {x: 614, y: 259}, p1: {x: 614, y: 259}},
        {type: "pickUp", p0: {x: 339, y: 255}, p1: {x: 339, y: 255}},
        {type: "wall", p0: {x: 716, y: 302}, p1: {x: 574, y: 160}},
        {type: "wall", p0: {x: 217, y: 303}, p1: {x: 75, y: 444}},
        {type: "wall", p0: {x: 705, y: 774}, p1: {x: 564, y: 916}},
        {type: "wall", p0: {x: 432, y: 635}, p1: {x: 432, y: 421}},
        {type: "wall", p0: {x: 253, y: 420}, p1: {x: 432, y: 420}},
        {type: "wall", p0: {x: 252, y: 755}, p1: {x: 252, y: 420}},
        {type: "wall", p0: {x: 252, y: 755}, p1: {x: 547, y: 755}},
        {type: "wall", p0: {x: 547, y: 755}, p1: {x: 547, y: 301}},
        {type: "wall", p0: {x: 2, y: 300}, p1: {x: 546, y: 300}},
        {type: "wall", p0: {x: 132, y: 190}, p1: {x: 676, y: 190}},
        {type: "wall", p0: {x: 676, y: 880}, p1: {x: 676, y: 190}},
        {type: "wall", p0: {x: 132, y: 880}, p1: {x: 676, y: 880}},
        {type: "wall", p0: {x: 132, y: 190}, p1: {x: 132, y: 880}},
        {type: "slope0", p0: {x: 135, y: 455}, p1: {x: 251, y: 636}},
        {type: "slope2", p0: {x: 550, y: 455}, p1: {x: 672, y: 636}}
    ]},
    {par: 4, aData: [
        {type: "tee", p0: {x: 398, y: 277}, p1: {x: 398, y: 277}},
        {type: "hole", p0: {x: 403, y: 780}, p1: {x: 403, y: 780}},
        {type: "pickUp", p0: {x: 245, y: 461}, p1: {x: 245, y: 461}},
        {type: "pickUp", p0: {x: 557, y: 623}, p1: {x: 557, y: 623}},
        {type: "pickUp", p0: {x: 426, y: 645}, p1: {x: 426, y: 645}},
        {type: "pickUp", p0: {x: 319, y: 645}, p1: {x: 319, y: 645}},
        {type: "pickUp", p0: {x: 456, y: 412}, p1: {x: 456, y: 412}},
        {type: "pickUp", p0: {x: 349, y: 412}, p1: {x: 349, y: 412}},
        {type: "pickUp", p0: {x: 191, y: 542}, p1: {x: 191, y: 542}},
        {type: "pickUp", p0: {x: 605, y: 541}, p1: {x: 605, y: 541}},
        {type: "pickUp", p0: {x: 318, y: 719}, p1: {x: 318, y: 719}},
        {type: "pickUp", p0: {x: 457, y: 337}, p1: {x: 457, y: 337}},
        {type: "wall", p0: {x: 361, y: 691}, p1: {x: 905, y: 691}},
        {type: "wall", p0: {x: -128, y: 348}, p1: {x: 416, y: 347}},
        {type: "wall", p0: {x: 401, y: 178}, p1: {x: 700, y: 534}},
        {type: "wall", p0: {x: 401, y: 890}, p1: {x: 700, y: 534}},
        {type: "wall", p0: {x: 101, y: 534}, p1: {x: 401, y: 890}},
        {type: "wall", p0: {x: 401, y: 178}, p1: {x: 101, y: 534}},
        {type: "mud", p0: {x: 258, y: 445}, p1: {x: 550, y: 604}}
    ]},
    {par: 4, aData: [
        {type: "tee", p0: {x: 289, y: 275}, p1: {x: 289, y: 275}},
        {type: "hole", p0: {x: 529, y: 419}, p1: {x: 529, y: 419}},
        {type: "pickUp", p0: {x: 546, y: 650}, p1: {x: 546, y: 650}},
        {type: "pickUp", p0: {x: 504, y: 730}, p1: {x: 504, y: 730}},
        {type: "pickUp", p0: {x: 437, y: 773}, p1: {x: 437, y: 773}},
        {type: "pickUp", p0: {x: 355, y: 773}, p1: {x: 355, y: 773}},
        {type: "pickUp", p0: {x: 303, y: 722}, p1: {x: 303, y: 722}},
        {type: "pickUp", p0: {x: 284, y: 646}, p1: {x: 284, y: 646}},
        {type: "pickUp", p0: {x: 538, y: 348}, p1: {x: 538, y: 348}},
        {type: "pickUp", p0: {x: 463, y: 412}, p1: {x: 463, y: 412}},
        {type: "pickUp", p0: {x: 592, y: 427}, p1: {x: 592, y: 427}},
        {type: "wall", p0: {x: 546, y: 477}, p1: {x: 540, y: 520}},
        {type: "wall", p0: {x: 485, y: 513}, p1: {x: 540, y: 520}},
        {type: "wall", p0: {x: 491, y: 470}, p1: {x: 485, y: 513}},
        {type: "wall", p0: {x: 546, y: 477}, p1: {x: 491, y: 470}},
        {type: "wall", p0: {x: 398, y: 230}, p1: {x: 398, y: 636}},
        {type: "wall", p0: {x: 203, y: 201}, p1: {x: 680, y: 268}},
        {type: "wall", p0: {x: 595, y: 877}, p1: {x: 680, y: 268}},
        {type: "wall", p0: {x: 118, y: 810}, p1: {x: 595, y: 877}},
        {type: "wall", p0: {x: 203, y: 201}, p1: {x: 118, y: 810}},
        {type: "mud", p0: {x: 247, y: 333}, p1: {x: 395, y: 392}},
        {type: "mud", p0: {x: 169, y: 441}, p1: {x: 317, y: 500}},
        {type: "slope0", p0: {x: 396, y: 302}, p1: {x: 682, y: 375}},
        {type: "mud", p0: {x: 251, y: 557}, p1: {x: 399, y: 616}},
        {type: "slope2", p0: {x: 400, y: 549}, p1: {x: 686, y: 620}},
        {type: "slope0", p0: {x: 107, y: 673}, p1: {x: 659, y: 886}}
    ]},
    {par: 5, aData: [
        {type: "tee", p0: {x: 604, y: 266}, p1: {x: 604, y: 266}},
        {type: "hole", p0: {x: 196, y: 825}, p1: {x: 196, y: 825}},
        {type: "pickUp", p0: {x: 413, y: 813}, p1: {x: 413, y: 813}},
        {type: "pickUp", p0: {x: 413, y: 681}, p1: {x: 413, y: 681}},
        {type: "pickUp", p0: {x: 560, y: 720}, p1: {x: 560, y: 720}},
        {type: "pickUp", p0: {x: 272, y: 646}, p1: {x: 272, y: 646}},
        {type: "pickUp", p0: {x: 413, y: 530}, p1: {x: 413, y: 530}},
        {type: "pickUp", p0: {x: 560, y: 569}, p1: {x: 560, y: 569}},
        {type: "pickUp", p0: {x: 272, y: 495}, p1: {x: 272, y: 495}},
        {type: "pickUp", p0: {x: 413, y: 382}, p1: {x: 413, y: 382}},
        {type: "pickUp", p0: {x: 560, y: 421}, p1: {x: 560, y: 421}},
        {type: "pickUp", p0: {x: 272, y: 347}, p1: {x: 272, y: 347}},
        {type: "wall", p0: {x: 126, y: 752}, p1: {x: 438, y: 752}},
        {type: "wall", p0: {x: 420, y: 323}, p1: {x: 718, y: 398}},
        {type: "wall", p0: {x: 677, y: 747}, p1: {x: 590, y: 899}},
        {type: "wall", p0: {x: 674, y: 194}, p1: {x: 599, y: 511}},
        {type: "wall", p0: {x: 599, y: 512}, p1: {x: 680, y: 743}},
        {type: "wall", p0: {x: 207, y: 162}, p1: {x: 207, y: 592}},
        {type: "wall", p0: {x: 207, y: 594}, p1: {x: 133, y: 729}},
        {type: "wall", p0: {x: 674, y: 880}, p1: {x: 130, y: 880}},
        {type: "wall", p0: {x: 130, y: 190}, p1: {x: 130, y: 880}},
        {type: "wall", p0: {x: 130, y: 191}, p1: {x: 674, y: 190}},
        {type: "wall", p0: {x: 413, y: 595}, p1: {x: 743, y: 678}},
        {type: "wall", p0: {x: 138, y: 386}, p1: {x: 436, y: 461}},
        {type: "slope1", p0: {x: 140, y: 185}, p1: {x: 330, y: 752}},
        {type: "slope3", p0: {x: 444, y: 757}, p1: {x: 666, y: 872}}
    ]}
], [
    {par: 3, aData: [
        {type: "tee", p0: {x: 391, y: 288}, p1: {x: 391, y: 288}},
        {type: "hole", p0: {x: 392, y: 747}, p1: {x: 392, y: 747}},
        {type: "pickUp", p0: {x: 323, y: 742}, p1: {x: 323, y: 742}},
        {type: "pickUp", p0: {x: 234, y: 762}, p1: {x: 234, y: 762}},
        {type: "pickUp", p0: {x: 237, y: 610}, p1: {x: 237, y: 610}},
        {type: "pickUp", p0: {x: 246, y: 463}, p1: {x: 246, y: 463}},
        {type: "pickUp", p0: {x: 273, y: 363}, p1: {x: 273, y: 363}},
        {type: "pickUp", p0: {x: 461, y: 742}, p1: {x: 461, y: 742}},
        {type: "pickUp", p0: {x: 558, y: 762}, p1: {x: 558, y: 762}},
        {type: "pickUp", p0: {x: 550, y: 610}, p1: {x: 550, y: 610}},
        {type: "pickUp", p0: {x: 541, y: 463}, p1: {x: 541, y: 463}},
        {type: "pickUp", p0: {x: 514, y: 363}, p1: {x: 514, y: 363}},
        {type: "wall", p0: {x: 610, y: 351}, p1: {x: 468, y: 210}},
        {type: "wall", p0: {x: 170, y: 351}, p1: {x: 311, y: 210}},
        {type: "wall", p0: {x: 678, y: 730}, p1: {x: 536, y: 871}},
        {type: "wall", p0: {x: 130, y: 730}, p1: {x: 271, y: 871}},
        {type: "wall", p0: {x: 316, y: 411}, p1: {x: 316, y: 618}},
        {type: "wall", p0: {x: 474, y: 411}, p1: {x: 474, y: 618}},
        {type: "wall", p0: {x: 568, y: 222}, p1: {x: 665, y: 852}},
        {type: "wall", p0: {x: 210, y: 221}, p1: {x: 143, y: 859}},
        {type: "wall", p0: {x: 144, y: 847}, p1: {x: 664, y: 847}},
        {type: "wall", p0: {x: 210, y: 220}, p1: {x: 568, y: 220}},
        {type: "water", p0: {x: 315, y: 422}, p1: {x: 476, y: 641}}
    ]},
    {par: 3, aData: [
        {type: "tee", p0: {x: 591, y: 733}, p1: {x: 591, y: 733}},
        {type: "hole", p0: {x: 388, y: 261}, p1: {x: 388, y: 261}},
        {type: "pickUp", p0: {x: 473, y: 700}, p1: {x: 473, y: 700}},
        {type: "pickUp", p0: {x: 375, y: 673}, p1: {x: 375, y: 673}},
        {type: "pickUp", p0: {x: 273, y: 658}, p1: {x: 273, y: 658}},
        {type: "pickUp", p0: {x: 273, y: 558}, p1: {x: 273, y: 558}},
        {type: "pickUp", p0: {x: 273, y: 467}, p1: {x: 273, y: 467}},
        {type: "pickUp", p0: {x: 310, y: 293}, p1: {x: 310, y: 293}},
        {type: "pickUp", p0: {x: 273, y: 377}, p1: {x: 273, y: 377}},
        {type: "wall", p0: {x: 212, y: 290}, p1: {x: -103, y: 290}},
        {type: "wall", p0: {x: 215, y: 286}, p1: {x: 343, y: 158}},
        {type: "wall", p0: {x: 207, y: 567}, p1: {x: 118, y: 806}},
        {type: "wall", p0: {x: 208, y: 565}, p1: {x: -107, y: 565}},
        {type: "wall", p0: {x: 671, y: 672}, p1: {x: 602, y: 858}},
        {type: "wall", p0: {x: 670, y: 677}, p1: {x: 447, y: 583}},
        {type: "wall", p0: {x: 670, y: 872}, p1: {x: 447, y: 778}},
        {type: "wall", p0: {x: 446, y: 183}, p1: {x: 446, y: 583}},
        {type: "wall", p0: {x: 446, y: 778}, p1: {x: 126, y: 778}},
        {type: "wall", p0: {x: 445, y: 180}, p1: {x: 130, y: 180}},
        {type: "wall", p0: {x: 127, y: 180}, p1: {x: 127, y: 776}},
        {type: "mud", p0: {x: 221, y: 636}, p1: {x: 332, y: 686}},
        {type: "water", p0: {x: 328, y: 340}, p1: {x: 441, y: 517}},
        {type: "water", p0: {x: 103, y: 299}, p1: {x: 216, y: 558}}
    ]},
    {par: 5, aData: [
        {type: "tee", p0: {x: 588, y: 240}, p1: {x: 588, y: 240}},
        {type: "hole", p0: {x: 169, y: 804}, p1: {x: 169, y: 804}},
        {type: "pickUp", p0: {x: 315, y: 519}, p1: {x: 315, y: 519}},
        {type: "pickUp", p0: {x: 624, y: 639}, p1: {x: 624, y: 639}},
        {type: "pickUp", p0: {x: 429, y: 311}, p1: {x: 429, y: 311}},
        {type: "pickUp", p0: {x: 206, y: 307}, p1: {x: 206, y: 307}},
        {type: "pickUp", p0: {x: 319, y: 273}, p1: {x: 319, y: 273}},
        {type: "pickUp", p0: {x: 174, y: 402}, p1: {x: 174, y: 402}},
        {type: "pickUp", p0: {x: 464, y: 396}, p1: {x: 464, y: 396}},
        {type: "pickUp", p0: {x: 264, y: 797}, p1: {x: 264, y: 797}},
        {type: "wall", p0: {x: 332, y: 715}, p1: {x: 546, y: 715}},
        {type: "wall", p0: {x: -83, y: 700}, p1: {x: 212, y: 700}},
        {type: "wall", p0: {x: 213, y: 699}, p1: {x: 57, y: 543}},
        {type: "wall", p0: {x: 92, y: 308}, p1: {x: 248, y: 152}},
        {type: "wall", p0: {x: 543, y: 308}, p1: {x: 387, y: 152}},
        {type: "wall", p0: {x: 545, y: 551}, p1: {x: 545, y: 310}},
        {type: "wall", p0: {x: 330, y: 716}, p1: {x: 330, y: 942}},
        {type: "wall", p0: {x: 100, y: 190}, p1: {x: 700, y: 190}},
        {type: "wall", p0: {x: 700, y: 880}, p1: {x: 700, y: 190}},
        {type: "wall", p0: {x: 100, y: 880}, p1: {x: 700, y: 880}},
        {type: "wall", p0: {x: 100, y: 190}, p1: {x: 100, y: 880}},
        {type: "water", p0: {x: 242, y: 332}, p1: {x: 389, y: 454}},
        {type: "water", p0: {x: 333, y: 720}, p1: {x: 554, y: 878}},
        {type: "slope3", p0: {x: 320, y: 563}, p1: {x: 555, y: 704}}
    ]},
    {par: 6, aData: [
        {type: "tee", p0: {x: 582, y: 496}, p1: {x: 582, y: 496}},
        {type: "hole", p0: {x: 555, y: 253}, p1: {x: 555, y: 253}},
        {type: "pickUp", p0: {x: 607, y: 647}, p1: {x: 607, y: 647}},
        {type: "pickUp", p0: {x: 588, y: 770}, p1: {x: 588, y: 770}},
        {type: "pickUp", p0: {x: 426, y: 798}, p1: {x: 426, y: 798}},
        {type: "pickUp", p0: {x: 197, y: 416}, p1: {x: 197, y: 416}},
        {type: "pickUp", p0: {x: 377, y: 682}, p1: {x: 377, y: 682}},
        {type: "pickUp", p0: {x: 212, y: 534}, p1: {x: 212, y: 534}},
        {type: "pickUp", p0: {x: 319, y: 285}, p1: {x: 319, y: 285}},
        {type: "pickUp", p0: {x: 263, y: 634}, p1: {x: 263, y: 634}},
        {type: "pickUp", p0: {x: 204, y: 292}, p1: {x: 204, y: 292}},
        {type: "wall", p0: {x: 62, y: 322}, p1: {x: 222, y: 154}},
        {type: "wall", p0: {x: 421, y: 245}, p1: {x: 255, y: 148}},
        {type: "wall", p0: {x: 487, y: 131}, p1: {x: 421, y: 244}},
        {type: "wall", p0: {x: 568, y: 900}, p1: {x: 728, y: 731}},
        {type: "wall", p0: {x: 518, y: 727}, p1: {x: 449, y: 706}},
        {type: "wall", p0: {x: 555, y: 600}, p1: {x: 518, y: 726}},
        {type: "wall", p0: {x: 486, y: 580}, p1: {x: 555, y: 600}},
        {type: "wall", p0: {x: 449, y: 706}, p1: {x: 486, y: 580}},
        {type: "wall", p0: {x: 470, y: 347}, p1: {x: 647, y: 263}},
        {type: "wall", p0: {x: 515, y: 444}, p1: {x: 470, y: 347}},
        {type: "wall", p0: {x: 694, y: 360}, p1: {x: 516, y: 443}},
        {type: "wall", p0: {x: 350, y: 780}, p1: {x: 290, y: 857}},
        {type: "wall", p0: {x: 209, y: 669}, p1: {x: 349, y: 780}},
        {type: "wall", p0: {x: 149, y: 746}, p1: {x: 209, y: 670}},
        {type: "wall", p0: {x: 319, y: 470}, p1: {x: 253, y: 463}},
        {type: "wall", p0: {x: 332, y: 349}, p1: {x: 319, y: 470}},
        {type: "wall", p0: {x: 266, y: 342}, p1: {x: 332, y: 349}},
        {type: "wall", p0: {x: 253, y: 463}, p1: {x: 266, y: 343}},
        {type: "wall", p0: {x: 675, y: 840}, p1: {x: 160, y: 869}},
        {type: "wall", p0: {x: 638, y: 175}, p1: {x: 675, y: 839}},
        {type: "wall", p0: {x: 122, y: 204}, p1: {x: 638, y: 175}},
        {type: "wall", p0: {x: 159, y: 869}, p1: {x: 122, y: 206}},
        {type: "water", p0: {x: 298, y: 341}, p1: {x: 522, y: 606}}
    ]},
    {par: 6, aData: [
        {type: "tee", p0: {x: 200, y: 775}, p1: {x: 200, y: 775}},
        {type: "hole", p0: {x: 398, y: 703}, p1: {x: 398, y: 703}},
        {type: "pickUp", p0: {x: 239, y: 433}, p1: {x: 239, y: 433}},
        {type: "pickUp", p0: {x: 562, y: 431}, p1: {x: 562, y: 431}},
        {type: "pickUp", p0: {x: 562, y: 504}, p1: {x: 562, y: 504}},
        {type: "pickUp", p0: {x: 482, y: 504}, p1: {x: 482, y: 504}},
        {type: "pickUp", p0: {x: 239, y: 504}, p1: {x: 239, y: 504}},
        {type: "pickUp", p0: {x: 563, y: 364}, p1: {x: 563, y: 364}},
        {type: "pickUp", p0: {x: 483, y: 364}, p1: {x: 483, y: 364}},
        {type: "pickUp", p0: {x: 403, y: 364}, p1: {x: 403, y: 364}},
        {type: "pickUp", p0: {x: 323, y: 364}, p1: {x: 323, y: 364}},
        {type: "pickUp", p0: {x: 243, y: 364}, p1: {x: 243, y: 364}},
        {type: "wall", p0: {x: 442, y: 586}, p1: {x: 364, y: 586}},
        {type: "wall", p0: {x: 755, y: 275}, p1: {x: 541, y: 275}},
        {type: "wall", p0: {x: 698, y: 388}, p1: {x: 586, y: 277}},
        {type: "wall", p0: {x: 302, y: 721}, p1: {x: 566, y: 1336}},
        {type: "wall", p0: {x: 214, y: 666}, p1: {x: -1, y: 666}},
        {type: "wall", p0: {x: 46, y: 275}, p1: {x: 261, y: 275}},
        {type: "wall", p0: {x: 104, y: 388}, p1: {x: 215, y: 277}},
        {type: "wall", p0: {x: 426, y: 430}, p1: {x: 162, y: 1046}},
        {type: "wall", p0: {x: 316, y: 450}, p1: {x: 370, y: 542}},
        {type: "wall", p0: {x: 316, y: 449}, p1: {x: 421, y: 429}},
        {type: "wall", p0: {x: 81, y: 853}, p1: {x: 721, y: 853}},
        {type: "wall", p0: {x: 81, y: 204}, p1: {x: 721, y: 204}},
        {type: "wall", p0: {x: 657, y: 866}, p1: {x: 657, y: 197}},
        {type: "wall", p0: {x: 145, y: 197}, p1: {x: 145, y: 866}},
        {type: "water", p0: {x: 315, y: 762}, p1: {x: 660, y: 843}},
        {type: "water", p0: {x: 140, y: 206}, p1: {x: 662, y: 287}},
        {type: "slope0", p0: {x: 145, y: 418}, p1: {x: 653, y: 581}}
    ]},
    {par: 6, aData: [
        {type: "tee", p0: {x: 416, y: 817}, p1: {x: 416, y: 817}},
        {type: "hole", p0: {x: 189, y: 264}, p1: {x: 189, y: 264}},
        {type: "pickUp", p0: {x: 605, y: 804}, p1: {x: 605, y: 804}},
        {type: "pickUp", p0: {x: 515, y: 724}, p1: {x: 515, y: 724}},
        {type: "pickUp", p0: {x: 605, y: 724}, p1: {x: 605, y: 724}},
        {type: "pickUp", p0: {x: 515, y: 804}, p1: {x: 515, y: 804}},
        {type: "pickUp", p0: {x: 402, y: 358}, p1: {x: 402, y: 358}},
        {type: "pickUp", p0: {x: 312, y: 278}, p1: {x: 312, y: 278}},
        {type: "pickUp", p0: {x: 402, y: 278}, p1: {x: 402, y: 278}},
        {type: "pickUp", p0: {x: 313, y: 825}, p1: {x: 313, y: 825}},
        {type: "pickUp", p0: {x: 312, y: 358}, p1: {x: 312, y: 358}},
        {type: "wall", p0: {x: 277, y: 427}, p1: {x: 341, y: 427}},
        {type: "wall", p0: {x: 381, y: 764}, p1: {x: 445, y: 764}},
        {type: "wall", p0: {x: 243, y: 229}, p1: {x: 384, y: 87}},
        {type: "wall", p0: {x: 243, y: 229}, p1: {x: 102, y: 87}},
        {type: "wall", p0: {x: 638, y: 643}, p1: {x: 780, y: 502}},
        {type: "wall", p0: {x: 638, y: 643}, p1: {x: 780, y: 785}},
        {type: "wall", p0: {x: 249, y: 891}, p1: {x: 108, y: 750}},
        {type: "wall", p0: {x: 200, y: 352}, p1: {x: 58, y: 211}},
        {type: "wall", p0: {x: 200, y: 352}, p1: {x: 58, y: 493}},
        {type: "wall", p0: {x: 132, y: 190}, p1: {x: 676, y: 190}},
        {type: "wall", p0: {x: 676, y: 880}, p1: {x: 676, y: 190}},
        {type: "wall", p0: {x: 132, y: 880}, p1: {x: 676, y: 880}},
        {type: "wall", p0: {x: 132, y: 190}, p1: {x: 132, y: 880}},
        {type: "water", p0: {x: 451, y: 188}, p1: {x: 676, y: 646}},
        {type: "water", p0: {x: 247, y: 433}, p1: {x: 373, y: 775}},
        {type: "mud", p0: {x: 379, y: 651}, p1: {x: 447, y: 769}},
        {type: "slope0", p0: {x: 135, y: 433}, p1: {x: 242, y: 873}},
        {type: "slope2", p0: {x: 377, y: 432}, p1: {x: 448, y: 646}}
    ]},
    {par: 7, aData: [
        {type: "tee", p0: {x: 192, y: 271}, p1: {x: 192, y: 271}},
        {type: "hole", p0: {x: 592, y: 808}, p1: {x: 592, y: 808}},
        {type: "pickUp", p0: {x: 424, y: 728}, p1: {x: 424, y: 728}},
        {type: "pickUp", p0: {x: 202, y: 411}, p1: {x: 202, y: 411}},
        {type: "pickUp", p0: {x: 358, y: 395}, p1: {x: 358, y: 395}},
        {type: "pickUp", p0: {x: 508, y: 285}, p1: {x: 508, y: 285}},
        {type: "pickUp", p0: {x: 338, y: 285}, p1: {x: 338, y: 285}},
        {type: "pickUp", p0: {x: 518, y: 395}, p1: {x: 518, y: 395}},
        {type: "pickUp", p0: {x: 192, y: 557}, p1: {x: 192, y: 557}},
        {type: "pickUp", p0: {x: 204, y: 708}, p1: {x: 204, y: 708}},
        {type: "wall", p0: {x: 193, y: 768}, p1: {x: 139, y: 714}},
        {type: "wall", p0: {x: 193, y: 334}, p1: {x: 139, y: 389}},
        {type: "wall", p0: {x: 442, y: 139}, p1: {x: 662, y: 359}},
        {type: "wall", p0: {x: 149, y: 331}, p1: {x: 460, y: 331}},
        {type: "wall", p0: {x: 140, y: 214}, p1: {x: 569, y: 214}},
        {type: "wall", p0: {x: 245, y: 447}, p1: {x: 461, y: 447}},
        {type: "wall", p0: {x: 463, y: 448}, p1: {x: 463, y: 571}},
        {type: "wall", p0: {x: 572, y: 215}, p1: {x: 571, y: 571}},
        {type: "wall", p0: {x: 574, y: 572}, p1: {x: 665, y: 572}},
        {type: "wall", p0: {x: 371, y: 572}, p1: {x: 463, y: 572}},
        {type: "wall", p0: {x: 139, y: 217}, p1: {x: 139, y: 785}},
        {type: "wall", p0: {x: 245, y: 453}, p1: {x: 245, y: 663}},
        {type: "wall", p0: {x: 246, y: 664}, p1: {x: 369, y: 663}},
        {type: "wall", p0: {x: 114, y: 772}, p1: {x: 369, y: 772}},
        {type: "wall", p0: {x: 370, y: 774}, p1: {x: 370, y: 865}},
        {type: "wall", p0: {x: 660, y: 866}, p1: {x: 660, y: 572}},
        {type: "wall", p0: {x: 370, y: 866}, p1: {x: 658, y: 866}},
        {type: "wall", p0: {x: 370, y: 572}, p1: {x: 370, y: 664}},
        {type: "slope2", p0: {x: 470, y: 436}, p1: {x: 559, y: 584}},
        {type: "water", p0: {x: 475, y: 673}, p1: {x: 552, y: 752}}
    ]},
    {par: 7, aData: [
        {type: "tee", p0: {x: 207, y: 249}, p1: {x: 207, y: 249}},
        {type: "hole", p0: {x: 427, y: 675}, p1: {x: 427, y: 675}},
        {type: "pickUp", p0: {x: 603, y: 671}, p1: {x: 603, y: 671}},
        {type: "pickUp", p0: {x: 609, y: 550}, p1: {x: 609, y: 550}},
        {type: "pickUp", p0: {x: 313, y: 278}, p1: {x: 313, y: 278}},
        {type: "pickUp", p0: {x: 606, y: 278}, p1: {x: 606, y: 278}},
        {type: "pickUp", p0: {x: 311, y: 390}, p1: {x: 311, y: 390}},
        {type: "pickUp", p0: {x: 311, y: 749}, p1: {x: 311, y: 749}},
        {type: "pickUp", p0: {x: 208, y: 749}, p1: {x: 208, y: 749}},
        {type: "pickUp", p0: {x: 254, y: 809}, p1: {x: 254, y: 809}},
        {type: "pickUp", p0: {x: 499, y: 671}, p1: {x: 499, y: 671}},
        {type: "wall", p0: {x: 264, y: 246}, p1: {x: 399, y: 111}},
        {type: "wall", p0: {x: 256, y: 904}, p1: {x: 391, y: 769}},
        {type: "wall", p0: {x: 116, y: 758}, p1: {x: 251, y: 893}},
        {type: "wall", p0: {x: 257, y: 430}, p1: {x: 257, y: 747}},
        {type: "wall", p0: {x: 257, y: -315}, p1: {x: 257, y: 333}},
        {type: "wall", p0: {x: 568, y: 781}, p1: {x: 704, y: 646}},
        {type: "wall", p0: {x: 573, y: 162}, p1: {x: 709, y: 297}},
        {type: "wall", p0: {x: 361, y: 360}, p1: {x: 553, y: 360}},
        {type: "wall", p0: {x: 361, y: 448}, p1: {x: 553, y: 448}},
        {type: "wall", p0: {x: 365, y: 736}, p1: {x: 674, y: 736}},
        {type: "wall", p0: {x: 157, y: 202}, p1: {x: 669, y: 202}},
        {type: "wall", p0: {x: 675, y: 191}, p1: {x: 675, y: 737}},
        {type: "wall", p0: {x: 361, y: 589}, p1: {x: 553, y: 589}},
        {type: "wall", p0: {x: 157, y: 202}, p1: {x: 157, y: 850}},
        {type: "wall", p0: {x: 160, y: 850}, p1: {x: 358, y: 850}},
        {type: "wall", p0: {x: 359, y: 590}, p1: {x: 359, y: 873}},
        {type: "slope2", p0: {x: 352, y: 211}, p1: {x: 559, y: 270}},
        {type: "slope2", p0: {x: 559, y: 358}, p1: {x: 666, y: 464}},
        {type: "water", p0: {x: 353, y: 296}, p1: {x: 559, y: 368}},
        {type: "water", p0: {x: 353, y: 455}, p1: {x: 559, y: 520}}
    ]},
    {par: 6, aData: [
        {type: "tee", p0: {x: 485, y: 235}, p1: {x: 485, y: 235}},
        {type: "hole", p0: {x: 395, y: 518}, p1: {x: 395, y: 518}},
        {type: "pickUp", p0: {x: 454, y: 659}, p1: {x: 454, y: 659}},
        {type: "pickUp", p0: {x: 394, y: 659}, p1: {x: 394, y: 659}},
        {type: "pickUp", p0: {x: 334, y: 659}, p1: {x: 334, y: 659}},
        {type: "pickUp", p0: {x: 459, y: 370}, p1: {x: 459, y: 370}},
        {type: "pickUp", p0: {x: 399, y: 370}, p1: {x: 399, y: 370}},
        {type: "pickUp", p0: {x: 339, y: 370}, p1: {x: 339, y: 370}},
        {type: "pickUp", p0: {x: 484, y: 566}, p1: {x: 484, y: 566}},
        {type: "pickUp", p0: {x: 484, y: 516}, p1: {x: 484, y: 516}},
        {type: "pickUp", p0: {x: 484, y: 466}, p1: {x: 484, y: 466}},
        {type: "pickUp", p0: {x: 314, y: 566}, p1: {x: 314, y: 566}},
        {type: "pickUp", p0: {x: 314, y: 516}, p1: {x: 314, y: 516}},
        {type: "pickUp", p0: {x: 314, y: 466}, p1: {x: 314, y: 466}},
        {type: "wall", p0: {x: 541, y: 473}, p1: {x: 562, y: 494}},
        {type: "wall", p0: {x: 237, y: 540}, p1: {x: 258, y: 561}},
        {type: "wall", p0: {x: 135, y: 187}, p1: {x: 660, y: 187}},
        {type: "wall", p0: {x: 660, y: 857}, p1: {x: 660, y: 187}},
        {type: "wall", p0: {x: 135, y: 857}, p1: {x: 660, y: 857}},
        {type: "wall", p0: {x: 135, y: 187}, p1: {x: 135, y: 857}},
        {type: "water", p0: {x: 353, y: 166}, p1: {x: 441, y: 292}},
        {type: "water", p0: {x: 353, y: 738}, p1: {x: 441, y: 864}},
        {type: "mud", p0: {x: 151, y: 451}, p1: {x: 181, y: 581}},
        {type: "mud", p0: {x: 611, y: 451}, p1: {x: 641, y: 581}},
        {type: "water", p0: {x: 352, y: 552}, p1: {x: 440, y: 587}},
        {type: "water", p0: {x: 352, y: 444}, p1: {x: 440, y: 479}},
        {type: "slope2", p0: {x: 144, y: 590}, p1: {x: 655, y: 735}},
        {type: "slope0", p0: {x: 144, y: 296}, p1: {x: 655, y: 440}}
    ]}
]), loc = window.top.location;
loadPreAssets();
