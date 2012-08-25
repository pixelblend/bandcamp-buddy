class ContentScriptView extends Backbone.View
  tagName: 'button'
  attributes:
    id: 'add-to-list'
  events:
    click: 'addToList'
  initialize: (model) ->
    @model = model
    @$el.text 'Add to list'
    @$el.hide()
    @$el.appendTo('body')
  render: ->
    @$el.show()
  addToList: ->
    @model.scrape()

window.ContentScriptView = ContentScriptView

