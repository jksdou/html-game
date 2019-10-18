var ShopLayer = cc.Layer.extend({
    sprite: null,
    ctor: function () {
        var self = this;

        self._super();
        self.y = winSize.height;

        var STOP_PRICE = 30;
        var SINGLE_PRICE = 10;
        var SAME_PRICE = 50;
        

        var scoreArea = ccui.Layout.create();
        scoreArea.setBackGroundColorType(ccui.Layout.BG_COLOR_SOLID);
        scoreArea.setBackGroundColor(cc.color(111, 168, 233));
        scoreArea.setSize(cc.size(494, 150));
        scoreArea.x = 72;
        scoreArea.y = -194;
        self.addChild(scoreArea);

        var yourScoreLabel = ccui.Text.create();
        yourScoreLabel.attr({
            anchorX: 0,
            color: cc.color(255, 255, 255),
            fontSize: 38,
            x: 20,
            y: 114,
            textAlign: cc.TEXT_ALIGNMENT_LEFT,
            verticalAlign: cc.VERTICAL_TEXT_ALIGNMENT_CENTER,
            string: Localize[lang]['yourScore'] + ':'
        });
        scoreArea.addChild(yourScoreLabel);

        var yourScore = ccui.Text.create();
        yourScore.attr({
            color: cc.color(255, 210, 0),
            fontSize: 58,
            x: 250,
            y: 50,
            textAlign: cc.TEXT_ALIGNMENT_CENTER,
            verticalAlign: cc.VERTICAL_TEXT_ALIGNMENT_CENTER,
            string: totalScore
        });
        scoreArea.addChild(yourScore);

        var line = ccui.Layout.create();
        line.setBackGroundColorType(ccui.Layout.BG_COLOR_SOLID);
        line.setBackGroundColor(cc.color(208, 208, 208));
        line.setContentSize(cc.size(496, 2));
        line.attr({
            x: 72,
            y: -221
        });
        self.addChild(line);

        var showPopup = function (tool) {
            curTool = tool;
            alpha.enabled = alpha.visible = buyPopup.enabled = buyPopup.visible = true;
            amountText.string = 1;
        };
        var closePopup = function () {
            alpha.enabled = alpha.visible = buyPopup.enabled = buyPopup.visible = false;
        };
        var curTool;

        // stop
        var stopArea = ccui.Layout.create();
        stopArea.setBackGroundColorType(ccui.Layout.BG_COLOR_SOLID);
        stopArea.setBackGroundColor(cc.color(255, 255, 255));
        stopArea.setSize(cc.size(494, 150));
        stopArea.x = 72;
        stopArea.y = -384;
        self.addChild(stopArea);

        var stopIcon = ccui.ImageView.create();
        stopIcon.loadTexture(res.stop, texType);
        stopIcon.attr({
            x: 35,
            y: 110
        });
        stopArea.addChild(stopIcon);

        var stopCount = ccui.Text.create();
        stopCount.attr({
            color: cc.color(0, 0, 0),
            fontSize: 32,
            x: 35,
            y: 30,
            textAlign: cc.TEXT_ALIGNMENT_LEFT,
            verticalAlign: cc.VERTICAL_TEXT_ALIGNMENT_CENTER,
            string: stopLeft
        });
        stopArea.addChild(stopCount);

        var stopText = ccui.Text.create();
        stopText.attr({
            anchorX: 0,
            anchorY: 1,
            color: cc.color(150, 150, 150),
            fontSize: 22,
            x: 80,
            y: 138,
            textAlign: cc.TEXT_ALIGNMENT_LEFT,
            verticalAlign: cc.VERTICAL_TEXT_ALIGNMENT_TOP,
            string: Localize[lang]['stop']
        });
        stopText.setTextAreaSize(cc.size(400, 70));
        stopArea.addChild(stopText);

        var stopBuyBtn = ccui.Button.create();
        stopBuyBtn.setScale9Enabled(true);
        stopBuyBtn.setCapInsets(cc.rect(1, 1, 1, 1));
        stopBuyBtn.loadTextures(res.btn4, res.btn4, null, texType);
        stopBuyBtn.setContentSize(cc.size(150, 50));
        stopBuyBtn.setPressedActionEnabled(true);
        stopBuyBtn.attr({
            x: 412,
            y: 31
        });
        stopBuyBtn.addTouchEventListener(function (sender, type) {
            if (type == ccui.Widget.TOUCH_ENDED) {
                showPopup('stop');
            }
        }, stopArea);
        stopArea.addChild(stopBuyBtn);

        var stopBuyText = ccui.Text.create();
        stopBuyText.attr({
            color: cc.color(255, 255, 255),
            fontSize: 22,
            x: 76,
            y: 36,
            textAlign: cc.TEXT_ALIGNMENT_CENTER,
            verticalAlign: cc.VERTICAL_TEXT_ALIGNMENT_CENTER,
            string: Localize[lang]['buy']
        });
        stopBuyBtn.addChild(stopBuyText);

        var stopPrice = ccui.Text.create();
        stopPrice.attr({
            color: cc.color(255, 210, 0),
            fontSize: 18,
            x: 76,
            y: 12,
            textAlign: cc.TEXT_ALIGNMENT_CENTER,
            verticalAlign: cc.VERTICAL_TEXT_ALIGNMENT_CENTER,
            string: STOP_PRICE
        });
        stopBuyBtn.addChild(stopPrice);

        // single
        var singleArea = ccui.Layout.create();
        singleArea.setBackGroundColorType(ccui.Layout.BG_COLOR_SOLID);
        singleArea.setBackGroundColor(cc.color(255, 255, 255));
        singleArea.setSize(cc.size(494, 150));
        singleArea.x = 72;
        singleArea.y = -556;
        self.addChild(singleArea);

        var singleIcon = ccui.ImageView.create();
        singleIcon.loadTexture(res.single, texType);
        singleIcon.attr({
            x: 35,
            y: 110
        });
        singleArea.addChild(singleIcon);

        var singleCount = ccui.Text.create();
        singleCount.attr({
            color: cc.color(0, 0, 0),
            fontSize: 32,
            x: 35,
            y: 30,
            textAlign: cc.TEXT_ALIGNMENT_LEFT,
            verticalAlign: cc.VERTICAL_TEXT_ALIGNMENT_CENTER,
            string: singleLeft
        });
        singleArea.addChild(singleCount);

        var singleText = ccui.Text.create();
        singleText.attr({
            anchorX: 0,
            anchorY: 1,
            color: cc.color(150, 150, 150),
            fontSize: 22,
            x: 80,
            y: 138,
            textAlign: cc.TEXT_ALIGNMENT_LEFT,
            verticalAlign: cc.VERTICAL_TEXT_ALIGNMENT_TOP,
            string: Localize[lang]['single1']
        });
        singleText.setTextAreaSize(cc.size(400, 70));
        singleArea.addChild(singleText);

        var singleBuyBtn = ccui.Button.create();
        singleBuyBtn.setScale9Enabled(true);
        singleBuyBtn.setCapInsets(cc.rect(1, 1, 1, 1));
        singleBuyBtn.loadTextures(res.btn4, res.btn4, null, texType);
        singleBuyBtn.setContentSize(cc.size(150, 50));
        singleBuyBtn.setPressedActionEnabled(true);
        singleBuyBtn.attr({
            x: 412,
            y: 31
        });
        singleBuyBtn.addTouchEventListener(function (sender, type) {
            if (type == ccui.Widget.TOUCH_ENDED) {
                showPopup('single');
            }
        }, singleArea);
        singleArea.addChild(singleBuyBtn);

        var singleBuyText = ccui.Text.create();
        singleBuyText.attr({
            color: cc.color(255, 255, 255),
            fontSize: 22,
            x: 76,
            y: 36,
            textAlign: cc.TEXT_ALIGNMENT_CENTER,
            verticalAlign: cc.VERTICAL_TEXT_ALIGNMENT_CENTER,
            string: Localize[lang]['buy']
        });
        singleBuyBtn.addChild(singleBuyText);

        var singlePrice = ccui.Text.create();
        singlePrice.attr({
            color: cc.color(255, 210, 0),
            fontSize: 18,
            x: 76,
            y: 12,
            textAlign: cc.TEXT_ALIGNMENT_CENTER,
            verticalAlign: cc.VERTICAL_TEXT_ALIGNMENT_CENTER,
            string: SINGLE_PRICE
        });
        singleBuyBtn.addChild(singlePrice);

        // same
        var sameArea = ccui.Layout.create();
        sameArea.setBackGroundColorType(ccui.Layout.BG_COLOR_SOLID);
        sameArea.setBackGroundColor(cc.color(255, 255, 255));
        sameArea.setSize(cc.size(494, 150));
        sameArea.x = 72;
        sameArea.y = -726;
        self.addChild(sameArea);

        var sameIcon = ccui.ImageView.create();
        sameIcon.loadTexture(res.same, texType);
        sameIcon.attr({
            x: 35,
            y: 110
        });
        sameArea.addChild(sameIcon);

        var sameCount = ccui.Text.create();
        sameCount.attr({
            color: cc.color(0, 0, 0),
            fontSize: 32,
            x: 35,
            y: 30,
            textAlign: cc.TEXT_ALIGNMENT_LEFT,
            verticalAlign: cc.VERTICAL_TEXT_ALIGNMENT_CENTER,
            string: sameLeft
        });
        sameArea.addChild(sameCount);

        var sameText = ccui.Text.create();
        sameText.attr({
            anchorX: 0,
            anchorY: 1,
            color: cc.color(150, 150, 150),
            fontSize: 22,
            x: 80,
            y: 138,
            textAlign: cc.TEXT_ALIGNMENT_LEFT,
            verticalAlign: cc.VERTICAL_TEXT_ALIGNMENT_TOP,
            string: Localize[lang]['same']
        });
        sameText.setTextAreaSize(cc.size(400, 70));
        sameArea.addChild(sameText);

        var sameBuyBtn = ccui.Button.create();
        sameBuyBtn.setScale9Enabled(true);
        sameBuyBtn.setCapInsets(cc.rect(1, 1, 1, 1));
        sameBuyBtn.loadTextures(res.btn4, res.btn4, null, texType);
        sameBuyBtn.setContentSize(cc.size(150, 50));
        sameBuyBtn.setPressedActionEnabled(true);
        sameBuyBtn.attr({
            x: 412,
            y: 31
        });
        sameBuyBtn.addTouchEventListener(function (sender, type) {
            if (type == ccui.Widget.TOUCH_ENDED) {
                showPopup('same');
            }
        }, sameArea);
        sameArea.addChild(sameBuyBtn);

        var sameBuyText = ccui.Text.create();
        sameBuyText.attr({
            color: cc.color(255, 255, 255),
            fontSize: 22,
            x: 76,
            y: 36,
            textAlign: cc.TEXT_ALIGNMENT_CENTER,
            verticalAlign: cc.VERTICAL_TEXT_ALIGNMENT_CENTER,
            string: Localize[lang]['buy']
        });
        sameBuyBtn.addChild(sameBuyText);

        var samePrice = ccui.Text.create();
        samePrice.attr({
            color: cc.color(255, 210, 0),
            fontSize: 18,
            x: 76,
            y: 12,
            textAlign: cc.TEXT_ALIGNMENT_CENTER,
            verticalAlign: cc.VERTICAL_TEXT_ALIGNMENT_CENTER,
            string: SAME_PRICE
        });
        sameBuyBtn.addChild(samePrice);

        var checkScore = function () {
            stopBuyBtn.setTouchEnabled(totalScore >= STOP_PRICE);
            singleBuyBtn.setTouchEnabled(totalScore >= SINGLE_PRICE);
            sameBuyBtn.setTouchEnabled(totalScore >= SAME_PRICE);
        };
        checkScore();

        var alpha = ccui.Layout.create();
        alpha.setBackGroundColorType(ccui.Layout.BG_COLOR_SOLID);
        alpha.setBackGroundColor(cc.color(0, 0, 0));
        alpha.setBackGroundColorOpacity(128);
        alpha.setSize(winSize);
        alpha.attr({
            y: -winSize.height,
            zIndex: 100,
            touchEnabled: true,
            enabled: false,
            visible: false
        });
        self.addChild(alpha);

        var buyPopup = ccui.Layout.create();
        buyPopup.setBackGroundColorType(ccui.Layout.BG_COLOR_SOLID);
        buyPopup.setBackGroundColor(cc.color(246, 246, 246));
        buyPopup.setSize(cc.size(462, 270));
        buyPopup.attr({
            x: winSize.width / 2 - 231,
            y: -winSize.height / 2 - 135,
            zIndex: 101
        });
        self.addChild(buyPopup);

        var minusBtn = ccui.Button.create();
        minusBtn.loadTextures(res.minus, res.minus, null, texType);
        minusBtn.setPressedActionEnabled(true);
        minusBtn.attr({
            x: 102,
            y: 180
        });
        minusBtn.addTouchEventListener(function (sender, type) {
            if (type == ccui.Widget.TOUCH_ENDED) {
                if (amountText.string > 1) {
                    amountText.string = (amountText.string >> 0) - 1;
                }
            }
        }, buyPopup);
        buyPopup.addChild(minusBtn);

        var amountBg = ccui.Layout.create();
        amountBg.setBackGroundColorType(ccui.Layout.BG_COLOR_SOLID);
        amountBg.setBackGroundColor(cc.color(255, 255, 255));
        amountBg.setSize(cc.size(150, 70));
        amountBg.attr({
            x: 151,
            y: 145
        });
        buyPopup.addChild(amountBg);

        var amountText = ccui.Text.create();
        amountText.attr({
            color: cc.color(144, 144, 144),
            fontSize: 38,
            x: 224,
            y: 178,
            textAlign: cc.TEXT_ALIGNMENT_CENTER,
            verticalAlign: cc.VERTICAL_TEXT_ALIGNMENT_CENTER,
            string: 1
        });
        buyPopup.addChild(amountText);

        var addBtn = ccui.Button.create();
        addBtn.loadTextures(res.add, res.add, null, texType);
        addBtn.setPressedActionEnabled(true);
        addBtn.attr({
            x: 353,
            y: 180
        });
        addBtn.addTouchEventListener(function (sender, type) {
            if (type == ccui.Widget.TOUCH_ENDED) {
                var price;
                switch (curTool) {
                    case 'stop':
                        price = STOP_PRICE;
                        break;
                    case 'single':
                        price = SINGLE_PRICE;
                        break;
                    case 'same':
                        price = SAME_PRICE;
                        break;
                }
                var amount = (amountText.string >> 0) + 1;
                if (totalScore >= price * amount) {
                    amountText.string = amount;
                }
            }
        }, buyPopup);
        buyPopup.addChild(addBtn);

        var buyBtn = ccui.Button.create();
        buyBtn.setScale9Enabled(true);
        buyBtn.setCapInsets(cc.rect(1, 1, 1, 1));
        buyBtn.loadTextures(res.btn4, res.btn4, null, texType);
        buyBtn.setContentSize(cc.size(260, 80));
        buyBtn.setTitleText(Localize[lang]['buy']);
        buyBtn.setTitleFontSize(38);
        buyBtn.setPressedActionEnabled(true);
        buyBtn.attr({
            x: 230,
            y: 68
        });
        buyBtn.addTouchEventListener(function (sender, type) {
            if (type == ccui.Widget.TOUCH_ENDED) {
                var price, amount = amountText.string >> 0;
                switch (curTool) {
                    case 'stop':
                        price = STOP_PRICE;
                        stopLeft += amount;
                        stopCount.string = stopLeft;
                        break;
                    case 'single':
                        price = SINGLE_PRICE;
                        singleLeft += amount;
                        singleCount.string = singleLeft;
                        break;
                    case 'same':
                        price = SAME_PRICE;
                        sameLeft += amount;
                        sameCount.string = sameLeft;
                        break;
                }
                totalScore -= price * amount;
                yourScore.string = totalScore;
                checkScore();
                closePopup();
            }
        }, buyPopup);
        buyPopup.addChild(buyBtn);

        var closeBtn = ccui.Button.create();
        closeBtn.setScale9Enabled(true);
        closeBtn.setCapInsets(cc.rect(1, 1, 1, 1));
        closeBtn.loadTextures(res.btn4, res.btn4, null, texType);
        closeBtn.setContentSize(cc.size(40, 40));
        closeBtn.setTitleText('X');
        closeBtn.setTitleFontSize(20);
        closeBtn.setPressedActionEnabled(true);
        closeBtn.attr({
            x: 440,
            y: 248
        });
        closeBtn.addTouchEventListener(function (sender, type) {
            if (type == ccui.Widget.TOUCH_ENDED) {
                closePopup();
            }
        }, buyPopup);
        buyPopup.addChild(closeBtn);

        buyPopup.enabled = buyPopup.visible = false;

        var startBtn = ccui.Button.create();
        startBtn.setScale9Enabled(true);
        startBtn.setCapInsets(cc.rect(1, 1, 1, 1));
        startBtn.loadTextures(res.btn4, res.btn4, null, texType);
        startBtn.setContentSize(cc.size(288, 70));
        startBtn.setTitleText(Localize[lang]['start']);
        startBtn.setTitleFontSize(40);
        startBtn.setPressedActionEnabled(true);
        startBtn.attr({
            x: winSize.width / 2,
            y: -773
        });
        startBtn.addTouchEventListener(function (sender, type) {
            if (type == ccui.Widget.TOUCH_ENDED) {
                director.runScene(new LevelScene());
            }
        }, self);
        self.addChild(startBtn);

        return true;
    }
});
var ShopScene = cc.Scene.extend({
    onEnter: function () {
        this._super();
        var layer = new ShopLayer();
        this.addChild(layer);
    }
});