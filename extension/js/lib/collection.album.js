(function() {
  var AlbumCollection,
    __hasProp = Object.prototype.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

  AlbumCollection = (function(_super) {

    __extends(AlbumCollection, _super);

    function AlbumCollection() {
      AlbumCollection.__super__.constructor.apply(this, arguments);
    }

    AlbumCollection.prototype.model = window.Album;

    AlbumCollection.prototype.nowPlaying = {
      src: 'SOURCE'
    };

    return AlbumCollection;

  })(Backbone.Collection);

  window.AlbumCollection = AlbumCollection;

}).call(this);
