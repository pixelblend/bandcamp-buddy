# setup assertions
window.assert = chai.assert

# bootstrap mocha
mocha.setup('bdd')

$ ->
  # load HTML templates
  jsFixtures.getFixtures().fixturesPath = '/html/';
  loadFixtures('background.html');
  loadFixtures('popup.html');
  
  # start tests (once specs are loaded)
  mocha.run()
