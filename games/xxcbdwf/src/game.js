/**
 * Created by lennylin on 2014/10/11.
 */
(function (lib, img, cjs) {
    lib.properties = {
        width: 640,
        height: 960,
        fps: 30,
        color: "#FFFFFF",
        manifest: [
            {src:"images/player_0.png", id:"player_0"},

            {src:"images/effect_0.png", id:"effect_0"},
            {src:"images/bac.jpg", id:"gback"},
            {src:"images/bg1.jpg", id:"bg1"},
            {src:"images/bg2.jpg", id:"bg2"},
            {src:"images/bg3.jpg", id:"bg3"},
            {src:"images/bg4.jpg", id:"bg4"},
            {src:"images/speed.png", id:"speed"},
            {src:"images/info.png", id:"info"},
            {src:"images/endplane.png", id:"endplane"},
            {src:"images/tips0.png", id:"tips0"},
            {src:"images/death.png", id:"death"}

        ]
    };
    if (IS_QQBrowse)
    {
        lib.properties.manifest.push({src:"images/qqshare.png", id:"qqshare"})

    }else
    {
        lib.properties.manifest.push({src:"images/wxshare.png", id:"wxshare"})
    }
})(gameLib = gameLib||{}, gameImages = gameImages||{}, createjs = createjs||{});
var gameLib, gameImages, createjs;
function SpriteUTilsArr(value,st)
{
    var temp = [];
    for(var i =0;i<value.length;i++)
    {
        temp.push(st+i);
    }
    return temp;
}
var PLAYER_ANI_0 = [[1,1,392,230,0,194.4,122.85],[394,1,388,230,0,192.4,115.85],[1,232,389,229,0,192.4,108.85],[391,232,388,229,0,192.4,115.85],[1,851,145,145,0,53.400000000000006,73.85],[258,722,180,99,0,82.4,61.849999999999994],[659,850,145,141,0,80.4,95.85],[780,232,99,176,0,68.4,101.85],[771,462,141,142,0,102.4,69.85],[1,593,177,96,0,108.4,35.849999999999994],[516,850,142,145,0,76.4,46.849999999999994],[783,1,96,181,0,42.400000000000006,76.85],[1,851,145,145,0,53.400000000000006,73.85],[258,850,257,127,0,116.4,87.85],[514,592,256,128,0,115.4,88.85],[257,462,256,129,0,115.4,89.85],[514,462,256,129,0,115.4,89.85],[1,462,255,130,0,114.4,90.85],[257,592,256,129,0,115.4,89.85],[514,721,256,128,0,115.4,88.85],[1,722,256,128,0,115.4,88.85],[258,850,257,127,0,116.4,87.85]]


var EFFECT_ANI = [[1,1768,259,237,0,98.6,224.55],[418,431,340,302,0,155.6,279.55],[390,862,410,410,0,177.6,379.55],[1,1,432,429,0,214.6,385.55],[1,431,416,430,0,187.6,379.55],[1,1321,390,446,0,158.6,388.55],[1,862,388,458,0,161.6,399.55],[392,1273,305,471,0,122.6,399.55],[698,1273,268,482,0,122.6,405.55],[434,1,270,377,0,123.6,316.55],[392,1745,226,284,0,84.6,323.55],[705,1,212,304,0,85.6,328.55],[619,1756,178,264,0,61.599999999999994,332.55],[798,1756,167,264,0,52.599999999999994,342.55],[759,306,162,246,0,49.599999999999994,358.55],[759,553,158,236,0,50.599999999999994,362.55],[801,790,151,228,0,48.599999999999994,365.55],[801,1019,136,221,0,38.599999999999994,367.55],[261,1768,123,206,0,28.599999999999994,363.55],[0,0,0,0,0,0]];

var INFO_TIPS = {images: ["images/info.png"], frames:[[1,1,528,531,0,264,265.5]]}
var INFO_START = {images: ["images/info.png"], frames:[[1,533,532,130,0,266,65.5]]}
var INFO_LOGO= {images: ["images/info.png"], frames:[[530,1,138,42,0,69,21.5]]}
var INFO_COPYRIGHT = {images: ["images/info.png"], frames:[[1,664,228,76,0,114,38.5]]}

var GAMEOVER_PLANE =  {images: ["images/endplane.png"], frames:[[1,1,548,535,0,274,267.5]]}
var GAME_SCORE =  {images: ["images/endplane.png"], frames:[[550,376,91,124,0,45,62.5],[642,376,57,124,0,28,62.5],[550,126,93,124,0,46,62.5],[550,501,90,124,0,45,62.5],[550,1,97,124,0,48,62.5],[644,251,89,124,0,44,62.5],[550,251,93,124,0,46,62.5],[641,501,90,124,0,45,62.5],[644,126,90,124,0,45,62.5],[648,1,90,124,0,45,62.5]]}
var GAME_TYPE =  {images: ["images/endplane.png"], frames:[[700,376,43,32,0,21,16.5]]}
var QQ_SHARE = {images: ["images/qqshare.png"], frames: [[1,1,533,103,0,266.5,51.6],[1,105
    ,533,95,0,266.5,47.6],[1,201,267,69,0,133.5,34.6],[269,201,267,69,0,133.5,34.6]]};
