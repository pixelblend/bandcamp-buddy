describe 'ContentScriptView', ->
  beforeEach ->
    @model = parse: sinon.spy()
    @container = $('<div />')
    @view = new ContentScriptView container: @container, model: @model
    @view.render()

  it 'Appends a button to a given container', ->
    assert.equal @container, @view.container
    assert.equal 1, @view.container.find('button').length

  it 'Binds button press to scrape album data', ->
    @view.$el.click()
    assert @view.model.parse.calledOnce

