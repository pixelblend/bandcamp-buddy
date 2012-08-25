(function() {

  Class(PortRouter({
    port: null,
    constructor: function() {
      return this.port = chrome.extension.connect({
        name: "library"
      });
    },
    sendAlbum: function(album) {
      return port.postMessage({
        track: album
      });
    }
  }));

  window.PortRouter = PortRouter;

}).call(this);
