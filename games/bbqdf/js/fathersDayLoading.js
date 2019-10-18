(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 640,
	height: 1136,
	fps: 24,
	color: "#FF0000",
	manifest: []
};

// stage content:
(lib.fathersDayLoading = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var timeNum;
		var root=this;
		
		
		timeNum=setInterval(loadingFun,30);
		
		function loadingFun()
		{
			console.log('loading canvas:',loadingProgress);
			
			root.loading_mc.gotoAndStop(50*loadingProgress>>0);
		
			if(loadingProgress==1)
			{
				console.log('loading canvas complete');
				clearInterval(timeNum);
				root.loading_mc.gotoAndPlay(50);
			}
		}
		
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
			
			canvasLoading.width=w;
			canvasLoading.height=h;
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// 图层 1
	this.loading_mc = new lib.loading();
	this.loading_mc.setTransform(316.8,553.8,1,1,0,0,0,151.8,167.8);

	this.timeline.addTween(cjs.Tween.get(this.loading_mc).wait(1));

	// 图层 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Egx/BYvMAAAixeMBj+AAAMAAACxeg");
	this.shape.setTransform(320,568);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(320,568,640,1136);


// symbols:
(lib.元件10 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ege0Ai4MAAAhFwMA9pAAAMAAABFwg");
	this.shape.setTransform(197.4,223.3);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,394.7,446.6);


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
	this.shape_4.graphics.f("#330000").s().p("AAzAZIgBAAQgtgLgpgGQg6gIg1gBIArhZIgrBZIgCAAQg4gCg0AFQARgdATgdIALgRQAzgUA3ADQAuAEAkAHIAYAOQAlATAjAVIgDAEIAEgEQBiA3BVA+QhtgrhigYgAA0ATIATgogAgiAAIAkhBg");
	this.shape_4.setTransform(39.9,24.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFCC").s().p("ABlE1QhhgLhfgUQhxgYhrgmQh6grgIiDQgBgdABgaQAChGAThEQAJgfAMgfQALgeAOgcQAHgQAJgQIAAgBQA0gGA4ACIACAAQA1ABA6AJQArAHAtALIABAAQBgAXBtArQChB2BsCFIgBACIgDAMQAqgDASAPQASANAAAjQgBAig6BAQg2Avg2gxQA9hGAchWQgcBWg9BGIgTAVQhQBShvAAIgWgBgAiEB0QgGAXAMAUQANAVAXAFIAAAAQAXAGAUgMQAVgMAFgXIAVhSIANAAIARAAIgRAAIgNAAQhEgDgsgWQgOgHgLgJQALAJAOAHgAnyhJQgFhwAqgZQAUgOAqALQgMAfgJAfQgTBEgCBGQgwgLgJgxg");
	this.shape_5.setTransform(50,54.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F9E006").s().p("AGlElQhriHiih2QhUg7hhg5IgBgBQgjgUgkgTIgbgOQgjgIgvgEQg2gDgzAVIgLAQQgUAegQAeIAAABQgJAQgIAQQiPh6BQhIQA9gfBXAdQARAGASAIIgCACQBFAgBAAhQhAghhFggIACgCQgSgIgRgGQBohUCpADQCsADB8BLQBxBEA3ByIADAGQA9C4hVCHg");
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


(lib.元件2 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#663300").ss(4,1,1).p("AgXglQgCgeAZggQAgglA6gRQA5gRAvANQAwAPAKAjQALAlggAlQggAlg5ARQg6ARgvgPQgWgGgNgKQiHBKhGBRQg6AKAHgvQBYhmCMg8");
	this.shape.setTransform(154.8,-10.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F9E006").s().p("Aj+B9QBYhmCMg8IADAAQgCgeAZggQAgglA6gRQA5gRAvANQAwAPAKAjQALAlggAlQggAlg5ARQg6ARgvgPQgWgGgNgKQiHBKhGBRQgKACgIAAQgmAAAFgng");
	this.shape_1.setTransform(154.8,-10.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#663300").ss(7,1,1).p("AeXEnQAEALADALQAnCRgjCxQAAAAAAABQAWAtASAqAbNEQIDKAXIBCAIQArBcgLCYQgLCYgkAcQA1B9ABB9QiXA3rzAkQofgRAMg1I1AAAQnBgKgyosQgCgUgBgUQjyjTnjBSQijAKCNjOQCNjLE+grQE+gqBGi3QiBGMAdGQAc8HYIh0jFIhViSQAAAAABAAQASgphNiQQglhqjogXQmeguoBAOQknAMgUB1QhdDuBwAmQABAAAAAAIi1IeAehJ+QAAAAABABAehJ+QAAgCABgCIAAAFAc8HYQA2BGAvBgAZ0CBQhwhYoQClQloBch1g2Qh0g3gEgCQifhliCAYIgVBGAohwdQB0ArhkDQQjxH4hhK4QgZEuDKApIJjAAIFWAAAL/LqIgRArAJRMXQBNnDGfhrQHiiEEdFzAohwdIAAgGAtwuiQAAAAABgBQCWizC4A5AxUnlIBEgRQBzieAwkNIgDgBAy3vwQAbAMAUA/QAZBNAABuQAABugZBOQgJAdgNAVQgNATgNAIQgDACgDgBIgGgBQgjAAgZhNQgZhOAAhuQAAhuAZhNQAZhOAjAAQAAAAABAAQAGAAAGADQAngDArAFQACAAACAAQAYAOATA7QAZBNAABuQAABugZBOQgJAdgNAVQgMARgLAIAxhvuQBqANCHA/AtxoqQgOAogMAqAxUnlQgHABgIABQgBAAgCAAQgVADgPABQgcACgSgEAxvmUQANgpAOgoAqZuoQhyB5hLC7AMkKUQB4jfEagt");
	this.shape_2.setTransform(204.9,106.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#482400").s().p("Ak2DfIh4g5QifhliCAYIgVBGIgEAIQhzgmBfjuQAUh1EngMQH/gOGfAuQDnAXAmBqQBNCQgTApQhwhYoPClQjhA6iCAAQhNAAgrgUg");
	this.shape_3.setTransform(289.7,108.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFCC").s().p("AAGEJIgGgBQghAAgZhOQgahNAAhtQAAhtAahOQAZhNAhAAIABAAQAGAAAGADQAbAMATA+QAaBOAABtQAABtgaBNQgJAdgMAVQgNAUgNAHIgFACIgBAAg");
	this.shape_4.setTransform(82.8,32.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#CCCCCC").s().p("AYAMNIAAAAQARhUAAhMQAAhWgVhMIA8gOQAqBcgKCYQgLCYglAcQgSgqgWgugAYAMNIAAgFIgBADQguhfg3hGIhzjGIAFgCIDKAXIAGAWQAVBMAABWQAABMgRBUIAAAAgAX/MLIABgDIAAAFIgBgCgA5ZlTQAMgIANgTQANgVAJgdQAZhOAAhuQAAhugZhNQgUg/gagMQAngEArAFIADABQBrANCGA/IADABQgvENhzCeIhEARIgPACQALgIALgRQANgVAJgdQAZhOAAhuQAAhugZhNQgSg7gZgOQAZAOASA7QAZBNAABuQAABugZBOQgJAdgNAVQgLARgLAIIgDAAIglAEIgRAAQgQAAgMgCgA4ElVIAAAAg");
	this.shape_5.setTransform(246.7,92.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F9E006").s().p("AJjPmI1AAAQnBgKgyosIgDgoQgFhIAAhIQAAlHBplFQhpFFAAFHQAABIAFBIQjyjTnjBSQijAKCNjOQCNjLE+grQE+gqBGi3IAbhRIBEgRQBzieAwkNIgCgCQCWizC4A5QB0ArhkDQQjxH4hhK4QgZEuDKApIJjAAIAAgLIC1oeIgBAAIAEgIIAVhGQCCgYCfBlIB4A5QB1A2FohcQIQilBwBYIgBAAIBVCSIB0DFQA2BGAvBgIABABIAAABQAWAtASAqQA1B9ABB9QiXA3rzAkQofgRAMg1gAQ9DpQmfBrhNHDQBNnDGfhrQB+gjBxAAIAAAAIABAAQE4AADQEIIAHAKIgHgKQjQkIk4AAIgBAAIAAAAQhxAAh+AjIAAAAgALuMVIARgrgAEHLlIlWAAgAMkKUQB4jfEagtQkaAth4DfgAuLnYQAMgqAOgoQgOAogMAqgAtWp0QBLi7Byh5QhyB5hLC7g");
	this.shape_6.setTransform(204.9,106.8);

	this.addChild(this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
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
	this.instance = new lib.元件2();
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


(lib.loading = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_49 = function() {
		this.stop();
	}
	this.frame_65 = function() {
		this.stop();
		
		init();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(49).call(this.frame_49).wait(16).call(this.frame_65).wait(1));

	// 图层 5
	this.instance = new lib.元件10();
	this.instance.setTransform(145.7,169.8,1,1,0,0,0,197.3,223.3);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(54).to({_off:false},0).to({alpha:1},10).to({_off:true},1).wait(1));

	// 图层 1
	this.instance_1 = new lib.fatherandson();
	this.instance_1.setTransform(160,107.9,1,1,0,0,0,114.2,88.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},65).wait(1));

	// 图层 2 复制
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#663300").s().rr(-10,-9.75,20,19.5,9.7);
	this.shape.setTransform(10,344.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#663300").s().p("AgeBhQgoAAgdgdQgcgcgBgoIAAAAQABgnAcgcQAdgdAoAAIA+AAQAoAAAcAdQAdAcAAAnIAAAAQAAAogdAcQgcAdgoAAg");
	this.shape_1.setTransform(12.9,344.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#663300").s().p("Ag7BhQgoAAgdgdQgcgcgBgoIAAAAQABgnAcgcQAdgdAoAAIB3AAQAoAAAdAdQAdAcgBAnIAAAAQABAogdAcQgdAdgoAAg");
	this.shape_2.setTransform(15.8,344.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#663300").s().p("AhYBhQgoAAgdgdQgcgcAAgoIAAAAQAAgnAcgcQAdgdAoAAICxAAQAoAAAdAdQAcAcAAAnIAAAAQAAAogcAcQgdAdgoAAg");
	this.shape_3.setTransform(18.7,344.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#663300").s().p("Ah1BhQgoAAgdgdQgcgcAAgoIAAAAQAAgnAcgcQAdgdAoAAIDrAAQAoAAAdAdQAcAcAAAnIAAAAQAAAogcAcQgdAdgoAAg");
	this.shape_4.setTransform(21.6,344.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#663300").s().p("AiSBhQgoAAgdgdQgcgcAAgoIAAAAQAAgnAcgcQAdgdAoAAIElAAQAoAAAdAdQAcAcAAAnIAAAAQAAAogcAcQgdAdgoAAg");
	this.shape_5.setTransform(24.5,344.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#663300").s().p("AivBhQgoAAgdgdQgcgcAAgoIAAAAQAAgnAcgcQAdgdAoAAIFfAAQAoAAAdAdQAcAcAAAnIAAAAQAAAogcAcQgdAdgoAAg");
	this.shape_6.setTransform(27.4,344.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#663300").s().p("AjMBhQgoAAgdgdQgcgcAAgoIAAAAQAAgnAcgcQAdgdAoAAIGZAAQAoAAAdAdQAcAcAAAnIAAAAQAAAogcAcQgdAdgoAAg");
	this.shape_7.setTransform(30.3,344.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#663300").s().p("AjpBhQgoAAgdgdQgcgcAAgoIAAAAQAAgnAcgcQAdgdAoAAIHTAAQAoAAAdAdQAcAcAAAnIAAAAQAAAogcAcQgdAdgoAAg");
	this.shape_8.setTransform(33.2,344.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#663300").s().p("AkGBhQgoAAgcgdQgdgcAAgoIAAAAQAAgnAdgcQAcgdAoAAIINAAQAoAAAcAdQAdAcAAAnIAAAAQAAAogdAcQgcAdgoAAg");
	this.shape_9.setTransform(36.1,344.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#663300").s().p("AkjBhQgoAAgcgdQgdgcAAgoIAAAAQAAgnAdgcQAcgdAoAAIJHAAQAoAAAdAdQAcAcAAAnIAAAAQAAAogcAcQgdAdgoAAg");
	this.shape_10.setTransform(39,344.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#663300").s().p("AlABhQgoAAgcgdQgdgcAAgoIAAAAQAAgnAdgcQAcgdAoAAIKBAAQAoAAAcAdQAdAcAAAnIAAAAQAAAogdAcQgcAdgoAAg");
	this.shape_11.setTransform(41.9,344.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#663300").s().p("AldBhQgoAAgcgdQgdgcAAgoIAAAAQAAgnAdgcQAcgdAoAAIK7AAQAoAAAdAdQAcAcAAAnIAAAAQAAAogcAcQgdAdgoAAg");
	this.shape_12.setTransform(44.8,344.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#663300").s().p("Al6BhQgoAAgcgdQgdgcAAgoIAAAAQAAgnAdgcQAcgdAoAAIL1AAQAoAAAcAdQAdAcAAAnIAAAAQAAAogdAcQgcAdgoAAg");
	this.shape_13.setTransform(47.7,344.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#663300").s().p("AmXBhQgoAAgcgdQgdgcAAgoIAAAAQAAgnAdgcQAcgdAoAAIMvAAQAoAAAcAdQAdAcAAAnIAAAAQAAAogdAcQgcAdgoAAg");
	this.shape_14.setTransform(50.5,344.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#663300").s().p("Am0BhQgoAAgcgdQgdgcAAgoIAAAAQAAgnAdgcQAcgdAoAAINpAAQAoAAAcAdQAdAcAAAnIAAAAQAAAogdAcQgcAdgoAAg");
	this.shape_15.setTransform(53.4,344.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#663300").s().p("AnRBhQgoAAgcgdQgdgcAAgoIAAAAQAAgnAdgcQAcgdAoAAIOjAAQAoAAAcAdQAdAcAAAnIAAAAQAAAogdAcQgcAdgoAAg");
	this.shape_16.setTransform(56.3,344.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#663300").s().p("AnuBhQgoAAgcgdQgdgcAAgoIAAAAQAAgnAdgcQAcgdAoAAIPdAAQAoAAAcAdQAdAcAAAnIAAAAQAAAogdAcQgcAdgoAAg");
	this.shape_17.setTransform(59.2,344.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#663300").s().p("AoLBhQgoAAgcgdQgdgcAAgoIAAAAQAAgnAdgcQAcgdAoAAIQXAAQAoAAAcAdQAdAcAAAnIAAAAQAAAogdAcQgcAdgoAAg");
	this.shape_18.setTransform(62.1,344.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#663300").s().p("AooBhQgoAAgcgdQgdgcAAgoIAAAAQAAgnAdgcQAcgdAoAAIRRAAQAoAAAcAdQAdAcAAAnIAAAAQAAAogdAcQgcAdgoAAg");
	this.shape_19.setTransform(65,344.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#663300").s().p("ApEBhQgoAAgdgdQgcgcgBgoIAAAAQABgnAcgcQAdgdAoAAISJAAQAoAAAdAdQAcAcABAnIAAAAQgBAogcAcQgdAdgoAAg");
	this.shape_20.setTransform(67.9,344.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#663300").s().p("AphBhQgoAAgdgdQgcgcgBgoIAAAAQABgnAcgcQAdgdAoAAITEAAQAoAAAcAdQAcAcAAAnIAAAAQAAAogcAcQgcAdgoAAg");
	this.shape_21.setTransform(70.8,344.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#663300").s().p("Ap+BhQgoAAgdgdQgcgcgBgoIAAAAQABgnAcgcQAdgdAoAAIT9AAQApAAAcAdQAcAcABAnIAAAAQgBAogcAcQgcAdgpAAg");
	this.shape_22.setTransform(73.7,344.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#663300").s().p("AqbBhQgoAAgdgdQgcgcgBgoIAAAAQABgnAcgcQAdgdAoAAIU3AAQAoAAAdAdQAdAcgBAnIAAAAQABAogdAcQgdAdgoAAg");
	this.shape_23.setTransform(76.6,344.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#663300").s().p("Aq4BhQgoAAgdgdQgcgcgBgoIAAAAQABgnAcgcQAdgdAoAAIVyAAQAoAAAcAdQAdAcAAAnIAAAAQAAAogdAcQgcAdgoAAg");
	this.shape_24.setTransform(79.5,344.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#663300").s().p("ArVBhQgoAAgdgdQgcgcAAgoIAAAAQAAgnAcgcQAdgdAoAAIWrAAQAoAAAdAdQAcAcAAAnIAAAAQAAAogcAcQgdAdgoAAg");
	this.shape_25.setTransform(82.4,344.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#663300").s().p("AryBhQgoAAgdgdQgcgcAAgoIAAAAQAAgnAcgcQAdgdAoAAIXlAAQAoAAAdAdQAcAcAAAnIAAAAQAAAogcAcQgdAdgoAAg");
	this.shape_26.setTransform(85.3,344.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#663300").s().p("AsPBhQgoAAgdgdQgcgcAAgoIAAAAQAAgnAcgcQAdgdAoAAIYfAAQAoAAAdAdQAcAcAAAnIAAAAQAAAogcAcQgdAdgoAAg");
	this.shape_27.setTransform(88.2,344.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#663300").s().p("AssBhQgoAAgdgdQgcgcAAgoIAAAAQAAgnAcgcQAdgdAoAAIZZAAQAoAAAdAdQAcAcAAAnIAAAAQAAAogcAcQgdAdgoAAg");
	this.shape_28.setTransform(91.1,344.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#663300").s().p("AtJBhQgoAAgdgdQgcgcAAgoIAAAAQAAgnAcgcQAdgdAoAAIaTAAQAoAAAdAdQAcAcAAAnIAAAAQAAAogcAcQgdAdgoAAg");
	this.shape_29.setTransform(94,344.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#663300").s().p("AtmBhQgoAAgcgdQgdgcAAgoIAAAAQAAgnAdgcQAcgdAoAAIbNAAQAoAAAdAdQAcAcAAAnIAAAAQAAAogcAcQgdAdgoAAg");
	this.shape_30.setTransform(96.9,344.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#663300").s().p("AuDBhQgoAAgcgdQgdgcAAgoIAAAAQAAgnAdgcQAcgdAoAAIcHAAQAoAAAcAdQAdAcAAAnIAAAAQAAAogdAcQgcAdgoAAg");
	this.shape_31.setTransform(99.8,344.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#663300").s().p("AugBhQgoAAgcgdQgdgcAAgoIAAAAQAAgnAdgcQAcgdAoAAIdBAAQAoAAAcAdQAdAcAAAnIAAAAQAAAogdAcQgcAdgoAAg");
	this.shape_32.setTransform(102.7,344.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#663300").s().p("Au9BhQgoAAgcgdQgdgcAAgoIAAAAQAAgnAdgcQAcgdAoAAId7AAQAoAAAdAdQAcAcAAAnIAAAAQAAAogcAcQgdAdgoAAg");
	this.shape_33.setTransform(105.6,344.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#663300").s().p("AvaBhQgoAAgcgdQgdgcAAgoIAAAAQAAgnAdgcQAcgdAoAAIe1AAQAoAAAcAdQAdAcAAAnIAAAAQAAAogdAcQgcAdgoAAg");
	this.shape_34.setTransform(108.5,344.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#663300").s().p("Av3BhQgoAAgcgdQgdgcAAgoIAAAAQAAgnAdgcQAcgdAoAAIfvAAQAoAAAdAdQAcAcAAAnIAAAAQAAAogcAcQgdAdgoAAg");
	this.shape_35.setTransform(111.4,344.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#663300").s().p("AwUBhQgoAAgcgdQgdgcAAgoIAAAAQAAgnAdgcQAcgdAoAAMAgpAAAQAoAAAcAdQAdAcAAAnIAAAAQAAAogdAcQgcAdgoAAg");
	this.shape_36.setTransform(114.2,344.9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#663300").s().p("AwxBhQgoAAgcgdQgdgcAAgoIAAAAQAAgnAdgcQAcgdAoAAMAhjAAAQAoAAAcAdQAdAcAAAnIAAAAQAAAogdAcQgcAdgoAAg");
	this.shape_37.setTransform(117.1,344.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#663300").s().p("AxOBhQgoAAgcgdQgdgcAAgoIAAAAQAAgnAdgcQAcgdAoAAMAidAAAQAoAAAcAdQAdAcAAAnIAAAAQAAAogdAcQgcAdgoAAg");
	this.shape_38.setTransform(120,344.9);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#663300").s().p("AxrBhQgoAAgcgdQgdgcAAgoIAAAAQAAgnAdgcQAcgdAoAAMAjXAAAQAoAAAcAdQAdAcAAAnIAAAAQAAAogdAcQgcAdgoAAg");
	this.shape_39.setTransform(122.9,344.9);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#663300").s().p("AyIBhQgoAAgcgdQgdgcAAgoIAAAAQAAgnAdgcQAcgdAoAAMAkRAAAQAoAAAcAdQAdAcAAAnIAAAAQAAAogdAcQgcAdgoAAg");
	this.shape_40.setTransform(125.8,344.9);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#663300").s().p("AykBhQgoAAgdgdQgcgcgBgoIAAAAQABgnAcgcQAdgdAoAAMAlJAAAQAoAAAdAdQAcAcAAAnIAAAAQAAAogcAcQgdAdgoAAg");
	this.shape_41.setTransform(128.7,344.9);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#663300").s().p("AzBBhQgoAAgdgdQgcgcgBgoIAAAAQABgnAcgcQAdgdAoAAMAmEAAAQAoAAAcAdQAcAcAAAnIAAAAQAAAogcAcQgcAdgoAAg");
	this.shape_42.setTransform(131.6,344.9);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#663300").s().p("AzeBhQgoAAgdgdQgcgcgBgoIAAAAQABgnAcgcQAdgdAoAAMAm9AAAQAoAAAdAdQAcAcABAnIAAAAQgBAogcAcQgdAdgoAAg");
	this.shape_43.setTransform(134.5,344.9);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#663300").s().p("Az7BhQgoAAgdgdQgcgcgBgoIAAAAQABgnAcgcQAdgdAoAAMAn4AAAQAoAAAcAdQAcAcAAAnIAAAAQAAAogcAcQgcAdgoAAg");
	this.shape_44.setTransform(137.4,344.9);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#663300").s().p("A0YBhQgoAAgdgdQgcgcgBgoIAAAAQABgnAcgcQAdgdAoAAMAoxAAAQApAAAcAdQAcAcABAnIAAAAQgBAogcAcQgcAdgpAAg");
	this.shape_45.setTransform(140.3,344.9);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#663300").s().p("A01BhQgoAAgdgdQgcgcgBgoIAAAAQABgnAcgcQAdgdAoAAMAprAAAQAoAAAdAdQAdAcgBAnIAAAAQABAogdAcQgdAdgoAAg");
	this.shape_46.setTransform(143.2,344.9);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#663300").s().p("A1SBhQgoAAgdgdQgcgcAAgoIAAAAQAAgnAcgcQAdgdAoAAMAqlAAAQAoAAAdAdQAcAcAAAnIAAAAQAAAogcAcQgdAdgoAAg");
	this.shape_47.setTransform(146.1,344.9);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#663300").s().p("A1vBhQgoAAgdgdQgcgcAAgoIAAAAQAAgnAcgcQAdgdAoAAMArfAAAQAoAAAdAdQAcAcAAAnIAAAAQAAAogcAcQgdAdgoAAg");
	this.shape_48.setTransform(149,344.9);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#663300").s().rr(-151.9,-9.75,303.8,19.5,9.7);
	this.shape_49.setTransform(151.9,344.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[]},16).wait(1));

	// 图层 2
	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s("#663300").ss(4,1,1).rr(-151.9,-9.75,303.8,19.5,9.7);
	this.shape_50.setTransform(151.9,344.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_50).to({_off:true},65).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-192.4,-217,672,1193);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;/*  |xGv00|be07d675b12d0bc9d3fad433568957df */