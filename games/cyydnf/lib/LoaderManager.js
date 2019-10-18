/**
 * Created by lennylin on 2014/7/21.
 */

function LoaderManager ()
{
    this.listLib = [];
    createjs.EventDispatcher.initialize(this.__proto__);
}


LoaderManager.prototype.addLib = function(value)
{
    this.listLib.push(value);
}
LoaderManager.prototype.start = function()
{

    if (this.listLib.length >0) {
        var obj = this.listLib.shift();
        this.loadjs(obj);
    }else
    {
        this.dispatchEvent(new createjs.Event("complete",this))

    }

}
LoaderManager.prototype.loadjs =function(value)
{
    var _doc = document.getElementsByTagName("head")[0];
    var js = document.createElement("script");
    js.setAttribute("type","text/javascript");
    js.setAttribute("src",value.src);
    _doc.appendChild(js)
    var loader = new createjs.LoadQueue(false);
    var _this = this;
    var p = 0;
    var len = 0;
    function handleFileLoad(event)
    {
        var obj = eval(value.lib);
        p++;

//        _this.dispatchEvent(new createjs.Event("progress",this))
        if (event.item.type == "image") { obj[event.item.id] = event.result; }

    }
    function handleComplete(event)
    {
        _this.start();

    }
    function progressEvent(event)
    {
        _this.progress = event.progress;

        _this.dispatchEvent(new createjs.Event("progress",this))
    }
    loader.addEventListener("fileload", handleFileLoad);
    loader.addEventListener("progress",progressEvent)
    loader.addEventListener("complete", handleComplete);
    loader.installPlugin(createjs.Sound);
    if(document.all)
    {
        js.onreadystatechange = function()
        {
            if(js.readyState == "loaded" || js.readyState == "complete")
            {
                alert(value.name)
            }
        }
    }else
    {
        js.onload = function()
        {
            len = eval(value.name).properties.manifest.length;

            loader.loadManifest(eval(value.name).properties.manifest);

        }
    }
}


/*  |xGv00|a172f124a2991b1bf22970241af4f0dd */