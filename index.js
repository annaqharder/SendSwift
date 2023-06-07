const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");
const keys = require("./config/keys");
require("./models/User"); // needs to be before line 4
require("./services/passport");
const authRoutes = require("./routes/authRoutes");

mongoose.connect(keys.mongoURI);

const app = express();

app.use(
  cookieSession({
    // 30 days -> max time the cookie will last
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey],
  })
);

app.use(passport.initialize());
app.use(passport.session());

authRoutes(app);

const PORT = process.env.PORT || 5001;
app.listen(PORT);
