var express = require('express');
var app = express();
var jwt = require('express-jwt');
var jwks = require('jwks-rsa');
var router = require('./routers/router')

var port = process.env.PORT || 8080;

var jwtCheck = jwt({
      secret: jwks.expressJwtSecret({
          cache: true,
          rateLimit: true,
          jwksRequestsPerMinute: 5,
          jwksUri: 'https://dev-laou6ran.eu.auth0.com/.well-known/jwks.json'
    }),
    audience: 'https://localhost:3000',
    issuer: 'https://dev-laou6ran.eu.auth0.com/',
    algorithms: ['RS256']
});

app.use(jwtCheck);
app.use(router);

app.get('/authorized', function (req, res) {
    res.send('Secured Resource');
});

console.log(`running on port:${port}`)
app.listen(port);