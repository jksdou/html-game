(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 640,
	height: 1136,
	fps: 24,
	color: "#FFFFFF",
	manifest: []
};

// stage content:
(lib.fathersDay = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		console.log('fathersDay main run');
		
		window.onresize=resizeCanvas;
		
		//webView.scrollView.scrollEnable = no;
		
		var root=this;
		
		resizeCanvas();
		
		function resizeCanvas()
		{
			var pro=640/1136;
			var w=window.innerWidth;
			var h=window.innerHeight;
			console.log('w:',w,' h:',h);
			//var ctx=canvas.getContext('2d');
			
			
			if(w>h)//横屏
			{
				scale=root.scaleX=root.scaleY=0.01+(w/640);
			}
			else//竖屏
			{
				//root.scaleX=root.scaleY=w/1000;
				scale=root.scaleX=root.scaleY=0.01+(w/1136);
				
			}
			
			if(pro>(w/h))
			{
				scale=root.scaleX=root.scaleY=w/640;
			}
			else
			{
				scale=root.scaleX=root.scaleY=h/1136;
			}
			
			wrongx=root.x=(w-(scale*640))/2;
			root.y=(h-(scale*1136))/2;
			
			canvas.width=w;
			canvas.height=h;
			
			console.log('root.x:',root.x);
		}
	}
	this.frame_1 = function() {
		this.role_mc.gotoAndPlay(0);
	}
	this.frame_2 = function() {
		var root=this;
		setTimeout(function(){
			root.game_mc.startGame();
			},200);
	}
	this.frame_3 = function() {
		this.result_mc.gotoAndPlay(1);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1));

	// 剧情
	this.instance = new lib.元件13();
	this.instance.setTransform(320,464.9,1,1,0,0,0,240.7,238.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(3));

	// 规则
	this.role_mc = new lib.rules();
	this.role_mc.setTransform(320,568,1,1,0,0,0,320,568);
	this.role_mc._off = true;

	this.timeline.addTween(cjs.Tween.get(this.role_mc).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// game
	this.game_mc = new lib.game();
	this.game_mc.setTransform(320,568,1,1,0,0,0,320,568);
	this.game_mc._off = true;

	this.timeline.addTween(cjs.Tween.get(this.game_mc).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// result
	this.result_mc = new lib.result();
	this.result_mc.setTransform(320,568,1,1,0,0,0,320,568);
	this.result_mc._off = true;

	this.timeline.addTween(cjs.Tween.get(this.result_mc).wait(3).to({_off:false},0).wait(1));

	// 底
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Egx/BYvMAAAixeMBj+AAAMAAACxeg");
	this.shape.setTransform(320,568);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(320,568,640,1136);


// symbols:
(lib.元件46 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("AIdDwIAAi8IB7AAIAACIIBzBuIhXBXgAp5ENIAAhOIh1hqIBahVICXCKIAAD2gA4nEKIAAjiIB7BxIAADngAkoF/IAAgBIh1hxIAAi5ICEh7IBbBSIhtBkIAAB+IBlAAIAABygAiREMIAAneIB7BuIAAHjgABNDxIAAAAIgBAAIAAi8IB6AAIAACHIB0BsIhZBWgAQpF7IAAhyIC8AAIhkhfIBahWICrClIiLCCgAwxF4IiWiLIAAjmIB4hxIE4AAIh4BxIi/AAIAACwIDRDAIAAABgAMZDvIgBAAIAAiYIhzhsIBYhUICWCKIAACaIBTBOIhZBUgAwHB9IC9AAIAAC3gAEBCoIAAhyIBnAAIhZhQIBahVICXCOIiRCJIAAAAgAPuAgICTiJIDQAAIAAB3IibAAIhwBngAoAA+IiRiEIAAiQICTCKIgBAAIAACKgA7DAMIB7hxIFVAAIh5BxgAWxiXQgZgkAAgvQAAg+AsgsQAsgsA+AAQA+AAAsAsQAsAsAAA+QAAA+gsAsQgsAsg+AAQglAAgfgQIhRAagAZljsIAAAJIAHAAIAAAIIAKAAIAAAJIAKAAIAAgsIgKAAIAAAZIgIAAIAAgHIgIAAIAAgKIgJAAIAAgIIgLAAIAAAsIALAAIAAgagAYWjSIAsAAIAAgsIgJAAIAAAjIgZAAIAAgjIgKAAgAXhjSIALAAIAAgRIAZAAIAAgJIgZAAIAAgJIAjAAIAAgJIguAAg");
	this.shape.setTransform(173.3,38.6);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,346.6,77.1);


(lib.元件4副本 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1 复制
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#663300").ss(3,1,1).p("AAuAtQgTAUgbAAQgZAAgUgUQgTgSAAgbQAAgaATgTQAUgTAZAAQAbAAATATQATATAAAaQAAAbgTASg");
	this.shape.setTransform(-42.9,16);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgtAtQgSgSAAgbQAAgaASgTQAUgTAZAAQAaAAAUATQASATAAAaQAAAbgSASQgUAUgaAAQgZAAgUgUg");
	this.shape_1.setTransform(-42.9,16);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#663300").ss(3,1,1).p("ABIhIQAfAeAAAqQAAAqgfAeQgeAegqAAQgpAAgfgeQgdgeAAgqQAAgqAdgeQAfgdApAAQAqAAAeAdg");
	this.shape_2.setTransform(-21.8,16);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhIBIQgegeABgqQgBgqAegeQAfgdApAAQAqAAAeAdQAfAeAAAqQAAAqgfAeQgeAegqAAQgpAAgfgeg");
	this.shape_3.setTransform(-21.8,16);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#663300").ss(3,1,1).p("ABbBbQglAmg2AAQg0AAgmgmQgmgmAAg1QAAg0AmgnQAmglA0AAQA2AAAlAlQAmAnAAA0QAAA1gmAmg");
	this.shape_4.setTransform(-6.8,16);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhaBbQgmgmAAg1QAAg0AmgnQAmglA0AAQA2AAAlAlQAmAnAAA0QAAA1gmAmQglAmg2AAQg0AAgmgmg");
	this.shape_5.setTransform(-6.8,16);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#663300").ss(3,1,1).p("ABnhmQAqAqAAA8QAAA9gqAqQgrArg8AAQg7AAgrgrQgqgqAAg9QAAg8AqgqQArgrA7AAQA8AAArArg");
	this.shape_6.setTransform(2.2,16);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhmBnQgqgqAAg9QAAg7AqgrQArgrA7ABQA8gBArArQAqArAAA7QAAA9gqAqQgrAqg8AAQg7AAgrgqg");
	this.shape_7.setTransform(2.2,16);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#663300").ss(3,1,1).p("ABrhqQAsAsAAA+QAAA+gsAsQgsAtg/AAQg9AAgtgtQgsgsAAg+QAAg+AsgsQAtgsA9AAQA/AAAsAsg");
	this.shape_8.setTransform(5.3,16);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhqBqQgsgrAAg/QAAg9AsgtQAtgsA9AAQA/AAArAsQAtAtAAA9QAAA/gtArQgrAtg/AAQg9AAgtgtg");
	this.shape_9.setTransform(5.3,16);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#663300").ss(3,1,1).p("ABcBcQgmAmg2AAQg1AAgmgmQgmgmAAg2QAAg0AmgnQAmgmA1AAQA2AAAmAmQAmAnAAA0QAAA2gmAmg");
	this.shape_10.setTransform(10.1,16);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AhbBbQglglgBg2QABg0AlgnQAngmA0ABQA2gBAmAmQAmAngBA0QABA2gmAlQgmAng2AAQg0AAgngng");
	this.shape_11.setTransform(10.1,16);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#663300").ss(3,1,1).p("AhMBMQgfgfAAgtQAAgsAfgfQAgggAsAAQAsAAAgAgQAgAfAAAsQAAAtggAfQggAggsAAQgsAAggggg");
	this.shape_12.setTransform(14.9,16);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AhMBMQgfgfAAgtQAAgsAfgfQAgggAsAAQAsAAAgAgQAgAfAAAsQAAAtggAfQggAggsAAQgsAAggggg");
	this.shape_13.setTransform(14.9,16);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#663300").ss(3,1,1).p("AA9A9QgaAagjAAQgjAAgZgaQgZgZAAgkQAAgjAZgZQAZgaAjAAQAjAAAaAaQAZAZAAAjQAAAkgZAZg");
	this.shape_14.setTransform(19.7,16);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("Ag8A8QgZgYAAgkQAAgiAZgaQAZgZAjAAQAjAAAaAZQAZAaAAAiQAAAkgZAYQgaAbgjAAQgjAAgZgbg");
	this.shape_15.setTransform(19.7,16);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#663300").ss(3,1,1).p("AAtgtQAUATAAAaQAAAbgUATQgTATgaAAQgaAAgTgTQgTgTAAgbQAAgaATgTQATgTAaAAQAaAAATATg");
	this.shape_16.setTransform(24.6,16);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgtAtQgTgSAAgbQAAgaATgTQATgTAaAAQAaAAAUATQATATAAAaQAAAbgTASQgUAUgaAAQgaAAgTgUg");
	this.shape_17.setTransform(24.6,16);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},6).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_9},{t:this.shape_8}]},1).to({state:[{t:this.shape_11},{t:this.shape_10}]},1).to({state:[{t:this.shape_13},{t:this.shape_12}]},1).to({state:[{t:this.shape_15},{t:this.shape_14}]},1).to({state:[{t:this.shape_17},{t:this.shape_16}]},1).wait(1));

	// 图层 1
	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#663300").ss(3,1,1).p("AAuAtQgTAUgbAAQgZAAgUgUQgTgSAAgbQAAgaATgTQAUgTAZAAQAbAAATATQATATAAAaQAAAbgTASg");
	this.shape_18.setTransform(-42.9,16);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgtAtQgSgSAAgbQAAgaASgTQAUgTAZAAQAaAAAUATQASATAAAaQAAAbgSASQgUAUgaAAQgZAAgUgUg");
	this.shape_19.setTransform(-42.9,16);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#663300").ss(3,1,1).p("AhIBIQgdgeAAgqQAAgqAdgeQAfgdApAAQAqAAAeAdQAfAeAAAqQAAAqgfAeQgeAegqAAQgpAAgfgeg");
	this.shape_20.setTransform(-21.8,16);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AhIBIQgegeABgqQgBgqAegeQAfgdApAAQAqAAAeAdQAfAeAAAqQAAAqgfAeQgeAegqAAQgpAAgfgeg");
	this.shape_21.setTransform(-21.8,16);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#663300").ss(3,1,1).p("ABbBbQglAmg2AAQg0AAgmgmQgmgmAAg1QAAg0AmgnQAmglA0AAQA2AAAlAlQAmAnAAA0QAAA1gmAmg");
	this.shape_22.setTransform(-6.8,16);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AhaBbQgmgmAAg1QAAg0AmgnQAmglA0AAQA2AAAlAlQAmAnAAA0QAAA1gmAmQglAmg2AAQg0AAgmgmg");
	this.shape_23.setTransform(-6.8,16);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#663300").ss(3,1,1).p("ABnhmQAqAqAAA8QAAA9gqAqQgrArg8AAQg7AAgrgrQgqgqAAg9QAAg8AqgqQArgrA7AAQA8AAArArg");
	this.shape_24.setTransform(2.2,16);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AhmBnQgqgqAAg9QAAg7AqgrQArgrA7ABQA8gBArArQAqArAAA7QAAA9gqAqQgrAqg8AAQg7AAgrgqg");
	this.shape_25.setTransform(2.2,16);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#663300").ss(3,1,1).p("ABrhqQAsAsAAA+QAAA+gsAsQgsAtg/AAQg9AAgtgtQgsgsAAg+QAAg+AsgsQAtgsA9AAQA/AAAsAsg");
	this.shape_26.setTransform(5.3,16);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AhqBqQgsgrAAg/QAAg9AsgtQAtgsA9AAQA/AAArAsQAtAtAAA9QAAA/gtArQgrAtg/AAQg9AAgtgtg");
	this.shape_27.setTransform(5.3,16);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#663300").ss(3,1,1).p("ABcBcQgmAmg2AAQg1AAgmgmQgmgmAAg2QAAg0AmgnQAmgmA1AAQA2AAAmAmQAmAnAAA0QAAA2gmAmg");
	this.shape_28.setTransform(10.1,16);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AhbBbQglglgBg2QABg0AlgnQAngmA0ABQA2gBAmAmQAmAngBA0QABA2gmAlQgmAng2AAQg0AAgngng");
	this.shape_29.setTransform(10.1,16);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#663300").ss(3,1,1).p("AhMBMQgfgfAAgtQAAgsAfgfQAgggAsAAQAsAAAgAgQAgAfAAAsQAAAtggAfQggAggsAAQgsAAggggg");
	this.shape_30.setTransform(14.9,16);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AhMBMQgfgfAAgtQAAgsAfgfQAgggAsAAQAsAAAgAgQAgAfAAAsQAAAtggAfQggAggsAAQgsAAggggg");
	this.shape_31.setTransform(14.9,16);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#663300").ss(3,1,1).p("AA9A9QgaAagjAAQgjAAgZgaQgZgZAAgkQAAgjAZgZQAZgaAjAAQAjAAAaAaQAZAZAAAjQAAAkgZAZg");
	this.shape_32.setTransform(19.7,16);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("Ag8A8QgZgYAAgkQAAgiAZgaQAZgZAjAAQAjAAAaAZQAZAaAAAiQAAAkgZAYQgaAbgjAAQgjAAgZgbg");
	this.shape_33.setTransform(19.7,16);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#663300").ss(3,1,1).p("AAtgtQAUATAAAaQAAAbgUATQgTATgaAAQgaAAgTgTQgTgTAAgbQAAgaATgTQATgTAaAAQAaAAATATg");
	this.shape_34.setTransform(24.6,16);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgtAtQgTgSAAgbQAAgaATgTQATgTAaAAQAaAAAUATQATATAAAaQAAAbgTASQgUAUgaAAQgaAAgTgUg");
	this.shape_35.setTransform(24.6,16);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18}]}).to({state:[{t:this.shape_21},{t:this.shape_20}]},1).to({state:[{t:this.shape_23},{t:this.shape_22}]},1).to({state:[{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_27},{t:this.shape_26}]},1).to({state:[{t:this.shape_29},{t:this.shape_28}]},1).to({state:[{t:this.shape_31},{t:this.shape_30}]},1).to({state:[{t:this.shape_33},{t:this.shape_32}]},1).to({state:[{t:this.shape_35},{t:this.shape_34}]},1).to({state:[]},1).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50.9,8,16,16.1);


(lib.元件2复制 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("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");
	this.shape.setTransform(152.9,169.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#663300").ss(5,1,1).p("AAAgvIBgBfIi/AAg");
	this.shape_1.setTransform(296.7,4.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#663300").s().p("AhfAwIBfhfIBgBfg");
	this.shape_2.setTransform(296.7,4.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#663300").s("#663300").ss(1,1,1).rr(-151.05,-112.05,302.1,224.1,18);
	this.shape_3.setTransform(151.1,172.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s("#663300").ss(4,1,1).rr(-151.05,-112.05,302.1,224.1,18);
	this.shape_4.setTransform(151,182.8,0.99,1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#663300").ss(10,1,1).p("AlIG/IAAorIKRAAIAAlS");
	this.shape_5.setTransform(263.8,50.1);

	this.addChild(this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-2.5,309.9,299.4);


(lib.元件2 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#663300").ss(4,1,1).p("AlNCBQAAgBAAgCQgEg1AsgbQAegSARgGQAcgLAjAAQAZAAA+AFQA+AGANAAQAigOAdgLQDVhaBAhdIASBuQhiBjhJA2QhJA2gyAYQgvAYgSACQgcAFgcABQhGgBhHgNQgngHglgHQgbgDgNgVQACAAACgB");
	this.shape.setTransform(28.4,7.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AjbCtIhMgOQgbgDgOgVIAFgBIgCgFIAAgDQgEg1AsgbQAegSARgGQAdgLAiAAQAZAAA+AFQA+AGANAAIA/gZQDVhaBAhdIARBuQhhBjhJA2QhJA2gyAYQgvAYgSACQgdAFgbABQhHgBhGgNg");
	this.shape_1.setTransform(28.4,7.9);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-7.3,-12.8,71.4,41.5);


(lib.元件1复制 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.8)").s().p("EgyTBY7MAAAix1MBknAAAMAAACx1g");
	this.shape.setTransform(322.1,569.2);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,644.2,1138.3);


(lib.车子 = function() {
	this.initialize();

	// 图层 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#663300").ss(4,1,1).p("AjxBuQgGgUgJg2QgIgyAAgMQAAgvAJgUQAOgeApAAQAcAAAOANQANAMAAAXQAAAygUBBQgYBQgdAAQgMAAgCgBQgDgCgBgGQAAAAgFgBgAjxBuIAAAAACTgWQAAgvAJgVQAOgeApAAQAcAAAOAOQANAMAAAWQAAAygUBCQgYBQgdAAQgMAAgCgCQgDgCAAgFIgGgBQgGgVgJg1QgIgzAAgLg");
	this.shape.setTransform(32.2,-35.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFCC").s().p("ACzB6QgEgCAAgFIgFgBQgGgVgJg1QgJgyAAgMQAAgvAKgVQAOgeAoAAQAcAAAPAOQAMAMAAAWQABAzgVBBQgXBQgeAAQgLAAgCgCgAjoB3QgDgCgBgGIgFgBQgGgUgJg1QgJgzAAgMQAAguAKgVQAOgeAoAAQAcAAAOANQANANAAAWQABAygVBBQgXBRgeAAQgLgBgCgBgAjxBvIAAgBIAFABg");
	this.shape_1.setTransform(32.2,-35.6);

	// 图层 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#663300").ss(1,1,1).p("Ag8AAQAAgYASgSQASgSAYAAQAZAAASASQASASAAAYQAAAZgSASQgSASgZAAQgYAAgSgSQgSgSAAgZg");
	this.shape_2.setTransform(33.5,78.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#663300").ss(4,1,1).p("Ah7AAQAAgzAlgkQAkgkAyAAQA0AAAjAkQAlAkAAAzQAAAzglAkQgjAlg0AAQgyAAgkglQglgkAAgzg");
	this.shape_3.setTransform(33.5,78.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CCCCCC").s().p("AhWBXQglgkAAgzQAAgyAlglQAkgkAyABQAzgBAkAkQAlAlAAAyQAAAzglAkQgkAkgzAAQgyAAgkgkgAgrAqQATASAYAAQAYAAATgSQASgSAAgYQAAgZgSgSQgTgRgYAAQgYAAgTARQgRASAAAZQAAAYARASgAgrAqQgRgSAAgYQAAgZARgSQATgRAYAAQAYAAATARQASASAAAZQAAAYgSASQgTASgYAAQgYAAgTgSgAg8AAIAAAAg");
	this.shape_4.setTransform(33.5,78.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#663300").ss(2,1,1).p("AEOC0IgEgKIiflPQhtg3hwA3IiNFHIgOAg");
	this.shape_5.setTransform(33.6,19.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#663300").ss(4,1,1).p("AEqi6QgBg9gXgmQgEgGgEgGQgpgzhdAAIkGAAQhUAAgpArQgCACgCACQgjAngBBIQAAACAAACIgCEkIBzDbQC4AvCzgsIByjhIAAkhAkni6IJFAA");
	this.shape_6.setTransform(33.6,66.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ai0D0IhzjbIACkkIJFAAIAIAAIAAEhIhyDhQhWAVhYAAQhcAAhggYg");
	this.shape_7.setTransform(33.4,74.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#330000").s().p("AkoDuIAAgFQABhIAjgnIgKAbIAOgfICOlHQBwg3BsA3ICfFPIAEAKIAEACQAXAmABA9IgEAAIgIABgACDBLQBdAAApAzQgpgzhdAAIkFAAQhVAAgpArQApgrBVAAg");
	this.shape_8.setTransform(33.7,23.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#663300").s("#663300").ss(2,1,1).rr(-10,-16.5,20,33,10);
	this.shape_9.setTransform(33.3,106.4,1.464,1.464);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#663300").ss(4,1,1).p("AiOgWIAAAtIi6AAIAAgtgACPAXIAAgtIC6AAIAAAtg");
	this.shape_10.setTransform(33.2,-41.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#666666").s().p("ACPAXIAAgtIC6AAIAAAtgAlIAXIAAgtIC6AAIAAAtg");
	this.shape_11.setTransform(33.2,-41.1);

	this.addChild(this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1.7,-50,69.9,181.6);


(lib.元件79 = function() {
	this.initialize();

	// 图层 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ADBBIIAAh8IgbAAQgOAAgBgSQABgQAOAAIBdAAQAPAAABAQQgBARgPABIgcAAIAAB8QgBARgSAAQgSAAgBgRgAB1BSIgpg4IgpA4QgFAHgLAAQgRAAgBgPQABgKADgDIAxhBIgog3QgEgFAAgGQAAgQATgCQAJAAAIAJIAeAsIAfgsQAIgJAJAAQARABABARQAAAGgEAFIgoA3IAxBBQAFAFAAAIQgBAPgSAAQgKAAgGgHgAhTBZQgSgBgBgRIAAiIQAAgVATAAIA/AAQAQAAABAQQgBARgQABIgsAAIAAAkIApAAQAQABACAPQgCAQgQABIgpAAIAAAmIAtAAQARAAABARQgBAQgRABgAidBSIhPhmIgBAAIAABcQgBARgSAAQgSAAAAgRIAAiNQAAgSASgBQAKABAGAHIBPBoIABAAIAAhdQABgSARgBQASABABASIAACNQgBARgSAAQgJAAgGgHg");
	this.shape.setTransform(34,13.8,1.654,1.654);

	// 图层 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#663300").s("#663300").ss(4,1,1).rr(-34,-15.5,68,31,5.7);
	this.shape_1.setTransform(34,13.3,1.654,1.654);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s("#663300").ss(4,1,1).rr(-34,-15.5,68,31,5.7);
	this.shape_2.setTransform(33.9,24.5,1.638,1.638);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-24.2,-14.3,116.5,66.2);


(lib.元件76 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#F9E006").ss(1,1,1).p("AsGsGIYNAAIAAYNI4NAAg");
	this.shape.setTransform(77.5,77.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF00").s().p("AsGMGIAA4MIYNAAIAAYMg");
	this.shape_1.setTransform(77.5,77.5);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,157.1,157);


(lib.元件75 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#663300").ss(4,2,0,3).p("AlaKOIAA0bIK1AAIAAUb");
	this.shape.setTransform(34.7,65.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AlaO6IAApYIAA0bIK0AAIAAUbIAAJYg");
	this.shape_1.setTransform(34.7,95.5);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-2,-2,73.4,193);


(lib.元件74复制 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AxBZKMAAAgyTMAiDAAAMAAAAyTg");
	this.shape.setTransform(109,161);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,218.1,322);


(lib.元件74 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AxBKJIAA0SMAiDAAAIAAUSg");
	this.shape.setTransform(109,65);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,218.1,130);


(lib.元件68 = function() {
	this.initialize();

}).prototype = p = new cjs.Container();
p.nominalBounds = null;


(lib.元件67 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#663300").ss(4,1,1).p("AAMhfIA1AFQAxALADAzQABAkgUAtQgTAqg+AHQgyAGgogSQgrgUAAgZQAAgRAghEQAPghAWgRQAbgUAdANQAAAAABAAQABABABABgAAJhhIgEACIAHAAQAHAIAJAdQANAlgHAQQgEAHgcAGQgZAFgKgEQACgFACgHQADgKACgEIgDgC");
	this.shape.setTransform(54.6,95.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhJBaQgrgUAAgZQAAgRAghEQAPghAWgRQAbgUAdANIgEACIAHAAIA1AFQAxALADAzQABAkgUAtQgTAqg+AHIgWABQglAAgfgNgAgTALQAIAAALgCIAAAAIAAgBIACAAQAcgGAEgHQACgGAAgIQAAgPgIgYQgJgdgHgIQAHAIAJAdQAIAYAAAPQAAAIgCAGQgEAHgcAGIgCAAIAAABIAAAAQgLACgIAAIgBAAIAAAAQgIAAgFgCIAAAAIAEgMIAFgOIgDgCIADACIgFAOIgEAMIAAAAQAFACAIAAIAAAAIABAAg");
	this.shape_1.setTransform(54.6,95.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#663300").ss(4,1,1).p("Ah0BFIgjhAQgZg9A5gqQApgeBBgLQA9gKA2BBQAuA3AJA5QALA/geASQgSAMhnARQgvAIgkgMQgrgQgIgsQAAgBAAAAQAAgCABgCQADgOAZggQAhgoAXgEQAOgCAZAZQAbAbACAPQgGABgNAEQgNAEgFABIABAFAh1BKIAFADIgEgI");
	this.shape_2.setTransform(123.6,115.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhCCGQgrgQgIgsIAFADIgEgIQADgOAZggQAhgoAXgEIACAAIAAAAIAAAAQAMAAASASIAAAAIAAABIAAAAIAFADIABAAIABABQAbAbACAPIgTAFIgSAFIABAFIgBgFIASgFIATgFQgCgPgbgbIgBgBIgBAAIgFgDIAAAAIAAgBIAAAAQgTgSgLAAIAAAAIAAAAIgCAAQgXAEghAoQgZAggDAOIgjhAQgZg9A5gqQApgeBBgLQA9gKA2BBQAuA3AJA5QALA/geASQgSAMhnARQgRADgRAAQgbAAgWgHg");
	this.shape_3.setTransform(123.6,115.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#663300").ss(4,1,1).rr(-9.7,-50.4,19.4,100.8,9.7);
	this.shape_4.setTransform(191,74,0.755,0.755,0,0,0,-14.8,-0.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#663300").ss(4,1,1).rr(-9.7,-50.4,19.4,100.8,9.7);
	this.shape_5.setTransform(171.4,75.8,0.755,0.755,0,0,0,-7.2,-0.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#663300").ss(4,1,1).rr(-9.7,-50.4,19.4,100.8,9.7);
	this.shape_6.setTransform(150.8,74,0.755,0.755,0,0,0,-1,-0.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#663300").ss(4,1,1).p("AnJo0QAkgVBKgUQCSgpDSgBQDUAACJApQBEAVAiAUQAjAUAAAUQAAAMgMAKQgeAahnATQiRAcjNAAQjMAAiRgcQhngTgegaQgMgKAAgMQAAgTAlgUgAHMo1QgkARhKAOQiRAcjNAAQjMAAiRgcQhIgOgkgQAHjn3Ig4QZQAAAJAAABQAAAmh9AbQh9AbixAAQivAAh9gbQg9gNgjgVQghgTAAgUIAAgBIg1wa");
	this.shape_7.setTransform(176.7,64.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F9E006").s().p("AksJEQg9gNgjgVQghgTAAgUIgBgBIg0waQAdAaBoATQCRAcDMAAQDNAACRgcQBngTAegaIg4QZIAAAKQAAAmh9AbQh+AbiwAAQivAAh9gbgAldnzQhogTgdgaQgMgKAAgMQAAgTAkgUQAkAQBJAOQCRAcDMAAQDNAACRgcQBJgOAlgRQAjAUAAAUQAAAMgMAKQgeAahnATQiRAcjNAAQjMAAiRgcgAniogIAAAAg");
	this.shape_8.setTransform(176.7,68.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#663300").s().p("AleAqQhIgOgkgQQAkgTBKgUQCSgpDSgBQDUAACJApQBEAVAiASQgkARhKAOQiRAcjMAAQjNAAiRgcg");
	this.shape_9.setTransform(176.8,7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#663300").ss(4,1,1).rr(-9.7,-50.4,19.4,100.8,9.7);
	this.shape_10.setTransform(130.1,42.1,0.754,0.754,-90,0,0,-14.9,-0.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#663300").ss(4,1,1).rr(-9.7,-50.4,19.4,100.8,9.7);
	this.shape_11.setTransform(131.9,61.6,0.754,0.754,-90,0,0,-7.1,-0.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#663300").ss(4,1,1).rr(-9.7,-50.4,19.4,100.8,9.7);
	this.shape_12.setTransform(130,82.2,0.754,0.754,-90,0,0,-0.9,-0.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#663300").ss(4,1,1).p("AmnndIhQgFAn3HjQgKAMgMAAQgTAAgUglQgVgkgUhKQgpiSgBjSQAAjUApiJQAVhEAUgiQAUgjAUAAQAMAAAKAMQAaAeATBnQAcCRAADMQAADNgcCRQgTBngaAeIBQgEQAXggAThhQAciRAAjNQAAjMgciRQgShggYggIOfAxIAqACQAJAAABAAQAmAAAbB9QAbB9AACwQAACwgbB9QgNA9gVAjQgTAggUAAIgBABIvKAxAH2GiQAXgcAThWQAciBAAi0QAAi2gciBQgShTgWgd");
	this.shape_13.setTransform(120.9,56.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#CCCCCC").s().p("AoSFeQAciRAAjNQAAjMgciRQgThngageIBQAFQAYAgARBgQAcCRAADMQAADNgcCRQgSBhgXAgIhQAEQAageAThngAnvHfIAAAAgAnGFeQAciRAAjNQAAjMgciRQgRhggYggIOfAxQAWAdARBTQAcCBAAC2QAAC0gcCBQgSBWgXAcQAXgcAShWQAciBAAi0QAAi2gciBQgRhTgWgdIAqACIAJAAQAnAAAbB9QAbB9AACwQAACwgbB9QgNA9gVAjQgUAggTAAIgCABIvJAxQAXggAShhg");
	this.shape_14.setTransform(128.2,56.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#663300").s().p("AgYHKQgVgkgUhKQgpiSgBjSQAAjTApiKQAUhEAVgiQAUgjASAAQALAAALANQAaAdATBnQAcCRAADMQAADNgcCRQgTBngaAeQgLAMgLAAQgSAAgTglg");
	this.shape_15.setTransform(66.9,56.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#663300").ss(4,1,1).p("AHbgKQABAGAAAEQAAAxiMAiQiLAjjFAAQjEAAiMgjQiLgiAAgxQAAgEABgGQAOgqB8gfQCMgjDEAAQDFAACLAjQB8AfAPAqQgPAoh8AfQiLAjjFAAQjEAAiMgjQh8gfgOgo");
	this.shape_16.setTransform(47.7,83.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#CCCCCC").s().p("AlQBIQh8gegOgqQAOgpB8gfQCMgiDEAAQDFAACLAiQB8AfAPApQgPAqh8AeQiLAjjFAAQjEAAiMgjg");
	this.shape_17.setTransform(47.7,82.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#F9E006").s().p("AlQAdQiMggABgxQAAgGABgFQAPAqB7AcQCMAjDEAAQDFAACLgjQB8gcAPgqIACALQAAAxiNAgQiLAkjFgBQjEABiMgkg");
	this.shape_18.setTransform(47.7,89.1);

	this.addChild(this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-2,-2,230.3,133.7);


(lib.元件66 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#663300").s().p("EgiNA1IMAAAhqPMBEbAAAMAAABqPg");
	this.shape.setTransform(219.1,340.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,438.1,680.2);


(lib.元件64 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_85 = function() {
		this.stop();
		
		this.parent.initGame();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(85).call(this.frame_85).wait(1));

	// 图层 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("AlwETQAGhSBvgSQApAGApBHQBBBjBkAAQB+gGAMiHQAAhpiGgYQhzgRgBhWQABhMBjgYQBtgdABhYQgHhdhhgHQhSAAg7BZQgpA6guAAQhYgGgHhpQApjOEagjQEXASApECQgGCZh1BLQCqBXALCvQgiExlSARQk9gLgvkCg");
	this.shape.setTransform(144.8,149.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF00").s().p("Aj3IdQhvAAAAhjQgGgeAjguIBehpQDBjOBWiFQA1hGAAhGQgMhqhcgMQheAAgpCHQgjBwhAgGQhwAAAAhqQAekqFCgpQE6AXASEfQAACkkIEpQhEBSgXAeIELAAQBvAFAGBeQgGBjhjAAg");
	this.shape_1.setTransform(146.2,147.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFF00").s().p("AgNGrIAAryIhYAAQhjAAgGhpQAGhYBjgMIDRAAQBeAGAGBkIAANVQgGBqhpAAQhuAAAAhqg");
	this.shape_2.setTransform(138.9,151.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},24).to({state:[{t:this.shape_2}]},25).to({state:[]},23).to({state:[]},13).wait(1));

	// 图层 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#663300").s().p("AwPQPQmumvAApgQAApfGumwQGwmuJfAAQJgAAGvGuQGvGwAAJfQAAJgmvGvQmvGvpgAAQpfAAmwmvg");
	this.shape_3.setTransform(147.1,147.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#683604").s().p("AxJRJQnGnGgBqDQABqCHGnHQHHnGKCgBQKDABHGHGQHHHHAAKCQAAKDnHHGQnGHHqDAAQqCAAnHnHg");
	this.shape_4.setTransform(147.1,147.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#6B3908").s().p("AyESDQneneAAqlQAAqkHengQHgneKkAAQKlAAHeHeQHgHgAAKkQAAKlngHeQneHgqlAAQqkAAngngg");
	this.shape_5.setTransform(147.1,147.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#6D3D0C").s().p("Ay+S+Qn3n3AArHQAArGH3n4QH4n3LGAAQLHAAH3H3QH3H4ABLGQgBLHn3H3Qn3H3rHABQrGgBn4n3g");
	this.shape_6.setTransform(147.1,147.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(102,51,0,0.937)").s().p("Az5T4QoOoPAArpQAAroIOoRQIRoOLoAAQLpAAIPIOQIQIRAALoQAALpoQIPQoPIQrpAAQroAAoRoQg");
	this.shape_7.setTransform(147.1,147.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(102,51,0,0.82)").s().p("AxtRtQnVnWAAqXQAAqWHVnXQHXnVKWAAQKXAAHWHVQHWHXAAKWQAAKXnWHWQnWHWqXAAQqWAAnXnWg");
	this.shape_8.setTransform(147.1,147.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(102,51,0,0.703)").s().p("AvhPhQmcmbAApGQAApFGcmcQGcmcJFAAQJGAAGbGcQGdGcAAJFQAAJGmdGbQmbGdpGAAQpFAAmcmdg");
	this.shape_9.setTransform(147.1,147.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(102,51,0,0.586)").s().p("AtWNWQlhliAAn0QAAnzFhljQFjlhHzAAQH0AAFiFhQFiFjAAHzQAAH0liFiQliFin0AAQnzAAljlig");
	this.shape_10.setTransform(147.1,147.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(102,51,0,0.469)").s().p("ArKLKQkokoAAmiQAAmhEokpQEpkoGhAAQGiAAEoEoQEpEpAAGhQAAGikpEoQkoEpmiAAQmhAAkpkpg");
	this.shape_11.setTransform(147.1,147.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(102,51,0,0.351)").s().p("Ao/I/QjujuAAlRQAAlQDujvQDvjuFQAAQFRAADuDuQDvDvAAFQQAAFRjvDuQjuDvlRAAQlQAAjvjvg");
	this.shape_12.setTransform(147.1,147.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(102,51,0,0.234)").s().p("AmzG0Qi1i1AAj/QAAj+C1i1QC1i1D+AAQD/AAC1C1QC1C1AAD+QAAD/i1C1Qi1C1j/AAQj+AAi1i1g");
	this.shape_13.setTransform(147.1,147.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(102,51,0,0.117)").s().p("AkoEoQh7h6AAiuQAAitB7h7QB7h7CtAAQCuAAB6B7QB8B7AACtQAACuh8B6Qh6B8iuAAQitAAh7h8g");
	this.shape_14.setTransform(147.1,147.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(102,51,0,0)").s().p("AicCdQhChBAAhcQAAhbBChBQBBhCBbAAQBcAABBBCQBCBBAABbQAABchCBBQhBBChcAAQhbAAhBhCg");
	this.shape_15.setTransform(147.1,147.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3}]}).to({state:[{t:this.shape_3}]},72).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,294.1,294.1);


(lib.元件60 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#663300").s().p("AhYGEIAAjLIilAAQgkAAgBgcIAACYQgEA8hDAEIh4AAQhEAEgEhAIAAkKQglAPgTgiQgPggAagtQBLiHAbiLIhIAAQgpgDgEgxQAAgxAqgEIEGAAQAeAAAIAqQAHgtAaADIGxAAQAtAEAIAxQgEAxgtADIi4AAIAAGTIDAAAQA0AEAEAxQgEAxgxADIjDAAIAADLQgDAlgvAEQgxgEgEglgAnHg1IAAE2QAAAWATAAIAaAAQAWAAAAgWIAAkyQgDgWgPgEIgbAAQgSAEgEASgAmWkHQgPA8gMAeIBIAAQBDAEAEA8IAADkQABgnAoAAIChAAIAAmTIiSAAQgWgDgPgiQgEAlgiAAIhSAAQgIATgHApgAHVD9QAEhHBDgEQBIAEADBHQgDBDhIAEQhDgEgEhDgAHkBQIgHl8QADhEBAgHQBAAHAEBEIgIF5QgHA0g1AIQg4gEgEg1gABEAnQgtgaAWgvQA1hlAah4QAPgtA1ALQAtAPgIAxQgeB4g4ByQgZAjgcAAQgLAAgLgFgAjXgIQgahwg1heQgTgpAxgXQAtgLAeApQBHCAAMBPQAAA2gqATIgMABQgnAAgQgpg");
	this.shape.setTransform(61.6,43);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,123.2,86);


(lib.元件59 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#663300").s().p("AxBUPMAAAgodMAiDAAAMAAAAodg");
	this.shape.setTransform(109,129.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,218.1,259.1);


(lib.元件57 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#663300").ss(4,1,1).p("APpLrIAA91QAAiDhdhdQhdhdiDAAI1XAAQiDAAhdBdQhdBdAACDIAAd1QADh+BahaQBShSBxgJIAA8oAKsG2I1XAAQgPAAgOACAvoPoIAAj9AJpI4IzHAAQh4AAhWB4QgjAzgIBPQgCAOgCCMIapAAQADhrgCgvQgEhQgjgyQhHhjhegRIgCgDQgBAAgBAAIAAAAQgBgBgBAAgAoTUcIAACsIiYAAQiDAAhdhdQhahagDh9IAAisQADB+BaBZQBdBdCDAAgAIwXIIAAijAPpPoQgDB+haBZQhdBdiDAAIh8AAIxDAAAoTXIIRDAAIB8AAQCDAABdhdQBahaADh9IAAisIAAj9QgDh+hahaQhdhdiDAAAKs1dIAAcTAKDI8QgNgDgNgB");
	this.shape.setTransform(100.1,179.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF00").s().p("AIvDvIAAijIAAgIIB9AAQCDAABchbQBbhZACh+IAACrQgCB8hbBZQhcBdiDAAgAqrDvQiDAAhdhdQhahZgDh8IAAirQADB+BaBZQBdBbCDAAICYAAIAACrg");
	this.shape_1.setTransform(100.1,303.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#663300").s().p("AtVDJQACiMACgNQAHhNAkgzQBWh4B4AAITHAAIAaADQBeASBGBjQAjAyAFBOQACAvgEBqg");
	this.shape_2.setTransform(99.5,256.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CCCCCC").s().p("AIvGzIxCAAIiYAAQiDgBhdhdQhahZgDh9IAAj8QADh+BahaQBThSBwgJQAOgBAPgBIVXAAQCDAABcBdQBbBaACB+IAAD8QgCB9hbBZQhcBdiDABgAsri3QglAygHBPQgCAOgBCKIanAAQAEhogCgwQgEhPgkgyQhGhjhegSIgDgDIgBAAIgBAAIgBAAIgUAAIzHAAQh4AAhVB4g");
	this.shape_3.setTransform(100.1,267.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AoTXIIAAirIRCAAIAAAIIAACjgAOLITQhchdiDAAIAA8TIAAcTI1XAAQgPABgOABIAA8oIAAcoQhwAJhTBSQhaBagDB+IAA91QABiDBchdQBdhcCDAAIVXAAQCDAABcBcQBdBdAACDIAAd1QgCh+hbhag");
	this.shape_4.setTransform(100.1,179.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFF00").s("#663300").ss(4,1,1).rr(-65.15,-47.9,130.3,95.8,31.7);
	this.shape_5.setTransform(99.8,46.2,1.147,1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#663300").ss(4,1,1).p("APpLrIAA91QAAiDhdhdQhdhdiDAAI1XAAQiDAAhdBdQhdBdAACDIAAd1QADh+BahaQBShSBxgJIAA8oAKsG2I1XAAQgPAAgOACAvoPoIAAj9AJpI4IzHAAQh4AAhWB4QgjA0gIBOQgCAOgCCMIapAAQADhrgCgvQgEhQgjgyQhHhihegSIgCgDQgBAAgBAAIAAAAQgBgBgBAAgAoTUcIAACsIiYAAQiDAAhdhdQhahagDh9IAAisQADB+BaBZQBdBdCDAAgAIwXIIAAijAoTXIIRDAAIB8AAQCDAABdhdQBahaADh9IAAisQgDB+haBZQhdBdiDAAIh8AAIxDAAAPpLrQgDh+hahaQhdhdiDAAAPpPoIAAj9AKDI8QgNgCgNgCAKs1dIAAcT");
	this.shape_6.setTransform(100.1,181.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#CCCCCC").s().p("AIvGzIxCAAIiYAAQiDAAhdheQhahZgDh+IAAj7QADh+BahaQBThSBwgJQAOgBAPgBIVXAAQCDABBcBcQBbBaACB+IAAD7QgCB+hbBZQhcBeiDAAgAsri3QglAzgHBOQgCAOgBCKIanAAQAEhogCgwQgEhQgkgxQhGhkhegRIgDgDIgBAAIgBAAIgBgBIgUAAIzHAAQh4AAhVB5g");
	this.shape_7.setTransform(100.1,269);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AoTXIIAAirIRCAAIAAAIIAACjgAOLITQhchciDgBIAA8TIAAcTI1XAAQgPABgOABIAA8oIAAcoQhwAJhTBSQhaBagDB+IAA91QABiDBchdQBdhcCDAAIVXAAQCDAABcBcQBdBdAACDIAAd1QgCh+hbhag");
	this.shape_8.setTransform(100.1,181.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#663300").ss(4,1,1).p("APpLrIAA91QAAiDhdhdQhdhciDAAI1XAAQiDAAhdBcQhdBdAACDIAAd1QADh+BahaQBShSBxgJIAA8oAKsG3I1XAAQgPAAgOABAvoPpIAAj+AJpI5IzHAAQh4AAhWB4QgjAzgIBPQgCANgCCMIapAAQADhqgCgvQgEhQgjgyQhHhjhegSIgCgDQgBAAgBAAIAAAAQgBAAgBAAgAoTUdIAACrIiYAAQiDAAhdhdQhahagDh9IAAirQADB9BaBaQBdBdCDAAgAIwXIIAAijAoTXIIRDAAIB8AAQCDAABdhdQBahaADh9IAAirQgDB9haBaQhdBdiDAAIh8AAIxDAAAPpLrQgDh+hahaQhdhciDAAAPpPpIAAj+AKDI8QgNgCgNgBAKs1dIAAcU");
	this.shape_9.setTransform(100.1,180.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFF00").s().p("AIvDvIAAijIAAgIIB9AAQCDAABchbQBbhaACh9IAACrQgCB7hbBaQhcBdiDAAgAqrDvQiDAAhdhdQhahagDh7IAAirQADB9BaBaQBdBbCDAAICYAAIAACrg");
	this.shape_10.setTransform(100.1,304.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#663300").s().p("AtVDJQACiMACgNQAHhNAkgzQBWh4B4AAITHAAQANABANACQBeASBGBjQAjAyAFBOQACAvgEBqg");
	this.shape_11.setTransform(99.5,257.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#CCCCCC").s().p("AIvGzIxCAAIiYAAQiDgBhdhcQhahagDh9IAAj8QADh+BahaQBThSBwgJQAOgBAPgBIVXAAQCDAABcBdQBbBaACB+IAAD8QgCB9hbBaQhcBciDABgAsri3QglAzgHBOQgCAOgBCKIanAAQAEhogCgwQgEhPgkgyQhGhjhegSIgDgDIgBAAIgBAAIgBAAIgUAAIzHAAQh4AAhVB4g");
	this.shape_12.setTransform(100.1,267.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AoTXIIAAirIRCAAIAAAIIAACjgAOLITQhchdiDAAIAA8TIAAcTI1XAAQgPABgOABIAA8oIAAcoQhwAJhTBSQhaBagDB+IAA91QABiDBchdQBdhdCDAAIVXAAQCDAABcBdQBdBdAACDIAAd1QgCh+hbhag");
	this.shape_13.setTransform(100.1,180.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5,p:{y:46.2}},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2,p:{y:256.9}},{t:this.shape_1,p:{y:303.9}},{t:this.shape}]}).to({state:[{t:this.shape_5,p:{y:47.9}},{t:this.shape_8},{t:this.shape_7},{t:this.shape_2,p:{y:258.6}},{t:this.shape_1,p:{y:305.6}},{t:this.shape_6}]},3).to({state:[{t:this.shape_5,p:{y:46.7}},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9}]},1).wait(1));

	// 图层 2
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#663300").s("#663300").ss(4,1,1).rr(-16.8,-32.1,33.6,64.2,16.8);
	this.shape_14.setTransform(41.9,320.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#663300").s("#663300").ss(4,1,1).rr(-16.8,-32.1,33.6,64.2,16.8);
	this.shape_15.setTransform(165.4,320.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14}]}).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2,-3.7,204.2,358.3);


(lib.元件56 = function() {
	this.initialize();

	// 图层 1 复制
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#663300").ss(4,1,1).p("AK3F/IpfAAIAAEmIsOqlIMOqkIAAE8IJfAAg");
	this.shape.setTransform(69.6,54.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CC3300").s().p("Aq2AAIMOqkIAAE8IJfAAIAALnIpfAAIAAEmg");
	this.shape_1.setTransform(69.6,54.8);

	// 图层 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#663300").s().p("AlzF0IAArnILnAAIAALng");
	this.shape_2.setTransform(105.5,68.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#663300").s().p("AmHAAIMOqkIAAVJg");
	this.shape_3.setTransform(42.9,67.8);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-2,-14.9,144.8,150.5);


(lib.元件54 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#663300").ss(4,1,1).p("Akrn2QgBgogCgwQgHioAAgGQAAj0DPg9QBRgYCDgEQBPgCCpACQB+AACEACQEEADCMAJQCSAKAsDQQAQBQAADAQAACRhiA5QguAbhOALAJUlxQADgCADgCQACADACACQBZAMBgAGQAQABAQABQAgABAgABQA/AAAygHIhWCCIhkhpIh3BxIhZiZQgFAAgFgBIhTBZIhPhsQhZgBgWAqAJUlxQgkgFgkgGQg0gIgmAAAMulIQAHgIABAAAMXleQAJAHAOAPAFElVQgsCBDJAvQDKAvCtgFQgeBRgvAAQi6gBi5AUQjfAYgZD4QATAaABAAQALAJAxAAQAkAAAWgPQAMgIAUgZQAogxA1ACQA1ABANAHQANAHAnAnIhOANQBEAhAAAWQAAAWgpgHQgkgGgTACIAmBLQgvALgkgOQglgOgRAAQgRAAgzAOQg1AOgRAAQgtAAgEgBQgJgDgFgGQgFAtAAAvQAABXgFBAIAFABQB9AgBdBPQAUARACAdQAKByhUBKIBSBVQikgBgxgOQAVgqAUgtQAjhNABgCQhOAAg9gQQgmgJgagPQgjAbg1ANQg+AOh0AAQhSAAg9gfIgBAAQgDgCgEgCQgbAQgTARQhLBDAKBlIhCASIhxAKIgCAAIAAgOIBihGQgPgPgZgqQgegyAAgYQAAgGABgFQAAAAAAgBQgBAAgBABQhsARiYAJQiyALiMgFQEPAADAiMQC/iLAAjGQgQikAXikQAViPBmhfQAsgoAogrQA2g5AEhNQAHhAgLhTAF+qyQDUA2CQhbIm/jQQhOC0CpBBgAknljQAAg0gEhfAn/LIQgVAQghAZQhFBAgHA3AncKsQgDAEgdAWQgBABgCABQgDgGgDgHQgnhkgLirAmzFmQApB3A1A1QA0A0B2A8IgGhAIBogMIhNhFIgHgHIANAAQAoAAAdgQQAdgQAAgWQhtAAhNhFQhNhFAAhiAl6NmQAGgFAIgEQAngXACgBACgD5QgTBJgGBM");
	this.shape.setTransform(122.3,110);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#999999").s().p("AtxFlQEPAADAiMQDAiLAAjEQALCpAnBkIAGANIg2ApQhGBAgGA3IgDABQhrARiZAJQh2AHhmAAQgzAAgvgBgAgeFGIAGgNIgFANgAHpiLQgIgDgGgGQAGhMAUhJIATAaQALAJAyAAQAjAAAWgPQAMgIAVgZQAngxA2ACQA0ABANAHQANAHAnAnIhOANQBFAhAAAWQgBAWgpgHQgkgGgSACIAlBLQguALglgOQglgOgQAAQgSAAgzAOQg0AOgRAAQguAAgEgBg");
	this.shape_1.setTransform(88.2,164.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgaDPQBXALBgAGQAJAHAOAPIh3BxgAC0D2IAIgIIABgMIBAADQA/gBAygHIhWCDgAjGC6QAmAAA0AJIBJALIhUBZgAj6hxQiphCBOizIG9DQQhaA5hzAAQhGAAhPgUg");
	this.shape_2.setTransform(185.6,52.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#663300").s().p("AsoIdIAAgcQgBhHAjAEQANACAKAQQALARAAAYQAAAVgJATQgKAVgOAAQgeAAgFgZgAqwHlIgKgCQgEgCgBgLQAAgJALgMQANgQATABIACgCQADABAAAMQgBANgHANQgJAOgMAAIgEAAgAqKFxQgDgfALgYQAUgoA0ASIACAFQACAEAAALQgBAMgUAXQgUAXgNAFgAMAlUIgDgCQgCgLAAgdQAAgkAXgCQAYgBAAAaIgCAYQgCAPAAAMIgFADQgEADgMAAQgMAAgFgCgAJvn2IgLgfQAAgxAuAaQAuAaAAAeQgBAOgEAGQgHAJgWAAQgeAAgRgfg");
	this.shape_3.setTransform(154.1,65.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CCCCCC").s().p("AuxRLIAAgOIBihGQgQgPgYgqQgegyAAgYIABgLIAAgBQAGg3BGhAIA1gpIgFgNQgnhkgLirQgRikAYikQAViPBmhfQArgoAogrQA2g5AEhNQAIhAgLhTIgEhYIgHiuQAAj0DPg9QBRgYCFgEQBPgCCnACQB+AACEACQEEADCMAJQCSAKAsDQQAQBQAADAQAACRhiA5QguAbhOALQgyAHg/AAIhAgCIgggCQhggGhZgMIgEgFIgFAEIhJgLQg0gIgmAAQhZgBgWAqIABAGQgrCBDJAvQDJAvCtgFQgdBRgwAAQi6gBi5AUQjcAYgaD4QgTBJgGBMQgFAtAAAvQABBXgGBAIAFABQB9AgBbBPQAUARACAdQAKByhUBKIBSBVQiigBgxgOQAVgqAVgtIAjhPQhOAAg9gQQgmgJgagPQgjAbg3ANQg+AOh0AAQhRAAg+gfIAGgNIApgYIgpAYIgOAJQgbAQgTARQhLBDAKBlIhCASIhxAKgAsPLGIgEACIAEgCIAggaIggAagAm/KCIgGhAIBogMIhNhFIAGgHQAoAAAdgQQAdgQAAgWQhtAAhNhFQhNhFAAhiQAABiBNBFQBNBFBtAAQAAAWgdAQQgdAQgoAAIgNAAIAHAHIBNBFIhoAMIAGBAQh1g8g1g0Qg1g1gph3QApB3A1A1QA1A0B1A8gAr+BBIAAAcQAGAZAdAAQAOAAAKgVQAJgTAAgVQAAgYgKgRQgKgQgOAAIgEAAQgeAAAABBgAqKABQgKAMAAAJQAAALAEACIALACQAOACAKgQQAIgNAAgLQAAgMgCgBIgCACIgBAAQgUAAgMANgApXiEQgMAYADAfIAeAGQANgFAUgXQAVgXAAgMQAAgLgCgEIgBgFQgRgGgNAAQgdAAgNAcgABqqyQDUA2CQhbIm/jQQhMC0CnBBgAM9tkQgYACAAAkQAAAdACALIADACQAGACAMAAQALAAAEgDIAFgDQAAgMACgPIACgYQAAgZgVAAIgCAAgAKOvVIALAfQARAfAeAAQAWAAAHgJQAFgGAAgOQAAgegugaQgQgJgKAAQgUAAAAAggAm/KCIAAAAgAmqHxgAFBlxIAFgEIAEAFIgJgBg");
	this.shape_4.setTransform(149.8,110);

	this.addChild(this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-2,-2,248.5,224);


(lib.元件53 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#663300").ss(4,1,1).p("AQwD2IqVCyIgxCmIh0hMIsEoqQg+gXhlAAQjzAAhdh5QgegngLgvQgFgXAAgVQAAhDCGgOQBygMC1AcQClAYCDAqQAVAHASAHILEkiIhHCwIKmBZIltDMg");
	this.shape.setTransform(107.3,59);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F9E006").s().p("AD2ICIsEoqQg+gXhlAAQjzAAhdh5QgegngLgvQgFgXAAgVQAAhDCGgOQBygMC1AcQClAYCDAqIAnAOILEkiIhHCwIKmBZIltDMIGtFuIqVCyIgxCmg");
	this.shape_1.setTransform(107.3,59);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#663300").ss(4,1,1).p("AFKnhIHogNIkEDgIGBGAIpsAXIBUFmIsfpmQg+gVhlABQj0AFhfh4QgegngMguQgGgXAAgWQgBhCCGgRQBygNC1AYQClAWCEAoQAVAGASAGICqhIg");
	this.shape_2.setTransform(93.7,67.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F9E006").s().p("AmIh3Qg+gVhlACQj0AEhfh4QgegmgMgwQgGgWAAgVQgBhDCGgRQBygOC1AZQClAWCEAnIAnANICqhIIFSgbIHogNIkEDgIGBF/IpsAZIBUFkg");
	this.shape_3.setTransform(93.7,67.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2,-2,218.6,122.1);


(lib.元件49 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#663300").ss(4,1,1).p("AA4hlIACDLAg5BiIA2g3IAAiMAAuBlIhnAA");
	this.shape.setTransform(19.4,10.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAuBhIAAAEIhnAAIAAgEIA2g2IAAiNIAAgDIA7AAIACDLg");
	this.shape_1.setTransform(19.4,10.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#663300").ss(4,1,1).p("AAuBlIhnAAAg5BiIA2g3IAAiMAA4hlIACDL");
	this.shape_2.setTransform(5.9,4.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAuBiIAAADIhnAAIAAgDIA2g3IAAiMIAAgEIA7AAIACDKg");
	this.shape_3.setTransform(5.9,4.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#663300").ss(4,1,1).p("Ag5BiIA2g3IAAiMAAuBlIhnAAAA4hlIACDL");
	this.shape_4.setTransform(19.4,4.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#663300").ss(4,1,1).p("Ag5BiIA2g3IAAiMAA4hlIACDLAAuBlIhnAA");
	this.shape_5.setTransform(5.9,10.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3,p:{x:5.9}},{t:this.shape_2},{t:this.shape_1,p:{x:19.4}},{t:this.shape}]}).to({state:[{t:this.shape_1,p:{x:5.9}},{t:this.shape_5},{t:this.shape_3,p:{x:19.4}},{t:this.shape_4}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2,-8,29.3,30.4);


(lib.元件48 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#663300").ss(4,1,1).p("Al1g6QgTAEgVAAQg9AAgtgrQgsgtAAg+QAAg/AsgsQAtgsA9AAQAJAAAJABQgEgTAAgUQAAhMA1g1QA1g2BNAAQBEAAAzAtQAMgUAQgSQA5g6BNAAQBPAAA4A6QApArAMA5QAMgCAOAAQBIAAA0AzQA0A0AABJQAAAtgTAmQgFAHgEAHQABABABABQAaAZAAAkQApAEAfAfQAlAkAAA0QAAAwglAlQgkAjgyAAQgqAAgfgXAHHiHQAAAkgaAaQgZAagkAAQgHAAgFgBQADAEADAEQAMASgCAWQgBAOgFAPQgBAFgCAGQgFAMgJAKQgBABgCABAFwAqQArggAOghQAGgSABgdADlgzQAMgQARgKQANgJARAAQADAAAFABQAEAAADABQAQAFAMAIQAPAJAKAOAE8ggQgfgPgZAaQgDACgHAPIAAARAC7CXQAdgmAMg3QAGAOANAHQAQAHARAAQAUACAUgIQAPgFALgLQAEAEAEAFQAGAGAIAGIgDABQgFAPgOAMQgPANgUAAQgVAAgRATQgRATgZAAQgOAAgDgBQgIgCgQgIQgCgBgBgBQgQAVgVARQDeAtBUDuIAACcInsAAIAAl2Qg9AFg+gPQh3gegzh2QgFgNgEgOQgQgIgUgaQgZggAAgWQAAgSAFgGQAFgFAQgKADig2QgXgiADgvQgRAEgSAAQg8AAgqgrQgZgZgKgfQg6gJgtgvQgIALgKALQg2A1hLAAQgYAAgWgFQAAAGAAAGQAAA+gsAtQgSARgUALQgKBPAQA7AiRixQACADAIAIQADACADAGAgjimQAEgEAGgEQAEgCAGgFIAAAEAlYhFQgOAHgPAEAgYB8QAQAPAGARQACAMAAAQAiECQQgDAGgBAJQgBAFAAAPQAAAPACACQABADAHAAQAFAAAcgRQAdgQAaAAQAGAAAMADQALAFAIAAAgkD+QA2gDA3gUQAtgRAggZAEtHzIAABOQhFgHgQhHIBVAAIADAAIAAiPAEtHsIAAAHADYHzIAAiZ");
	this.shape.setTransform(56.4,62.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F9E006").s().p("Aj2DbIAAlzQA5gFA3gUQAtgPAggaQDbAuBVDrIAACcgABbCoIAAhOIAAgHIAAAHIhVAAIAAiWIAACWQAQBHBFAHgABeBaIAAiNIAACNIgDAAgAAGBaIAAAAg");
	this.shape_1.setTransform(77.4,103.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFCC").s().p("ADlFiIBVAAIAABOQhEgHgRhHgAiRBiQh3gegzh0IgJgaQgKglAAgsQAAgcAEgfQgEAfAAAcQAAAsAKAlQgQgIgUgaQgZggAAgYQAAgSAFgGQAEgFARgKQAPgEAOgHQAUgLASgSQAsgsAAg+IAAgMQAVAFAYAAQBMAAA1g1QALgLAIgLQAtAvA6AJQAKAfAZAZQAqArA8AAQASAAAQgEQgCAvAWAiIADADQAMgQARgKQAOgJAQAAIAIABIAIABQAPAFANAIQAOAJALAOIAGAIQAMASgCAWQgCAQgEAPIgDALQgGAMgJAKIgCACQgLALgPAFQgUAHgUgBQgSgBgPgGQgNgHgGgOQgMA2gdAlQgQAVgVARQggAZgtAQQg3AUg3AEIgZABQgwAAgxgMgAhxA1QAFAAAcgQQAdgRAaAAQAGAAALAEQAJAEAJAAQgJAAgJgEQgLgEgGAAQgaAAgdARQgcAQgFAAQgHAAgBgCQgCgDAAgOIAAgUQABgJAEgFQgEAFgBAJIAAAUQAAAOACADQABACAHAAIAAAAgAAKALQAEALAAARQAAgRgEgLQgGgQgOgOQAOAOAGAQgAERimQgCACgHAPIAAATIAAgTQAHgPACgCIACgBIABgBIABgBQAOgOAQAAIAAAAIABAAQAKAAALAGIAAAAIAAAAQgLgGgKAAIgBAAIAAAAQgQAAgOAOIgBABIgBABIgCABgAh5k3QADACADAGQgDgGgDgCIgLgLIALALgAgLk/IgKAIIAKgIIAKgHIAAAEIAAgEIgKAHg");
	this.shape_2.setTransform(55,77.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#663300").s().p("AgdA4IADgLQAEgPACgQQABgUgMgRIgFgJIALABQAigBAagZIACADQAAAdgHASQgOAhgpAgg");
	this.shape_3.setTransform(95.9,61.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("ADVGLQgHgCgQgIIgDgBQAdgnAMg2QAGANANAHQAQAHARAAQAUACAUgIQAPgFALgKIAHAIIAPAMIgEABQgEAPgOAMQgPAOgUAAQgVAAgRASQgRATgZAAQgOAAgEgBgAFwE9IgPgMIgHgIIACgDQAJgKAGgMIAFACQAqggAPgjQAGgSABgdIgDgDQAagZgBgkQABAkgaAZQgaAagjAAIgMgBQgKgNgOgJQgNgJgQgEIgHgCIgIAAQgRAAgOAIQgQALgNAPIgCgCQgXgjADgvQgRAEgSAAQg7AAgrgqQgZgZgKgfQg5gIgtguQgJALgKAKQg2A0hMAAQgYAAgVgGIAAAMQAAA/gsAsQgRARgVALQgOAHgPAEQgTAFgUAAQg/AAgrgsQgsgsgBg/QABg8AsgsQArgsA/AAIARABQgEgTAAgVQAAhLA1g2QA2g1BLAAQBGAAAyAsQAMgUAQgRQA5g7BNAAQBPAAA4A7QApArAMA4QAMgCAOAAQBIAAA0A0QA0AzgBBJQABAugUAjIgIAPIACABQAaAagBAkQArAEAeAfQAkAkAAAzQAAAzgkAkQgkAkgyAAQgqAAgfgYgAFaEpIAAAAg");
	this.shape_4.setTransform(56.4,39.6);

	this.addChild(this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-2,-2,116.8,129.7);


(lib.元件47 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#663300").ss(4,1,1).p("AiUAeQAYg0A9gEIAAA7IhSACACMgrIjLAAAg/AsIDUAA");
	this.shape.setTransform(14.9,4.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFCC").s().p("AgpAeIAAgEQAYg0A7gEIAAA8IhQABg");
	this.shape_1.setTransform(4.3,4.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFCC00").s().p("AhpAsIAAgKIAAg8IAAgRIDLAAIAIAAIAABXg");
	this.shape_2.setTransform(19.2,4.4);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-2,-2,33.9,12.8);


(lib.元件46_1 = function() {
	this.initialize();

	// 图层 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#663300").ss(4,1,1).p("AA3DOIglAAIAAllIAlAAgAA7ieIh1AAIAAgvIB1AAg");
	this.shape_1.setTransform(5.9,20.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#663300").s().p("AASDOIAAllIAlAAIAAFlgAg6ieIAAgvIB1AAIAAAvg");
	this.shape_2.setTransform(5.9,20.7);

	this.addChild(this.shape_2,this.shape_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-2,-2,15.9,45.4);


(lib.元件45 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#663300").ss(4,1,1).p("ABwAAQAAAughAhQghAhguAAQgtAAghghQghghAAguQAAgtAhgiQAhggAtAAQAuAAAhAgQAhAiAAAtg");
	this.shape.setTransform(39.6,11.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#663300").s().p("AgbAcQgMgLAAgRQAAgPAMgMQAMgMAPAAQAQAAAMAMQAMAMAAAPQAAARgMALQgMAMgQAAQgPAAgMgMg");
	this.shape_1.setTransform(39.3,11.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhOBPQghghAAguQAAgtAhghQAhghAtAAQAuAAAhAhQAhAhAAAtQAAAughAhQghAhguAAQgtAAghghgAgegcQgMAMAAAQQAAAQAMALQAMAMARAAQAOAAAMgMQAMgLAAgQQAAgQgMgMQgMgMgOAAQgRAAgMAMg");
	this.shape_2.setTransform(39.6,11.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#663300").ss(4,1,1).p("AhvAAQAAgtAhghQAhghAtAAQAuAAAhAhQAhAhAAAtQAAAughAhQghAhguAAQgtAAghghQghghAAgug");
	this.shape_3.setTransform(11.3,11.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#663300").s().p("AgbAcQgMgMAAgQQAAgPAMgMQAMgMAPAAQAQAAAMAMQAMAMAAAPQAAAQgMAMQgMAMgQAAQgPAAgMgMg");
	this.shape_4.setTransform(11,11.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhOBPQghghAAguQAAgtAhghQAhghAtAAQAuAAAhAhQAhAhAAAtQAAAughAhQghAhguAAQgtAAghghgAgegcQgMAMAAAQQAAAPAMAMQAMAMARAAQAOAAAMgMQAMgMAAgPQAAgQgMgMQgMgMgOAAQgRAAgMAMg");
	this.shape_5.setTransform(11.3,11.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#663300").ss(4,1,1).p("ABwAAQAAAughAhQghAhguAAQgtAAghghQghghAAguQAAgtAhghQAhghAtAAQAuAAAhAhQAhAhAAAtgAhqAJIDMAA");
	this.shape_6.setTransform(39.8,11.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#663300").ss(4,1,1).p("AAAhvQAuAAAhAhQAhAhAAAtQAAAughAhQghAhguAAQgtAAghghQghghAAguQAAgtAhghQAhghAtAAgAhrAJIDNAA");
	this.shape_7.setTransform(11.3,11.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_7},{t:this.shape_6}]},11).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2,-2,54.9,26.6);


(lib.元件42 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#663300").ss(4,1,1).p("EBuEABiIxaAAIAAjDIRaAAgEBRoABiIxaAAIAAjDIRaAAgEAzkABiIxaAAIAAjDIRaAAgAXIBiIxaAAIAAjDIRaAAgAmgBiIxaAAIAAjDIRaAAgEgi8ABiIxbAAIAAjDIRbAAgEhANABiIxaAAIAAjDIRaAAgEhcpABiIxaAAIAAjDIRaAAg");
	this.shape.setTransform(704.4,9.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("EBcqABiIAAjDIRZAAIAADDgEBANABiIAAjDIRaAAIAADDgEAiKABiIAAjDIRZAAIAADDgAFtBiIAAjDIRaAAIAADDgA37BiIAAjDIRaAAIAADDgEg0XABiIAAjDIRbAAIAADDgEhRnABiIAAjDIRaAAIAADDgEhuDABiIAAjDIRbAAIAADDg");
	this.shape_1.setTransform(704.4,9.8);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-2,-2,1412.8,23.7);


(lib.元件41 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("AkiGKQgrgHAFguQAMhYgGhOQgChWgXh5Igji7QgShSBUgJIGshQQBMgRAIBNIA8FGQAeCeAQgDQALAIgPg9QgEgmAlgHQAmgDAHAoQAgCvhJARQhwALg4kaIg3koQgDgQgPADIlyBFQgSADADAQIAeCiQAbCPAHBYQACBVgNBSQgKAsgnAAIgDAAgAjPEGQgVgcAagiQBHhTAphQQhKg6g/gwQgigaAaghQAegcAmASQAlAZA4AsQAOANAIAFQAXg+AShfQAFgnAoACQAoAIgDAnQgJBngkBhIA8AxQBuBSgWAgQgFAXgVAKQgXAMgTgQQgPgKgegeQgygsgbgRQhUCSgtAbQgRALgOAAQgRAAgOgPg");
	this.shape.setTransform(38.7,39.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,77.3,79);


(lib.元件40 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("AC/F6Ig7gHQh6gJAUhvIAPhwQAIgrAsADQArAIgCApIgNBqQgEAcAcADIA1AHQAiAEALgOQALgOAEg2QAIgnAoAFQAoAIgCAoQgMBkghAeQgVAYgvAAQgUAAgYgEgAl3EaQgGgxAqgHQCWgWAch3QARgeAnAMQAkARgIAiQgvCti9AXIgIAAQgpAAgNgggADfBjQgogIACgpQAGguAlABQAcAHgCgMIAajIQAFgMgTgDQglgHACgsQAJgrAmABIArAGQBCAFgMBHIgjESQgFA5hBAAQgVAAgagGgABnBOIjCgZQhEgGAOhUIAdjpQABgJAJgPQggAFgUACQgfACAAAWIgbDZQgDATAegJQAcgDAIAkQAGAageAQQglAUg+gIQgvgDAKg1IAnkzQAEg4A9gIQAkgIAfAEQA4gCADAiIgBADQAEARgEAMQADAAAGgCQAQgEAHABIA1AHQAMgSAGgSQANgeAoAFQAoAIgBAgQgEAGgBAJQgBAMgEAGIAxAHQBEAIgIBBIgfDwQgCA+gzAAQgLAAgMgCgAg2gmQgBAJANACIB9AQQAJABABgJIAHgyIiTgTgAgfjaIgGAvICTASIAGguQACgNgKgBIh9gQIgCAAQgKAAgCALg");
	this.shape.setTransform(37.7,38.3);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,75.5,76.6);


(lib.元件39 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("AD5FeIgMgPQgGgKgHgGQjRADjWAJQhHAAgTgGQgWgGgGgWQgNgfApg4QAsg5BXhXIANgNQAcgcAMgGIjXAAQgjgDgDgnQADgoAjgEIETAAIAAh5IjbAAQgjgEgDgoQAAgpAjgDIDhAAIAAg4QADgjAngDQArAAADAjIAAA7IDuAAQAiADADApQgDAogiAEIjuAAIAAB9IETAAQAjADADAoQgDAngjADIl1AAQAyAZg1AyQgsAphLBRQgMAQADAGQAGAJAWgDIFJgJIhBhVQgWgfAfgcQAjgfAiAlQAvA8BFBkQAMASADAAQAfAygcAcQgSAPgRAAQgUAAgRgVg");
	this.shape.setTransform(35.9,37.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,71.9,74.3);


(lib.元件38 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("AjCFxQgogQgGg1IgwkYQgCgdAZgRQgJABgJAFQgSAGgSAEQguAKgMgnQgIgrAugLQB9gfBagsQgkgKg/ghQgMAFADAAQg+AdgpAOQgqANgTgjQgKgnAmgTQBlgoBxg8QAmgUAYAcQASAjgfAYIgRAJQgJAFgGABQAgARA/ASQAKABADADQAoghAmgmQgMACgRgDQgigHADgmQAEgkAkAAQBrgCCGAVQAkAHAEAoQgGAqgtgFQgWABgqgFQgbgGgMAAIgIAKQgwA1gaARQBdAGBxgGQA2gDADAlQABApgoAHQgWAEgQgBQARAHAJAhIAWCAQAJA0gKAPQgHANgyAJImbBHIAHAoQAAA2BQgRID9gsQBagQAXgNQAagOgGgiQgEgoAogKQAlgDAKAnQASBWg8AnQgrAahpASIkQAvQgtAHgfAAQggAAgTgHgAiuAmQgQADADAQIAMBHICXgaIgPhXgAC4gVIiEAVIAPBWICEgXQATgDgFgMIgKg4QgDgPgKAAIgGACgAj9ggIH6hWQiUADh2gSQhjA3iNAug");
	this.shape.setTransform(40,37.7);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,80,75.4);


(lib.元件37 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#663300").s().p("AokIlQjkjjAAlCQAAlADkjkQDkjkFAAAQFCAADjDkQDkDkAAFAQAAFCjkDjQjjDklCAAQlAAAjkjkg");
	this.shape.setTransform(77.8,77.8);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,155.5,155.5);


(lib.元件30副本 = function() {
	this.initialize();

	// 图层 1
	this._txt = new cjs.Text("2500", "45px 'FZCuYuan-M03S'", "#CC3300");
	this._txt.name = "_txt";
	this._txt.textAlign = "right";
	this._txt.lineHeight = 55;
	this._txt.lineWidth = 189;
	this._txt.setTransform(531.5,124.3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#663300").s().p("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");
	this.shape.setTransform(560,88.9);

	this.addChild(this.shape,this._txt);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(337.6,6.3,444.8,173.4);


(lib.元件30 = function() {
	this.initialize();

	// 图层 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("AKWCiQgqAEgrhDQgiAYgdAKQgUAHgIgPQgDgRAUgLQAkgQAXgWQgLgigFhCIgeABQgSAAgBgSQAAgTAQgBIAegCQgDgjAAgdQACgPAQgBQATAAACANIAEBBIBHgDQAQAAACASQAAATgRABIhHADQABAeAJArQAXgdAMgWQAIgOARAHQANAIgFARQgKAZgrA0QATAmAQAEQAEAGAAgvQACgPAPgBQAQAAABAPQACBZgUAAIgCAAgAnYCNIAAh4IhYAAQgFBeg4AlQgVAPgPgMQgPgPARgPQA0gsABg8Ig+AAQgQgCgBgTQACgPARgCIA/AAIAAhaIg3AAQgQgBgCgSQACgSAQgBIELAAQAQABABASQgBASgQABIguAAIAABaIA5AAQANACACAPQgCATgNACIg5AAIAAB4QgBATgSACQgTgCgBgTgAougRIBWAAIAAhaIhWAAgADbCVQgZgYAegNQAFAAAIADIALADQAQADADgZQAAgUgCgGIgtAAQgPgBgBgTQABgSAPgCIAnAAQgJgMAAgFQAAgHARgPQAHgGAAgCIgiAAQgVAAADgWQgTAAgCgPQAAgFAEgKIAEgIIg6AAIgCAfIAZAAQAdAAgCAVQgDCWgUAQQgLARglgJQgLgCACgSQACgRALACQAPADACgJQAMgqAAhCQABgDgIAAIgLAAQgQBygZAiQgLAOgPgGQgMgFADgSIAFgLIAHgQQAfhEAChwIgRAAQgHAAgEgFQgBAFgLAAQgLAAgegsQgBAAAAgBQgBAAAAAAQAAAAgBgBQAAAAAAAAQgFgLAMgKQAMgIAKAHQAEACAOAPIAMAOQAHgDAEAAIAkAAIgDgNQgBgSAQgEQATgCAEARIAEAUIAcAAQANACACAPQAEgGAIgYIAFgOQAGgMAQABQAPADAAAOQAAAIgEAIIA3AAQAQABACATQgCAUgPABIhFAAIgNAZIBBAAQAVABgCAWQABAMgkAiQAAAEAJANIAcAAQAOACABASQgBATgOABIgXAAQACAkgFAQQgCAPgNALQgFAFgLADIgGACIgFAAQgZAAgQgJgAAZCcQgPgHAHgRQARgsALg0QAEgPARABQASADgCAPQgJA+gVAqQgHANgOAAIgGgBgAk0CcQgVgDAAgQQACgIANgMQASgRALgPQgxguAEgJQgBgEAYhKIAIgdIgQAAQgSgBAAgVQADgSASgBIAWAAIAEgQIABgHQAEgTAVABQATADgDATIgEATIAVAAQAcgBgCAcQAAASgCAKIAshSQAOgTATAEQAQAGgHAWIgqBMQAmABAzgHIgKgZIgLgXQgFgQAQgIQARgHALAPQAeA8AMAlQAFASgQAIQgSAFgJgPIgJgQQg8AMg4ACQgcABgFgPQgCA5gaAxQAXATAHAMQAFALgHAIQgGAJgLgCQgGgBgPgLIgLgKQgiAsgSAAIgBAAgAkhAYQAQATAKAHQAZg2AAhJIgUAAQgIAigXBDgAjHB6IAAhdQgBgfAeACIBvAAQAUAAAHAEQAGAGAAAXIAABZQAAASgHAEQgHAHgWAAIhrAAIgEAAQgbAAABgdgAigArIAABBQAAAHAIAAIBQAAQAHAAAAgIIAAhAQAAgIgFAAIhSAAQgIAAAAAIgAFwCFQgMgOAPgQQAwgpAPgkIgYgXIgagXQgQgQAMgPQANgMATANIAhAeQAFgaADgtQAAgEgGAAIg8AAQgQgBgCgSQACgTAPgBIBVAAQAYAAgBAYQAAA6gRA+IASAUIAIAKQAPATgJAPQgOAOgQgPIgRgSQgbAtgkAdQgKAIgJAAQgGAAgGgEgAA0AAQgWgVgIgOQgFgLANgKQANgKAJAKQATAUALAQQAHANgMAHQgHAFgGAAQgGAAgGgFgAJ9hjQgFgIgLgMIgIgJQgLgNAJgLQAOgLAMALQARAPAMAQQALARgMAMQgGADgEAAQgKAAgIgKg");
	this.shape.setTransform(561.8,430.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#663300").ss(4,1,1).p("ARlCZQgECdifAAI+DAAQifAAgDidARlCZIAABeQAACjijAAI+DAAQiiAAAAijIAAheIAAmPQAAijCiAAIeDAAQCjAAAACjg");
	this.shape_1.setTransform(562.6,434.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#663300").s().p("AvBFnQifAAgDicIAAmPQAAijCiAAIeDAAQCjAAAACjIAAGPQgECcifAAg");
	this.shape_2.setTransform(562.6,429.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AvBCAQiiAAAAihIAAheQADCbCfAAIeDAAQCfAAAEibIAABeQAAChijAAg");
	this.shape_3.setTransform(562.6,462.9);

	// 图层 3
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#663300").s().p("AiyCzIAAllIFlAAIAAFlg");
	this.shape_4.setTransform(594,308.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#663300").s().p("Ai7lFIF3FFIl3FGg");
	this.shape_5.setTransform(624.2,307.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#663300").s().p("AiyCzIAAllIFlAAIAAFlg");
	this.shape_6.setTransform(526.3,308.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#663300").s().p("Ai7AAIF3lFIAAKLg");
	this.shape_7.setTransform(496.2,307.9);

	// 图层 2
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#663300").s().p("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");
	this.shape_8.setTransform(563,234.1);

	// 图层 1
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#663300").ss(4,1,1).p("ARqLdQgECcifAAI+NAAQifAAgDicARqLdIAABeQAACiijAAI+NAAQiiAAAAiiIAAheIAA4XQAAiiCiAAIeNAAQCjAAAACig");
	this.shape_9.setTransform(562.1,282.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AvGPdQijAAAAiiIAAheIAA4XQAAiiCjAAIeNAAQCjAAAACiIAAYXQgECcifAAI+NAAQifAAgEicQAECcCfAAIeNAAQCfAAAEicIAABeQAACiijAAg");
	this.shape_10.setTransform(562.1,282.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#663300").s().p("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");
	this.shape_11.setTransform(568.6,88.2);

	this.addChild(this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(399,3,339.1,474.7);


(lib.元件28副本 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#663300").ss(4,1,1).p("EAnzgL8IAAsEQAAhxhxAAMhMDAAAQhxAAAABxIAAMEMAAAAj9QAABxBxAAMBMDAAAQBxAAAAhxgEgnkgL8MBPEAAA");
	this.shape.setTransform(254.8,49.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("EgmBAS3QhxAAAAhxMAAAgj8IAOAAMBPEAAAIATAAMAAAAj8QAABxhxAAg");
	this.shape_1.setTransform(254.8,93.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F9E006").s().p("EAngAG6MhPEAAAIgOAAIAAsCQAAhxBxAAMBMDAAAQBxAAAABxIAAMCg");
	this.shape_2.setTransform(254.8,-71.2);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-2,-117.5,513.5,334);


(lib.元件28 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#663300").ss(4,1,1).p("EAnzghCIAAsEQAAhxhxAAMhMDAAAQhxAAAABxIAAMEMAAABOJQAABxBxAAMBMDAAAQBxAAAAhxgEgnkghCMBPEAAA");
	this.shape.setTransform(254.8,184.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("EgmBAn9QhxAAAAhxMAAAhOIIAOAAMBPEAAAIATAAMAAABOIQAABxhxAAg");
	this.shape_1.setTransform(254.8,228.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F9E006").s().p("EAngAG6MhPEAAAIgOAAIAAsCQAAhxBxAAMBMDAAAQBxAAAABxIAAMCg");
	this.shape_2.setTransform(254.8,-71.2);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-2,-117.5,513.5,604);


(lib.元件27 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s("#663300").ss(4,1,1).rr(-3.45,-22.65,6.9,45.3,3.45);
	this.shape.setTransform(444.8,89.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F9E006").s("#663300").ss(4,1,1).rr(-18.75,-28.1,37.5,56.2,11.3);
	this.shape_1.setTransform(444.5,60.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s("#663300").ss(4,1,1).rr(-3.45,-22.65,6.9,45.3,3.45);
	this.shape_2.setTransform(401.8,89.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F9E006").s("#663300").ss(4,1,1).rr(-18.75,-28.1,37.5,56.2,11.3);
	this.shape_3.setTransform(401.5,60.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s("#663300").ss(4,1,1).rr(-3.45,-22.65,6.9,45.3,3.45);
	this.shape_4.setTransform(531.2,89.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F9E006").s("#663300").ss(4,1,1).rr(-18.75,-28.1,37.5,56.2,11.3);
	this.shape_5.setTransform(530.9,60.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s("#663300").ss(4,1,1).rr(-3.45,-22.65,6.9,45.3,3.45);
	this.shape_6.setTransform(488.2,89.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F9E006").s("#663300").ss(4,1,1).rr(-18.75,-28.1,37.5,56.2,11.3);
	this.shape_7.setTransform(487.9,60.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#663300").ss(4,1,1).p("AGPCYIAACEIiDAAIAAiEgAk5h/IM6AAIB9B/Iz7AAIB9h/IBiAAgAmeicIAAiKIBlAAIAACKAkUCdIAACKIiKAAIAAiKg");
	this.shape_8.setTransform(93.8,62.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgxBTIAAgdIAAiIIBjAAIAACIIAAAdg");
	this.shape_9.setTransform(57.3,41.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F9E006").s().p("AmdDTIAAiKICKAAIAACKgAEMDIIAAiDICDAAIAACDgAp9hTIB+h/IBiAAIBkAAIM6AAIB9B/g");
	this.shape_10.setTransform(93.8,70.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#663300").ss(4,1,1).p("AIPDsIwdAAIAAnXIQdAAg");
	this.shape_11.setTransform(93,82.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AoODsIAAnXIQdAAIAAHXg");
	this.shape_12.setTransform(93,82.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#663300").ss(3.6,1,1).p("AhRgRICjAAIAAAjIglAAIh+AAg");
	this.shape_13.setTransform(14.9,6.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#663300").ss(4,1,1).p("AAknNIAAAMIhOBiIDIAAIhbhcAhanBIAAPYIhDAAIAAwtIBDAAIAAAx");
	this.shape_14.setTransform(15.9,53.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AhyIXIAAwtIBDAAIAAAxIAAAkIAAPYgABPnBIh+AAIAAgkICiAAIAAAkgABPnBIAAgMg");
	this.shape_15.setTransform(11.6,53.6);

	this.addChild(this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-2,-2,553.7,116.3);


(lib.元件25 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#663300").ss(4,1,1).p("AhbZQQgzgZgKglQgEgQAAhTQAAjbBpi4QBaigCjh6QCOhqCsg8QCcg2B/AAQBFAABgAhQBgAgA0AAQAAg7AahaQAhhuA5hbQCdj9ERAAQBHAAA8AbQBMAhASAEQAohmCJhEQB2g7BtAAQDhAACNCyQA4BHAfBXQAcBOAABBQAABggCAJQgBADgGAKQAJgFALgEQA+gZA4AAQCMAACEBNQB3BFBhB6QBaBzA0CHQAzCGAAB1QAACchUBzQhEBdiDBJEBA4AY1QJGqkoWozQi0i9kKADQAoq3qEA/QAarYqpl8QrAmIpHJZQiMCQhiCxQpmkVl4JlQhaCSgXCpQlOhIAYFHQACAXALAYQvLibkAOqQgJAigGAjQgSBoAOBoQmQgqhvGKQn6kSkdILQgPAdgMAfEArHAG8QgMARgdAnIgNAAQADgfAzgZgEgxkASCQARgoASgmQACAAACABEgxBAQ0QiUgQh2BWQhyBTgNB1Qj9gnjcAzQkcBCinE0A6IL3QgLgHgKgGQhZg2hlAAQhXAAhJAoQgqAXhXA2QgnhGhKgcQo9jSkXI/");
	this.shape.setTransform(445.6,173.2);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-2,-2,895.2,350.5);


(lib.元件23 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#663300").ss(4,1,1).p("EBQ0ABiIxbAAIAAjDIRbAAgEA0XABiIxaAAIAAjDIRaAAgAWtBiIxZAAIAAjDIRZAAgAltBiIxaAAIAAjDIRaAAgEgi9ABiIxaAAIAAjDIRaAAgEg/ZABiIxaAAIAAjDIRaAAg");
	this.shape.setTransform(517.2,9.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("EA/aABiIAAjDIRZAAIAADDgEAi9ABiIAAjDIRaAAIAADDgAFTBiIAAjDIRaAAIAADDgA3HBiIAAjDIRbAAIAADDgEg0XABiIAAjDIRaAAIAADDgEhQzABiIAAjDIRbAAIAADDg");
	this.shape_1.setTransform(517.2,9.8);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-2,-2,1038.4,23.7);


(lib.元件21 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#663300").ss(4,1,1).p("ABqiMIAkBQIhYBGIhUhGICIhQIAWgMIBoBbIhZAAAhegdIBAgfABAAaIizB/Ih0hY");
	this.shape.setTransform(23.2,15.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#663300").s().p("AiRATIgEgHICJhSIAEgFIA+gfIBWBIIAKAQIizB9g");
	this.shape_1.setTransform(14.6,19.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFCC").s().p("AhWADICJhOIAkBOIhXBIg");
	this.shape_2.setTransform(28.8,8.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag9ggIAVgMIBmBZIhWgBIgBABg");
	this.shape_3.setTransform(40.2,4.6);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-2,-2,50.5,34.7);


(lib.元件19 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#663300").ss(4,1,1).p("AgagMQgPATgOAEIAAADQAZgFAPAQQAKALAKAdIADAAQAAgOASgbQASgYAMgEQgFgCgZgRQgWgOgOgbQgIAogIAMg");
	this.shape.setTransform(5.6,6.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAFBBQgKgdgKgLQgPgQgZAFIAAgDQAOgEAPgTQAHgMAJgoQAOAbAWAOQAZARAEACQgLAEgSAYQgTAbAAAOg");
	this.shape_1.setTransform(5.6,6.5);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-2,-2,15.2,17.1);


(lib.元件18 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#663300").ss(4,1,1).p("ABrAKIillIIgfE+IiKhHIDXGGIDwgEIgTm5g");
	this.shape.setTransform(22.9,31.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F9E006").s().p("AjjhIICKBIIAfk+ICmFIIBkiJIAUG5IjwAFg");
	this.shape_1.setTransform(22.9,31.9);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-2,-2,49.7,67.8);


(lib.元件16 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.8)","rgba(255,255,255,0)"],[0,0.945,1],-24.3,6.3,24.4,-6.3).s().p("AEpUQMgQ9gogIHtAAMAQ7Aogg");
	this.shape.setTransform(41.1,129.7);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-37.8,0,157.8,259.4);


(lib.元件14 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#663300").ss(4,1,1).p("AijL4QAhizgJh7QgJh7g+h6Qg/h5h3ifQh3iigqhqQg9idAAiXQAAgEgDhjQgBgwAFgWQAMg1BRAAQA3AAAmA8QAPAXAuBtQAnBaAnApQA5A8BVAAQBBAABSgqQBUgrAtAAQBYAAAhA1QAYAmAEBXQAEB4AFAYQAPBOA0AhQAVAOBOAtQA4AgAcAXQBQBCAAB6QAAB1h9BYQhMA2jHBSQghANgcANQgCAGgEAPQgEAOgGAJQgXAggmBJQgpBQghAzQgwBNg8gYQg7gXgChRgACdITQiYBBg9AsQhOA3gdBBAApF9QCwjoABi/");
	this.shape.setTransform(61.8,87);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhiCjQg7gXgChRQAdg/BOg3QA8gsCZhBIgGAVQgEAOgGAJQgXAggmBJQgqBOggAzQgkA7gsAAQgOAAgOgGg");
	this.shape_1.setTransform(61.5,157.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFCC").s().p("AiLIAQgJh7g+h5Qg/h6h3ieQh3iigqhqQg9idAAiXIgDhnQgBgwAFgWQAMg1BRAAQA3AAAmA8QAPAXAuBtQAnBaAnApQA5A8BVAAQBBAABSgrQBUgqAtAAQBYAAAhA1QAYAmAEBWQAEB4AFAZQAPBOA0AhQAVAOBOAsQA4AfAcAXQBQBEAAB6QAAB1h9BYQhMA2jHBRIg9AaQiYBCg9ArQhOA3gdBCQAhi0gJh7gAApG0QCwjoABjCQgBDCiwDog");
	this.shape_2.setTransform(61.8,81.6);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-2,-2,127.7,178.1);


(lib.元件12 = function() {
	this.initialize();

	// 图层 1 复制
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#663300").ss(4,1,1).p("AIao3IwzAAQhXAAg+A9Qg9A+AABXIAAJAQAABXA9A+QA+A9BXAAIKjAAIAACLICLiLIEFAAQBXAAA+g9QA9g+AAhXIAApAQAAhXg9g+Qg+g9hXAAg");
	this.shape.setTransform(74.9,56.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFCC").s().p("ACKGtIqjAAQhXABg+g+Qg9g9AAhYIAApAQAAhXA9g+QA+g9BXAAIQzAAQBXAAA+A9QA9A+AABXIAAJAQAABYg9A9Qg+A+hXgBIkFAAIiLCLg");
	this.shape_1.setTransform(74.9,56.9);

	// 图层 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#663300").s().p("ACKGuIqjAAQhXAAg+g+Qg9g9AAhYIAApAQAAhXA9g9QA+g+BXAAIQzAAQBXAAA+A+QA9A9AABXIAAJAQAABYg9A9Qg+A+hXAAIkFAAIiLCKg");
	this.shape_2.setTransform(66.5,65.3);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-8.4,-2,160.2,124.1);


(lib.元件11副本 = function() {
	this.initialize();

	// 图层 1 复制
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#663300").ss(4,1,1).p("ASRvRMgkhAAAQhXAAg+A+Qg9A9AABXIAAUtQAABXA9A+QA+A9BXAAIHjAAIDsDSIAAjSIZSAAQBXAAA+g9QA9g+AAhXIAA0tQAAhXg9g9Qg+g+hXAAg");
	this.shape.setTransform(138,97.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFCC").s().p("AqtMAInjAAQhXAAg+g9Qg9g+AAhXIAA0tQAAhXA9g9QA+g+BXAAMAkhAAAQBXAAA+A+QA9A9AABXIAAUtQAABXg9A+Qg+A9hXAAI5SAAIAADSg");
	this.shape_1.setTransform(138,97.8);

	// 图层 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#663300").s().p("AqtMAInjAAQhXAAg+g9Qg9g+AAhXIAA0tQAAhXA9g9QA+g+BXAAMAkhAAAQBXAAA+A+QA9A9AABXIAAUtQAABXg9A+Qg+A9hXAAI5SAAIAADSg");
	this.shape_2.setTransform(151.2,107.6);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-2,-2,291.2,207.5);


(lib.元件11 = function() {
	this.initialize();

	// 图层 1 复制
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#663300").ss(4,1,1).p("ASRvRMgkhAAAQhXAAg+A+Qg9A9AABXIAAUtQAABXA9A+QA+A9BXAAIHjAAIDsDSIAAjSIZSAAQBXAAA+g9QA9g+AAhXIAA0tQAAhXg9g9Qg+g+hXAAg");
	this.shape.setTransform(138,97.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AqtMAInjAAQhXAAg+g9Qg9g+AAhXIAA0tQAAhXA9g9QA+g+BXAAMAkhAAAQBXAAA+A+QA9A9AABXIAAUtQAABXg9A+Qg+A9hXAAI5SAAIAADSg");
	this.shape_1.setTransform(138,97.8);

	// 图层 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#663300").s().p("AqtMAInjAAQhXAAg+g9Qg9g+AAhXIAA0tQAAhXA9g9QA+g+BXAAMAkhAAAQBXAAA+A+QA9A9AABXIAAUtQAABXg9A+Qg+A9hXAAI5SAAIAADSg");
	this.shape_2.setTransform(129.6,107.6);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-8.4,-2,286.3,207.5);


(lib.元件10 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ege0Ai4MAAAhFwMA9pAAAMAAABFwg");
	this.shape.setTransform(197.4,223.3);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,394.7,446.6);


(lib.元件9复制 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F9E006").s().p("AB1CiQgZgDgFgNQgEgVASgDQAJgBAaADQAzAHgCgOQAAgPgBgEIiPAAQgQgCgBgRQABgSARgCICHAAQgEgKAogLIiRAAQgPgCgCgPQAAgQAQgCIDTAAQANAAAEAKQADAMgKAHIgQAIIgnATIBUAAQARACACASQgCARgRACIhcAAQADANAAAOQACAnhOAAIgjgCgAlECbQgIgNALgNQAHgFAPgIQA8gjAThSIgqAAQgNAAgEgHIgHAHQgMAKgIABQgRAGgIgLQgIgNAKgOIALgLQAxgsASg8QAFgQAVAEQARAFgCASQgKApgeApICgAAQgdgjgUgsQgOgiAegDQALAAAPAaIADAEQAeA3AoAhIAGAFQAHAGAEAIQAGAJgGALQgFAJgLAAQgMAAgSgQIgDgCQADBSgHAlQgEAhgSAKQgMAIgeABQgcAAgYgIQgVgIACgSQAFgSAVADQAIADATADQASACAEgBQAQABADgTQAEgQgBhNQAAgHgIAAIhIAAQgaByhPApQgOAIgLAAQgJAAgHgHgAA6gfIAAgdQAAgWAYAAIDGAAQAWAAAAAUIAAAjQABAUgZAAIjEAAIgDAAQgWAAABgYgABhglICkAAIAAgPIikAAgAAnheQgOgCgBgSQABgQAOgBIB4AAIgBgEIgBgEQgGgQARgGQATgGAIAOIAHAOIAEAIIBvAAQAPABABAQQgBASgPACg");
	this.shape.setTransform(16.5,21.8);

	// 图层 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#663300").s().p("Ak9E9QiEiDABi6QgBi5CEiEQCEiEC5ABQAUgBATACQChANB1B1QCFCEAAC5QAAC6iFCDQh1B2ihANQgTABgUABQi5AAiEiFg");
	this.shape_1.setTransform(15.6,21.9);

	// 图层 3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#663300").ss(4,1,1).p("AGtAAQAACxh+B+Qh+B+ixAAQiwAAh+h+Qh+h+AAixQAAiwB+h+QB+h+CwAAQCxAAB+B+QB+B+AACwg");
	this.shape_2.setTransform(15.6,34.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AkuEvQh+h+AAixQAAiwB+h+QB+h+CwAAQCxAAB+B+QB+B+AACwQAACxh+B+Qh+B+ixAAQiwAAh+h+g");
	this.shape_3.setTransform(15.6,34.9);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-29.4,-23.1,90,103);


(lib.元件9 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F9E006").s().p("AhVgxICrAAIhWBjg");
	this.shape.setTransform(-6.4,23.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F9E006").s().p("AAADHYhtAAhZhZAAhuYAAhtBZhZBtAAYBuAABZBZAABtIhFAAYAAhGg7g7hHAAYhGAAg7A7AABGYAABHA7A7BGAAg");
	this.shape_1.setTransform(15.7,20.3,1.34,1.34,90);

	// 图层 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#663300").s().p("Ak9E9QiEiDABi6QgBi5CEiEQCEiEC5ABQAUgBATACQChANB1B1QCFCEAAC5QAAC6iFCDQh1B2ihANQgTABgUABQi5AAiEiFg");
	this.shape_2.setTransform(15.6,21.9);

	// 图层 3
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#663300").ss(4,1,1).p("AGtAAQAACxh+B+Qh+B+ixAAQiwAAh+h+Qh+h+AAixQAAiwB+h+QB+h+CwAAQCxAAB+B+QB+B+AACwg");
	this.shape_3.setTransform(15.6,34.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AkuEvQh+h+AAixQAAiwB+h+QB+h+CwAAQCxAAB+B+QB+B+AACwQAACxh+B+Qh+B+ixAAQiwAAh+h+g");
	this.shape_4.setTransform(15.6,34.9);

	this.addChild(this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-29.4,-23.1,90,103);


(lib.元件8 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#663300").ss(7,1,1).p("AESh5QAbAbAAAmQAAAmgbAZQgaAbgmAAQgmAAgbgbQgUgSgFgaQgCgJAAgKQAAgcAPgWQAFgIAHgHQAbgaAmAAQAmAAAaAagAksgVQDagRDIhPQgIAdADAgQAAAKACAJQAAABAAAAQAGAkARAkQjIBXjiAZ");
	this.shape.setTransform(30.2,14.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AjegkIAHgBQDYgQDKhPQgIAdADAgIACATIAAABQAGAjARAlQjKBXjgAYIgFABg");
	this.shape_1.setTransform(21.7,16.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFCC").s().p("AhABAQgTgUgFgaQgCgJAAgJQAAgbAPgWQAFgIAGgHQAcgaAkAAQAlAAAbAaQAbAbAAAlQAAAlgbAbQgbAbglAAQgkAAgcgbg");
	this.shape_2.setTransform(51.2,9.2);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-3.5,-3.5,67.3,36.7);


(lib.元件7 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#663300").s().rr(-6.05,-9.15,12.1,18.3,6.05);
	this.shape.setTransform(25.9,46.2,1,1,14);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#663300").s().rr(-6.05,-9.15,12.1,18.3,6.05);
	this.shape_1.setTransform(67.9,55.7,1,1,19);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#663300").ss(7,1,1).p("AkhlbQBnhVCqAEQCrADB9BLQBwBDA4BzQABADACADQA8C4hVCHQAAAAgBABACdheQChBzBsCHQgBABAAABQgCAGgBAGQAqgDASAPQASAOAAAjQgBAig6A/Qg2Awg2gyQgJALgKAKQhYBbh9gJQhhgLhfgUQhxgZhrgmQh6gqgIiDQgBgdABgcQgwgMgJgwQgFhvAqgYQAUgOAqALQALgeAOgdQAHgQAJgPQAAgBAAAAQARgfATgdQAGgJAFgIQAzgUA3ADQAuAEAkAHQhAghhFgfQABgCABgBQgSgIgRgFAGmCqQgcBWg9BGAgcjRIgTAqACdheQhVg+hgg5QgBAAAAAAQgjgVglgTIgmBCAj4i9QA1ACA6AJQArAGAtALIABAAQBgAYBtArAlmi4QA0gHA4ACQABAAABAAIArhZAh7kLQANAHANAHAm5BpQAChHAThBQAJggAMgeAl2iYQiQh5BQhIQA9gfBYAdAhwCcIgUBQQgGAXAMAUQANAUAXAGIAAAAQAXAGAUgNQAVgMAFgXIAVhSQANABARgBAiJCNQALAIAOAHAAAC1QhEgDgsgW");
	this.shape_2.setTransform(50,43);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgVBJIgBAAQgXgGgMgUQgMgUAFgXIAUhOQAsAWBCADIgUBQQgGAXgUAMQgOAJgNAAQgHAAgHgCg");
	this.shape_3.setTransform(43.1,66.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#330000").s().p("AAzAZIgBAAQgtgLgpgGQg6gIg1gBIArhZQAuAEAkAHIAYAOIgkBBIAkhBQAlATAjAVIgDAEIAEgEQBiA3BVA+QhtgrhigYgAA0ATIATgogAjdg4IALgRQAzgUA3ADIgrBZIgCAAQg4gCg0AFQARgdATgdg");
	this.shape_4.setTransform(39.9,24.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFCC").s().p("ABlE1QhhgLhfgUQhxgYhrgmQh6grgIiDQgBgdABgaQAChGAThEQAJgfAMgfQALgeAOgcQAHgQAJgQIAAgBQA0gGA4ACIACAAQA1ABA6AJQArAHAtALIABAAQBgAXBtArQChB2BsCFIgBACIgDAMQAqgDASAPQASANAAAjQgBAig6BAQg2Avg2gxQA9hGAchWQgcBWg9BGIgTAVQhQBShvAAIgWgBgAiEB0QgGAXAMAUQANAVAXAFIAAAAQAXAGAUgMQAVgMAFgXIAVhSIANAAIARAAIgRAAIgNAAQhEgDgsgWQgOgHgLgJQALAJAOAHgAnyhJQgFhwAqgZQAUgOAqALQgMAfgJAfQgTBEgCBGQgwgLgJgxg");
	this.shape_5.setTransform(50,54.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F9E006").s().p("AGlElQhriHiih2QhUg7hhg5IgBgBQgjgUgkgTIgbgOQhAghhFggIACgCQgSgIgRgGQBohUCpADQCsADB8BLQBxBEA3ByIADAGQA9C4hVCHgAm6jRQA9gfBXAdQARAGASAIIgCACQBFAgBAAhQgjgIgvgEQg2gDgzAVIgLAQQgUAegQAeIAAABQgJAQgIAQQiPh6BQhIg");
	this.shape_6.setTransform(50.4,29.3);

	this.addChild(this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-3.5,-3.5,107,93);


(lib.元件5 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#663300").s().p("AgUBfQgbgGgNghQgNggAJgmQAKgnAZgYQAagXAZAGQAaAGAOAgQAMAhgJAlQgJAogZAXQgVATgTAAIgLgBg");
	this.shape.setTransform(27.2,71.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#663300").ss(4,1,1).p("AgqAdQAngMAugt");
	this.shape_1.setTransform(90.9,121.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#663300").ss(7,1,1).p("AJklDQgIgTgKgTIgBgCQgmhGg6g3QgwguhGgrQhxhEiggHQgBAAAAAAQgBAAgBAAQgBAAgBAAQgCAAgCAAQkvAFiwD9IiDA5ICBAhQgcA2gaA+IDkgzIAlAOQGACYFBDkQAmAbAlAcIgQiFQAzh6AAhyQAAhXgehNQgaAyglgGQgngIgCAAQjplumICrQhQgYARhIAiWhlIkcASIgcgfIgFgFQgDAHgCAHQgZBAg0CAQghBWgVBIQBoAeCxgZIBQggQgBBbgkBCQgzBShzAHQh7AChFgVQgCgBgCgBAiWhlQgDgYgEgXQgIgogIglAiWhlQAEAfAAAeQAAAJgEAYQgEAXAAAFQAAABAqAoQAmAnAEANIAAAAAhEB3IgCgDQAAgBAAgBQAAACACADIAQAUQAAgCAAAAQAMgbAfgNQAdgOA1AOQA1ANAQAlQAiCHhVBXAg0CLIgBAAQgLgOgEgGAg0CLIAAAAAhFDVQAOg+ADgMAmAkwICuBBAj6mFQAgAHAXAJAm2i8QgPAhgOAkACcIbQgDgKgKgYQgFgLgGgPQgYg4gRg1QAAgBAAAAQgBABgBABQgHAHghADQghADgsgVApbD1QgjB0gDBRQAAABAAAAQAAABAAABQAAAHAAAHQAAAYAHAWQAVA/BUAoQBBAeBhAOQADABADAAAFEH5IDQleAh7lbQDlBaF+Dj");
	this.shape_2.setTransform(64.3,65.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AjCBnIgEgCQADhSAjhyQBoAeCvgYIBQghQgBBcgkA/QgzBThxAGIgZABQhpAAg+gUg");
	this.shape_3.setTransform(20,99.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFCC").s().p("Ah9HeQhhgOhAgeQhUgogVg/QgIgWAAgYIABgOIADAAQBFAVB7gCQBzgHA0hSQAjhCABhbIhQAgQixAZhogeQAVhHAhhVIBNjCIAKgJIAcAfIEbgSQADAfAAAeQAAAJgDAYIgEAeIAqApQAmAnADANIAAAAIAAACIADADIAPAUIAAAAIAAAAIABgCQALgbAfgNQAfgOA1AOQA1ANARAlQAiCFhWBXIABABQAQA1AYA4IALAaIAOAiIABAFIgBAHQi2gZiwAvQhVAahLA2IgGgBgAEbDQIAIgBQAhgDAHgHIACgCIgCACQgHAHghADIgIABIAAAAIgBAAQgbgBgjgOIAAgBIgFgCIgBAAIgBgBIABABIABAAIAFACIAAABQAjAOAbABIABAAIAAAAgACsAnIAQhIIgQBIgAiOneICsBBIjiAzQAag+Acg2g");
	this.shape_4.setTransform(40,82.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#663300").s().p("ACsGGQgFgIgMAAIgfgFIABgIIABAAIgCgFIgOgiIgLgZQgYg4gQg1IAAgCQBVhXgiiFQgRgkg0gOQgzgNggANQgeANgMAbIgBACIgPgTIgDgFIAAgBQgDgNgmgmIgqgpIAEgeQADgZAAgIQAAgfgDgfIgHgvIgQhMQGACXFBDmIjQFcIgPAaQgwAugnAMQgIgMgKgMgAnukgIgFgFIAdhGIDkgyIAlAOIAQBMIAHAvIkdATg");
	this.shape_5.setTransform(67.5,82.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F9E006").s().p("AHUF4QlBjmmAiWIglgNIiuhCIiBghICDg5QCwj9EvgFIAEAAIACAAIACAAIABAAQCgAIBxBEQBGArAwAtQA6A3AmBGIABACQAKATAIAUIgBABIAAAAIgCAEQgWAmgdABIgBAAIAAAAIgIgBIAAAAIgpgHIgGgKQidjwjlAAIAAAAIAAAAQhqAAh8A2IgDABQhCgUAAg1QAAgLADgNQgDANAAALQAAA1BCAUIADgBQB8g2BqAAIAAAAIAAAAQDlAACdDwIAGAKIApAHIAAAAIAIABIAAAAIABAAQAdgBAWgmIACgEIAAAAIABgBQAeBMAABWQAABxgzB8IAQCGQglgdgmgbgAGoC9Ql+jhjlhaQDlBaF+DhgAkDiYQgXgIgggIQAgAIAXAIg");
	this.shape_6.setTransform(70.7,43.2);

	this.addChild(this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-3.5,-3.5,135.6,137.7);


(lib.元件4副本_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1 复制
	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#663300").ss(3,1,1).p("AAuAtQgTAUgbAAQgZAAgUgUQgTgSAAgbQAAgaATgTQAUgTAZAAQAbAAATATQATATAAAaQAAAbgTASg");
	this.shape_36.setTransform(-42.9,16);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgtAtQgSgSAAgbQAAgaASgTQAUgTAZAAQAaAAAUATQASATAAAaQAAAbgSASQgUAUgaAAQgZAAgUgUg");
	this.shape_37.setTransform(-42.9,16);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#663300").ss(3,1,1).p("ABIhIQAfAeAAAqQAAAqgfAeQgeAegqAAQgpAAgfgeQgdgeAAgqQAAgqAdgeQAfgdApAAQAqAAAeAdg");
	this.shape_38.setTransform(-21.8,16);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AhIBIQgegeABgqQgBgqAegeQAfgdApAAQAqAAAeAdQAfAeAAAqQAAAqgfAeQgeAegqAAQgpAAgfgeg");
	this.shape_39.setTransform(-21.8,16);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#663300").ss(3,1,1).p("ABbBbQglAmg2AAQg0AAgmgmQgmgmAAg1QAAg0AmgnQAmglA0AAQA2AAAlAlQAmAnAAA0QAAA1gmAmg");
	this.shape_40.setTransform(-6.8,16);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AhaBbQgmgmAAg1QAAg0AmgnQAmglA0AAQA2AAAlAlQAmAnAAA0QAAA1gmAmQglAmg2AAQg0AAgmgmg");
	this.shape_41.setTransform(-6.8,16);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#663300").ss(3,1,1).p("ABnhmQAqAqAAA8QAAA9gqAqQgrArg8AAQg7AAgrgrQgqgqAAg9QAAg8AqgqQArgrA7AAQA8AAArArg");
	this.shape_42.setTransform(2.2,16);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AhmBnQgqgqAAg9QAAg7AqgrQArgrA7ABQA8gBArArQAqArAAA7QAAA9gqAqQgrAqg8AAQg7AAgrgqg");
	this.shape_43.setTransform(2.2,16);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#663300").ss(3,1,1).p("ABrhqQAsAsAAA+QAAA+gsAsQgsAtg/AAQg9AAgtgtQgsgsAAg+QAAg+AsgsQAtgsA9AAQA/AAAsAsg");
	this.shape_44.setTransform(5.3,16);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AhqBqQgsgrAAg/QAAg9AsgtQAtgsA9AAQA/AAArAsQAtAtAAA9QAAA/gtArQgrAtg/AAQg9AAgtgtg");
	this.shape_45.setTransform(5.3,16);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#663300").ss(3,1,1).p("ABcBcQgmAmg2AAQg1AAgmgmQgmgmAAg2QAAg0AmgnQAmgmA1AAQA2AAAmAmQAmAnAAA0QAAA2gmAmg");
	this.shape_46.setTransform(10.1,16);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AhbBbQglglgBg2QABg0AlgnQAngmA0ABQA2gBAmAmQAmAngBA0QABA2gmAlQgmAng2AAQg0AAgngng");
	this.shape_47.setTransform(10.1,16);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#663300").ss(3,1,1).p("AhMBMQgfgfAAgtQAAgsAfgfQAgggAsAAQAsAAAgAgQAgAfAAAsQAAAtggAfQggAggsAAQgsAAggggg");
	this.shape_48.setTransform(14.9,16);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AhMBMQgfgfAAgtQAAgsAfgfQAgggAsAAQAsAAAgAgQAgAfAAAsQAAAtggAfQggAggsAAQgsAAggggg");
	this.shape_49.setTransform(14.9,16);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#663300").ss(3,1,1).p("AA9A9QgaAagjAAQgjAAgZgaQgZgZAAgkQAAgjAZgZQAZgaAjAAQAjAAAaAaQAZAZAAAjQAAAkgZAZg");
	this.shape_50.setTransform(19.7,16);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("Ag8A8QgZgYAAgkQAAgiAZgaQAZgZAjAAQAjAAAaAZQAZAaAAAiQAAAkgZAYQgaAbgjAAQgjAAgZgbg");
	this.shape_51.setTransform(19.7,16);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#663300").ss(3,1,1).p("AAtgtQAUATAAAaQAAAbgUATQgTATgaAAQgaAAgTgTQgTgTAAgbQAAgaATgTQATgTAaAAQAaAAATATg");
	this.shape_52.setTransform(24.6,16);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AgtAtQgTgSAAgbQAAgaATgTQATgTAaAAQAaAAAUATQATATAAAaQAAAbgTASQgUAUgaAAQgaAAgTgUg");
	this.shape_53.setTransform(24.6,16);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_37},{t:this.shape_36}]},6).to({state:[{t:this.shape_39},{t:this.shape_38}]},1).to({state:[{t:this.shape_41},{t:this.shape_40}]},1).to({state:[{t:this.shape_43},{t:this.shape_42}]},1).to({state:[{t:this.shape_45},{t:this.shape_44}]},1).to({state:[{t:this.shape_47},{t:this.shape_46}]},1).to({state:[{t:this.shape_49},{t:this.shape_48}]},1).to({state:[{t:this.shape_51},{t:this.shape_50}]},1).to({state:[{t:this.shape_53},{t:this.shape_52}]},1).wait(1));

	// 图层 1
	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#663300").ss(3,1,1).p("AAuAtQgTAUgbAAQgZAAgUgUQgTgSAAgbQAAgaATgTQAUgTAZAAQAbAAATATQATATAAAaQAAAbgTASg");
	this.shape_54.setTransform(-42.9,16);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AgtAtQgSgSAAgbQAAgaASgTQAUgTAZAAQAaAAAUATQASATAAAaQAAAbgSASQgUAUgaAAQgZAAgUgUg");
	this.shape_55.setTransform(-42.9,16);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#663300").ss(3,1,1).p("AhIBIQgdgeAAgqQAAgqAdgeQAfgdApAAQAqAAAeAdQAfAeAAAqQAAAqgfAeQgeAegqAAQgpAAgfgeg");
	this.shape_56.setTransform(-21.8,16);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AhIBIQgegeABgqQgBgqAegeQAfgdApAAQAqAAAeAdQAfAeAAAqQAAAqgfAeQgeAegqAAQgpAAgfgeg");
	this.shape_57.setTransform(-21.8,16);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#663300").ss(3,1,1).p("ABbBbQglAmg2AAQg0AAgmgmQgmgmAAg1QAAg0AmgnQAmglA0AAQA2AAAlAlQAmAnAAA0QAAA1gmAmg");
	this.shape_58.setTransform(-6.8,16);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AhaBbQgmgmAAg1QAAg0AmgnQAmglA0AAQA2AAAlAlQAmAnAAA0QAAA1gmAmQglAmg2AAQg0AAgmgmg");
	this.shape_59.setTransform(-6.8,16);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#663300").ss(3,1,1).p("ABnhmQAqAqAAA8QAAA9gqAqQgrArg8AAQg7AAgrgrQgqgqAAg9QAAg8AqgqQArgrA7AAQA8AAArArg");
	this.shape_60.setTransform(2.2,16);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AhmBnQgqgqAAg9QAAg7AqgrQArgrA7ABQA8gBArArQAqArAAA7QAAA9gqAqQgrAqg8AAQg7AAgrgqg");
	this.shape_61.setTransform(2.2,16);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#663300").ss(3,1,1).p("ABrhqQAsAsAAA+QAAA+gsAsQgsAtg/AAQg9AAgtgtQgsgsAAg+QAAg+AsgsQAtgsA9AAQA/AAAsAsg");
	this.shape_62.setTransform(5.3,16);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AhqBqQgsgrAAg/QAAg9AsgtQAtgsA9AAQA/AAArAsQAtAtAAA9QAAA/gtArQgrAtg/AAQg9AAgtgtg");
	this.shape_63.setTransform(5.3,16);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#663300").ss(3,1,1).p("ABcBcQgmAmg2AAQg1AAgmgmQgmgmAAg2QAAg0AmgnQAmgmA1AAQA2AAAmAmQAmAnAAA0QAAA2gmAmg");
	this.shape_64.setTransform(10.1,16);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AhbBbQglglgBg2QABg0AlgnQAngmA0ABQA2gBAmAmQAmAngBA0QABA2gmAlQgmAng2AAQg0AAgngng");
	this.shape_65.setTransform(10.1,16);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#663300").ss(3,1,1).p("AhMBMQgfgfAAgtQAAgsAfgfQAgggAsAAQAsAAAgAgQAgAfAAAsQAAAtggAfQggAggsAAQgsAAggggg");
	this.shape_66.setTransform(14.9,16);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AhMBMQgfgfAAgtQAAgsAfgfQAgggAsAAQAsAAAgAgQAgAfAAAsQAAAtggAfQggAggsAAQgsAAggggg");
	this.shape_67.setTransform(14.9,16);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#663300").ss(3,1,1).p("AA9A9QgaAagjAAQgjAAgZgaQgZgZAAgkQAAgjAZgZQAZgaAjAAQAjAAAaAaQAZAZAAAjQAAAkgZAZg");
	this.shape_68.setTransform(19.7,16);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("Ag8A8QgZgYAAgkQAAgiAZgaQAZgZAjAAQAjAAAaAZQAZAaAAAiQAAAkgZAYQgaAbgjAAQgjAAgZgbg");
	this.shape_69.setTransform(19.7,16);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#663300").ss(3,1,1).p("AAtgtQAUATAAAaQAAAbgUATQgTATgaAAQgaAAgTgTQgTgTAAgbQAAgaATgTQATgTAaAAQAaAAATATg");
	this.shape_70.setTransform(24.6,16);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("AgtAtQgTgSAAgbQAAgaATgTQATgTAaAAQAaAAAUATQATATAAAaQAAAbgTASQgUAUgaAAQgaAAgTgUg");
	this.shape_71.setTransform(24.6,16);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_55},{t:this.shape_54}]}).to({state:[{t:this.shape_57},{t:this.shape_56}]},1).to({state:[{t:this.shape_59},{t:this.shape_58}]},1).to({state:[{t:this.shape_61},{t:this.shape_60}]},1).to({state:[{t:this.shape_63},{t:this.shape_62}]},1).to({state:[{t:this.shape_65},{t:this.shape_64}]},1).to({state:[{t:this.shape_67},{t:this.shape_66}]},1).to({state:[{t:this.shape_69},{t:this.shape_68}]},1).to({state:[{t:this.shape_71},{t:this.shape_70}]},1).to({state:[]},1).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50.9,8,16,16.1);


(lib.元件4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1 复制
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#663300").ss(7,1,1).p("AA2A2QgWAXggAAQgfAAgXgXQgWgWAAggQAAgfAWgXQAXgWAfAAQAgAAAWAWQAXAXAAAfQAAAggXAWg");
	this.shape.setTransform(-41.7,15.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag2A2QgWgWAAggQAAgfAWgXQAXgWAfAAQAgAAAWAWQAXAXAAAfQAAAggXAWQgWAXggAAQgfAAgXgXg");
	this.shape_1.setTransform(-41.7,15.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#663300").ss(7,1,1).p("AhWhWQAlgjAxAAQAyAAAkAjQAkAkAAAyQAAAygkAkQgkAkgyAAQgxAAglgkQgjgkAAgyQAAgyAjgkg");
	this.shape_2.setTransform(-16.5,15.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhWBWQgjgkAAgyQAAgyAjgkQAlgjAxAAQAyAAAkAjQAkAkAAAyQAAAygkAkQgkAkgyAAQgxAAglgkg");
	this.shape_3.setTransform(-16.5,15.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#663300").ss(7,1,1).p("ABthsQAtAtAAA/QAABAgtAtQgtAthAAAQg/AAgtgtQgtgtAAhAQAAg/AtgtQAtgtA/AAQBAAAAtAtg");
	this.shape_4.setTransform(1.4,15.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhsBtQgtgtAAhAQAAg/AtgtQAtgtA/AAQBAAAAtAtQAtAtAAA/QAABAgtAtQgtAthAAAQg/AAgtgtg");
	this.shape_5.setTransform(1.4,15.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#663300").ss(7,1,1).p("ACuAAQAABIg0AzQgyAzhIAAQhHAAgzgzQgzgzAAhIQAAhHAzgzQAzgzBHAAQBIAAAyAzQA0AzAABHg");
	this.shape_6.setTransform(12.2,15.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ah6B6QgygygBhIQABhHAygzQAzgyBHgBQBIABAyAyQA0AzAABHQAABIg0AyQgyA0hIAAQhHAAgzg0g");
	this.shape_7.setTransform(12.2,15.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#663300").ss(7,1,1).p("AB/B/Qg0A1hLAAQhKAAg1g1Qg0g0AAhLQAAhKA0g1QA1g0BKAAQBLAAA0A0QA1A1AABKQAABLg1A0g");
	this.shape_8.setTransform(15.8,15.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("Ah/B/Qg0g1AAhKQAAhKA0g1QA1g0BKAAQBKAAA1A0QA1A1AABKQAABKg1A1Qg1A1hKAAQhKAAg1g1g");
	this.shape_9.setTransform(15.8,15.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#663300").ss(7,1,1).p("AhshtQAtgsA/AAQBAAAAtAsQAuAuAAA/QAABAguAtQgtAuhAAAQg/AAgtguQgtgtAAhAQAAg/Atgug");
	this.shape_10.setTransform(21.6,15.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AhtBtQgsgtgBhAQABg/AsguQAugtA/AAQBAAAAtAtQAtAuABA/QgBBAgtAtQgtAuhAAAQg/AAgugug");
	this.shape_11.setTransform(21.6,15.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#663300").ss(7,1,1).p("AhahaQAmgmA0AAQA1AAAmAmQAmAmAAA0QAAA1gmAmQgmAmg1AAQg0AAgmgmQgmgmAAg1QAAg0Amgmg");
	this.shape_12.setTransform(27.3,15.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AhaBbQgmgmAAg1QAAg0AmgmQAmgmA0AAQA1AAAmAmQAmAmAAA0QAAA1gmAmQgmAmg1AAQg0AAgmgmg");
	this.shape_13.setTransform(27.3,15.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#663300").ss(7,1,1).p("AhIhIQAfgeApAAQArAAAeAeQAeAfAAApQAAArgeAeQgeAegrAAQgpAAgfgeQgegeAAgrQAAgpAegfg");
	this.shape_14.setTransform(33.1,15.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AhIBJQgegfAAgqQAAgqAegeQAfgeApAAQAqAAAeAeQAfAeAAAqQAAAqgfAfQgeAegqAAQgpAAgfgeg");
	this.shape_15.setTransform(33.1,15.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#663300").ss(7,1,1).p("AA3A3QgXAXggAAQgfAAgXgXQgWgXAAggQAAgfAWgXQAXgXAfAAQAgAAAXAXQAXAXAAAfQAAAggXAXg");
	this.shape_16.setTransform(38.8,15.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("Ag2A3QgWgXgBggQABgfAWgXQAXgXAfABQAggBAWAXQAYAXAAAfQAAAggYAXQgWAWggAAQgfAAgXgWg");
	this.shape_17.setTransform(38.8,15.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},6).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_9},{t:this.shape_8}]},1).to({state:[{t:this.shape_11},{t:this.shape_10}]},1).to({state:[{t:this.shape_13},{t:this.shape_12}]},1).to({state:[{t:this.shape_15},{t:this.shape_14}]},1).to({state:[{t:this.shape_17},{t:this.shape_16}]},1).wait(1));

	// 图层 1
	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#663300").ss(7,1,1).p("AA2A2QgWAXggAAQgfAAgXgXQgWgWAAggQAAgfAWgXQAXgWAfAAQAgAAAWAWQAXAXAAAfQAAAggXAWg");
	this.shape_18.setTransform(-41.7,15.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("Ag2A2QgWgWAAggQAAgfAWgXQAXgWAfAAQAgAAAWAWQAXAXAAAfQAAAggXAWQgWAXggAAQgfAAgXgXg");
	this.shape_19.setTransform(-41.7,15.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#663300").ss(7,1,1).p("AhWhWQAlgjAxAAQAyAAAkAjQAkAkAAAyQAAAygkAkQgkAkgyAAQgxAAglgkQgjgkAAgyQAAgyAjgkg");
	this.shape_20.setTransform(-16.5,15.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AhWBWQgjgkAAgyQAAgyAjgkQAlgjAxAAQAyAAAkAjQAkAkAAAyQAAAygkAkQgkAkgyAAQgxAAglgkg");
	this.shape_21.setTransform(-16.5,15.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#663300").ss(7,1,1).p("ABthsQAtAtAAA/QAABAgtAtQgtAthAAAQg/AAgtgtQgtgtAAhAQAAg/AtgtQAtgtA/AAQBAAAAtAtg");
	this.shape_22.setTransform(1.4,15.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AhsBtQgtgtAAhAQAAg/AtgtQAtgtA/AAQBAAAAtAtQAtAtAAA/QAABAgtAtQgtAthAAAQg/AAgtgtg");
	this.shape_23.setTransform(1.4,15.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#663300").ss(7,1,1).p("ACuAAQAABIg0AzQgyAzhIAAQhHAAgzgzQgzgzAAhIQAAhHAzgzQAzgzBHAAQBIAAAyAzQA0AzAABHg");
	this.shape_24.setTransform(12.2,15.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("Ah6B6QgygygBhIQABhHAygzQAzgyBHgBQBIABAyAyQA0AzAABHQAABIg0AyQgyA0hIAAQhHAAgzg0g");
	this.shape_25.setTransform(12.2,15.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#663300").ss(7,1,1).p("AB/B/Qg0A1hLAAQhKAAg1g1Qg0g0AAhLQAAhKA0g1QA1g0BKAAQBLAAA0A0QA1A1AABKQAABLg1A0g");
	this.shape_26.setTransform(15.8,15.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("Ah/B/Qg0g1AAhKQAAhKA0g1QA1g0BKAAQBKAAA1A0QA1A1AABKQAABKg1A1Qg1A1hKAAQhKAAg1g1g");
	this.shape_27.setTransform(15.8,15.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#663300").ss(7,1,1).p("AhshtQAtgsA/AAQBAAAAtAsQAuAuAAA/QAABAguAtQgtAuhAAAQg/AAgtguQgtgtAAhAQAAg/Atgug");
	this.shape_28.setTransform(21.6,15.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AhtBtQgsgtgBhAQABg/AsguQAugtA/AAQBAAAAtAtQAtAuABA/QgBBAgtAtQgtAuhAAAQg/AAgugug");
	this.shape_29.setTransform(21.6,15.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#663300").ss(7,1,1).p("AhahaQAmgmA0AAQA1AAAmAmQAmAmAAA0QAAA1gmAmQgmAmg1AAQg0AAgmgmQgmgmAAg1QAAg0Amgmg");
	this.shape_30.setTransform(27.3,15.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AhaBbQgmgmAAg1QAAg0AmgmQAmgmA0AAQA1AAAmAmQAmAmAAA0QAAA1gmAmQgmAmg1AAQg0AAgmgmg");
	this.shape_31.setTransform(27.3,15.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#663300").ss(7,1,1).p("AhIhIQAfgeApAAQArAAAeAeQAeAfAAApQAAArgeAeQgeAegrAAQgpAAgfgeQgegeAAgrQAAgpAegfg");
	this.shape_32.setTransform(33.1,15.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AhIBJQgegfAAgqQAAgqAegeQAfgeApAAQAqAAAeAeQAfAeAAAqQAAAqgfAfQgeAegqAAQgpAAgfgeg");
	this.shape_33.setTransform(33.1,15.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#663300").ss(7,1,1).p("AA3A3QgXAXggAAQgfAAgXgXQgWgXAAggQAAgfAWgXQAXgXAfAAQAgAAAXAXQAXAXAAAfQAAAggXAXg");
	this.shape_34.setTransform(38.8,15.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("Ag2A3QgWgXgBggQABgfAWgXQAXgXAfABQAggBAWAXQAYAXAAAfQAAAggYAXQgWAWggAAQgfAAgXgWg");
	this.shape_35.setTransform(38.8,15.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18}]}).to({state:[{t:this.shape_21},{t:this.shape_20}]},1).to({state:[{t:this.shape_23},{t:this.shape_22}]},1).to({state:[{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_27},{t:this.shape_26}]},1).to({state:[{t:this.shape_29},{t:this.shape_28}]},1).to({state:[{t:this.shape_31},{t:this.shape_30}]},1).to({state:[{t:this.shape_33},{t:this.shape_32}]},1).to({state:[{t:this.shape_35},{t:this.shape_34}]},1).to({state:[]},1).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-52.9,4.6,22.6,22.6);


(lib.元件3 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#663300").ss(4,1,1).p("AByAWICwAAAgBh0IABAAQAAAAAAAAQAvAAAjAjQAiAiAAAvQAAAFAAAEQAAAHgCAGQgGAjgaAZQgjAjgvAAIAAAAQAAAAgBAAQgvAAgigjQgagZgGgjQgCgGAAgHQgBgEAAgFQAAgvAjgiQAigiAvgBgAkiAWQAAAAAAAAQgBgLAAgLQAAh3BWhWQBVhUB2gBQACAAAAAAQB4AABVBVQBWBWAAB3QAAALgBALQgHBrhOBNQhVBVh4AAQAAAAgBAAQh3AAhVhVQhNhNgIhrICwAAAEbEbQh2B1ilAAQilAAh1h1Qh1h2AAilQAAikB1h1QB1h2ClAAQClAAB2B2QB1B1AACkQAAClh1B2gAK4AAQAAEgjMDMQjMDMkgAAQkfAAjMjMQjMjMAAkgQAAkfDMjMQDMjMEfAAQEgAADMDMQDMDMAAEfgAgBB1IAACuAgBkYIAACk");
	this.shape.setTransform(69.7,69.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3E1F00").s().p("AnrHsQjMjMAAkgQAAkfDMjMQDMjMEfAAQEgAADMDMQDMDMAAEfQAAEgjMDMQjMDMkgAAQkfAAjMjMgAkakZQh0B1gBCkQABCmB0B0QB2B1CkAAQClAAB1h1QB1h0AAimQAAikh1h1Qh1h2ilAAQikAAh2B2g");
	this.shape_1.setTransform(69.7,69.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CCCCCC").s().p("AkaEaQh0h0gBimQABikB0h1QB2h2CkAAQClAAB1B2QB1B1AACkQAACmh1B0Qh1B1ilAAQikAAh2h1gAkiAWQAIBrBNBNQBVBVB4AAIAAAAQB4ABBWhWQBNhNAHhrIABgWQAAh3hVhWQhWhVh4AAIgBAAIABAKIAAClIAAAAIAAAAQAwAAAiAiQAiAiABAvIgBAJIgCANQgGAjgaAZQgiAjgwAAIAAAAIAAAAQgwAAgigjQgagZgGgjIgCgNIAAgJQAAgvAigiQAigiAwAAQgwAAgiAiQgiAiAAAvIAAAJIACANIiwAAIAAAAIAAAAIgBgWQAAh3BWhWQBVhUB3gBQh3ABhVBUQhWBWAAB3IABAWIAAAAIAAAAgAAAEjIAAiuIAAAAIAAAAQAwAAAigjQAagZAGgjICwAAQgHBrhNBNQhWBWh4gBIAAAAg");
	this.shape_2.setTransform(69.7,69.7);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-2,-2,143.3,143.3);


(lib.元件2_1 = function() {
	this.initialize();

	// 图层 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#663300").ss(4,1,1).p("AgXglQgCgeAZggQAgglA6gRQA5gRAvANQAwAPAKAjQALAlggAlQggAlg5ARQg6ARgvgPQgWgGgNgKQiHBKhGBRQg6AKAHgvQBYhmCMg8");
	this.shape_2.setTransform(154.8,-10.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F9E006").s().p("Aj+B9QBYhmCMg8IADAAQgCgeAZggQAgglA6gRQA5gRAvANQAwAPAKAjQALAlggAlQggAlg5ARQg6ARgvgPQgWgGgNgKQiHBKhGBRQgKACgIAAQgmAAAFgng");
	this.shape_3.setTransform(154.8,-10.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#663300").ss(7,1,1).p("AeXEnQAEALADALQAnCRgjCxQAAAAAAABQAWAtASAqAbNEQIDKAXIBCAIQArBcgLCYQgLCYgkAcQA1B9ABB9QiXA3rzAkQofgRAMg1I1AAAQnBgKgyosQgCgUgBgUQjyjTnjBSQijAKCNjOQCNjLE+grQE+gqBGi3QiBGMAdGQAc8HYIh0jFIhViSQAAAAABAAQASgphNiQQglhqjogXQmeguoBAOQknAMgUB1QhdDuBwAmQABAAAAAAIi1IeAehJ+QAAAAABABAehJ+QAAgCABgCIAAAFAc8HYQA2BGAvBgAZ0CBQhwhYoQClQloBch1g2Qh0g3gEgCQifhliCAYIgVBGAohwdQB0ArhkDQQjxH4hhK4QgZEuDKApIJjAAIFWAAAL/LqIgRArAJRMXQBNnDGfhrQHiiEEdFzAohwdIAAgGAtwuiQAAAAABgBQCWizC4A5AxUnlIBEgRQBzieAwkNIgDgBAy3vwQAngDArAFQACAAACAAQAYAOATA7QAZBNAABuQAABugZBOQgJAdgNAVQgMARgLAIAy3vwQAbAMAUA/QAZBNAABuQAABugZBOQgJAdgNAVQgNATgNAIQgDACgDgBIgGgBQgjAAgZhNQgZhOAAhuQAAhuAZhNQAZhOAjAAQAAAAABAAQAGAAAGADgAxhvuQBqANCHA/AtxoqQgOAogMAqAxUnlQgHABgIABQgBAAgCAAQgVADgPABQgcACgSgEAxvmUQANgpAOgoAqZuoQhyB5hLC7AMkKUQB4jfEagt");
	this.shape_4.setTransform(204.9,106.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#482400").s().p("Ak2DfIh4g5QifhliCAYIgVBGIgEAIQhzgmBfjuQAUh1EngMQH/gOGfAuQDnAXAmBqQBNCQgTApQhwhYoPClQjhA6iCAAQhNAAgrgUg");
	this.shape_5.setTransform(289.7,108.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFCC").s().p("AAGEJIgGgBQghAAgZhOQgahNAAhtQAAhtAahOQAZhNAhAAIABAAQAGAAAGADQAbAMATA+QAaBOAABtQAABtgaBNQgJAdgMAVQgNAUgNAHIgFACIgBAAg");
	this.shape_6.setTransform(82.8,32.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#CCCCCC").s().p("AYAMNIAAAAQARhUAAhMQAAhWgVhMIA8gOQAqBcgKCYQgLCYglAcQgSgqgWgugAYAMNIAAgFIgBADQguhfg3hGIhzjGIAFgCIDKAXIAGAWQAVBMAABWQAABMgRBUIAAAAgAX/MLIABgDIAAAFIgBgCgA5ZlTQAMgIANgTQANgVAJgdQAZhOAAhuQAAhugZhNQgUg/gagMQAngEArAFIADABQBrANCGA/IADABQgvENhzCeIhEARIgPACQALgIALgRQANgVAJgdQAZhOAAhuQAAhugZhNQgSg7gZgOQAZAOASA7QAZBNAABuQAABugZBOQgJAdgNAVQgLARgLAIIgDAAIglAEIgRAAQgQAAgMgCgA4ElVIAAAAg");
	this.shape_7.setTransform(246.7,92.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F9E006").s().p("AJjPmI1AAAQnBgKgyosIgDgoQgFhIAAhIQAAlHBplFQhpFFAAFHQAABIAFBIQjyjTnjBSQijAKCNjOQCNjLE+grQE+gqBGi3IAbhRIBEgRQBzieAwkNIgCgCQCWizC4A5QB0ArhkDQQjxH4hhK4QgZEuDKApIJjAAIAAgLIC1oeIgBAAIAEgIIAVhGQCCgYCfBlIB4A5QB1A2FohcQIQilBwBYIgBAAIBVCSIB0DFQA2BGAvBgIABABIAAABQAWAtASAqQA1B9ABB9QiXA3rzAkQofgRAMg1gAQ9DpQmfBrhNHDQBNnDGfhrQB+gjBxAAIAAAAIABAAQE4AADQEIIAHAKIgHgKQjQkIk4AAIgBAAIAAAAQhxAAh+AjIAAAAgALuMVIARgrgAEHLlIlWAAgAMkKUQB4jfEagtQkaAth4DfgAuLnYQAMgqAOgoQgOAogMAqgAtWp0QBLi7Byh5QhyB5hLC7g");
	this.shape_8.setTransform(204.9,106.8);

	this.addChild(this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-3.5,-29.2,416.8,246.4);


(lib.元件1 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#663300").ss(7,1,1).p("AMpqAIAPgZAKRpyQAAgCgBgDIADAFgACJoFQBKg2BYgaQCvgvC2AZQAQACAQADQALABAGAHQAJAMAIANQAzBSgtBfQgLgEgKgEIgBAAQk9holYCsIAAAAQgBgBgBgBQgDgCAAAAQgBgBAAgDQAAgQAlg+QAjg7ASgUQAEgEAEgEQAEABAFAAAhUj8IB7hYQABgBAAAAQACgBACgBQABgBAAAAAAMBpQCzhECXiiAiJCSQACgBADgDQB3hehUkoQgCgGgBgGQADACAEACQAEACAFACQAoASArAUAiJCSQhQAYjrjgIgdhHQhGhBgxBCQgEAFgDAFQgbAyg8gHQgHgCgHgDQg4gXg7hZQgBgBgBgCQgjhFBShSQABgBA5gzQA5gyA6AFQA5AECFAtQBsAlDPBdAAMBpQhEAbhLAMQgDABgDABALBmWQC9JKhSE8IhvCqIuBlWIgCgBIAAAAIBNhRIAAABIBEAgIDgBqAgxEKIA9ih");
	this.shape.setTransform(83.7,66.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFCC").s().p("AgBBaIgehHQhGg/gxBAIgGAKQgcAyg8gHIgNgFQg5gXg7hXIgCgDQgjhFBShSIA6g0QA5gyA6AFQA6AECDAtQBsAlDOBdIAEAMQBTEoh3BeIgFAEQgHADgJAAQhVAAjTjNg");
	this.shape_1.setTransform(38.7,52.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AoDExIgCgBIBNhQIAAAAIBEAgIAEgIIA/ihQCzhECViiQiVCiizBEQhGAahLAMIgBgBQB3hfhUknIAEgJIAJAFIB9hZIABAAIAEgDIABAAIgGgJQAAgPAlg/QAjg7ASgUIAIgHIAJABIgJgBQBKg3BYgZQCtgwC2AaIAgAFQALAAAGAIQAJAMAIAMQAzBTgtBeIgVgHIgBAAIgEgCQh1glh6AAIAAAAIAAAAQjFAAjQBlIgCABIgCABIgEACIgDACIADgCIAEgCIACgBIACgBQDQhlDFAAIAAAAIAAAAQB6AAB1AlIAEACIgBAFQC9JKhSE9IhvCpgAiSFrIjihrgAlAjoIhTgmIBTAmg");
	this.shape_2.setTransform(115.6,68.5);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-3.5,-3.5,174.5,140.3);


(lib.元件1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#663300").ss(4,1,1).p("AFvB0QB+AEC5gtQDiA/jUigQgagEhOACQgEAAgFAAIl6gvIgBAAIgEggAg3kgIgYAAQg1ANgUAJQgkASAAAdQAAAuA3APQAnAMAjgGAkxgzIABAAQAogDAogFQAGAAAHgBQBngOA1hIQABgBAAgBIAAgBQAKgNAIgOQAFgMAGgMQAJgXAGgaQACgLgGgIQgPgQgQgOQgBgBgBgBQg/g3hVgcQgZhxhtgcQi0AGh2CGQgLAMgNAZQgZDOh2CqIAKAKIAcAAQAKgBAKgDQBigZA4hYQANgSADgWQACgXgHgcAg8hyQABALAFAHQAqCDhEBiQgCAAgBAAIgBAAQAAACABACQgCAAgBAAQgoArgzAdQgVAMgWAIQg8AWg/gKQgXgCgKgVQABgGACgFQAGgMALgHQAQgKAQgJQAXgNATgUQgbAEgNAEQhLAcgtAAQg0AAgtgUQg8gcAAg0QAAgNAWhlQAEgSADgPIAAgBQAEgYAEgSQAAAAAAAAQAIgoABgIAjYlrIhfAPAmrk2IhXAyAmqg4QgHgggbggQgmgtgzgLQAAgBgBAAIgVAAAmqg4QACALAAALQAAAPgGATQgFAKgGAIAlziVQABBEBBAeQg8ACg9gHAq7FAQgNgHgDgJQgCgFAAgUQAAgTAUgLQAUgMAjAAQAbAAAKAHQAIAGAAATQAAAMgEALQgEALAAAGQAAARC0AjQADAAAZgJQAYgKAVAAQAlAAAUASQARAPAAAZQAAATgbAPQgWAOgUAAQgVgEgFAAIgEAAQAJAJAAASQAAAXgSAQQgRAPgVAAQgoAAgEgmQgFgrgZgHQiAgsgrAAIgyAKQgaAAgOgKQgLgJAAgOQAAgUAXgOQATgMAdgEQABAAACAAQgBAAAAABQgBgBgBAAgAhUCFQgBACgBACAkaCIQBggugDhNAhQCFQECANDFggAq4FAQABgBABAAQABAAABAAQgCAAgCABg");
	this.shape_3.setTransform(60.8,41.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AnUHnQgFgsgZgHQiAgrgrAAIgyAKQgaAAgOgKQgLgKAAgOQAAgTAXgPQATgMAdgDQgNgHgDgJQgCgFAAgUQAAgTAUgLQAUgMAjAAQAbAAAKAHQAIAGAAATQAAAMgEALQgEAKAAAHQAAARC0AjQADAAAZgJQAYgLAVABQAlAAAUASQARAPAAAZQAAATgbAPQgWAOgUAAIgagFIgEAAQAJAKAAARQAAAYgSAQQgRAPgVgBQgoAAgEglgAq7FAIACABIABgCIAEgBIgCAAIgCABIgDABgAlXDxQgXgDgKgUQABgGACgFQAGgMALgHIAggTQAXgNATgVQBdgsAAhKIAAgFIAAAFQAABKhdAsQgbAEgNAFQhLAbgtABQg0gBgtgTQg8gcAAg0QAAgNAWhlIAHgiIAAAAIAIgqIAAAAIAJgxIAEgKQAzAMAmAtQAbAgAHAgQgHgggbggQgmgtgzgMIgBAAIgVAAIAAAIQAHAcgCAXQgDAWgNASQg4BXhiAaIgUAEIgcAAIgKgLQB2ipAZjOQANgZALgMQB2iFC0gGQBtAbAZBxQBVAcA/A3IgIAMIgYAAQg1AMgUAKQgkASAAAdQAAAtA3AQQAnAMAjgGIAFADIAAABIgBACQg1BIhnAOIgNABQgoAGgoACIgBAAIABAAQAogCAogGIANgBQBngOA1hIQgGARABAPQABAKAFAIQAPAWAtADQChgyAKAuIAXAEIABAAIF6AvIAJAAQBOgDAaAFQDUCgjig/Qi5Ath+gEIAIgCQjFAfkCgMQAqg9AAhIQAAgtgQgzQAQAzAAAtQAABIgqA9IgDAAIgBAAIgCADQgoAsgzAdQgVAMgWAIQgpAPgsAAQgTAAgTgDgAmuAAQgFAKgGAIQAGgIAFgKQAGgTAAgPQAAgLgCgLIACAAIAEABIAAAAQArAEArAAIABAAIAAAAIAOAAIAGAAIAIAAQhBgegBhEQABBEBBAeIgIAAIgGAAIgOAAIAAAAIgBAAQgrAAgrgEIAAAAIgEgBIgCAAQACALAAALQAAAPgGATgAoCkEIBXgzgAk3lcIBfgPg");
	this.shape_4.setTransform(60.8,41.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#330000").s().p("AAoBHQgkAGglgLQg3gQAAguQAAgbAkgSQAVgJAygNIAYAAIALgKIAeAeQAHAIgDALQgGAZgJAWIgLAYQgIAOgJANg");
	this.shape_5.setTransform(50.8,18.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFCC").s().p("AgeCpIgBgEIABAAIADAAQABACAEACIgIAAgAgiCpIADgEIABAEIgEAAgAAZioIAJADQgLALgIAKIAKgYg");
	this.shape_6.setTransform(55.6,38.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]}).wait(25));

	// 图层 3
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#663300").ss(4,1,1).p("AmeAGQAAgCAAgCQAChEA+gbQAqgSAXgGQAngKAtAGQAgADBQAQQAXAFAOAFQCmhEBGAEQBGADBCBQQBBBNAiCNIhaAMQiCixg8AlQg+AoglAgQgkAggXAAQglACglgDQhbgLhZgdQgxgNgwgQQghgIgPgdQACAAAEgB");
	this.shape_7.setTransform(79.5,31.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("ACLARQg+AoglAgQgkAggXAAQglACgkgDQhcgLhYgdQgygNgwgQQghgIgPgdIAGgBIgCgHIAAgEQAChEA+gbQAqgSAYgGQAmgKAuAGQAfADBQAQQAYAFANAFQClhEBHAEQBGADBCBQQBCBNAhCNIhaAMQiCixg8Alg");
	this.shape_8.setTransform(79.5,31.3);

	this.instance = new lib.元件2("synched",0);
	this.instance.setTransform(51.3,40.1,1.308,1.308,6.8,0,0,5.8,25.8);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7}]}).to({state:[{t:this.instance}]},6).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},5).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.shape_8},{t:this.shape_7}]},1).wait(7));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(6).to({_off:false},0).wait(1).to({regX:28.4,regY:7.9,rotation:2.1,x:81.6,y:17.8},0).wait(1).to({rotation:-6.5,x:77.9,y:13.4},0).wait(1).to({regX:5.9,regY:25.8,rotation:-10.9,x:51.3,y:40.1},0).wait(5).to({startPosition:0},0).wait(1).to({regX:28.4,regY:7.9,rotation:-3.5,x:79.2,y:14.9},0).wait(1).to({rotation:3.7,x:82.1,y:18.6},0).wait(1).to({regX:5.8,regY:25.8,rotation:6.8,x:51.3,y:40.1},0).to({_off:true},1).wait(7));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20.7,-13.2,163,109);


(lib.美女 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 3
	this.instance = new lib.元件4副本();
	this.instance.setTransform(84.3,276.8,1.464,1.464,90,0,0,15.8,15.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(6));

	// 图层 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#663300").ss(4,1,1).p("ACDBaQBVABAyBDQAEAGABAIQABAGgDAGQBAgbgghCQgbg4g5gcQhQgmAOhSQAFgcALgdQAkhbhEg7QhKhBhjgBQhogBhVA7Qg6AngSBFQgPA6APA5QAGAVANAUQAAABABABQAVEwE7CRQgIggAigVQAggVAlgQQBCgbgKhEQgKhIhAgiQgCgBAAgBQABgBACgBgACDBcIAHAAIgHgC");
	this.shape.setTransform(91.1,11.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F9E006").s().p("Akbg+IgBgCQgNgUgGgVQgPg5APg6QAShFA6gnQBVg7BoABQBjABBKBBQBEA7gkBbQgLAdgFAcQgOBSBQAmQA5AcAbA4QAgBChAAbQADgGgBgGQgBgIgEgGQgyhDhVgBIAAACIgDACIACACQBAAiAKBIQAKBEhCAbQglAQggAVQgiAVAIAgQk7iRgVkwg");
	this.shape_1.setTransform(91.1,11.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#663300").ss(4,1,1).p("AjejbQgPA7APA4QAGAWANAUQAAABABAAQAVEwDFCOQCghVAYiXQAYiVADgnQACgnAAgGQAKifhAhFQhChIhdAAQhYAGhLAzQg6AogRBEg");
	this.shape_2.setTransform(83.1,11.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F9E006").s().p("AjKg9IgBgBQgNgUgGgVQgPg5APg6QARhFA6gnQBLg0BYgGQBdABBCBHQBABFgKCgIgCAtQgDAmgYCWQgYCWigBVQjFiOgVkwg");
	this.shape_3.setTransform(83.1,11.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#663300").ss(4,1,1).p("AiCBcQACABABABQAAABgCABQhAAigKBIQgKBEBCAbQAlAQAgAVQAiAVgIAgQE7iRAVkwQAAgBABgBQANgTAGgWQAPg5gPg6QgJgjgWghQgXgjgdgTQgngcgvgJQglgIg7ABQgyABgrATQguAVgbAnQgYAhgIA6QgHA8AQAqQAOAlgUAiQgSAegqATQg5AcgbA4QggBCBAAbQgDgGABgGQABgIAEgGQAyhDBUgBIABACIgHAAIAGgC");
	this.shape_4.setTransform(74.7,10.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F9E006").s().p("AhOFOQgggVglgQQhCgbAKhEQAKhIBAgiIACgCIgDgCIgBgCQhUABgyBDQgEAGgBAIQgBAGADAGQhAgbAghCQAbg4A5gcQAqgTASgeQAUgigOglQgQgqAHg8QAIg6AYghQAbgnAugVQArgTAygBQA7gBAlAIQAvAJAnAcQAdATAXAjQAWAhAJAjQAPA6gPA5QgGAWgNATIgBACQgVEwk7CRQAIgggigVg");
	this.shape_5.setTransform(74.7,10.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#663300").ss(4,1,1).p("ADfjbQAPA7gPA4QgFAWgOAUQAAAAgBABQgUEwjGCOQighVgYiXQgYiVgDgnQgCgoAAgFQgKifBAhFQBChIBdAAQBYAFBLA0QA6AoARBEg");
	this.shape_6.setTransform(83,11.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F9E006").s().p("AjHCWQgYiWgDgmIgCgtQgKigBAhFQBChHBdgBQBYAGBLA0QA6AnARBFQAPA6gPA5QgFAVgOAUIgBABQgUEwjGCOQighVgYiWg");
	this.shape_7.setTransform(83,11.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_7},{t:this.shape_6}]},2).to({state:[{t:this.shape_1},{t:this.shape}]},1).wait(1));

	// 图层 2
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#663300").ss(4,1,1).p("ACflAQhAAQgNArQgLAmAbBcQAKAgAVAqIAAABQABABAAABIABABIAGAGQAgAJAdgUQAUgNgdg/QgehAAAh6gACDg1QABADACAEQANAaARAbQAxBUALAlQATBDgMA0QgKAogjAzQgiAxg3AMQgzAKgmgbQh6A4hOh5QgqhCAAhOQAAhIAihAQAMgVAdgvIAAgBQALgRANgWQAshLgRhWQgIglgMgRQgRgWggABQgCAAgBAAQgIABgMADQgRAGgFAAQADgDAIgMQAIgLADgEQAhgkAugSQAngPA5gEQBpgEBrBPQgPACgNADAihghQgsAYgZgxQgJgQAHgOQA1hmgBhx");
	this.shape_8.setTransform(81.8,60.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFCC").s().p("AjXByQgJgQAHgOQA1hkgBhxIAAgEIADAAQAggBARAWQAMARAIAlQARBUgsBLIgYAnIgCgBQgPAIgMAAQgZAAgRghgACYB9IgGgGIgBgBIgBgCIAAgBQgVgqgKggQgbhaALgmQANgrBAgQQAAB6AeA+QAdA/gUANQgUAOgWAAQgKAAgJgDg");
	this.shape_9.setTransform(80.3,43.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF99CC").s().p("AAIF+Qh7A4hNh5QgrhCAAhOQAAhIAjhAQALgVAegvIAAgBIAAABIgDgCIADABIAXgnQAthLgShWQgHglgNgRQgQgWghABIgDAAQgHABgNADQgRAGgFAAIALgPIAMgPQAhgkAugSQAmgPA5gEQBpgEBrBPIgcAFQg/AQgNArQgMAmAcBcQAKAgAUAqIABABIABACIAAABIAEAHQANAaARAbQAwBUALAlQAUBDgMA0QgKAogkAzQgiAxg2AMQgOADgOAAQgiAAgbgUg");
	this.shape_10.setTransform(81.9,60.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#663300").ss(4,1,1).p("ACfkxQg/APgNArQgMAnAcBbQAKAhAUAqIABAAQAAACABABIAAAAIAGAHQAgAIAegTQAUgNgehAQgdg/gBh6gACDgnQAsA4AhBGQAhBFAIAwQAIAwgaA4QgZA5g1ALQg0AMgegFQgdgFgjgQQg/AihLgNQhLgNgahEQgahEAMg4QALg3Aag4QAbg4AYgcIAAAAQAKgSANgVQAthLgShWQgHgmgNgQQgQgWghAAQgBAAgCABQgHAAgNAEQgRAFgFABQADgEAIgLQAIgMAEgEQAhgkAugRQAmgPA5gFQBpgEBrBQQgPACgNADAihgTQgrAWgaguQgJgRAHgNQA1hmgBhy");
	this.shape_11.setTransform(81.8,59.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FF99CC").s().p("AiDF/QhLgNgahEQgahEAMg4QALg3Aag4QAbg4AYgcIAAAAIAAAAIgDgCIADACIAXgnQAthLgShWQgHgmgNgQQgQgWghAAIgDABQgHAAgNAEQgRAFgFABIALgPIAMgQQAhgkAugRQAmgPA5gFQBpgEBrBQIgcAFQg/APgNArQgMAnAcBbQAKAhAUAqIABAAIABADIAAAAQAsA4AhBGQAhBFAIAwQAIAwgaA4QgZA5g1ALQg0AMgegFQgdgFgjgQQgtAZg0AAQgUAAgVgEg");
	this.shape_12.setTransform(81.8,59.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#663300").ss(4,1,1).p("ACGgfQAuA0AhA8QAlBCAHBKQADAmgQAmQgeBEhLAJQgcAFgcAAQgmgBgjgJQhBAMhEgHQhRgBghhIQgcg/ANhCQAOhCAmg5QAVgfAYgbIAAgBQAKgRANgWQAthLgShWQgHglgNgRQgQgWghABQgBAAgCAAQgHABgNADQgRAGgFAAQADgDAIgMQAIgLAEgEQAhgkAugSQAmgPA5gEQBpgEBrBPQgPACgNADQABB6AdBAQAeA/gUANQgeAUgggJgACikqQg/AQgNArQgMAmAcBcQAKAgAUAqIABABQAAABABABIAAABAiegLQgrAWgagvQgJgQAHgOQA1hmgBhx");
	this.shape_13.setTransform(81.5,56.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FF99CC").s().p("AAKFxQhBAMhEgHQhRgBghhIQgcg/ANhCQAOhCAmg5QAVgfAYgbIAAgBIAAABIgDgCIADABIAXgnQAthLgShWQgHglgNgRQgQgWghABIgDAAQgHABgNADQgRAGgFAAIALgPIAMgPQAhgkAugSQAmgPA5gEQBpgEBrBPIgcAFQg/AQgNArQgMAmAcBcQAKAgAUAqIABABIABACIAAABQAuA0AhA8QAlBCAHBKQADAmgQAmQgeBEhLAJQgcAFgcAAQgmgBgjgJg");
	this.shape_14.setTransform(81.5,56.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9,p:{y:43.2}},{t:this.shape_8}]}).to({state:[{t:this.shape_12},{t:this.shape_9,p:{y:43.2}},{t:this.shape_11}]},1).to({state:[{t:this.shape_9,p:{y:41.7}},{t:this.shape_14,p:{y:56.9}},{t:this.shape_13,p:{y:56.9}}]},1).to({state:[{t:this.shape_9,p:{y:43.2}},{t:this.shape_14,p:{y:58.4}},{t:this.shape_13,p:{y:58.4}}]},1).to({state:[{t:this.shape_12},{t:this.shape_9,p:{y:43.2}},{t:this.shape_11}]},1).to({state:[{t:this.shape_10},{t:this.shape_9,p:{y:43.2}},{t:this.shape_8}]},1).wait(1));

	// 图层 1
	this.instance_1 = new lib.车子("synched",0);
	this.instance_1.setTransform(83.4,141.3,1,1,0,0,0,33.3,65.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:137.3},2).to({y:141.3},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(48.4,-29.1,76,236.6);


(lib.papa1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 元件 1
	this.instance = new lib.元件1();
	this.instance.setTransform(83.7,182.6,1,1,0,0,0,83.7,66.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,skewY:-2.1,y:178.2},6).to({scaleX:1,skewY:0,y:182.6},3).wait(1));

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#663300").ss(7,1,1).p("ADDABIAyDjImlAHQhogCA2hDQAAgBABgBIESikICOABAAygCIhEjbACdjqIAeDl");
	this.shape.setTransform(32.5,303.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#663300").ss(4,1,1).p("ALQjHIhOC2AmODLIgCAAQgDAAgCAAIiDgBQAAAAgBAAQgggCgcgEIh6mVIJTjpAl1DJQgMABgLABIAMAAAk1DEQghADgfACAkmBNIgJB3AnsG6IALgFIABAGAKCgKIuoBQ");
	this.shape_1.setTransform(84.1,259.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AjiAwIABgCIESiiICOABIAEAAIAyDiImlAGQhogBA2hEg");
	this.shape_2.setTransform(32.5,315.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFCC").s().p("AgWB4IgBgGIgIAEIhHjZIgCgUICCABIAEAAIADAAIACAAIALAAIAagCIABAIIAfDiIABAHg");
	this.shape_3.setTransform(40.9,291.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#663300").s().p("AmOFDIgCAAIgFAAIiDgBIgBAAQgggCgcgEIh6mVIJTjpINMDzIhOC0IAAAHIuoBSIAAAHIgJB3IgGAAIhAAFIAAAAIgXACg");
	this.shape_4.setTransform(84.1,247.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(10));

	// 图层 2
	this.instance_1 = new lib.元件5();
	this.instance_1.setTransform(133.8,65.3,1,1,0,0,0,64.3,65.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:68.2},2).to({y:65.3},7).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.5,-3.5,205,334.3);


(lib.motorun = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#663300").ss(4,1,1).p("ABCiLQAPALAOAPQBvBsABC0QhSAnhOgNQgOhlgthGQgQgWgSgOQgnghg3gCQgNgDgHgEQgXgOgJgLQgOgSABggQAAgTALgRQAKgPARgKQAygeBJASQA5AOA1ArgAgugGQgLiDB7gC");
	this.shape.setTransform(166.7,20.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#663300").s().p("AgfCpQgOhlgvhEQgPgWgSgQQgLiDB9gCQAMAMAPAOQBuBsABC0Qg8Adg7AAQgSAAgVgDg");
	this.shape_1.setTransform(174.6,23.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CCCCCC").s().p("AhGA/QgNgDgHgEQgXgOgJgLQgOgSABgeQAAgTALgRQAKgPARgKQAygeBHASQA7APA1AqQh9ACALCBQglghg3gCg");
	this.shape_2.setTransform(159.7,10);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(10));

	// 图层 1
	this.instance = new lib.元件2_1();
	this.instance.setTransform(204.9,106.8,1,1,0,0,0,204.9,106.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:102.5},4).to({y:106.8},5).wait(1));

	// 图层 3
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CCCCCC").s("#663300").ss(4,1,1).rr(-7.45,-43.95,14.9,87.9,7.45);
	this.shape_3.setTransform(57.5,162.3,1,1,17.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(10));

	// 元件 3
	this.instance_1 = new lib.元件3();
	this.instance_1.setTransform(334.7,200.7,1,1,0,0,0,69.7,69.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:-360},9).wait(1));

	// 元件 3
	this.instance_2 = new lib.元件3();
	this.instance_2.setTransform(45.7,200.7,1,1,0,0,0,69.7,69.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:-360},9).wait(1));

	// 尾气
	this.instance_3 = new lib.元件4();
	this.instance_3.setTransform(446.6,162.2,1,1,0,0,0,15.8,15.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26,-29.2,439.4,301.5);


(lib.line = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.元件42();
	this.instance.setTransform(245.2,9.8,1,1,0,0,0,517.2,9.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:414.8},9).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-274,-2,1412.8,23.7);


(lib.hit5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// 图层 2
	this.hit_mc = new lib.元件74();
	this.hit_mc.setTransform(-1,-11.3,0.764,0.547,0,0,0,109,65);
	this.hit_mc.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.hit_mc).wait(2));

	// 图层 1
	this.instance = new lib.元件1_1();
	this.instance.setTransform(-6.2,-11.3,1,1,0,0,0,51.8,26.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-84.3,-51.2,168.6,109);


(lib.hit6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// 图层 2
	this.hit_mc = new lib.元件74();
	this.hit_mc.setTransform(-1,-1.3,0.478,1,0,0,0,109.1,65);
	this.hit_mc.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.hit_mc).wait(2));

	// 图层 1
	this.instance = new lib.美女();
	this.instance.setTransform(-48,-14.3,1,1,0,0,0,36.4,70.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-53.1,-114,104.2,236.6);


(lib.hit2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// 图层 3
	this.hit_mc = new lib.元件74复制();
	this.hit_mc.setTransform(-2.2,-100.1,0.843,0.868,0,0,0,109,65);
	this.hit_mc.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.hit_mc).wait(2));

	// 图层 1
	this.instance = new lib.元件57();
	this.instance.setTransform(-1.9,-2,1,1,0,0,0,100.1,176.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-104,-182,204.2,358.3);


(lib.hit1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// 图层 1
	this.hit_mc = new lib.元件74();
	this.hit_mc.setTransform(-26.2,-1.3,0.769,1,0,0,0,109,65);
	this.hit_mc.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.hit_mc).wait(2));

	// 图层 3
	this.instance = new lib.元件67();
	this.instance.setTransform(-2.9,-1.2,1,1,0,0,180,113.1,64.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({skewY:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-118,-68,230.3,133.7);


(lib.元件58 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_20 = function() {
		this.stop();
		
		
		this.parent.nextFrame();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(20).call(this.frame_20).wait(1));

	// 图层 2
	this.instance = new lib.元件60();
	this.instance.setTransform(154.8,159,0.37,0.37,0,0,0,61.6,43);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(11).to({_off:false},0).to({regX:61.5,scaleX:1.54,scaleY:1.54,rotation:22.4,x:247.3,y:50.9},4,cjs.Ease.get(1)).wait(11));

	// 图层 1  复制 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#663300").ss(4,2,0,3).p("AjTB5Ig7DYIDNh7IBgDvIBdkFIDPBIIhaigIDZi8IkLggIBljZIiyB7IgGjwIiQDIIjSiMIA9E/IkIBUg");
	this.shape.setTransform(252.9,330.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F9E006").s().p("AhFDVIjNB7IA7jYIjuhsIEIhUIg9k/IDSCMICQjIIAGDwICyh7IhlDZIELAgIjZC8IBaCgIjPhIIhdEFg");
	this.shape_1.setTransform(253.3,330.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#663300").ss(4,2,0,3).p("Ag6mIIlKjbIBgHyImdCFIF0CpIhbFSIFAjBICWF2ICTmXIFCBvIiMj5IFTkoImhgxICdlUIkVDAIgJl3g");
	this.shape_2.setTransform(256.1,318.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F9E006").s().p("AhtFNIk/DBIBblSIl0ipIGdiFIhgnyIFJDbIDjk5IAJF3IEVjAIidFUIGhAxIlTEoICLD5IlBhvIiTGXg");
	this.shape_3.setTransform(256.6,318.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#663300").ss(4,2,0,3).p("ADXuRIklGUImqkbIB8KFIoWCtIHhDaIh3G2IGfj5IDDHjIC+oPIGhCQIi1lDIG3l/IochAIDMm4IloD5g");
	this.shape_4.setTransform(258.8,307.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F9E006").s().p("AiNGwImfD5IB3m2InhjaIIWitIh8qFIGqEbIElmUIAMHlIFoj5IjMG4IIcBAIm3F/IC1FDImhiQIi+IPg");
	this.shape_5.setTransform(259.2,307.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#663300").ss(4,2,0,3).p("AnAiuIp1DMII3EBIiMIDIHoklIDmI5IDfpsIHrCpIjUl7IIEnEIp8hLIDwoGImnEkIgOo6IlZHbIn2lNg");
	this.shape_6.setTransform(260.9,299.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F9E006").s().p("AimH9InoEkICMoDIo3kBIJ1jMIiSr3IH2FNIFZnbIAOI7IGnklIjwIGIJ8BLIoEHEIDUF8InriqIjfJsg");
	this.shape_7.setTransform(261.3,299.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#663300").ss(4,2,0,3).p("AJ2ESII8n0Iq/hTIEJo+InVFEIgPp4Il/IPIorlxIChNIIq4DiIJzEeIibI5IIdlEID/J2ID3qvIIgC8g");
	this.shape_8.setTransform(262.3,293.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F9E006").s().p("Ai4IzIodFEICbo5IpzkeIK4jiIihtIIIrFxIF/oPIAPJ4IHVlEIkJI+IK/BTIo8H0IDsGlIogi8Ij3Kvg");
	this.shape_9.setTransform(262.7,294);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#663300").ss(4,2,0,3).p("AKbEiIJdoSIrohXIEYpgInwFXIgQqcImVItIpMmHICrN6IrhDvIKYEuIikJbII8lXIEPKaIEErXIJBDHg");
	this.shape_10.setTransform(263.2,290.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F9E006").s().p("AjDJUIo8FXICkpbIqYkuILhjvIirt6IJMGHIGVotIAQKcIHwlXIkYJgILoBXIpdISID6G9IpBjHIkELXg");
	this.shape_11.setTransform(263.6,290.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#663300").ss(4,2,0,3).p("AKnEnIJpocIr3hZIEfpqIn6FdIgRqpImcI4IpXmOICvOKIrvDzIKkE0IinJmIJHldIETKmIEKrkIJLDKg");
	this.shape_12.setTransform(263.5,289.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#F9E006").s().p("AjGJfIpHFdICnpmIqlkzILwj0IivuKIJXGOIGco4IARKqIH6leIkfJqIL2BaIpoIcID+HEIpKjKIkKLlg");
	this.shape_13.setTransform(264,289.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[]},1).to({state:[{t:this.shape_1},{t:this.shape}]},6).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_9},{t:this.shape_8}]},1).to({state:[{t:this.shape_11},{t:this.shape_10}]},1).to({state:[{t:this.shape_13},{t:this.shape_12}]},1).wait(8));

	// 图层 1 复制
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#663300").ss(4,2,0,3).p("AHGoJIkVC/IgKl2IjhE4IlJjbIBgHyImdCFIF0CpIhcFRIFAjAICWF1ICSmXIFDBwIiMj5IFSkoImggxg");
	this.shape_14.setTransform(218.1,113.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#F9E006").s().p("AhsFNIlBDAIBclRIlzipIGdiFIhhnyIFKDbIDhk4IAKF2IEVi/IieFTIGhAxIlSEoICMD5IlDhwIiSGXg");
	this.shape_15.setTransform(218.5,113.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#663300").ss(4,2,0,3).p("ALDsxImxEsIgPpJIliHoIoClWICWMKIqFDRIJFEIIiPIPIH0ksIDsJHIDkp8IH4CuIjbmFIISnPIqLhNg");
	this.shape_16.setTransform(223.2,93.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#F9E006").s().p("AiqIJIn0EsICPoPIpFkIIKFjRIiWsKIICFWIFinoIAPJJIGxksIj1ITIKLBNIoSHPIDbGFIn4iuIjkJ8g");
	this.shape_17.setTransform(223.6,93.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#663300").ss(4,2,0,3).p("Ah9scIqZm7IDCPvItDEQILwFVIi6KrIKImEIEyLyIEos3IKMDhIkbn4IKupYItLhjIE+qvIoyGEIgTr1g");
	this.shape_18.setTransform(227.3,77.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#F9E006").s().p("AjdKjIqIGFIC6qrIrwlWINDkQIjCvvIKZG8IHLp4IATL1IIymEIk+KvINLBkIquJYIEbH4IqMjhIkoM2g");
	this.shape_19.setTransform(227.7,77.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#663300").ss(4,2,0,3).p("AiTupIsPoJIDkShIvXFAIN1GSIjaMkIL6nKIFpN4IFcvIIL/EJIlMpRIMmrDIvgh1IF2spIqVHJIgWt7g");
	this.shape_20.setTransform(230.6,64.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#F9E006").s().p("AkEMaIr6HKIDaskIt1mSIPWlAIjjyhIMPIJIIcrnIAWN7IKVnJIl3MpIPhB1IsmLDIFMJRIr/kJIlcPIg");
	this.shape_21.setTransform(231,64.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#663300").ss(4,2,0,3).p("AikwOItjpBID8UgIxAFiIPUG+IjyN6INMn6IGRPXIGBwxINSEmIlxqRIN+sPIxLiBIGeuAIrcH6IgYvbg");
	this.shape_22.setTransform(232.9,55.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#F9E006").s().p("AkhNwItMH6IDyt6IvUm+IRAliIj80gINjJBIJXs3IAYPbILcn6ImeOAIRLCBIt+MPIFxKRItSkmImBQxg");
	this.shape_23.setTransform(233.3,55.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#663300").ss(4,2,0,3).p("AiuxLIuWpjIEMVuIyAF2IQNHYIkAOuIN9oYIGoQQIGXxvIOEE3ImGq3IOys9IyLiJIG2u0IsGIYIgawVg");
	this.shape_24.setTransform(234.3,50.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#F9E006").s().p("AkyOjIt9IYIEAuuIwNnXISAl3IkM1tIOWJjIJ6tnIAaQUIMGoYIm2O1ISLCJIuyM8IGGK3IuEk2ImXRvg");
	this.shape_25.setTransform(234.7,50.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#663300").ss(4,2,0,3).p("AixxfIunpuIERWHIyVF+IQgHgIkEO/IONoiIGwQkIGeyEIOVE8ImNrEIPCtMIygiLIG/vFIsVIhIgbwog");
	this.shape_26.setTransform(234.8,48.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#F9E006").s().p("Ak3O0IuNIiIEEu/IwgngISUl+IkQ2HIOnJuIKFt3IAbQoIMVohIm/PFISgCLIvCNMIGNLEIuVk8ImeSEg");
	this.shape_27.setTransform(235.2,48.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[]},1).to({state:[{t:this.shape_15},{t:this.shape_14}]},3).to({state:[{t:this.shape_17},{t:this.shape_16}]},1).to({state:[{t:this.shape_19},{t:this.shape_18}]},1).to({state:[{t:this.shape_21},{t:this.shape_20}]},1).to({state:[{t:this.shape_23},{t:this.shape_22}]},1).to({state:[{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_27},{t:this.shape_26}]},1).wait(11));

	// 图层 1
	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#663300").ss(4,2,0,3).p("AF3CjIFSkoImggxICdlTIkVC/IgKl2IjhE4IlJjbIBgHyImdCFIF0CpIhcFRIFAjAICWF1ICSmXIFDBwg");
	this.shape_28.setTransform(151.3,151.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#F9E006").s().p("AhtFNIk/DAIBclRIl0ipIGdiFIhgnyIFIDbIDik4IAKF2IEVi/IieFTIGhAxIlSEoICLD5IlChwIiSGXg");
	this.shape_29.setTransform(151.7,151.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#663300").ss(4,2,0,3).p("AFVqHIgSraIm7JhIqCmrIC7PMIsmEFILWFKIizKTIJxl3IEnLYIEesaIJ1DZIkRnmIKWpDIsuhgIEzqXg");
	this.shape_30.setTransform(151.5,151.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#F9E006").s().p("AjVKLIpxF3ICzqTIrWlKIMmkFIi7vMIKCGrIG7phIASLaIIel2IkzKXIMuBgIqWJDIERHmIp1jZIkeMag");
	this.shape_31.setTransform(151.9,151.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#663300").ss(4,2,0,3).p("ATS2WIr2IMIgav+IpsNUIuDpWIEGVRIxnFuIP3HOIj7OaINroMIGfP6IGPxXINwEwIl9qpIOdsrIxziGg");
	this.shape_32.setTransform(151.6,151.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#F9E006").s().p("AkrOQItrIMID7uaIv3nOIRnluIkG1RIODJWIJstUIAaP+IL2oMImuOgIRzCGIudMrIF9KpItwkwImPRXg");
	this.shape_33.setTransform(152,151.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#663300").ss(4,2,0,3).p("A2WbcIQsqBIH7TdIHo1OIQ0FzInSs/IRrvgI1wikIINxuIueKBIggziIr2QSIxKrbIFAZ/I1iHAITZI0g");
	this.shape_34.setTransform(151.7,151.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#F9E006").s().p("AluRaIwsKBIEyxnIzZo0IVinAIlA5/IRKLbIL2wSIAgTiIOeqBIoNRuIVwCkIxrPgIHSM/Iw0lzInoVOg");
	this.shape_35.setTransform(152.1,151.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#663300").ss(4,2,0,3).p("ALLRsITAGjIoPurIT9xhI4ki5IJR0BIwWLTIgk2DItZSZIzYs6IFpdWI4UH7IV6J9IlbT6IS4rVII9V/g");
	this.shape_36.setTransform(151.8,151.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#F9E006").s().p("AmdTqIy4LVIFbz6I16p9IYUn6Ilp9XITYM6INZyZIAkWEIQWrUIpRUCIYkC4Iz9RhIIPOsIzAmkIonX+g");
	this.shape_37.setTransform(152.2,151.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#663300").ss(4,2,0,3).p("Aj940I0vtzIGDfXI6AIfIXbKoIlyVRIUKsGIJlXfIJN5nIUTHAIozvsIVWyuI6QjGIJ51ZIxfMFIgl3lg");
	this.shape_38.setTransform(151.8,151.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#F9E006").s().p("Am6VBI0KMGIFy1RI3bqoIaAofImD/XIUvNzIOUzrIAlXmIRfsGIp5VZIaQDGI1WSuIIzPsI0TnAIpNZng");
	this.shape_39.setTransform(152.2,151.5);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#663300").ss(4,2,0,3).p("AkD5WI1LuGMAGLAgCI6jIqIX6K4Il6VuIUmsXIJzYAIJZ6LIUwHKIpAwCIVzzHI60jKIKH13Ix2MWIgn4Gg");
	this.shape_40.setTransform(151.9,151.3);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#F9E006").s().p("AnEVeI0mMXIF61uI36q4IajoqMgGLggCIVLOGIOo0GIAnYGIR2sWIqHV3Ia0DKI1zTHIJAQCI0wnKIpZaLg");
	this.shape_41.setTransform(152.3,151.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_29},{t:this.shape_28}]},1).to({state:[{t:this.shape_31},{t:this.shape_30}]},1).to({state:[{t:this.shape_33},{t:this.shape_32}]},1).to({state:[{t:this.shape_35},{t:this.shape_34}]},1).to({state:[{t:this.shape_37},{t:this.shape_36}]},1).to({state:[{t:this.shape_39},{t:this.shape_38}]},1).to({state:[{t:this.shape_41},{t:this.shape_40}]},1).wait(14));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.元件52 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.元件54();
	this.instance.setTransform(123.6,222.2,1,1,0,0,0,123.6,222.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleY:1,skewX:-4.6},6,cjs.Ease.get(1)).to({scaleY:1,skewX:1.6},1).to({skewX:0},4).wait(30));

	// 图层 2
	this.instance_1 = new lib.元件53();
	this.instance_1.setTransform(192.3,88.6,0.37,0.37,-7.7,0,0,107.4,65.3);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(7).to({_off:false},0).to({regX:107.3,regY:65.4,scaleX:1,scaleY:1,rotation:0,x:254.8,y:110.4,alpha:1},3,cjs.Ease.get(1)).wait(13).to({regX:107.4,regY:65.3,scaleX:0.37,scaleY:0.37,rotation:-7.7,x:192.3,y:88.6,alpha:0},3,cjs.Ease.get(-1)).to({_off:true},1).wait(14));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2,-2,248.5,224);


(lib.元件51 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.元件45();
	this.instance.setTransform(79.4,61.8,0.789,0.789,0,0,0,25.4,11.3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#663300").ss(4,1,1).p("ADqBmIAAhGQAAhohMhMQgVgVgXgPIgBAAQgFgEgGgDQg5AdhKAAQhHAAg2gZQgaAQgXAXQhLBMAABoIAABLIAABvQgEgBgEgBQhtgcAAgnQAAgNAMgMQAygKA3gHAFABxQARACAQADQA1AKAwANQC9AyAABHQAABIi9AyQhmAbh9ANQhpAKh6AAQiUAAh8gQQhjgMhTgWQi8gyAAhIQAAhHC8gyQAigJAlgIAFABxQAbAQAAAUQAAAnhtAcQgBABgDABIAAh0QAtAEApAHgAARFUQAAARgNANQgKANgTAAQgSAAgNgNQgNgNAAgRQAAgTANgNQANgNASAAQATAAAKANQANANAAATgADdEoQANANAAASQAAASgNANQgNANgSAAQgSAAgNgNQgNgNAAgSQAAgSANgNQANgNASAAQASAAANANgAGcEBQANANAAASQAAASgNANQgMANgUAAQgRAAgNgNQgNgNAAgSQAAgSANgNQANgNARAAQAUAAAMANgAgYjfIg8iFABmi/Qg4gghDAAQgBAAgBAAIgBAAQhIABg6AjAmsDsQASAAANANQANANAAASQAAASgNANQgNANgSAAQgSAAgNgNQgNgNAAgSQAAgSANgNQANgNASAAgAi+FDQAAASgNANQgNANgSAAQgSAAgNgNQgNgNAAgSQAAgSANgNQANgNASAAQASAAANANQANANAAASgAkWDaQAiAIAmAGQBSAMBlAAQCVAABsgaAgXjfIBHjS");
	this.shape.setTransform(81.5,55.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AggA8QgNgNAAgSQAAgSANgLQANgNASAAQAQAAANANQANALAAASQAAASgNANQgNANgQAAQgSAAgNgNgAC3AwQgNgNAAgSQAAgRANgMQANgNASAAQASAAANANQANAMAAARQAAASgNANQgNANgSAAQgSAAgNgNgAjxAsQgNgNAAgSQAAgQANgNQANgNASAAQATAAAMANQANANAAAQQAAASgNANQgMANgTAAQgSAAgNgNgAF2AJQgNgLAAgSQAAgSANgNQAMgNASAAQAUAAAMANQANANAAASQAAASgNALQgMANgUAAQgSAAgMgNgAmzABQgNgLAAgTQAAgSANgMQANgNASAAQASAAANANQANAMAAASQAAATgNALQgNAMgSAAQgSAAgNgMg");
	this.shape_1.setTransform(79.1,86.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFCC00").s().p("AkFDbQhugcAAgnQAAgOANgLQAxgKA4gIIAABwIgIgCgAEDBpQAtADApAIQAbAQgBAUQABAnhtAcIgEABgAiBi4QA5gkBIAAIAAAAIABAAQBGAAA4AgQg5AchLABQhGAAg2gZg");
	this.shape_2.setTransform(79,54.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFCC").s().p("AgOgQQAOACAPADIgFAdQAAgSgYgQg");
	this.shape_3.setTransform(115.2,68.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFF00").s().p("AkQCNQhigLhUgXQi7gyAAhFQAAhHC7gzQAjgJAkgHQgMALAAANQAAAoBtAcIAIABQAiAJAmAGQBSALBlABQCVgBBsgaIAFgBQBsgcAAgoIAFgeQA2AJAwANQC8AzAABHQAABFi8AyQhmAbh9ANQhqAKh5AAQiUAAh8gQgAg4AfQgNAOAAASQAAARANAOQANAMASAAQASAAALgMQANgOAAgRQAAgSgNgOQgLgMgSAAQgSAAgNAMgACfAUQgNANAAARQAAASANAOQANANASAAQASAAANgNQANgOAAgSQAAgRgNgNQgNgNgSgBQgSABgNANgAkJAPQgNANAAATQAAARANANQANAOASAAQATAAAMgOQANgNAAgRQAAgTgNgNQgMgNgTABQgSgBgNANgAFegSQgNANAAARQAAARANANQAMAOASAAQAUAAAMgOQANgNAAgRQAAgRgNgNQgMgNgUABQgSgBgMANgAnLgaQgNANAAAQQAAATANAMQANANASAAQASAAANgNQANgMAAgTQAAgQgNgNQgNgNgSAAQgSAAgNANg");
	this.shape_4.setTransform(81.5,82.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#CCCCCC").s().p("Ai4DOQgmgGghgIIAAhvIAAhLQAAhoBLhMQAXgXAagQQA2AZBGAAQBLAAA4gdIAMAHIgBABIABgBQAXAPAWAVQBLBMAABoIAABGIAAB0QhsAaiVAAQhlAAhSgMg");
	this.shape_5.setTransform(79.2,57.7);

	// 图层 2
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#663300").s().p("AhXg6ICZgpIAWDHg");
	this.shape_6.setTransform(101,105.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#663300").s().p("Ag3hiICVA1Ii7CQg");
	this.shape_7.setTransform(56.1,104.2);

	this.addChild(this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(15.2,9.6,132.6,105.6);


(lib.元件50 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.元件51();
	this.instance.setTransform(81.4,55.1,1,1,20.7,0,0,81.4,55.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:81.5,regY:62.4,rotation:20,x:79,y:62},0).wait(1).to({rotation:18.1,x:79.2,y:62.1},0).wait(1).to({rotation:15.4,x:79.6,y:62.2},0).wait(1).to({rotation:12.1,x:80},0).wait(1).to({rotation:8.6,x:80.4,y:62.3},0).wait(1).to({rotation:5.4,x:80.8,y:62.4},0).wait(1).to({rotation:2.6,x:81.2},0).wait(1).to({rotation:0.7,x:81.5},0).wait(1).to({regY:55.1,rotation:0,y:55.1},0).wait(1).to({regY:62.4,rotation:-0.6,x:81.6,y:62.4},0).wait(1).to({rotation:-2.4,x:81.9},0).wait(1).to({rotation:-4.9,x:82.2},0).wait(1).to({rotation:-8.1,x:82.6,y:62.3},0).wait(1).to({rotation:-11.4,x:83},0).wait(1).to({rotation:-14.8,x:83.4,y:62.2},0).wait(1).to({rotation:-17.8,x:83.8,y:62},0).wait(1).to({rotation:-20.3,x:84.1,y:61.9},0).wait(1).to({rotation:-21.9,x:84.3,y:61.8},0).wait(1).to({regY:55,rotation:-22.5,x:81.5,y:55},0).wait(1).to({regY:62.4,rotation:-21.8,x:84.3,y:61.9},0).wait(1).to({rotation:-20.1,x:84.1,y:62},0).wait(1).to({rotation:-17.5,x:83.8,y:62.1},0).wait(1).to({rotation:-14.4,x:83.4,y:62.2},0).wait(1).to({rotation:-11,x:83,y:62.3},0).wait(1).to({rotation:-7.7,x:82.5,y:62.4},0).wait(1).to({rotation:-4.6,x:82.2},0).wait(1).to({rotation:-2.2,x:81.8},0).wait(1).to({rotation:-0.6,x:81.6},0).wait(1).to({regY:55.1,rotation:0,x:81.5,y:55.1},0).wait(1).to({regY:62.4,rotation:0.6,x:81.4,y:62.5},0).wait(1).to({rotation:2.2,x:81.2},0).wait(1).to({rotation:4.5,x:80.9,y:62.4},0).wait(1).to({rotation:7.4,x:80.6},0).wait(1).to({rotation:10.5,x:80.1,y:62.3},0).wait(1).to({rotation:13.5,x:79.8},0).wait(1).to({rotation:16.3,x:79.4,y:62.2},0).wait(1).to({rotation:18.6,x:79.1,y:62.1},0).wait(1).to({rotation:20.2,x:78.9,y:62},0).wait(1).to({regX:81.4,regY:55.1,rotation:20.7,x:81.4,y:55.1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(3.3,-10.9,156.3,132.3);


(lib.元件44 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_89 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(89).call(this.frame_89).wait(1));

	// 图层 3
	this.instance = new lib.元件45();
	this.instance.setTransform(49.6,62.6,1,1,0,0,0,25.4,11.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(15).to({x:45.1},7,cjs.Ease.get(1)).wait(8).to({x:44.6},0).wait(6).to({x:40.1},7,cjs.Ease.get(1)).wait(9).to({x:39.1},0).wait(6).to({x:34.6},7,cjs.Ease.get(1)).wait(10).to({x:34.1},0).wait(6).to({x:29.6},7,cjs.Ease.get(1)).wait(2));

	// 图层 1
	this.instance_1 = new lib.元件48();
	this.instance_1.setTransform(56.4,62.9,1,1,0,0,0,56.4,62.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(15).to({x:51.9},7,cjs.Ease.get(1)).wait(8).to({x:51.4},0).wait(6).to({x:46.9},7,cjs.Ease.get(1)).wait(9).to({x:45.9},0).wait(6).to({x:41.4},7,cjs.Ease.get(1)).wait(10).to({x:40.9},0).wait(6).to({x:36.4},7,cjs.Ease.get(1)).wait(2));

	// 图层 7
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#663300").ss(2,1,1).p("AgnAKIgegDIAWAOIAvAiIgSAjIBYgWIgzidIgDBpg");
	this.shape.setTransform(14.7,137.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFE6").s().p("AgKA3IgwgiIAIgLIA3AGIADhoIAzCbIhYAXg");
	this.shape_1.setTransform(15.8,137.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFE6").s().p("AgKA3IgwgiIAIgLIA2AGIADhoIA0CbIhYAXg");
	this.shape_2.setTransform(10.9,137.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#663300").ss(2,1,1).p("AgvAVIAvAiIgSAjIBYgWIgzidIgDBpIg3gGIgegDg");
	this.shape_3.setTransform(4.2,137.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFE6").s().p("AgKA3IgwgiIAHgLIA3AGIAEhoIAzCbIhYAXg");
	this.shape_4.setTransform(0.4,137.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape,p:{x:14.7}}]},13).to({state:[]},2).to({state:[]},15).to({state:[{t:this.shape_2,p:{x:10.9}},{t:this.shape,p:{x:9.7}}]},4).to({state:[]},2).to({state:[]},16).to({state:[{t:this.shape_2,p:{x:5.4}},{t:this.shape_3,p:{x:4.2}}]},4).to({state:[]},2).to({state:[]},17).to({state:[{t:this.shape_4},{t:this.shape_3,p:{x:-0.8}}]},4).to({state:[]},2).to({state:[]},8).wait(1));

	// 元件 47
	this.instance_2 = new lib.元件47();
	this.instance_2.setTransform(59.8,100.6,1,1,0,0,0,29.9,4.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(9).to({rotation:11.5,x:55.7,y:99.7},3).wait(1).to({rotation:0,x:53.8,y:100.6},0).wait(17).to({x:54.8},0).to({rotation:11.5,x:50.7,y:99.7},3).wait(1).to({rotation:0,x:48.8,y:100.6},0).wait(18).to({x:49.3},0).to({rotation:11.5,x:45.2,y:99.7},3).wait(1).to({rotation:0,x:43.3,y:100.6},0).wait(19).to({x:44.3},0).to({rotation:11.5,x:40.2,y:99.7},3).wait(1).to({rotation:0,x:38.3,y:100.6},0).wait(11));

	// 元件 46
	this.instance_3 = new lib.元件46_1();
	this.instance_3.setTransform(35.8,102.5,1,1,0,0,0,9.3,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(9).to({rotation:21.7,x:33.2,y:97.3},3).wait(1).to({rotation:0,x:29.8,y:102.5},0).wait(17).to({x:30.8},0).to({rotation:21.7,x:28.2,y:97.3},3).wait(1).to({rotation:0,x:24.8,y:102.5},0).wait(18).to({x:25.3},0).to({rotation:21.7,x:22.7,y:97.3},3).wait(1).to({rotation:0,x:19.3,y:102.5},0).wait(19).to({x:20.3},0).to({rotation:21.7,x:17.7,y:97.3},3).wait(1).to({rotation:0,x:14.3,y:102.5},0).wait(11));

	// 图层 4
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#663300").ss(4,1,1).p("Ag5BhIA2g2IAAiNAA4hlIACDKAAuBlIhnAA");
	this.shape_5.setTransform(81.3,135.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAuBiIAAADIhnAAIAAgDIA2g3IAAiNIAAgCIA7AAIACDJg");
	this.shape_6.setTransform(81.3,135.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#663300").ss(4,1,1).p("Ag5BhIA2g2IAAiNAA4hlIACDKAAuBlIhnAA");
	this.shape_7.setTransform(67.8,135.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAuBiIAAADIhnAAIAAgDIA2g3IAAiNIAAgCIA7AAIACDJg");
	this.shape_8.setTransform(67.8,135.9);

	this.instance_4 = new lib.元件49();
	this.instance_4.setTransform(74.6,135.9,1,1,0,0,0,12.6,10.2);
	this.instance_4._off = true;

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#663300").ss(4,1,1).p("AA4hlIACDKAAuBlIhnAAAg5BhIA2g2IAAiN");
	this.shape_9.setTransform(71.5,135.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8,p:{x:67.8}},{t:this.shape_7,p:{x:67.8}},{t:this.shape_6,p:{x:81.3}},{t:this.shape_5,p:{x:81.3}}]}).to({state:[{t:this.instance_4}]},15).to({state:[{t:this.instance_4}]},6).to({state:[{t:this.shape_8,p:{x:63}},{t:this.shape_7,p:{x:63}},{t:this.shape_6,p:{x:76.5}},{t:this.shape_5,p:{x:76.5}}]},1).to({state:[{t:this.shape_8,p:{x:62.8}},{t:this.shape_7,p:{x:62.8}},{t:this.shape_6,p:{x:76.3}},{t:this.shape_5,p:{x:76.3}}]},8).to({state:[{t:this.instance_4}]},6).to({state:[{t:this.instance_4}]},6).to({state:[{t:this.shape_8,p:{x:58}},{t:this.shape_5,p:{x:58}},{t:this.shape_6,p:{x:71.5}},{t:this.shape_9,p:{x:71.5}}]},1).to({state:[{t:this.shape_8,p:{x:57.3}},{t:this.shape_7,p:{x:57.3}},{t:this.shape_6,p:{x:70.8}},{t:this.shape_5,p:{x:70.8}}]},9).to({state:[{t:this.instance_4}]},6).to({state:[{t:this.instance_4}]},6).to({state:[{t:this.shape_8,p:{x:52.5}},{t:this.shape_9,p:{x:52.5}},{t:this.shape_6,p:{x:66}},{t:this.shape_5,p:{x:66}}]},1).to({state:[{t:this.shape_8,p:{x:52.3}},{t:this.shape_9,p:{x:52.3}},{t:this.shape_6,p:{x:65.8}},{t:this.shape_5,p:{x:65.8}}]},10).to({state:[{t:this.instance_4}]},6).to({state:[{t:this.instance_4}]},6).to({state:[{t:this.shape_8,p:{x:47.5}},{t:this.shape_7,p:{x:47.5}},{t:this.shape_6,p:{x:61}},{t:this.shape_5,p:{x:61}}]},1).wait(2));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(15).to({_off:false},0).to({x:69.9},6,cjs.Ease.get(1)).to({_off:true},1).wait(14).to({_off:false,x:69.6},0).to({x:64.9},6,cjs.Ease.get(1)).to({_off:true},1).wait(15).to({_off:false,x:64.1},0).to({x:59.4},6,cjs.Ease.get(1)).to({_off:true},1).wait(16).to({_off:false,x:59.1},0).to({x:54.4},6,cjs.Ease.get(1)).to({_off:true},1).wait(2));

	// 图层 9
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#663300").ss(4,1,1).p("ACIoLIAAQXIkPAAIAAwXg");
	this.shape_10.setTransform(21.7,125.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AiHIMIAAwXIEPAAIAAQXg");
	this.shape_11.setTransform(21.7,125.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#663300").ss(4,1,1).p("AiHIMIAAwXIEPAAIAAQXg");
	this.shape_12.setTransform(84.7,125.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AiHIMIAAwXIEPAAIAAQXg");
	this.shape_13.setTransform(84.7,125.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#663300").ss(4,1,1).p("ACIoLIAAQXIkPAAIAAwXg");
	this.shape_14.setTransform(147.7,125.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AiHIMIAAwXIEPAAIAAQXg");
	this.shape_15.setTransform(147.7,125.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#663300").ss(4,1,1).p("ACIoLIAAQXIkPAAIAAwXg");
	this.shape_16.setTransform(210.7,125.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AiHIMIAAwXIEPAAIAAQXg");
	this.shape_17.setTransform(210.7,125.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#663300").ss(4,1,1).p("ACIoLIAAQXIkPAAIAAwXg");
	this.shape_18.setTransform(273.7,125.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AiHIMIAAwXIEPAAIAAQXg");
	this.shape_19.setTransform(273.7,125.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#663300").ss(4,1,1).p("ACIIMIkPAAIAAwXIEPAAg");
	this.shape_20.setTransform(336.7,125.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AiHIMIAAwXIEPAAIAAQXg");
	this.shape_21.setTransform(336.7,125.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#663300").ss(4,1,1).p("AiHIMIAAwXIEPAAIAAQXg");
	this.shape_22.setTransform(399.7,125.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AiHIMIAAwXIEPAAIAAQXg");
	this.shape_23.setTransform(399.7,125.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#663300").ss(4,1,1).p("ACIoLIAAQXIkPAAIAAwXg");
	this.shape_24.setTransform(462.7,125.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AiHIMIAAwXIEPAAIAAQXg");
	this.shape_25.setTransform(462.7,125.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#663300").ss(4,2,0,3).p("EAs3gLIIiXAAIhUAAEApMALJIBUAAICXAAEgpSgLIIg0AAIiwAAEgs2ALJICwAAIA0AA");
	this.shape_26.setTransform(237.9,125.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFCC").s().p("EAo/ALJMhSdAAAIg0AAIAA2RIA0AAMBSdAAAIBVAAIAAWRg");
	this.shape_27.setTransform(239.1,125.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10}]}).wait(90));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-51.3,-31.6,578.4,270.8);


(lib.元件43 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 4
	this.hit_mc = new lib.元件75();
	this.hit_mc.setTransform(21.8,12.8,1,1,0,0,0,53,100);
	this.hit_mc.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.hit_mc).wait(6));

	// 图层 3
	this.instance = new lib.元件4副本_1();
	this.instance.setTransform(4.3,216.8,1.464,1.464,90,0,0,15.8,15.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(6));

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#663300").ss(4,1,1).p("AkPgDQgCgOAAgPQAAhxBRhRQBQhRBwAAQBxAABRBRQBKBJAGBkQABAKAAALQAAALgBALQAhAPAiAJQASAIAAAbQAAAsgbAPQgVAMhMAIABQDlQgBAAAAABQglAKgqAAQgYAAgZgEQhSgPg9g9Qg2g2gShEQgEgTgCgTQgBgBAAgCQgSgUgYgaQgtgwAAgtQAAgcARgTQAUgXAnAAQAfAAAQAGAESg1Qg9BhhqAqQgoAPgqgBQidAJh6hfQAUAXAFAHABQDlIBBBJIj2AGIAzhEAESgKQgFBJgqA7QgOAUgTASQgyAyhAATAkUApQgJAGgdAOQgbANAAAUQAAAmAtASQAhAMAtAAAkPgDQAJAIAIAJQgJgHgHgH");
	this.shape.setTransform(2.1,-31.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCC00").s().p("AAJAXIgPgSQgCgMAAgPIARAtIAAAAgAgFAKIgBgFIAPASIgOgNgAgGAFIAAAAg");
	this.shape_1.setTransform(-24.4,-32.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhHgbIABgEQAZAEAZAAQAoAAAlgKIABgBIBBBHIj1AGg");
	this.shape_2.setTransform(4.2,-4.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFCC").s().p("AhBA/QAqg7AGhJQAfASAiAJQASAHAAAcQAAApgcAPQgVAMhJAJg");
	this.shape_3.setTransform(31.4,-25.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#330000").s().p("AgzCPQhRgPg+g9Qg1g2gShCQgFgTgCgTIAQAOQAVAXAFAHQgFgHgVgXQB6BdCdgJQArABAngNQBqgqA9hjIABAVIgBAWQgFBLgqA5QgOAUgTASQgyAyhAATIgBABQglAKgoAAQgaAAgZgEg");
	this.shape_4.setTransform(2.2,-21.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F9E006").s().p("AjTB1IgTgwQAAhvBRhRQBQhQBvAAQByAABRBQQBJBKAHBhQg+BkhqApQgnAPgrgBIgbABQiMAAhvhXgAkOA1QgtgxgBgqQAAgdARgTQAVgXAnAAQAeAAARAGIArgUQhRBRAABvQAAAPABAOIgpgtgAiVh7IAAAAg");
	this.shape_5.setTransform(-2.2,-41.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#663300").ss(2,1,1).p("ADxhyIBeBVIg9CKIg5hhQjXAmjug1IgpB2Ig5iXICChI");
	this.shape_6.setTransform(3.2,38.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#663300").ss(4,1,1).p("AGqi5QAIgIAPgIQARgLAKAAQAeAAAQApQAIAVADAWQAAA9hEAAQgJAAgFgCQgIgEgFgQAmjiHIGeAhIGqhYIABAGIAEBfIABANIjsBMIBCCwQgFACgEABQjgBBjdg7QgQgEgOgFIAxiQAm0gyQgDAIgFAFQgEAFgHADQgGACgMAAQg7AAAAgrQAAgUAMghQAQgtAaAAQAMAAAPAMQASAOAOAHAixAaIjzgvIABhy");
	this.shape_7.setTransform(2.5,8.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#663300").s().p("AlOgkICChIQDdA7DghBIBeBVIg9CKIg5hhQjXAmjug1IgpB2g");
	this.shape_8.setTransform(3.2,38.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AjICuIgegJIAxiQIABgHIjzgvIABhxIGeAhIGqhYIABAGIAEBfIABANIjsBMIBCCwIgJADQh2Aih1AAQhoAAhqgcg");
	this.shape_9.setTransform(2.8,9.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFCC").s().p("Am8BPQgEAFgHADQgGACgMAAQg7AAAAgrQAAgUAMgfQAQgsAagBQAMAAAPAMQASAOAOAHIgBBwgAm8BPQAFgEADgIQgDAIgFAEgAHDAvQgIgEgFgQIgMAAIgEhcIAEgBQAIgIAPgJQARgLAKAAQAeAAAQApQAIAVADAWQAAA8hEAAQgJAAgFgDg");
	this.shape_10.setTransform(2.5,-3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#663300").ss(4,1,1).p("Ah7AAQAAgzAlgkQAkgkAyAAQA0AAAkAkQAkAkAAAzQAAAzgkAkQgkAlg0AAQgyAAgkglQglgkAAgzg");
	this.shape_11.setTransform(3.6,94.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#663300").ss(1,1,1).p("Ag8AAQAAgYASgSQASgSAYAAQAZAAASASQASASAAAYQAAAZgSASQgSASgZAAQgYAAgSgSQgSgSAAgZg");
	this.shape_12.setTransform(3.6,94.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#CCCCCC").s().p("AhWBXQglgkAAgzQAAgyAlglQAkgkAyAAQA0AAAjAkQAlAlAAAyQAAAzglAkQgjAkg0ABQgygBgkgkgAgqAqQASATAYgBQAYABATgTQASgRAAgZQAAgZgSgSQgTgSgYAAQgYAAgSASQgSASAAAZQAAAZASARgAgqAqQgSgRAAgZQAAgZASgSQASgSAYAAQAYAAATASQASASAAAZQAAAZgSARQgTATgYgBQgYABgSgTgAg8AAIAAAAg");
	this.shape_13.setTransform(3.6,94.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#663300").ss(4,1,1).p("Akki6QAAACAAABQhPEMBPDNQEzB3Eeh3QBAjuhAjrQAAgCAAgBQgBg9gXgmQgog/hmAAIkGAAQhYAAgpAvQgkAoAABLIJFAA");
	this.shape_14.setTransform(3.4,82.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#663300").ss(2,1,1).p("AkgCfICmlDQBwg3BtA3IC1FTIAJAS");
	this.shape_15.setTransform(4.5,35.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#F9E006").s().p("AkkDRQhPjNBPkMIAAgDIJFAAIAMAAIAAADQBADthADsQiPA7iVAAQiTAAiag7g");
	this.shape_16.setTransform(3.4,90.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#330000").s().p("AkoDuQAAhMAlgoIgVgIICmlDQBvg3BuA3IC1FUIgPAHQgng/hnAAIkGAAQhYAAgoAvQAogvBYAAIEGAAQBnAAAnA/QAXAmABA9IgMABg");
	this.shape_17.setTransform(3.8,39.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#663300").s("#663300").ss(2,1,1).rr(-10,-16.5,20,33,10);
	this.shape_18.setTransform(3.3,122.4,1.464,1.464);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#663300").ss(4,1,1).p("AkPgDQgCgOAAgPQAAhxBRhRQBQhRBwAAQBxAABRBRQBKBJAGBkQABAKAAALQAAALgBALQAhAPAiAJQASAIAAAbQAAAsgbAPQgVAMhMAIABQDlQgBAAAAABQglAKgqAAQgYAAgZgEQhSgPg9g9Qg2g2gShEQgEgTgCgTQgBgBAAgCQgSgUgYgaQgtgwAAgtQAAgcARgTQAUgXAnAAQAfAAAQAGAESg1Qg9BhhqAqQgoAPgqgBQidAJh6hfQgJgHgHgHABQDlIBBBJIj2AGIAzhEAESgKQgFBJgqA7QgOAUgTASQgyAyhAATAkUApQgJAGgdAOQgbANAAAUQAAAmAtASQAhAMAtAAAkPgDQAJAIAIAJQAUAXAFAH");
	this.shape_19.setTransform(2.1,-32.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFCC00").s().p("AgGAFQgCgMAAgPIARAuIgPgTgAgFAKIgBgFIAPATIgOgOg");
	this.shape_20.setTransform(-24.4,-33.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#330000").s().p("AgzCPQhRgPg+g9Qg1g2gShCQgFgTgCgTIAQAOQB6BdCdgJQArABAngNQBqgqA9hjIABAVIgBAWQgFBLgqA5QgOAUgTASQgyAyhAATIgBABQglAKgoAAQgaAAgZgEgAjmgvQgFgHgVgXQAVAXAFAHg");
	this.shape_21.setTransform(2.2,-22.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFCC").s().p("Am8BQQgEAEgHADQgGACgMAAQg7AAAAgrQAAgUAMgfQAQgtAaAAQAMAAAPAMQASAOAOAHIgBBwgAm8BQQAFgFADgJQgDAJgFAFgAHDAvQgIgEgFgQIgMAAIgEhcIAEgCQAIgHAPgJQARgLAKAAQAeAAAQApQAIAVADAWQAAA8hEAAQgJgBgFgCg");
	this.shape_22.setTransform(2.5,-4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#CCCCCC").s().p("AhWBXQglgkAAgzQAAgzAlgkQAkgkAyAAQA0AAAjAkQAlAkAAAzQAAAzglAkQgjAlg0AAQgyAAgkglgAgqAqQASATAYAAQAYAAATgTQASgSAAgYQAAgYgSgTQgTgSgYAAQgYAAgSASQgSATAAAYQAAAYASASgAgqAqQgSgSAAgYQAAgYASgTQASgSAYAAQAYAAATASQASATAAAYQAAAYgSASQgTATgYAAQgYAAgSgTgAg8AAIAAAAg");
	this.shape_23.setTransform(3.6,93.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#663300").ss(4,1,1).p("Akki6QAAACAAABQhPEMBPDNQEzB3Eeh3QBAjuhAjrQAAgCAAgBQgBg9gXgmQgog/hmAAIkGAAQhYAAgpAvQgkAoAABLgAEhi6IpFAA");
	this.shape_24.setTransform(3.4,81.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#330000").s().p("AkoDuQAAhMAlgoIgVgHICmlEQBvg3BuA3IC1FUIgPAHQgng/hnAAIkGAAQhYAAgoAvQAogvBYAAIEGAAQBnAAAnA/QAXAmABA9IgMABg");
	this.shape_25.setTransform(3.8,38.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#663300").ss(4,1,1).p("AkPgDQgCgOAAgPQAAhxBRhRQBQhRBwAAQBxAABRBRQBKBJAGBkQABAKAAALQAAALgBALQAhAPAiAJQASAIAAAbQAAAsgbAPQgVAMhMAIABQDlQgBAAAAABQglAKgqAAQgYAAgZgEQhSgPg9g9Qg2g2gShEQgEgTgCgTAESg1Qg9BhhqAqQgoAPgqgBQidAJh6hfQAUAXAFAHABQDlIBBBJIj2AGIAzhEAESgKQgFBJgqA7QgOAUgTASQgyAyhAATAkPgDQgSgUgYgaQgtgwAAgtQAAgcARgTQAUgXAnAAQAfAAAQAGAkUApQgJAGgdAOQgbANAAAUQAAAmAtASQAhAMAtAAAkPgDQAJAIAIAJQgJgHgHgHQgBgBAAgCg");
	this.shape_26.setTransform(2.1,-32.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#CCCCCC").s().p("AhWBXQglgkAAgzQAAgyAlglQAkgkAyAAQA0AAAjAkQAlAlAAAyQAAAzglAkQgjAlg0AAQgyAAgkglgAgqAqQASASAYABQAYgBATgSQASgRAAgZQAAgZgSgSQgTgSgYAAQgYAAgSASQgSASAAAZQAAAZASARgAgqAqQgSgRAAgZQAAgZASgSQASgSAYAAQAYAAATASQASASAAAZQAAAZgSARQgTASgYABQgYgBgSgSgAg8AAIAAAAg");
	this.shape_27.setTransform(3.6,91.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#330000").s().p("AkoDtQAAhLAlgoIgVgHICmlEQBvg3BuA3IC1FTIgPAIQgng/hnAAIkGAAQhYAAgoAvQAogvBYAAIEGAAQBnAAAnA/QAXAmABA9IgMAAg");
	this.shape_28.setTransform(3.8,36.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18,p:{y:122.4}},{t:this.shape_17},{t:this.shape_16,p:{y:90.4}},{t:this.shape_15,p:{y:35.3}},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12,p:{y:94.2}},{t:this.shape_11,p:{y:94.3}},{t:this.shape_10},{t:this.shape_9,p:{y:9.9}},{t:this.shape_8,p:{y:38.3}},{t:this.shape_7,p:{y:8.8}},{t:this.shape_6,p:{y:38.3}},{t:this.shape_5,p:{y:-41.5}},{t:this.shape_4},{t:this.shape_3,p:{y:-25.3}},{t:this.shape_2,p:{y:-4.2}},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_18,p:{y:121.4}},{t:this.shape_25},{t:this.shape_16,p:{y:89.4}},{t:this.shape_15,p:{y:34.3}},{t:this.shape_24,p:{y:81.3}},{t:this.shape_23},{t:this.shape_11,p:{y:93.3}},{t:this.shape_12,p:{y:93.2}},{t:this.shape_22},{t:this.shape_9,p:{y:8.9}},{t:this.shape_8,p:{y:37.3}},{t:this.shape_7,p:{y:7.8}},{t:this.shape_6,p:{y:37.3}},{t:this.shape_5,p:{y:-42.5}},{t:this.shape_21},{t:this.shape_3,p:{y:-26.3}},{t:this.shape_2,p:{y:-5.2}},{t:this.shape_20},{t:this.shape_19}]},1).to({state:[{t:this.shape_18,p:{y:119.4}},{t:this.shape_28},{t:this.shape_16,p:{y:87.4}},{t:this.shape_15,p:{y:32.3}},{t:this.shape_24,p:{y:79.3}},{t:this.shape_27},{t:this.shape_11,p:{y:91.3}},{t:this.shape_12,p:{y:91.2}},{t:this.shape_22},{t:this.shape_9,p:{y:8.9}},{t:this.shape_8,p:{y:37.3}},{t:this.shape_7,p:{y:7.8}},{t:this.shape_6,p:{y:37.3}},{t:this.shape_5,p:{y:-42.5}},{t:this.shape_21},{t:this.shape_3,p:{y:-26.3}},{t:this.shape_2,p:{y:-5.2}},{t:this.shape_20},{t:this.shape_26}]},1).wait(4));

	// 图层 2
	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#663300").ss(4,1,1).p("AkTlzQgEgOAAgQQAAhNBQg3QBQg2BxAAQBwAABQA2QBPA3AABNQAAAHAAAHAElBbQBpBnBWhvQAAgMAAgNQAAhggchWQgjhphOhXQglgpgpgeQgDgCgDgCQhxhQiOAAQidAAh6BkQgeAZgcAeQhYBighB6IAAABICiA8IAQhjAEBiGIALBKICsg8AFKEvQgEBnhFBoQhwBOiNAAQicAAh5hiQgBgBgCgCQhHhAANh4IAWjYQgFAdgRAYQgQAWgcgIQg7gTgkg0QgbhCAuhwAElBbIAlDUAEMg8IAZCXAkkgjIgUB2IAAAEAlOEvIKYAA");
	this.shape_29.setTransform(3.2,-5.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#663300").s().p("AkNAsIgDgDQhHg+AMh4IKYAAQgDBnhGBmQhwBOiMAAQidAAh4hig");
	this.shape_30.setTransform(2.8,38.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFCC").s().p("Al6CKQg7gTgkg0QgbhCAuhwICiA8IgUB2IAAAEQgFAdgRAYQgLARgTAAQgHAAgHgDgAElBLIgZiXICsg8IAQgEQAcBWAABgIAAAZQgtA6gxAAQguAAgzgyg");
	this.shape_31.setTransform(3.2,-4.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AlPG9IAWjXIAAgEIAVh4IAQhjIgQBjIiig8IAAgBQAhh4BYhiQAcgeAegZQgEgOAAgQQAAhOBQg3QBPg2ByAAQBvAABQA2QBQA3AABOIgHAJIAGAFQApAeAlApQBOBWAjBoIgQAEIirA8IgMhKIAMBKIAZCZIAkDTgAkTjkQB5hkCeAAQCOAABwBPQhwhPiOAAQieAAh5Bkg");
	this.shape_32.setTransform(3.2,-20);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#663300").ss(4,2,0,3).p("AA7hkIAACOQAAAZgSARQgRARgYAAQgXAAgRgRQgSgRAAgZIAAiO");
	this.shape_33.setTransform(3.2,-100.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#663300").ss(4,1,1).p("ADtiQIAAgbQAAhEgwgxQgxgwhFAAIgLAAIh0AAIgYAAQhFAAgwAwQgxAxAABEIAAAfQgTgDgVAXQgMAPAAAQQAAAZAXAQQAEADAKAIQAJAIAGACIAAgBQBVAyCvgEQCjgDA8gpQAJgFAVgOQARgOADgRQAGgbgHgNQgKgQgggMQgBgBgCACIgEABIAAgCIADgBQADgBABACADtAeQALgKAQgFQAQgHAWAZQAXAZgDAoQgEApgPALQgOALgngCIgNAEIAAiFIAAg4ADtCjIAAAIQAABFgwAwQgxAwhFAAIiXAAQhFAAgwgwQgxgwAAhFIAAgIAj2AiIgsgHQgXAAgGAQQgCAGAAAbQAAArAJAUQALAbAcAAQAFAAAWgDgAj2gbIAAA9");
	this.shape_34.setTransform(3,-77.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFCC").s().p("Ak4AxQgJgUAAgpQAAgbACgGQAGgQAXAAIAsAHIAAB/IgbADQgcAAgLgbgADtg7QALgJAQgGQAQgGAWAZQAXAZgDAmQgEApgPALQgOALgngCIgNAEg");
	this.shape_35.setTransform(3,-68.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#330000").s().p("AhLC3QhFgBgwgwQgxgwAAhFIAAgHIAAiAIAAg/IAAgBQBVA1CvgFQCjgEA8gqIAAA6IAACEIAAAHQAABFgwAwQgxAwhFABg");
	this.shape_36.setTransform(2.5,-61.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#F9E006").s().p("AjxCBIAAABQgHgCgJgIIgNgLQgYgQAAgZQAAgQANgPQAUgXAUADIAAgdQAAhEAwgxQAwgwBFAAIAZAAIB0AAIALAAQBFAAAwAwQAwAxAABEIAAAZIAAACIAEgBQABgBAAAAQABAAAAAAQABAAAAAAQABAAAAAAQAgAMAJAQQAIANgGAbQgEARgRAOIgeATQg8AqiiAEIgXABQifAAhOgxgAgzghQAAAZARAPQARARAXAAQAYAAARgRQASgPAAgZIAAiQIAACQQAAAZgSAPQgRARgYAAQgXAAgRgRQgRgPAAgZIAAiQIAACQg");
	this.shape_37.setTransform(2.6,-93);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#663300").ss(4,1,1).p("AA4BeQgqAPgugRQgvgRgYgnQgYgkAOgnQAOgnArgPQArgOAtARQAwAQAXAnQAYAlgNAnQgOAngsAOg");
	this.shape_38.setTransform(-38.9,-45.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AggBcQgvgRgYgnQgYgkAOgnQAOgnArgPQArgOAtARQAwAQAXAnQAYAlgNAnQgOAngsAOQgTAHgVAAQgWAAgagJg");
	this.shape_39.setTransform(-38.9,-45.3);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#663300").ss(4,1,1).p("ABoAkQAYgkgOgnQgOgngrgPQgrgOgtARQgwAQgXAnQgZAlAOAnQAOAnArAOQArAPAtgRQAwgRAYgng");
	this.shape_40.setTransform(45.4,-45.3);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("Ag4BeQgrgOgOgnQgOgnAZglQAXgnAwgQQAtgRArAOQArAPAOAnQAOAngYAkQgYAngwARQgZAJgWAAQgVAAgUgHg");
	this.shape_41.setTransform(45.4,-45.3);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AlPG9IAWjXIAAgEIAVh4IAQhkIgQBkIiig8IAAgBQAhh4BYhiQAcgfAegYQB5hkCeAAQCOAABwBQQhwhQiOAAQieAAh5BkQgEgOAAgQQAAhOBQg3QBPg2ByAAQBvAABQA2QBQA3AABOIgHAKIAGAEQApAeAlApQBOBWAjBoIgQAEIirA8IgMhLIAMBLIAZCZIAkDTg");
	this.shape_42.setTransform(3.2,-21);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#663300").ss(4,1,1).p("ADtiQIAAgbQAAhEgwgxQgxgwhFAAIiXAAQhFAAgwAwQgxAxAABEIAAAfQgTgDgVAXQgMAPAAAQQAAAZAXAQQAEADAKAIQAJAIAGACIAAgBQBVAyCvgEQCjgDA8gpQAJgFAVgOQARgOADgRQAGgbgHgNQgKgQgggMADtiQIADgBQADgBABACQgBgBgCACIgEABgADtAeIAAg4ADtAeQALgKAQgFQAQgHAWAZQAXAZgDAoQgEApgPALQgOALgngCIgNAEAj2CjIAAAIQAABFAxAwQAwAwBFAAICXAAQBFAAAxgwQAwgwAAhFIAAgIIAAiFAj2AiIgsgHQgXAAgGAQQgCAGAAAbQAAArAJAVQALAaAcAAQAFAAAWgDAj2gbIAAA9IAACB");
	this.shape_43.setTransform(3,-78.1);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#330000").s().p("AhLC3QhFgBgwgwQgxgwAAhFIAAgIIAAh/IAAg/IAAgBQBVA1CvgFQCjgEA8gqIAAA6IAACDIAAAIQAABFgwAwQgxAwhFABg");
	this.shape_44.setTransform(2.5,-62.7);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#F9E006").s().p("AjxCBIAAABQgHgCgJgIIgNgLQgYgQAAgZQAAgQANgPQAUgXAUADIAAgdQAAhEAwgxQAwgwBFAAICYAAQBFAAAwAwQAwAxAABEIAAAZIAAACIAEgBQABgBAAAAQABAAAAAAQABAAAAAAQABAAAAAAQAgAMAJAQQAIANgGAbQgEARgRAOIgeATQg8AqiiAEIgXABQifAAhOgxgAgzgXQAAAXARARQARARAXAAQAYAAARgRQASgRAAgXIAAiQIAACQQAAAXgSARQgRARgYAAQgXAAgRgRQgRgRAAgXIAAiQIAACQg");
	this.shape_45.setTransform(2.6,-94);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_41,p:{y:-45.3}},{t:this.shape_40,p:{y:-45.3}},{t:this.shape_39,p:{y:-45.3}},{t:this.shape_38,p:{y:-45.3}},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35,p:{y:-68.1}},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31,p:{y:-4.1}},{t:this.shape_30,p:{y:38.9}},{t:this.shape_29,p:{y:-5.7}}]}).to({state:[{t:this.shape_41,p:{y:-46.3}},{t:this.shape_40,p:{y:-46.3}},{t:this.shape_39,p:{y:-46.3}},{t:this.shape_38,p:{y:-46.3}},{t:this.shape_45},{t:this.shape_35,p:{y:-69.1}},{t:this.shape_44},{t:this.shape_43},{t:this.shape_33},{t:this.shape_42},{t:this.shape_31,p:{y:-5.1}},{t:this.shape_30,p:{y:37.9}},{t:this.shape_29,p:{y:-6.7}}]},2).to({state:[{t:this.shape_41,p:{y:-46.3}},{t:this.shape_40,p:{y:-46.3}},{t:this.shape_39,p:{y:-46.3}},{t:this.shape_38,p:{y:-46.3}},{t:this.shape_45},{t:this.shape_35,p:{y:-69.1}},{t:this.shape_44},{t:this.shape_43},{t:this.shape_33},{t:this.shape_42},{t:this.shape_31,p:{y:-5.1}},{t:this.shape_30,p:{y:37.9}},{t:this.shape_29,p:{y:-6.7}}]},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-52.8,-112.8,112.2,260.3);


(lib.元件36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_8 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(8).call(this.frame_8).wait(1));

	// 图层 1
	this.instance = new lib.元件37();
	this.instance.setTransform(77.8,77.8,0.435,0.435,0,0,0,77.8,77.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.1,scaleY:1.1},4,cjs.Ease.get(1)).to({scaleX:1,scaleY:1},4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(43.9,43.9,67.7,67.7);


(lib.元件34 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.元件41();
	this.instance.setTransform(38.6,39.5,1,1,0,0,0,38.6,39.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,77.3,79);


(lib.元件33 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.元件40();
	this.instance.setTransform(37.7,38.3,1,1,0,0,0,37.7,38.3);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,75.5,76.6);


(lib.元件32 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.元件39();
	this.instance.setTransform(35.9,37.1,1,1,0,0,0,35.9,37.1);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,71.9,74.3);


(lib.元件31 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.元件38();
	this.instance.setTransform(40,37.6,1,1,0,0,0,40,37.6);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,80,75.4);


(lib.元件26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.元件27();
	this.instance.setTransform(244.9,23.4,1,1,0,0,0,274.8,56.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:1437},199).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31.9,-34.7,553.7,116.3);


(lib.元件24副本 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.元件25();
	this.instance.setTransform(-427.3,173.2,1,1,0,0,0,445.6,173.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:1102.2},799).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-874.9,-2,895.2,350.5);


(lib.元件24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.元件25();
	this.instance.setTransform(-427.3,173.2,1,1,0,0,0,445.6,173.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:1119.7},409).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-874.9,-2,895.2,350.5);


(lib.元件22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.元件23();
	this.instance.setTransform(-215.1,9.8,1,1,0,0,0,55.7,9.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:143.7},9).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-272.8,-2,1038.4,23.7);


(lib.元件20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#663300").ss(6,1,1).p("AAvAbQghhJgzAbQgFADgEAD");
	this.shape.setTransform(19.4,45.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#663300").ss(4,1,1).p("AGrksQABgEACgFQBlj6kFiwQjvh4jTB6IgCgDQgDgBgDgCQiRhhhAAlQAAAAAAAAQhQAqCECPIgXAgIAqAiIADAFQgCgBgCAAQgVA/gTA7QgQAugBBAQAAAHAAAHQAAABAAAAIAAABQAJAEAHAHQAKAKAPAhAGrksIgBAAQmXg6lvkFIADAFAg3hPQAQAAAQABQBOACBOgGQANgBAMgCIABAAQAEgBAEgBQAOgCAOgDIABAAQAmgKAggOQAIgEAIgDQACgCACAAIAAgBQAPgIAOgJQAEgEAFgDQATgPAQgRQArgvAZhHAgHmLQBCASAFA3QAAABgBAaQAAAQgGAQQgFAKgGALQgRAagqAMQgSAAglgMAlHogQAAgCABgCAhOlEIANgnQAAgIAFgFQASgSAfgCAlDofQDzCTAOAMQAHAGgBACAh8EtIhHgDIgCgDIBJjuIkNjIIAFgJIA1hVIAAgBIAAAAIEYCfIANAHAmJibQgDADgCABQgDACgDAAQgVAAgQgTQgQgSAAgVQAAghAIgaQALgkAYAAQAOAAAMAEQACABACAAIAAABABIi1IDHAuIALACAA5kHIAMBOADChiIhWgXAD7DEIAIgCAD7DEIAUAhIA0gnIiZkIAEPDlIAVBfABmFIIAKAnIAvC5IAvCZIhWASIgzhmIBahFAh2ExIAkgxIAGgDIFHg5ADOLBIAHAYIhwBRIAThXAA0JzIick1");
	this.shape_1.setTransform(45.8,81.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#663300").s().p("Ai/hcIgNgMIAkgyIAFgCIFHg6IAUAhIAVBgIAAAFIi0AlIgKgnIAKAnIAwC3IhYBGIgSAFg");
	this.shape_2.setTransform(54.5,122.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFCC").s().p("ACjIVIBahGIAvCZIhWASgABFinIgggBIkWifIgBAAIAAABIg1BWIgFgEIgFAFQgCABgDAAQgVAAgQgSQgQgTAAgVQAAghAIgZQALglAXAAQAPAAAMAEIADABIABABIAAgBIAAgBIAAgNQABhBAPgtIAoh7IAFABQDxCTANAMQAIAHgCACQgFAEAAAIIgNAnIANgnQAAgIAFgEQASgTAggCIAEABQBDASAFA3IAAAcQgBAPgGAQIANBOIADAEIDGAuIgEAUQghAOgmAJIAAAAIgcAGIgJABIAAAAIgZADQg6AFg6AAIgqgBgAEfi7IhWgXgABOklQAsgMARgaQAHgLAEgKQgEAKgHALQgRAagsAMQgRAAgmgMQAmAMARAAgAkTl2QAKAKAPAiQgPgigKgKQgGgHgJgEQAJAEAGAHgAh6mhIgBgCQgYg0gigBIgBAAIAAAAQgLAAgNAGIAAABIgBAAIAAAAIAAAAIgBABIgJAFIAJgFIABgBIAAAAIAAAAIABAAIAAgBQANgGALAAIAAAAIABAAQAiABAYA0IABACIAAAAg");
	this.shape_3.setTransform(36.5,90);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhYEMIhHgDIgCgDIBJjvIkNjIIAEgIIA1hVIABgBIEYCeIAeABQBPADBPgGIAZgEIAAAAIAJgBIACANICZEIIgzAnIgVghIAJgCIgJACIlGA5IgGADIgkAxgAgGhpIgNgIg");
	this.shape_4.setTransform(42.3,84.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#330000").s().p("AD9DvIgLgCIjHguIgDgFIgMhNQAGgRAAgPIABgcQgFg0hCgTIgEAAQgfACgSASQABgCgHgHQgOgMjziSIgDgFIgqgiIAXggIgDgGQFxEEGVA6IABAAQgZBGgrAwQgQARgTAOIgJAHIgdASIAAABg");
	this.shape_5.setTransform(48.7,43.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F9E006").s().p("Alrg/IADAFQiEiPBQgqIAAAAQBAglCRBhIAGADIACADQDTh6DvB4QEFCwhlD4IgEAJQmXg6lvkDg");
	this.shape_6.setTransform(47.3,25.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(40));

	// 图层 2
	this.instance = new lib.元件21();
	this.instance.setTransform(58,110.3,1,1,0,0,0,0.8,13.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:36.7,x:62.3,y:108.4},19,cjs.Ease.get(1)).wait(1).to({regX:23.2,regY:15.3,rotation:36.5,x:79.4,y:122.8},0).wait(1).to({rotation:35.8,x:79.5,y:122.6},0).wait(1).to({rotation:34.6,x:79.6,y:122.4},0).wait(1).to({rotation:33.2,x:79.8,y:122},0).wait(1).to({rotation:31.4,x:80,y:121.5},0).wait(1).to({rotation:29.5,x:80.2,y:120.9},0).wait(1).to({rotation:27.3,x:80.4,y:120.4},0).wait(1).to({rotation:25,x:80.6,y:119.7},0).wait(1).to({rotation:22.5,x:80.8,y:119},0).wait(1).to({rotation:20,y:118.2},0).wait(1).to({rotation:17.4,x:81,y:117.4},0).wait(1).to({rotation:14.8,y:116.6},0).wait(1).to({rotation:12.2,x:80.9,y:115.7},0).wait(1).to({rotation:9.7,y:114.9},0).wait(1).to({rotation:7.3,x:80.8,y:114.1},0).wait(1).to({rotation:5.1,x:80.7,y:113.4},0).wait(1).to({rotation:3.2,x:80.6,y:112.8},0).wait(1).to({rotation:1.5,x:80.5,y:112.2},0).wait(1).to({rotation:0.4,x:80.4,y:111.8},0).wait(1).to({regX:0.8,regY:13.9,rotation:0,x:58,y:110.3},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2,-2,107.6,166.2);


(lib.元件17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_15 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(15).call(this.frame_15).wait(1));

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#990000").s().p("AgHAHQABgFgDgEQANgJAHgGQgBAFgFAJQgFAJgCADQgEAHgEABIADgKg");
	this.shape.setTransform(28,178);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#AF361D").s().p("Ag1B1QgOgqgHgXQgMgrAcgdQAGgHAOgGIAZgKQAJgDAKgKIAQgNQAAgGADgHQAEgLAGgGIAHgLQAHgJAPAEQASAEgEAXQAAABgKAPIgNASQgFAGgCAAQgDABgDgCQABALgDAbQgCAPgNAPIAAABIgBAEIgBABQABAEgGAKQgFAJgGAGIgGAIQgCADgFABQgBgBAEgLIAAgMIgDABQgcARgIAKQgHAHAAAUQgBAKABAKIgCAAIgCAAgAAAAnQABAFgBAGIgBAKQACgCAEgGQAEgEAFgKQAFgJABgFQgHAGgNAJg");
	this.shape_1.setTransform(27.1,173.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#663300").s().p("AgHBCQgXgDgMgVQgOgWAEgaQAEgcASgRQATgSAUAEQAWADANAVQANAWgEAZQgEAcgSASQgQAPgQAAIgGgBg");
	this.shape_2.setTransform(27.2,129.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#663300").ss(4,1,1).p("AjDkfIgCgDQgDgCgCgBQiShig/AlQgBABAAAAQhPAqCDCOIgeAxIAxASIADAEQGlBjAEBVQAYgSAYgCQBRAAAHA3QAAABAAABQgGA7goAsQgJAJgKAJQg2ATgegcAGbCQQACgFABgFQBlj3kEixQjvh3jTB6QCTBsCFCqImijHIgNgGABLB1IAMgfAlWhjQAAgCABgBAlWhjQACAAACABAloipIAbgnAmCDfQgKgXgBgbQgCgWABgUQABhAAPgtQAUg6AUg/AmCDfQA8BiAphGQAagxgXgyIgCAAQgPABADgDQgDACgEABQgLAEgPAAQgUAAgSgHQgSgHgJgMAkPCGQgTAMgGAEAErEsQg+ArhdAPIgBAAQgMACgNABQhOAGhOgCQgbgBgbgBQhrgHhhguQhEghgWg2AErEsQAFgEAEgDQATgPARgRQArgvAYhGIgBgBIlFiYAErEsIhWgXACzDkIClAh");
	this.shape_3.setTransform(48.4,124);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgyARQgKgWgBgbQgBgVAAgUIAFAAQAJALARAHQATAIASAAQAPAAALgEIASgBIACgBQAYAzgbAvQgRAdgUAAQgbAAgjg5g");
	this.shape_4.setTransform(14.8,144.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#330000").s().p("ACpDKIgCgCQAogsAGg6IAAgDQgHg2hRgBQgYADgYARQgEhTmlhkIgDgFIgxgSIAegwIAbgoIGiDIIFFCYIABAAQgYBHgrAug");
	this.shape_5.setTransform(49.4,126.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFCC").s().p("AgKDoIg2gCQhsgHhgguQhEghgXg2QA9BiAohGQAbgxgXgyIgCAAIgDABIgCAAIAAAAIAAAAQgJAAACgDIgHADQgLAEgPAAQgUAAgTgHQgRgHgJgKIgEAAQAAhAAQgtIAnh7IAFABQGlBlADBVIgLAfIALgfQAZgSAYgCQBRAAAGA3IABACQgHA5gnAsIgTASIgCAAQgVAIgRAAIAAAAIAAAAQgZAAgRgPIgBgBIgBgBIABABIABABQARAPAZAAIAAAAIAAAAQARAAAVgIIACAAIATgSIABACICmAhQgRARgTAPIgJAHIhWgXIBWAXQg+ArheAPIAAAAIgaADQg5AFg6AAIgogBgAkMARIAZgQIgZAQgAFHCngAkMARQgCADAJAAIAAAAIAAAAIACAAIADgBIgTABIAHgDg");
	this.shape_6.setTransform(45.7,137.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F9E006").s().p("ABVBkQiFioiThsQCTBsCFCoImijFIgNgGIANAGIgbAnQiDiOBPgqIABgBQA/glCSBiIAFADIACADQDTh6DvB3QEECxhlD3IgEAJg");
	this.shape_7.setTransform(48.4,112.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#663300").ss(4,1,1).p("ABdkCIgMBfICVg7IiJgkIgCAAIhFBbIj1B2IgBAAIABACIghAIQgUAXABATQAAAMAHALQABABAAABQAHALANAKQAqAHAQgdIgihKAi9AbIBigqIhBBSQA6AvA2ATABMC8QABgLAGgJQAHgNADgIQAHgRAMglQANglAZhIQAZhJACgEAgqCoIAMgeIBijzAAWinIhxCYADojdIgCgBADojdIgBgHAAyDJQABAAABAAQACAAABABQACgCABABQAGABAMgOIDJALIgtmkAAyDJQgEAMgGALQgFAKgGAGQgGAGgIAFQgHAEgIACQgVAGgLgLQgKgIgEgPQgGgSADgGQAEgGAEgMAghCvQAEACALADQANAFAUAJQAWAHANAA");
	this.shape_8.setTransform(27.7,181.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFCC").s().p("ABPCTQgJgJgEgOQgHgTAEgFQADgGAFgMIAHgMIAQAFIAjANQAWAHAMABQgEAMgGAKQgFAKgGAHQgFAGgJAEQgHAEgKADQgHACgGAAQgLAAgIgHgAiFg3QgNgKgHgLIgBgCQgIgKAAgMQgBgVAUgXIAigJIAhBNQgMAXgeAAIgPgCg");
	this.shape_9.setTransform(16.3,192.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAaDmIgDAAQgMgBgUgGIgjgOIgPgFIgJgHIAMgeIgOgFQg3gUg5gvIBAhUIhhAtIgihKIAAgCID2h2IBEhcIABABIgLBfICVg7IACAAIAtGkIjKgKQACgLAFgJQAIgNACgJQAIgQALglIAmhwIAchKIgcBKIgmBwQgLAlgIAQQgCAJgIANQgFAJgCALQgMAOgFgCQAAAAgBAAQAAAAAAAAQgBABAAAAQgBAAAAAAIgDAAgAg4CnIBijzgAh2ALIBziVgABCjlICKAkIiVA7gADMjBg");
	this.shape_10.setTransform(30.3,178.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#663300").ss(4,1,1).p("Ah9i9ID3gUIAEAAAB3AlIAECWIAAAXIiJAAAAeCWIBdAlAAeCWIAAACIgWAcIAJAEAhKAoIBRgBIBwgCIAHjtAgLAhIgOhSAg2CZIABAAIA9AbIgWAeIhjgBIA7g4IABgBIgVhwAAHAnIAXBvAhyilIAoDN");
	this.shape_11.setTransform(38.2,212.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#663300").s().p("AhxhQIgMgYID3gTIAEAIIgGDsIhxACIhRABgAgLB2IgOhVg");
	this.shape_12.setTransform(38.2,204.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#663300").ss(4,1,1).p("AAHAYIgCgKIAAgBIgBgCQgEgOgGgUAAFANIgBgCIAAAA");
	this.shape_13.setTransform(37,205);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("Ah5AbIBQg2IAAABIAzAaIAhgbIAAgBIBPAiIgIAXg");
	this.shape_14.setTransform(26.7,231);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(16));

	// 图层 3
	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#663300").ss(4,1,1).p("ABsAKIillHIggE9IiKhHIDXGGIDwgEIgTm5g");
	this.shape_15.setTransform(37.3,35);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#F9E006").s().p("AjjhIICKBIIAgk9IClFHIBliJIATG5IjwAFg");
	this.shape_16.setTransform(37.3,35);

	this.instance = new lib.元件18();
	this.instance.setTransform(37.4,35,1,1,0,0,0,22.9,31.9);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15}]}).to({state:[]},3).to({state:[{t:this.shape_16},{t:this.shape_15}]},2).to({state:[]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},7).to({state:[]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(7).to({_off:false},0).to({alpha:0},7).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2,1.1,96.7,234.9);


(lib.元件15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 元件 19  复制 2
	this.instance = new lib.元件19();
	this.instance.setTransform(209.6,41.7,0.408,0.408,0,0,0,5.7,6.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).to({regX:5.6,scaleX:1,scaleY:1},5).to({regX:5.7,scaleX:0.41,scaleY:0.41},8).wait(1).to({regX:5.6,scaleX:1,scaleY:1},5).to({regX:5.7,scaleX:0.41,scaleY:0.41},11).to({_off:true},1).wait(5));

	// 元件 19 复制
	this.instance_1 = new lib.元件19();
	this.instance_1.setTransform(83,69.2,0.408,0.408,0,0,0,5.7,6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:5.6,scaleX:1,scaleY:1},5).to({regX:5.7,scaleX:0.41,scaleY:0.41},8).wait(1).to({regX:5.6,scaleX:1,scaleY:1},5).to({regX:5.7,scaleX:0.41,scaleY:0.41},8).wait(1).to({regX:5.6,scaleX:1,scaleY:1},5).to({regX:5.7,scaleX:0.41,scaleY:0.41},11).wait(1));

	// 元件 19
	this.instance_2 = new lib.元件19();
	this.instance_2.setTransform(141.1,4,1,1,0,0,0,5.6,6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX:5.7,scaleX:0.41,scaleY:0.41},5).wait(1).to({regX:5.6,scaleX:0.55,scaleY:0.55},0).wait(1).to({scaleX:0.67,scaleY:0.67,y:4.1},0).wait(1).to({scaleX:0.77,scaleY:0.77},0).wait(1).to({scaleX:0.85,scaleY:0.85,x:141},0).wait(1).to({scaleX:0.92,scaleY:0.92,x:141.1,y:4},0).wait(1).to({scaleX:0.96,scaleY:0.96},0).wait(1).to({scaleX:0.99,scaleY:0.99,y:4.1},0).wait(1).to({scaleX:1,scaleY:1,y:4},0).wait(1).to({regX:5.7,scaleX:0.41,scaleY:0.41},5).wait(1).to({regX:5.6,scaleX:0.55,scaleY:0.55},0).wait(1).to({scaleX:0.67,scaleY:0.67,y:4.1},0).wait(1).to({scaleX:0.77,scaleY:0.77},0).wait(1).to({scaleX:0.85,scaleY:0.85,x:141},0).wait(1).to({scaleX:0.92,scaleY:0.92,x:141.1,y:4},0).wait(1).to({scaleX:0.96,scaleY:0.96},0).wait(1).to({scaleX:0.99,scaleY:0.99,y:4.1},0).wait(1).to({scaleX:1,scaleY:1,y:4},0).wait(1).to({regX:5.7,scaleX:0.41,scaleY:0.41},5).to({regX:5.6,scaleX:1,scaleY:1},11).wait(1));

	// 图层 6
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#663300").ss(4,1,1).p("AgRgbQgCgXATgXQAYgcArgNQArgNAjAKQAkALAIAbQAIAbgYAcQgYAbgrANQgrAMgkgLQgQgEgKgIQhkA4g1A8QgrAIAFgkQBChMBpgs");
	this.shape.setTransform(86.1,-7.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F9E006").s().p("Ai+BdQBChMBpgsIACAAQgCgXATgXQAYgcArgNQArgNAjAKQAkALAIAbQAIAbgYAcQgYAbgrANQgrAMgkgLQgQgEgKgIQhkA4g1A8IgNABQgdAAAEgdg");
	this.shape_1.setTransform(86.1,-7.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(45));

	// 图层 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#663300").ss(4,1,1).p("ANrBEQg7gvkYBYQi/Axg+gdQg9gdgCgBQhVg1hEAMIgMAlANrBEIAAAAIAtBNIBvC+QABADACADAgpGDIBfkfIgBAAQg6gUAwh+QALg+CcgGQEQgHDbAYQB7AMAUA4QApBLgKAWAQGCcIAjAEQAWAxgGBRQgFBQgUAPQAdBCAABDQhQAdmQATQkggJAHgcIrIAAQjugFgaknQgCgLAAgKQiAhwkAArQhXAFBLhsQBLhrCpgXQCogWAlhhQAHgWAHgVQgEAAgDABQgBAAgBAAQgMACgHAAQgPABgJgCQgCABgCAAIgDgBQgTAAgNgpQgNgpAAg6QAAg7ANgpQANgpATAAIAAAAQAEAAADACQAUgCAXADQABAAABAAQANAHAKAfQANApAAA7QAAA6gNApQgFAPgHALQgGAKgFAEAQGCcQABAGACAGQAVBNgTBbQAAACgBADQANAWAJAWAE+HPQAojuDVg5QEvhWCYE5AOaCQIBsAMAjinLQgGhGBCgBAkeosQAagNAiAJQAgAIAcAWQAIAHAHAHQA7A5ABBhQgsAVgpgIQgIg1gZglQgIgMgJgIQgPgNgTgEQgIgCgIAAQgHgBgEgCQgMgIgFgGQgHgJAAgRQAAgKAGgJQAFgIAJgGQADgBACgBQgBgBgBAAIAAgEAGWGLIgJAXApLkAIAlgJQA8hUAaiOIgCgBQAAAAABAAQBPhgBiAfAp/oVQAOAGALAhQANApAAA7QAAA6gNApQgFAPgHALQgHALgGAEAnskBQgHAVgGAXAl2nvQg8BAgoB2ApSoUQA5AGBHAiAvlA8QAwg4A6gPAkEncQgGAXgOAdQiAELgzFwQgNCgBrAVIH4AAApZjVQhEDSAPDTAGqFeQA/h2CWgY");
	this.shape_2.setTransform(108.6,56.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFCC").s().p("AAACMQgRAAgNgqQgOgpAAg5QAAg5AOgpQANgpARAAIAAAAIAHABQAOAHALAhQANApgBA5QABA5gNApQgGAQgGALQgHAKgHAEIgDABg");
	this.shape_3.setTransform(43.9,17.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#3E1F00").s().p("AgnFFIhAgeQhUg2hFANIgLAlIgCAEQg9gUAyh/QALg+CcgHQEOgHDcAYQB7AMAUA5QAoBNgJAWQg8gvkXBYQh5AehFAAQgmAAgXgKgAn1iZQgHg1gZglQgIgMgKgJQgGhFBDgBIAPANQA6A6ABBgQggAQgfAAQgLAAgLgCg");
	this.shape_4.setTransform(141.1,37.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#CCCCCC").s().p("AMtGuIABgEQAJgrAAgnQAAgtgLgpIAggIQAWAxgGBQQgFBRgUAPQgJgXgNgWgAMqGpIhvi+IACgCIBsANIADAMQALApAAAtQAAAngJArgAtcilQAGgEAHgKQAHgLAFgQQANgpAAg6QAAg6gNgpQgLghgOgHQAUgCAXADIACAAQANAIAKAfQANApAAA6QAAA6gNApQgFAQgHALQgGAJgFAEIgCAAQgMACgHAAIgJABQgJAAgGgCgAsvimQAFgEAGgJQAHgLAFgQQANgpAAg6QAAg6gNgpQgKgfgNgIQA5AHBHAiIACAAQgaCPg8BTIglAJIgHABIAAAAgAnhmCQgIgCgIAAQgHgCgEgCQgMgHgFgGQgHgKAAgRQAAgKAGgJQAFgIAJgFIAFgDQAagMAiAJQAgAHAcAXQhCABAGBFQgPgMgTgEgAsvm7IAAAAg");
	this.shape_5.setTransform(130.7,47.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]}).wait(45));

	// 图层 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AFEIRIrIAAQjugFgaknIgCgVQiAhwkAArQhXAFBLhsQBLhrCpgXQCogWAlhhIAOgrIAlgJQA8hUAaiOIgBgBQBPhgBiAfIACABIgFACQgJAGgFAIQgGAJAAAKQAAARAHAJQAFAGAMAIQAEACAHABQAIAAAIACQgGAXgOAdQiAELgzFwQgNCgBrAVIFEAAIAAgFIBfkfIgBAAIACgFIAMglQBEgMBVA1IA/AeQA+AdC/gxQEYhYA7AvIAAAAICcELIADAGQANAWAJAWQAdBCAABDQhQAdmQATQkggJAHgcg");
	mask.setTransform(108.6,56.6);

	// 图层 3
	this.instance_3 = new lib.元件16();
	this.instance_3.setTransform(-35.9,57.5,1,1,0,0,0,60,129.7);
	this.instance_3.compositeOperation = "lighter";

	this.instance_3.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({regX:41.1,x:-54.3},0).wait(1).to({x:-52.8},0).wait(1).to({x:-50.4},0).wait(1).to({x:-47},0).wait(1).to({x:-42.7},0).wait(1).to({x:-37.3},0).wait(1).to({x:-31},0).wait(1).to({x:-23.8},0).wait(1).to({x:-15.6},0).wait(1).to({x:-6.4},0).wait(1).to({x:3.8},0).wait(1).to({x:14.9},0).wait(1).to({x:27},0).wait(1).to({x:40.1},0).wait(1).to({x:54.1},0).wait(1).to({x:69.1},0).wait(1).to({x:85.1},0).wait(1).to({x:102},0).wait(1).to({x:119.9},0).wait(1).to({x:138.8},0).wait(1).to({x:158.6},0).wait(1).to({x:179.4},0).wait(1).to({x:201.2},0).wait(1).to({regX:60,x:242.9},0).wait(21));

	// 图层 4
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F9E006").s().p("AFEIRIrIAAQjugFgaknIgCgVQiAhwkAArQhXAFBLhsQBLhrCpgXQCogWAlhhIAOgrIAlgJQA8hUAaiOIgBgBQBPhgBiAfIACABIgFACQgJAGgFAIQgGAJAAAKQAAARAHAJQAFAGAMAIQAEACAHABQAIAAAIACQgGAXgOAdQiAELgzFwQgNCgBrAVIFEAAIAAgFIBfkfIgBAAIACgFIAMglQBEgMBVA1IA/AeQA+AdC/gxQEYhYA7AvIAAAAICcELIADAGQANAWAJAWQAdBCAABDQhQAdmQATQkggJAHgcg");
	this.shape_6.setTransform(108.6,56.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(45));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2,-22,221.2,137.3);


(lib.元件13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		//this.stop();
		
		canvas.addEventListener("touchstart", fl_MouseClickHandler,true);
		//canvas.addEventListener("mouseup", fl_MouseClickHandler,true);
		//canvas.removeEventListener("mouseup", fl_MouseClickHandler,true);
		var _root=this;
		
		function fl_MouseClickHandler(e)
		{
			//阻止网页默认动作（即网页滚动）
			e.preventDefault();
			/*
			if(!touchBn)
			{
				console.log('return touchstart');
				return;
			}
			*/
			//console.log('here'+e.target);
			_root.play();
			playSound0();
			
			
			//console.log(fl_MouseClickHandler);
		}
	}
	this.frame_19 = function() {
		this.stop();
	}
	this.frame_30 = function() {
		this.stop();
	}
	this.frame_64 = function() {
		this.stop();
	}
	this.frame_76 = function() {
		this.stop();
	}
	this.frame_124 = function() {
		this.stop();
	}
	this.frame_151 = function() {
		this.stop();
		console.log('run here')
		canvas.removeEventListener("touchstart", this.fl_MouseClickHandler,true);
		this.parent.gotoAndStop(1);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(19).call(this.frame_19).wait(11).call(this.frame_30).wait(34).call(this.frame_64).wait(12).call(this.frame_76).wait(48).call(this.frame_124).wait(27).call(this.frame_151).wait(1));

	// 图层 2
	this.instance = new lib.元件79();
	this.instance.setTransform(242,568.4,1,1,0,0,0,34,18.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(152));

	// 图层 4
	this.instance_1 = new lib.元件10();
	this.instance_1.setTransform(241.3,353.9,1,1,90,0,0,197.3,223.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({alpha:0},9).to({_off:true},1).wait(22).to({_off:false,scaleX:1.44,scaleY:1.44,y:233.9},0).to({alpha:1},7).to({alpha:0},5).to({_off:true},1).wait(32).to({_off:false},0).to({alpha:1},6).to({alpha:0},5).to({_off:true},1).wait(12).to({_off:false},0).to({alpha:1},7).to({alpha:0},5).to({_off:true},1).wait(21).to({_off:false},0).to({alpha:1},15,cjs.Ease.get(-1)).to({_off:true},1).wait(1));

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#663300").ss(4,1,1).p("AgmAAQAAgUALgQQAMgQAPAAQAQAAAMAQQALAQAAAUQAAAVgLAQQgMAQgQAAQgPAAgMgQQgLgQAAgVg");
	this.shape.setTransform(366.7,389.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgbAlQgLgPAAgWQAAgUALgQQAMgPAPAAQAQAAAMAPQALAQAAAUQAAAWgLAPQgMAPgQAAQgPAAgMgPg");
	this.shape_1.setTransform(366.7,389.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#990000").s().p("AgGAKQAAgGADgJQADgLAAgEQACAJAFAPQgGACgBAFIgFAKIgBgLg");
	this.shape_2.setTransform(393.1,432.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#AF361D").s().p("AguB9IANgOQANgQAAgJQAAgNgKgfIgBgDIgIAIIgGAMQgDgFgBgFIAAgJQAAgJACgKQACgLAEgDIAAgBIACgEIAAAAQAAgSALgOQAPgWAIgIQgEgBgBgCQgCgCAAgIIACgWQADgRABgBQAKgUAPAIQAOAHAAAMIgBANQAAAJgEAKQgDAIgEAEIADAUQADAPAEAJIANAWQAGAOAAAJQAAAqglAYIg5AjQAAAAgBAAQAAgBAAAAQAAAAgBgBQAAAAAAgBgAgrAXQgDALAAAGIABALIAEgKQADgFAGgCQgFgQgBgJQgDAEgCAKg");
	this.shape_3.setTransform(397.2,429.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#663300").s().p("AgHBCQgXgDgMgVQgOgWAEgaQAEgcASgRQATgSAUAEQAWADANAVQANAWgEAZQgEAcgSASQgQAPgQAAIgGgBg");
	this.shape_4.setTransform(380.7,377.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#663300").ss(4,1,1).p("AjDp1IgCgDQgDgCgCgBQiShig/AlQgBABAAAAQhPAqCDCOIAbgnIgNgGAgmAXQgbgBgbgBQhrgHhhgsQhEghgWg2QgKgXgBgbQgCgWABgUQABhAAPgtQAUg8AUg/QAAgCABgBIADAEQGlBlAEBVQAYgSAYgCQBRAAAHA3QAAABAAABQgGA7goAsQgJAJgKAJQg2ATgegcAlWm5QACAAACABAlVm8IgxgSIAegxABLjfIAMgfAGbjEIgBgBIlFiaImijHAGbjEQACgFABgFQBlj5kEixQjvh3jTB6QCTBsCFCqAErgoQAFgEAEgDQATgPARgRAgmAXQBOACBOgGQANgBAMgCIABAAQBdgPA+gpIhWgXACIBWQABAEAfBHQAgBIAQAkQAQAjAGARQAEAIADAOQACALABAAIBQg8IBQg8IkIjXAA5BuQATA1AqCBQATA6AOAqIAAABQAGAUAFAQQABAAAAAAIAAADAD0GGQAAgBABAAQABgCACgBQAAgBABgBQAGgDgHgbAD0GGQAFAMACALQADALAAAJQAAAIgDAJQgCAIgGAIQgLASgQAAQgMAAgOgHQgQgJgCgHQgBgHgFgMIgDgNQAFgCAKgFQANgFAWgJQAVgKAKgIgAAkIYIBTgBIBxgCIg1CXIhQglIAAABIghAdIAIADAA6GiIgWB2IgVBwIgCABIhOA4IBhABABlIRIAShUABCKlIgiAdICKABIAJgXAB3IXIgUBwACTGJIhaAVIhRATADoIVIBgjvAgcAiIAcBfIBrhoAANKJIABABIA0AbAgdGxIgJmaACzhwIClAhQArgvAYhG");
	this.shape_5.setTransform(401.9,405.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#663300").s().p("Ah7ADIgBgDIBbgVIADAAIAMAiIAAABIABACIAAgDIADANIAGAUQABAGAPAJQANAHANAAQAPAAAMgSQAFgHADgJQADgIAAgJQAAgJgDgJQgDgLgFgLIACgCIACgDIACgCQAFgCgHgbIBRg9IhhDuIhvACIhTABgAhQBxIAShTg");
	this.shape_6.setTransform(420.2,447.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AiJFYIAigdIgiAdIhjgBIBQg4IABABIA0AbIAIADIgIgDIAhgdIAAgBIBOAlIgIAXgAjIBHIgJmYQBPACBOgGIAagDIAAAAIAAADIEHDXIhQA8IhQA8IgEgLQgDgOgDgIIgXg0IgthsIgghLIAgBLIAtBsIAXA0QADAIADAOIAEALQAHAZgGADIgBACIgDADIgCABQgJAIgVAKIgjAOIgNAHIgBAAIgLgkIAAgBIghhiQgqiBgUg1QAUA1AqCBIAhBiIgEABIhbAVIhSATgAirjnIBshoIhsBoIgchfIAcBfgAgSAeIAAAAg");
	this.shape_7.setTransform(419.1,441.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#330000").s().p("ACpDKIgCgCQAogsAGg6IAAgCQgHg3hRgBQgYACgYASQgEhSmlhmIgDgEIgxgSIAegxIAbgnIGiDHIFFCYIABABQgYBGgrAvg");
	this.shape_8.setTransform(402.9,374.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFCC").s().p("AB/IOIAUhwIgUBwIAAABIghAdIg0gbIABgCIAVhwIBTgBIBxgCIg1CXgADaFkQgQgJgCgHIgGgTIgDgNIAPgHIAjgOQAVgKAKgIQAFAMACALQADALAAAJQAAAIgDAJQgCAIgGAIQgLASgQAAQgMAAgOgHgAgKhgIg2gCQhrgHhhguQhEghgWg2QgKgXgBgbQgCgWABgUQABhAAPgtIAoh7IAEABQGlBlAEBVQAYgSAYgCQBRAAAHA3IAAACQgGA7goAsIgTASIgCAAQgUAHgRAAIgBAAIAAAAQgZAAgRgPIgBAAIgBgBIABABIABAAQARAPAZAAIAAAAIABAAQARAAAUgHIACAAIATgSIACACIClAhQgRARgTAPIgJAHIhWgXIBWAXQg+ArhdAPIgBAAIgZADQg6AEg6AAIgoAAgABnlYIAMgfgAFHihg");
	this.shape_9.setTransform(399.1,417.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F9E006").s().p("ABVBkQiFioiThsQDTh6DvB3QEECxhlD3IgEAJgAlNhhIgNgGIANAGIgbAnQiDiOBPgqIABgBQA/glCSBiIAFADIACADQCTBsCFCogAjDiwIAAAAg");
	this.shape_10.setTransform(401.9,360.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#663300").ss(4,1,1).p("AASxuQgagCgdAAQgvAFgpAJIALCCQACAeAXASQAXAUAegDIAAAAQAegCARgXQAUgWgDgegAhZpOIAyhLIg2gbQBsAAB0gGIg8AnIAzBGIAAAAIDmhfQgBgQgBgNQAAgBAAgBQADgBADgBQAIgBAIgBQBDgRgEgaQgBgCgBgBQgPgeg9gHQgKk0lJgYAFerJQADgBADgDAFerJQhwAKhrAFAhdq0QhzgChtgGIgdgEQgWAAgVgDQgTgBgQgCIACAmIAtBmQABAOABAOQABAJABAJQAHBGAPBGQAHAeAIAeQAHAZANAVQgKAKgdAlQgdAlgGAHQADACAFAZQAGAbAJA2QAVBxACAyQACAxAHAZQAEASgBAgQAAAAAAABIAAABIgNAzIgZCGIAeAUAmorGQgDAAgEgBQgugIgOgTQAAgBAAgBQACgiBIgZQA7AZBEgBAlzoMQAAgKAAgIQAEhfAqgZIDqBIAl8o8IghAAQgagCgJAgQgHAUAAAmQAAA0AKAVQAQAgAuAAQANAAABAAQAGAAAIgEAj8jaQgEgCgEgEQgkgVgUghApoJXQhAh5AqidQAKhJAkhXQA3iICbi5Aj8jaQATAYAQA0QAQAyAGAxQAFAvAAADAlMDSQACAXAXAAQCIAAALgXQAZgIAKAAQAKAAASgBQATAAALgKQAMgIAAgaQAAhggehfQgehjguguQgwgOgrgZApQChID3BkAFnpBQAHAAAKAAQAMAAAOAGQARAHAFAKQADAFABAJQACAPACAIQABAFAAASIAAAPQAAA1gLARQgNAWgtADAFgqsQADAlADAyQAAAFABADQAAAHAAAFQADAyAAAqQAABAgEAiQAAABAAABQgBAKgBAHQgLA+glAlQgJAJgHAGQgDACgCADQgNAMgGAGQgZAVgWAIQgiANgoAKQgaAFgcAFQhEAKg/gBQgZAAgYgDIAAAAQgmgFgkgLAEkj+QAGAJAGAJQAXAhARAkQABADACACQB5B2BdCqIAAACIABAAQBzDzgaCvACYiJQACAogEAoQgEAqgIAoQgDAPgCAQQgCAPATAFQArAOAtAFQAhgPAjAFQAbADAigHQAJgDAJgCQAAgBAAgCQABglgEglQgDgpgIgoQgJgogQgnQAAgBgBAAQgBgCAAgDAhLj4QiVgFgHiDQDtAJDygJQgHCHiWACgADNi/QAEAQACAfQACAggEAMACYiJQgGApgkAXQggAVguAAQgyAAghgcQgkgeAAg1ACUivQADANABAOQAAAGAAAFAGJDuIgYiYAGJDuICkhsAmhsfQAHkEEdg/AFnpNQAVg/gIhDAIgGdIgGCDIgBAQIAAABIAAAAIh0AKAIiHTIAiADAFQIRIBHAAIAgAAAGlI3IgOgkABzN0IgUAAIAAgBIALjwIiogDIAAD5IgZABIAMCKIAIBgIkYANICqh4IgGgBADIP9IAAACICzByIkigSIARhiADaN0IgSCIIAAABIheAAIAJiJIBnAAIAZAAIBdljAlXGjIgSAuAlrHTIgGBCIA0AAIKNgEAnPIOIgpgCAm/JIIAAAFAm/JOIgGAeIijgTAlxIVIgFA1IhJgCIgVheAj3MFIhGjwAlyGLIg5gdAjVN9IgWgeQAHgOgThKAjJN/IgMABAixP5IABgBIgZh5IBygFAixP5IBmALAKKInIhmgGAG5IQIgwkiAGsF2IAygr");
	this.shape_11.setTransform(98.8,362.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("ABpLmIARhiIBdAAIAAADIC0BygAihKBIBlAKIAIBhIkXANgAlhCdIAGhCIACgCIASguIADgFIgfgTIAZiFIj2hjQA3iICbi7IAPBRQAVBzABAxQADAyAGAZQAEAOAAAYIAAALIAAACIAAABIgOAyIAOgyQACAXAXAAQCHAAAMgXQAYgIALAAIAcgBQATgBALgJQAMgIgBgaQAAhggehhQgdhjguguQAkALAmAFQgBA0AlAfQAhAbAxAAQAvABAggVQAjgXAHgoIABAZQAAAbgEAcQgEApgHAqIgFAfIAAADQAAANAQAFQAsANAtAFIAEgCQAXgKAXAAIABAAIAAAAIAPABIAAAAIACAAIARACIABAAIAAAAQASAAATgEIAAAAIACgBIACAAIAAAAIACgBIASgFIAAgCIAAgQQAAgegDgeQgDgpgJgnQgIgpgRgnIAAgBIgCgFIACAFIAAABQARAnAIApQAJAnADApQADAeAAAeIAAAQIAAACIgSAFIgCABIAAAAIgCAAIgCABIAAAAQgTAEgSAAIAAAAIgBAAIgRgCIgCAAIAAAAIgPgBIAAAAIgBAAQgXAAgXAKIgEACQgtgFgsgNQgQgFAAgNIAAgDIAFgfQAHgqAEgpQAEgcAAgbIgBgZIAAgMQgCgOgDgOIAAgDQAogKAhgNQAXgIAZgVIATgSIAEgEIANARQAXAhAQAkIAEAFQB5B3BdCrIgEAEIikBsIgYiXIAYCXIAwEgIgCABIggAAIhIAAIqNAEgADhncQACgJAAgSIAAgRQgCgggEgPQAEAPACAgIAAARQAAASgCAJgAk8ikIAAgBIAAgCIAAgLQAAgYgEgOQgGgZgDgyQgBgxgVhzIgPhRQgGgZgCgDQAGgGAdglQAdglAJgKQAVAhAkAVIAIAGQArAZAwAOQAuAuAdBjQAeBhAABgQABAagMAIQgLAJgTABIgcABQgLAAgYAIQgMAXiHAAQgXAAgCgXgAjJoHQAQA0AGAwIAFA0IgFg0QgGgwgQg0QgQgzgTgYQATAYAQAzgAiRorIAAAAgAg7pwQiVgFgHiDQDsAJDygJQgGCHiWACg");
	this.shape_12.setTransform(97.2,400.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFCC").s().p("AixNVIABgBIgZh6IBygFIAMCKgABqNYIAJiJIBnABIgSCIIAAAAgApoG1IAAgCQhAh6AqidQAKhIAkhVID3BhIgZCHIg5gdIA5AdIAeATIgDAFIgSAtIgCADIgGBCIgFA0IhJgCIgVheIAVBeIAAAGIAAABIgGAegAnPFqIgpgCgAm/GjgAGlGTIgOgkIAAgCIAggBIACAAIgwkiICkhqIAEgCIABAAQBzDxgaCvIgBAFIhmgHIgKAAIAGiEIgGCEIgBAQIAAABIh0AKgAJEExIgigCgAGsDRIAygrgAgzj0QgkgfAAg0IAAAAQAYACAZABIAMAAIAAAAIAAAAQA1AAA4gIIAAAAIADgBIAHgBQAcgEAagGIABAEQADAOABAOIAAALQgGApgkAXQggAUguAAQgyAAghgbgAgalEIgMAAQgZgBgYgCIAAAAQgmgFgkgLQgwgOgrgZIgIgGQgkgVgUghQgNgVgHgZIgPg8QgPhGgHhGIACAAIAAgTQAEheAqgZIDqBIIACAAIAyhLIg2gcQBsAAB0gFIg8AnIAzBGIAAAAIDmhgIAGBYIABAIIAAAMQADAyAAApQAABBgEAiIAAACIgCARQgLA+glAkIgQAQIgFAFIgTASQgZAUgWAJQgiANgoAJQgaAGgcAEIgHABIgDABIAAAAQg4AIg1AAIAAAAIAAAAgAhLmcICmABQCWgCAHiHQjyAJjtgJQAHCDCVAFgACdrUQgPATAAAaQAAAbAPATQAQATAWAAQAWAAAQgTQAQgTAAgbQAAgagQgTQgQgTgWAAQgWAAgQATgAjQrUQgPATAAAaQAAAbAPATQAQATAWAAQAXAAAPgTQAQgTAAgbQAAgagQgTQgPgTgXAAQgWAAgQATgAl/ofQguAAgQggQgKgVAAg0QAAgmAHgUQAJggAaACIAhAAIADABIACAcIACATQAHBGAPBGIgEABQgIADgGABIgOAAgAFmolIAAgCQAEgiAAhBQAAgpgDgyIARgBQAMAAAOAHQARAHAFAKQADAFABAJQACAPACAIQABAFAAASIAAAPQAAA1gLARQgNAWgtACgAl1qwIAAAAg");
	this.shape_13.setTransform(98.8,379.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#663300").s().p("AiwMiIgXgeQAHgOgShKIAAgCIhHjwIKNgEIhcFjIgaAAIhmAAIgUgBIALjwIipgDIAAD5IgZABIhyAFIgLABgADCowQgQgSAAgbQAAgbAQgTQAPgSAXAAQAWAAAPASQAQATAAAbQAAAbgQASQgPATgWAAQgXAAgPgTgAirowQgQgSAAgbQAAgbAQgTQAQgSAWAAQAWAAAQASQAPATAAAbQAAAbgPASQgQATgWAAQgWAAgQgTgAlSp5IgCgcIguhmIgCgmIAkADQAUADAWAAIAdAEQBuAHByABIA2AbIgyBLIgCAAIjqhHQgpAZgEBegACeqoIgyhFIA7goQBsgFBwgKIACAdIjmBfg");
	this.shape_14.setTransform(95.1,371.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#F9E006").s().p("AkhDVIgdgDQgWgBgUgCIgkgDIgGgBQgugIgPgTIAAgDQACgiBIgZIADABIADACQA3AVA9AAIAAAAIAAAAIADAAIAAAAIACAAIgCAAIAAAAIgDAAIAAAAIAAAAQg9AAg3gVIgDgCIgDgBQAIkBEdg/IAKCBQADAeAXATIABABIACACIABAAQATAOAWABIABAAIAAAAIAGgBIABAAQAcgCATgXQARgUAAgaIAAgHIgLiBQFJAYAKExQA+AIAPAeIABADQAEAahDAQIgPADIgHABIABADQhwAKhsAFQhzAFhtAAQhygBhugHgAgPgKQgWgBgTgOIgBAAIgCgCIgBgBQgXgTgDgeIgKiBQApgJAugFQAcAAAbACIALCBIAAAHQAAAagRAUQgTAXgcACIgBAAIgGABIAAAAIgBAAgAAujaIAAAAg");
	this.shape_15.setTransform(95.9,271.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#663300").ss(4,1,1).p("AIoHRQhNjLgTjiQgDgdgCgaAF4l5QGjhfDLD8QDID1DUIAQhHgChpABQh+ACg7AAIAgAZQgDAWgPABQjMAhjZgLQAVAUAUAgQANAVAHATQq/BkrBhGQgZgCgYgMQgtgXATgvQAchFgEgJIg6AEQg8AEgagDQj+gej/ALQD2n3Cak2QGZs7GWIfQCaEEGghegAMKBsQAvCOAaA1QAoBQBLBNAp5FjIBWoT");
	this.shape_16.setTransform(263,372.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFCC").s().p("ArBLaQgagCgXgMQgsgXASgvQAdhFgFgJIg5AEQg9AEgagDQj+gej/ALIGQstQGas7GVIfQCZEEGhheQGjhfDLD8QDID1DUIAQhHgChpABIi5ACIAgAZQgCAWgQABQjMAhjZgLQAVAUATAgQAOAVAHATQmeA7mdAAQkiAAkjgdgAHIAkQASDiBODLQhOjLgSjiQgDgdgCgaQACAaADAdgANTEvQAnBQBNBNQhNhNgnhQQgag1gviOQAvCOAaA1gAp4FjIBVoTg");
	this.shape_17.setTransform(263,372.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#663300").ss(4,1,1).p("AgpGDIBfkfIgBAAQg6gUAwh+QALg+CcgGQEQgHDbAYQB7AMAUA4QApBLgKAWIAAAAIAtBNIBvC+QABADACADQANAWAJAWQAdBCAABDQhQAdmQATQkggJAHgcIrIAAQjugFgaknQgCgLAAgKQiAhwkAArQhXAFBLhsQBLhrCpgXQCogWAlhhQAHgWAHgVQgEAAgDABQgBAAgBAAQgMACgHAAQgPABgJgCQgCABgCAAIgDgBQgTAAgNgpQgNgpAAg6QAAg7ANgpQANgpATAAIAAAAQAEAAADACQAOAGALAhQANApAAA7QAAA6gNApQgFAPgHALQgHALgGAEAOaCQIBsAMIAjAEQAWAxgGBRQgFBQgUAPAQGCcQABAGACAGQAVBNgTBbQAAACgBADAkEncQgIgCgIAAQgHgBgEgCQgMgIgFgGQgHgJAAgRQAAgKAGgJQAFgIAJgGQADgBACgBQgBgBgBAAIAAgEAjinLQgPgNgTgEQgGAXgOAdQiAELgzFwQgNCgBrAVIFEAAIC0AAAimoSQAIAHAHAHQA7A5ABBhQgsAVgpgIQgIg1gZglQgIgMgJgIQgGhGBCgBgAkeosQAagNAiAJQAgAIAcAWAnSnsQAAAAABAAQBPhgBiAfApLkAIAlgJQA8hUAaiOIgCgBAnoklQgHAVgHAXAl2nvQg8BAgoBjApSoUQANAHAKAfQANApAAA7QAAA6gNApQgFAPgHALQgGAKgFAEAp/oVQAUgCAXADQABAAABAAQA5AGBHAiApZjVQhEDSAPDTANrBEQg7gvkYBYQi/Axg+gdQg9gdgCgBQhVg1hEAMIgMAlAGWGLIgJAXAE+HPQAojuDVg5QEvhWCYE5AGqFeQA/h2CWgY");
	this.shape_18.setTransform(255.6,366);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFCC").s().p("AAACMQgRAAgNgqQgNgpAAg5QAAg5ANgpQANgpARAAIAAAAIAHABQAOAHAKAhQAOApAAA5QAAA5gOApQgEAQgHALQgHAKgHAEIgDABg");
	this.shape_19.setTransform(190.9,326.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#CCCCCC").s().p("AMtGuIABgEQAJgrAAgnQAAgtgLgpIAggIQAWAxgGBQQgFBRgUAPQgJgXgNgWgAMqGpIhvi+IACgCIBsANIADAMQALApAAAtQAAAngJArgAtcilQAGgEAHgKQAHgLAFgQQANgpAAg6QAAg6gNgpQgLghgOgHQAUgCAXADIACAAQANAIAKAfQANApAAA6QAAA6gNApQgFAQgHALQgGAJgFAEIgCAAQgMACgHAAIgJABQgJAAgGgCgAskizQAHgLAFgQQANgpAAg6QAAg6gNgpQgKgfgNgIQA5AHBHAiIACAAQgaCPg8BTIglAJIgHABQAFgEAGgJgAnhmCQgIgCgIAAQgHgCgEgCQgMgHgFgGQgHgKAAgRQAAgKAGgJQAFgIAJgFIAFgDQAagMAiAJQAgAHAcAXQhCABAGBFQgPgMgTgEg");
	this.shape_20.setTransform(277.7,357);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#F9E006").s().p("AFEIRIrIAAQjugFgaknIgCgVQgDgnAAgmQAAisA4isQg4CsAACsQAAAmADAnQiAhwkAArQhXAFBLhsQBLhrCpgXQCogWAlhhIAOgrIAlgJQA8hUAaiOIgBgBQBPhgBiAfIACABIgFACQgJAGgFAIQgGAJAAAKQAAARAHAJQAFAGAMAIQAEACAHABQAIAAAIACQgGAXgOAdQiAELgzFwQgNCgBrAVIFEAAIAAgFIBfkfIgBAAIACgFIAMglQBEgMBVA1IA/AeQA+AdC/gxQEYhYA7AvIAAAAIAtBNIBvC+IADAGQANAWAJAWQAdBCAABDQhQAdmQATQkggJAHgcgAI7CoQjVA5goDuQAojuDVg5QBBgTA6AAIAAAAIAAAAQDQABB2DpIABACIAAABIAFAJIgFgJIAAgBIgBgCQh2jpjQgBIAAAAIAAAAQg6AAhBATIAAAAgAGNGiIAJgXgACLGIIi0AAgAGqFeQA/h2CWgYQiWAYg/B2gAn2j5IAOgsIgOAsgAnalMQAohjA8hAQg8BAgoBjg");
	this.shape_21.setTransform(255.6,366);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#3E1F00").s().p("AgnFFIhAgeQhUg2hFANIgLAlIgCAEQg9gUAyh/QALg+CcgHQEOgHDcAYQB7AMAUA5QAoBNgJAWQg8gvkXBYQh5AehFAAQgmAAgXgKgAn1iZQgHg1gZglQgIgMgKgJQgGhFBDgBIAPANQA6A6ABBgQggAQgfAAQgLAAgLgCg");
	this.shape_22.setTransform(288.1,346.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#CCCCCC").s("#663300").ss(4,1,1).rr(-7.45,-43.95,14.9,87.9,7.45);
	this.shape_23.setTransform(177.5,395.5,0.53,0.53,17.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#663300").ss(4,1,1).p("AQCkDQBtBsAACXQAACZhtBsQhsBsiZAAQiYAAhthsQhshsAAiZQAAiXBshsQBthtCYAAQCZAABsBtgAn3kDQBsBsAACXQAACZhsBsQhtBsiZAAQiYAAhthsQhshsAAiZQAAiXBshsQBthtCYAAQCZAABtBtgAJjAMQAAgGAAgGQAAg+AtguQAtgsA/gBQAAAAABAAQBAAAAuAtQAtAuAAA+QAAAGAAAGQgEA4gpApQguAthAAAQAAAAgBAAQg/AAgtgtQgpgpgEg4gAL8A+QgZAAgSgSQgOgOgDgSIhdAAALAAMQgBgEAAgDQAAgDAAgCQAAgYASgSQASgSAZAAIABAAQAaAAASASQASASAAAYQAAACAAADQAAADgBAEQgDASgOAOQgSASgaAAIgBAAAJniUQA+g+BYAAQBYAAA+A+QA+A+AABWQAABYg+A+Qg+A+hYAAQhYAAg+g+Qg+g+AAhYQAAhWA+g+gAopAAQAABYg+A+Qg+A+hYAAQhXAAg+g+Qg/g+AAhYQAAhWA/g+QA+g+BXAAQBYAAA+A+QA+A+AABWgAuXAMQAAgGAAgGQAAg+AtguQAtgsA/gBQAAAAABAAQBAAAAuAtQAtAuAAA+QAAAGAAAGQgEA4gpApQguAthAAAQAAAAgBAAIAAhcQgZAAgSgSQgOgOgDgSQgBgEAAgDQAAgDAAgCQAAgYASgSQASgSAZAAIABAAQAaAAASASQASASAAAYQAAACAAADQAAADgBAEQgDASgOAOQgSASgaAAIgBAAAr+iUIAABYArAAMIBeAAAr+CaQg/AAgtgtQgpgpgEg4As6AMIhdAAAL8g8IAAhYAM6AMIBeAAAL8CaIAAhc");
	this.shape_24.setTransform(247.8,415.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#CCCCCC").s().p("AJnCWQg9g/gBhXQABhXA9g+QA+g9BZgBQBXABA/A9QA9A+AABXQAABXg9A/Qg/A9hXAAQhZAAg+g9gAL+CaQA/AAAugtQApgqAEg4IAAgLQAAg+gtguQgugtg/AAIgCAAIABAFIAABYQgaAAgSARQgSASAAAZIAAAEIABAHIgBgHIAAgEQAAgZASgSQASgRAaAAIABAAQAZAAATARQARASABAZIAAAEIgBAHQgEATgNAOQgTARgZABIgBAAQgagBgSgRQgOgOgDgTIhcAAIgBgLQAAg+AtguQAtgtA/AAQg/AAgtAtQgtAuAAA+IABALQADA4ApAqQAuAtA/AAIABAAIAAAAgAuSCWQg/g/AAhXQAAhXA/g+QA+g9BYgBQBYABA9A9QA/A+gBBXQABBXg/A/Qg9A9hYAAQhYAAg+g9gAr9CaIABAAQA/AAAugtQApgqAEg4IAAgLQAAg+gtguQgugtg/AAIgCAAIABAFIAABYQgaAAgRARQgTASAAAZIABAEIABAHIhdAAIgBgLQAAg+AuguQAsgtA/AAQg/AAgsAtQguAuAAA+IABALQADA4AqAqQAsAtBAAAgAL+CaIgBAAIAAhcIABAAQAZgBATgRQANgOAEgTIBdAAQgEA4gpAqQguAtg/AAIAAAAgAL9CaIAAAAgAr9CaIAAhcIABAAQAZgBATgRQANgOADgTQgDATgNAOQgTARgZABIgBAAQgagBgRgRQgOgOgDgTIgBgHIgBgEQAAgZATgSQARgRAaAAIABAAQAZAAATARQASASAAAZIAAAEIgCAHIBeAAQgEA4gpAqQguAtg/AAIgBAAg");
	this.shape_25.setTransform(247.8,415.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#3E1F00").s().p("AH4EFQhshsAAiZQAAiXBshsQBthtCYAAQCZAABsBtQBtBsAACXQAACZhtBsQhsBsiZAAQiYAAhthsgAJniUQg+A+AABWQAABYA+A+QA+A+BYAAQBYAAA+g+QA+g+AAhYQAAhWg+g+Qg+g+hYAAQhYAAg+A+gAwCEFQhshsAAiZQAAiXBshsQBthtCYAAQCZAABtBtQBsBsAACXQAACZhsBsQhtBsiZAAQiYAAhthsgAuSiUQg/A+AABWQAABYA/A+QA+A+BXAAQBYAAA+g+QA+g+AAhYQAAhWg+g+Qg+g+hYAAQhXAAg+A+g");
	this.shape_26.setTransform(247.8,415.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[]},40).wait(112));

	// 文字
	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#663300").s().p("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");
	this.shape_27.setTransform(149.5,78.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#663300").s().p("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");
	this.shape_28.setTransform(241.8,137.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#663300").s().p("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IAACLQAAABAAABQAAAAABABQAAAAABAAQAAABABAAIAGAAQABAAABgBQABAAAAAAQAAgBABAAQAAgBAAgBIAAiLQAAgBAAgBQAAgBgBAAQAAAAgBgBQAAAAgBAAIgHAAQgBAAAAAAQgBABAAAAQgBAAAAABQAAABAAABgAh3jLQgTgIgHAAQgJAAgJAKQgJAJgFAAQgNAAgCgQQAFglApgDQAMAAAaAMQAUAKAHAAQAIAAAKgLQAJgIAFAAQANAAAAAPQgEAkgpADQgMAAgagMgAj0kJIgSgMQgFAEgIAAIhSAAQgIAAgCgEIgVAOQgOAFgHgJQgIgNAQgKIAKgIQAFgFABAAIgGgEIgOgOQgIgKAIgJQAIgHALAGIAOALQAFAFACABQALgKAEgMIgjAAQgOgBAAgOQAAgOAOAAIBCAAQANgBAEAKIAHAMQACgDADgCIALgOQAKgPAMAKQAOAHgNARQgIAMgLAIIADACIAHAHIAKgMIAGgIQALgOAMALQAKAIgKAOIgRAVQAIAIAIAFQARAMgKAPQgDAEgGAAQgGAAgJgEgAlDlNQgLATgJAKIA0AAQgIgHgUgcIgEAGgAogkJIgSgMQgFAEgIAAIhSAAQgIAAgCgEIgVAOQgOAFgHgJQgIgNAQgKIAKgIQAFgFABAAIgGgEIgOgOQgIgKAIgJQAIgHALAGIAOALQAFAFACABQALgKAEgMIgjAAQgOgBAAgOQAAgOAOAAIBCAAQANgBAEAKIAHAMQACgDADgCIALgOQAKgPAMAKQAOAHgNARQgIAMgLAIIADACIAHAHIAKgMIAGgIQALgOAMALQAKAIgKAOIgRAVQAIAIAIAFQARAMgKAPQgDAEgGAAQgGAAgJgEgApvlNQgLATgJAKIA0AAQgIgHgUgcIgEAGgAtMkJIgSgMQgFAEgIAAIhSAAQgIAAgCgEIgVAOQgOAFgHgJQgIgNAQgKIAKgIQAFgFABAAIgGgEIgOgOQgIgKAIgJQAIgHALAGIAOALQAFAFACABQALgKAEgMIgjAAQgOgBAAgOQAAgOAOAAIBCAAQANgBAEAKIAHAMQACgDADgCIALgOQAKgPAMAKQAOAHgNARQgIAMgLAIIADACIAHAHIAKgMIAGgIQALgOAMALQAKAIgKAOIgRAVQAIAIAIAFQARAMgKAPQgDAEgGAAQgGAAgJgEgAublNQgLATgJAKIA0AAQgIgHgUgcIgEAGg");
	this.shape_29.setTransform(146.3,85.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#663300").s().p("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");
	this.shape_30.setTransform(244.7,140.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#663300").s().p("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");
	this.shape_31.setTransform(240.1,83.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_27}]},15).to({state:[{t:this.shape_28}]},11).to({state:[]},14).to({state:[{t:this.shape_29}]},24).to({state:[{t:this.shape_30}]},8).to({state:[]},11).to({state:[{t:this.shape_31}]},37).to({state:[]},31).wait(1));

	// 对话框
	this.instance_2 = new lib.元件12();
	this.instance_2.setTransform(419.7,288.4,0.512,0.512,0,0,0,90.1,113.7);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(20).to({_off:false},0).to({scaleX:1.06,scaleY:1.06},6,cjs.Ease.get(1)).wait(1).to({regX:71.7,regY:60,scaleX:1.05,scaleY:1.05,x:400.4,y:231.9},0).wait(1).to({scaleX:1.03,scaleY:1.03,x:400.7,y:233},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:401.1,y:234.2},0).wait(1).to({regX:90.1,regY:113.7,scaleX:1,scaleY:1,x:419.7,y:288.4},0).to({_off:true},10).wait(26).to({_off:false,scaleX:0.51,scaleY:0.51},0).to({scaleX:1.06,scaleY:1.06},6,cjs.Ease.get(1)).wait(1).to({regX:71.7,regY:60,scaleX:1.05,scaleY:1.05,x:400.4,y:231.9},0).wait(1).to({scaleX:1.03,scaleY:1.03,x:400.7,y:233},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:401.1,y:234.2},0).wait(1).to({regX:90.1,regY:113.7,scaleX:1,scaleY:1,x:419.7,y:288.4},0).to({_off:true},7).wait(69));

	// 对话框
	this.instance_3 = new lib.元件11();
	this.instance_3.setTransform(100.6,190,0.343,0.343,0,0,0,92.2,190);
	this.instance_3._off = true;

	this.instance_4 = new lib.元件11副本();
	this.instance_4.setTransform(287.4,190,0.343,0.343,0,0,180,92.2,190);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(9).to({_off:false},0).to({scaleX:1.08,scaleY:1.08},6,cjs.Ease.get(1)).wait(1).to({regX:134.8,regY:101.7,scaleX:1.07,scaleY:1.07,x:146.2,y:95.4},0).wait(1).to({scaleX:1.04,scaleY:1.04,x:145.1,y:97.8},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:143.7,y:100.5},0).wait(1).to({regX:92.2,regY:190,scaleX:1,scaleY:1,x:100.6,y:190},0).to({_off:true},21).wait(18).to({_off:false,scaleX:0.34,scaleY:0.34},0).to({scaleX:1.08,scaleY:1.08},6,cjs.Ease.get(1)).wait(1).to({regX:134.8,regY:101.7,scaleX:1.07,scaleY:1.07,x:146.2,y:95.4},0).wait(1).to({scaleX:1.04,scaleY:1.04,x:145.1,y:97.8},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:143.7,y:100.5},0).wait(1).to({regX:92.2,regY:190,scaleX:1,scaleY:1,x:100.6,y:190},0).to({_off:true},15).wait(69));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(114).to({_off:false},0).to({scaleX:1.08,scaleY:1.08},6,cjs.Ease.get(1)).wait(1).to({regX:143.6,regY:101.7,scaleX:1.07,scaleY:1.07,x:232.3,y:95.4},0).wait(1).to({scaleX:1.04,scaleY:1.04,x:233.7,y:97.8},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:235.3,y:100.5},0).wait(1).to({regX:92.2,regY:190,scaleX:1,scaleY:1,x:287.4,y:190},0).to({_off:true},27).wait(1));

	// 图层 6
	this.instance_5 = new lib.元件17();
	this.instance_5.setTransform(438.8,359.5,1,1,0,0,0,71.5,117);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#663300").ss(5,1,1).p("AkBgkICdAkIiGBAAECg/IiLAzICBAs");
	this.shape_32.setTransform(82.7,311.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#663300").ss(4,1,1).p("AhdxtQgMgBgMgBQgcgCgdAAQghADgeAGQAXAzAIA/QADAeAYATQAZAUAegDQAegCARgXQASgXgFgeQgFg1gYg2gAgEq7IgwAbIArBGADWrKQgBgBAAgBQADgBAEAAADWrKQADAAADgDQAIgCAHgCQBDgQgEgZQAAgCgBgCQgPgeg+gHQgJkokwgiADYqtQgCgQAAgNQhwAKhqAFAH1pkIgEjeIBQAAIAVCEQAJgjACgeQACggAFgfIBZAYIgFBkIAYhGIA5AZAmuj6QgOgNgKgQQgMgUgHgZQgJgegGgfQgQhFgGhGQgBgKgBgJQgBgOgBgOIguhmIgBgmQgEAAgDgBQgugIgPgTQAAgBAAgCQACgiBIgYQAIkEEdg/QANgDAMgCAjmq2QhzAAhugHIgcgEQgWAAgVgDQgTgBgQgCAjipPIAyhLIg2gcQBvABBzgGAorsgQA8AYBEAAAn9oNQAAgJABgJQAEhfAqgYIDqBHAnsmAQgJAEgFAAQgCAAgMAAQguAAgQgfQgKgVAAg0QAAgmAGgVQAKggAaADIAhAAAoFiVQgBgGgBgFIAAgBQgGgBgDgDQgZgUB7hBAmFjbQgFgCgEgDQgSgLgOgPAkil6IACBIQAJA9BVAJQCagGApgbAjgikQgmgEgkgLQgwgOgrgaQASAZARAzQAQAzAGAxQAFAuAAAEACbj+QgCACgCADQgNAMgHAGQgYAUgXAJQghANgoAJQgYAGgdAEQhEAKhAgBQgaAAgYgDIAAAAAkil6IgMgLAp2FkQgVAjgwgKQgqgYgqgsQhIhKBPhoQAcglAbghQArg0ArgpIB2h5ArRBBQA1gHAiAdAqABkQAEgBAEgBQBSgRA+AYQAEABAEACQgBgMAAgNQgDgxgUhyQgIgrgFgaAmADnQAMgSAHgNQhBhEgrgVQgDgBgEgCAn0DmIA1BcIABACQgMARgLARQgIAMgIAOQgJANgIAPAmdEUIAAAAQAKgQAIgMQACANAHAUQAHAVAFAKQgFAGgRAGQgWAIgCABQgFgDgEgIQgDgJgDgGQgEAGgEAHQgCACgBACAmzEzQAIgLAHgLQADgEAEgFAmADnQgFAIgGAJAnZCrIA8BpAkqizQAuAtAeBkQAeBfAABgQAAAZgMAKQgLAJgTAAQgSABgKAAQgKAAgZAIQgIARhPAEAAQiJQgHApgiAXQggAUguAAQg0AAghgbQgkgfAAg1ACxjtQBCgdA8gxQBLg9BBheQgHgYgQgsQgchNACglQAtgnAJgJQAOAXAaAuQAHAKAGAJQAQAVAPALQAgAVAPApQAOAjgFAmQgBAEgBAFADfpBQAGAAALgBQALAAAPAGQAQAIAGAKQADAFABAIQABAPACAIQABAGAAASIAAAOQAAA1gKASQgNAWgtACADepNQABAGAAAGQACAxAAAqQAABAgDAjQAAABAAABQgBAJgBAIQgLA9gmAlQgJAJgHAHQAGAJAHAJQABABABACQAWAgAPAiQABACABADIAAAAQARAnAIApQAFAZADAaQACAPABAPQAEAlgBAlQAAACAAAAQgJADgJADQghAHgcgDQgjgFggAPQgugFgrgOQgQgFACgOQABgRABgPQAIgoAEgqQAEgogBgoQgBgGAAgFQgBgOgDgOADYqtQACAlAEAzQAAAEAAAEQAVhAgIhEAA1l6IAEgHAABkQQAJg1Arg1IlXAAABEjAQAFAQABAgQACAfgDANAHNh6QhqBChxAZAExk5QAjCcB5AjAgHpaIDfhTAJeqJIgIg1AMPruIgMA+IAwAdIAAAeQgBAegHAlQgHAmgaA9QgbA+gmAzQh4CSiEBSAMDqwIgWBZAK8rCIgMBLADNISIAMFjIgZAAIAWCIIAAAEIDVBxIkogSIgLhjIggiIIgUAAIhejwADVP9IhdAAABYN1IBoAAADoBXIBJG5IhkACIqTADIhAACIAQh7QgCAEgDAEQgBAAAAAAQg3AFg8gPIgHg2IAxgMIAIAbAocEWIAwBcIAHAOAmAMFIhGjwAlTN/IBzgFAk6P6IBmAKIAIBhIkZANICrh4IAAgBIgZh6IgLABAgdKDIiqgCIAAD5IgZAAIAAABIAMCJAleN+IgWgfQAHgNgThL");
	this.shape_33.setTransform(95.2,362.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AEFLkIgKhiIBdAAIABADIDUBxgAi3J+IBlALIAIBgIkYANgAlzAhQAIgPAJgOQAIgMAIgMIAWgiIADgEIAJgMIAGAOQADAIAFAEIAYgKQASgGAFgFQgGgLgHgVQgGgUgCgNIALgQIATggQhChEgqgUIgJgcQgCgygUhzIgNhFIANBFQAUBzACAyIgHAVQg+gYhRARIgCgKQgigeg1AHQArgzAqgrIB3h5IgDgMIAAAAQgFgCgDgCQgZgUB6hBQAOAOATAMIAIAFQAsAZAvAOQAuAuAeBjQAeBhAABhQAAAZgLAJQgLAJgTABIgdABQgKAAgZAHQgIAShOAEQBOgEAIgSQAZgHAKAAIAdgBQATgBALgJQALgJAAgZQAAhhgehhQgehjguguQAkALAmAFQAAA1AlAeQAhAcAxAAQAuAAAhgVQAkgXAGgoIgBgMIgDgbIgBgEQAogKAigNQAWgIAZgVIATgSIAFgEIAMARIADAEQAVAfAQAjIABAEIABABQAQAnAJApQAFAZADAaIADAdQAEAngBAmIAAACIgSAFIABAGIBJG4IhjABIqUAEIg/ABgACPktQAsANAtAGIABgBIABAAQAYgLAZAAIAAAAIAAAAIANAAIACABIABAAIABAAIABAAIASABIAAAAIAAAAQARAAAUgEIACAAIACgBIABAAIgBAAIgCABIgCAAQgUAEgRAAIAAAAIAAAAIgSgBIgBAAIgBAAIgBAAIgCgBIgNAAIAAAAIAAAAQgZAAgYALIgBAAIgBABQgtgGgsgNQgQgFAAgMIAAgDIAFggIAAgCQAHgpAFgoQADgeAAgdIgBgVIABAVQAAAdgDAeQgFAogHApIAAACIgFAgIAAADQAAAMAQAFgAjgoKQARAyAFAxIAGA0IgGg0QgFgxgRgyQgQgzgTgZQATAZAQAzgADLngQACgIAAgQIAAgUQgCgggFgPQAFAPACAgIAAAUQAAAQgCAIgAlfkmIAAAAgAF1maQgDgagFgZQgJgpgQgnIgBgBIgBgEQgQgjgVgfIAGgFQBDgcA8gxIABABQAkCcB4AkQhpBBhxAaIAAAAgAidqtIgChIIFXAAQgsA1gIA1IAAACQgsAciYAGQhVgJgIg9g");
	this.shape_34.setTransform(82.1,400.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFCC").s().p("Ak6OZIAAAAIgZh6IBzgFIAAABIAMCJgADVOdIhdAAIggiJIBoAAIAWCJgApvE6IgHg3IAxgMIAIAbIgIgbIgxAMQgVAkgwgKQgqgZgqgsQhIhKBPhoIA3hEQA1gHAiAeIACAIIgIACIAIgCQBSgPA+AWIAIADIAHAEQArAUBBBEIgTAgIgLAQQACANAHAUQAHAVAFALQgFAFgRAGIgYAKQgFgEgEgIIgGgOIAPgWIAHgJIgHAJIgPAWIgIAMIgEACIg1hcIA1BcIABACIgXAiIgXAMIgwhcIAwBcIAHAOQgJAOgIAPIgFAIIgBAAIgZABQgsAAgugLgAmdC0IAAgBIASgcIgSAcIAAABIg8hpIA8BpgAi8ixQgkgeAAg1IAAAAQAYADAaAAIAGAAIAFAAIAAAAIABAAQA4AAA6gIIABgBIABAAIAEAAQAdgFAYgFIAAAEIAEAbIABAMQgHAogiAXQggAVguAAQg0AAghgcgAExmaIgCgBQBLg+BBhdQgHgYgQgtQgchMACgmQAtgmAJgJIAoBEIANAUIgEjfIBQAAIAVCEQAJgjACgdQACghAFgeIBZAYIgFBjIgMBLIAMhLIAYhGIA5AZIACACIgMA9IAwAdIAAAeQgBAegHAmQgHAlgaA+QgbA+gmAyQh4CSiEBTQh5gkgjicgAJMoeIgCAKIACgKIABgUQAAgbgKgaQgPgogggWQgPgKgQgVQAQAVAPAKQAgAWAPAoQAKAaAAAbIgBAUgALtq4IAWhZgAJerqIgIg1gAijkBIgFAAIgGAAQgaAAgYgDIAAAAQgmgFgkgLQgwgOgrgZIgJgFQgSgMgOgOQgOgNgKgQQgMgVgHgYQgJgfgGgeQgQhGgGhGIABAAIABgTQAEheAqgZIDqBIIACAAIAyhLIg2gcQBvAABzgFIgwAbIArBFIACABIDfhUIAGBYIAAAIIABAMQACAyAAApQAABBgDAiIAAACIAAgCQADgiAAhBQAAgpgCgyIARgBQALAAAPAHQAQAHAGAKQADAFABAJQABAPACAIIABAXIAAAPQAAA1gKARQgNAWgtACIgGAAIgCARQgLA+gmAlIgQAQIgEAEIgUASQgYAVgXAIQghANgoAKQgYAFgdAFIgEAAIgBAAIgBABQg6AIg4AAIgBAAIAAAAgAkinaIACBIQAJA9BVAJQCagGApgcIAAgCQAJg1Arg1IAEgIIgEAIIlXAAIgMgMgAlmogICFhCIicgkICcAkgAgDpuIB/AuIh/guICIgzIiIAzgAoIncQguAAgQggQgKgVAAgzQAAgnAGgUQAKggAaACIAhAAIADABIACAcIACATQAGBGAQBGIgEABQgJADgFABIgOAAg");
	this.shape_35.setTransform(95.2,372.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#663300").s().p("AiyMjIgWgeQAHgOgThLIAAgCIhGjwIKUgDIAMFjIgaAAIhngBIgUAAIhgjvIgDgCIipgCIAAD5IgZABIhyAEIgLACgAlUp6IgCgcIgthmIgCgmQAQACAUABQAUADAWAAIAdAEQBuAHByABIA2AcIgyBKIgCAAIjqhHQgpAYgFBfgACiq1IgrhGIAvgbQBsgEBwgLIACAdIjhBUg");
	this.shape_36.setTransform(77.9,371.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#F9E006").s().p("AhBDdQhyAAhugHIgdgEQgWAAgUgDQgUgBgQgCIgHgBQgugIgOgTIAAgDQACgiBIgYQAIkCEdg/IAZgFQAXAzAHA/QAEAeAYATIABABIAAAAQATAQAYAAIAAAAIABAAIAGAAIABAAQAegCASgXQAOgSAAgXIgBgMQgGg1gXg2QExAiAKEmQA9AHAPAeIACAEQAEAZhDAQIgQAEIgGABIAAACQhwAKhsAFQhpAFhkAAIgTAAgAkICLIABAAIAAAAIABAAIgBAAIAAAAIgBAAIAAAAIgBAAQg9AAg2gVIgFgBIgCgBIgCgBIACABIACABIAFABQA2AVA9AAIABAAIAAAAgAAfgfQgYAAgTgQIAAAAIgBgBQgYgTgEgeQgHg/gXgzQAegGAggDQAcAAAbACIAZACQAXA2AGA1IABAMQAAAXgOASQgSAXgeACIgBAAIgGAAIgBAAIAAAAgABHjYIAAAAg");
	this.shape_37.setTransform(78.6,270.9);

	this.instance_6 = new lib.元件15();
	this.instance_6.setTransform(255.6,366,1,1,0,0,0,108.6,56.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#CCCCCC").s("#663300").ss(4,1,1).rr(-7.45,-43.95,14.9,87.9,7.45);
	this.shape_38.setTransform(177.5,395.5,0.53,0.53,17.9);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#663300").ss(4,1,1).p("AQCkDQBtBsAACXQAACZhtBsQhsBsiZAAQiYAAhthsQhshsAAiZQAAiXBshsQBthtCYAAQCZAABsBtgAn3kDQBsBsAACXQAACZhsBsQhtBsiZAAQiYAAhthsQhshsAAiZQAAiXBshsQBthtCYAAQCZAABtBtgAJjAMQAAgGAAgGQAAg+AtguQAtgsA/gBQAAAAABAAQBAAAAuAtQAtAuAAA+QAAAGAAAGQgEA4gpApQguAthAAAQAAAAgBAAQg/AAgtgtQgpgpgEg4gAL8A+QgZAAgSgSQgOgOgDgSIhdAAALAAMQgBgEAAgDQAAgDAAgCQAAgYASgSQASgSAZAAIABAAQAaAAASASQASASAAAYQAAACAAADQAAADgBAEQgDASgOAOQgSASgaAAIgBAAAJniUQA+g+BYAAQBYAAA+A+QA+A+AABWQAABYg+A+Qg+A+hYAAQhYAAg+g+Qg+g+AAhYQAAhWA+g+gAopAAQAABYg+A+Qg+A+hYAAQhXAAg+g+Qg/g+AAhYQAAhWA/g+QA+g+BXAAQBYAAA+A+QA+A+AABWgAuXAMQAAgGAAgGQAAg+AtguQAtgsA/gBQAAAAABAAQBAAAAuAtQAtAuAAA+QAAAGAAAGQgEA4gpApQguAthAAAQAAAAgBAAIAAhcQgZAAgSgSQgOgOgDgSQgBgEAAgDQAAgDAAgCQAAgYASgSQASgSAZAAIABAAQAaAAASASQASASAAAYQAAACAAADQAAADgBAEQgDASgOAOQgSASgaAAIgBAAAr+iUIAABYArAAMIBeAAAr+CaQg/AAgtgtQgpgpgEg4As6AMIhdAAAL8g8IAAhYAM6AMIBeAAAL8CaIAAhc");
	this.shape_39.setTransform(247.8,415.7);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#CCCCCC").s().p("AJnCWQg9g/gBhXQABhXA9g+QA+g9BZgBQBXABA/A9QA9A+AABXQAABXg9A/Qg/A9hXAAQhZAAg+g9gAL+CaQA/AAAugtQApgqAEg4IAAgLQAAg+gtguQgugtg/AAIgCAAIABAFIAABYQgaAAgSARQgSASAAAZIAAAEIABAHIgBgHIAAgEQAAgZASgSQASgRAaAAIABAAQAZAAATARQARASABAZIAAAEIgBAHQgEATgNAOQgTARgZABIgBAAQgagBgSgRQgOgOgDgTIhcAAIgBgLQAAg+AtguQAtgtA/AAQg/AAgtAtQgtAuAAA+IABALQADA4ApAqQAuAtA/AAIABAAIAAAAgAuSCWQg/g/AAhXQAAhXA/g+QA+g9BYgBQBYABA9A9QA/A+gBBXQABBXg/A/Qg9A9hYAAQhYAAg+g9gAr9CaIABAAQA/AAAugtQApgqAEg4IAAgLQAAg+gtguQgugtg/AAIgCAAIABAFIAABYQgaAAgRARQgTASAAAZIABAEIABAHIhdAAIgBgLQAAg+AuguQAsgtA/AAQg/AAgsAtQguAuAAA+IABALQADA4AqAqQAsAtBAAAgAL+CaIgBAAIAAhcIABAAQAZgBATgRQANgOAEgTIBdAAQgEA4gpAqQguAtg/AAIAAAAgAL9CaIAAAAgAr9CaIAAhcIABAAQAZgBATgRQANgOADgTQgDATgNAOQgTARgZABIgBAAQgagBgRgRQgOgOgDgTIgBgHIgBgEQAAgZATgSQARgRAaAAIABAAQAZAAATARQASASAAAZIAAAEIgCAHIBeAAQgEA4gpAqQguAtg/AAIgBAAg");
	this.shape_40.setTransform(247.8,415.7);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#3E1F00").s().p("AH4EFQhshsAAiZQAAiXBshsQBthtCYAAQCZAABsBtQBtBsAACXQAACZhtBsQhsBsiZAAQiYAAhthsgAJniUQg+A+AABWQAABYA+A+QA+A+BYAAQBYAAA+g+QA+g+AAhYQAAhWg+g+Qg+g+hYAAQhYAAg+A+gAwCEFQhshsAAiZQAAiXBshsQBthtCYAAQCZAABtBtQBsBsAACXQAACZhsBsQhtBsiZAAQiYAAhthsgAuSiUQg/A+AABWQAABYA/A+QA+A+BXAAQBYAAA+g+QA+g+AAhYQAAhWg+g+Qg+g+hYAAQhXAAg+A+g");
	this.shape_41.setTransform(247.8,415.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.instance_6},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.instance_5}]},39).to({state:[]},40).wait(73));

	// 元件 14
	this.instance_7 = new lib.元件14();
	this.instance_7.setTransform(240.6,211.3,1,1,49.9,0,0,61.8,87);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(39).to({_off:false},0).to({scaleX:0.98,scaleY:1.07,rotation:-20.7,x:102.5,y:134.1,alpha:0},18,cjs.Ease.get(0.99)).to({_off:true},22).wait(73));

	// 图层 8
	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#663300").ss(6,1,1).p("AAvAbQghhJgzAbQgFADgEAD");
	this.shape_42.setTransform(267.6,380.7);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#663300").ss(4,1,1).p("AFvjDQABgEACgFQBlj6kFiwQjth4jVB6IgCgDQgDgBgCgCQiShhhAAlQAAAAAAAAQhQAqCECPIgCgFQFwEFGVA6gAmDm3QAAgCABgCIgpgiIAWggAmCm7IAEAFQgDgBgCAAQgUA/gUA7QgQAugBBAQAAAHAAAHQAAABAAAAIAAABQAJAEAHAHQAKAKAPAhAnFgyQgCADgDABQgCACgEAAQgUAAgQgTQgRgSAAgVQAAghAIgaQALgkAYAAQAPAAALAEQACABACAAIAAABAi4GWIhHgDIgCgDIBJjuIkNjIIAFgJIA1hVIAAgBIEYCdQAQAAARABQBPACBMgGQANgBAMgCIABAAQAEgBAFgBQANgCAPgDIAAAAQAmgKAggMQAIgEAIgDQACgCACAAIAAgBQAPgIAOgJQAFgEAEgDQATgPARgRQArgvAYhHAl+m2QDyCTAOAMQAHAGgBACQASgSAggCAiKjbIANgnQAAgIAFgFAgBieQgEAKgHALQgRAagsAMQgRAAgmgMAhDkiQBDASAEA3QAAABgBAaQAAAQgEAQIALBOAANhMIDGAuIAMACAC0CWIDciUIgEgFIgohMIAAgBIiFA/IgRAGACGAFIhWgVAhzAYIANAHAkHIEIBVhpIAkgyIAGgDIFHg5IAJgCAC/EtIAUAhIAMAWAC+F8IAkgSIAbgNICLhQIAkBQIhYBIIhXhIAC0CWIhGh5AkPKxIgTAQIh4hEIBWgSIACgBIBIhYIBjA1AkPKxIgzhHAFeG1Ii1B/IiPhsIAUggIjFCfIh4BqAFohSQALgHAFgDQAJgFAMAAQATAAAPAVQAQAUAAAXQAAAMgLANQgKAMgKAAQgFAAgGgFIgBAAQgCgCgCgCAGIENIAVgMIBpBbIhZAAIgBABADTFOIA0gnIhTiR");
	this.shape_43.setTransform(300,405.9);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#663300").s().p("AklBXIgNgNIBVhoIAlgyIAFgCIFHg6IAUAiIANAVIADAHIglASIAlgSIAbgNIBWBIIAKAQIi1B8IiMhsIARgeIjFCeg");
	this.shape_44.setTransform(304.3,450.1);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("Am6FfIBXgSIABgBIAzBHIgTARgAjXB4IhHgDIgCgDIBJjsIkOjKIAFgJIA1hVIAAAAIEZCeIAgABQBPACBNgFIAZgEIAAAAIAJgCIAcgFIAAAAQAmgJAhgPIAQgGICFg/IAAABIAoBMIAEAHIjcCUIhGh5IBGB5IBTCPIg0AoIgUgiIAJgBIgJABIlHA5IgFADIglAygAiGj9IgMgHgAFogPIAWgMIBoBZIhZAAIgBABg");
	this.shape_45.setTransform(303.2,434.5);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFCC").s().p("AkfHuIBIhYIBjA1Ih4BqgAEhDhICKhQIAkBQIhYBIgAgvhhIgggBIkZifIAAAAIg1BWIgFgDIgFAEQgCABgDABQgVAAgQgTQgQgSAAgWQAAggAIgaQALgkAXAAQAPAAAMAEIADABIABABIAAgBIAAgBIAAgOQABhAAPguIAoh7IAFABQDzCUANAMQAIAGgCACQASgSAggCIAEABQBBASAFA3IAAAbQgBAPgGAQQgEALgHALQgRAagqAMQgRgBgmgMQAmAMARABQAqgMARgaQAHgLAEgLIANBPIADADIDGAuIgEAUQghAOgmAJIAAAAIgcAGIgJABIAAAAIgZAEQg6AEg4AAIgqAAgACph1IhWgXgAmJkwQAKAKAPAhQgPghgKgKQgGgIgJgDQAJADAGAIgAhal/IgNAoIANgoQAAgHAFgFQgFAFAAAHgAjwlbIgCgEIAAAAQgYgzghAAIgBAAIAAAAQgMAAgOAHIAAAAIgJAGIAJgGIAAAAQAOgHAMAAIAAAAIABAAQAhAAAYAzIAAAAIACAEgAG4h9IgBAAIgEgEIgEACIgohNIAEgCIAQgKQAJgFAMgBQATABAQAUQAPAVAAAXQAAAMgKANQgLANgJAAQgFABgHgHg");
	this.shape_46.setTransform(296.5,418.3);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#F9E006").s().p("Alrg/IADAFQiEiPBQgqIAAAAQBAglCRBhIAGADIACADQDTh6DvB4QEFCwhlD4IgEAJQmXg6lvkDg");
	this.shape_47.setTransform(295.5,360.8);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#330000").s().p("AD9DvIgLgDIjHguIgDgDIgMhPQAGgQAAgPIABgbQgFg1hCgSIgEgBQgfACgSASQABgCgHgGQgOgMjziUIgDgEIgqgiIAXghIgDgEQFxEDGVA6IABAAQgZBHgrAuQgQASgTAPIgJAHIgdARIAAABg");
	this.shape_48.setTransform(296.9,379);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#663300").s().p("AhIAfIAAg8ICRAAIAAA8g");
	this.shape_49.setTransform(127,311.3);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#663300").s().p("AhIAfIAAg8ICQAAIAAA8g");
	this.shape_50.setTransform(90.7,311.3);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#663300").ss(4,1,1).p("ABlxtQgMgBgMgBQgcgCgdAAQgfADgeAGQAXAzAIA/QADAeAWATQAZAUAegDQAegCARgXQASgXgFgeQgFg1gYg2gAlnsgQAIkEEdg/QANgDAMgCAgepPIAwhLIg0gcQBtABBzgGAGarKQgBgBAAgBQADgBAEAAQAIgCAHgCQBDgQgEgZQAAgCgBgCQgPgeg+gHQgJkokygiAGcqtQgCgQAAgNQADAAADgDAGarKQhwAKhsAFIgwAbIArBGAltrHQgEAAgDgBQgugIgPgTQAAgBAAgCQACgiBIgYQA8AYBEAAAgiq2QhzAAhugHIgcgEQgWAAgVgDQgTgBgQgCIABAmIAuBmQABAOABAOQABAJABAKQAGBGAQBFQAGAfAJAeQAHAZAMAUQAKAQAOANAkomAQgJAEgFAAQgCAAgMAAQguAAgQgfQgKgVAAg0QAAgmAGgVQAKggAaADIAhAAAk5oNQAAgJABgJQAEhfAqgYIDqBHAlBiVQgBgGgBgFIAAgBQgGgBgDgDQgZgUB7hBAkcBsQgBgMAAgNQgDgxgUhyQgIgrgFgaAoNBBQArg0ArgpIB2h5AkcBsQgEgCgEgBQg+gYhSARQgEABgEABAi8DnQAMgSAHgNQhBhEgrgVQgDgBgEgCAjvEzQAIgLAHgLQADgEAEgFIAAAAQAKgQAIgMQACANAHAUQAHAVAFAKQgFAGgRAGQgWAIgCABQgFgDgEgIQgDgJgDgGQgEAGgEAHQgCACgBACQgMARgLARQgIAMgIAOQgJANgIAPQgCAEgDAEQgBAAAAAAQg3AFg8gPIgHg2IAxgMIAIAbAkwDmIA1BcIABACAkVCrIA8BpAmyFkQgVAjgwgKQgqgYgqgsQhIhKBPhoQAcglAbghQA1gHAiAdAGipNQABAGAAAGQAGAAALgBQALAAAPAGQAQAIAGAKQADAFABAIQABAPACAIQABAGAAASIAAAOQAAA1gKASQgNAWgtACAGcqtQACAlAEAzQAAAEAAAEQAVhAgIhEAGjpBQACAxAAAqQAABAgDAjQAAABAAABQgBAJgBAIQgLA9gmAlQgJAJgHAHQgCACgCADQgNAMgHAGQgYAUgXAJQgIADgJADQgbAJgdAHQgaAGgdAEQhEAKhAgBQgYAAgYgDIAAAAQgmgEgkgLQgwgOgrgaQgFgCgEgDQgSgLgOgPAD5l6IAEgHADOkmQAAgfArg1Qi4A7ifg7IANA9QARA2BaACQCGACAogiAFfj+QAGAJAHAJQABABABACQAWAgAPAiQABACABADIAAAAQARAnAIApQAFAZADAaQACAPABAPQAEAlgBAlQAAACAAAAQgJADgJADQghAHgcgDQgjgFggAPQgugFgrgOQgSgFACgOQACgRACgPQAIgoAEgqQAEgogBgoQgHApgkAXQggAUguAAQg0AAghgbQgigfAAg1Ahel6IgMgLAjBjbQASAZARAzQAQAzAGAxQAFAuAAAEAjHD4QAGgJAFgIAhmizQAuAtAeBkQAcBfAABgQAAAZgKAKQgLAJgTAAQgSABgKAAQgKAAgZAIQgIARhPAEADUiJQgBgGAAgFQgBgOgDgOAEHjEQAGAUABAgQACAfgDANAC7paIDhhTAGRISIBkgCIhJm5AClKDIiogCIAAD5IgZAAIAAABIAMCJIAIBhIkZANICrh4IAAgBIgZh6IgLABAiaN+IgWgfQAHgNgThLAh2P6IBmAKAiPN/IBzgFAGEN1IAWCIIAAAEIDVBxIkogSIgLhjIggiIIgUAAIhgjwAEcN1IBoAAIAZAAIgMljAGZP9IhdAAAlYEWIAwBcIAHAOAkyGcIgQB7IBAgCIKTgDAi8MFIhGjw");
	this.shape_51.setTransform(102.6,362.6);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AEWLkIgKhiIBdAAIABADIDUBxgAimJ+IBlALIAIBgIkYANgAliAhQAIgPAJgOQAIgMAIgMIAWgiIADgEIAJgMIAGAOQADAIAFAEIAYgKQASgGAFgFQgGgLgHgVQgGgUgCgNIALgQIATggQhChEgqgUIgJgcQgCgygUhzIgNhFIgDgMIAAAAQgFgCgDgCQgZgUB6hBQAOAOATAMIAIAFQAsAZAvAOQAkALAmAFQAAA1AlAeQAhAcAxAAQAuAAAhgVQAkgXAGgoIABAVQAAAdgDAeQgFApgHAqIgFAgIAAADQAAAMAQAFQAsANAtAGIABgBIABAAQAYgLAZAAIAAAAIAAAAIANAAIACABIABAAIABAAIABAAIASABIAAAAIAAAAQARAAAUgEIACAAIACgBIABAAIgBAAIgCABIgCAAQgUAEgRAAIAAAAIAAAAIgSgBIgBAAIgBAAIgBAAIgCgBIgNAAIAAAAIAAAAQgZAAgYALIgBAAIgBABQgtgGgsgNQgQgFAAgMIAAgDIAFggQAHgqAFgpQADgeAAgdIgBgVIgBgMIgDgbIgBgEQAegHAagJIASgHQAWgIAZgVIATgSIAFgEIAMARIADAEQAVAfAQAjIABAEIABABQAQAnAJApQAFAZADAaIADAdQAEAngBAmIAAACIgSAFIABAGIBJG4IhjABIqUAEIg/ABgAg4i6QgLAJgTABIgdABQgKAAgZAHQgIAShOAEQBOgEAIgSQAZgHAKAAIAdgBQATgBALgJQALgJAAgZQAAhhgehhQgehjguguQAuAuAeBjQAeBhAABhQAAAZgLAJgAjPoKQARAyAFAxIAGA0IgGg0QgFgxgRgyQgQgzgTgZQATAZAQAzgADcngQACgIAAgQIAAgUQgCgggGgTQAGATACAgIAAAUQAAAQgCAIgAnkkYIgCgKQgigeg1AHQArgzAqgrIB3h5IANBFQAUBzACAyIgHAVQg+gYhRARgAlOkmIAAAAgAgVqAQhbgDgSg2IgMg8QCfA6C4g6QgrA0AAAgIgGABQgnAgh3AAIgPAAg");
	this.shape_52.setTransform(107.4,400.6);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFCC").s().p("Ag1NWIAAgBIgZh6IBxgFIAAABIAMCJgAHaNZIhdAAIggiJIBoABIAWCIgAlqD2IgHg3IAxgLIAIAbIgIgbIgxALQgVAkgwgKQgqgZgqgsQhIhJBPhnIA3hFQA1gIAiAeIACAKIgIADIAIgDQBSgQA+AXIAIADIAHAEQArAVBBBCIgTAfIgLAQIgSAcIAAABIg8hpIA8BpIgHAJIgPAWIAPgWIAHgJIAAgBIASgcQACANAHAVQAHAUAFALQgFAFgRAGIgYAKQgFgEgEgIIgGgOIgIAMIgEACIg1hcIA1BcIABACIgXAiIgXAMIgwhcIAwBcIAHAOQgJAOgIAPIgFAIIgBAAIgZABQgrAAgvgLgAiYBwgABHj1QgkgeAAg1IAAAAQAYADAaAAIAGAAIAGAAIAAAAIAAAAQA4AAA6gIIABAAIACgBIADAAQAdgEAagGQgaAGgdAEIgDAAIgCABIgBAAQg6AIg4AAIAAAAIAAAAIgGAAIgGAAQgaAAgYgDIAAAAQgkgFgkgLQgwgOgrgZIgJgFQgSgMgOgOQgOgNgKgQQgMgUgHgZQgJgegGgfQgQhGgGhGIABAAIABgSQAEhfAqgYIDoBHIACAAIAyhLIg2gcQBvABBzgGIgwAbIArBFIACABIDhhUIAGBZIAAAIIABALIARgBQALABAPAGQAQAIAGAKQADAEABAJQABAPACAIIABAXIAAAPQAAA1gKASQgNAVgtACIgGAAIAAgCQADgiAAhBQAAgpgCgyQACAyAAApQAABBgDAiIAAACIgCARQgLA+gmAlIgQAQIgEAFIgUASQgYAUgXAJIgRAGQgbAJgdAHIAAAEIAEAcIABALQgHAogkAXQggAVguAAQg0AAghgcgAgdoeIANA8QAQA3BbACQCGACAogiIAGgBQAAgfArg1IAEgIIgEAIQi4A6ifg6IgMgMgAAjlIgAkDogQguAAgQgfQgKgWAAgzQAAgmAGgVQAKggAaADIAhAAIADABIACAcIACASQAGBGAQBGIgEABQgJAEgFAAIgOAAgAjjolIAAAAg");
	this.shape_53.setTransform(96.1,379.1);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#663300").s().p("AiyMjIgWgeQAHgOgThLIAAgCIhGjwIKUgDIAMFjIgaAAIhngBIgUAAIhgjvIgDgCIipgCIAAD5IgZABIhyAEIgLACgAlUp6IgCgcIgthmIgCgmQAQACAUABQAUADAWAAIAdAEQBuAHByABIA2AcIgyBKIgCAAIjqhHQgpAYgFBfgACiq1IgrhGIAvgbQBsgEBwgLIACAdIjhBUg");
	this.shape_54.setTransform(104.9,371.7);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#F9E006").s().p("AhBDdQhyAAhugHIgdgEQgWAAgUgDQgUgBgQgCIgHgBQgugIgOgTIAAgDQACgiBIgYQAIkCEdg/IAZgFQAXAzAHA/QAEAeAYATIABABIAAAAQATAQAYAAIAAAAIABAAIAGAAIABAAQAegCASgXQAOgSAAgXIgBgMQgGg1gXg2QExAiAKEmQA9AHAPAeIACAEQAEAZhDAQIgQAEIgGABIAAACQhwAKhsAFQhpAFhkAAIgTAAgAkICLIABAAIAAAAIABAAIgBAAIAAAAIgBAAIAAAAIgBAAQg9AAg2gVIgFgBIgCgBIgCgBIACABIACABIAFABQA2AVA9AAIABAAIAAAAgAAfgfQgYAAgTgQIAAAAIgBgBQgYgTgEgeQgHg/gXgzQAegGAggDQAcAAAbACIAZACQAXA2AGA1IABAMQAAAXgOASQgSAXgeACIgBAAIgGAAIgBAAIAAAAgABHjYIAAAAg");
	this.shape_55.setTransform(105.6,270.9);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#663300").ss(4,1,1).p("AjbkoQAkA/A4A2QALALAMALQAnAiAwAeQAaASAgARQAXgJAqgVQBJglAmgCQArAoAKAIQgVAQgrAfQgJAJgJAHQgTAQgIAQQgSAignAUQghARgmAAQgFAAgFAAAjDBbQAQhcBZg0QAegSAlgNAEnDxIgXAzIgeAEQgeADgmgDQgmgDhAgTQhBgUg0ggQhag6hGhAQg2gygqgzQgwg8ghhAQgUgpgOgpADuBSIAzgPQAkAFAegBQAggBAfABIgNBbIhkAGIBIAQIgSA8AEnDxIhbgLAFlD2Ig+gFAExCoIhMgDAC8gQIDdgeIAJBOIiBAj");
	this.shape_56.setTransform(161.9,371.1);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFCC").s().p("ABEDTQgmgCg+gUQhBgTg2ggQhag6hGhAIAKgKQAQhbBZg1QAegSAlgMIAGgJQAcASAgAQQAXgIAogWQBJgkAmgDQArAoAKAIIhAAwIgSAQQgTARgIAQQgSAjglAUQghAPgmAAIgKgBIAKABQAmAAAhgPQAlgUASgjQAIgQATgRIDdgeIAJBPIiBAkIgzAOIAzgOQAkAFAegBQAggCAfABIgNBaIhkAGIhMgDIBMADIBIAQIgSA7IgCACIg+gFIhbgLIBbALIgXA0IgeADQgPACgRAAIgkgCgAC9Ccg");
	this.shape_57.setTransform(172.5,379.5);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AhSBiQgwg8gig+QgTgogPgqQAZgGAYgHQApgOAkgVIAAAAIAFgCQAggUAdgYIAGAFQAhBAA4A1IAXAWQAnAiAwAdIgGAJQglAMgeASQhZA1gQBdIgKAJQg0gxgpg2g");
	this.shape_58.setTransform(140.1,360.9);

	this.instance_8 = new lib.元件15();
	this.instance_8.setTransform(282.6,366,1,1,0,0,0,108.6,56.6);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#CCCCCC").s("#663300").ss(4,1,1).rr(-7.45,-43.95,14.9,87.9,7.45);
	this.shape_59.setTransform(204.5,395.5,0.53,0.53,17.9);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#663300").ss(4,1,1).p("AL9lwQCZAABsBtQBtBsAACXQAACZhtBsQhsBsiZAAQiYAAhthsQhshsAAiZQAAiXBshsQBthtCYAAgAr9lwQCZAABtBtQBsBsAACXQAACZhsBsQhtBsiZAAQiYAAhthsQhshsAAiZQAAiXBshsQBthtCYAAgApiAMIheAAAopAAQAABYg+A+Qg+A+hYAAQhXAAg+g+Qg/g+AAhYQAAhWA/g+QA+g+BXAAQBYAAA+A+QA+A+AABWgAuXAMQAAgGAAgGQAAg+AtguQAtgsA/gBQAAAAABAAQBAAAAuAtQAtAuAAA+QAAAGAAAGAr+g8IABAAQAaAAASASQASASAAAYQAAACAAADQAAADgBAEQgDASgOAOQgSASgaAAIgBAAQgZAAgSgSQgOgOgDgSQgBgEAAgDQAAgDAAgCQAAgYASgSQASgSAZAAgAr+CaQABAAAAAAQBAAAAugtQApgpAEg4As6AMIhdAAQAEA4ApApQAtAtA/AAAr+iUIAABYAr+A+IAABcAOTCWQg+A+hYAAQhYAAg+g+Qg+g+AAhYQAAhWA+g+QA+g+BYAAQBYAAA+A+QA+A+AABWQAABYg+A+gAJjAMQAAgGAAgGQAAg+AtguQAtgsA/gBQAAAAABAAQBAAAAuAtQAtAuAAA+QAAAGAAAGQgEA4gpApQguAthAAAQAAAAgBAAIAAhcQgZAAgSgSQgOgOgDgSQgBgEAAgDQAAgDAAgCQAAgYASgSQASgSAZAAIABAAQAaAAASASQASASAAAYQAAACAAADQAAADgBAEQgDASgOAOQgSASgaAAIgBAAAL8iUIAABYAL8CaQg/AAgtgtQgpgpgEg4ALAAMIhdAAAM6AMIBeAA");
	this.shape_60.setTransform(274.8,415.7);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#CCCCCC").s().p("AJnCWQg9g/gBhXQABhXA9g+QA+g9BZgBQBXABA/A9QA9A+AABXQAABXg9A/Qg/A9hXAAQhZAAg+g9gAL9CaIABAAQA/AAAugtQApgqAEg4IAAgLQAAg+gtguQgugtg/AAIgCAAIABAFIAABYIABAAQAZAAATARQARASABAZIAAAEIgBAHQgEATgNAOQgTARgZABIgBAAQgagBgSgRQgOgOgDgTIgBgHIAAgEQAAgZASgSQASgRAaAAQgaAAgSARQgSASAAAZIAAAEIABAHIhcAAIgBgLQAAg+AtguQAtgtA/AAQg/AAgtAtQgtAuAAA+IABALQADA4ApAqQAuAtA/AAgAuSCWQg/g/AAhXQAAhXA/g+QA+g9BYgBQBYABA9A9QA/A+gBBXQABBXg/A/Qg9A9hYAAQhYAAg+g9gAr8CaQA/AAAugtQApgqAEg4QgEA4gpAqQguAtg/AAIgBAAIAAhcQgagBgRgRQgOgOgDgTIhdAAQADA4AqAqQAsAtBAAAIABAAIAAAAgAr8A+QAZgBATgRQANgOADgTQgDATgNAOQgTARgZABIgBAAgAr8g8QAZAAATARQASASAAAZIAAAEIgCAHIBeAAIAAgLQAAg+gtguQgugtg/AAIgCAAQg/AAgsAtQguAuAAA+IABALIgBgLQAAg+AuguQAsgtA/AAIABAFIAABYQgaAAgRARQgTASAAAZIABAEIABAHIgBgHIgBgEQAAgZATgSQARgRAaAAgAL9CaIAAhcIABAAQAZgBATgRQANgOAEgTIBdAAQgEA4gpAqQguAtg/AAIgBAAgAr9CaIAAAAg");
	this.shape_61.setTransform(274.8,415.7);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#3E1F00").s().p("AH4EFQhshsAAiZQAAiXBshsQBthtCYAAQCZAABsBtQBtBsAACXQAACZhtBsQhsBsiZAAQiYAAhthsgAJniUQg+A+AABWQAABYA+A+QA+A+BYAAQBYAAA+g+QA+g+AAhYQAAhWg+g+Qg+g+hYAAQhYAAg+A+gAwCEFQhshsAAiZQAAiXBshsQBthtCYAAQCZAABtBtQBsBsAACXQAACZhsBsQhtBsiZAAQiYAAhthsgAuSiUQg/A+AABWQAABYA/A+QA+A+BXAAQBYAAA+g+QA+g+AAhYQAAhWg+g+Qg+g+hYAAQhXAAg+A+g");
	this.shape_62.setTransform(274.8,415.7);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#663300").ss(4,1,1).p("Aj3BNIAAgeQAAhIAog0QAlgxA1gCQgPgGgIgBAgZgDQAAgEAAgFQAAgkABgIQADgbAMgZQACgDACgDQABgCAFgQQAhg3AqgUQAMgGANgDQA5gNAbAEQABAAAAAAAhviBQAJACALADQAGACAGABAhNh5QArAKAWACAhqCwQABAAACABQAMACAzAXQA4AZAYAAQA8AAARgSQAJgLgBgdQgCgcANgLQAUgTBCAAQAdgcgOgsQAagngZg5ADRjhQAGAVABAWQAAAHAAAHABkiBQA1gtA8AKQAyAwgZA7QhBgVgyAiADWAfQgmgKglAVAj5BPQA1AsBYA1QAAAAABAA");
	this.shape_63.setTransform(105,385);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFCC").s().p("AgoDKQgzgXgMgCIgDgBIgBAAIgBAAQhYg1g1gsIACgCIAAgeQAAhIAog0QAlgxA1gCIAGgBIAUAFIAMADIACAAQArAKAWACIADABIAEgGIAGgSQAhg3AqgUQAMgGANgDQA5gNAbAEIABAAIAXAAQAGAVABAWIAAAOIgDAEQAyAwgZA7QAZA5gaAnQAOAsgdAcQhCAAgUATQgNALACAcQABAdgJALQgRASg8AAQgYAAg4gZgACLAqIABAAIACgBIABgBQAXgMAXAAIABAAIAAAAQALAAAKACIADABIgDgBQgKgCgLAAIAAAAIgBAAQgXAAgXAMIgBABIgCABIgBAAgAgYg4QgBAIAAAkIAAAJIAAgJQAAgkABgIQADgbAMgZQgMAZgDAbgAB7gsIACgBIABgBQAegTAiAAIABAAIAAAAQAVAAAWAHIAAAAIACAAIAAAAIACABIgCgBIAAAAIgCAAIAAAAQgWgHgVAAIAAAAIgBAAQgiAAgeATIgBABIgCABgABkiBIAEgEIABAAIABgBIAAAAQAogfAsAAIABAAIAAAAQALAAALABQgLgBgLAAIAAAAIgBAAQgsAAgoAfIAAAAIgBABIgBAAIgEAEg");
	this.shape_64.setTransform(105,385);

	this.instance_9 = new lib.元件20();
	this.instance_9.setTransform(171.7,400.2,1,1,0,0,0,51.8,81);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#663300").ss(5,2,0,3).p("AB5AVQA5AcBEgdAjzgZQA4AiBFgM");
	this.shape_65.setTransform(132.5,315.7);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#663300").ss(4,1,1).p("AmRhvIAIA2IAXBOQABAAABAAAmRhvQgWgLgLgFQgSgKgCgUQgBgNAEgMQAFgNAKgGQAbgPAgAJQA3AhBDAIAE0ADQAAAAgBAAQhtAJhygGQg7gEg6gHQh3gTh8gpQgLgEgKgDIgBgBIgBAAIhmgmAkXg5IgxAsIEUBIAl5jPQAtkAEjgWQApgDAuACQAdAEAbAGQFCBHghEaQAKADAMACQBAAQgQBGQgFADgEACQgcAMgxAHIAAAAQAPA4gaA4QgBADgCAEQAAgEABgEQADgyADgmQABgPAFgIIhCALAgYncQATBVgPBeQgBAeATAXQATAWAdACQAeACAXgUQAWgUACgeQAMhVgPhZAgvA7IANg2AGkDXQADgRAAgGQgBgIABgPQAAgJgCgFQgEgLgPgKQgOgIgLgCQgLAAgGgBIAAAAQgFAxgGApQgJBAgIAiQAAAAgBABQgCAJgCAIQgUA8gqAeQgKAIgIAGQgDABgDACQgOALgHAFQgcARgXAFQgjAIgpADQgaADgdAAQhDAAhAgKQgZgEgXgGQglgKgigRQgugUgngfQgEgDgDgEQgggagPgkQgKgXgDgZQgEgfgDgfQgFhHADhGQAEgKACgJQARhaAtgTABTASIAKA4ID8gNQAXggg8gaAlyAVIAAAAIABACAl3DUQgIACgGAAQgBgBgNgBQgugHgLgiQgHgWAIgzQAFgmAJgTQAPgeA8AKAiWFGIgPAWAinFiICgArAE0ADIAAAAAGiDmQgHA0gNAQQgQAUgtgF");
	this.shape_66.setTransform(132.8,296.7);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFCC").s().p("AhIEPQgZgFgYgFQglgLgigQQgtgUgnggIgIgGQgggagPgkQgJgXgEgZIgHg+QgCgoAAgqIABg6IAFgSQARhdAtgSIAIgPIAWAIIgDAHIgxAsIEUBKIAEAAIANg1IACgMQA6AJA7ADIgBANIAJA4ID9gOQAWggg7gZIBCgNQgFAKgBAOIgHBZIAAAHIgBAMIAQACQAMABANAJQAPAKAEALQACAFAAAIIAAAYQABAGgDAPIgCAOQgIA1gNAQQgPAUgtgFIgGgBIAAgCQAJghAJhAQAGgnAEgyIABAAIgBAAQgEAygGAnQgJBAgJAhIAAACIgEAQQgUA9grAeIgSAOIgFADIgWAQQgbAQgYAFQgjAJgoADQgbACgdABQhCAAhAgKgAAMC+IiegrgAiRCMIAPgVgADGASQAgAAAigPQgiAPggAAIAAAAIAAAAQgeAAgcgNIgBgBIABABQAcANAeAAIAAAAIAAAAgAiKgQQASAAATgEIABAAIgBAAQgTAEgSAAIAAAAIAAAAQguAAgogZIAAAAIgBAAIABAAIAAAAQAoAZAuAAIAAAAIAAAAgAl+AEQgugEgLgiQgHgWAHgzQAGgmAJgUQAOgdA9AJIAAABIAAgBIABAAIgBABIgDAAIADABIgCAcIgBATIgBA6QAAAqACAoIgEAAQgIACgFAAIgOgCg");
	this.shape_67.setTransform(130.7,317.4);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#F9E006").s().p("ABQD1Qg7gEg6gJQh3gSh8gpIgWgIIAAAAIgCgBIhlgmIghgQQgTgKgCgUQgBgNAEgMQAFgNAKgGQAcgOAgAIQA3AhBDAJQhDgJg3ghQAtj+EjgVQApgDAtACQAdAEAbAGQFCBHghEYIAWAFQBBAPgRBHIgJAEQgbAMgxAHIAAABIgBAAIhCANIAAgBIgBABQg/AFhBAAQgvAAgwgDgAAwARQAYAAATgPIAAAAIADgCQAXgSACgeQAFglAAgmQAAgxgJgzQAJAzAAAxQAAAmgFAlQgCAegXASIgDACIAAAAQgTAPgYAAIgBAAIAAAAIgFAAQgegCgSgUQgSgVAAgbIAAgEQAGgpAAgoQAAgygLgwQALAwAAAyQAAAogGApIAAAEQAAAbASAVQASAUAeACIAFAAIAAAAIABAAg");
	this.shape_68.setTransform(133.2,272.7);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#663300").s().p("ABsAlIABgMQByAGBtgIIABgBIAAABIgBAAIABAAQA8AZgXAgIj8ANgAgbBOIkUhKIAxgqIADgHQB8ApB3AQIgBANIgNA1gAlaBGIACgcIgBgBIACgBIgCAAIgXhNIgIg3IBmAmIgGAQQgtASgRBbg");
	this.shape_69.setTransform(130.3,294.8);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#663300").ss(4,1,1).p("AogiAQhlhUAYg4QA3iJCbi7QgGgZgCgCQAGgGAdgmQAXgeALgMAB7o4QgHAogjAXQghAVguAAQgxAAgigcQgSgPgJgVQgIgUgBgZQAAgBAAgBIABAAAEGqtQAHAIAGAJQAXAhAQAlQABABABABIACACQB4B3BeCrIAAACIAAAAQB0DzgbCuAkaqKQATAZARAzQAQAzAFAwQAGAxAAADAmbpQQAFAbAKA2QAUBzACAyQABAHAAAGQAAACAAACQABAAABAAAmblRQADAAADAAQgDgBgDgBAB7o4QACAogFAoQgEApgHAqQgDAPgCARQgCAPASAFQAsANAtAFQAggPAjAFQAcADAhgHIABAAQAIgDAJgCQAAgBAAgCQABglgDgnQgEgpgIgnQgIgpgRgnQAAAAAAgBIAAAAQgBgBAAAAQAAgCgBgBAB7o4QAAgGgBgGQgBgNgDgOACupzQAGAUACAfQABAggDAMAhTmyIgXAAIAAAAQAAgCgBgBIAAgBQgDgOgFgOQgLglgNgdQgVgugZgbAhMl4IgDAEAg3ioQgHACgQgKAFsjAIgZiXAFsjAICkhsAIAAjIAnADAIAAjIgEBNIAAAQIAAACIgBAAIhzAKAICgRIgCA0AJtB4IhmgHAGHCHIgOgjAGaBhIghAAIhHAAIhcFjIgaAAIgSCIIAAABIhdAAIAJiJIBmAAABWHEIgUAAIAAgBIALjwIipgDIAAD5IgZABIAAACIAMCIIAIBgIkYANICrh4IAAAAIgZh6IgLABAmWBlIAFiDIABAAAlbBlIg0AAAkUFVIhHjwIKNgEAjyHNIgXgeQAHgOgShKACqJNIAAACICzByIkigSIAShiAjnHPIBygFAjOJJIBlALAGcBgIgwkgAGOg4IAygr");
	this.shape_70.setTransform(134.4,405.9);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#663300").s().p("AjeC0IgWgeQAHgOgThKIAAgCIhGjuIKNgEIhdFhIgZAAIhmAAIgUgBIALjuIipgDIAAD3IgZABIhyAFIgMABg");
	this.shape_71.setTransform(132.3,434);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFCC").s().p("AmTJSIAAgBIgZh6IBygFIAAACIAMCIgAh2JVIAJiJIBmABIgSCIIAAAAgADCCQIgOgkIAAgDIAhAAIACgBIgwkgICkhsIAEgBIAAAAQB0DzgbCtIAAAFIhmgHIgLgBIAEhNIAnADIgngDIACg0IgCA0IgEBNIAAARIgBABIhzAKgADJgwIAygrgAkWn4QgSgPgJgVQgIgTgBgaIAAgCIABAAQAYADAZABQBBABBDgLQAdgEAagGIAAAEQADAOABAOIABALQgHApgjAWQghAVguAAQgzAAgigcg");
	this.shape_72.setTransform(154.1,405.1);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("ABrLOIARhiIBeAAIAAADICzBygAifJpIBmAKIAIBhIkYANgAlfCFIgHAAIAFiFIABAAIACAAQAMACAzAXQA6AZAYAAQA8AAARgSQAKgKgCgbQgBgdAMgLQAVgTBBAAQAbgcgLgsQAYgogXg6QAWg7gwgwIAEgDIAAgPQgBgVgHgWIgWAAIAAAAIgBgEIAAAAIgIgcQgLglgOgdQgUgugagbQAaAbAUAuQAOAdALAlIAIAcIAAAAIABAEIAAAAIgBAAQgcgEg4ANQgNADgNAGQgqAUghA3IgIASIgDAHIgDgCQgWgCgsgKIgCgRIABAOIAAADIgMgCIgUgGIgHgBIAAACQg0ACgmAxQgoA0AABKIAAAeIgCACQhlhUAXg5QA3iICbi7QgFgZgDgDQAGgGAdglQAXgeALgMIAHgCIBgg9IAqBsIBZBDQAAAZAJAUQAJAVASAPQAhAbAyAAQAuABAggVQAkgXAGgoIABAZQAAAbgDAcQgEApgIAqIgFAfIAAADQAAANARAFQArANAtAFIAEgCQAXgKAYAAIAAAAIAAAAIAPABIAAAAIACAAIASACIAAAAIAAAAQASAAATgEIAAAAIADgBIABAAIABAAIABgBIAAAAIASgFIAAgCIAAgQQAAgegDgeQgDgpgIgnQgJgpgQgnIgBgBIAAAAIAAgBIABgBIABACQB5B3BdCrIAAACIgEACIikBsIgYiXIAYCXIAwEgIgCABIggAAIhHAAIqNAEgAldnfQAVBzACAxQgCgxgVhzIgPhRIAPBRgAjHofQAQA0AGAwIAFA0IgFg0QgGgwgQg0QgQgzgTgYQATAYAQAzgAColBQgRgFAAgNIAAgDIAFgfQAIgqAEgpQADgcAAgbIgBgZIAAgMQgBgOgDgOIgBgDQAegIAagIIASgHQAWgIAZgVIATgSIAFgEIAMARQAXAhARAkIABAEIAAABIAAAAIABABQAQAnAJApQAIAnADApQADAeAAAeIAAAQIAAACIgSAFIAAAAIgBABIgBAAIgBAAIgDABIAAAAQgTAEgSAAIAAAAIAAAAIgSgCIgCAAIAAAAIgPgBIAAAAIAAAAQgYAAgXAKIgEACQgtgFgrgNgADjn0QADgJAAgSIgBgRQgCgggGgTQAGATACAgIABARQAAASgDAJgAFrozIAAAAg");
	this.shape_73.setTransform(129.6,402.7);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#663300").ss(4,1,1).p("AQCkDQBtBsAACXQAACZhtBsQhsBsiZAAQiYAAhthsQhshsAAiZQAAiXBshsQBthtCYAAQCZAABsBtgAr9lwQCZAABtBtQBsBsAACXQAACZhsBsQhtBsiZAAQiYAAhthsQhshsAAiZQAAiXBshsQBthtCYAAgApiAMQAAgGAAgGQAAg+gtguQgugthAAAQgBAAAAAAQg/ABgtAsQgtAuAAA+QAAAGAAAGQAEA4ApApQAtAtA/AAAr+g8IABAAQAaAAASASQASASAAAYQAAACAAADQAAADgBAEQgDASgOAOQgSASgaAAIgBAAQgZAAgSgSQgOgOgDgSIhdAAAr+iUIAABYArAAMIBeAAAuSiUQA+g+BXAAQBYAAA+A+QA+A+AABWQAABYg+A+Qg+A+hYAAQhXAAg+g+Qg/g+AAhYQAAhWA/g+gAs6AMQgBgEAAgDQAAgDAAgCQAAgYASgSQASgSAZAAAr+A+IAABcQABAAAAAAQBAAAAugtQApgpAEg4APRAAQAABYg+A+Qg+A+hYAAQhYAAg+g+Qg+g+AAhYQAAhWA+g+QA+g+BYAAQBYAAA+A+QA+A+AABWgAJjAMQAAgGAAgGQAAg+AtguQAtgsA/gBQAAAAABAAQBAAAAuAtQAtAuAAA+QAAAGAAAGQgEA4gpApQguAthAAAQAAAAgBAAQg/AAgtgtQgpgpgEg4gALAAMQgBgEAAgDQAAgDAAgCQAAgYASgSQASgSAZAAIABAAQAaAAASASQASASAAAYQAAACAAADQAAADgBAEQgDASgOAOQgSASgaAAIgBAAQgZAAgSgSQgOgOgDgSIhdAAAL8g8IAAhYAL8CaIAAhcAM6AMIBeAA");
	this.shape_74.setTransform(301.8,415.7);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#CCCCCC").s().p("AJnCWQg9g/gBhXQABhXA9g+QA+g9BZgBQBXABA/A9QA9A+AABXQAABXg9A/Qg/A9hXAAQhZAAg+g9gAJjAAIABALQADA4ApAqQAuAtA/AAIABAAQA/AAAugtQApgqAEg4IAAgLQAAg+gtguQgugtg/AAIgCAAIABAFIAABYQgaAAgSARQgSASAAAZIAAAEIABAHIhcAAIgBgLQAAg+AtguQAtgtA/AAQg/AAgtAtQgtAuAAA+IAAAAgAuSCWQg/g/AAhXQAAhXA/g+QA+g9BYgBQBYABA9A9QA/A+gBBXQABBXg/A/Qg9A9hYAAQhYAAg+g9gAr8CaQA/AAAugtQApgqAEg4QgEA4gpAqQguAtg/AAIgBAAIAAhcQgagBgRgRQgOgOgDgTIhdAAQADA4AqAqQAsAtBAAAIABAAIAAAAgAr8A+QAZgBATgRQANgOADgTIBeAAIAAgLQAAg+gtguQgugtg/AAIgCAAIABAFIAABYQgaAAgRARQgTASAAAZIABAEIABAHIgBgHIgBgEQAAgZATgSQARgRAaAAIABAAQAZAAATARQASASAAAZIAAAEIgCAHQgDATgNAOQgTARgZABIgBAAgAuXAAIABALIgBgLQAAg+AuguQAsgtA/AAQg/AAgsAtQguAuAAA+IAAAAgAL9CaIAAhcIABAAQAZgBATgRQANgOAEgTIBdAAQgEA4gpAqQguAtg/AAIgBAAgAL9A+QgagBgSgRQgOgOgDgTIgBgHIAAgEQAAgZASgSQASgRAaAAIABAAQAZAAATARQARASABAZIAAAEIgBAHQgEATgNAOQgTARgZABg");
	this.shape_75.setTransform(301.8,415.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_62,p:{x:274.8}},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59,p:{x:204.5}},{t:this.instance_8,p:{x:282.6}},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42}]},83).to({state:[{t:this.shape_62,p:{x:301.8}},{t:this.shape_75},{t:this.shape_74},{t:this.shape_59,p:{x:231.5}},{t:this.instance_8,p:{x:309.6}},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.instance_9},{t:this.shape_64},{t:this.shape_63}]},25).to({state:[]},43).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(18,156.6,446.6,445.6);


(lib.元件6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 元件 8
	this.instance = new lib.元件8();
	this.instance.setTransform(86.4,13.8,1,1,0,0,0,0,13.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:30.1,regY:14.9,rotation:15.9,x:115.5,y:23.3},0).wait(1).to({rotation:27.2,x:113.4,y:28.9},0).wait(1).to({rotation:34,x:111.6,y:32},0).wait(1).to({regX:0,regY:13.8,rotation:36.2,x:87.4,y:14.3},0).wait(1).to({regX:30.1,regY:14.9,rotation:32.6,x:112,y:31.4},0).wait(1).to({rotation:24.1,x:114,y:27.4},0).wait(1).to({rotation:13.7,x:115.7,y:22.2},0).wait(1).to({rotation:4.4,x:116.4,y:17.2},0).wait(1).to({regX:0,regY:13.8,rotation:0,x:86.4,y:13.8},0).wait(1));

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#663300").ss(7,1,1).p("AFvAqIA2ALIAQlFIAAgJIgBAAIgBABIgiAIAD1nYIB0AXQAggBAggCIiJCTIgVhPAELmCIgWhWABCndQAcgKAcgKIB7AZIhfBEIhCAvIgSh4Qi7BAjOAhIAUCVID3ggIAxgtAiphIIhMgQIC5ivAijHIIAAAAQhAApgZACIgrikQgHhNAnANQAcAhAlBNIBchoIgbgTIA7hWIADgFAhKCsIlZABIgRh7QCLgsCAhOIIYByQgMB4gyAzIkfCWIgUgPIhohHAjGF9QAQAgATApQAAABAAABAgCFcIiYBmQgFADgEAD");
	this.shape.setTransform(43.8,58);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#663300").ss(2,1,1).p("AAAAAIAAAA");
	this.shape_1.setTransform(70.5,19.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#663300").s().p("AAgDLIhnhHIgbgTIA8hWIACgFIgCAFIlaABIgRh5QCLgsCAhQIIYB0QgLB2gzAzIkfCWg");
	this.shape_2.setTransform(40.3,72.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F9E006").s().p("AhAgvQgHhOAnAOQAcAgAjBNIAjBIIAAABIAAABQhAAogXACg");
	this.shape_3.setTransform(20.7,96.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#AF361D").s().p("AiHCgQAIgeAHgWQAHgXAbgjQAbgjA3gfIABgJQADgqAXgMIgFAAQAEgfABgTIBehEIAWBWIABACQgtAygEAAQgFAAgIgCIgBAQQAAAUAKAeQAKAgAAAYQAAA0gjAiQgVAVg3AeQALgHADgLQAFgMAAgVQAAgMgFgqIgDgbIAAgBQgCgVAAgLIAAgHQgBAOgKAbQgKAbglAgQglAggmAog");
	this.shape_4.setTransform(56.6,30.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AEYEIIoYhzIhMgQIC5itIj3AgIgUiWQDOggC9hBIASB5IBAgvIhAAvIgSh5IA2gUIB7AZIhfBFQAAATgEAeIAEAAQgWANgGApIAAAJQg1AigbAjQgbAggHAXQgHAXgIAeIgEAmQAngoAlggQAjggAKgbIANgCIADAbQAGArAAALQAAAVgFAMQgFAMgKAGQA4gdAWgWQAjgiAAgzQAAgXgKggQgKgfAAgVIABgQQAIACAFAAQAEAAAsgyIAVBQICJiTIAHgGQCLBiiHBPIgBAAIgiAJIAigJIACAJIgQFFgAiTgoIAxgtgAC0iiIAAgBIgWhXIB0AYIBAgDIiJCTgAFSjlg");
	this.shape_5.setTransform(52.5,35.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFCC").s().p("AhgAPIBbhmIBnBHIiXBkIgJAEIgihJg");
	this.shape_6.setTransform(33.7,94.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.5,-3.5,153.7,114.9);


(lib.son = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2
	this.instance = new lib.元件6();
	this.instance.setTransform(46.6,126.1,1,1,0,0,0,73.3,53.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:121.7},5).to({y:126.1},4).wait(1));

	// 图层 1
	this.instance_1 = new lib.元件7();
	this.instance_1.setTransform(-118.2,-142,1,1,0,0,0,-118.2,-142);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:-146.3},3).to({y:-142},6).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-30.2,-3.5,153.7,187);


(lib.game = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* 使用缓动弹出效果对指定对象实现补间。
		*/
		/*
		var target = this.car_mc;
		var tween = createjs.Tween.get(target, {
			loop: true
		})
			.to({
				x: target.x,
				y: canvas.height - 55,
				rotation: -360
			}, 1500, createjs.Ease.bounceOut)
			.wait(1000)
			.to({
				x: canvas.width - 55,
				rotation: 360
			}, 2500, createjs.Ease.bounceOut)
			.wait(1000)
			.to({
				scaleX: 2,
				scaleY: 2,
				x: canvas.width - 110,
				y: canvas.height - 110
			}, 2500, createjs.Ease.bounceOut);
		*/
		/* 将库中的实例添加到舞台
		将指定的影片剪辑或按钮库元件的实例添加到舞台。
		
		说明:
		Add "LibrarySymbol" as the linkage property of the symbol.
		*/
		
		// 如果您希望添加库中的其他元件，
		// 请在以上步骤 2 中的类文本字段中和以下代码中输入其他名称。
		/*
		var fl_MyInstance = new lib.LibrarySymbol();
		this.addChild(fl_MyInstance);
		*/
		this.stop();
		
		var root=this;
		var autoTime;//帧循环;
		var addHitTime;//添加障碍物,隔一段时间;
		var gyroControl;//陀螺仪控制;
		var isRight=true;
		var speed=10;
		var speedAdd=2;
		var addHitTimeMillisecond=3000;
		var date;
		var scoreArr=[250,150,250,200,100,100,200];
		
		//init();
		//operation;
		
		this.initGame=initGame;
		this.nextFrame=nextFrame;
		this.startGame=startGame;
		
		function startGame()
		{
			setTimeout(init,50);
		}
		
		function init()
		{
			isRight=true;
			speed=10;
			addHitTimeMillisecond=3000;
			score=0;
			root.score_txt.text=score+'m';
			console.log('game init');
			root.time_mc.gotoAndPlay(1);
			root.left_mc.visible=root.right_mc.visible=false;
			root.left_btn.alpha=0.001;
			root.right_btn.alpha=0.001;
			
			root.car_mc.x=496;
			root.car_mc.y=1353;
			
			root.road_mc.play();
			//446 1353
			
			//alert(new Date().getTime());
			
		}
		
		function nextFrame()
		{
			setTimeout(function(){
				stopAll();
			},1000);
		}
		
		function stopAll()
		{
			//score=0;
			root.score_txt.text=score;
			root.left_mc.visible=root.right_mc.visible=false;
			root.left_btn.alpha=0.001;
			root.right_btn.alpha=0.001;
			
			root.car_mc.x=496;
			root.car_mc.y=1353;
			
			removeHitMc();
			root.endAlert_mc.gotoAndStop(0);
			root.parent.gotoAndStop(3);
		}
		
		function initGame()
		{
			console.log('game start');
			
			setControl();
			
			createjs.Tween.get(root.car_mc, {loop: false}).to({y: 880,x:496}, 700);
			
			setHit();
		}
		
		function setHit()
		{
			var strTem="";  // 临时变量
			for(value in root.hit_mc){
			   strTem+=value+'：'+root.hit_mc[value]+"\n";
			}
			//console.log(strTem);	
			
			autoTime=setInterval(frameFun,30);
		
			addHitTime=setInterval(addHitFun,3000);
		}
		
		function addHitFun()
		{
			var arr=[lib.hit0,lib.hit1,lib.hit2,lib.hit3,lib.hit4,lib.hit5,lib.hit6];
			//var arr=[lib.hit0,lib.hit0,lib.hit0,lib.hit0,lib.hit0];
			var rnd=Math.random()*arr.length>>0;
			var dirRnd=Math.random()*2>>0;
			//dirRnd=0;
			//console.log('dirRnd:',dirRnd);
			var mc = new arr[rnd]();
			mc.id=rnd;
			mc.times=new Date().getTime();
			//console.log(mc.times);
			root.hit_mc.addChild(mc);
			
			mc.y=-100;
			if(dirRnd==1)
			{
				mc.x=464;
				mc.gotoAndStop(1);
			}
			else if(dirRnd==0)
			{
				mc.x=184;
				mc.gotoAndStop(0);
			}
			
			speed+=speedAdd;
			
			
			clearInterval(addHitTime);
			addHitTimeMillisecond-=100;
			if(addHitTimeMillisecond<=900)
			{
				addHitTimeMillisecond=900;
			}
			//console.log('addHitTimeMillisecond:',addHitTimeMillisecond);
			addHitTime=setInterval(addHitFun,addHitTimeMillisecond);
		}
		
		function frameFun()
		{
			var mc;
			//console.log(root.hit_mc.children.length);
			var mcx,mcy,mcwidth,mcheight,carx,cary;
			var carx1,cary1;
			var mcobj;
			var carobj;
			
			for(var i=0;i<root.hit_mc.children.length;i++)
			{
				mc=root.hit_mc.children[i];
				//mc.y+=speed;
				mc.y=(-mc.times+new Date().getTime())*speed/30;
				//console.log(mc);
				if(mc.y>1236)
				{
					addScore(mc);
					root.hit_mc.removeChild(mc);
					//console.log('remove mc');
				}
				else
				{
					mc.hit_mc.alpha=0.001;
					root.car_mc.hit_mc.alpha=0.001;
					//mc.hit_mc.alpha=0.5;
					//root.car_mc.hit_mc.alpha=0.5;
					
					//console.log('hit mc scale:',mc.hit_mc.scaleX);
					
					mcobj=localPosToGlobal(mc.hit_mc);
					mcx=mcobj.x>>0;
					mcy=mcobj.y>>0;
					mcwidth=mc.hit_mc.nominalBounds.width*mc.hit_mc.scaleX;
					mcheight=mc.hit_mc.nominalBounds.height*mc.hit_mc.scaleY;
					
					carobj=localPosToGlobal(root.car_mc.hit_mc);
					carx=carobj.x>>0;
					cary=carobj.y>>0;
					
					carx1=carx+root.car_mc.hit_mc.nominalBounds.width;
					cary1=cary+root.car_mc.hit_mc.nominalBounds.height;
					
					//console.log(mcx,mcy,carx,cary);			
					
					if((carx>mcx&&carx<(mcx+mcwidth))&&(cary>mcy&&cary<(mcy+mcheight)))
					{
						console.log('car_mc hit mc area!');
						hitObjectFun(mc);
					}
					else if((carx1>mcx&&carx1<(mcx+mcwidth))&&(cary1>mcy&&cary1<(mcy+mcheight)))
					{
						console.log('car_mc hit mc area!');
						hitObjectFun(mc);
					}
				}
			}
			
			//console.log('hit_mc children:',root.hit_mc.children.length);
		}
		
		function removeHitMc()
		{
			var mc;
			var num=root.hit_mc.children.length;
			
			for(var i=0;i<num;i++)
			{
				//mc=root.hit_mc.children[i];
				root.hit_mc.removeChildAt(0);
			}
		}
		
		function addScore(mc)
		{
			score+=scoreArr[mc.id];
			root.score_txt.text=score+'m';
		}
		
		function hitObjectFun(mc)
		{
			removeGame();
			
			if(mc._matrix.tx==464)
			{
				root.endAlert_mc.x=250;
			}
			else if(mc._matrix.tx==184)
			{
				root.endAlert_mc.x=45;
			}
			
			root.endAlert_mc.gotoAndPlay(1);
		}
		
		function hitMcMove(mc)
		{
			
		}
		
		function setControl()
		{
			//operation=1;
			
			if(operation==0)
			{
				root.left_mc.visible=root.right_mc.visible=false;
				gyroControl=setInterval(gyroControlFun,30);
			}
			else if(operation==1)
			{
				root.left_mc.visible=root.right_mc.visible=true;
				root.left_btn.name='left_btn';
				root.right_btn.name='right_btn';
				
				root.left_mc.alpha=1;
				root.right_mc.alpha=1;
				
				canvas.addEventListener('touchstart',onMouseEvent,true);
				
			}
		}
		
		function gyroControlFun()
		{
			if(g>2)
			{
				rightFun();
			}
			else if(g<-2)
			{
				leftFun();
			}
		}
		
		function removeGame()
		{
			canvas.removeEventListener("touchstart", onMouseEvent,true);
			
			clearInterval(autoTime);
			clearInterval(addHitTime);
			clearInterval(gyroControl);
			
			root.road_mc.stop();
			
			createjs.Tween.removeAllTweens();
		}
		
		function leftFun()
		{
			//root.car_mc.x=166+50;
			if(isRight)
			{
				createjs.Tween.get(root.car_mc, {loop: false}).to({x: 216}, 400,createjs.Ease.circOut)
				isRight=!isRight;
			}
		}
		
		function rightFun()
		{
			//root.car_mc.x=446+50;
			if(!isRight)
			{
				createjs.Tween.get(root.car_mc, {loop: false}).to({x: 496}, 400,createjs.Ease.circOut)
				isRight=!isRight;
			}
		}
		
		function onMouseEvent(e)
		{
			//阻止网页默认动作（即网页滚动）
			e.preventDefault();
			
			var touch=e.touches[0];
			
			var obj=checkClickArr(touch,[root.left_btn,root.right_btn]);
			
			if(obj.click==true)
			{
				playSound0();
				if(obj.mcname=='left_btn')
				{
					leftFun();
				}
				else if(obj.mcname=='right_btn')
				{
					rightFun();
				}
				//console.log('choose type:',obj.mcname);
			}
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// 倒计时time_mc
	this.time_mc = new lib.元件64();
	this.time_mc.setTransform(317.5,575.2,1,1,0,0,0,147.1,147.1);

	this.timeline.addTween(cjs.Tween.get(this.time_mc).wait(1));

	// left right btn
	this.right_btn = new lib.元件66();
	this.right_btn.setTransform(491.3,535.2,1,1,0,0,0,132,93);
	this.right_btn.alpha = 0;

	this.left_btn = new lib.元件66();
	this.left_btn.setTransform(-16,535.2,1,1,0,0,0,132,93);
	this.left_btn.alpha = 0;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.left_btn},{t:this.right_btn}]}).wait(1));

	// 操作
	this.right_mc = new lib.元件56();
	this.right_mc.setTransform(530.4,1060.6,1,1,0,0,180,69.5,67.8);
	this.right_mc.alpha = 0;

	this.left_mc = new lib.元件56();
	this.left_mc.setTransform(104.3,1060.6,1,1,0,0,0,69.5,67.8);
	this.left_mc.alpha = 0;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.left_mc},{t:this.right_mc}]}).wait(1));

	// 图层 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Egx/BYwMAAAixfMBj+AAAMAAACxfg");
	mask.setTransform(320,568);

	// 分数score_txt
	this.score_txt = new cjs.Text("2500 m", "45px 'FZCuYuan-M03'", "#F9E006");
	this.score_txt.name = "score_txt";
	this.score_txt.textAlign = "center";
	this.score_txt.lineHeight = 47;
	this.score_txt.setTransform(318,4.6);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#663300").s().rr(-162.9,-51.65,325.8,103.3,31.8);
	this.shape.setTransform(319.6,14.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s("#663300").ss(3,2,0,3).rr(-162.9,-51.65,325.8,103.3,31.8);
	this.shape_1.setTransform(319.6,25.7);

	this.score_txt.mask = this.shape.mask = this.shape_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.score_txt}]}).wait(1));

	// 失败endAlert_mc
	this.endAlert_mc = new lib.元件58();
	this.endAlert_mc.setTransform(305.2,458.1);

	this.endAlert_mc.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.endAlert_mc).wait(1));

	// 车 car_mc
	this.car_mc = new lib.元件43();
	this.car_mc.setTransform(482.6,1424.1,1,1,0,0,0,36.4,70.6);

	this.car_mc.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.car_mc).wait(1));

	// hit_mc
	this.hit_mc = new lib.元件68();
	this.hit_mc.setTransform(105,107,1,1,0,0,0,105,107);

	this.hit_mc.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.hit_mc).wait(1));

	// 线road_mc
	this.road_mc = new lib.line();
	this.road_mc.setTransform(314.7,517.2,1,1,90,0,0,517.2,9.8);

	this.road_mc.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.road_mc).wait(1));

	// 路
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#663300").ss(4,1,1).p("EApShd1MAAAC7rMhSjAAAMAAAi7rg");
	this.shape_2.setTransform(318.7,581.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFCC").s().p("EgpRBd2MAAAi7rMBSjAAAMAAAC7rg");
	this.shape_3.setTransform(318.7,581.4);

	this.shape_2.mask = this.shape_3.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(1));

	// 图层 1 复制
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Egx/BYwMAAAixfMBj+AAAMAAACxfg");
	this.shape_4.setTransform(320,568);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-148,0,997.4,1136.1);


(lib.finallll = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 车
	this.instance = new lib.元件15();
	this.instance.setTransform(154.2,961.1,1,1,0,0,0,108.6,56.6);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s("#663300").ss(4,1,1).rr(-7.45,-43.95,14.9,87.9,7.45);
	this.shape.setTransform(76.1,990.6,0.53,0.53,17.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#663300").ss(4,1,1).p("AL9lwQCZAABsBtQBtBsAACXQAACZhtBsQhsBsiZAAQiYAAhthsQhshsAAiZQAAiXBshsQBthtCYAAgAr9lwQCZAABtBtQBsBsAACXQAACZhsBsQhtBsiZAAQiYAAhthsQhshsAAiZQAAiXBshsQBthtCYAAgApnCWQg+A+hYAAQhXAAg+g+Qg/g+AAhYQAAhWA/g+QA+g+BXAAQBYAAA+A+QA+A+AABWQAABYg+A+gAuXAMQAAgGAAgGQAAg+AtguQAtgsA/gBQAAAAABAAQBAAAAuAtQAtAuAAA+QAAAGAAAGQgEA4gpApQguAthAAAQAAAAgBAAIAAhcQgZAAgSgSQgOgOgDgSQgBgEAAgDQAAgDAAgCQAAgYASgSQASgSAZAAIABAAQAaAAASASQASASAAAYQAAACAAADQAAADgBAEQgDASgOAOQgSASgaAAIgBAAAr+iUIAABYAr+CaQg/AAgtgtQgpgpgEg4As6AMIhdAAArAAMIBeAAAOYAMQAAgGAAgGQAAg+gtguQgugthAAAQgBAAAAAAQg/ABgtAsQgtAuAAA+QAAAGAAAGIBdAAQgBgEAAgDQAAgDAAgCQAAgYASgSQASgSAZAAIABAAQAaAAASASQASASAAAYQAAACAAADQAAADgBAEIBeAAQgEA4gpApQguAthAAAQAAAAgBAAIAAhcQgZAAgSgSQgOgOgDgSAL8g8IAAhYAM6AMQgDASgOAOQgSASgaAAIgBAAAL9DUQhYAAg+g+Qg+g+AAhYQAAhWA+g+QA+g+BYAAQBYAAA+A+QA+A+AABWQAABYg+A+Qg+A+hYAAgAL8CaQg/AAgtgtQgpgpgEg4");
	this.shape_1.setTransform(146.4,1010.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CCCCCC").s().p("AJoCWQg+g+AAhYQAAhWA+g/QA+g9BXAAQBYAAA/A9QA9A/ABBWQgBBYg9A+Qg/A9hYABQhXgBg+g9gAL9CaQBBAAAtgtQApgpAEg5IAAgLQAAg+gtguQgtgthBAAIgBAAQg/AAgtAtQgtAuAAA+IAAALIAAgLQAAg+AtguQAtgtA/AAIAAAFIAABXIABAAQAaABASARQASATAAAYIAAAFIAAAGIBdAAQgEA5gpApQgtAthBAAIgBAAIAAhcIABAAQAagBASgRQAOgOAEgTQgEATgOAOQgSARgaABIgBAAQgYgBgTgRQgNgOgEgTIgBgGIAAgFQAAgYASgTQATgRAYgBQgYABgTARQgSATAAAYIAAAFIABAGIhdAAQAEA5ApApQAtAtA/AAIABAAgAuSCWQg/g+AAhYQAAhWA/g/QA+g9BXAAQBZAAA+A9QA9A/ABBWQgBBYg9A+Qg+A9hZABQhXgBg+g9gAr9CaIAAAAQBAAAAugtQApgpAEg5IAAgLQAAg+gtguQgugthAAAIgBAAIABAFIAABXIAAAAQAaABATARQARATABAYIAAAFIgBAGQgEATgNAOQgTARgaABIAAAAIAAAAQAagBATgRQANgOAEgTIBdAAQgEA5gpApQguAthAAAIAAAAIAAhcQgagBgSgRQgOgOgDgTIgBgGIAAgFQAAgYASgTQASgRAagBQgaABgSARQgSATAAAYIAAAFIABAGIhcAAIgBgLQAAg+AuguQAsgtA/AAQg/AAgsAtQguAuAAA+IABALQADA5AqApQAsAtBAAAgAL8CaIAAAAg");
	this.shape_2.setTransform(146.4,1010.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#3E1F00").s().p("AH4EFQhshsAAiZQAAiXBshsQBthtCYAAQCZAABsBtQBtBsAACXQAACZhtBsQhsBsiZAAQiYAAhthsgAJniUQg+A+AABWQAABYA+A+QA+A+BYAAQBYAAA+g+QA+g+AAhYQAAhWg+g+Qg+g+hYAAQhYAAg+A+gAwCEFQhshsAAiZQAAiXBshsQBthtCYAAQCZAABtBtQBsBsAACXQAACZhsBsQhtBsiZAAQiYAAhthsgAuSiUQg/A+AABWQAABYA/A+QA+A+BXAAQBYAAA+g+QA+g+AAhYQAAhWg+g+Qg+g+hYAAQhXAAg+A+g");
	this.shape_3.setTransform(146.4,1010.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#663300").ss(4,2,0,3).p("AgEB5IhBAAIBKjxIBBAAg");
	this.shape_4.setTransform(173.1,1024.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F9E006").s().p("AhEB5IBJjxIBAAAIhJDxg");
	this.shape_5.setTransform(173.1,1024.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(685));

	// 对话
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#663300").s().p("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IAAA2IAMAAQAMACACANQABgIAKAAIAfAAQgHgFAAgJIgTAAQgPgBAAgPQABgPAPAAIA9AAQAAgDgDgFQgDgRATgFQATgDAGARQABABABAJIABAGIBHAAQANABABAOQgBAPgNABIgaAAQADADgHALIAoAAQAOABABAPQgBAQgOABIi9AAQgNAAAAgIQgCAFgHAAIgPAAIAAAwQAQgIAKANQAFARgPAMIgJAGIgHAEIAABXQADAigrAAIgPgBgAADlPQgCgEAGgKIgyAAQAIAJgBAFIAnAAIAAAAgAlNhhQgQgEAAgPQABgRAPAAIABAAQANADANgBQAGAAAAgIIAAj5QABgSASgBQASABABASIAAEGQACAeghAAQgGACgNAAIgVgDgAqrhhQgQgEAAgPQABgRAPAAIABAAQANADANgBQAGAAAAgIIAAj5QABgSASgBQASABABASIAAEGQACAeghAAQgGACgNAAIgVgDgAh4hgQgPgBgBgPQABgPAPgBIBQAAIAAgLIhDAAQgNAAgCgPQABgOAMgBIBDAAIAAgNIg0AAQgWACACgZIAAg8QAAgaAYAAICLAAQAcgCgCAZIAABCQACAWgVgCIg4AAIAAANIA/AAQAPABABAOQgBANgPACIg/AAIAAALIBSAAQAPABABAPQgBAPgPABgAAAjTIAlAAIAAgNIglAAgAhPjTIAlAAIAAgNIglAAgAAAj6IAlAAIAAgOIglAAgAhPj6IAlAAIAAgOIglAAgAlmiwIAAi5QACgSASgBQARABACASIAAC5QgCAQgRABQgSgBgCgQgArEiwIAAi5QACgSASgBQARABACASIAAC5QgCAQgRABQgSgBgCgQg");
	this.shape_6.setTransform(459.3,696.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#663300").s().p("AH+CiQgEgHAHgEQAagMAGgSQAAAAAAAAQAAgBAAAAQgBAAAAAAQgBAAAAAAIgDAAQgZAAgBgaQADgZAYgBQAVAAAJAQQAJARgKAUQgVAkgcAJIgEABQgFAAgCgFgAhfCSIAAiwQgNAZgNgJQgEAYgGAUQAdBIgBAOQgCAPgSABQgMgBgHgRIgFgRQgEgQgCAAQgWAsgVAVQgRAPgMgLQgLgLAMgTQAaggAZg1IgphMIgHgMQgKgSANgLQAPgIAMAPQAOAUATAjIABACQALgrAAguQAAgEgEAAIg9AAQgOgBAAgQQABgPAOgCIBRAAQAVACgBAbQAAAXgDAVQASgcALgcIADgHIALgYQAMgNAPAMQAIALgLAXIgFANIAyAAQAAgDgFgEQgLgNgEgIQgFgTAUgFQAKAAAHAJQAgAhgSAKIAuAAQARABABAQQgBARgPABIg0AAIAAAoIAxAAQAPABABARQgBAPgQABIgwAAIAAAmIAuAAQARABABAPQgBAQgRACIguAAIAAAnIAxAAQASACAAAQQgCARgRABIiAAAIAAAEQgCAOgRAAQgRgCgBgNgAg6BrIAuAAIAAgnIguAAgAg6AiIAuAAIAAgmIguAAgAg6gmIAuAAIAAgoIguAAgAm2CLIAAiWQg/BAglAQQgVALgLgMQgLgRASgNQB0hLAahDIiDAAQgQgBgCgTQACgTAQgCIEMAAQASACABATQgBATgSABIhaAAQgKAXgPAVIAADHQgBAQgSACQgTgCgBgQgAB/CTQgSgLAKgQQAJgOAcgbIAAhWQABgCgEAAIgPAAQgQgCgCgQQACgRAQgBIAfAAQAagBgBAcIAABaQALAiBCAEICWAAQAQACACAQQgCASgQABIiUAAQg1ABgigcQgOgKgHAKIgFAJIgGAJQgIALgKAAQgFAAgEgCgAE8BeIgDAAQgWgEABgTQAGgUAWAEQAbAFABgPIAAh7Ih1AAQgPgBgCgSQACgSAPgBIB1AAIAAghQACgOASgBQARABACAOIAAAhIAlAAQAPABAAASQgCASgPABIgjAAIAACEQAEArgtgCIgHABIgXgCgAkjBEQgwgrgtgiQgMgNAMgPQAOgLAPALQAsAgAtAnQAOANgLARQgHAJgIAAQgGAAgHgFgAEFATQgEgHgPgRIgPgUQgLgQAMgLQAPgJAOANQATAXASAZQAIAOgOAKQgFACgFAAQgJAAgIgHgACwhcQgUgMgYgUQgJgLALgNQAMgMAOAHIAUAOIATAPQAOAMgJAPQgHAIgJAAQgFAAgHgDg");
	this.shape_7.setTransform(242.2,733);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#663300").s().p("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");
	this.shape_8.setTransform(240.3,732.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#663300").s().p("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");
	this.shape_9.setTransform(452.2,705.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#663300").s().p("Ao6CUIAAkOQAAgcAWACIBaAAQAaADgEAgQgHAggVA7QAYAgAGATQAIATgCAkQAABAhRgPQgRgEAAgSQAEgVASACQAmAHgBgVQADglgigpQgJgLAAgFQgBgLAQgtQAHgQACgKQAEgJgHAAIgtAAIAAD/QgCAOgSABQgRgBgCgOgACGCRQAAgFgGgRIgIgiQgFgSARgFQATgEAEAQQAKAiAEAaQAEAWgTACIgEAAQgPAAgBgRgAG1CgIgEAAQgigDgVgGQgVgJACgTQAGgTAXAGQAdAIAfABQAmADgBgqQACgrgngyQgUgWAXgNIAKgHQAyggASgNQAAAAAAAAQAAAAAAgBQAAAAgBgBQAAAAgBgBIjIAAQgPgBgBgUQABgRAPgCIEEAAQAPAAAEANQAFANgKALQgiAehBAtQgLAGAGAJQAeAxADAsQAAAxgVASQgRARgnAAIgQgBgArcCcQgNgMAMgSQAegkAIgqIggAAQgRgBgBgTQABgUAQgBIAlAAIABgUIAAgQIgmAAQgTgCABgTQgBgTATgBIAlAAIAAghIglAAQgTgBABgVQgBgUATgCIB0AAQAXgBgCAWIAAD3QAAAggbADQgXgBgXgHQgQgGACgPQAFgPARACQAeAHgDgRIAAg4IgbAAQgIA8gkAsQgIAJgJAAQgHAAgIgFgAqMgLIgCASIAZAAIAAgkIgXAAIAAASgAqMhGIAXAAIAAgcQAAgFgDAAIgUAAgAA1COIAAgXIgBgfQAAgTARgCQASACACARIABA3QABATgUAAQgVAAADgSgADaCRIgSgfIgJgTQgJgSAPgIQARgHAJANQAVAhAKASQALAWgUAJQgEADgFAAQgKAAgIgPgAgeCcQgSgKAKgRQATgcAKgcQAEgPAPAFQASAEgGAVQgJAbgQAeQgIANgLAAIgIgCgAl1CXQgRgCgBgSQABgQARgBIDpAAQAJAAgBgHIAAgxIjoAAQgPgCgBgSQABgRAPgCIDoAAIAAghQABgHgJAAIjlAAQgPgBgBgUQABgRAPgCIApAAQgVgYgcgdQgOgOALgMQAOgLAQALQAaAVAVAaQARAYgOAIIApAAIAAhLQABgSASgCQAUAAABARIAABOIAwAAQgKgIAKgPQADgEAHgFQASgRATgbQALgPAPAJQANALgJARQgVAjgaATIAVAAQAegBgCAhIAACXQACAdghAAgAK2BlQACgaAYgBQAaABACAaQgCAZgaABQgYgBgCgZgADlBJQghgdgZgyQgYAvgiAXQgVAOgMgMQgMgPAPgNQAygiAMgsIgnAAQgiBIhRAfQgYAIgIgNQgLgWATgIQAegKAWgQQgPgTgTgQQgOARgQgLQgLgKALgOQAqgvANgyQADgRAQADQASACgCAMIA0AAQAdgCgEAgQABAWgGASIAhAAQACgLAAgVIABgfQABgTASABQATgBgBAUIgCA/IA+AAQAOABAAARQAAARgOACIg1AAQAQAqAqApQAQARgPANQgHAGgHAAQgHAAgGgGgAACg6QAXASASAXQAMgMAEgIQgRgVgcgSQgFAKgHAIgAAfhoQAhATAMAMQAIgPAAgTQABgGgGAAIgsAAIgEAJgAK8AmIgDiJQABgZAXgCQAYACABAZIgDCIQgDATgTADQgUgBgBgUgADghXQgBgCgKgKIgLgMQgMgOAMgLQALgMAMAJQARANAJANQANAPgQANQgGAFgGAAQgHAAgFgHg");
	this.shape_10.setTransform(246.9,732);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#663300").s().p("Ap6GHIAAhzQgEAJgLASIgEAIQgKARgSgHQgPgLAIgQQAhg0AShDIgdAAQgQgCgBgRQABgSAQgCIAgAAIAAgjQABgQASgCQASACABAQIAAAjIAeAAQAOACABASQgBARgOACIgeAAIAAAQIAmAwIAEAFQANASgKAOQgPAMgOgNIgQgVIAACJQgBASgSABQgSgBgBgSgAsDGXQhogQAGj2QAAgEgFAAIiFAAQgUgCgBgTQADgSATgBICSAAQAhgBgBAfIAAA7QAXgRAlg0QAMgQAQAKQAQAMgKASQgTAcgiAlIAQAPQAwAngGAMQgEAegcgQIgOgOQggghgVgQQALB1AqASQAHAAABgHIADgiQABgTATAAQASADACATQABBTguAAIgCAAgApEGTQgQgLALgQQAZgiAIghQAIggAAg/IAAhaQgDgeAcADIBUAAQAZgDgBAeIAADnQAAAHAGAAQAFABABgMQABgLAAgtQACgQAQgCQAQACACAQQADBKgHAOQgGARgfgBIgOAAQghABAAgmIAAjbQAAgJgJAAIgkAAQgLgCAAANIAAA4QAABOgIAmQgIAlgbAqQgIAKgLAAQgFAAgHgDgAg1FbQADgZAYgCQAZACABAZQAAAXgaACQgagCgBgXgAiSFbQADgZAYgCQAZACADAZQgCAXgaACQgagCgBgXgAjvFbQADgZAYgCQAZACADAZQgCAXgaACQgagCgBgXgAtYhmIAAkQQAAgcAWACIBaAAQAaADgEAgQgHAggVA7QAYAiAHATQAHATgCAkQAABAhQgPQgSgEAAgSQAEgVASACQAmAHgBgVQADglghgqQgKgMAAgFQgBgLAQgtQAHgQADgKQAEgJgIAAIgtAAIAAEBQgCAOgSABQgRgBgCgOgAv5heQgOgMANgSQAegkAIgqIghAAQgQgBgCgTQACgUAPgBIAlAAIABgWIAAgQIgmAAQgSgCAAgTQAAgTASgBIAlAAIAAghIglAAQgSgBAAgVQAAgUASgCIB0AAQAXgBgBAWIAAD5QAAAggcADQgXgBgXgHQgQgGACgPQAGgPAQACQAeAHgDgRIAAg4IgbAAQgIA8gkAsQgIAJgJAAQgHAAgHgFgAuqkHIgBAUIAYAAIAAgmIgXAAIAAASgAuqlCIAXAAIAAgcQAAgFgCAAIgVAAgAOahuIAAh5IhXAAQgGBfg4AlQgUAPgPgNQgPgPAQgPQA0grABg9Ig9AAQgQgBgCgTQADgSAQgBIA/AAIAAhbIg2AAQgRgBgBgSQABgRARgCIEKAAQARACABARQgBASgRABIgtAAIAABbIA4AAQAOABABASQgBATgOABIg4AAIAAB5QgBATgSABQgTgBgCgTgANEkOIBWAAIAAhbIhWAAgAlDhbQgRgIAFgUQAXg+gBg3IAAh+QgBgfAfABQBvAABpgLQAZgDAFASQADAVgXAGQg3AJiaABQgGAAAAAGIAAAXID1AAQANABAAASQgBASgOABIjzAAQgBB8gWA2QgHAPgOAAIgHAAgApxhtQgBgTAWgEQBvgPAeg8QAbgyAAh/QABgTATgDQAUACABATQAABqgbBVQAgAkAUAXQANAQgNAOQgSAMgOgPQgSgVgagcQg6A0hdAMIgEAAQgTAAgFgQgAHQhdQgnAAgPgJQgRgKACgXIAAh8QABgOAMgGIgIACIgQABQgVACgDgSQAAgTAVgCQA4gEAqgMQgPgHgYgTIgEABQgdAJgTACQgTADgGgQQgBgSASgGQAugJA1gSQASgFAIANQAGARgPAIIgIADIgHABQAMAJAaANQAEABABACQAVgLATgOQgFAAgHgDQgPgFAEgRQAEgPAQADQAvAHA4ATQAPAFgBASQgGASgTgFQgKgCgRgFIgRgGIgEAEQgYATgNAGQAoAJAxAGQAXADgBAQQgDASgSAAQgJAAgHgCQAHAFABAPIAAA5QAAAXgFAGQgEAFgWAAIi3AAIAAASQgEAXAjgBIByAAQAnAAALgEQAMgEAAgPQACgSASgBQAQABABASQACAmgdAMQgVAIguAAgAIgjNIA6AAQAJAAgCgFIAAgaQAAgIgHABIg6AAgAG0jsIAAAfIBDAAIAAgmIg9AAQgGAAAAAHgAJ/kYQhAgJgzgRQguARhAAJIDhAAIAAAAgAByhdQgnAAgPgJQgRgKACgXIAAh8QABgOAMgGIgIACIgQABQgVACgDgSQAAgTAVgCQA4gEAqgMQgPgHgYgTIgEABQgdAJgTACQgTADgGgQQgBgSASgGQAugJA1gSQASgFAIANQAGARgPAIIgIADIgHABQAMAJAaANQAEABABACQAVgLATgOQgFAAgHgDQgPgFAEgRQAEgPAQADQAvAHA4ATQAPAFgBASQgGASgTgFQgKgCgRgFIgRgGIgEAEQgYATgNAGQAoAJAxAGQAXADgBAQQgDASgSAAQgJAAgHgCQAHAFABAPIAAA5QAAAXgFAGQgEAFgWAAIi3AAIAAASQgEAXAjgBIByAAQAnAAALgEQAMgEAAgPQACgSASgBQAQABABASQACAmgdAMQgVAIguAAgADCjNIA6AAQAJAAgCgFIAAgaQAAgIgHABIg6AAgABWjsIAAAfIBDAAIAAgmIg9AAQgGAAAAAHgAEhkYQhAgJgzgRQguARhAAJIDhAAIAAAAgAj6h/IAAhpQAAgbAZAAICmAAQAVgCgCAdIAABpQACAaghgBIiYAAIgFAAQgZAAADgZgAjSjWIAABBQAAAKAIAAIB1AAQAGgBABgHIAAg/QAAgLgIAAIh2AAQgGAAAAAHgAqYidIAAjkQABgTATgCQATACACARIAAC5QAAAKACABQADADAGgEQAlgWAfgXQAUgOAOAOQAMAQgRAPQgpAig3AaQgWALgNAAQgSAAAAgWgAoRkhQgKgKgTgXIgfgiQgMgPANgOQARgKAPAOQAXAUAiApIADADQALAVgNAMQgGAEgGAAQgKAAgJgJg");
	this.shape_11.setTransform(452.1,703.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#663300").s().p("AimCaQgHgRAPgLIAEgCQBGgWAJg5IgjAAQgbADACgcIAAhBQACgXAagBIBPAAIAAgXIh6AAQgNgCgCgTQACgSANgBIB6AAIAAgSQABgMATgDQATABABANIAAATIB7AAQAOABABASQgBATgOACIh7AAIAAAXIBUAAQAagCgCAcIAAA9QACAcgZgBIglAAIAAA/QAAAMAMAAIAYAAQAUAEgBgmQABgVASgBQASADABAUQAAAogJAPQgKAPgaAAIgtAAQgsAAAAghIAAhPIgzAAQgRBZhbAfIgIABQgNAAgFgMgAhfgaIAAAbQAAAGAFAAICnAAQAEAAAAgGIAAgbQAAgFgEAAIinAAQgFAAAAAFgAmqCWQgQgBgCgTQADgRAQgBIDSAAQARABAAASQgBASgSABgAoEB/QgGgPANgIIAPgIIAPgJIAAh7IgYAAQgPgCgBgTQABgSAPgBIAYAAIAAhCQABgPATgBQASABABAPIAABCIAPAAQAPABAAATQgBASgPACIgOAAIAABnIAGgEIAFgDQANgHAIAPQALARgPAJQgVAPgyAXQgKAEgIAAQgKAAgFgJgAHRBlQADgZAYgCQAZACADAZQgCAXgaACQgagCgBgXgAF0BlQADgZAYgCQAZACADAZQgCAXgaACQgagCgBgXgAEXBlQADgZAYgCQAZACADAZQgCAXgaACQgagCgBgXgAj3BdIiCAAQgbABABgfIAAivQgCggAbACICEAAQAfgCgDAeIAACxQACAegaAAIgFAAgAkLA3QAJABAAgOIAAgsIhpAAIAAAsQgBAOAMgBgAlrhXIAAAtIBpAAIAAguQACgOgNABIhSAAIgCAAQgLAAABAOg");
	this.shape_12.setTransform(452.3,702.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#663300").s().p("AsYCUQgRgIACgPQAHgTASAFQAmAOANgEQAKgDAAgXIAAgrIiDAAQgPgBAAgTQACgTAPgCICBAAIAAgdIhNAAQgSgCgCgTQACgTASgBIC0AAQAOABABATQgBATgOACIg8AAIAAAcIBwAAQAQABACATQgCAUgPABIhxAAIAAA/QAAAighALQgKADgNAAQgZAAghgOgABfCiQhmgRAGj0QAAgEgFAAIiFAAQgUgBgBgTQADgSATgCICQAAQAhgBgBAfIAAA7QAXgQAlg0QAMgQAQAJQAQAMgKASQgTAdgiAlIAQAPQAwAkgGAMQgEAegcgQIgOgOQgggegVgRQALB0AqASQAHAAABgHIADgiQABgUATAAQASADACATQABBUguAAIgCAAgAEKCeQgSgGAEgQQAGgOATADQASABAAgIIAAhdIg6AAQAABRgWAqQgIAQgPgEQgQgHAFgQQAVg8AAg0IgHAAQgPgBgCgSQACgQAPgBIAHAAIAAhZQgCggAZACIATAAQADghASADIAGAAQASgCgEAgIAXAAQAWgCAAAgIAADjQAAAjglAAQgSAAgJgEgADthZIAABOIA6AAIAAhOQAAgGgGAAIguAAQgGAAAAAGgAHSCcIhgAAQgcACACgdIAAhdQAAgkAhACIBUAAQAggCgBAgIAABdQACAfgXAAIgFAAgAF+AtIAABDQAAAHAIAAIA4AAQAJAAgCgFIAAhFQAAgFgFAAIg7AAQgHAAAAAFgAnJCYQggAAAAgfIAAiDQgCgkAiACIBSAAIAAgSQACgQATgCQATACABAQIAAASIBOAAQAkAAgCAhIAACCQACAhglAAgAlPBwIBDAAQAHACgCgHIAAglIhIAAgAnABrQAAAFAFAAIBDAAIAAgqIhIAAgAlPAeIBIAAIAAgcQAAgFgGAAIhCAAgAnAACIAAAcIBIAAIAAghIhCAAIgBgBQgFAAAAAGgAMtBmQADgZAYgDQAZADADAZQgCAXgaABQgagBgBgXgALQBmQADgZAYgDQAZADADAZQgCAXgaABQgagBgBgXgAJzBmQADgZAYgDQAZADADAZQgCAXgaABQgagBgBgXgAEEBZQgIgMgIgRQgIgMAMgIQAOgHAJALQAJALAGASQAGANgLAJQgEABgEAAQgHAAgGgHgAFZAAQgQgHAIgSQAIgMAEgTQADgUAAgjQgBglAeADIBFAAQAdgCgBAcIAABAQAAAEAJABQARACABASQgBATgRABIgXAAQgYADABgZIAAhHQAAgEgEAAIgpAAQgDABgBADQAAA/gSAhQgHAKgLAAQgFAAgGgDgAEEgeIgPgaQgFgNALgIQAOgFAIALQAIAKAHASQAEANgLAFQgFABgEAAQgHAAgFgGgAoBg0IAAgnQAAgiAiAAIBkAAQAAgEgBgDQAAAAAAAAQAAAAAAAAQAAAAAAgBQAAAAAAgBQgGgWAVgCQAWgEAFASIADAKQAAAFABAEIBmAAQAgAAAAAdQAAAUgEARQgCAUgVgCQgQgCAAgQIABgHIABgLQAAgIgFABIjaAAQgJAAAAAKIAAAWQgBAQgSABQgTgBgCgQgAtcg3IAAgvQgBgcAeABIBkAAIgCgEQgEgSAVgHQAUgCAHARIAEAOIBeAAQAnAAAAAdQAAANgKAjQgFAMgRgDQgSgDAAgNIAGgXQABgDgFAAIjXAAQgEAAAAAEIAAAZQgBAQgTADQgUgCgBgQg");
	this.shape_13.setTransform(458.9,702.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#663300").s().p("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");
	this.shape_14.setTransform(454.8,708.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#663300").s().p("AD7ABQADgXAYgCQAZACADAXQgCAXgaACQgZgCgCgXgACeABQADgXAYgCQAZACADAXQgBAXgbACQgZgCgCgXgABBABQADgXAZgCQAYACADAXQgBAXgaACQgbgCgBgXgAh3ABQADgXAYgCQAZACADAXQgBAXgbACQgZgCgCgXgAjUABQADgXAZgCQAYACADAXQgBAXgaACQgbgCgBgXgAkxABQADgXAYgCQAZACADAXQgCAXgaACQgZgCgCgXg");
	this.shape_15.setTransform(243.4,736.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#663300").s().p("AC4CYQgWgJAFgTQAKgRAWAJQApAPANgaQANgogNgqIhQAAQgRgCAAgSQAAgPAQgCIBAAAQgEgHgHgIQgIgJAAgHQAAgMAgghIAFgEQAEgGgCgBQABgDgIAAIhIAAQgQgBgCgSQACgSAQgBICBAAQANAAAFALQAEALgJALIgdAiQgcAcABACQABADAFAIIAMAUIAmAAQASACABAPQAAASgRACIgcAAQANAjgLAzQgKAigeAMQgPAGgPAAQgUAAgVgJgAjBCPIAAiWQg/BAglAQQgUALgLgMQgLgRASgNQB0hLAahDIiDAAQgQgBgCgTQACgTAQgCIEMAAQASACABATQgBATgSABIhbAAQgJAXgPAVIAADHQgCAQgRACQgUgCgBgQgAAbCYQgIgNALgNIAUgRIAagZIgUgOQgMgGgGgFQgUgGAMggQABgDACgPIAUhHIgSAAQgRgCAAgSQAAgRARgCIAWAAQACgHgBgKIABgSQACgRATgBQASADACAQIgCAPIgCATIAmAAQAcgBgEAmQgCBHgdBKQAQAMAQAPQANAPgLAMQgMALgPgLIgGgFIgWgOQgiAlgVAKQgFACgFAAQgIAAgGgHgABLANQgGASAAADQgCABAbATQAYhBABg1QAAgEgFAAIgVAAQgGAjgMAugAIqBlQAEgZAYgDQAZADACAZQgBAXgaABQgagBgCgXgAHNBlQADgZAZgDQAYADADAZQgBAXgaABQgagBgCgXgAFxBlQACgZAZgDQAZADADAZQgCAXgaABQgagBgBgXgAmmBlQACgZAZgDQAYADAEAZQgCAXgaABQgagBgBgXgAoEBlQADgZAZgDQAZADACAZQgBAXgaABQgagBgCgXgApgBlQADgZAYgDQAZADACAZQgBAXgaABQgagBgBgXgAgtBIQgwgrgtgiQgMgNAMgPQAOgLAPALQAsAgAsAnQAOANgKARQgIAJgIAAQgGAAgGgFg");
	this.shape_16.setTransform(240,732);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#663300").s().p("AhkCPIAAiaIhFAAQgWgBgBgTQAEgTAWgCIBCAAIAAhRQABgUAWgBQAUACACAVIAABPIBIAAQATACABATQgBATgSABIhJAAIAACbQgCAUgWABQgUgDgBgTgAj3CSIAAiVQgJASgRAAQgRgDABgRIALgWQAaghAahRQAFgQASABQATAEAAAPQgBALgVAyIAADcQgBASgTADQgTgBgCgSgAJPCWQgSgKAFgPQAJgPATAGQATAHALAAQATACgDgLIAAhbQg0BDhXArQgPAJgKgNQgJgPAMgJIAMgHIg5AAQgaABABgcIAAi0QAAgWATAAIA9AAQARAAACAUIAAC7QAAAIgGAHQA8ghAtg0Ig9AAQgZgBAAgQQAEghAHgqQADgQASAAQASACAAARIgFAbQgCAQAAAHQAAABAAABQAAAAABAAQAAABABAAQABAAABAAIBIAAIAAhOIhxAAQgOgBgBgSQABgSAOgBICoAAQAQABACASQgCASgQABIgPAAIAABOIAWAAQAQABACASQgCAQgQABIgWAAIAAB+QAAAggpAAQggAAgcgOgAHMhZIAACSQABAEADAAIAPAAQACgBACgDIAAiQQAAgGgEAAIgPAAQgEAAAAAEgAFQCWIgIgPQh4ALhJAAQgcAAgGgRQgEgPAVgcICIjOQALgRASAHQAPALgIARQgSAehdCFQgNAWgGAHQgIAMADADQACAEAPAAQAyAABYgIQgPgdgYgmQgIgPAQgKQASgHALAOQAlA8AbAzQAIARgPALQgHAEgFAAQgKAAgHgJgApvCUQgJgNAPgOQBKhPARhXIhWAAQgPgBgBgUQABgRARgCIBbAAQADgJADgkIABgLQABgRAUgCQARACAAATQAAAagEAcIB5AAQAegBgCAeQACA9gCAiQgCAlgGAfQgIAyhAAAQgeAAgfgJQgQgFADgSQAEgQAQABQAPADANAAQAJABASAAQAXACAEgOQAHgQADggQADgegCg9QAAgIgHAAIhsAAQgYCBhWBFQgHAEgGAAQgIAAgHgJgAMrB/QABgZAZgBQAaABADAZQgDAagaABQgZgBgBgagArXBmQADgZAZgCQAYACADAZQgBAXgaACQgagCgCgXgAs0BmQADgZAZgCQAYACADAZQgBAXgaACQgagCgCgXgAuRBmQADgZAZgCQAYACADAZQgBAXgaACQgagCgCgXgAM0A8IAAg4QADgXAVgPQAbgTABgXIAAgCQgCgqglgDQgkAEgEAlQAAALAMAQQAFAGABADQAJAPgKAMQgLALgRgKQgegUAAgsQAHhLBIgHQBRABABBVQACAhgkAhQgNAMgDAFQgEAFAAAKIAAAoQgCARgRACQgSgCgCgRgAm9BEIgjg7QgJgNANgLQAPgKALAOQAPARAWAoQAGAPgMAKQgHAEgFAAQgIAAgGgHgABCAjQgNgPANgPQA9g8AshaQAIgNATAFQAPAIgFAPQg0Bng+A9QgHAHgIAAQgHAAgGgGgAo/hgIgYglQgJgMAOgJQAQgJAJALQARAZAHAQQAGALgOAJQgEABgEAAQgIAAgGgGg");
	this.shape_17.setTransform(445.8,704.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#663300").s().p("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");
	this.shape_18.setTransform(240.6,731.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#663300").s().p("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");
	this.shape_19.setTransform(241.3,731.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_6}]},24).to({state:[]},30).to({state:[{t:this.shape_7}]},8).to({state:[]},35).to({state:[{t:this.shape_8}]},5).to({state:[]},71).to({state:[{t:this.shape_9}]},7).to({state:[]},45).to({state:[{t:this.shape_10}]},8).to({state:[]},28).to({state:[{t:this.shape_11}]},7).to({state:[{t:this.shape_12}]},24).to({state:[{t:this.shape_13}]},18).to({state:[{t:this.shape_14}]},17).to({state:[]},30).to({state:[{t:this.shape_15}]},11).to({state:[{t:this.shape_16}]},16).to({state:[]},28).to({state:[{t:this.shape_17}]},7).to({state:[]},27).to({state:[{t:this.shape_18}]},10).to({state:[]},64).to({state:[{t:this.shape_19}]},7).to({state:[]},59).wait(99));

	// 对话框 复制
	this.instance_1 = new lib.元件11副本();
	this.instance_1.setTransform(195.3,836.9,0.343,0.343,0,0,0,92.2,190);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(56).to({_off:false},0).to({scaleX:1.08,scaleY:1.08,y:837},6,cjs.Ease.get(1)).wait(1).to({regX:143.6,regY:101.7,scaleX:1.07,scaleY:1.07,x:250.4,y:742.3},0).wait(1).to({scaleX:1.04,scaleY:1.04,x:249,y:744.7},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:247.3,y:747.4},0).wait(1).to({regX:92.2,regY:190,scaleX:1,scaleY:1,x:195.3,y:837},0).wait(101).to({scaleX:1.08,scaleY:1.08},5,cjs.Ease.get(1)).to({scaleX:0.34,scaleY:0.34,y:836.9},5,cjs.Ease.get(-1)).to({_off:true},1).wait(49).to({_off:false},0).to({scaleX:1.08,scaleY:1.08,y:837},6,cjs.Ease.get(1)).wait(1).to({regX:143.6,regY:101.7,scaleX:1.07,scaleY:1.07,x:250.4,y:742.3},0).wait(1).to({scaleX:1.04,scaleY:1.04,x:249,y:744.7},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:247.3,y:747.4},0).wait(1).to({regX:92.2,regY:190,scaleX:1,scaleY:1,x:195.3,y:837},0).wait(19).to({scaleX:1.08,scaleY:1.08},5,cjs.Ease.get(1)).to({scaleX:0.34,scaleY:0.34,y:836.9},5,cjs.Ease.get(-1)).to({_off:true},1).wait(93).to({_off:false},0).to({scaleX:1.08,scaleY:1.08,y:837},8,cjs.Ease.get(1)).wait(1).to({regX:143.6,regY:101.7,scaleX:1.08,scaleY:1.08,x:250.6,y:741.8},0).wait(1).to({scaleX:1.06,scaleY:1.06,x:250,y:743},0).wait(1).to({scaleX:1.04,scaleY:1.04,x:249,y:744.7},0).wait(1).to({scaleX:1.02,scaleY:1.02,x:247.8,y:746.6},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:247,y:748},0).wait(1).to({regX:92.2,regY:190,scaleX:1,scaleY:1,x:195.3,y:837},0).wait(33).to({scaleX:1.08,scaleY:1.08},5,cjs.Ease.get(1)).to({scaleX:0.34,scaleY:0.34,y:836.9},5,cjs.Ease.get(-1)).to({_off:true},1).wait(30).to({_off:false},0).to({scaleX:1.08,scaleY:1.08,y:837},8,cjs.Ease.get(1)).wait(1).to({regX:143.6,regY:101.7,scaleX:1.08,scaleY:1.08,x:250.6,y:741.8},0).wait(1).to({scaleX:1.06,scaleY:1.06,x:250,y:743},0).wait(1).to({scaleX:1.04,scaleY:1.04,x:249,y:744.7},0).wait(1).to({scaleX:1.02,scaleY:1.02,x:247.8,y:746.6},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:247,y:748},0).wait(1).to({regX:92.2,regY:190,scaleX:1,scaleY:1,x:195.3,y:837},0).wait(119).to({scaleX:1.08,scaleY:1.08},5,cjs.Ease.get(1)).to({scaleX:0.34,scaleY:0.34,y:836.9},5,cjs.Ease.get(-1)).to({_off:true},1).wait(93));

	// 对话框
	this.instance_2 = new lib.元件11();
	this.instance_2.setTransform(498,809,0.343,0.343,0,0,180,92.2,190);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(18).to({_off:false},0).to({scaleX:1.08,scaleY:1.08,x:497.9},6,cjs.Ease.get(1)).wait(1).to({regX:134.8,regY:101.7,scaleX:1.07,scaleY:1.07,x:452.3,y:714.4},0).wait(1).to({scaleX:1.04,scaleY:1.04,x:453.4,y:716.8},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:454.8,y:719.5},0).wait(1).to({regX:92.2,regY:190,scaleX:1,scaleY:1,x:497.9,y:809},0).wait(21).to({scaleX:1.08,scaleY:1.08},5,cjs.Ease.get(1)).to({scaleX:0.34,scaleY:0.34,x:498},5,cjs.Ease.get(-1)).to({_off:true},1).wait(119).to({_off:false},0).to({scaleX:1.08,scaleY:1.08,x:497.9},6,cjs.Ease.get(1)).wait(1).to({regX:134.8,regY:101.7,scaleX:1.07,scaleY:1.07,x:452.3,y:714.4},0).wait(1).to({scaleX:1.04,scaleY:1.04,x:453.4,y:716.8},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:454.8,y:719.5},0).wait(1).to({regX:92.2,regY:190,scaleX:1,scaleY:1,x:497.9,y:809},0).wait(37).to({scaleX:1.08,scaleY:1.08},5,cjs.Ease.get(1)).to({scaleX:0.34,scaleY:0.34,x:498},5,cjs.Ease.get(-1)).to({_off:true},1).wait(30).to({_off:false},0).to({scaleX:1.08,scaleY:1.08,x:497.9},6,cjs.Ease.get(1)).wait(1).to({regX:134.8,regY:101.7,scaleX:1.07,scaleY:1.07,x:452.3,y:714.4},0).wait(1).to({scaleX:1.04,scaleY:1.04,x:453.4,y:716.8},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:454.8,y:719.5},0).wait(1).to({regX:92.2,regY:190,scaleX:1,scaleY:1,x:497.9,y:809},0).wait(81).to({scaleX:1.08,scaleY:1.08},5,cjs.Ease.get(1)).to({scaleX:0.34,scaleY:0.34,x:498},5,cjs.Ease.get(-1)).to({_off:true},1).wait(50).to({_off:false},0).to({scaleX:1.08,scaleY:1.08,x:497.9},6,cjs.Ease.get(1)).wait(1).to({regX:134.8,regY:101.7,scaleX:1.07,scaleY:1.07,x:452.3,y:714.4},0).wait(1).to({scaleX:1.04,scaleY:1.04,x:453.4,y:716.8},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:454.8,y:719.5},0).wait(1).to({regX:92.2,regY:190,scaleX:1,scaleY:1,x:497.9,y:809},0).wait(18).to({scaleX:1.08,scaleY:1.08},5,cjs.Ease.get(1)).to({scaleX:0.34,scaleY:0.34,x:498},5,cjs.Ease.get(-1)).to({_off:true},1).wait(286));

	// 人
	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#663300").ss(4,2,0,3).p("AE8iQQh2Dii+B9Qg3A4gvADIhFgQIAlg1Qg4A0hIglIAxg3IhUAZIgRgwIA6gyIhGANIgDhKICEgfQBCgQBVggQBTghBoimQABgBABgC");
	this.shape_20.setTransform(354.3,948.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#663300").ss(4,1,1).p("AkZlzQgEgOAAgQQAAhNBQg3QBPg2ByAAQBvAABQA2QBQA3AABNQAAAHgBAHQApAeAlApQBOBXAjBpQAcBWAABgQAAANAAAMQhWBvhohnIAkDUQgDBnhGBoQhwBOiKAAQifAAh4hiQgCgBgBgCQhHhAAMh4IAWjYIAAgEIABgBIANhMIAHgpIAQhjAkqgjIiig8IgKgLIgGgGQAxhqBYhiQAcgeAegZQB5hkCgAAQCMAABwBQQADACADACAD6iGIAMBKICrg8AEGg8IAZCXAlVEvIKYAA");
	this.shape_21.setTransform(416.6,933.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#663300").s().p("AkNAsIgDgDQhHg+AMh4IKYAAQgDBnhGBmQhwBOiMAAQidAAh4hig");
	this.shape_22.setTransform(415.6,977.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFCC").s().p("AopEAIAlg2Qg3A0hJglIAyg3IhUAZIgSgvIA7gzIhGAOIgDhKICDggQBCgQBWggQBUggBpinIAMAIICiA9IgHAqQh2Dii+B9Qg5A5gvADgAIJg2IgaiZICsg7IAQgFQAcBWAABiIAAAZQgtA6gxAAQguAAgygyg");
	this.shape_23.setTransform(393.2,948);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AlHG9IAWjXIAAgEIABgBIANhNIAHgqIiig8IgKgLIgGgGQAxhpBYhhQAcgfAegYQgEgOAAgQQAAhOBQg3QBPg2BwAAQBxAABQA2QBQA3AABOIgHAKQhwhQiOAAQieAAh5BkQB5hkCeAAQCOAABwBQIAGAEQApAeAlApQBOBWAjBoIgQAEIirA8IAZCZIAkDTgAkcBqIAQhkgAEUBRIgMhLg");
	this.shape_24.setTransform(415.2,919.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#663300").ss(4,1,1).p("ADtiQIAAgbQAAhEgwgxQgxgwhFAAIgdAAIhqAAIgQAAQhFAAgwAwQgxAxAABEIAAAfQgTgDgVAXQgMAPAAAQQAAAZAXAQQAEADAKAIQAJAIAGACIAAgBQBVAyCvgEQCjgDA8gpQAJgFAVgOQARgOADgRQAGgbgHgNQgKgQgggMQgBgBgCACIgEABIAAgCIADgBQADgBABACADtAeIAAg4ADtAeQALgKAQgFQAQgHAWAZQAXAZgDAoQgEApgPALQgOALgngBIgNADIAAAIQAABFgwAwQgxAwhFAAIiXAAQhFAAgwgwQgxgwAAhFIAAgIQgWADgFAAQgcAAgLgaQgJgVAAgrQAAgbACgGQAGgQAXAAIAsAHIAACBADtCjIAAiFAj2AiIAAg9");
	this.shape_25.setTransform(415.8,862);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#663300").ss(4,2,0,3).p("AA1hPIAABpQAAAXgQAPQgPAQgWAAQgVAAgQgQQgQgPAAgXIAAhp");
	this.shape_26.setTransform(414.6,836.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#330000").s().p("AhLC3QhFgBgwgwQgxgwAAhFIAAgIIAAh/IAAg/IAAgBQBVA1CvgFQCjgEA8gqIAAA6IAACDIAAAIQAABFgwAwQgxAwhFABg");
	this.shape_27.setTransform(415.3,877.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFCC").s().p("Ak4AxQgJgUAAgpQAAgbACgGQAGgQAXAAIAsAHIAAB/IgbADQgcAAgLgbgADtg7QALgJAQgGQAQgGAWAZQAXAZgDAmQgEApgPALQgOALgngCIgNAEg");
	this.shape_28.setTransform(415.8,871);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#F9E006").s().p("AjxCBIAAABQgHgCgJgIIgNgLQgYgQAAgZQAAgQANgPQAUgXAUADIAAgdQAAhEAwgxQAwgwBFAAIAQAAIBqAAIAeAAQBFAAAwAwQAwAxAABEIAAAZIAAACIAEgBQABgBAAAAQABAAAAAAQABAAAAAAQABAAAAAAQAgAMAJAQQAIANgGAbQgEARgRAOIgeATQg8AqiiAEIgXABQifAAhOgxgAg8hGQAAAXAQAPQAQAQAWAAQAVAAAPgQQAQgPAAgXIAAhrIAABrQAAAXgQAPQgPAQgVAAQgWAAgQgQQgQgPAAgXIAAhrIAABrg");
	this.shape_29.setTransform(415.3,846.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#663300").s().p("AnFCoIAAlPIOLAAIAAFPg");
	this.shape_30.setTransform(417.2,960.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#663300").ss(4,1,1).p("AkPgDQgBgOAAgPQAAhxBQhRQBQhRBwAAQBxAABRBRQBKBJAGBkQABAKAAALQAAALgBALQAhAPAiAJQASAIAAAbQAAAsgcAPQgUAMhMAIABQDlQgBAAAAABQglAKgqAAQgYAAgZgEQhRgPg+g9QgFgGgFgFQgtgygRg9QgEgTgCgTQgBgBAAgCQAJAIAIAJQgJgHgHgHABQDlIBBBJIj1AGIAyhEAESgKQgGBJgqA7QgNAUgTASQgzAyg/ATAESg1Qg9BhhqAqQgnAPgrgBQidAJh6hfQAUAXAFAHAkPgDQgSgUgXgaQgugwAAgtQAAgcARgTQAVgXAmAAQAfAAAQAGAjZCiQguAAghgMQgtgSAAgmQAAgUAbgNQAdgOAJgG");
	this.shape_31.setTransform(338,909.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFCC00").s().p("AAJAXIgPgSQgCgMAAgPIARAtIAAAAgAgFAKIgBgFIAPASIgOgNgAgGAFIAAAAg");
	this.shape_32.setTransform(311.5,908.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AhIgbIABgEQAZAEAaAAQAoAAAmgKIAAgBIBBBHIj1AGg");
	this.shape_33.setTransform(340.2,936.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#330000").s().p("AgzCPQhRgPg+g9IgKgLQgtgygQg7QgFgTgCgTIAQAOQB6BdCdgJQArABAngNQBqgqA9hjIABAVIgBAWQgFBLgqA5QgOAUgTASQgyAyhAATIgBABQglAKgoAAQgaAAgZgEgAjmgvQgFgHgVgXQAVAXAFAHg");
	this.shape_34.setTransform(338.2,918.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFCC").s().p("AkxBKQgsgRgBgmQAAgTAbgMQAegOAIgHIANgDQAQA8AtAxIgPAOQguAAghgNgADaAuQAqg5AGhLQAgASAiAJQASAHAAAcQAAApgbAPQgVAMhMAJg");
	this.shape_35.setTransform(338.9,916.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#F9E006").s().p("AjTB1IgTgwQAAhvBRhRQBQhQBvAAQByAABRBQQBJBKAHBhQg+BkhpApQgoAPgqgBIgcABQiMAAhvhXgAkOA1QgugxAAgqQABgdAQgTQAVgXAnAAQAeAAARAGIArgUQhRBRAABvQAAAPACAOIgqgtgAiVh7IAAAAg");
	this.shape_36.setTransform(333.8,899);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#663300").ss(4,2,0,3).p("AA1AlQgEAIgGAFQgFAFgHADQgHACgNAAQgWAAgVgMQgagPAAgcQAAgaAQgPQAOgLAcgHQACAAACgB");
	this.shape_37.setTransform(307.4,963.3);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#663300").ss(2,1,1).p("ADthtQACACADABQA6AnADBDQkiDek4jfAkugGQAEgkAfgbQAQgNAVgLQAKgFAMgF");
	this.shape_38.setTransform(339.6,976.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#663300").ss(4,1,1).p("AkeAaIhGCwIgFgJIg0hcIgKgQQBxiPBjg3IILhNIABAGIAEBfIABANIjsBMIBCCwQgFACgEABQjeBBjfg7QgQgEgOgFIAxiQAFJhZQABAEACAEQAEAJAGADQAFACAJAAQBEAAAAg9QgDgWgIgVQgQgpgeAAQgKAAgRALQgPAIgIAI");
	this.shape_39.setTransform(349.4,947.5);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#663300").s().p("AkrgBIgDgFQAEgkAfgbQAQgNAVgLIAWgKQDdA7DghBIAFADQA6AnACBDQiQBuiWAAQiVAAiehvg");
	this.shape_40.setTransform(339.6,976.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFCC").s().p("AmoDMQgagPAAgcQAAgcAQgPQAOgLAdgHIAFgBIA1BcIgEACQgEAIgGAFQgFAFgHADQgHACgNAAQgYAAgVgMgAFyhHQgGgEgFgJIgDgIIgMABIgDhfIADgBQAIgIAPgJQASgLAKAAQAdAAARApQAIAVACAWQAAA+hDAAQgKAAgEgCg");
	this.shape_41.setTransform(346.6,947.7);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("Aj9CuIgegJIAxiQIABgHIhGCxIgFgJIg0hcIgKgRQBxiOBjg4IILhMIABAGIAEBfIABANIjsBMIBCCwIgJADQh2AihzAAQhqAAhqgcg");
	this.shape_42.setTransform(344.1,948.6);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#663300").ss(4,1,1).p("AkRgYQgBgOABgPQAHhjBDhFQAJgKALgKQBWhLBvAIQBxAIBLBWQBEBOAABkQgBAKAAALQgBALgBAJQAfATAiAMQARAIgCAcQgDArgcAOQgWAKhMADAEPAFQgLBKguA4QgPATgUARQg2AuhBAPIA8BNIj1gLIA3hAAA8DoQgBAAAAABQglAHgogCQgagCgZgGQhQgVg5hBQgFgGgFgGQgpg0gMg/QgDgRgBgTQgBgDABgCQgGgJgHgKQgJgNgLgQQgkg0AHgsQAFgdAUgSQAZgVAmACQAfADAPAHAESgkQhEBdhtAiQgoAMgqgEQiegChzhlQgIgIgHgHAkRgYQAIAKAHAKQATAWAFAIAjoCRQgtgDgggPQgsgVADgmQABgUAcgLQAegMAJgG");
	this.shape_43.setTransform(343.3,909.6);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFCC00").s().p("AgGAJIAAgFIANAUIgNgPgAgGAEIAAgbIANAvIgNgUg");
	this.shape_44.setTransform(316.6,906.6);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("Ah6AcIA3g+IABgEQAaAFAaACQAoADAlgHIABgBIA7BLg");
	this.shape_45.setTransform(343,936.6);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#330000").s().p("AgSCJQgagCgZgGQhQgVg5hBIgKgMQgpgygMg/QgDgTgBgTIAPAPQBzBnCeACQAqACAogKQBtgiBEhfIgBAVIgCAWQgLBKguA2QgPATgUARQg2AuhBAPIgBABQgbAGgeAAIgUgBgAjqhJQgFgIgTgYQATAYAFAIg");
	this.shape_46.setTransform(343.3,919.7);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFCC").s().p("Ak1A0QgsgVADgkQABgVAcgKQAegMAJgGIANgCQAMA9ApA0IgQANQgtgEgggOgADWA8QAug4ALhJQAfAUAiAMQARAIgCAcQgDApgcANQgWALhMADg");
	this.shape_47.setTransform(343.3,917.1);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#F9E006").s().p("AAuDMQidgChzhoIgPgwQAGhhBEhGIAUgTQBVhLBwAIQBxAHBLBWQBEBPgBBiQhDBehtAiQgfAKgfAAIgVgBgAkTAeQgkgxAIgtQAFgcATgSQAZgWAmADQAfACAPAHIADADQhEBGgGBhIgOAJIgUgdgAinh1g");
	this.shape_48.setTransform(340.1,899.1);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#663300").ss(4,2,0,3).p("AA0AlQgEAIgFAFQgHAFgHADQgHACgMAAQgXAAgUgMQgagPABgcQABgaARgPQAOgLAcgHQACAAACgB");
	this.shape_49.setTransform(309.3,963.3);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#663300").ss(2,1,1).p("ADwhtQACACADABQA4AnABBDQkoDekxjfAkugGQAFgkAggbQAQgNAWgLQAKgFAMgF");
	this.shape_50.setTransform(341.1,976.5);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#663300").ss(4,1,1).p("AkfAaIhMCwIgEgIIgyhcIgJgRQB1iPBkg3IIOhNIABAGIAABfIACANIjvBMIA9CwQgFACgFABQjfBBjeg7QgPgEgOgFIA1iQAFKhZQACAEABAEQAEAJAGADQAFACAJAAQBEAAACg9QgCgWgIgVQgPgpgdAAQgKAAgSALQgPAIgJAI");
	this.shape_51.setTransform(351.9,947.5);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#663300").s().p("AkrgBIgDgFQAGgkAfgbQAQgNAXgLQAJgFAMgFQDcA7DhhBIAFADQA5AnABBDQiUBuiWAAQiWAAiahvg");
	this.shape_52.setTransform(341.1,976.5);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFCC").s().p("AmtDMQgagPAAgcQABgcARgPQAOgLAegHIAFgBIAyBcIgEACQgFAIgFAFQgGAFgHADQgHACgNAAQgYAAgUgMgAF0hHQgGgEgEgJIgDgIIgMABIAAhfIADgBQAJgIAPgJQASgLAKAAQAdAAAPApQAIAVACAWQgCA+hEAAQgJAAgFgCg");
	this.shape_53.setTransform(349,947.7);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AkDCuIgdgJIA1iQIACgHIhMCxIgEgJIgyhcIgJgRQB1iOBkg4IIOhMIABAGIAABfIABANIjuBMIA9CwIgKADQh2AihzAAQhqAAhqgcg");
	this.shape_54.setTransform(346.5,948.6);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#663300").ss(4,2,0,3).p("AAxlNQBMAugHBYQgBAOgIALQgTAbgegIQgdgJgMgsQgMgsgagjQgcgkgWgKAhuAUQBNCMgQCz");
	this.shape_55.setTransform(413.6,861.7);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#663300").ss(4,1,1).p("ADxiQIAAgbQAAhEgwgxQgwgwhFAAIgYAAIh2AAIgKAAQhFAAgwAwQgwAxAABEIAAAfQgUgDgUAXQgNAPAAAQQAAAZAYAQQAEADAJAIQAJAIAHACIAAgBIAAAAQAyAdBTALQA5AIBGgCQCigDA8gpQAKgFAUgOQARgOAEgRQAGgbgIgNQgJgQgggMADxiQIADgBQADgBACACQgCgBgCACIgEABgADxANQAPgBATAVQAWAZgDAoQgDApgQALQgHAGgNACIgOAFIAAAIQAABFgwAwQgwAwhFAAIh6AAIgeAAQhFAAgwgwQgwgwAAhFIAAgIIAAiBIAAg9ADxANIAAgnADxCgIAAiCIAAgRADxCjIAAgDAD/CeQgGACgIAAAilAbQgYAAgFAQQgDAGAAAbQAAArAJAVQALAaAdAAQAFAAAWgD");
	this.shape_56.setTransform(413.3,862);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFCC").s().p("AhmC3QhFgBgwgwQgwgwAAhFIAAgIIAAh/IAAg/IAAgBIAAAAQAyAfBTAMIABAEQBNCKgQC0gAiuAMIAbgDIgbADQgdAAgLgYQgJgVAAgrQAAgbADgGQAFgQAYAAQgYAAgFAQQgDAGAAAbQAAArAJAVQALAYAdAAIAAAAgADXh6IAAgQQAPgCATAVQAWAZgDAoQgDApgQALQgHAEgNADIgOABg");
	this.shape_57.setTransform(415.9,877.4);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#330000").s().p("AhxC2QARi0hNiKIgBgEQA5AHBIgCQCggEA8gqIAAAqIAAAQIAACAIAAADIAAAIQAABFgwAwQgxAwhFABg");
	this.shape_58.setTransform(420,877.5);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#F9E006").s().p("AhsCrQhTgLgygfIAAAAIAAABQgHgCgJgIIgNgLQgYgQAAgZQAAgQANgPQAUgXAUADIAAgdQAAhEAwgxQAwgwBFAAIAKAAQAWAKAcAkQAaAjAMAsQAMAsAdAIIABAAIAMABIAAAAIABAAQAUAAAPgTIAAAAQAIgLABgOIABgOQgBhOhFgqIAYAAQBFAAAwAwQAwAxAABEIAAAZIAAACIAEgBQABAAAAgBQABAAAAAAQABAAAAAAQABAAAAAAQAgAMAJAQQAIANgGAbQgEARgRAOIgeATQg8AqiiAEIgWABQg6AAgvgHgABMABIgMgBIgBAAQgdgIgMgsQgMgsgagjQgcgkgWgKIB2AAQBFAqABBOIgBAOQgBAOgIALIAAAAQgPATgUAAIgBAAIAAAAgAhCixg");
	this.shape_59.setTransform(413.3,846.1);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#663300").ss(4,1,1).p("Ajvh2QAAgDgBgDQgFgNgEgQQgTg8AVgqQANgcAYgNQAdgPAjALQAYAIANAKQAAgBABAAQADgCADgBQBmg1BqAiQBsAiA1BlQAwBcgYBfQhYBNhxAIQgrACgogOQiYgnhYh9QgGgJgFgJQAAgDABgCQAFAMAFALQANAcACAJAEWA6QgbBGg6AsQgTAOgXAMQhAAhhCgBQgBAAAAABQgkgCgogMQgZgIgXgLQhJgngphNQgDgHgEgHQgcg8AEg+QABgTAEgTAEWA6QAbAbAdASQAQANgJAaQgNAqgfAGQgXAFhLgOAEjARQgCAKgEAKQgDALgEAKAhtkaQhfA1ggBoQgCADgBAEAjzhhQABgLADgKAjzBNQgrgOgcgWQgmgeAMgiQAGgUAegDQAfgFALgEAAVDmIAoBZIjshEIBFgy");
	this.shape_60.setTransform(355.6,910.5);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("Ah1gGIBEgyIACgDQAXALAYAIQAnAMAmACQAAAAAAgBQAAAAABAAQAAAAAAAAQAAAAAAAAIAoBXg");
	this.shape_61.setTransform(349.9,936.4);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFCC00").s().p("AAFAZIgIgXIAIAXIgJgSQAAgDABgCIADgTIACgHIADAxIAAAAg");
	this.shape_62.setTransform(331.6,900.4);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#330000").s().p("AhNCUQgZgIgXgLQhJgngohNIgHgNQgcg7ADhAQABgTAFgTIAKASQBZB/CaAlQAmAOAqgCQBygIBYhLIgGAUIgHAVQgcBEg5AsQgUAOgXAMQg/AhhDgBQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAABAAAAQglgCgogMgAjuhqQgDgJgNgcQANAcADAJg");
	this.shape_63.setTransform(357.7,917.4);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFCC").s().p("ADHBxIgGgJQA6gsAbhEQAbAZAdASQAQANgJAaQgNAqgfAGIgOACQgcAAg4gLgAk6gZQgmgeAMgkQAGgUAegDQAfgFALgEIANABQgEBAAcA7IgSAIQgrgMgcgWg");
	this.shape_64.setTransform(355.6,917.3);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#F9E006").s().p("AgLDHQiagnhYh/IgDgyQAghoBfg1QhfA1ggBoIgEACIgJgdQgTg8AVgrQANgbAYgNQAdgQAjAMQAZAIAMAJIABAAIAGgEQBmg0BqAiQBsAiA1BkQAwBbgYBgQhYBNhxAIIgLABQglAAghgMg");
	this.shape_65.setTransform(357.6,899.7);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#663300").ss(4,2,0,3).p("AAVBAQgigJgEgGQgHgHAAgnQAAgSAIgTQAIgRAJgI");
	this.shape_66.setTransform(315.5,964);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#663300").ss(2,1,1).p("ADjgvQACACACACQAyAugIApQkZCcj/ioAjUh2QgBAAAHASQAFAMAIAVAkMAiQgKgHAMgYQAGgLAIgTQAGgRAGgXQAHgYAQAJQAPAJAYAq");
	this.shape_67.setTransform(343.1,973.2);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#663300").ss(4,1,1).p("AlcBuIgCADIgCAGIhAg4QBjjPBqgmIIRAQIAAAGIgNBeIgBAMIj2AjIAiC5QgEABgFAAQjfAZjMhbIgBABIAAgBIABAAAFCigQAJgHAQgGQATgIAKACQAdAFAJAsQAFAVgCAXQgKA8hDgLQgJgDgEgCQgGgEgCgKQgBgEgBgFAkPgpIgkA9IghBHIgEAKAlUBbIgFAKAlbBrQgCAAABADQAAAHALAeQAGAQAJAUAlZBmIgBAGQgBgBAAAAAlZBmIgCAF");
	this.shape_68.setTransform(357.5,951.7);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#663300").s().p("AkHAdIgFACQgKgHAMgXIAOgeIAMgoQAHgZAQAKQAPAIAYArIgPgkQgLgeAAgIQgBgBAAAAQAAgBABAAQAAAAAAAAQAAAAABAAIABAAIABgFIAAgBIABAAIgBABIABgBQDKBbDhgZIAEAEQAyAtgIApQiJBLiBAAQiKAAiEhXg");
	this.shape_69.setTransform(343.1,973.5);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("AknBqIAFgKIAghHIAkg9IgkA9IggBHIgFAKIAAAAIAFgKIgFAKIAAABIgDAFQAAAAAAAAQgBAAAAABQAAAAAAABQAAAAAAABIgCAEIgGgSIAAAAIAAAAIAGASIgBAFIhBg4QBjjPBrgmIIRAQIAAAGIgNBeIgCANIj1AjIAiC4IgKABQgwAGgwAAQirAAighIg");
	this.shape_70.setTransform(352.5,951.1);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFCC").s().p("AmnCpQgHgHAAgnQAAgUAIgTQAIgRALgIIBBA5IgKANQgPgKgHAZIgNAoQgkgJgEgGgAFigpQgKgCgEgCQgFgFgDgJIgBgJIgMgBIANheIADgBQAKgGAQgGQATgIAJACQAeAFAJArQAEAWgBAWQgJAzgwAAQgKAAgKgCg");
	this.shape_71.setTransform(356.1,952);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#663300").ss(4,2,0,3).p("AE7iQQhyDii9B9Qg2A4gvADIhFgQIAkg1Qg3A0hJglIAwg3IhTAZIgSgwIA6gyIhGANIgEhKICDgfQBCgQBVggQBSghBmimQAAgBABgC");
	this.shape_72.setTransform(353.5,948.5);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#663300").ss(4,1,1).p("AkllvQgBgCgBgDQgEgNAAgOQgBhNBPg3QBPg2BxAAQBwAABQA2QBRA3ABBNQAAACAAACQABABABABQADACADACQApAeAmApQBPBXAlBpQAdBWABBgQABANAAAMQhUBvhrhnIAsDBQAWCBhgBhQhuBOiNAAQicAAh6hiQgCgBgBgCQhIhAAKh4IATjYIAAgEIAAgBIAMhMIAHgpIAOhjAkllvQADgDADgDQB4hkCgAAQCJAABxBNQABABABAAAkqglIijg8IgKgLIgHgGQAwhqBWhiQAZgbAagWAD5iIIAMBKICrg8AEFg+IAbCXAlQEtIKcgT");
	this.shape_73.setTransform(415.6,933.5);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#663300").s().p("AkOA1IgDgCQhIg/AKh4IKcgTQAWCBhgBgQhuBOiNAAQicAAh6hjg");
	this.shape_74.setTransform(415.5,977);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFFCC").s().p("AokEAIAkg2Qg3A0hJglIAwg3IhTAZIgSgvIA6gzIhGAOIgEhKICDggQBCgQBVggQBUggBminIALAIICjA9IgGAqQhyDii9B9Qg4A5gvADgAIIg2IgbiZICqg7IAQgFQAdBWACBiIAAAZQgrA6gyAAQguAAgzgyg");
	this.shape_75.setTransform(392.5,948);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFFFF").s().p("AkuDkIAAgEIABgBIAMhNIAGgqIijg8IgKgLIgGgGQAvhpBXhhQAYgbAagWIAHgGIgIABQgEgOgBgOQgBhNBPg2QBPg2ByAAQBvAABRA2QBQA2ABBNIgCAEQhwhNiMAAQidAAh4BkQB4hkCdAAQCMAABwBNIACABIACACIAGAEQAqAeAlApQBQBWAkBoIgQAEIiqA8IgNhLIANBLIAbCZIAsDAIqcATgAkbBoIAPhkg");
	this.shape_76.setTransform(414.1,919.3);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("#663300").ss(4,1,1).p("ADoifIgCgbQgEhEgzgtQg0gthFAFIgXABIh3AIIgJAAQhFAFgsAzQguAzAFBEIABAfQgTgBgTAYQgMAPABARQACAZAYAOQAFADAKAHQAJAHAHACIAAgBIAAAAQAlASA1AIQAVADAYACQA5AEBGgGQCigOA5gsQAJgGAUgPQAQgPADgRQAEgcgIgMQgLgQghgKQgBAAgCACIgEABIAAgCIADgBQADgBABABAD7CQIgIiCIgBgOIgDgpADyAAQAPgDAUATQAYAXgBAoQgBApgOANQgHAGgNADIgNAGIAAAHQAEBFgsAzQguA0hEAEIiYAKQgJAAgJAAQg6gCgrgnQg0gtgEhFIgBgHIgGhaIgCghIAAgHIgEg8AEJCOQgGABgIABIABAEAjLAmQgXACgFAPIAAAAQgCAHACAbQADArAKAUQANAZAcgCQAFAAAWgE");
	this.shape_77.setTransform(408.4,861.9);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#663300").ss(4,2,0,3).p("AA6lQQBOApgBBYQAAAOgHALQgRAcgegGQgegGgPgsQgOgqgdgiQgegigXgIAh+AaQBWCHgFC2");
	this.shape_78.setTransform(405.7,861.7);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFFFCC").s().p("AjKCIQg0gtgEhFIAAgHIgGhYIgCghIgBgHIgEg+IAAgBIABAAQAlAUA0AIIgBAKQBWCHgFC0Qg5gCgsgngAjRALIACAAIAAAAIACAAIAagEIgaAEIgCAAIAAAAIgCAAIAAAAIgBAAQgXAAgMgSIAAgBIAAAAIAAgBIgBgBQgLgUgDgrIAAgUQAAgKABgEIAAAAQAEgPAYgCQgYACgEAPIAAAAQgBAEAAAKIAAAUQADArALAUIABABIAAABIAAAAIAAABQAMASAXAAIABAAIAAAAgADWiUIgBgQQAPgDAUAVQAYAXAAAoQgBApgPANQgGAGgOADIgNACg");
	this.shape_79.setTransform(411.3,878.3);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#330000").s().p("Ah5C/QAFi2hXiEIACgKQAVADAYACQA5AEBIgGQCggPA5gtIADAoIABAQIAICDIABADIAAAGQAEBEgsAzQguA0hEAFIiYAJIgLAAIgHAAg");
	this.shape_80.setTransform(413.3,876.9);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#F9E006").s().p("AhlCzQgYgBgVgEQg1gIglgUIAAAAIAAABQgHgCgJgHIgPgKQgYgOgCgZQgBgRAMgPQATgYATABIgBgfQgFhCAugzQAsgzBFgFIAJAAIB3gIIAXgBQBFgFA0AtQAzAtAEBEIACAaIAAABIAEgBIADAAQAhAIALAQQAIAMgEAcQgDARgQAPIgdAVQg5AuiiAOQgpAEgmAAQgZAAgXgCgABGgBQAVAAANgUIABgBIAAAAIABgCQAHgLABgOIAAgCQAAhWhNgpQBNApAABWIAAACQgBAOgHALIgBACIAAAAIgBABQgNAUgVAAIgBAAIAAAAIgKgBQgegGgOgsQgPgqgcgiQgfgigXgIQAXAIAfAiQAcAiAPAqQAOAsAeAGIAKABIAAAAIABAAg");
	this.shape_81.setTransform(407.8,845.9);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFCC00").s().p("AgDACIADgTIACgHIADAxIgIgXgAgEAHQAAgDABgCIAIAXIgJgSg");
	this.shape_82.setTransform(331.6,900.4);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#F9E006").s().p("AgLDHQiagnhYh/IgDgyQAghoBfg1IABAAIAGgEQBmg0BqAiQBsAiA1BkQAwBbgYBgQhYBNhxAIIgLABQglAAghgMgAkNgsQgTg8AVgrQANgbAYgNQAdgQAjAMQAZAIAMAJQhfA1ggBoIgEACIgJgdgAiBiuIAAAAg");
	this.shape_83.setTransform(357.6,899.7);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("#663300").ss(4,1,1).p("AFCigQAJgHAQgGQATgIAKACQAdAFAJAsQAFAVgCAXQgKA8hDgLQgJgDgEgCQgGgEgCgKQgBgEgBgFAlcBuIgCADIgCAGIhAg4QBjjPBqgmIIRAQIAAAGIgNBeIgBAMIj2AjIAiC5QgEABgFAAQjfAZjMhbIAEgKIAhhHIAkg9AlZBmIAAgBIAFgKAlYBlIgBABIgBAGQgBgBAAAAQgCAAABADQAAAHALAeQAGAQAJAUAlZBlIABAAAlZBmIgCAF");
	this.shape_84.setTransform(357.5,951.7);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f().s("#663300").ss(4,2,0,3).p("AE0iJQhjDbi6B9Qg0A4gvADIhGgQIAjg1Qg2A0hKglIAvg3IhSAZIgTgwIA4gyIhFANIgGhKICDgfQBBgQBVggQBRghBjimQABgBABgC");
	this.shape_85.setTransform(351.9,948.5);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("#663300").ss(4,1,1).p("AlflJQgRgsADgNQARhOBbg3QBbg1ByAAQBvAABFA1QArAjAJArQhcgshoAAQigAAh2BkQgdAYgbAfQAAAAgBABgAk6g2IiVg4IgKgKIgHgHQAthpBUhhAlKEgIAOjXIAAgEIABgBIgBhEIACg2IgDhjAFVDsQAVCpheBbQhuBOiMAAQidAAh7hjQgCgBgBgBQhKhBAJh4gAC0m5QAfAPAcAUQADACADADQAqAeAnApQBRBWAmBpQAfBWADBgQABANAAANQhSBuhshnIAzCgAD2iVIAOBKICpg7AEEhLIAeCX");
	this.shape_86.setTransform(414.5,934.8);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#663300").s().p("AkNBGIgDgDQhJhAAIh2IKgg0QAUCnheBbQhtBOiNgBQicAAh8hig");
	this.shape_87.setTransform(415.1,975.3);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FFFFCC").s().p("AofEAIAjg2Qg2A0hJglIAug3IhSAZIgTgvIA4gzIhFAOIgFhKICCggQBCgQBUggQBTggBjinIAMAIICVA5IgCA2QhiDai7B9Qg2A5gvADgAIHg2IgeiZICqg7IAQgFQAfBWACBiIABAZQgqA6gxAAQguAAg1gyg");
	this.shape_88.setTransform(391.6,948);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FFFFFF").s().p("AkqDXIAAgEIAAgBIgBhFIACg2IgChhIACBhIiUg4IgKgLIgHgGQAthnBUhhIABgCQAbgeAdgZQB2hkCeAAQBqAABbAtQAfAPAdAUIAGAEQAqAeAnApQBRBXAmBnIgQAEIiqA8IgNhIIANBIIAfCZIAzCfIqfA1gAlbj0QARhNBbg3QBbg2ByAAQBvAABFA2QAqAjAJArQhbgthqAAQieAAh2BkQgdAZgbAeIgBACQgSgsAEgOgADFkqIAAAAg");
	this.shape_89.setTransform(412.7,920.5);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("#663300").ss(4,2,0,3).p("AAehTIApBhQAJAVgKAUQgIAVgUAJQgVAJgVgJQgSgJgJgUIgphh");
	this.shape_90.setTransform(383.2,840.1);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f().s("#663300").ss(4,1,1).p("ADDh0QAGgJAOgVQAKgTgDgRQgFgbgMgJQgPgMgiACQgBAAgCACIgDADIgBgDIADgBQACgCACABADYhAQAHgMANgLQAMgMAeAOQAfAPAMAmQANAlgKAQQgJAQglANIgKAIIACAHQAbBAgaA/QgaA/hAAbIiOA6Qg+Abg/gbQg/gagag/IgDgHQgUAKgEACQgbALgUgUQgQgQgQgoQgLgZAAgGQAAgQAVgJIAsgLIgZg6ADYhAIgVg0AEMA6Ig0h6ACVjiIgKgYQgahAg/gaQg9gahAAbIgbALIhkApIgPAGQg/AbgbA+QgaBAAbA/IALAdQgTAEgKAdQgGARAGAPQAKAXAcAGQAEABAMAEQAMADAGAAIAAgBQBiAQChhIQCUg/Aog+AjjB8IAxB4");
	this.shape_91.setTransform(396.6,864.6);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#330000").s().p("AhlDeQg/gagbg/IgCgHIgyh4IgYg4IAAgBQBiAQCihIQCThBAng+IAWA0IAzB8IADAHQAaA+gaA/QgaA/hAAbIiOA6QgdANgfAAQggAAgggNg");
	this.shape_92.setTransform(398.1,876.4);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FFFFCC").s().p("AkKCkQgQgQgRgoQgKgZAAgGQgBgQAWgJIArgLIAyB4IgZAMQgJAEgJAAQgPAAgNgNgADHiTQAGgMANgLQANgMAeAOQAeAPANAmQAMAngKAQQgJAQgkANIgLAIg");
	this.shape_93.setTransform(398.3,872.9);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#F9E006").s().p("AjHDQIAAABQgGAAgMgDIgQgFQgcgGgKgXQgGgPAGgTQAKgdATgEIgLgdQgbg/Aag+QAbg+A/gbIAPgGIBkgpIAbgLQA+gbA/AaQA/AaAaBAIAKAYIABADIADgDQAAgBABAAQAAgBABAAQAAAAAAAAQABAAAAAAQAigCAPAMQAMAJAFAbQADARgKATIgUAcQgoA+iUBBQiEA7haAAQgTAAgSgDgAg6gLQAJAAAIgDIACgBIABAAIABAAQAUgJAIgVQAFgLAAgLQAAgKgEgJIgphjIApBjQAEAJAAAKQAAALgFALQgIAVgUAJIgBAAIgBAAIgCABQgIADgJAAIAAAAIAAAAQgJAAgJgEIgBAAIgBAAIgBgBIAAAAQgUgIgJgVIgphjIApBjQAJAVAUAIIAAAAIABABIABAAIABAAQAJAEAJAAIAAAAIAAAAg");
	this.shape_94.setTransform(391.3,850.3);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f().s("#663300").ss(4,1,1).p("AlcBuIgCADIgCAGIhAg4QBjjPBqgmIIRAQIAAAGIgNBeIgBAMIj2AjIAiC5QgEABgFAAQjfAZjMhbIgBABIAAgBAFCigQAJgHAQgGQATgIAKACQAdAFAJAsQAFAVgCAXQgKA8hDgLQgJgDgEgCQgGgEgCgKQgBgEgBgFAkPgpIgkA9IghBHIgEAKAlUBbIgFAKIABAAAlbBrQgCAAABADQAAAHALAeQAGAQAJAUAlZBmIgBAGQgBgBAAAAAlZBmIgCAF");
	this.shape_95.setTransform(357.5,951.7);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#663300").s().p("AkHAdIgFACQgKgHAMgXIAOgeIAMgoQAHgZAQAKQAPAIAYArIgPgkQgLgeAAgIQgBgBAAAAQAAgBABAAQAAAAAAAAQAAAAABAAIABAAIABgFIABgBQDKBbDhgZIAEAEQAyAtgIApQiJBLiBAAQiKAAiEhXgAjJhzIABAAIgBABg");
	this.shape_96.setTransform(343.1,973.5);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FFFFFF").s().p("AknBqIAFgKIgFAKIAAABIgDAFQAAAAAAAAQgBAAAAABQAAAAAAABQAAAAAAABIgCAEIgGgSIAAAAIAAAAIAGASIgBAFIhBg4QBjjPBrgmIIRAQIAAAGIgNBeIgCANIj1AjIAiC4IgKABQgwAGgwAAQirAAighIgAkCAZIggBHIAghHIAkg9gAknBqIAFgKIgFAKg");
	this.shape_97.setTransform(352.5,951.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20}]}).to({state:[{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20}]},593).to({state:[{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_30},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20}]},2).to({state:[{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_84},{t:this.shape_67},{t:this.shape_66},{t:this.shape_83},{t:this.shape_64},{t:this.shape_63},{t:this.shape_82},{t:this.shape_61},{t:this.shape_60},{t:this.shape_30},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72}]},34).to({state:[{t:this.shape_71},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_67},{t:this.shape_66},{t:this.shape_83},{t:this.shape_64},{t:this.shape_63},{t:this.shape_82},{t:this.shape_61},{t:this.shape_60},{t:this.shape_30},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85}]},2).wait(54));

	// 路
	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#663300").s().p("AZSFkIAAlZQAAhthPhPQhOhOhvAAIhsAAIAAJjIhkAAIAApjIltAAIAAJjIhkAAIAApjIlZAAIAAJjIhkAAIAApjIlrAAIAAJjIhkAAIAApjImfAAIAAJjIhkAAIAApjIltAAIAAJjIhkAAIAApjIiKAAQhuAAhPBOQhPBPAABtIAAFZIhkAAIAAlZQAAiWBshsIAAAAIAAgBQBshrCYAAMAqLAAAQCYAABsBsQBsBsAACWIAAFZg");
	this.shape_98.setTransform(650.6,954.7);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f().s("#663300").ss(4,1,1).p("Egy7gJdMBl3AAAIAAS7Mhl3AAAg");
	this.shape_99.setTransform(319.5,1038.7);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#FFFFCC").s().p("Egy7AJeIAAy7MBl3AAAIAAS7g");
	this.shape_100.setTransform(319.5,1038.7);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f().s("#663300").ss(4,1,1).p("Egy7gOvMBl3AAAIAAdfMhl3AAAg");
	this.shape_101.setTransform(319.5,954.4);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#FFFFFF").s().p("Egy7AOwIAA9fMBl3AAAIAAdfg");
	this.shape_102.setTransform(319.5,954.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98}]}).wait(685));

	// 云
	this.instance_3 = new lib.元件24副本();
	this.instance_3.setTransform(-445.6,705.3,1,1,0,0,0,-427.4,173.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(685));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-893.1,530.1,1715.6,571.2);


(lib.fatherandson = function() {
	this.initialize();

	// papa1
	this.instance = new lib.papa1();
	this.instance.setTransform(129.5,63.9,0.509,0.509,0,0,0,99,163.6);

	// son
	this.instance_1 = new lib.son();
	this.instance_1.setTransform(103.5,-40.5,0.509,0.509,0,0,0,-118.2,-142);

	// moto run
	this.instance_2 = new lib.motorun();
	this.instance_2.setTransform(98.9,124.5,0.509,0.509,0,0,0,193,135.1);

	this.addChild(this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-12.7,-21.2,239.3,215.6);


(lib.hit4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// 图层 3
	this.hit_mc = new lib.元件74();
	this.hit_mc.setTransform(-1,2.4,0.55,0.755,0,0,0,109,65);
	this.hit_mc.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.hit_mc).wait(2));

	// 图层 1
	this.instance = new lib.元件50();
	this.instance.setTransform(5.4,-8.5,1,1,0,0,0,81.5,55.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-72.8,-74.5,156.3,132.3);


(lib.hit3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// 图层 3
	this.hit_mc = new lib.元件74();
	this.hit_mc.setTransform(-48.3,-1.3,0.567,1,0,0,0,109,65);
	this.hit_mc.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.hit_mc).wait(1).to({x:26.7},0).wait(1));

	// 图层 1
	this.instance = new lib.元件44();
	this.instance.setTransform(-46.3,-35,1,1,0,0,0,56.4,73);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({skewY:180,x:35.7},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-154.6,-110,579.6,201.8);


(lib.hit0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		var times=0;
		this.times=times;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// 图层 3
	this.hit_mc = new lib.元件74();
	this.hit_mc.setTransform(12.4,-1.3,0.798,1,0,0,0,109,65);
	this.hit_mc.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.hit_mc).wait(2));

	// 图层 1
	this.instance = new lib.元件52();
	this.instance.setTransform(55,-10,1,1,0,0,0,181,110);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({skewY:180,x:-65},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-128,-122,248.5,224);


(lib.元件35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_22 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(22).call(this.frame_22).wait(1));

	// 元件 34
	this.instance = new lib.元件34();
	this.instance.setTransform(348.7,83.1,0.717,0.717,-64.2,0,0,38.6,39.5);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(13).to({_off:false},0).to({scaleX:1.04,scaleY:1.04,rotation:5,x:401.2,y:74.3,alpha:1},6,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,rotation:0,x:395.3,y:75.3},3).wait(1));

	// 元件 33
	this.instance_1 = new lib.元件33();
	this.instance_1.setTransform(282.1,102.5,0.717,0.717,75.7,0,0,37.8,38.2);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(11).to({_off:false},0).to({regX:37.6,regY:38.3,scaleX:1.04,scaleY:1.04,rotation:-8.2,x:305,y:102.3,alpha:1},6,cjs.Ease.get(1)).to({regX:37.7,scaleX:1,scaleY:1,rotation:0,x:302.5},3).wait(3));

	// 元件 32
	this.instance_2 = new lib.元件32();
	this.instance_2.setTransform(224.4,78.5,0.717,0.717,-59,0,0,35.9,37.1);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(9).to({_off:false},0).to({scaleX:1.04,scaleY:1.04,rotation:11,x:221.6,y:67.7,alpha:1},6,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,rotation:0,x:222,y:68.9},3).wait(5));

	// 元件 31
	this.instance_3 = new lib.元件31();
	this.instance_3.setTransform(170.5,120.8,0.717,0.717,-52.2,0,0,40,37.6);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(7).to({_off:false},0).to({regX:39.9,scaleX:1.04,scaleY:1.04,rotation:13.8,x:143.6,y:128.8,alpha:1},6,cjs.Ease.get(1)).to({regX:40,scaleX:1,scaleY:1,rotation:13.8,x:146.7,y:127.9},3).wait(7));

	// 元件 31
	this.instance_4 = new lib.元件31();
	this.instance_4.setTransform(95,87.1,0.717,0.717,27.2,0,0,40,37.8);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(5).to({_off:false},0).to({regY:37.6,scaleX:1.04,scaleY:1.04,rotation:-6.5,x:61.4,y:79.9,alpha:1},6,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,rotation:0,x:67.3,y:80.7},3).wait(9));

	// 元件 36    复制 4
	this.instance_5 = new lib.元件36();
	this.instance_5.setTransform(392.3,71.7,1,1,0,0,0,77.8,77.8);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(10).to({_off:false},0).wait(13));

	// 元件 36   复制 3
	this.instance_6 = new lib.元件36();
	this.instance_6.setTransform(305.4,101.3,1,1,0,0,0,77.8,77.8);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(7).to({_off:false},0).wait(16));

	// 元件 36  复制 2
	this.instance_7 = new lib.元件36();
	this.instance_7.setTransform(225.8,68,1,1,0,0,0,77.8,77.8);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(5).to({_off:false},0).wait(18));

	// 元件 36 复制
	this.instance_8 = new lib.元件36();
	this.instance_8.setTransform(151.8,119.8,1,1,0,0,0,77.8,77.8);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(3).to({_off:false},0).wait(20));

	// 元件 36
	this.instance_9 = new lib.元件36();
	this.instance_9.setTransform(77.8,82.8,1,1,0,0,0,77.8,77.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(23));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(43.9,48.9,67.7,67.7);


(lib.rules = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_22 = function() {
		this.stop();
		
		var root=this;
		
		
		initOil();
		
		function initOil()
		{
			canvas.addEventListener('touchstart',onMouseEvent,true);
			root.btn0.alpha=0.001;
			root.btn0.name='btn0';
			
			root.btn1.alpha=0.001;
			root.btn1.name='btn1';
			
			
			addSound();
		}
		
		
		function onMouseEvent(e)
		{
			//阻止网页默认动作（即网页滚动）
			e.preventDefault();
			
			var touch=e.touches[0];
			
			var obj=checkClickArr(touch,[root.btn0,root.btn1]);
			
			
			//return;
			if(obj.click==true)
			{
				playSound0();
				if(obj.mcname=='btn0')
				{
					operation=1;
				}
				else if(obj.mcname=='btn1')
				{
					operation=1;
				}
				canvas.removeEventListener("touchstart", onMouseEvent,true);
				console.log('choose type:',operation);
				root.parent.gotoAndStop(2);
			}
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(22).call(this.frame_22).wait(1));

	// btn
	this.btn1 = new lib.元件59();
	this.btn1.setTransform(422.2,700.7,1,1,0,0,0,109,129.5);

	this.btn0 = new lib.元件59();
	this.btn0.setTransform(203.1,700.7,1,1,0,0,0,109,129.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.btn0},{t:this.btn1}]},22).wait(1));

	// 标题
	this.instance = new lib.元件35();
	this.instance.setTransform(320.6,113.4,1,1,0,0,0,230.3,99);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(23));

	// 规则
	this.instance_1 = new lib.元件30();
	this.instance_1.setTransform(157,483.8,1,1,0,0,0,399,219.5);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(6).to({_off:false},0).to({alpha:1},5).wait(12));

	// 框
	this.instance_2 = new lib.元件28();
	this.instance_2.setTransform(322.2,509.6,0.392,0.392,0,0,0,254.8,242.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleX:1.05,scaleY:1.05,x:322.3},6,cjs.Ease.get(1)).to({scaleX:1,scaleY:1},5,cjs.Ease.get(1)).wait(12));

	// 图层 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Egx/BYwMAAAixfMBj+AAAMAAACxfg");
	mask.setTransform(320,568);

	// 车
	this.instance_3 = new lib.fatherandson();
	this.instance_3.setTransform(325.5,876.2,1,1,0,0,0,114.2,88.4);

	this.instance_3.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(23));

	// 线
	this.instance_4 = new lib.元件22();
	this.instance_4.setTransform(-62.2,1010.4,1,1,0,0,0,55.7,9.8);

	this.instance_4.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(23));

	// 路
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#663300").ss(4,1,1).p("Egy7gJdMBl3AAAIAAS7Mhl3AAAg");
	this.shape.setTransform(319.5,1019.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFCC").s().p("Egy7AJeIAAy7MBl3AAAIAAS7g");
	this.shape_1.setTransform(319.5,1019.2);

	this.shape.mask = this.shape_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(23));

	// 房
	this.instance_5 = new lib.元件26();
	this.instance_5.setTransform(-455.8,922.1,1,1,0,0,0,63.9,36.5);

	this.instance_5.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(23));

	// 云
	this.instance_6 = new lib.元件24();
	this.instance_6.setTransform(345,804,1,1,0,0,0,374.4,168);

	this.instance_6.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(23));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136.1);


(lib.result = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.movie_mc.gotoAndPlay(0);
	}
	this.frame_6 = function() {
		this.result_mc._txt.text=score;
	}
	this.frame_15 = function() {
		this.stop();
		
		var root=this;
		
		var isShare=false;
		
		initOil();
		
		function initOil()
		{
			canvas.addEventListener('touchstart',onMouseEvent,true);
			root.replay_mc.alpha=0.0001;
			root.replay_mc.name='replay_mc'
			
			root.share_mc.alpha=0.0001;
			root.share_mc.name='share_mc'
			
			root.bg_mc.visible=false;
			root.tips_mc.visible=false;
		}
		
		
		function onMouseEvent(e)
		{
			//阻止网页默认动作（即网页滚动）
			e.preventDefault();
			
			var touch=e.touches[0];
			
			var obj=checkClickArr(touch,[root.replay_mc,root.share_mc]);
			
			if(obj.click==true)
			{
				playSound0();
				if(obj.mcname=='replay_mc'&&!isShare)
				{
					//operation=0;
					replayFun();
				}
				else if(obj.mcname=='share_mc'&&!isShare)
				{
					//operation=1;
					isShare=true;
					shareFun();
				}
				
				
				//console.log('choose type:',operation);
				
			}
			else if(isShare)	
			{
				playSound0();
				isShare=false;
				root.bg_mc.visible=false;
				root.tips_mc.visible=false;
			}
		}
		
		function replayFun()
		{
			root.movie_mc.stop();
			canvas.removeEventListener("touchstart", onMouseEvent,true);
			root.parent.gotoAndStop(2);
			
		}
		
		function shareFun()
		{
			root.bg_mc.visible=true;
			root.tips_mc.visible=true;
			window.innerWidth
			root.tips_mc.x=640-200+(((window.innerWidth-(640*scale))/2)/scale);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(6).call(this.frame_6).wait(9).call(this.frame_15).wait(1));

	// 图层 4
	this.instance = new lib.元件46();
	this.instance.setTransform(516.3,1077.8,0.559,0.559,0,0,0,173.2,38.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(16));

	// 分享
	this.tips_mc = new lib.元件2复制();
	this.tips_mc.setTransform(448.6,180.5,1,1,0,0,0,154.2,147.2);

	this.bg_mc = new lib.元件1复制();
	this.bg_mc.setTransform(322.1,569.1,1,1,0,0,0,322.1,569.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.bg_mc},{t:this.tips_mc}]},15).wait(1));

	// _mc
	this.share_mc = new lib.元件76();
	this.share_mc.setTransform(416.6,573.6,1,1,0,0,0,77.5,77.5);
	this.share_mc.alpha = 0;

	this.replay_mc = new lib.元件76();
	this.replay_mc.setTransform(227.5,573.6,1,1,0,0,0,77.5,77.5);
	this.replay_mc.alpha = 0;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.replay_mc},{t:this.share_mc}]},15).wait(1));

	// 图层 10
	this.instance_1 = new lib.元件9复制();
	this.instance_1.setTransform(426.9,567.9,1.271,1.271,0,0,0,22.2,20.6);

	this.instance_2 = new lib.元件9();
	this.instance_2.setTransform(227.9,567.9,1.271,1.271,0,0,0,22.2,20.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2},{t:this.instance_1}]},15).wait(1));

	// 标题
	this.instance_3 = new lib.元件35();
	this.instance_3.setTransform(320.6,113.4,1,1,0,0,0,230.3,99);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(16));

	// result
	this.result_mc = new lib.元件30副本();
	this.result_mc.setTransform(157,483.8,1,1,0,0,0,399,219.5);
	this.result_mc.alpha = 0;
	this.result_mc._off = true;

	this.timeline.addTween(cjs.Tween.get(this.result_mc).wait(6).to({_off:false},0).to({x:158.7,alpha:1},5).wait(5));

	// 框
	this.instance_4 = new lib.元件28副本();
	this.instance_4.setTransform(322.2,509.6,0.392,0.392,0,0,0,254.8,242.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({scaleX:1.05,scaleY:1.05,x:322.3},6,cjs.Ease.get(1)).to({scaleX:1,scaleY:1},5,cjs.Ease.get(1)).wait(5));

	// 图层 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Egx/BYwMAAAixfMBj+AAAMAAACxfg");
	mask.setTransform(320,568);

	// 图层 2
	this.movie_mc = new lib.finallll();
	this.movie_mc.setTransform(-39,854.4,1,1,0,0,0,-35.4,815.7);

	this.movie_mc.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.movie_mc).wait(16));

	// 图层 1 复制
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("Egx/AIbIAAw1MBj+AAAIAAQ1g");
	this.shape.setTransform(320,1082.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Egx/BQUMAAAigoMBj+AAAMAAACgog");
	this.shape_1.setTransform(320,514.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(16));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136.1);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;/*  |xGv00|5037c02db41f7751cc074237e895a763 */