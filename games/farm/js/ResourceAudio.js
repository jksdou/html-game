(function()
{
var Class_ResourceAudio= FZ.newClass(
    {
        load : function(){
            var theAudio = new Audio();
            theAudio.src = this.URL;
            theAudio.load();
            theAudio.play();
            theAudio.pause();
            this.callback();
            this.target.Resource = theAudio;
        }
    }, FZ.Class_Resource);

FZ.ResourceManager.registerResourceType("Audio", Class_ResourceAudio);

})();
