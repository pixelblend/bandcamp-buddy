(function() {
  var Database;

  Database = (function() {

    Database.prototype.db = null;

    Database.prototype.indexedDB = null;

    function Database(indexedDB) {
      var request,
        _this = this;
      this.indexedDB = indexedDB;
      request = this.indexedDB.open("bandCampBuddy");
      request.onfailure = this.logError(event);
      request.onsuccess = function(event) {
        _this.db = event.target.result;
        _this.db.onerror = _this.logError(event);
        _this.migrate();
        return _this.requestAlbums();
      };
    }

    Database.prototype.logError = function(event) {
      return function(event) {
        return console.error('Database error', event.target.errorCode);
      };
    };

    Database.prototype.migrate = function() {};

    Database.prototype.requestAlbums = function() {};

    return Database;

  })();

  _(Database).extend(Backbone.Events);

  window.Database = Database;

}).call(this);
