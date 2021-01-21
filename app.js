const express = require("express");
const cookieSession = require("cookie-session");
const passport = require("passport");
const morgan = require("morgan");
const mongoSanitize = require("express-mongo-sanitize");
const xss = require("xss-clean");
const hpp = require("hpp");

const keys = require("./config/keys");
const googleAuth = require("./routes/googleAuth");
const folder = require("./routes/folder");
const globalErrorHandler = require("./controller/globalError");
const OperationalError = require("./utils/OperationalError");

const app = express();

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// global middleware
app.use(express.json());

// data sanitization against NoSQL query
app.use(mongoSanitize());

// data sanitization
app.use(xss());

// prevent parameter pollution
app.use(
  hpp({
    whitelist: ["duration"],
  })
);

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
app.use("/api/v1/folder", folder);

// serve static build files in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static(__dirname + "/client/build"));

  app.get("/dashboard", (req, res) => {
    if (!req.user) {
      return res.redirect("/");
    }
    res.sendFile(__dirname + "/client/build/index.html");
  });

  app.get("/dashboard/:id", (req, res) => {
    if (!req.user) {
      return res.redirect("/");
    }
    res.sendFile(__dirname + "/client/build/index.html");
  });

  app.all("*", (req, res) => {
    if (!req.user) {
      return res.redirect("/");
    }
    res.sendFile(__dirname + "/client/build/index.html");
  });
}

// global error handler
app.use(globalErrorHandler);

module.exports = app;