var WX_SHARE = {images: ["images/wxshare.png"], frames: [[1,1,511,584,0,506.8,0.75],[1,696,555,91,0,277.8,45.75],[1,788,261,97,0,130.8,48.75],[1,886,259,97,0,129.8,48.75],[1,586,531,109,0,265.8,54.75]]}
var ITEM_0 = {images: ["images/item.png"], frames:[[719,1,150,142,0,73.19999999999999,69.35],[1,231,465,149,0,232.2,74.35],[1,1,717,229,0,358.2,114.35],[719,187,198,88,0,97.19999999999999,42.349999999999994],[467,231,198,88,0,97.19999999999999,42.349999999999994],[794,276,119,133,0,59.19999999999999,66.35],[666,276,127,127,0,63.19999999999999,63.349999999999994],[918,187,90,149,0,44.19999999999999,74.35],[870,1,102,185,0,51.19999999999999,92.35]]}
var TIPS_0 = {images: ["images/tips0.png"], frames:  [[581,1,81,397,0,30.600000000000023,270.75],[663,1,80,382,0,30.600000000000023,270.75],[744,1,79,367,0,30.600000000000023,270.75],[744,1,79,367,0,30.600000000000023,270.75],[744,1,79,367,0,30.600000000000023,270.75],[744,1,79,367,0,30.600000000000023,270.75],[744,1,79,367,0,30.600000000000023,270.75],[744,1,79,367,0,30.600000000000023,270.75],[744,1,79,367,0,30.600000000000023,270.75],[744,1,79,367,0,30.600000000000023,270.75],[824,1,79,326,0,30.600000000000023,270.75],[305,100,79,285,0,30.600000000000023,270.75],[1,185,79,280,0,30.600000000000023,270.75],[81,185,79,280,0,30.600000000000023,270.75],[161,185,79,280,0,30.600000000000023,270.75],[904,288,79,280,0,30.600000000000023,270.75],[824,328,79,280,0,30.600000000000023,270.75],[744,369,79,280,0,30.600000000000023,270.75],[465,382,79,280,0,30.600000000000023,270.75],[663,384,79,280,0,30.600000000000023,270.75],[385,385,79,280,0,30.600000000000023,270.75],[241,386,79,280,0,30.600000000000023,270.75],[545,399,79,280,0,30.600000000000023,270.75],[1,466,79,280,0,30.600000000000023,270.75],[81,466,79,280,0,30.600000000000023,270.75],[161,466,79,280,0,30.600000000000023,270.75],[465,100,79,281,0,30.600000000000023,271.75],[385,100,79,284,0,30.600000000000023,274.75],[904,1,79,286,0,30.600000000000023,276.75],[743,650,253,85,0,126.60000000000002,42.75],[1,100,303,84,0,146.60000000000002,44.75],[1,1,579,98,0,284.6,39.75]],
    animations:
    {
        tips:
        {
            frames:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
            next:"tips",
            speed:.4
        }
    }
}
var ITEM_PLAYER_0 = {images: ["images/player_0.png"], frames: PLAYER_ANI_0,
    animations:{
        normail:{
            frames:[13,14,15,16,17,18,19,20,21],
            next:"normail",
            speed:.8
        },
        run:{
            frames:[0,1,2,3],
            next:"run",
            speed:.8
        },
        death:
        {
            frames:[4,5,6,7,8,9,10,11,12],
            next:"death",
            speed:1
        }

    }};


var EFFECT_0 = {images: ["images/effect_0.png"],frames:EFFECT_ANI,animations:{
    eff:
    {
        frames:SpriteUTilsArr(EFFECT_ANI,0),
        next:"stop",
        speed:1
    }
}};
//===========================================================================================================================================
//SpriteBase
function SpriteBase (data)
{

    this._sheet = new createjs.SpriteSheet(data);
    this.initialize(this._sheet);

}
SpriteBase.prototype = createjs.Sprite.prototype
SpriteBase.prototype.sprite_init = SpriteBase.prototype.initialize;
SpriteBase.prototype.initialize = function(value)
{
    this.sprite_init(value )
    this.paused = false;
}
//===========================================================================================================================================
function GameInfo()
{
    this.initUI();

    StageManager.getInstance().resizeCanvas();
}
GameInfo.prototype.__proto__ = Component.prototype
GameInfo.prototype.initUI = function()
{
    this.tips = new SpriteBase(INFO_TIPS);
    this.tips.gotoAndStop(0)
    this.logo = new SpriteBase(INFO_LOGO)

    this.startButton = new SpriteBase(INFO_START)
    this.addChild( this.tips)
    this.addChild(this.startButton)
    this.addChild(this.logo)
    this.logo.x =  this.startButton.x = this.tips.x = 640/2
    new createjs.ButtonHelper( this);
    var _this =this
    this.startButton.addEventListener("click",function()
    {
        onButtonEvent("startgame")
    _this.close();
    })
//this.addChild(new GameBackground("gback"))


}
GameInfo.prototype.close = function()
{
    this.startButton.removeAllEventListeners()
    this.removeChild( this.tips)
    this.removeChild(this.startButton)
    this.removeChild(this.logo)
    StageManager.getInstance().game.addChild(new GameView())
    StageManager.getInstance().resizeCanvas()
}
GameInfo.prototype.resize =function(w,h)
{
    this.tips.y = (StageManager.getInstance().StageHeight-631)
    this.startButton.y =this.tips.y + 360
    this.logo. y =StageManager.getInstance().StageHeight-60
}
//===========================================================================================================================================
function Player(data)
{
    this.__proto__ = new SpriteBase(data);
    this.gotoAndPlay("normail");
    this.type = 0

    this.setType = function(value)
    {
        if (this.type == value)
        {
            return;
        }
        this.type = value
        if (this.type ==0){
            this.gotoAndPlay("normail");
        }
        if (this.type ==1)
        {
            this.gotoAndPlay("run");
        }
        if (this.type ==2)
        {
            this.gotoAndPlay("death")
        }
    }

}


