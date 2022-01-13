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

app.get('/', isAuthorized, (req, res) => {
    res.render('home', { 
        users: [
            { name: 'hannes', email: 'hannes@gmail.com' },
            { name: 'james', email: 'james@gmail.com'},
            { name: 'max', email: 'max@gmail.com'},
            { name: 'josh', email: 'josh@gmail.com'}
        ]
    });
})

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
