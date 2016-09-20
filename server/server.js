//TODO Clean up email html
const express = require('express'),
    expressValidator = require('express-validator'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    axios = require('axios'),
    nodemailer = require('nodemailer');

//NOTE: Mailchimp uses HTTP Basic Auth. Set 'username' as any string ex: 'apiKey', 'helloWorld'
const MAIL_CHIMP_API = require('./mailchimp_api');
const GMAIL_PASS = require('./decode_gmail');
const ROOT_URL = `https://us9.api.mailchimp.com/3.0/lists/47aff20fae/members`;

const app = express();

//TODO Remove in production
app.use(cors());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}));

// parse application/json
app.use(bodyParser.json());

// validate user input
app.use(expressValidator());

app.set('port', (process.env.PORT || 3001));

// Downloads virtual path
app.use('/downloads', express.static(__dirname + '/public'));

// returns promise
const subscribeUser = (email) => {
    return new Promise((resolve, reject) => { // eslint-disable-line no-undef
        axios({
            method: 'post',
            url: `${ROOT_URL}/`,
            data: {
                email_address: email,
                status: 'subscribed'
            },
            auth: {
                username: 'apiKey',
                password: MAIL_CHIMP_API
            }
        })
            .then(({data: user}) => {
                resolve(user);
            })
            .catch(({response: {data: err}}) => {
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

    // create reusable transporter object using the default SMTP transport
    const transporter = nodemailer.createTransport(smtpConfig);

    //User input data
    const data = req.body;

    //User data validation
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
            return subscribeUser(data.email)
                .then(response => {
                    res.json(response);
                })
                .catch(err => {
                    res.json(err);
                });
        }
        res.json({status: 'success'})
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

    subscribeUser(email)
        .then(response => {
            res.json(response);
        })
        .catch(err => {
            res.json(err);
        });
});

app.listen(app.get('port'), () => {
    console.log(`API server running on port ${app.get('port')}`); // eslint-disable-line no-console
});