//===========================================================================================================================================
function GameScore ()
{
    this.initialize()
    this.init();
}
GameScore.prototype.__proto__ = Component.prototype;
GameScore.prototype.init = function()
{
    this.scoreView = new Component();
    this.addChild(this.scoreView)
    this.scoreType = new SpriteBase(GAME_TYPE);
    this.addChild(this.scoreType)
    for (var i=0;i<8;i++)
    {
        var num = new SpriteBase(GAME_SCORE);
        num.gotoAndStop(0);
        this.scoreView.addChild(num);
        this.scoreView["num_"+i] = num;
        this.scoreView["num_"+i].x = i * 90;
    }
    this.score = 0
}
GameScore.prototype.__defineSetter__("scale",function(value)
{
    this.scoreView.scaleX = this.scoreView.scaleY = value;
    this.scoreType.y = this.scoreView.scaleY *90- this.scoreType.getTransformedBounds().height
})
GameScore.prototype.autoSize =function()
{
    var p = 344/this.scoreView.getTransformedBounds().width;
    if (p >1)
    {
        p =1;
    }
    this.scaleX = this.scaleY = p;
    this.x = (640-this.getTransformedBounds().width)/2+50
}
GameScore.prototype.__defineSetter__("score",function(value)
{
    value = value <0 ?0:value
    var str = Math.floor(value).toString();
//    console.log(str.length)
    var len = str.length;

    for(var i=0;i<8;i++)
    {

        this.scoreView["num_"+i].visible = i <len;
        if (i<len)
        {

            this.scoreView["num_"+i].gotoAndStop(Number(str.charAt(i)))
        }
    }
    this.scoreType.x = (len) * (90 *  this.scoreView.scaleX)
})
//==========================================================================================================================================================================================
function GameController ()
{
    this.initialize()
    this.initUI()
}
GameController.prototype.__proto__ = Component.prototype;
GameController.prototype.initUI =function()
{
    this.clickEvent = getProxy(this,this.itemClick)
    for(var i=0;i<3;i++)
    {
        var shage = new Component()
//        shage.graphics.beginFill("#0").drawCircle(-80/2,-80/2,80);
        var s = new SpriteBase(TIPS_0)
        s.x=  -150
        s.y = -180
        s.gotoAndStop(31);
        shage.addChild(s)
        shage.x = i * 200;
        shage.tid = i
        shage.addEventListener("click",this.clickEvent )
        this.addChild(shage)
    }
    this.x = 160
}
GameController.prototype.itemClick = function(event)
{
//console.log(event.currentTarget.tid)
    if(this.clickFun)
    {
        this.clickFun(event.currentTarget.tid)
    }
}
GameController.prototype.resize = function(w,h)
{
    this.y = StageManager.getInstance().StageHeight-80

}
//==========================================================================================================================================================================================
function GameItem (value,n)
{
    this.moveID = value;
    this.type = n
     this.initialize()
    this.initUI();
    this.x = value * 213+110
    this.y = -150

}
GameItem.prototype.__proto__ = Component.prototype;
GameItem.prototype.initUI =function()
{
   this.item = new SpriteBase(ITEM_0);
    var p = Math.floor(Math.random()*2)

    if (this.type)
    {
        this.item.gotoAndStop(5+p)

    }else
    {
        this.item.gotoAndStop(7+p)
    }

   this.item.cache(-this.item.getTransformedBounds().width/2,-this.item.getTransformedBounds().height/2,this.item.getTransformedBounds().width,this.item.getTransformedBounds().height)
    this.addChild(this.item)
}
GameItem.prototype.close = function()
{
    if (this.parent)
    {
        this.item.uncache()
        this.parent.removeChild(this)
    }
}
//==========================================================================================================================================================================================
function GameTips ()
{
    this.initialize()
    this.initUI()
}
GameTips.prototype.__proto__ = Component.prototype;
GameTips.prototype.initUI =function()
{
    this.tips_0 = new SpriteBase(TIPS_0)

    this.tips_0.gotoAndPlay("tips")
    this.addChild(this.tips_0)
    this.tipsTxt = new SpriteBase(TIPS_0);
    this.tipsTxt.gotoAndStop(29);
    this.tipsTxt.y = 180
    this.addChild(this.tipsTxt)
    this.shapeMask = new createjs.Shape()
    this.shapeMask.graphics.beginFill("#0").drawRect(-640/2-80,0,800,1200);

    this.addChild(this.shapeMask)
    this.tips_1 = new SpriteBase(TIPS_0);
    this.tips_1.gotoAndStop(30)
    this.tips_1.x = 0
    this.tips_1f = new SpriteBase(TIPS_0)
    this.tips_1f.gotoAndStop(31)
    this.addChild(this.tips_1f)
    this.shapeMask.alpha = .5
    this.addChild(this.tips_1);
    this.tips_1f.x = 0
    this.tips_1f.y = 320
    this.setType(1)
}
GameTips.prototype.setY=function(v)
{
    this.y = v;
    this.shapeMask.y = -v
}
GameTips.prototype.setType =function(value)
{
    this.tips_0.visible = value ==0;
    this.tipsTxt.visible =value == 0
    this.shapeMask.visible = value !=0
    this.tips_1.visible = value !=0
    this.tips_1f.visible = value !=0

}
//==========================================================================================================================================================================================
function GameView ()
{
    this.initialize()
    var _this =this
    this.gameBackground = new GameBackground("gback");
    this.addChild(this.gameBackground);
    this.player = new Player(ITEM_PLAYER_0);
    this.player.x = 640/2

    this.addChild(this.player)
    this.g = 2;
    this.v = 0;
    this.gameScore = new GameScore();
    this.gameScore.x =50;
    this.gameScore.y = 50
    this.maxHeight = 0
    this.gameScore.scale = .5
    this.moveY = 0
    this.enterFrame = getProxy(this,this.enterFrameEvent);
    this.mousedown = getProxy(this,this.mouseDownEvent);
    this.mouseUp = getProxy(this,this.mouseUpEvent);
    StageManager.getInstance().scene.addEventListener("mousedown",this.mousedown);
    StageManager.getInstance().scene.addEventListener("pressup",this.mouseUp);
    this.addEventListener("tick",this.enterFrame);
    this.count = 0
    this.addChild(this.gameScore)

    this.deathMc = new createjs.Bitmap(gameImages.death);
    this.deathMc.x = (640-233)/2
    this.addChild(this.deathMc);
    this.effect = new SpriteBase(EFFECT_0);
    this.addChild(this.effect)
    this.effect.gotoAndStop(0);
    this.effect.visible =false
    this.deathMc.visible = false
    this.isMove = false
    this.speedMax = 25
    this.gameBackground.moveTo(0);
    //this.controller = new GameController();
   // this.addChild(this.controller)
    this.playerHiehgt = 200
    var _this= this;
    this.player.moveID = 1
//    this.controller.visible =false;
    this.time =0
    this.itemList = [];
    this.speedArr = [35,30,25,20,15,10,5];
    this.speedMaxArr = [20,25,30]
    this.itemSpeed = 35
    this.isGameOver = false;
    this.isNext = false;
    this.movieID =1;
    this.isItem = false
    this.clickFun(1)
    this.isTips = false
//    this.addChild( this.controller )
//    this.controller.clickFun = function(value)
//    {
//        _this.clickFun(value)
//    }
    this.tips0 = new GameTips();
    this.tips0.x = 640/2
    this.addChild(this.tips0);
    this.tips0.setType(0)
  this.lpp =  setTimeout(function()
    {
        _this.tips0.visible =false
    },3000)


}
GameView.prototype.clickFun = function(value)
{
//       _this.player.x = value * 213+110;
    this.movieID= value
    this.deathMc.x = value * 213-30
    this.effect.x =  this.deathMc.x+80
    createjs.Tween.get(this.player).to({x:  value * 213+110 },200,createjs.Ease.backOut)
    this.player.moveID = value;
}
GameView.prototype.addItem = function()
{
    var rid = Math.floor(Math.random()*3)

    var item = new GameItem(rid,this.moveY>25000);

    this.itemList.push(item)
    this.addChild(item);
  //  this.swapChildren(this.controller,item)
}
GameView.prototype.__proto__ = Component.prototype
GameView.prototype.resize =function(w,h)
{
    this.player.y = StageManager.getInstance().StageHeight-   this.playerHiehgt;
    this.deathMc.y =this.player.y+30
    this.effect.y =   this.deathMc.y +80;
    this.tips0.setY(StageManager.getInstance().StageHeight-600)
   // this.controller.resize(w,h)
}

