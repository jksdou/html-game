
function addElements(data, layer, dataSource,config) {
    if (!(data instanceof Array)) {
        data = [data];
    }
    for (var i = 0; i < data.length; i++) {
        var element = data[i];
        var _dataSource = element.dataSource || dataSource;
        if (element.type == "button") {
            var src=element.src instanceof Function?element.src():element.src;
            element.obj = new LButton(getBitmap(src, element.x, element.y, element.w, element.h, _dataSource));
        } else if (element.type == "input") {
            var theTextField = new LTextField();
            theTextField.border = isNaN(element.border) ? element.border : 1;
            theTextField.setType(LTextFieldType.INPUT);
            theTextField.color = element.color ? element.color : "#FFFFFF";
            theTextField.size = element.size ? element.size : 15;
            element.obj = theTextField;
        } else if (typeof element.type == "function") {
            element.obj = new element.type(element.params);
            //return;
        } else {
            if (element.src) {
                var src=element.src instanceof Function?element.src():element.src;
                element.obj = new LSprite();
                var bitmap;
                if(element.load){//增加对异步加载的支持
                   __loadImage(src,element.x, element.y, element.w, element.h,element.obj,element.onload);
                }else{
                    bitmap=getBitmap(src, element.x, element.y, element.w, element.h, _dataSource);
                    element.obj.addChild(bitmap);
                }

            } else if (element.obj) {

            } else {
                console.error("addElements 缺少显示对象");
                return;
            }

        }
        element.obj.x = element.X ? element.X : 0;
        element.obj.y = element.Y ? element.Y : 0;
        element.obj.alpha=element.alpha||1;
        element.obj.scaleX=element.scaleX||1;
        element.obj.scaleY=element.scaleY||1;
        element.obj.visible= typeof(element.visible) == "boolean"?element.visible:true;
        element.obj.rotate=element.rotate||0;
        if (element.center) {
            setMiddleX(element.obj);
        }
        if (element.anim) {
            var anims = element.anim;
            if (!(anims instanceof Array)) {
                anims = [anims];
            }
            var tweenLite = null;
            for (var j = 0; j < anims.length; j++) {
                var anim=anims[j];
                anim.ease = anim.ease ? anim.ease : LEasing.Sine.easeIn;
                if (!tweenLite) {
                    tweenLite = LTweenLite.to(element.obj, typeof(anim.duration)=='number' ? anim.duration :.6, anim);
                }else{
                    tweenLite.to(element.obj,typeof(anim.duration)=='number' ? anim.duration : 1, anim);
                }
            }
        }
        if (element.click) {
            element.obj.addEventListener(LMouseEvent.MOUSE_DOWN, element.click);
        } else if (element.click_up) {
            element.obj.addEventListener(LMouseEvent.MOUSE_UP, element.click_up);
        }
        if (layer) {
            layer.addChild(element.obj);
        }
        if (element.init) {
            element.init(element.obj);
        }
        if (element.tag) {
            element.obj.tag=element.tag;
        }
    }
    return data;
}
function __loadImage(src,x,y,w,h,parent,onload){
    var loader = new LLoader();
    loader.addEventListener(LEvent.COMPLETE, function (event) {
        var bitmapData = new LBitmapData(event.target);
        var bitmap = new LBitmap(bitmapData, x, y, w, h);
        bitmap.alpha=.1;
        //setTimeout(function(){
        parent.addChild(bitmap);
        LTweenLite.to(bitmap, .2, {alpha: 1});
        if(onload){
            onload(bitmap,parent);
        }
        //},1000);

    });
    loader.load(src, "bitmapData");
}

function zLoadImage(src,onload,params){
    var loader = new LLoader();
    loader.addEventListener(LEvent.COMPLETE, function (event) {
        var bitmapData = new LBitmapData(event.target);
        if(onload){
            onload(bitmapData,params);
        }
    });
    loader.load(src, "bitmapData");
}

function setMiddleX(obj) {
    obj.x = LGlobal.width / 2 - obj.getWidth() / 2;
}

function setScale(obj, value) {
    obj.scaleX = value;
    obj.scaleY = value;
}
function getBitmap(imageName, x, y, w, h, dataSource) {
    dataSource = dataSource || dataList;
    var bitmapdata = new LBitmapData(dataSource[imageName], x, y, w, h);
    return new LBitmap(bitmapdata);
}
function getBitmapData(imageName, x, y, w, h, dataSource) {
    dataSource = dataSource || dataList;
    var bitmapdata = new LBitmapData(dataSource[imageName], x, y, w, h);
    return bitmapdata;
}

