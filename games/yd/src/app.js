var GameLayer = cc.Layer.extend({

    sprite: null,
    ctor: function () {
        var self = this;

        self._super();
        self.y = winSize.height;

        var levelParams = Levels[curLevel - 1];

        var TIME_LIMIT = 60;
        var timeCount = 0, score = 0;
        var isInSingleState = false, isInSameState = false;

        var title = ccui.Text.create();
        title.attr({
            anchorY: 1,
            color: cc.color(0, 0, 0),
            fontSize: 44,
            x: winSize.width / 2,
            y: -20,
            textAlign: cc.TEXT_ALIGNMENT_CENTER,
            verticalAlign: cc.VERTICAL_TEXT_ALIGNMENT_TOP,
            string: Localize[lang]['level'] + ' ' + curLevel
        });
        self.addChild(title);

        var timeLabel = ccui.Text.create();
        timeLabel.attr({
            anchorX: 0,
            anchorY: 1,
            color: cc.color(100, 100, 100),
            fontSize: 32,
            x: 56,
            y: -70,
            textAlign: cc.TEXT_ALIGNMENT_LEFT,
            verticalAlign: cc.VERTICAL_TEXT_ALIGNMENT_TOP,
            string: Localize[lang]['time'] + ':' + TIME_LIMIT
        });
        self.addChild(timeLabel);

        var countdown = function () {
            timeCount++;
            timeLabel.string = Localize[lang]['time'] + ':' + (TIME_LIMIT - timeCount);
            if (timeCount == TIME_LIMIT) {
                director.runScene(new ResultScene(score));
            }
        };
        self.schedule(countdown, 1, TIME_LIMIT - 1);

        var scoreLabel = ccui.Text.create();
        scoreLabel.attr({
            anchorX: 1,
            anchorY: 1,
            color: cc.color(100, 100, 100),
            fontSize: 32,
            x: winSize.width - 56,
            y: -70,
            textAlign: cc.TEXT_ALIGNMENT_RIGHT,
            verticalAlign: cc.VERTICAL_TEXT_ALIGNMENT_TOP,
            string: Localize[lang]['score'] + ':' + score
        });
        self.addChild(scoreLabel);

        var goToShop = ccui.ImageView.create();
        goToShop.loadTexture(res.shopBtn, texType);
        goToShop.attr({
            anchorX: 1,
            anchorY: 1,
            x: winSize.width,
            y: -10,
            zIndex: 100,
            touchEnabled: true
        });
        goToShop.addTouchEventListener(function (sender, type) {
            if (type == ccui.Widget.TOUCH_ENDED) {
                director.runScene(new ShopScene());
            }
        }, self);
        self.addChild(goToShop);

        var goToHome = ccui.ImageView.create();
        goToHome.loadTexture(res.menuBtn, texType);
        goToHome.attr({
            anchorX: 0,
            anchorY: 1,
            x: 0,
            y: -10,
            zIndex: 100,
            touchEnabled: true
        });
        goToHome.addTouchEventListener(function (sender, type) {
            if (type == ccui.Widget.TOUCH_ENDED) {
                director.runScene(new MenuScene());
            }
        }, self);
        self.addChild(goToHome);

        var line = ccui.Layout.create();
        line.setBackGroundColorType(ccui.Layout.BG_COLOR_SOLID);
        line.setBackGroundColor(cc.color(208, 208, 208));
        line.setContentSize(cc.size(496, 2));
        line.attr({
            x: 72,
            y: -120
        });
        self.addChild(line);

        var abilityTextTop = ccui.Text.create();
        abilityTextTop.attr({
            anchorY: 1,
            color: cc.color(100, 100, 100),
            fontSize: 24,
            x: winSize.width / 2,
            y: -140,
            textAlign: cc.TEXT_ALIGNMENT_CENTER,
            verticalAlign: cc.VERTICAL_TEXT_ALIGNMENT_TOP
        });
        self.addChild(abilityTextTop);

        var abilityTextBottom = ccui.Text.create();
        abilityTextBottom.attr({
            anchorY: 1,
            color: cc.color(100, 100, 100),
            fontSize: 24,
            x: winSize.width / 2,
            y: -706,
            textAlign: cc.TEXT_ALIGNMENT_CENTER,
            verticalAlign: cc.VERTICAL_TEXT_ALIGNMENT_TOP
        });
        abilityTextBottom.setTextAreaSize(cc.size(560, winSize.height));
        self.addChild(abilityTextBottom);

        var RADIUS = 26, gap = RADIUS * 2 + 36, lindWidth = Math.floor(RADIUS / 3);
        var dotArray = [];
        for (var i = 0; i < 6; i++) {
            var arr = [];
            for (var j = 0; j < 6; j++) {
                arr.push(Math.floor(Math.random() * 5 + 1));
            }
            dotArray.push(arr);
        }
        var lineColors = {};
        for (var key in Colors) {
            var color = Colors[key];
            switch (color) {
                case Colors.RED:
                    lineColors[color] = cc.color(237, 97, 110);
                    break;
                case Colors.YELLOW:
                    lineColors[color] = cc.color(234, 194, 10);
                    break;
                case Colors.BLUE:
                    lineColors[color] = cc.color(110, 168, 232);
                    break;
                case Colors.GREEN:
                    lineColors[color] = cc.color(40, 205, 137);
                    break;
                case Colors.PURPLE:
                    lineColors[color] = cc.color(154, 98, 223);
                    break;
                default:
                    break;
            }
        }
        var newDot = function (row, col, value, isEffect) {
            isEffect = isEffect == null ? false : isEffect;
            var dot = new cc.DrawNode();
            dot.zIndex = 2;
            dot.setName(row + '_' + col);
            var color = lineColors[value];
            dot.drawDot(cc.p(0, 0), RADIUS, isEffect ? cc.clone(color) : color);
            dot.attr({
                x: RADIUS + gap * col,
                y: -RADIUS - gap * row
            });
            dotLayout.addChild(dot);
            return dot;
        };
        var removeDot = function (dot, cols) {
            var split = dot.getName().split('_');
            var row = split[0] >> 0, col = split[1] >> 0;
            dotArray[row][col] = 0;
            dot.zIndex = 1;
            /*dot.runAction(
                cc.sequence(
                    cc.scaleTo(0.1, 0),
                    cc.callFunc(function () {
                        this.removeFromParent();
                    }.bind(dot))
                )
            );*/
            dot.removeFromParent();

            if (cols[col] == null) {
                cols[col] = [
                    {
                        row: row,
                        count: 1
                    }
                ];
            } else {
                var existed;
                for (var i = 0; i < cols[col].length; i++) {
                    var part = cols[col][i];
                    if (row == part.row - 1) {
                        existed = part;
                        break;
                    }
                }
                if (existed) {
                    existed.row = row;
                    existed.count++;
                } else {
                    cols[col].push({
                        row: row,
                        count: 1
                    });
                }
            }

            score++;
            scoreLabel.string = Localize[lang]['score'] + ':' + score;
        };
        var effects;
        var newEffect = function (row, col, isTrigger) {
            isTrigger = isTrigger == null ? false : isTrigger;
            var name = 'effect_' + row + '_' + col;
            var oldEffect = dotLayout.getChildByName(name);
            if (oldEffect != null) {
                oldEffect.removeFromParent();
                if (isInSingleState && singleLeft > 0) {
                    pushDot(dotLayout.getChildByName(row + '_' + col));
                    singleLeft--;
                    singleCount.string = singleLeft;
                    return;
                } else if (isInSameState) {
                    isClosed = dotArray[row][col];
                    sameLeft--;
                    sameCount.string = sameLeft;
                    return;
                } else if (oldEffect.scale < 1.4 && singleLeft > 0) {
                    isInSingleState = true;
                    pushDot(dotLayout.getChildByName(row + '_' + col));
                    singleLeft--;
                    singleCount.string = singleLeft;
                    return;
                }
            }
            var effect = newDot(row, col, dotArray[row][col], true);
            effect.setName(name);
            if (!isTrigger) {
                effect.runAction(cc.scaleTo(0.6, 2.3));
                effect.schedule(function () {
                    effect._buffer[0].fillColor.a -= Math.ceil(255 / 6);
                    if (effect._buffer[0].fillColor.a <= 0) {
                        effect.removeFromParent();
                        effects.splice(effects.indexOf(effect), 1);
                    }
                }, 0.1);
            } else {
                effect.runAction(cc.scaleTo(0.1, 1.4));
                effect._buffer[0].fillColor.a = 128;
            }
            effects.push(effect);
        };

        var dotLayout = ccui.Layout.create();
        dotLayout.attr({
            x: 72,
            y: -190
        });
        dotLayout.setContentSize(RADIUS * 2 * 6 + 5 * (gap - RADIUS * 2), RADIUS * 2 * 6 + 5 * (gap - RADIUS * 2));
        self.addChild(dotLayout);

        for (var i = 0; i < dotArray.length; i++) {
            for (var j = 0; j < dotArray[i].length; j++) {
                newDot(i, j, dotArray[i][j]);
            }
        }

        var closedDraw = new cc.DrawNode();
        closedDraw.zIndex = 5;
        self.addChild(closedDraw);

        var connectDraw = new cc.DrawNode();
        connectDraw.zIndex = 4;
        connectDraw.setLineWidth(lindWidth);
        dotLayout.addChild(connectDraw);

        var drawNode = new cc.DrawNode();
        drawNode.zIndex = 3;
        drawNode.setLineWidth(lindWidth);
        dotLayout.addChild(drawNode);

        var startPos, startCol, startRow, curLoc, curCol, curRow, connectedDots, isClosed, closeIndex;
        var pushDot = function (dot) {
            if (connectedDots.indexOf(dot) == -1) {
                connectedDots.push(dot);
            }
        };
        var gameListener = cc.EventListener.create({
            event: cc.EventListener.TOUCH_ONE_BY_ONE,
            onTouchBegan: function (touch) {
                connectedDots = [];
                if (!isInSingleState && !isInSameState) {
                    effects = [];
                }
                curLoc = dotLayout.convertToNodeSpace(touch.getLocation());
                startCol = Math.floor(curLoc.x / gap);
                startRow = Math.floor(Math.abs(curLoc.y) / gap);
                if (curLoc.x >= 0 && curLoc.x <= dotLayout.width && curLoc.y <= 0 && curLoc.y >= -dotLayout.height && dotArray[startRow][startCol] != 0) {
                    startPos = cc.p(RADIUS + gap * startCol, -RADIUS - gap * startRow);
                    newEffect(startRow, startCol);
                    return true;
                }
                return false;
            },
            onTouchMoved: function (touch) {

                curLoc = dotLayout.convertToNodeSpace(touch.getLocation());
                curCol = Math.floor(curLoc.x / gap);
                curRow = Math.floor(Math.abs(curLoc.y) / gap);
                var startValue = dotArray[startRow][startCol];
                var lineColor = lineColors[startValue];
                drawNode.clear();
                drawNode.drawSegment(startPos, curLoc, null, lineColor);
                if (!isInSingleState && !isInSameState && curRow < 6 && curCol < 6 && ((curRow == startRow && Math.abs(curCol - startCol) == 1) || (curCol == startCol && Math.abs(curRow - startRow) == 1))) {
                    var curValue = dotArray[curRow][curCol];
                    var curDot = dotLayout.getChildByName(curRow + '_' + curCol);
                    if (curValue && startValue == curValue) {
                        var index = connectedDots.indexOf(curDot);
                        if (index != -1) {
                            if (connectedDots.length - index > 3) {
                                if (!isClosed) {
                                    isClosed = curValue;
                                    closeIndex = index;
                                    var pos = cc.p(RADIUS + gap * curCol, -RADIUS - gap * curRow);
                                    connectDraw.drawSegment(startPos, pos, null, lineColor);
                                    startPos = pos;
                                    startCol = curCol;
                                    startRow = curRow;
                                    lineColor.a = 128;
                                    closedDraw.drawRect(cc.p(0, 0), cc.p(winSize.width, -winSize.height), lineColor, 10, lineColor);

                                    for (var i = dotArray.length - 1; i >= 0; i--) {
                                        for (var j = dotArray[i].length - 1; j >= 0; j--) {
                                            var dot = dotArray[i][j];
                                            if (dot == isClosed) {
                                                newEffect(i, j);
                                            }
                                        }
                                    }
                                } else if (connectedDots.length - index == 1 || index == closeIndex) {
                                    startPos = connectedDots[closeIndex].getPosition();
                                    startCol = Math.floor(startPos.x / gap);
                                    startRow = Math.floor(Math.abs(startPos.y) / gap);
                                    connectedDots.pop();
                                    connectDraw._buffer.pop();
                                }
                            } else {
                                if (isClosed && connectedDots.length - index == 1) {
                                    isClosed = closeIndex = null;
                                    closedDraw.clear();
                                    lineColors[dotArray[startRow][startCol]].a = 255;
                                } else if (!isClosed || connectedDots.length - index == 2) {
                                    connectedDots.pop();
                                } else {
                                    return;
                                }
                                connectDraw._buffer.pop();
                                startPos = connectedDots[connectedDots.length - 1].getPosition();
                                startCol = Math.floor(startPos.x / gap);
                                startRow = Math.floor(Math.abs(startPos.y) / gap);
                            }
                        } else {
                            pushDot(dotLayout.getChildByName(startRow + '_' + startCol));
                            pushDot(curDot);
                            newEffect(curRow, curCol);
                            var pos = cc.p(RADIUS + gap * curCol, -RADIUS - gap * curRow);
                            connectDraw.drawSegment(startPos, pos, null, lineColor);
                            startPos = pos;
                            startCol = curCol;
                            startRow = curRow;

                        }
                    }
                }
            },
            onTouchEnded: function () {
                drawNode.clear();
                connectDraw.clear();
                if (isClosed) {
                    closedDraw.clear();
                    lineColors[dotArray[startRow][startCol]].a = 255;
                }
                if (connectedDots.length > 1 || isInSingleState || isInSameState) {
                    if (isInSingleState) {
                        setTimeout(function () {
                            isInSingleState = false;
                        }, 400);

                        abilityTextTop.string = '';
                        abilityTextBottom.string = '';
                    }
                    if (isInSameState) {
                        setTimeout(function () {
                            isInSameState = false;
                        }, 400);

                        abilityTextTop.string = '';
                    }
                    for (var i = 0; i < effects.length; i++) {
                        effects[i].removeFromParent();
                    }
                    var cols = {};
                    if (isClosed) {
                        connectedDots = [];
                        for (var i = dotArray.length - 1; i >= 0; i--) {
                            for (var j = dotArray[i].length - 1; j >= 0; j--) {
                                var dot = dotArray[i][j];
                                if (dot == isClosed) {
                                    removeDot(dotLayout.getChildByName(i + '_' + j), cols);
                                }
                            }
                        }
                        isClosed = closeIndex = null;
                    } else {
                        for (var i = 0; i < connectedDots.length; i++) {
                            var dot = connectedDots[i];
                            removeDot(dot, cols);
                        }
                    }
                    for (var col in cols) {
                        var record = cols[col];
                        var colValue = col >> 0;
                        var total = 0;
                        for (var i = 0; i < record.length; i++) {
                            var obj = record[i];
                            var row = obj.row;
                            var count = obj.count;
                            for (var j = row - 1; j >= 0; j--) {
                                var dot = dotLayout.getChildByName(j + '_' + col);
                                if (dot) {
                                    var newRow = j + count;
                                    dot.runAction(cc.moveBy(0.3, 0, count * -gap).easing(cc.easeBounceOut()));
                                    dot.setName(newRow + '_' + col);
                                    dotArray[newRow][colValue] = dotArray[j][colValue];
                                    dotArray[j][colValue] = 0;
                                }
                            }
                            total += count;
                            if (i != record.length - 1) {
                                record[i + 1].row += count;
                            }
                        }
                        for (var i = 0; i < total; i++) {
                            var value = Math.floor(Math.random() * 5 + 1);
                            var dot = newDot(i, colValue, value);
                            dot.y += winSize.height;
                            dot.runAction(cc.moveBy(0.3, 0, -winSize.height).easing(cc.easeBounceOut()));
                            dotArray[i][colValue] = value;
                        }
                    }
                }
            }
        });
        cc.eventManager.addListener(gameListener, dotLayout);

        var lineBottom = ccui.Layout.create();
        lineBottom.setBackGroundColorType(ccui.Layout.BG_COLOR_SOLID);
        lineBottom.setBackGroundColor(cc.color(208, 208, 208));
        lineBottom.setContentSize(cc.size(496, 2));
        lineBottom.attr({
            x: 72,
            y: -760
        });
        self.addChild(lineBottom);

        var stopBtn = ccui.Layout.create();
        stopBtn.setContentSize(cc.size(212, 80));
        stopBtn.attr({
            x: 0,
            y: -winSize.height,
            touchEnabled: true
        });
        stopBtn.addTouchEventListener(function (sender, type) {
            if (type == ccui.Widget.TOUCH_ENDED) {
                if (stopLeft > 0) {
                    stopLeft--;
                    stopCount.string = stopLeft;
                    self.pause();
                    timeLabel.color = cc.color(255, 0, 0);
                    abilityTextTop.string = Localize[lang]['stop'];
                    sender.scheduleOnce(function () {
                        abilityTextTop.string = '';
                        timeLabel.color = cc.color(100, 100, 100);
                        self.resume();
                    }, 5);
                }
            }
        }, self);
        self.addChild(stopBtn);

        var stopIcon = ccui.ImageView.create();
        stopIcon.loadTexture(res.stop, texType);
        stopIcon.attr({
            x: 96,
            y: 40
        });
        stopBtn.addChild(stopIcon);

        var stopCount = ccui.Text.create();
        stopCount.attr({
            color: cc.color(0, 0, 0),
            fontSize: 32,
            x: 144,
            y: 40,
            textAlign: cc.TEXT_ALIGNMENT_LEFT,
            verticalAlign: cc.VERTICAL_TEXT_ALIGNMENT_CENTER,
            string: stopLeft
        });
        stopBtn.addChild(stopCount);

        var exitSingleState = function () {
            isInSingleState = false;
            for (var i = 0; i < effects.length; i++) {
                effects[i].removeFromParent();
            }
            abilityTextTop.string = '';
            abilityTextBottom.string = '';
        };
        var exitSameState = function () {
            isInSameState = false;
            for (var i = 0; i < effects.length; i++) {
                effects[i].removeFromParent();
            }
            abilityTextTop.string = '';
        };
        var singleBtn = ccui.Layout.create();
        singleBtn.setContentSize(cc.size(212, 80));
        singleBtn.attr({
            x: 212,
            y: -winSize.height,
            touchEnabled: true
        });
        singleBtn.addTouchEventListener(function (sender, type) {
            if (type == ccui.Widget.TOUCH_ENDED) {
                if (singleLeft > 0) {
                    if (!isInSingleState) {
                        abilityTextTop.string = Localize[lang]['single1'];
                        abilityTextBottom.string = Localize[lang]['single2'];
                        isInSingleState = true;
                        effects = [];
                        for (var i = dotArray.length - 1; i >= 0; i--) {
                            for (var j = dotArray[i].length - 1; j >= 0; j--) {
                                newEffect(i, j, true);
                            }
                        }
                    } else {
                        exitSingleState();
                    }
                }
            }
        }, self);
        self.addChild(singleBtn);

        var singleIcon = ccui.ImageView.create();
        singleIcon.loadTexture(res.single, texType);
        singleIcon.attr({
            x: 96,
            y: 40
        });
        singleBtn.addChild(singleIcon);

        var singleCount = ccui.Text.create();
        singleCount.attr({
            color: cc.color(0, 0, 0),
            fontSize: 32,
            x: 144,
            y: 40,
            textAlign: cc.TEXT_ALIGNMENT_LEFT,
            verticalAlign: cc.VERTICAL_TEXT_ALIGNMENT_CENTER,
            string: singleLeft
        });
        singleBtn.addChild(singleCount);

        var sameBtn = ccui.Layout.create();
        sameBtn.setContentSize(cc.size(212, 80));
        sameBtn.attr({
            x: 424,
            y: -winSize.height,
            touchEnabled: true
        });
        sameBtn.addTouchEventListener(function (sender, type) {
            if (type == ccui.Widget.TOUCH_ENDED) {
                if (sameLeft > 0) {
                    if (!isInSameState) {
                        abilityTextTop.string = Localize[lang]['same'];
                        isInSameState = true;
                        effects = [];
                        for (var i = dotArray.length - 1; i >= 0; i--) {
                            for (var j = dotArray[i].length - 1; j >= 0; j--) {
                                newEffect(i, j, true);
                            }
                        }
                    } else {
                        exitSameState();
                    }
                }
            }
        }, self);
        self.addChild(sameBtn);

        var sameIcon = ccui.ImageView.create();
        sameIcon.loadTexture(res.same, texType);
        sameIcon.attr({
            x: 96,
            y: 40
        });
        sameBtn.addChild(sameIcon);

        var sameCount = ccui.Text.create();
        sameCount.attr({
            color: cc.color(0, 0, 0),
            fontSize: 32,
            x: 144,
            y: 40,
            textAlign: cc.TEXT_ALIGNMENT_LEFT,
            verticalAlign: cc.VERTICAL_TEXT_ALIGNMENT_CENTER,
            string: sameLeft
        });
        sameBtn.addChild(sameCount);

        return true;

    }
});

var GameScene = cc.Scene.extend({
    onEnter: function () {
        this._super();
        var layer = new GameLayer();
        this.addChild(layer);
    }
});

