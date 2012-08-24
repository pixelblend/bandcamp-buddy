// -*- mode: js2; -*-
// Module Dependencies

require('coffee-script');

var express = require('express'),
    assets = require('connect-assets')({'src': __dirname+'/src'}),
    app = express();

// Express Config
app.configure(function(){
  app.set('port', 5000);
  app.use(express.logger('dev'));
  app.use(express.static(__dirname+'/extension'));
  app.use(assets);
  app.use(express.bodyParser());
  app.use(express.cookieParser());
  app.engine('.hulk', require('hulk-hogan').__express);
  app.set('view engine', 'hulk');

  app.use(app.router);
});

// Routes
app.get('/', function(req, res){
  res.render(__dirname+'/test.hulk', {
    'javascripts': js('test/application')
  });
});


app.listen(app.settings.port);
console.log("Express server listening on port %d in %s mode", app.settings.port, app.settings.env);
