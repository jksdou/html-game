var Loading = cc.Scene.extend({
    _interval: null,
    _label: null,
    _className: "Loading",
    init: function () {
        var self = this;

        //loading percent
        var label = self._label = cc.LabelTTF.create(Localize[lang]['loading'] + '... 0%', 'Arial', 40);
        label.setPosition(winSize.width / 2, winSize.height / 2);
        label.setColor(cc.color(180, 180, 180));
        self.addChild(label);

        var logo = ccui.ImageView.create();
        logo.loadTexture(res.logo_ingame);
        logo.attr({
            x: winSize.width / 2,
            y: 55,
            touchEnabled: true
        });
        logo.addTouchEventListener(function (sender, type) {
            if (type == ccui.Widget.TOUCH_ENDED) {
                window.location.href = 'http://m.softgames.de';
            }
        }, self);
        self.addChild(logo);
        return true;
    },

    /**
     * custom onEnter
     */
    onEnter: function () {
        var self = this;
        cc.Node.prototype.onEnter.call(self);
        self.schedule(self._startLoading, 0.3);
    },

    /**
     * init with resources
     * @param {Array} resources
     * @param {Function|String} cb
     */
    initWithResources: function (resources, cb) {
        if (cc.isString(resources))
            resources = [resources];
        this.resources = resources || [];
        this.cb = cb;
    },

    _startLoading: function () {
        var self = this;
        self.unschedule(self._startLoading);
        var res = self.resources;
        cc.loader.load(res,
            function (result, count, loadedCount) {
                var percent = (loadedCount / count * 100) | 0;
                percent = Math.min(percent, 100);
                self._label.setString(Localize[lang]['loading'] + '... ' + percent + '%');
            }, function () {
                if (self.cb)
                    self.cb();
            });
    }
});
Loading.preload = function (resources, cb) {
    var _cc = cc;
    if (!_cc.loaderScene) {
        _cc.loaderScene = new Loading();
        _cc.loaderScene.init();
    }
    _cc.loaderScene.initWithResources(resources, cb);

    cc.director.runScene(_cc.loaderScene);
    return _cc.loaderScene;
};