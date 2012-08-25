Class PortRouter
  port: null
  constructor: ->
    @port = chrome.extension.connect name: "library"
  sendAlbum: (album) ->
    port.postMessage track: album

window.PortRouter = PortRouter

