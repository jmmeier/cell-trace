
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars')

var index = require('./routes/index');
var project = require('./routes/project');
var about = require('./routes/about');
var upload = require('./routes/upload');

var trace = require('./routes/trace');
var user = require('./routes/user');
var login = require('./routes/login');

var tracer = require('./routes/tracer');
var emeline = require('./routes/emeline');
var addTracer = require('./routes/addTracer');

var prof = require('./routes/prof');
var yang = require('./routes/yang');
var addProf = require('./routes/addProf');

var profResults = require('./routes/profResults');
var addCell = require('./routes/addCell');


// Example route
// var user = require('./routes/user');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('Intro HCI secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// Add routes here
app.get('/', index.view);
app.get('/project/:name', project.viewProject);
app.get('/about', about.viewAbout);
app.get('/upload', upload.viewUpload);

app.get('/trace', trace.viewTrace);
app.get('/user', user.viewUser);
app.get('/login', login.viewLogin);

app.get('/tracer', tracer.viewTracer);
app.get('/emeline', emeline.viewEmeline);
app.get('/addTracer', addTracer.addTracer);

app.get('/prof', prof.viewProf);
app.get('/yang', yang.viewYang);
app.get('/addProf', addProf.addProf);

app.get('/profResults', profResults.viewProfResults);
app.get('/addCell', addCell.addCell);


//app.get('/project', project.viewProject);
// Example route
// app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
