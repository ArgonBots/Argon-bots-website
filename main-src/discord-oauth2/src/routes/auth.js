const router = require('express').Router();
const passport = require('passport');

router.get('/', passport.authenticate('discord'));

router.get('/logout', (req, res) => {
    if(req.user) {
        req.logout();
        res.redirect('/');
    }
    else {
        res.redirect('/');
    }
});

router.get('/redirect', passport.authenticate('discord', {
    failureRedirect: '/errors/forbidden',
    successRedirect: '/'
}));
module.exports = router;