const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

// Initialize the app
const app = express();
app.use(express.json());
app.use(cors());

// Initialize DB

mongoose.connect(process.env.DATABASE_URL);
mongoose.Promise = global.Promise;

requireDir('./src/models');

// Routes
app.use('/api', require('./src/routes'));

app.listen(process.env.PORT || 3000);
