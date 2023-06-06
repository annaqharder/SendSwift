const express = require("express");
require("./services/passport");
const authRoutes = require("./routes/authRoutes");

const app = express();
authRoutes(app);

const PORT = process.env.PORT || 5001;
app.listen(PORT);
