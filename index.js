var express = require('express');
var app = express();
var jwt = require('express-jwt');
var jwks = require('jwks-rsa');
var jwtAuthz = require('express-jwt-authz');
var router = require('./routers/router')
var cors = require('cors');

var port = process.env.PORT || 8080;

var bodyParser = require('body-parser');
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

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

var options = {
    customScopeKey: 'permissions'
};

app.use(cors());
app.use(jwtCheck);
app.use(router);

app.get('/authorized', function (req, res) {
    res.send('Secured Resource');
});

router.get('/test',
    // jwtAuthz(['read:userlist'], options),
    function (req, res) {
        console.log(req)
        res.send('well')
    });

console.log(`running on port:${port}`)
app.listen(port);