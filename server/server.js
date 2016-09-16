const express = require('express'),
    util = require('util'),
    md5 = require('blueimp-md5'),
    expressValidator = require('express-validator'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    axios = require('axios');

const app = express();

//TODO Remove in production
app.use(cors());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}));

// parse application/json
app.use(bodyParser.json());
app.use(expressValidator());


app.set('port', (process.env.PORT || 3001));

app.post('/newsletter', function (req, res) {
    req.checkBody({
        'email': {
            notEmpty: true,
            isEmail: {
                errorMessage: 'Invalid Email'
            }
        }
    });
    const errors = req.validationErrors();
    if (errors) {
        res.json({errors: 'There have been validation errors: ' + util.inspect(errors)}, 400);
        return;
    }

    //ADD API KEY BEFORE RUNNING SERVER
    const API_KEY = new Buffer('apikey:<INSERT API KEY HERE>').toString('base64');
    const ROOT_URL = `https://us9.api.mailchimp.com/3.0/lists/47aff20fae/members`;
    const {email} = req.body;
    //mailchimp expects emails to be in the md5 format
    const hash = md5(email);

    //mailchimp uses HTTP Basic authorization.
    //we have to manually set the Authorization headers.
    //NOTE: the api key bust be base64 encoded and it's in the format of 'apikey:' + api key
    axios.defaults.headers.common['Authorization'] = 'Basic ' + API_KEY;
    axios({
        method: 'get',
        url: `${ROOT_URL}/${hash}`
    })
        .then(({data: user}) => {
            res.json(user);
        }).catch(({response: {data: err}}) => {
        res.json(err);
    })
});

app.listen(app.get('port'), () => {
    console.log(`API server running on port ${app.get('port')}`); // eslint-disable-line no-console
});