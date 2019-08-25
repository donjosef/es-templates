const express = require('express');

const router = express.Router();

const users = [];

router.get('/users', (req, res, next) => {
    res.render('users');
});

router.post('/users', (req, res, next) => {
    users.push(req.body);
    res.redirect('/');
});

module.exports = router;