GameView.prototype.mouseDownEvent = function(event)
{
    if (!this.isTips)

    this.mouseY = event.currentTarget.mouseY;
    this.mouseX = event.currentTarget.mouseX;

}
GameView.prototype.mouseUpEvent = function(event)
{
    var _this =this;
    if (this.isGameOver) return;
    if (event) {
        var py = (this.mouseY - event.currentTarget.mouseY)/StageManager.getInstance().StageHeight;
        var px = this.mouseX - event.currentTarget.mouseX;
    }else
    {
        px =0;
        py =0
    }

    px /= StageManager.getInstance().scale
    if (!this.isNext) {
//        if (p > 200) {
//            this.controller.visible = true
//            this.playerHiehgt = 300;
//            this.resize()
////            StageManager.getInstance().scene.removeEventListener("mousedown", this.mousedown);
////            StageManager.getInstance().scene.removeEventListener("pressup", this.mouseUp);
//            this.v = 100
//            this.isMove = true
//        }
        this.isMove = true
        this.v = py *100
    }else
    {
        if (this.isNext &&  this.isItem)
        {
            if (Math.abs(px)>5)
            {
                this.movieID  += px >1?-1:1;
                this.movieID = this.movieID>2?2:this.movieID;
                this.movieID = this.movieID<0?0:this.movieID;
                this.clickFun(this.movieID)
            }
          //             StageManager.getInstance().scene.removeEventListener("mousedown", this.mousedown);
//            StageManager.getInstance().scene.removeEventListener("pressup", this.mouseUp);
        }
        if (! this.isTips )
        {

            this.isTips =true;
            clearTimeout( this.lpp )

                this.tips0.visible = true;
                this.tips0.setType(1)
                this.removeEventListener("tick", this.enterFrame);
                setTimeout(function () {
                    _this.tips0.visible = false;
                    _this.playerHiehgt = 200;
                    _this.tips0.visible = false
                    _this.resize()
                    _this.time = 0
                    //     _this.controller.visible = true
                    _this.isItem = true;
                    _this.addEventListener("tick", _this.enterFrame);
                }, 3000)

        }
    }


}

