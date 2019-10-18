// ResourceImage.js
// For Image load and store
// FZ, Copyright (c) 2010 Zlongames 

(function()
{

// Image
var Class_ResourceImage= FZ.newClass(
    {
        load : function(){
            this.target.Resource = new Image();
            this.target.Resource.addEventListener('load', this.callback, false);
            this.target.Resource.addEventListener("error", function() {
            	
            	//alert(this.URL);
            	
            }, false);
            this.target.Resource.src = this.URL;
        }
    }, FZ.Class_Resource);


FZ.ResourceManager.registerResourceType("Image", Class_ResourceImage);

})();
