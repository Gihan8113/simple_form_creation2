const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3001;

const MONGODB_URI = 'mongodb+srv://gihanmg8113:5mQciYpMe9FHLPP1@form1.ufbdbxi.mongodb.net/';

mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Error connecting to MongoDB:', err));
  