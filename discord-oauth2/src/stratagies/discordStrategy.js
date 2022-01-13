const DiscordStrategy = require('passport-discord').Strategy;
const passport = require('passport');
const DiscordUser = require('../models/DiscordUser')
const auth = require('../routes/auth')

passport.serializeUser((user, done) => {
    console.log('Serialize')
    done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
    console.log('Deserialize')
    const user = await DiscordUser.findById(id);
    if(user) 
        done(null, user);
});

passport.use(new DiscordStrategy({
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    callbackURL: process.env.CLIENT_REDIRECT,
    scope: ['identify', 'guilds', 'email']
}, async (accessToken, refreshToken, profile, done) => {
    const user = await DiscordUser.findOne({ discordUserId: profile.id });

    try {
        const user = await DiscordUser.findOne({ discordUserId: profile.id });
        if(user) {
            console.log('User exists.')
            done(null, user)
        }
        else {
            console.log('User does not exist.')
            const newUser = await DiscordUser.create({
                discordUserId : profile.id,
                username : profile.username,
                guilds : profile.guilds,
                email : profile.email,
                avatar : profile.avatar
            });
            const savedUser = await newUser.save();
            done(null, savedUser);
        }
        
    }
    catch(err) {
        console.log(err);
        done(err, null);
    }
})); 
