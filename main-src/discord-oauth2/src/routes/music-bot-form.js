const router = require('express').Router();

function isAuthorized (req, res, next) {
    if(req.user) {
        console.log('User is logged in.');
        console.log(req.user);
        next();
    }
    else {
        console.log('User is not logged in.')
        res.redirect('/confirm-login');
    }
}

router.get('/prefix', isAuthorized, (req, res) => {
    res.render('music-bot-form')
});

router.get('/status', isAuthorized, (req, res) => {
    res.render('music-bot-form-1')
});

router.get('/status-type', isAuthorized, (req, res) => {
    res.render('music-bot-form-2')
});

router.get('/token', isAuthorized, (req, res) => {
    res.render('music-bot-form-3')
});

router.get('/owner-id', isAuthorized, (req, res) => {
    res.render('music-bot-form-4')
});

router.get('/avatar-link', isAuthorized, (req, res) => {
    res.render('music-bot-form-5')
});

router.get('/footer-text', isAuthorized, (req, res) => {
    res.render('music-bot-form-6')
});

router.get('/hex', isAuthorized, (req, res) => {
    res.render('music-bot-form-7')
});

router.get('/file-name', isAuthorized, (req, res) => {
    res.render('music-bot-form-8')
});

router.get('/id', isAuthorized, (req, res) => {
    res.render('music-bot-form-9')
});

router.get('/subscription-type', isAuthorized, (req, res) => {
    res.render('music-bot-form-10')
});

router.get('/pay-monthly', isAuthorized, (req, res) => {
    res.render('music-bot-form-11')
});

router.get('/pay-yearly', isAuthorized, (req, res) => {
    res.render('music-bot-form-12')
});
module.exports =  router;