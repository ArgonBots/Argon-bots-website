const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('join-server')
});

module.exports =  router;
  