var MenuLayer = cc.Layer.extend({
    sprite: null,
    ctor: function () {
        var self = this;


        self._super();
        self.y = winSize.height;

        var logo = ccui.ImageView.create();
        logo.loadTexture(res.logo, texType);
        logo.attr({
            x: winSize.width / 2,
            y: -128
        });
        self.addChild(logo);


        var line = ccui.Layout.create();
        line.setBackGroundColorType(ccui.Layout.BG_COLOR_SOLID);
        line.setBackGroundColor(cc.color(208, 208, 208));
        line.setContentSize(cc.size(496, 2));
        line.attr({
            x: 72,
            y: -221
        });
        self.addChild(line);

        var text = ccui.Text.create();
        text.attr({
            anchorY: 0,
            color: cc.color(40, 127, 91),
            fontSize: 40,
            x: winSize.width / 2,
            y: -596,
            textAlign: cc.TEXT_ALIGNMENT_CENTER,
            verticalAlign: cc.VERTICAL_TEXT_ALIGNMENT_BOTTOM,
            string: Localize[lang]['goal']
        });
        text.setTextAreaSize(cc.size(408, winSize.height));
        self.addChild(text);


        var enterBtn = ccui.Button.create();
        enterBtn.setScale9Enabled(true);
        enterBtn.setCapInsets(cc.rect(1, 1, 1, 1));
        enterBtn.loadTextures(res.btn1, res.btn1, null, texType);
        enterBtn.setContentSize(cc.size(360, 110));
        enterBtn.setTitleText(Localize[lang]['start']);
        enterBtn.setTitleFontSize(44);
        enterBtn.setPressedActionEnabled(true);
        enterBtn.attr({
            x: winSize.width / 2,
            y: -670
        });
        enterBtn.addTouchEventListener(function (sender, type) {
            if (type == ccui.Widget.TOUCH_ENDED) {
                director.runScene(new LevelScene());
            }
        }, self);
        self.addChild(enterBtn);

        var shopBtn = ccui.Button.create();
        shopBtn.setScale9Enabled(true);
        shopBtn.setCapInsets(cc.rect(1, 1, 1, 1));
        shopBtn.loadTextures(res.btn4, res.btn4, null, texType);
        shopBtn.setContentSize(cc.size(288, 70));
        shopBtn.setTitleText(Localize[lang]['shop']);
        shopBtn.setTitleFontSize(40);
        shopBtn.setPressedActionEnabled(true);
        shopBtn.attr({
            x: winSize.width / 2,
            y: -773
        });
        shopBtn.addTouchEventListener(function (sender, type) {
            if (type == ccui.Widget.TOUCH_ENDED) {
                director.runScene(new ShopScene());
            }
        }, self);
        self.addChild(shopBtn);

        var tutorialPV = ccui.PageView.create();
        tutorialPV.addEventListenerPageView(function (sender, type) {
            if (type == ccui.PageView.EVENT_TURNING) {
                for (var i = 0; i < dots.length; i++) {
                    var dot = dots[i];

                    if (dot.name == 'dot' + sender.getCurPageIndex()) {
                        dots[i].loadTexture(res.dot_current, texType);
                    } else {
                        dots[i].loadTexture(res.dot, texType);
                    }
                }
            }
        }, self);
        tutorialPV.y = -winSize.height;
        tutorialPV.setSize(winSize);


        var page1 = ccui.Layout.create();
        page1.setBackGroundColorType(ccui.Layout.BG_COLOR_SOLID);
        page1.setBackGroundColor(cc.color(246, 246, 246));
        tutorialPV.addPage(page1);

        var p1Bar = ccui.Layout.create();
        p1Bar.setBackGroundColorType(ccui.Layout.BG_COLOR_SOLID);
        p1Bar.setBackGroundColor(cc.color(111, 168, 233));
        p1Bar.setSize(cc.size(winSize.width, 100));
        p1Bar.y = winSize.height - 137;
        page1.addChild(p1Bar);

        var p1Title = ccui.Text.create();
        p1Title.attr({
            color: cc.color(255, 255, 255),
            fontSize: 40,
            x: winSize.width / 2,
            y: 50,
            textAlign: cc.TEXT_ALIGNMENT_CENTER,
            verticalAlign: cc.VERTICAL_TEXT_ALIGNMENT_CENTER,
            string: Localize[lang]['htp']
        });
        p1Bar.addChild(p1Title);

        var p1Logo = ccui.ImageView.create();
        p1Logo.loadTexture(res.logo, texType);
        p1Logo.attr({
            x: winSize.width / 2,
            y: 468
        });
        page1.addChild(p1Logo);

        var sgLogo = ccui.ImageView.create();
        sgLogo.loadTexture(res.logo_ingame);
        sgLogo.attr({
            x: winSize.width / 2,
            y: 55,
            touchEnabled: true
        });
        sgLogo.addTouchEventListener(function (sender, type) {
            if (type == ccui.Widget.TOUCH_ENDED) {
                window.location.href = 'http://m.softgames.de';
            }
        }, page1);
        page1.addChild(sgLogo);


        var page2 = ccui.Layout.create();
        page2.setBackGroundColorType(ccui.Layout.BG_COLOR_SOLID);
        page2.setBackGroundColor(cc.color(246, 246, 246));
        tutorialPV.addPage(page2);

        var p2Bar = ccui.Layout.create();
        p2Bar.setBackGroundColorType(ccui.Layout.BG_COLOR_SOLID);
        p2Bar.setBackGroundColor(cc.color(111, 168, 233));
        p2Bar.setSize(cc.size(winSize.width, 100));
        p2Bar.y = winSize.height - 137;
        page2.addChild(p2Bar);

        var p2Title = ccui.Text.create();
        p2Title.attr({
            color: cc.color(255, 255, 255),
            fontSize: 40,
            x: winSize.width / 2,
            y: 50,
            textAlign: cc.TEXT_ALIGNMENT_CENTER,
            verticalAlign: cc.VERTICAL_TEXT_ALIGNMENT_CENTER,
            string: Localize[lang]['htp2']
        });
        p2Title.setTextAreaSize(cc.size(600, winSize.height));
        p2Bar.addChild(p2Title);

        var p2Pic = ccui.ImageView.create();
        p2Pic.loadTexture(res.htp2, texType);
        p2Pic.attr({
            x: winSize.width / 2,
            y: 390
        });
        page2.addChild(p2Pic);

        var page3 = ccui.Layout.create();
        page3.setBackGroundColorType(ccui.Layout.BG_COLOR_SOLID);
        page3.setBackGroundColor(cc.color(246, 246, 246));
        tutorialPV.addPage(page3);

        var p3Bar = ccui.Layout.create();
        p3Bar.setBackGroundColorType(ccui.Layout.BG_COLOR_SOLID);
        p3Bar.setBackGroundColor(cc.color(111, 168, 233));
        p3Bar.setSize(cc.size(winSize.width, 100));
        p3Bar.y = winSize.height - 137;
        page3.addChild(p3Bar);

        var p3Title = ccui.Text.create();
        p3Title.attr({
            color: cc.color(255, 255, 255),
            fontSize: 40,
            x: winSize.width / 2,
            y: 50,
            textAlign: cc.TEXT_ALIGNMENT_CENTER,
            verticalAlign: cc.VERTICAL_TEXT_ALIGNMENT_CENTER,
            string: Localize[lang]['htp31']
        });
        p3Bar.addChild(p3Title);

        var p3Bar1 = ccui.Layout.create();
        p3Bar1.setBackGroundColorType(ccui.Layout.BG_COLOR_SOLID);
        p3Bar1.setBackGroundColor(cc.color(39, 205, 137));
        p3Bar1.setSize(cc.size(winSize.width, 60));
        p3Bar1.y = winSize.height - 197;
        page3.addChild(p3Bar1);

        var p3Title1 = ccui.Text.create();
        p3Title1.attr({
            color: cc.color(255, 255, 255),
            fontSize: 28,
            x: winSize.width / 2,
            y: 30,
            textAlign: cc.TEXT_ALIGNMENT_CENTER,
            verticalAlign: cc.VERTICAL_TEXT_ALIGNMENT_CENTER,
            string: Localize[lang]['htp32']
        });
        p3Bar1.addChild(p3Title1);

        var p3Pic = ccui.ImageView.create();
        p3Pic.loadTexture(res.htp3, texType);
        p3Pic.attr({
            x: winSize.width / 2,
            y: 390
        });
        page3.addChild(p3Pic);

        var page4 = ccui.Layout.create();
        page4.setBackGroundColorType(ccui.Layout.BG_COLOR_SOLID);
        page4.setBackGroundColor(cc.color(246, 246, 246));
        tutorialPV.addPage(page4);

        var p4Bar = ccui.Layout.create();
        p4Bar.setBackGroundColorType(ccui.Layout.BG_COLOR_SOLID);
        p4Bar.setBackGroundColor(cc.color(111, 168, 233));
        p4Bar.setSize(cc.size(winSize.width, 100));
        p4Bar.y = winSize.height - 137;
        page4.addChild(p4Bar);

        var p4Title = ccui.Text.create();
        p4Title.attr({
            color: cc.color(255, 255, 255),
            fontSize: 40,
            x: winSize.width / 2,
            y: 50,
            textAlign: cc.TEXT_ALIGNMENT_CENTER,
            verticalAlign: cc.VERTICAL_TEXT_ALIGNMENT_CENTER,
            string: Localize[lang]['tools']
        });
        p4Title.setTextAreaSize(cc.size(600, winSize.height));
        p4Bar.addChild(p4Title);

        var stopIcon = ccui.ImageView.create();
        stopIcon.loadTexture(res.stop, texType);
        stopIcon.attr({
            x: 107,
            y: 592
        });
        page4.addChild(stopIcon);

        var stopText = ccui.Text.create();
        stopText.attr({
            anchorX: 0,
            color: cc.color(150, 150, 150),
            fontSize: 22,
            x: 172,
            y: 590,
            textAlign: cc.TEXT_ALIGNMENT_LEFT,
            verticalAlign: cc.VERTICAL_TEXT_ALIGNMENT_CENTER,
            string: Localize[lang]['stop']
        });
        stopText.setTextAreaSize(cc.size(400, 70));
        page4.addChild(stopText);

        var singleIcon = ccui.ImageView.create();
        singleIcon.loadTexture(res.single, texType);
        singleIcon.attr({
            x: 107,
            y: 452
        });
        page4.addChild(singleIcon);

        var singleText = ccui.Text.create();
        singleText.attr({
            anchorX: 0,
            color: cc.color(150, 150, 150),
            fontSize: 22,
            x: 172,
            y: 448,
            textAlign: cc.TEXT_ALIGNMENT_LEFT,
            verticalAlign: cc.VERTICAL_TEXT_ALIGNMENT_CENTER,
            string: Localize[lang]['single1']
        });
        singleText.setTextAreaSize(cc.size(400, 70));
        page4.addChild(singleText);

        var sameIcon = ccui.ImageView.create();
        sameIcon.loadTexture(res.same, texType);
        sameIcon.attr({
            x: 107,
            y: 312
        });
        page4.addChild(sameIcon);

        var sameText = ccui.Text.create();
        sameText.attr({
            anchorX: 0,
            color: cc.color(150, 150, 150),
            fontSize: 22,
            x: 172,
            y: 306,
            textAlign: cc.TEXT_ALIGNMENT_LEFT,
            verticalAlign: cc.VERTICAL_TEXT_ALIGNMENT_CENTER,
            string: Localize[lang]['same']
        });
        sameText.setTextAreaSize(cc.size(400, 70));
        page4.addChild(sameText);

        var beginBtn = ccui.Button.create();
        beginBtn.setScale9Enabled(true);
        beginBtn.setCapInsets(cc.rect(1, 1, 1, 1));
        beginBtn.loadTextures(res.btn3, res.btn3, null, texType);
        beginBtn.setContentSize(cc.size(216, 66));
        beginBtn.setTitleText(Localize[lang]['begin']);
        beginBtn.setTitleFontSize(40);
        beginBtn.setPressedActionEnabled(true);
        beginBtn.attr({
            x: winSize.width / 2,
            y: 74
        });
        beginBtn.addTouchEventListener(function (sender, type) {
            if (type == ccui.Widget.TOUCH_ENDED) {
                for (var i = 0; i < dots.length; i++) {
                    dots[i].removeFromParent();
                }
                tutorialPV.removeFromParent();
                pageBtn.removeFromParent();
            }
        }, self);
        page4.addChild(beginBtn);

        self.addChild(tutorialPV);


        //add prevBtn nextBtn
        function IsPC() {
            var userAgentInfo = navigator.userAgent;
            var Agents = new Array("Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod");
            var flag = true;
            for (var v = 0; v < Agents.length; v++) {
                if (userAgentInfo.indexOf(Agents[v]) > 0) {
                    flag = false;
                    break;
                }
            }
            return flag;
        }

        var isPC = IsPC();


        var pageBtn = ccui.Layout.create();
        pageBtn.setSize(cc.size(winSize.width, 60));
        pageBtn.attr({
            y: -winSize.height / 2,
            zIndex: 100,
            touchEnabled: true
        });

        var nextBtn = ccui.ImageView.create();
        nextBtn.loadTexture(res.right);
        nextBtn.attr({
            x: winSize.width - 40,
            y: 30,
            touchEnabled: true
        });


        var prevBtn = ccui.ImageView.create();
        prevBtn.loadTexture(res.left);
        prevBtn.attr({
            x: 40,
            y: 30,
            touchEnabled: true
        });

        if (isPC) {
            pageBtn.addChild(nextBtn);
            pageBtn.addChild(prevBtn);
            prevBtn.visible = false;
            nextBtn.addTouchEventListener(function (sender, type) {
                if (type == ccui.Widget.TOUCH_ENDED) {
                    tutorialPV.scrollToPage(tutorialPV.getCurPageIndex() + 1);
                    if (tutorialPV.getCurPageIndex() == 1) {
                        prevBtn.visible = true;
                    } else if (tutorialPV.getCurPageIndex() == 3) {
                        nextBtn.visible = false;
                    }

                }
            }, pageBtn);

            prevBtn.addTouchEventListener(function (sender, type) {
                if (type == ccui.Widget.TOUCH_ENDED) {
                    tutorialPV.scrollToPage(tutorialPV.getCurPageIndex() - 1);
                    if (tutorialPV.getCurPageIndex() == 2) {
                        nextBtn.visible = true;
                    } else if (tutorialPV.getCurPageIndex() == 0) {
                        prevBtn.visible = false;
                    }

                }
            }, pageBtn);
            self.addChild(pageBtn);
        }


        //add ending

        var pageLen = tutorialPV.getPages().length, dots = [];
        var dotWidth = 48 * pageLen + (pageLen - 1) * 24;
        for (var i = 0; i < pageLen; i++) {
            var dot = ccui.ImageView.create();
            dot.loadTexture(i == 0 ? res.dot_current : res.dot, texType);
            dot.attr({
                name: 'dot' + i,
                x: winSize.width / 2 - dotWidth / 2 + 24 + i * 72,
                y: -winSize.height + 144
            });
            self.addChild(dot);
            dots.push(dot);
        }


        return true;
    }
});
var MenuScene = cc.Scene.extend({
    onEnter: function () {
        this._super();
        var layer = new MenuLayer();
        this.addChild(layer);
    }

});