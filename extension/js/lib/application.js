(function() {
  var Application;

  Application = (function() {

    function Application() {}

    Application.prototype.contentScript = function() {
      window.albumScraper = new window.AlbumScraper();
      window.contentView = new window.ContentScriptView(albumScraper);
      window.portRouter = new window.PortRouter();
      return contentView.render();
    };

    Application.prototype.background = function() {
      return chrome.extension.onConnect.addListener(function(port) {
        return port.onMessage.addListener(function(msg) {
          var template;
          console.log("playing " + msg.track);
          template = $('#player-template').html();
          template = $(template);
          template.find('source').attr('src', msg.track);
          $('#player').html('');
          return $('#player').append(template);
        });
      });
    };

    Application.prototype.poup = function() {};

    return Application;

  })();

  window.Application = Application;

}).call(this);
