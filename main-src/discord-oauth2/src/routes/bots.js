const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('shopping')
});

module.exports =  router;