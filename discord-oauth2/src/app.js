require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
const authRoute = require('./routes/auth');
const session = require('express-session')
const passport = require('passport');
const discordStrategy = require('./stratagies/discordStrategy');
const db = require('./database/database');

db.then(() => console.log('Connected to MongoDB.')).catch(err => console.log(err));

//Routes
app.use('/auth', authRoute);

app.use(session({
    secret: 'TOP SECRET',
    cookie: {
        maxAge: 60000 * 60 * 24
    }, 
    resave: true,
    saveUninitialized: true
}))

//Passport

app.use(passport.initialize());
app.use(passport.session());

//Middleware routes
app.listen(PORT, () => {
    console.log(`Now listening to requests on port ${PORT}`);
});
