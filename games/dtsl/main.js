cc.game.onStart = function () {
    cc.view.adjustViewPort(true);
    if (cc.sys.isMobile)
        cc.view.setDesignResolutionSize(320, 480, cc.ResolutionPolicy.SHOW_ALL);
    else cc.view.setDesignResolutionSize(320, 480, cc.ResolutionPolicy.SHOW_ALL);
    cc.view.resizeWithBrowserSize(true);
    //load resources
    cc.LoaderScene.preload(resources, function () {
        gameScene = new GameScene();
        cc.director.runScene(gameScene);
    }, this);
};

cc.game.run();