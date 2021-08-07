const express = require('express');
const path = require('path');
const app = express();
const port = 82;
const session = require('express-session');
const mongoose = require('mongoose');
const passport = require('passport');
const connectEnsureLogin = require('connect-ensure-login').ensureLoggedIn;
const hostname = '127.0.0.1';


mongoose.connect('mongodb://localhost/instru_db_main', { useNewUrlParser: true, useUnifiedTopology: true });
const User = require('./user.js');

app.use(express.json());
app.use(passport.initialize());
app.use(passport.session());

passport.use(User.createStrategy());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


app.use('/static', express.static('static'));
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/services', (req, res) => {
    res.render('services');
});

app.get('/pae', (req, res) => {
    res.render('pae.ejs');
});

app.get('/feed', (req, res) => {
    res.render('feedback.ejs');
});


app.post('/createacnt', function (req, res) {

    Users = new User({ username: req.body.username, email: req.body.email });

    User.register(Users, req.body.password, function (err, user) {
        if (err) {
            res.json({ success: false, message: "Your account could not be saved. Error: ", err })
        } else {
            res.json({ success: true, message: "Your account has been saved" })
        }
    });
});

app.post('/login', passport.authenticate('local', { failureRedirect: '/' }), function (req, res) {
    console.log(req.user);
    res.redirect('/services');
});


const student = new mongoose.model('studdata', {
    firstname: String,
    phoneno: String,
    Email: String,
    instru: String
});

app.post('/student', (req, res) => {
    var myData = new student(req.body);
    myData.save().then(() => {
        res.send("You have succesfully submitted the form.")
    }).catch(() => {
        res.status(400).send("Your item is not saved to the database.")
    });
});

const teacher = new mongoose.model('teachdata', {
    firstname1: String,
    phoneno1: String,
    Email1: String,
    instru1: String
});

app.post('/teacher', (req, res) => {
    var myData1 = new teacher(req.body);
    myData1.save().then(() => {
        res.send("<h1>ThankYou Sir for your resonse</h1>")
    }).catch(() => {
        res.status(400).send("Your item is not saved to the database.")
    });
});

const feed = new mongoose.model('feeddata', {
    feedmessage: String,
    firstnamefeed: String,
    lastnamefeed: String,
    feedmail: String
});

app.post('/feedback', (req, res) => {
    var myData2 = new feed(req.body);
    myData2.save().then(() => {
        res.send(`<h1>We will listen to you</h1>`)
    }).catch(() => {
        res.status(400).send("Fill the Feedback again")
    });
});

const check = new mongoose.model('checkoutdata', {
    firstname: String,
    email: String,
    phnumber: String,
    address: String,
    iwant: Boolean,
    amt: Number,
    instru: String,
});

app.post('/checkout', (req, res) => {
    var myData3 = new check(req.body);
    myData3.save().then(() => {
        res.redirect('/feed')
    }).catch(() => {
        res.status(400).send("Fill the Feedback again")
    });
});

app.listen(port, () => {
    console.log(`app started succesfully at port ${port}`);
})
