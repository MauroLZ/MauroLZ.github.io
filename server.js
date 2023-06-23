const express = require('express');
const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;

const app = express();

// Configura las credenciales de Facebook
const FACEBOOK_APP_ID = '309570454731703';
const FACEBOOK_APP_SECRET = 'c4730b286250d78ac944024ad3773efa';

passport.use(new FacebookStrategy({
    clientID: 309570454731703,
    clientSecret: 'c4730b286250d78ac944024ad3773efa',
    callbackURL: '/auth/facebook/callback'
}, (accessToken, refreshToken, profile, done) => {
    // Aquí puedes manejar los datos del perfil del usuario que ha iniciado sesión con Facebook
}));

app.get('/auth/facebook', passport.authenticate('facebook'));

app.get('/auth/facebook/callback', passport.authenticate('facebook', {
    successRedirect: '/',
    failureRedirect: '/login'
}));

app.listen(63342, () => {
    console.log('Servidor iniciado en http://localhost:63342');
});
