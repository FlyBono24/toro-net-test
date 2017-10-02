const express = require('express'),
      router = express.Router(),
      passport = require('passport')

/* GitHub */
router.get('/github',
  passport.authenticate('github'))

router.get('/github/callback',
  passport.authenticate('github', { failureRedirect: '/' }),
  function(req, res) {
    res.redirect('/')
  })

/* Email/password */
router.post('/',
  passport.authenticate('local', { failureRedirect: '/' }),
  function(req, res) {
    res.redirect('/')
  })

router.post('/register',
  passport.authenticate('local', { failureRedirect: '/' }),
  function(req, res) {
    res.redirect('/')
  })

module.exports = router
