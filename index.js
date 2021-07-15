const express = require('express');
const app = express();

// * Route handler
app.get('/', (req, res) => res.send('Hello World!'));

const PORT = process.env.PORT || 8000; // * Dynamic PORT Binding
app.listen(PORT);
