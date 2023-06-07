const passport = require("passport");

module.exports = (app) => {
  // route handler to Google OAuth
  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"],
    })
  );
  // route handler for google/auth/callback
  app.get("/auth/google/callback", passport.authenticate("google"));

  // route to log out user

  //
  app.get("/api/current_user", (req, res) => {
    res.send(req.user);
  });
};
