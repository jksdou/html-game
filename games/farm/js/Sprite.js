// Sprite.js
// For Sprite management and drawing support
// FZ, Copyright (c) 2010 Zlongames 

(function()
{

FZ.Sprite = FZ.newClass(
    {
        __currentIdx : 0,
        __currentFrameTime: 0.0,
        __matrixDirty: true,
        __inverseMatrixDirty: true,
        init:function (_images , autoPlay) // _images [ [image1, time1 /*optional*/ ] , [ image2 , time2 ] . [image3 ] , ... ]
        {
            this.__theImages = [];
            this.__children = [];
            this.__localMatrix= new FZ.Math.Matrix3();
            this.__worldMatrix= new FZ.Math.Matrix3();
            this.__inverseMatrix = new FZ.Math.Matrix3();
            this.__parentSprite= undefined;

            this.__playing = Boolean(autoPlay);

            if (!_images || _images.length === 0)
            {
                this.__currentIdx = -1; // set Idx to -1 to indicate there is no image in this sprite
                return;
            }
            for (var i=0, forLength = _images.length; i< forLength; ++i)
            {
                if (_images[i] instanceof Array)
                    this.__theImages.push([ _images[i][0] , _images[i][1]? _images[i][1]:0.033]);
                else
                    this.__theImages.push([ _images[i] , 0.033]);
            }
        },
        clone: function ()
        {
            var cloneSprite = new FZ.Sprite();
            cloneSprite.__theImages = this.__theImages;
            cloneSprite.__localMatrix = this.__localMatrix.clone();
            cloneSprite.__currentIdx = this.__theImages.length === 0? -1 : 0;
            for (var i=0 , len = this.__children.length; i< len; ++i)
            {
                cloneSprite.addChild(this.__children[i].clone());
            }
            return cloneSprite;
        },
        setFrameTime:function(frameTime)
        {
            if (typeof frameTime === "number")
                for (var i=0, len=this.__theImages.length; i<len; ++i)
                    this.__theImages[i][1]=frameTime;
            else
                for (var i=0; i<frameTime.length && i<__theImages.length; ++i)
                    this.__theImages[i][1]=frameTime[i];
        },
        addChild:function(theChild)
        {
            this.__children.push(theChild);
            theChild.__parentSprite = this;
        },
        update: function (deltaTime)
        {
            if (!this.__playing) return;
            for (var i=0 , len = this.__children.length; i< len; ++i)
            {
                this.__children[i].update(deltaTime);
            }
            if (this.__currentIdx === -1)
                return;
            this.__currentFrameTime += deltaTime;
            while (this.__currentFrameTime > this.__theImages[this.__currentIdx][1])
            {
                this.__currentFrameTime -= this.__theImages[this.__currentIdx][1];
                this.__currentIdx++;
                if (this.__currentIdx === this.__theImages.length)
                    this.__currentIdx = 0;
            }
        },
        setFrame:function(index)
        {
            this.__currentIdx = FZ.Math.clamp(index , 0, this.__theImages.length-1);
        },
        stop: function()
        {
            this.__playing = false;
        },
        play: function()
        {
            this.__playing = true;
        },
        getPosition: function()
        {
            this.__DirtyMatrixProcess();
            var retValue = new FZ.Math.Vector2(0,0);
            return retValue.applyTransform(this.__worldMatrix, retValue);
        },
        localToWorld:function(position)
        {
            this.__DirtyMatrixProcess();
            return position.applyTransform(this.__worldMatrix);
        },
        worldToLocal:function(position)
        {
            this.__DirtyInverseMatrixProcess();
            return position.applyTransform(this.__inverseMatrix);
        },
        __markMatrixDirty:function()
        {
            if (!this.__matrixDirty)
            {
                this.__matrixDirty = true;
                this.__inverseMatrixDirty = true;
                for (var i=0 , len = this.__children.length; i< len; ++i)
                {
                    this.__children[i].__markMatrixDirty();
                }
            }
        },
        __DirtyInverseMatrixProcess:function()
        {
            this.__DirtyMatrixProcess();
            if (this.__inverseMatrixDirty)
            {
                this.__worldMatrix.inverseAffine(this.__inverseMatrix);
                this.__inverseMatrixDirty = false;
            }
        },
        __DirtyMatrixProcess:function()
        {
            if (this.__matrixDirty)
            {
                if ( this.__parentSprite )
                {
                    //this.__localMatrix.mul(this.__parentSprite.__worldMatrix , this.__worldMatrix);
                    this.__parentSprite.__worldMatrix.mul(this.__localMatrix, this.__worldMatrix);
                } else
                {
                    this.__worldMatrix = this.__localMatrix;
                }
                this.__matrixDirty = false;
            }
        },
        draw:function (_ctx)
        {
            this.__DirtyMatrixProcess();
            for (var i=0 , len = this.__children.length; i< len; ++i)
            {
                this.__children[i].draw(_ctx);
            }
            if (this.__currentIdx === -1)
                return;
            _ctx.setTransform(this.__worldMatrix.m11, this.__worldMatrix.m12, this.__worldMatrix.m21, this.__worldMatrix.m22, this.__worldMatrix.dx, this.__worldMatrix.dy);
            _ctx.drawImage(this.__theImages[this.__currentIdx][0], 0,0);
        },
        translate:function (x,y)
        {
            this.__localMatrix.translate(x,y);
            this.__markMatrixDirty();
        },
        rotate: function (angle)
        {
            this.__localMatrix.rotate(angle);
            this.__markMatrixDirty();
        },
        scale1: function (s)
        {
            this.__localMatrix.scale1(s);
            this.__markMatrixDirty();
        },
        scale2: function (sx, sy)
        {
            this.__localMatrix.scale2(sx,sy);
            this.__markMatrixDirty();
        },
        makeTranslate:function (x,y)
        {
            this.__localMatrix.makeTranslate(x,y);
            this.__markMatrixDirty();
        },
        makeRotate: function (angle)
        {
            this.__localMatrix.makeRotate(angle);
            this.__markMatrixDirty();
        },
        makeScale1: function (s)
        {
            this.__localMatrix.makeScale1(s);
            this.__markMatrixDirty();
        },
        makeScale2: function (sx, sy)
        {
            this.__localMatrix.makeScale2(sx,sy);
            this.__markMatrixDirty();
        },
        resetMatrix: function()
        {
            this.__localMatrix.identity();
            this.__markMatrixDirty();
        }

    }
);

FZ.spriteManager=
{
    __sprites:{},
    addResource:function(name, zOrder, URL,  x,y, cols)
    {
        FZ.ResourceManager.addResource({"Name":name, "Type":"Image", "URL":URL, callback:  function(theImage)
            {
                if (cols === 1)
                    FZ.spriteManager.__sprites[name] = new FZ.Sprite([theImage]);
                else
                {
                    var theImages =[];
                    for (var i=0; i<cols; ++i)
                    {
                        var tCan = document.createElement("canvas");
                        tCan.width = theImage.width/cols;
                        tCan.height = theImage.height;
                        tCan.getContext("2d").drawImage(theImage, theImage.width /cols * i, 0, theImage.width /cols, theImage.height , 0 , 0 , theImage.width/cols, theImage.height);
                        theImages.push([tCan]);
                    }
                    FZ.spriteManager.__sprites[name] = new FZ.Sprite(theImages);
                }
                FZ.spriteManager.__sprites[name].makeTranslate(x,y);
            } });
    },
    getSprite:function (name)
    {
        return this.__sprites[name];
    }
};
    

})();
