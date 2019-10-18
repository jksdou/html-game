(function (loadingLib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
loadingLib.properties = {
	width: 550,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	manifest: [
		{src:"images/Bitmap5.png", id:"Bitmap5"},
		{src:"images/p1.png", id:"p1"},
		{src:"images/p15.png", id:"p15"},
		{src:"images/p16.png", id:"p16"},
		{src:"images/p2.png", id:"p2"}
	]
};



// symbols:



(loadingLib.Bitmap5 = function() {
	this.initialize(img.Bitmap5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,480,196);


(loadingLib.p1 = function() {
	this.initialize(img.p1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,480,756);


(loadingLib.p15 = function() {
	this.initialize(img.p15);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,337,126);


(loadingLib.p16 = function() {
	this.initialize(img.p16);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,109,23);


(loadingLib.p2 = function() {
	this.initialize(img.p2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,291,291);


(loadingLib.moon = function() {
	this.initialize();

	// 图层 1
	this.instance = new loadingLib.p2();
	this.instance.setTransform(-20.9,-21.7);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-20.9,-21.7,291,291);


(loadingLib.元件9 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(51,0,102,0.502)").s().p("AqKMqQgrgkgogoQj1j1gwlGQgFgpgDgpQgDgoAAgpQAAhWAMhSQALhEAThAQBHjyC/i/QEkkkGXgLIAPgBIAGAAIANAAIAPAAIAGAAIABAAIAVABQCbAFCLAvQDcBKCxCxQETETAbF7QACAoAAAnQAAGukwEwQgsAsguAlQkUDflwAAQl0AAkWjkg");
	this.shape.setTransform(103.9,103.9);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,207.8,207.8);


(loadingLib.元件7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// ...
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#66FFFF").s().p("AgcAWIAOgqIArAAIgOAqg");
	this.shape.setTransform(113.8,26.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#66FFFF").s().p("AATAWIAMgqIAtAAIgMAqgAhMAWIAOgqIAtAAIgOAqg");
	this.shape_1.setTransform(118.6,26.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#66FFFF").s().p("ABDAWIAMgqIAtAAIgMAqgAgbAWIAMgqIArAAIgMAqgAh8AWIAOgqIAtAAIgOAqg");
	this.shape_2.setTransform(123.4,26.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},2).to({state:[{t:this.shape_1}]},3).to({state:[{t:this.shape_2}]},3).wait(3));

	// 图层 1
	this.instance = new loadingLib.p16();
	this.instance.setTransform(1.6,9.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(11));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.6,9.5,109,23);


(loadingLib.bg = function() {
	this.initialize();

	// 图层 1
	this.instance = new loadingLib.p1();
	this.instance.setTransform(1.6,1.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(1.6,1.5,480,756);


(loadingLib.元件8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(30));

	// 图层 1  复制 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AoyOEQgrgjgpgoQj0j1gwlHQgGgogDgqQgDgnAAgqQAAhXANhQQAKhEAThAQBHjyC/jAQEkkjGWgLIAOgBIAGAAIAPAAIAPAAIAGAAIACAAIAVABQCbAFCKAvQDcBJCxCxQEUEUAaF5QADAoAAAoQAAGukxExQgrArguAmQkVDflwAAQlzAAkWjlg");
	var mask_graphics_1 = new cjs.Graphics().p("AoOOEQgrgjgpgoQj0j1gwlHQgGgogDgqQgDgnAAgqQAAhXANhQQAKhEAThAQBHjyC/jAQEkkjGWgLIAOgBIAGAAIAPAAIAPAAIAGAAIACAAIAVABQCbAFCKAvQDcBJCxCxQEUEUAaF5QADAoAAAoQAAGukxExQgrArguAmQkVDflwAAQlzAAkWjlg");
	var mask_graphics_2 = new cjs.Graphics().p("AnqOEQgrgjgpgoQj0j1gwlHQgGgogDgqQgDgnAAgqQAAhXANhQQAKhEAThAQBHjyC/jAQEkkjGWgLIAOgBIAGAAIAPAAIAPAAIAGAAIACAAIAVABQCbAFCKAvQDcBJCxCxQEUEUAaF5QADAoAAAoQAAGukxExQgrArguAmQkVDflwAAQlzAAkWjlg");
	var mask_graphics_3 = new cjs.Graphics().p("AnGOEQgrgjgpgoQj0j1gwlHQgGgogDgqQgDgnAAgqQAAhXANhQQAKhEAThAQBHjyC/jAQEkkjGWgLIAOgBIAGAAIAPAAIAPAAIAGAAIACAAIAVABQCbAFCKAvQDcBJCxCxQEUEUAaF5QADAoAAAoQAAGukxExQgrArguAmQkVDflwAAQlzAAkWjlg");
	var mask_graphics_4 = new cjs.Graphics().p("AmiOEQgrgjgpgoQj0j1gwlHQgGgogDgqQgDgnAAgqQAAhXANhQQAKhEAThAQBHjyC/jAQEkkjGWgLIAOgBIAGAAIAPAAIAPAAIAGAAIACAAIAVABQCbAFCKAvQDcBJCxCxQEUEUAaF5QADAoAAAoQAAGukxExQgrArguAmQkVDflwAAQlzAAkWjlg");
	var mask_graphics_5 = new cjs.Graphics().p("Al+OEQgrgjgpgoQj0j1gwlHQgGgogDgqQgDgnAAgqQAAhXANhQQAKhEAThAQBHjyC/jAQEkkjGWgLIAOgBIAGAAIAPAAIAPAAIAGAAIACAAIAVABQCbAFCKAvQDcBJCxCxQEUEUAaF5QADAoAAAoQAAGukxExQgrArguAmQkVDflwAAQlzAAkWjlg");
	var mask_graphics_6 = new cjs.Graphics().p("AlaOEQgrgjgpgoQj0j1gwlHQgGgogDgqQgDgnAAgqQAAhXANhQQAKhEAThAQBHjyC/jAQEkkjGWgLIAOgBIAGAAIAPAAIAPAAIAGAAIACAAIAVABQCbAFCKAvQDcBJCxCxQEUEUAaF5QADAoAAAoQAAGukxExQgrArguAmQkVDflwAAQlzAAkWjlg");
	var mask_graphics_7 = new cjs.Graphics().p("Ak2OEQgrgjgpgoQj0j1gwlHQgGgogDgqQgDgnAAgqQAAhXANhQQAKhEAThAQBHjyC/jAQEkkjGWgLIAOgBIAGAAIAPAAIAPAAIAGAAIACAAIAVABQCbAFCKAvQDcBJCxCxQEUEUAaF5QADAoAAAoQAAGukxExQgrArguAmQkVDflwAAQlzAAkWjlg");
	var mask_graphics_8 = new cjs.Graphics().p("AkSOEQgrgjgpgoQj0j1gwlHQgGgogDgqQgDgnAAgqQAAhXANhQQAKhEAThAQBHjyC/jAQEkkjGWgLIAOgBIAGAAIAPAAIAPAAIAGAAIACAAIAVABQCbAFCKAvQDcBJCxCxQEUEUAaF5QADAoAAAoQAAGukxExQgrArguAmQkVDflwAAQl1AAkUjlg");
	var mask_graphics_9 = new cjs.Graphics().p("AjuOEQgrgjgpgoQj0j1gwlHQgGgogDgqQgDgnAAgqQAAhXANhQQAKhEAThAQBHjyC/jAQEkkjGWgLIAOgBIAGAAIAPAAIAPAAIAGAAIACAAIAVABQCbAFCKAvQDcBJCxCxQEUEUAaF5QADAoAAAoQAAGukxExQgrArguAmQkVDflwAAQl1AAkUjlg");
	var mask_graphics_10 = new cjs.Graphics().p("AjKOEQgrgjgpgoQj0j1gwlHQgGgogDgqQgDgnAAgqQAAhXANhQQAKhEAThAQBHjyC/jAQEikjGYgLIAOgBIAGAAIAPAAIAPAAIAGAAIACAAIAVABQCbAFCKAvQDcBJCxCxQEUEUAaF5QADAoAAAoQAAGukxExQgrArguAmQkVDflwAAQl1AAkUjlg");
	var mask_graphics_11 = new cjs.Graphics().p("AimOEQgrgjgpgoQj0j1gwlHQgGgogDgqQgDgnAAgqQAAhXANhQQAKhEAThAQBHjyC/jAQEikjGYgLIAOgBIAGAAIAPAAIAPAAIAGAAIACAAIAVABQCbAFCKAvQDcBJCxCxQEUEUAaF5QADAoAAAoQAAGukxExQgrArguAmQkVDflwAAQl1AAkUjlg");
	var mask_graphics_12 = new cjs.Graphics().p("AiCOEQgrgjgpgoQj0j1gwlHQgGgogDgqQgDgnAAgqQAAhXANhQQAKhEAThAQBHjyC/jAQEikjGYgLIAOgBIAGAAIAPAAIAPAAIAGAAIACAAIAVABQCbAFCKAvQDcBJCxCxQEUEUAaF5QADAoAAAoQAAGukxExQgrArguAmQkVDflwAAQl1AAkUjlg");
	var mask_graphics_13 = new cjs.Graphics().p("AheOEQgrgjgpgoQj0j1gwlHQgGgogDgqQgDgnAAgqQAAhXANhQQAKhEAThAQBHjyC/jAQEikjGYgLIAOgBIAGAAIAPAAIAPAAIAGAAIACAAIAVABQCbAFCKAvQDcBJCxCxQEUEUAaF5QADAoAAAoQAAGukxExQgrArguAmQkVDflwAAQl1AAkUjlg");
	var mask_graphics_14 = new cjs.Graphics().p("Ag6OEQgrgjgpgoQj0j1gwlHQgGgogDgqQgDgnAAgqQAAhXANhQQAKhEAThAQBHjyC/jAQEikjGYgLIAOgBIAGAAIAPAAIAPAAIAGAAIACAAIAVABQCbAFCKAvQDcBJCxCxQEUEUAaF5QADAoAAAoQAAGukxExQgrArguAmQkVDflwAAQl1AAkUjlg");
	var mask_graphics_15 = new cjs.Graphics().p("AgWOEQgrgjgpgoQj0j1gwlHQgGgogDgqQgDgnAAgqQAAhXANhQQAKhEAThAQBHjyC/jAQEikjGYgLIAOgBIAGAAIAPAAIAPAAIAGAAIACAAIAVABQCbAFCKAvQDcBJCxCxQEUEUAaF5QADAoAAAoQAAGukxExQgrArguAmQkVDflwAAQl1AAkUjlg");
	var mask_graphics_16 = new cjs.Graphics().p("AAMOEQgpgjgpgoQj0j1gwlHQgGgogDgqQgDgnAAgqQAAhXANhQQAKhEAThAQBHjyC/jAQEikjGYgLIAOgBIAGAAIAPAAIAPAAIAGAAIACAAIAVABQCbAFCKAvQDcBJCxCxQEUEUAaF5QADAoAAAoQAAGukxExQgrArguAmQkVDflwAAQl1AAkWjlg");
	var mask_graphics_17 = new cjs.Graphics().p("AAwOEQgrgjgngoQj0j1gwlHQgGgogDgqQgDgnAAgqQAAhXANhQQAKhEAThAQBHjyC/jAQEikjGYgLIAOgBIAGAAIAPAAIAPAAIAGAAIACAAIAVABQCbAFCKAvQDcBJCxCxQEUEUAaF5QADAoAAAoQAAGukxExQgrArguAmQkVDflwAAQl1AAkWjlg");
	var mask_graphics_18 = new cjs.Graphics().p("ABUOEQgrgjgpgoQjyj1gwlHQgGgogDgqQgDgnAAgqQAAhXANhQQAKhEAThAQBHjyC9jAQEkkjGYgLIAOgBIAGAAIAPAAIAPAAIAGAAIACAAIAVABQCbAFCKAvQDcBJCxCxQEUEUAaF5QADAoAAAoQAAGukxExQgrArguAmQkVDflwAAQl1AAkWjlg");
	var mask_graphics_19 = new cjs.Graphics().p("AB4OEQgrgjgpgoQjyj1gwlHQgGgogDgqQgDgnAAgqQAAhXANhQQAKhEAThAQBHjyC9jAQEkkjGYgLIAOgBIAGAAIAPAAIAPAAIAGAAIACAAIAVABQCbAFCKAvQDcBJCxCxQEUEUAaF5QADAoAAAoQAAGukxExQgrArguAmQkVDflwAAQl1AAkWjlg");
	var mask_graphics_20 = new cjs.Graphics().p("ACcOEQgrgjgpgoQjyj1gwlHQgGgogDgqQgDgnAAgqQAAhXANhQQAKhEAThAQBHjyC9jAQEkkjGYgLIAOgBIAGAAIAPAAIAPAAIAGAAIACAAIAVABQCbAFCKAvQDcBJCxCxQEUEUAaF5QADAoAAAoQAAGukxExQgrArguAmQkVDflwAAQl1AAkWjlg");
	var mask_graphics_21 = new cjs.Graphics().p("ADAOEQgrgjgpgoQjyj1gwlHQgGgogDgqQgDgnAAgqQAAhXANhQQAKhEAThAQBHjyC9jAQEkkjGYgLIAOgBIAGAAIAPAAIAPAAIAGAAIACAAIAVABQCbAFCKAvQDcBJCxCxQEUEUAaF5QADAoAAAoQAAGukxExQgrArguAmQkVDflwAAQl1AAkWjlg");
	var mask_graphics_22 = new cjs.Graphics().p("ADkOEQgrgjgpgoQjyj1gwlHQgGgogDgqQgDgnAAgqQAAhXANhQQAKhEAThAQBHjyC9jAQEkkjGYgLIAOgBIAGAAIAPAAIAPAAIAGAAIACAAIAVABQCbAFCKAvQDcBJCxCxQEUEUAaF5QADAoAAAoQAAGukxExQgrArguAmQkVDflwAAQl1AAkWjlg");
	var mask_graphics_23 = new cjs.Graphics().p("AEIOEQgrgjgpgoQjyj1gwlHQgGgogDgqQgDgnAAgqQAAhXANhQQAKhEAThAQBHjyC9jAQEkkjGYgLIAOgBIAGAAIAPAAIAPAAIAGAAIACAAIAVABQCbAFCKAvQDcBJCxCxQEUEUAaF5QADAoAAAoQAAGukxExQgrArguAmQkVDflwAAQl1AAkWjlg");
	var mask_graphics_24 = new cjs.Graphics().p("AEsOEQgrgjgpgoQjyj1gwlHQgGgogDgqQgDgnAAgqQAAhXANhQQAKhEAThAQBFjyC/jAQEkkjGYgLIAOgBIAGAAIAPAAIAPAAIAGAAIACAAIAVABQCbAFCKAvQDcBJCxCxQEUEUAaF5QADAoAAAoQAAGukxExQgrArguAmQkVDflwAAQl1AAkWjlg");
	var mask_graphics_25 = new cjs.Graphics().p("AFQOEQgrgjgpgoQj0j1gulHQgGgogDgqQgDgnAAgqQAAhXANhQQAKhEAThAQBFjyC/jAQEkkjGYgLIAOgBIAGAAIAPAAIAPAAIAGAAIACAAIAVABQCbAFCKAvQDcBJCxCxQEUEUAaF5QADAoAAAoQAAGukxExQgrArguAmQkVDflwAAQl1AAkWjlg");
	var mask_graphics_26 = new cjs.Graphics().p("AF0OEQgrgjgpgoQj0j1gulHQgGgogDgqQgDgnAAgqQAAhXANhQQAIhEAThAQBHjyC/jAQEkkjGYgLIAOgBIAGAAIAPAAIAPAAIAGAAIACAAIAVABQCbAFCKAvQDcBJCxCxQEUEUAaF5QADAoAAAoQAAGukxExQgrArguAmQkVDflwAAQl1AAkWjlg");
	var mask_graphics_27 = new cjs.Graphics().p("AGYOEQgrgjgpgoQj0j1gwlHQgGgogDgqQgDgnAAgqQAAhXANhQQAKhEAThAQBHjyC/jAQEkkjGYgLIAOgBIAGAAIAPAAIAPAAIAGAAIACAAIAVABQCbAFCKAvQDcBJCxCxQEUEUAaF5QADAoAAAoQAAGukxExQgrArguAmQkVDflwAAQl1AAkWjlg");
	var mask_graphics_28 = new cjs.Graphics().p("AG8OEQgrgjgpgoQj0j1gwlHQgGgogDgqQgDgnAAgqQAAhXANhQQAKhEAThAQBHjyC/jAQEkkjGYgLIAOgBIAGAAIAPAAIAPAAIAGAAIACAAIAVABQCbAFCKAvQDcBJCxCxQEUEUAaF5QADAoAAAoQAAGukxExQgrArguAmQkVDflwAAQl1AAkWjlg");
	var mask_graphics_29 = new cjs.Graphics().p("AHgOEQgrgjgpgoQj0j1gwlHQgGgogDgqQgDgnAAgqQAAhXANhQQAKhEAThAQBHjyC/jAQEkkjGYgLIAOgBIAGAAIAPAAIAPAAIAGAAIACAAIAVABQCbAFCKAvQDcBJCxCxQEUEUAaF5QADAoAAAoQAAGukxExQgrArguAmQkVDflwAAQl1AAkWjlg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:112.6,y:113}).wait(1).to({graphics:mask_graphics_1,x:116.2,y:113}).wait(1).to({graphics:mask_graphics_2,x:119.8,y:113}).wait(1).to({graphics:mask_graphics_3,x:123.4,y:113}).wait(1).to({graphics:mask_graphics_4,x:127,y:113}).wait(1).to({graphics:mask_graphics_5,x:130.6,y:113}).wait(1).to({graphics:mask_graphics_6,x:134.2,y:113}).wait(1).to({graphics:mask_graphics_7,x:137.8,y:113}).wait(1).to({graphics:mask_graphics_8,x:141.4,y:113}).wait(1).to({graphics:mask_graphics_9,x:145,y:113}).wait(1).to({graphics:mask_graphics_10,x:148.6,y:113}).wait(1).to({graphics:mask_graphics_11,x:152.2,y:113}).wait(1).to({graphics:mask_graphics_12,x:155.8,y:113}).wait(1).to({graphics:mask_graphics_13,x:159.4,y:113}).wait(1).to({graphics:mask_graphics_14,x:163,y:113}).wait(1).to({graphics:mask_graphics_15,x:166.6,y:113}).wait(1).to({graphics:mask_graphics_16,x:170.2,y:113}).wait(1).to({graphics:mask_graphics_17,x:173.8,y:113}).wait(1).to({graphics:mask_graphics_18,x:177.4,y:113}).wait(1).to({graphics:mask_graphics_19,x:181,y:113}).wait(1).to({graphics:mask_graphics_20,x:184.6,y:113}).wait(1).to({graphics:mask_graphics_21,x:188.2,y:113}).wait(1).to({graphics:mask_graphics_22,x:191.8,y:113}).wait(1).to({graphics:mask_graphics_23,x:195.4,y:113}).wait(1).to({graphics:mask_graphics_24,x:199,y:113}).wait(1).to({graphics:mask_graphics_25,x:202.6,y:113}).wait(1).to({graphics:mask_graphics_26,x:206.2,y:113}).wait(1).to({graphics:mask_graphics_27,x:209.8,y:113}).wait(1).to({graphics:mask_graphics_28,x:213.4,y:113}).wait(1).to({graphics:mask_graphics_29,x:217,y:113}).wait(1));

	// 图层 1 复制
	this.instance = new loadingLib.元件9();
	this.instance.setTransform(121.4,122.1,1,1,0,0,0,103.9,103.9);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(30));

	// 图层 1
	this.instance_1 = new loadingLib.moon();
	this.instance_1.setTransform(121.3,121.9,0.836,0.836,0,0,0,124.2,124.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(30));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,243.2,243.2);


(loadingLib.LOADING = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// title
	this.instance = new loadingLib.p15();
	this.instance.setTransform(74.9,23.1);

	this.instance_1 = new loadingLib.元件7();
	this.instance_1.setTransform(246.5,449,1,1,0,0,0,70.9,19.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// rabbits
	this.instance_2 = new loadingLib.Bitmap5();
	this.instance_2.setTransform(0.1,559.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// moon
	this.loading_mc = new loadingLib.元件8();
	this.loading_mc.setTransform(242.6,275.1,1,1,0,0,0,121.7,121.7);

	this.timeline.addTween(cjs.Tween.get(this.loading_mc).wait(1));

	// bg
	this.instance_3 = new loadingLib.bg();
	this.instance_3.setTransform(240.2,377.9,1,1,0,0,0,241.8,379.4);
	this.instance_3.filters = [new cjs.ColorMatrixFilter(new cjs.ColorMatrix(-20, 0, 0, 0))];
	this.instance_3.cache(0,0,484,760);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,484,760);


// stage content:
(loadingLib.loading = function() {
	this.initialize();

}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(275,200,484,760);

})(loadingLib = loadingLib||{}, loadingImages = loadingImages||{}, createjs = createjs||{});
var loadingLib, loadingImages, createjs;/*  |xGv00|67ab3732f8ead286b7abb8fe3d66a053 */