GameView.prototype.enterFrameEvent = function()
{
    if (!this.isMove) return;
    if (!this.isGameOver ) {
        if (this.isNext )
        this.v = this.v < this.speedMax ? this.speedMax : this.v
    }

    this.isNext =  this.moveY >5000;
    if (!this.isTips && this.isNext)
    {
        this.mouseUpEvent()
    }
    this.moveY += this.v -= this.g;
    if (this.maxHeight < this.moveY)
    {
        this.maxHeight = this.moveY;
    }
    this.gameScore.score = Math.floor(this.maxHeight/10)
    if ( this.moveY <0)
    {
        if (!this.isNext &&this.isGameOver)
        {
            this.removeEventListener("tick",this.enterFrame);
            setTimeout(function(){_this.close()},2000)
        }
        this.moveY = 0
        this.v = 0;
        this.g = 1
        this.player.setType(0)
        var _this =this
        if (this.maxHeight >2000)
        {
            this.removeEventListener("tick",this.enterFrame);
            this.effect.visible =true;
            this.player.visible = false;
            this.effect.gotoAndPlay("eff")
            this.deathMc.visible = true
            setTimeout(function(){_this.close()},2000)

        }else
        {
            if (this.maxHeight >100)
            {
                this.removeEventListener("tick",this.enterFrame);
                setTimeout(function(){_this.close()},2000)
            }


        }
    }else
    {
        this.player.setType(1)
    }
    this.gameBackground.moveTo( this.moveY )
    if (Math.abs(this.v)>22 &&  this.moveY> 980)
    {
        this.gameBackground.showLine(true)
    }else
    {
        this.gameBackground.showLine(false)
    }

    this.time++;
    if (!this.isGameOver && this.time >this.itemSpeed )
    {
        this.time = 0
        if ( this.isItem)
        this.addItem()
    }
    var pes = Math.floor(this.moveY/10000);
    if (pes >this.speedArr.length-1)
    {
//        pes = this.speedArr.length-1
        this.itemSpeed = this.speedArr[this.speedArr.length-1];
    }else
    {
        this.itemSpeed = this.speedArr[pes];
    }
    if (pes >this.speedMaxArr.length-1)
    {
//        pes = this.speedArr.length-1
        this.speedMax = this.speedMaxArr[this.speedMaxArr.length-1];
    }else
    {
        this.speedMax = this.speedMaxArr[pes];
    }
    var pe =StageManager.getInstance().StageHeight+150;
    for (var i in   this.itemList)
    {
        var item =   this.itemList[i];
        if (item)
        {
            if (!this.isGameOver)
            item.y +=  this.speedMax +10
            else
            {
                item.y -=  this.speedMax +10
            }

            if (this.player.moveID == item.moveID  && Math.abs(item.y - this.player.y)<50 &&  this.player.y>item.y-50)
            {
                this.speedMax  =this.g =   this.moveY/1000
                this.isGameOver = true;
                this.player.gotoAndPlay("death")
//               this.controller.visible = false
                this.playerHiehgt =200;
                this.clickFun(this.player.moveID )
                this.resize()
                //    this.removeEventListener("tick",this.enterFrame)
            }
        }

        if (item.y >pe)
        {
            this.itemList.splice(Number(i),1);
            console.log(this.itemList.length)
//
            item.close()
        }
    }
//    console.log(this.moveY )


}
GameView.prototype.close =function()
{
    StageManager.getInstance().scene.removeEventListener("mousedown",this.mousedown);
    StageManager.getInstance().scene.removeEventListener("pressup",this.mouseUp);
    StageManager.getInstance().game.removeChild(this);
    StageManager.getInstance().game.addChild(new GameOverView( Math.floor(this.maxHeight/10)))
    StageManager.getInstance().resizeCanvas()

}
//===========================================================================================================================================
function GameOverView (value)
{
    this.score = value
    this.initialize()
    this.init();


}
GameOverView.prototype.__proto__ = Component.prototype;
GameOverView.prototype.init = function()
{
    App.DESC ="炫炫翅膀带我飞了"+ this.score+"米，简直炫酷！"
    var _this =this
    this.tips = new SpriteBase(GAMEOVER_PLANE);
    this.tips.x = 640/2
    this.addChild(this.tips)
    this.gameScore = new GameScore();
    this.addChild(this.gameScore);
    this.gameScore.score =    this.score
    this.gameScore.autoSize();
    var scale = this.gameScore.scaleX;
    this.copyright = new SpriteBase(INFO_COPYRIGHT);
    this.copyright.x = 640/2
    this.addChild(this.copyright)
    if (IS_QQBrowse)
    {
//        this.removeChild(this.tips)
        this.qqregame = new SpriteBase(QQ_SHARE);
        this.qqregame.gotoAndStop(0);
        this.qqregame.x = 640/2+10;
        this.inGame = new SpriteBase(QQ_SHARE);
        this.inGame.gotoAndStop(1);
        this.inGame.x = 640/2+10
        this.addChild(this.qqregame)
        this.addChild(this.inGame)
        this.qqfans = new SpriteBase(QQ_SHARE);
        this.qqfans.gotoAndStop(2);
        this.qqfans.x = 640/2-this.qqfans.getTransformedBounds().width/2+8
//        new createjs.ButtonHelper(this)
        this.inGame.on("click",function(){
            onButtonEvent("ingame")
            window.location = "play.html"
        })
        this.qqregame. addEventListener("click",function(){
            onButtonEvent("regame")
            _this.resetGame()
        })
        this.qqqzone = new SpriteBase(QQ_SHARE);
        this.qqqzone.gotoAndStop(3);
        this.qqqzone.x =  this.qqfans.x+  this.qqqzone.getTransformedBounds().width
        this.addChild(this.qqqzone)
        this.addChild(this.qqfans)
        this.qqqzone.on("click",function()
        {
            onButtonEvent("shareqz")
            shareBoxToZone()
        })
        this.qqfans.on("click",function()
        {

            onButtonEvent("shareqq")
            shareBoxToQQFriend()
            //http://openmobile.qq.com/api/check?page=shareindex.html&style=9&status_os=0&sdkp=0
        })
    }else
    {
        this.inGame = new SpriteBase(WX_SHARE);
        this.reGame = new SpriteBase(WX_SHARE);
        this.reGame.gotoAndStop(2)
        this.inGame.gotoAndStop(4);
        this.inGame.x = 640/2+13;
        this.reGame.x = 640/2-this.reGame.getTransformedBounds().width/2+10;
        this.shareBtn = new SpriteBase(WX_SHARE)
        this.shareBtn.gotoAndStop(3)
        this.shareBtn.x =this.reGame.x+this.shareBtn.getTransformedBounds().width+10
        this.addChild(this.inGame)
        this.addChild(this.reGame)
        this.addChild(this.shareBtn)
        this.inGame.on("click",function()
        {
            onButtonEvent("ingame")
            window.location = "index.html"
        })
        this.reGame.addEventListener("click",function(){
            onButtonEvent("regame")
            _this.resetGame()
        })
        this.shareBtn.addEventListener("click",function()
        {
            onButtonEvent("sharewx")
        _this.showShare()
        })
    }

}
GameOverView.prototype.resetGame =function()
{
    StageManager.getInstance().game.removeAllChildren();
    StageManager.getInstance().game.addChild(new GameView())
    StageManager.getInstance().resizeCanvas()
}
GameOverView.prototype.showShare = function()
{
    var _this =this;
   if (!this.shareView)
   {
       this.shareView = new Component();

       this.shareView.maskView = new createjs.Shape();
       this.shareView.addChild(this.shareView.maskView);
       this.shareView.shareTips = new SpriteBase(WX_SHARE);
       this.shareView.shareTips.gotoAndStop(0);
       this.shareView.addChild(this.shareView.shareTips)
       new createjs.ButtonHelper(this)

       this.shareView.addEventListener("click",function()
       {

           _this.shareView.visible =false

       })
   }else
   {
       _this.shareView.visible =true
   }
    this.addChild(this.shareView);


    StageManager.getInstance().resizeCanvas()
}
GameOverView.prototype.resize =function(w,h)
{
    this.tips.y = (StageManager.getInstance().StageHeight-740);
    this.gameScore.y =this.tips.y
    this.copyright.y = StageManager.getInstance().StageHeight-this.copyright.getTransformedBounds().height
    if (IS_QQBrowse)
    {
        this.qqregame.y = this.tips.y+ this.tips.getTransformedBounds().height/2+this.qqregame.getTransformedBounds().height/2+10;
        this.inGame.y =this.qqregame.y+this.qqregame.getTransformedBounds().height;
        this.qqqzone.y =this.qqfans.y =this.inGame.y+this.inGame.getTransformedBounds().height-15;

    }else
    {
        this.inGame.y = this.tips.y+ this.tips.getTransformedBounds().height/2+60;
        this.shareBtn.y = this.reGame.y =this.inGame.y+this.inGame.getTransformedBounds().height+5
        if (this.shareView)
        {

            this.shareView.maskView.graphics.clear().beginFill("rgba(0,0,0,0.7)").drawRect(-80,0,800,StageManager.getInstance().StageHeight);
            this.shareView.shareTips.x = (window.innerWidth-StageManager.getInstance().game.x)/StageManager.getInstance().scale-30;

        }
    }


}
//===========================================================================================================================================
function BackgroudShape()
{
    this.initialize();
    this.shape = new createjs.Shape();
    this.x = -80;
    this.addChild(this.shape);
   this.type = 0
    this.iamge = "";
    this.speedleft = new createjs.Shape();
    this.addChild(this.speedleft);
    this.speedleft.graphics.beginBitmapFill(gameImages.speed,"no-repeat").drawRect(0,0,272,972);
    this.speedleft.cache(10,0,272,972)
    this.speedleft.x = 30
    this.speedright = new createjs.Shape();
    this.addChild(this.speedright);
    this.speedright.graphics.beginBitmapFill(gameImages.speed,"no-repeat").drawRect(0,0,272,972);
    this.speedright.cache(0,0,272,972)
    this.speedright.x = 450
    this.speedright.y = 972
    this.speedright.scaleY = -1
    this.speedleft.alpha = 0
    this.speedright.alpha = 0;
    this.itemSprite = new Component();
    this.addChild(this.itemSprite)
    this.itemList = [];
}
BackgroudShape.prototype.showSpeedLine = function(value)
{
    if (this.isLine == value) return;
    this.isLine = value;
    if (this.isLine)
    {
        createjs.Tween.get(this.speedleft).to({alpha:1},100)
        createjs.Tween.get(this.speedright).to({alpha:1},100)
    }else
    {
        createjs.Tween.get(this.speedleft).to({alpha:0},100)
        createjs.Tween.get(this.speedright).to({alpha:0},100)
    }
}
BackgroudShape.prototype.__defineSetter__("scale",function(value)
{
    var peln = this.itemList.length
    for (var i=0;i<peln;i++)
    {
        var item = this.itemList[i]
        item.y = item.oldY + item.pointY * value

    }
})
BackgroudShape.prototype.__proto__ = Component.prototype;
BackgroudShape.prototype.__defineSetter__("bitmap",function(value)
{
if (  this.iamge == value) return
    this.shape.uncache();
    this.itemSprite.removeAllChildren();
    if (value == "gback") {
        this.shape.graphics.clear().beginBitmapFill(gameImages[value], "no-repeat").drawRect(0, 0, 800, 960);
    }else
    {
        this.itemList = [];
        this.shape.graphics.clear().beginBitmapFill(gameImages[value], "no-repeat").drawRect(0, 0, 800, 960);
        if (value == "bg1")
        {
            var point =[{x:0,y:100,id:1,scale:1,p:1000},
                {x:200,y:560,id:3,scale:1,p:150},
                {x:420,y:320,id:2,scale:1,p:1350},
                {x:650,y:320,id:4,scale:1,p:1350}
                ]
            for (var i =0;i<point.length;i++) {
                var cl = new SpriteBase(ITEM_0);
                cl.pointY = point[i].p
                cl.gotoAndStop(point[i].id);
                cl.oldY = cl.y = point[i].y;
                cl.x = point[i].x;
                cl.scaleX = point[i].scale;
                this.itemList.push(cl)
                this.itemSprite.addChild(cl)
            }
        }
        if (value == "bg2")
        {
            var point =[{x:0,y:100,id:1,scale:1,p:1000},
                {x:200,y:560,id:3,scale:1,p:150},
                {x:420,y:620,id:2,scale:1,p:1350},
                {x:520,y:320,id:4,scale:1,p:1350}
            ]
            for (var i =0;i<point.length;i++) {
                var cl = new SpriteBase(ITEM_0);
                cl.pointY = point[i].p

                cl.gotoAndStop(point[i].id);
                cl.oldY = cl.y = point[i].y;
                cl.x = point[i].x;
                cl.scaleX = point[i].scale;
                this.itemList.push(cl)
                this.itemSprite.addChild(cl)
            }
        }
        if (value == "bg3")
        {
            var point =[{x:0,y:100,id:0,scale:.5,p:1000},
                {x:180,y:420,id:0,scale:.4,p:800},
                {x:640,y:380,id:0,scale:.7,p:400},
                {x:480,y:560,id:0,scale:.4,p:600},
                {x:200,y:120,id:0,scale:.8,p:1200},
                {x:420,y:620,id:2,scale:1,p:1350},
                {x:520,y:320,id:4,scale:1,p:1350}
            ]
            for (var i =0;i<point.length;i++) {
                var cl = new SpriteBase(ITEM_0);
                cl.pointY = point[i].p
                cl.gotoAndStop(point[i].id);
                cl.oldY = cl.y = point[i].y;
                cl.x = point[i].x;
                cl.scaleX =cl.scaleY = point[i].scale;
                this.itemList.push(cl)
                this.itemSprite.addChild(cl)
            }
        }
        if (value == "bg4")
        {
            var point =[{x:720,y:100,id:0,scale:.5,p:1000},
                {x:180,y:420,id:0,scale:.4,p:800},
                {x:640,y:280,id:0,scale:.7,p:400},
                {x:480,y:560,id:0,scale:.4,p:600},
                {x:200,y:320,id:0,scale:.8,p:1200},
                {x:420,y:740,id:0,scale:1,p:1350},
                {x:120,y:820,id:0,scale:.8,p:850}
            ]
            for (var i =0;i<point.length;i++) {
                var cl = new SpriteBase(ITEM_0);
                cl.pointY = point[i].p
                cl.gotoAndStop(point[i].id);
                cl.oldY = cl.y = point[i].y;
                cl.x = point[i].x;
                cl.scaleX =cl.scaleY = point[i].scale;
                this.itemList.push(cl)
                this.itemSprite.addChild(cl)
            }
        }
    }
    this.shape.cache(0,0,800,960);//
})
//===========================================================================================================================================
function GameBackground (value)
{
    this.initialize()

    this.shape1 =new BackgroudShape();
    this.shape1.bitmap = "gback"
    this.shape1.type = 0
    this.addChild(this.shape1)
    this.shape2 =new BackgroudShape()
    this.shape2.bitmap ="bg1"
    this.addChild(this.shape2)

    this.shape3 =new BackgroudShape();
    this.shape3.bitmap ="bg2"
    this.addChild(this.shape3)
    this.page = 25
    StageManager.getInstance().resizeCanvas()
//    this.text = new createjs.Text("Hello World", "20px Arial", "#FFFFFF");
//    this.text.text ="test"
//    this.addChild(   this.text)

}

