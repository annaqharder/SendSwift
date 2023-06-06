const express = require("express");
const mongoose = require("mongoose");
require("./services/passport");
require("./models/user");
const authRoutes = require("./routes/authRoutes");
const keys = require("./config/keys");

mongoose.connect(keys.mongoURI);

const app = express();
authRoutes(app);

const PORT = process.env.PORT || 5001;
app.listen(PORT);
