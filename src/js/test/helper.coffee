# setup assertions
window.assert = chai.assert

# bootstrap mocha
mocha.setup('bdd')

$ ->
  # start tests (once specs are loaded)
  mocha.run()
