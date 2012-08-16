$ () ->
  chrome.extension.onConnect.addListener (port) ->
    port.onMessage.addListener (msg) ->
      console.log("playing #{msg.track}")
      template = $('#player-template').html()
      template = $(template)
      template.find('source').attr('src', msg.track)
      $('#player').html('')
      $('#player').append(template)
