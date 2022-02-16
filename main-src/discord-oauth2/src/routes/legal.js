const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('legal')
});

module.exports =  router;
  