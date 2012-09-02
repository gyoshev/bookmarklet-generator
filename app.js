var express = require('express');

var pub = __dirname + '/public';

var app = express();
app.use(app.router);
app.use(express.static(pub));
app.use(express.errorHandler());

app.set('views', __dirname + '/views');
app.set('view engine', 'jade');

app.get('/', function(req, res){
  res.render('generator', {});
});

app.listen(process.env.VCAP_APP_PORT || 3000);
