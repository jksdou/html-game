// Math.js
// For Mathematics functions (include Vector and Matrix)
// FZ, Copyright (c) 2010 Zlongames 


(function()
{

FZ.Math= {
        // Linear interpolation 
        lerp: function (ratio, a, b)
        {
            ratio = ratio<0?0:ratio>1?1:ratio;
            return b*ratio+(1-ratio)*a;
        },
        // Random from a to b
        random: function (a,b)
        {
            return FZ.Math.lerp(Math.random(), a, b);
        },
        clamp: function (x, Min,Max)
        {
            return x<Min?Min:x>Max?Max:x;
        },
        round: function(num, precision)
        {
            precision = Math.pow(10, precision || 0);
            return Math.round(num * precision) / precision;
        },
        Vector2: FZ.newClass(
            {
                x:0,
                y:0,
                init: function ( _x, _y ) { if (_y !== undefined) {this.x=_x?_x:0; this.y=_y?_y:0;} },
                clone: function (){ 
                    return new FZ.Math.Vector2(this.x, this.y);
                },
                add: function (v2,t)
                { 
                    if (t === undefined)
                        t = new FZ.Math.Vector2();
                    t.x = this.x + v2.x; 
                    t.y = this.y + v2.y;
                    return t;
                },
                sub: function (v2,t)
                { 
                    if (t === undefined)
                        t = new FZ.Math.Vector2();
                    t.x = this.x - v2.x; 
                    t.y = this.y - v2.y;
                    return t;
                },
                normalize: function(t) {
                    if (t === undefined)
                        t = new FZ.Math.Vector2();
                    var r = 1.0/this.length();
                    t.x = this.x*r; 
                    t.y = this.y*r;
                    return t;
                },
                scale: function(s,t) {
                    if (t === undefined)
                        t = new FZ.Math.Vector2();
                    t.x = this.x*s;
                    t.y = this.y*s;
                    return t;
                },
                applyTransform:function(_matrix, t)
                {
                    if (t === undefined)
                        t = new FZ.Math.Vector2();
                    tx = _matrix.m11*this.x + _matrix.m21*this.y + _matrix.dx;
                    ty = _matrix.m12*this.x + _matrix.m22*this.y + _matrix.dy;
                    t.x=tx; t.y=ty;
                    return t;
                },
                dot: function(v2){ return this.x*v2.x + this.y*v2.y;},
                length: function(){ return Math.sqrt( this.x*this.x + this.y*this.y);},
                lengthSquared: function(){ return  this.x*this.x + this.y*this.y;}
    // cross: x
            }),
        /*
         * Matrix:
         * m11 m21 dx
         * m12 m22 dy
         *   0   0  1
         */
        Matrix3: FZ.newClass(
            {
                m11:1, m21: 0, dx: 0,
                m12:0, m22: 1, dy: 0,
                set: function(m11, m12, m21, m22, dx, dy) {
                    this.m11 = m11; this.m21 = m21; this.dx = dx; 
                    this.m12 = m12; this.m22 = m22; this.dy = dy; 
                    return this;
                },
                clone: function() {
                    var theClone = new FZ.Math.Matrix3();
                    theClone.m11 = this.m11;
                    theClone.m21 = this.m21;
                    theClone.m12 = this.m12;
                    theClone.m22 = this.m22;
                    theClone.dx  = this.dx;
                    theClone.dy  = this.dy;
                    return theClone;
                },
                identity: function()
                {
                    this.m11 = 1; this.m21 = 0; this.dx = 0;
                    this.m12 = 0; this.m22 = 1; this.dy = 0;
                    return this;
                },
                mul: function (m2, t)
                {
                    if (t === undefined)
                        t = new FZ.Math.Matrix3();
                    var tm11 = this.m11*m2.m11 + this.m21*m2.m12;
                    var tm21 = this.m11*m2.m21 + this.m21*m2.m22;
                    var tm12 = this.m12*m2.m11 + this.m22*m2.m12;
                    var tm22 = this.m12*m2.m21 + this.m22*m2.m22;
                    var tdx  = this.dx+ this.m11*m2.dx  + this.m21*m2.dx ;
                    var tdy  = this.dy+ this.m12*m2.dx  + this.m22*m2.dy ;
                    t.m11 = tm11; 
                    t.m21 = tm21;
                    t.m12 = tm12;
                    t.m22 = tm22;
                    t.dx  = tdx ;
                    t.dy  = tdy ;
                    return t;
                },
                makeRotate: function(_angle)
                {
                    var s=Math.sin(_angle), c=Math.cos(_angle);
                    this.m11 = c;
                    this.m21 = -s;
                    this.m12 = s;
                    this.m22 = c;
                    return this;
                },
                rotate: function(_angle)
                {
                    var s=Math.sin(_angle), c=Math.cos(_angle);
                    var tm11 = this.m11*c + this.m21*s;
                    var tm21 =-this.m11*s + this.m21*c;
                    var tm12 = this.m12*c + this.m22*s;
                    var tm22 =-this.m12*s + this.m22*c;
                    this.m11 = tm11; 
                    this.m21 = tm21;
                    this.m12 = tm12;
                    this.m22 = tm22;
                    return this;
                },
                makeScale1: function(s)
                {
                    return this.makeScale2(s,s);
                },
                scale1: function (s)
                {
                    return this.scale2(s,s);
                },
                makeScale2: function (s1, s2)
                {
                    this.m11 = s1;
                    this.m22 = s2;
                    this.m12 = 0;
                    this.m21 = 0;
                    return this;
                },
                scale2: function (s1,s2)
                {
                    this.m11 *= s1;
                    this.m21 *= s2;
                    this.m12 *= s1;
                    this.m22 *= s2;
                    return this;
                },
                makeTranslate:function(x,y)
                {
                    this.dx = x;
                    this.dy = y;
                    return this;
                },
                translate: function(x,y)
                {
                    this.dx += this.m11* x + this.m21 * y;
                    this.dy += this.m12* x + this.m22 * y;
                    return this;
                },
                inverseAffine:function(t)
                {
                    if (t === undefined)
                        t = new FZ.Math.Matrix3();

                    var invDet = 1 / (this.m11*this.m22 - this.m21*this.m12);
                    var t11 = this.m22*invDet;
                    var t21 = this.m12*invDet;
                    var t12 = this.m21*invDet;
                    var t22 = this.m11*invDet;

                    var tdx = -(t11*this.dx + t21*this.dy);
                    var tdy = -(t12*this.dx + t22*this.dy);

                    t.m11 = t11; 
                    t.m21 = t21;
                    t.m12 = t12;
                    t.m22 = t22;
                    t.dx = tdx;
                    t.dy = tdy;

                    return t;
                }
                
            })

    };


})();