/**
 * @author liaomengcheng
 */

FZ.Game.LogoState = new (FZ.newClass({
	StateName : FZ.StateDefs.GAME_STATE_LOGO,
	CUR_UI_DEFS : ["SpilSplash"],//"GAME_BG", 
	m_test_timer : 0,
	
    preProcess : function()
    {
        // loading the resources for the loading state
		this.m_main_div.style.webkitTransition = "opacity";
		this.m_main_div.style.backgroundColor = "#fff";
		this.m_main_div.style.width = FZ.GameDefs.SCREEN_W + "px";
		this.m_main_div.style.height = FZ.GameDefs.SCREEN_H + "px";
		this.m_main_div.style.webkitTransitionDuration = "0s";
		this.m_main_div.style.opacity = 0;
		
		this.createUIs(this.CUR_UI_DEFS);
		FZ.DivManager.addChild(this.m_main_div);
		
//		this.fade_in();
		this.m_timer = setTimeout(FZ.Tools.bind(this, this.fade_in), 10);
		
//		this.m_timer = setTimeout(FZ.Tools.bind(this, this.AIUpdate), 1000);
		
    },
	
    postProcess:function() { 
    	FZ.DivManager.removeChild(this.m_main_div);
    	clearTimeout(this.m_timer);
    },
    
    fade_in : function() {
    	this.m_main_div.style.webkitTransitionDuration = "1s";
    	this.m_main_div.style.opacity = 1;
    	this.m_timer = setTimeout(FZ.Tools.bind(this, this.fade_out), 3000);
    },
    
    fade_out : function() {
    	this.m_main_div.style.webkitTransitionDuration = "1s";
    	this.m_main_div.style.opacity = 0;
    	this.m_timer = setTimeout(FZ.Tools.bind(this, this.fade_end), 1000);
    },
    
    fade_end : function() {
    	FZ.GameBase.switchToState(FZ.StateDefs.GAME_STATE_LOADING);
    },
    
    AIUpdate:function(deltaTime)
    {
//        this.m_timer = setTimeout(FZ.Tools.bind(this, this.AIUpdate), 200);
//        
//        if (FZ.ResourceManager.isResourceLoaded()) {
//        	FZ.GameBase.switchToState(FZ.StateDefs.GAME_STATE_LoadingState);
//        }
        
    }
    
}, FZ.BaseState))();
