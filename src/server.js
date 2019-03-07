const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3001;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// Define middleware here                     
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/TexasScramble";

// mongoose.connect(MONGODB_URI, { useCreateIndex: true, useNewUrlParser: true});
mongoose.connect(MONGODB_URI, { useCreateIndex: true, useNewUrlParser: true});

// Syncing our sequelize models and then starting our Express app
// =============================================================

app.listen(PORT, function() {
  console.log(`App listening on PORT ${PORT}`);
});
