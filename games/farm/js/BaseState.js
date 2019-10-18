
(function() {
	FZ.stateStatus = {};
	FZ.stateStatus.INIT = 0;
	FZ.stateStatus.NORMAL = 5;
	FZ.stateStatus.HIDENOTIFY = 15;
	FZ.stateStatus.HIDELOGIC = 20;
	FZ.stateStatus.DONOTHING = 30;
	
	FZ.BaseState = FZ.newClass( {
		StateName : "GameStateBase",
		 m_status : FZ.stateStatus.NORMAL,
		m_timer : null,
		m_main_div : null,
		m_main_div_clone : null,
//		m_div_back : null,
		m_ui_list : null,
		m_btn_list : null,
		
        init:function() { 
            // register the state into the GameBase
            FZ.GameBase.registerState(this.StateName, this);
            
            this.m_main_div = document.createElement("div");
			this.m_main_div_clone = document.createElement("div");
//            this.m_div_back = [];
            this.m_ui_list = [];
            this.m_btn_list = [];
        },
		 pause : function() {
        	
		
        },
        resume : function() {
        
        },
        createUIs : function(names) {
        	var index = 0;
        	var info = null;
        	var div = null;
			for (index = 0; index < names.length; index++) {
				info = FZ.getImgInfo(names[index]);
				div = document.createElement("div");
				FZ.GameBase.setCss(div, info);
				this.m_ui_list.push(div);
				
				this.m_main_div.appendChild(div);
			}       	
        },
        
        createBtns : function(names, addToStage) {
        	var index = 0;
        	var info = null;
        	var infoDown = null;
        	
			for (index = 0; index < names.length; index++) {
				info = FZ.getImgInfo(names[index][0]);
				infoDown  = FZ.getImgInfo(names[index][1]);
				btn = new FZ.UIButton(info.w, info.h, info.cols, info.fileURL, infoDown.fileURL);
				btn.setPos(info.x, info.y);				
				btn.addMonitor(this);
				this.m_btn_list.push(btn);
				if(addToStage) {					
					this.m_main_div.appendChild(btn.m_div);
				}
			}        	
        },
        resetTranslate : function(alpha) {
        	this.m_remove_div = false;
        	this.m_main_div.style.display = "inline";
			this.m_main_div.style.zIndex = 0;
			this.m_main_div.style.webkitTransitionDuration = "0s";
			this.m_main_div.style.opacity = alpha;
			this.m_main_div.style.webkitTransform = "translate(0px, 0px) rotate(0deg)";
        },
        
        fade_in : function(time, alpha) {
        	var mySelf = this;
        	this.m_remove_div = false;
			this.m_main_div.style.webkitTransitionDuration = time + "ms";
			this.m_main_div.style.opacity = alpha;
			this.m_main_div.style.webkitTransform = "translate(0px, 0px) rotate(0deg)";
        },
        
        fade_out : function(time, alpha, angle) {
        	var mySelf = this;
        	var offsetX = FZ.GameDefs.SCREEN_W;
        	var offsetY = 0;

        	this.m_remove_div = true;
        	this.m_main_div.style.webkitTransitionDuration = time + "ms";
        	setTimeout(function() {
        		mySelf.m_main_div.style.opacity = alpha;
    			mySelf.m_main_div.style.webkitTransform = "translate(" + offsetX + "px, " + offsetY + "0px) rotate(" + angle + "deg)";	
    		}, 1);
        	
    		setTimeout(function() {
    			if(mySelf.m_remove_div) {    				
    				mySelf.m_main_div.style.display = "none";
    			}
    		}, time);
    		
        },
		preProcess : function() {
		},
		
		postProcess : function() {
		},
		
		AIUpdate : function(deltaTime) {
		},
		pushState : function(stateName) {
    		this.__stateStack.push(this.__StateLib[stateName]);
   		 },
	    popState : function() {
//  	  	this.CurrentState = null;
    		this.CurrentState = this.__stateStack.pop();
    		if((undefined !== this.CurrentState) && (null !== this.CurrentState)) {
    			if(this.CurrentState.resume){    			
    			this.CurrentState.resume.apply(this.CurrentState, arguments);
    			}
    		}
   		 }
	});

})();