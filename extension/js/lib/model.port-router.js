(function() {
  var PortRouter;

  PortRouter = (function() {

    PortRouter.prototype.bindings = {
      albumScraper: 'sendAlbum',
      album: 'recieveAlbum'
    };

    PortRouter.prototype.port = null;

    function PortRouter() {
      this.port = chrome.extension;
    }

    PortRouter.prototype.bindAll = function() {
      var event, model, _ref, _results;
      _ref = this.bindings;
      _results = [];
      for (model in _ref) {
        event = _ref[model];
        if (this[model] != null) {
          _results.push(this[event](this[model]));
        } else {
          _results.push(void 0);
        }
      }
      return _results;
    };

    PortRouter.prototype.sendAlbum = function(model) {
      var library;
      library = this.port.connect({
        name: 'library'
      });
      return model.bind('update', function(album) {
        return library.postMessage({
          track: album
        });
      });
    };

    PortRouter.prototype.recieveAlbum = function(model) {
      return this.port.onConnect.addListener(function(pubSub) {
        return pubSub.onMessage.addListener(function(msg) {
          console.log('recieved', msg);
          return model.create(msg);
        });
      });
    };

    return PortRouter;

  })();

  window.PortRouter = PortRouter;

}).call(this);
