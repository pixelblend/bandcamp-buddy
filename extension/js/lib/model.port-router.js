(function() {
  var PortRouter,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  PortRouter = (function() {

    PortRouter.prototype.bindings = {
      albumScraper: 'sendAlbum'
    };

    PortRouter.prototype.port = null;

    function PortRouter() {
      this.sendAlbum = __bind(this.sendAlbum, this);      this.port = chrome.extension.connect({
        name: "library"
      });
    }

    PortRouter.prototype.bindAll = function() {
      var event, model, _ref, _results;
      _ref = this.bindings;
      _results = [];
      for (model in _ref) {
        event = _ref[model];
        _results.push(this[model].bind('update', this[event]));
      }
      return _results;
    };

    PortRouter.prototype.sendAlbum = function(album) {
      return this.port.postMessage({
        track: album
      });
    };

    return PortRouter;

  })();

  window.PortRouter = PortRouter;

}).call(this);
