class PortRouter
  bindings:
    albumScraper: 'sendAlbum'
  port: null
  constructor: ->
    @port = chrome.extension.connect name: "library"
  bindAll: ->
    for model, event of @bindings
      @[model].bind 'update', @[event]

  sendAlbum: (album) ->
    port.postMessage track: album

window.PortRouter = PortRouter

