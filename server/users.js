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
        imgUrl: 'https://scontent.fhdy2-1.fna.fbcdn.net/v/t1.0-9/32089429_1813031982097084_7269104841354379264_o.jpg?_nc_cat=110&_nc_sid=174925&_nc_ohc=Bi4H4vO5YVoAX_NW-fg&_nc_ht=scontent.fhdy2-1.fna&oh=805262156374d2b4381c9c535fb9518f&oe=5EAAF717',
        name: 'Jantapa',
        password: 'jantapa',
        email: 'jantapa2407@gmail.com',
        telephone: '0922389204',
        facebook: 'Jan Tapa',
        line: 'jantaa.24',
        address: '77 soi.10',
        city: 'hatyai',
        state: 'hatyainai',
        zip: 0
    }
]

router.route('/users')

.get((req, res) => res.json(users))
.post((req, res) => {

    let user = {}

    user.id = users[users.length - 1].id + 1;
    user.imgUrl = req.body.imgUrl;
    user.name = req.body.name;
    user.password = req.body.password;
    user.email = req.body.email;
    user.telephone = req.body.telephone;
    user.facebook = req.body.facebook;
    user.line = req.body.line;
    user.address = req.body.address;
    user.city = req.body.city;
    user.state = req.body.state;
    user.zip = req.body.zip;
    users.push(user)
    res.json({ message: 'User created!' })
    
})

router.route('/users/:user_id')
.get((req, res) => {
    let id = req.params.user_id
    let index = users.findIndex(user => (user_id === +id))
    res.json(users[index])
})

.put((req, res) => {

    //update User
   
    let id = req.params.user_id
    let index = users.findIndex(user => (user_id === +id))
    users.id = users[users.length - 1].id + 1;
    users[index].imgUrl = req.body.imgUrl;
    users[index].name = req.body.name;
    users[index].password = req.body.password;
    users[index].email = req.body.email;
    users[index].telephone = req.body.telephone;
    users[index].facebook = req.body.facebook;
    users[index].line = req.body.line;
    users[index].address = req.body.address;
    users[index].city = req.body.city;
    users[index].state = req.body.state;
    users[index].zip = req.body.zip;
    res.json({ message: 'User Update !' + req.params.user_id});
    

})


.delete((req, res) => {

    let id = req.params.user_id
    let index = users.findIndex(user => (user_id === +id))
    users.splice(index, 1)
    res.json({ message: 'USer Delete : ' + req.params.user_id });
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

app.listen(80, () => { console.log('server is running PORT 80') })

