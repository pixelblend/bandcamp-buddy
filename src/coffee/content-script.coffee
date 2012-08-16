bandcamp =
  find: ->
    eval($('html').html().match(/var TralbumData (.|\n)*?^};$/gim)[0])
    @album = TralbumData

$ () ->
  port = chrome.extension.connect({name: "play"})
  
  addToList = $('<button />', {text: "Add to list", id: "add-to-list"})
  addToList.appendTo('#customHeader')
  addToList.bind 'click', ->
    bandcamp.find()
    console.log('BB: found', bandcamp.album)
    port.postMessage({track: bandcamp.album.trackinfo[0].file})
