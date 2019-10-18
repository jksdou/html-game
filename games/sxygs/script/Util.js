Util = function(){};
Util.randomN = function(n) {
	return Math.floor(Math.random()*n);
}
Util.randomInRange = function(min, max) {
	return min+(Math.random()*(max-min));
}
Util.fadeIn = function(object, duration) {
	LTweenLite.to(object, duration, {alpha:1, ease:LEasing.Sine.easeIn})
}
Util.fadeOut = function(object, duration, callback) {
	LTweenLite.to(object, duration, {alpha:0, ease:LEasing.Sine.easeOut, onComplete:callback});
}
Util.sFloat = function(object, duration) {
	originY = object.y;
	LTweenLite.to(object, duration, {y:originY-10, loop:true, ease:LEasing.None.easeIn})
	.to(object, duration, {y:originY+10, loop:true, ease:LEasing.None.easeIn});
}
Util.fadeInOut = function(object, duration, _loop, alpha) {
	LTweenLite.to(object, duration, {alpha:1, loop:_loop, ease:LEasing.None.easeIn})
	.to(object, duration, {alpha:alpha, loop:_loop, ease:LEasing.None.easeIn});
}
Util.correctInRange = function(v, min, max) {
	if(v < min) return min;
	else if(v > max) return max;
	else return v;
}
Util.shuffle = function(array){
	var randomCompare = function(){
		return (Math.random()>0.5)?(-1):1;
	}
	return array.sort(randomCompare);
}
Util.range = function(a,b,step){
	var result = [];
	if(arguments[2] == undefined) step = 1;
	for(var i = a; i < b; i+=step){
		result.push(i);
	}
	return result; 
}

