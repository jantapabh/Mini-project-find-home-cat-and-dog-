let express = require('express')
let bodyParser = require('body-parser');
const session = require('express-session')
let cors = require('cors')
const FB = require('./fb')
var request = require('request');
let authRoutes = require('./routes/auth');
let fbRoutes = require('./routes/fb');
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
        because: 'ไม่สะดวกเลี้ยง',
        status: 'have'
    },
    {
        id: 2,
        imgUrl: 'https://scontent.fbkk8-2.fna.fbcdn.net/v/t1.0-9/90357810_1080609382307203_9018453696849117184_n.jpg?_nc_cat=107&_nc_sid=666b5a&_nc_eui2=AeHLMSr1d6B4pOCjHyx08EIFkvoZFdlydREK9wdsi4cJRGbkw1K2xLzeqEuNIGPGCvSWfEWhKXisTz0tKAq0_T4eYXshmAuhwi7pYRwjyXlGIA&_nc_ohc=RbxPPh73VK8AX80ab2f&_nc_ht=scontent.fbkk8-2.fna&oh=e2e37e4d1760f067755b5116036efe9d&oe=5EA8D419',
        strain: 'Normal',
        name: 'Malee',
        old: 3,
        habits: 'alone',
        because: 'ไม่สะดวกเลี้ยง',
        status: 'have'
    },
    {
        id: 3,
        imgUrl: 'https://scontent.fbkk8-2.fna.fbcdn.net/v/t1.0-9/90357810_1080609382307203_9018453696849117184_n.jpg?_nc_cat=107&_nc_sid=666b5a&_nc_eui2=AeHLMSr1d6B4pOCjHyx08EIFkvoZFdlydREK9wdsi4cJRGbkw1K2xLzeqEuNIGPGCvSWfEWhKXisTz0tKAq0_T4eYXshmAuhwi7pYRwjyXlGIA&_nc_ohc=RbxPPh73VK8AX80ab2f&_nc_ht=scontent.fbkk8-2.fna&oh=e2e37e4d1760f067755b5116036efe9d&oe=5EA8D419',
        strain: 'Normal',
        name: 'Malee',
        old: 3,
        habits: 'alone',
        because: 'ไม่สะดวกเลี้ยง',
        status: 'have'
    }
];

router.route('/animals')

.get((req, res) => res.json(animals))
.post((req, res) => {

    let animal = {}
    animal.id = animals[animals.length - 1].id + 1
    animal.imgUrl = req.body.imgUrl;
    animal.strain = req.body.strain;
    animal.name = req.body.name;
    animal.old = req.body.old;
    animal.habits = req.body.habits;
    animal.because = req.body.because;
    animal.status = req.body.status;
    animals.push(animal);
    res.json({ message: 'Animals created!' })
    
})

router.route('/animals/:animal_id')
.get((req, res) => {
    let id = req.params.animal_id
    let index = animals.findIndex(animal => (animal.id === +id))
    res.json(animals[index])
})

.put((req, res) => {

    //update Animals

    let id = req.params.animal_id
    let index = animals.findIndex(animal => (animal.id === +id))
    animals[index].imgUrl = req.body.imgUrl;
    animals[index].strain = req.body.strain;
    animals[index].name = req.body.name;
    animals[index].old = req.body.old;
    animals[index].habits = req.body.habits;
    animals[index].because = req.body.because;
    animal[index].status = req.body.status;
    res.json({ message: 'Animal Update !' + req.params.animal_id});

})

.delete((req, res) => {

    let id = req.params.animal_id
    let index = animals.findIndex(animal => animal_id === +id)
    animals.splice(index, 1)
    res.json({ message: 'Animal Delete : ' + req.params.animal_id });
})



router.route('/auth')
.get(authRoutes.index);

router.route('/auth/logout')
.get(authRoutes.logout);

router.route('/auth/facebook')
.get(fbRoutes.loginUrl);

router.route('/auth/facebook/login/callback')
.get(fbRoutes.loginCallback);


app.use("*", (req, res) => res.status(404).send('404 Not found'));

app.listen(8000, () => { console.log('server is running PORT 8000') })


