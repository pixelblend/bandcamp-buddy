class Database
  db: null
  constructor: ->
    request = indexedDB.open("bandCampBuddy")
    request.onFailure = (event) =>
      @logFailure(event)
    request.onSuccess = (event) =>
      @migrate()
      @requestAlbums()

_(Database).extend Backbone.Events

window.Database = Database