class ContentScriptView extends Backbone.View
  tagName: 'button'
  attributes:
    id: 'add-to-list'
  events:
    click: 'addToList'
  initialize: () ->
    @model = @options.model
    @container = if @options.container? then @options.container else $('body')
    @$el.text 'Add to list'
    @$el.hide()
    @$el.appendTo(@container)
  render: ->
    @$el.show()
  addToList: ->
    @model.parse()

window.ContentScriptView = ContentScriptView