function createTextView(content, size) {
    content = content || "";
    size = size || 18;
    var text = new LTextField();
    text.setType(LTextFieldType.TEXT);
    text.size = size;
    text.weight = "bolder";
    text.color = "#E68C00";
    text.lineWidth = 2;
    text.stroke = true;
    text.font = "微软雅黑";
    text.text = content;
    return text;
}
function MiddleBitmap(bitmap) {
    var self = this;
    base(self, LSprite, []);
    if (typeof(bitmap) =='string') {
        self.bitmapTitle = getBitmap(bitmap);
    } else if (bitmap instanceof LBitmapData) {
        self.bitmapTitle = new LBitmap(bitmap);
    } else if (bitmap instanceof LBitmap) {
        self.bitmapTitle = bitmap;
    } else if(bitmap instanceof Object){
        self.bitmapTitle = getBitmap(bitmap.name,bitmap.x,bitmap.y,bitmap.w,bitmap.h);
    } else {
        console.info("创建[MiddleBitmap]出错！");
        return;
    }
    self.bitmapTitle.x = -self.bitmapTitle.getWidth() * 0.5;
    self.bitmapTitle.y = -self.bitmapTitle.getHeight() * 0.5;
    self.addChild(self.bitmapTitle);
}
MiddleBitmap.prototype.setScale = function (value) {
    var self = this;
    self.scaleX = value;
    self.scaleY = value;
};

function rangeRandom(under, over) {
    switch (arguments.length) {
        case 1:
            return parseInt(Math.random() * under + 1);
        case 2:
            return parseInt(Math.random() * (over - under + 1) + under);
        default:
            return 0;
    }
}


function fade_in(view) {
    view.alpha = 0.1;
    LTweenLite.to(view, .3, {alpha: 1});
}

var extend = function (target, source) {
    for (var p in source) {
        if (source.hasOwnProperty(p)&&!target[p]) {
            target[p] = source[p];
                        console.log(p)

        }else{
        }
    }

    return target;
};

var utils={};
utils.extend  = function() {
	var options, name, src, copy, copyIsArray, clone,
		target = arguments[0] || {},
		i = 1,
		length = arguments.length,
		deep = false;
	//如果第一个值为bool值，那么就将第二个参数作为目标参数，同时目标参数从2开始计数
	if ( typeof target === "boolean" ) {
		deep = target;
		target = arguments[1] || {};
		// skip the boolean and the target
		i = 2;
	}
	// 当目标参数不是object 或者不是函数的时候，设置成object类型的
	if ( typeof target !== "object" && !utils.isFunction(target) ) {
		target = {};
	}
	//如果extend只有一个函数的时候，那么将跳出后面的操作
	if ( length === i ) {
		target = this;
		--i;
	}
	for ( ; i < length; i++ ) {
		// 仅处理不是 null/undefined values
		if ( (options = arguments[ i ]) != null ) {
			// 扩展options对象
			for ( name in options ) {
				src = target[ name ];
				copy = options[ name ];
				// 如果目标对象和要拷贝的对象是恒相等的话，那就执行下一个循环。
				if ( target === copy ) {
					continue;
				}
				// 如果我们拷贝的对象是一个对象或者数组的话
				if ( deep && copy && ( utils.isPlainObject(copy) || (copyIsArray = utils.isArray(copy)) ) ) {
					if ( copyIsArray ) {
						copyIsArray = false;
						clone = src && utils.isArray(src) ? src : [];
					} else {
						clone = src && utils.isPlainObject(src) ? src : {};
					}
					//不删除目标对象，将目标对象和原对象重新拷贝一份出来。
					target[ name ] = utils.extend( deep, clone, copy );
				// 如果options[name]的不为空，那么将拷贝到目标对象上去。
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}
	// 返回修改的目标对象
	return target;
};


function createSound(link){
    var html = '<audio id="bg_sound" loop="loop" style="display:none" autoplay="autoplay" >' +
        '<source src="' + link + '" type="audio/mpeg">' +
        '</audio>';
    var div = document.createElement("div");
    document.getElementsByTagName("body")[0].appendChild(div);
    div.innerHTML = html;
    var bg_sound = document.getElementById('bg_sound');
    bg_sound.playing=1;
    bg_sound.addEventListener("playing", function () {
        bg_sound.playing = 1;
    });
    bg_sound.addEventListener("pause", function () {
        bg_sound.playing = 0;
    });
    return bg_sound;
}

function MyProgressBar(bgUrl,textColor){
    var self=this;
    LExtends(self,LSprite,[]);
    self.bg=new LSprite();
    self.addChild(self.bg);
    //self.graphics.drawRect(0, "#ff0000", [0,0, LGlobal.width, LGlobal.height], true, "#FFFFFF");
    if(bgUrl){
        zLoadImage(bgUrl,function(img){
            var bitmap=new LBitmap(img);
            self.bg.addChild(bitmap);
        });
    }
    self.text=new LTextField();
    self.text.color=textColor||"#000";
    self.text.size=25;
    self.text.text="0%";
    self.addChild(self.text);
    self.text.y=550;
    setMiddleX(self.text);
    
    self.setProgress=function(value){
        self.text.text=value+"%";
        setMiddleX(self.text);
    }
}