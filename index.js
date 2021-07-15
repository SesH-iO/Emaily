const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passort-google-oauth20').Strategy;
const app = express();

console.log('Hello');
console.log('Hello');
console.log('Hello');
console.log('Hello');
console.log('Hello');

// * Route handler
// app.get('/', (req, res) => {
//   res.send('GET request to the homepage')
// })

// * Google OAuth
// * This new GoogleStrategy creates a new instance of the Google passport strategy
passport.use(new GoogleStrategy());

const PORT = process.env.PORT || 5000; // * Dynamic PORT Binding
app.listen(PORT);
