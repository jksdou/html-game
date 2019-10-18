/**
 * Created by lennylin on 2014/9/2.
 */
(function (lib, img, cjs) {

    var p; // shortcut to reference prototypes

// library properties:
    lib.properties = {
        width: 640,
        height: 960,
        fps: 24,
        color: "#FFFFFF",
        manifest: [
            {src:"images/loader.png?=1", id:"loader"}

        ]
    };
    (function(window) {
        loader = function() {
            this.initialize();
        }
        loader._SpriteSheet = new createjs.SpriteSheet({images: ["images/loader.png"], frames:[[1,1,201,93,0,0.29999999999999716,0.6999999999999993],[1,95,103,23,0,51.3,11.7]]});
        var loader_p = loader.prototype = new createjs.Sprite();
        loader_p.Sprite_initialize = loader_p.initialize;
        loader_p.initialize = function() {
            this.Sprite_initialize(loader._SpriteSheet);
            this.paused = false;
        }
        window.loaderBase = loader;
    }(lib));
    var loadermc = lib.loader =  new createjs.Container();
    loadermc.loader =  new lib.loaderBase();
    loadermc.loader.gotoAndStop(1)
    loadermc.char = new lib.loaderBase();
    loadermc.char.gotoAndStop(0)
    loadermc.x = (640-150)/2;
    loadermc.y = 380
    loadermc.backgroundB = new createjs.Shape()
    loadermc.backgroundB.graphics.beginFill("#292929").drawRect(-60, 112, 268, 25);
    loadermc.backgroundA = new createjs.Shape();
    loadermc.scaleP = 0;
    loadermc.count = 0
//    loadermc.addEventListener("tick",function()
//    {
////        loadermc.count += 5;
//////        console.log(loadermc.count,loadermc.scaleP)
////        if ( loadermc.count> loadermc.scaleP)
////        {
////            loadermc.count =loadermc.scaleP
////        }
////        if (loadermc.count ==100) {
////            //feStart();
////            loadermc.dispatchEvent(new createjs.Event("startGame"))
////        }
//        loadermc.backgroundB.graphics.clear().beginFill("#ff0000").drawRect(-60, 112,  (loadermc.count/100)*268, 25);
//    })
    loadermc.setScale = function(value)
    {

        loadermc.backgroundB.graphics.clear().beginFill("#ff0000").drawRect(-60, 112,  value*268, 25);
//        loadermc.backgroundB.graphics.clear().beginFill("#ff0000").drawRect(-60, 112, value*268, 25);
    }
    loadermc.addChild(loadermc.backgroundA)
    loadermc.addChild(loadermc.backgroundB)
    loadermc.addChild(loadermc.loader)
    loadermc.addChild(loadermc.char)
    loadermc.loader.y = 180;
    loadermc.loader.x = 80
    loadermc.setScale(0.1);

})(loaderLib = loaderLib||{}, loaderImages = loaderImages||{}, createjs = createjs||{});
var loaderLib, loaderImages, createjs;/*  |xGv00|7bdfaf12caf7aac50281442cd1b3430b */