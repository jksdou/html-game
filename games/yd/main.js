var director, winSize, texType, scoreNeeded, curLevel = 1, totalScore = 0,
    stopLeft = 0, singleLeft = 0, sameLeft = 0;

cc.game.onStart = function(){
    cc.view.adjustViewPort(true);
    cc.view.setDesignResolutionSize(640, 836, cc.ResolutionPolicy.SHOW_ALL);
    cc.view.resizeWithBrowserSize(true);

    director = cc.director;
    winSize = director.getWinSize();

    //load resources
    Loading.preload(g_resources, function () {
        director.runScene(new MenuScene());
    }, this);
};
cc.game.run();