const router = require('express').Router();

router.get('/forbidden', (req, res) => {
    res.render('403')
});

module.exports =  router;