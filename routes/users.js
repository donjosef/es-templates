const express = require('express');

const router = express.Router();

router.get('/users', (req, res, next) => {
    res.render('users');
});

router.post('/users', (req, res, next) => {
    res.redirect('/');
});

module.exports = router;