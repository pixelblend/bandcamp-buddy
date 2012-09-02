class Application
  contentScript: ->
    window.albumScraper = new window.AlbumScraper()
    window.contentView  = new window.ContentScriptView model: albumScraper
    window.portRouter   = new window.PortRouter()

    portRouter.albumScraper = albumScraper
    portRouter.bindAll()

    contentView.render()
  background: ->
    window.album      = new window.AlbumCollection()
    window.portRouter = new window.PortRouter()
    window.backgroundView = new window.BackgroundView model: album

    portRouter.album  = album
    portRouter.bindAll()

    backgroundView.render()
  popup: ->
    #

window.Application = Application

