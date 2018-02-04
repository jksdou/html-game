egret_h5.startGame = function() {
    var context = egret.MainContext.instance;
    context.touchContext = new egret.HTML5TouchContext();
    context.deviceContext = new egret.HTML5DeviceContext();
    context.netContext = new egret.HTML5NetContext();

    egret.StageDelegate.getInstance().setDesignSize(480, 800);
    context.stage = new egret.Stage();
    var scaleMode = egret.MainContext.deviceType == egret.MainContext.DEVICE_MOBILE ? egret.StageScaleMode.SHOW_ALL : egret.StageScaleMode.NO_SCALE;
    context.stage.scaleMode = scaleMode;

    //WebGL是egret的Beta特性，默认关闭
    var rendererType = 0;
    if (rendererType == 1) { // egret.WebGLUtils.checkCanUseWebGL()) {
        context.rendererContext = new egret.WebGLRenderer();
    } else {
        context.rendererContext = new egret.HTML5CanvasRenderer();
    }

    egret.MainContext.instance.rendererContext.texture_scale_factor = 1;
    context.run();

    var rootClass;
    if (document_class) {
        rootClass = egret.getDefinitionByName(document_class);
    }
    if (rootClass) {
        var rootContainer = new rootClass();
        if (rootContainer instanceof egret.DisplayObjectContainer) {
            context.stage.addChild(rootContainer);
        } else {
            throw new Error("文档类必须是egret.DisplayObjectContainer的子类!");
        }
    } else {
        throw new Error("找不到文档类！");
    }

    //处理屏幕大小改变
    var resizeTimer = null;
    var doResize = function() {
        context.stage.changeSize();
        resizeTimer = null;
    };
    window.onresize = function() {
        if (resizeTimer == null) {
            resizeTimer = setTimeout(doResize, 300);
        }
    };
};