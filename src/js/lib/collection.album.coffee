class AlbumCollection extends Backbone.Collection
  model: window.Album
  nowPlaying:
    src: 'SOURCE'

window.AlbumCollection = AlbumCollection

