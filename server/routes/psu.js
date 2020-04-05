require('tls').DEFAULT_MIN_VERSION = 'TLSv1'   // since TLSv1.3 default disable v1.0    // since TLSv1.3 default disable v1.0 
const express = require('express');
const soap = require('soap');
const bodyParser = require('body-parser')
const url = 'https://passport.psu.ac.th/authentication/authentication.asmx?wsdl';
const app = express()
const router = express.Router()
app.use(bodyParser.urlencoded({ extended: false }), router)
app.use(bodyParser.json, router)



module.exports.login = function (req, res) {
    soap.createClient(url, (err, client) => {
        if (err) console.error(err);
        else {
            let user = {}
            user.username = req.body.username
            user.password = req.body.password
            client.GetStaffDetails(user, function (err, response) {
                // client.GetStudentDetails(args, function(err, response) {
                if (err) console.error(err);
                else {
                    const [stdId, firstname, lastname, id, type] = response.GetStaffDetailsResult.string
                    req.session.psuInfo = JSON.stringify({ stdId, firstname, lastname, id, type })
                    res.json({ stdId, firstname, lastname, id, type })
                }
            });
        }
    });
}
