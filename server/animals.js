let express = require('express')
let bodyParser = require('body-parser');
const session = require('express-session')
let cors = require('cors')
let app = express()
let router = express.Router()


app.use(cors({origin: ['http://localhost:3000'], methods: ['GET', 'POST'], credentials: true}));
app.use(session({ secret: 'keyboard cat', cookie: { maxAge: 60000 },
resave : false, saveUninitialized: false }))

app.use('/api', bodyParser.json(), router)
app.use('/api', bodyParser.urlencoded({

    extended: false

}), router);

let animals = [

    {
        id: 1,
        imgUrl: 'https://scontent.fbkk8-2.fna.fbcdn.net/v/t1.0-9/90357810_1080609382307203_9018453696849117184_n.jpg?_nc_cat=107&_nc_sid=666b5a&_nc_eui2=AeHLMSr1d6B4pOCjHyx08EIFkvoZFdlydREK9wdsi4cJRGbkw1K2xLzeqEuNIGPGCvSWfEWhKXisTz0tKAq0_T4eYXshmAuhwi7pYRwjyXlGIA&_nc_ohc=RbxPPh73VK8AX80ab2f&_nc_ht=scontent.fbkk8-2.fna&oh=e2e37e4d1760f067755b5116036efe9d&oe=5EA8D419',
        strain: 'Normal',
        name: 'Malee',
        old: 3,
        habits: 'alone',
        because: 'ไม่สะดวกเลี้ยง'
    },
    {
        id: 2,
        imgUrl: 'https://scontent.fbkk8-2.fna.fbcdn.net/v/t1.0-9/90357810_1080609382307203_9018453696849117184_n.jpg?_nc_cat=107&_nc_sid=666b5a&_nc_eui2=AeHLMSr1d6B4pOCjHyx08EIFkvoZFdlydREK9wdsi4cJRGbkw1K2xLzeqEuNIGPGCvSWfEWhKXisTz0tKAq0_T4eYXshmAuhwi7pYRwjyXlGIA&_nc_ohc=RbxPPh73VK8AX80ab2f&_nc_ht=scontent.fbkk8-2.fna&oh=e2e37e4d1760f067755b5116036efe9d&oe=5EA8D419',
        strain: 'Normal',
        name: 'Malee',
        old: 3,
        habits: 'alone',
        because: 'ไม่สะดวกเลี้ยง'
    },
    {
        id: 3,
        imgUrl: 'https://scontent.fbkk8-2.fna.fbcdn.net/v/t1.0-9/90357810_1080609382307203_9018453696849117184_n.jpg?_nc_cat=107&_nc_sid=666b5a&_nc_eui2=AeHLMSr1d6B4pOCjHyx08EIFkvoZFdlydREK9wdsi4cJRGbkw1K2xLzeqEuNIGPGCvSWfEWhKXisTz0tKAq0_T4eYXshmAuhwi7pYRwjyXlGIA&_nc_ohc=RbxPPh73VK8AX80ab2f&_nc_ht=scontent.fbkk8-2.fna&oh=e2e37e4d1760f067755b5116036efe9d&oe=5EA8D419',
        strain: 'Normal',
        name: 'Malee',
        old: 3,
        habits: 'alone',
        because: 'ไม่สะดวกเลี้ยง'
    }
];

router.route('/animals')

.get((req, res) => res.json(animals))
.post((req, res) => {

    let animal = {}
    animal.id = animals[animals.length - 1].id + 1
    animal.imgUrl = req.body.imgUrl;
    animal.strain = req.body.strain;
    

})