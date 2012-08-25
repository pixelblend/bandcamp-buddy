class ContentScript extends Backbone.View
  tagName: 'button'
  attributes:
    id: 'add-to-list'
    text: 'Add to list'
  events:
    click: 'addToList'
  initialize: (model) ->
    @model = model
    @$el.appendTo('body')
  render: ->
    #
  addToList: ->
    @model.scrape()

window.ContentScript = ContentScript

