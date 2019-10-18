
(function() {

	var __IS_THE_NONE = -1;
	var __IS_THE_VERTICAL = 0;
	var __IS_THE_LEVEL = 1;
	var __line = 0;
	var __col = 0;
	var __map = null;
	var __destPath = null;

	var __clearPath = function() {
		if (null === __destPath) {
			__destPath = (__destPath || []);
			return;
		}
		while (__destPath.length > 0) {
			__destPath.pop();
		}
	};
	
	var __getSameLineDistance = function(startx, starty, endx, endy) {
		var distance = 0;
		distance = Math.abs(startx - endx) + Math.abs(starty - endy);
		return distance;
	};
	
	var __isInSameLineOrCol = function(startx, starty, endx, endy) {
		var tmp = null;
		var index = starty * __col + startx;

		if ((startx !== endx) && (starty !== endy)) {
			return false;
		}
		var tmpStartX = 0;
		var tmpStartY = 0;
		var tmpEndX = 0;
		var tmpEndY = 0;

		if (startx === endx) {
			// in the same col
			tmpStartX = startx;
			tmpStartY = starty;
			tmpEndX = endx;
			tmpEndY = endy;
			if (starty > endy) {
				tmpStartY = endy;
				tmpEndY = starty;
			}
//			index = (tmpStartY + 1) * __col + tmpStartX;
			for (index = (tmpStartY + 1) * __col + tmpStartX; index < tmpEndY * __col
					+ tmpEndX; index += __col) {
				tmp = __map[index];
				if (FZ.GameDefs.DREAMPET_REMOVE !== tmp.m_state) {
					return false;
				}
			}
		} else if (starty === endy) {
			// in the same line
			tmpStartX = startx;
			tmpStartY = starty;
			tmpEndX = endx;
			tmpEndY = endy;
			if (startx > endx) {
				tmpStartX = endx;
				tmpEndX = startx;
			}
//			index = tmpStartY * __col + tmpStartX + 1;
			for (index = tmpStartY * __col + tmpStartX + 1; index < tmpEndY * __col
					+ tmpEndX; index++) {
				tmp = __map[index];
				if (FZ.GameDefs.DREAMPET_REMOVE !== tmp.m_state) {
					return false;
				}
			}
		}

		return true;
	};

	var __isInDiagonal = function(startx, starty, endx, endy) {
		var cornerx = 0;
		var cornery = 0;
		var index = 0;
		var result = false;
		var tmp = null;

		// top
		cornerx = endx;
		cornery = starty;
		tmp = __map[cornery * __col + cornerx];
		if ((FZ.GameDefs.DREAMPET_REMOVE === tmp.m_state)) {
			result = __isInSameLineOrCol(startx, starty, cornerx, cornery);
			if (result) {
				result = __isInSameLineOrCol(cornerx, cornery, endx, endy);
				if (result) {
					__destPath.push( [ cornerx, cornery ]);
					return true;
				}
			}
		}
		
		//level
		cornerx = startx;
		cornery = endy;
		tmp = __map[cornery * __col + cornerx];
		if ((FZ.GameDefs.DREAMPET_REMOVE === tmp.m_state)) {
			result = __isInSameLineOrCol(startx, starty, cornerx, cornery);
			if (result) {
				result = __isInSameLineOrCol(cornerx, cornery, endx, endy);
				if (result) {
					__destPath.push( [ cornerx, cornery ]);
					return true;
				}
			}
		}
		
		return false;
	};

	var	__isInTwoDiagonal = function(startx, starty, endx, endy) {

		var result = 0;
		var curStartX = 0;
		var curStartY = 0;
		var tmpStartX = 0;
		var tmpStartY = 0;
		var tmpEndX = 0;
		var tmpEndY = 0;
		var index = 0;
		var tmp = null;

		// search the near x
		if (startx < endx) {
			curStartX = startx;
			curStartY = starty;
			tmpEndX = endx;
			tmpEndY = endy;
		} else {
			curStartX = endx;
			curStartY = endy;
			tmpEndX = startx;
			tmpEndY = starty;
		}
		tmpStartX = curStartX;
		tmpStartY = curStartY;
		
		for (tmpStartX = tmpStartX + 1; tmpStartX < __col; tmpStartX++) {
			tmp = __map[tmpStartY * __col + tmpStartX];
			if (FZ.GameDefs.DREAMPET_REMOVE !== tmp.m_state) {
				break;
			}
			__clearPath();
			__destPath.push( [ curStartX, curStartY ]);
			__destPath.push( [ tmpStartX, tmpStartY ]);
			if (__isInDiagonal(tmpStartX, tmpStartY, tmpEndX, tmpEndY)) {
				__destPath.push( [ tmpEndX, tmpEndY ]);
				return true;
			}
		}

		// search near y
		if (starty < endy) {
			curStartX = startx;
			curStartY = starty;
			tmpEndX = endx;
			tmpEndY = endy;
		} else {
			curStartX = endx;
			curStartY = endy;
			tmpEndX = startx;
			tmpEndY = starty;
		}
		tmpStartX = curStartX;
		tmpStartY = curStartY;
		
		for (tmpStartY = tmpStartY + 1; tmpStartY < __line; tmpStartY++) {
			tmp = __map[tmpStartY * __col + tmpStartX];
			if (FZ.GameDefs.DREAMPET_REMOVE !== tmp.m_state) {
				break;
			}
			__clearPath();
			__destPath.push( [ curStartX, curStartY ]);
			__destPath.push( [ tmpStartX, tmpStartY ]);
			if (__isInDiagonal(tmpStartX, tmpStartY, tmpEndX, tmpEndY)) {
				__destPath.push( [ tmpEndX, tmpEndY ]);
				return true;
			}
		}

		// search far x
		if (startx < endx) {
			curStartX = startx;
			curStartY = starty;
			tmpEndX = endx;
			tmpEndY = endy;
		} else {
			curStartX = endx;
			curStartY = endy;
			tmpEndX = startx;
			tmpEndY = starty;
		}
		tmpStartX = curStartX;
		tmpStartY = curStartY;
		
		for (tmpStartX = tmpStartX - 1; tmpStartX >= 0; tmpStartX--) {
			tmp = __map[tmpStartY * __col + tmpStartX];
			if (FZ.GameDefs.DREAMPET_REMOVE !== tmp.m_state) {
				break;
			}
			__clearPath();
			__destPath.push( [ curStartX, curStartY ]);
			__destPath.push( [ tmpStartX, tmpStartY ]);
			if (__isInDiagonal(tmpStartX, tmpStartY, tmpEndX, tmpEndY)) {
				__destPath.push( [ tmpEndX, tmpEndY ]);
				return true;
			}
		}

		// search far y
		if (starty < endy) {
			curStartX = startx;
			curStartY = starty;
			tmpEndX = endx;
			tmpEndY = endy;
		} else {
			curStartX = endx;
			curStartY = endy;
			tmpEndX = startx;
			tmpEndY = starty;
		}
		tmpStartX = curStartX;
		tmpStartY = curStartY;
		
		for (tmpStartY = tmpStartY - 1; tmpStartY >= 0; tmpStartY--) {
			tmp = __map[tmpStartY * __col + tmpStartX];
			if (FZ.GameDefs.DREAMPET_REMOVE !== tmp.m_state) {
				break;
			}
			__clearPath();

			__destPath.push( [ curStartX, curStartY ]);

			__destPath.push( [ tmpStartX, tmpStartY ]);
			if (__isInDiagonal(tmpStartX, tmpStartY, tmpEndX, tmpEndY)) {
				__destPath.push( [ tmpEndX, tmpEndY ]);
				return true;
			}
		}

	};
	
	// map struct arr []  each elements = { m_state }
	FZ.AG = {};

	FZ.AG.SearchSpecialPath = {
			
		getPath : function(map, line, col, startx, starty, endx, endy) {
			if (undefined === map) {
				return null;
			}
			if (map.length < line * col) {
				return null;
			}
			var result = 0;
			__map = map;
			__line = line;
			__col = col;
			__clearPath();
			__destPath.push( [ startx, starty ]);
			if (__isInSameLineOrCol(startx, starty, endx, endy)) {
				__destPath.push( [ endx, endy ]);
				return __destPath;
			}
			__clearPath();
			__destPath.push( [ startx, starty ]);
			if (__isInDiagonal(startx, starty, endx, endy)) {
				__destPath.push( [ endx, endy ]);
				return __destPath;
			}

			__clearPath();
			if (__isInTwoDiagonal(startx, starty, endx, endy)) {
				return __destPath;
			}

			return null;
		},
		  
		drawNum : function(sprite, value, x, y, w){
			var n = value;
			var num = 0;
		
			if (n === 0) {
				sprite.setFrame(0);
				sprite.draw(FZ.GameBase.MainContext);
			}else{
				sprite.resetMatrix();
				sprite.makeTranslate(x, y);
				for (var i = 0; n !== 0; i++) {
					num = Math.floor(n % 10);
					sprite.setFrame(num);
					sprite.draw(FZ.GameBase.MainContext);
					sprite.translate(-w, 0);
					n = Math.floor( n/ 10);
				}
				sprite.setFrame(0);
				sprite.makeTranslate(x, y);
			}
		},	
	
		setNumDiv : function(div, value){
			var n = value;
			var num = 0;
			var info = null;
			var digital = 0;
			var tmpDiv = null;
			if (n === 0) {
				div[0] = document.createElement("div");
                div[0].style.zIndex = 202;
				info = FZ.getImgInfo("number_hint_0");
//				if (FZ.TargetMobile === FZ.TARGET_DEF.ANDRIOD) {
//					info.x += 20;
//				}
                FZ.GameBase.setCss(div[0], info);
				return 1;
			}else if( n > 10){
				num = Math.floor(n % 10);
				tmpDiv = document.createElement("div");
                tmpDiv.style.zIndex = 202;
			    info = FZ.getImgInfo("number_hint_" + num);
//				if (FZ.TargetMobile === FZ.TARGET_DEF.ANDRIOD) {
//					info.x += 20;
//				}
                FZ.GameBase.setCss(tmpDiv, info);
				div.push(tmpDiv);
				
				num = Math.floor( n/ 10);
				tmpDiv = document.createElement("div");
                tmpDiv.style.zIndex = 205;
			    info = FZ.getImgInfo("number_hint_clone_" + num);
//				if (FZ.TargetMobile === FZ.TARGET_DEF.ANDRIOD) {
//					info.x += 20;
//				}
                FZ.GameBase.setCss(tmpDiv, info);
				div.push(tmpDiv);
				return 2;
			}else{
				num = Math.floor(n % 10);
				tmpDiv = document.createElement("div");
                tmpDiv.style.zIndex = 202;
			    info = FZ.getImgInfo("number_hint_" + num);
//				if (FZ.TargetMobile === FZ.TARGET_DEF.ANDRIOD) {
//					info.x += 20;
//				}
                FZ.GameBase.setCss(tmpDiv, info);
				div.push(tmpDiv);
				
				num = Math.floor( n/ 10);
				tmpDiv = document.createElement("div");
                tmpDiv.style.zIndex = 205;
			    info = FZ.getImgInfo("number_hint_clone_" + num);
//				if (FZ.TargetMobile === FZ.TARGET_DEF.ANDRIOD) {
//					info.x += 20;
//				}
                FZ.GameBase.setCss(tmpDiv, info);
				tmpDiv.style.visibility = "hidden";
				div.push(tmpDiv);
				return 2;
			}
		},	
		setScoreNum : function(value){
			var n = value;
			var num = 0;
			var splitNum = [];
			while(n > 0){
				num = Math.floor(n % 10);
				splitNum.push(num);	
				n = Math.floor( n/ 10);
			}	
			return splitNum;
			
		},	
		getPolygonVertex : function(x, y, radius, number) {
			if(number < 3){
				return null;
			}
			
			var vertex = [];
			var angle = 0;
			var addAngle = (2 * Math.PI) / number;
			
			for(var index = 0; index < number; index++) {
				var dot = [];
				dot.push(x + Math.floor(radius * Math.sin(angle)));
				dot.push(y + Math.floor(radius * Math.cos(angle)));
				angle += addAngle;
				
				vertex.push(dot);
			}
			
			return vertex;
		}
	};

})();