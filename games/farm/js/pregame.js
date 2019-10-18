(function() {

	FZ.Game = {};
	
	FZ.Game.checkButtun = function(theButton) {
		var Position = theButton.getPosition();
		if (FZ.ControlManager.Mouse.x > Position.x
				&& FZ.ControlManager.Mouse.y > Position.y
				&& FZ.ControlManager.Mouse.x < Position.x
						+ theButton.__theImages[0][0].width
				&& FZ.ControlManager.Mouse.y < Position.y
						+ theButton.__theImages[0][0].height) {
			theButton.setFrame(1 + (FZ.ControlManager.Mouse.leftKey ? 1 : 0));
			return true;
		} else {
			theButton.setFrame(0);
		}
		return false;
	};

	FZ.Game.PreLoadingState = new (FZ.newClass( {
		StateName : FZ.StateDefs.GAME_STATE_PRELOADING,
		m_test_timer : 0,
		preProcess : function() {
			// loading the resources for the loading state
			FZ.spriteManager.addResource("LOADING_BG",0,"imgs/MAIN_MENU_AND_LOADING_BG.png",0,0,1);
			FZ.spriteManager.addResource("majong_BG",0,"imgs/majong_BG.png",0,0,1);
			FZ.spriteManager.addResource("loading_empty",0,"imgs/loading_empty.png",0,0,1);
			FZ.spriteManager.addResource("loading_full",0,"imgs/loading_full.png",0,0,1);
			FZ.spriteManager.addResource("SpilSplash",0,"imgs/SpilSplash.png",0,0,1);
			this.m_timer = setTimeout(FZ.Tools.bind(this, this.AIUpdate), 500);
		},
		postProcess : function() {
		},
		AIUpdate : function() {
			FZ.PrintLog("" + this.m_test_timer);
			
			if (FZ.ResourceManager.isResourceLoaded()) {
				FZ.GameBase.switchToState(FZ.StateDefs.GAME_STATE_LOGO);
			}
			else {
				this.m_timer = setTimeout(FZ.Tools.bind(this, this.AIUpdate), 200);
			}
		}
	}, FZ.BaseState))();

})();