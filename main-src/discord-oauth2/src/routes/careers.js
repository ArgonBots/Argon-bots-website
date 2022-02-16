const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('careers')
});

module.exports =  router;
  