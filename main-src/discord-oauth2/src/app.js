require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
const session = require('express-session')
const MongoStore = require('connect-mongo');
const passport = require('passport');
const discordStrategy = require('./stratagies/discordStrategy');
const db = require('./database/database');
const path = require('path');
const mongoose = require('mongoose'); 

db.then(() => console.log('Connected to MongoDB.')).catch(err => console.log(err));

app.use(passport.initialize());

//Routes
const authRoute = require('./routes/auth');
const dashboardRoute = require('./routes/dashboard');
const aboutRoute = require('./routes/about');
const contactRoute = require('./routes/contact');
const botsRoute = require('./routes/bots');
const legalRoute = require('./routes/legal');
const newsRoute = require('./routes/news');
const careersRoute = require('./routes/careers');
const confirmLoginRoute = require('./routes/confirm-login');
const musicBotFormRoute = require('./routes/music-bot-form');
const joinServerRoute = require('./routes/join-server');
const errorRoute = require('./routes/error');
const { getMaxListeners } = require('process');

app.use(session({ 
    secret: 'TOP SECRET',
    cookie: {
        maxAge: 60000 * 60 * 24
    }, 
    saveUninitialized: false,
    resave: false, 
    name: 'discord.oauth2', 
    store: MongoStore.create ({ mongoUrl: 'mongodb://127.0.0.1:27017/discordAuth' })
}))

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

//Passport

app.use(passport.session());

//Middleware routes
app.use('/auth', authRoute);
app.use('/dashboard', dashboardRoute);
app.use('/about', aboutRoute);
app.use('/contact', contactRoute);
app.use('/bots', botsRoute);
app.use('/legal', legalRoute);
app.use('/news', newsRoute);
app.use('/careers', careersRoute);
app.use('/confirm-login', confirmLoginRoute);
app.use('/music-bot-form', musicBotFormRoute);
app.use('/join-server', joinServerRoute);
app.use('/error', errorRoute);

app.get('/', (req, res) => {
    res.render('index', { 
        users: [
            { name: 'hannes', email: 'hannes@gmail.com' },
            { name: 'james', email: 'james@gmail.com'},
            { name: 'max', email: 'max@gmail.com'},
            { name: 'josh', email: 'josh@gmail.com'}
        ]
    });
})

app.use((req, res, next) => {
    res.status(404).render("404")
});

app.use((req, res, next) => {
    res.status(403).render("403")
});

function isAuthorized (req, res, next) {
    if(req.user) {
        console.log('User is logged in.');
        console.log(req.user);
        next();
    }
    else {
        console.log('User is not logged in.')
        res.redirect('/');
    }
}



app.listen(PORT, () => {
    console.log(`Now listening to requests on port ${PORT}`);
});
