(function() {
  var AlbumScraper;

  AlbumScraper = (function() {

    AlbumScraper.prototype.album = null;

    function AlbumScraper() {}

    AlbumScraper.prototype.parse = function(dom) {
      var albumVar;
      if (dom == null) dom = 'html';
      albumVar = $(dom).html().match(/var TralbumData (.|\n)*?^};$/gim)[0];
      eval(albumVar);
      this.album = TralbumData;
      if (this.album != null) {
        console.log('album', this.album);
        return this.trigger('update', this.album);
      }
    };

    return AlbumScraper;

  })();

  _.extend(AlbumScraper.prototype, Backbone.Events);

  window.AlbumScraper = AlbumScraper;

}).call(this);
