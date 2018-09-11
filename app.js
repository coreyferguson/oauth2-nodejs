var path = require('path');
var config = require('./config.json');
var express = require('express');
var session = require('express-session');
var app = express();
var https = require('https');
var http = require('http');
var fs = require('fs');
var privateKey  = fs.readFileSync('sslcert/key.pem', 'utf8');
var certificate = fs.readFileSync('sslcert/cert.pem', 'utf8');
var credentials = {
  key: fs.readFileSync('./sslcert/key.pem'),
  cert: fs.readFileSync('./sslcert/cert.pem')
};

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({secret: 'secret', resave: 'false', saveUninitialized: 'false'}));

// Initial view - loads Connect To QuickBooks Button
app.get('/', function (req, res) {
  res.render('home', config)
});

// Sign In With Intuit, Connect To QuickBooks, or Get App Now
// These calls will redirect to Intuit's authorization flow
app.use('/sign_in_with_intuit', require('./routes/sign_in_with_intuit.js'));
app.use('/connect_to_quickbooks', require('./routes/connect_to_quickbooks.js'));
app.use('/connect_handler', require('./routes/connect_handler.js'));

// Callback - called via redirect_uri after authorization
app.use('/callback', require('./routes/callback.js'));

// Connected - call OpenID and render connected view
app.use('/connected', require('./routes/connected.js'));

// Call an example API over OAuth2
app.use('/api_call', require('./routes/api_call.js'));

// var httpServer = http.createServer(app);
var httpsServer = https.createServer(credentials, app);

// Start server on HTTP
// httpServer.listen(3001, function () {
//   console.log('Navigate to https://localhost:3000');
// })

// Start server on HTTPS
httpsServer.listen(3000, function () {
  console.log('Navigate to https://localhost:3000')
});
