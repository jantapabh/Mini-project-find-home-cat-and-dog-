let express = require('express')
let bodyParser = require('body-parser');
const session = require('express-session')
let cors = require('cors')
const FB = require('./fb')
var request = require('request');
let authRoutes = require('./routes/auth');
let fbRoutes = require('./routes/fb');
let psuRoutes = require('./routes/psu');
let app = express()
let router = express.Router()


app.use(cors({origin: ['http://localhost:3000'], methods: ['GET', 'POST', 'PUT','DELETE'], credentials: true}));
app.use(session({ secret: 'keyboard cat', cookie: { maxAge: 60000 },
resave : false, saveUninitialized: false }))

app.use('/api', bodyParser.json(), router)
app.use('/api', bodyParser.urlencoded({

    extended: false

}), router);

let users = [

    {
        id: 1,
        imgUrl: ''
    }
]