const express = require("express");
const mongoose = require("mongoose");
require("./models/user"); // needs to be before line 4
require("./services/passport");
const authRoutes = require("./routes/authRoutes");
const keys = require("./config/keys");

mongoose.connect(keys.mongoURI);

const app = express();
authRoutes(app);

const PORT = process.env.PORT || 5001;
app.listen(PORT);
