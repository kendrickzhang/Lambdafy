// Require dependencies
const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');

// Instantiate Express app
const app = express();

// Specify PORT environment
const PORT = process.env.PORT || 3000;

// Use middleware
app.use(logger('dev'));
// app.use(express.static(''));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Test path
app.get('/', (req, res) => {
    res.json({msg: 'Hello Kendrick!'});
});

// Listen on PORT
app.listen(PORT , () => {
    console.log(`Listening on ${PORT}, in ${app.get('env')} mode.`); 
});

module.exports = app;
