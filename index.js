const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const app = express();

// * Route handler
// app.get('/', (req, res) => res.send({ hi: 'there' }));

// * Google OAuth
// * This new GoogleStrategy creates a new instance of the Google passport strategy
passport.use(new GoogleStrategy());

const PORT = process.env.PORT || 8000; // * Dynamic PORT Binding
app.listen(PORT);
