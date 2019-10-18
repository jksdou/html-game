// ControlManager.js
// ControlManager for mouse and keyboard 
// FZ, Copyright (c) 2010 Zlongames 

(function()
{
	FZ.ArrayIndexof = function(arr, obj) {
		var index = 0;
		for(index = 0; index < arr.length; index++) {
			if(obj === arr[index]) {
				return index;
			}
		}
		return -1;
	};
	
    FZ.ControlManager=
    {
    	m_monitor_list : [],
        Mouse:{x:0,y:0,leftKey:false,middleKey:false,rightKey:false},
        MouseMove:function(e)
        {
            if(e.offsetX) {
                this.Mouse.x = e.offsetX;
                this.Mouse.y = e.offsetY;
            }
            else if(e.layerX) {
                this.Mouse.x = e.layerX - FZ.GameBase.MainCanvas.offsetLeft;
                this.Mouse.y = e.layerY - FZ.GameBase.MainCanvas.offsetTop;
            }
        },
        MouseUp:function(e)
        {
            if (e.button !== 0) return;
            this.Mouse.leftKey = false;
            
            for(var index = 0; index < this.m_monitor_list.length; index++) {
            	var obj = this.m_monitor_list[index];
            	if((obj) && (obj.CustomMouseUp)) {
            		obj.CustomMouseUp(this.Mouse);
            	}
            }
//            if (this.CustomMouseUp)
//                this.CustomMouseUp(e);
        },
        MouseDown:function(e)
        {
            if (e.button !== 0) return;
            this.Mouse.leftKey = true;
            
            for(var index = 0; index < this.m_monitor_list.length; index++) {
            	var obj = this.m_monitor_list[index];
            	if((obj) && (obj.CustomMouseDown)) {
            		obj.CustomMouseDown(this.Mouse);
            	}
            }
            
//            if (this.CustomMouseDown)
//                this.CustomMouseDown(e);
        },
        
        addMonitor : function(obj) {
        	var index = FZ.ArrayIndexof(this.m_monitor_list, obj);
        	if(-1 === index) {        		
        		this.m_monitor_list.push(obj);
        	}
        },
        
        removeMonitor : function(obj) {
        	var index = FZ.ArrayIndexof(this.m_monitor_list, obj);
        	if(-1 !== index) {
        		this.m_monitor_list.splice(index, 1);
        	}
        },
        
        clearMonitor : function() {
        	while(this.m_monitor_list.length > 0) {
        		this.m_monitor_list.pop();
        	}
        }
        
    };
    
})();
