class Application
  contentScript: ->
    window.albumScraper = new window.AlbumScraper()
    window.contentView  = new window.ContentScriptView(albumScraper)
    window.portRouter   = new window.PortRouter()

    contentView.render()
  background: ->
    chrome.extension.onConnect.addListener (port) ->
      port.onMessage.addListener (msg) ->
        console.log("playing #{msg.track}")
        template = $('#player-template').html()
        template = $(template)
        template.find('source').attr('src', msg.track)
        $('#player').html('')
        $('#player').append(template)
  poup: ->
    #

window.Application = Application

