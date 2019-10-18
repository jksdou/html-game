(function() {
	
	FZ.StateDefs = {
		STATE_UNKNOW : -1,
		STATE_INIT : 5,
		STATE_LOAD : 10,
		STATE_NORMAL : 15,
		STATE_HIDE : 20,
		STATE_SHOW_NO_LOGIC : 25,
		STATE_UNLOAD : 30,
		STATE_DESTROY : 35,
		
		GAME_STATE_UNKNOW : "",
		GAME_STATE_PRELOADING : "gamepreloading",
		GAME_STATE_LOADING : "gameloading",
		GAME_STATE_LOGO : "gamelogo",
		GAME_STATE_MAINMEN : "gamemainmenu",
		
		GAME_STATE_GAME_IN : "gamein",
		GAME_STATE_GAME_CLEAR : "gameclear",
		GAME_STATE_OVER : "gameover",
		GAME_STATE_RESET : "gamereset",
		GAME_STATE_NEXT_LEVEL : "gamenextlevel",
		GAME_STATE_GAME_WIN : "gamewin",
		GAME_STATE_CREDITS : "gamecredits",
		GAME_STATE_HELP : "gamehelp"
	};
	
})();
