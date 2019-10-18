/**
 * Created by lennylin on 2014/10/10.
 */
var IS_QQBrowse = false;
function getProxy(value,funF)
{
    var f = function(event)
    {
        funF.apply(value,[event])
    }
    return f;
}

StageManager._interfac = null
StageManager.WIDTH = 640;
StageManager.HEIGHT = 960;
StageManager.FRAME = 30
StageManager.SCALE = StageManager.WIDTH/StageManager.HEIGHT;
function StageManager()
{
    if(StageManager._interfac) throw "Stage Error";
}
StageManager.getInstance = function()
{
    return  StageManager._interfac == null ?  StageManager._interfac = new StageManager():StageManager._interfac;
}
StageManager.prototype.resizeCanvas = function()
{
    var scale = 0
    var w=window.innerWidth;
    var h=window.innerHeight;

    if(StageManager.SCALE>(w/h))
    {
        scale=w/StageManager.WIDTH;

//        this.StageType = "H"
    } else  {
//        this.StageType  = "V"
        scale=h/StageManager.HEIGHT;


    }

        switch (window.orientation)
        {
            case 0:
                this.StageType = "H"
                break;
            case -90:
                this.StageType = "V"
                break;
            case 90:
                this.StageType = "V"
                break;
            case 180:
                this.StageType = "H"
                break;


        }




    if (this.loadicon) {
        this.loadicon.style.left = (w / 2 - 15) + "px";
        this.loadicon.style.top = (h / 2 - 30) + "px";
    }
    this.__defineGetter__("scale",function()
    {
        return  scale;
    });

    var sh = (h/(StageManager.HEIGHT*scale));
    var sw = (w/(StageManager.WIDTH*scale));
    this.StageWidth =sw *StageManager.WIDTH
    this.StageHeight = sh * StageManager.HEIGHT
    canvas.width= w;
    canvas.height= h;
    for (var i in this.list) {
        if (this.list[i ] &&this.list[i].resize)
            this.list[i].resize(w, h)
    }

}
StageManager.prototype.add = function(value)
{
    this.remove(value);
    this.list.push(value);
}
StageManager.prototype.remove = function(value)
{
    var tid = this.list.indexOf(value);
    if (tid !=-1) this.list.splice(tid,1);
}
StageManager.prototype.removeAll = function()
{
    for (var i in this.list)
    {
        delete this.list[i]
    }
    this.list = [];
}

StageManager.prototype.initialize = function()
{
    this.list = []
    this.setupCanvas("canvas");
    this.loadicon = document.getElementById("loadicon");
    window.onresize= getProxy(this,this.resizeCanvas);
    window.orientationChange =getProxy(this,this.resizeCanvas)
    this.loader({name:"loaderLib",src:"src/loader.js",lib:"loaderImages"})
    this.resizeCanvas()

}
StageManager.prototype.setupCanvas = function(value)
{
    this.canvas = document.getElementById(value);
    var scene = new createjs.Container();
    scene.nominalBounds = new createjs.Rectangle(0,0,StageManager.WIDTH,StageManager.HEIGHT);
    var stage = new createjs.Stage(  this.canvas);
    stage.addChild(scene);

    stage.update();
    createjs.Ticker.setFPS(StageManager.FRAME);
//    createjs.Ticker.timingMode = createjs.Ticker.RAF;
    createjs.Ticker.addEventListener("tick", stage);
    createjs.Touch.enable(stage);
    this.game = new GameScene();
    this.gameErrorScene = new GameErrorScene()
    this.add(this.game)
    this.gameErrorScene.visible =false;
    this.add(this.gameErrorScene)
    scene.addChild(this.game)
    scene.addChild(this.gameErrorScene)
    this.__defineGetter__("scene",function()
    {
        return stage;
    });
    this.__defineGetter__("root",function()
    {
        return  scene;
    });
}
StageManager.prototype.loader = function(value)
{
    var loader = new LoaderManager();
    loader.addLib(value);
    var _this = this;

    loader.addEventListener("complete", function()
    {
        if (value.name == "loaderLib") {
            if (document.getElementById("loadicon").style.display != "none")
                document.getElementById("loadicon").style.display = "none";

            _this.game.addChild(loaderLib.loader)
            _this.loader({name:"gameLib",src:"src/game.js",lib:"gameImages"})

        }else
        {
            _this.startGame();
        }
    });
    loader.addEventListener("progress",function(e)
    {
        if (value.name != "loaderLib")
        {
            loaderLib.loader.setScale(e.currentTarget.progress)
        }
    })
    loader.start()
}
StageManager.prototype.startGame = function()
{
    this.game.removeChild(loaderLib.loader)
    this.game.addChild(new GameInfo())
    this.resizeCanvas()
}
//======================================================================================================================
function Component ()
{
    this.initialize();


}
Component.prototype = new createjs.Container();
Component.prototype.container_init = Component.prototype.initialize;
Component.prototype.initialize = function()
{
    this.container_init();
}
//======================================================================================================================
function GameErrorScene ()
{
    this.initialize();
    this.initUI()
}
GameErrorScene.prototype.__proto__ = Component.prototype;
GameErrorScene.prototype.initUI =function()
{
    this.pre = StageManager.StageHeight/StageManager.StageWidth;
    this.shape = new  createjs.Shape();
    this.addChild(this.shape);
    this.bit = new createjs.Bitmap("images/scene.png");
    this.addChild(this.bit)
    this.resize();

}
GameErrorScene.prototype.resize =function(w,h)
{
    var w=window.innerWidth;
    var h=window.innerHeight;
    var scale = w/960
    this.scaleX = this.scaleY = scale;
    var sh = (h/(640*scale));
    var sw = (w/(960*scale));
    var pe = sh*960
    //this.y =p/2;

    this.y =(h-640*scale)/2;
    this.bit.x = (960-244)/2;

    this.bit.y = (640*scale-209)/2
    this.visible =  (StageManager.getInstance().StageType =="V");

}
//======================================================================================================================
function GameScene ()
{
this.initialize();
}
GameScene.prototype.__proto__ = Component.prototype

GameScene.prototype.resize = function (w,h)
{

    var scale = StageManager.getInstance().scale;

    this.scaleX = this.scaleY =scale
    this.x =(w-StageManager.WIDTH*scale)/2;
    this.visible =  (StageManager.getInstance().StageType !="V")

    for(var i=0;i<this.getNumChildren();i++)
    {
        var s = this.getChildAt(i);

        if (s.resize)
        {
            s.resize(w,h)
        }
    }
}
//======================================================================================================================


//GameScene.prototype/*  |xGv00|9c8df601c5b25f8b2223caa837503628 */