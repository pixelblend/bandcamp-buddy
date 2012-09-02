class AlbumScraper
  album: null
  constructor: () ->
  parse: (dom='html') ->
    # find JS snippet that defines album object
    albumVar = $(dom).html().match(/var TralbumData (.|\n)*?^};/gim)[0]
    
    # eval in this scope so we can own it
    @album = @safeEval(albumVar)

    if @album?
      # send to port-router
      console.log 'album', @album
      @trigger 'update', @album

  safeEval: (str) ->
    # temp rename of scoping
    album = this
    this = {}
    eval(str)
    this = album
    TralbumData

_.extend AlbumScraper.prototype, Backbone.Events

window.AlbumScraper = AlbumScraper

