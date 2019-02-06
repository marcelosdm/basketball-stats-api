const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

// Initialize the app
const app = express();
app.use(express.json());
app.use(cors());

// Initialize DB
// mongoose.connect('mongodb://localhost:27017/basketballdb', {
//   useNewUrlParser: true
// });
// requireDir('./src/models');

const url = process.env.DATABASE_URL;
mongoose.Promise = global.Promise;
mongoose.connect(url);

requireDir('./src/models');

// Routes
app.use('/api', require('./src/routes'));

app.listen(3001);
