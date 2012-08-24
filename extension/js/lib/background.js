(function() {

  $(function() {
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
  });

}).call(this);
