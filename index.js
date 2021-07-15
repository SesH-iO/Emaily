const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passort-google-oauth20').Strategy;
const app = express();

// * Route handler
app.get('/', (req, res) => res.send('Hello World!'));

// * Google OAuth
// * This new GoogleStrategy creates a new instance of the Google passport strategy
// passport.use(new GoogleStrategy());

const PORT = process.env.PORT || 8000;
app.listen(PORT);
