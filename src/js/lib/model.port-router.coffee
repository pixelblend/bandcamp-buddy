class PortRouter
  bindings:
    albumScraper: 'sendAlbum'
    album: 'recieveAlbum'
  port: null
  constructor: ->
    @port = chrome.extension

  bindAll: ->
    for model, event of @bindings
      @[event](@[model]) if @[model]?

  sendAlbum: (model) ->
    library = @port.connect name: 'library'

    model.bind 'update', (album) ->
      #console.log 'posting', album
      library.postMessage track: album

  recieveAlbum: (model) ->
    @port.onConnect.addListener (pubSub) ->
      pubSub.onMessage.addListener (msg) ->
        console.log 'recieved', msg
        model.create msg

window.PortRouter = PortRouter

