const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");
const keys = require("./config/keys");
require("./models/User"); // needs to be before line 4
require("./services/passport");
require("./models/Survey");
const authRoutes = require("./routes/authRoutes");
const billingRoutes = require("./routes/billingRoutes");
const surveyRoutes = require("./routes/surveyRoutes");
const bodyParser = require("body-parser");

mongoose.connect(keys.mongoURI);

const app = express();

app.use(bodyParser.json());
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
billingRoutes(app);
surveyRoutes(app);

if (process.env.NODE_ENV === "production") {
  // Express will serve up production assets
  // like main.js file, or main.css file
  app.use(express.static("client/built"));

  // Express will serve up the index.html file
  // if it doesn't recognize the route
  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 5001;
app.listen(PORT);
