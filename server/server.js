//TODO Clean up email html
const express = require('express'),
    md5 = require('blueimp-md5'),
    expressValidator = require('express-validator'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    axios = require('axios'),
    nodemailer = require('nodemailer');

const MAIL_CHIMP_API = require('./mailchimp_api');
const GMAIL_PASS = require('./decode_gmail');

const app = express();

//TODO Remove in production
app.use(cors());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}));

// parse application/json
app.use(bodyParser.json());
app.use(expressValidator());

app.set('port', (process.env.PORT || 3001));

//helper function, returns promise
const subscribe = ({email, api}) => {
    const ROOT_URL = `https://us9.api.mailchimp.com/3.0/lists/47aff20fae/members`;
    //mailchimp expects emails to be in the md5 format
    const hash = md5(email);
    //mailchimp uses HTTP Basic authorization.
    //we have to manually set the Authorization headers.
    //NOTE: the api key bust be base64 encoded and it's in the format of 'apikey:' + api key
    axios.defaults.headers.common['Authorization'] = 'Basic ' + api;
    return new Promise((resolve, reject) => { // eslint-disable-line no-undef
        axios({
            method: 'get',
            url: `${ROOT_URL}/${hash}`
        })
            .then(({data: user}) => {
                resolve(user);
            })
            .catch(({response: {data: err}}) => {


                //The user was not found. Proceed to register the user.
                reject(err);
            });
    });
};

app.post('/apply', (req, res) => {
    const smtpConfig = {
        host: 'smtp.gmail.com',
        port: 465,
        secure: true, // use SSL
        auth: {
            user: 'decodemtl@gmail.com',
            pass: GMAIL_PASS
        }
    };
    const transporter = nodemailer.createTransport(smtpConfig);
    const data = req.body;
    console.log(data);
    req.checkBody({
        'first-name': {
            notEmpty: true,
            isAlpha: {
                errorMessage: 'Invalid Name'
            }
        },
        'last-name': {
            notEmpty: true,
            isAlpha: {
                errorMessage: 'Invalid Name'
            }
        },
        'tel': {
            notEmpty: true
        },
        'email': {
            notEmpty: true,
            isEmail: {
                errorMessage: 'Invalid Email'
            }
        },
        'course': {
            notEmpty: true
        },
        'tech-background': {
            notEmpty: true
        }
    });
    const errors = req.validationErrors();
    if (errors) {
        return res.json(errors);
    }

    // create reusable transporter object using the default SMTP transport

    // setup e-mail data
    //proceed editing at own risk
    const mailOptions = {
        from: '"DecodeMTL Bot "<decodemtl@gmail.com>', // sender address
        to: 'hello@decodemtl.com', // list of receivers
        subject: 'New Application from ' + data['first-name'] + ' ' + data['last-name'] + '', // Subject line
        text: 'New Application', // plaintext body
        html: `<div>
                <p>First Name: ${data['first-name']}</p>
                <p>Last Name: ${data['last-name']}</p>
                <p>Email: ${data['email']}</p>
                <p>Phone: ${data['tel']}</p>
                ${data['linkedin'] ? '<p>LinkedIn: ' + data["linkedin"] + '</p>' : ''}
                <p>Which course are you applying to: ${data['course']}</p>
                <p>Technical Knowledge: ${data['tech-background']}</p>
                ${data['hope'] && Array.isArray(data['hope']) ? '<p>Goals:</p><ul>' + data['hope'].map(goal => ('<li>' + goal + '</li>')).join('') + '</ul>' : data['hope'] ? '<p>Goal: ' + data['hope'] + '</p>' : ''}
                <p>About yourself: ${data['message']}</p>
               </div>` // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
            res.json({error});
        }
        console.log('Message sent: ' + info.response);
        if (req.body['list-optin'] && req.body['list-optin'] === 'yes') {
            subscribe({email: req.body.email, api: MAIL_CHIMP_API})
                .then(user => {
                    res.json(user);
                })
                .catch(err => {
                    res.json(err);
                })
        }
        res.json({status: 'ok'})
    });
});

app.post('/newsletter', (req, res) => {
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
        res.json(errors[0]);
        return;
    }
    const {email} = req.body;
    subscribe({email, api: MAIL_CHIMP_API})
        .then(user => {
            res.json(user);
        })
        .catch(err => {
            res.json(err);
        })
});

app.listen(app.get('port'), () => {
    console.log(`API server running on port ${app.get('port')}`); // eslint-disable-line no-console
});