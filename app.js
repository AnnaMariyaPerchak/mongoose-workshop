const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');

const api = require('./routes');
const app = express();


const mongoose = require('mongoose');
const book = require('./models/book');
const dev_db_url = 'mongodb://127.0.0.1:27017/mongoose_workshop';
const mongoDB = process.env.MONGODB_URI || dev_db_url;
const dbOptions = { useUnifiedTopology: true, useNewUrlParser: true};
mongoose.connect(mongoDB, dbOptions);
mongoose.Promise = global.Promise;

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/api', api);

// app.use(req, res, next)

// error-handler settings
require('./config/error-handler')(app)

const port = 3030;

app.listen(port, () => {
    console.log(`Server is up and running on port ${port} `);
});
