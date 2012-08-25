class Database
  db: null
  indexedDB: null
  constructor: (indexedDB) ->
    @indexedDB = indexedDB
    request = @indexedDB.open("bandCampBuddy")
    request.onfailure = @logError(event)
    request.onsuccess = (event) =>
      @db = event.target.result
      @db.onerror = @logError(event)
      @migrate()
      @requestAlbums()

  logError: (event) ->
    (event) ->
      console.error('Database error', event.target.errorCode)

  migrate: ->
    #
  requestAlbums: ->
    #

_(Database).extend Backbone.Events

window.Database = Database

