class BackgroundView extends Backbone.View
  attributes:
    id: 'player-container'
  initialize: ->
    @model = @options.model
    @container = if @options.container? then @options.container else $('body')
    @template = $('#player-template').html()
    @template = $(@template)
    @container.append(@$el)
    # TODO - bind audio events to play next item

  render: ->
    @template.find('source').attr('src', @model.nowPlaying.src)
    @$el.html @template

window.BackgroundView = BackgroundView

