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

let animals = [

    {
        id: 1,
        imgUrl1: 'https://scontent.fbkk8-2.fna.fbcdn.net/v/t1.0-9/90357810_1080609382307203_9018453696849117184_n.jpg?_nc_cat=107&_nc_sid=666b5a&_nc_eui2=AeHLMSr1d6B4pOCjHyx08EIFkvoZFdlydREK9wdsi4cJRGbkw1K2xLzeqEuNIGPGCvSWfEWhKXisTz0tKAq0_T4eYXshmAuhwi7pYRwjyXlGIA&_nc_ohc=RbxPPh73VK8AX80ab2f&_nc_ht=scontent.fbkk8-2.fna&oh=e2e37e4d1760f067755b5116036efe9d&oe=5EA8D419',
        imgUrl2: 'https://scontent.fbkk8-2.fna.fbcdn.net/v/t1.0-9/90357810_1080609382307203_9018453696849117184_n.jpg?_nc_cat=107&_nc_sid=666b5a&_nc_eui2=AeHLMSr1d6B4pOCjHyx08EIFkvoZFdlydREK9wdsi4cJRGbkw1K2xLzeqEuNIGPGCvSWfEWhKXisTz0tKAq0_T4eYXshmAuhwi7pYRwjyXlGIA&_nc_ohc=RbxPPh73VK8AX80ab2f&_nc_ht=scontent.fbkk8-2.fna&oh=e2e37e4d1760f067755b5116036efe9d&oe=5EA8D419',
        imgUrl3: 'https://scontent.fbkk8-2.fna.fbcdn.net/v/t1.0-9/90357810_1080609382307203_9018453696849117184_n.jpg?_nc_cat=107&_nc_sid=666b5a&_nc_eui2=AeHLMSr1d6B4pOCjHyx08EIFkvoZFdlydREK9wdsi4cJRGbkw1K2xLzeqEuNIGPGCvSWfEWhKXisTz0tKAq0_T4eYXshmAuhwi7pYRwjyXlGIA&_nc_ohc=RbxPPh73VK8AX80ab2f&_nc_ht=scontent.fbkk8-2.fna&oh=e2e37e4d1760f067755b5116036efe9d&oe=5EA8D419',
        strain: 'Normal',
        name: 'Malee',
        old: 3,
        habits: 'alone',
        because: 'ไม่สะดวกเลี้ยง',
        status: 'have',
        imgUrlUser: 'https://scontent.fhdy2-1.fna.fbcdn.net/v/t1.0-9/32089429_1813031982097084_7269104841354379264_o.jpg?_nc_cat=110&_nc_sid=174925&_nc_ohc=Bi4H4vO5YVoAX_NW-fg&_nc_ht=scontent.fhdy2-1.fna&oh=805262156374d2b4381c9c535fb9518f&oe=5EAAF717',
        nameUser: 'Jantapa',
        email: 'jantapa2407@gmail.com',
        telephone: '0922389204',
        facebook: 'Jan Tapa',
        line: 'jantaa.24',
        address: '77 soi.10',
        city: 'hatyai',
        state: 'hatyainai',
        zip: '90110'
    }
];

router.route('/animals')

.get((req, res) => res.json(animals))

.post((req, res) => {

    let animal = {}
    animal.id = animals[animals.length - 1].id + 1
    animal.imgUrl1 = req.body.imgUrl1;
    animal.imgUrl2 = req.body.imgUrl2;
    animal.imgUrl3 = req.body.imgUrl3;
    animal.strain = req.body.strain;
    animal.name = req.body.name;
    animal.old = req.body.old;
    animal.habits = req.body.habits;
    animal.because = req.body.because;
    animal.status = req.body.status;
    animal.imgUrlUser = req.body.imgUrlUser;
    animal.nameUser = req.body.nameUser;
    animal.email = req.body.email;
    animal.telephone = req.body.telephone;
    animal.facebook = req.body.facebook;
    animal.line = req.body.line;
    animal.address = req.body.address;
    animal.city = req.body.city;
    animal.state = req.body.state;
    animal.zip = req.body.zip;
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
    animals[index].imgUrl1 = req.body.imgUrl1;
    animals[index].imgUrl2 = req.body.imgUrl2;
    animals[index].imgUrl3 = req.body.imgUrl3;
    animals[index].strain = req.body.strain;
    animals[index].name = req.body.name;
    animals[index].old = req.body.old;
    animals[index].habits = req.body.habits;
    animals[index].because = req.body.because;
    animals[index].status = req.body.status;
    animals[index].imgUrlUser = req.body.imgUrlUser;
    animals[index].nameUser = req.body.nameUser;
    animals[index].email = req.body.email;
    animals[index].telephone = req.body.telephone;
    animals[index].facebook = req.body.facebook;
    animals[index].line = req.body.line;
    animals[index].address = req.body.address;
    animals[index].city = req.body.city;
    animals[index].state = req.body.state;
    animals[index].zip = req.body.zip;
    res.json({ message: 'Animal Update !' + req.params.animal_id});

})

.delete((req, res) => {

     let id = req.params.animal_id
    let index = animals.findIndex( animal =>(animal.id === +id))
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

router.route('/auth/psu')
.post(psuRoutes.login);




app.use("*", (req, res) => res.status(404).send('404 Not found'));

app.listen(80, () => { console.log('server is running PORT 8000') })


