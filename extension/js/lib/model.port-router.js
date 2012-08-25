(function() {
  var PortRouter;

  PortRouter = (function() {

    PortRouter.prototype.port = null;

    function PortRouter() {
      this.port = chrome.extension.connect({
        name: "library"
      });
    }

    PortRouter.prototype.sendAlbum = function(album) {
      return port.postMessage({
        track: album
      });
    };

    return PortRouter;

  })();

  window.PortRouter = PortRouter;

}).call(this);
