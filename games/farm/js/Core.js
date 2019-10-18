// Core.js
// For fundamental functions.
// FZ, Copyright (c) 2010 Zlongames 

(function()
{
    
FZ = {
    // class function
    newClass:function( classMemberObj, baseClass )
    {
        if (classMemberObj === undefined) classMemberObj ={};

        var PrototypeObj= function() {};
        if (typeof baseClass === "function" && baseClass.hasOwnProperty("prototype")) 
            PrototypeObj.prototype = baseClass.prototype;
        else if (typeof baseClass === "object")
            PrototypeObj.prototype = baseClass;

        var ClassConstructor = function(){};
        if (classMemberObj.hasOwnProperty("init") || "init" in PrototypeObj.prototype){ 
            ClassConstructor = function(){this.init.apply(this,arguments);};
        }
        ClassConstructor.prototype = new PrototypeObj();
        ClassConstructor.prototype.constructor = ClassConstructor;

        for (var i in classMemberObj) {
            ClassConstructor.prototype[i] = classMemberObj[i];
        }
        return ClassConstructor;
    },
    $: function (id) { return document.getElementById(id);},
    // tools fuction
    Tools:{
        // return an array to include the argument
        splat: function(obj){
            if (!obj) return [];
            if ( obj instanceof Array || (typeof obj === "object" && typeof obj.length === 'number' && obj.callee)/*Arguments*/)
                return obj;
            else return [obj];
        },
        bind: function(Obj, Func, Args)
        {
            return function(){return Func.apply(Obj, FZ.Tools.splat(Args)); };
        },
        bindWithEvent: function(Obj, Func, Args)
        {
            return function(event){
                var _args = [event]; 
                Array.prototype.push.apply(_args, FZ.Tools.splat(Args));
                return Func.apply(Obj, _args);
            };
        },
        trim: function (str)
        {
            return str.replace(/^\s+|\s+$/g, '');
        },
        extend: function (ObjA, ObjB)
        {
            for (var i in ObjB) ObjA[i] = ObjB[i];
        }
    },
    EngineOptions:
    {
        DebugLevel: "error" // 'none': no Debug info, 'error': error message only , 'info': info and error message
    },
    _trace: function(info)
    {
        if (FZ.EngineOptions.DebugLevel === "info" )
            console.log( info );
    },
    _assert: function(condition,info)
    {
        if ((FZ.EngineOptions.DebugLevel === "error"||FZ.EngineOptions.DebugLevel === "info") && (!condition))
            alert(info);
    }

};

})();