(function()
{
var Class_ResourceJs= FZ.newClass(
    {
        load : function(){
            this.target.Resource = document.createElement('script');
            this.target.Resource.addEventListener('load', this.callback, false);
            this.target.Resource.src = this.URL;
            document.body.appendChild(this.target.Resource);
        }
    }, FZ.Class_Resource);


FZ.ResourceManager.registerResourceType("Js", Class_ResourceJs);

})();