GameBackground.prototype= Component.prototype
GameBackground.prototype.moveY = 0;
GameBackground.prototype.showLine = function(value)
{
    this.shape1.showSpeedLine(value)
    this.shape2.showSpeedLine(value)
    this.shape3.showSpeedLine(value)
}
GameBackground.prototype.moveTo = function(value)
{
    var ry = (StageManager.getInstance().StageHeight-960)+(value %960)

    var py = Math.floor(value/960);



    if (py <1 &&this.shape1.type !=0) {
        this.shape1.type = 0
        this.shape1.bitmap = "gback"
        this.shape2.bitmap ="bg1"
    }
    if (py >=1 && py <2 &&this.shape1.type !=1)
    {
        console.log("1")
        this.shape1.type = 1;
        this.shape1.bitmap ="bg1"
        this.shape2.bitmap ="bg2"
        this.shape3.bitmap ="bg2"
    }else
    if (py >=2 && py <this.page-1 && this.shape1.type !=2)
    {
        console.log("2")
        this.shape1.type = 2;
        this.shape1.bitmap ="bg2"
        this.shape2.bitmap ="bg2"
        this.shape3.bitmap ="bg2"
    }else
    if (py >=this.page-1 && py <this.page &&this.shape1.type !=3)
    {
        console.log("3")

        this.shape1.type = 3;
        this.shape1.bitmap ="bg2"
        this.shape2.bitmap ="bg3"
        this.shape3.bitmap ="bg4"
    }else
    if (py ==this.page &&this.shape1.type !=4)
    {

        this.shape1.type = 4;
        this.shape1.bitmap ="bg3"
        this.shape2.bitmap ="bg4"
        this.shape3.bitmap ="bg4"
    }else if (py >this.page && this.shape1.type !=5)
    {
        this.shape1.type = 5
        this.shape1.bitmap ="bg4"
        this.shape2.bitmap ="bg4"
        this.shape3.bitmap ="bg4"
    }






//    this.text.text = py+","+Math.floor(ry)+","+this.shape1.type+","+this.shape2.type+","+this.shape3.type+","
//    this.text.text = "FPS:"+Math.floor(createjs.Ticker.getMeasuredFPS()*100)/100
    this.shape1.y = ry;
    this.shape2.y = this.shape1.y-960
    this.shape3.y = this.shape2.y-960
    this.shape1.scale =this.shape1.y / 1920
    this.shape2.scale =this.shape2.y / 1920
    this.shape3.scale =this.shape3.y / 1920

}
/*  |xGv00|15f0398e8ce5a0a367e98e5781c9189d */