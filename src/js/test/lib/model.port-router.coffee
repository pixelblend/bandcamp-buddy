describe 'PortRouter', ->
  beforeEach ->
    @chrome = sinon.spy()
    chrome.extension =
      connect: @chrome

    @router = new PortRouter

  it 'connects to Chrome Extension message bus', ->
    assert @chrome.calledOnce
    assert @chrome.calledWith name: 'library'
   
  it 'binds to injected objects on update', ->
    @router.bindings = testModel: 'testMethod'
    @router.testMethod = ->

    @model = bind: sinon.spy()
    @router.testModel = @model
    @router.bindAll()

    assert @model.bind.calledOnce
    assert @model.bind.calledWith 'update', @router['testMethod']

