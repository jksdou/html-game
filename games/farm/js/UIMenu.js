(function() {
	FZ.UIMenu = FZ.newClass( {
		MENU_SHOW : 0,
		MENU_HIDE : 1,
		m_div : null,
		m_back_div : null,
		m_btn_list : null,
		m_back_w : 0,
		m_back_h : 0,
		m_observer : null,
		m_state : 0,

		m_show_x : 0,
		m_show_y : 0,
		m_hide_x : 0,
		m_hide_y : 0,
		m_btn_enable : null,

		init : function() {
			this.m_div = document.createElement("div");
			this.m_div.style.position = "absolute";
			this.m_div.style.webkitTransition = "translate";
			this.m_btn_list = [];
			this.m_back_div = document.createElement("div");
			
			this.setState(this.MENU_SHOW, 0);
		},

		setBackImage : function(url, w, h) {
			var ctx = null;
			if (undefined !== w) {
				this.m_back_w = w;
			}
			if (undefined !== h) {
				this.m_back_h = h;
			}

			this.m_div.style.width = this.m_back_w + "px";
			this.m_div.style.height = this.m_back_h + "px";
			this.m_back_div.style.width = this.m_back_w + "px";
			this.m_back_div.style.height = this.m_back_h + "px";
			
			this.m_back_div.style.position = "absolute";
			this.m_back_div.style.backgroundRepeat="no-repeat";
			this.m_back_div.style.backgroundImage = "url(imgs/" + url + ")";
			this.m_back_div.style.backgroundPosition = "0px; 0px";
			
			this.m_div.appendChild(this.m_back_div);

		},

		setzIndex : function(index) {
			this.m_div.style.zIndex = index;
		},
		
		setPos : function(x, y) {
			this.m_div.style.webkitTransitionDuration = "0.2s";
			this.m_div.style.webkitTransform = "translate(" + (x) + "px, " + (y) + "px)";
			
		},

		setShowPos : function(x, y) {
			this.m_show_x = x;
			this.m_show_y = y;
		},

		setHidePos : function(x, y) {
			this.m_hide_x = x;
			this.m_hide_y = y;
		},

		addMonitor : function(obj) {
			this.m_observer = obj;
		},

		removeMonitor : function() {
			this.m_observer = null;
		},

		setEnableBtn : function(btn) {
			this.m_btn_enable = btn;
			btn.m_div.style.zIndex = 1;
		},
		
		addButton : function(btn) {
			this.m_div.appendChild(btn.m_div);
			this.m_btn_list.push(btn);
		},
		
		addEnableBtn : function() {
			
			switch (this.m_state) {
			case this.MENU_SHOW: {
				if(this.m_btn_enable) {
					this.m_btn_enable.setSwitchState(this.m_btn_enable.SWITCH_OFF);
				}
				break;
			}
			case this.MENU_HIDE: {
				if(this.m_btn_enable) {
					this.m_btn_enable.setSwitchState(this.m_btn_enable.SWITCH_ON);
				}
				break;
			}
			default:{
				break;
			}
			}
		},

		setState : function(state, time) {
//			this.m_div.style.webkitTransitionDuration = time + "s";
			this.m_state = state;
			switch (this.m_state) {
			case this.MENU_SHOW: {
//				this.m_div.style.zIndex = 2;
				this.setPos(this.m_show_x, this.m_show_y);
//				this.addEvent();
				break;
			}
			case this.MENU_HIDE: {
//				this.m_div.style.zIndex = 0;
				this.setPos(this.m_hide_x, this.m_hide_y);
//				this.removeEvent(false);
				break;
			}
			default: {
				break;
			}
			}
			
			this.addEnableBtn();
		},

		removeButton : function(btn) {
			var del = -1;
			var index = 0;
			for (index = 0; index < this.m_btn_list.length; index++) {
				if (btn === this.m_btn_list[index]) {
					del = index;
					break;
				}
			}
			if (-1 !== del) {
				btn.removeEvent();
				btn.removeMonitor();
				this.m_btn_list.splice(del, 1);
			}

		},

		addEvent : function() {
			var index = 0;
			var btn = null;
			for (index = 0; index < this.m_btn_list.length; index++) {
				btn = this.m_btn_list[index];
				btn.addMonitor(this);
				btn.setEnable(true);
			}

		},

		removeEvent : function(all) {
			var index = 0;
			var btn = null;
			for (index = 0; index < this.m_btn_list.length; index++) {
				btn = this.m_btn_list[index];
				btn.removeMonitor();
				btn.setEnable(false);
			}
		},

		buttonClick : function(btn) {
			if ((null !== this.m_observer) && (this.m_observer.menuItemClick)) {
				this.m_observer.menuItemClick(btn);
			}
		}

	});

})();