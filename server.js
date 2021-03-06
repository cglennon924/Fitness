const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const path = require("path");

// Creating a PORT and requiring models to sync
const PORT = process.env.PORT || 3000;
const db = require("./models");

const app = express();
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

//Putting Mongodb in heroku
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";

mongoose.connect(MONGODB_URI,{ useNewUrlParser: true, useUnifiedTopology: true })
.then(()=> console.log('Connection Successful!!'))
.catch(err => console.error(err));

//Requiring the API and HTML routes
require("./routes/html_routes.js")(app);
require("./routes/api_routes.js")(app);

//Saying what the app is running on
app.listen(PORT, () => {
    console.log(`App running on port http://localhost:${PORT}`);
  });