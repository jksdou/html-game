(function() {
	
	var ArrayIndexof = function(arr, obj) {
		var index = 0;
		for(index = 0; index < arr.length; index++) {
			if(obj === arr[index]) {
				return index;
			}
		}
		return -1;		
	};
	
	FZ.DivManager = {
		m_init : false,
		m_parentContainer : null,
		m_display_list : null,
		offsetLeft : 0,
		offsetTop : 0,
		
		init : function() {
			if(this.m_init) {
				return;
			}
			this.m_init = true;
			this.m_parentContainer = null;
			this.m_display_list = (this.m_display_list || []);
			
		},
		
		setSize : function(w, h) {
			if(null === this.m_parentContainer) {
				return;
			}
			this.m_parentContainer.style.width = w + "px";
			this.m_parentContainer.style.height = h + "px";
		},
		
		setParent : function(parent) {
			this.m_parentContainer = parent;
			this.m_parentContainer.style.position = "absolute";
			this.m_parentContainer.style.overflow = "hidden";
//			this.m_parentContainer.style.overflow = "visible";
			this.offsetLeft = this.m_parentContainer.offsetLeft;
			this.offsetTop = this.m_parentContainer.offsetTop;
		},
		
		setOffset : function(offx, offy) {
			this.offsetLeft = offx;
			this.offsetTop = offy;
		},
		
		getOffsetX : function() {
			this.offsetLeft = this.m_parentContainer.offsetLeft;
			return this.offsetLeft;
		},
		
		getOffsetY : function() {
			this.offsetTop = this.m_parentContainer.offsetTop;
			return this.offsetTop;
		},
		
		setOverflow : function(value) {
			if(this.m_parentContainer) {
				this.m_parentContainer.style.overflow = value;
			}
		},
		
		onmousemove : function(evt) {
			var test = 0;
			test = 5;
		},
		
		addChild : function(display) {
			this.m_parentContainer.appendChild(display);
			this.m_display_list.push(display);
		},
		
		removeChild : function(display) {
			var index = -1;
			for(index = 0; index < this.m_parentContainer.childNodes.length; index++) {
				if(display == this.m_parentContainer.childNodes[index]) 
				{				
					this.m_parentContainer.removeChild(display);
					break;
				}	
			}

			index = ArrayIndexof(this.m_display_list, display);
			if(-1 !== index) {
				this.m_display_list.splice(index, 1);
			}
		},
		
		removeAllChild : function() {
			var display = null;
			while(this.m_display_list.length > 0) {
				display = this.m_display_list.pop();
				if(this.m_parentContainer.contains(display)) {
					this.m_parentContainer.removeChild(display);
				}
			}
		}
	};
})();
