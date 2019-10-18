function play68_init() {
	updateShare(0,0);
}
function play68_submitstart(level,score) {
	updateSharestart(level,score);
	Play68.shareFriend();
	// setTimeout( function() { Play68.shareFriend(); }, 1000 )
}
function updateShare(level,score) {
	var descContent = "一大波可爱的萌物来袭，来68微游戏玩#动物连线#，不要被萌翻哦！";
   if(level > 0) {
   	   	shareTitle = "我在#动物连线#中，过了"+level+"关，很不错的游戏，可爱又呆萌！";
	}
	else{
		shareTitle = "一大波可爱的萌物来袭，来68微游戏玩#动物连线#，不要被萌翻哦！";
	}
	appid = '';
	Play68.setShareInfo(shareTitle,descContent);
}
function updateSharestart(level,score) {
	updateShare(level,score);
}