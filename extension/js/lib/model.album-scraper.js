(function() {
  var AlbumScraper;

  AlbumScraper = (function() {

    AlbumScraper.prototype.album = nil;

    function AlbumScraper() {}

    AlbumScraper.prototype.parse = function(dom) {
      if (dom == null) dom = 'html';
      eval($(dom).html().match(/var TralbumData (.|\n)*?^};$/gim)[0]);
      return this.album = TralbumData;
    };

    return AlbumScraper;

  })();

  window.AlbumScraper = AlbumScraper;

}).call(this);
