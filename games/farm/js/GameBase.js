// GameBase.js
// GameBase Class
// FZ, Copyright (c) 2010 Zlongames 

(function()
{
//by mliao
FZ.stateStatus = {};
FZ.stateStatus.INIT = 0;
FZ.stateStatus.NORMAL = 5;
FZ.stateStatus.HIDENOTIFY = 15;
FZ.stateStatus.HIDELOGIC = 20;
FZ.stateStatus.DONOTHING = 30;


FZ.GameStateBase=FZ.newClass(
    {
        StateName:"GameStateBase",
        //by mliao
        m_status : FZ.stateStatus.NORMAL,
        
        init:function()
        { 
            // register the state into the GameBase
            FZ.GameBase.registerState(this.StateName, this);
        },
        
        //by mliao
        pause : function() {
        	this.m_status = FZ.stateStatus.HIDENOTIFY;
        },
        resume : function() {
        	this.m_status = FZ.stateStatus.NORMAL;
        },
        
        preProcess: function(){},
        postProcess: function(){},
        AIUpdate:function(deltaTime){},
        visualUpdate:function(){}
    });
    
FZ.GameBase = {
    Time:(new Date()).getTime(),
    FrameNum:0,
    // fps
    Fps:0,
    Fps_lastTime :0,
    Fps_lastFrame:0,
    // update
    DefaultFPS:30,
    CurrentState:null,
    __StateLib:{},
    //add by mliao
    __stateStack : [],
    
    Width:640,
    Height:480,
    MainCanvas:null,
    MainContext:null,
    Name:"",
    SaveObject:{},
    init: function(theDiv)
    {
        this.MainCanvas = document.createElement("canvas");
        this.MainCanvas.width = this.Width;
        this.MainCanvas.height = this.Height;
        this.MainContext = this.MainCanvas.getContext("2d");

        this.MainCanvas.addEventListener("mousemove", FZ.Tools.bindWithEvent(FZ.ControlManager, FZ.ControlManager.MouseMove), false);
        this.MainCanvas.addEventListener("mousedown", FZ.Tools.bindWithEvent(FZ.ControlManager, FZ.ControlManager.MouseDown),false);
        this.MainCanvas.addEventListener("mouseup", FZ.Tools.bindWithEvent(FZ.ControlManager, FZ.ControlManager.MouseUp),false);
        this.theInterval = setInterval(FZ.Tools.bind(this, this.update), 1000/this.DefaultFPS);
        theDiv.appendChild(this.MainCanvas);
    },
    update:function()
    {
    	//by mliao
    	var index = 0;
    	var tmpState = null;
    	
        this.FrameNum++;
        var now=(new Date()).getTime();
        var deltaTime =( now-this.Time)/1000.0;
        this.Time=now;

        // update the fps
        if (this.time - this.Fps_lastTime>1000)
        {
            this.Fps =Math.round( 10*(this.FrameNum - this.Fps_lastFrame)/((this.Time - this.Fps_lastTime)/1000) )/10;
            this.Fps_lastTime = this.Time;
            this.Fps_lastFrame = this.FrameNum;
        }

        for(index = 0; index < this.__stateStack.length; index++) {
        	tmpState = this.__stateStack[index];
        	if((tmpState)&& (tmpState !== this.CurrentState)) {
        		if(FZ.stateStatus.NORMAL === tmpState.m_status) {
        			tmpState.AIUpdate(deltaTime);
        			tmpState.visualUpdate();
        		}
        		else if(FZ.stateStatus.HIDENOTIFY === tmpState.m_status) {
        			tmpState.visualUpdate();
        		}
        		else if(FZ.stateStatus.HIDELOGIC === tmpState.m_status) {
        			tmpState.AIUpdate(deltaTime);
        		}
        		else if(FZ.stateStatus.DONOTHING === tmpState.m_status) {
        		}
        	}
        }
        
        if(null !== this.CurrentState) {
        	this.CurrentState.AIUpdate(deltaTime);
        	this.CurrentState.visualUpdate();
        }

//      AudioUpdate
        // this.AudioManager.update(deltaTime);
    },
    saveGame:function()
    {
        FZ._assert(this.Name != "", "Please set the name of the game first");
        //localStorage["FZ.Game."+this.Name] = FZ.JSON.stringify(this.SaveObject);
    },
    loadGame:function()
    {	

	this.SaveObject = {};
        return false;
	
        FZ._assert(this.Name != "", "Please set the name of the game first");
        if (this.Name == "")
            return false;
        if (!localStorage.hasOwnProperty("FZ.Game."+this.Name) || 1 == 1)
        {
            this.SaveObject = {};
            return false;
        }
        this.SaveObject = FZ.JSON.parse(localStorage["FZ.Game."+this.Name]);
        return true;
    },
    registerState:function(StateName, StateObject)
    {
        this.__StateLib[StateName] = StateObject;
    },
    
    getState : function(stateName) {
    	return this.__StateLib[stateName];
    },
    
    switchToState:function(newState)
    {
		
    	var preStateName = this.CurrentState.StateName;
    	var _args = [preStateName]; 
    	Array.prototype.push.apply(_args, arguments);
    	
        this.CurrentState.postProcess();
        this.CurrentState = this.__StateLib[newState];
//        this.CurrentState.preProcess(preStateName);
        this.CurrentState.preProcess.apply(this.CurrentState, _args);
		
		FZ.PrintLog("switchToState");
    },
    
    //by mliao
    resetAllState : function() {
    	var delNum = 0;
//    	this.CurrentState = null;
    	delNum = this.__stateStack.length;
    	this.__stateStack.splice(0, delNum);
    },
    
    pushState : function(stateName) {
    	this.__stateStack.push(this.__StateLib[stateName]);
    },
//    
//    popState : function(sender) {
////    	this.CurrentState = null;
//    	this.CurrentState = this.__stateStack.pop();
//    	if((undefined !== this.CurrentState) && (null !== this.CurrentState)) {    		
//    		if(this.CurrentState.resume){    			
//    			this.CurrentState.resume(sender);
//    		}
//    	}
//    }
    
    popState : function() {
//    	this.CurrentState = null;
    	this.CurrentState = this.__stateStack.pop();
    	if((undefined !== this.CurrentState) && (null !== this.CurrentState)) {
    		if(this.CurrentState.resume){    			
    			this.CurrentState.resume.apply(this.CurrentState, arguments);
    		}
    	}
    }
    
};
FZ.GameBase.CurrentState = new FZ.GameStateBase();


})();
