
FZ.Game.LoadingState = new (FZ.newClass({
	StateName : FZ.StateDefs.GAME_STATE_LOADING,
	CUR_UI_DEFS : ["majong_BG", "MAIN_MENU_AND_LOADING_BG", "loading_empty", "loading_full"],
	m_test_timer : 0,
	m_bar_w : 0,
	m_bar_div : null,
//	m_bar_num_div : null,
    preProcess : function()
    {
		var div = null;
        // loading the resources for the loading state
		var mySelf = this;
		var index = 0;
		var imgInfo = null;
		this.createUIs(this.CUR_UI_DEFS);
		imgInfo = FZ.getImgInfo(this.CUR_UI_DEFS[3]);
		this.m_bar_w = imgInfo.w;
		this.m_bar_div = this.m_ui_list[3];
		this.m_bar_div.style.overflow = "hidden";
	//	this.m_bar_div.style.backgroundPosition = "" + (0 - this.m_bar_w) + "px 0px";
		this.m_bar_div.style.display = "none";
		for (index = 0; index < FZ.IphoneUI.length; index++) {
			imgInfo = FZ.IphoneUI[index];
			FZ.spriteManager.addResource(imgInfo.name,imgInfo.zOrder,"imgs/" + imgInfo.fileURL,imgInfo.x,imgInfo.y,imgInfo.cols);
		}
		//FZ.ResourceManager.addResource({"Name":"BGMusic", "Type":"Audio", "URL":FZ.IphoneMusic[0]});
		FZ.DivManager.addChild(this.m_main_div);
		this.resetTranslate(0);
		setTimeout(function() {
			mySelf.fade_in.call(mySelf, 2000, 1);
		}, 10);
		this.m_timer = setTimeout(FZ.Tools.bind(this, this.AIUpdate), 100);
    },
	
    postProcess:function() { 
    	FZ.DivManager.removeChild(this.m_main_div);
    	clearTimeout(this.m_timer);
    },
    
    AIUpdate:function(deltaTime)
    {
//		var str = document.getElementById("strHint");
//		this.m_test_timer ++;
//		str.value = "" + this.m_test_timer;

    	var showW = 0;
        this.m_timer = setTimeout(FZ.Tools.bind(this, this.AIUpdate), 200);
        if(0 !== FZ.ResourceManager.__ResourceCount) {        	
        	showW = this.m_bar_w * FZ.ResourceManager.__ResourceLoaded / FZ.ResourceManager.__ResourceCount;
        }
       	
        this.m_bar_div.style.width = "" + showW + "px";
        this.m_bar_div.style.display = "inline";
  		
        if (FZ.ResourceManager.isResourceLoaded()) {
        	//var snd = FZ.ResourceManager.ResourceLib.BGMusic.Resource;
			//FZ.Music.set(snd, true);
			FZ.GameBase.switchToState(FZ.StateDefs.GAME_STATE_MAINMEN);
        }
        
    }
    
}, FZ.BaseState))();
