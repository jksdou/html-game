// ResourceManager.js
// For Resource Loading and management
// FZ, Copyright (c) 2010 Zlongames 

(function()
{
    
FZ.ResourceManager = {
    __ResourceCount:0,
    __ResourceLoaded:0,
    __GeneralCallback:null,
    __GeneralCallbackObj:null,
    ResourceLib:{},
    isResourceLoaded:function(){ return this.__ResourceCount === this.__ResourceLoaded;},
    // resourceDesc: 
    // {Name: xxxx, Type: xxxx, URL: xxxx, callback: callback function}
    //
    addResource:function (resourceDesc)
    {
        if (this.ResourceFactory.hasOwnProperty(resourceDesc.Type))
        {
            this.__ResourceCount ++;

            var _resource =
            {
                Resource : null,
                Loaded: false
            };
            this.ResourceLib[resourceDesc.Name] =  _resource;

            FZ._trace("Add/load resource[" + resourceDesc.Name + "] : "+ resourceDesc.URL);

            var _resourceLoader = new this.ResourceFactory[resourceDesc.Type](resourceDesc.URL, _resource);
            _resourceLoader.setCallback(function()
                {
                _resource.Loaded = true; 
                FZ.ResourceManager.__ResourceLoaded++;
                if (resourceDesc.callback) resourceDesc.callback(_resource.Resource);
                if (FZ.ResourceManager.__GeneralCallback) FZ.ResourceManager.__GeneralCallback.call();
            });
            _resourceLoader.load();
        }
        else
            Throw("Error: Do not suppport Resourcetype:"+ resourceDesc.Type);
    },
    setCallback:function(callbackFunc)
    {
        this.__GeneralCallback = callbackFunc;
    },
    getLoadingRatio:function()
    {
        if (this.__ResourceCount === 0) return 1;
        return this.__ResourceLoaded/this.__ResourceCount;
    },
    ResourceFactory:{},
    registerResourceType:function (Typename, ResourceClass)
    {
        this.ResourceFactory[Typename] = ResourceClass;
    }
};

// General Resource
FZ.Class_Resource=
    {
        callback:function(){},
        init:function(URL, target) { this.URL = URL; this.target = target;},
        setCallback:function(callback) {this.callback = callback;}
    };


})();