$(function(){
  chrome.extension.onConnect.addListener(function(port) {
    port.onMessage.addListener(function(msg) {
      console.log('playing '+msg.track);
      var template = $('#player-template').html();
      template = $(template);
      template.find('source').attr('src', msg.track);
      $('#player').html('');
      $('#player').append(template);
    });
  });
})
