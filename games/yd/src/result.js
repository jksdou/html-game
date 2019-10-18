var ResultLayer = cc.Layer.extend({
    sprite: null,
    ctor: function (score) {
        var self = this;

        self._super();
        self.y = winSize.height;

        var isPassed = score >= scoreNeeded;
        var isClear = isPassed && curLevel + 1 > Levels.length;
        if (isPassed) {
            totalScore += score;
        }

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

        var result = ccui.Text.create();
        result.attr({
            anchorY: 1,
            color: isPassed ? cc.color(110, 168, 232) : cc.color(100, 100, 100),
            fontSize: 88,
            x: winSize.width / 2,
            y: -100,
            textAlign: cc.TEXT_ALIGNMENT_CENTER,
            verticalAlign: cc.VERTICAL_TEXT_ALIGNMENT_TOP,
            string: isClear ? Localize[lang]['clear'] : (isPassed ? Localize[lang]['passed'] : Localize[lang]['failed'])
        });
        self.addChild(result);

        var pointLabel = ccui.Text.create();
        pointLabel.attr({
            anchorY: 1,
            color: cc.color(0, 0, 0),
            fontSize: 44,
            x: winSize.width / 2,
            y: -260,
            textAlign: cc.TEXT_ALIGNMENT_CENTER,
            verticalAlign: cc.VERTICAL_TEXT_ALIGNMENT_TOP,
            string: Localize[lang]['yourScore']
        });
        self.addChild(pointLabel);

        var point = ccui.Text.create();
        point.attr({
            anchorY: 1,
            color: isPassed ? cc.color(252, 68, 69) : cc.color(100, 100, 100),
            fontSize: 106,
            x: winSize.width / 2,
            y: -324,
            textAlign: cc.TEXT_ALIGNMENT_CENTER,
            verticalAlign: cc.VERTICAL_TEXT_ALIGNMENT_TOP,
            string: score
        });
        self.addChild(point);

        var targetLabel = ccui.Text.create();
        targetLabel.attr({
            anchorY: 0,
            color: cc.color(0, 0, 0),
            fontSize: 28,
            x: winSize.width / 2,
            y: -496,
            textAlign: cc.TEXT_ALIGNMENT_CENTER,
            verticalAlign: cc.VERTICAL_TEXT_ALIGNMENT_BOTTOM,
            string: Localize[lang]['scoreNeeded']
        });
        targetLabel.setTextAreaSize(cc.size(560, winSize.height));
        self.addChild(targetLabel);

        var target = ccui.Text.create();
        target.attr({
            anchorY: 1,
            color: cc.color(252, 68, 69),
            fontSize: 60,
            x: winSize.width / 2,
            y: -496,
            textAlign: cc.TEXT_ALIGNMENT_CENTER,
            verticalAlign: cc.VERTICAL_TEXT_ALIGNMENT_TOP,
            string: scoreNeeded
        });
        self.addChild(target);

        if (!isPassed) {
            SG_Hooks['gameOver'](curLevel, score);
            var retryBtn = ccui.Button.create();
            retryBtn.setScale9Enabled(true);
            retryBtn.setCapInsets(cc.rect(1, 1, 1, 1));
            retryBtn.loadTextures(res.btn2, res.btn2, null, texType);
            retryBtn.setContentSize(cc.size(360, 90));
            retryBtn.setTitleText(Localize[lang]['playAgain']);
            retryBtn.setTitleFontSize(44);
            retryBtn.setPressedActionEnabled(true);
            retryBtn.attr({
                x: winSize.width / 2,
                y: -603
            });
            retryBtn.addTouchEventListener(function (sender, type) {
                if (type == ccui.Widget.TOUCH_ENDED) {
                    director.runScene(new GameScene());
                }
            }, self);
            self.addChild(retryBtn);
        } else if (!isClear) {
            SG_Hooks['levelUp'](curLevel, score);
            curLevel++;
            var nextBtn = ccui.Button.create();
            nextBtn.setScale9Enabled(true);
            nextBtn.setCapInsets(cc.rect(1, 1, 1, 1));
            nextBtn.loadTextures(res.btn1, res.btn1, null, texType);
            nextBtn.setContentSize(cc.size(360, 90));
            nextBtn.setTitleText(Localize[lang]['next']);
            nextBtn.setTitleFontSize(44);
            nextBtn.setPressedActionEnabled(true);
            nextBtn.attr({
                x: winSize.width / 2,
                y: -603
            });
            nextBtn.addTouchEventListener(function (sender, type) {
                if (type == ccui.Widget.TOUCH_ENDED) {
                    director.runScene(new LevelScene());
                }
            }, self);
            self.addChild(nextBtn);
        }

        var shopBtn = ccui.Button.create();
        shopBtn.setScale9Enabled(true);
        shopBtn.setCapInsets(cc.rect(1, 1, 1, 1));
        shopBtn.loadTextures(res.btn4, res.btn4, null, texType);
        shopBtn.setContentSize(cc.size(288, 70));
        shopBtn.setTitleText(Localize[lang]['shop']);
        shopBtn.setTitleFontSize(44);
        shopBtn.setPressedActionEnabled(true);
        shopBtn.attr({
            x: winSize.width / 2,
            y: -693
        });
        shopBtn.addTouchEventListener(function (sender, type) {
            if (type == ccui.Widget.TOUCH_ENDED) {
                director.runScene(new ShopScene());
            }
        }, self);
        self.addChild(shopBtn);

        var ua = navigator.userAgent.toLowerCase();
        var isWeixin = false;
        if (ua.match(/MicroMessenger/i) == "micromessenger") {
            isWeixin = true;
        }

        if (isWeixin) {
            var shareBtn = ccui.Button.create();
            shareBtn.setScale9Enabled(true);
            shareBtn.setCapInsets(cc.rect(1, 1, 1, 1));
            shareBtn.loadTextures(res.btn3, res.btn3, null, texType);
            shareBtn.setContentSize(cc.size(288, 70));
            shareBtn.setTitleText(Localize[lang]['share']);
            shareBtn.setTitleFontSize(44);
            shareBtn.setPressedActionEnabled(true);
            shareBtn.attr({
                x: winSize.width / 2,
                y: -773
            });
            shareBtn.addTouchEventListener(function (sender, type) {
                if (type == ccui.Widget.TOUCH_ENDED) {
                    var shareLayer = ccui.Layout.create();
                    shareLayer.setBackGroundColorType(ccui.Layout.BG_COLOR_SOLID);
                    shareLayer.setBackGroundColor(cc.color(0, 0, 0));
                    shareLayer.setBackGroundColorOpacity(128);
                    shareLayer.setSize(winSize);
                    shareLayer.attr({
                        y: -winSize.height,
                        zIndex: 100,
                        touchEnabled: true
                    });
                    shareLayer.addTouchEventListener(function (sender, type) {
                        if (type == ccui.Widget.TOUCH_ENDED) {
                            sender.removeFromParent();
                        }
                    }, self);
                    self.addChild(shareLayer);

                    var textImage = ccui.ImageView.create();
                    textImage.loadTexture(res.share, texType);
                    textImage.attr({
                        anchorX: 1,
                        anchorY: 1,
                        x: winSize.width - 5,
                        y: winSize.height - 5
                    });
                    shareLayer.addChild(textImage);
                }
            }, self);
            self.addChild(shareBtn);
        }
      
        return true;
    }
});
var ResultScene = cc.Scene.extend({
    ctor: function (score) {
        this._super();
        var layer = new ResultLayer(score);
        this.addChild(layer);
    }
});