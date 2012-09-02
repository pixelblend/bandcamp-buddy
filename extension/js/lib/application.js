(function() {
  var Application;

  Application = (function() {

    function Application() {}

    Application.prototype.contentScript = function() {
      window.albumScraper = new window.AlbumScraper();
      window.contentView = new window.ContentScriptView({
        model: albumScraper
      });
      window.portRouter = new window.PortRouter();
      portRouter.albumScraper = albumScraper;
      portRouter.bindAll();
      return contentView.render();
    };

    Application.prototype.background = function() {
      window.album = new window.AlbumCollection();
      window.portRouter = new window.PortRouter();
      window.backgroundView = new window.BackgroundView({
        model: album
      });
      portRouter.album = album;
      portRouter.bindAll();
      return backgroundView.render();
    };

    Application.prototype.popup = function() {};

    return Application;

  })();

  window.Application = Application;

}).call(this);
