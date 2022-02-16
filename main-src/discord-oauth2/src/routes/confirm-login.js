const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('confirm-login')
});

module.exports =  router;