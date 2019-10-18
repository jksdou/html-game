var LevelLayer = cc.Layer.extend({
    sprite: null,
    ctor: function () {
        var self = this;
        self._super();
        self.y = winSize.height;

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

        var pointLabel = ccui.Text.create();
        pointLabel.attr({
            anchorY: 0,
            color: cc.color(0, 0, 0),
            fontSize: 44,
            x: winSize.width / 2,
            y: -320,
            textAlign: cc.TEXT_ALIGNMENT_CENTER,
            verticalAlign: cc.VERTICAL_TEXT_ALIGNMENT_BOTTOM,
            string: Localize[lang]['scoreNeeded']
        });
        pointLabel.setTextAreaSize(cc.size(560, winSize.height));
        self.addChild(pointLabel);

        scoreNeeded = Levels[curLevel - 1].score;

        var point = ccui.Text.create();
        point.attr({
            anchorY: 1,
            color: cc.color(252, 68, 69),
            fontSize: 106,
            x: winSize.width / 2,
            y: -324,
            textAlign: cc.TEXT_ALIGNMENT_CENTER,
            verticalAlign: cc.VERTICAL_TEXT_ALIGNMENT_TOP,
            string: scoreNeeded
        });
        point.setTextAreaSize(cc.size(408, winSize.height));
        self.addChild(point);

        var enterBtn = ccui.Button.create();
        enterBtn.setScale9Enabled(true);
        enterBtn.setCapInsets(cc.rect(1, 1, 1, 1));
        enterBtn.loadTextures(res.btn1, res.btn1, null, texType);
        enterBtn.setContentSize(cc.size(360, 110));
        enterBtn.setTitleText(Localize[lang]['begin']);
        enterBtn.setTitleFontSize(44);
        enterBtn.setPressedActionEnabled(true);
        enterBtn.attr({
            x: winSize.width / 2,
            y: -704
        });
        enterBtn.addTouchEventListener(function (sender, type) {
            if (type == ccui.Widget.TOUCH_ENDED) {
                director.runScene(new GameScene()); 
            }
        }, self);
        self.addChild(enterBtn);

        return true;

    }
});
var LevelScene = cc.Scene.extend({
    onEnter: function () {
        this._super();
        var layer = new LevelLayer();
        this.addChild(layer);
    }
});
