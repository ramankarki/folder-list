const express = require("express");
const cookieSession = require("cookie-session");
const passport = require("passport");
const keys = require("./config/keys");
const googleAuth = require("./routes/googleAuth");

const app = express();

// global middleware
app.use(express.json());

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey],
  })
);

app.use(passport.initialize());
app.use(passport.session());

// api routes
app.use("/auth/google", googleAuth);

// serve static build files in production

module.exports = app;
