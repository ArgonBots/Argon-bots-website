const router = require('express').Router();

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

router.get('/', isAuthorized, (req, res) => {
    res.render('partials/dashboard', {
        username : req.user.username,
        discordId : req.user.discordId,
        avatar : req.user.avatar,
        discordUserId : req.user.discordUserId
    });
})

module.exports =  router;
