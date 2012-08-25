class AlbumScraper
  album: null
  constructor: ->
    #
  parse: (dom='html') ->
    # find JS snippet that defines album object
    albumVar = $(dom).html().match(/var TralbumData (.|\n)*?^};$/gim)[0]
    
    # eval in this scope so we can own it
    eval(albumVar)

    @album = TralbumData
    if @album?
      # send to port-router
      console.log 'album', @album

window.AlbumScraper = AlbumScraper

