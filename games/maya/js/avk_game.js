function AVK_GAME(fini,back,ev)
{
   
    var oldTime;
    var back_function = back;
    var init_func = fini;
    var event_func = ev;
    var that = this;
    var assetsToLoader = ["data/images_1.json","data/images_2.json","data/images_3.json","data/images_4.json","data/images_5.json","data/images_6.json","data/images_7.json","data/images_8.json","data/images_9.json","data/images_10.json","data/fonts/main_font.xml"];

    var loader = new PIXI.AssetLoader(assetsToLoader);
    var f = 0;
    var old_f = 0;
    var f_cnt = 0;
    var btn_scale = 0.015;

    loader.onComplete = onAssetsLoaded;

    this.LANGUAGE="TXT";
    this.GUI_BUSY=false;
    this.SCREEN_WIDTH=600;
    this.SCREEN_HEIGHT=900;
    this.STAGE = new PIXI.Stage(0x000000);
    this.RENDER = PIXI.autoDetectRenderer(this.SCREEN_WIDTH, this.SCREEN_HEIGHT,null,true,true);
    document.body.appendChild(this.RENDER.view);

    this.RENDER.view.style.position = "absolute";
    this.RENDER.view.style.top = "0px";
    this.RENDER.view.style.left = "0px";
    this.RENDER.view.style["z-index"] = "1";

    this.TMP_SPR = new PIXI.DisplayObjectContainer();
    this.BACK_SPR = new PIXI.DisplayObjectContainer();
    this.GUI = new PIXI.DisplayObjectContainer();
    this.UP_SPR = new PIXI.DisplayObjectContainer();
    this.TOO_SLOW=false;
    
    var here=this;
    this.isMobile = {
    Android:function(){return navigator.userAgent.match(/Android/i);},
    BlackBerry:function(){return navigator.userAgent.match(/BlackBerry/i);},
    iOS:function(){return navigator.userAgent.match(/iPhone|iPad|iPod/i);},
    Opera:function(){return navigator.userAgent.match(/Opera Mini/i);},
    Windows:function(){return navigator.userAgent.match(/IEMobile/i);},
    any:function(){return (here.isMobile.Android() || here.isMobile.BlackBerry() || here.isMobile.iOS() || here.isMobile.Opera() || here.isMobile.Windows());}
                    };

    var t_rotate=PIXI.Texture.fromImage("data/pics/rotate.jpg");
    var rotate = new PIXI.Sprite(t_rotate);
   
    rotate.visible=false;
    function resize()
    {
        window.scrollTo(0, 1);
        
        
        var h = 900;
        var w = 600;
        var width = window.innerWidth || document.body.clientWidth; 
        var height = window.innerHeight || document.body.clientHeight; 
        that.GUI.scale.x=1;
        that.GUI.scale.y=1;
        var view = here.RENDER.view;

        if ((height>width)||(!here.isMobile.any()))
        {
            rotate.visible=false;
            var ow=width;
            var oh=height;

            var ratio_h = height / h;
            var ratio_w = width / w;
            var ratio=ratio_h;

            if (ratio_h>ratio_w)
            {
                height=width*1.5;
                ratio=ratio_w;
            }else width=height/1.5;

            if (ow>width)
            {
                if (width*1.1>=ow)
                    width=ow;
                else if (width*1.2>=ow)
                {
                    that.GUI.scale.y=1.15/1.1;
                    width=ow;
                }
            }else
            {
                if (height*1.1>=oh)
                    height=oh;
            }

            view.style.height = height +"px";
            view.style.width = width +"px";
            view.style.top = (oh-height)/2+"px";
            view.style.left = (ow-width)/2+"px";
        }else
        {
            view.style.height = height +"px";
            view.style.width = width +"px";
            view.style.top = "0px";
            view.style.left = "0px";
            rotate.visible=true;
            return;
        }
    }
    window.addEventListener('resize', function(){resize();});
    window.onorientationchange = resize;
    
    resize();

    
    this.STAGE.addChild(this.TMP_SPR);
    this.STAGE.addChild(this.BACK_SPR);
    this.STAGE.addChild(this.GUI);
    this.STAGE.addChild(this.UP_SPR);
    this.STAGE.addChild(rotate);

    var progr = new PIXI.Graphics();
    var cnt_p=-1;

    this.UP_SPR.addChild(progr);
    var tback=PIXI.Texture.fromImage("data/pics/back_1.png");
    var back = new PIXI.Sprite(tback);
    back.position.x=105;
    back.position.y=60;
    this.UP_SPR.addChild(back);


    loader.onProgress = onProgress;
    onProgress();
    var timeProg=0;
    
    function onProgress()
    {
        cnt_p++;
        timeProg=0;
        drawProgress()
    }

    function drawProgress()
    {
        timeProg+=1/100;

        progr.beginFill(0x484848);
        progr.drawRect(50, that.SCREEN_HEIGHT-40, that.SCREEN_WIDTH-100, 12);
        progr.endFill();

        progr.beginFill(0xFFFFFF);
        progr.drawRect(51, that.SCREEN_HEIGHT-39, that.SCREEN_WIDTH-102, 10);
        progr.endFill();

        progr.beginFill(0x484848);
        progr.drawRect(52, that.SCREEN_HEIGHT-38, that.SCREEN_WIDTH-104, 8);
        progr.endFill();

        progr.beginFill(0x000000);
        progr.drawRect(53, that.SCREEN_HEIGHT-37, that.SCREEN_WIDTH-106, 6);
        progr.endFill();

        progr.beginFill(0xFF3300);
        if (cnt_p==assetsToLoader.length)
            timeProg=0;
        progr.drawRect(54, that.SCREEN_HEIGHT-36, (cnt_p+timeProg/(timeProg+1))*(that.SCREEN_WIDTH-108)/assetsToLoader.length, 4);
        progr.endFill();

        that.RENDER.render(that.STAGE);

        if (cnt_p<assetsToLoader.length)
            requestAnimFrame(drawProgress);
    }

    this.WND = "";
    this.EL = "";
    this.ID = 0;

    var DEBUG = "";
    var DEB_CNT = 0;
    this.deb = function(d)
    {
        DEBUG = d;
        DEB_CNT ++;

        if (DEBUG=="")
            that.FPS.setText("" + old_f);
        else
            that.FPS.setText(DEBUG);
    }

    function onAssetsLoaded()
    {
        if (GLOB_M)
        {
            if (GLOB_SND_TO_LOAD==0)
                FinishLoaded();
            else
                requestAnimFrame(onAssetsLoaded);
        }else FinishLoaded();
    }
    function FinishLoaded()
    {
   
        try{
        resize();
		that.WND = "MAIN";
		that.MAIN = new AVK_MAIN();
		that.WND = "GAME";
		that.GAME = new AVK_GAME();
		that.WND = "BALLS";
		that.BALLS = new AVK_BALLS();
		that.WND = "LIGHT";
		that.LIGHT = new AVK_LIGHT();

        that.FPS = new PIXI.BitmapText("fps:", {font: "8px AVK_FNT_main", align: "left"});
        that.FPS.position.y=that.SCREEN_HEIGHT-15;
        that.STAGE.addChild(that.FPS);
        f = 0;
        old_f = 0;
        f_cnt = 0;

        init_func();

        oldTime = (new Date()).getTime();
        requestAnimFrame(fw_update);
      
        }catch(e){AVK_ERROR(e);};
    }   
    
    this.init_captions=function() 
    {
        var flag;

        for (var i=0; i<that.DATA.gui.length;i++)
        {
            flag=!that[that.DATA.gui[i].id].sprite.visible;
            if (flag)
            {
                that.GUI.removeChild(that[that.DATA.gui[i].id].sprite);
                that.TMP_SPR.addChildAt(that[that.DATA.gui[i].id].sprite,0);
            }
            that[that.DATA.gui[i].id].sprite.visible=true;
            that[that.DATA.gui[i].id][that.DATA.gui[i].element].set_text(that.get("gui","val",i));
            if (flag)
            {
                that.GUI.addChildAt(that[that.DATA.gui[i].id].sprite,0);
                that[that.DATA.gui[i].id].sprite.visible=false;
            }
        }
    }

    var slow_cnt=0;
    function fw_update()
    {
        try{
        var tm = (new Date()).getTime();
        f_cnt += tm - oldTime;
        if (tm - oldTime>200)
            oldTime=tm-200;
        if (!rotate.visible)
        {
            back_function(tm - oldTime);
            that.ACT.update(tm - oldTime);
        }

        f++;
        while (f_cnt > 2000)
            f_cnt-=1000;

        while (f_cnt > 1000)
        {
            old_f = f;
            if (f<20)
                slow_cnt++;

            if (f>45)
                slow_cnt=0;

            if (slow_cnt>5)
                that.TOO_SLOW=true;

            if (DEBUG=="")
                that.FPS.setText("" + old_f);
            else
                that.FPS.setText(DEBUG);
            f = 0;
            f_cnt-=1000;
        }
        oldTime = tm;
        that.RENDER.render(that.STAGE);
        requestAnimFrame(fw_update);
        }catch(e){AVK_ERROR(e);};
        
    } 

    function AVK_spr(pic,x,y,w,h,columns)
    {
        this.add=function (el)
        {
            this.sprite.addChild(el.sprite);
        }
        var mem=[pic,x,y,w,h,columns];
        this.make_copy = function()
        {
            that.WND = this.WND;
            that.EL = this.EL;
            that.ID = this.ID+1;
            return new AVK_spr(mem[0],mem[1],mem[2],mem[3],mem[4],mem[5]);
        }

        this.animations = columns;
        this.uni_width = w;
        this.uni_height = h;
        this.time = 1000;
        this.WND = that.WND;
        this.EL = that.EL;
        this.ID = that.ID;

        var currentTime = 0;
        var currentFrame = 0;

        if (pic=="")
        {
            this.sprite = new PIXI.DisplayObjectContainer();
        }else if (columns==1)
        {
            this.sprite = PIXI.Sprite.fromFrame(pic);
        }else
        {
            var array = [];

            for (var i = 0; i < columns; i++) 
            {
                var texture = PIXI.Texture.fromFrame(pic + "_anim_" + i);
                array.push(texture);
            }

            this.sprite = new PIXI.MovieClip(array);
        }

        this.sprite.position.x = x;
        this.sprite.position.y = y;
        that.GUI.addChild(this.sprite);

        this.update = function(tk) 
        {
            if (tk>0)
            {
                currentTime -= tk;
                while (currentTime <= 0)
                {
                    currentTime += this.time/this.animations;
                    currentFrame--;
                    while (currentFrame < 0)
                        currentFrame += this.animations;
                    this.sprite.gotoAndStop(currentFrame);
                }
            }else if (tk<0)
            {
                currentTime -= tk;
                while (currentTime >= this.time/this.animations)
                {
                    currentTime -= this.time/this.animations;
                    currentFrame++;
                    while (currentFrame >= this.animations)
                        currentFrame -= this.animations;
                    this.sprite.gotoAndStop(currentFrame);
                }
            }
        }

        this.set_parent = function(prnt) 
        {
            prnt.sprite.addChild(this.sprite);
            var p = this.sprite;

            var x = 0;
            var y = 0;
            while(p = p.parent)
            {
                x += p.position.x;
                y += p.position.y;
            }

           this.sprite.position.x -= x;
           this.sprite.position.y -= y;
        }
    }
    this.AVK_spr = AVK_spr;

    function AVK_spr_bar(pic,x,y,w,h,columns)
    {
        this.add=function (el)
        {
            this.sprite.addChild(el.sprite);
        }
        var mem=[pic,x,y,w,h,columns];
        this.make_copy = function()
        {
            that.WND = this.WND;
            that.EL = this.EL;
            that.ID = this.ID+1;
            return new AVK_spr_bar(mem[0],mem[1],mem[2],mem[3],mem[4],mem[5]);
        }
        this.animations = columns;
        this.uni_width = w;
        this.uni_height = h;
        this.time = 1000;
        this.WND = that.WND;
        this.EL = that.EL;
        this.ID = that.ID;

        var currentTime = 0;
        var currentFrame = 0;

        if (pic=="")
        {
            this.sprite = new PIXI.DisplayObjectContainer();
        }else if (columns==1)
        {
            this.sprite = PIXI.Sprite.fromFrame(pic);
        }else
        {
            var array = [];

            for (var i = 0; i < columns; i++) 
            {
                var texture = PIXI.Texture.fromFrame(pic + "_anim_" + i);
                array.push(texture);
            }

            this.sprite = new PIXI.MovieClip(array);
        }

        this.sprite.position.x = x;
        this.sprite.position.y = y;
        that.GUI.addChild(this.sprite);

        this.update = function(tk) 
        {
            currentTime -= tk;
            if (currentTime <= 0)
            {
                currentTime = this.time/animations;
                currentFrame++;
                if (currentFrame >= animations)
                    currentFrame = 0;
                this.sprite.gotoAndStop(currentFrame);
            }
        }

        this.set_parent = function(prnt) 
        {
            prnt.sprite.addChild(this.sprite);
            var p = this.sprite;

            var x = 0;
            var y = 0;
            while(p = p.parent)
            {
                x += p.position.x;
                y += p.position.y;
            }

           this.sprite.position.x -= x;
           this.sprite.position.y -= y;
        }
    }
    this.AVK_spr_bar = AVK_spr_bar;

    function AVK_txt(pic,x,y,w,h,columns)
    {
        this.add=function (el)
        {
            this.sprite.addChild(el.sprite);
        }
        var mem=[pic,x,y,w,h,columns];
        this.make_copy = function()
        {
            that.WND = this.WND;
            that.EL = this.EL;
            that.ID = this.ID+1;
            return new AVK_txt(mem[0],mem[1],mem[2],mem[3],mem[4],mem[5]);
        }
        var fnt=Math.floor(h*0.8)+"px AVK_FNT_main";
        this.txt = new PIXI.BitmapText("", {font: fnt, align: "left"});
        this.align = "left";
        this.caption = "";

        this.animations = columns;
        this.uni_width = w;
        this.uni_height = h;
        this.time = 1000;
        this.WND = that.WND;
        this.EL = that.EL;
        this.ID = that.ID;

        var currentTime = 0;
        var currentFrame = 0;

        if (pic=="")
        {
            this.sprite = new PIXI.DisplayObjectContainer();
            this.sprite.position.x = x;
            this.sprite.position.y = y;
        }else if (columns==1)
        {
            this.sprite = PIXI.Sprite.fromFrame(pic);
            this.sprite.position.x = x;
            this.sprite.position.y = y;
        }else
        {
            var array = [];

            for (var i = 0; i < columns; i++) 
            {
                var texture = PIXI.Texture.fromFrame(pic + "_anim_" + i);
                array.push(texture);
            }

            this.sprite = new PIXI.MovieClip(array);
        }

        this.sprite.position.x = x;
        this.sprite.position.y = y;

        that.GUI.addChild(this.sprite);
        this.sprite.addChild(this.txt);

        this.update = function(tk) 
        {
            currentTime -= tk;
            if (currentTime <= 0)
            {
                currentTime = this.time/animations;
                currentFrame++;
                if (currentFrame >= animations)
                    currentFrame = 0;
                this.sprite.gotoAndStop(currentFrame);
            }
        }

        this.set_parent = function(prnt) 
        {
            prnt.sprite.addChild(this.sprite);
            var p = this.sprite;

            var x = 0;
            var y = 0;
            while(p = p.parent)
            {
                x += p.position.x;
                y += p.position.y;
            }

           this.sprite.position.x -= x;
           this.sprite.position.y -= y;
        }

        this.set_style = function(size,font,al)
        {
            this.align = al;
            var fnt = Math.floor(h*size*0.8) + "px " + font;
            this.txt.setStyle({font: fnt, align: al});
            this.set_text(this.caption);
        }

        this.refresh = function()
        {
            switch(this.align)
            {
                case "left":
                    this.txt.position.x=0;
                   
                    break;
                case "right":
                    this.txt.position.x=this.uni_width-this.txt.textWidth;
                  
                    break;
                case "center":
                    this.txt.position.x=(this.uni_width-this.txt.textWidth)/2;
                    this.txt.position.y=(this.uni_height-this.txt.textHeight)/2;
                    break;
            }
        }

        this.set_text = function(text)
        {
            this.caption = text;
            this.txt.setText(text);
           
            this.refresh();
        }
    }
    this.AVK_txt = AVK_txt;

    function AVK_btn(pic,x,y,w,h,columns)
    {
        this.add=function (el)
        {
            this.sprite.addChild(el.sprite);
        }
        var mem=[pic,x,y,w,h,columns];
        this.make_copy = function()
        {
            that.WND = this.WND;
            that.EL = this.EL;
            that.ID = this.ID+1;
            return new AVK_btn(mem[0],mem[1],mem[2],mem[3],mem[4],mem[5]);
        }
        var here=this;
        this.enabled = true;
        this.animations = columns;
        this.uni_width = w;
        this.uni_height = h;
        this.time = 1000;
        this.WND = that.WND;
        this.EL = that.EL;
        this.ID = that.ID;

        var currentTime = 0;
        var currentFrame = 0;

        if (pic=="")
        {
            this.sprite = new PIXI.DisplayObjectContainer();
        }else if (columns==1)
        {
            this.sprite = PIXI.Sprite.fromFrame(pic);
        }else
        {
            var array = [];

            for (var i = 0; i < columns; i++) 
            {
                var texture = PIXI.Texture.fromFrame(pic + "_anim_" + i);
                array.push(texture);
            }

            this.sprite = new PIXI.MovieClip(array);
        }

        this.sprite.position.x = x;
        this.sprite.position.y = y;
        this.sprite.owner = this;
        this.sprite.buttonMode = true;
        this.sprite.interactive = true;

        this.sprite.mousedown = this.sprite.touchstart = function(data)
        {
            if (!here.enabled)
                return;
            this.position.x = this.owner.down_x;
            this.position.y = this.owner.down_y;
            this.scale.x = 1 - btn_scale;
            this.scale.y = 1 - btn_scale;
            event_func("down",this.owner.WND,this.owner.EL,this.owner.ID);
            
        }
        
        this.sprite.click = this.sprite.tap = function(data)
        {
            if (!here.enabled)
                return;
            this.scale.x = 1;
            this.scale.y = 1;
            this.position.x = this.owner.up_x;
            this.position.y = this.owner.up_y;
            event_func("click",this.owner.WND,this.owner.EL,this.owner.ID);
            
        }

        this.sprite.mouseup = this.sprite.touchend = this.sprite.mouseupoutside = this.sprite.touchendoutside = function(data)
        {
            if (!here.enabled)
                return;
            this.scale.x = 1;
            this.scale.y = 1;
            this.position.x = this.owner.up_x;
            this.position.y = this.owner.up_y;
            event_func("up",this.owner.WND,this.owner.EL,this.owner.ID);
           
        }

        that.GUI.addChild(this.sprite);

        this.update = function(tk) 
        {
            currentTime -= tk;
            if (currentTime <= 0)
            {
                currentTime = this.time/animations;
                currentFrame++;
                if (currentFrame >= animations)
                    currentFrame = 0;
                this.sprite.gotoAndStop(currentFrame);
            }
        }

        this.set_enabled = function(val) 
        {
            this.enabled = val;
            if (val)
                this.sprite.alpha=1;
            else
                this.sprite.alpha=0.48;
        }

        this.set_parent = function(prnt) 
        {
            prnt.sprite.addChild(this.sprite);
            var p = this.sprite;

            var x = 0;
            var y = 0;
            while(p = p.parent)
            {
            x += p.position.x;
            y += p.position.y;
            }

            this.sprite.position.x -= x;
            this.sprite.position.y -= y;

            this.down_x -= x;
            this.down_y -= y;
            this.up_x -= x;
            this.up_y -= y;
        }

        this.refresh=function()
        {
            this.down_x = this.sprite.position.x + this.uni_width * btn_scale / 2;
            this.down_y = this.sprite.position.y + this.uni_height * btn_scale / 2;
            this.up_x = this.sprite.position.x;
            this.up_y = this.sprite.position.y;
        }

        this.refresh();
    }
    this.AVK_btn = AVK_btn;

    function AVK_bar(pic,x,y,w,h,columns)
    {
        this.add=function (el)
        {
            this.sprite.addChild(el.sprite);
        }
        var mem=[pic,x,y,w,h,columns];
        this.make_copy = function()
        {
            that.WND = this.WND;
            that.EL = this.EL;
            that.ID = this.ID+1;
            return new AVK_bar(mem[0],mem[1],mem[2],mem[3],mem[4],mem[5]);
        }
        
        var align = "l";
        var progress = 1;
        var max = 100;
        var val = 100;

        this.animations = columns;
        this.uni_width = w;
        this.uni_height = h;
        this.time = 1000;
        this.WND = that.WND;
        this.EL = that.EL;
        this.ID = that.ID;

        var currentTime = 0;
        var currentFrame = 0;

        if (pic=="")
        {
            this.sprite = new PIXI.DisplayObjectContainer();
            this.sprite.position.x = x;
            this.sprite.position.y = y;
        }else if (columns==1)
        {
            this.sprite = PIXI.Sprite.fromFrame(pic);
            this.sprite.position.x = x;
            this.sprite.position.y = y;
        }else
        {
            var array = [];

            for (var i = 0; i < columns; i++) 
            {
                var texture = PIXI.Texture.fromFrame(pic + "_anim_" + i);
                array.push(texture);
            }

            this.sprite = new PIXI.MovieClip(array);
        }

        this.sprite.position.x = x;
        this.sprite.position.y = y;
        this.old_x =this.sprite.position.x;
        this.old_y =this.sprite.position.y;

        that.GUI.addChild(this.sprite);
       

        this.update = function(tk)
        {
            currentTime -= tk;
            if (currentTime <= 0)
            {
                currentTime = this.time/animations;
                currentFrame++;
                if (currentFrame >= animations)
                    currentFrame = 0;
                this.sprite.gotoAndStop(currentFrame);
            }
        }

        this.set_parent = function(prnt) 
        {
            prnt.sprite.addChild(this.sprite);
            var p = this.sprite;

            var x = 0;
            var y = 0;
            while(p = p.parent)
            {
                x += p.position.x;
                y += p.position.y;
            }

            this.sprite.position.x -= x;
            this.sprite.position.y -= y;
            this.old_x =this.sprite.position.x;
            this.old_y =this.sprite.position.y;
        }

        this.set_max = function(m)
        {
            max=m;
            this.set_progress(val/max);
        }

        this.set_val = function(v)
        {
            val=v;
            this.set_progress(val/max);
        }

        this.get_val = function()
        {
            return val;
        }

        this.get_progress = function()
        {
            return progress;
        }

        this.set_progress = function(pr)
        {
            if (pr<0)
                pr=0;
            if (pr>1)
                pr=1;
            progress=pr;

            switch(align)
            {
                case "l":
                    this.sprite.scale.x=pr;
                    this.sprite.scale.y=1;
                    this.sprite.position.x=this.old_x;
                    this.sprite.position.y=this.old_y;
                    break;
                case "r":
                    this.sprite.scale.x=pr;
                    this.sprite.scale.y=1;
                    this.sprite.position.x=this.old_x+this.uni_width*(1-pr);
                    this.sprite.position.y=this.old_y;
                    break;
                case "u":
                    this.sprite.scale.x=1;
                    this.sprite.scale.y=pr;
                    this.sprite.position.x=this.old_x;
                    this.sprite.position.y=this.old_y;
                    break;
                case "d":
                    this.sprite.scale.x=1;
                    this.sprite.scale.y=pr;
                    this.sprite.position.x=this.old_x;
                    this.sprite.position.y=this.old_y+this.uni_height*(1-pr);
                    break;
            }
        }

        this.set_align = function(al)
        {
           align=al;
           this.set_progress(progress);
        }
    }
    this.AVK_bar = AVK_bar;

	function AVK_MAIN()
	{
		this.sprite = new PIXI.DisplayObjectContainer();
		this.add=function(el)
		{
			this.sprite.addChild(el.sprite);
		}
		that.GUI.addChild(this.sprite);
		this.sprite.visible = false;

		that.EL ="zag";
		this.zag = new AVK_spr("main_zag",0,0,600,900,1);
		this.sprite.addChild(this.zag.sprite);
		that.EL ="cloud";
		this.cloud = new AVK_spr("main_cloud",177,60,222,93,1);
		this.sprite.addChild(this.cloud.sprite);
		that.EL ="up_back";
		this.up_back = new AVK_spr("main_up_back",105,60,403,310,1);
		this.sprite.addChild(this.up_back.sprite);
		that.EL ="levels";
		this.levels = new AVK_spr("",0,0,0,0,1);
		this.sprite.addChild(this.levels.sprite);
		that.EL ="main";
		this.main = new AVK_spr("",0,0,0,0,1);
		this.sprite.addChild(this.main.sprite);
		that.EL ="btn_lev_18";
		this.btn_lev_18 = new AVK_btn("main_btn_lev_18",368,741,87,105,1);
		this.sprite.addChild(this.btn_lev_18.sprite);
		that.EL ="btn_lev_17";
		this.btn_lev_17 = new AVK_btn("main_btn_lev_17",261,741,87,105,1);
		this.sprite.addChild(this.btn_lev_17.sprite);
		that.EL ="btn_lev_16";
		this.btn_lev_16 = new AVK_btn("main_btn_lev_16",151,741,87,105,1);
		this.sprite.addChild(this.btn_lev_16.sprite);
		that.EL ="btn_lev_15";
		this.btn_lev_15 = new AVK_btn("main_btn_lev_15",43,741,87,105,1);
		this.sprite.addChild(this.btn_lev_15.sprite);
		that.EL ="btn_lev_14";
		this.btn_lev_14 = new AVK_btn("main_btn_lev_14",481,637,87,106,1);
		this.sprite.addChild(this.btn_lev_14.sprite);
		that.EL ="btn_lev_13";
		this.btn_lev_13 = new AVK_btn("main_btn_lev_13",373,637,87,103,1);
		this.sprite.addChild(this.btn_lev_13.sprite);
		that.EL ="btn_lev_12";
		this.btn_lev_12 = new AVK_btn("main_btn_lev_12",261,637,112,103,1);
		this.sprite.addChild(this.btn_lev_12.sprite);
		that.EL ="btn_lev_11";
		this.btn_lev_11 = new AVK_btn("main_btn_lev_11",151,637,87,103,1);
		this.sprite.addChild(this.btn_lev_11.sprite);
		that.EL ="btn_lev_10";
		this.btn_lev_10 = new AVK_btn("main_btn_lev_10",43,637,87,103,1);
		this.sprite.addChild(this.btn_lev_10.sprite);
		that.EL ="btn_lev_9";
		this.btn_lev_9 = new AVK_btn("main_btn_lev_9",481,535,87,103,1);
		this.sprite.addChild(this.btn_lev_9.sprite);
		that.EL ="btn_lev_8";
		this.btn_lev_8 = new AVK_btn("main_btn_lev_8",373,535,87,103,1);
		this.sprite.addChild(this.btn_lev_8.sprite);
		that.EL ="btn_lev_7";
		this.btn_lev_7 = new AVK_btn("main_btn_lev_7",261,535,87,103,1);
		this.sprite.addChild(this.btn_lev_7.sprite);
		that.EL ="btn_lev_6";
		this.btn_lev_6 = new AVK_btn("main_btn_lev_6",151,535,87,103,1);
		this.sprite.addChild(this.btn_lev_6.sprite);
		that.EL ="btn_lev_5";
		this.btn_lev_5 = new AVK_btn("main_btn_lev_5",43,535,87,103,1);
		this.sprite.addChild(this.btn_lev_5.sprite);
		that.EL ="btn_lev_4";
		this.btn_lev_4 = new AVK_btn("main_btn_lev_4",481,430,87,103,1);
		this.sprite.addChild(this.btn_lev_4.sprite);
		that.EL ="btn_lev_3";
		this.btn_lev_3 = new AVK_btn("main_btn_lev_3",373,430,87,103,1);
		this.sprite.addChild(this.btn_lev_3.sprite);
		that.EL ="btn_lev_2";
		this.btn_lev_2 = new AVK_btn("main_btn_lev_2",261,430,87,103,1);
		this.sprite.addChild(this.btn_lev_2.sprite);
		that.EL ="btn_lev_1";
		this.btn_lev_1 = new AVK_btn("main_btn_lev_1",151,430,87,103,1);
		this.sprite.addChild(this.btn_lev_1.sprite);
		that.EL ="btn_lev_0";
		this.btn_lev_0 = new AVK_btn("main_btn_lev_0",43,430,87,103,1);
		this.sprite.addChild(this.btn_lev_0.sprite);
		that.EL = "my_prg";
		this.my_prg = new AVK_avk_prg("",44,448,83,72,1);
		this.sprite.addChild(this.my_prg.sprite);
		that.EL ="btn_back";
		this.btn_back = new AVK_btn("main_btn_back",457,763,135,135,1);
		this.sprite.addChild(this.btn_back.sprite);
		that.EL ="btn_start";
		this.btn_start = new AVK_btn("main_btn_start",205,409,190,162,1);
		this.sprite.addChild(this.btn_start.sprite);
		that.EL ="btn_no_snd";
		this.btn_no_snd = new AVK_btn("main_btn_no_snd",547,5,42,40,1);
		this.sprite.addChild(this.btn_no_snd.sprite);
		that.EL ="btn_snd";
		this.btn_snd = new AVK_btn("main_btn_snd",547,5,42,40,1);
		this.sprite.addChild(this.btn_snd.sprite);
		that.EL ="btn_more";//more
		this.btn_more = new AVK_btn("main_btn_more",11,9,104,100,1);
		this.sprite.addChild(this.btn_more.sprite);

		this.btn_lev_18.set_parent(this.levels);
		this.btn_lev_17.set_parent(this.levels);
		this.btn_lev_16.set_parent(this.levels);
		this.btn_lev_15.set_parent(this.levels);
		this.btn_lev_14.set_parent(this.levels);
		this.btn_lev_13.set_parent(this.levels);
		this.btn_lev_12.set_parent(this.levels);
		this.btn_lev_11.set_parent(this.levels);
		this.btn_lev_10.set_parent(this.levels);
		this.btn_lev_9.set_parent(this.levels);
		this.btn_lev_8.set_parent(this.levels);
		this.btn_lev_7.set_parent(this.levels);
		this.btn_lev_6.set_parent(this.levels);
		this.btn_lev_5.set_parent(this.levels);
		this.btn_lev_4.set_parent(this.levels);
		this.btn_lev_3.set_parent(this.levels);
		this.btn_lev_2.set_parent(this.levels);
		this.btn_lev_1.set_parent(this.levels);
		this.btn_lev_0.set_parent(this.levels);
		this.my_prg.set_parent(this.btn_lev_0);
		this.btn_back.set_parent(this.levels);
		this.btn_start.set_parent(this.main);
	}
	this.AVK_MAIN=AVK_MAIN;

    function AVK_avk_prg(pic,x,y,w,h,columns)
    {
        this.add=function (el)
        {
            this.sprite.addChild(el.sprite);
        }
        var mem=[pic,x,y,w,h,columns];
        this.make_copy = function()
        {
            that.WND = this.WND;
            that.EL = this.EL;
            that.ID = this.ID+1;
            return new AVK_avk_prg(mem[0],mem[1],mem[2],mem[3],mem[4],mem[5]);
        }
    	this.uni_width = w;
    	this.uni_height = h;
    	this.sprite = new PIXI.DisplayObjectContainer();
        that.GUI.addChild(this.sprite);
        this.WND = that.WND;
        this.EL = that.EL;
        this.ID = that.ID;

		that.EL ="prg_back";
		this.prg_back = new AVK_spr("main_prg_back",11,42,60,27,1);
		this.sprite.addChild(this.prg_back.sprite);
		that.EL ="prg_close";
		this.prg_close = new AVK_spr("main_prg_close",0,0,83,71,1);
		this.sprite.addChild(this.prg_close.sprite);
		that.EL ="prg_0";
		this.prg_0 = new AVK_spr("main_prg_0",8,41,23,21,1);
		this.sprite.addChild(this.prg_0.sprite);
		that.EL ="prg_1";
		this.prg_1 = new AVK_spr("main_prg_1",29,51,23,21,1);
		this.sprite.addChild(this.prg_1.sprite);
		that.EL ="prg_2";
		this.prg_2 = new AVK_spr("main_prg_2",49,41,23,21,1);
		this.sprite.addChild(this.prg_2.sprite);
   
        this.sprite.position.x = x;
        this.sprite.position.y = y;

        this.set_parent = function(prnt) 
        {
            prnt.sprite.addChild(this.sprite);
            var p = this.sprite;

            var x = 0;
            var y = 0;
            while(p = p.parent)
            {
                x += p.position.x;
                y += p.position.y;
            }

           this.sprite.position.x -= x;
           this.sprite.position.y -= y;
        }
    }
    this.AVK_avk_prg=AVK_avk_prg;

	function AVK_GAME()
	{
		this.sprite = new PIXI.DisplayObjectContainer();
		this.add=function(el)
		{
			this.sprite.addChild(el.sprite);
		}
		that.GUI.addChild(this.sprite);
		this.sprite.visible = false;

		that.EL ="back";
		this.back = new AVK_spr("",0,0,600,900,1);
		this.sprite.addChild(this.back.sprite);
		that.EL ="res_9";
		this.res_9 = new AVK_spr("game_res_9",60,159,480,658,1);
		this.sprite.addChild(this.res_9.sprite);
		that.EL ="res_8";
		this.res_8 = new AVK_spr("game_res_8",60,159,480,658,1);
		this.sprite.addChild(this.res_8.sprite);
		that.EL ="res_7";
		this.res_7 = new AVK_spr("game_res_7",60,159,480,658,1);
		this.sprite.addChild(this.res_7.sprite);
		that.EL ="res_6";
		this.res_6 = new AVK_spr("game_res_6",60,159,480,658,1);
		this.sprite.addChild(this.res_6.sprite);
		that.EL ="res_5";
		this.res_5 = new AVK_spr("game_res_5",60,159,480,658,1);
		this.sprite.addChild(this.res_5.sprite);
		that.EL ="res_4";
		this.res_4 = new AVK_spr("game_res_4",60,159,480,658,1);
		this.sprite.addChild(this.res_4.sprite);
		that.EL ="res_3";
		this.res_3 = new AVK_spr("game_res_3",60,159,480,658,1);
		this.sprite.addChild(this.res_3.sprite);
		that.EL ="res_2";
		this.res_2 = new AVK_spr("game_res_2",60,159,480,658,1);
		this.sprite.addChild(this.res_2.sprite);
		that.EL ="res_1";
		this.res_1 = new AVK_spr("game_res_1",60,159,480,658,1);
		this.sprite.addChild(this.res_1.sprite);
		that.EL ="res_0";
		this.res_0 = new AVK_spr("game_res_0",60,159,480,658,1);
		this.sprite.addChild(this.res_0.sprite);
		that.EL ="back_place_shad";
		this.back_place_shad = new AVK_spr("",0,0,0,0,1);
		this.sprite.addChild(this.back_place_shad.sprite);
		that.EL ="back_place";
		this.back_place = new AVK_spr("",0,0,0,0,1);
		this.sprite.addChild(this.back_place.sprite);
		that.EL ="up_0";
		this.up_0 = new AVK_spr("",0,0,0,0,1);
		this.sprite.addChild(this.up_0.sprite);
		that.EL ="up_1";
		this.up_1 = new AVK_spr("",0,0,0,0,1);
		this.sprite.addChild(this.up_1.sprite);
		that.EL ="up_2";
		this.up_2 = new AVK_spr("",0,0,0,0,1);
		this.sprite.addChild(this.up_2.sprite);
		that.EL ="up_3";
		this.up_3 = new AVK_spr("game_up_3",163,441,252,387,1);
		this.sprite.addChild(this.up_3.sprite);
		that.EL ="up_4";
		this.up_4 = new AVK_spr("",0,0,0,0,1);
		this.sprite.addChild(this.up_4.sprite);
		that.EL ="up_5";
		this.up_5 = new AVK_spr("",0,0,0,0,1);
		this.sprite.addChild(this.up_5.sprite);
		that.EL ="up_6";
		this.up_6 = new AVK_spr("game_up_6",44,201,278,188,1);
		this.sprite.addChild(this.up_6.sprite);
		that.EL ="up_7";
		this.up_7 = new AVK_spr("game_up_7",62,225,477,599,1);
		this.sprite.addChild(this.up_7.sprite);
		that.EL ="up_8";
		this.up_8 = new AVK_spr("game_up_8",60,175,480,643,1);
		this.sprite.addChild(this.up_8.sprite);
		that.EL ="up_9";
		this.up_9 = new AVK_spr("game_up_9",69,156,471,624,1);
		this.sprite.addChild(this.up_9.sprite);
		that.EL ="place_shad";
		this.place_shad = new AVK_spr("",0,0,0,0,1);
		this.sprite.addChild(this.place_shad.sprite);
		that.EL ="place";
		this.place = new AVK_spr("",0,0,0,0,1);
		this.sprite.addChild(this.place.sprite);
		that.EL ="head_9";
		this.head_9 = new AVK_spr("game_head_9",430,78,169,165,1);
		this.sprite.addChild(this.head_9.sprite);
		that.EL ="head_8";
		this.head_8 = new AVK_spr("game_head_8",526,101,73,206,1);
		this.sprite.addChild(this.head_8.sprite);
		that.EL ="head_7";
		this.head_7 = new AVK_spr("game_head_7",550,149,49,203,1);
		this.sprite.addChild(this.head_7.sprite);
		that.EL ="head_6";
		this.head_6 = new AVK_spr("game_head_6",0,408,126,232,1);
		this.sprite.addChild(this.head_6.sprite);
		that.EL ="head_5";
		this.head_5 = new AVK_spr("game_head_5",507,143,92,203,1);
		this.sprite.addChild(this.head_5.sprite);
		that.EL ="head_4";
		this.head_4 = new AVK_spr("game_head_4",0,350,111,248,1);
		this.sprite.addChild(this.head_4.sprite);
		that.EL ="head_3";
		this.head_3 = new AVK_spr("game_head_3",0,156,82,210,1);
		this.sprite.addChild(this.head_3.sprite);
		that.EL ="head_2";
		this.head_2 = new AVK_spr("game_head_2",524,194,75,205,1);
		this.sprite.addChild(this.head_2.sprite);
		that.EL ="head_1";
		this.head_1 = new AVK_spr("game_head_1",0,79,101,186,1);
		this.sprite.addChild(this.head_1.sprite);
		that.EL ="head_0";
		this.head_0 = new AVK_spr("game_head_0",486,136,113,204,1);
		this.sprite.addChild(this.head_0.sprite);
		that.EL ="gui_bar";
		this.gui_bar = new AVK_spr("game_gui_bar",-1,-1,601,80,1);
		this.sprite.addChild(this.gui_bar.sprite);
		that.EL ="waves_0";
		this.waves_0 = new AVK_spr("game_waves_0",46,3,42,13,1);
		this.sprite.addChild(this.waves_0.sprite);
		that.EL ="waves_2";
		this.waves_2 = new AVK_spr("game_waves_2",88,3,42,13,1);
		this.sprite.addChild(this.waves_2.sprite);
		that.EL ="waves_4";
		this.waves_4 = new AVK_spr("game_waves_4",130,3,42,13,1);
		this.sprite.addChild(this.waves_4.sprite);
		that.EL ="waves_6";
		this.waves_6 = new AVK_spr("game_waves_6",172,3,42,13,1);
		this.sprite.addChild(this.waves_6.sprite);
		that.EL ="waves_8";
		this.waves_8 = new AVK_spr("game_waves_8",216,3,42,13,1);
		this.sprite.addChild(this.waves_8.sprite);
		that.EL ="waves_10";
		this.waves_10 = new AVK_spr("game_waves_10",258,3,42,13,1);
		this.sprite.addChild(this.waves_10.sprite);
		that.EL ="waves_12";
		this.waves_12 = new AVK_spr("game_waves_12",300,3,42,13,1);
		this.sprite.addChild(this.waves_12.sprite);
		that.EL ="waves_14";
		this.waves_14 = new AVK_spr("game_waves_14",342,3,42,13,1);
		this.sprite.addChild(this.waves_14.sprite);
		that.EL ="waves_16";
		this.waves_16 = new AVK_spr("game_waves_16",384,3,42,13,1);
		this.sprite.addChild(this.waves_16.sprite);
		that.EL ="waves_18";
		this.waves_18 = new AVK_spr("game_waves_18",426,3,42,13,1);
		this.sprite.addChild(this.waves_18.sprite);
		that.EL ="waves_20";
		this.waves_20 = new AVK_spr("game_waves_20",468,3,42,13,1);
		this.sprite.addChild(this.waves_20.sprite);
		that.EL ="waves_22";
		this.waves_22 = new AVK_spr("game_waves_22",510,3,42,13,1);
		this.sprite.addChild(this.waves_22.sprite);
		that.EL ="waves_23";
		this.waves_23 = new AVK_spr("game_waves_23",511,34,42,13,1);
		this.sprite.addChild(this.waves_23.sprite);
		that.EL ="waves_21";
		this.waves_21 = new AVK_spr("game_waves_21",469,34,42,13,1);
		this.sprite.addChild(this.waves_21.sprite);
		that.EL ="waves_19";
		this.waves_19 = new AVK_spr("game_waves_19",427,34,42,13,1);
		this.sprite.addChild(this.waves_19.sprite);
		that.EL ="waves_17";
		this.waves_17 = new AVK_spr("game_waves_17",385,34,42,13,1);
		this.sprite.addChild(this.waves_17.sprite);
		that.EL ="waves_15";
		this.waves_15 = new AVK_spr("game_waves_15",342,34,42,13,1);
		this.sprite.addChild(this.waves_15.sprite);
		that.EL ="waves_13";
		this.waves_13 = new AVK_spr("game_waves_13",300,34,42,13,1);
		this.sprite.addChild(this.waves_13.sprite);
		that.EL ="waves_11";
		this.waves_11 = new AVK_spr("game_waves_11",258,34,42,13,1);
		this.sprite.addChild(this.waves_11.sprite);
		that.EL ="waves_9";
		this.waves_9 = new AVK_spr("game_waves_9",216,34,42,13,1);
		this.sprite.addChild(this.waves_9.sprite);
		that.EL ="waves_7";
		this.waves_7 = new AVK_spr("game_waves_7",174,34,42,13,1);
		this.sprite.addChild(this.waves_7.sprite);
		that.EL ="waves_5";
		this.waves_5 = new AVK_spr("game_waves_5",132,34,42,13,1);
		this.sprite.addChild(this.waves_5.sprite);
		that.EL ="waves_3";
		this.waves_3 = new AVK_spr("game_waves_3",90,34,42,13,1);
		this.sprite.addChild(this.waves_3.sprite);
		that.EL ="waves_1";
		this.waves_1 = new AVK_spr("game_waves_1",48,34,42,13,1);
		this.sprite.addChild(this.waves_1.sprite);
		that.EL ="txt_score";
		this.txt_score = new AVK_txt("",60,13,235,34,1);
		this.sprite.addChild(this.txt_score.sprite);
		that.EL ="txt_score_part";
		this.txt_score_part = new AVK_txt("",121,121,235,34,1);
		this.sprite.addChild(this.txt_score_part.sprite);
		that.EL ="zvezda_part";
		this.zvezda_part = new AVK_spr("game_zvezda_part",292,125,34,30,1);
		this.sprite.addChild(this.zvezda_part.sprite);
		that.EL ="back_bar";
		this.back_bar = new AVK_spr("game_back_bar",307,20,231,12,1);
		this.sprite.addChild(this.back_bar.sprite);
		that.EL ="prog_0";
		this.prog_0 = new AVK_spr("game_prog_0",310,21,225,8,1);
		this.sprite.addChild(this.prog_0.sprite);
		that.EL ="prog_1";
		this.prog_1 = new AVK_spr("game_prog_1",310,22,225,7,1);
		this.sprite.addChild(this.prog_1.sprite);
		that.EL ="prog_2";
		this.prog_2 = new AVK_spr("game_prog_2",310,22,225,7,1);
		this.sprite.addChild(this.prog_2.sprite);
		that.EL ="riska_0";
		this.riska_0 = new AVK_spr("game_riska_0",496,16,9,18,1);
		this.sprite.addChild(this.riska_0.sprite);
		that.EL ="riska_1";
		this.riska_1 = new AVK_spr("game_riska_1",519,16,9,18,1);
		this.sprite.addChild(this.riska_1.sprite);
		that.EL ="uppper";
		this.uppper = new AVK_spr("game_uppper",195,40,89,52,1);
		this.sprite.addChild(this.uppper.sprite);
		that.EL ="ready_0";
		this.ready_0 = new AVK_spr("game_ready_0",205,46,36,35,1);
		this.sprite.addChild(this.ready_0.sprite);
		that.EL ="ready_1";
		this.ready_1 = new AVK_spr("game_ready_1",238,45,36,35,1);
		this.sprite.addChild(this.ready_1.sprite);
		that.EL ="up_b";
		this.up_b = new AVK_spr("",221,33,36,35,1);
		this.sprite.addChild(this.up_b.sprite);
		that.EL ="start_place";
		this.start_place = new AVK_spr("",0,73,600,5,1);
		this.sprite.addChild(this.start_place.sprite);
		that.EL ="btn_no_snd";
		this.btn_no_snd = new AVK_btn("game_btn_no_snd",549,6,42,40,1);
		this.sprite.addChild(this.btn_no_snd.sprite);
		that.EL ="btn_snd";
		this.btn_snd = new AVK_btn("game_btn_snd",549,6,42,40,1);
		this.sprite.addChild(this.btn_snd.sprite);
		that.EL ="btn_close";
		this.btn_close = new AVK_btn("game_btn_close",6,4,42,42,1);
		this.sprite.addChild(this.btn_close.sprite);
		that.EL ="level_0";
		this.level_0 = new AVK_spr("",0,0,0,0,1);
		this.sprite.addChild(this.level_0.sprite);
		that.EL ="level_1";
		this.level_1 = new AVK_spr("",0,0,0,0,1);
		this.sprite.addChild(this.level_1.sprite);
		that.EL ="level_2";
		this.level_2 = new AVK_spr("",0,0,0,0,1);
		this.sprite.addChild(this.level_2.sprite);
		that.EL ="level_3";
		this.level_3 = new AVK_spr("",0,0,0,0,1);
		this.sprite.addChild(this.level_3.sprite);
		that.EL ="level_4";
		this.level_4 = new AVK_spr("",0,0,0,0,1);
		this.sprite.addChild(this.level_4.sprite);
		that.EL ="level_5";
		this.level_5 = new AVK_spr("",0,0,0,0,1);
		this.sprite.addChild(this.level_5.sprite);
		that.EL ="level_6";
		this.level_6 = new AVK_spr("",0,0,0,0,1);
		this.sprite.addChild(this.level_6.sprite);
		that.EL ="level_7";
		this.level_7 = new AVK_spr("",0,0,0,0,1);
		this.sprite.addChild(this.level_7.sprite);
		that.EL ="level_8";
		this.level_8 = new AVK_spr("",0,0,0,0,1);
		this.sprite.addChild(this.level_8.sprite);
		that.EL ="level_9";
		this.level_9 = new AVK_spr("",0,0,0,0,1);
		this.sprite.addChild(this.level_9.sprite);
		that.EL ="l_0_pnt_0";
		this.l_0_pnt_0 = new AVK_spr("",-45,804,9,9,1);
		this.sprite.addChild(this.l_0_pnt_0.sprite);
		that.EL ="l_0_pnt_1";
		this.l_0_pnt_1 = new AVK_spr("",260,799,9,9,1);
		this.sprite.addChild(this.l_0_pnt_1.sprite);
		that.EL ="l_0_pnt_2";
		this.l_0_pnt_2 = new AVK_spr("",448,852,9,9,1);
		this.sprite.addChild(this.l_0_pnt_2.sprite);
		that.EL ="l_0_pnt_3";
		this.l_0_pnt_3 = new AVK_spr("",565,736,9,9,1);
		this.sprite.addChild(this.l_0_pnt_3.sprite);
		that.EL ="l_0_pnt_4";
		this.l_0_pnt_4 = new AVK_spr("",449,616,9,9,1);
		this.sprite.addChild(this.l_0_pnt_4.sprite);
		that.EL ="l_0_pnt_5";
		this.l_0_pnt_5 = new AVK_spr("",299,656,9,9,1);
		this.sprite.addChild(this.l_0_pnt_5.sprite);
		that.EL ="l_0_pnt_6";
		this.l_0_pnt_6 = new AVK_spr("",139,702,9,9,1);
		this.sprite.addChild(this.l_0_pnt_6.sprite);
		that.EL ="l_0_pnt_7";
		this.l_0_pnt_7 = new AVK_spr("",24,577,9,9,1);
		this.sprite.addChild(this.l_0_pnt_7.sprite);
		that.EL ="l_0_pnt_8";
		this.l_0_pnt_8 = new AVK_spr("",142,464,9,9,1);
		this.sprite.addChild(this.l_0_pnt_8.sprite);
		that.EL ="l_0_pnt_9";
		this.l_0_pnt_9 = new AVK_spr("",301,510,9,9,1);
		this.sprite.addChild(this.l_0_pnt_9.sprite);
		that.EL ="l_0_pnt_10";
		this.l_0_pnt_10 = new AVK_spr("",447,543,9,9,1);
		this.sprite.addChild(this.l_0_pnt_10.sprite);
		that.EL ="l_0_pnt_11";
		this.l_0_pnt_11 = new AVK_spr("",567,421,9,9,1);
		this.sprite.addChild(this.l_0_pnt_11.sprite);
		that.EL ="l_0_pnt_12";
		this.l_0_pnt_12 = new AVK_spr("",449,311,9,9,1);
		this.sprite.addChild(this.l_0_pnt_12.sprite);
		that.EL ="l_0_pnt_13";
		this.l_0_pnt_13 = new AVK_spr("",300,347,9,9,1);
		this.sprite.addChild(this.l_0_pnt_13.sprite);
		that.EL ="l_0_pnt_14";
		this.l_0_pnt_14 = new AVK_spr("",144,389,9,9,1);
		this.sprite.addChild(this.l_0_pnt_14.sprite);
		that.EL ="l_0_pnt_15";
		this.l_0_pnt_15 = new AVK_spr("",24,270,9,9,1);
		this.sprite.addChild(this.l_0_pnt_15.sprite);
		that.EL ="l_0_pnt_16";
		this.l_0_pnt_16 = new AVK_spr("",156,161,9,9,1);
		this.sprite.addChild(this.l_0_pnt_16.sprite);
		that.EL ="l_0_pnt_17";
		this.l_0_pnt_17 = new AVK_spr("",340,210,9,9,1);
		this.sprite.addChild(this.l_0_pnt_17.sprite);
		that.EL ="l_0_pnt_18";
		this.l_0_pnt_18 = new AVK_spr("",564,210,9,9,1);
		this.sprite.addChild(this.l_0_pnt_18.sprite);
		that.EL ="l_1_pnt_0";
		this.l_1_pnt_0 = new AVK_spr("",638,808,9,9,1);
		this.sprite.addChild(this.l_1_pnt_0.sprite);
		that.EL ="l_1_pnt_1";
		this.l_1_pnt_1 = new AVK_spr("",81,803,9,9,1);
		this.sprite.addChild(this.l_1_pnt_1.sprite);
		that.EL ="l_1_pnt_2";
		this.l_1_pnt_2 = new AVK_spr("",54,773,9,9,1);
		this.sprite.addChild(this.l_1_pnt_2.sprite);
		that.EL ="l_1_pnt_3";
		this.l_1_pnt_3 = new AVK_spr("",54,344,9,9,1);
		this.sprite.addChild(this.l_1_pnt_3.sprite);
		that.EL ="l_1_pnt_4";
		this.l_1_pnt_4 = new AVK_spr("",90,308,9,9,1);
		this.sprite.addChild(this.l_1_pnt_4.sprite);
		that.EL ="l_1_pnt_5";
		this.l_1_pnt_5 = new AVK_spr("",373,308,9,9,1);
		this.sprite.addChild(this.l_1_pnt_5.sprite);
		that.EL ="l_1_pnt_6";
		this.l_1_pnt_6 = new AVK_spr("",423,344,9,9,1);
		this.sprite.addChild(this.l_1_pnt_6.sprite);
		that.EL ="l_1_pnt_7";
		this.l_1_pnt_7 = new AVK_spr("",423,426,9,9,1);
		this.sprite.addChild(this.l_1_pnt_7.sprite);
		that.EL ="l_1_pnt_8";
		this.l_1_pnt_8 = new AVK_spr("",382,466,9,9,1);
		this.sprite.addChild(this.l_1_pnt_8.sprite);
		that.EL ="l_1_pnt_9";
		this.l_1_pnt_9 = new AVK_spr("",211,466,9,9,1);
		this.sprite.addChild(this.l_1_pnt_9.sprite);
		that.EL ="l_1_pnt_10";
		this.l_1_pnt_10 = new AVK_spr("",180,505,9,9,1);
		this.sprite.addChild(this.l_1_pnt_10.sprite);
		that.EL ="l_1_pnt_11";
		this.l_1_pnt_11 = new AVK_spr("",180,605,9,9,1);
		this.sprite.addChild(this.l_1_pnt_11.sprite);
		that.EL ="l_1_pnt_12";
		this.l_1_pnt_12 = new AVK_spr("",220,645,9,9,1);
		this.sprite.addChild(this.l_1_pnt_12.sprite);
		that.EL ="l_1_pnt_13";
		this.l_1_pnt_13 = new AVK_spr("",503,649,9,9,1);
		this.sprite.addChild(this.l_1_pnt_13.sprite);
		that.EL ="l_1_pnt_14";
		this.l_1_pnt_14 = new AVK_spr("",540,610,9,9,1);
		this.sprite.addChild(this.l_1_pnt_14.sprite);
		that.EL ="l_1_pnt_15";
		this.l_1_pnt_15 = new AVK_spr("",540,177,9,9,1);
		this.sprite.addChild(this.l_1_pnt_15.sprite);
		that.EL ="l_1_pnt_16";
		this.l_1_pnt_16 = new AVK_spr("",503,139,9,9,1);
		this.sprite.addChild(this.l_1_pnt_16.sprite);
		that.EL ="l_1_pnt_17";
		this.l_1_pnt_17 = new AVK_spr("",21,139,9,9,1);
		this.sprite.addChild(this.l_1_pnt_17.sprite);
		that.EL ="l_2_pnt_0";
		this.l_2_pnt_0 = new AVK_spr("",-49,270,9,9,1);
		this.sprite.addChild(this.l_2_pnt_0.sprite);
		that.EL ="l_2_pnt_1";
		this.l_2_pnt_1 = new AVK_spr("",140,270,9,9,1);
		this.sprite.addChild(this.l_2_pnt_1.sprite);
		that.EL ="l_2_pnt_2";
		this.l_2_pnt_2 = new AVK_spr("",161,274,9,9,1);
		this.sprite.addChild(this.l_2_pnt_2.sprite);
		that.EL ="l_2_pnt_3";
		this.l_2_pnt_3 = new AVK_spr("",170,307,9,9,1);
		this.sprite.addChild(this.l_2_pnt_3.sprite);
		that.EL ="l_2_pnt_4";
		this.l_2_pnt_4 = new AVK_spr("",154,334,9,9,1);
		this.sprite.addChild(this.l_2_pnt_4.sprite);
		that.EL ="l_2_pnt_5";
		this.l_2_pnt_5 = new AVK_spr("",63,405,9,9,1);
		this.sprite.addChild(this.l_2_pnt_5.sprite);
		that.EL ="l_2_pnt_6";
		this.l_2_pnt_6 = new AVK_spr("",20,591,9,9,1);
		this.sprite.addChild(this.l_2_pnt_6.sprite);
		that.EL ="l_2_pnt_7";
		this.l_2_pnt_7 = new AVK_spr("",92,741,9,9,1);
		this.sprite.addChild(this.l_2_pnt_7.sprite);
		that.EL ="l_2_pnt_8";
		this.l_2_pnt_8 = new AVK_spr("",300,808,9,9,1);
		this.sprite.addChild(this.l_2_pnt_8.sprite);
		that.EL ="l_2_pnt_9";
		this.l_2_pnt_9 = new AVK_spr("",483,761,9,9,1);
		this.sprite.addChild(this.l_2_pnt_9.sprite);
		that.EL ="l_2_pnt_10";
		this.l_2_pnt_10 = new AVK_spr("",560,611,9,9,1);
		this.sprite.addChild(this.l_2_pnt_10.sprite);
		that.EL ="l_2_pnt_11";
		this.l_2_pnt_11 = new AVK_spr("",560,436,9,9,1);
		this.sprite.addChild(this.l_2_pnt_11.sprite);
		that.EL ="l_2_pnt_12";
		this.l_2_pnt_12 = new AVK_spr("",493,351,9,9,1);
		this.sprite.addChild(this.l_2_pnt_12.sprite);
		that.EL ="l_2_pnt_13";
		this.l_2_pnt_13 = new AVK_spr("",440,349,9,9,1);
		this.sprite.addChild(this.l_2_pnt_13.sprite);
		that.EL ="l_2_pnt_14";
		this.l_2_pnt_14 = new AVK_spr("",424,395,9,9,1);
		this.sprite.addChild(this.l_2_pnt_14.sprite);
		that.EL ="l_2_pnt_15";
		this.l_2_pnt_15 = new AVK_spr("",474,477,9,9,1);
		this.sprite.addChild(this.l_2_pnt_15.sprite);
		that.EL ="l_2_pnt_16";
		this.l_2_pnt_16 = new AVK_spr("",465,571,9,9,1);
		this.sprite.addChild(this.l_2_pnt_16.sprite);
		that.EL ="l_2_pnt_17";
		this.l_2_pnt_17 = new AVK_spr("",405,655,9,9,1);
		this.sprite.addChild(this.l_2_pnt_17.sprite);
		that.EL ="l_2_pnt_18";
		this.l_2_pnt_18 = new AVK_spr("",289,688,9,9,1);
		this.sprite.addChild(this.l_2_pnt_18.sprite);
		that.EL ="l_2_pnt_19";
		this.l_2_pnt_19 = new AVK_spr("",180,650,9,9,1);
		this.sprite.addChild(this.l_2_pnt_19.sprite);
		that.EL ="l_2_pnt_20";
		this.l_2_pnt_20 = new AVK_spr("",131,571,9,9,1);
		this.sprite.addChild(this.l_2_pnt_20.sprite);
		that.EL ="l_2_pnt_21";
		this.l_2_pnt_21 = new AVK_spr("",154,472,9,9,1);
		this.sprite.addChild(this.l_2_pnt_21.sprite);
		that.EL ="l_2_pnt_22";
		this.l_2_pnt_22 = new AVK_spr("",219,400,9,9,1);
		this.sprite.addChild(this.l_2_pnt_22.sprite);
		that.EL ="l_2_pnt_23";
		this.l_2_pnt_23 = new AVK_spr("",263,400,9,9,1);
		this.sprite.addChild(this.l_2_pnt_23.sprite);
		that.EL ="l_2_pnt_24";
		this.l_2_pnt_24 = new AVK_spr("",285,450,9,9,1);
		this.sprite.addChild(this.l_2_pnt_24.sprite);
		that.EL ="l_2_pnt_25";
		this.l_2_pnt_25 = new AVK_spr("",238,518,9,9,1);
		this.sprite.addChild(this.l_2_pnt_25.sprite);
		that.EL ="l_2_pnt_26";
		this.l_2_pnt_26 = new AVK_spr("",247,561,9,9,1);
		this.sprite.addChild(this.l_2_pnt_26.sprite);
		that.EL ="l_2_pnt_27";
		this.l_2_pnt_27 = new AVK_spr("",299,582,9,9,1);
		this.sprite.addChild(this.l_2_pnt_27.sprite);
		that.EL ="l_2_pnt_28";
		this.l_2_pnt_28 = new AVK_spr("",346,561,9,9,1);
		this.sprite.addChild(this.l_2_pnt_28.sprite);
		that.EL ="l_2_pnt_29";
		this.l_2_pnt_29 = new AVK_spr("",356,528,9,9,1);
		this.sprite.addChild(this.l_2_pnt_29.sprite);
		that.EL ="l_2_pnt_30";
		this.l_2_pnt_30 = new AVK_spr("",351,460,9,9,1);
		this.sprite.addChild(this.l_2_pnt_30.sprite);
		that.EL ="l_2_pnt_31";
		this.l_2_pnt_31 = new AVK_spr("",332,405,9,9,1);
		this.sprite.addChild(this.l_2_pnt_31.sprite);
		that.EL ="l_2_pnt_32";
		this.l_2_pnt_32 = new AVK_spr("",327,334,9,9,1);
		this.sprite.addChild(this.l_2_pnt_32.sprite);
		that.EL ="l_2_pnt_33";
		this.l_2_pnt_33 = new AVK_spr("",342,284,9,9,1);
		this.sprite.addChild(this.l_2_pnt_33.sprite);
		that.EL ="l_2_pnt_34";
		this.l_2_pnt_34 = new AVK_spr("",386,270,9,9,1);
		this.sprite.addChild(this.l_2_pnt_34.sprite);
		that.EL ="l_2_pnt_35";
		this.l_2_pnt_35 = new AVK_spr("",595,267,9,9,1);
		this.sprite.addChild(this.l_2_pnt_35.sprite);
		that.EL ="l_3_pnt_0";
		this.l_3_pnt_0 = new AVK_spr("",630,814,9,9,1);
		this.sprite.addChild(this.l_3_pnt_0.sprite);
		that.EL ="l_3_pnt_1";
		this.l_3_pnt_1 = new AVK_spr("",364,819,9,9,1);
		this.sprite.addChild(this.l_3_pnt_1.sprite);
		that.EL ="l_3_pnt_2";
		this.l_3_pnt_2 = new AVK_spr("",214,819,9,9,1);
		this.sprite.addChild(this.l_3_pnt_2.sprite);
		that.EL ="l_3_pnt_3";
		this.l_3_pnt_3 = new AVK_spr("",91,819,9,9,1);
		this.sprite.addChild(this.l_3_pnt_3.sprite);
		that.EL ="l_3_pnt_4";
		this.l_3_pnt_4 = new AVK_spr("",41,819,9,9,1);
		this.sprite.addChild(this.l_3_pnt_4.sprite);
		that.EL ="l_3_pnt_5";
		this.l_3_pnt_5 = new AVK_spr("",20,770,9,9,1);
		this.sprite.addChild(this.l_3_pnt_5.sprite);
		that.EL ="l_3_pnt_6";
		this.l_3_pnt_6 = new AVK_spr("",41,723,9,9,1);
		this.sprite.addChild(this.l_3_pnt_6.sprite);
		that.EL ="l_3_pnt_7";
		this.l_3_pnt_7 = new AVK_spr("",87,723,9,9,1);
		this.sprite.addChild(this.l_3_pnt_7.sprite);
		that.EL ="l_3_pnt_8";
		this.l_3_pnt_8 = new AVK_spr("",492,723,9,9,1);
		this.sprite.addChild(this.l_3_pnt_8.sprite);
		that.EL ="l_3_pnt_9";
		this.l_3_pnt_9 = new AVK_spr("",540,723,9,9,1);
		this.sprite.addChild(this.l_3_pnt_9.sprite);
		that.EL ="l_3_pnt_10";
		this.l_3_pnt_10 = new AVK_spr("",570,678,9,9,1);
		this.sprite.addChild(this.l_3_pnt_10.sprite);
		that.EL ="l_3_pnt_11";
		this.l_3_pnt_11 = new AVK_spr("",544,630,9,9,1);
		this.sprite.addChild(this.l_3_pnt_11.sprite);
		that.EL ="l_3_pnt_12";
		this.l_3_pnt_12 = new AVK_spr("",492,630,9,9,1);
		this.sprite.addChild(this.l_3_pnt_12.sprite);
		that.EL ="l_3_pnt_13";
		this.l_3_pnt_13 = new AVK_spr("",438,630,9,9,1);
		this.sprite.addChild(this.l_3_pnt_13.sprite);
		that.EL ="l_3_pnt_14";
		this.l_3_pnt_14 = new AVK_spr("",293,630,9,9,1);
		this.sprite.addChild(this.l_3_pnt_14.sprite);
		that.EL ="l_3_pnt_15";
		this.l_3_pnt_15 = new AVK_spr("",141,630,9,9,1);
		this.sprite.addChild(this.l_3_pnt_15.sprite);
		that.EL ="l_3_pnt_16";
		this.l_3_pnt_16 = new AVK_spr("",96,630,9,9,1);
		this.sprite.addChild(this.l_3_pnt_16.sprite);
		that.EL ="l_3_pnt_17";
		this.l_3_pnt_17 = new AVK_spr("",46,630,9,9,1);
		this.sprite.addChild(this.l_3_pnt_17.sprite);
		that.EL ="l_3_pnt_18";
		this.l_3_pnt_18 = new AVK_spr("",25,581,9,9,1);
		this.sprite.addChild(this.l_3_pnt_18.sprite);
		that.EL ="l_3_pnt_19";
		this.l_3_pnt_19 = new AVK_spr("",46,534,9,9,1);
		this.sprite.addChild(this.l_3_pnt_19.sprite);
		that.EL ="l_3_pnt_20";
		this.l_3_pnt_20 = new AVK_spr("",92,534,9,9,1);
		this.sprite.addChild(this.l_3_pnt_20.sprite);
		that.EL ="l_3_pnt_21";
		this.l_3_pnt_21 = new AVK_spr("",496,534,9,9,1);
		this.sprite.addChild(this.l_3_pnt_21.sprite);
		that.EL ="l_3_pnt_22";
		this.l_3_pnt_22 = new AVK_spr("",544,534,9,9,1);
		this.sprite.addChild(this.l_3_pnt_22.sprite);
		that.EL ="l_3_pnt_23";
		this.l_3_pnt_23 = new AVK_spr("",574,489,9,9,1);
		this.sprite.addChild(this.l_3_pnt_23.sprite);
		that.EL ="l_3_pnt_24";
		this.l_3_pnt_24 = new AVK_spr("",549,441,9,9,1);
		this.sprite.addChild(this.l_3_pnt_24.sprite);
		that.EL ="l_3_pnt_25";
		this.l_3_pnt_25 = new AVK_spr("",517,436,9,9,1);
		this.sprite.addChild(this.l_3_pnt_25.sprite);
		that.EL ="l_3_pnt_26";
		this.l_3_pnt_26 = new AVK_spr("",373,436,9,9,1);
		this.sprite.addChild(this.l_3_pnt_26.sprite);
		that.EL ="l_3_pnt_27";
		this.l_3_pnt_27 = new AVK_spr("",223,436,9,9,1);
		this.sprite.addChild(this.l_3_pnt_27.sprite);
		that.EL ="l_3_pnt_28";
		this.l_3_pnt_28 = new AVK_spr("",96,436,9,9,1);
		this.sprite.addChild(this.l_3_pnt_28.sprite);
		that.EL ="l_3_pnt_29";
		this.l_3_pnt_29 = new AVK_spr("",46,436,9,9,1);
		this.sprite.addChild(this.l_3_pnt_29.sprite);
		that.EL ="l_3_pnt_30";
		this.l_3_pnt_30 = new AVK_spr("",25,387,9,9,1);
		this.sprite.addChild(this.l_3_pnt_30.sprite);
		that.EL ="l_3_pnt_31";
		this.l_3_pnt_31 = new AVK_spr("",46,340,9,9,1);
		this.sprite.addChild(this.l_3_pnt_31.sprite);
		that.EL ="l_3_pnt_32";
		this.l_3_pnt_32 = new AVK_spr("",92,340,9,9,1);
		this.sprite.addChild(this.l_3_pnt_32.sprite);
		that.EL ="l_3_pnt_33";
		this.l_3_pnt_33 = new AVK_spr("",496,340,9,9,1);
		this.sprite.addChild(this.l_3_pnt_33.sprite);
		that.EL ="l_3_pnt_34";
		this.l_3_pnt_34 = new AVK_spr("",544,340,9,9,1);
		this.sprite.addChild(this.l_3_pnt_34.sprite);
		that.EL ="l_3_pnt_35";
		this.l_3_pnt_35 = new AVK_spr("",574,295,9,9,1);
		this.sprite.addChild(this.l_3_pnt_35.sprite);
		that.EL ="l_3_pnt_36";
		this.l_3_pnt_36 = new AVK_spr("",549,247,9,9,1);
		this.sprite.addChild(this.l_3_pnt_36.sprite);
		that.EL ="l_3_pnt_37";
		this.l_3_pnt_37 = new AVK_spr("",496,247,9,9,1);
		this.sprite.addChild(this.l_3_pnt_37.sprite);
		that.EL ="l_3_pnt_38";
		this.l_3_pnt_38 = new AVK_spr("",-9,243,9,9,1);
		this.sprite.addChild(this.l_3_pnt_38.sprite);
		that.EL ="l_4_pnt_0";
		this.l_4_pnt_0 = new AVK_spr("",639,728,9,9,1);
		this.sprite.addChild(this.l_4_pnt_0.sprite);
		that.EL ="l_4_pnt_1";
		this.l_4_pnt_1 = new AVK_spr("",472,837,9,9,1);
		this.sprite.addChild(this.l_4_pnt_1.sprite);
		that.EL ="l_4_pnt_2";
		this.l_4_pnt_2 = new AVK_spr("",294,873,9,9,1);
		this.sprite.addChild(this.l_4_pnt_2.sprite);
		that.EL ="l_4_pnt_3";
		this.l_4_pnt_3 = new AVK_spr("",117,841,9,9,1);
		this.sprite.addChild(this.l_4_pnt_3.sprite);
		that.EL ="l_4_pnt_4";
		this.l_4_pnt_4 = new AVK_spr("",31,762,9,9,1);
		this.sprite.addChild(this.l_4_pnt_4.sprite);
		that.EL ="l_4_pnt_5";
		this.l_4_pnt_5 = new AVK_spr("",31,694,9,9,1);
		this.sprite.addChild(this.l_4_pnt_5.sprite);
		that.EL ="l_4_pnt_6";
		this.l_4_pnt_6 = new AVK_spr("",88,679,9,9,1);
		this.sprite.addChild(this.l_4_pnt_6.sprite);
		that.EL ="l_4_pnt_7";
		this.l_4_pnt_7 = new AVK_spr("",167,757,9,9,1);
		this.sprite.addChild(this.l_4_pnt_7.sprite);
		that.EL ="l_4_pnt_8";
		this.l_4_pnt_8 = new AVK_spr("",295,789,9,9,1);
		this.sprite.addChild(this.l_4_pnt_8.sprite);
		that.EL ="l_4_pnt_9";
		this.l_4_pnt_9 = new AVK_spr("",441,757,9,9,1);
		this.sprite.addChild(this.l_4_pnt_9.sprite);
		that.EL ="l_4_pnt_10";
		this.l_4_pnt_10 = new AVK_spr("",560,694,9,9,1);
		this.sprite.addChild(this.l_4_pnt_10.sprite);
		that.EL ="l_4_pnt_11";
		this.l_4_pnt_11 = new AVK_spr("",573,640,9,9,1);
		this.sprite.addChild(this.l_4_pnt_11.sprite);
		that.EL ="l_4_pnt_12";
		this.l_4_pnt_12 = new AVK_spr("",528,622,9,9,1);
		this.sprite.addChild(this.l_4_pnt_12.sprite);
		that.EL ="l_4_pnt_13";
		this.l_4_pnt_13 = new AVK_spr("",419,689,9,9,1);
		this.sprite.addChild(this.l_4_pnt_13.sprite);
		that.EL ="l_4_pnt_14";
		this.l_4_pnt_14 = new AVK_spr("",295,708,9,9,1);
		this.sprite.addChild(this.l_4_pnt_14.sprite);
		that.EL ="l_4_pnt_15";
		this.l_4_pnt_15 = new AVK_spr("",202,684,9,9,1);
		this.sprite.addChild(this.l_4_pnt_15.sprite);
		that.EL ="l_4_pnt_16";
		this.l_4_pnt_16 = new AVK_spr("",117,602,9,9,1);
		this.sprite.addChild(this.l_4_pnt_16.sprite);
		that.EL ="l_4_pnt_17";
		this.l_4_pnt_17 = new AVK_spr("",122,543,9,9,1);
		this.sprite.addChild(this.l_4_pnt_17.sprite);
		that.EL ="l_4_pnt_18";
		this.l_4_pnt_18 = new AVK_spr("",190,543,9,9,1);
		this.sprite.addChild(this.l_4_pnt_18.sprite);
		that.EL ="l_4_pnt_19";
		this.l_4_pnt_19 = new AVK_spr("",256,602,9,9,1);
		this.sprite.addChild(this.l_4_pnt_19.sprite);
		that.EL ="l_4_pnt_20";
		this.l_4_pnt_20 = new AVK_spr("",366,618,9,9,1);
		this.sprite.addChild(this.l_4_pnt_20.sprite);
		that.EL ="l_4_pnt_21";
		this.l_4_pnt_21 = new AVK_spr("",463,592,9,9,1);
		this.sprite.addChild(this.l_4_pnt_21.sprite);
		that.EL ="l_4_pnt_22";
		this.l_4_pnt_22 = new AVK_spr("",565,525,9,9,1);
		this.sprite.addChild(this.l_4_pnt_22.sprite);
		that.EL ="l_4_pnt_23";
		this.l_4_pnt_23 = new AVK_spr("",578,467,9,9,1);
		this.sprite.addChild(this.l_4_pnt_23.sprite);
		that.EL ="l_4_pnt_24";
		this.l_4_pnt_24 = new AVK_spr("",528,445,9,9,1);
		this.sprite.addChild(this.l_4_pnt_24.sprite);
		that.EL ="l_4_pnt_25";
		this.l_4_pnt_25 = new AVK_spr("",438,497,9,9,1);
		this.sprite.addChild(this.l_4_pnt_25.sprite);
		that.EL ="l_4_pnt_26";
		this.l_4_pnt_26 = new AVK_spr("",371,525,9,9,1);
		this.sprite.addChild(this.l_4_pnt_26.sprite);
		that.EL ="l_4_pnt_27";
		this.l_4_pnt_27 = new AVK_spr("",274,502,9,9,1);
		this.sprite.addChild(this.l_4_pnt_27.sprite);
		that.EL ="l_4_pnt_28";
		this.l_4_pnt_28 = new AVK_spr("",211,462,9,9,1);
		this.sprite.addChild(this.l_4_pnt_28.sprite);
		that.EL ="l_4_pnt_29";
		this.l_4_pnt_29 = new AVK_spr("",221,399,9,9,1);
		this.sprite.addChild(this.l_4_pnt_29.sprite);
		that.EL ="l_4_pnt_30";
		this.l_4_pnt_30 = new AVK_spr("",279,384,9,9,1);
		this.sprite.addChild(this.l_4_pnt_30.sprite);
		that.EL ="l_4_pnt_31";
		this.l_4_pnt_31 = new AVK_spr("",362,420,9,9,1);
		this.sprite.addChild(this.l_4_pnt_31.sprite);
		that.EL ="l_4_pnt_32";
		this.l_4_pnt_32 = new AVK_spr("",443,399,9,9,1);
		this.sprite.addChild(this.l_4_pnt_32.sprite);
		that.EL ="l_4_pnt_33";
		this.l_4_pnt_33 = new AVK_spr("",518,360,9,9,1);
		this.sprite.addChild(this.l_4_pnt_33.sprite);
		that.EL ="l_4_pnt_34";
		this.l_4_pnt_34 = new AVK_spr("",564,314,9,9,1);
		this.sprite.addChild(this.l_4_pnt_34.sprite);
		that.EL ="l_4_pnt_35";
		this.l_4_pnt_35 = new AVK_spr("",582,261,9,9,1);
		this.sprite.addChild(this.l_4_pnt_35.sprite);
		that.EL ="l_4_pnt_36";
		this.l_4_pnt_36 = new AVK_spr("",540,226,9,9,1);
		this.sprite.addChild(this.l_4_pnt_36.sprite);
		that.EL ="l_4_pnt_37";
		this.l_4_pnt_37 = new AVK_spr("",477,266,9,9,1);
		this.sprite.addChild(this.l_4_pnt_37.sprite);
		that.EL ="l_4_pnt_38";
		this.l_4_pnt_38 = new AVK_spr("",381,319,9,9,1);
		this.sprite.addChild(this.l_4_pnt_38.sprite);
		that.EL ="l_4_pnt_39";
		this.l_4_pnt_39 = new AVK_spr("",286,261,9,9,1);
		this.sprite.addChild(this.l_4_pnt_39.sprite);
		that.EL ="l_4_pnt_40";
		this.l_4_pnt_40 = new AVK_spr("",181,261,9,9,1);
		this.sprite.addChild(this.l_4_pnt_40.sprite);
		that.EL ="l_4_pnt_41";
		this.l_4_pnt_41 = new AVK_spr("",116,339,9,9,1);
		this.sprite.addChild(this.l_4_pnt_41.sprite);
		that.EL ="l_4_pnt_42";
		this.l_4_pnt_42 = new AVK_spr("",6,435,9,9,1);
		this.sprite.addChild(this.l_4_pnt_42.sprite);
		that.EL ="l_5_pnt_0";
		this.l_5_pnt_0 = new AVK_spr("",-43,218,9,9,1);
		this.sprite.addChild(this.l_5_pnt_0.sprite);
		that.EL ="l_5_pnt_1";
		this.l_5_pnt_1 = new AVK_spr("",227,218,9,9,1);
		this.sprite.addChild(this.l_5_pnt_1.sprite);
		that.EL ="l_5_pnt_2";
		this.l_5_pnt_2 = new AVK_spr("",264,264,9,9,1);
		this.sprite.addChild(this.l_5_pnt_2.sprite);
		that.EL ="l_5_pnt_3";
		this.l_5_pnt_3 = new AVK_spr("",264,316,9,9,1);
		this.sprite.addChild(this.l_5_pnt_3.sprite);
		that.EL ="l_5_pnt_4";
		this.l_5_pnt_4 = new AVK_spr("",227,363,9,9,1);
		this.sprite.addChild(this.l_5_pnt_4.sprite);
		that.EL ="l_5_pnt_5";
		this.l_5_pnt_5 = new AVK_spr("",69,363,9,9,1);
		this.sprite.addChild(this.l_5_pnt_5.sprite);
		that.EL ="l_5_pnt_6";
		this.l_5_pnt_6 = new AVK_spr("",19,407,9,9,1);
		this.sprite.addChild(this.l_5_pnt_6.sprite);
		that.EL ="l_5_pnt_7";
		this.l_5_pnt_7 = new AVK_spr("",19,467,9,9,1);
		this.sprite.addChild(this.l_5_pnt_7.sprite);
		that.EL ="l_5_pnt_8";
		this.l_5_pnt_8 = new AVK_spr("",59,513,9,9,1);
		this.sprite.addChild(this.l_5_pnt_8.sprite);
		that.EL ="l_5_pnt_9";
		this.l_5_pnt_9 = new AVK_spr("",227,513,9,9,1);
		this.sprite.addChild(this.l_5_pnt_9.sprite);
		that.EL ="l_5_pnt_10";
		this.l_5_pnt_10 = new AVK_spr("",264,557,9,9,1);
		this.sprite.addChild(this.l_5_pnt_10.sprite);
		that.EL ="l_5_pnt_11";
		this.l_5_pnt_11 = new AVK_spr("",264,608,9,9,1);
		this.sprite.addChild(this.l_5_pnt_11.sprite);
		that.EL ="l_5_pnt_12";
		this.l_5_pnt_12 = new AVK_spr("",227,655,9,9,1);
		this.sprite.addChild(this.l_5_pnt_12.sprite);
		that.EL ="l_5_pnt_13";
		this.l_5_pnt_13 = new AVK_spr("",59,655,9,9,1);
		this.sprite.addChild(this.l_5_pnt_13.sprite);
		that.EL ="l_5_pnt_14";
		this.l_5_pnt_14 = new AVK_spr("",28,698,9,9,1);
		this.sprite.addChild(this.l_5_pnt_14.sprite);
		that.EL ="l_5_pnt_15";
		this.l_5_pnt_15 = new AVK_spr("",111,803,9,9,1);
		this.sprite.addChild(this.l_5_pnt_15.sprite);
		that.EL ="l_5_pnt_16";
		this.l_5_pnt_16 = new AVK_spr("",237,873,9,9,1);
		this.sprite.addChild(this.l_5_pnt_16.sprite);
		that.EL ="l_5_pnt_17";
		this.l_5_pnt_17 = new AVK_spr("",354,873,9,9,1);
		this.sprite.addChild(this.l_5_pnt_17.sprite);
		that.EL ="l_5_pnt_18";
		this.l_5_pnt_18 = new AVK_spr("",491,803,9,9,1);
		this.sprite.addChild(this.l_5_pnt_18.sprite);
		that.EL ="l_5_pnt_19";
		this.l_5_pnt_19 = new AVK_spr("",570,693,9,9,1);
		this.sprite.addChild(this.l_5_pnt_19.sprite);
		that.EL ="l_5_pnt_20";
		this.l_5_pnt_20 = new AVK_spr("",528,660,9,9,1);
		this.sprite.addChild(this.l_5_pnt_20.sprite);
		that.EL ="l_5_pnt_21";
		this.l_5_pnt_21 = new AVK_spr("",359,655,9,9,1);
		this.sprite.addChild(this.l_5_pnt_21.sprite);
		that.EL ="l_5_pnt_22";
		this.l_5_pnt_22 = new AVK_spr("",323,613,9,9,1);
		this.sprite.addChild(this.l_5_pnt_22.sprite);
		that.EL ="l_5_pnt_23";
		this.l_5_pnt_23 = new AVK_spr("",323,557,9,9,1);
		this.sprite.addChild(this.l_5_pnt_23.sprite);
		that.EL ="l_5_pnt_24";
		this.l_5_pnt_24 = new AVK_spr("",359,513,9,9,1);
		this.sprite.addChild(this.l_5_pnt_24.sprite);
		that.EL ="l_5_pnt_25";
		this.l_5_pnt_25 = new AVK_spr("",514,513,9,9,1);
		this.sprite.addChild(this.l_5_pnt_25.sprite);
		that.EL ="l_5_pnt_26";
		this.l_5_pnt_26 = new AVK_spr("",555,467,9,9,1);
		this.sprite.addChild(this.l_5_pnt_26.sprite);
		that.EL ="l_5_pnt_27";
		this.l_5_pnt_27 = new AVK_spr("",555,407,9,9,1);
		this.sprite.addChild(this.l_5_pnt_27.sprite);
		that.EL ="l_5_pnt_28";
		this.l_5_pnt_28 = new AVK_spr("",514,358,9,9,1);
		this.sprite.addChild(this.l_5_pnt_28.sprite);
		that.EL ="l_5_pnt_29";
		this.l_5_pnt_29 = new AVK_spr("",359,358,9,9,1);
		this.sprite.addChild(this.l_5_pnt_29.sprite);
		that.EL ="l_5_pnt_30";
		this.l_5_pnt_30 = new AVK_spr("",323,316,9,9,1);
		this.sprite.addChild(this.l_5_pnt_30.sprite);
		that.EL ="l_5_pnt_31";
		this.l_5_pnt_31 = new AVK_spr("",323,264,9,9,1);
		this.sprite.addChild(this.l_5_pnt_31.sprite);
		that.EL ="l_5_pnt_32";
		this.l_5_pnt_32 = new AVK_spr("",359,218,9,9,1);
		this.sprite.addChild(this.l_5_pnt_32.sprite);
		that.EL ="l_5_pnt_33";
		this.l_5_pnt_33 = new AVK_spr("",586,215,9,9,1);
		this.sprite.addChild(this.l_5_pnt_33.sprite);
		that.EL ="l_6_pnt_0";
		this.l_6_pnt_0 = new AVK_spr("",635,851,9,9,1);
		this.sprite.addChild(this.l_6_pnt_0.sprite);
		that.EL ="l_6_pnt_1";
		this.l_6_pnt_1 = new AVK_spr("",107,849,9,9,1);
		this.sprite.addChild(this.l_6_pnt_1.sprite);
		that.EL ="l_6_pnt_2";
		this.l_6_pnt_2 = new AVK_spr("",42,792,9,9,1);
		this.sprite.addChild(this.l_6_pnt_2.sprite);
		that.EL ="l_6_pnt_3";
		this.l_6_pnt_3 = new AVK_spr("",42,696,9,9,1);
		this.sprite.addChild(this.l_6_pnt_3.sprite);
		that.EL ="l_6_pnt_4";
		this.l_6_pnt_4 = new AVK_spr("",112,643,9,9,1);
		this.sprite.addChild(this.l_6_pnt_4.sprite);
		that.EL ="l_6_pnt_5";
		this.l_6_pnt_5 = new AVK_spr("",459,643,9,9,1);
		this.sprite.addChild(this.l_6_pnt_5.sprite);
		that.EL ="l_6_pnt_6";
		this.l_6_pnt_6 = new AVK_spr("",553,553,9,9,1);
		this.sprite.addChild(this.l_6_pnt_6.sprite);
		that.EL ="l_6_pnt_7";
		this.l_6_pnt_7 = new AVK_spr("",553,297,9,9,1);
		this.sprite.addChild(this.l_6_pnt_7.sprite);
		that.EL ="l_6_pnt_8";
		this.l_6_pnt_8 = new AVK_spr("",468,215,9,9,1);
		this.sprite.addChild(this.l_6_pnt_8.sprite);
		that.EL ="l_6_pnt_9";
		this.l_6_pnt_9 = new AVK_spr("",388,210,9,9,1);
		this.sprite.addChild(this.l_6_pnt_9.sprite);
		that.EL ="l_6_pnt_10";
		this.l_6_pnt_10 = new AVK_spr("",327,215,9,9,1);
		this.sprite.addChild(this.l_6_pnt_10.sprite);
		that.EL ="l_6_pnt_11";
		this.l_6_pnt_11 = new AVK_spr("",37,215,9,9,1);
		this.sprite.addChild(this.l_6_pnt_11.sprite);
		that.EL ="l_6_pnt_12";
		this.l_6_pnt_12 = new AVK_spr("",37,359,9,9,1);
		this.sprite.addChild(this.l_6_pnt_12.sprite);
		that.EL ="l_6_pnt_13";
		this.l_6_pnt_13 = new AVK_spr("",249,359,9,9,1);
		this.sprite.addChild(this.l_6_pnt_13.sprite);
		that.EL ="l_6_pnt_14";
		this.l_6_pnt_14 = new AVK_spr("",309,359,9,9,1);
		this.sprite.addChild(this.l_6_pnt_14.sprite);
		that.EL ="l_6_pnt_15";
		this.l_6_pnt_15 = new AVK_spr("",397,364,9,9,1);
		this.sprite.addChild(this.l_6_pnt_15.sprite);
		that.EL ="l_6_pnt_16";
		this.l_6_pnt_16 = new AVK_spr("",449,406,9,9,1);
		this.sprite.addChild(this.l_6_pnt_16.sprite);
		that.EL ="l_6_pnt_17";
		this.l_6_pnt_17 = new AVK_spr("",449,467,9,9,1);
		this.sprite.addChild(this.l_6_pnt_17.sprite);
		that.EL ="l_6_pnt_18";
		this.l_6_pnt_18 = new AVK_spr("",407,519,9,9,1);
		this.sprite.addChild(this.l_6_pnt_18.sprite);
		that.EL ="l_6_pnt_19";
		this.l_6_pnt_19 = new AVK_spr("",43,514,9,9,1);
		this.sprite.addChild(this.l_6_pnt_19.sprite);
		that.EL ="l_7_pnt_0";
		this.l_7_pnt_0 = new AVK_spr("",93,936,9,9,1);
		this.sprite.addChild(this.l_7_pnt_0.sprite);
		that.EL ="l_7_pnt_1";
		this.l_7_pnt_1 = new AVK_spr("",192,796,9,9,1);
		this.sprite.addChild(this.l_7_pnt_1.sprite);
		that.EL ="l_7_pnt_2";
		this.l_7_pnt_2 = new AVK_spr("",197,764,9,9,1);
		this.sprite.addChild(this.l_7_pnt_2.sprite);
		that.EL ="l_7_pnt_3";
		this.l_7_pnt_3 = new AVK_spr("",152,664,9,9,1);
		this.sprite.addChild(this.l_7_pnt_3.sprite);
		that.EL ="l_7_pnt_4";
		this.l_7_pnt_4 = new AVK_spr("",112,572,9,9,1);
		this.sprite.addChild(this.l_7_pnt_4.sprite);
		that.EL ="l_7_pnt_5";
		this.l_7_pnt_5 = new AVK_spr("",101,547,9,9,1);
		this.sprite.addChild(this.l_7_pnt_5.sprite);
		that.EL ="l_7_pnt_6";
		this.l_7_pnt_6 = new AVK_spr("",86,515,9,9,1);
		this.sprite.addChild(this.l_7_pnt_6.sprite);
		that.EL ="l_7_pnt_7";
		this.l_7_pnt_7 = new AVK_spr("",77,486,9,9,1);
		this.sprite.addChild(this.l_7_pnt_7.sprite);
		that.EL ="l_7_pnt_8";
		this.l_7_pnt_8 = new AVK_spr("",76,454,9,9,1);
		this.sprite.addChild(this.l_7_pnt_8.sprite);
		that.EL ="l_7_pnt_9";
		this.l_7_pnt_9 = new AVK_spr("",135,423,9,9,1);
		this.sprite.addChild(this.l_7_pnt_9.sprite);
		that.EL ="l_7_pnt_10";
		this.l_7_pnt_10 = new AVK_spr("",174,433,9,9,1);
		this.sprite.addChild(this.l_7_pnt_10.sprite);
		that.EL ="l_7_pnt_11";
		this.l_7_pnt_11 = new AVK_spr("",183,454,9,9,1);
		this.sprite.addChild(this.l_7_pnt_11.sprite);
		that.EL ="l_7_pnt_12";
		this.l_7_pnt_12 = new AVK_spr("",300,713,9,9,1);
		this.sprite.addChild(this.l_7_pnt_12.sprite);
		that.EL ="l_7_pnt_13";
		this.l_7_pnt_13 = new AVK_spr("",309,723,9,9,1);
		this.sprite.addChild(this.l_7_pnt_13.sprite);
		that.EL ="l_7_pnt_14";
		this.l_7_pnt_14 = new AVK_spr("",344,733,9,9,1);
		this.sprite.addChild(this.l_7_pnt_14.sprite);
		that.EL ="l_7_pnt_15";
		this.l_7_pnt_15 = new AVK_spr("",395,713,9,9,1);
		this.sprite.addChild(this.l_7_pnt_15.sprite);
		that.EL ="l_7_pnt_16";
		this.l_7_pnt_16 = new AVK_spr("",405,666,9,9,1);
		this.sprite.addChild(this.l_7_pnt_16.sprite);
		that.EL ="l_7_pnt_17";
		this.l_7_pnt_17 = new AVK_spr("",395,648,9,9,1);
		this.sprite.addChild(this.l_7_pnt_17.sprite);
		that.EL ="l_7_pnt_18";
		this.l_7_pnt_18 = new AVK_spr("",295,414,9,9,1);
		this.sprite.addChild(this.l_7_pnt_18.sprite);
		that.EL ="l_7_pnt_19";
		this.l_7_pnt_19 = new AVK_spr("",290,394,9,9,1);
		this.sprite.addChild(this.l_7_pnt_19.sprite);
		that.EL ="l_7_pnt_20";
		this.l_7_pnt_20 = new AVK_spr("",290,370,9,9,1);
		this.sprite.addChild(this.l_7_pnt_20.sprite);
		that.EL ="l_7_pnt_21";
		this.l_7_pnt_21 = new AVK_spr("",304,346,9,9,1);
		this.sprite.addChild(this.l_7_pnt_21.sprite);
		that.EL ="l_7_pnt_22";
		this.l_7_pnt_22 = new AVK_spr("",430,341,9,9,1);
		this.sprite.addChild(this.l_7_pnt_22.sprite);
		that.EL ="l_7_pnt_23";
		this.l_7_pnt_23 = new AVK_spr("",501,370,9,9,1);
		this.sprite.addChild(this.l_7_pnt_23.sprite);
		that.EL ="l_7_pnt_24";
		this.l_7_pnt_24 = new AVK_spr("",560,467,9,9,1);
		this.sprite.addChild(this.l_7_pnt_24.sprite);
		that.EL ="l_7_pnt_25";
		this.l_7_pnt_25 = new AVK_spr("",511,543,9,9,1);
		this.sprite.addChild(this.l_7_pnt_25.sprite);
		that.EL ="l_7_pnt_26";
		this.l_7_pnt_26 = new AVK_spr("",451,568,9,9,1);
		this.sprite.addChild(this.l_7_pnt_26.sprite);
		that.EL ="l_7_pnt_27";
		this.l_7_pnt_27 = new AVK_spr("",389,568,9,9,1);
		this.sprite.addChild(this.l_7_pnt_27.sprite);
		that.EL ="l_7_pnt_28";
		this.l_7_pnt_28 = new AVK_spr("",280,573,9,9,1);
		this.sprite.addChild(this.l_7_pnt_28.sprite);
		that.EL ="l_7_pnt_29";
		this.l_7_pnt_29 = new AVK_spr("",96,573,9,9,1);
		this.sprite.addChild(this.l_7_pnt_29.sprite);
		that.EL ="l_7_pnt_30";
		this.l_7_pnt_30 = new AVK_spr("",66,573,9,9,1);
		this.sprite.addChild(this.l_7_pnt_30.sprite);
		that.EL ="l_7_pnt_31";
		this.l_7_pnt_31 = new AVK_spr("",26,533,9,9,1);
		this.sprite.addChild(this.l_7_pnt_31.sprite);
		that.EL ="l_7_pnt_32";
		this.l_7_pnt_32 = new AVK_spr("",26,510,9,9,1);
		this.sprite.addChild(this.l_7_pnt_32.sprite);
		that.EL ="l_7_pnt_33";
		this.l_7_pnt_33 = new AVK_spr("",26,282,9,9,1);
		this.sprite.addChild(this.l_7_pnt_33.sprite);
		that.EL ="l_7_pnt_34";
		this.l_7_pnt_34 = new AVK_spr("",26,260,9,9,1);
		this.sprite.addChild(this.l_7_pnt_34.sprite);
		that.EL ="l_7_pnt_35";
		this.l_7_pnt_35 = new AVK_spr("",62,225,9,9,1);
		this.sprite.addChild(this.l_7_pnt_35.sprite);
		that.EL ="l_7_pnt_36";
		this.l_7_pnt_36 = new AVK_spr("",81,225,9,9,1);
		this.sprite.addChild(this.l_7_pnt_36.sprite);
		that.EL ="l_7_pnt_37";
		this.l_7_pnt_37 = new AVK_spr("",592,225,9,9,1);
		this.sprite.addChild(this.l_7_pnt_37.sprite);
		that.EL ="l_8_pnt_0";
		this.l_8_pnt_0 = new AVK_spr("",-51,771,9,9,1);
		this.sprite.addChild(this.l_8_pnt_0.sprite);
		that.EL ="l_8_pnt_1";
		this.l_8_pnt_1 = new AVK_spr("",-9,701,9,9,1);
		this.sprite.addChild(this.l_8_pnt_1.sprite);
		that.EL ="l_8_pnt_2";
		this.l_8_pnt_2 = new AVK_spr("",18,637,9,9,1);
		this.sprite.addChild(this.l_8_pnt_2.sprite);
		that.EL ="l_8_pnt_3";
		this.l_8_pnt_3 = new AVK_spr("",103,642,9,9,1);
		this.sprite.addChild(this.l_8_pnt_3.sprite);
		that.EL ="l_8_pnt_4";
		this.l_8_pnt_4 = new AVK_spr("",145,808,9,9,1);
		this.sprite.addChild(this.l_8_pnt_4.sprite);
		that.EL ="l_8_pnt_5";
		this.l_8_pnt_5 = new AVK_spr("",229,813,9,9,1);
		this.sprite.addChild(this.l_8_pnt_5.sprite);
		that.EL ="l_8_pnt_6";
		this.l_8_pnt_6 = new AVK_spr("",254,647,9,9,1);
		this.sprite.addChild(this.l_8_pnt_6.sprite);
		that.EL ="l_8_pnt_7";
		this.l_8_pnt_7 = new AVK_spr("",337,652,9,9,1);
		this.sprite.addChild(this.l_8_pnt_7.sprite);
		that.EL ="l_8_pnt_8";
		this.l_8_pnt_8 = new AVK_spr("",378,808,9,9,1);
		this.sprite.addChild(this.l_8_pnt_8.sprite);
		that.EL ="l_8_pnt_9";
		this.l_8_pnt_9 = new AVK_spr("",487,796,9,9,1);
		this.sprite.addChild(this.l_8_pnt_9.sprite);
		that.EL ="l_8_pnt_10";
		this.l_8_pnt_10 = new AVK_spr("",579,372,9,9,1);
		this.sprite.addChild(this.l_8_pnt_10.sprite);
		that.EL ="l_8_pnt_11";
		this.l_8_pnt_11 = new AVK_spr("",487,348,9,9,1);
		this.sprite.addChild(this.l_8_pnt_11.sprite);
		that.EL ="l_8_pnt_12";
		this.l_8_pnt_12 = new AVK_spr("",430,552,9,9,1);
		this.sprite.addChild(this.l_8_pnt_12.sprite);
		that.EL ="l_8_pnt_13";
		this.l_8_pnt_13 = new AVK_spr("",337,532,9,9,1);
		this.sprite.addChild(this.l_8_pnt_13.sprite);
		that.EL ="l_8_pnt_14";
		this.l_8_pnt_14 = new AVK_spr("",309,214,9,9,1);
		this.sprite.addChild(this.l_8_pnt_14.sprite);
		that.EL ="l_8_pnt_15";
		this.l_8_pnt_15 = new AVK_spr("",239,209,9,9,1);
		this.sprite.addChild(this.l_8_pnt_15.sprite);
		that.EL ="l_8_pnt_16";
		this.l_8_pnt_16 = new AVK_spr("",205,408,9,9,1);
		this.sprite.addChild(this.l_8_pnt_16.sprite);
		that.EL ="l_8_pnt_17";
		this.l_8_pnt_17 = new AVK_spr("",196,567,9,9,1);
		this.sprite.addChild(this.l_8_pnt_17.sprite);
		that.EL ="l_8_pnt_18";
		this.l_8_pnt_18 = new AVK_spr("",135,610,9,9,1);
		this.sprite.addChild(this.l_8_pnt_18.sprite);
		that.EL ="l_8_pnt_19";
		this.l_8_pnt_19 = new AVK_spr("",57,588,9,9,1);
		this.sprite.addChild(this.l_8_pnt_19.sprite);
		that.EL ="l_8_pnt_20";
		this.l_8_pnt_20 = new AVK_spr("",13,439,9,9,1);
		this.sprite.addChild(this.l_8_pnt_20.sprite);
		that.EL ="l_8_pnt_21";
		this.l_8_pnt_21 = new AVK_spr("",23,287,9,9,1);
		this.sprite.addChild(this.l_8_pnt_21.sprite);
		that.EL ="l_8_pnt_22";
		this.l_8_pnt_22 = new AVK_spr("",93,234,9,9,1);
		this.sprite.addChild(this.l_8_pnt_22.sprite);
		that.EL ="l_8_pnt_23";
		this.l_8_pnt_23 = new AVK_spr("",139,279,9,9,1);
		this.sprite.addChild(this.l_8_pnt_23.sprite);
		that.EL ="l_8_pnt_24";
		this.l_8_pnt_24 = new AVK_spr("",206,348,9,9,1);
		this.sprite.addChild(this.l_8_pnt_24.sprite);
		that.EL ="l_8_pnt_25";
		this.l_8_pnt_25 = new AVK_spr("",273,403,9,9,1);
		this.sprite.addChild(this.l_8_pnt_25.sprite);
		that.EL ="l_8_pnt_26";
		this.l_8_pnt_26 = new AVK_spr("",337,352,9,9,1);
		this.sprite.addChild(this.l_8_pnt_26.sprite);
		that.EL ="l_8_pnt_27";
		this.l_8_pnt_27 = new AVK_spr("",394,268,9,9,1);
		this.sprite.addChild(this.l_8_pnt_27.sprite);
		that.EL ="l_8_pnt_28";
		this.l_8_pnt_28 = new AVK_spr("",430,214,9,9,1);
		this.sprite.addChild(this.l_8_pnt_28.sprite);
		that.EL ="l_8_pnt_29";
		this.l_8_pnt_29 = new AVK_spr("",492,177,9,9,1);
		this.sprite.addChild(this.l_8_pnt_29.sprite);
		that.EL ="l_8_pnt_30";
		this.l_8_pnt_30 = new AVK_spr("",595,173,9,9,1);
		this.sprite.addChild(this.l_8_pnt_30.sprite);
		that.EL ="l_9_pnt_0";
		this.l_9_pnt_0 = new AVK_spr("",639,819,9,9,1);
		this.sprite.addChild(this.l_9_pnt_0.sprite);
		that.EL ="l_9_pnt_1";
		this.l_9_pnt_1 = new AVK_spr("",425,806,9,9,1);
		this.sprite.addChild(this.l_9_pnt_1.sprite);
		that.EL ="l_9_pnt_2";
		this.l_9_pnt_2 = new AVK_spr("",264,738,9,9,1);
		this.sprite.addChild(this.l_9_pnt_2.sprite);
		that.EL ="l_9_pnt_3";
		this.l_9_pnt_3 = new AVK_spr("",138,577,9,9,1);
		this.sprite.addChild(this.l_9_pnt_3.sprite);
		that.EL ="l_9_pnt_4";
		this.l_9_pnt_4 = new AVK_spr("",177,394,9,9,1);
		this.sprite.addChild(this.l_9_pnt_4.sprite);
		that.EL ="l_9_pnt_5";
		this.l_9_pnt_5 = new AVK_spr("",253,394,9,9,1);
		this.sprite.addChild(this.l_9_pnt_5.sprite);
		that.EL ="l_9_pnt_6";
		this.l_9_pnt_6 = new AVK_spr("",289,556,9,9,1);
		this.sprite.addChild(this.l_9_pnt_6.sprite);
		that.EL ="l_9_pnt_7";
		this.l_9_pnt_7 = new AVK_spr("",274,615,9,9,1);
		this.sprite.addChild(this.l_9_pnt_7.sprite);
		that.EL ="l_9_pnt_8";
		this.l_9_pnt_8 = new AVK_spr("",240,685,9,9,1);
		this.sprite.addChild(this.l_9_pnt_8.sprite);
		that.EL ="l_9_pnt_9";
		this.l_9_pnt_9 = new AVK_spr("",234,698,9,9,1);
		this.sprite.addChild(this.l_9_pnt_9.sprite);
		that.EL ="l_9_pnt_10";
		this.l_9_pnt_10 = new AVK_spr("",172,757,9,9,1);
		this.sprite.addChild(this.l_9_pnt_10.sprite);
		that.EL ="l_9_pnt_11";
		this.l_9_pnt_11 = new AVK_spr("",18,619,9,9,1);
		this.sprite.addChild(this.l_9_pnt_11.sprite);
		that.EL ="l_9_pnt_12";
		this.l_9_pnt_12 = new AVK_spr("",58,337,9,9,1);
		this.sprite.addChild(this.l_9_pnt_12.sprite);
		that.EL ="l_9_pnt_13";
		this.l_9_pnt_13 = new AVK_spr("",244,292,9,9,1);
		this.sprite.addChild(this.l_9_pnt_13.sprite);
		that.EL ="l_9_pnt_14";
		this.l_9_pnt_14 = new AVK_spr("",551,421,9,9,1);
		this.sprite.addChild(this.l_9_pnt_14.sprite);
		that.EL ="l_9_pnt_15";
		this.l_9_pnt_15 = new AVK_spr("",556,670,9,9,1);
		this.sprite.addChild(this.l_9_pnt_15.sprite);
		that.EL ="l_9_pnt_16";
		this.l_9_pnt_16 = new AVK_spr("",454,721,9,9,1);
		this.sprite.addChild(this.l_9_pnt_16.sprite);
		that.EL ="l_9_pnt_17";
		this.l_9_pnt_17 = new AVK_spr("",341,612,9,9,1);
		this.sprite.addChild(this.l_9_pnt_17.sprite);
		that.EL ="l_9_pnt_18";
		this.l_9_pnt_18 = new AVK_spr("",333,438,9,9,1);
		this.sprite.addChild(this.l_9_pnt_18.sprite);
		that.EL ="l_9_pnt_19";
		this.l_9_pnt_19 = new AVK_spr("",372,334,9,9,1);
		this.sprite.addChild(this.l_9_pnt_19.sprite);
		that.EL ="l_9_pnt_20";
		this.l_9_pnt_20 = new AVK_spr("",404,268,9,9,1);
		this.sprite.addChild(this.l_9_pnt_20.sprite);
		that.EL ="l_9_pnt_21";
		this.l_9_pnt_21 = new AVK_spr("",520,118,9,9,1);
		this.sprite.addChild(this.l_9_pnt_21.sprite);
		that.EL ="shadow";
		this.shadow = new AVK_spr("game_shadow",4,5,24,36,1);
		this.sprite.addChild(this.shadow.sprite);
		that.EL ="bullet_place";
		this.bullet_place = new AVK_spr("",0,0,0,0,1);
		this.sprite.addChild(this.bullet_place.sprite);
		that.EL ="wrays";
		this.wrays = new AVK_spr("game_wrays",245,379,106,106,1);
		this.sprite.addChild(this.wrays.sprite);
		that.EL ="brays";
		this.brays = new AVK_spr("game_brays",245,379,106,106,1);
		this.sprite.addChild(this.brays.sprite);
		that.EL ="win_wnd";
		this.win_wnd = new AVK_spr("game_win_wnd",72,265,452,358,1);
		this.sprite.addChild(this.win_wnd.sprite);
		that.EL ="win_wnd_back";
		this.win_wnd_back = new AVK_spr("game_win_wnd_back",136,339,326,93,1);
		this.sprite.addChild(this.win_wnd_back.sprite);
		that.EL ="star_0";
		this.star_0 = new AVK_spr("game_star_0",138,361,79,71,1);
		this.sprite.addChild(this.star_0.sprite);
		that.EL ="star_1";
		this.star_1 = new AVK_spr("game_star_1",240,346,94,84,1);
		this.sprite.addChild(this.star_1.sprite);
		that.EL ="star_2";
		this.star_2 = new AVK_spr("game_star_2",356,331,113,100,1);
		this.sprite.addChild(this.star_2.sprite);
		that.EL ="btn_menu_win";
		this.btn_menu_win = new AVK_btn("game_btn_menu_win",115,452,98,98,1);
		this.sprite.addChild(this.btn_menu_win.sprite);
		that.EL ="btn_refresh_win";
		this.btn_refresh_win = new AVK_btn("game_btn_refresh_win",240,424,104,100,1);
		this.sprite.addChild(this.btn_refresh_win.sprite);
		that.EL ="btn_next";
		this.btn_next = new AVK_btn("game_btn_next",379,444,105,96,1);
		this.sprite.addChild(this.btn_next.sprite);
		/*that.EL ="btn_more";//more
		this.btn_more = new AVK_btn("game_btn_more",254,524,78,75,1);
		this.sprite.addChild(this.btn_more.sprite);*/
		that.EL ="loose_wnd";
		this.loose_wnd = new AVK_spr("game_loose_wnd",68,259,463,370,1);
		this.sprite.addChild(this.loose_wnd.sprite);
		that.EL ="pbtn_menu";
		this.pbtn_menu = new AVK_spr("",152,378,98,98,1);
		this.sprite.addChild(this.pbtn_menu.sprite);
		that.EL ="pbtn_refresh";
		this.pbtn_refresh = new AVK_spr("",339,371,104,100,1);
		this.sprite.addChild(this.pbtn_refresh.sprite);
		/*that.EL ="pbtn_more";//more
		this.pbtn_more = new AVK_spr("",258,421,78,75,1);
		this.sprite.addChild(this.pbtn_more.sprite);*/
		that.EL ="part_place";
		this.part_place = new AVK_spr("",0,0,0,0,1);
		this.sprite.addChild(this.part_place.sprite);
		that.EL ="tutor";
		this.tutor = new AVK_spr("",0,0,0,0,1);
		this.sprite.addChild(this.tutor.sprite);
		that.EL ="hand_center";
		this.hand_center = new AVK_spr("",48,711,4,4,1);
		this.sprite.addChild(this.hand_center.sprite);
		that.EL ="hand";
		this.hand = new AVK_spr("game_hand",42,705,81,141,1);
		this.sprite.addChild(this.hand.sprite);

		this.res_9.set_parent(this.back);
		this.res_8.set_parent(this.back);
		this.res_7.set_parent(this.back);
		this.res_6.set_parent(this.back);
		this.res_5.set_parent(this.back);
		this.res_4.set_parent(this.back);
		this.res_3.set_parent(this.back);
		this.res_2.set_parent(this.back);
		this.res_1.set_parent(this.back);
		this.res_0.set_parent(this.back);
		this.ready_0.set_parent(this.uppper);
		this.ready_1.set_parent(this.uppper);
		this.up_b.set_parent(this.uppper);
		this.btn_no_snd.set_parent(this.gui_bar);
		this.btn_snd.set_parent(this.gui_bar);
		this.btn_close.set_parent(this.gui_bar);
		this.l_0_pnt_0.set_parent(this.level_0);
		this.l_0_pnt_1.set_parent(this.level_0);
		this.l_0_pnt_2.set_parent(this.level_0);
		this.l_0_pnt_3.set_parent(this.level_0);
		this.l_0_pnt_4.set_parent(this.level_0);
		this.l_0_pnt_5.set_parent(this.level_0);
		this.l_0_pnt_6.set_parent(this.level_0);
		this.l_0_pnt_7.set_parent(this.level_0);
		this.l_0_pnt_8.set_parent(this.level_0);
		this.l_0_pnt_9.set_parent(this.level_0);
		this.l_0_pnt_10.set_parent(this.level_0);
		this.l_0_pnt_11.set_parent(this.level_0);
		this.l_0_pnt_12.set_parent(this.level_0);
		this.l_0_pnt_13.set_parent(this.level_0);
		this.l_0_pnt_14.set_parent(this.level_0);
		this.l_0_pnt_15.set_parent(this.level_0);
		this.l_0_pnt_16.set_parent(this.level_0);
		this.l_0_pnt_17.set_parent(this.level_0);
		this.l_0_pnt_18.set_parent(this.level_0);
		this.l_1_pnt_0.set_parent(this.level_1);
		this.l_1_pnt_1.set_parent(this.level_1);
		this.l_1_pnt_2.set_parent(this.level_1);
		this.l_1_pnt_3.set_parent(this.level_1);
		this.l_1_pnt_4.set_parent(this.level_1);
		this.l_1_pnt_5.set_parent(this.level_1);
		this.l_1_pnt_6.set_parent(this.level_1);
		this.l_1_pnt_7.set_parent(this.level_1);
		this.l_1_pnt_8.set_parent(this.level_1);
		this.l_1_pnt_9.set_parent(this.level_1);
		this.l_1_pnt_10.set_parent(this.level_1);
		this.l_1_pnt_11.set_parent(this.level_1);
		this.l_1_pnt_12.set_parent(this.level_1);
		this.l_1_pnt_13.set_parent(this.level_1);
		this.l_1_pnt_14.set_parent(this.level_1);
		this.l_1_pnt_15.set_parent(this.level_1);
		this.l_1_pnt_16.set_parent(this.level_1);
		this.l_1_pnt_17.set_parent(this.level_1);
		this.l_2_pnt_0.set_parent(this.level_2);
		this.l_2_pnt_1.set_parent(this.level_2);
		this.l_2_pnt_2.set_parent(this.level_2);
		this.l_2_pnt_3.set_parent(this.level_2);
		this.l_2_pnt_4.set_parent(this.level_2);
		this.l_2_pnt_5.set_parent(this.level_2);
		this.l_2_pnt_6.set_parent(this.level_2);
		this.l_2_pnt_7.set_parent(this.level_2);
		this.l_2_pnt_8.set_parent(this.level_2);
		this.l_2_pnt_9.set_parent(this.level_2);
		this.l_2_pnt_10.set_parent(this.level_2);
		this.l_2_pnt_11.set_parent(this.level_2);
		this.l_2_pnt_12.set_parent(this.level_2);
		this.l_2_pnt_13.set_parent(this.level_2);
		this.l_2_pnt_14.set_parent(this.level_2);
		this.l_2_pnt_15.set_parent(this.level_2);
		this.l_2_pnt_16.set_parent(this.level_2);
		this.l_2_pnt_17.set_parent(this.level_2);
		this.l_2_pnt_18.set_parent(this.level_2);
		this.l_2_pnt_19.set_parent(this.level_2);
		this.l_2_pnt_20.set_parent(this.level_2);
		this.l_2_pnt_21.set_parent(this.level_2);
		this.l_2_pnt_22.set_parent(this.level_2);
		this.l_2_pnt_23.set_parent(this.level_2);
		this.l_2_pnt_24.set_parent(this.level_2);
		this.l_2_pnt_25.set_parent(this.level_2);
		this.l_2_pnt_26.set_parent(this.level_2);
		this.l_2_pnt_27.set_parent(this.level_2);
		this.l_2_pnt_28.set_parent(this.level_2);
		this.l_2_pnt_29.set_parent(this.level_2);
		this.l_2_pnt_30.set_parent(this.level_2);
		this.l_2_pnt_31.set_parent(this.level_2);
		this.l_2_pnt_32.set_parent(this.level_2);
		this.l_2_pnt_33.set_parent(this.level_2);
		this.l_2_pnt_34.set_parent(this.level_2);
		this.l_2_pnt_35.set_parent(this.level_2);
		this.l_3_pnt_0.set_parent(this.level_3);
		this.l_3_pnt_1.set_parent(this.level_3);
		this.l_3_pnt_2.set_parent(this.level_3);
		this.l_3_pnt_3.set_parent(this.level_3);
		this.l_3_pnt_4.set_parent(this.level_3);
		this.l_3_pnt_5.set_parent(this.level_3);
		this.l_3_pnt_6.set_parent(this.level_3);
		this.l_3_pnt_7.set_parent(this.level_3);
		this.l_3_pnt_8.set_parent(this.level_3);
		this.l_3_pnt_9.set_parent(this.level_3);
		this.l_3_pnt_10.set_parent(this.level_3);
		this.l_3_pnt_11.set_parent(this.level_3);
		this.l_3_pnt_12.set_parent(this.level_3);
		this.l_3_pnt_13.set_parent(this.level_3);
		this.l_3_pnt_14.set_parent(this.level_3);
		this.l_3_pnt_15.set_parent(this.level_3);
		this.l_3_pnt_16.set_parent(this.level_3);
		this.l_3_pnt_17.set_parent(this.level_3);
		this.l_3_pnt_18.set_parent(this.level_3);
		this.l_3_pnt_19.set_parent(this.level_3);
		this.l_3_pnt_20.set_parent(this.level_3);
		this.l_3_pnt_21.set_parent(this.level_3);
		this.l_3_pnt_22.set_parent(this.level_3);
		this.l_3_pnt_23.set_parent(this.level_3);
		this.l_3_pnt_24.set_parent(this.level_3);
		this.l_3_pnt_25.set_parent(this.level_3);
		this.l_3_pnt_26.set_parent(this.level_3);
		this.l_3_pnt_27.set_parent(this.level_3);
		this.l_3_pnt_28.set_parent(this.level_3);
		this.l_3_pnt_29.set_parent(this.level_3);
		this.l_3_pnt_30.set_parent(this.level_3);
		this.l_3_pnt_31.set_parent(this.level_3);
		this.l_3_pnt_32.set_parent(this.level_3);
		this.l_3_pnt_33.set_parent(this.level_3);
		this.l_3_pnt_34.set_parent(this.level_3);
		this.l_3_pnt_35.set_parent(this.level_3);
		this.l_3_pnt_36.set_parent(this.level_3);
		this.l_3_pnt_37.set_parent(this.level_3);
		this.l_3_pnt_38.set_parent(this.level_3);
		this.l_4_pnt_0.set_parent(this.level_4);
		this.l_4_pnt_1.set_parent(this.level_4);
		this.l_4_pnt_2.set_parent(this.level_4);
		this.l_4_pnt_3.set_parent(this.level_4);
		this.l_4_pnt_4.set_parent(this.level_4);
		this.l_4_pnt_5.set_parent(this.level_4);
		this.l_4_pnt_6.set_parent(this.level_4);
		this.l_4_pnt_7.set_parent(this.level_4);
		this.l_4_pnt_8.set_parent(this.level_4);
		this.l_4_pnt_9.set_parent(this.level_4);
		this.l_4_pnt_10.set_parent(this.level_4);
		this.l_4_pnt_11.set_parent(this.level_4);
		this.l_4_pnt_12.set_parent(this.level_4);
		this.l_4_pnt_13.set_parent(this.level_4);
		this.l_4_pnt_14.set_parent(this.level_4);
		this.l_4_pnt_15.set_parent(this.level_4);
		this.l_4_pnt_16.set_parent(this.level_4);
		this.l_4_pnt_17.set_parent(this.level_4);
		this.l_4_pnt_18.set_parent(this.level_4);
		this.l_4_pnt_19.set_parent(this.level_4);
		this.l_4_pnt_20.set_parent(this.level_4);
		this.l_4_pnt_21.set_parent(this.level_4);
		this.l_4_pnt_22.set_parent(this.level_4);
		this.l_4_pnt_23.set_parent(this.level_4);
		this.l_4_pnt_24.set_parent(this.level_4);
		this.l_4_pnt_25.set_parent(this.level_4);
		this.l_4_pnt_26.set_parent(this.level_4);
		this.l_4_pnt_27.set_parent(this.level_4);
		this.l_4_pnt_28.set_parent(this.level_4);
		this.l_4_pnt_29.set_parent(this.level_4);
		this.l_4_pnt_30.set_parent(this.level_4);
		this.l_4_pnt_31.set_parent(this.level_4);
		this.l_4_pnt_32.set_parent(this.level_4);
		this.l_4_pnt_33.set_parent(this.level_4);
		this.l_4_pnt_34.set_parent(this.level_4);
		this.l_4_pnt_35.set_parent(this.level_4);
		this.l_4_pnt_36.set_parent(this.level_4);
		this.l_4_pnt_37.set_parent(this.level_4);
		this.l_4_pnt_38.set_parent(this.level_4);
		this.l_4_pnt_39.set_parent(this.level_4);
		this.l_4_pnt_40.set_parent(this.level_4);
		this.l_4_pnt_41.set_parent(this.level_4);
		this.l_4_pnt_42.set_parent(this.level_4);
		this.l_5_pnt_0.set_parent(this.level_5);
		this.l_5_pnt_1.set_parent(this.level_5);
		this.l_5_pnt_2.set_parent(this.level_5);
		this.l_5_pnt_3.set_parent(this.level_5);
		this.l_5_pnt_4.set_parent(this.level_5);
		this.l_5_pnt_5.set_parent(this.level_5);
		this.l_5_pnt_6.set_parent(this.level_5);
		this.l_5_pnt_7.set_parent(this.level_5);
		this.l_5_pnt_8.set_parent(this.level_5);
		this.l_5_pnt_9.set_parent(this.level_5);
		this.l_5_pnt_10.set_parent(this.level_5);
		this.l_5_pnt_11.set_parent(this.level_5);
		this.l_5_pnt_12.set_parent(this.level_5);
		this.l_5_pnt_13.set_parent(this.level_5);
		this.l_5_pnt_14.set_parent(this.level_5);
		this.l_5_pnt_15.set_parent(this.level_5);
		this.l_5_pnt_16.set_parent(this.level_5);
		this.l_5_pnt_17.set_parent(this.level_5);
		this.l_5_pnt_18.set_parent(this.level_5);
		this.l_5_pnt_19.set_parent(this.level_5);
		this.l_5_pnt_20.set_parent(this.level_5);
		this.l_5_pnt_21.set_parent(this.level_5);
		this.l_5_pnt_22.set_parent(this.level_5);
		this.l_5_pnt_23.set_parent(this.level_5);
		this.l_5_pnt_24.set_parent(this.level_5);
		this.l_5_pnt_25.set_parent(this.level_5);
		this.l_5_pnt_26.set_parent(this.level_5);
		this.l_5_pnt_27.set_parent(this.level_5);
		this.l_5_pnt_28.set_parent(this.level_5);
		this.l_5_pnt_29.set_parent(this.level_5);
		this.l_5_pnt_30.set_parent(this.level_5);
		this.l_5_pnt_31.set_parent(this.level_5);
		this.l_5_pnt_32.set_parent(this.level_5);
		this.l_5_pnt_33.set_parent(this.level_5);
		this.l_6_pnt_0.set_parent(this.level_6);
		this.l_6_pnt_1.set_parent(this.level_6);
		this.l_6_pnt_2.set_parent(this.level_6);
		this.l_6_pnt_3.set_parent(this.level_6);
		this.l_6_pnt_4.set_parent(this.level_6);
		this.l_6_pnt_5.set_parent(this.level_6);
		this.l_6_pnt_6.set_parent(this.level_6);
		this.l_6_pnt_7.set_parent(this.level_6);
		this.l_6_pnt_8.set_parent(this.level_6);
		this.l_6_pnt_9.set_parent(this.level_6);
		this.l_6_pnt_10.set_parent(this.level_6);
		this.l_6_pnt_11.set_parent(this.level_6);
		this.l_6_pnt_12.set_parent(this.level_6);
		this.l_6_pnt_13.set_parent(this.level_6);
		this.l_6_pnt_14.set_parent(this.level_6);
		this.l_6_pnt_15.set_parent(this.level_6);
		this.l_6_pnt_16.set_parent(this.level_6);
		this.l_6_pnt_17.set_parent(this.level_6);
		this.l_6_pnt_18.set_parent(this.level_6);
		this.l_6_pnt_19.set_parent(this.level_6);
		this.l_7_pnt_0.set_parent(this.level_7);
		this.l_7_pnt_1.set_parent(this.level_7);
		this.l_7_pnt_2.set_parent(this.level_7);
		this.l_7_pnt_3.set_parent(this.level_7);
		this.l_7_pnt_4.set_parent(this.level_7);
		this.l_7_pnt_5.set_parent(this.level_7);
		this.l_7_pnt_6.set_parent(this.level_7);
		this.l_7_pnt_7.set_parent(this.level_7);
		this.l_7_pnt_8.set_parent(this.level_7);
		this.l_7_pnt_9.set_parent(this.level_7);
		this.l_7_pnt_10.set_parent(this.level_7);
		this.l_7_pnt_11.set_parent(this.level_7);
		this.l_7_pnt_12.set_parent(this.level_7);
		this.l_7_pnt_13.set_parent(this.level_7);
		this.l_7_pnt_14.set_parent(this.level_7);
		this.l_7_pnt_15.set_parent(this.level_7);
		this.l_7_pnt_16.set_parent(this.level_7);
		this.l_7_pnt_17.set_parent(this.level_7);
		this.l_7_pnt_18.set_parent(this.level_7);
		this.l_7_pnt_19.set_parent(this.level_7);
		this.l_7_pnt_20.set_parent(this.level_7);
		this.l_7_pnt_21.set_parent(this.level_7);
		this.l_7_pnt_22.set_parent(this.level_7);
		this.l_7_pnt_23.set_parent(this.level_7);
		this.l_7_pnt_24.set_parent(this.level_7);
		this.l_7_pnt_25.set_parent(this.level_7);
		this.l_7_pnt_26.set_parent(this.level_7);
		this.l_7_pnt_27.set_parent(this.level_7);
		this.l_7_pnt_28.set_parent(this.level_7);
		this.l_7_pnt_29.set_parent(this.level_7);
		this.l_7_pnt_30.set_parent(this.level_7);
		this.l_7_pnt_31.set_parent(this.level_7);
		this.l_7_pnt_32.set_parent(this.level_7);
		this.l_7_pnt_33.set_parent(this.level_7);
		this.l_7_pnt_34.set_parent(this.level_7);
		this.l_7_pnt_35.set_parent(this.level_7);
		this.l_7_pnt_36.set_parent(this.level_7);
		this.l_7_pnt_37.set_parent(this.level_7);
		this.l_8_pnt_0.set_parent(this.level_8);
		this.l_8_pnt_1.set_parent(this.level_8);
		this.l_8_pnt_2.set_parent(this.level_8);
		this.l_8_pnt_3.set_parent(this.level_8);
		this.l_8_pnt_4.set_parent(this.level_8);
		this.l_8_pnt_5.set_parent(this.level_8);
		this.l_8_pnt_6.set_parent(this.level_8);
		this.l_8_pnt_7.set_parent(this.level_8);
		this.l_8_pnt_8.set_parent(this.level_8);
		this.l_8_pnt_9.set_parent(this.level_8);
		this.l_8_pnt_10.set_parent(this.level_8);
		this.l_8_pnt_11.set_parent(this.level_8);
		this.l_8_pnt_12.set_parent(this.level_8);
		this.l_8_pnt_13.set_parent(this.level_8);
		this.l_8_pnt_14.set_parent(this.level_8);
		this.l_8_pnt_15.set_parent(this.level_8);
		this.l_8_pnt_16.set_parent(this.level_8);
		this.l_8_pnt_17.set_parent(this.level_8);
		this.l_8_pnt_18.set_parent(this.level_8);
		this.l_8_pnt_19.set_parent(this.level_8);
		this.l_8_pnt_20.set_parent(this.level_8);
		this.l_8_pnt_21.set_parent(this.level_8);
		this.l_8_pnt_22.set_parent(this.level_8);
		this.l_8_pnt_23.set_parent(this.level_8);
		this.l_8_pnt_24.set_parent(this.level_8);
		this.l_8_pnt_25.set_parent(this.level_8);
		this.l_8_pnt_26.set_parent(this.level_8);
		this.l_8_pnt_27.set_parent(this.level_8);
		this.l_8_pnt_28.set_parent(this.level_8);
		this.l_8_pnt_29.set_parent(this.level_8);
		this.l_8_pnt_30.set_parent(this.level_8);
		this.l_9_pnt_0.set_parent(this.level_9);
		this.l_9_pnt_1.set_parent(this.level_9);
		this.l_9_pnt_2.set_parent(this.level_9);
		this.l_9_pnt_3.set_parent(this.level_9);
		this.l_9_pnt_4.set_parent(this.level_9);
		this.l_9_pnt_5.set_parent(this.level_9);
		this.l_9_pnt_6.set_parent(this.level_9);
		this.l_9_pnt_7.set_parent(this.level_9);
		this.l_9_pnt_8.set_parent(this.level_9);
		this.l_9_pnt_9.set_parent(this.level_9);
		this.l_9_pnt_10.set_parent(this.level_9);
		this.l_9_pnt_11.set_parent(this.level_9);
		this.l_9_pnt_12.set_parent(this.level_9);
		this.l_9_pnt_13.set_parent(this.level_9);
		this.l_9_pnt_14.set_parent(this.level_9);
		this.l_9_pnt_15.set_parent(this.level_9);
		this.l_9_pnt_16.set_parent(this.level_9);
		this.l_9_pnt_17.set_parent(this.level_9);
		this.l_9_pnt_18.set_parent(this.level_9);
		this.l_9_pnt_19.set_parent(this.level_9);
		this.l_9_pnt_20.set_parent(this.level_9);
		this.l_9_pnt_21.set_parent(this.level_9);
		this.win_wnd_back.set_parent(this.win_wnd);
		this.star_0.set_parent(this.win_wnd);
		this.star_1.set_parent(this.win_wnd);
		this.star_2.set_parent(this.win_wnd);
		this.btn_menu_win.set_parent(this.win_wnd);
		this.btn_refresh_win.set_parent(this.win_wnd);
		this.btn_next.set_parent(this.win_wnd);
		//this.btn_more.set_parent(this.win_wnd );
		this.pbtn_menu.set_parent(this.loose_wnd);
		this.pbtn_refresh.set_parent(this.loose_wnd);
		//this.pbtn_more.set_parent(this.loose_wnd);
		this.hand_center.set_parent(this.tutor);
		this.hand.set_parent(this.hand_center);
	}
	this.AVK_GAME=AVK_GAME;

	function AVK_BALLS()
	{
		this.sprite = new PIXI.DisplayObjectContainer();
		this.add=function(el)
		{
			this.sprite.addChild(el.sprite);
		}
		that.GUI.addChild(this.sprite);
		this.sprite.visible = false;

		that.EL ="b_4";
		this.b_4 = new AVK_spr("balls_b_4",0,0,36,36,120);
		this.sprite.addChild(this.b_4.sprite);
		that.EL ="b_3";
		this.b_3 = new AVK_spr("balls_b_3",0,0,36,36,120);
		this.sprite.addChild(this.b_3.sprite);
		that.EL ="b_2";
		this.b_2 = new AVK_spr("balls_b_2",0,0,36,36,120);
		this.sprite.addChild(this.b_2.sprite);
		that.EL ="b_1";
		this.b_1 = new AVK_spr("balls_b_1",0,0,36,36,120);
		this.sprite.addChild(this.b_1.sprite);
		that.EL ="b_0";
		this.b_0 = new AVK_spr("balls_b_0",0,0,36,36,120);
		this.sprite.addChild(this.b_0.sprite);
		that.EL ="l";
		this.l = new AVK_spr("balls_l",0,0,36,36,24);
		this.sprite.addChild(this.l.sprite);
		that.EL ="shadow";
		this.shadow = new AVK_spr("balls_shadow",0,0,36,36,1);
		this.sprite.addChild(this.shadow.sprite);
		that.EL ="star_0";
		this.star_0 = new AVK_spr("balls_star_0",0,0,35,36,1);
		this.sprite.addChild(this.star_0.sprite);
		that.EL ="star_1";
		this.star_1 = new AVK_spr("balls_star_1",0,0,35,36,1);
		this.sprite.addChild(this.star_1.sprite);
		that.EL ="star_2";
		this.star_2 = new AVK_spr("balls_star_2",0,0,35,36,1);
		this.sprite.addChild(this.star_2.sprite);
		that.EL ="star_3";
		this.star_3 = new AVK_spr("balls_star_3",0,0,35,36,1);
		this.sprite.addChild(this.star_3.sprite);
		that.EL ="star_4";
		this.star_4 = new AVK_spr("balls_star_4",0,0,35,36,1);
		this.sprite.addChild(this.star_4.sprite);
		that.EL ="deleted";
		this.deleted = new AVK_spr("balls_deleted",1,1,34,34,1);
		this.sprite.addChild(this.deleted.sprite);
	}
	this.AVK_BALLS=AVK_BALLS;

	function AVK_LIGHT()
	{
		this.sprite = new PIXI.DisplayObjectContainer();
		this.add=function(el)
		{
			this.sprite.addChild(el.sprite);
		}
		that.GUI.addChild(this.sprite);
		this.sprite.visible = false;

		that.EL = "react";
		this.react = new AVK_fi_react("",0,0,19,86,1);
		this.sprite.addChild(this.react.sprite);
	}
	this.AVK_LIGHT=AVK_LIGHT;

    function AVK_fi_react(pic,x,y,w,h,columns)
    {
        this.add=function (el)
        {
            this.sprite.addChild(el.sprite);
        }
        var mem=[pic,x,y,w,h,columns];
        this.make_copy = function()
        {
            that.WND = this.WND;
            that.EL = this.EL;
            that.ID = this.ID+1;
            return new AVK_fi_react(mem[0],mem[1],mem[2],mem[3],mem[4],mem[5]);
        }
    	this.uni_width = w;
    	this.uni_height = h;
    	this.sprite = new PIXI.DisplayObjectContainer();
        that.GUI.addChild(this.sprite);
        this.WND = that.WND;
        this.EL = that.EL;
        this.ID = that.ID;

		that.EL ="reaction";
		this.reaction = new AVK_spr("light_reaction",0,0,20,86,6);
		this.sprite.addChild(this.reaction.sprite);
   
        this.sprite.position.x = x;
        this.sprite.position.y = y;

        this.set_parent = function(prnt) 
        {
            prnt.sprite.addChild(this.sprite);
            var p = this.sprite;

            var x = 0;
            var y = 0;
            while(p = p.parent)
            {
                x += p.position.x;
                y += p.position.y;
            }

           this.sprite.position.x -= x;
           this.sprite.position.y -= y;
        }
    }
    this.AVK_fi_react=AVK_fi_react;

	function SHEET_DATA()
    {
		this.levels=[{id:"0",level:0,waves:10,len:13,colors:4,progress:2500,r_min:3,r_max:3,mul:0.6,t1:500,t2:750,t3:1000},{id:"1",level:1,waves:12,len:14,colors:4,progress:2000,r_min:2,r_max:3,mul:0.65,t1:4000,t2:4500,t3:5000},{id:"2",level:2,waves:12,len:16,colors:4,progress:1500,r_min:2,r_max:2,mul:0.7,t1:250,t2:500,t3:750},{id:"3",level:0,waves:14,len:18,colors:4,progress:1000,r_min:1,r_max:2,mul:0.75,t1:250,t2:500,t3:750},{id:"4",level:3,waves:16,len:20,colors:4,progress:1600,r_min:2,r_max:2,mul:0.8,t1:250,t2:500,t3:750},{id:"5",level:4,waves:16,len:22,colors:4,progress:1800,r_min:2,r_max:3,mul:0.85,t1:250,t2:500,t3:750},{id:"6",level:1,waves:18,len:24,colors:4,progress:2000,r_min:1,r_max:2,mul:0.9,t1:250,t2:500,t3:750},{id:"7",level:5,waves:18,len:26,colors:4,progress:1800,r_min:2,r_max:2,mul:0.95,t1:250,t2:500,t3:750},{id:"8",level:6,waves:18,len:28,colors:4,progress:1600,r_min:2,r_max:4,mul:1,t1:250,t2:500,t3:750},{id:"9",level:2,waves:20,len:30,colors:4,progress:1400,r_min:3,r_max:3,mul:1,t1:250,t2:500,t3:750},{id:"10",level:7,waves:20,len:32,colors:4,progress:1200,r_min:2,r_max:2,mul:1,t1:250,t2:500,t3:750},{id:"11",level:8,waves:20,len:34,colors:4,progress:1000,r_min:2,r_max:2,mul:1,t1:250,t2:500,t3:750},{id:"12",level:3,waves:22,len:36,colors:4,progress:1200,r_min:2,r_max:2,mul:1,t1:250,t2:500,t3:750},{id:"13",level:4,waves:22,len:38,colors:4,progress:1400,r_min:2,r_max:2,mul:1,t1:250,t2:500,t3:750},{id:"14",level:5,waves:22,len:40,colors:4,progress:1600,r_min:2,r_max:2,mul:1,t1:250,t2:500,t3:750},{id:"15",level:6,waves:24,len:42,colors:4,progress:1800,r_min:2,r_max:2,mul:1,t1:250,t2:500,t3:750},{id:"16",level:7,waves:24,len:44,colors:5,progress:2000,r_min:2,r_max:2,mul:1,t1:250,t2:500,t3:750},{id:"17",level:8,waves:24,len:46,colors:5,progress:2200,r_min:1,r_max:1,mul:1,t1:250,t2:500,t3:750},{id:"18",level:9,waves:24,len:48,colors:5,progress:2000,r_min:2,r_max:2,mul:1,t1:250,t2:500,t3:750}];
		this.levels.id = false;
		this.levels.level = false;
		this.levels.waves = false;
		this.levels.len = false;
		this.levels.colors = false;
		this.levels.progress = false;
		this.levels.r_min = false;
		this.levels.r_max = false;
		this.levels.mul = false;
		this.levels.t1 = false;
		this.levels.t2 = false;
		this.levels.t3 = false;
		this.gui=[];
		this.gui.id = false;
		this.gui.element = false;
		this.gui.val = true;
		this.points=[{id:"0",level:0,pnt:0,enabled:1},{id:"1",level:0,pnt:1,enabled:1},{id:"2",level:0,pnt:2,enabled:1},{id:"3",level:0,pnt:3,enabled:1},{id:"4",level:0,pnt:4,enabled:1},{id:"5",level:0,pnt:5,enabled:1},{id:"6",level:0,pnt:6,enabled:1},{id:"7",level:0,pnt:7,enabled:1},{id:"8",level:0,pnt:8,enabled:1},{id:"9",level:0,pnt:9,enabled:1},{id:"10",level:0,pnt:10,enabled:1},{id:"11",level:0,pnt:11,enabled:1},{id:"12",level:0,pnt:12,enabled:1},{id:"13",level:0,pnt:13,enabled:1},{id:"14",level:0,pnt:14,enabled:1},{id:"15",level:0,pnt:15,enabled:1},{id:"16",level:0,pnt:16,enabled:1},{id:"17",level:0,pnt:17,enabled:1},{id:"18",level:0,pnt:18,enabled:1},{id:"19",level:1,pnt:0,enabled:1},{id:"20",level:1,pnt:1,enabled:1},{id:"21",level:1,pnt:2,enabled:1},{id:"22",level:1,pnt:3,enabled:1},{id:"23",level:1,pnt:4,enabled:1},{id:"24",level:1,pnt:5,enabled:1},{id:"25",level:1,pnt:6,enabled:1},{id:"26",level:1,pnt:7,enabled:1},{id:"27",level:1,pnt:8,enabled:1},{id:"28",level:1,pnt:9,enabled:1},{id:"29",level:1,pnt:10,enabled:1},{id:"30",level:1,pnt:11,enabled:1},{id:"31",level:1,pnt:12,enabled:1},{id:"32",level:1,pnt:13,enabled:1},{id:"33",level:1,pnt:14,enabled:1},{id:"34",level:1,pnt:15,enabled:1},{id:"35",level:1,pnt:16,enabled:1},{id:"36",level:1,pnt:17,enabled:1},{id:"37",level:2,pnt:0,enabled:1},{id:"38",level:2,pnt:1,enabled:1},{id:"39",level:2,pnt:2,enabled:1},{id:"40",level:2,pnt:3,enabled:1},{id:"41",level:2,pnt:4,enabled:1},{id:"42",level:2,pnt:5,enabled:1},{id:"43",level:2,pnt:6,enabled:1},{id:"44",level:2,pnt:7,enabled:1},{id:"45",level:2,pnt:8,enabled:1},{id:"46",level:2,pnt:9,enabled:1},{id:"47",level:2,pnt:10,enabled:1},{id:"48",level:2,pnt:11,enabled:1},{id:"49",level:2,pnt:12,enabled:1},{id:"50",level:2,pnt:13,enabled:1},{id:"51",level:2,pnt:14,enabled:1},{id:"52",level:2,pnt:15,enabled:1},{id:"53",level:2,pnt:16,enabled:1},{id:"54",level:2,pnt:17,enabled:1},{id:"55",level:2,pnt:18,enabled:1},{id:"56",level:2,pnt:19,enabled:1},{id:"57",level:2,pnt:20,enabled:1},{id:"58",level:2,pnt:21,enabled:1},{id:"59",level:2,pnt:22,enabled:1},{id:"60",level:2,pnt:23,enabled:1},{id:"61",level:2,pnt:24,enabled:1},{id:"62",level:2,pnt:25,enabled:1},{id:"63",level:2,pnt:26,enabled:1},{id:"64",level:2,pnt:27,enabled:1},{id:"65",level:2,pnt:28,enabled:1},{id:"66",level:2,pnt:29,enabled:1},{id:"67",level:2,pnt:30,enabled:1},{id:"68",level:2,pnt:31,enabled:1},{id:"69",level:2,pnt:32,enabled:1},{id:"70",level:2,pnt:33,enabled:1},{id:"71",level:2,pnt:34,enabled:1},{id:"72",level:2,pnt:35,enabled:1},{id:"73",level:3,pnt:0,enabled:1},{id:"74",level:3,pnt:1,enabled:1},{id:"75",level:3,pnt:2,enabled:0},{id:"76",level:3,pnt:3,enabled:1},{id:"77",level:3,pnt:4,enabled:1},{id:"78",level:3,pnt:5,enabled:1},{id:"79",level:3,pnt:6,enabled:1},{id:"80",level:3,pnt:7,enabled:1},{id:"81",level:3,pnt:8,enabled:1},{id:"82",level:3,pnt:9,enabled:1},{id:"83",level:3,pnt:10,enabled:1},{id:"84",level:3,pnt:11,enabled:1},{id:"85",level:3,pnt:12,enabled:1},{id:"86",level:3,pnt:13,enabled:1},{id:"87",level:3,pnt:14,enabled:0},{id:"88",level:3,pnt:15,enabled:1},{id:"89",level:3,pnt:16,enabled:1},{id:"90",level:3,pnt:17,enabled:1},{id:"91",level:3,pnt:18,enabled:1},{id:"92",level:3,pnt:19,enabled:1},{id:"93",level:3,pnt:20,enabled:1},{id:"94",level:3,pnt:21,enabled:1},{id:"95",level:3,pnt:22,enabled:1},{id:"96",level:3,pnt:23,enabled:1},{id:"97",level:3,pnt:24,enabled:1},{id:"98",level:3,pnt:25,enabled:1},{id:"99",level:3,pnt:26,enabled:0},{id:"100",level:3,pnt:27,enabled:1},{id:"101",level:3,pnt:28,enabled:1},{id:"102",level:3,pnt:29,enabled:1},{id:"103",level:3,pnt:30,enabled:1},{id:"104",level:3,pnt:31,enabled:1},{id:"105",level:3,pnt:32,enabled:1},{id:"106",level:3,pnt:33,enabled:1},{id:"107",level:3,pnt:34,enabled:1},{id:"108",level:3,pnt:35,enabled:1},{id:"109",level:3,pnt:36,enabled:1},{id:"110",level:3,pnt:37,enabled:1},{id:"111",level:3,pnt:38,enabled:1},{id:"112",level:4,pnt:0,enabled:1},{id:"113",level:4,pnt:1,enabled:1},{id:"114",level:4,pnt:2,enabled:1},{id:"115",level:4,pnt:3,enabled:1},{id:"116",level:4,pnt:4,enabled:1},{id:"117",level:4,pnt:5,enabled:1},{id:"118",level:4,pnt:6,enabled:1},{id:"119",level:4,pnt:7,enabled:1},{id:"120",level:4,pnt:8,enabled:1},{id:"121",level:4,pnt:9,enabled:1},{id:"122",level:4,pnt:10,enabled:1},{id:"123",level:4,pnt:11,enabled:1},{id:"124",level:4,pnt:12,enabled:1},{id:"125",level:4,pnt:13,enabled:1},{id:"126",level:4,pnt:14,enabled:1},{id:"127",level:4,pnt:15,enabled:1},{id:"128",level:4,pnt:16,enabled:1},{id:"129",level:4,pnt:17,enabled:1},{id:"130",level:4,pnt:18,enabled:1},{id:"131",level:4,pnt:19,enabled:1},{id:"132",level:4,pnt:20,enabled:1},{id:"133",level:4,pnt:21,enabled:1},{id:"134",level:4,pnt:22,enabled:1},{id:"135",level:4,pnt:23,enabled:1},{id:"136",level:4,pnt:24,enabled:1},{id:"137",level:4,pnt:25,enabled:1},{id:"138",level:4,pnt:26,enabled:1},{id:"139",level:4,pnt:27,enabled:1},{id:"140",level:4,pnt:28,enabled:1},{id:"141",level:4,pnt:29,enabled:1},{id:"142",level:4,pnt:30,enabled:1},{id:"143",level:4,pnt:31,enabled:1},{id:"144",level:4,pnt:32,enabled:1},{id:"145",level:4,pnt:33,enabled:1},{id:"146",level:4,pnt:34,enabled:1},{id:"147",level:4,pnt:35,enabled:1},{id:"148",level:4,pnt:36,enabled:1},{id:"149",level:4,pnt:37,enabled:1},{id:"150",level:4,pnt:38,enabled:1},{id:"151",level:4,pnt:39,enabled:1},{id:"152",level:4,pnt:40,enabled:1},{id:"153",level:4,pnt:41,enabled:1},{id:"154",level:4,pnt:42,enabled:1},{id:"155",level:5,pnt:0,enabled:1},{id:"156",level:5,pnt:1,enabled:1},{id:"157",level:5,pnt:2,enabled:1},{id:"158",level:5,pnt:3,enabled:1},{id:"159",level:5,pnt:4,enabled:1},{id:"160",level:5,pnt:5,enabled:1},{id:"161",level:5,pnt:6,enabled:1},{id:"162",level:5,pnt:7,enabled:1},{id:"163",level:5,pnt:8,enabled:1},{id:"164",level:5,pnt:9,enabled:1},{id:"165",level:5,pnt:10,enabled:1},{id:"166",level:5,pnt:11,enabled:1},{id:"167",level:5,pnt:12,enabled:1},{id:"168",level:5,pnt:13,enabled:1},{id:"169",level:5,pnt:14,enabled:1},{id:"170",level:5,pnt:15,enabled:1},{id:"171",level:5,pnt:16,enabled:1},{id:"172",level:5,pnt:17,enabled:1},{id:"173",level:5,pnt:18,enabled:1},{id:"174",level:5,pnt:19,enabled:1},{id:"175",level:5,pnt:20,enabled:1},{id:"176",level:5,pnt:21,enabled:1},{id:"177",level:5,pnt:22,enabled:1},{id:"178",level:5,pnt:23,enabled:1},{id:"179",level:5,pnt:24,enabled:1},{id:"180",level:5,pnt:25,enabled:1},{id:"181",level:5,pnt:26,enabled:1},{id:"182",level:5,pnt:27,enabled:1},{id:"183",level:5,pnt:28,enabled:1},{id:"184",level:5,pnt:29,enabled:1},{id:"185",level:5,pnt:30,enabled:1},{id:"186",level:5,pnt:31,enabled:1},{id:"187",level:5,pnt:32,enabled:1},{id:"188",level:5,pnt:33,enabled:1},{id:"189",level:6,pnt:0,enabled:1},{id:"190",level:6,pnt:1,enabled:1},{id:"191",level:6,pnt:2,enabled:1},{id:"192",level:6,pnt:3,enabled:1},{id:"193",level:6,pnt:4,enabled:1},{id:"194",level:6,pnt:5,enabled:1},{id:"195",level:6,pnt:6,enabled:1},{id:"196",level:6,pnt:7,enabled:1},{id:"197",level:6,pnt:8,enabled:1},{id:"198",level:6,pnt:9,enabled:1},{id:"199",level:6,pnt:10,enabled:0},{id:"200",level:6,pnt:11,enabled:0},{id:"201",level:6,pnt:12,enabled:0},{id:"202",level:6,pnt:13,enabled:0},{id:"203",level:6,pnt:14,enabled:0},{id:"204",level:6,pnt:15,enabled:1},{id:"205",level:6,pnt:16,enabled:1},{id:"206",level:6,pnt:17,enabled:1},{id:"207",level:6,pnt:18,enabled:1},{id:"208",level:6,pnt:19,enabled:1},{id:"209",level:7,pnt:0,enabled:1},{id:"210",level:7,pnt:1,enabled:1},{id:"211",level:7,pnt:2,enabled:1},{id:"212",level:7,pnt:3,enabled:1},{id:"213",level:7,pnt:4,enabled:0},{id:"214",level:7,pnt:5,enabled:0},{id:"215",level:7,pnt:6,enabled:1},{id:"216",level:7,pnt:7,enabled:1},{id:"217",level:7,pnt:8,enabled:1},{id:"218",level:7,pnt:9,enabled:1},{id:"219",level:7,pnt:10,enabled:1},{id:"220",level:7,pnt:11,enabled:1},{id:"221",level:7,pnt:12,enabled:1},{id:"222",level:7,pnt:13,enabled:1},{id:"223",level:7,pnt:14,enabled:1},{id:"224",level:7,pnt:15,enabled:1},{id:"225",level:7,pnt:16,enabled:1},{id:"226",level:7,pnt:17,enabled:1},{id:"227",level:7,pnt:18,enabled:1},{id:"228",level:7,pnt:19,enabled:1},{id:"229",level:7,pnt:20,enabled:1},{id:"230",level:7,pnt:21,enabled:1},{id:"231",level:7,pnt:22,enabled:1},{id:"232",level:7,pnt:23,enabled:1},{id:"233",level:7,pnt:24,enabled:1},{id:"234",level:7,pnt:25,enabled:1},{id:"235",level:7,pnt:26,enabled:1},{id:"236",level:7,pnt:27,enabled:0},{id:"237",level:7,pnt:28,enabled:0},{id:"238",level:7,pnt:29,enabled:1},{id:"239",level:7,pnt:30,enabled:1},{id:"240",level:7,pnt:31,enabled:1},{id:"241",level:7,pnt:32,enabled:1},{id:"242",level:7,pnt:33,enabled:1},{id:"243",level:7,pnt:34,enabled:1},{id:"244",level:7,pnt:35,enabled:1},{id:"245",level:7,pnt:36,enabled:1},{id:"246",level:7,pnt:37,enabled:1},{id:"247",level:8,pnt:0,enabled:1},{id:"248",level:8,pnt:1,enabled:1},{id:"249",level:8,pnt:2,enabled:1},{id:"250",level:8,pnt:3,enabled:1},{id:"251",level:8,pnt:4,enabled:1},{id:"252",level:8,pnt:5,enabled:1},{id:"253",level:8,pnt:6,enabled:1},{id:"254",level:8,pnt:7,enabled:1},{id:"255",level:8,pnt:8,enabled:1},{id:"256",level:8,pnt:9,enabled:1},{id:"257",level:8,pnt:10,enabled:1},{id:"258",level:8,pnt:11,enabled:1},{id:"259",level:8,pnt:12,enabled:1},{id:"260",level:8,pnt:13,enabled:1},{id:"261",level:8,pnt:14,enabled:1},{id:"262",level:8,pnt:15,enabled:1},{id:"263",level:8,pnt:16,enabled:1},{id:"264",level:8,pnt:17,enabled:1},{id:"265",level:8,pnt:18,enabled:1},{id:"266",level:8,pnt:19,enabled:1},{id:"267",level:8,pnt:20,enabled:1},{id:"268",level:8,pnt:21,enabled:1},{id:"269",level:8,pnt:22,enabled:1},{id:"270",level:8,pnt:23,enabled:1},{id:"271",level:8,pnt:24,enabled:0},{id:"272",level:8,pnt:25,enabled:0},{id:"273",level:8,pnt:26,enabled:0},{id:"274",level:8,pnt:27,enabled:1},{id:"275",level:8,pnt:28,enabled:1},{id:"276",level:8,pnt:29,enabled:1},{id:"277",level:8,pnt:30,enabled:1},{id:"278",level:9,pnt:0,enabled:1},{id:"279",level:9,pnt:1,enabled:1},{id:"280",level:9,pnt:2,enabled:1},{id:"281",level:9,pnt:3,enabled:1},{id:"282",level:9,pnt:4,enabled:1},{id:"283",level:9,pnt:5,enabled:1},{id:"284",level:9,pnt:6,enabled:1},{id:"285",level:9,pnt:7,enabled:1},{id:"286",level:9,pnt:8,enabled:0},{id:"287",level:9,pnt:9,enabled:0},{id:"288",level:9,pnt:10,enabled:1},{id:"289",level:9,pnt:11,enabled:1},{id:"290",level:9,pnt:12,enabled:1},{id:"291",level:9,pnt:13,enabled:1},{id:"292",level:9,pnt:14,enabled:1},{id:"293",level:9,pnt:15,enabled:1},{id:"294",level:9,pnt:16,enabled:1},{id:"295",level:9,pnt:17,enabled:1},{id:"296",level:9,pnt:18,enabled:1},{id:"297",level:9,pnt:19,enabled:0},{id:"298",level:9,pnt:20,enabled:1},{id:"299",level:9,pnt:21,enabled:1}];
		this.points.id = false;
		this.points.level = false;
		this.points.pnt = false;
		this.points.enabled = false;
		this.str=[];
		this.str.id = false;
		this.str.txt = true;
		this.relations=[];
		this.relations.id = false;
		this.relations.rel_id = false;

    }
    this.DATA=new SHEET_DATA();
    this.LOCAL={};

    this.get = function(tbl,clmn,ind)
    {
        if (that.DATA[tbl][clmn])
        {
            return that.LOCAL[that.DATA[tbl][ind][clmn]][that.LANGUAGE];
        }else
        {
            return that.DATA[tbl][ind][clmn];
        }
    }

    this.filtered = function(tbl,clmn,ind,fclmn,f)
    {
        var cnt=0;
        for (var i=0; i<that.DATA[tbl].length;i++)
        {
            if (that.DATA[tbl][i][fclmn]==f)
            {
                if (cnt==ind)
                    return that.get(tbl,clmn,i);
                else cnt++;
            }
        }
        return null;
    }

    this.find = function(tbl,clmn,f)
    {
        for (var i=0; i<that.DATA[tbl].length;i++)
        {
            if (that.DATA[tbl][i][clmn]==f)
            {
                return i;
            }
        }
        return -1;
    }

    function AVK_ACT()
    {
        var act;
        var work=[];

        this.lin = function(b,e,p)
        {
            return b+(e-b)*p;
        }

        this.sqrt =  function(b,e,p)
        {
            return this.lin(b,e,Math.sqrt(p));
        }
        
        this.sin_plus =  function(b,e,p)
        {
            return 1+0.05*Math.sin(this.lin(b,e,p));
        }

        this.sin =  function(b,e,p)
        {
            return Math.sin(this.lin(b,e,p));
        }

        this.n2 =  function(b,e,p)
        {
            return this.lin(b, e, Math.pow(p, 2));
        }

        this.simple =  function(b,e,p)
        {
            return e;
        }

        this.simple_min =  function(b,e,p)
        {
            if (p>0.5)
                return e;
            else
                return b;
        }

        this.simple_end =  function(b,e,p)
        {
            if (p==1)
                return e;
            else
                return b;
        }

        this.init = function(a)
        {
            act = a;
        }

        this.start = function(a,el,fin)
        {
            if ((!act) || (!act[a]))
            {
                alert ("Can't find "+a);
                return;
            }

            var c=-1;
            for (var i=0;i<work.length54;i++)
            {
                if (work[i*5+3]<=0)
                {
                    c=i*5;
                    break;
                }
            }

            if (c<0)
            {
                c=work.length;
                work.push(0);
                work.push(0);
                work.push(0);
                work.push(0);
                work.push(0);
            }

            work[c]=a;
            work[c+1]=el;
            work[c+2]=act[a].pause;
            work[c+3]=act[a].time;
            work[c+4]=fin;
        }

        this.change = function(el,prop,val)
        {
            switch (prop)
            {
                case "prop":
                    el.set_property(val);
                    break;
                case "x":
                    el.sprite.position.x=val;
                    break;
                case "y":
                    el.sprite.position.y=val;
                    break;
                case "global_x":
                    el.sprite.position.x=val*that.SCREEN_WIDTH;
                    break;
                case "global_y":
                    el.sprite.position.y=val*that.SCREEN_HEIGHT;
                    break;
                case "scale":
                    el.sprite.position.x=el.x-el.uni_width*(val-1)/2;
                    el.sprite.position.y=el.y-el.uni_height*(val-1)/2;
                    el.sprite.scale.x=val;
                    el.sprite.scale.y=val;
                    break;
                default:
                    el.sprite[prop]=val;
                    break;
            }
        }

        this.update = function(tk)
        {
            for (var i=0;i<work.length/5;i++)
            {
                if (work[i*5+3]>0)
                {
                    if (work[i*5+2]>0)
                    {
                        work[i*5+2]-=tk;
                        if (work[i*5+2]<=0)
                        {
                            work[i*5+3]+=work[i*5+2];
                            work[i*5+2]=0;
                        }
                    }else 
                    {
                        work[i*5+3]-=tk;
                        if (work[i*5+3]<=0)
                            work[i*5+3]=0;

                        var prog=(act[work[i*5]].time-work[i*5+3])/act[work[i*5]].time;
                        for (var key in act[work[i*5]].changes) 
                        {
                            var v=act[work[i*5]].changes[key];
                            
                            this.change(work[i*5+1],key,this[v.trans](v.beg,v.end,prog));
                        }

                        if ((work[i*5+3]==0)&&(work[i*5+4]))
                            work[i*5+4](work[i*5+1]);
                    }
                }
            }
        }
    }

    this.ACT = new AVK_ACT();

	loader.load();
}